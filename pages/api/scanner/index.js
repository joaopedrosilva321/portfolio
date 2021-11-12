const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const minify = require("html-minifier").minify

// const { Storage } = require('@google-cloud/storage');

// firebase
var admin = require("firebase-admin");
var serviceAccount = require(`../../../key/serviceAccountKey.json`);

const bucketUrl = 'gratis-artes-1602417255838.appspot.com';

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket: bucketUrl,
    });
}


const bucket = admin.storage().bucket();

export default async (req, res) => { // 2

    let { url } = req.query


    function isValidURL(input) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(input);
    }

    // Async function which scrapes the data
    async function scrapeData() {
        try {
            if (!url) throw 'Url não digitada';


            if (!isValidURL(url)) throw "Url invalida"

            if (req.method != 'GET') throw "not is method GET"

            // if (req.headers.host !== 'localhost:3000') throw "Não é o nosso site"


            // // Fetch HTML of the page we want to scrape
            const myHeaders = new Headers();
            myHeaders.append('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0')
            myHeaders.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
            myHeaders.append("Access-Control-Allow-Origin", "*")

            const myInit = {
                headers: myHeaders,
            };


            if (!url.match('(^[a-z]+[:])')) {
                url = "http://" + url
            }


            try {

                var response = await fetch(url, myInit)
                // var response = await axios.get('https://hajuda.me')

            } catch (e) {

                throw 'error ao buscar o site'

            }


            const data = await response.text()


            // Load HTML we fetched in the previous line
            const $ = cheerio.load(data);


            /* media lazy */
            const medias = $('img, iframe');

            for (const media of medias) {

                $(media).attr('loading', 'lazy');

                if (media.name === 'img') {
                    $(media).attr("decoding", 'async')
                }

            }

            /* block css */
            const links = $('link[href][rel="stylesheet"]')

            for (const link of links) {
                /* removendo o block de Styles */
                $(link).attr("media", 'print').attr("onload", "this.media='all'; this.onload = null");
                $('head').append(link);
                /* removendo o block de Icons */
                if (link.attribs.href.match('fontawesome.js|fontawesome.min')) {
                    link.attribs.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/" + path.basename(link.attribs.href)
                }

                /* removendo o block de Fonts */
                if (link.attribs.href.match('fonts.googleapis')) {
                    // Não verificou se existe "display=swap", re analize
                    if (link.attribs.href.search("display=swap"))
                        link.attribs.href += "&display=swap"
                    // $('head').insert(5, `<link rel="preload" href="${link.attribs.href}" as="font" crossorigin>`)
                    $('head').splice(5, 0, `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> `)
                }

            }

            const cssPrimarys = $('*[class]')

            let classPrimary = []

            for (const cssPrimary of cssPrimarys) {

                let data = cssPrimary.attribs.class.split(' ');

                let totalLenght = classPrimary.length;

                for (let i = 0; i < data.length; i++) {

                    if (!data[i]) {
                        continue;
                    }

                    classPrimary[totalLenght + i] = data[i]
                }
            }



            let counts = {};

            for (let index = 0; index < classPrimary.length; index++) {

                let key = classPrimary[index];

                counts[key] = counts[key] ? counts[key] + 1 : 1;

            }



            const arrayCssPrimary = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10)


            const queryCssPrimary = Object.values(arrayCssPrimary).map(e => e[0]).join('|');


            const mixPromiseArray = [];

            for (let i = 0; i < links.length; i++) {

                if (isValidURL(links[i].attribs.href)) {
                    mixPromiseArray.push(fetch(links[i].attribs.href))
                }

            }


            const responseCssPromise = await Promise.all(mixPromiseArray)

            for await (const e of responseCssPromise) {

                if(e.status != 200) return

                const url = e.url

                const data = await e.text()

                if (data.match(queryCssPrimary)) {
                    
                    $(`<link rel="preload" href="${url}" as="style" />`).insertBefore('title')
                }

            }

            

            /* movendo tag script */
            const scripts = $('script[src]');
            let lengthJquery = false;
            for (const script of scripts) {

                $(script).removeAttr("async").attr("defer", '');

                if (script.attribs.src.match('jquery.js|jquery.min')) {
                    // console.log(script.attribs.src)
                    if (!lengthJquery) {
                        script.attribs.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
                        $(`<link rel="preload" href="${script.attribs.src}"  />`).insertAfter('title')
                        lengthJquery = true;
                    } else {
                        script = null
                    }
                }

                if(script.attribs.src.match('facebook-embed.js|facebook-embed.min.js')){
                    $(script).removeAttr("async").attr("defer", '');
                }

                $('head').append(script);
            }

            const minified = minify($.html(), {
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeEmptyElements: true,
                minifyCSS: true,
                minifyURLs: true,
                minifyCSS: true,
            })

            res.send(minified)
            const token = Math.random().toString(36).substr(2);

            const test = new Promise((resolve, reject) => {

                const file = bucket.file(`${token}.html`)
                const stream = file.createWriteStream({
                    metadata: {
                        contentType: 'text/html',
                        // contentEncoding: 'gzip',
                    },
                    // contentType: 'text/html; charset=utf-8',
                })

                stream.on("error", (e) => {
                    throw 'erro ao enviar para o servidor'
                    reject
                });

                stream.on("finish", async () => {
                    //tornar o arquivo publico
                    await file.makePublic();

                    //obter a url publica
                    resolve(`https://storage.googleapis.com/${bucketUrl}/${token}.html`)

                });

                stream.end(Buffer.from(minified))
            })

            let urlPublicHtml = await test;


            var responseGoogle;

            try {
                responseGoogle = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?strategy=mobile&url=${urlPublicHtml}&key=AIzaSyAsCedc8UwDt3aHNMMFFXpf3GHYkzV67WU&locale=pt-BR`, myInit);

            } catch (e) {

                throw 'erro ao buscar dados no google speed page'

            }

            if (responseGoogle.status != 200) throw 'erro na busca de dados na google pagespeed'

            const lighthouse = await responseGoogle.json();

            const lighthouseResult = lighthouse.lighthouseResult


            const dataGoogle = {
                'audits': {
                    'score': lighthouseResult.categories.performance.score ? lighthouseResult.categories.performance.score : '',
                    'first-contentful-paint': {
                        'id': lighthouseResult.audits['first-contentful-paint'].id ? lighthouseResult.audits['first-contentful-paint'].id : '',
                        'title': lighthouseResult.audits['first-contentful-paint'].title ? lighthouseResult.audits['first-contentful-paint'].title : '',
                        'score': lighthouseResult.audits['first-contentful-paint'].score ? lighthouseResult.audits['first-contentful-paint'].score : '',
                        'displayValue': lighthouseResult.audits['first-contentful-paint'].displayValue ? lighthouseResult.audits['first-contentful-paint'].displayValue : '',
                    },
                    'speed-index': {
                        'id': lighthouseResult.audits['speed-index'].id ? lighthouseResult.audits['speed-index'].id : '',
                        'title': lighthouseResult.audits['speed-index'].title ? lighthouseResult.audits['speed-index'].title : '',
                        'score': lighthouseResult.audits['speed-index'].score ? lighthouseResult.audits['speed-index'].score : '',
                        'displayValue': lighthouseResult.audits['speed-index'].displayValue ? lighthouseResult.audits['speed-index'].displayValue : '',
                    },
                    'largest-contentful-paint': {
                        'id': lighthouseResult.audits['largest-contentful-paint'].id ? lighthouseResult.audits['largest-contentful-paint'].id : '',
                        'title': lighthouseResult.audits['largest-contentful-paint'].title ? lighthouseResult.audits['largest-contentful-paint'].title : '',
                        'score': lighthouseResult.audits['largest-contentful-paint'].score ? lighthouseResult.audits['largest-contentful-paint'].score : '',
                        'displayValue': lighthouseResult.audits['largest-contentful-paint'].displayValue ? lighthouseResult.audits['largest-contentful-paint'].displayValue : '',
                    },
                    'interactive': {
                        'id': lighthouseResult.audits['interactive'].id ? lighthouseResult.audits['interactive'].id : '',
                        'title': lighthouseResult.audits['interactive'].title ? lighthouseResult.audits['interactive'].title : '',
                        'score': lighthouseResult.audits['interactive'].score ? lighthouseResult.audits['interactive'].score : '',
                        'displayValue': lighthouseResult.audits['interactive'].displayValue ? lighthouseResult.audits['interactive'].displayValue : '',
                    },
                    'total-blocking-time': {
                        'id': lighthouseResult.audits['total-blocking-time'].id ? lighthouseResult.audits['total-blocking-time'].id : '',
                        'title': lighthouseResult.audits['total-blocking-time'].title ? lighthouseResult.audits['total-blocking-time'].title : '',
                        'score': lighthouseResult.audits['total-blocking-time'].score ? lighthouseResult.audits['total-blocking-time'].score : '',
                        'displayValue': lighthouseResult.audits['total-blocking-time'].displayValue ? lighthouseResult.audits['total-blocking-time'].displayValue : '',
                    },
                    'cumulative-layout-shift': {
                        'id': lighthouseResult.audits['cumulative-layout-shift'].id ? lighthouseResult.audits['cumulative-layout-shift'].id : '',
                        'title': lighthouseResult.audits['cumulative-layout-shift'].title ? lighthouseResult.audits['cumulative-layout-shift'].title : '',
                        'score': lighthouseResult.audits['cumulative-layout-shift'].score ? lighthouseResult.audits['cumulative-layout-shift'].score : '',
                        'displayValue': lighthouseResult.audits['cumulative-layout-shift'].displayValue ? lighthouseResult.audits['cumulative-layout-shift'].displayValue : '',
                    },
                },
                'imagens': {
                    'Screenshot Thumbnails': lighthouseResult.audits['screenshot-thumbnails'].details.items ? lighthouseResult.audits['screenshot-thumbnails'].details.items : '',
                    // 'Full Page Screenshot': lighthouse ? lighthouseResult.audits['full-page-screenshot'].details.screenshot,
                    'Final Screenshot': lighthouseResult.audits['final-screenshot'].details.data ? lighthouseResult.audits['final-screenshot'].details.data : '',
                },
            }


            res.status(200).send(dataGoogle)



        } catch (err) {
            res.status(400).send({ 'reason': err, 'origem': 'scanner' });
        }
    }
    // Invoke the above function
    scrapeData();
}


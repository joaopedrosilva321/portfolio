const fetch = require("node-fetch");

function isValidURL(input) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(input);
}

export default async (req, res) => {

    try {

        if (req.method != 'GET') throw "not is method GET"

        let { url: uri } = req.query;

        if (!uri) throw 'Url não digitada';

        if (!uri.match('(^[a-z]+[:])')) {
            uri = "http://" + uri
        }

        if (!isValidURL(uri)) throw "Url invalida"


        const myHeaders = new Headers();
        myHeaders.append('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0')
        myHeaders.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8')
        myHeaders.append("Access-Control-Allow-Origin", "*")

        const myInit = {
            headers: myHeaders,
        };

        let response;
        try {
            const queryString = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?strategy=mobile&url=${uri}&key=AIzaSyAsCedc8UwDt3aHNMMFFXpf3GHYkzV67WU&locale=pt-BR`;
            response = await fetch(queryString, myInit)
        } catch (e) {
            throw 'erro ao consultar o google page speed'
        }

        if (response.status != 200) throw 'erro na busca de dados na google pagespeed'

        const lighthouse = await response.json();


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
                'screenshot-thumbnails': lighthouseResult.audits['screenshot-thumbnails'].details.items ? lighthouseResult.audits['screenshot-thumbnails'].details.items : '',
                // 'Full Page Screenshot': lighthouse ? lighthouseResult.audits['full-page-screenshot'].details.screenshot,
                'final-screenshot': lighthouseResult.audits['final-screenshot'].details.data ? lighthouseResult.audits['final-screenshot'].details.data : '',
            },
        }


        res.json(dataGoogle)
    } catch (err) {
        res.status(400).send({ 'reason': err, 'origem': 'scanner' });
    }

}
export const filterGooglePageSpeed = (lighthouse) => {

    return {
        'audits': {
            'score': lighthouse.lighthouseResult.categories.performance.score,
            'first-contentful-paint': {
                'id': lighthouse.lighthouseResult.audits['first-contentful-paint'].id,
                'title': lighthouse.lighthouseResult.audits['first-contentful-paint'].title,
                'score': lighthouse.lighthouseResult.audits['first-contentful-paint'].score,
                'displayValue': lighthouse.lighthouseResult.audits['first-contentful-paint'].displayValue,
            },
            'speed-index': {
                'id': lighthouse.lighthouseResult.audits['speed-index'].id,
                'title': lighthouse.lighthouseResult.audits['speed-index'].title,
                'score': lighthouse.lighthouseResult.audits['speed-index'].score,
                'displayValue': lighthouse.lighthouseResult.audits['speed-index'].displayValue,
            },
            'largest-contentful-paint': {
                'id': lighthouse.lighthouseResult.audits['largest-contentful-paint'].id,
                'title': lighthouse.lighthouseResult.audits['largest-contentful-paint'].title,
                'score': lighthouse.lighthouseResult.audits['largest-contentful-paint'].score,
                'displayValue': lighthouse.lighthouseResult.audits['largest-contentful-paint'].displayValue,
            },
            'interactive': {
                'id': lighthouse.lighthouseResult.audits['interactive'].id,
                'title': lighthouse.lighthouseResult.audits['interactive'].title,
                'score': lighthouse.lighthouseResult.audits['interactive'].score,
                'displayValue': lighthouse.lighthouseResult.audits['interactive'].displayValue,
            },
            'total-blocking-time': {
                'id': lighthouse.lighthouseResult.audits['total-blocking-time'].id,
                'title': lighthouse.lighthouseResult.audits['total-blocking-time'].title,
                'score': lighthouse.lighthouseResult.audits['total-blocking-time'].score,
                'displayValue': lighthouse.lighthouseResult.audits['total-blocking-time'].displayValue,
            },
            'cumulative-layout-shift': {
                'id': lighthouse.lighthouseResult.audits['cumulative-layout-shift'].id,
                'title': lighthouse.lighthouseResult.audits['cumulative-layout-shift'].title,
                'score': lighthouse.lighthouseResult.audits['cumulative-layout-shift'].score,
                'displayValue': lighthouse.lighthouseResult.audits['cumulative-layout-shift'].displayValue,
            },
        },
        'imagens': {
            'Screenshot Thumbnails': lighthouse.lighthouseResult.audits['screenshot-thumbnails'].details.items,
            // 'Full Page Screenshot': lighthouse.lighthouseResult.audits['full-page-screenshot'].details.screenshot,
            'Final Screenshot': lighthouse.lighthouseResult.audits['final-screenshot'].details.data
        }
    }
    
}
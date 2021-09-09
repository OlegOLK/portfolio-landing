export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
export const HJ_TRACKING_ID = process.env.NEXT_PUBLIC_HOTJAR_ID
export const OPT_TRACKING_ID = process.env.NEXT_PUBLIC_OPTIMIZE_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}
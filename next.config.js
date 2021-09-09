const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    env: {
        "NEXT_PUBLIC_HOTJAR_ID": "1",
        "NEXT_PUBLIC_OPTIMIZE_ID": "1"
    }
})
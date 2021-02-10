;(function () {
    WebFontConfig = {
        active: function () {
            sessionStorage.fonts = true
        },
        google: {
            families: [
                'Rubik:300,400,400i,500,600,700',
                'Karla:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800',
            ],
        },
        timeout: 2000,
    }
    ;(function (d) {
        var wf = d.createElement('script'),
            s = d.scripts[0]
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        wf.async = true
        s.parentNode.insertBefore(wf, s)
    })(document)
})()

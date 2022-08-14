//dependencies
const React = require("react");

function Default(html) {
    return (
        <html>
            <head>
                <title>{"Title" || html.title}</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//export
module.exports = Default;
import React from "react"

export function Jsx() {

    const e1 = (
        <div>
            <h1>JSX Details
            </h1>
            <p>
                jsx is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.
            </p>
            <p>
                JSX produces React “elements”. We will explore this in more detail later.
            </p>
            <p>
                JSX is not required to use React, but it is recommended.
            </p>
        </div>
    )

    const e2 = React.createElement('div', null, [
        React.createElement('h1', null, 'JSX Details'),
        React.createElement('p', null, 'jsx is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.'),
        React.createElement('p', null, 'JSX produces React “elements”. We will explore this in more detail later.'),
        React.createElement('p', null, 'JSX is not required to use React, but it is recommended.'),
    ])

    return e1
}
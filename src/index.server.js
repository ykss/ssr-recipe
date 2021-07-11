import React from 'react'
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>서버사이드렌더링</div>
)
console.log(html)
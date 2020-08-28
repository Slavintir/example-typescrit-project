"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const fs_1 = require("fs");
const path_1 = require("path");
const INDEX_HTML = path_1.resolve('public', 'index.html');
const MAIN_CSS = path_1.resolve('public', 'main.css');
const FAVICON = path_1.resolve('public', 'favicon.ico');
const HOSTNAME = '164.90.179.76';
const PORT = 8080;
async function main() {
    const index_html = fs_1.createReadStream(INDEX_HTML);
    const main_css = fs_1.createReadStream(MAIN_CSS);
    const favicon = fs_1.createReadStream(FAVICON);
    const server = http_1.createServer((req, res) => {
        switch (req === null || req === void 0 ? void 0 : req.url) {
            case '/':
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end(index_html);
                break;
            case '/main.css':
                res.writeHead(200, { 'content-type': 'text/css' });
                res.end(main_css);
                break;
            case '/favicon':
                res.writeHead(200, { 'content-type': 'image/x-icon' });
                res.end(favicon);
                break;
            default:
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.end('Page not found.');
                break;
        }
    });
    server.listen(PORT, HOSTNAME, () => {
        console.log(`Server started at ${HOSTNAME}:${PORT}`);
    });
}
main();
//# sourceMappingURL=index.js.map
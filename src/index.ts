import { Server, IncomingMessage, ServerResponse, createServer } from 'http';
import { promises as fs, createReadStream } from 'fs';
import { resolve } from 'path';

const INDEX_HTML: string = resolve('public', 'index.html');
const MAIN_CSS: string = resolve('public', 'main.css');
const FAVICON: string = resolve('public', 'favicon.ico');

const HOSTNAME: string = '164.90.179.76';
const PORT: number = 8080;

async function main() {
    const index_html = createReadStream(INDEX_HTML)
    const main_css = createReadStream(MAIN_CSS);
    const favicon = createReadStream(FAVICON);

    const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
        switch (req?.url) {
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
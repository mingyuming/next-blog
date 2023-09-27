
const express = require('express');
const next = require('next');
const {createProxyMiddleware} = require('http-proxy-middleware');

const DEV_PROXY = {
    '/api': {
        target: 'http://39.101.169.247/',
        changeOrigin: true,
        pathRewrite: {'^/': ''},
    },
};

const PORT = parseInt(process.env.PORT, 10) || 3000; // 端口
const env = process.env.NODE_ENV;
const dev = env !== 'production';

const app = next({
    dir: '.', // base directory where everything is, could move to src later
    dev,
});

const handle = app.getRequestHandler();
const server = express();

app.prepare()
    .then(() => {
        // 接口地址代理
        if (dev && DEV_PROXY) {
           try {
            Object.keys(DEV_PROXY).forEach(context => {
                server.use(context, createProxyMiddleware(DEV_PROXY[context]));
            });
           } catch (error) {
                console.log(error);
           }
        }

        // Default catch-all handler to allow Next.js to handle all other routes
        server.all('*', (req, res) => handle(req, res));

        server.listen(PORT, () => {
            console.log(`The React Next.js app is listening on port ${PORT} [${env}]!\n`);
        });
    })
    .catch(error => {
        console.log('An error occurred, unable to start the server');
        console.log(error);
    });

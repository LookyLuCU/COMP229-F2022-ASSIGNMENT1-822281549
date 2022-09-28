//previously used to connect to connect with "require"
// const connect = require('connect');

//import express using es6+
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES Modules fix for _dirname
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));

//instantiate app server
const app = express();

//customer middleware (function)
function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
}

//customer middleware (function)
function goodbyeWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye World')
}

//app.use('/', helloWorld);
app.use('/hello', helloWorld);
app.use('/bye', goodbyeWorld);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
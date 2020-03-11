"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _Queue = require('./lib/Queue'); var _Queue2 = _interopRequireDefault(_Queue);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
    constructor() {
        this.server = _express2.default.call(void 0, );

        this.queue();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(_cors2.default.call(void 0, ));
        this.server.use(_express2.default.json());
    }

    routes() {
        this.server.use(_routes2.default);
    }

    queue() {
        _Queue2.default.processQueue();
    }
}

exports. default = new App().server;

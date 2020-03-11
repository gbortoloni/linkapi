"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _OportunidadeController = require('./app/controllers/OportunidadeController'); var _OportunidadeController2 = _interopRequireDefault(_OportunidadeController);

const routes = new (0, _express.Router)();

routes.post('/webhook/oportunidades', _OportunidadeController2.default.store);

exports. default = routes;

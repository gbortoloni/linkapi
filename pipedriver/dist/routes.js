"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _PipedriveController = require('./app/controllers/PipedriveController'); var _PipedriveController2 = _interopRequireDefault(_PipedriveController);

const routes = new (0, _express.Router)();

routes.post('/webhook/pipedrive', _PipedriveController2.default.store);

exports. default = routes;

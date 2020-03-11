"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Oportunidades = require('../jobs/Oportunidades'); var _Oportunidades2 = _interopRequireDefault(_Oportunidades);
var _Queue = require('../../lib/Queue'); var _Queue2 = _interopRequireDefault(_Queue);

class OportunidadeController {
    async store(req, res) {
        const oportunidade = req.body;

        await _Queue2.default.add(_Oportunidades2.default.key, { oportunidade });

        return res.json(oportunidade);
    }
}

exports. default = new OportunidadeController();

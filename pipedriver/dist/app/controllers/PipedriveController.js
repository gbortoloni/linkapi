"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PipedriverController {
    async store(req, res) {
        console.log(req.body);

        return res.json();
    }
}

exports. default = new PipedriverController();

class PipedriverController {
    async index(req, res) {
        return res.json({ mensagem: 'ola' });
    }
    async store(req, res) {
        console.log(req.body);

        return res.json();
    }
}

export default new PipedriverController();

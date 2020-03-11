class OportunidadeController {
    async store(req, res) {
        console.log(req.body);

        return res.json();
    }
}

export default new OportunidadeController();

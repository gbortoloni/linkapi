class PipedriverController {
    async store(req, res) {
        console.log(req.body);

        return res.json();
    }
}

export default new PipedriverController();

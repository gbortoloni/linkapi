import Oportunidades from '../jobs/Oportunidades';
import Queue from '../../lib/Queue';

class OportunidadeController {
    async store(req, res) {
        const oportunidade = req.body;

        await Queue.add(Oportunidades.key, { oportunidade });

        return res.json(oportunidade);
    }
}

export default new OportunidadeController();

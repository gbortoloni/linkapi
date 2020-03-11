class Oportunidades {
    get key() {
        return 'Oportunidades';
    }

    async handle({ data }) {
        return data;
    }
}

export default new Oportunidades();

"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _beequeue = require('bee-queue'); var _beequeue2 = _interopRequireDefault(_beequeue);

var _Oportunidades = require('../app/jobs/Oportunidades'); var _Oportunidades2 = _interopRequireDefault(_Oportunidades);
var _redis = require('../config/redis'); var _redis2 = _interopRequireDefault(_redis);

const jobs = [_Oportunidades2.default];

class Queue {
    constructor() {
        this.queues = {};

        this.init();
    }

    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new (0, _beequeue2.default)(key, {
                    redis: _redis2.default,
                }),
                handle,
            };
        });
    }

    add(queue, job) {
        return this.queues[queue].bee.createJob(job).save();
    }

    processQueue() {
        jobs.forEach(job => {
            const { bee, handle } = this.queues[job.key];
            bee.on('failed', this.handleFailure).process(handle);
        });
    }

    handleFailure(job, err) {
        console.log(`Queue ${job.queue.name}: FAILED`, err);
    }
}

exports. default = new Queue();

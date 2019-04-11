/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    global:false
    require:false
*/

(() => {
    const { Attribute, Label } = require('./labels');

    class Base {
        constructor() {
            this.annotations = {
                upload: global.cvat.Task.annotations.upload.bind(this),
                save: global.cvat.Task.annotations.save.bind(this),
                clear: global.cvat.Task.annotations.clear.bind(this),
                dump: global.cvat.Task.annotations.dump.bind(this),
                statistics: global.cvat.Task.annotations.statistics.bind(this),
                put: global.cvat.Task.annotations.put.bind(this),
                get: global.cvat.Task.annotations.get.bind(this),
                search: global.cvat.Task.annotations.search.bind(this),
                select: global.cvat.Task.annotations.select.bind(this),
            };

            this.frames = {
                get: global.cvat.Task.frames.get.bind(this),
            };

            this.logs = {
                put: global.cvat.Task.logs.put.bind(this),
                save: global.cvat.Task.logs.save.bind(this),
            };

            this.actions = {
                undo: global.cvat.Task.actions.undo.bind(this),
                redo: global.cvat.Task.actions.redo.bind(this),
                clear: global.cvat.Task.actions.clear.bind(this),
            };

            this.events = {
                subscribe: global.cvat.Task.events.subscribe.bind(this),
                unsubscribe: global.cvat.Task.events.unsubscribe.bind(this),
            };
        }
    }

    class Job extends Base {
        constructor(...args) {
            super(...args);
            this.b = 0;
        }
    }

    class Task extends Base {
        constructor(...args) {
            super(...args);
            this.c = 0;
        }
    }

    module.exports = {
        Task,
        Job,
    };
})();

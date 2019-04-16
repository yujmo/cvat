/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    require:false
    global:false
*/

(() => {
    const PluginRegistry = require('./plugins');

    const annotationsModule = {
        async upload(file) {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.upload, file);
            return result;
        },

        async save() {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.save);
            return result;
        },

        async clear() {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.clear);
            return result;
        },

        async dump() {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.dump);
            return result;
        },

        async statistics() {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.statistics);
            return result;
        },

        async put(arrayOfObjects = []) {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.put, arrayOfObjects);
            return result;
        },

        async get(frame, filter = {}) {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.get, frame, filter);
            return result;
        },

        async search(filter, frameFrom, frameTo) {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.search, filter, frameFrom, frameTo);
            return result;
        },

        async select(frame, x, y) {
            const result = await PluginRegistry
                .apiWrapper.call(this, annotationsModule.select, frame, x, y);
            return result;
        },
    };

    const framesModule = {
        async get(frame) {
            const result = await PluginRegistry
                .apiWrapper.call(this, framesModule.get, frame);
            return result;
        },
    };

    const logsModule = {
        async put(logType, details) {
            const result = await PluginRegistry
                .apiWrapper.call(this, logsModule.put, logType, details);
            return result;
        },
        async save() {
            const result = await PluginRegistry
                .apiWrapper.call(this, logsModule.save);
            return result;
        },
    };

    const actionsModule = {
        async undo(count) {
            const result = await PluginRegistry
                .apiWrapper.call(this, actionsModule.undo, count);
            return result;
        },
        async redo(count) {
            const result = await PluginRegistry
                .apiWrapper.call(this, actionsModule.redo, count);
            return result;
        },
        async clear() {
            const result = await PluginRegistry
                .apiWrapper.call(this, actionsModule.clear);
            return result;
        },
    };

    const eventsModule = {
        async subscribe(eventType, callback) {
            const result = await PluginRegistry
                .apiWrapper.call(this, eventsModule.subscribe, eventType, callback);
            return result;
        },
        async unsubscribe(eventType, callback = null) {
            const result = await PluginRegistry
                .apiWrapper.call(this, eventsModule.unsubscribe, eventType, callback);
            return result;
        },
    };

    const cvat = {
        server: {
            async about() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.server.about);
                return result;
            },
            async share(directory = '/') {
                const result = await PluginRegistry
                    .apiWrapper(cvat.server.share, directory);
                return result;
            },
        },
        tasks: {
            async get(filter = {}) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.tasks.get, filter);
                return result;
            },
        },
        jobs: {
            async get(filter = {}) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.jobs.get, filter);
                return result;
            },
        },
        users: {
            async get(filter = {}) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.users.get, filter);
                return result;
            },
        },
        plugins: {
            async list() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.plugins.list);
                return result;
            },
            async register() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.plugins.register);
                return result;
            },
        },
        config: {
            host: 'http://localhost:7000',
            api: 'v1',
        },
        client: {
            version: '1.0.0',
        },
        Job: {
            async save() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.Job.save);
                return result;
            },
            annotations: Object.freeze(annotationsModule),
            frames: Object.freeze(framesModule),
            logs: Object.freeze(logsModule),
            actions: Object.freeze(actionsModule),
            events: Object.freeze(eventsModule),
        },

        Task: {
            async delete() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.Task.delete);
                return result;
            },
            async save() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.Task.save);
                return result;
            },
            annotations: Object.freeze(annotationsModule),
            frames: Object.freeze(framesModule),
            logs: Object.freeze(logsModule),
            actions: Object.freeze(actionsModule),
            events: Object.freeze(eventsModule),
        },
    };

    cvat.server = Object.freeze(cvat.server);
    cvat.tasks = Object.freeze(cvat.tasks);
    cvat.jobs = Object.freeze(cvat.jobs);
    cvat.users = Object.freeze(cvat.users);
    cvat.plugins = Object.freeze(cvat.plugins);
    cvat.client = Object.freeze(cvat.client);
    cvat.Job = Object.freeze(cvat.Job);
    cvat.Task = Object.freeze(cvat.Task);

    const implementation = require('./api-implementation');
    global.cvat = Object.freeze(implementation(cvat));
})();

async function test() {
    const task = (await global.cvat.tasks.get())[0];
    const job = (await global.cvat.jobs.get())[0];
    const user = (await global.cvat.users.get())[0];
    console.log(task);
    console.log(job);
    console.log(user);
    console.log(await task.annotations.upload());
    console.log(await task.annotations.save());
    console.log(await task.annotations.clear());
    console.log(await task.annotations.dump());
    console.log(await task.annotations.statistics());
    console.log(await task.annotations.put([]));
    console.log(await task.annotations.get(0, { id: 0 }));
    console.log(await task.annotations.search({ id: 0 }, 0, 10));
    console.log(await task.annotations.select(0, 10, 20));
    console.log(await task.frames.get(0));
    task.frames.get(0).then(im => im.image()).then(im => console.log(im));
    console.log(await task.logs.put('someLog'));
    console.log(await task.logs.save());
    console.log(await task.actions.undo());
    console.log(await task.actions.redo());
    console.log(await task.actions.clear());
    console.log(await task.events.subscribe('eventType'));
    console.log(await task.events.unsubscribe('eventType'));
}

//test();

const serverProxy = require('./server-proxy');

// TODO: Server proxy
// TODO: Plugins installation
// TODO: Documentation with http://yui.github.io/yuidoc/syntax/index.html

/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    require:false
    global:false
*/

/**
    * External API which is should used for an integration
    * @module API
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

    /**
        * API entrypoint
        * @namespace cvat
        * @memberof module:API
    */
    const cvat = {
        /**
            * Namespace is used for an interaction with a server
            * @namespace server
            * @memberof module:API.cvat
        */
        server: {
            /**
                * Method returns some information about the annotation tool
                * @method about
                * @memberof module:API.cvat.server
                * @return {ServerInfo}
            */
            async about() {
                const result = await PluginRegistry
                    .apiWrapper(cvat.server.about);
                return result;
            },
            /**
                * Method returns a list of files in a specified directory on a share
                * @method share
                * @memberof module:API.cvat.server
                * @param {string} [directory=/] - Share directory path
                * @returns {FileInfo[]}
            */
            async share(directory = '/') {
                const result = await PluginRegistry
                    .apiWrapper(cvat.server.share, directory);
                return result;
            },
            /**
                * Method allows to login on a server
                * @method login
                * @memberof module:API.cvat.server
                * @param {string} username An username of an account
                * @param {string} password A password of an account
            */
            async login(username, password) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.server.login, username, password);
                return result;
            },
        },
        /**
            * Namespace is used for getting tasks
            * @namespace tasks
            * @memberof module:API.cvat
        */
        tasks: {
            /**
                * Method returns list of tasks corresponding to a filter
                * @method get
                * @memberof module:API.cvat.tasks
                * @param {TaskFilter} [filter={}] task filter
                * @returns {Task[]}
            */
            async get(filter = {}) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.tasks.get, filter);
                return result;
            },
        },
        /**
            * Namespace is used for getting jobs
            * @namespace jobs
            * @memberof module:API.cvat
        */
        jobs: {
            /**
                * Method returns list of jobs corresponding to a filter
                * @method get
                * @memberof module:API.cvat.jobs
                * @param {JobFilter} filter job filter
                * @returns {Job[]}
            */
            async get(filter) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.jobs.get, filter);
                return result;
            },
        },
        /**
            * Namespace is used for getting users
            * @namespace users
            * @memberof module:API.cvat
        */
        users: {
            /**
                * Method returns list of users corresponding to a filter
                * @method get
                * @memberof module:API.cvat.users
                * @param {UserFilter} [filter={}] user filter
                * @returns {User[]}
            */
            async get(filter = {}) {
                const result = await PluginRegistry
                    .apiWrapper(cvat.users.get, filter);
                return result;
            },
        },
        /**
            * Namespace is used for plugin management
            * @namespace plugins
            * @memberof module:API.cvat
        */
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
            proxy: false,
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
    const ServerProxy = require('./server-proxy');
    const serverProxy = new ServerProxy();

    await serverProxy.server.authentificate('admin', 'nimda760');
    console.log(JSON.stringify(await serverProxy.tasks.get()));
    console.log(JSON.stringify(await serverProxy.jobs.getJob(18)));
    console.log(JSON.stringify(await serverProxy.jobs.getTaskJobs(14)));
    console.log(JSON.stringify(await serverProxy.users.getUsers()));
    console.log(JSON.stringify(await serverProxy.users.getSelf()));
}

test();

// TODO: Plugins installation
// TODO: Documentation

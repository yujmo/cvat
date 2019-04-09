/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

/* global
    require:false
*/

{
    const PluginRegistry = require('./pluginRegistry');
    const ServerProxy = require('./serverProxy');

    const cvat = {
        server: {},
        tasks: {},
        jobs: {},
        users: {},
        plugins: {},
        config: {
            host: '',
            api: 'v1',
        },
        client: {},
    };

    async function apiWrapper(wrappedFunc, ...args) {
        const pluginList = cvat.plugins.list();
        for (const plugin of pluginList) {
            const pluginDecorators = plugin.functions
                .filter(obj => obj.callback === wrappedFunc)[0];
            if (pluginDecorators && pluginDecorators.enter) {
                pluginDecorators.enter(plugin, ...args);
            }
        }

        const result = wrappedFunc(...args);

        for (const plugin of pluginList) {
            const pluginDecorators = plugin.functions
                .filter(obj => obj.callback === wrappedFunc)[0];
            if (pluginDecorators && pluginDecorators.leave) {
                pluginDecorators.leave(plugin, result, ...args);
            }
        }
    }

    async function list(...args) {
        const result = await list.implementation(...args);
        return result;
    }

    async function register(...args) {
        const result = await register.implementation(...args)
        return result;
    }

    async function about(...args) {
        const result = await apiWrapper(about.implementation, ...args);
        return result;
    }

    async function share(...args) {
        const result = await apiWrapper(share.implementation, ...args);
        return result;
    }

    async function getTasks(...args) {
        const result = await apiWrapper(getTasks.implementation, ...args);
        return result;
    }

    async function getJobs(...args) {
        const result = await apiWrapper(getJobs.implementation, ...args);
        return result;
    }

    async function getUsers(...args) {
        const result = await apiWrapper(getUsers.implementation, ...args);
        return result;
    }

    const pluginRegistry = new PluginRegistry();
    about.implementation = () => {
        throw Error('Is not implemented');
    };

    share.implementation = () => {
        throw Error('Is not implemented');
    };

    register.implementation = () => {
        throw Error('Is not implemented');
    };

    list.implementation = () => {
        throw Error('Is not implemented');
    };

    getTasks.implementation = () => {
        throw Error('Is not implemented');
    };

    getJobs.implementation = () => {
        throw Error('Is not implemented');
    };

    getUsers.implementation = () => {
        throw Error('Is not implemented');
    };

    Object.defineProperty(cvat.plugins, 'list', {
        value: list,
        writable: false,
    });

    Object.defineProperty(cvat.plugins, 'register', {
        value: register,
        writable: false,
    });

    Object.defineProperty(cvat.server, 'about', {
        value: about,
        writable: false,
    });

    Object.defineProperty(cvat.server, 'share', {
        value: share,
        writable: false,
    });

    Object.defineProperty(cvat.client, 'get', {
        value: getTasks,
        writable: false,
    });

    Object.defineProperty(cvat.jobs, 'get', {
        value: getJobs,
        writable: false,
    });

    Object.defineProperty(cvat.users, 'get', {
        value: getUsers,
        writable: false,
    });

    Object.defineProperty(cvat.client, 'version', {
        value: '1.0.0',
        writable: false,
    });

    global.cvat = Object.freeze(cvat);
}


// TODO: Server proxy
// TODO: Plugins installation
// TODO: Setup debugging
// TODO: exception class

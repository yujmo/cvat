/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

import PluginRegistry from './plugins'
import ServerProxy from './server'

const cvat = {
    server: {},
    tasks: {},
    jobs: {},
    users: {},
    plugins: {},
    config: {},
    client: {
        version: '1.0.0',
    },
};


{
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

    async function about(...args) {
        const result = await apiWrapper(about.implementation, ...args);
        return result;
    }

    async function share(...args) {
        const result = await apiWrapper(share.implementation, ...args);
        return result;
    }

    async function list(...args) {
        const result = await apiWrapper(list.implementation, ...args);
        return result;
    }

    async function register(...args) {
        const result = await apiWrapper(register.implementation, ...args);
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

    cvat.plugins = {
        list,
        register,
    };

    cvat.server.about = {
        about,
        share,
    };

    cvat.tasks.get = getTasks;
    cvat.jobs.get = getJobs;
    cvat.users.get = getUsers;
}

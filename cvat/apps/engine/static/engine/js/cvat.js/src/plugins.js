/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */

class PluginRegistry {
    constructor() {
        const plugins = [];

        this.list = () => plugins;
        this.register = (plugin) => {
            // process plugin
            plugins.push(plugin);
        };
    }
}

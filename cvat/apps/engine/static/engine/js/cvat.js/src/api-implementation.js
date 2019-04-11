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
    const User = require('./user');
    const Exception = require('./exception');
    const Statistics = require('./statistics');
    const FrameData = require('./frames');
    const { Task, Job } = require('./annotations');


    function implement(cvat) {
        cvat.plugins.list.implementation = PluginRegistry.list;
        cvat.plugins.register.implementation = PluginRegistry.register;

        // Stub
        cvat.server.about.implementation = async () => {
            return {
                name: 'Computer Vision Annotation Tool',
                description: 'CVAT is completely re-designed and re-implemented '
                    + 'version of Video Annotation Tool from Irvine, California '
                    + 'tool. It is free, online, interactive video and image '
                    + 'annotation tool for computer vision. It is being used by '
                    + 'our team to annotate million of objects with different '
                    + 'properties. Many UI and UX decisions are based on feedbacks'
                    + 'from professional data annotation team.',

                version: '0.4.dev20190411083901',
            };
        };

        cvat.server.about.share.implementation = async (directory) => {
            return [
                {
                    name: 'file_1',
                    type: 'REG',
                },
                {
                    name: 'file_2',
                    type: 'REG',
                },
                {
                    name: 'file_3',
                    type: 'REG',
                },
                {
                    name: 'dir_1',
                    type: 'DIR',
                },
            ];
        };

        cvat.tasks.get.implementation = async (filter) => {
            return new Task();
        };

        cvat.jobs.get.implementation = async (filter) => {
            return new Job();
        };

        cvat.users.get.implementation = async (filter) => {
            return new User();
        };

        cvat.Task.annotations.upload.implementation = async (file) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Update annotations
        };

        cvat.Task.annotations.save.implementation = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save annotation on a server
        };

        cvat.Task.annotations.clear.implementation = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Remove all annotations
        };

        cvat.Task.annotations.dump.implementation = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            const { host } = global.cvat.config;
            const { api } = global.cvat.config;

            return `${host}/api/${api}/tasks/${this.taskID}/annotations/dump`;
        };

        cvat.Task.annotations.statistics.implementation = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            return new Statistics();
        };

        cvat.Task.annotations.put.implementation = async (arrayOfObjects) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Make from objects
        };

        cvat.Task.annotations.get.implementation = async (frame, filter) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Return collection
        };

        cvat.Task.annotations.search.implementation = async (filter, frameFrom, frameTo) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            return 0;
        };

        cvat.Task.annotations.select.implementation = async (frame, x, y) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Return random ID from collection
            return null;
        };

        cvat.Task.frames.get.implementation = async (frame) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            return new FrameData(this.taskID, frame);
        };

        cvat.Task.logs.put.implementation = async (logType, details) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Put log into collection
        };

        cvat.Task.logs.save.implementation = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        cvat.Task.actions.save.undo = async (count) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        cvat.Task.actions.save.redo = async (count) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        cvat.Task.actions.save.clear = async () => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        cvat.Task.events.subscribe.implementation = async (type, callback) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        cvat.Task.events.unsubscribe.implementation = async (type, callback) => {
            if (this === global) {
                throw new Exception('Invoking without context is not allowed');
            }

            // TODO: Save log collection
        };

        return cvat;
    }

    module.exports = implement;
})();

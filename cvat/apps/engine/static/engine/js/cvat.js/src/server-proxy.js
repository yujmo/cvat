/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

(() => {
    class ServerProxy {
        constructor() {
            async function about() {

            }

            async function share(directory) {

            }

            async function exception(exception) {

            }

            async function getTasks(filter) {

            }

            async function getJobs(filter) {

            }

            async function getUsers(filter) {

            }

            // TODO
            // Save job
            // Save job annotations
            // Save task annotations
            // Dump annotations
            // Frame
            // MetaInfo
            // Logs
            // Create task, append files

            Object.defineProperties(this, {
                server: {
                    value: Object.freeze({
                        about,
                        share,
                        exception,
                    }),
                    writable: false,
                },

                tasks: {
                    value: Object.freeze({
                        get: getTasks,
                    }),
                    writable: false,
                },

                jobs: {
                    value: Object.freeze({
                        get: getJobs,
                    }),
                    writable: false,
                },

                users: {
                    value: Object.freeze({
                        get: getUsers,
                    }),
                    writable: false,
                },
            });
        }
    }

    module.exports = ServerProxy;
})();

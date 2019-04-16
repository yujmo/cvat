/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    require:false
    global:false
*/

(() => {
    class ServerProxy {
        constructor() {
            const Cookie = require('js-cookie');
            const Axios = require('axios');

            async function authentificate1(username, password) {
                let response = await Axios.get(`${global.cvat.config.host}/auth/login`, {
                    proxy: false,
                });

                let all = '';
                for (const cookie of response.headers['set-cookie']) {
                    const name = cookie.split(';')[0].split('=')[0];
                    const value = cookie.split(';')[0].split('=')[1];
                    all += cookie.split(';')[0];
                    Axios.defaults.headers.common['X-CSRFToken'] = value;
                    Cookie.set(name, value);
                }
                Axios.defaults.headers.common.Cookie = all;

                const urlEncodedDataPairs = [
                    encodeURIComponent('username') + '=' + encodeURIComponent('admin'),
                    encodeURIComponent('password') + '=' + encodeURIComponent('nimda760')
                ];
                const data = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
                let response1 = null;
                try {
                    response1 = await Axios.post(`${global.cvat.config.host}/auth/login`, data, {
                        proxy: false,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        maxRedirects: 0,
                    });
                } catch (err) {
                    if (err.response.status === 302) {
                        all = '';
                        for (const cookie of err.response.headers['set-cookie']) {
                            const name = cookie.split(';')[0].split('=')[0];
                            const value = cookie.split(';')[0].split('=')[1];
                            all += `${cookie.split(';')[0]};`;
                            delete Axios.defaults.headers.common['X-CSRFToken'];
                            Cookie.set(name, value);
                        }
                        Axios.defaults.headers.common.Cookie = all;
                    }
                }

                const a = await Axios.get('http://localhost:7000/api/v1/tasks', {
                    proxy: false,
                });
                const b = 5;
            }

            authentificate1(global.cvat.config.username, global.cvat.config.password);


            async function about() {
                const { host } = global.cvat.config;
                const { api } = global.cvat.config;
                return new Promise(async (resolve, reject) => {
                    let data = null;
                    try {
                        data = await Axios.get(`${host}/api/${api}/server/about`, { proxy: false });
                    } catch (errorData) {
                        const message = 'Fail';
                        reject(new Error(message));
                    }
                    resolve(data);
                });
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

    module.exports = new ServerProxy();
})();

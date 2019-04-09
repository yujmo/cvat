/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

{
    class Base {
        constructor() {
            this.annotations = {};
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
}

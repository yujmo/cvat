/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/


(() => {
    class Exception extends Error {
        constructor(...args) {
            super(...args);
            this.details = null;
        }

        async save() {
            this.details = null;
        }
    }

    module.exports = Exception;
})();

/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/


{
    class Exception extends Error {
        constructor(...args) {
            super(...args);
            this.a = null;
        }

        async save() {
            this.a = null;
        }
    }

    module.exports = Exception;
}

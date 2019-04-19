
(() => {
    /**
        * Enum for type of server files
        * @enum {string}
        * @name ShareFileType
        * @readonly
        * @global
    */
    const ShareFileType = Object.freeze({
        DIR: 'DIR',
        REG: 'REG',
    });

    /**
        * Enum for a status of a task
        * @enum {string}
        * @name TaskStatus
        * @readonly
        * @global
    */
    const TaskStatus = Object.freeze({
        ANNOTATION: 'annotation',
        VALIDATION: 'validation',
        COMPLETED: 'completed',
    });

    /**
        * Enum for a mode of a task
        * @enum {string}
        * @name TaskMode
        * @readonly
        * @global
    */
    const TaskMode = Object.freeze({
        ANNOTATION: 'annotation',
        INTERPOLATION: 'interpolation',
    });

    module.exports = {
        ShareFileType,
        TaskStatus,
        TaskMode,
    };
})();

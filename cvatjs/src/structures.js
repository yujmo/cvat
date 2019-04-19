
/**
    * @typedef {Object} ServerInfo
    * @property {string} name A name of the tool [ReadOnly]
    * @property {string} description A description of the tool [ReadOnly]
    * @property {string} version A version of the tool [ReadOnly]
    * @global
*/

/**
    * @typedef {Object} FileInfo
    * @property {string} name A name of a file [ReadOnly]
    * @property {ShareFileType} type A type of a file 'DIR' or 'REG' [ReadOnly]
    * @global
*/

/**
    * @typedef {Object} TaskFilter
    * @property {string} name Check if name contains this value
    * @property {TaskStatus} status Check if status contains this value
    * @property {TaskMode} mode Check if mode contains this value
    * @property {string} id Check if id equals this value
    * @property {string} owner Check if owner user contains this value
    * @property {string} assignee Check if assigneed contains this value
    * @property {string} search Combined search of contains among all fields
    * @global
*/

/**
    * @typedef {Object} JobFilter
    * @property {integer} taskID filter all jobs of specific task
    * @property {integer} jobID filter specific job
    * @global
*/

/**
    * @typedef {Object} UserFilter
    * @property {boolean} self get only self
    * @global
*/

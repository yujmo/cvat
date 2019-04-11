/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./babel.build/api.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel.build/annotations.js":
/*!************************************!*\
  !*** ./babel.build/annotations.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/
(() => {
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
    Job
  };
})();

/***/ }),

/***/ "./babel.build/api-implementation.js":
/*!*******************************************!*\
  !*** ./babel.build/api-implementation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    require:false
*/
(() => {
  const PluginRegistry = __webpack_require__(/*! ./plugins */ "./babel.build/plugins.js");

  const User = __webpack_require__(/*! ./user */ "./babel.build/user.js");

  const {
    Task,
    Job
  } = __webpack_require__(/*! ./annotations */ "./babel.build/annotations.js");

  function implement(cvat) {
    cvat.plugins.list.implementation = PluginRegistry.list;
    cvat.plugins.register.implementation = PluginRegistry.register; // Stub

    cvat.server.about.implementation = async () => {
      return {
        name: 'Computer Vision Annotation Tool',
        description: 'CVAT is completely re-designed and re-implemented ' + 'version of Video Annotation Tool from Irvine, California ' + 'tool. It is free, online, interactive video and image ' + 'annotation tool for computer vision. It is being used by ' + 'our team to annotate million of objects with different ' + 'properties. Many UI and UX decisions are based on feedbacks' + 'from professional data annotation team.',
        version: '0.4.dev20190411083901'
      };
    };

    cvat.server.about.share.implementation = async () => {
      return [{
        name: 'file_1',
        type: 'REG'
      }, {
        name: 'file_2',
        type: 'REG'
      }, {
        name: 'file_3',
        type: 'REG'
      }, {
        name: 'dir_1',
        type: 'DIR'
      }];
    };

    cvat.tasks.get.implementation = async () => {
      return new Task();
    };

    cvat.jobs.get.implementation = async () => {
      return new Job();
    };

    cvat.users.get.implementation = async () => {
      return new User();
    };

    return cvat;
  }

  module.exports = implement;
})();

/***/ }),

/***/ "./babel.build/api.js":
/*!****************************!*\
  !*** ./babel.build/api.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    require:false
    global:false
*/
(() => {
  const PluginRegistry = __webpack_require__(/*! ./plugins */ "./babel.build/plugins.js");

  const annotationsModule = {
    async upload(file) {
      const result = await PluginRegistry.apiWrapper(annotationsModule.upload, file);
      return result;
    },

    async save() {
      const result = await PluginRegistry.apiWrapper(annotationsModule.save);
      return result;
    },

    async clear() {
      const result = await PluginRegistry.apiWrapper(annotationsModule.clear);
      return result;
    },

    async dump() {
      const result = await PluginRegistry.apiWrapper(annotationsModule.dump);
      return result;
    },

    async statistics() {
      const result = await PluginRegistry.apiWrapper(annotationsModule.statistics);
      return result;
    },

    async put(arrayOfObjects = []) {
      const result = await PluginRegistry.apiWrapper(annotationsModule.put, arrayOfObjects);
      return result;
    },

    async get(frame, filter = {}) {
      const result = await PluginRegistry.apiWrapper(annotationsModule.get, frame, filter);
      return result;
    },

    async search(filter, frameFrom, frameTo) {
      const result = await PluginRegistry.apiWrapper(annotationsModule.search, filter, frameFrom, frameTo);
      return result;
    },

    async select(frame, x, y) {
      const result = await PluginRegistry.apiWrapper(annotationsModule.select, frame, x, y);
      return result;
    }

  };
  const framesModule = {
    async get(frame) {
      const result = await PluginRegistry.apiWrapper(framesModule.get, frame);
      return result;
    }

  };
  const logsModule = {
    async put(logType, details) {
      const result = await PluginRegistry.apiWrapper(logsModule.put, logType, details);
      return result;
    },

    async save() {
      const result = await PluginRegistry.apiWrapper(logsModule.save);
      return result;
    }

  };
  const actionsModule = {
    async undo(count) {
      const result = await PluginRegistry.apiWrapper(actionsModule.undo, count);
      return result;
    },

    async redo(count) {
      const result = await PluginRegistry.apiWrapper(actionsModule.redo, count);
      return result;
    },

    async clear() {
      const result = await PluginRegistry.apiWrapper(actionsModule.clear);
      return result;
    }

  };
  const eventsModule = {
    async subscribe(eventType, callback) {
      const result = await PluginRegistry.apiWrapper(eventsModule.subscribe, eventType, callback);
      return result;
    },

    async unsubscribe(eventType, callback = null) {
      const result = await PluginRegistry.apiWrapper(eventsModule.unsubscribe, eventType, callback);
      return result;
    }

  };
  const cvat = {
    server: {
      async about() {
        const result = await PluginRegistry.apiWrapper(cvat.server.about);
        return result;
      },

      async share(directory = '/') {
        const result = await PluginRegistry.apiWrapper(cvat.server.share, directory);
        return result;
      }

    },
    tasks: {
      async get(filter = {}) {
        const result = await PluginRegistry.apiWrapper(cvat.tasks.get, filter);
        return result;
      }

    },
    jobs: {
      async get(filter = {}) {
        const result = await PluginRegistry.apiWrapper(cvat.jobs.get, filter);
        return result;
      }

    },
    users: {
      async get(filter = {}) {
        const result = await PluginRegistry.apiWrapper(cvat.users.get, filter);
        return result;
      }

    },
    plugins: {
      async list() {
        const result = await PluginRegistry.apiWrapper(cvat.plugins.list);
        return result;
      },

      async register() {
        const result = await PluginRegistry.apiWrapper(cvat.plugins.register);
        return result;
      }

    },
    config: {
      host: '',
      api: 'v1'
    },
    client: {
      version: '1.0.0'
    },
    Job: {
      async save() {
        const result = await PluginRegistry.apiWrapper(cvat.Job.save);
        return result;
      },

      annotations: Object.freeze(annotationsModule),
      frames: Object.freeze(framesModule),
      logs: Object.freeze(logsModule),
      actions: Object.freeze(actionsModule),
      events: Object.freeze(eventsModule)
    },
    Task: {
      async delete() {
        const result = await PluginRegistry.apiWrapper(cvat.Task.delete);
        return result;
      },

      async save() {
        const result = await PluginRegistry.apiWrapper(cvat.Task.save);
        return result;
      },

      annotations: Object.freeze(annotationsModule),
      frames: Object.freeze(framesModule),
      logs: Object.freeze(logsModule),
      actions: Object.freeze(actionsModule),
      events: Object.freeze(eventsModule)
    }
  };
  cvat.server = Object.freeze(cvat.server);
  cvat.tasks = Object.freeze(cvat.tasks);
  cvat.jobs = Object.freeze(cvat.jobs);
  cvat.users = Object.freeze(cvat.users);
  cvat.plugins = Object.freeze(cvat.plugins);
  cvat.client = Object.freeze(cvat.client);
  cvat.Job = Object.freeze(cvat.Job);
  cvat.Task = Object.freeze(cvat.Task);

  const implementation = __webpack_require__(/*! ./api-implementation */ "./babel.build/api-implementation.js");

  global.cvat = Object.freeze(implementation(cvat));
})(); // TODO: Server proxy
// TODO: Plugins installation
// TODO: exception class, objectstate class
// TODO: Documentation with http://yui.github.io/yuidoc/syntax/index.html
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./babel.build/plugins.js":
/*!********************************!*\
  !*** ./babel.build/plugins.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/

/* global
    global:false
*/
(() => {
  const plugins = [];

  class PluginRegistry {
    static async apiWrapper(wrappedFunc, ...args) {
      const pluginList = await global.cvat.plugins.list.implementation();

      for (const plugin of pluginList) {
        const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];

        if (pluginDecorators && pluginDecorators.enter) {
          pluginDecorators.enter(plugin, ...args);
        }
      }

      let result = await wrappedFunc.implementation(...args);

      for (const plugin of pluginList) {
        const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];

        if (pluginDecorators && pluginDecorators.leave) {
          result = pluginDecorators.leave(plugin, result, ...args);
        }
      }

      return result;
    }

    static async register() {// TODO
    }

    static async list() {
      return plugins;
    }

  }

  module.exports = PluginRegistry;
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./babel.build/user.js":
/*!*****************************!*\
  !*** ./babel.build/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
* Copyright (C) 2018 Intel Corporation
* SPDX-License-Identifier: MIT
*/
(() => {
  class User {
    constructor() {
      this.annotations = {};
    }

  }

  module.exports = User;
})();

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=cvat.js.map
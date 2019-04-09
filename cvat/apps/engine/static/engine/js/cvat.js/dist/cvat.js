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

/***/ "./babel.build/api.js":
/*!****************************!*\
  !*** ./babel.build/api.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _pluginRegistry = _interopRequireDefault(__webpack_require__(/*! ./pluginRegistry */ "./babel.build/pluginRegistry.js"));

var _serverProxy = _interopRequireDefault(__webpack_require__(/*! ./serverProxy */ "./babel.build/serverProxy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */
{
  const cvat = {
    server: {},
    tasks: {},
    jobs: {},
    users: {},
    plugins: {},
    config: {
      host: '',
      api: 'v1'
    },
    client: {}
  };

  async function apiWrapper(wrappedFunc, ...args) {
    const pluginList = cvat.plugins.list();

    for (const plugin of pluginList) {
      const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];

      if (pluginDecorators && pluginDecorators.enter) {
        pluginDecorators.enter(plugin, ...args);
      }
    }

    const result = wrappedFunc(...args);

    for (const plugin of pluginList) {
      const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];

      if (pluginDecorators && pluginDecorators.leave) {
        pluginDecorators.leave(plugin, result, ...args);
      }
    }
  }

  async function list(...args) {
    const result = await list.implementation(...args);
    return result;
  }

  async function register(...args) {
    const result = await register.implementation(...args);
    return result;
  }

  async function about(...args) {
    const result = await apiWrapper(about.implementation, ...args);
    return result;
  }

  async function share(...args) {
    const result = await apiWrapper(share.implementation, ...args);
    return result;
  }

  async function getTasks(...args) {
    const result = await apiWrapper(getTasks.implementation, ...args);
    return result;
  }

  async function getJobs(...args) {
    const result = await apiWrapper(getJobs.implementation, ...args);
    return result;
  }

  async function getUsers(...args) {
    const result = await apiWrapper(getUsers.implementation, ...args);
    return result;
  }

  const pluginRegistry = new _pluginRegistry.default();

  about.implementation = () => {
    throw Error('Is not implemented');
  };

  share.implementation = () => {
    throw Error('Is not implemented');
  };

  register.implementation = () => {
    throw Error('Is not implemented');
  };

  list.implementation = () => {
    throw Error('Is not implemented');
  };

  getTasks.implementation = () => {
    throw Error('Is not implemented');
  };

  getJobs.implementation = () => {
    throw Error('Is not implemented');
  };

  getUsers.implementation = () => {
    throw Error('Is not implemented');
  };

  Object.defineProperty(cvat.plugins, 'list', {
    value: list,
    writable: false
  });
  Object.defineProperty(cvat.plugins, 'register', {
    value: register,
    writable: false
  });
  Object.defineProperty(cvat.server, 'about', {
    value: about,
    writable: false
  });
  Object.defineProperty(cvat.server, 'share', {
    value: share,
    writable: false
  });
  Object.defineProperty(cvat.client, 'get', {
    value: getTasks,
    writable: false
  });
  Object.defineProperty(cvat.jobs, 'get', {
    value: getJobs,
    writable: false
  });
  Object.defineProperty(cvat.users, 'get', {
    value: getUsers,
    writable: false
  });
  Object.defineProperty(cvat.client, 'version', {
    value: '1.0.0',
    writable: false
  });
  global.cvat = Object.freeze(cvat);
} // TODO: Server proxy
// TODO: Plugins installation
// TODO: Setup debugging
// TODO: exception class
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./babel.build/pluginRegistry.js":
/*!***************************************!*\
  !*** ./babel.build/pluginRegistry.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */
class PluginRegistry {
  constructor() {
    const plugins = [];

    this.list = () => plugins;

    this.register = plugin => {
      // process plugin
      plugins.push(plugin);
    };
  }

}

exports.default = PluginRegistry;

/***/ }),

/***/ "./babel.build/serverProxy.js":
/*!************************************!*\
  !*** ./babel.build/serverProxy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Copyright (C) 2018 Intel Corporation
 * SPDX-License-Identifier: MIT
 */
class ServerProxy {
  constructor() {
    this.a = 5;
  }

}

exports.default = ServerProxy;

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
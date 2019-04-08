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
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _pluginRegistry = _interopRequireDefault(__webpack_require__(/*! ./pluginRegistry */ \"./babel.build/pluginRegistry.js\"));\n\nvar _serverProxy = _interopRequireDefault(__webpack_require__(/*! ./serverProxy */ \"./babel.build/serverProxy.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n * Copyright (C) 2018 Intel Corporation\n * SPDX-License-Identifier: MIT\n */\nconst cvat = {\n  server: {},\n  tasks: {},\n  jobs: {},\n  users: {},\n  plugins: {},\n  config: {},\n  client: {\n    version: '1.0.0'\n  }\n};\n{\n  async function apiWrapper(wrappedFunc, ...args) {\n    const pluginList = cvat.plugins.list();\n\n    for (const plugin of pluginList) {\n      const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];\n\n      if (pluginDecorators && pluginDecorators.enter) {\n        pluginDecorators.enter(plugin, ...args);\n      }\n    }\n\n    const result = wrappedFunc(...args);\n\n    for (const plugin of pluginList) {\n      const pluginDecorators = plugin.functions.filter(obj => obj.callback === wrappedFunc)[0];\n\n      if (pluginDecorators && pluginDecorators.leave) {\n        pluginDecorators.leave(plugin, result, ...args);\n      }\n    }\n  }\n\n  async function about(...args) {\n    const result = await apiWrapper(about.implementation, ...args);\n    return result;\n  }\n\n  async function share(...args) {\n    const result = await apiWrapper(share.implementation, ...args);\n    return result;\n  }\n\n  async function list(...args) {\n    const result = await apiWrapper(list.implementation, ...args);\n    return result;\n  }\n\n  async function register(...args) {\n    const result = await apiWrapper(register.implementation, ...args);\n    return result;\n  }\n\n  async function getTasks(...args) {\n    const result = await apiWrapper(getTasks.implementation, ...args);\n    return result;\n  }\n\n  async function getJobs(...args) {\n    const result = await apiWrapper(getJobs.implementation, ...args);\n    return result;\n  }\n\n  async function getUsers(...args) {\n    const result = await apiWrapper(getUsers.implementation, ...args);\n    return result;\n  }\n\n  const pluginRegistry = new _pluginRegistry.default();\n\n  about.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  share.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  register.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  list.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  getTasks.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  getJobs.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  getUsers.implementation = () => {\n    throw Error('Is not implemented');\n  };\n\n  cvat.plugins = {\n    list,\n    register\n  };\n  cvat.server.about = {\n    about,\n    share\n  };\n  cvat.tasks.get = getTasks;\n  cvat.jobs.get = getJobs;\n  cvat.users.get = getUsers;\n}\nglobal.cvat = cvat; // TODO: Server proxy\n// TODO: Plugins installation\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./babel.build/api.js?");

/***/ }),

/***/ "./babel.build/pluginRegistry.js":
/*!***************************************!*\
  !*** ./babel.build/pluginRegistry.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n/*\n * Copyright (C) 2018 Intel Corporation\n * SPDX-License-Identifier: MIT\n */\nclass PluginRegistry {\n  constructor() {\n    const plugins = [];\n\n    this.list = () => plugins;\n\n    this.register = plugin => {\n      // process plugin\n      plugins.push(plugin);\n    };\n  }\n\n}\n\nexports.default = PluginRegistry;\n\n//# sourceURL=webpack:///./babel.build/pluginRegistry.js?");

/***/ }),

/***/ "./babel.build/serverProxy.js":
/*!************************************!*\
  !*** ./babel.build/serverProxy.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n/*\n * Copyright (C) 2018 Intel Corporation\n * SPDX-License-Identifier: MIT\n */\nclass ServerProxy {\n  constructor() {\n    this.a = 5;\n  }\n\n}\n\nexports.default = ServerProxy;\n\n//# sourceURL=webpack:///./babel.build/serverProxy.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _home = __webpack_require__(28);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _todo_lists = __webpack_require__(29);
	
	var _todo_lists2 = _interopRequireDefault(_todo_lists);
	
	var _shopping_list = __webpack_require__(30);
	
	var _shopping_list2 = _interopRequireDefault(_shopping_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('app', ['ngComponentRouter', _todo_lists2.default, _shopping_list2.default]).config(['$locationProvider', function ($locationProvider) {
	  $locationProvider.html5Mode(false);
	}]).value('$routerRootComponent', _app.name).component(_app.name, _app2.default).component(_home.name, _home2.default);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _shopping_list = __webpack_require__(3);
	
	var _todo_lists = __webpack_require__(24);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Main = function Main() {
	  (0, _classCallCheck3.default)(this, Main);
	};
	
	var component = {
	  template: '\n    <header><h1>Angular 1.5.x Component Router Demo</h1>\n    <nav>\n      <ul>\n        <li ng-link="[\'Home\']">Home</li>\n        <li ng-link="[\'ShoppingList\']">Shopping List</li>\n        <li ng-link="[\'TodoLists\']">Todo Lists</li>\n      </ul>\n    </nav>\n    </header>\n    <main>\n      <ng-outlet></ng-outlet>\n    </main>\n  ',
	  $routeConfig: [{ path: '/', name: 'Home', component: 'home', useAsDefault: true }, { path: '/shopping-list', name: 'ShoppingList', component: _shopping_list.name }, { path: '/todo-lists/...', name: 'TodoLists', component: _todo_lists.name }],
	  controller: Main
	};
	
	exports.default = component;
	var name = exports.name = 'myApp';

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _shopping_listService = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ShoppingList = function () {
	  function ShoppingList(listService) {
	    (0, _classCallCheck3.default)(this, ShoppingList);
	
	    this.listService = listService;
	  }
	
	  (0, _createClass3.default)(ShoppingList, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.list = this.listService.list;
	    }
	  }]);
	  return ShoppingList;
	}();
	
	ShoppingList.$inject = [_shopping_listService.name];
	
	var component = {
	  template: '\n    <h2>Shopping List</h2>\n    <ul>\n      <li ng-repeat="list in $ctrl.list">{{list.title}}</li>\n    </ul>\n  ',
	  controller: ShoppingList
	};
	
	exports.default = component;
	var name = exports.name = 'shoppingList';

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(5);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.1.5'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var list = [{ id: 1, title: 'Chocolate' }, { id: 2, title: 'Lettuce' }, { id: 2, title: 'Apples' }];
	
	var ShoppingListService = function ShoppingListService() {
	  (0, _classCallCheck3.default)(this, ShoppingListService);
	
	  this.list = list;
	};
	
	exports.default = ShoppingListService;
	var name = exports.name = 'ShoppingListService';

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _todo_listsService = __webpack_require__(25);
	
	var _todo_list = __webpack_require__(26);
	
	var _select_list = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoLists = function () {
	  function TodoLists(listsService) {
	    (0, _classCallCheck3.default)(this, TodoLists);
	
	    this.listsService = listsService;
	    this.lists = [];
	  }
	
	  (0, _createClass3.default)(TodoLists, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.lists = this.listsService.lists;
	    }
	  }]);
	  return TodoLists;
	}();
	
	TodoLists.$inject = [_todo_listsService.name];
	
	var component = {
	  template: '\n    <aside>\n      <h2>Lists</h2>\n      <ul>\n        <li ng-repeat="list in $ctrl.lists" ng-link="[\'TodoList\', {id: list.id}]">\n          {{list.name}}\n        </li>\n      </ul>\n    </aside>\n    <ng-outlet></ng-outlet>\n  ',
	  controller: TodoLists,
	  $routeConfig: [{ path: '/', name: 'Select', component: _select_list.name, useAsDefault: true }, { path: '/:id', name: 'TodoList', component: _todo_list.name }]
	};
	
	exports.default = component;
	var name = exports.name = 'todoLists';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lists = [{ id: 1, name: 'List 1', todos: ['Do this', 'Do that'] }, { id: 2, name: 'List 2', todos: ['Do something about this', 'Do something about that'] }];
	
	var TodoListsService = function () {
	  function TodoListsService() {
	    (0, _classCallCheck3.default)(this, TodoListsService);
	
	    this.lists = lists;
	  }
	
	  (0, _createClass3.default)(TodoListsService, [{
	    key: 'getTodoList',
	    value: function getTodoList(id) {
	      for (var i = 0; i < this.lists.length; i++) {
	        if (this.lists[i].id === id) {
	          return this.lists[i].todos;
	        }
	      }
	    }
	  }]);
	  return TodoListsService;
	}();
	
	exports.default = TodoListsService;
	var name = exports.name = 'TodoListService';

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.name = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _todo_lists = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoList = function () {
	  function TodoList(listsService) {
	    (0, _classCallCheck3.default)(this, TodoList);
	
	    this.listsService = listsService;
	  }
	
	  (0, _createClass3.default)(TodoList, [{
	    key: '$routerOnActivate',
	    value: function $routerOnActivate(next) {
	      var id = Number(next.params.id);
	      this.todos = this.listsService.getTodoList(id);
	    }
	  }]);
	  return TodoList;
	}();
	
	TodoList.$inject = [_todo_lists.name];
	
	var component = {
	  template: '\n    <div ng-if="$ctrl.todos.length != 0">\n      <ul>\n        <li ng-repeat="todo in $ctrl.todos">{{todo}}</li>\n      </ul>\n    </div>\n  ',
	  bindings: {
	    $router: '<'
	  },
	  controller: TodoList
	};
	
	exports.default = component;
	var name = exports.name = 'todoList';

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var component = {
	  template: '\n    <div class="no-todos">\n      Please select a list\n    </div>\n  '
	};
	
	exports.default = component;
	var name = exports.name = 'selectList';

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var component = {
	  template: '\n    <h2>Welcome!</h2>\n    <p>Please select a list..</p>\n  '
	};
	
	exports.default = component;
	var name = exports.name = 'home';

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _todo_lists = __webpack_require__(24);
	
	var _todo_lists2 = _interopRequireDefault(_todo_lists);
	
	var _todo_list = __webpack_require__(26);
	
	var _todo_list2 = _interopRequireDefault(_todo_list);
	
	var _select_list = __webpack_require__(27);
	
	var _select_list2 = _interopRequireDefault(_select_list);
	
	var _todo_lists3 = __webpack_require__(25);
	
	var _todo_lists4 = _interopRequireDefault(_todo_lists3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'app.todoLists';
	
	angular.module(moduleName, []).service(_todo_lists3.name, _todo_lists4.default).component(_todo_lists.name, _todo_lists2.default).component(_todo_list.name, _todo_list2.default).component(_select_list.name, _select_list2.default);
	
	exports.default = moduleName;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _shopping_list = __webpack_require__(3);
	
	var _shopping_list2 = _interopRequireDefault(_shopping_list);
	
	var _shopping_listService = __webpack_require__(23);
	
	var _shopping_listService2 = _interopRequireDefault(_shopping_listService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'app.shoppingList';
	angular.module(moduleName, []).service(_shopping_listService.name, _shopping_listService2.default).component(_shopping_list.name, _shopping_list2.default);
	
	exports.default = moduleName;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
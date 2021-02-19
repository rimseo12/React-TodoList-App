module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./TodoContext.js":
/*!************************!*\
  !*** ./TodoContext.js ***!
  \************************/
/*! exports provided: TodoProvider, useTodoState, useTodoDispatch, useTodoNextId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoProvider", function() { return TodoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTodoState", function() { return useTodoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTodoDispatch", function() { return useTodoDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTodoNextId", function() { return useTodoNextId; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\WebProject\\todolist\\reducer\\TodoContext.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialTodos = [{
  id: 1,
  text: '프로젝트 생성하기',
  done: true
}, {
  id: 2,
  text: '컴포넌트 스타일링하기',
  done: true
}, {
  id: 3,
  text: 'Context 만들기',
  done: false
}, {
  id: 4,
  text: '기능 구현하기',
  done: false
}];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);

    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ? _objectSpread(_objectSpread({}, todo), {}, {
        done: !todo.done
      }) : todo);

    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const TodoDispatchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const TodoNextIdContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function TodoProvider({
  children
}) {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(todoReducer, initialTodos);
  const nextId = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(5);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoDispatchContext.Provider, {
      value: dispatch,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoNextIdContext.Provider, {
        value: nextId,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function useTodoState() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(TodoStateContext);

  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}
function useTodoDispatch() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(TodoDispatchContext);

  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}
function useTodoNextId() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(TodoNextIdContext);

  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}

/***/ }),

/***/ "./components/TodoCreate.js":
/*!**********************************!*\
  !*** ./components/TodoCreate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TodoContext */ "./TodoContext.js");


var _jsxFileName = "C:\\WebProject\\todolist\\components\\TodoCreate.js";




const CircleButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props => props.open && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormPositioner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const InsertForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const dispatch = Object(_TodoContext__WEBPACK_IMPORTED_MODULE_4__["useTodoDispatch"])();
  const nextId = Object(_TodoContext__WEBPACK_IMPORTED_MODULE_4__["useTodoNextId"])();

  const onToggle = () => setOpen(!open);

  const onChange = e => setValue(e.target.value);

  const onSubmit = e => {
    e.preventDefault(); //새로고침 방지

    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InsertFormPositioner, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InsertForm, {
        onSubmit: onSubmit,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, {
          autoFocus: true,
          placeholder: "\uD560 \uC77C\uC744 \uC785\uB825 \uD6C4, Enter \uB97C \uB204\uB974\uC138\uC694",
          onChange: onChange,
          value: value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CircleButton, {
      onClick: onToggle,
      open: open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdAdd"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoCreate);

/***/ }),

/***/ "./components/TodoHead.js":
/*!********************************!*\
  !*** ./components/TodoHead.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-live-clock */ "react-live-clock");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TodoContext */ "./TodoContext.js");

var _jsxFileName = "C:\\WebProject\\todolist\\components\\TodoHead.js";




const TodoHeadBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
  const todos = Object(_TodoContext__WEBPACK_IMPORTED_MODULE_4__["useTodoState"])();
  const undoneTasks = todos.filter(todo => !todo.done);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoHeadBlock, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_live_clock__WEBPACK_IMPORTED_MODULE_3___default.a, {
        format: 'DD MMMM, dddd'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_live_clock__WEBPACK_IMPORTED_MODULE_3___default.a, {
        format: 'HH:mm:ss a',
        ticking: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 12
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tasks-left",
      children: ["\uD560 \uC77C ", undoneTasks.length, "\uAC1C \uB0A8\uC74C"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 6
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoHead);

/***/ }),

/***/ "./components/TodoItem.js":
/*!********************************!*\
  !*** ./components/TodoItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TodoContext */ "./TodoContext.js");

var _jsxFileName = "C:\\WebProject\\todolist\\components\\TodoItem.js";




const Remove = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const CheckCircle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => props.done && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
      color: #ced4da;
    `}
`;

function TodoItem({
  id,
  done,
  text
}) {
  const dispatch = Object(_TodoContext__WEBPACK_IMPORTED_MODULE_4__["useTodoDispatch"])();

  const onToggle = () => dispatch({
    type: 'TOGGLE',
    id
  });

  const onRemove = () => dispatch({
    type: 'REMOVE',
    id
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoItemBlock, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckCircle, {
      done: done,
      onClick: onToggle,
      children: done && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDone"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Text, {
      done: done,
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Remove, {
      onClick: onRemove,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdDelete"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(TodoItem)); // 다른 항목이 업데이트 될 때, 불필요한 리렌더링을 방지할 수 있음

/***/ }),

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItem */ "./components/TodoItem.js");
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TodoContext */ "./TodoContext.js");

var _jsxFileName = "C:\\WebProject\\todolist\\components\\TodoList.js";




const TodoListBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    flex: 1; /*자신이 차지 할 수 있는 영역을 꽉 채우는 설정*/
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  const todos = Object(_TodoContext__WEBPACK_IMPORTED_MODULE_4__["useTodoState"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoListBlock, {
    children: todos.map(todo => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TodoItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: todo.id,
      text: todo.text,
      done: todo.done
    }, todo.id, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./components/TodoTemplate.js":
/*!************************************!*\
  !*** ./components/TodoTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\WebProject\\todolist\\components\\TodoTemplate.js";


const TodoTemplateBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoTemplateBlock, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (TodoTemplate);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TodoTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TodoTemplate */ "./components/TodoTemplate.js");
/* harmony import */ var _components_TodoHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TodoHead */ "./components/TodoHead.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoList */ "./components/TodoList.js");
/* harmony import */ var _components_TodoCreate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TodoCreate */ "./components/TodoCreate.js");
/* harmony import */ var _TodoContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TodoContext */ "./TodoContext.js");

var _jsxFileName = "C:\\WebProject\\todolist\\pages\\index.js";







const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
    body {
      background: #e9ecef;
    }
`;

function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TodoContext__WEBPACK_IMPORTED_MODULE_7__["TodoProvider"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoHead__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoCreate__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-live-clock":
/*!***********************************!*\
  !*** external "react-live-clock" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-live-clock");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlci9Ub2RvQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9DcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvSGVhZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxpdmUtY2xvY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImluaXRpYWxUb2RvcyIsImlkIiwidGV4dCIsImRvbmUiLCJ0b2RvUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbmNhdCIsInRvZG8iLCJtYXAiLCJmaWx0ZXIiLCJFcnJvciIsIlRvZG9TdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiVG9kb0Rpc3BhdGNoQ29udGV4dCIsIlRvZG9OZXh0SWRDb250ZXh0IiwiVG9kb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJuZXh0SWQiLCJ1c2VSZWYiLCJ1c2VUb2RvU3RhdGUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVRvZG9EaXNwYXRjaCIsInVzZVRvZG9OZXh0SWQiLCJDaXJjbGVCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsIm9wZW4iLCJjc3MiLCJJbnNlcnRGb3JtUG9zaXRpb25lciIsImRpdiIsIkluc2VydEZvcm0iLCJmb3JtIiwiSW5wdXQiLCJpbnB1dCIsIlRvZG9DcmVhdGUiLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25Ub2dnbGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsIlRvZG9IZWFkQmxvY2siLCJUb2RvSGVhZCIsInRvZG9zIiwidW5kb25lVGFza3MiLCJsZW5ndGgiLCJSZW1vdmUiLCJUb2RvSXRlbUJsb2NrIiwiQ2hlY2tDaXJjbGUiLCJUZXh0IiwiVG9kb0l0ZW0iLCJvblJlbW92ZSIsIlJlYWN0IiwibWVtbyIsIlRvZG9MaXN0QmxvY2siLCJUb2RvTGlzdCIsIlRvZG9UZW1wbGF0ZUJsb2NrIiwiVG9kb1RlbXBsYXRlIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmQTs7QUFpQkEsU0FBU2lDLFlBQVQsQ0FBc0I7QUFBRWxEO0FBQUYsQ0FBdEIsRUFBb0M7QUFDbEMsc0JBQU8scUVBQUMsaUJBQUQ7QUFBQSxjQUFvQkE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRWNrRCwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLFdBQVcsR0FBR0MsbUVBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBSkE7O0FBTUEsU0FBU0MsR0FBVCxHQUFjO0FBQ1Ysc0JBQ0kscUVBQUMseURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLGdFQUFEO0FBQUEsOEJBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0FBRWNBLGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBpbml0aWFsVG9kb3MgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0ZXh0OiAn7ZSE66Gc7KCd7Yq4IOyDneyEse2VmOq4sCcsXHJcbiAgICBkb25lOiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRleHQ6ICfsu7Ttj6zrhIztirgg7Iqk7YOA7J2866eB7ZWY6riwJyxcclxuICAgIGRvbmU6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGV4dDogJ0NvbnRleHQg66eM65Ok6riwJyxcclxuICAgIGRvbmU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRleHQ6ICfquLDriqUg6rWs7ZiE7ZWY6riwJyxcclxuICAgIGRvbmU6IGZhbHNlXHJcbiAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gdG9kb1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0NSRUFURSc6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5jb25jYXQoYWN0aW9uLnRvZG8pO1xyXG4gICAgY2FzZSAnVE9HR0xFJzpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0b2RvID0+XHJcbiAgICAgICAgdG9kby5pZCA9PT0gYWN0aW9uLmlkID8geyAuLi50b2RvLCBkb25lOiAhdG9kby5kb25lIH0gOiB0b2RvXHJcbiAgICAgICk7XHJcbiAgICBjYXNlICdSRU1PVkUnOlxyXG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVG9kb1N0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgVG9kb0Rpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgVG9kb05leHRJZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9kb1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0b2RvUmVkdWNlciwgaW5pdGlhbFRvZG9zKTtcclxuICBjb25zdCBuZXh0SWQgPSB1c2VSZWYoNSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9kb1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8VG9kb0Rpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIDxUb2RvTmV4dElkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV4dElkfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RvZG9OZXh0SWRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L1RvZG9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1RvZG9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZG9TdGF0ZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUb2RvU3RhdGVDb250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgVG9kb1Byb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlVG9kb0Rpc3BhdGNoKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRvZG9EaXNwYXRjaENvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBUb2RvUHJvdmlkZXInKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb2RvTmV4dElkKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFRvZG9OZXh0SWRDb250ZXh0KTtcclxuICBpZiAoIWNvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgVG9kb1Byb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE1kQWRkIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgeyB1c2VUb2RvRGlzcGF0Y2gsIHVzZVRvZG9OZXh0SWQgfSBmcm9tICcuLi9Ub2RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBDaXJjbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6ICMzOGQ5YTk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjNlNmJlO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjBjOTk3O1xyXG4gIH1cclxuXHJcbiAgei1pbmRleDogNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgdHJhbnNpdGlvbjogMC4xMjVzIGFsbCBlYXNlLWluO1xyXG4gICR7cHJvcHMgPT5cclxuICAgIHByb3BzLm9wZW4gJiZcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZDogI2ZmNmI2YjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmODc4NztcclxuICAgICAgfVxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhNTI1MjtcclxuICAgICAgfVxyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5zZXJ0Rm9ybVBvc2l0aW9uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEluc2VydEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMzJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3MnB4O1xyXG5cclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gVG9kb0NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZVRvZG9EaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbmV4dElkID0gdXNlVG9kb05leHRJZCgpO1xyXG5cclxuICAgIGNvbnN0IG9uVG9nZ2xlID0gKCkgPT4gc2V0T3Blbighb3Blbik7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGUgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8v7IOI66Gc6rOg7LmoIOuwqeyngFxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICB0eXBlOiAnQ1JFQVRFJyxcclxuICAgICAgICAgICB0b2RvOiB7XHJcbiAgICAgICAgICAgICAgIGlkOiBuZXh0SWQuY3VycmVudCxcclxuICAgICAgICAgICAgICAgdGV4dDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFZhbHVlKCcnKTtcclxuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgICAgICBuZXh0SWQuY3VycmVudCArPSAxO1xyXG4gICAgfTtcclxuICBcclxuICBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgPEluc2VydEZvcm1Qb3NpdGlvbmVyPlxyXG4gICAgICAgICAgICA8SW5zZXJ0Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICBhdXRvRm9jdXMgXHJcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtlaAg7J287J2EIOyeheugpSDtm4QsIEVudGVyIOulvCDriITrpbTshLjsmpRcIiBcclxuICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSW5zZXJ0Rm9ybT5cclxuICAgICAgICAgIDwvSW5zZXJ0Rm9ybVBvc2l0aW9uZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8Q2lyY2xlQnV0dG9uIG9uQ2xpY2s9e29uVG9nZ2xlfSBvcGVuPXtvcGVufT5cclxuICAgICAgICAgIDxNZEFkZCAvPlxyXG4gICAgICAgIDwvQ2lyY2xlQnV0dG9uPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFRvZG9DcmVhdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaXZlQ2xvY2sgZnJvbSAncmVhY3QtbGl2ZS1jbG9jayc7XHJcbmltcG9ydCB7dXNlVG9kb1N0YXRlfSBmcm9tICcuLi9Ub2RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBUb2RvSGVhZEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBjb2xvcjogIzM0M2E0MDtcclxuICAgIH1cclxuICAgIC5kYXkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBjb2xvcjogIzg2OGU5NjtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbiAgICAudGFza3MtbGVmdCB7XHJcbiAgICAgICAgY29sb3I6ICMyMGM5OTc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBUb2RvSGVhZCgpe1xyXG4gY29uc3QgdG9kb3MgPSB1c2VUb2RvU3RhdGUoKTtcclxuIGNvbnN0IHVuZG9uZVRhc2tzID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uZG9uZSk7XHJcblxyXG4gcmV0dXJuKFxyXG4gICAgIDxUb2RvSGVhZEJsb2NrPlxyXG4gICAgICAgICA8aDI+PExpdmVDbG9jayBmb3JtYXQ9eydERCBNTU1NLCBkZGRkJ30vPjwvaDI+XHJcbiAgICAgICAgIDxoMT5cclxuICAgICAgICAgICA8TGl2ZUNsb2NrIGZvcm1hdD17J0hIOm1tOnNzIGEnfSB0aWNraW5nPXt0cnVlfS8+XHJcbiAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza3MtbGVmdFwiPu2VoCDsnbwge3VuZG9uZVRhc2tzLmxlbmd0aH3qsJwg64Ko7J2MPC9kaXY+XHJcbiAgICAgPC9Ub2RvSGVhZEJsb2NrPlxyXG4gKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0hlYWQ7IiwiaW1wb3J0IFJlYWN0LHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBNZERvbmUsIE1kRGVsZXRlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgeyB1c2VUb2RvRGlzcGF0Y2ggfSBmcm9tICcuLi9Ub2RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBSZW1vdmUgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2RlZTJlNjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZjZiNmI7XHJcbiAgfVxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBUb2RvSXRlbUJsb2NrID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICAke1JlbW92ZX0ge1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrQ2lyY2xlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5kb25lICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzOGQ5YTk7XHJcbiAgICAgIGNvbG9yOiAjMzhkOWE5O1xyXG4gICAgYH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmRvbmUgJiZcclxuICAgIGNzc2BcclxuICAgICAgY29sb3I6ICNjZWQ0ZGE7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVG9kb0l0ZW0oeyBpZCwgZG9uZSwgdGV4dCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VUb2RvRGlzcGF0Y2goKTtcclxuICBjb25zdCBvblRvZ2dsZSA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRScsIGlkIH0pO1xyXG4gIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFJywgaWQgfSk7XHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2RvSXRlbUJsb2NrPlxyXG4gICAgICA8Q2hlY2tDaXJjbGUgZG9uZT17ZG9uZX0gb25DbGljaz17b25Ub2dnbGV9PlxyXG4gICAgICAgIHtkb25lICYmIDxNZERvbmUgLz59XHJcbiAgICAgIDwvQ2hlY2tDaXJjbGU+XHJcbiAgICAgIDxUZXh0IGRvbmU9e2RvbmV9Pnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPFJlbW92ZSBvbkNsaWNrPXtvblJlbW92ZX0+XHJcbiAgICAgICAgPE1kRGVsZXRlIC8+XHJcbiAgICAgIDwvUmVtb3ZlPlxyXG4gICAgPC9Ub2RvSXRlbUJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVG9kb0l0ZW0pO1xyXG4gLy8g64uk66W4IO2VreuqqeydtCDsl4XrjbDsnbTtirgg65CgIOuVjCwg67aI7ZWE7JqU7ZWcIOumrOugjOuNlOungeydhCDrsKnsp4DtlaAg7IiYIOyeiOydjCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSc7XHJcbmltcG9ydCB7IHVzZVRvZG9TdGF0ZSB9IGZyb20gJy4uL1RvZG9Db250ZXh0JztcclxuXHJcbmNvbnN0IFRvZG9MaXN0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleDogMTsgLyrsnpDsi6DsnbQg7LCo7KeAIO2VoCDsiJgg7J6I64qUIOyYgeyXreydhCDqvYkg7LGE7Jqw64qUIOyEpOyglSovXHJcbiAgICBwYWRkaW5nOiAyMHB4IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5OyAvKiDsgqzsnbTspogg7KGw7KCV7J20IOyemCDrkJjqs6Ag7J6I64qU7KeAIO2ZleyduO2VmOq4sCDsnITtlZwg7J6E7IucIOyKpO2DgOydvCAqL1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gVG9kb0xpc3QoKXtcclxuICBjb25zdCB0b2RvcyA9IHVzZVRvZG9TdGF0ZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9kb0xpc3RCbG9jaz5cclxuICAgICAge3RvZG9zLm1hcCh0b2RvID0+IChcclxuICAgICAgICA8VG9kb0l0ZW1cclxuICAgICAgICAgIGtleT17dG9kby5pZH1cclxuICAgICAgICAgIGlkPXt0b2RvLmlkfVxyXG4gICAgICAgICAgdGV4dD17dG9kby50ZXh0fVxyXG4gICAgICAgICAgZG9uZT17dG9kby5kb25lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Ub2RvTGlzdEJsb2NrPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVG9kb1RlbXBsYXRlQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MTJweDtcclxuICBoZWlnaHQ6IDc2OHB4O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIOy2lO2bhCDrsJXsiqQg7ZWY64uo7JeQIOy2lOqwgCDrsoTtirzsnYQg7JyE7LmY7Iuc7YKk6riwIOychO2VnCDshKTsoJUgKi9cclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICBtYXJnaW46IDAgYXV0bzsgLyog7Y6Y7J207KeAIOykkeyVmeyXkCDrgpjtg4Drgpjrj4TroZ0g7ISk7KCVICovXHJcblxyXG4gIG1hcmdpbi10b3A6IDk2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBUb2RvVGVtcGxhdGUoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIDxUb2RvVGVtcGxhdGVCbG9jaz57Y2hpbGRyZW59PC9Ub2RvVGVtcGxhdGVCbG9jaz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9UZW1wbGF0ZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRvZG9UZW1wbGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9UZW1wbGF0ZSc7XHJcbmltcG9ydCBUb2RvSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9IZWFkJztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvVG9kb0xpc3QnO1xyXG5pbXBvcnQgVG9kb0NyZWF0ZSBmcm9tICcuLi9jb21wb25lbnRzL1RvZG9DcmVhdGUnO1xyXG5pbXBvcnQgeyBUb2RvUHJvdmlkZXIgfSBmcm9tICcuLi9Ub2RvQ29udGV4dCc7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBcHAoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRvZG9Qcm92aWRlcj5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgPFRvZG9UZW1wbGF0ZT5cclxuICAgICAgICAgICAgPFRvZG9IZWFkIC8+XHJcbiAgICAgICAgICAgIDxUb2RvTGlzdCAvPlxyXG4gICAgICAgICAgICA8VG9kb0NyZWF0ZSAvPlxyXG4gICAgICAgICAgPC9Ub2RvVGVtcGxhdGU+XHJcbiAgICAgICAgPC9Ub2RvUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1saXZlLWNsb2NrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
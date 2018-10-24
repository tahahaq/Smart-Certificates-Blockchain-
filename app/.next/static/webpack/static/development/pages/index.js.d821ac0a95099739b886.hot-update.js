webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/certificateController */ "./interface/certificateController.js");
/* harmony import */ var _interface_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/web3 */ "./interface/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "../node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ "../routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var StudentCertificateIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(StudentCertificateIndex, _Component);

  function StudentCertificateIndex() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StudentCertificateIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StudentCertificateIndex)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      idType: 'studentId',
      loading: false,
      idValue: '',
      errorMessage: '',
      certificateState: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var certificate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 2;

                if (!(_this.state.idType === 'studentId')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getCertificateByStudentId(_utils_constants__WEBPACK_IMPORTED_MODULE_7__["default"].convertStringToHex(_this.state.idValue)).call();

              case 6:
                certificate = _context.sent;

                _this.renderCertificates(certificate);

                _context.next = 13;
                break;

              case 10:
                _context.next = 12;
                return _interface_certificateController__WEBPACK_IMPORTED_MODULE_2__["default"].methods.getCertificateById(_this.state.idValue).call();

              case 12:
                certificate = _context.sent;

              case 13:
                _this.renderCertificates(certificate);

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 19:
                _this.setState({
                  loading: false,
                  contributionValue: ''
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 16]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCertificates", function (certificates) {
      console.log(certificates);
      var items = [];

      for (var _i = 0; _i < certificates['0'].length; _i++) {
        items.push({
          header: certificates['0'][_i],
          description: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_5__["Link"], {
            route: "/certificate/".concat(certificates['0'][_i])
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "View Certificate")),
          fluid: true
        });
      }

      _this.setState({
        certificateState: items
      }); // return <Card.Group items={items}/>

    });

    return _this;
  }

  _createClass(StudentCertificateIndex, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = [{
        key: 'studentId',
        text: 'Student ID',
        value: 'studentId'
      }, {
        key: 'certificateId',
        text: 'Certificate ID',
        value: 'certificateId'
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.onSearch,
        error: !!this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        style: {
          marginTop: '50px'
        },
        type: "text",
        size: "massive",
        onChange: function onChange(event) {
          return _this2.setState({
            idValue: event.target.value
          });
        },
        value: this.state.idValue,
        fluid: true,
        placeholder: "Search Certificate by...",
        action: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Select"], {
        compact: true,
        options: options,
        value: this.state.idType,
        onChange: function onChange(e, _ref2) {
          var value = _ref2.value;
          return _this2.setState({
            idType: value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "submit"
      }, "Search"))), "this.state.certificateState.map((item, i) => ", console.log(item + ' ' + i), ").bind(this)");
    }
  }]);

  return StudentCertificateIndex;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StudentCertificateIndex);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d821ac0a95099739b886.hot-update.js.map
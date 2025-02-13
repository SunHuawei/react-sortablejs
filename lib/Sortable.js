"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _sortablejs = require("sortablejs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_sortablejs.Sortable.mount(new _sortablejs.MultiDrag());

var store = {
  nextSibling: null,
  activeComponent: null
};

var Sortable =
/*#__PURE__*/
function (_Component) {
  _inherits(Sortable, _Component);

  function Sortable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sortable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sortable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sortable", null);

    return _this;
  }

  _createClass(Sortable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var options = _objectSpread({}, this.props.options);

      ['onChoose', 'onStart', 'onEnd', 'onAdd', 'onUpdate', 'onSort', 'onRemove', 'onFilter', 'onMove', 'onClone'].forEach(function (name) {
        var eventHandler = options[name];

        options[name] = function () {
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }

          var evt = params[0];

          if (name === 'onChoose') {
            store.nextSibling = evt.item.nextElementSibling;
            store.activeComponent = _this2;
          } else if ((name === 'onAdd' || name === 'onUpdate') && _this2.props.onChange) {
            var items = _this2.sortable.toArray();

            var remote = store.activeComponent;
            var remoteItems = remote.sortable.toArray();
            var referenceNode = store.nextSibling && store.nextSibling.parentNode !== null ? store.nextSibling : null;
            evt.from.insertBefore(evt.item, referenceNode);

            if (remote !== _this2) {
              var remoteOptions = remote.props.options || {};

              if (_typeof(remoteOptions.group) === 'object' && remoteOptions.group.pull === 'clone') {
                // Remove the node with the same data-reactid
                evt.item.parentNode.removeChild(evt.item);
              }

              remote.props.onChange && remote.props.onChange(remoteItems, remote.sortable, evt);
            }

            _this2.props.onChange && _this2.props.onChange(items, _this2.sortable, evt);
          }

          if (evt.type === 'move') {
            var _evt = params[0],
                originalEvent = params[1];
            var canMove = eventHandler ? eventHandler(_evt, originalEvent) : true;
            return canMove;
          }

          setTimeout(function () {
            eventHandler && eventHandler(evt);
          }, 0);
        };
      });
      this.sortable = _sortablejs.Sortable.create(this.node, options);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // If onChange is null, it is an UnControlled component
      // Don't let React re-render it by setting return to false
      if (!nextProps.onChange) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.sortable) {
        this.sortable.destroy();
        this.sortable = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          Component = _this$props.tag,
          options = _this$props.options,
          onChange = _this$props.onChange,
          props = _objectWithoutProperties(_this$props, ["tag", "options", "onChange"]);

      return _react.default.createElement(Component, _extends({}, props, {
        ref: function ref(node) {
          _this3.node = node;
        }
      }));
    }
  }]);

  return Sortable;
}(_react.Component);

_defineProperty(Sortable, "propTypes", {
  options: _propTypes.default.object,
  onChange: _propTypes.default.func,
  tag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  style: _propTypes.default.object
});

_defineProperty(Sortable, "defaultProps", {
  options: {},
  tag: 'div',
  style: {}
});

var _default = Sortable;
exports.default = _default;
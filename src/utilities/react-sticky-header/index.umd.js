(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react')) :
  typeof define === 'function' && define.amd ? define(['babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react'], factory) :
  (global.react-sticky-header = factory(global._Object$getPrototypeOf,global._classCallCheck,global._createClass,global._possibleConstructorReturn,global._inherits,global.React));
}(this, function (_Object$getPrototypeOf,_classCallCheck,_createClass,_possibleConstructorReturn,_inherits,React) { 'use strict';

  _Object$getPrototypeOf = 'default' in _Object$getPrototypeOf ? _Object$getPrototypeOf['default'] : _Object$getPrototypeOf;
  _classCallCheck = 'default' in _classCallCheck ? _classCallCheck['default'] : _classCallCheck;
  _createClass = 'default' in _createClass ? _createClass['default'] : _createClass;
  _possibleConstructorReturn = 'default' in _possibleConstructorReturn ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
  _inherits = 'default' in _inherits ? _inherits['default'] : _inherits;
  var React__default = 'default' in React ? React['default'] : React;

  function addEvent(event, cb) {
    window.addEventListener(event, cb, false);
    return function () {
      return window.removeEventListener(event, cb, false);
    };
  }

  var _class;
  var _temp2;
  var noop = function noop() {};

  var ReactStickyHeader = (_temp2 = _class = function (_Component) {
    _inherits(ReactStickyHeader, _Component);

    function ReactStickyHeader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ReactStickyHeader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactStickyHeader.__proto__ || _Object$getPrototypeOf(ReactStickyHeader)).call.apply(_ref, [this].concat(args))), _this), _this._detatch = noop, _this._rafExecuting = false, _this.state = {
        isSticky: _this.props.headerOnly
      }, _this.calculateStickyState = function () {
        if (_this._rafExecuting) {
          return;
        }

        _this._rafExecuting = true;

        requestAnimationFrame(function () {
          var stickyHeaderHeight = _this._fixed.offsetHeight;
          var headerContainer = _this._root.offsetHeight;
          var headerContainerBoundingBox = _this._root.getBoundingClientRect();
          var stickyOffset = _this.props.stickyOffset;
          var pastStickyThreshold = headerContainer + headerContainerBoundingBox.top - stickyHeaderHeight <= (stickyOffset || 0);

          if (pastStickyThreshold && !_this.state.isSticky) {
            _this.setState({
              isSticky: true
            });

            _this.props.onSticky(true);
          } else if (!pastStickyThreshold && _this.state.isSticky) {
            _this.setState({
              isSticky: false
            });

            _this.props.onSticky(false);
          }

          _this._rafExecuting = false;
        });
      }, _this.onResize = function () {
        // We want to flush a re-render incase the children have changed size from CSS.
        _this.setState({});

        // We want to check if because of a resize the header is now sticky or not.
        _this.calculateStickyState();
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // eslint-disable-next-line react/sort-comp


    _createClass(ReactStickyHeader, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.initialise();
        // Force state change as we need to calculate the header background containers.
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({});
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._detatch();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.headerOnly !== this.props.headerOnly) {
          this.calculateStickyState();
        }
      }
    }, {
      key: 'initialise',
      value: function initialise() {
        var _this2 = this;

        if (this._initialised) {
          return;
        }

        var detatchScroll = addEvent('scroll', this.calculateStickyState);
        var detatchResize = addEvent('resize', this.onResize);

        this._detatch = function () {
          [detatchScroll, detatchResize].forEach(function (detatch) {
            return detatch();
          });
          _this2._initialised = false;
        };

        this.calculateStickyState();
        this._initialised = true;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var backgroundUrl = this.props.backgroundImage && 'url(\'' + this.props.backgroundImage + '\')';
        var headerClassName = 'ReactStickyHeader_root' + (this.props.className ? ' ' + this.props.className : '');
        var rootClassName = '' + headerClassName + (this.state.isSticky ? ' is-sticky' : '');
        var headerContainerHeight = this._root && this._root.offsetHeight;
        var fixedHeaderHeight = this._fixed && this._fixed.offsetHeight;

        return React__default.createElement(
          'header',
          { className: rootClassName, ref: function ref(e) {
              return _this3._root = e;
            } },
          React__default.createElement(
            'div',
            { className: 'ReactStickyHeader_fixed', ref: function ref(e) {
                return _this3._fixed = e;
              } },
            this.props.header
          ),
          React__default.createElement('div', {
            className: 'ReactStickyHeader_midground',
            style: {
              height: headerContainerHeight || fixedHeaderHeight,
              top: fixedHeaderHeight,
              backgroundImage: backgroundUrl,
              backgroundColor: '#0000003d'
            }
          }),
          this.props.headerOnly && React__default.createElement('div', { style: { height: fixedHeaderHeight } }),
          this.props.headerOnly || React__default.createElement('div', {
            className: 'ReactStickyHeader_background-bg',
            style: { backgroundImage: backgroundUrl, backgroundColor: this.props.backgroundColor }
          }),
          this.props.headerOnly || React__default.createElement('div', {
            className: 'ReactStickyHeader_foreground',
            style: { opacity: this.state.isSticky ? 0 : 1, backgroundImage: backgroundUrl, backgroundColor: this.props.backgroundColor }
          }),
          this.props.headerOnly || this.props.children
        );
      }
    }]);

    return ReactStickyHeader;
  }(React.Component), _class.defaultProps = {
    onSticky: noop,
    headerOnly: false
  }, _temp2);

  return ReactStickyHeader;

}));
//# sourceMappingURL=index.umd.js.map
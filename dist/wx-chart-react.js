/*!
 * wx-chart.js
 * Chart for WeiXin application
 * Version: 1.0.1
 *
 * Copyright 2016 Jone Casper
 * Released under the MIT license
 * https://github.com/xch89820/wx-chart-react/blob/master/LICENSE.md
 */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }g.WxChart = f();
    }
})(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (require, module, exports) {
            (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

                var _react2 = _interopRequireDefault(_react);

                var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

                var _reactDom2 = _interopRequireDefault(_reactDom);

                var _base = require('./base.jsx');

                var _base2 = _interopRequireDefault(_base);

                var _wxChart = typeof window !== "undefined" ? window['WxChart'] : typeof global !== "undefined" ? global['WxChart'] : null;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var WxBarReact = function (_WxChartReact) {
                    _inherits(WxBarReact, _WxChartReact);

                    function WxBarReact() {
                        _classCallCheck(this, WxBarReact);

                        return _possibleConstructorReturn(this, (WxBarReact.__proto__ || Object.getPrototypeOf(WxBarReact)).apply(this, arguments));
                    }

                    _createClass(WxBarReact, [{
                        key: 'initChart',
                        value: function initChart(el) {
                            return new _wxChart.WxBar(el, this.props);
                        }
                    }]);

                    return WxBarReact;
                }(_base2.default);

                exports.default = WxBarReact;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, { "./base.jsx": 2 }], 2: [function (require, module, exports) {
            (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

                var _react2 = _interopRequireDefault(_react);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var WxChartReact = function (_React$Component) {
                    _inherits(WxChartReact, _React$Component);

                    function WxChartReact(props) {
                        _classCallCheck(this, WxChartReact);

                        var _this = _possibleConstructorReturn(this, (WxChartReact.__proto__ || Object.getPrototypeOf(WxChartReact)).call(this, props));

                        _this._wxChart = null;
                        _this.state = {
                            datasets: []
                        };
                        return _this;
                    }

                    _createClass(WxChartReact, [{
                        key: 'initChart',
                        value: function initChart() {
                            throw new Error('Should be override!');
                        }
                    }, {
                        key: 'render',
                        value: function render() {
                            var _this2 = this;

                            return _react2.default.createElement('canvas', { id: this.props.id,
                                style: { width: this.props.width, height: this.props.height, border: '1px solid #ffffff' },
                                ref: function ref(el) {
                                    return _this2.el = el;
                                } });
                        }
                    }, {
                        key: 'componentDidMount',
                        value: function componentDidMount() {
                            var el = this.el;
                            var wxChart = this.initChart(el);
                            var tipEvent = this.props.tooltipEvent || 'mousemove';

                            wxChart.once('draw', function (views) {
                                var handler = wxChart.mouseoverTooltip(views);
                                wxChart.canvas.canvasInstance.addEventListener(tipEvent, handler);
                            });

                            this._wxChart = wxChart;
                        }
                    }, {
                        key: 'componentWillUnmount',
                        value: function componentWillUnmount() {
                            this._wxChart.destroy();
                            this._wxChart = null;
                        }
                    }, {
                        key: 'componentDidUpdate',
                        value: function componentDidUpdate(prevProps, prevState) {
                            var datasets = this.state.datasets;
                            var wxChart = this._wxChart;
                            wxChart.update(datasets);
                        }
                    }, {
                        key: 'update',
                        value: function update(datasets) {
                            this.setState({ datasets: datasets });
                        }
                    }, {
                        key: 'clear',
                        value: function clear() {
                            var wxChart = this._wxChart;
                            wxChart.clear();
                        }
                    }]);

                    return WxChartReact;
                }(_react2.default.Component);

                exports.default = WxChartReact;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}], 3: [function (require, module, exports) {
            (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

                var _react2 = _interopRequireDefault(_react);

                var _base = require('./base.jsx');

                var _base2 = _interopRequireDefault(_base);

                var _wxChart = typeof window !== "undefined" ? window['WxChart'] : typeof global !== "undefined" ? global['WxChart'] : null;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var WxBubbleReact = function (_WxChartReact) {
                    _inherits(WxBubbleReact, _WxChartReact);

                    function WxBubbleReact() {
                        _classCallCheck(this, WxBubbleReact);

                        return _possibleConstructorReturn(this, (WxBubbleReact.__proto__ || Object.getPrototypeOf(WxBubbleReact)).apply(this, arguments));
                    }

                    _createClass(WxBubbleReact, [{
                        key: 'initChart',
                        value: function initChart(el) {
                            return new _wxChart.WxBubble(el, this.props);
                        }
                    }]);

                    return WxBubbleReact;
                }(_base2.default);

                exports.default = WxBubbleReact;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, { "./base.jsx": 2 }], 4: [function (require, module, exports) {
            (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

                var _react2 = _interopRequireDefault(_react);

                var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

                var _reactDom2 = _interopRequireDefault(_reactDom);

                var _base = require('./base.jsx');

                var _base2 = _interopRequireDefault(_base);

                var _wxChart = typeof window !== "undefined" ? window['WxChart'] : typeof global !== "undefined" ? global['WxChart'] : null;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var WxDoughnutReact = function (_WxChartReact) {
                    _inherits(WxDoughnutReact, _WxChartReact);

                    function WxDoughnutReact() {
                        _classCallCheck(this, WxDoughnutReact);

                        return _possibleConstructorReturn(this, (WxDoughnutReact.__proto__ || Object.getPrototypeOf(WxDoughnutReact)).apply(this, arguments));
                    }

                    _createClass(WxDoughnutReact, [{
                        key: 'initChart',
                        value: function initChart(el) {
                            return new _wxChart.WxDoughnut(el, this.props);
                        }
                    }]);

                    return WxDoughnutReact;
                }(_base2.default);

                exports.default = WxDoughnutReact;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, { "./base.jsx": 2 }], 5: [function (require, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.WxBubbleReact = exports.WxDoughnutReact = exports.WxBarReact = exports.WxLinerReact = undefined;

            var _liner = require('./liner.jsx');

            var _liner2 = _interopRequireDefault(_liner);

            var _bar = require('./bar.jsx');

            var _bar2 = _interopRequireDefault(_bar);

            var _doughnut = require('./doughnut.jsx');

            var _doughnut2 = _interopRequireDefault(_doughnut);

            var _bubble = require('./bubble.jsx');

            var _bubble2 = _interopRequireDefault(_bubble);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            exports.WxLinerReact = _liner2.default;
            exports.WxBarReact = _bar2.default;
            exports.WxDoughnutReact = _doughnut2.default;
            exports.WxBubbleReact = _bubble2.default;
        }, { "./bar.jsx": 1, "./bubble.jsx": 3, "./doughnut.jsx": 4, "./liner.jsx": 6 }], 6: [function (require, module, exports) {
            (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _react = typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null;

                var _react2 = _interopRequireDefault(_react);

                var _reactDom = typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null;

                var _reactDom2 = _interopRequireDefault(_reactDom);

                var _base = require('./base.jsx');

                var _base2 = _interopRequireDefault(_base);

                var _wxChart = typeof window !== "undefined" ? window['WxChart'] : typeof global !== "undefined" ? global['WxChart'] : null;

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                var WxLinerReact = function (_WxChartReact) {
                    _inherits(WxLinerReact, _WxChartReact);

                    function WxLinerReact() {
                        _classCallCheck(this, WxLinerReact);

                        return _possibleConstructorReturn(this, (WxLinerReact.__proto__ || Object.getPrototypeOf(WxLinerReact)).apply(this, arguments));
                    }

                    _createClass(WxLinerReact, [{
                        key: 'initChart',
                        value: function initChart(el) {
                            return new _wxChart.WxLiner(el, this.props);
                        }
                    }]);

                    return WxLinerReact;
                }(_base2.default);

                exports.default = WxLinerReact;
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, { "./base.jsx": 2 }] }, {}, [5])(5);
});
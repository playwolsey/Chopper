webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @desc    rem rewrite
	 * @author  chengpeng <chengpengcp9@gmail.com>
	 * @date    2015-09-02
	 */

	'use strict';

	;(function (win) {
	    var h;
	    var dpr = win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1;
	    var scale = 1 / dpr;
	    var docEl = document.documentElement;
	    var metaEl = document.createElement('meta');

	    function setUnitA() {
	        win.rem = docEl.getBoundingClientRect().width / 16;
	        docEl.style.fontSize = win.rem + 'px';
	    }

	    win.dpr = dpr;
	    win.addEventListener('resize', function () {
	        clearTimeout(h);
	        h = setTimeout(setUnitA, 300);
	    }, false);
	    win.addEventListener('pageshow', function (e) {
	        if (e.persisted) {
	            clearTimeout(h);
	            h = setTimeout(setUnitA, 300);
	        }
	    }, false);

	    docEl.setAttribute('data-dpr', dpr);
	    metaEl.setAttribute('name', 'viewport');
	    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	    if (docEl.firstElementChild) {
	        docEl.firstElementChild.appendChild(metaEl);
	    } else {
	        var wrap = document.createElement('div');
	        wrap.appendChild(metaEl);
	        document.write(wrap.innerHTML);
	    }

	    setUnitA();
	})(window);

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */

	"use strict";

	;(function (win, undef) {
	    var doc = win.document;

	    if (!win.navigator.standalone && !location.hash && win.addEventListener) {
	        win.scrollTo(0, 1);

	        var scrollTop = 1,
	            getScrollTop = function getScrollTop() {
	            return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
	        },
	            bodycheck = setInterval(function () {
	            if (doc.body) {
	                clearInterval(bodycheck);
	                scrollTop = getScrollTop();
	                win.scrollTo(0, scrollTop === 1 ? 0 : 1);
	            }
	        }, 15);

	        win.addEventListener("load", function () {
	            setTimeout(function () {
	                if (getScrollTop() < 20) {
	                    win.scrollTo(0, scrollTop === 1 ? 0 : 1);
	                }
	            }, 0);
	        }, false);
	    }
	})(window);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//import '../../css/common/reset.less';
	//import React from 'react';
	//import Navbar from '../../../components/navbar/navbar.jsx';
	//
	//;(function() {
	//    React.render(
	//        <Navbar />,
	//        document.getElementById('app')
	//    );
	//})();

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(4);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _componentsAppJsx = __webpack_require__(9);

	var _componentsAppJsx2 = _interopRequireDefault(_componentsAppJsx);

	;(function () {
	    _react2['default'].render(_react2['default'].createElement(_componentsAppJsx2['default'], null), document.getElementById('app'));
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./reset.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./reset.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\nhtml {\n  color: #000;\n  background: #FAF9F4;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n}\nhtml * {\n  outline: none;\n  -webkit-text-size-adjust: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif;\n  overflow-x: hidden;\n}\n[data-dpr=\"1\"] body {\n  font-size: 12px;\n}\n[data-dpr=\"2\"] body {\n  font-size: 24px;\n}\n[data-dpr=\"3\"] body {\n  font-size: 36px;\n}\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n}\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ninput:-ms-clear {\n  display: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\nabbr,\nacronym {\n  border: 0;\n  font-variant: normal;\n}\ndel {\n  text-decoration: line-through;\n}\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nth,\nvar {\n  font-style: normal;\n  font-weight: 500;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: 500;\n}\nq:before,\nq:after {\n  content: '';\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\na:hover {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\nins,\na {\n  text-decoration: none;\n}\n* {\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _componentsNavbarNavbarJsx = __webpack_require__(10);

	var _componentsNavbarNavbarJsx2 = _interopRequireDefault(_componentsNavbarNavbarJsx);

	var _componentsNavtreeNavtreeJsx = __webpack_require__(13);

	var _componentsNavtreeNavtreeJsx2 = _interopRequireDefault(_componentsNavtreeNavtreeJsx);

	var _componentsMovieMoviesJsx = __webpack_require__(16);

	var _componentsMovieMoviesJsx2 = _interopRequireDefault(_componentsMovieMoviesJsx);

	__webpack_require__(20);

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    showNav: function showNav() {
	        var main = _react2['default'].findDOMNode(this.refs.main_wrapper);
	        var tree = _react2['default'].findDOMNode(this.refs.navtree);

	        main.classList.toggle('slide-right');
	        tree.classList.toggle('hidden');
	    },

	    getInitialState: function getInitialState() {
	        return {
	            movies: []
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        var request = new XMLHttpRequest();
	        var _this = this;

	        //request.open('GET', 'https://api.douban.com/v2/movie/top250', true);
	        request.open('GET', '../top.json', true);
	        request.onload = function () {
	            if (request.status >= 200 && request.status < 400) {
	                _this.setState({ movies: JSON.parse(request.responseText).subjects });
	            } else {
	                //_this.setState({});
	            }
	        };

	        request.send();
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'section',
	            { className: "app-wrapper" },
	            _react2['default'].createElement(_componentsNavtreeNavtreeJsx2['default'], { ref: "navtree" }),
	            _react2['default'].createElement(
	                'section',
	                { className: "main-wrapper", ref: "main_wrapper" },
	                _react2['default'].createElement(_componentsNavbarNavbarJsx2['default'], { onShowNav: this.showNav }),
	                _react2['default'].createElement(_componentsMovieMoviesJsx2['default'], { movies: this.state.movies })
	            )
	        );
	    }
	});

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(11);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var Navbar = _react2['default'].createClass({
	    displayName: 'Navbar',

	    render: function render() {
	        return _react2['default'].createElement(
	            'header',
	            { className: "navbar" },
	            _react2['default'].createElement(
	                'span',
	                { className: "title" },
	                'Movie'
	            ),
	            _react2['default'].createElement('span', { className: "nav", onClick: this.props.onShowNav })
	        );
	    }
	});

	exports['default'] = Navbar;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./navbar.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./navbar.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "header.navbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #9C6A8D;\n  z-index: 1000;\n  height: 2rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\nheader.navbar .title {\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  font-size: 1.2rem;\n  font-weight: bold;\n  line-height: 2rem;\n  text-align: center;\n  display: block;\n  position: absolute;\n  left: 2rem;\n  right: 2rem;\n  top: 0;\n}\nheader.navbar .nav {\n  float: left;\n  display: inline-block;\n  text-decoration: none;\n  overflow: hidden;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  width: 2rem;\n  height: 2rem;\n  background: -webkit-linear-gradient(bottom, #78624f, #846f5b);\n  background: -moz-linear-gradient(bottom, #78624f, #846f5b);\n  background: linear-gradient(to top, #78624f, #846f5b);\n  background-size: 1.3rem;\n  background-repeat: no-repeat;\n  background-position: .35rem .35rem;\n  border: 1px solid transparent;\n  position: relative;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD///8AAAD////IZVEZAAAABHRSTlMAAFqzoa8xcgAAAClJREFUKM9jCEUCDFTm1P+Hgr9U52StgoKVSJY6MJLJGXUoDodSPVEAAN65RTMMRcUhAAAAAElFTkSuQmCC);\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(14);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var Navtree = _react2['default'].createClass({
	    displayName: 'Navtree',

	    render: function render() {
	        return _react2['default'].createElement(
	            'section',
	            { className: "navtree hidden" },
	            _react2['default'].createElement(
	                'header',
	                null,
	                _react2['default'].createElement(
	                    'h2',
	                    { className: "title" },
	                    '艾玛'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: "user" },
	                    _react2['default'].createElement(
	                        'a',
	                        { href: "#", className: "nav-accounts" },
	                        '登录/注册'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: "nav-wrap" },
	                _react2['default'].createElement(
	                    'div',
	                    { className: "search" },
	                    _react2['default'].createElement(
	                        'form',
	                        { action: "" },
	                        _react2['default'].createElement('input', { type: "text", name: "search_text", placeholder: "电影,导演,影片类型" }),
	                        _react2['default'].createElement('input', { type: "hidden", name: "cat", value: "1002" }),
	                        _react2['default'].createElement(
	                            'button',
	                            { className: "close-search" },
	                            '取消'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'h6',
	                    null,
	                    'ceshi'
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            '1234'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            '5678'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            'abcd'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            'efgh'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            '分类'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            'haoa'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            'test'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: "#" },
	                            'mmda'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});

	exports['default'] = Navtree;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./navtree.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./navtree.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".navtree {\n  background: #B6DEDC;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 20%;\n  bottom: 0;\n  color: #FAF9F4;\n}\n.navtree header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #52B4AF;\n  border-bottom: 1px solid #53B5B0;\n  display: block;\n  height: 2rem;\n  line-height: 2rem;\n  z-index: 10;\n}\n.navtree header .title {\n  float: left;\n  width: 30%;\n  padding: 0 0 0 .425rem;\n  font-size: 1rem;\n}\n.navtree header .user {\n  float: right;\n  width: 55%;\n  text-align: right;\n  padding-right: 15px;\n}\n.navtree header .user a {\n  text-decoration: none;\n  color: #FFF;\n  -webkit-tap-highlight-color: rgba(0, 119, 220, 0.2);\n}\n.navtree .nav-wrap {\n  overflow-y: scroll;\n  margin-top: 2.5rem;\n}\n.navtree .nav-wrap .search {\n  padding: 0 .375rem .375rem;\n}\n.navtree .nav-wrap .search input {\n  display: block;\n  padding: .275rem .275rem .275rem 2.25rem;\n  color: #fff;\n  font-size: .65rem;\n  border-radius: 4px;\n  background: #cfefef url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMzgwMTE3NDA3MjA2ODExOEE2REYwRjYyMDk5RTU5MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzQ4QTE0NjU1RkIxMUU1OUNCQkM2RDk2RDlBQTVGMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzQ4QTE0NTU1RkIxMUU1OUNCQkM2RDk2RDlBQTVGMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDExNEJBMzA3RTc0MTFFM0E1NDNBRjgxRUI1MzFEREMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDExNEJBMzE3RTc0MTFFM0E1NDNBRjgxRUI1MzFEREMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4akgJ2AAADIElEQVR42sSYSWgUQRSGe8ZlDKgHjQuogVGjhzjGFdGDxjUHNYpmUIgiKMGLIgh60eDcAsGLJzGISi5BDxJ3mZi44AoRIxiJGo8qJi4xuIEm4//gKc2zqrprphwffBTzuun+aulaJpLJZDwZFan9MjUebABLwSxQBIbytW7wDNwFF6g8n6r7+6EhIxIgNAMcBEkQDfnMF6AWNECs31ZI9xKqfR1oB5ssZCiKwQnQhoolcm4hPGQsiktgnpd7fAfb0FJnshJiGRoLUzT3d4Jm0AF6QAGIg4VghW9c+YNesANSJ62EIBNDcQfMVdzXCmpYVhejwB6wj0X9MQBWQarFZgzVKmR+gJ1geYAMxQdwCCR47Mn3NKLSo0MJ4cZSrp2UqQD1luPmJVgC7ov8GK50qBZKKb6k3eBqNiMZXdOHYi14JS5tR+XjRiHcMBHlOpG/Do7l8nlB6h2KXSI9CFQHtdBGGtwiX+PgkyepJhQPRXpzkNAykXvOX5urOCV+x9ErRSYhOZu2eG6jWZGbaRKaJHIdjoW6wE+Rm2ASGixyX1za8AIrn1lgEpLL/RDPfcTE736T0GuRm+bShAfwMJF+YxLqFLkyx62zWJF7YhK6KXK07ZjuUGiL+N3DU4tW6Kwif8BRd81HUS7STRjoA1ohXKTP/J7Ib+X9TS4yMc3yUx92cZXRmO0Ahww99ziYLS5dRgO0BQrhpjQ1pbhWCG7zbtAmhoPTirFD29m9Nhu0asV2gfYwt8BhFjTuPsF68BhUKq5/Ms0/uj11KQuMVNz7FZwD1/iz7eYZdzJYxEel4oD3UYXL0CNdNqcO6vcrYJz3b8IoFVWsPY9QzHGw6r8H3xR5WlhvoOJTbQ6KtJysBFV8TLYJkjjC3bdGs1hrpSIhzvZRnpOSfPpQ7Yk/8lx2kaYLtHKv71kLUKQ145K6r5znQmMLyTNVmr9CGsAjQAkvMSX8RwQdb1aDo6BXDIEHdCYDfYaWStgIyfgMnvJemcq3ii2MZyFF00nrb6mol6cIK5U3oZBSDXkVCpCiAZ7Mu5BG6s9k+V+EhFS7f+b+JcAApbkAKKcQ1rsAAAAASUVORK5CYII=) no-repeat;\n  background-size: .9rem;\n  background-position: .275rem .2rem;\n  border: 0 none;\n  outline: 0;\n  width: 8.55rem;\n}\n.navtree .nav-wrap h6 {\n  background: #CFEFEF;\n  color: #FAF9F4;\n  padding: .25rem .75rem;\n  font-size: .55rem;\n  line-height: .65rem;\n}\n.navtree .nav-wrap ul li a {\n  overflow: hidden;\n  display: block;\n  padding: .65rem .75rem .65rem 0;\n  font-size: .75rem;\n  color: #fff;\n  margin-left: .75rem;\n  border-bottom: 1px solid #52B4AF;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(17);

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var _movieJsx = __webpack_require__(19);

	var _movieJsx2 = _interopRequireDefault(_movieJsx);

	var Movies = _react2['default'].createClass({
	    displayName: 'Movies',

	    render: function render() {
	        var content = this.props.movies.map(function (movie) {
	            return _react2['default'].createElement(_movieJsx2['default'], { movie: movie });
	        });

	        return _react2['default'].createElement(
	            'section',
	            { className: "movies-wrapper" },
	            _react2['default'].createElement(
	                'div',
	                { className: "banner-unit" },
	                _react2['default'].createElement('article', null),
	                _react2['default'].createElement(
	                    'div',
	                    { className: "top-tips" },
	                    _react2['default'].createElement(
	                        'span',
	                        null,
	                        'tips: 点击顶栏可返回顶部，向下拖拽顶栏可显示网址'
	                    )
	                )
	            ),
	            _react2['default'].createElement(
	                'ul',
	                { className: "movies" },
	                content
	            )
	        );
	    }
	});

	exports['default'] = Movies;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./movies.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./movies.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".movies-wrapper .banner-unit article {\n  padding: 2rem 0 0 0;\n  background: #FAF9F4;\n}\n.movies-wrapper .banner-unit .top-tips {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  font-size: .5rem;\n  color: #999;\n  height: 2rem;\n  line-height: 2rem;\n}\n.movies-wrapper .movies {\n  padding-top: 1rem;\n}\n.movies-wrapper .movies .movie {\n  text-align: center;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: #FFF;\n  border-radius: 20px;\n}\n.movies-wrapper .movies .movie p {\n  color: #9C6A8D;\n}\n.movies-wrapper .movies .movie:first-child {\n  margin-top: 0;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	var Movie = _react2['default'].createClass({
	    displayName: 'Movie',

	    render: function render() {
	        var movie = this.props.movie;
	        var genres = movie.genres.map(function (g) {
	            return '' + g + ' ';
	        });

	        return _react2['default'].createElement(
	            'li',
	            { className: "movie" },
	            _react2['default'].createElement('img', { src: movie.images.large }),
	            _react2['default'].createElement(
	                'p',
	                { className: "o_title" },
	                movie.original_title
	            ),
	            _react2['default'].createElement(
	                'p',
	                { className: "title" },
	                movie.title
	            ),
	            _react2['default'].createElement(
	                'p',
	                { className: "average" },
	                movie.rating.average
	            ),
	            _react2['default'].createElement(
	                'p',
	                { className: "genres" },
	                genres
	            )
	        );
	    }
	});

	exports['default'] = Movie;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".app-wrapper .main-wrapper {\n  background-color: #FAF9F4;\n}\n.slide-right {\n  -webkit-transform: translateX(80%);\n  -moz-transform: translateX(80%);\n  -ms-transform: translateX(80%);\n  transform: translateX(80%);\n  -webkit-transition: -webkit-transform 0.4s;\n  -moz-transition: -moz-transform 0.4s;\n  transition: transform .4s;\n}\n.hidden {\n  display: none !important;\n  visibility: hidden !important;\n}\n", ""]);

	// exports


/***/ }
]);
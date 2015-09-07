webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


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

	__webpack_require__(3);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _componentsAppJsx = __webpack_require__(8);

	var _componentsAppJsx2 = _interopRequireDefault(_componentsAppJsx);

	;(function () {
	    _react2['default'].render(_react2['default'].createElement(_componentsAppJsx2['default'], null), document.getElementById('app'));
	})();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"utf-8\";\nhtml {\n  color: #000;\n  background: #FAF9F4;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%;\n}\nhtml * {\n  outline: none;\n  -webkit-text-size-adjust: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, STHeiTi, sans-serif;\n}\n[data-dpr=\"1\"] body {\n  font-size: 12px;\n}\n[data-dpr=\"2\"] body {\n  font-size: 24px;\n}\n[data-dpr=\"3\"] body {\n  font-size: 36px;\n}\nbody,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\ncode,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\np,\nblockquote,\nth,\ntd,\nhr,\nbutton,\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  margin: 0;\n  padding: 0;\n}\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ninput:-ms-clear {\n  display: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\nabbr,\nacronym {\n  border: 0;\n  font-variant: normal;\n}\ndel {\n  text-decoration: line-through;\n}\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nth,\nvar {\n  font-style: normal;\n  font-weight: 500;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: 500;\n}\nq:before,\nq:after {\n  content: '';\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\na:hover {\n  text-decoration: none;\n}\na:active {\n  text-decoration: none;\n}\nins,\na {\n  text-decoration: none;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _componentsNavbarNavbarJsx = __webpack_require__(9);

	var _componentsNavbarNavbarJsx2 = _interopRequireDefault(_componentsNavbarNavbarJsx);

	var _componentsMovieMoviesJsx = __webpack_require__(12);

	var _componentsMovieMoviesJsx2 = _interopRequireDefault(_componentsMovieMoviesJsx);

	var App = _react2['default'].createClass({
	    displayName: 'App',

	    showNav: function showNav() {
	        alert(9);
	    },

	    getInitialState: function getInitialState() {
	        return {
	            movies: []
	        };
	    },

	    //componentWillReceiveProps(newProps, oldProps) {
	    //    this.setState(this.getInitialState(newProps));
	    //},
	    //
	    componentDidMount: function componentDidMount() {
	        var request = new XMLHttpRequest();
	        var _this = this;

	        //request.open('GET', 'https://api.douban.com/v2/movie/top250', true);
	        request.open('GET', '../top.json', true);
	        request.onload = function () {
	            if (request.status >= 200 && request.status < 400) {
	                _this.setState({ movies: JSON.parse(request.responseText).subjects });
	            } else {
	                // Set application state (Not paging, paging complete)
	                // self.setState({paging: false, done: true});
	            }
	        };

	        request.send();
	    },

	    render: function render() {
	        return _react2['default'].createElement(
	            'section',
	            { className: "app-wrapper" },
	            _react2['default'].createElement(_componentsNavbarNavbarJsx2['default'], { onShowNav: this.showNav }),
	            _react2['default'].createElement(_componentsMovieMoviesJsx2['default'], { movies: this.state.movies })
	        );
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(10);

	var _react = __webpack_require__(7);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "header.navbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #9C6A8D;\n  z-index: 1000;\n  height: 2rem;\n  z-index: 10;\n}\nheader.navbar .title {\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n  font-size: 1.2rem;\n  font-weight: bold;\n  line-height: 2rem;\n  text-align: center;\n  display: block;\n  position: absolute;\n  left: 2rem;\n  right: 2rem;\n  top: 0;\n}\nheader.navbar .nav {\n  float: left;\n  display: inline-block;\n  text-decoration: none;\n  overflow: hidden;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 2rem;\n  height: 2rem;\n  background: -webkit-linear-gradient(bottom, #78624f, #846f5b);\n  background: -moz-linear-gradient(bottom, #78624f, #846f5b);\n  background: linear-gradient(to top, #78624f, #846f5b);\n  background-size: 1.3rem;\n  background-repeat: no-repeat;\n  background-position: .35rem .35rem;\n  border: 1px solid transparent;\n  position: relative;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD///8AAAD////IZVEZAAAABHRSTlMAAFqzoa8xcgAAAClJREFUKM9jCEUCDFTm1P+Hgr9U52StgoKVSJY6MJLJGXUoDodSPVEAAN65RTMMRcUhAAAAAElFTkSuQmCC);\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(13);

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _movieJsx = __webpack_require__(15);

	var _movieJsx2 = _interopRequireDefault(_movieJsx);

	var Movies = _react2['default'].createClass({
	    displayName: 'Movies',

	    render: function render() {
	        var content = this.props.movies.map(function (movie) {
	            return _react2['default'].createElement(_movieJsx2['default'], { movie: movie });
	        });

	        return _react2['default'].createElement(
	            'ul',
	            { className: "movies" },
	            content
	        );
	    }
	});

	exports['default'] = Movies;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".movies {\n  padding-top: 1rem;\n  margin-top: 2rem;\n}\n.movies .movie {\n  text-align: center;\n  padding: 1rem;\n  margin: 1rem;\n  background-color: #FFF;\n  border-radius: 20px;\n}\n.movies .movie:first-child {\n  margin-top: 0;\n}\n.movies .movie:first-child p {\n  color: #9C6A8D;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(7);

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

/***/ }
]);
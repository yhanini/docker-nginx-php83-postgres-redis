(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-location-view-js"],{

/***/ "./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js ***!
  \**************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function l(t) {
    for (var e, i, n = 1, o = arguments.length; n < o; n++) for (e in i = arguments[n]) t[e] = i[e];
    return t;
  }
  var R = Object.create || function (t) {
    return N.prototype = t, new N();
  };
  function N() {}
  function a(t, e) {
    var i,
      n = Array.prototype.slice;
    return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2), function () {
      return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments);
    });
  }
  var D = 0;
  function h(t) {
    return "_leaflet_id" in t || (t._leaflet_id = ++D), t._leaflet_id;
  }
  function j(t, e, i) {
    var n,
      o,
      s = function s() {
        n = !1, o && (r.apply(i, o), o = !1);
      },
      r = function r() {
        n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0);
      };
    return r;
  }
  function H(t, e, i) {
    var n = e[1],
      e = e[0],
      o = n - e;
    return t === n && i ? t : ((t - e) % o + o) % o + e;
  }
  function u() {
    return !1;
  }
  function i(t, e) {
    return !1 === e ? t : (e = Math.pow(10, void 0 === e ? 6 : e), Math.round(t * e) / e);
  }
  function W(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function F(t) {
    return W(t).split(/\s+/);
  }
  function c(t, e) {
    for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}), e) t.options[i] = e[i];
    return t.options;
  }
  function U(t, e, i) {
    var n,
      o = [];
    for (n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
    return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&");
  }
  var V = /\{ *([\w_ -]+) *\}/g;
  function q(t, i) {
    return t.replace(V, function (t, e) {
      e = i[e];
      if (void 0 === e) throw new Error("No value provided for variable " + t);
      return e = "function" == typeof e ? e(i) : e;
    });
  }
  var d = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };
  function G(t, e) {
    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
    return -1;
  }
  var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  function Y(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  var X = 0;
  function J(t) {
    var e = +new Date(),
      i = Math.max(0, 16 - (e - X));
    return X = e + i, window.setTimeout(t, i);
  }
  var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J,
    Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function (t) {
      window.clearTimeout(t);
    };
  function x(t, e, i) {
    if (!i || $ !== J) return $.call(window, a(t, e));
    t.call(e);
  }
  function r(t) {
    t && Q.call(window, t);
  }
  var tt = {
    __proto__: null,
    extend: l,
    create: R,
    bind: a,
    get lastId() {
      return D;
    },
    stamp: h,
    throttle: j,
    wrapNum: H,
    falseFn: u,
    formatNum: i,
    trim: W,
    splitWords: F,
    setOptions: c,
    getParamString: U,
    template: q,
    isArray: d,
    indexOf: G,
    emptyImageUrl: K,
    requestFn: $,
    cancelFn: Q,
    requestAnimFrame: x,
    cancelAnimFrame: r
  };
  function et() {}
  et.extend = function (t) {
    function e() {
      c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }
    var i,
      n = e.__super__ = this.prototype,
      o = R(n);
    for (i in (o.constructor = e).prototype = o, this) Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
    if (t.statics && l(e, t.statics), t.includes) {
      var s = t.includes;
      if ("undefined" != typeof L && L && L.Mixin) {
        s = d(s) ? s : [s];
        for (var r = 0; r < s.length; r++) s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
      l.apply(null, [o].concat(t.includes));
    }
    return l(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? R(n.options) : {}, l(o.options, t.options)), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
        for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this);
      }
    }, e;
  }, et.include = function (t) {
    var e = this.prototype.options;
    return l(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
  }, et.mergeOptions = function (t) {
    return l(this.prototype.options, t), this;
  }, et.addInitHook = function (t) {
    var e = Array.prototype.slice.call(arguments, 1),
      i = "function" == typeof t ? t : function () {
        this[t].apply(this, e);
      };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
  };
  var e = {
      on: function on(t, e, i) {
        if ("object" == _typeof(t)) for (var n in t) this._on(n, t[n], e);else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i);
        return this;
      },
      off: function off(t, e, i) {
        if (arguments.length) {
          if ("object" == _typeof(t)) for (var n in t) this._off(n, t[n], e);else {
            t = F(t);
            for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
          }
        } else delete this._events;
        return this;
      },
      _on: function _on(t, e, i, n) {
        "function" != typeof e ? console.warn("wrong listener type: " + _typeof(e)) : !1 === this._listens(t, e, i) && (e = {
          fn: e,
          ctx: i = i === this ? void 0 : i
        }, n && (e.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e));
      },
      _off: function _off(t, e, i) {
        var n, o, s;
        if (this._events && (n = this._events[t])) if (1 === arguments.length) {
          if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = u;
          delete this._events[t];
        } else "function" != typeof e ? console.warn("wrong listener type: " + _typeof(e)) : !1 !== (e = this._listens(t, e, i)) && (i = n[e], this._firingCount && (i.fn = u, this._events[t] = n = n.slice()), n.splice(e, 1));
      },
      fire: function fire(t, e, i) {
        if (this.listens(t, i)) {
          var n = l({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, r = o.length; s < r; s++) {
                var a = o[s],
                  h = a.fn;
                a.once && this.off(t, h, a.ctx), h.call(a.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          i && this._propagateEvent(n);
        }
        return this;
      },
      listens: function listens(t, e, i, n) {
        "string" != typeof t && console.warn('"string" type argument expected');
        var o = e,
          s = ("function" != typeof e && (n = !!e, i = o = void 0), this._events && this._events[t]);
        if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
        if (n) for (var r in this._eventParents) if (this._eventParents[r].listens(t, e, i, n)) return !0;
        return !1;
      },
      _listens: function _listens(t, e, i) {
        if (this._events) {
          var n = this._events[t] || [];
          if (!e) return !!n.length;
          i === this && (i = void 0);
          for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
        }
        return !1;
      },
      once: function once(t, e, i) {
        if ("object" == _typeof(t)) for (var n in t) this._on(n, t[n], e, !0);else for (var o = 0, s = (t = F(t)).length; o < s; o++) this._on(t[o], e, i, !0);
        return this;
      },
      addEventParent: function addEventParent(t) {
        return this._eventParents = this._eventParents || {}, this._eventParents[h(t)] = t, this;
      },
      removeEventParent: function removeEventParent(t) {
        return this._eventParents && delete this._eventParents[h(t)], this;
      },
      _propagateEvent: function _propagateEvent(t) {
        for (var e in this._eventParents) this._eventParents[e].fire(t.type, l({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    },
    it = (e.addEventListener = e.on, e.removeEventListener = e.clearAllEventListeners = e.off, e.addOneTimeEventListener = e.once, e.fireEvent = e.fire, e.hasEventListeners = e.listens, et.extend(e));
  function p(t, e, i) {
    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
  }
  var nt = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };
  function m(t, e, i) {
    return t instanceof p ? t : d(t) ? new p(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, e, i);
  }
  function f(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function _(t, e) {
    return !t || t instanceof f ? t : new f(t, e);
  }
  function s(t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
  }
  function g(t, e) {
    return t instanceof s ? t : new s(t, e);
  }
  function v(t, e, i) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
    this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i);
  }
  function w(t, e, i) {
    return t instanceof v ? t : d(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new v(t[0], t[1], t[2]) : 2 === t.length ? new v(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new v(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new v(t, e, i);
  }
  p.prototype = {
    clone: function clone() {
      return new p(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(m(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(m(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new p(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new p(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = nt(this.x), this.y = nt(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var e = (t = m(t)).x - this.x,
        t = t.y - this.y;
      return Math.sqrt(e * e + t * t);
    },
    equals: function equals(t) {
      return (t = m(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = m(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + i(this.x) + ", " + i(this.y) + ")";
    }
  }, f.prototype = {
    extend: function extend(t) {
      var e, i;
      if (t) {
        if (t instanceof p || "number" == typeof t[0] || "x" in t) e = i = m(t);else if (e = (t = _(t)).min, i = t.max, !e || !i) return this;
        this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(), this.max = i.clone());
      }
      return this;
    },
    getCenter: function getCenter(t) {
      return m((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return m(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return m(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var e, i;
      return (t = ("number" == typeof t[0] || t instanceof p ? m : _)(t)) instanceof f ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = _(t);
      var e = this.min,
        i = this.max,
        n = t.min,
        t = t.max,
        o = t.x >= e.x && n.x <= i.x,
        t = t.y >= e.y && n.y <= i.y;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = _(t);
      var e = this.min,
        i = this.max,
        n = t.min,
        t = t.max,
        o = t.x > e.x && n.x < i.x,
        t = t.y > e.y && n.y < i.y;
      return o && t;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    },
    pad: function pad(t) {
      var e = this.min,
        i = this.max,
        n = Math.abs(e.x - i.x) * t,
        t = Math.abs(e.y - i.y) * t;
      return _(m(e.x - n, e.y - t), m(i.x + n, i.y + t));
    },
    equals: function equals(t) {
      return !!t && (t = _(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
    }
  }, s.prototype = {
    extend: function extend(t) {
      var e,
        i,
        n = this._southWest,
        o = this._northEast;
      if (t instanceof v) i = e = t;else {
        if (!(t instanceof s)) return t ? this.extend(w(t) || g(t)) : this;
        if (e = t._southWest, i = t._northEast, !e || !i) return this;
      }
      return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new v(e.lat, e.lng), this._northEast = new v(i.lat, i.lng)), this;
    },
    pad: function pad(t) {
      var e = this._southWest,
        i = this._northEast,
        n = Math.abs(e.lat - i.lat) * t,
        t = Math.abs(e.lng - i.lng) * t;
      return new s(new v(e.lat - n, e.lng - t), new v(i.lat + n, i.lng + t));
    },
    getCenter: function getCenter() {
      return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new v(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new v(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = ("number" == typeof t[0] || t instanceof v || "lat" in t ? w : g)(t);
      var e,
        i,
        n = this._southWest,
        o = this._northEast;
      return t instanceof s ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = g(t);
      var e = this._southWest,
        i = this._northEast,
        n = t.getSouthWest(),
        t = t.getNorthEast(),
        o = t.lat >= e.lat && n.lat <= i.lat,
        t = t.lng >= e.lng && n.lng <= i.lng;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = g(t);
      var e = this._southWest,
        i = this._northEast,
        n = t.getSouthWest(),
        t = t.getNorthEast(),
        o = t.lat > e.lat && n.lat < i.lat,
        t = t.lng > e.lng && n.lng < i.lng;
      return o && t;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, e) {
      return !!t && (t = g(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var ot = {
      latLngToPoint: function latLngToPoint(t, e) {
        t = this.projection.project(t), e = this.scale(e);
        return this.transformation._transform(t, e);
      },
      pointToLatLng: function pointToLatLng(t, e) {
        e = this.scale(e), t = this.transformation.untransform(t, e);
        return this.projection.unproject(t);
      },
      project: function project(t) {
        return this.projection.project(t);
      },
      unproject: function unproject(t) {
        return this.projection.unproject(t);
      },
      scale: function scale(t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function zoom(t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function getProjectedBounds(t) {
        var e;
        return this.infinite ? null : (e = this.projection.bounds, t = this.scale(t), new f(this.transformation.transform(e.min, t), this.transformation.transform(e.max, t)));
      },
      infinite: !(v.prototype = {
        equals: function equals(t, e) {
          return !!t && (t = w(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e));
        },
        toString: function toString(t) {
          return "LatLng(" + i(this.lat, t) + ", " + i(this.lng, t) + ")";
        },
        distanceTo: function distanceTo(t) {
          return st.distance(this, w(t));
        },
        wrap: function wrap() {
          return st.wrapLatLng(this);
        },
        toBounds: function toBounds(t) {
          var t = 180 * t / 40075017,
            e = t / Math.cos(Math.PI / 180 * this.lat);
          return g([this.lat - t, this.lng - e], [this.lat + t, this.lng + e]);
        },
        clone: function clone() {
          return new v(this.lat, this.lng, this.alt);
        }
      }),
      wrapLatLng: function wrapLatLng(t) {
        var e = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
        return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
      },
      wrapLatLngBounds: function wrapLatLngBounds(t) {
        var e = t.getCenter(),
          i = this.wrapLatLng(e),
          n = e.lat - i.lat,
          e = e.lng - i.lng;
        return 0 == n && 0 == e ? t : (i = t.getSouthWest(), t = t.getNorthEast(), new s(new v(i.lat - n, i.lng - e), new v(t.lat - n, t.lng - e)));
      }
    },
    st = l({}, ot, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function distance(t, e) {
        var i = Math.PI / 180,
          n = t.lat * i,
          o = e.lat * i,
          s = Math.sin((e.lat - t.lat) * i / 2),
          e = Math.sin((e.lng - t.lng) * i / 2),
          t = s * s + Math.cos(n) * Math.cos(o) * e * e,
          i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
        return this.R * i;
      }
    }),
    rt = 6378137,
    rt = {
      R: rt,
      MAX_LATITUDE: 85.0511287798,
      project: function project(t) {
        var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          i = Math.max(Math.min(i, t.lat), -i),
          i = Math.sin(i * e);
        return new p(this.R * t.lng * e, this.R * Math.log((1 + i) / (1 - i)) / 2);
      },
      unproject: function unproject(t) {
        var e = 180 / Math.PI;
        return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
      },
      bounds: new f([-(rt = rt * Math.PI), -rt], [rt, rt])
    };
  function at(t, e, i, n) {
    d(t) ? (this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3]) : (this._a = t, this._b = e, this._c = i, this._d = n);
  }
  function ht(t, e, i, n) {
    return new at(t, e, i, n);
  }
  at.prototype = {
    transform: function transform(t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function _transform(t, e) {
      return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, e) {
      return new p((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c);
    }
  };
  var lt = l({}, st, {
      code: "EPSG:3857",
      projection: rt,
      transformation: ht(lt = .5 / (Math.PI * rt.R), .5, -lt, .5)
    }),
    ut = l({}, lt, {
      code: "EPSG:900913"
    });
  function ct(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function dt(t, e) {
    for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (i = 0, n = (o = t[a]).length; i < n; i++) r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
      r += e ? b.svg ? "z" : "x" : "";
    }
    return r || "M0 0";
  }
  var _t = document.documentElement.style,
    pt = "ActiveXObject" in window,
    mt = pt && !document.addEventListener,
    n = "msLaunchUri" in navigator && !("documentMode" in document),
    ft = y("webkit"),
    gt = y("android"),
    vt = y("android 2") || y("android 3"),
    yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    yt = gt && y("Google") && yt < 537 && !("AudioNode" in window),
    xt = !!window.opera,
    wt = !n && y("chrome"),
    bt = y("gecko") && !ft && !xt && !pt,
    Pt = !wt && y("safari"),
    Lt = y("phantom"),
    o = "OTransition" in _t,
    Tt = 0 === navigator.platform.indexOf("Win"),
    Mt = pt && "transition" in _t,
    zt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt,
    _t = "MozPerspective" in _t,
    Ct = !window.L_DISABLE_3D && (Mt || zt || _t) && !o && !Lt,
    Zt = "undefined" != typeof orientation || y("mobile"),
    St = Zt && ft,
    Et = Zt && zt,
    kt = !window.PointerEvent && window.MSPointerEvent,
    Ot = !(!window.PointerEvent && !kt),
    At = "ontouchstart" in window || !!window.TouchEvent,
    Bt = !window.L_NO_TOUCH && (At || Ot),
    It = Zt && xt,
    Rt = Zt && bt,
    Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
    Dt = function () {
      var t = !1;
      try {
        var e = Object.defineProperty({}, "passive", {
          get: function get() {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", u, e), window.removeEventListener("testPassiveEventSupport", u, e);
      } catch (t) {}
      return t;
    }(),
    jt = !!document.createElement("canvas").getContext,
    Ht = !(!document.createElementNS || !ct("svg").createSVGRect),
    Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));
  function y(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }
  var b = {
      ie: pt,
      ielt9: mt,
      edge: n,
      webkit: ft,
      android: gt,
      android23: vt,
      androidStock: yt,
      opera: xt,
      chrome: wt,
      gecko: bt,
      safari: Pt,
      phantom: Lt,
      opera12: o,
      win: Tt,
      ie3d: Mt,
      webkit3d: zt,
      gecko3d: _t,
      any3d: Ct,
      mobile: Zt,
      mobileWebkit: St,
      mobileWebkit3d: Et,
      msPointer: kt,
      pointer: Ot,
      touch: Bt,
      touchNative: At,
      mobileOpera: It,
      mobileGecko: Rt,
      retina: Nt,
      passiveEvents: Dt,
      canvas: jt,
      svg: Ht,
      vml: !Ht && function () {
        try {
          var t = document.createElement("div"),
            e = (t.innerHTML = '<v:shape adj="1"/>', t.firstChild);
          return e.style.behavior = "url(#default#VML)", e && "object" == _typeof(e.adj);
        } catch (t) {
          return !1;
        }
      }(),
      inlineSvg: Wt,
      mac: 0 === navigator.platform.indexOf("Mac"),
      linux: 0 === navigator.platform.indexOf("Linux")
    },
    Ft = b.msPointer ? "MSPointerDown" : "pointerdown",
    Ut = b.msPointer ? "MSPointerMove" : "pointermove",
    Vt = b.msPointer ? "MSPointerUp" : "pointerup",
    qt = b.msPointer ? "MSPointerCancel" : "pointercancel",
    Gt = {
      touchstart: Ft,
      touchmove: Ut,
      touchend: Vt,
      touchcancel: qt
    },
    Kt = {
      touchstart: function touchstart(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && O(e);
        ee(t, e);
      },
      touchmove: ee,
      touchend: ee,
      touchcancel: ee
    },
    Yt = {},
    Xt = !1;
  function Jt(t, e, i) {
    return "touchstart" !== e || Xt || (document.addEventListener(Ft, $t, !0), document.addEventListener(Ut, Qt, !0), document.addEventListener(Vt, te, !0), document.addEventListener(qt, te, !0), Xt = !0), Kt[e] ? (i = Kt[e].bind(this, i), t.addEventListener(Gt[e], i, !1), i) : (console.warn("wrong event specified:", e), u);
  }
  function $t(t) {
    Yt[t.pointerId] = t;
  }
  function Qt(t) {
    Yt[t.pointerId] && (Yt[t.pointerId] = t);
  }
  function te(t) {
    delete Yt[t.pointerId];
  }
  function ee(t, e) {
    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
      for (var i in e.touches = [], Yt) e.touches.push(Yt[i]);
      e.changedTouches = [e], t(e);
    }
  }
  var ie = 200;
  function ne(t, i) {
    t.addEventListener("dblclick", i);
    var n,
      o = 0;
    function e(t) {
      var e;
      1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || (e = Ne(t)).some(function (t) {
        return t instanceof HTMLLabelElement && t.attributes["for"];
      }) && !e.some(function (t) {
        return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
      }) || ((e = Date.now()) - o <= ie ? 2 === ++n && i(function (t) {
        var e,
          i,
          n = {};
        for (i in t) e = t[i], n[i] = e && e.bind ? e.bind(t) : e;
        return (t = n).type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
      }(t)) : n = 1, o = e);
    }
    return t.addEventListener("click", e), {
      dblclick: i,
      simDblclick: e
    };
  }
  var oe,
    se,
    re,
    ae,
    he,
    le,
    ue = we(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
    ce = we(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
    de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
  function _e(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function pe(t, e) {
    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
    return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i;
  }
  function P(t, e, i) {
    t = document.createElement(t);
    return t.className = e || "", i && i.appendChild(t), t;
  }
  function T(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function me(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
  }
  function fe(t) {
    var e = t.parentNode;
    e && e.lastChild !== t && e.appendChild(t);
  }
  function ge(t) {
    var e = t.parentNode;
    e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
  }
  function ve(t, e) {
    return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = xe(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
  }
  function M(t, e) {
    var i;
    if (void 0 !== t.classList) for (var n = F(e), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);else ve(t, e) || ye(t, ((i = xe(t)) ? i + " " : "") + e);
  }
  function z(t, e) {
    void 0 !== t.classList ? t.classList.remove(e) : ye(t, W((" " + xe(t) + " ").replace(" " + e + " ", " ")));
  }
  function ye(t, e) {
    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e;
  }
  function xe(t) {
    return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal;
  }
  function C(t, e) {
    if ("opacity" in t.style) t.style.opacity = e;else if ("filter" in t.style) {
      var i = !1,
        n = "DXImageTransform.Microsoft.Alpha";
      try {
        i = t.filters.item(n);
      } catch (t) {
        if (1 === e) return;
      }
      e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    }
  }
  function we(t) {
    for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
    return !1;
  }
  function be(t, e, i) {
    e = e || new p(0, 0);
    t.style[ue] = (b.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "");
  }
  function Z(t, e) {
    t._leaflet_pos = e, b.any3d ? be(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
  }
  function Pe(t) {
    return t._leaflet_pos || new p(0, 0);
  }
  function Le() {
    S(window, "dragstart", O);
  }
  function Te() {
    k(window, "dragstart", O);
  }
  function Me(t) {
    for (; -1 === t.tabIndex;) t = t.parentNode;
    t.style && (ze(), le = (he = t).style.outlineStyle, t.style.outlineStyle = "none", S(window, "keydown", ze));
  }
  function ze() {
    he && (he.style.outlineStyle = le, le = he = void 0, k(window, "keydown", ze));
  }
  function Ce(t) {
    for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
    return t;
  }
  function Ze(t) {
    var e = t.getBoundingClientRect();
    return {
      x: e.width / t.offsetWidth || 1,
      y: e.height / t.offsetHeight || 1,
      boundingClientRect: e
    };
  }
  ae = "onselectstart" in document ? (re = function re() {
    S(window, "selectstart", O);
  }, function () {
    k(window, "selectstart", O);
  }) : (se = we(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), re = function re() {
    var t;
    se && (t = document.documentElement.style, oe = t[se], t[se] = "none");
  }, function () {
    se && (document.documentElement.style[se] = oe, oe = void 0);
  });
  pt = {
    __proto__: null,
    TRANSFORM: ue,
    TRANSITION: ce,
    TRANSITION_END: de,
    get: _e,
    getStyle: pe,
    create: P,
    remove: T,
    empty: me,
    toFront: fe,
    toBack: ge,
    hasClass: ve,
    addClass: M,
    removeClass: z,
    setClass: ye,
    getClass: xe,
    setOpacity: C,
    testProp: we,
    setTransform: be,
    setPosition: Z,
    getPosition: Pe,
    get disableTextSelection() {
      return re;
    },
    get enableTextSelection() {
      return ae;
    },
    disableImageDrag: Le,
    enableImageDrag: Te,
    preventOutline: Me,
    restoreOutline: ze,
    getSizedParentNode: Ce,
    getScale: Ze
  };
  function S(t, e, i, n) {
    if (e && "object" == _typeof(e)) for (var o in e) ke(t, o, e[o], i);else for (var s = 0, r = (e = F(e)).length; s < r; s++) ke(t, e[s], i, n);
    return this;
  }
  var E = "_leaflet_events";
  function k(t, e, i, n) {
    if (1 === arguments.length) Se(t), delete t[E];else if (e && "object" == _typeof(e)) for (var o in e) Oe(t, o, e[o], i);else if (e = F(e), 2 === arguments.length) Se(t, function (t) {
      return -1 !== G(e, t);
    });else for (var s = 0, r = e.length; s < r; s++) Oe(t, e[s], i, n);
    return this;
  }
  function Se(t, e) {
    for (var i in t[E]) {
      var n = i.split(/\d/)[0];
      e && !e(n) || Oe(t, n, null, null, i);
    }
  }
  var Ee = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };
  function ke(e, t, i, n) {
    var o,
      s,
      r = t + h(i) + (n ? "_" + h(n) : "");
    e[E] && e[E][r] || (s = o = function o(t) {
      return i.call(n || e, t || window.event);
    }, !b.touchNative && b.pointer && 0 === t.indexOf("touch") ? o = Jt(e, t, o) : b.touch && "dblclick" === t ? o = ne(e, o) : "addEventListener" in e ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? e.addEventListener(Ee[t] || t, o, !!b.passiveEvents && {
      passive: !1
    }) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener(Ee[t], o = function o(t) {
      t = t || window.event, We(e, t) && s(t);
    }, !1) : e.addEventListener(t, s, !1) : e.attachEvent("on" + t, o), e[E] = e[E] || {}, e[E][r] = o);
  }
  function Oe(t, e, i, n, o) {
    o = o || e + h(i) + (n ? "_" + h(n) : "");
    var s,
      r,
      i = t[E] && t[E][o];
    i && (!b.touchNative && b.pointer && 0 === e.indexOf("touch") ? (n = t, r = i, Gt[s = e] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s)) : b.touch && "dblclick" === e ? (n = i, (r = t).removeEventListener("dblclick", n.dblclick), r.removeEventListener("click", n.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(Ee[e] || e, i, !1) : t.detachEvent("on" + e, i), t[E][o] = null);
  }
  function Ae(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
  }
  function Be(t) {
    return ke(t, "wheel", Ae), this;
  }
  function Ie(t) {
    return S(t, "mousedown touchstart dblclick contextmenu", Ae), t._leaflet_disable_click = !0, this;
  }
  function O(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }
  function Re(t) {
    return O(t), Ae(t), this;
  }
  function Ne(t) {
    if (t.composedPath) return t.composedPath();
    for (var e = [], i = t.target; i;) e.push(i), i = i.parentNode;
    return e;
  }
  function De(t, e) {
    var i, n;
    return e ? (n = (i = Ze(e)).boundingClientRect, new p((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)) : new p(t.clientX, t.clientY);
  }
  var je = b.linux && b.chrome ? window.devicePixelRatio : b.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1;
  function He(t) {
    return b.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / je : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }
  function We(t, e) {
    var i = e.relatedTarget;
    if (!i) return !0;
    try {
      for (; i && i !== t;) i = i.parentNode;
    } catch (t) {
      return !1;
    }
    return i !== t;
  }
  var mt = {
      __proto__: null,
      on: S,
      off: k,
      stopPropagation: Ae,
      disableScrollPropagation: Be,
      disableClickPropagation: Ie,
      preventDefault: O,
      stop: Re,
      getPropagationPath: Ne,
      getMousePosition: De,
      getWheelDelta: He,
      isExternalTarget: We,
      addListener: S,
      removeListener: k
    },
    Fe = it.extend({
      run: function run(t, e, i, n) {
        this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pe(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      },
      stop: function stop() {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function _animate() {
        this._animId = x(this._animate, this), this._step();
      },
      _step: function _step(t) {
        var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
        e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
      },
      _runFrame: function _runFrame(t, e) {
        t = this._startPos.add(this._offset.multiplyBy(t));
        e && t._round(), Z(this._el, t), this.fire("step");
      },
      _complete: function _complete() {
        r(this._animId), this._inProgress = !1, this.fire("end");
      },
      _easeOut: function _easeOut(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }),
    A = it.extend({
      options: {
        crs: lt,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0
      },
      initialize: function initialize(t, e) {
        e = c(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(w(e.center), e.zoom, {
          reset: !0
        }), this.callInitHooks(), this._zoomAnimated = ce && b.any3d && !b.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      },
      setView: function setView(t, e, i) {
        if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(w(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = l({
          animate: i.animate
        }, i.zoom), i.pan = l({
          animate: i.animate,
          duration: i.duration
        }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), this;
        return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
      },
      setZoom: function setZoom(t, e) {
        return this._loaded ? this.setView(this.getCenter(), t, {
          zoom: e
        }) : (this._zoom = t, this);
      },
      zoomIn: function zoomIn(t, e) {
        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
      },
      zoomOut: function zoomOut(t, e) {
        return t = t || (b.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
      },
      setZoomAround: function setZoomAround(t, e, i) {
        var n = this.getZoomScale(e),
          o = this.getSize().divideBy(2),
          t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          n = this.containerPointToLatLng(o.add(t));
        return this.setView(n, e, {
          zoom: i
        });
      },
      _getBoundsCenterZoom: function _getBoundsCenterZoom(t, e) {
        e = e || {}, t = t.getBounds ? t.getBounds() : g(t);
        var i = m(e.paddingTopLeft || e.padding || [0, 0]),
          n = m(e.paddingBottomRight || e.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, i.add(n));
        return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? {
          center: t.getCenter(),
          zoom: o
        } : (e = n.subtract(i).divideBy(2), n = this.project(t.getSouthWest(), o), i = this.project(t.getNorthEast(), o), {
          center: this.unproject(n.add(i).divideBy(2).add(e), o),
          zoom: o
        });
      },
      fitBounds: function fitBounds(t, e) {
        if ((t = g(t)).isValid()) return t = this._getBoundsCenterZoom(t, e), this.setView(t.center, t.zoom, e);
        throw new Error("Bounds are not valid.");
      },
      fitWorld: function fitWorld(t) {
        return this.fitBounds([[-90, -180], [90, 180]], t);
      },
      panTo: function panTo(t, e) {
        return this.setView(t, this._zoom, {
          pan: e
        });
      },
      panBy: function panBy(t, e) {
        var i;
        return e = e || {}, (t = m(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Fe(), this._panAnim.on({
          step: this._onPanTransitionStep,
          end: this._onPanTransitionEnd
        }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate ? (M(this._mapPane, "leaflet-pan-anim"), i = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      },
      flyTo: function flyTo(n, o, t) {
        if (!1 === (t = t || {}).animate || !b.any3d) return this.setView(n, o, t);
        this._stop();
        var s = this.project(this.getCenter()),
          r = this.project(n),
          e = this.getSize(),
          a = this._zoom,
          h = (n = w(n), o = void 0 === o ? a : o, Math.max(e.x, e.y)),
          i = h * this.getZoomScale(a, o),
          l = r.distanceTo(s) || 1,
          u = 1.42,
          c = u * u;
        function d(t) {
          t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l), t = Math.sqrt(t * t + 1) - t;
          return t < 1e-9 ? -18 : Math.log(t);
        }
        function _(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        var m = d(0);
        function f(t) {
          return h * (p(m) * (_(t = m + u * t) / p(t)) - _(m)) / c;
        }
        var g = Date.now(),
          v = (d(1) - m) / u,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
        return this._moveStart(!0, t.noMoveStart), function t() {
          var e = (Date.now() - g) / y,
            i = (1 - Math.pow(1 - e, 1.5)) * v;
          e <= 1 ? (this._flyToFrame = x(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(i) / l)), a), this.getScaleZoom(h / (e = i, h * (p(m) / p(m + u * e))), a), {
            flyTo: !0
          })) : this._move(n, o)._moveEnd(!0);
        }.call(this), this;
      },
      flyToBounds: function flyToBounds(t, e) {
        t = this._getBoundsCenterZoom(t, e);
        return this.flyTo(t.center, t.zoom, e);
      },
      setMaxBounds: function setMaxBounds(t) {
        return t = g(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
      },
      setMinZoom: function setMinZoom(t) {
        var e = this.options.minZoom;
        return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
      },
      setMaxZoom: function setMaxZoom(t) {
        var e = this.options.maxZoom;
        return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
      },
      panInsideBounds: function panInsideBounds(t, e) {
        this._enforcingBounds = !0;
        var i = this.getCenter(),
          t = this._limitCenter(i, this._zoom, g(t));
        return i.equals(t) || this.panTo(t, e), this._enforcingBounds = !1, this;
      },
      panInside: function panInside(t, e) {
        var i = m((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
          n = m(e.paddingBottomRight || e.padding || [0, 0]),
          o = this.project(this.getCenter()),
          t = this.project(t),
          s = this.getPixelBounds(),
          i = _([s.min.add(i), s.max.subtract(n)]),
          s = i.getSize();
        return i.contains(t) || (this._enforcingBounds = !0, n = t.subtract(i.getCenter()), i = i.extend(t).getSize().subtract(s), o.x += n.x < 0 ? -i.x : i.x, o.y += n.y < 0 ? -i.y : i.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1), this;
      },
      invalidateSize: function invalidateSize(t) {
        if (!this._loaded) return this;
        t = l({
          animate: !1,
          pan: !0
        }, !0 === t ? {
          animate: !0
        } : t);
        var e = this.getSize(),
          i = (this._sizeChanged = !0, this._lastCenter = null, this.getSize()),
          n = e.divideBy(2).round(),
          o = i.divideBy(2).round(),
          n = n.subtract(o);
        return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
          oldSize: e,
          newSize: i
        })) : this;
      },
      stop: function stop() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      },
      locate: function locate(t) {
        var e, i;
        return t = this._locateOptions = l({
          timeout: 1e4,
          watch: !1
        }, t), "geolocation" in navigator ? (e = a(this._handleGeolocationResponse, this), i = a(this._handleGeolocationError, this), t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t)) : this._handleGeolocationError({
          code: 0,
          message: "Geolocation not supported."
        }), this;
      },
      stopLocate: function stopLocate() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
      },
      _handleGeolocationError: function _handleGeolocationError(t) {
        var e;
        this._container._leaflet_id && (e = t.code, t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
          code: e,
          message: "Geolocation error: " + t + "."
        }));
      },
      _handleGeolocationResponse: function _handleGeolocationResponse(t) {
        if (this._container._leaflet_id) {
          var e,
            i,
            n = new v(t.coords.latitude, t.coords.longitude),
            o = n.toBounds(2 * t.coords.accuracy),
            s = this._locateOptions,
            r = (s.setView && (e = this.getBoundsZoom(o), this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)), {
              latlng: n,
              bounds: o,
              timestamp: t.timestamp
            });
          for (i in t.coords) "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
          this.fire("locationfound", r);
        }
      },
      addHandler: function addHandler(t, e) {
        return e && (e = this[t] = new e(this), this._handlers.push(e), this.options[t] && e.enable()), this;
      },
      remove: function remove() {
        if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        for (var t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
        for (t in this._panes) T(this._panes[t]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      },
      createPane: function createPane(t, e) {
        e = P("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
        return t && (this._panes[t] = e), e;
      },
      getCenter: function getCenter() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
      },
      getZoom: function getZoom() {
        return this._zoom;
      },
      getBounds: function getBounds() {
        var t = this.getPixelBounds();
        return new s(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
      },
      getMinZoom: function getMinZoom() {
        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
      },
      getMaxZoom: function getMaxZoom() {
        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      },
      getBoundsZoom: function getBoundsZoom(t, e, i) {
        t = g(t), i = m(i || [0, 0]);
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          t = t.getSouthEast(),
          i = this.getSize().subtract(i),
          t = _(this.project(t, n), this.project(r, n)).getSize(),
          r = b.any3d ? this.options.zoomSnap : 1,
          a = i.x / t.x,
          i = i.y / t.y,
          t = e ? Math.max(a, i) : Math.min(a, i),
          n = this.getScaleZoom(t, n);
        return r && (n = Math.round(n / (r / 100)) * (r / 100), n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r), Math.max(o, Math.min(s, n));
      },
      getSize: function getSize() {
        return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
      },
      getPixelBounds: function getPixelBounds(t, e) {
        t = this._getTopLeftPoint(t, e);
        return new f(t, t.add(this.getSize()));
      },
      getPixelOrigin: function getPixelOrigin() {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function getPixelWorldBounds(t) {
        return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
      },
      getPane: function getPane(t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function getPanes() {
        return this._panes;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      getZoomScale: function getZoomScale(t, e) {
        var i = this.options.crs;
        return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e);
      },
      getScaleZoom: function getScaleZoom(t, e) {
        var i = this.options.crs,
          t = (e = void 0 === e ? this._zoom : e, i.zoom(t * i.scale(e)));
        return isNaN(t) ? 1 / 0 : t;
      },
      project: function project(t, e) {
        return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(w(t), e);
      },
      unproject: function unproject(t, e) {
        return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(m(t), e);
      },
      layerPointToLatLng: function layerPointToLatLng(t) {
        t = m(t).add(this.getPixelOrigin());
        return this.unproject(t);
      },
      latLngToLayerPoint: function latLngToLayerPoint(t) {
        return this.project(w(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function wrapLatLng(t) {
        return this.options.crs.wrapLatLng(w(t));
      },
      wrapLatLngBounds: function wrapLatLngBounds(t) {
        return this.options.crs.wrapLatLngBounds(g(t));
      },
      distance: function distance(t, e) {
        return this.options.crs.distance(w(t), w(e));
      },
      containerPointToLayerPoint: function containerPointToLayerPoint(t) {
        return m(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function layerPointToContainerPoint(t) {
        return m(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function containerPointToLatLng(t) {
        t = this.containerPointToLayerPoint(m(t));
        return this.layerPointToLatLng(t);
      },
      latLngToContainerPoint: function latLngToContainerPoint(t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)));
      },
      mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
        return De(t, this._container);
      },
      mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
      },
      mouseEventToLatLng: function mouseEventToLatLng(t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function _initContainer(t) {
        t = this._container = _e(t);
        if (!t) throw new Error("Map container not found.");
        if (t._leaflet_id) throw new Error("Map container is already initialized.");
        S(t, "scroll", this._onScroll, this), this._containerId = h(t);
      },
      _initLayout: function _initLayout() {
        var t = this._container,
          e = (this._fadeAnimated = this.options.fadeAnimation && b.any3d, M(t, "leaflet-container" + (b.touch ? " leaflet-touch" : "") + (b.retina ? " leaflet-retina" : "") + (b.ielt9 ? " leaflet-oldie" : "") + (b.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), pe(t, "position"));
        "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      },
      _initPanes: function _initPanes() {
        var t = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (M(t.markerPane, "leaflet-zoom-hide"), M(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function _resetView(t, e, i) {
        Z(this._mapPane, new p(0, 0));
        var n = !this._loaded,
          o = (this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset"), this._zoom !== e);
        this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
      },
      _moveStart: function _moveStart(t, e) {
        return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
      },
      _move: function _move(t, e, i, n) {
        void 0 === e && (e = this._zoom);
        var o = this._zoom !== e;
        return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
      },
      _moveEnd: function _moveEnd(t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function _stop() {
        return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function _rawPanBy(t) {
        Z(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function _getZoomSpan() {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function _panInsideMaxBounds() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function _checkIfLoaded() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function _initEvents(t) {
        this._targets = {};
        var e = t ? k : S;
        e((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), b.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function _onResize() {
        r(this._resizeRequest), this._resizeRequest = x(function () {
          this.invalidateSize({
            debounceMoveend: !0
          });
        }, this);
      },
      _onScroll: function _onScroll() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      },
      _onMoveEnd: function _onMoveEnd() {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function _findEventTargets(t, e) {
        for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
          if ((i = this._targets[h(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
            r = !0;
            break;
          }
          if (i && i.listens(e, !0)) {
            if (o && !We(s, t)) break;
            if (n.push(i), o) break;
          }
          if (s === this._container) break;
          s = s.parentNode;
        }
        return n = n.length || r || o || !this.listens(e, !0) ? n : [this];
      },
      _isClickDisabled: function _isClickDisabled(t) {
        for (; t && t !== this._container;) {
          if (t._leaflet_disable_click) return !0;
          t = t.parentNode;
        }
      },
      _handleDOMEvent: function _handleDOMEvent(t) {
        var e,
          i = t.target || t.srcElement;
        !this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i) || ("mousedown" === (e = t.type) && Me(i), this._fireDOMEvent(t, e));
      },
      _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
      _fireDOMEvent: function _fireDOMEvent(t, e, i) {
        "click" === t.type && ((a = l({}, t)).type = "preclick", this._fireDOMEvent(a, a.type, i));
        var n = this._findEventTargets(t, e);
        if (i) {
          for (var o = [], s = 0; s < i.length; s++) i[s].listens(e, !0) && o.push(i[s]);
          n = o.concat(n);
        }
        if (n.length) {
          "contextmenu" === e && O(t);
          var r,
            a = n[0],
            h = {
              originalEvent: t
            };
          for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = a.getLatLng && (!a._radius || a._radius <= 10), h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint)), s = 0; s < n.length; s++) if (n[s].fire(e, h, !0), h.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, e)) return;
        }
      },
      _draggableMoved: function _draggableMoved(t) {
        return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      },
      _clearHandlers: function _clearHandlers() {
        for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
      },
      whenReady: function whenReady(t, e) {
        return this._loaded ? t.call(e || this, {
          target: this
        }) : this.on("load", t, e), this;
      },
      _getMapPanePos: function _getMapPanePos() {
        return Pe(this._mapPane) || new p(0, 0);
      },
      _moved: function _moved() {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function _getTopLeftPoint(t, e) {
        return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function _getNewPixelOrigin(t, e) {
        var i = this.getSize()._divideBy(2);
        return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
      },
      _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
        i = this._getNewPixelOrigin(i, e);
        return this.project(t, e)._subtract(i);
      },
      _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, e, i) {
        i = this._getNewPixelOrigin(i, e);
        return _([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)]);
      },
      _getCenterLayerPoint: function _getCenterLayerPoint() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function _getCenterOffset(t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function _limitCenter(t, e, i) {
        var n, o;
        return !i || (n = this.project(t, e), o = this.getSize().divideBy(2), o = new f(n.subtract(o), n.add(o)), o = this._getBoundsOffset(o, i, e), Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e);
      },
      _limitOffset: function _limitOffset(t, e) {
        var i;
        return e ? (i = new f((i = this.getPixelBounds()).min.add(t), i.max.add(t)), t.add(this._getBoundsOffset(i, e))) : t;
      },
      _getBoundsOffset: function _getBoundsOffset(t, e, i) {
        e = _(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), i = e.min.subtract(t.min), e = e.max.subtract(t.max);
        return new p(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y));
      },
      _rebound: function _rebound(t, e) {
        return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
      },
      _limitZoom: function _limitZoom(t) {
        var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          n = b.any3d ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
      },
      _onPanTransitionStep: function _onPanTransitionStep() {
        this.fire("move");
      },
      _onPanTransitionEnd: function _onPanTransitionEnd() {
        z(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function _tryAnimatedPan(t, e) {
        t = this._getCenterOffset(t)._trunc();
        return !(!0 !== (e && e.animate) && !this.getSize().contains(t)) && (this.panBy(t, e), !0);
      },
      _createAnimProxy: function _createAnimProxy() {
        var t = this._proxy = P("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
          var e = ue,
            i = this._proxy.style[e];
          be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function _destroyAnimProxy() {
        T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      },
      _animMoveEnd: function _animMoveEnd() {
        var t = this.getCenter(),
          e = this.getZoom();
        be(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
      },
      _catchTransitionEnd: function _catchTransitionEnd(t) {
        this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function _nothingToAnimate() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      },
      _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
        if (!this._animatingZoom) {
          if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
          var n = this.getZoomScale(e),
            n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          if (!0 !== i.animate && !this.getSize().contains(n)) return !1;
          x(function () {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this);
        }
        return !0;
      },
      _animateZoom: function _animateZoom(t, e, i, n) {
        this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, M(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
          center: t,
          zoom: e,
          noUpdate: n
        }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function _onZoomTransitionEnd() {
        this._animatingZoom && (this._mapPane && z(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
      }
    });
  function Ue(t) {
    return new B(t);
  }
  var B = et.extend({
      options: {
        position: "topright"
      },
      initialize: function initialize(t) {
        c(this, t);
      },
      getPosition: function getPosition() {
        return this.options.position;
      },
      setPosition: function setPosition(t) {
        var e = this._map;
        return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
      },
      getContainer: function getContainer() {
        return this._container;
      },
      addTo: function addTo(t) {
        this.remove(), this._map = t;
        var e = this._container = this.onAdd(t),
          i = this.getPosition(),
          t = t._controlCorners[i];
        return M(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e), this._map.on("unload", this.remove, this), this;
      },
      remove: function remove() {
        return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
      },
      _refocusOnMap: function _refocusOnMap(t) {
        this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
      }
    }),
    Ve = (A.include({
      addControl: function addControl(t) {
        return t.addTo(this), this;
      },
      removeControl: function removeControl(t) {
        return t.remove(), this;
      },
      _initControlPos: function _initControlPos() {
        var i = this._controlCorners = {},
          n = "leaflet-",
          o = this._controlContainer = P("div", n + "control-container", this._container);
        function t(t, e) {
          i[t + e] = P("div", n + t + " " + n + e, o);
        }
        t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
      },
      _clearControlPos: function _clearControlPos() {
        for (var t in this._controlCorners) T(this._controlCorners[t]);
        T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }
    }), B.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function sortFunction(t, e, i, n) {
          return i < n ? -1 : n < i ? 1 : 0;
        }
      },
      initialize: function initialize(t, e, i) {
        for (var n in c(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1, t) this._addLayer(t[n], n);
        for (n in e) this._addLayer(e[n], n, !0);
      },
      onAdd: function onAdd(t) {
        this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
        for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function addTo(t) {
        return B.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function onRemove() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function addBaseLayer(t, e) {
        return this._addLayer(t, e), this._map ? this._update() : this;
      },
      addOverlay: function addOverlay(t, e) {
        return this._addLayer(t, e, !0), this._map ? this._update() : this;
      },
      removeLayer: function removeLayer(t) {
        t.off("add remove", this._onLayerChange, this);
        t = this._getLayer(h(t));
        return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
      },
      expand: function expand() {
        M(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return t < this._section.clientHeight ? (M(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : z(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      },
      collapse: function collapse() {
        return z(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-control-layers",
          e = this._container = P("div", t),
          i = this.options.collapsed,
          n = (e.setAttribute("aria-haspopup", !0), Ie(e), Be(e), this._section = P("section", t + "-list")),
          o = (i && (this._map.on("click", this.collapse, this), S(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this)), this._layersLink = P("a", t + "-toggle", e));
        o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), S(o, {
          keydown: function keydown(t) {
            13 === t.keyCode && this._expandSafely();
          },
          click: function click(t) {
            O(t), this._expandSafely();
          }
        }, this), i || this.expand(), this._baseLayersList = P("div", t + "-base", n), this._separator = P("div", t + "-separator", n), this._overlaysList = P("div", t + "-overlays", n), e.appendChild(n);
      },
      _getLayer: function _getLayer(t) {
        for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && h(this._layers[e].layer) === t) return this._layers[e];
      },
      _addLayer: function _addLayer(t, e, i) {
        this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
          layer: t,
          name: e,
          overlay: i
        }), this.options.sortLayers && this._layers.sort(a(function (t, e) {
          return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
        }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      },
      _update: function _update() {
        if (this._container) {
          me(this._baseLayersList), me(this._overlaysList), this._layerControlInputs = [];
          for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++) i = this._layers[o], this._addItem(i), e = e || i.overlay, t = t || !i.overlay, n += i.overlay ? 0 : 1;
          this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), this._separator.style.display = e && t ? "" : "none";
        }
        return this;
      },
      _onLayerChange: function _onLayerChange(t) {
        this._handlingClick || this._update();
        var e = this._getLayer(h(t.target)),
          t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
        t && this._map.fire(t, e);
      },
      _createRadioElement: function _createRadioElement(t, e) {
        t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", e = document.createElement("div");
        return e.innerHTML = t, e.firstChild;
      },
      _addItem: function _addItem(t) {
        var e,
          i = document.createElement("label"),
          n = this._map.hasLayer(t.layer),
          n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + h(this), n), this._layerControlInputs.push(e), e.layerId = h(t.layer), S(e, "click", this._onInputClick, this), document.createElement("span")),
          o = (n.innerHTML = " " + t.name, document.createElement("span"));
        return i.appendChild(o), o.appendChild(e), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i;
      },
      _onInputClick: function _onInputClick() {
        if (!this._preventClick) {
          var t,
            e,
            i = this._layerControlInputs,
            n = [],
            o = [];
          this._handlingClick = !0;
          for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
          for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          this._handlingClick = !1, this._refocusOnMap();
        }
      },
      _checkDisabledLayers: function _checkDisabledLayers() {
        for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom;
      },
      _expandIfNotCollapsed: function _expandIfNotCollapsed() {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expandSafely: function _expandSafely() {
        var t = this._section,
          e = (this._preventClick = !0, S(t, "click", O), this.expand(), this);
        setTimeout(function () {
          k(t, "click", O), e._preventClick = !1;
        });
      }
    })),
    qe = B.extend({
      options: {
        position: "topleft",
        zoomInText: '<span aria-hidden="true">+</span>',
        zoomInTitle: "Zoom in",
        zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
        zoomOutTitle: "Zoom out"
      },
      onAdd: function onAdd(t) {
        var e = "leaflet-control-zoom",
          i = P("div", e + " leaflet-bar"),
          n = this.options;
        return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
      },
      onRemove: function onRemove(t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function disable() {
        return this._disabled = !0, this._updateDisabled(), this;
      },
      enable: function enable() {
        return this._disabled = !1, this._updateDisabled(), this;
      },
      _zoomIn: function _zoomIn(t) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function _zoomOut(t) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function _createButton(t, e, i, n, o) {
        i = P("a", i, n);
        return i.innerHTML = t, i.href = "#", i.title = e, i.setAttribute("role", "button"), i.setAttribute("aria-label", e), Ie(i), S(i, "click", Re), S(i, "click", o, this), S(i, "click", this._refocusOnMap, this), i;
      },
      _updateDisabled: function _updateDisabled() {
        var t = this._map,
          e = "leaflet-disabled";
        z(this._zoomInButton, e), z(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (M(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (M(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
      }
    }),
    Ge = (A.mergeOptions({
      zoomControl: !0
    }), A.addInitHook(function () {
      this.options.zoomControl && (this.zoomControl = new qe(), this.addControl(this.zoomControl));
    }), B.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0
      },
      onAdd: function onAdd(t) {
        var e = "leaflet-control-scale",
          i = P("div", e),
          n = this.options;
        return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
      },
      onRemove: function onRemove(t) {
        t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      },
      _addScales: function _addScales(t, e, i) {
        t.metric && (this._mScale = P("div", e, i)), t.imperial && (this._iScale = P("div", e, i));
      },
      _update: function _update() {
        var t = this._map,
          e = t.getSize().y / 2,
          t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
        this._updateScales(t);
      },
      _updateScales: function _updateScales(t) {
        this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function _updateMetric(t) {
        var e = this._getRoundNum(t);
        this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t);
      },
      _updateImperial: function _updateImperial(t) {
        var e,
          i,
          t = 3.2808399 * t;
        5280 < t ? (i = this._getRoundNum(e = t / 5280), this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t), this._updateScale(this._iScale, i + " ft", i / t));
      },
      _updateScale: function _updateScale(t, e, i) {
        t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
      },
      _getRoundNum: function _getRoundNum(t) {
        var e = Math.pow(10, (Math.floor(t) + "").length - 1),
          t = t / e;
        return e * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
      }
    })),
    Ke = B.extend({
      options: {
        position: "bottomright",
        prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (b.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
      },
      initialize: function initialize(t) {
        c(this, t), this._attributions = {};
      },
      onAdd: function onAdd(t) {
        for (var e in (t.attributionControl = this)._container = P("div", "leaflet-control-attribution"), Ie(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
        return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
      },
      onRemove: function onRemove(t) {
        t.off("layeradd", this._addAttribution, this);
      },
      _addAttribution: function _addAttribution(t) {
        t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function () {
          this.removeAttribution(t.layer.getAttribution());
        }, this));
      },
      setPrefix: function setPrefix(t) {
        return this.options.prefix = t, this._update(), this;
      },
      addAttribution: function addAttribution(t) {
        return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
      },
      removeAttribution: function removeAttribution(t) {
        return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
      },
      _update: function _update() {
        if (this._map) {
          var t,
            e = [];
          for (t in this._attributions) this._attributions[t] && e.push(t);
          var i = [];
          this.options.prefix && i.push(this.options.prefix), e.length && i.push(e.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
        }
      }
    }),
    n = (A.mergeOptions({
      attributionControl: !0
    }), A.addInitHook(function () {
      this.options.attributionControl && new Ke().addTo(this);
    }), B.Layers = Ve, B.Zoom = qe, B.Scale = Ge, B.Attribution = Ke, Ue.layers = function (t, e, i) {
      return new Ve(t, e, i);
    }, Ue.zoom = function (t) {
      return new qe(t);
    }, Ue.scale = function (t) {
      return new Ge(t);
    }, Ue.attribution = function (t) {
      return new Ke(t);
    }, et.extend({
      initialize: function initialize(t) {
        this._map = t;
      },
      enable: function enable() {
        return this._enabled || (this._enabled = !0, this.addHooks()), this;
      },
      disable: function disable() {
        return this._enabled && (this._enabled = !1, this.removeHooks()), this;
      },
      enabled: function enabled() {
        return !!this._enabled;
      }
    })),
    ft = (n.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    }, {
      Events: e
    }),
    Ye = b.touch ? "touchstart mousedown" : "mousedown",
    Xe = it.extend({
      options: {
        clickTolerance: 3
      },
      initialize: function initialize(t, e, i, n) {
        c(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
      },
      enable: function enable() {
        this._enabled || (S(this._dragStartTarget, Ye, this._onDown, this), this._enabled = !0);
      },
      disable: function disable() {
        this._enabled && (Xe._dragging === this && this.finishDrag(!0), k(this._dragStartTarget, Ye, this._onDown, this), this._enabled = !1, this._moved = !1);
      },
      _onDown: function _onDown(t) {
        var e, i;
        this._enabled && (this._moved = !1, ve(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? Xe._dragging === this && this.finishDrag() : Xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xe._dragging = this)._preventOutline && Me(this._element), Le(), re(), this._moving || (this.fire("down"), i = t.touches ? t.touches[0] : t, e = Ce(this._element), this._startPoint = new p(i.clientX, i.clientY), this._startPos = Pe(this._element), this._parentScale = Ze(e), i = "mousedown" === t.type, S(document, i ? "mousemove" : "touchmove", this._onMove, this), S(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
      },
      _onMove: function _onMove(t) {
        var e;
        this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new p((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, O(t), this._moved || (this.fire("dragstart"), this._moved = !0, M(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), M(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, this._lastEvent = t, this._updatePosition()));
      },
      _updatePosition: function _updatePosition() {
        var t = {
          originalEvent: this._lastEvent
        };
        this.fire("predrag", t), Z(this._element, this._newPos), this.fire("drag", t);
      },
      _onUp: function _onUp() {
        this._enabled && this.finishDrag();
      },
      finishDrag: function finishDrag(t) {
        z(document.body, "leaflet-dragging"), this._lastTarget && (z(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), k(document, "mousemove touchmove", this._onMove, this), k(document, "mouseup touchend touchcancel", this._onUp, this), Te(), ae();
        var e = this._moved && this._moving;
        this._moving = !1, Xe._dragging = !1, e && this.fire("dragend", {
          noInertia: t,
          distance: this._newPos.distanceTo(this._startPos)
        });
      }
    });
  function Je(t, e, i) {
    for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++) t[c]._code = si(t[c], e);
    for (s = 0; s < 4; s++) {
      for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++) r = t[c], a = t[o], r._code & h ? a._code & h || ((l = oi(a, r, h, e, i))._code = si(l, e), n.push(l)) : (a._code & h && ((l = oi(a, r, h, e, i))._code = si(l, e), n.push(l)), n.push(r));
      t = n;
    }
    return t;
  }
  function $e(t, e) {
    var i, n, o, s, r, a, h;
    if (!t || 0 === t.length) throw new Error("latlngs not passed");
    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
    for (var l = w([0, 0]), u = g(t), c = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (l = Qe(t)), t.length), d = [], _ = 0; _ < c; _++) {
      var p = w(t[_]);
      d.push(e.project(w([p.lat - l.lat, p.lng - l.lng])));
    }
    for (_ = r = a = h = 0, i = c - 1; _ < c; i = _++) n = d[_], o = d[i], s = n.y * o.x - o.y * n.x, a += (n.x + o.x) * s, h += (n.y + o.y) * s, r += 3 * s;
    u = 0 === r ? d[0] : [a / r, h / r], u = e.unproject(m(u));
    return w([u.lat + l.lat, u.lng + l.lng]);
  }
  function Qe(t) {
    for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
      var s = w(t[o]);
      e += s.lat, i += s.lng, n++;
    }
    return w([e / n, i / n]);
  }
  var ti,
    gt = {
      __proto__: null,
      clipPolygon: Je,
      polygonCenter: $e,
      centroid: Qe
    };
  function ei(t, e) {
    if (e && t.length) {
      var i = t = function (t, e) {
          for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) (function (t, e) {
            var i = e.x - t.x,
              e = e.y - t.y;
            return i * i + e * e;
          })(t[n], t[o]) > e && (i.push(t[n]), o = n);
          o < s - 1 && i.push(t[s - 1]);
          return i;
        }(t, e = e * e),
        n = i.length,
        o = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(n);
      o[0] = o[n - 1] = 1, function t(e, i, n, o, s) {
        var r,
          a,
          h,
          l = 0;
        for (a = o + 1; a <= s - 1; a++) h = ri(e[a], e[o], e[s], !0), l < h && (r = a, l = h);
        n < l && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s));
      }(i, o, e, 0, n - 1);
      var s,
        r = [];
      for (s = 0; s < n; s++) o[s] && r.push(i[s]);
      return r;
    }
    return t.slice();
  }
  function ii(t, e, i) {
    return Math.sqrt(ri(t, e, i, !0));
  }
  function ni(t, e, i, n, o) {
    var s,
      r,
      a,
      h = n ? ti : si(t, i),
      l = si(e, i);
    for (ti = l;;) {
      if (!(h | l)) return [t, e];
      if (h & l) return !1;
      a = si(r = oi(t, e, s = h || l, i, o), i), s === h ? (t = r, h = a) : (e = r, l = a);
    }
  }
  function oi(t, e, i, n, o) {
    var s,
      r,
      a = e.x - t.x,
      e = e.y - t.y,
      h = n.min,
      n = n.max;
    return 8 & i ? (s = t.x + a * (n.y - t.y) / e, r = n.y) : 4 & i ? (s = t.x + a * (h.y - t.y) / e, r = h.y) : 2 & i ? (s = n.x, r = t.y + e * (n.x - t.x) / a) : 1 & i && (s = h.x, r = t.y + e * (h.x - t.x) / a), new p(s, r, o);
  }
  function si(t, e) {
    var i = 0;
    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
  }
  function ri(t, e, i, n) {
    var o = e.x,
      e = e.y,
      s = i.x - o,
      r = i.y - e,
      a = s * s + r * r;
    return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a) ? (o = i.x, e = i.y) : 0 < a && (o += s * a, e += r * a)), s = t.x - o, r = t.y - e, n ? s * s + r * r : new p(o, e);
  }
  function I(t) {
    return !d(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }
  function ai(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), I(t);
  }
  function hi(t, e) {
    var i, n, o, s, r, a;
    if (!t || 0 === t.length) throw new Error("latlngs not passed");
    I(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
    for (var h = w([0, 0]), l = g(t), u = (l.getNorthWest().distanceTo(l.getSouthWest()) * l.getNorthEast().distanceTo(l.getNorthWest()) < 1700 && (h = Qe(t)), t.length), c = [], d = 0; d < u; d++) {
      var _ = w(t[d]);
      c.push(e.project(w([_.lat - h.lat, _.lng - h.lng])));
    }
    for (i = d = 0; d < u - 1; d++) i += c[d].distanceTo(c[d + 1]) / 2;
    if (0 === i) a = c[0];else for (n = d = 0; d < u - 1; d++) if (o = c[d], s = c[d + 1], i < (n += r = o.distanceTo(s))) {
      a = [s.x - (r = (n - i) / r) * (s.x - o.x), s.y - r * (s.y - o.y)];
      break;
    }
    l = e.unproject(m(a));
    return w([l.lat + h.lat, l.lng + h.lng]);
  }
  var vt = {
      __proto__: null,
      simplify: ei,
      pointToSegmentDistance: ii,
      closestPointOnSegment: function closestPointOnSegment(t, e, i) {
        return ri(t, e, i);
      },
      clipSegment: ni,
      _getEdgeIntersection: oi,
      _getBitCode: si,
      _sqClosestPointOnSegment: ri,
      isFlat: I,
      _flat: ai,
      polylineCenter: hi
    },
    yt = {
      project: function project(t) {
        return new p(t.lng, t.lat);
      },
      unproject: function unproject(t) {
        return new v(t.y, t.x);
      },
      bounds: new f([-180, -90], [180, 90])
    },
    xt = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new f([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
      project: function project(t) {
        var e = Math.PI / 180,
          i = this.R,
          n = t.lat * e,
          o = this.R_MINOR / i,
          o = Math.sqrt(1 - o * o),
          s = o * Math.sin(n),
          s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2),
          n = -i * Math.log(Math.max(s, 1e-10));
        return new p(t.lng * e * i, n);
      },
      unproject: function unproject(t) {
        for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
        return new v(a * i, t.x * i / n);
      }
    },
    wt = {
      __proto__: null,
      LonLat: yt,
      Mercator: xt,
      SphericalMercator: rt
    },
    Pt = l({}, st, {
      code: "EPSG:3395",
      projection: xt,
      transformation: ht(bt = .5 / (Math.PI * xt.R), .5, -bt, .5)
    }),
    li = l({}, st, {
      code: "EPSG:4326",
      projection: yt,
      transformation: ht(1 / 180, 1, -1 / 180, .5)
    }),
    Lt = l({}, ot, {
      projection: yt,
      transformation: ht(1, 0, -1, 0),
      scale: function scale(t) {
        return Math.pow(2, t);
      },
      zoom: function zoom(t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function distance(t, e) {
        var i = e.lng - t.lng,
          e = e.lat - t.lat;
        return Math.sqrt(i * i + e * e);
      },
      infinite: !0
    }),
    o = (ot.Earth = st, ot.EPSG3395 = Pt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, ot.EPSG4326 = li, ot.Simple = Lt, it.extend({
      options: {
        pane: "overlayPane",
        attribution: null,
        bubblingMouseEvents: !0
      },
      addTo: function addTo(t) {
        return t.addLayer(this), this;
      },
      remove: function remove() {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function removeFrom(t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function getPane(t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function addInteractiveTarget(t) {
        return this._map._targets[h(t)] = this;
      },
      removeInteractiveTarget: function removeInteractiveTarget(t) {
        return delete this._map._targets[h(t)], this;
      },
      getAttribution: function getAttribution() {
        return this.options.attribution;
      },
      _layerAdd: function _layerAdd(t) {
        var e,
          i = t.target;
        i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && (e = this.getEvents(), i.on(e, this), this.once("remove", function () {
          i.off(e, this);
        }, this)), this.onAdd(i), this.fire("add"), i.fire("layeradd", {
          layer: this
        }));
      }
    })),
    ui = (A.include({
      addLayer: function addLayer(t) {
        var e;
        if (t._layerAdd) return e = h(t), this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
        throw new Error("The provided object is not a Layer.");
      },
      removeLayer: function removeLayer(t) {
        var e = h(t);
        return this._layers[e] && (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", {
          layer: t
        }), t.fire("remove")), t._map = t._mapToAdd = null), this;
      },
      hasLayer: function hasLayer(t) {
        return h(t) in this._layers;
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function _addLayers(t) {
        for (var e = 0, i = (t = t ? d(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e]);
      },
      _addZoomLimit: function _addZoomLimit(t) {
        isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t, this._updateZoomLevels());
      },
      _removeZoomLimit: function _removeZoomLimit(t) {
        t = h(t);
        this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
      },
      _updateZoomLevels: function _updateZoomLevels() {
        var t,
          e = 1 / 0,
          i = -1 / 0,
          n = this._getZoomSpan();
        for (t in this._zoomBoundLayers) var o = this._zoomBoundLayers[t].options, e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
        this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = e === 1 / 0 ? void 0 : e, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }
    }), o.extend({
      initialize: function initialize(t, e) {
        var i, n;
        if (c(this, e), this._layers = {}, t) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
      },
      addLayer: function addLayer(t) {
        var e = this.getLayerId(t);
        return this._layers[e] = t, this._map && this._map.addLayer(t), this;
      },
      removeLayer: function removeLayer(t) {
        t = t in this._layers ? t : this.getLayerId(t);
        return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
      },
      hasLayer: function hasLayer(t) {
        return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
      },
      clearLayers: function clearLayers() {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function invoke(t) {
        var e,
          i,
          n = Array.prototype.slice.call(arguments, 1);
        for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
        return this;
      },
      onAdd: function onAdd(t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function onRemove(t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function eachLayer(t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      getLayer: function getLayer(t) {
        return this._layers[t];
      },
      getLayers: function getLayers() {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function setZIndex(t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: h
    })),
    ci = ui.extend({
      addLayer: function addLayer(t) {
        return this.hasLayer(t) ? this : (t.addEventParent(this), ui.prototype.addLayer.call(this, t), this.fire("layeradd", {
          layer: t
        }));
      },
      removeLayer: function removeLayer(t) {
        return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), ui.prototype.removeLayer.call(this, t), this.fire("layerremove", {
          layer: t
        })) : this;
      },
      setStyle: function setStyle(t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function bringToFront() {
        return this.invoke("bringToFront");
      },
      bringToBack: function bringToBack() {
        return this.invoke("bringToBack");
      },
      getBounds: function getBounds() {
        var t,
          e = new s();
        for (t in this._layers) {
          var i = this._layers[t];
          e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
        }
        return e;
      }
    }),
    di = et.extend({
      options: {
        popupAnchor: [0, 0],
        tooltipAnchor: [0, 0],
        crossOrigin: !1
      },
      initialize: function initialize(t) {
        c(this, t);
      },
      createIcon: function createIcon(t) {
        return this._createIcon("icon", t);
      },
      createShadow: function createShadow(t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function _createIcon(t, e) {
        var i = this._getIconUrl(t);
        if (i) return i = this._createImg(i, e && "IMG" === e.tagName ? e : null), this._setIconStyles(i, t), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i;
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      },
      _setIconStyles: function _setIconStyles(t, e) {
        var i = this.options,
          n = i[e + "Size"],
          n = m(n = "number" == typeof n ? [n, n] : n),
          o = m("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
        t.className = "leaflet-marker-" + e + " " + (i.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px");
      },
      _createImg: function _createImg(t, e) {
        return (e = e || document.createElement("img")).src = t, e;
      },
      _getIconUrl: function _getIconUrl(t) {
        return b.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
      }
    });
  var _i = di.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function _getIconUrl(t) {
        return "string" != typeof _i.imagePath && (_i.imagePath = this._detectIconPath()), (this.options.imagePath || _i.imagePath) + di.prototype._getIconUrl.call(this, t);
      },
      _stripUrl: function _stripUrl(t) {
        function e(t, e, i) {
          return (e = e.exec(t)) && e[i];
        }
        return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
      },
      _detectIconPath: function _detectIconPath() {
        var t = P("div", "leaflet-default-icon-path", document.body),
          e = pe(t, "background-image") || pe(t, "backgroundImage");
        return document.body.removeChild(t), (e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : "";
      }
    }),
    pi = n.extend({
      initialize: function initialize(t) {
        this._marker = t;
      },
      addHooks: function addHooks() {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Xe(t, t, !0)), this._draggable.on({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).enable(), M(t, "leaflet-marker-draggable");
      },
      removeHooks: function removeHooks() {
        this._draggable.off({
          dragstart: this._onDragStart,
          predrag: this._onPreDrag,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this).disable(), this._marker._icon && z(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function _adjustPan(t) {
        var e = this._marker,
          i = e._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = Pe(e._icon),
          r = i.getPixelBounds(),
          a = i.getPixelOrigin(),
          a = _(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
        a.contains(s) || (o = m((Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x), (Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y)).multiplyBy(n), i.panBy(o, {
          animate: !1
        }), this._draggable._newPos._add(o), this._draggable._startPos._add(o), Z(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = x(this._adjustPan.bind(this, t)));
      },
      _onDragStart: function _onDragStart() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function _onPreDrag(t) {
        this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t)));
      },
      _onDrag: function _onDrag(t) {
        var e = this._marker,
          i = e._shadow,
          n = Pe(e._icon),
          o = e._map.layerPointToLatLng(n);
        i && Z(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function _onDragEnd(t) {
        r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      }
    }),
    mi = o.extend({
      options: {
        icon: new _i(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "Marker",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        autoPanOnFocus: !0,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10
      },
      initialize: function initialize(t, e) {
        c(this, e), this._latlng = w(t);
      },
      onAdd: function onAdd(t) {
        this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      },
      onRemove: function onRemove(t) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      },
      getEvents: function getEvents() {
        return {
          zoom: this.update,
          viewreset: this.update
        };
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        var e = this._latlng;
        return this._latlng = w(t), this.update(), this.fire("move", {
          oldLatLng: e,
          latlng: this._latlng
        });
      },
      setZIndexOffset: function setZIndexOffset(t) {
        return this.options.zIndexOffset = t, this.update();
      },
      getIcon: function getIcon() {
        return this.options.icon;
      },
      setIcon: function setIcon(t) {
        return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      },
      getElement: function getElement() {
        return this._icon;
      },
      update: function update() {
        var t;
        return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
      },
      _initIcon: function _initIcon() {
        var t = this.options,
          e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          i = t.icon.createIcon(this._icon),
          n = !1,
          i = (i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), M(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && S(i, "focus", this._panOnFocus, this), t.icon.createShadow(this._shadow)),
          o = !1;
        i !== this._shadow && (this._removeShadow(), o = !0), i && (M(i, e), i.alt = ""), this._shadow = i, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), i && o && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function _removeIcon() {
        this.options.riseOnHover && this.off({
          mouseover: this._bringToFront,
          mouseout: this._resetZIndex
        }), this.options.autoPanOnFocus && k(this._icon, "focus", this._panOnFocus, this), T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      },
      _removeShadow: function _removeShadow() {
        this._shadow && T(this._shadow), this._shadow = null;
      },
      _setPos: function _setPos(t) {
        this._icon && Z(this._icon, t), this._shadow && Z(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
      },
      _updateZIndex: function _updateZIndex(t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function _animateZoom(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
        this._setPos(t);
      },
      _initInteraction: function _initInteraction() {
        var t;
        this.options.interactive && (M(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), pi && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new pi(this), t && this.dragging.enable()));
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._map && this._updateOpacity(), this;
      },
      _updateOpacity: function _updateOpacity() {
        var t = this.options.opacity;
        this._icon && C(this._icon, t), this._shadow && C(this._shadow, t);
      },
      _bringToFront: function _bringToFront() {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function _resetZIndex() {
        this._updateZIndex(0);
      },
      _panOnFocus: function _panOnFocus() {
        var t,
          e,
          i = this._map;
        i && (t = (e = this.options.icon.options).iconSize ? m(e.iconSize) : m(0, 0), e = e.iconAnchor ? m(e.iconAnchor) : m(0, 0), i.panInside(this._latlng, {
          paddingTopLeft: e,
          paddingBottomRight: t.subtract(e)
        }));
      },
      _getPopupAnchor: function _getPopupAnchor() {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function _getTooltipAnchor() {
        return this.options.icon.options.tooltipAnchor;
      }
    });
  var fi = o.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: .2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0
      },
      beforeAdd: function beforeAdd(t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function onAdd() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      },
      onRemove: function onRemove() {
        this._renderer._removePath(this);
      },
      redraw: function redraw() {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function setStyle(t) {
        return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
      },
      bringToFront: function bringToFront() {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function bringToBack() {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function getElement() {
        return this._path;
      },
      _reset: function _reset() {
        this._project(), this._update();
      },
      _clickTolerance: function _clickTolerance() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
      }
    }),
    gi = fi.extend({
      options: {
        fill: !0,
        radius: 10
      },
      initialize: function initialize(t, e) {
        c(this, e), this._latlng = w(t), this._radius = this.options.radius;
      },
      setLatLng: function setLatLng(t) {
        var e = this._latlng;
        return this._latlng = w(t), this.redraw(), this.fire("move", {
          oldLatLng: e,
          latlng: this._latlng
        });
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setRadius: function setRadius(t) {
        return this.options.radius = this._radius = t, this.redraw();
      },
      getRadius: function getRadius() {
        return this._radius;
      },
      setStyle: function setStyle(t) {
        var e = t && t.radius || this._radius;
        return fi.prototype.setStyle.call(this, t), this.setRadius(e), this;
      },
      _project: function _project() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      },
      _updateBounds: function _updateBounds() {
        var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          t = [t + i, e + i];
        this._pxBounds = new f(this._point.subtract(t), this._point.add(t));
      },
      _update: function _update() {
        this._map && this._updatePath();
      },
      _updatePath: function _updatePath() {
        this._renderer._updateCircle(this);
      },
      _empty: function _empty() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      },
      _containsPoint: function _containsPoint(t) {
        return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }
    });
  var vi = gi.extend({
    initialize: function initialize(t, e, i) {
      if (c(this, e = "number" == typeof e ? l({}, i, {
        radius: e
      }) : e), this._latlng = w(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new s(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: fi.prototype.setStyle,
    _project: function _project() {
      var t,
        e,
        i,
        n,
        o,
        s = this._latlng.lng,
        r = this._latlng.lat,
        a = this._map,
        h = a.options.crs;
      h.distance === st.distance ? (n = Math.PI / 180, o = this._mRadius / st.R / n, t = a.project([r + o, s]), e = a.project([r - o, s]), e = t.add(e).divideBy(2), i = a.unproject(e).lat, n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(i * n)) / (Math.cos(r * n) * Math.cos(i * n))) / n, !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * r)), this._point = e.subtract(a.getPixelOrigin()), this._radius = isNaN(n) ? 0 : e.x - a.project([i, s - n]).x, this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])), this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(o).x), this._updateBounds();
    }
  });
  var yi = fi.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, e) {
      c(this, e), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var e = 1 / 0, i = null, n = ri, o = 0, s = this._parts.length; o < s; o++) for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
        var l,
          u,
          c = n(t, l = r[a - 1], u = r[a], !0);
        c < e && (e = c, i = n(t, l, u));
      }
      return i && (i.distance = Math.sqrt(e)), i;
    },
    getCenter: function getCenter() {
      if (this._map) return hi(this._defaultShape(), this._map.options.crs);
      throw new Error("Must add layer to map before using getCenter()");
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, e) {
      return e = e || this._defaultShape(), t = w(t), e.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new s(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return I(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var e = [], i = I(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = w(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
      return e;
    },
    _project: function _project() {
      var t = new f();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
        t = new p(t, t);
      this._rawPxBounds && (this._pxBounds = new f([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]));
    },
    _projectLatlngs: function _projectLatlngs(t, e, i) {
      var n,
        o,
        s = t[0] instanceof v,
        r = t.length;
      if (s) {
        for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
        e.push(o);
      } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) for (e = 0, i = (o = this._rings[r]).length; e < i - 1; e++) (n = ni(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]), a++));
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = ei(t[i], e);
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, e) {
      var i,
        n,
        o,
        s,
        r,
        a,
        h = this._clickTolerance();
      if (this._pxBounds && this._pxBounds.contains(t)) for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && ii(t, a[o], a[n]) <= h) return !0;
      return !1;
    }
  });
  yi._flat = ai;
  var xi = yi.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (this._map) return $e(this._defaultShape(), this._map.options.crs);
      throw new Error("Must add layer to map before using getCenter()");
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var t = yi.prototype._convertLatLngs.call(this, t),
        e = t.length;
      return 2 <= e && t[0] instanceof v && t[0].equals(t[e - 1]) && t.pop(), t;
    },
    _setLatLngs: function _setLatLngs(t) {
      yi.prototype._setLatLngs.call(this, t), I(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return (I(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
        e = this.options.weight,
        e = new p(e, e),
        t = new f(t.min.subtract(e), t.max.add(e));
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, n = 0, o = this._rings.length; n < o; n++) (i = Je(this._rings[n], t, !0)).length && this._parts.push(i);
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var e,
        i,
        n,
        o,
        s,
        r,
        a,
        h,
        l = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (o = 0, a = this._parts.length; o < a; o++) for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
      return l || yi.prototype._containsPoint.call(this, t, !0);
    }
  });
  var wi = ci.extend({
    initialize: function initialize(t, e) {
      c(this, e), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var e,
        i,
        n,
        o = d(t) ? t : t.features;
      if (o) {
        for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        return this;
      }
      var s,
        r = this.options;
      return (!r.filter || r.filter(t)) && (s = bi(t, r)) ? (s.feature = Zi(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this;
    },
    resetStyle: function resetStyle(t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
    },
    setStyle: function setStyle(e) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, e);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, e) {
      t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
    }
  });
  function bi(t, e) {
    var i,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      l = e && e.pointToLayer,
      u = e && e.coordsToLatLng || Li;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return Pi(l, t, i = u(a), e);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(Pi(l, t, i, e));
        return new ci(h);
      case "LineString":
      case "MultiLineString":
        return n = Ti(a, "LineString" === r.type ? 0 : 1, u), new yi(n, e);
      case "Polygon":
      case "MultiPolygon":
        return n = Ti(a, "Polygon" === r.type ? 1 : 2, u), new xi(n, e);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = bi({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, e);
          c && h.push(c);
        }
        return new ci(h);
      case "FeatureCollection":
        for (o = 0, s = r.features.length; o < s; o++) {
          var d = bi(r.features[o], e);
          d && h.push(d);
        }
        return new ci(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function Pi(t, e, i, n) {
    return t ? t(e, i) : new mi(i, n && n.markersInheritOptions && n);
  }
  function Li(t) {
    return new v(t[1], t[0], t[2]);
  }
  function Ti(t, e, i) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Ti(t[s], e - 1, i) : (i || Li)(t[s]), o.push(n);
    return o;
  }
  function Mi(t, e) {
    return void 0 !== (t = w(t)).alt ? [i(t.lng, e), i(t.lat, e), i(t.alt, e)] : [i(t.lng, e), i(t.lat, e)];
  }
  function zi(t, e, i, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? zi(t[s], I(t[s]) ? 0 : e - 1, i, n) : Mi(t[s], n));
    return !e && i && 0 < o.length && o.push(o[0].slice()), o;
  }
  function Ci(t, e) {
    return t.feature ? l({}, t.feature, {
      geometry: e
    }) : Zi(e);
  }
  function Zi(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }
  Tt = {
    toGeoJSON: function toGeoJSON(t) {
      return Ci(this, {
        type: "Point",
        coordinates: Mi(this.getLatLng(), t)
      });
    }
  };
  function Si(t, e) {
    return new wi(t, e);
  }
  mi.include(Tt), vi.include(Tt), gi.include(Tt), yi.include({
    toGeoJSON: function toGeoJSON(t) {
      var e = !I(this._latlngs);
      return Ci(this, {
        type: (e ? "Multi" : "") + "LineString",
        coordinates: zi(this._latlngs, e ? 1 : 0, !1, t)
      });
    }
  }), xi.include({
    toGeoJSON: function toGeoJSON(t) {
      var e = !I(this._latlngs),
        i = e && !I(this._latlngs[0]),
        t = zi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
      return Ci(this, {
        type: (i ? "Multi" : "") + "Polygon",
        coordinates: t = e ? t : [t]
      });
    }
  }), ui.include({
    toMultiPoint: function toMultiPoint(e) {
      var i = [];
      return this.eachLayer(function (t) {
        i.push(t.toGeoJSON(e).geometry.coordinates);
      }), Ci(this, {
        type: "MultiPoint",
        coordinates: i
      });
    },
    toGeoJSON: function toGeoJSON(e) {
      var i,
        n,
        t = this.feature && this.feature.geometry && this.feature.geometry.type;
      return "MultiPoint" === t ? this.toMultiPoint(e) : (i = "GeometryCollection" === t, n = [], this.eachLayer(function (t) {
        t.toGeoJSON && (t = t.toGeoJSON(e), i ? n.push(t.geometry) : "FeatureCollection" === (t = Zi(t)).type ? n.push.apply(n, t.features) : n.push(t));
      }), i ? Ci(this, {
        geometries: n,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: n
      });
    }
  });
  var Mt = Si,
    Ei = o.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: ""
      },
      initialize: function initialize(t, e, i) {
        this._url = t, this._bounds = g(e), c(this, i);
      },
      onAdd: function onAdd() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (M(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      },
      onRemove: function onRemove() {
        T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function setOpacity(t) {
        return this.options.opacity = t, this._image && this._updateOpacity(), this;
      },
      setStyle: function setStyle(t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function bringToFront() {
        return this._map && fe(this._image), this;
      },
      bringToBack: function bringToBack() {
        return this._map && ge(this._image), this;
      },
      setUrl: function setUrl(t) {
        return this._url = t, this._image && (this._image.src = t), this;
      },
      setBounds: function setBounds(t) {
        return this._bounds = g(t), this._map && this._reset(), this;
      },
      getEvents: function getEvents() {
        var t = {
          zoom: this._reset,
          viewreset: this._reset
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function setZIndex(t) {
        return this.options.zIndex = t, this._updateZIndex(), this;
      },
      getBounds: function getBounds() {
        return this._bounds;
      },
      getElement: function getElement() {
        return this._image;
      },
      _initImage: function _initImage() {
        var t = "IMG" === this._url.tagName,
          e = this._image = t ? this._url : P("img");
        M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt);
      },
      _animateZoom: function _animateZoom(t) {
        var e = this._map.getZoomScale(t.zoom),
          t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
        be(this._image, t, e);
      },
      _reset: function _reset() {
        var t = this._image,
          e = new f(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          i = e.getSize();
        Z(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
      },
      _updateOpacity: function _updateOpacity() {
        C(this._image, this.options.opacity);
      },
      _updateZIndex: function _updateZIndex() {
        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function _overlayOnError() {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && (this._url = t, this._image.src = t);
      },
      getCenter: function getCenter() {
        return this._bounds.getCenter();
      }
    }),
    ki = Ei.extend({
      options: {
        autoplay: !0,
        loop: !0,
        keepAspectRatio: !0,
        muted: !1,
        playsInline: !0
      },
      _initImage: function _initImage() {
        var t = "VIDEO" === this._url.tagName,
          e = this._image = t ? this._url : P("video");
        if (M(e, "leaflet-image-layer"), this._zoomAnimated && M(e, "leaflet-zoom-animated"), this.options.className && M(e, this.options.className), e.onselectstart = u, e.onmousemove = u, e.onloadeddata = a(this.fire, this, "load"), t) {
          for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
          this._url = 0 < i.length ? n : [e.src];
        } else {
          d(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var r = P("source");
            r.src = this._url[s], e.appendChild(r);
          }
        }
      }
    });
  var Oi = Ei.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      M(t, "leaflet-image-layer"), this._zoomAnimated && M(t, "leaflet-zoom-animated"), this.options.className && M(t, this.options.className), t.onselectstart = u, t.onmousemove = u;
    }
  });
  var Ai = o.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: "",
        pane: void 0,
        content: ""
      },
      initialize: function initialize(t, e) {
        t && (t instanceof v || d(t)) ? (this._latlng = w(t), c(this, e)) : (c(this, t), this._source = e), this.options.content && (this._content = this.options.content);
      },
      openOn: function openOn(t) {
        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
      },
      close: function close() {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function toggle(t) {
        return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
      },
      onAdd: function onAdd(t) {
        this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && C(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (M(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
      },
      onRemove: function onRemove(t) {
        t._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), this.options.interactive && (z(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
      },
      getLatLng: function getLatLng() {
        return this._latlng;
      },
      setLatLng: function setLatLng(t) {
        return this._latlng = w(t), this._map && (this._updatePosition(), this._adjustPan()), this;
      },
      getContent: function getContent() {
        return this._content;
      },
      setContent: function setContent(t) {
        return this._content = t, this.update(), this;
      },
      getElement: function getElement() {
        return this._container;
      },
      update: function update() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      },
      getEvents: function getEvents() {
        var t = {
          zoom: this._updatePosition,
          viewreset: this._updatePosition
        };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function isOpen() {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function bringToFront() {
        return this._map && fe(this._container), this;
      },
      bringToBack: function bringToBack() {
        return this._map && ge(this._container), this;
      },
      _prepareOpen: function _prepareOpen(t) {
        if (!(i = this._source)._map) return !1;
        if (i instanceof ci) {
          var e,
            i = null,
            n = this._source._layers;
          for (e in n) if (n[e]._map) {
            i = n[e];
            break;
          }
          if (!i) return !1;
          this._source = i;
        }
        if (!t) if (i.getCenter) t = i.getCenter();else if (i.getLatLng) t = i.getLatLng();else {
          if (!i.getBounds) throw new Error("Unable to get source layer LatLng.");
          t = i.getBounds().getCenter();
        }
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function _updateContent() {
        if (this._content) {
          var t = this._contentNode,
            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
          if ("string" == typeof e) t.innerHTML = e;else {
            for (; t.hasChildNodes();) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function _updatePosition() {
        var t, e, i;
        this._map && (e = this._map.latLngToLayerPoint(this._latlng), t = m(this.options.offset), i = this._getAnchor(), this._zoomAnimated ? Z(this._container, e.add(i)) : t = t.add(e).add(i), e = this._containerBottom = -t.y, i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x, this._container.style.bottom = e + "px", this._container.style.left = i + "px");
      },
      _getAnchor: function _getAnchor() {
        return [0, 0];
      }
    }),
    Bi = (A.include({
      _initOverlay: function _initOverlay(t, e, i, n) {
        var o = e;
        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
      }
    }), o.include({
      _initOverlay: function _initOverlay(t, e, i, n) {
        var o = i;
        return o instanceof t ? (c(o, n), o._source = this) : (o = e && !n ? e : new t(n, this)).setContent(i), o;
      }
    }), Ai.extend({
      options: {
        pane: "popupPane",
        offset: [0, 7],
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: ""
      },
      openOn: function openOn(t) {
        return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Ai.prototype.openOn.call(this, t);
      },
      onAdd: function onAdd(t) {
        Ai.prototype.onAdd.call(this, t), t.fire("popupopen", {
          popup: this
        }), this._source && (this._source.fire("popupopen", {
          popup: this
        }, !0), this._source instanceof fi || this._source.on("preclick", Ae));
      },
      onRemove: function onRemove(t) {
        Ai.prototype.onRemove.call(this, t), t.fire("popupclose", {
          popup: this
        }), this._source && (this._source.fire("popupclose", {
          popup: this
        }, !0), this._source instanceof fi || this._source.off("preclick", Ae));
      },
      getEvents: function getEvents() {
        var t = Ai.prototype.getEvents.call(this);
        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-popup",
          e = this._container = P("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          i = this._wrapper = P("div", t + "-content-wrapper", e);
        this._contentNode = P("div", t + "-content", i), Ie(e), Be(this._contentNode), S(e, "contextmenu", Ae), this._tipContainer = P("div", t + "-tip-container", e), this._tip = P("div", t + "-tip", this._tipContainer), this.options.closeButton && ((i = this._closeButton = P("a", t + "-close-button", e)).setAttribute("role", "button"), i.setAttribute("aria-label", "Close popup"), i.href = "#close", i.innerHTML = '<span aria-hidden="true">&#215;</span>', S(i, "click", function (t) {
          O(t), this.close();
        }, this));
      },
      _updateLayout: function _updateLayout() {
        var t = this._contentNode,
          e = t.style,
          i = (e.width = "", e.whiteSpace = "nowrap", t.offsetWidth),
          i = Math.min(i, this.options.maxWidth),
          i = (i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "", t.offsetHeight),
          n = this.options.maxHeight,
          o = "leaflet-popup-scrolled";
        (n && n < i ? (e.height = n + "px", M) : z)(t, o), this._containerWidth = this._container.offsetWidth;
      },
      _animateZoom: function _animateZoom(t) {
        var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();
        Z(this._container, t.add(e));
      },
      _adjustPan: function _adjustPan() {
        var t, e, i, n, o, s, r, a;
        this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), this._autopanning ? this._autopanning = !1 : (t = this._map, e = parseInt(pe(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + e, a = this._containerWidth, (i = new p(this._containerLeft, -e - this._containerBottom))._add(Pe(this._container)), i = t.layerPointToContainerPoint(i), o = m(this.options.autoPanPadding), n = m(this.options.autoPanPaddingTopLeft || o), o = m(this.options.autoPanPaddingBottomRight || o), s = t.getSize(), r = 0, i.x + a + o.x > s.x && (r = i.x + a - s.x + o.x), i.x - r - n.x < (a = 0) && (r = i.x - n.x), i.y + e + o.y > s.y && (a = i.y + e - s.y + o.y), i.y - a - n.y < 0 && (a = i.y - n.y), (r || a) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([r, a]))));
      },
      _getAnchor: function _getAnchor() {
        return m(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }
    })),
    Ii = (A.mergeOptions({
      closePopupOnClick: !0
    }), A.include({
      openPopup: function openPopup(t, e, i) {
        return this._initOverlay(Bi, t, e, i).openOn(this), this;
      },
      closePopup: function closePopup(t) {
        return (t = arguments.length ? t : this._popup) && t.close(), this;
      }
    }), o.include({
      bindPopup: function bindPopup(t, e) {
        return this._popup = this._initOverlay(Bi, this._popup, t, e), this._popupHandlersAdded || (this.on({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !0), this;
      },
      unbindPopup: function unbindPopup() {
        return this._popup && (this.off({
          click: this._openPopup,
          keypress: this._onKeyPress,
          remove: this.closePopup,
          move: this._movePopup
        }), this._popupHandlersAdded = !1, this._popup = null), this;
      },
      openPopup: function openPopup(t) {
        return this._popup && (this instanceof ci || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
      },
      closePopup: function closePopup() {
        return this._popup && this._popup.close(), this;
      },
      togglePopup: function togglePopup() {
        return this._popup && this._popup.toggle(this), this;
      },
      isPopupOpen: function isPopupOpen() {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function setPopupContent(t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function getPopup() {
        return this._popup;
      },
      _openPopup: function _openPopup(t) {
        var e;
        this._popup && this._map && (Re(t), e = t.layer || t.target, this._popup._source !== e || e instanceof fi ? (this._popup._source = e, this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
      },
      _movePopup: function _movePopup(t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function _onKeyPress(t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      }
    }), Ai.extend({
      options: {
        pane: "tooltipPane",
        offset: [0, 0],
        direction: "auto",
        permanent: !1,
        sticky: !1,
        opacity: .9
      },
      onAdd: function onAdd(t) {
        Ai.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
          tooltip: this
        }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
          tooltip: this
        }, !0));
      },
      onRemove: function onRemove(t) {
        Ai.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
          tooltip: this
        }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
          tooltip: this
        }, !0));
      },
      getEvents: function getEvents() {
        var t = Ai.prototype.getEvents.call(this);
        return this.options.permanent || (t.preclick = this.close), t;
      },
      _initLayout: function _initLayout() {
        var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = P("div", t), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + h(this));
      },
      _updateLayout: function _updateLayout() {},
      _adjustPan: function _adjustPan() {},
      _setPosition: function _setPosition(t) {
        var e,
          i = this._map,
          n = this._container,
          o = i.latLngToContainerPoint(i.getCenter()),
          i = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = n.offsetWidth,
          a = n.offsetHeight,
          h = m(this.options.offset),
          l = this._getAnchor(),
          i = "top" === s ? (e = r / 2, a) : "bottom" === s ? (e = r / 2, 0) : (e = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : i.x < o.x ? (s = "right", 0) : (s = "left", r + 2 * (h.x + l.x)), a / 2);
        t = t.subtract(m(e, i, !0)).add(h).add(l), z(n, "leaflet-tooltip-right"), z(n, "leaflet-tooltip-left"), z(n, "leaflet-tooltip-top"), z(n, "leaflet-tooltip-bottom"), M(n, "leaflet-tooltip-" + s), Z(n, t);
      },
      _updatePosition: function _updatePosition() {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function setOpacity(t) {
        this.options.opacity = t, this._container && C(this._container, t);
      },
      _animateZoom: function _animateZoom(t) {
        t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
        this._setPosition(t);
      },
      _getAnchor: function _getAnchor() {
        return m(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }
    })),
    Ri = (A.include({
      openTooltip: function openTooltip(t, e, i) {
        return this._initOverlay(Ii, t, e, i).openOn(this), this;
      },
      closeTooltip: function closeTooltip(t) {
        return t.close(), this;
      }
    }), o.include({
      bindTooltip: function bindTooltip(t, e) {
        return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ii, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      },
      unbindTooltip: function unbindTooltip() {
        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
      },
      _initTooltipInteractions: function _initTooltipInteractions(t) {
        var e, i;
        !t && this._tooltipHandlersAdded || (e = t ? "off" : "on", i = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        }, this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t);
      },
      openTooltip: function openTooltip(t) {
        return this._tooltip && (this instanceof ci || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
      },
      closeTooltip: function closeTooltip() {
        if (this._tooltip) return this._tooltip.close();
      },
      toggleTooltip: function toggleTooltip() {
        return this._tooltip && this._tooltip.toggle(this), this;
      },
      isTooltipOpen: function isTooltipOpen() {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function setTooltipContent(t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function getTooltip() {
        return this._tooltip;
      },
      _addFocusListeners: function _addFocusListeners() {
        this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
      },
      _addFocusListenersOnLayer: function _addFocusListenersOnLayer(t) {
        var e = "function" == typeof t.getElement && t.getElement();
        e && (S(e, "focus", function () {
          this._tooltip._source = t, this.openTooltip();
        }, this), S(e, "blur", this.closeTooltip, this));
      },
      _setAriaDescribedByOnLayer: function _setAriaDescribedByOnLayer(t) {
        t = "function" == typeof t.getElement && t.getElement();
        t && t.setAttribute("aria-describedby", this._tooltip._container.id);
      },
      _openTooltip: function _openTooltip(t) {
        var e;
        this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0, (e = this)._map.once("moveend", function () {
          e._openOnceFlag = !1, e._openTooltip(t);
        })) : (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)));
      },
      _moveTooltip: function _moveTooltip(t) {
        var e = t.latlng;
        this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), t = this._map.containerPointToLayerPoint(t), e = this._map.layerPointToLatLng(t)), this._tooltip.setLatLng(e);
      }
    }), di.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: "leaflet-div-icon"
      },
      createIcon: function createIcon(t) {
        var t = t && "DIV" === t.tagName ? t : document.createElement("div"),
          e = this.options;
        return e.html instanceof Element ? (me(t), t.appendChild(e.html)) : t.innerHTML = !1 !== e.html ? e.html : "", e.bgPos && (e = m(e.bgPos), t.style.backgroundPosition = -e.x + "px " + -e.y + "px"), this._setIconStyles(t, "icon"), t;
      },
      createShadow: function createShadow() {
        return null;
      }
    }));
  di.Default = _i;
  var Ni = o.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: b.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), T(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (fe(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (ge(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      var t;
      return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof p ? t : new p(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !b.ielt9) {
        C(this._container, this.options.opacity);
        var t,
          e = +new Date(),
          i = !1,
          n = !1;
        for (t in this._tiles) {
          var o,
            s = this._tiles[t];
          s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200), C(s.el, o), o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), s.active = !0));
        }
        n && !this._noPrune && this._pruneTiles(), i && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: u,
    _initContainer: function _initContainer() {
      this._container || (this._container = P("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      if (void 0 !== t) {
        for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (T(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
        var n = this._levels[t],
          o = this._map;
        return n || ((n = this._levels[t] = {}).el = P("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), u(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: u,
    _onRemoveLevel: u,
    _onCreateLevel: u,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
          e,
          i,
          n = this._map.getZoom();
        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
          for (t in this._tiles) (i = this._tiles[t]).current && !i.active && (e = i.coords, this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) T(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, e, i, n) {
      var t = Math.floor(t / 2),
        e = Math.floor(e / 2),
        i = i - 1,
        o = new p(+t, +e),
        o = (o.z = i, this._tileCoordsToKey(o)),
        o = this._tiles[o];
      return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0), n < i && this._retainParent(t, e, i, n));
    },
    _retainChildren: function _retainChildren(t, e, i, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
        var r = new p(o, s),
          r = (r.z = i + 1, this._tileCoordsToKey(r)),
          r = this._tiles[r];
        r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
      }
    },
    _resetView: function _resetView(t) {
      t = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var e = this.options;
      return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
    },
    _setView: function _setView(t, e, i, n) {
      var o = Math.round(e),
        o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o),
        s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
    },
    _setZoomTransforms: function _setZoomTransforms(t, e) {
      for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
    },
    _setZoomTransform: function _setZoomTransform(t, e, i) {
      var n = this._map.getZoomScale(i, t.zoom),
        e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
      b.any3d ? be(t.el, e, n) : Z(t.el, e);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
        e = t.options.crs,
        i = this._tileSize = this.getTileSize(),
        n = this._tileZoom,
        o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var e = this._map,
        i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
        i = e.getZoomScale(i, this._tileZoom),
        t = e.project(t, this._tileZoom).floor(),
        e = e.getSize().divideBy(2 * i);
      return new f(t.subtract(e), t.add(e));
    },
    _update: function _update(t) {
      var e = this._map;
      if (e) {
        var i = this._clampZoom(e.getZoom());
        if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
          var n,
            e = this._getTiledPixelBounds(t),
            o = this._pxBoundsToTileRange(e),
            s = o.getCenter(),
            r = [],
            e = this.options.keepBuffer,
            a = new f(o.getBottomLeft().subtract([e, -e]), o.getTopRight().add([e, -e]));
          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
          for (n in this._tiles) {
            var h = this._tiles[n].coords;
            h.z === this._tileZoom && a.contains(new p(h.x, h.y)) || (this._tiles[n].current = !1);
          }
          if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);else {
            for (var l = o.min.y; l <= o.max.y; l++) for (var u = o.min.x; u <= o.max.x; u++) {
              var c,
                d = new p(u, l);
              d.z = this._tileZoom, this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d));
            }
            if (r.sort(function (t, e) {
              return t.distanceTo(s) - e.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));
              for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++) this._addTile(r[u], _);
              this._level.el.appendChild(_);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var e = this._map.options.crs;
      if (!e.infinite) {
        var i = this._globalTileRange;
        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
      }
      return !this.options.bounds || (e = this._tileCoordsToBounds(t), g(this.options.bounds).overlaps(e));
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var e = this._map,
        i = this.getTileSize(),
        n = t.scaleBy(i),
        i = n.add(i);
      return [e.unproject(n, t.z), e.unproject(i, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      t = this._tileCoordsToNwSe(t), t = new s(t[0], t[1]);
      return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t);
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var t = t.split(":"),
        e = new p(+t[0], +t[1]);
      return e.z = +t[2], e;
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      e && (T(e.el), delete this._tiles[t], this.fire("tileunload", {
        tile: e.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      M(t, "leaflet-tile");
      var e = this.getTileSize();
      t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = u, t.onmousemove = u, b.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity);
    },
    _addTile: function _addTile(t, e) {
      var i = this._getTilePos(t),
        n = this._tileCoordsToKey(t),
        o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
      this._initTile(o), this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)), Z(o, i), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, e.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, e, i) {
      e && this.fire("tileerror", {
        error: e,
        tile: i,
        coords: t
      });
      var n = this._tileCoordsToKey(t);
      (i = this._tiles[n]) && (i.loaded = +new Date(), this._map._fadeAnimated ? (C(i.el, 0), r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (M(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: i.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), b.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var e = new p(this._wrapX ? H(t.x, this._wrapX) : t.x, this._wrapY ? H(t.y, this._wrapY) : t.y);
      return e.z = t.z, e;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var e = this.getTileSize();
      return new f(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    }
  });
  var Di = Ni.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
      referrerPolicy: !1
    },
    initialize: function initialize(t, e) {
      this._url = t, (e = c(this, e)).detectRetina && b.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, e) {
      return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this;
    },
    createTile: function createTile(t, e) {
      var i = document.createElement("img");
      return S(i, "load", a(this._tileOnLoad, this, e, i)), S(i, "error", a(this._tileOnError, this, e, i)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
    },
    getTileUrl: function getTileUrl(t) {
      var e = {
        r: b.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, this.options.tms && (e.y = t), e["-y"] = t), q(this._url, l(e, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, e) {
      b.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
    },
    _tileOnError: function _tileOnError(t, e, i) {
      var n = this.options.errorTileUrl;
      n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
        e = this.options.maxZoom;
      return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      t = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function _abortLoading() {
      var t, e, i;
      for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = u, i.onerror = u, i.complete || (i.src = K, e = this._tiles[t].coords, T(i), delete this._tiles[t], this.fire("tileabort", {
        tile: i,
        coords: e
      })));
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      if (e) return e.el.setAttribute("src", K), Ni.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, e, i) {
      if (this._map && (!i || i.getAttribute("src") !== K)) return Ni.prototype._tileReady.call(this, t, e, i);
    }
  });
  function ji(t, e) {
    return new Di(t, e);
  }
  var Hi = Di.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, e) {
      this._url = t;
      var i,
        n = l({}, this.defaultWmsParams);
      for (i in e) i in this.options || (n[i] = e[i]);
      var t = (e = c(this, e)).detectRetina && b.retina ? 2 : 1,
        o = this.getTileSize();
      n.width = o.x * t, n.height = o.y * t, this.wmsParams = n;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[e] = this._crs.code, Di.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var e = this._tileCoordsToNwSe(t),
        i = this._crs,
        i = _(i.project(e[0]), i.project(e[1])),
        e = i.min,
        i = i.max,
        e = (1.3 <= this._wmsVersion && this._crs === li ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(","),
        i = Di.prototype.getTileUrl.call(this, t);
      return i + U(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e;
    },
    setParams: function setParams(t, e) {
      return l(this.wmsParams, t), e || this.redraw(), this;
    }
  });
  Di.WMS = Hi, ji.wms = function (t, e) {
    return new Hi(t, e);
  };
  var Wi = o.extend({
      options: {
        padding: .1
      },
      initialize: function initialize(t) {
        c(this, t), h(this), this._layers = this._layers || {};
      },
      onAdd: function onAdd() {
        this._container || (this._initContainer(), M(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      },
      onRemove: function onRemove() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function getEvents() {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function _onAnimZoom(t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function _onZoom() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function _updateTransform(t, e) {
        var i = this._map.getZoomScale(e, this._zoom),
          n = this._map.getSize().multiplyBy(.5 + this.options.padding),
          o = this._map.project(this._center, e),
          n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
        b.any3d ? be(this._container, n, i) : Z(this._container, n);
      },
      _reset: function _reset() {
        for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset();
      },
      _onZoomEnd: function _onZoomEnd() {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function _updatePaths() {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function _update() {
        var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
        this._bounds = new f(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }
    }),
    Fi = Wi.extend({
      options: {
        tolerance: 0
      },
      getEvents: function getEvents() {
        var t = Wi.prototype.getEvents.call(this);
        return t.viewprereset = this._onViewPreReset, t;
      },
      _onViewPreReset: function _onViewPreReset() {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function onAdd() {
        Wi.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function _initContainer() {
        var t = this._container = document.createElement("canvas");
        S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
      },
      _destroyContainer: function _destroyContainer() {
        r(this._redrawRequest), delete this._ctx, T(this._container), k(this._container), delete this._container;
      },
      _updatePaths: function _updatePaths() {
        if (!this._postponeUpdatePaths) {
          for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function _update() {
        var t, e, i, n;
        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), t = this._bounds, e = this._container, i = t.getSize(), n = b.retina ? 2 : 1, Z(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", b.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
      },
      _reset: function _reset() {
        Wi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
      },
      _initPath: function _initPath(t) {
        this._updateDashArray(t);
        t = (this._layers[h(t)] = t)._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        };
        this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
      },
      _addPath: function _addPath(t) {
        this._requestRedraw(t);
      },
      _removePath: function _removePath(t) {
        var e = t._order,
          i = e.next,
          e = e.prev;
        i ? i.prev = e : this._drawLast = e, e ? e.next = i : this._drawFirst = i, delete t._order, delete this._layers[h(t)], this._requestRedraw(t);
      },
      _updatePath: function _updatePath(t) {
        this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
      },
      _updateStyle: function _updateStyle(t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function _updateDashArray(t) {
        if ("string" == typeof t.options.dashArray) {
          for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
            if (e = Number(i[o]), isNaN(e)) return;
            n.push(e);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function _requestRedraw(t) {
        this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
      },
      _extendRedrawBounds: function _extendRedrawBounds(t) {
        var e;
        t._pxBounds && (e = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new f(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])));
      },
      _redraw: function _redraw() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      },
      _clear: function _clear() {
        var t,
          e = this._redrawBounds;
        e ? (t = e.getSize(), this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
      },
      _draw: function _draw() {
        var t,
          e,
          i = this._redrawBounds;
        this._ctx.save(), i && (e = i.getSize(), this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()), this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
        this._drawing = !1, this._ctx.restore();
      },
      _updatePoly: function _updatePoly(t, e) {
        if (this._drawing) {
          var i,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (h.beginPath(), i = 0; i < a; i++) {
              for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
              e && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function _updateCircle(t) {
        var e, i, n, o;
        this._drawing && !t._empty() && (e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 != o && i.restore(), this._fillStroke(i, t));
      },
      _fillStroke: function _fillStroke(t, e) {
        var i = e.options;
        i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
      },
      _onClick: function _onClick(t) {
        for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e) || (i = e));
        this._fireEvent(!!i && [i], t);
      },
      _onMouseMove: function _onMouseMove(t) {
        var e;
        !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, e));
      },
      _handleMouseOut: function _handleMouseOut(t) {
        var e = this._hoveredLayer;
        e && (z(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
      },
      _handleMouseHover: function _handleMouseHover(t, e) {
        if (!this._mouseHoverThrottled) {
          for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
          n !== this._hoveredLayer && (this._handleMouseOut(t), n && (M(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(a(function () {
            this._mouseHoverThrottled = !1;
          }, this), 32);
        }
      },
      _fireEvent: function _fireEvent(t, e, i) {
        this._map._fireDOMEvent(e, i || e.type, t);
      },
      _bringToFront: function _bringToFront(t) {
        var e,
          i,
          n = t._order;
        n && (e = n.next, i = n.prev, e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
      },
      _bringToBack: function _bringToBack(t) {
        var e,
          i,
          n = t._order;
        n && (e = n.next, (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
      }
    });
  function Ui(t) {
    return b.canvas ? new Fi(t) : null;
  }
  var Vi = function () {
      try {
        return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
          return document.createElement("<lvml:" + t + ' class="lvml">');
        };
      } catch (t) {}
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }(),
    zt = {
      _initContainer: function _initContainer() {
        this._container = P("div", "leaflet-vml-container");
      },
      _update: function _update() {
        this._map._animatingZoom || (Wi.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function _initPath(t) {
        var e = t._container = Vi("shape");
        M(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = Vi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[h(t)] = t;
      },
      _addPath: function _addPath(t) {
        var e = t._container;
        this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
      },
      _removePath: function _removePath(t) {
        var e = t._container;
        T(e), t.removeInteractiveTarget(e), delete this._layers[h(t)];
      },
      _updateStyle: function _updateStyle(t) {
        var e = t._stroke,
          i = t._fill,
          n = t.options,
          o = t._container;
        o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e = e || (t._stroke = Vi("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i = i || (t._fill = Vi("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
      },
      _updateCircle: function _updateCircle(t) {
        var e = t._point.round(),
          i = Math.round(t._radius),
          n = Math.round(t._radiusY || i);
        this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
      },
      _setPath: function _setPath(t, e) {
        t._path.v = e;
      },
      _bringToFront: function _bringToFront(t) {
        fe(t._container);
      },
      _bringToBack: function _bringToBack(t) {
        ge(t._container);
      }
    },
    qi = b.vml ? Vi : ct,
    Gi = Wi.extend({
      _initContainer: function _initContainer() {
        this._container = qi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = qi("g"), this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function _destroyContainer() {
        T(this._container), k(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      },
      _update: function _update() {
        var t, e, i;
        this._map._animatingZoom && this._bounds || (Wi.prototype._update.call(this), e = (t = this._bounds).getSize(), i = this._container, this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), Z(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update"));
      },
      _initPath: function _initPath(t) {
        var e = t._path = qi("path");
        t.options.className && M(e, t.options.className), t.options.interactive && M(e, "leaflet-interactive"), this._updateStyle(t), this._layers[h(t)] = t;
      },
      _addPath: function _addPath(t) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
      },
      _removePath: function _removePath(t) {
        T(t._path), t.removeInteractiveTarget(t._path), delete this._layers[h(t)];
      },
      _updatePath: function _updatePath(t) {
        t._project(), t._update();
      },
      _updateStyle: function _updateStyle(t) {
        var e = t._path,
          t = t.options;
        e && (t.stroke ? (e.setAttribute("stroke", t.color), e.setAttribute("stroke-opacity", t.opacity), e.setAttribute("stroke-width", t.weight), e.setAttribute("stroke-linecap", t.lineCap), e.setAttribute("stroke-linejoin", t.lineJoin), t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"), t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), t.fill ? (e.setAttribute("fill", t.fillColor || t.color), e.setAttribute("fill-opacity", t.fillOpacity), e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
      },
      _updatePoly: function _updatePoly(t, e) {
        this._setPath(t, dt(t._parts, e));
      },
      _updateCircle: function _updateCircle(t) {
        var e = t._point,
          i = Math.max(Math.round(t._radius), 1),
          n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
          e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
        this._setPath(t, e);
      },
      _setPath: function _setPath(t, e) {
        t._path.setAttribute("d", e);
      },
      _bringToFront: function _bringToFront(t) {
        fe(t._path);
      },
      _bringToBack: function _bringToBack(t) {
        ge(t._path);
      }
    });
  function Ki(t) {
    return b.svg || b.vml ? new Gi(t) : null;
  }
  b.vml && Gi.include(zt), A.include({
    getRenderer: function getRenderer(t) {
      t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
      return this.hasLayer(t) || this.addLayer(t), t;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      var e;
      return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && (e = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = e), e);
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && Ui(t) || Ki(t);
    }
  });
  var Yi = xi.extend({
    initialize: function initialize(t, e) {
      xi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  Gi.create = qi, Gi.pointsToPath = dt, wi.geometryToLayer = bi, wi.coordsToLatLng = Li, wi.coordsToLatLngs = Ti, wi.latLngToCoords = Mi, wi.latLngsToCoords = zi, wi.getFeature = Ci, wi.asFeature = Zi, A.mergeOptions({
    boxZoom: !0
  });
  var _t = n.extend({
      initialize: function initialize(t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
      },
      addHooks: function addHooks() {
        S(this._container, "mousedown", this._onMouseDown, this);
      },
      removeHooks: function removeHooks() {
        k(this._container, "mousedown", this._onMouseDown, this);
      },
      moved: function moved() {
        return this._moved;
      },
      _destroy: function _destroy() {
        T(this._pane), delete this._pane;
      },
      _resetState: function _resetState() {
        this._resetStateTimeout = 0, this._moved = !1;
      },
      _clearDeferredResetState: function _clearDeferredResetState() {
        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      },
      _onMouseDown: function _onMouseDown(t) {
        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
        this._clearDeferredResetState(), this._resetState(), re(), Le(), this._startPoint = this._map.mouseEventToContainerPoint(t), S(document, {
          contextmenu: Re,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseMove: function _onMouseMove(t) {
        this._moved || (this._moved = !0, this._box = P("div", "leaflet-zoom-box", this._container), M(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
        var t = new f(this._point, this._startPoint),
          e = t.getSize();
        Z(this._box, t.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
      },
      _finish: function _finish() {
        this._moved && (T(this._box), z(this._container, "leaflet-crosshair")), ae(), Te(), k(document, {
          contextmenu: Re,
          mousemove: this._onMouseMove,
          mouseup: this._onMouseUp,
          keydown: this._onKeyDown
        }, this);
      },
      _onMouseUp: function _onMouseUp(t) {
        1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t).fire("boxzoomend", {
          boxZoomBounds: t
        })));
      },
      _onKeyDown: function _onKeyDown(t) {
        27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
      }
    }),
    Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({
      doubleClickZoom: !0
    }), n.extend({
      addHooks: function addHooks() {
        this._map.on("dblclick", this._onDoubleClick, this);
      },
      removeHooks: function removeHooks() {
        this._map.off("dblclick", this._onDoubleClick, this);
      },
      _onDoubleClick: function _onDoubleClick(t) {
        var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          i = t.originalEvent.shiftKey ? i - n : i + n;
        "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i);
      }
    })),
    Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({
      dragging: !0,
      inertia: !0,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: .2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0
    }), n.extend({
      addHooks: function addHooks() {
        var t;
        this._draggable || (t = this._map, this._draggable = new Xe(t._mapPane, t._container), this._draggable.on({
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), M(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      },
      removeHooks: function removeHooks() {
        z(this._map._container, "leaflet-grab"), z(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      },
      moved: function moved() {
        return this._draggable && this._draggable._moved;
      },
      moving: function moving() {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function _onDragStart() {
        var t,
          e = this._map;
        e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = g(this._map.options.maxBounds), this._offsetLimit = _(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
      },
      _onDrag: function _onDrag(t) {
        var e, i;
        this._map.options.inertia && (e = this._lastTime = +new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(i), this._times.push(e), this._prunePositions(e)), this._map.fire("move", t).fire("drag", t);
      },
      _prunePositions: function _prunePositions(t) {
        for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function _onZoomEnd() {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      },
      _viscousLimit: function _viscousLimit(t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function _onPreDragLimit() {
        var t, e;
        this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit, t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
      },
      _onPreDragWrap: function _onPreDragWrap() {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - e + i) % t + e - i,
          n = (n + e + i) % t - e - i,
          t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t;
      },
      _onDragEnd: function _onDragEnd(t) {
        var e,
          i,
          n,
          o,
          s = this._map,
          r = s.options,
          a = !r.inertia || t.noInertia || this._times.length < 2;
        s.fire("dragend", t), !a && (this._prunePositions(+new Date()), t = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, e = r.easeLinearity, a = (t = t.multiplyBy(e / a)).distanceTo([0, 0]), i = Math.min(r.inertiaMaxSpeed, a), t = t.multiplyBy(i / a), n = i / (r.inertiaDeceleration * e), (o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds), x(function () {
          s.panBy(o, {
            duration: n,
            easeLinearity: e,
            noMoveStart: !0,
            animate: !0
          });
        })) : s.fire("moveend");
      }
    })),
    St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({
      keyboard: !0,
      keyboardPanDelta: 80
    }), n.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173]
      },
      initialize: function initialize(t) {
        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function addHooks() {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.on({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      removeHooks: function removeHooks() {
        this._removeHooks(), k(this._map._container, {
          focus: this._onFocus,
          blur: this._onBlur,
          mousedown: this._onMouseDown
        }, this), this._map.off({
          focus: this._addHooks,
          blur: this._removeHooks
        }, this);
      },
      _onMouseDown: function _onMouseDown() {
        var t, e, i;
        this._focused || (i = document.body, t = document.documentElement, e = i.scrollTop || t.scrollTop, i = i.scrollLeft || t.scrollLeft, this._map._container.focus(), window.scrollTo(i, e));
      },
      _onFocus: function _onFocus() {
        this._focused = !0, this._map.fire("focus");
      },
      _onBlur: function _onBlur() {
        this._focused = !1, this._map.fire("blur");
      },
      _setPanDelta: function _setPanDelta(t) {
        for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++) e[i.left[n]] = [-1 * t, 0];
        for (n = 0, o = i.right.length; n < o; n++) e[i.right[n]] = [t, 0];
        for (n = 0, o = i.down.length; n < o; n++) e[i.down[n]] = [0, t];
        for (n = 0, o = i.up.length; n < o; n++) e[i.up[n]] = [0, -1 * t];
      },
      _setZoomDelta: function _setZoomDelta(t) {
        for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++) e[i.zoomIn[n]] = t;
        for (n = 0, o = i.zoomOut.length; n < o; n++) e[i.zoomOut[n]] = -t;
      },
      _addHooks: function _addHooks() {
        S(document, "keydown", this._onKeyDown, this);
      },
      _removeHooks: function _removeHooks() {
        k(document, "keydown", this._onKeyDown, this);
      },
      _onKeyDown: function _onKeyDown(t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e,
            i,
            n = t.keyCode,
            o = this._map;
          if (n in this._panKeys) o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n], t.shiftKey && (i = m(i).multiplyBy(3)), o.options.maxBounds && (i = o._limitOffset(m(i), o.options.maxBounds)), o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))), o.panTo(e)) : o.panBy(i));else if (n in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);else {
            if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey) return;
            o.closePopup();
          }
          Re(t);
        }
      }
    })),
    Et = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60
    }), n.extend({
      addHooks: function addHooks() {
        S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      },
      removeHooks: function removeHooks() {
        k(this._map._container, "wheel", this._onWheelScroll, this);
      },
      _onWheelScroll: function _onWheelScroll(t) {
        var e = He(t),
          i = this._map.options.wheelDebounceTime,
          e = (this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date()), Math.max(i - (+new Date() - this._startTime), 0));
        clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), e), Re(t);
      },
      _performZoom: function _performZoom() {
        var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0,
          n = (t._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)),
          n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          i = i ? Math.ceil(n / i) * i : n,
          n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
        this._delta = 0, this._startTime = null, n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n));
      }
    })),
    kt = (A.addInitHook("addHandler", "scrollWheelZoom", Et), A.mergeOptions({
      tapHold: b.touchNative && b.safari && b.mobile,
      tapTolerance: 15
    }), n.extend({
      addHooks: function addHooks() {
        S(this._map._container, "touchstart", this._onDown, this);
      },
      removeHooks: function removeHooks() {
        k(this._map._container, "touchstart", this._onDown, this);
      },
      _onDown: function _onDown(t) {
        var e;
        clearTimeout(this._holdTimeout), 1 === t.touches.length && (e = t.touches[0], this._startPos = this._newPos = new p(e.clientX, e.clientY), this._holdTimeout = setTimeout(a(function () {
          this._cancel(), this._isTapValid() && (S(document, "touchend", O), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
        }, this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this));
      },
      _cancelClickPrevent: function t() {
        k(document, "touchend", O), k(document, "touchend touchcancel", t);
      },
      _cancel: function _cancel() {
        clearTimeout(this._holdTimeout), k(document, "touchend touchcancel contextmenu", this._cancel, this), k(document, "touchmove", this._onMove, this);
      },
      _onMove: function _onMove(t) {
        t = t.touches[0];
        this._newPos = new p(t.clientX, t.clientY);
      },
      _isTapValid: function _isTapValid() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      },
      _simulateEvent: function _simulateEvent(t, e) {
        t = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY
        });
        t._simulated = !0, e.target.dispatchEvent(t);
      }
    })),
    Ot = (A.addInitHook("addHandler", "tapHold", kt), A.mergeOptions({
      touchZoom: b.touch,
      bounceAtZoomLimits: !0
    }), n.extend({
      addHooks: function addHooks() {
        M(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
      },
      removeHooks: function removeHooks() {
        z(this._map._container, "leaflet-touch-zoom"), k(this._map._container, "touchstart", this._onTouchStart, this);
      },
      _onTouchStart: function _onTouchStart(t) {
        var e,
          i,
          n = this._map;
        !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]), i = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))), this._startDist = e.distanceTo(i), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), O(t));
      },
      _onTouchMove: function _onTouchMove(t) {
        if (t.touches && 2 === t.touches.length && this._zooming) {
          var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            o = i.distanceTo(n) / this._startDist;
          if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
            if (this._center = this._startLatLng, 1 == o) return;
          } else {
            i = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (1 == o && 0 === i.x && 0 === i.y) return;
            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom);
          }
          this._moved || (e._moveStart(!0, !1), this._moved = !0), r(this._animRequest);
          n = a(e._move, e, this._center, this._zoom, {
            pinch: !0,
            round: !1
          }, void 0);
          this._animRequest = x(n, this, !0), O(t);
        }
      },
      _onTouchEnd: function _onTouchEnd() {
        this._moved && this._zooming ? (this._zooming = !1, r(this._animRequest), k(document, "touchmove", this._onTouchMove, this), k(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
      }
    })),
    Xi = (A.addInitHook("addHandler", "touchZoom", Ot), A.BoxZoom = _t, A.DoubleClickZoom = Ct, A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = Et, A.TapHold = kt, A.TouchZoom = Ot, t.Bounds = f, t.Browser = b, t.CRS = ot, t.Canvas = Fi, t.Circle = vi, t.CircleMarker = gi, t.Class = et, t.Control = B, t.DivIcon = Ri, t.DivOverlay = Ai, t.DomEvent = mt, t.DomUtil = pt, t.Draggable = Xe, t.Evented = it, t.FeatureGroup = ci, t.GeoJSON = wi, t.GridLayer = Ni, t.Handler = n, t.Icon = di, t.ImageOverlay = Ei, t.LatLng = v, t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ui, t.LineUtil = vt, t.Map = A, t.Marker = mi, t.Mixin = ft, t.Path = fi, t.Point = p, t.PolyUtil = gt, t.Polygon = xi, t.Polyline = yi, t.Popup = Bi, t.PosAnimation = Fe, t.Projection = wt, t.Rectangle = Yi, t.Renderer = Wi, t.SVG = Gi, t.SVGOverlay = Oi, t.TileLayer = Di, t.Tooltip = Ii, t.Transformation = at, t.Util = tt, t.VideoOverlay = ki, t.bind = a, t.bounds = _, t.canvas = Ui, t.circle = function (t, e, i) {
      return new vi(t, e, i);
    }, t.circleMarker = function (t, e) {
      return new gi(t, e);
    }, t.control = Ue, t.divIcon = function (t) {
      return new Ri(t);
    }, t.extend = l, t.featureGroup = function (t, e) {
      return new ci(t, e);
    }, t.geoJSON = Si, t.geoJson = Mt, t.gridLayer = function (t) {
      return new Ni(t);
    }, t.icon = function (t) {
      return new di(t);
    }, t.imageOverlay = function (t, e, i) {
      return new Ei(t, e, i);
    }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function (t, e) {
      return new ui(t, e);
    }, t.map = function (t, e) {
      return new A(t, e);
    }, t.marker = function (t, e) {
      return new mi(t, e);
    }, t.point = m, t.polygon = function (t, e) {
      return new xi(t, e);
    }, t.polyline = function (t, e) {
      return new yi(t, e);
    }, t.popup = function (t, e) {
      return new Bi(t, e);
    }, t.rectangle = function (t, e) {
      return new Yi(t, e);
    }, t.setOptions = c, t.stamp = h, t.svg = Ki, t.svgOverlay = function (t, e, i) {
      return new Oi(t, e, i);
    }, t.tileLayer = ji, t.tooltip = function (t, e) {
      return new Ii(t, e);
    }, t.transformation = ht, t.version = "1.9.4", t.videoOverlay = function (t, e, i) {
      return new ki(t, e, i);
    }, window.L);
  t.noConflict = function () {
    return window.L = Xi, this;
  }, window.L = t;
});

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \********************************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var contentTreeContainer = doc.querySelector('.ibexa-content-tree-container');
  if (!contentTreeContainer) {
    return;
  }
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var contentTreeRootElement = doc.querySelector('.ibexa-content-tree-container__root');
  var _contentTreeContainer = contentTreeContainer.dataset,
    currentLocationPath = _contentTreeContainer.currentLocationPath,
    treeRootLocationId = _contentTreeContainer.treeRootLocationId;
  var userId = window.ibexa.helpers.user.getId();
  var removeContentTreeContainerWidth = function removeContentTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-content-tree') {
      return;
    }
    contentTreeContainer.style.width = null;
  };
  var renderTree = function renderTree() {
    var contentTreeRoot = ReactDOM.createRoot(contentTreeRootElement);
    contentTreeRoot.render(React.createElement(ibexa.modules.ContentTree, {
      userId: userId,
      currentLocationPath: currentLocationPath,
      rootLocationId: parseInt(treeRootLocationId, 10),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      }
    }));
  };
  doc.body.addEventListener('ibexa-tb-rendered', removeContentTreeContainerWidth);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var modal = doc.querySelector('#ibexa-modal--custom-url-alias');
  if (modal) {
    var discardBtns = modal.querySelectorAll('[data-bs-dismiss="modal"]');
    var submitBtn = modal.querySelector('#custom_url_add_add');
    var input = modal.querySelector('[required="required"]');
    var siteRootCheckbox = modal.querySelector('[name="custom_url_add[site_root]"]');
    var toggleButtonState = function toggleButtonState() {
      var hasValue = input.value.trim().length !== 0;
      var methodName = hasValue ? 'removeAttribute' : 'setAttribute';
      submitBtn[methodName]('disabled', true);
    };
    var clearValues = function clearValues() {
      input.value = '';
      toggleButtonState();
    };
    var toggleSiteAccessSelect = function toggleSiteAccessSelect(event) {
      var isChecked = event.target.checked;
      var siteAccessSelect = modal.querySelector('.ibexa-custom-url-from__item--siteacces .ibexa-dropdown');
      siteAccessSelect.classList.toggle('ibexa-dropdown--is-disabled', isChecked);
    };
    input.addEventListener('input', toggleButtonState, false);
    siteRootCheckbox.addEventListener('change', toggleSiteAccessSelect, false);
    discardBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearValues, false);
    });
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
  var SELECTOR_BOOKMARK_WRAPPER = '.ibexa-add-to-bookmarks';
  var CLASS_BOOKMARK_CHECKED = 'ibexa-add-to-bookmarks--checked';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var bookmarkWrapper = doc.querySelector(SELECTOR_BOOKMARK_WRAPPER);
  if (!bookmarkWrapper) {
    return;
  }
  var currentLocationId = parseInt(bookmarkWrapper.getAttribute('data-location-id'), 10);
  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;
  var isUpdatingBookmark = false;
  var getResponseStatus = function getResponseStatus(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.status;
  };
  var handleBookmarkUpdated = function handleBookmarkUpdated(isBookmarked) {
    ibexa.helpers.tooltips.hideAll();
    isUpdatingBookmark = false;
    doc.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
      detail: {
        bookmarked: isBookmarked,
        locationId: currentLocationId
      }
    }));
  };
  var updateBookmark = function updateBookmark(addBookmark) {
    if (isUpdatingBookmark) {
      return;
    }
    isUpdatingBookmark = true;
    var method = addBookmark ? 'POST' : 'DELETE';
    var request = new Request("".concat(ENDPOINT_BOOKMARK, "/").concat(currentLocationId), {
      method: method,
      headers: {
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(getResponseStatus).then(handleBookmarkUpdated.bind(null, addBookmark))["catch"](handleUpdateError);
  };
  var isCurrentLocation = function isCurrentLocation(locationId) {
    return parseInt(locationId, 10) === currentLocationId;
  };
  var toggleBookmarkIconState = function toggleBookmarkIconState(isBookmarked) {
    bookmarkWrapper.classList.toggle(CLASS_BOOKMARK_CHECKED, isBookmarked);
  };
  var updateBookmarkIconState = function updateBookmarkIconState(_ref) {
    var detail = _ref.detail;
    var bookmarked = detail.bookmarked,
      locationId = detail.locationId;
    if (isCurrentLocation(locationId)) {
      toggleBookmarkIconState(bookmarked);
    }
  };
  var handleBookmarkClick = function handleBookmarkClick() {
    var isBookmarked = bookmarkWrapper.classList.contains(CLASS_BOOKMARK_CHECKED);
    updateBookmark(!isBookmarked);
  };
  doc.body.addEventListener('ibexa-bookmark-change', updateBookmarkIconState, false);
  if (bookmarkWrapper) {
    bookmarkWrapper.addEventListener('click', handleBookmarkClick, false);
  }
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ***!
  \********************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };
  var locationLanguageSwitchers = doc.querySelectorAll('.ibexa-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, Leaflet) {
  doc.querySelectorAll('.ibexa-gmaplocation__map').forEach(function (mapLocation) {
    var latitude = parseFloat(mapLocation.dataset.latitude);
    var longitude = parseFloat(mapLocation.dataset.longitude);
    var map = Leaflet.map(mapLocation, {
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      tap: false,
      center: [latitude, longitude]
    });
    Leaflet.marker([latitude, longitude], {
      icon: new Leaflet.Icon.Default({
        imagePath: '/bundles/ibexaadminuiassets/vendors/leaflet/dist/images/'
      })
    }).addTo(map);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });
})(window, window.document, window.L);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js ***!
  \*************************************************************************************************************/
/***/ (() => {

(function (global, doc, localStorage, bootstrap) {
  var CONTENT_PREVIEW_COLLAPSE_SELECTOR = '.ibexa-content-preview-collapse';
  var DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY = 'ibexa-content-preview-collapsed';
  var getStateKey = function getStateKey(collapseTarget) {
    return collapseTarget.dataset.collapseStateKey || DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY;
  };
  var getContentPreviewToggleState = function getContentPreviewToggleState(collapsable) {
    var stateKey = getStateKey(collapsable);
    var value = localStorage.getItem(stateKey);
    return !!JSON.parse(value);
  };
  var setContentPreviewToggleState = function setContentPreviewToggleState(event, value) {
    var stateKey = getStateKey(event.target);
    localStorage.setItem(stateKey, value);
  };
  doc.querySelectorAll(CONTENT_PREVIEW_COLLAPSE_SELECTOR).forEach(function (collapsable) {
    new bootstrap.Collapse(collapsable, {
      toggle: getContentPreviewToggleState(collapsable)
    });
    collapsable.addEventListener('hide.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, true);
    });
    collapsable.addEventListener('show.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, false);
    });
  });
})(window, window.document, window.localStorage, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainLocation = function updateMainLocation(event) {
    doc.querySelector('#content_main_location_update_location').value = event.target.value;
    doc.querySelector('form[name="content_main_location_update"]').submit();
  };
  doc.querySelectorAll('input[name="updateMainLocation"]').forEach(function (input) {
    return input.addEventListener('change', updateMainLocation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, localStorage, bootstrap, React, ReactDOM, ibexa, Routing, Translator) {
  var SELECTOR_MODAL_BULK_ACTION_FAIL = '#bulk-action-failed-modal';
  var listContainers = doc.querySelectorAll('.ibexa-sil');
  var mfuContainer = doc.querySelector('#ibexa-mfu');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var emdedItemsUpdateChannel = new BroadcastChannel('ibexa-emded-item-live-update');
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var publishedContentId = urlParams.get('publishedContentId');
  var handleEditItem = function handleEditItem(content, location) {
    var contentId = content._id;
    var locationId = location._id;
    var languageCode = content.mainLanguageCode;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    var submitVersionEditForm = function submitVersionEditForm() {
      doc.querySelector('#form_subitems_content_edit_content_info').value = contentId;
      doc.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
      doc.querySelector('#form_subitems_content_edit_create').click();
    };
    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var attachModalListeners = function attachModalListeners(wrapper) {
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      var conflictModal = doc.querySelector('#version-draft-conflict-modal');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (event) {
          return event.preventDefault();
        }, false);
      });
      if (conflictModal) {
        bootstrap.Modal.getOrCreateInstance(conflictModal).show();
        conflictModal.addEventListener('shown.bs.modal', function () {
          return ibexa.helpers.tooltips.parse();
        });
      }
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      attachModalListeners(wrapper);
    };
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: content.mainLanguageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(function (response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var generateLink = function generateLink(locationId, contentId) {
    return Routing.generate('ibexa.content.view', {
      contentId: contentId,
      locationId: locationId
    });
  };
  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_BULK_ACTION_FAIL, " .ibexa-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
    modalTableTitleNode.setAttribute('title', title);
    modalTableTitleNode.dataset.originalTitle = title;
  };
  var setModalTableBody = function setModalTableBody(failedItemsData) {
    var modal = doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL);
    var table = modal.querySelector('.ibexa-bulk-action-failed-modal__table');
    var tableBody = table.querySelector('.ibexa-bulk-action-failed-modal__table-body');
    var rowTemplate = table.dataset.rowTemplate;
    var fragment = doc.createDocumentFragment();
    failedItemsData.forEach(function (_ref) {
      var contentName = _ref.contentName,
        contentTypeName = _ref.contentTypeName;
      var container = doc.createElement('tbody');
      var renderedItem = rowTemplate.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };
  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };
  var showBulkActionFailedModal = function showBulkActionFailedModal(tableTitle, failedItemsData) {
    setModalTableBody(failedItemsData);
    setModalTableTitle(tableTitle);
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL)).show();
  };
  var getLocationActiveView = function getLocationActiveView(parentLocationId) {
    var mediaLocationId = ibexa.adminUiConfig.locations.media;
    var defaultActiveView = parentLocationId === mediaLocationId ? 'grid' : 'table';
    var activeView = localStorage.getItem("ibexa-subitems-active-view-location-".concat(parentLocationId));
    return activeView || defaultActiveView;
  };
  listContainers.forEach(function (container) {
    var sortField = container.getAttribute('data-sort-field');
    var sortOrder = container.getAttribute('data-sort-order');
    var subitemsRoot = ReactDOM.createRoot(container);
    var parentLocationId = parseInt(container.dataset.location, 10);
    var activeView = getLocationActiveView(parentLocationId);
    var subItemsList = JSON.parse(container.dataset.items).SubitemsList;
    var items = subItemsList.SubitemsRow.map(function (item) {
      return {
        content: item.Content,
        location: item.Location
      };
    });
    var contentTypes = JSON.parse(container.dataset.contentTypes).ContentTypeInfoList.ContentType;
    var contentTypesMap = contentTypes.reduce(function (total, item) {
      total[item._href] = item;
      return total;
    }, {});
    var udwConfigBulkMoveItems = JSON.parse(container.dataset.udwConfigBulkMoveItems);
    var udwConfigBulkAddLocation = JSON.parse(container.dataset.udwConfigBulkAddLocation);
    var mfuContentTypesMap = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
      var _iterator = _createForOfIteratorHelper(contentTypeGroup),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var contentTypeData = _step.value;
          contentTypeDataMap[contentTypeData.href] = contentTypeData;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return contentTypeDataMap;
    }, {});
    var mfuAttrs = {
      adminUiConfig: _objectSpread(_objectSpread({}, ibexa.adminUiConfig), {}, {
        token: token,
        siteaccess: siteaccess
      }),
      parentInfo: {
        contentTypeIdentifier: mfuContainer.dataset.parentContentTypeIdentifier,
        locationPath: mfuContainer.dataset.parentLocationPath,
        name: mfuContainer.dataset.parentName,
        language: mfuContainer.dataset.parentContentLanguage
      },
      currentLanguage: mfuContainer.dataset.currentLanguage
    };
    subitemsRoot.render(React.createElement(ibexa.modules.SubItems, {
      handleEditItem: handleEditItem,
      generateLink: generateLink,
      activeView: activeView,
      parentLocationId: parentLocationId,
      sortClauses: _defineProperty({}, sortField, sortOrder),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      },
      extraActions: [{
        component: ibexa.modules.MultiFileUpload,
        attrs: _objectSpread(_objectSpread({}, mfuAttrs), {}, {
          onPopupClose: function onPopupClose(itemsUploaded) {
            return itemsUploaded.length && global.location.reload(true);
          },
          contentCreatePermissionsConfig: JSON.parse(container.dataset.mfuCreatePermissionsConfig),
          contentTypesMap: mfuContentTypesMap
        })
      }],
      items: items,
      contentTypesMap: contentTypesMap,
      totalCount: subItemsList.ChildrenCount,
      udwConfigBulkMoveItems: udwConfigBulkMoveItems,
      udwConfigBulkAddLocation: udwConfigBulkAddLocation,
      showBulkActionFailedModal: showBulkActionFailedModal
    }));
  });
  if (publishedContentId) {
    emdedItemsUpdateChannel.postMessage({
      contentId: publishedContentId
    });
  }
})(window, window.document, window.localStorage, window.bootstrap, window.React, window.ReactDOM, window.ibexa, window.Routing, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js ***!
  \***************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var SELECTOR_VISIBILITY_CHECKBOXES = '#ibexa-tab-location-view-locations .ibexa-content-locations__visibility-checkbox';
  var SELECTOR_VISIBILITY_FORM = 'form[name="location_update_visibility_data"]';
  var form = doc.querySelector(SELECTOR_VISIBILITY_FORM);
  var visibilityCheckboxes = doc.querySelectorAll(SELECTOR_VISIBILITY_CHECKBOXES);
  var refreshContentTree = function refreshContentTree() {
    doc.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
  };
  var onVisibilityUpdated = function onVisibilityUpdated(_ref) {
    var target = _ref.target;
    var toggleLabel = target.closest('.ibexa-content-locations__visibility-toggler').querySelector('.ibexa-content-locations__visibility-toggler-label');
    toggleLabel.classList.toggle('ibexa-content-locations__visibility-toggler-label--hidden');
  };
  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;
  var handleUpdateSuccess = function handleUpdateSuccess(event, _ref2) {
    var message = _ref2.message;
    onVisibilityUpdated(event);
    ibexa.helpers.notification.showSuccessNotification(message);
    refreshContentTree();
  };
  var handleUpdateResponse = function handleUpdateResponse(response) {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.json();
  };
  var updateVisibility = function updateVisibility(event) {
    form.querySelector('#location_update_visibility_data_location').value = event.target.value;
    form.querySelector('#location_update_visibility_data_hidden').checked = !event.target.checked;
    var request = new Request(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(handleUpdateResponse).then(handleUpdateSuccess.bind(null, event))["catch"](handleUpdateError);
  };
  visibilityCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateVisibility, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainTranslation = function updateMainTranslation(event) {
    doc.querySelector('#main_translation_update_language_code').value = event.target.value;
    doc.querySelector('form[name="main_translation_update"]').submit();
  };
  var inputs = doc.querySelectorAll('input[name="main_translation_update"]');
  inputs.forEach(function (input) {
    return input.addEventListener('change', updateMainTranslation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentDraftEditUrl = _event$currentTarget$.contentDraftEditUrl,
      versionHasConflictUrl = _event$currentTarget$.versionHasConflictUrl,
      contentId = _event$currentTarget$.contentId,
      languageCode = _event$currentTarget$.languageCode;
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-conflict-modal')).show();
      }
      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }
      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var FORM_EDIT = 'form.ibexa-edit-content-form';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
      contentId = _event$currentTarget$.contentId,
      versionNo = _event$currentTarget$.versionNo,
      languageCode = _event$currentTarget$.languageCode;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(/*@Desc("You don't have permission to edit this Content item")*/'content.edit.permission.error', {}, 'ibexa_content');
    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };
    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };
    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }
      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (wrapperBtnEvent) {
          return wrapperBtnEvent.preventDefault();
        }, false);
      });
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).show();
    };
    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }
      throw new Error(errorMessage);
    };
    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    };
    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };
  doc.querySelectorAll('.ibexa-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);
    if (!buttonRemove) {
      return;
    }
    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };
    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit');
  var languageRadioOption = doc.querySelector('.ibexa-content-menu-wrapper .ibexa-extra-actions--edit.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  if (!languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var hideButton = doc.querySelector('.ibexa-btn--hide');
  var modal = doc.querySelector('#hide-content-modal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');
  if (!hideButton) {
    return;
  }
  if (modal) {
    modal.querySelector('.ibexa-btn--confirm').addEventListener('click', function () {
      visiblity.value = 0;
      form.submit();
    });
  }
  hideButton.addEventListener('click', function () {
    if (modal) {
      bootstrap.Modal.getOrCreateInstance(modal).show();
    } else {
      visiblity.value = 0;
      form.submit();
    }
  }, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js ***!
  \****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var revealButton = doc.querySelector('.ibexa-btn--reveal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');
  if (!revealButton) {
    return;
  }
  revealButton.addEventListener('click', function () {
    visiblity.value = 1;
    form.submit();
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var createActions = doc.querySelectorAll('.ibexa-extra-actions--create');
  var bindCreateActionsEvents = function bindCreateActionsEvents(container) {
    var radioInputs = container.querySelectorAll('.form-check [type="radio"]');
    var submitBtn = container.querySelector('.ibexa-extra-actions__btn--confirm');
    radioInputs.forEach(function (radioInput) {
      return radioInput.addEventListener('change', function (event) {
        var selectedItems = container.querySelectorAll('.ibexa-instant-filter__group-item--selected');
        var itemToSelect = event.currentTarget.closest('.ibexa-instant-filter__group-item');
        selectedItems.forEach(function (selectedItem) {
          return selectedItem.classList.remove('ibexa-instant-filter__group-item--selected');
        });
        itemToSelect.classList.add('ibexa-instant-filter__group-item--selected');
        submitBtn.removeAttribute('disabled');
      }, false);
    });
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var createActionsContainer = event.detail.container.closest('.ibexa-extra-actions--create');
    bindCreateActionsEvents(createActionsContainer);
  });
  if (!createActions.length) {
    return;
  }
  createActions.forEach(bindCreateActionsEvents);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js ***!
  \***************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, bootstrap, Routing) {
  var editActions = doc.querySelectorAll('.ibexa-extra-actions--edit, .ibexa-extra-actions--edit-user');
  var resetRadioButtons = function resetRadioButtons(btns) {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };
  var addDraft = function addDraft(form) {
    form.submit();
    bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
  };
  var redirectToUserEdit = function redirectToUserEdit(languageCode, contentId, form) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ibexa.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };
  var onModalHidden = function onModalHidden(btns) {
    resetRadioButtons(btns);
    var event = new CustomEvent('ibexa-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };
  var attachModalListeners = function attachModalListeners(wrapper, form, btns) {
    var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
    var conflictModal = doc.querySelector('#version-draft-conflict-modal');
    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft.bind(null, form), false);
    }
    wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });
    if (conflictModal) {
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hidden.bs.modal', onModalHidden.bind(null, btns));
      conflictModal.addEventListener('shown.bs.modal', function () {
        return ibexa.helpers.tooltips.parse();
      });
    }
  };
  var showModal = function showModal(form, btns, modalHtml) {
    var wrapper = doc.querySelector('.ibexa-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper, form, btns);
  };
  var changeHandler = function changeHandler(form, btns, event) {
    var contentIdInput = form.querySelector('.ibexa-extra-actions__form-field--content-info');
    var locationInput = form.querySelector('.ibexa-extra-actions__form-field--location');
    var contentId = contentIdInput.value;
    var locationId = locationInput.value;
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal.bind(null, form, btns));
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode, contentId, form);
          return;
        }
        form.submit();
      }
    });
  };
  var attachEventsToEditActionsWidget = function attachEventsToEditActionsWidget(container) {
    var btns = _toConsumableArray(container.querySelectorAll('.form-check [type="radio"]'));
    var form = container.querySelector('form');
    btns.forEach(function (btn) {
      return btn.addEventListener('change', changeHandler.bind(null, form, btns), false);
    });
  };
  _toConsumableArray(editActions).forEach(attachEventsToEditActionsWidget);
})(window, window.document, window.ibexa, window.bootstrap, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit-user');
  var languageRadioOption = doc.querySelector('.ibexa-extra-actions--edit-user.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  var editActions = doc.querySelector('.ibexa-extra-actions--edit-user');
  if (!editActions || !languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';
  var closeBtns = doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close, .ibexa-extra-actions .ibexa-extra-actions__btn--cancel');
  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));
  var menu = doc.querySelector('.ibexa-context-menu');
  var backdrop = new ibexa.core.Backdrop();
  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };
  var removeBackdrop = function removeBackdrop() {
    backdrop.hide();
    doc.body.classList.remove('ibexa-scroll-disabled');
  };
  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);
    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
  };
  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));
    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }
    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);
    var _detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', _detectClickOutside, false);
      }
    };
    actions.classList.toggle(CLASS_HIDDEN, !isHidden);
    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }
    if (!actions.classList.contains(CLASS_HIDDEN)) {
      backdrop.show();
      doc.body.addEventListener('click', _detectClickOutside, false);
      doc.body.classList.add('ibexa-scroll-disabled');
    } else {
      doc.body.removeEventListener('click', _detectClickOutside);
      removeBackdrop();
    }
    if (focusElement) {
      focusElement.focus();
    }
  };
  var initExtraActionsWidget = function initExtraActionsWidget(dataset) {
    var hashes = window.location.hash.split('#');
    if (hashes.includes(dataset.actions)) {
      toggleExtraActionsWidget(dataset);
    }
  };
  var hideMenu = function hideMenu(btn) {
    var menuBranch = btn.closest('.ibexa-multilevel-popup-menu__branch');
    if (!(menuBranch !== null && menuBranch !== void 0 && menuBranch.menuInstanceElement)) {
      return;
    }
    var menuInstance = ibexa.helpers.objectInstances.getInstance(menuBranch.menuInstanceElement);
    menuInstance.closeMenu();
  };
  btns.forEach(function (btn) {
    var dataset = btn.dataset;
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(dataset);
      hideMenu(btn);
    }, false);
    initExtraActionsWidget(dataset);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  closeBtns.forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js ***!
  \************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');
  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });
    group.toggleAttribute('hidden', areChildrenHidden);
  };
  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };
  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');
    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));
    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));
    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }, false);
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var filterContainer = event.detail.container.closest('.ibexa-instant-filter');
    initFilter(filterContainer);
  });
  filters.forEach(initFilter);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy');
  var form = doc.querySelector('form[name="location_copy"]');
  var input = form.querySelector('#location_copy_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location")*/'copy.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js ***!
  \******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy-subtree');
  var form = doc.querySelector('form[name="location_copy_subtree"]');
  var input = form.querySelector('#location_copy_subtree_new_parent_location');
  var udwContainer = doc.querySelector('#react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var title = Translator.trans(/*@Desc("Select Location")*/'subtree.title', {}, 'ibexa_universal_discovery_widget');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js ***!
  \*******************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-add');
  var submitButton = doc.querySelector('#content_location_add_add');
  var form = doc.querySelector('form[name="content_location_add"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#content_location_add_new_locations');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    submitButton.click();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    event.stopPropagation();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location")*/'add_location.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      containersOnly: true,
      title: title,
      multiple: false
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-move');
  var form = doc.querySelector('form[name="location_move"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#location_move_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select destination")*/'move.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js ***!
  \**********************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-swap');
  var form = doc.querySelector('form[name="location_swap"]');
  if (!form) {
    return;
  }
  var input = form.querySelector('#location_swap_new_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select Location to swap with")*/'swap.title', {}, 'ibexa_universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false
    }, config)));
  };
  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.invitation.modal */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

(function (global, doc) {
  var modal = doc.querySelector('.ibexa-user-group-invitation');
  if (!modal) {
    return;
  }
  var UserGroupInvitationModal = /*#__PURE__*/function (_UserInvitationModal) {
    function UserGroupInvitationModal() {
      _classCallCheck(this, UserGroupInvitationModal);
      return _callSuper(this, UserGroupInvitationModal, arguments);
    }
    _inherits(UserGroupInvitationModal, _UserInvitationModal);
    return _createClass(UserGroupInvitationModal, [{
      key: "processCSVInvitationFile",
      value: function processCSVInvitationFile(file) {
        return file.text().then(function (text) {
          var lineRegexp = /^([^;\r\n]+)$/gm;
          var matchedData = _toConsumableArray(text.matchAll(lineRegexp));
          var invitationsData = matchedData.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
              email = _ref2[0];
            return {
              email: email
            };
          });
          return invitationsData;
        });
      }
    }, {
      key: "resetEntry",
      value: function resetEntry(entry) {
        _superPropGet(UserGroupInvitationModal, "resetEntry", this, 3)([entry]);
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = null;
      }
    }, {
      key: "isEntryEmpty",
      value: function isEntryEmpty(entry) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        return !emailInput.value;
      }
    }, {
      key: "addEntry",
      value: function addEntry() {
        var _invitationData$email;
        var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var addEntryData = _superPropGet(UserGroupInvitationModal, "addEntry", this, 3)([isFileRelated, invitationData]);
        var insertedEntry = addEntryData.insertedEntry;
        var email = (_invitationData$email = invitationData === null || invitationData === void 0 ? void 0 : invitationData.email) !== null && _invitationData$email !== void 0 ? _invitationData$email : null;
        var emailInput = insertedEntry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = email;
        return addEntryData;
      }
    }, {
      key: "checkEntryMatchesSearch",
      value: function checkEntryMatchesSearch(entry, searchText) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        var email = emailInput.value;
        return email.includes(searchText);
      }
    }, {
      key: "checkIsEntryDuplicate",
      value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
        var entryToCompareEmailInput = entryToCompare.querySelector('.ibexa-user-group-invitation__entry-email');
        return invitationData.email === entryToCompareEmailInput.value;
      }
    }]);
  }(_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__.UserInvitationModal);
  var userInvitationModal = new UserGroupInvitationModal({
    modal: modal
  });
  userInvitationModal.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInvitationModal: () => (/* binding */ UserInvitationModal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var UserInvitationModal = /*#__PURE__*/function () {
  function UserInvitationModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, UserInvitationModal);
    if (!options.modal) {
      throw new Error('No valid modal option provided');
    }
    this.modal = options.modal;
    this.stickyTopContainer = this.modal.querySelector('.ibexa-user-invitation-modal__sticky-top');
    this.searchInput = this.modal.querySelector('.ibexa-user-invitation-modal__search-input');
    this.searchBtn = this.modal.querySelector('.ibexa-input-text-wrapper__action-btn--search');
    this.searchNoEntries = this.modal.querySelector('.ibexa-user-invitation-modal__search-no-entries');
    this.badFileAlert = this.modal.querySelector('.ibexa-user-invitation-modal__bad-file-alert');
    this.badFileAlertCloseBtn = this.badFileAlert.querySelector('.ibexa-alert__close-btn');
    this.issuesAlert = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert');
    this.issuesAlertIssuesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert-issues');
    this.issuesAlertCloseBtn = this.issuesAlert.querySelector('.ibexa-alert__close-btn');
    this.goToNextIssueBtn = this.issuesAlert.querySelector('.ibexa-user-invitation-modal__next-issue-btn');
    this.addNextBtn = this.modal.querySelector('.ibexa-user-invitation-modal__add-next-btn');
    this.entriesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__entries');
    this.entryPrototype = this.entriesContainer.dataset.prototype;
    this.fileUploadMessage = this.modal.querySelector('.ibexa-user-invitation-modal__upload-file-message');
    this.dropZone = this.modal.querySelector('.ibexa-user-invitation-modal__drop');
    this.uploadLocalFileBtn = this.modal.querySelector('.ibexa-user-invitation-modal__file-select');
    this.fileInput = this.modal.querySelector('.ibexa-user-invitation-modal__file-input');
    this.fakeSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__fake-submit-btn');
    this.realSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__real-submit-btn');
    this.lastScrolledToEntryWithIssue = null;
    this.attachEntryListeners = this.attachEntryListeners.bind(this);
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleInputUpload = this.handleInputUpload.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.scrollToNextIssue = this.scrollToNextIssue.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  return _createClass(UserInvitationModal, [{
    key: "processCSVInvitationFile",
    value: function processCSVInvitationFile(file) {
      throw new Error('processCSVInvitationFile should be overridden in subclass.');
    }
  }, {
    key: "countFilledLinesInFile",
    value: function countFilledLinesInFile(file) {
      return file.text().then(function (text) {
        var nonEmptyLineRegexp = /^([^\r\n]+)$/gm;
        var matchedData = _toConsumableArray(text.matchAll(nonEmptyLineRegexp));
        return matchedData.length;
      });
    }
  }, {
    key: "resetEntry",
    value: function resetEntry(entry) {
      this.toggleInvalidEmailState(entry, {
        isEmptyError: false,
        isInvalidFormatError: false
      });
      this.toggleDuplicateEntryState(entry, false);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "isEntryEmpty",
    value: function isEntryEmpty(entry) {
      throw new Error('isEntryEmpty should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkEntryMatchesSearch",
    value: function checkEntryMatchesSearch(entry, searchText) {
      throw new Error('checkEntryMatchesSearch should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkIsEntryDuplicate",
    value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
      throw new Error('checkIsEntryDuplicate should be overridden in subclass.');
    }
  }, {
    key: "checkHasEntryIssue",
    value: function checkHasEntryIssue(entry) {
      var hasEmptyEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var hasInvalidEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var hasDuplicateIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      return hasEmptyEmailIssue || hasInvalidEmailIssue || hasDuplicateIssue;
    }
  }, {
    key: "findDuplicateEntry",
    value: function findDuplicateEntry(invitationData, entriesToCompare) {
      var _iterator = _createForOfIteratorHelper(entriesToCompare),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entryToCompare = _step.value;
          if (this.checkIsEntryDuplicate(invitationData, entryToCompare)) {
            return entryToCompare;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "toggleIssueNode",
    value: function toggleIssueNode(entry, issueNode, show, position, template) {
      var entryIssuesContainer = entry.querySelector('.ibexa-user-invitation-modal__entry-issues');
      if (show) {
        if (!issueNode) {
          entryIssuesContainer.insertAdjacentHTML(position, template);
        }
      } else {
        if (issueNode) {
          issueNode.remove();
        }
      }
    }
  }, {
    key: "toggleDuplicateEntryState",
    value: function toggleDuplicateEntryState(entry, isDuplicate) {
      var duplicateEntryIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      var issueDuplicateInfoTemplate = this.entriesContainer.dataset.issueDuplicateInfoTemplate;
      this.toggleIssueNode(entry, duplicateEntryIssueNode, isDuplicate, 'beforeend', issueDuplicateInfoTemplate);
    }
  }, {
    key: "toggleInvalidEmailState",
    value: function toggleInvalidEmailState(entry, _ref) {
      var isEmptyError = _ref.isEmptyError,
        isInvalidFormatError = _ref.isInvalidFormatError;
      var emptyEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var invalidEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var _this$entriesContaine = this.entriesContainer.dataset,
        issueInvalidEmailTemplate = _this$entriesContaine.issueInvalidEmailTemplate,
        issueEmptyEmailTemplate = _this$entriesContaine.issueEmptyEmailTemplate;
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      emailInput.classList.toggle('is-invalid', isEmptyError || isInvalidFormatError);
      this.toggleIssueNode(entry, emptyEmailIssueNode, isEmptyError, 'afterbegin', issueEmptyEmailTemplate);
      this.toggleIssueNode(entry, invalidEmailIssueNode, isInvalidFormatError, 'afterbegin', issueInvalidEmailTemplate);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailInput) {
      var isEmpty = !emailInput.value.trim();
      if (isEmpty) {
        return {
          isEmptyError: isEmpty,
          isInvalidFormatError: false
        };
      }
      var isValid = ibexa.errors.emailRegexp.test(emailInput.value);
      return {
        isEmptyError: false,
        isInvalidFormatError: !isValid
      };
    }
  }, {
    key: "validateEntryEmail",
    value: function validateEntryEmail(entry) {
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      var errors = this.validateEmail(emailInput);
      this.toggleInvalidEmailState(entry, errors);
      this.manageIssuesAlert();
      return errors.isEmptyError || errors.isInvalidFormatError;
    }
  }, {
    key: "handleEmailValidation",
    value: function handleEmailValidation(event) {
      var emailInput = event.currentTarget;
      var entry = emailInput.closest('.ibexa-user-invitation-modal__entry');
      this.validateEntryEmail(entry);
    }
  }, {
    key: "prepareIssuesAlert",
    value: function prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount) {
      var messages = [];
      if (emptyEmailsCount) {
        var emptyEmailsMessage = Translator.trans(/*@Desc("Empty emails (%count%)")*/'modal.entry_issues.alert.empty_emails', {
          count: emptyEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(emptyEmailsMessage);
      }
      if (invalidEmailsCount) {
        var invalidEmailsMessage = Translator.trans(/*@Desc("Invalid emails (%count%)")*/'modal.entry_issues.alert.invalid_emails', {
          count: invalidEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(invalidEmailsMessage);
      }
      if (duplicateEntryCount) {
        var duplicatedEmailsMessage = Translator.trans(/*@Desc("Duplicated emails (%count%)")*/'modal.entry_issues.alert.duplicate_emails', {
          count: duplicateEntryCount
        }, 'ibexa_user_invitation');
        messages.push(duplicatedEmailsMessage);
      }
      this.issuesAlertIssuesContainer.innerText = messages.join(' | ');
    }
  }, {
    key: "manageIssuesAlert",
    value: function manageIssuesAlert() {
      var emptyEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-empty').length;
      var invalidEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-invalid-format').length;
      var duplicateEntryCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-duplicate').length;
      var isAnyIssue = emptyEmailsCount || invalidEmailsCount || duplicateEntryCount;
      if (isAnyIssue) {
        this.prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount);
      }
      this.toggleIssuesAlert(isAnyIssue);
    }
  }, {
    key: "toggleIssuesAlert",
    value: function toggleIssuesAlert(show) {
      this.issuesAlert.classList.toggle('ibexa-user-invitation-modal__issues-alert--hidden', !show);
    }
  }, {
    key: "toggleBadFileAlert",
    value: function toggleBadFileAlert(show) {
      this.badFileAlert.classList.toggle('ibexa-user-invitation-modal__bad-file-alert--hidden', !show);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "addEntry",
    value: function addEntry() {
      var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var entryPrototypeRendered = this.entryPrototype.replaceAll('__name__', this.entryCounter);
      this.entryCounter = this.entryCounter + 1;
      this.entriesContainer.insertAdjacentHTML('beforeend', entryPrototypeRendered);
      var insertedEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (isFileRelated) {
        insertedEntry.classList.add('ibexa-user-invitation-modal__entry--file-related');
      }
      this.attachEntryListeners(insertedEntry);
      document.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
      return {
        insertedEntry: insertedEntry
      };
    }
  }, {
    key: "deleteEntry",
    value: function deleteEntry(entry) {
      var isForceRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var entryNodes = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var isLastEntry = entryNodes.length === 1;
      if (isLastEntry && !isForceRemove) {
        this.resetEntry(entry);
      } else {
        if (entry === this.lastScrolledToEntryWithIssue) {
          this.lastScrolledToEntryWithIssue = this.lastScrolledToEntryWithIssue.previousElementSibling;
        }
        entry.remove();
      }
    }
  }, {
    key: "deleteTrailingEntriesIfEmpty",
    value: function deleteTrailingEntriesIfEmpty() {
      var lastEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (!lastEntry) {
        return;
      }
      if (this.isEntryEmpty(lastEntry)) {
        this.deleteEntry(lastEntry, true);
        this.deleteTrailingEntriesIfEmpty();
        this.manageIssuesAlert();
        this.updateModalTitle();
      }
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addEntry();
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-user-invitation-modal__entry');
      this.deleteEntry(entry);
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "attachEntryListeners",
    value: function attachEntryListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-user-invitation-modal__entry-delete-btn');
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      emailInput.addEventListener('blur', this.handleEmailValidation, false);
    }
  }, {
    key: "getNextEntryWithIssue",
    value: function getNextEntryWithIssue() {
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var firstEntryWithIssue = _toConsumableArray(entries).find(this.checkHasEntryIssue);
      if (!firstEntryWithIssue) {
        return;
      }
      var nextEntryWithIssue = null;
      if (!this.lastScrolledToEntryWithIssue) {
        nextEntryWithIssue = firstEntryWithIssue;
      } else {
        var currentlyCheckedEntry = this.lastScrolledToEntryWithIssue;
        while (currentlyCheckedEntry.nextElementSibling) {
          currentlyCheckedEntry = currentlyCheckedEntry.nextElementSibling;
          if (this.checkHasEntryIssue(currentlyCheckedEntry)) {
            nextEntryWithIssue = currentlyCheckedEntry;
            break;
          }
        }
        if (!nextEntryWithIssue) {
          nextEntryWithIssue = firstEntryWithIssue;
        }
      }
      return nextEntryWithIssue;
    }
  }, {
    key: "scrollToNextIssue",
    value: function scrollToNextIssue() {
      var nextEntryWithIssue = this.getNextEntryWithIssue();
      var scrollTopOffset = this.stickyTopContainer.offsetHeight;
      var entryScrollPosition = nextEntryWithIssue.getBoundingClientRect().top + window.pageYOffset - scrollTopOffset;
      this.modal.scrollTo({
        top: entryScrollPosition,
        behavior: 'smooth'
      });
      this.lastScrolledToEntryWithIssue = nextEntryWithIssue;
    }
  }, {
    key: "searchEntries",
    value: function searchEntries(searchText) {
      var _this = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        var doesEntryMatchSearch = _this.checkEntryMatchesSearch(entry, searchText);
        entry.classList.toggle('ibexa-user-invitation-modal__entry--not-matching-search', !doesEntryMatchSearch);
      });
    }
  }, {
    key: "toggleSearchNoEntriesBasedOnSearch",
    value: function toggleSearchNoEntriesBasedOnSearch() {
      var isAnyEntryShowed = !!this.modal.querySelectorAll('.ibexa-user-invitation-modal__entry:not(.ibexa-user-invitation-modal__entry--not-matching-search)').length;
      this.searchNoEntries.classList.toggle('ibexa-user-invitation-modal__search-no-entries--hidden', isAnyEntryShowed);
    }
  }, {
    key: "toggleUpload",
    value: function toggleUpload(isForceHide) {
      this.fileUploadMessage.classList.toggle('ibexa-user-invitation-modal__upload-file-message--hidden', isForceHide);
      this.dropZone.classList.toggle('ibexa-user-invitation-modal__drop--hidden', isForceHide);
    }
  }, {
    key: "showUploadedFileNotification",
    value: function showUploadedFileNotification(fileName) {
      var message = Translator.trans(/*@Desc("File %fileName% was uploaded")*/'modal.file_uploaded.message', {
        fileName: fileName
      }, 'ibexa_user_invitation');
      ibexa.helpers.notification.showInfoNotification(message);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        return _this2.deleteEntry(entry);
      });
      this.manageIssuesAlert();
      this.updateModalTitle();
      this.toggleUpload(false);
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "handleInvitationFile",
    value: function () {
      var _handleInvitationFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var _this3 = this;
        var numberOfNonEmptyLines, invitationsData, entriesBeforeFileAdded;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.toggleUpload(true);
              this.showUploadedFileNotification(file.name);
              _context.next = 4;
              return this.countFilledLinesInFile(file);
            case 4:
              numberOfNonEmptyLines = _context.sent;
              _context.next = 7;
              return this.processCSVInvitationFile(file);
            case 7:
              invitationsData = _context.sent;
              if (!(numberOfNonEmptyLines === 0 || numberOfNonEmptyLines !== invitationsData.length)) {
                _context.next = 12;
                break;
              }
              this.toggleBadFileAlert(true);
              this.toggleUpload(false);
              return _context.abrupt("return");
            case 12:
              this.toggleBadFileAlert(false);
              this.deleteTrailingEntriesIfEmpty();
              entriesBeforeFileAdded = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
              invitationsData.forEach(function (invitationData) {
                var duplicateEntry = _this3.findDuplicateEntry(invitationData, entriesBeforeFileAdded);
                if (duplicateEntry) {
                  _this3.toggleDuplicateEntryState(duplicateEntry, true);
                  _this3.manageIssuesAlert();
                } else {
                  var _this3$addEntry = _this3.addEntry(true, invitationData),
                    insertedEntry = _this3$addEntry.insertedEntry;
                  _this3.validateEntryEmail(insertedEntry);
                }
              });
              this.updateModalTitle();
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handleInvitationFile(_x) {
        return _handleInvitationFile.apply(this, arguments);
      }
      return handleInvitationFile;
    }()
  }, {
    key: "handleInputUpload",
    value: function handleInputUpload(event) {
      this.preventDefaultAction(event);
      var file = this.fileInput.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleDropUpload",
    value: function handleDropUpload(event) {
      this.preventDefaultAction(event);
      var file = event.dataTransfer.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.searchEntries(this.searchInput.value);
      this.toggleSearchNoEntriesBasedOnSearch();
    }
  }, {
    key: "updateModalTitle",
    value: function updateModalTitle() {
      var titleNode = this.modal.querySelector('.modal-title');
      var invitationsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry').length;
      titleNode.innerText = Translator.trans(/*@Desc("Invite members (%invitations_count%)")*/'modal.title', {
        invitations_count: invitationsCount
      }, 'ibexa_user_invitation');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      this.initialEntries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      this.entryCounter = this.initialEntries.length;
      this.initialEntries.forEach(function (initialEntry) {
        _this4.attachEntryListeners(initialEntry);
        var emailInput = initialEntry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
        var isEmailEmpty = !emailInput.value;
        if (!isEmailEmpty) {
          _this4.validateEntryEmail(initialEntry);
        }
      });
      this.modal.addEventListener('shown.bs.modal', function () {
        window.addEventListener('drop', _this4.preventDefaultAction, false);
        window.addEventListener('dragover', _this4.preventDefaultAction, false);
      });
      this.modal.addEventListener('hidden.bs.modal', function () {
        window.removeEventListener('drop', _this4.preventDefaultAction, false);
        window.removeEventListener('dragover', _this4.preventDefaultAction, false);
        _this4.clearForm();
      });
      this.addNextBtn.addEventListener('click', this.handleEntryAdd, false);
      this.dropZone.addEventListener('drop', this.handleDropUpload, false);
      this.uploadLocalFileBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.fileInput.value = '';
        _this4.fileInput.click();
      }, false);
      this.fileInput.addEventListener('change', this.handleInputUpload, false);
      this.badFileAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleBadFileAlert(false);
      }, false);
      this.issuesAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleIssuesAlert(false);
      }, false);
      this.goToNextIssueBtn.addEventListener('click', this.scrollToNextIssue, false);
      this.searchInput.addEventListener('keyup', this.handleSearch, false);
      this.searchBtn.addEventListener('keyup', this.handleSearch, false);
      this.fakeSubmitBtn.addEventListener('click', function () {
        var allEntries = _toConsumableArray(_this4.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry'));
        var isFormValid = allEntries.map(function (entry) {
          return _this4.validateEntryEmail(entry);
        }).every(function (isError) {
          return !isError;
        });
        if (isFormValid) {
          _this4.realSubmitBtn.click();
        }
      }, false);
      this.updateModalTitle();
    }
  }]);
}();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js"));
/******/ }
]);
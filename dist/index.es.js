import ge, { createContext as Ye, useContext as qe, useRef as te, useMemo as pe, useCallback as Z, useEffect as ne, memo as Ne, createElement as Jr, forwardRef as Ft, useState as Kr } from "react";
import { useDrag as Ge, useDrop as Le, DragAndDropProvider as zt } from "react-use-drag-and-drop";
import { observe as ae, set as ce, useObserver as Me, useObserverValue as Q, useSelectorValue as Ee, selector as pr } from "react-observing";
import { v4 as $t } from "uuid";
import Vt from "react-dom";
var Ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lr = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function Ut() {
  if (Ar)
    return ke;
  Ar = 1;
  var e = ge, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, s, p) {
    var f, h = {}, C = null, c = null;
    p !== void 0 && (C = "" + p), s.key !== void 0 && (C = "" + s.key), s.ref !== void 0 && (c = s.ref);
    for (f in s)
      t.call(s, f) && !a.hasOwnProperty(f) && (h[f] = s[f]);
    if (u && u.defaultProps)
      for (f in s = u.defaultProps, s)
        h[f] === void 0 && (h[f] = s[f]);
    return { $$typeof: r, type: u, key: C, ref: c, props: h, _owner: i.current };
  }
  return ke.Fragment = n, ke.jsx = l, ke.jsxs = l, ke;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function Yt() {
  return kr || (kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ge, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function m(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[y];
      return typeof g == "function" ? g : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), j = 1; j < g; j++)
          w[j - 1] = arguments[j];
        S("error", o, w);
      }
    }
    function S(o, g, w) {
      {
        var j = R.ReactDebugCurrentFrame, q = j.getStackAddendum();
        q !== "" && (g += "%s", w = w.concat([q]));
        var X = w.map(function(H) {
          return String(H);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, X);
      }
    }
    var x = !1, d = !1, I = !1, K = !1, D = !1, J;
    J = Symbol.for("react.module.reference");
    function W(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === t || o === a || D || o === i || o === p || o === f || K || o === c || x || d || I || typeof o == "object" && o !== null && (o.$$typeof === C || o.$$typeof === h || o.$$typeof === l || o.$$typeof === u || o.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === J || o.getModuleId !== void 0));
    }
    function de(o, g, w) {
      var j = o.displayName;
      if (j)
        return j;
      var q = g.displayName || g.name || "";
      return q !== "" ? w + "(" + q + ")" : w;
    }
    function ue(o) {
      return o.displayName || "Context";
    }
    function P(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var g = o;
            return ue(g) + ".Consumer";
          case l:
            var w = o;
            return ue(w._context) + ".Provider";
          case s:
            return de(o, o.render, "ForwardRef");
          case h:
            var j = o.displayName || null;
            return j !== null ? j : P(o.type) || "Memo";
          case C: {
            var q = o, X = q._payload, H = q._init;
            try {
              return P(H(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, oe = 0, ie, ve, me, se, b, O, L;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function M() {
      {
        if (oe === 0) {
          ie = console.log, ve = console.info, me = console.warn, se = console.error, b = console.group, O = console.groupCollapsed, L = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        oe++;
      }
    }
    function V() {
      {
        if (oe--, oe === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, o, {
              value: ie
            }),
            info: U({}, o, {
              value: ve
            }),
            warn: U({}, o, {
              value: me
            }),
            error: U({}, o, {
              value: se
            }),
            group: U({}, o, {
              value: b
            }),
            groupCollapsed: U({}, o, {
              value: O
            }),
            groupEnd: U({}, o, {
              value: L
            })
          });
        }
        oe < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = R.ReactCurrentDispatcher, k;
    function F(o, g, w) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (q) {
            var j = q.stack.trim().match(/\n( *(at )?)/);
            k = j && j[1] || "";
          }
        return `
` + k + o;
      }
    }
    var Y = !1, z;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      z = new le();
    }
    function E(o, g) {
      if (!o || Y)
        return "";
      {
        var w = z.get(o);
        if (w !== void 0)
          return w;
      }
      var j;
      Y = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = A.current, A.current = null, M();
      try {
        if (g) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (we) {
              j = we;
            }
            Reflect.construct(o, [], H);
          } else {
            try {
              H.call();
            } catch (we) {
              j = we;
            }
            o.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            j = we;
          }
          o();
        }
      } catch (we) {
        if (we && j && typeof we.stack == "string") {
          for (var $ = we.stack.split(`
`), fe = j.stack.split(`
`), ee = $.length - 1, re = fe.length - 1; ee >= 1 && re >= 0 && $[ee] !== fe[re]; )
            re--;
          for (; ee >= 1 && re >= 0; ee--, re--)
            if ($[ee] !== fe[re]) {
              if (ee !== 1 || re !== 1)
                do
                  if (ee--, re--, re < 0 || $[ee] !== fe[re]) {
                    var ye = `
` + $[ee].replace(" at new ", " at ");
                    return o.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", o.displayName)), typeof o == "function" && z.set(o, ye), ye;
                  }
                while (ee >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        Y = !1, A.current = X, V(), Error.prepareStackTrace = q;
      }
      var Ie = o ? o.displayName || o.name : "", Mr = Ie ? F(Ie) : "";
      return typeof o == "function" && z.set(o, Mr), Mr;
    }
    function he(o, g, w) {
      return E(o, !1);
    }
    function je(o) {
      var g = o.prototype;
      return !!(g && g.isReactComponent);
    }
    function Ce(o, g, w) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return E(o, je(o));
      if (typeof o == "string")
        return F(o);
      switch (o) {
        case p:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            return he(o.render);
          case h:
            return Ce(o.type, g, w);
          case C: {
            var j = o, q = j._payload, X = j._init;
            try {
              return Ce(X(q), g, w);
            } catch {
            }
          }
        }
      return "";
    }
    var $e = Object.prototype.hasOwnProperty, wr = {}, Er = R.ReactDebugCurrentFrame;
    function Ve(o) {
      if (o) {
        var g = o._owner, w = Ce(o.type, o._source, g ? g.type : null);
        Er.setExtraStackFrame(w);
      } else
        Er.setExtraStackFrame(null);
    }
    function bt(o, g, w, j, q) {
      {
        var X = Function.call.bind($e);
        for (var H in o)
          if (X(o, H)) {
            var $ = void 0;
            try {
              if (typeof o[H] != "function") {
                var fe = Error((j || "React class") + ": " + w + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              $ = o[H](g, H, j, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              $ = ee;
            }
            $ && !($ instanceof Error) && (Ve(q), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", w, H, typeof $), Ve(null)), $ instanceof Error && !($.message in wr) && (wr[$.message] = !0, Ve(q), T("Failed %s type: %s", w, $.message), Ve(null));
          }
      }
    }
    var mt = Array.isArray;
    function Ze(o) {
      return mt(o);
    }
    function xt(o) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, w = g && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w;
      }
    }
    function wt(o) {
      try {
        return Sr(o), !1;
      } catch {
        return !0;
      }
    }
    function Sr(o) {
      return "" + o;
    }
    function Or(o) {
      if (wt(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xt(o)), Sr(o);
    }
    var Ae = R.ReactCurrentOwner, Et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Cr, _r, Qe;
    Qe = {};
    function St(o) {
      if ($e.call(o, "ref")) {
        var g = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ot(o) {
      if ($e.call(o, "key")) {
        var g = Object.getOwnPropertyDescriptor(o, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Ct(o, g) {
      if (typeof o.ref == "string" && Ae.current && g && Ae.current.stateNode !== g) {
        var w = P(Ae.current.type);
        Qe[w] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Ae.current.type), o.ref), Qe[w] = !0);
      }
    }
    function _t(o, g) {
      {
        var w = function() {
          Cr || (Cr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Rt(o, g) {
      {
        var w = function() {
          _r || (_r = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Tt = function(o, g, w, j, q, X, H) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: w,
        props: H,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Pt(o, g, w, j, q) {
      {
        var X, H = {}, $ = null, fe = null;
        w !== void 0 && (Or(w), $ = "" + w), Ot(g) && (Or(g.key), $ = "" + g.key), St(g) && (fe = g.ref, Ct(g, q));
        for (X in g)
          $e.call(g, X) && !Et.hasOwnProperty(X) && (H[X] = g[X]);
        if (o && o.defaultProps) {
          var ee = o.defaultProps;
          for (X in ee)
            H[X] === void 0 && (H[X] = ee[X]);
        }
        if ($ || fe) {
          var re = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && _t(H, re), fe && Rt(H, re);
        }
        return Tt(o, $, fe, q, j, Ae.current, H);
      }
    }
    var er = R.ReactCurrentOwner, Rr = R.ReactDebugCurrentFrame;
    function De(o) {
      if (o) {
        var g = o._owner, w = Ce(o.type, o._source, g ? g.type : null);
        Rr.setExtraStackFrame(w);
      } else
        Rr.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function tr(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Tr() {
      {
        if (er.current) {
          var o = P(er.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function jt(o) {
      {
        if (o !== void 0) {
          var g = o.fileName.replace(/^.*[\\\/]/, ""), w = o.lineNumber;
          return `

Check your code at ` + g + ":" + w + ".";
        }
        return "";
      }
    }
    var Pr = {};
    function Dt(o) {
      {
        var g = Tr();
        if (!g) {
          var w = typeof o == "string" ? o : o.displayName || o.name;
          w && (g = `

Check the top-level render call using <` + w + ">.");
        }
        return g;
      }
    }
    function jr(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var w = Dt(g);
        if (Pr[w])
          return;
        Pr[w] = !0;
        var j = "";
        o && o._owner && o._owner !== er.current && (j = " It was passed a child from " + P(o._owner.type) + "."), De(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, j), De(null);
      }
    }
    function Dr(o, g) {
      {
        if (typeof o != "object")
          return;
        if (Ze(o))
          for (var w = 0; w < o.length; w++) {
            var j = o[w];
            tr(j) && jr(j, g);
          }
        else if (tr(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var q = m(o);
          if (typeof q == "function" && q !== o.entries)
            for (var X = q.call(o), H; !(H = X.next()).done; )
              tr(H.value) && jr(H.value, g);
        }
      }
    }
    function It(o) {
      {
        var g = o.type;
        if (g == null || typeof g == "string")
          return;
        var w;
        if (typeof g == "function")
          w = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === h))
          w = g.propTypes;
        else
          return;
        if (w) {
          var j = P(g);
          bt(w, o.props, "prop", j, o);
        } else if (g.PropTypes !== void 0 && !rr) {
          rr = !0;
          var q = P(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mt(o) {
      {
        for (var g = Object.keys(o.props), w = 0; w < g.length; w++) {
          var j = g[w];
          if (j !== "children" && j !== "key") {
            De(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), De(null);
            break;
          }
        }
        o.ref !== null && (De(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), De(null));
      }
    }
    function Ir(o, g, w, j, q, X) {
      {
        var H = W(o);
        if (!H) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = jt(q);
          fe ? $ += fe : $ += Tr();
          var ee;
          o === null ? ee = "null" : Ze(o) ? ee = "array" : o !== void 0 && o.$$typeof === r ? (ee = "<" + (P(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, $);
        }
        var re = Pt(o, g, w, q, X);
        if (re == null)
          return re;
        if (H) {
          var ye = g.children;
          if (ye !== void 0)
            if (j)
              if (Ze(ye)) {
                for (var Ie = 0; Ie < ye.length; Ie++)
                  Dr(ye[Ie], o);
                Object.freeze && Object.freeze(ye);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Dr(ye, o);
        }
        return o === t ? Mt(re) : It(re), re;
      }
    }
    function At(o, g, w) {
      return Ir(o, g, w, !0);
    }
    function kt(o, g, w) {
      return Ir(o, g, w, !1);
    }
    var Bt = kt, Lt = At;
    Be.Fragment = t, Be.jsx = Bt, Be.jsxs = Lt;
  }()), Be;
}
process.env.NODE_ENV === "production" ? lr.exports = Ut() : lr.exports = Yt();
var _ = lr.exports;
const Xr = Ye({}), qt = ({ children: e, ...r }) => /* @__PURE__ */ _.jsx(Xr.Provider, { value: r, children: e }), Se = () => qe(Xr), Zr = Ye({}), Nt = ({ children: e }) => {
  const r = te(ae(!1)), n = te(ae(!1)), t = te(ae(0)), i = te(ae(0)), a = te(ae(0)), l = te(ae(0)), u = pe(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: n.current,
    observableHeight: t.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: l.current
  }), []), s = Z((f) => {
    ce(l.current, (h) => h !== f.top ? f.top : h), ce(a.current, (h) => h !== f.left ? f.left : h), ce(i.current, (h) => h !== f.width ? f.width : h), ce(t.current, (h) => h !== f.height ? f.height : h), ce(n.current, (h) => h !== f.isVisible ? f.isVisible : h), ce(r.current, (h) => h !== !!f.isHorizontal ? !!f.isHorizontal : h);
  }, []), p = Z(() => {
    s({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [s]);
  return /* @__PURE__ */ _.jsx(Zr.Provider, { value: { showInsertBar: s, hideInsertBar: p, observables: u }, children: e });
}, Re = () => qe(Zr), Gt = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: n, observableIsVisible: t, observableLeft: i, observableTop: a, observableWidth: l } = Re().observables, [u] = Me(a), [s] = Me(i), [p] = Me(l), [f] = Me(r), [h] = Me(t), [C] = Me(n), c = pe(() => ({
    width: C ? p : 4,
    height: C ? 4 : f,
    top: u - (C ? 2 : 0),
    left: s - (C ? 0 : 2)
  }), [f, C, s, u, p]);
  return h ? /* @__PURE__ */ _.jsx(
    "div",
    {
      className: "animate-pulse",
      style: {
        zIndex: 10,
        borderRadius: 5,
        top: c.top,
        position: "fixed",
        left: c.left,
        width: c.width,
        pointerEvents: "none",
        height: c.height,
        backgroundColor: e
      }
    }
  ) : null;
}, Qr = Ye({}), Jt = ({ children: e, id: r, onSelect: n }) => {
  const t = te({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    parents: ae(void 0),
    element: ae(void 0),
    onSelect: n,
    id: r
  });
  return ne(() => {
    t.current.id = r;
  }, [r]), ne(() => {
    t.current.onSelect = n;
  }, [n]), /* @__PURE__ */ _.jsx(Qr.Provider, { value: t.current, children: e });
};
var et = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Br = ge.createContext && /* @__PURE__ */ ge.createContext(et), Kt = ["attr", "size", "title"];
function Xt(e, r) {
  if (e == null)
    return {};
  var n = Zt(e, r), t, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      t = a[i], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
  }
  return n;
}
function Zt(e, r) {
  if (e == null)
    return {};
  var n = {}, t = Object.keys(e), i, a;
  for (a = 0; a < t.length; a++)
    i = t[a], !(r.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }, We.apply(this, arguments);
}
function Lr(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Ue(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Lr(Object(n), !0).forEach(function(t) {
      Qt(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Qt(e, r, n) {
  return r = en(r), r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function en(e) {
  var r = rn(e, "string");
  return typeof r == "symbol" ? r : String(r);
}
function rn(e, r) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var t = n.call(e, r || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function rt(e) {
  return e && e.map((r, n) => /* @__PURE__ */ ge.createElement(r.tag, Ue({
    key: n
  }, r.attr), rt(r.child)));
}
function Je(e) {
  return (r) => /* @__PURE__ */ ge.createElement(tn, We({
    attr: Ue({}, e.attr)
  }, r), rt(e.child));
}
function tn(e) {
  var r = (n) => {
    var {
      attr: t,
      size: i,
      title: a
    } = e, l = Xt(e, Kt), u = i || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ ge.createElement("svg", We({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, t, l, {
      className: s,
      style: Ue(Ue({
        color: e.color || n.color
      }, n.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ ge.createElement("title", null, a), e.children);
  };
  return Br !== void 0 ? /* @__PURE__ */ ge.createElement(Br.Consumer, null, (n) => r(n)) : r(et);
}
function nn(e) {
  return Je({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function on(e) {
  return Je({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function an(e) {
  return Je({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function cn(e) {
  return Je({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const un = (e) => {
  let r, n = 0;
  do
    n--, r = e == null ? void 0 : e.slice(n).at(0);
  while (!r || !["html", "slot-content"].includes(r.type.value));
  return r;
}, Ke = (e, r) => {
  const n = document.createElement("label");
  if (n.style.padding = "4px", n.style.paddingTop = "2px", n.style.paddingRight = "8px", n.style.paddingBottom = "2px", n.style.backgroundColor = (r == null ? void 0 : r.color) || "#3e8ce4", n.style.color = (r == null ? void 0 : r.textColor) || "#ffffff", n.style.textTransform = "capitalize", n.style.alignItems = "center", n.style.borderRadius = "2px", n.style.fontWeight = "600", n.style.position = "fixed", n.style.fontSize = "11px", n.style.display = "flex", n.style.height = "20px", n.style.zIndex = "-100", n.style.width = "auto", r != null && r.icon && (r != null && r.icon.includes("data"))) {
    const t = document.createElement("img");
    t.width = 16, t.alt = e, t.height = 16, t.src = r == null ? void 0 : r.icon, t.style.marginRight = "4px", t.style.filter = "brightness(2)", n.appendChild(t);
  }
  return n.appendChild(new Text(e)), document.body.appendChild(n), n;
};
function sn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var tt = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(c, v) {
      return v = v || "", c.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, n = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), t = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", l = function(c, v, y, m) {
      return c = c || n, v = v || t, y = y || i, m = m || a, {
        capitalize: new RegExp("(^|[" + c + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + c + "])+([" + v + y + "])", "g"),
        fill: new RegExp("[" + c + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + m + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + c + "]")
      };
    }, u = l(), s = {
      re: u,
      unicodes: r,
      regexps: l,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(c) {
        return s.up.call(c.charAt(0)) + c.slice(1);
      },
      decap: function(c) {
        return s.low.call(c.charAt(0)) + c.slice(1);
      },
      deapostrophe: function(c) {
        return c.replace(u.apostrophe, "");
      },
      fill: function(c, v, y) {
        return v != null && (c = c.replace(u.fill, function(m, R) {
          return R ? v + R : "";
        })), y && (c = s.deapostrophe(c)), c;
      },
      prep: function(c, v, y, m) {
        if (c = c == null ? "" : c + "", !m && u.upper.test(c) && (c = s.low.call(c)), !v && !u.hole.test(c)) {
          var R = s.fill(c, " ");
          u.hole.test(R) && (c = R);
        }
        return !y && !u.room.test(c) && (c = c.replace(u.relax, s.relax)), c;
      },
      relax: function(c, v, y, m) {
        return v + " " + (y ? y + " " : "") + m;
      }
    }, p = {
      _: s,
      of: function(c) {
        for (var v = 0, y = s.types.length; v < y; v++)
          if (p[s.types[v]].apply(p, arguments) === c)
            return s.types[v];
      },
      flip: function(c) {
        return c.replace(/\w/g, function(v) {
          return (v == s.up.call(v) ? s.low : s.up).call(v);
        });
      },
      random: function(c) {
        return c.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? s.up : s.low).call(v);
        });
      },
      type: function(c, v) {
        p[c] = v, s.types.push(c);
      }
    }, f = {
      lower: function(c, v, y) {
        return s.fill(s.low.call(s.prep(c, v)), v, y);
      },
      snake: function(c) {
        return p.lower(c, "_", !0);
      },
      constant: function(c) {
        return p.upper(c, "_", !0);
      },
      camel: function(c) {
        return s.decap(p.pascal(c));
      },
      kebab: function(c) {
        return p.lower(c, "-", !0);
      },
      upper: function(c, v, y) {
        return s.fill(s.up.call(s.prep(c, v, !1, !0)), v, y);
      },
      capital: function(c, v, y) {
        return s.fill(s.prep(c).replace(u.capitalize, function(m, R, T) {
          return R + s.up.call(T);
        }), v, y);
      },
      header: function(c) {
        return p.capital(c, "-", !0);
      },
      pascal: function(c) {
        return s.fill(s.prep(c, !1, !0).replace(u.pascal, function(v, y, m) {
          return s.up.call(m);
        }), "", !0);
      },
      title: function(c) {
        return p.capital(c).replace(u.improper, function(v, y, m, R) {
          return m > 0 && m < R.lastIndexOf(" ") ? s.low.call(v) : v;
        });
      },
      sentence: function(c, v, y) {
        return c = p.lower(c).replace(u.sentence, function(m, R, T) {
          return R + s.up.call(T);
        }), v && v.forEach(function(m) {
          c = c.replace(new RegExp("\\b" + p.lower(m) + "\\b", "g"), s.cap);
        }), y && y.forEach(function(m) {
          c = c.replace(new RegExp("(\\b" + p.lower(m) + "\\. +)(\\w)"), function(R, T, S) {
            return T + s.low.call(S);
          });
        }), c;
      }
    };
    f.squish = f.pascal, p.default = p;
    for (var h in f)
      p.type(h, f[h]);
    var C = typeof C == "function" ? C : function() {
    };
    C(e.exports ? e.exports = p : this.Case = p);
  }).call(Ht);
})(tt);
var ln = tt.exports;
function nt(e) {
  return ln.camel(sn(e));
}
const Fr = (e, r, n, t, i) => !(!t.current || e.droppableId !== i || e.draggingId === r.id.value || n.some((u) => e.draggingId === u.id.value)), fn = (e, r, n) => {
  if (!n.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const t = r.type.value === "component" ? !1 : Array.isArray(r.children.value), i = n.current.getBoundingClientRect(), a = t ? 5 : i.height / 2, l = e.x - i.x, u = e.y - i.y, s = u >= 0 && u <= a, p = u >= i.height - a && u <= i.height, f = u >= a && u <= i.height - a, h = l >= 0 && l <= a, C = l >= i.width - a && l <= i.width, c = l >= a && l <= i.width - a;
  let v = !1, y = !1, m = !1, R = !1;
  if (t) {
    const T = p || C || s || h;
    v = c && f && !T, y = c && f && !T, m = p || C, R = s || h;
  } else
    m = (p || C) && !s, R = (s || h) && !p;
  return { isOverCurrentStart: v, isOverCurrentEnd: y, isOverEnd: m, isOverStart: R };
}, dn = (e, r, n) => {
  if (!n.current)
    return null;
  const t = n.current.getBoundingClientRect();
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return {
      isHorizontal: !0,
      left: t.left,
      width: t.width,
      height: t.height,
      top: t.top + t.height / 2
    };
  const i = r.type.value === "component" ? !1 : Array.isArray(r.children.value), a = i ? 5 : t.height / 2, l = e.x - t.x, u = e.y - t.y, s = u >= t.height - a && u <= t.height, p = u >= a && u <= t.height - a, f = l >= 0 && l <= a, h = l >= t.width - a && l <= t.width, C = l >= a && l <= t.width - a;
  let c = !0, v = t.top, y = t.left, m = t.width, R = t.height;
  return s && (f || h || C) ? v = t.top + t.height : p && f ? c = !1 : p && h ? (y = t.left + t.width, c = !1) : C && p && (v = t.top + (i ? t.height / 2 : t.height)), {
    top: v,
    isHorizontal: c,
    left: y,
    width: m,
    height: R
  };
}, Fe = () => $t(), Oe = () => {
  const e = qe(Qr), r = Z((a) => {
    e.onSelect(a);
  }, [e.id]), n = Z((a, l, u) => {
    ce(e.getPosition, () => u), ce(e.parents, l), ce(e.element, a);
  }, [e.getPosition]), t = Z((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Z((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    select: r,
    selectedId: e.id,
    selectedElement: e.element,
    selectedElementParents: e.parents,
    updateSelectBar: n,
    updateSelectBarScroll: t,
    updateSelectBarPlaygroundSize: i,
    selectBarGetPosition: e.getPosition,
    selectBarPlaygroundSize: e.playgroundSize,
    selectBarDocumentVerticalScroll: e.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, vn = Ne(({ children: e, zIndex: r = 0, top: n = -1e3, left: t = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const u = te(null), s = pe(() => {
    if (!u.current || t + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const p = t + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - p;
  }, [t]);
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      "data-select": !0,
      style: {
        top: n,
        left: t,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: l,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ _.jsx(
        "span",
        {
          ref: u,
          style: {
            zIndex: 5,
            height: 20,
            color: "white",
            paddingLeft: 8,
            borderRadius: 4,
            paddingRight: 8,
            outline: "none",
            display: "flex",
            left: s,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: l,
            top: n - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), pn = Ne(() => {
  const e = te(null), { onDragStart: r, onDragEnd: n, onDuplicate: t, onRemove: i } = Se(), { hideInsertBar: a } = Re(), {
    select: l,
    selectedId: u,
    selectedElement: s,
    selectBarGetPosition: p,
    selectedElementParents: f,
    selectBarDocumentVerticalScroll: h,
    selectBarDocumentHorizontalScroll: C
  } = Oe(), c = Q(f), v = Q(s), y = Q(u), m = Ee(({ get: W }) => v ? W(v.name) : "", [v]), { width: R, height: T, top: S, left: x } = Ee(({ get: W }) => {
    const de = W(C), ue = W(h), P = W(p);
    return P ? {
      width: P().width,
      height: P().height,
      top: P().top - ue,
      left: P().left - de
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [C, h, p]), d = Z(() => {
    const W = c == null ? void 0 : c.slice(-1).at(0);
    W && l(W.id.value);
  }, [l, c]), I = Z(() => {
    v && i(v);
  }, [i, v]), K = Z(() => {
    v && t(v);
  }, [t, v]), { preview: D, isDragging: J } = Ge({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      a(), n();
    },
    canDrag: !!v && Array.isArray(c),
    data: {
      element: v,
      parents: c
    }
  }, [y, v, c, a, r, n]);
  return ne(() => {
    D(
      () => Ke(m.toLocaleUpperCase()),
      (W) => W.remove()
    );
  }, [D, m]), y ? /* @__PURE__ */ _.jsx(
    vn,
    {
      zIndex: 1,
      top: S - 1,
      width: R,
      height: T,
      left: x - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        m,
        !J && /* @__PURE__ */ _.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          c && c.length > 0 && /* @__PURE__ */ _.jsx(nn, { title: "Select parent", onClick: d, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx(cn, { title: "Remove element", onClick: I, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx(on, { title: "Duplicate element and children", onClick: K, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ _.jsx(an, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  ) : null;
}), ot = Ye({}), hn = ({ children: e, id: r, onHover: n }) => {
  const t = te({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    element: ae(void 0),
    onHover: n,
    id: r
  });
  return ne(() => {
    t.current.id = r;
  }, [r]), ne(() => {
    t.current.onHover = n;
  }, [n]), /* @__PURE__ */ _.jsx(ot.Provider, { value: t.current, children: e });
}, Te = () => {
  const e = qe(ot), r = Z((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), n = Z((a, l) => {
    ce(e.getPosition, () => l), ce(e.element, a);
  }, [e.getPosition]), t = Z((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Z((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    hover: r,
    hoveredId: e.id,
    hoveredElement: e.element,
    updateHoverBar: n,
    updateHoverBarScroll: t,
    updateHoverBarPlaygroundSize: i,
    hoverBarGetPosition: e.getPosition,
    hoverBarPlaygroundSize: e.playgroundSize,
    hoverBarDocumentVerticalScroll: e.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, yn = Ne(({ children: e, zIndex: r = 0, top: n = -1e3, left: t = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const u = te(null), s = pe(() => {
    if (!u.current || t + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const p = t + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - p;
  }, [t]);
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      "data-hover": !0,
      style: {
        top: n,
        left: t,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: l,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ _.jsx(
        "span",
        {
          ref: u,
          style: {
            zIndex: 5,
            height: 20,
            color: "white",
            paddingLeft: 8,
            borderRadius: 4,
            paddingRight: 8,
            outline: "none",
            display: "flex",
            left: s,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: l,
            top: n - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), gn = Ne(() => {
  const { selectedId: e } = Oe(), {
    hoveredId: r,
    hoveredElement: n,
    hoverBarGetPosition: t,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: a
  } = Te(), l = Q(a), u = Q(i), s = Q(t), p = Q(n), f = Q(e), h = Q(r), C = Ee(({ get: R }) => p ? R(p.name) : "", [p]), { width: c, height: v, top: y, left: m } = pe(() => s ? {
    width: s().width,
    height: s().height,
    top: s().top - u,
    left: s().left - l
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [l, u, s]);
  return !h || h === f ? null : /* @__PURE__ */ _.jsx(
    yn,
    {
      zIndex: 1,
      top: y - 1,
      width: c,
      left: m - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ _.jsx("div", { children: C })
    }
  );
});
var hr = {}, ze = {}, fr = { exports: {} }, He = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function bn() {
  if (zr)
    return N;
  zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function S(d) {
    if (typeof d == "object" && d !== null) {
      var I = d.$$typeof;
      switch (I) {
        case r:
          switch (d = d.type, d) {
            case s:
            case p:
            case t:
            case a:
            case i:
            case h:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case u:
                case f:
                case v:
                case c:
                case l:
                  return d;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function x(d) {
    return S(d) === p;
  }
  return N.AsyncMode = s, N.ConcurrentMode = p, N.ContextConsumer = u, N.ContextProvider = l, N.Element = r, N.ForwardRef = f, N.Fragment = t, N.Lazy = v, N.Memo = c, N.Portal = n, N.Profiler = a, N.StrictMode = i, N.Suspense = h, N.isAsyncMode = function(d) {
    return x(d) || S(d) === s;
  }, N.isConcurrentMode = x, N.isContextConsumer = function(d) {
    return S(d) === u;
  }, N.isContextProvider = function(d) {
    return S(d) === l;
  }, N.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, N.isForwardRef = function(d) {
    return S(d) === f;
  }, N.isFragment = function(d) {
    return S(d) === t;
  }, N.isLazy = function(d) {
    return S(d) === v;
  }, N.isMemo = function(d) {
    return S(d) === c;
  }, N.isPortal = function(d) {
    return S(d) === n;
  }, N.isProfiler = function(d) {
    return S(d) === a;
  }, N.isStrictMode = function(d) {
    return S(d) === i;
  }, N.isSuspense = function(d) {
    return S(d) === h;
  }, N.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === t || d === p || d === a || d === i || d === h || d === C || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === c || d.$$typeof === l || d.$$typeof === u || d.$$typeof === f || d.$$typeof === m || d.$$typeof === R || d.$$typeof === T || d.$$typeof === y);
  }, N.typeOf = S, N;
}
var G = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $r;
function mn() {
  return $r || ($r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, C = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function S(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === t || E === p || E === a || E === i || E === h || E === C || typeof E == "object" && E !== null && (E.$$typeof === v || E.$$typeof === c || E.$$typeof === l || E.$$typeof === u || E.$$typeof === f || E.$$typeof === m || E.$$typeof === R || E.$$typeof === T || E.$$typeof === y);
    }
    function x(E) {
      if (typeof E == "object" && E !== null) {
        var he = E.$$typeof;
        switch (he) {
          case r:
            var je = E.type;
            switch (je) {
              case s:
              case p:
              case t:
              case a:
              case i:
              case h:
                return je;
              default:
                var Ce = je && je.$$typeof;
                switch (Ce) {
                  case u:
                  case f:
                  case v:
                  case c:
                  case l:
                    return Ce;
                  default:
                    return he;
                }
            }
          case n:
            return he;
        }
      }
    }
    var d = s, I = p, K = u, D = l, J = r, W = f, de = t, ue = v, P = c, U = n, oe = a, ie = i, ve = h, me = !1;
    function se(E) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(E) || x(E) === s;
    }
    function b(E) {
      return x(E) === p;
    }
    function O(E) {
      return x(E) === u;
    }
    function L(E) {
      return x(E) === l;
    }
    function B(E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }
    function M(E) {
      return x(E) === f;
    }
    function V(E) {
      return x(E) === t;
    }
    function A(E) {
      return x(E) === v;
    }
    function k(E) {
      return x(E) === c;
    }
    function F(E) {
      return x(E) === n;
    }
    function Y(E) {
      return x(E) === a;
    }
    function z(E) {
      return x(E) === i;
    }
    function le(E) {
      return x(E) === h;
    }
    G.AsyncMode = d, G.ConcurrentMode = I, G.ContextConsumer = K, G.ContextProvider = D, G.Element = J, G.ForwardRef = W, G.Fragment = de, G.Lazy = ue, G.Memo = P, G.Portal = U, G.Profiler = oe, G.StrictMode = ie, G.Suspense = ve, G.isAsyncMode = se, G.isConcurrentMode = b, G.isContextConsumer = O, G.isContextProvider = L, G.isElement = B, G.isForwardRef = M, G.isFragment = V, G.isLazy = A, G.isMemo = k, G.isPortal = F, G.isProfiler = Y, G.isStrictMode = z, G.isSuspense = le, G.isValidElementType = S, G.typeOf = x;
  }()), G;
}
var Vr;
function it() {
  return Vr || (Vr = 1, process.env.NODE_ENV === "production" ? He.exports = bn() : He.exports = mn()), He.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var nr, Hr;
function xn() {
  if (Hr)
    return nr;
  Hr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
      var s = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        p[f] = f;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return nr = i() ? Object.assign : function(a, l) {
    for (var u, s = t(a), p, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var h in u)
        r.call(u, h) && (s[h] = u[h]);
      if (e) {
        p = e(u);
        for (var C = 0; C < p.length; C++)
          n.call(u, p[C]) && (s[p[C]] = u[p[C]]);
      }
    }
    return s;
  }, nr;
}
var or, Wr;
function yr() {
  if (Wr)
    return or;
  Wr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return or = e, or;
}
var ir, Ur;
function at() {
  return Ur || (Ur = 1, ir = Function.call.bind(Object.prototype.hasOwnProperty)), ir;
}
var ar, Yr;
function wn() {
  if (Yr)
    return ar;
  Yr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = yr(), n = {}, t = at();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, u, s, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (t(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var C = Error(
                (s || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            h = a[f](l, f, s, u, null, r);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var c = p ? p() : "";
            e(
              "Failed " + u + " type: " + h.message + (c ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ar = i, ar;
}
var cr, qr;
function En() {
  if (qr)
    return cr;
  qr = 1;
  var e = it(), r = xn(), n = yr(), t = at(), i = wn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return cr = function(u, s) {
    var p = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(b) {
      var O = b && (p && b[p] || b[f]);
      if (typeof O == "function")
        return O;
    }
    var C = "<<anonymous>>", c = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: S,
      element: x(),
      elementType: d(),
      instanceOf: I,
      node: W(),
      objectOf: D,
      oneOf: K,
      oneOfType: J,
      shape: ue,
      exact: P
    };
    function v(b, O) {
      return b === O ? b !== 0 || 1 / b === 1 / O : b !== b && O !== O;
    }
    function y(b, O) {
      this.message = b, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(b) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, L = 0;
      function B(V, A, k, F, Y, z, le) {
        if (F = F || C, z = z || k, le !== n) {
          if (s) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = F + ":" + k;
            !O[he] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[he] = !0, L++);
          }
        }
        return A[k] == null ? V ? A[k] === null ? new y("The " + Y + " `" + z + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new y("The " + Y + " `" + z + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : b(A, k, F, Y, z);
      }
      var M = B.bind(null, !1);
      return M.isRequired = B.bind(null, !0), M;
    }
    function R(b) {
      function O(L, B, M, V, A, k) {
        var F = L[B], Y = ie(F);
        if (Y !== b) {
          var z = ve(F);
          return new y(
            "Invalid " + V + " `" + A + "` of type " + ("`" + z + "` supplied to `" + M + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return m(O);
    }
    function T() {
      return m(l);
    }
    function S(b) {
      function O(L, B, M, V, A) {
        if (typeof b != "function")
          return new y("Property `" + A + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var k = L[B];
        if (!Array.isArray(k)) {
          var F = ie(k);
          return new y("Invalid " + V + " `" + A + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected an array."));
        }
        for (var Y = 0; Y < k.length; Y++) {
          var z = b(k, Y, M, V, A + "[" + Y + "]", n);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return m(O);
    }
    function x() {
      function b(O, L, B, M, V) {
        var A = O[L];
        if (!u(A)) {
          var k = ie(A);
          return new y("Invalid " + M + " `" + V + "` of type " + ("`" + k + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(b);
    }
    function d() {
      function b(O, L, B, M, V) {
        var A = O[L];
        if (!e.isValidElementType(A)) {
          var k = ie(A);
          return new y("Invalid " + M + " `" + V + "` of type " + ("`" + k + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(b);
    }
    function I(b) {
      function O(L, B, M, V, A) {
        if (!(L[B] instanceof b)) {
          var k = b.name || C, F = se(L[B]);
          return new y("Invalid " + V + " `" + A + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return m(O);
    }
    function K(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function O(L, B, M, V, A) {
        for (var k = L[B], F = 0; F < b.length; F++)
          if (v(k, b[F]))
            return null;
        var Y = JSON.stringify(b, function(le, E) {
          var he = ve(E);
          return he === "symbol" ? String(E) : E;
        });
        return new y("Invalid " + V + " `" + A + "` of value `" + String(k) + "` " + ("supplied to `" + M + "`, expected one of " + Y + "."));
      }
      return m(O);
    }
    function D(b) {
      function O(L, B, M, V, A) {
        if (typeof b != "function")
          return new y("Property `" + A + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var k = L[B], F = ie(k);
        if (F !== "object")
          return new y("Invalid " + V + " `" + A + "` of type " + ("`" + F + "` supplied to `" + M + "`, expected an object."));
        for (var Y in k)
          if (t(k, Y)) {
            var z = b(k, Y, M, V, A + "." + Y, n);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return m(O);
    }
    function J(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var O = 0; O < b.length; O++) {
        var L = b[O];
        if (typeof L != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + me(L) + " at index " + O + "."
          ), l;
      }
      function B(M, V, A, k, F) {
        for (var Y = [], z = 0; z < b.length; z++) {
          var le = b[z], E = le(M, V, A, k, F, n);
          if (E == null)
            return null;
          E.data && t(E.data, "expectedType") && Y.push(E.data.expectedType);
        }
        var he = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new y("Invalid " + k + " `" + F + "` supplied to " + ("`" + A + "`" + he + "."));
      }
      return m(B);
    }
    function W() {
      function b(O, L, B, M, V) {
        return U(O[L]) ? null : new y("Invalid " + M + " `" + V + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return m(b);
    }
    function de(b, O, L, B, M) {
      return new y(
        (b || "React class") + ": " + O + " type `" + L + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function ue(b) {
      function O(L, B, M, V, A) {
        var k = L[B], F = ie(k);
        if (F !== "object")
          return new y("Invalid " + V + " `" + A + "` of type `" + F + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var Y in b) {
          var z = b[Y];
          if (typeof z != "function")
            return de(M, V, A, Y, ve(z));
          var le = z(k, Y, M, V, A + "." + Y, n);
          if (le)
            return le;
        }
        return null;
      }
      return m(O);
    }
    function P(b) {
      function O(L, B, M, V, A) {
        var k = L[B], F = ie(k);
        if (F !== "object")
          return new y("Invalid " + V + " `" + A + "` of type `" + F + "` " + ("supplied to `" + M + "`, expected `object`."));
        var Y = r({}, L[B], b);
        for (var z in Y) {
          var le = b[z];
          if (t(b, z) && typeof le != "function")
            return de(M, V, A, z, ve(le));
          if (!le)
            return new y(
              "Invalid " + V + " `" + A + "` key `" + z + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(L[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var E = le(k, z, M, V, A + "." + z, n);
          if (E)
            return E;
        }
        return null;
      }
      return m(O);
    }
    function U(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(U);
          if (b === null || u(b))
            return !0;
          var O = h(b);
          if (O) {
            var L = O.call(b), B;
            if (O !== b.entries) {
              for (; !(B = L.next()).done; )
                if (!U(B.value))
                  return !1;
            } else
              for (; !(B = L.next()).done; ) {
                var M = B.value;
                if (M && !U(M[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(b, O) {
      return b === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ie(b) {
      var O = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : oe(O, b) ? "symbol" : O;
    }
    function ve(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var O = ie(b);
      if (O === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function me(b) {
      var O = ve(b);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function se(b) {
      return !b.constructor || !b.constructor.name ? C : b.constructor.name;
    }
    return c.checkPropTypes = i, c.resetWarningCache = i.resetWarningCache, c.PropTypes = c, c;
  }, cr;
}
var ur, Nr;
function Sn() {
  if (Nr)
    return ur;
  Nr = 1;
  var e = yr();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, ur = function() {
    function t(l, u, s, p, f, h) {
      if (h !== e) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: i,
      element: t,
      elementType: t,
      instanceOf: i,
      node: t,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, ur;
}
if (process.env.NODE_ENV !== "production") {
  var On = it(), Cn = !0;
  fr.exports = En()(On.isElement, Cn);
} else
  fr.exports = Sn()();
var ct = fr.exports, be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.FrameContextConsumer = be.FrameContextProvider = be.useFrame = be.FrameContext = void 0;
var _n = ge, ut = Rn(_n);
function Rn(e) {
  return e && e.__esModule ? e : { default: e };
}
var st = void 0, lt = void 0;
typeof document < "u" && (st = document);
typeof window < "u" && (lt = window);
var gr = be.FrameContext = ut.default.createContext({ document: st, window: lt });
be.useFrame = function() {
  return ut.default.useContext(gr);
};
var Tn = gr.Provider, Pn = gr.Consumer;
be.FrameContextProvider = Tn;
be.FrameContextConsumer = Pn;
var br = {};
Object.defineProperty(br, "__esModule", {
  value: !0
});
var jn = /* @__PURE__ */ function() {
  function e(r, n) {
    for (var t = 0; t < n.length; t++) {
      var i = n[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, n, t) {
    return n && e(r.prototype, n), t && e(r, t), r;
  };
}(), dr = ge;
ft(dr);
var Dn = ct, sr = ft(Dn);
function ft(e) {
  return e && e.__esModule ? e : { default: e };
}
function In(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Mn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function An(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var dt = function(e) {
  An(r, e);
  function r() {
    return In(this, r), Mn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return jn(r, [{
    key: "componentDidMount",
    value: function() {
      this.props.contentDidMount();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.props.contentDidUpdate();
    }
  }, {
    key: "render",
    value: function() {
      return dr.Children.only(this.props.children);
    }
  }]), r;
}(dr.Component);
dt.propTypes = {
  children: sr.default.element.isRequired,
  contentDidMount: sr.default.func.isRequired,
  contentDidUpdate: sr.default.func.isRequired
};
br.default = dt;
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.Frame = void 0;
var vr = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  }
  return e;
}, kn = /* @__PURE__ */ function() {
  function e(r, n) {
    for (var t = 0; t < n.length; t++) {
      var i = n[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, n, t) {
    return n && e(r.prototype, n), t && e(r, t), r;
  };
}(), vt = ge, _e = Xe(vt), Bn = Vt, Gr = Xe(Bn), Ln = ct, xe = Xe(Ln), Fn = be, zn = br, $n = Xe(zn);
function Xe(e) {
  return e && e.__esModule ? e : { default: e };
}
function Vn(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Hn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Wn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var mr = ze.Frame = function(e) {
  Wn(r, e);
  function r(n, t) {
    Vn(this, r);
    var i = Hn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, n, t));
    return i.setRef = function(a) {
      i.nodeRef.current = a;
      var l = i.props.forwardedRef;
      typeof l == "function" ? l(a) : l && (l.current = a);
    }, i.handleLoad = function() {
      clearInterval(i.loadCheck), i.state.iframeLoaded || i.setState({ iframeLoaded: !0 });
    }, i.loadCheck = function() {
      return setInterval(function() {
        i.handleLoad();
      }, 500);
    }, i._isMounted = !1, i.nodeRef = _e.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return kn(r, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
      var t = this.getDoc();
      t && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._isMounted = !1, this.nodeRef.current.removeEventListener("DOMContentLoaded", this.handleLoad);
    }
  }, {
    key: "getDoc",
    value: function() {
      return this.nodeRef.current ? this.nodeRef.current.contentDocument : null;
    }
  }, {
    key: "getMountTarget",
    value: function() {
      var t = this.getDoc();
      return this.props.mountTarget ? t.querySelector(this.props.mountTarget) : t.body.children[0];
    }
    // In certain situations on a cold cache DOMContentLoaded never gets called
    // fallback to an interval to check if that's the case
  }, {
    key: "renderFrameContents",
    value: function() {
      if (!this._isMounted)
        return null;
      var t = this.getDoc();
      if (!t)
        return null;
      var i = this.props.contentDidMount, a = this.props.contentDidUpdate, l = t.defaultView || t.parentView, u = _e.default.createElement(
        $n.default,
        {
          contentDidMount: i,
          contentDidUpdate: a
        },
        _e.default.createElement(
          Fn.FrameContextProvider,
          { value: { document: t, window: l } },
          _e.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), s = this.getMountTarget();
      return [Gr.default.createPortal(this.props.head, this.getDoc().head), Gr.default.createPortal(u, s)];
    }
  }, {
    key: "render",
    value: function() {
      var t = vr({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete t.head, delete t.initialContent, delete t.mountTarget, delete t.contentDidMount, delete t.contentDidUpdate, delete t.forwardedRef, _e.default.createElement(
        "iframe",
        vr({}, t, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), r;
}(vt.Component);
mr.propTypes = {
  style: xe.default.object,
  // eslint-disable-line
  head: xe.default.node,
  initialContent: xe.default.string,
  mountTarget: xe.default.string,
  contentDidMount: xe.default.func,
  contentDidUpdate: xe.default.func,
  children: xe.default.oneOfType([xe.default.element, xe.default.arrayOf(xe.default.element)])
};
mr.defaultProps = {
  style: {},
  head: null,
  children: void 0,
  mountTarget: void 0,
  contentDidMount: function() {
  },
  contentDidUpdate: function() {
  },
  initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
};
ze.default = _e.default.forwardRef(function(e, r) {
  return _e.default.createElement(mr, vr({}, e, { forwardedRef: r }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = ze;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return t(r).default;
    }
  });
  var n = be;
  Object.defineProperty(e, "FrameContext", {
    enumerable: !0,
    get: function() {
      return n.FrameContext;
    }
  }), Object.defineProperty(e, "FrameContextConsumer", {
    enumerable: !0,
    get: function() {
      return n.FrameContextConsumer;
    }
  }), Object.defineProperty(e, "useFrame", {
    enumerable: !0,
    get: function() {
      return n.useFrame;
    }
  });
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
})(hr);
const Un = /* @__PURE__ */ Wt(hr), Yn = ({ children: e, onScroll: r, onRef: n }) => {
  const { document: t } = hr.useFrame();
  return ne(() => {
    t && n(t);
  }, [n, t]), ne(() => {
    t && (t.onscroll = (i) => r(i.target.documentElement.scrollTop, i.target.documentElement.scrollLeft));
  }, [t, r]), e;
}, qn = ({ children: e, styles: r, draggingHover: n, resetBody: t }) => {
  const i = Q(
    pe(() => pr(({ get: l }) => l(r).map((u) => ({
      id: l(u.id),
      content: l(u.content)
    }))), [r])
  ), a = pe(() => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    i.map((l) => Jr("style", { key: l.id }, l.content)),
    /* @__PURE__ */ _.jsx("style", { children: [
      "* { outline: none; }",
      t ? "body { margin:0!important; }" : "",
      `html${n ? "" : ":hover"} body .frame-content * {`,
      "  outline: thin solid #80808050;",
      "}",
      '[data-hover="true"] *, [data-select="true"] * {',
      "  outline: none!important;",
      "}"
    ].join(`
`) })
  ] }), [i, t]);
  return /* @__PURE__ */ _.jsx(
    Un,
    {
      tabIndex: -1,
      head: a,
      mountTarget: "body",
      onContextMenu: (l) => l.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, Nn = (e, r) => Ee(({ get: n }) => r.some((t) => n(t.type) !== "component" ? !1 : n(t.referenceComponentId) === n(e.referenceComponentId)), [e, r]), xr = (e, r) => Ee(({ get: t }) => {
  for (let i = r.length - 1; i >= 0; i--) {
    const a = r[i];
    if (t(a.type) === "slot")
      return !1;
    if (t(a.type) === "component")
      return !0;
  }
  return !1;
}, [r, e]), Gn = ({ element: e }) => {
  const r = Q(e.name);
  return /* @__PURE__ */ _.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ _.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Jn = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: p, onDoubleClick: f }) => {
  const h = te(null), { onDragStart: C, onDragEnd: c, components: v } = Se(), { hideInsertBar: y } = Re(), { selectedId: m } = Oe(), { hoveredId: R } = Te(), T = Q(e.id), S = Ee(({ get: D }) => {
    const J = D(v).find((W) => D(W.id) === D(e.referenceComponentId));
    return J ? D(J.content) : [];
  }, [v, e]);
  ne(() => {
    R.value === T && s(e, h.current);
    const D = R.subscribe((J) => {
      J === T && s(e, h.current);
    });
    return () => D.unsubscribe();
  }, [T, R, e]), ne(() => {
    m.value === T && p(e, h.current);
    const D = m.subscribe((J) => {
      J === T && p(e, h.current);
    });
    return () => D.unsubscribe();
  }, [e, T, m]);
  const x = pe(() => !S || S.length === 0 ? null : S.map((D) => /* @__PURE__ */ _.jsx(
    Pe,
    {
      element: D,
      parents: [...r, e]
    },
    D.id.value
  )), [S, r, e]), { isDragging: d, preview: I } = Ge({
    id: T,
    element: h,
    data: { element: e, parents: r },
    start: () => {
      C();
    },
    end: () => {
      y(), c();
    }
  }, [T, e, r, y, C, c]);
  ne(() => {
    I(
      () => Ke("name dynamic here"),
      (D) => D.remove()
    );
  }, [I]);
  const K = te({ id: Fe() });
  return Le({
    element: h,
    id: K.current.id,
    drop: (D, J) => u(D, J, e, r, h, K.current.id),
    hover: (D, J) => l(D, J, e, r, h, K.current.id),
    leave: (D, J) => a(D, J, e, r, h, K.current.id)
  }, [e, r, u, l, a]), /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: h,
      onMouseLeave: t,
      onClick: (D) => i(D, e),
      onDoubleClick: (D) => f(D, e),
      onMouseOver: (D) => n(D, e, h.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: d ? 0.5 : void 0 },
      children: x
    }
  );
}, Kn = ({ element: e, parents: r }) => {
  const { components: n } = Se(), t = Ee(({ get: i }) => {
    const a = i(n).find((l) => i(l.id) === i(e.referenceComponentId));
    return a ? i(a.content) : [];
  }, [n, e]);
  return /* @__PURE__ */ _.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: t.map((i) => /* @__PURE__ */ _.jsx(
    Pe,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, Xn = ({ element: e, parents: r, ...n }) => {
  const t = Nn(e, r), i = xr(e, r);
  return t ? /* @__PURE__ */ _.jsx(Gn, { element: e }) : i ? /* @__PURE__ */ _.jsx(
    Kn,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ _.jsx(
    Jn,
    {
      element: e,
      parents: r,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onDoubleClick: n.onDoubleClick,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar,
      onSelectBar: n.onSelectBar
    }
  );
}, pt = (e) => {
  const r = pe(() => pr(({ get: n }) => {
    const t = n(e);
    if (!t)
      return {};
    const i = {};
    return t.forEach((a) => {
      const l = n(a.name), u = n(a.value);
      l && (i[nt(l)] = u);
    }), i;
  }), [e]);
  return Q(r);
}, ht = (e) => {
  const r = pe(() => pr({
    get({ get: n }) {
      const t = n(e);
      if (!t)
        return [{}, {}];
      const i = {}, a = {};
      return t.forEach((l) => {
        const u = n(l.name);
        if (u === void 0 || u === "hidden" || u === "style")
          return;
        const s = n(l.value), p = nt(u);
        switch (p) {
          case "text":
            a.text = s;
            break;
          case "options":
            a.options = s;
            break;
          case "className":
            i.className = s;
            break;
          case "class":
            i.className = s;
            break;
          default:
            i[p] = s;
            break;
        }
      }), [i, a];
    }
  }), [e]);
  return Q(r);
}, yt = Ft(({ tag: e, ...r }, n) => Jr(e, { ref: n, ...r })), Zn = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: p }) => {
  const f = te(null), [h, C] = Kr(!1), [c, v] = ht(e.attributes), y = pt(e.style), m = Q(e.children), R = Q(e.tag), T = Q(e.id), { onDragStart: S, onDragEnd: x } = Se(), { hideInsertBar: d } = Re(), { selectedId: I } = Oe(), { hoveredId: K } = Te();
  ne(() => {
    K.value === T && s(e, f.current);
    const P = K.subscribe((U) => {
      U === T && s(e, f.current);
    });
    return () => P.unsubscribe();
  }, [T, K, e, s]), ne(() => {
    I.value === T && p(e, f.current);
    const P = I.subscribe((U) => {
      U === T && p(e, f.current);
    });
    return () => P.unsubscribe();
  }, [e, T, I, p]), ne(() => {
    C((U) => K.value === T === U ? U : !U);
    const P = K.subscribe((U) => {
      C((oe) => U === T === oe ? oe : !oe);
    });
    return () => P.unsubscribe();
  }, [T, K]);
  const D = pe(() => (!m || m.length === 0) && Object.keys(v).includes("text") ? v.text : !m || m.length === 0 ? null : m.map((P) => /* @__PURE__ */ _.jsx(
    Pe,
    {
      element: P,
      parents: [...r, e]
    },
    P.id.value
  )), [m, r, e, v.text]), J = pe(() => m !== void 0, [m]), { isDragging: W, preview: de } = Ge({
    id: T,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      S();
    },
    end: () => {
      d(), x();
    }
  }, [T, e, r, d, S, x]);
  ne(() => {
    de(
      () => Ke("name dynamic here"),
      (P) => P.remove()
    );
  }, [de]);
  const ue = te({ id: Fe() });
  return Le({
    element: f,
    id: ue.current.id,
    drop: (P, U) => u(P, U, e, r, f, ue.current.id),
    hover: (P, U) => l(P, U, e, r, f, ue.current.id),
    leave: (P, U) => a(P, U, e, r, f, ue.current.id)
  }, [e, r, u, l, a]), /* @__PURE__ */ _.jsx(
    yt,
    {
      readOnly: !0,
      tag: R,
      ref: f,
      children: D,
      onMouseLeave: t,
      onClick: (P) => i(P, e),
      onMouseOver: (P) => n(P, e, f.current),
      ...c !== void 0 ? { ...c, ...h ? { disabled: !1 } : {} } : {},
      style: {
        ...y,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: W ? 0.5 : typeof y.opacity == "number" ? Number(y.opacity) : void 0,
        minWidth: D === null && J ? 40 : typeof y.minWidth == "number" ? Number(y.minWidth) : void 0,
        minHeight: D === null && J ? 40 : typeof y.minHeight == "number" ? Number(y.minHeight) : void 0
      }
    }
  );
}, Qn = ({ element: e, parents: r }) => {
  const [n, t] = ht(e.attributes), i = pt(e.style), a = Q(e.children), l = Q(e.tag), u = pe(() => (!a || a.length === 0) && Object.keys(t).includes("text") ? t.text : !a || a.length === 0 ? null : a.map((s) => /* @__PURE__ */ _.jsx(
    Pe,
    {
      element: s,
      parents: [...r, e]
    },
    s.id.value
  )), [a, r, e, t.text]);
  return /* @__PURE__ */ _.jsx(
    yt,
    {
      tag: l,
      children: u,
      ...n !== void 0 ? n : {},
      style: {
        ...i,
        resize: "none",
        outline: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "none"
      }
    }
  );
}, eo = ({ element: e, parents: r, ...n }) => xr(e, r) ? /* @__PURE__ */ _.jsx(
  Qn,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ _.jsx(
  Zn,
  {
    element: e,
    parents: r,
    onDrop: n.onDrop,
    onDragOver: n.onDragOver,
    onDragLeave: n.onDragLeave,
    onSelect: n.onSelect,
    onMouseOver: n.onMouseOver,
    onMouseLeave: n.onMouseLeave,
    onHoverBar: n.onHoverBar,
    onSelectBar: n.onSelectBar
  }
), ro = (e, r) => {
  const { components: n } = Se();
  return Ee(({ get: t }) => t(n).some((a) => t(a.id) === t(e.componentId)), [r, e, n]);
}, gt = (e, r) => {
  const { onAddSlotContent: n } = Se();
  return Ee(({ get: t }) => {
    var l;
    const i = r.filter((u) => t(u.type) === "component").find((u) => t(u.referenceComponentId) === t(e.componentId));
    if (!i)
      return [];
    const a = (l = t(i.slots)) == null ? void 0 : l.find((u) => t(u.referenceSlotId) === t(e.id));
    return a ? [t(a.children), a] : (n(e, i), []);
  }, [r, e, n]);
}, to = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onDragLeave: i, onDragOver: a, onDrop: l, onHoverBar: u, onSelectBar: s }) => {
  const p = te(null), [f = []] = gt(e, r), { selectedId: h } = Oe(), { hoveredId: C } = Te(), c = Q(e.id);
  ne(() => {
    C.value === c && u(e, p.current);
    const y = C.subscribe((m) => {
      m === c && u(e, p.current);
    });
    return () => y.unsubscribe();
  }, [c, C, e]), ne(() => {
    h.value === c && s(e, p.current);
    const y = h.subscribe((m) => {
      m === c && s(e, p.current);
    });
    return () => y.unsubscribe();
  }, [e, c, h]);
  const v = te({ id: Fe() });
  return Le({
    element: p,
    id: v.current.id,
    drop: (y, m) => l(y, m, e, r, p, v.current.id),
    hover: (y, m) => a(y, m, e, r, p, v.current.id),
    leave: (y, m) => i(y, m, e, r, p, v.current.id)
  }, [e, r, l, a, i]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: p,
      onMouseLeave: t,
      onMouseOver: (y) => n(y, e, p.current),
      style: {
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        display: f.length === 0 ? "flex" : void 0,
        minWidth: f.length === 0 ? "40px" : void 0,
        minHeight: f.length === 0 ? "40px" : void 0,
        alignItems: f.length === 0 ? "center" : void 0,
        justifyContent: f.length === 0 ? "center" : void 0,
        fontFamily: f.length === 0 ? "sans-serif" : void 0,
        backgroundColor: f.length === 0 ? "#80808020" : void 0
      },
      children: [
        f.length > 0 && f.map((y) => /* @__PURE__ */ _.jsx(
          Pe,
          {
            element: y,
            parents: [...r, e]
          },
          y.id.value
        )),
        f.length === 0 && /* @__PURE__ */ _.jsx("span", { style: { opacity: 0.5, pointerEvents: "none", outline: "none" }, children: "Drag and drop something here..." })
      ]
    }
  );
}, no = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: p }) => {
  const f = te(null), { onDragStart: h, onDragEnd: C } = Se(), { hideInsertBar: c } = Re(), { selectedId: v } = Oe(), { hoveredId: y } = Te(), m = Q(e.name), R = Q(e.id);
  ne(() => {
    y.value === R && s(e, f.current);
    const d = y.subscribe((I) => {
      I === R && s(e, f.current);
    });
    return () => d.unsubscribe();
  }, [R, y, e]), ne(() => {
    v.value === R && p(e, f.current);
    const d = v.subscribe((I) => {
      I === R && p(e, f.current);
    });
    return () => d.unsubscribe();
  }, [e, R, v]);
  const { isDragging: T, preview: S } = Ge({
    id: R,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      h();
    },
    end: () => {
      c(), C();
    }
  }, [R, e, r, c, h, C]);
  ne(() => {
    S(
      () => Ke("name dynamic here"),
      (d) => d.remove()
    );
  }, [S]);
  const x = te({ id: Fe() });
  return Le({
    element: f,
    id: x.current.id,
    drop: (d, I) => u(d, I, e, r, f, x.current.id),
    hover: (d, I) => l(d, I, e, r, f, x.current.id),
    leave: (d, I) => a(d, I, e, r, f, x.current.id)
  }, [e, r, u, l, a]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: t,
      onClick: (d) => i(d, e),
      onMouseOver: (d) => n(d, e, f.current),
      style: {
        display: "flex",
        minWidth: "40px",
        minHeight: "40px",
        cursor: "default",
        userSelect: "none",
        alignItems: "center",
        pointerEvents: "all",
        justifyContent: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#8080803b",
        border: "2px dashed #8080803b",
        opacity: T ? 0.5 : void 0
      },
      children: [
        'Slot "',
        m,
        '"'
      ]
    }
  );
}, oo = ({ element: e, parents: r }) => {
  const [n = []] = gt(e, r);
  return /* @__PURE__ */ _.jsx("div", { style: { outline: "none" }, children: n.map((t) => /* @__PURE__ */ _.jsx(
    Pe,
    {
      element: t,
      parents: [...r, e]
    },
    t.id.value
  )) });
}, io = ({ element: e, parents: r, ...n }) => {
  const t = xr(e, r);
  return ro(e, r) ? /* @__PURE__ */ _.jsx(
    to,
    {
      element: e,
      parents: r,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar,
      onSelectBar: n.onSelectBar
    }
  ) : t ? /* @__PURE__ */ _.jsx(
    oo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ _.jsx(
    no,
    {
      element: e,
      parents: r,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar,
      onSelectBar: n.onSelectBar
    }
  );
}, Pe = ({ element: e, parents: r }) => {
  const n = Q(e.type), { showInsertBar: t, hideInsertBar: i } = Re(), { select: a, updateSelectBar: l } = Oe(), { hover: u, updateHoverBar: s } = Te(), { onDrop: p, value: f } = Se(), h = Z((S, x) => {
    S.stopPropagation(), S.preventDefault(), a(x.id.value);
  }, [a]), C = Z((S) => {
    S.stopPropagation(), S.preventDefault(), a(void 0), u(void 0);
  }, [a, u]), c = Z((S, x) => {
    S.stopPropagation(), u(x.id.value);
  }, [u]), v = Z((S) => {
    S.stopPropagation(), u(void 0);
  }, [u]), y = Z((S, x) => {
    s(S, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [s]), m = Z((S, x) => {
    l(S, r, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [l, r]), R = Z((S, x, d, I, K, D) => {
    if (!Fr(x, d, I, K, D))
      return u(void 0);
    u(d.id.value);
    const W = dn(x, d, K);
    if (!W)
      return i();
    t({
      isVisible: !0,
      top: W.top,
      left: W.left,
      width: W.width,
      height: W.height,
      isHorizontal: W.isHorizontal
    });
  }, [t, u, i]), T = Z((S, x, d, I, K, D) => {
    var oe, ie, ve, me;
    if (!Fr(x, d, I, K, D))
      return;
    const W = fn(x, d, K);
    if (!W)
      return;
    const de = W.isOverStart || W.isOverEnd;
    if (!de && d.type.value === "component")
      return;
    const ue = (oe = S.parents) == null ? void 0 : oe.slice(-1).at(0), P = ue || "root";
    if (P !== "root" && (P.type.value === "component" || P.type.value === "slot"))
      return;
    const U = ((ie = (P === "root" ? f : P.children).value) == null ? void 0 : ie.findIndex((se) => se.id.value === S.element.id.value)) ?? -1;
    if (de) {
      const se = I.slice(-1).at(0), b = ((ve = (se ? se.children : f).value) == null ? void 0 : ve.findIndex((O) => O.id.value === d.id.value)) ?? -1;
      p({
        element: S.element,
        from: {
          position: U,
          element: P
        },
        to: {
          element: se || "root",
          position: W.isOverStart ? b : b + 1
        }
      });
    } else {
      const se = ((me = d.children.value) == null ? void 0 : me.length) || -1;
      p({
        element: S.element,
        from: {
          position: U,
          element: P
        },
        to: {
          element: d,
          position: W.isOverStart ? se : se + 1
        }
      });
    }
    a(S.element.id.value);
  }, [a, p]);
  return n === "component" ? /* @__PURE__ */ _.jsx(
    Xn,
    {
      parents: r,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onDoubleClick: C,
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: m
    }
  ) : n === "slot" ? /* @__PURE__ */ _.jsx(
    io,
    {
      parents: r,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: m
    }
  ) : /* @__PURE__ */ _.jsx(
    eo,
    {
      parents: r,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: m
    }
  );
}, ao = () => {
  const e = te({ id: Fe() }), { value: r, styles: n, onDrop: t, onKeyDown: i } = Se(), { updateSelectBarScroll: a, select: l } = Oe(), { showInsertBar: u, hideInsertBar: s } = Re(), { updateHoverBarScroll: p, hover: f } = Te(), [h, C] = Kr(null), c = Q(r), v = Z((S, x) => {
    var D;
    if (s(), !S)
      return;
    const d = un(S.parents), I = d || "root", K = ((D = d == null ? void 0 : d.children.value) == null ? void 0 : D.findIndex((J) => J.id.value === S.element.id.value)) ?? -1;
    t({
      element: S.element,
      from: {
        element: I,
        position: K
      },
      to: {
        element: "root",
        position: r.value.length
      }
    }), l(S.element.id.value);
  }, [r, l, s]), y = Z((S, x) => {
    const d = h == null ? void 0 : h.lastElementChild;
    if (!d)
      return;
    const I = d.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: I.left,
      width: I.width,
      height: I.height,
      top: d ? I.top + I.height : I.top
    });
  }, [h == null ? void 0 : h.lastElementChild, u]), m = Z((S, x) => {
    a(S, x), p(S, x);
  }, [a, p]), [{ isDraggingOver: R, isDraggingOverCurrent: T }] = Le({
    drop: v,
    hover: y,
    id: e.current.id,
    element: { current: h },
    leave: () => {
      s(), f(void 0);
    }
  }, [v, y, s]);
  return /* @__PURE__ */ _.jsx(
    qn,
    {
      styles: n,
      resetBody: !0,
      draggingHover: R || T,
      children: /* @__PURE__ */ _.jsxs(Yn, { onRef: C, onScroll: m, onKeyDown: i, children: [
        /* @__PURE__ */ _.jsx(Gt, {}),
        /* @__PURE__ */ _.jsx(gn, {}),
        /* @__PURE__ */ _.jsx(pn, {}),
        c.map((S) => /* @__PURE__ */ _.jsx(
          Pe,
          {
            parents: [],
            element: S
          },
          S.id.value
        )),
        c.length === 0 && /* @__PURE__ */ _.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ _.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
      ] })
    }
  );
}, vo = ({ onSelect: e, onHover: r, selectedId: n, hoveredId: t, ...i }) => /* @__PURE__ */ _.jsx(zt, { children: /* @__PURE__ */ _.jsx(qt, { ...i, children: /* @__PURE__ */ _.jsx(Nt, { children: /* @__PURE__ */ _.jsx(Jt, { id: n, onSelect: e, children: /* @__PURE__ */ _.jsx(hn, { id: t, onHover: r, children: /* @__PURE__ */ _.jsx(ao, {}) }) }) }) }) });
export {
  vo as UIEditor
};
//# sourceMappingURL=index.es.js.map

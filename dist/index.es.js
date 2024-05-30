import be, { createContext as Ne, useContext as Ge, useRef as te, useMemo as he, useCallback as Z, useEffect as me, memo as Je, createElement as Zt, forwardRef as Wr, useState as Qt } from "react";
import { useDrag as Ke, useDrop as Ve, DragAndDropProvider as Ur } from "react-use-drag-and-drop";
import { observe as ae, set as ce, useObserver as Be, useObserverValue as Q, useSelectorValue as Se, selector as gt } from "react-observing";
import { v4 as Yr } from "uuid";
import qr from "react-dom";
var Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vt = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Jr() {
  if (Lt)
    return Fe;
  Lt = 1;
  var e = be, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, s, d) {
    var f, h = {}, S = null, u = null;
    d !== void 0 && (S = "" + d), s.key !== void 0 && (S = "" + s.key), s.ref !== void 0 && (u = s.ref);
    for (f in s)
      r.call(s, f) && !a.hasOwnProperty(f) && (h[f] = s[f]);
    if (c && c.defaultProps)
      for (f in s = c.defaultProps, s)
        h[f] === void 0 && (h[f] = s[f]);
    return { $$typeof: t, type: c, key: S, ref: u, props: h, _owner: i.current };
  }
  return Fe.Fragment = n, Fe.jsx = l, Fe.jsxs = l, Fe;
}
var ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Kr() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = be, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function O(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[b];
      return typeof g == "function" ? g : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), j = 1; j < g; j++)
          w[j - 1] = arguments[j];
        C("error", o, w);
      }
    }
    function C(o, g, w) {
      {
        var j = R.ReactDebugCurrentFrame, q = j.getStackAddendum();
        q !== "" && (g += "%s", w = w.concat([q]));
        var K = w.map(function(W) {
          return String(W);
        });
        K.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, K);
      }
    }
    var m = !1, p = !1, I = !1, Y = !1, B = !1, X;
    X = Symbol.for("react.module.reference");
    function F(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || B || o === i || o === d || o === f || Y || o === u || m || p || I || typeof o == "object" && o !== null && (o.$$typeof === S || o.$$typeof === h || o.$$typeof === l || o.$$typeof === c || o.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === X || o.getModuleId !== void 0));
    }
    function fe(o, g, w) {
      var j = o.displayName;
      if (j)
        return j;
      var q = g.displayName || g.name || "";
      return q !== "" ? w + "(" + q + ")" : w;
    }
    function ue(o) {
      return o.displayName || "Context";
    }
    function k(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var g = o;
            return ue(g) + ".Consumer";
          case l:
            var w = o;
            return ue(w._context) + ".Provider";
          case s:
            return fe(o, o.render, "ForwardRef");
          case h:
            var j = o.displayName || null;
            return j !== null ? j : k(o.type) || "Memo";
          case S: {
            var q = o, K = q._payload, W = q._init;
            try {
              return k(W(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, ne = 0, oe, pe, se, ie, y, E, P;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function D() {
      {
        if (ne === 0) {
          oe = console.log, pe = console.info, se = console.warn, ie = console.error, y = console.group, E = console.groupCollapsed, P = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: M,
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
        ne++;
      }
    }
    function H() {
      {
        if (ne--, ne === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, o, {
              value: oe
            }),
            info: J({}, o, {
              value: pe
            }),
            warn: J({}, o, {
              value: se
            }),
            error: J({}, o, {
              value: ie
            }),
            group: J({}, o, {
              value: y
            }),
            groupCollapsed: J({}, o, {
              value: E
            }),
            groupEnd: J({}, o, {
              value: P
            })
          });
        }
        ne < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = R.ReactCurrentDispatcher, L;
    function z(o, g, w) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (q) {
            var j = q.stack.trim().match(/\n( *(at )?)/);
            L = j && j[1] || "";
          }
        return `
` + L + o;
      }
    }
    var U = !1, V;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      V = new le();
    }
    function x(o, g) {
      if (!o || U)
        return "";
      {
        var w = V.get(o);
        if (w !== void 0)
          return w;
      }
      var j;
      U = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = A.current, A.current = null, D();
      try {
        if (g) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (ve) {
              j = ve;
            }
            Reflect.construct(o, [], W);
          } else {
            try {
              W.call();
            } catch (ve) {
              j = ve;
            }
            o.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ve) {
            j = ve;
          }
          o();
        }
      } catch (ve) {
        if (ve && j && typeof ve.stack == "string") {
          for (var $ = ve.stack.split(`
`), de = j.stack.split(`
`), ee = $.length - 1, re = de.length - 1; ee >= 1 && re >= 0 && $[ee] !== de[re]; )
            re--;
          for (; ee >= 1 && re >= 0; ee--, re--)
            if ($[ee] !== de[re]) {
              if (ee !== 1 || re !== 1)
                do
                  if (ee--, re--, re < 0 || $[ee] !== de[re]) {
                    var ge = `
` + $[ee].replace(" at new ", " at ");
                    return o.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", o.displayName)), typeof o == "function" && V.set(o, ge), ge;
                  }
                while (ee >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        U = !1, A.current = K, H(), Error.prepareStackTrace = q;
      }
      var Ae = o ? o.displayName || o.name : "", Te = Ae ? z(Ae) : "";
      return typeof o == "function" && V.set(o, Te), Te;
    }
    function ye(o, g, w) {
      return x(o, !1);
    }
    function Ie(o) {
      var g = o.prototype;
      return !!(g && g.isReactComponent);
    }
    function Re(o, g, w) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return x(o, Ie(o));
      if (typeof o == "string")
        return z(o);
      switch (o) {
        case d:
          return z("Suspense");
        case f:
          return z("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            return ye(o.render);
          case h:
            return Re(o.type, g, w);
          case S: {
            var j = o, q = j._payload, K = j._init;
            try {
              return Re(K(q), g, w);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Et = {}, _t = R.ReactDebugCurrentFrame;
    function We(o) {
      if (o) {
        var g = o._owner, w = Re(o.type, o._source, g ? g.type : null);
        _t.setExtraStackFrame(w);
      } else
        _t.setExtraStackFrame(null);
    }
    function wr(o, g, w, j, q) {
      {
        var K = Function.call.bind(ke);
        for (var W in o)
          if (K(o, W)) {
            var $ = void 0;
            try {
              if (typeof o[W] != "function") {
                var de = Error((j || "React class") + ": " + w + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              $ = o[W](g, W, j, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              $ = ee;
            }
            $ && !($ instanceof Error) && (We(q), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", w, W, typeof $), We(null)), $ instanceof Error && !($.message in Et) && (Et[$.message] = !0, We(q), T("Failed %s type: %s", w, $.message), We(null));
          }
      }
    }
    var Sr = Array.isArray;
    function et(o) {
      return Sr(o);
    }
    function Or(o) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, w = g && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return w;
      }
    }
    function Er(o) {
      try {
        return Ct(o), !1;
      } catch {
        return !0;
      }
    }
    function Ct(o) {
      return "" + o;
    }
    function Rt(o) {
      if (Er(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(o)), Ct(o);
    }
    var Le = R.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Tt, Pt, tt;
    tt = {};
    function Cr(o) {
      if (ke.call(o, "ref")) {
        var g = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Rr(o) {
      if (ke.call(o, "key")) {
        var g = Object.getOwnPropertyDescriptor(o, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Tr(o, g) {
      if (typeof o.ref == "string" && Le.current && g && Le.current.stateNode !== g) {
        var w = k(Le.current.type);
        tt[w] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Le.current.type), o.ref), tt[w] = !0);
      }
    }
    function Pr(o, g) {
      {
        var w = function() {
          Tt || (Tt = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function jr(o, g) {
      {
        var w = function() {
          Pt || (Pt = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Dr = function(o, g, w, j, q, K, W) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: w,
        props: W,
        // Record the component responsible for creating this element.
        _owner: K
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
    function Ir(o, g, w, j, q) {
      {
        var K, W = {}, $ = null, de = null;
        w !== void 0 && (Rt(w), $ = "" + w), Rr(g) && (Rt(g.key), $ = "" + g.key), Cr(g) && (de = g.ref, Tr(g, q));
        for (K in g)
          ke.call(g, K) && !_r.hasOwnProperty(K) && (W[K] = g[K]);
        if (o && o.defaultProps) {
          var ee = o.defaultProps;
          for (K in ee)
            W[K] === void 0 && (W[K] = ee[K]);
        }
        if ($ || de) {
          var re = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          $ && Pr(W, re), de && jr(W, re);
        }
        return Dr(o, $, de, q, j, Le.current, W);
      }
    }
    var rt = R.ReactCurrentOwner, jt = R.ReactDebugCurrentFrame;
    function Me(o) {
      if (o) {
        var g = o._owner, w = Re(o.type, o._source, g ? g.type : null);
        jt.setExtraStackFrame(w);
      } else
        jt.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function ot(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Dt() {
      {
        if (rt.current) {
          var o = k(rt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Mr(o) {
      return "";
    }
    var It = {};
    function Ar(o) {
      {
        var g = Dt();
        if (!g) {
          var w = typeof o == "string" ? o : o.displayName || o.name;
          w && (g = `

Check the top-level render call using <` + w + ">.");
        }
        return g;
      }
    }
    function Mt(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var w = Ar(g);
        if (It[w])
          return;
        It[w] = !0;
        var j = "";
        o && o._owner && o._owner !== rt.current && (j = " It was passed a child from " + k(o._owner.type) + "."), Me(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, j), Me(null);
      }
    }
    function At(o, g) {
      {
        if (typeof o != "object")
          return;
        if (et(o))
          for (var w = 0; w < o.length; w++) {
            var j = o[w];
            ot(j) && Mt(j, g);
          }
        else if (ot(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var q = O(o);
          if (typeof q == "function" && q !== o.entries)
            for (var K = q.call(o), W; !(W = K.next()).done; )
              ot(W.value) && Mt(W.value, g);
        }
      }
    }
    function Br(o) {
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
          var j = k(g);
          wr(w, o.props, "prop", j, o);
        } else if (g.PropTypes !== void 0 && !nt) {
          nt = !0;
          var q = k(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(o) {
      {
        for (var g = Object.keys(o.props), w = 0; w < g.length; w++) {
          var j = g[w];
          if (j !== "children" && j !== "key") {
            Me(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Me(null);
            break;
          }
        }
        o.ref !== null && (Me(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var Bt = {};
    function kt(o, g, w, j, q, K) {
      {
        var W = F(o);
        if (!W) {
          var $ = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Mr();
          de ? $ += de : $ += Dt();
          var ee;
          o === null ? ee = "null" : et(o) ? ee = "array" : o !== void 0 && o.$$typeof === t ? (ee = "<" + (k(o.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, $);
        }
        var re = Ir(o, g, w, q, K);
        if (re == null)
          return re;
        if (W) {
          var ge = g.children;
          if (ge !== void 0)
            if (j)
              if (et(ge)) {
                for (var Ae = 0; Ae < ge.length; Ae++)
                  At(ge[Ae], o);
                Object.freeze && Object.freeze(ge);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              At(ge, o);
        }
        if (ke.call(g, "key")) {
          var Te = k(o), ve = Object.keys(g).filter(function(Hr) {
            return Hr !== "key";
          }), it = ve.length > 0 ? "{key: someKey, " + ve.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[Te + it]) {
            var $r = ve.length > 0 ? "{" + ve.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, Te, $r, Te), Bt[Te + it] = !0;
          }
        }
        return o === r ? kr(re) : Br(re), re;
      }
    }
    function Lr(o, g, w) {
      return kt(o, g, w, !0);
    }
    function Fr(o, g, w) {
      return kt(o, g, w, !1);
    }
    var zr = Fr, Vr = Lr;
    ze.Fragment = r, ze.jsx = zr, ze.jsxs = Vr;
  }()), ze;
}
process.env.NODE_ENV === "production" ? vt.exports = Jr() : vt.exports = Kr();
var _ = vt.exports;
const er = Ne({}), Xr = ({ children: e, ...t }) => /* @__PURE__ */ _.jsx(er.Provider, { value: t, children: e }), Ee = () => Ge(er), tr = Ne({}), Zr = ({ children: e }) => {
  const t = te(ae(!1)), n = te(ae(!1)), r = te(ae(0)), i = te(ae(0)), a = te(ae(0)), l = te(ae(0)), c = he(() => ({
    observableIsHorizontal: t.current,
    observableIsVisible: n.current,
    observableHeight: r.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: l.current
  }), []), s = Z((f) => {
    ce(l.current, (h) => h !== f.top ? f.top : h), ce(a.current, (h) => h !== f.left ? f.left : h), ce(i.current, (h) => h !== f.width ? f.width : h), ce(r.current, (h) => h !== f.height ? f.height : h), ce(n.current, (h) => h !== f.isVisible ? f.isVisible : h), ce(t.current, (h) => h !== !!f.isHorizontal ? !!f.isHorizontal : h);
  }, []), d = Z(() => {
    s({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [s]);
  return /* @__PURE__ */ _.jsx(tr.Provider, { value: { showInsertBar: s, hideInsertBar: d, observables: c }, children: e });
}, je = () => Ge(tr), Qr = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: t, observableIsHorizontal: n, observableIsVisible: r, observableLeft: i, observableTop: a, observableWidth: l } = je().observables, [c] = Be(a), [s] = Be(i), [d] = Be(l), [f] = Be(t), [h] = Be(r), [S] = Be(n), u = he(() => ({
    width: S ? d : 4,
    height: S ? 4 : f,
    top: c - (S ? 2 : 0),
    left: s - (S ? 0 : 2)
  }), [f, S, s, c, d]);
  return h ? /* @__PURE__ */ _.jsx(
    "div",
    {
      className: "animate-pulse",
      style: {
        zIndex: 10,
        borderRadius: 5,
        top: u.top,
        position: "fixed",
        left: u.left,
        width: u.width,
        pointerEvents: "none",
        height: u.height,
        backgroundColor: e
      }
    }
  ) : null;
}, rr = Ne({}), en = ({ children: e, id: t, onSelect: n }) => {
  const r = te({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    parents: ae(void 0),
    element: ae(void 0),
    onSelect: n,
    id: t
  });
  return me(() => {
    r.current.id = t;
  }, [t]), me(() => {
    r.current.onSelect = n;
  }, [n]), /* @__PURE__ */ _.jsx(rr.Provider, { value: r.current, children: e });
};
var nr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zt = be.createContext && /* @__PURE__ */ be.createContext(nr), tn = ["attr", "size", "title"];
function rn(e, t) {
  if (e == null)
    return {};
  var n = nn(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function nn(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ye.apply(this, arguments);
}
function Vt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vt(Object(n), !0).forEach(function(r) {
      on(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vt(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function on(e, t, n) {
  return t = an(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function an(e) {
  var t = cn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cn(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function or(e) {
  return e && e.map((t, n) => /* @__PURE__ */ be.createElement(t.tag, qe({
    key: n
  }, t.attr), or(t.child)));
}
function Xe(e) {
  return (t) => /* @__PURE__ */ be.createElement(un, Ye({
    attr: qe({}, e.attr)
  }, t), or(e.child));
}
function un(e) {
  var t = (n) => {
    var {
      attr: r,
      size: i,
      title: a
    } = e, l = rn(e, tn), c = i || n.size || "1em", s;
    return n.className && (s = n.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ be.createElement("svg", Ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, l, {
      className: s,
      style: qe(qe({
        color: e.color || n.color
      }, n.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ be.createElement("title", null, a), e.children);
  };
  return zt !== void 0 ? /* @__PURE__ */ be.createElement(zt.Consumer, null, (n) => t(n)) : t(nr);
}
function sn(e) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function ln(e) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function fn(e) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function dn(e) {
  return Xe({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const vn = (e) => {
  let t, n = 0;
  if (!(!e || e.length === 0)) {
    do
      n--, t = e == null ? void 0 : e.slice(n).at(0);
    while (!t || !["html", "slot-content"].includes(t.type.value));
    return t;
  }
}, Ze = (e, t) => {
  const n = document.createElement("label");
  return n.style.padding = "4px", n.style.paddingTop = "2px", n.style.paddingRight = "8px", n.style.paddingBottom = "2px", n.style.backgroundColor = "#3e8ce4", n.style.color = "#ffffff", n.style.textTransform = "capitalize", n.style.alignItems = "center", n.style.borderRadius = "2px", n.style.fontWeight = "600", n.style.position = "fixed", n.style.fontSize = "11px", n.style.display = "flex", n.style.height = "20px", n.style.zIndex = "-100", n.style.width = "auto", n.appendChild(new Text(e)), document.body.appendChild(n), n;
};
function pn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var ir = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var t = function(u, v) {
      return v = v || "", u.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, n = t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), r = "a-z" + t("DF-F6,F8-FF", "00"), i = "A-Z" + t("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", l = function(u, v, b, O) {
      return u = u || n, v = v || r, b = b || i, O = O || a, {
        capitalize: new RegExp("(^|[" + u + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + u + "])+([" + v + b + "])", "g"),
        fill: new RegExp("[" + u + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + O + ")\\b", "g"),
        relax: new RegExp("([^" + b + "])([" + b + "]*)([" + b + "])(?=[^" + b + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + u + "]")
      };
    }, c = l(), s = {
      re: c,
      unicodes: t,
      regexps: l,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(u) {
        return s.up.call(u.charAt(0)) + u.slice(1);
      },
      decap: function(u) {
        return s.low.call(u.charAt(0)) + u.slice(1);
      },
      deapostrophe: function(u) {
        return u.replace(c.apostrophe, "");
      },
      fill: function(u, v, b) {
        return v != null && (u = u.replace(c.fill, function(O, R) {
          return R ? v + R : "";
        })), b && (u = s.deapostrophe(u)), u;
      },
      prep: function(u, v, b, O) {
        if (u = u == null ? "" : u + "", !O && c.upper.test(u) && (u = s.low.call(u)), !v && !c.hole.test(u)) {
          var R = s.fill(u, " ");
          c.hole.test(R) && (u = R);
        }
        return !b && !c.room.test(u) && (u = u.replace(c.relax, s.relax)), u;
      },
      relax: function(u, v, b, O) {
        return v + " " + (b ? b + " " : "") + O;
      }
    }, d = {
      _: s,
      of: function(u) {
        for (var v = 0, b = s.types.length; v < b; v++)
          if (d[s.types[v]].apply(d, arguments) === u)
            return s.types[v];
      },
      flip: function(u) {
        return u.replace(/\w/g, function(v) {
          return (v == s.up.call(v) ? s.low : s.up).call(v);
        });
      },
      random: function(u) {
        return u.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? s.up : s.low).call(v);
        });
      },
      type: function(u, v) {
        d[u] = v, s.types.push(u);
      }
    }, f = {
      lower: function(u, v, b) {
        return s.fill(s.low.call(s.prep(u, v)), v, b);
      },
      snake: function(u) {
        return d.lower(u, "_", !0);
      },
      constant: function(u) {
        return d.upper(u, "_", !0);
      },
      camel: function(u) {
        return s.decap(d.pascal(u));
      },
      kebab: function(u) {
        return d.lower(u, "-", !0);
      },
      upper: function(u, v, b) {
        return s.fill(s.up.call(s.prep(u, v, !1, !0)), v, b);
      },
      capital: function(u, v, b) {
        return s.fill(s.prep(u).replace(c.capitalize, function(O, R, T) {
          return R + s.up.call(T);
        }), v, b);
      },
      header: function(u) {
        return d.capital(u, "-", !0);
      },
      pascal: function(u) {
        return s.fill(s.prep(u, !1, !0).replace(c.pascal, function(v, b, O) {
          return s.up.call(O);
        }), "", !0);
      },
      title: function(u) {
        return d.capital(u).replace(c.improper, function(v, b, O, R) {
          return O > 0 && O < R.lastIndexOf(" ") ? s.low.call(v) : v;
        });
      },
      sentence: function(u, v, b) {
        return u = d.lower(u).replace(c.sentence, function(O, R, T) {
          return R + s.up.call(T);
        }), v && v.forEach(function(O) {
          u = u.replace(new RegExp("\\b" + d.lower(O) + "\\b", "g"), s.cap);
        }), b && b.forEach(function(O) {
          u = u.replace(new RegExp("(\\b" + d.lower(O) + "\\. +)(\\w)"), function(R, T, C) {
            return T + s.low.call(C);
          });
        }), u;
      }
    };
    f.squish = f.pascal, d.default = d;
    for (var h in f)
      d.type(h, f[h]);
    var S = typeof S == "function" ? S : function() {
    };
    S(e.exports ? e.exports = d : this.Case = d);
  }).call(Nr);
})(ir);
var hn = ir.exports;
function ar(e) {
  return hn.camel(pn(e));
}
const $t = (e, t, n, r, i) => !(!r.current || e.droppableId !== i || e.draggingId === t.id.value || n.some((c) => e.draggingId === c.id.value)), yn = (e, t, n) => {
  if (!n.current)
    return null;
  if (t.type.value === "slot-content" && Array.isArray(t.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const r = t.type.value === "component" ? !1 : Array.isArray(t.children.value), i = n.current.getBoundingClientRect(), a = r ? 5 : i.height / 2, l = e.x - i.x, c = e.y - i.y, s = c >= 0 && c <= a, d = c >= i.height - a && c <= i.height, f = c >= a && c <= i.height - a, h = l >= 0 && l <= a, S = l >= i.width - a && l <= i.width, u = l >= a && l <= i.width - a;
  let v = !1, b = !1, O = !1, R = !1;
  if (r) {
    const T = d || S || s || h;
    v = u && f && !T, b = u && f && !T, O = d || S, R = s || h;
  } else
    O = (d || S) && !s, R = (s || h) && !d;
  return { isOverCurrentStart: v, isOverCurrentEnd: b, isOverEnd: O, isOverStart: R };
}, gn = (e, t, n) => {
  if (!n.current)
    return null;
  const r = n.current.getBoundingClientRect();
  if (t.type.value === "slot-content" && Array.isArray(t.children.value))
    return {
      isHorizontal: !0,
      left: r.left,
      width: r.width,
      height: r.height,
      top: r.top + r.height / 2
    };
  const i = t.type.value === "component" ? !1 : Array.isArray(t.children.value), a = i ? 5 : r.height / 2, l = e.x - r.x, c = e.y - r.y, s = c >= r.height - a && c <= r.height, d = c >= a && c <= r.height - a, f = l >= 0 && l <= a, h = l >= r.width - a && l <= r.width, S = l >= a && l <= r.width - a;
  let u = !0, v = r.top, b = r.left, O = r.width, R = r.height;
  return s && (f || h || S) ? v = r.top + r.height : d && f ? u = !1 : d && h ? (b = r.left + r.width, u = !1) : S && d && (v = r.top + (i ? r.height / 2 : r.height)), {
    top: v,
    isHorizontal: u,
    left: b,
    width: O,
    height: R
  };
}, $e = () => Yr(), _e = () => {
  const e = Ge(rr), t = Z((a) => {
    e.onSelect(a);
  }, [e.id]), n = Z((a, l, c) => {
    ce(e.getPosition, () => c), ce(e.parents, l), ce(e.element, a);
  }, [e.getPosition]), r = Z((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Z((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    select: t,
    selectedId: e.id,
    selectedElement: e.element,
    selectedElementParents: e.parents,
    updateSelectBar: n,
    updateSelectBarScroll: r,
    updateSelectBarPlaygroundSize: i,
    selectBarGetPosition: e.getPosition,
    selectBarPlaygroundSize: e.playgroundSize,
    selectBarDocumentVerticalScroll: e.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, bn = Je(({ children: e, zIndex: t = 0, top: n = -1e3, left: r = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const c = te(null), s = he(() => {
    if (!c.current || r + c.current.getBoundingClientRect().width <= c.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = r + c.current.getBoundingClientRect().width;
    return c.current.ownerDocument.documentElement.clientWidth - d;
  }, [r]);
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      "data-select": !0,
      style: {
        top: n,
        left: r,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + t,
        borderColor: l,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ _.jsx(
        "span",
        {
          ref: c,
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
}), mn = Je(() => {
  const e = te(null), { onDragStart: t, onDragEnd: n, onDuplicate: r, onRemove: i } = Ee(), { hideInsertBar: a } = je(), {
    select: l,
    selectedId: c,
    selectedElement: s,
    selectBarGetPosition: d,
    selectedElementParents: f,
    selectBarDocumentVerticalScroll: h,
    selectBarDocumentHorizontalScroll: S
  } = _e(), u = Q(f), v = Q(s), b = Q(c), O = Se(({ get: F }) => v ? F(v.name) : "", [v]), { width: R, height: T, top: C, left: m } = Se(({ get: F }) => {
    const fe = F(S), ue = F(h), k = F(d);
    return k ? {
      width: k().width,
      height: k().height,
      top: k().top - ue,
      left: k().left - fe
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [S, h, d]), p = Z(() => {
    const F = u == null ? void 0 : u.slice(-1).at(0);
    F && l(F.id.value);
  }, [l, u]), I = Z(() => {
    v && i(v);
  }, [i, v]), Y = Z(() => {
    v && r(v);
  }, [r, v]), { preview: B, isDragging: X } = Ke({
    element: e,
    id: b || "default",
    start: () => {
      t();
    },
    end: () => {
      a(), n();
    },
    canDrag: !!v && Array.isArray(u),
    data: {
      element: v,
      parents: u
    }
  }, [b, v, u, a, t, n]);
  return me(() => {
    B(
      () => Ze(O.toLocaleUpperCase()),
      (F) => F.remove()
    );
  }, [B, O]), b ? /* @__PURE__ */ _.jsx(
    bn,
    {
      zIndex: 1,
      top: C - 1,
      width: R,
      height: T,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ _.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        O,
        !X && /* @__PURE__ */ _.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          u && u.length > 0 && /* @__PURE__ */ _.jsx(sn, { title: "Select parent", onClick: p, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx(dn, { title: "Remove element", onClick: I, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx(ln, { title: "Duplicate element and children", onClick: Y, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ _.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ _.jsx(fn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  ) : null;
}), cr = Ne({}), xn = ({ children: e, id: t, onHover: n }) => {
  const r = te({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    element: ae(void 0),
    onHover: n,
    id: t
  });
  return me(() => {
    r.current.id = t;
  }, [t]), me(() => {
    r.current.onHover = n;
  }, [n]), /* @__PURE__ */ _.jsx(cr.Provider, { value: r.current, children: e });
}, Ce = () => {
  const e = Ge(cr), t = Z((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), n = Z((a, l) => {
    ce(e.getPosition, () => l), ce(e.element, a);
  }, [e.getPosition]), r = Z((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Z((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    hover: t,
    hoveredId: e.id,
    hoveredElement: e.element,
    updateHoverBar: n,
    updateHoverBarScroll: r,
    updateHoverBarPlaygroundSize: i,
    hoverBarGetPosition: e.getPosition,
    hoverBarPlaygroundSize: e.playgroundSize,
    hoverBarDocumentVerticalScroll: e.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, wn = Je(({ children: e, zIndex: t = 0, top: n = -1e3, left: r = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const c = te(null), s = he(() => {
    if (!c.current || r + c.current.getBoundingClientRect().width <= c.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = r + c.current.getBoundingClientRect().width;
    return c.current.ownerDocument.documentElement.clientWidth - d;
  }, [r]);
  return /* @__PURE__ */ _.jsx(
    "div",
    {
      "data-hover": !0,
      style: {
        top: n,
        left: r,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + t,
        borderColor: l,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ _.jsx(
        "span",
        {
          ref: c,
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
}), Sn = Je(() => {
  const { selectedId: e } = _e(), {
    hoveredId: t,
    hoveredElement: n,
    hoverBarGetPosition: r,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: a
  } = Ce(), l = Q(a), c = Q(i), s = Q(r), d = Q(n), f = Q(e), h = Q(t), S = Se(({ get: R }) => d ? R(d.name) : "", [d]), { width: u, height: v, top: b, left: O } = he(() => s ? {
    width: s().width,
    height: s().height,
    top: s().top - c,
    left: s().left - l
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [l, c, s]);
  return !h || h === f ? null : /* @__PURE__ */ _.jsx(
    wn,
    {
      zIndex: 1,
      top: b - 1,
      width: u,
      left: O - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ _.jsx("div", { children: S })
    }
  );
});
var bt = {}, He = {}, pt = { exports: {} }, Ue = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function On() {
  if (Ht)
    return N;
  Ht = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function C(p) {
    if (typeof p == "object" && p !== null) {
      var I = p.$$typeof;
      switch (I) {
        case t:
          switch (p = p.type, p) {
            case s:
            case d:
            case r:
            case a:
            case i:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case f:
                case v:
                case u:
                case l:
                  return p;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function m(p) {
    return C(p) === d;
  }
  return N.AsyncMode = s, N.ConcurrentMode = d, N.ContextConsumer = c, N.ContextProvider = l, N.Element = t, N.ForwardRef = f, N.Fragment = r, N.Lazy = v, N.Memo = u, N.Portal = n, N.Profiler = a, N.StrictMode = i, N.Suspense = h, N.isAsyncMode = function(p) {
    return m(p) || C(p) === s;
  }, N.isConcurrentMode = m, N.isContextConsumer = function(p) {
    return C(p) === c;
  }, N.isContextProvider = function(p) {
    return C(p) === l;
  }, N.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, N.isForwardRef = function(p) {
    return C(p) === f;
  }, N.isFragment = function(p) {
    return C(p) === r;
  }, N.isLazy = function(p) {
    return C(p) === v;
  }, N.isMemo = function(p) {
    return C(p) === u;
  }, N.isPortal = function(p) {
    return C(p) === n;
  }, N.isProfiler = function(p) {
    return C(p) === a;
  }, N.isStrictMode = function(p) {
    return C(p) === i;
  }, N.isSuspense = function(p) {
    return C(p) === h;
  }, N.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === d || p === a || p === i || p === h || p === S || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === u || p.$$typeof === l || p.$$typeof === c || p.$$typeof === f || p.$$typeof === O || p.$$typeof === R || p.$$typeof === T || p.$$typeof === b);
  }, N.typeOf = C, N;
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
var Wt;
function En() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, O = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function C(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === r || x === d || x === a || x === i || x === h || x === S || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === u || x.$$typeof === l || x.$$typeof === c || x.$$typeof === f || x.$$typeof === O || x.$$typeof === R || x.$$typeof === T || x.$$typeof === b);
    }
    function m(x) {
      if (typeof x == "object" && x !== null) {
        var ye = x.$$typeof;
        switch (ye) {
          case t:
            var Ie = x.type;
            switch (Ie) {
              case s:
              case d:
              case r:
              case a:
              case i:
              case h:
                return Ie;
              default:
                var Re = Ie && Ie.$$typeof;
                switch (Re) {
                  case c:
                  case f:
                  case v:
                  case u:
                  case l:
                    return Re;
                  default:
                    return ye;
                }
            }
          case n:
            return ye;
        }
      }
    }
    var p = s, I = d, Y = c, B = l, X = t, F = f, fe = r, ue = v, k = u, J = n, ne = a, oe = i, pe = h, se = !1;
    function ie(x) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(x) || m(x) === s;
    }
    function y(x) {
      return m(x) === d;
    }
    function E(x) {
      return m(x) === c;
    }
    function P(x) {
      return m(x) === l;
    }
    function M(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function D(x) {
      return m(x) === f;
    }
    function H(x) {
      return m(x) === r;
    }
    function A(x) {
      return m(x) === v;
    }
    function L(x) {
      return m(x) === u;
    }
    function z(x) {
      return m(x) === n;
    }
    function U(x) {
      return m(x) === a;
    }
    function V(x) {
      return m(x) === i;
    }
    function le(x) {
      return m(x) === h;
    }
    G.AsyncMode = p, G.ConcurrentMode = I, G.ContextConsumer = Y, G.ContextProvider = B, G.Element = X, G.ForwardRef = F, G.Fragment = fe, G.Lazy = ue, G.Memo = k, G.Portal = J, G.Profiler = ne, G.StrictMode = oe, G.Suspense = pe, G.isAsyncMode = ie, G.isConcurrentMode = y, G.isContextConsumer = E, G.isContextProvider = P, G.isElement = M, G.isForwardRef = D, G.isFragment = H, G.isLazy = A, G.isMemo = L, G.isPortal = z, G.isProfiler = U, G.isStrictMode = V, G.isSuspense = le, G.isValidElementType = C, G.typeOf = m;
  }()), G;
}
var Ut;
function ur() {
  return Ut || (Ut = 1, process.env.NODE_ENV === "production" ? Ue.exports = On() : Ue.exports = En()), Ue.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var at, Yt;
function _n() {
  if (Yt)
    return at;
  Yt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
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
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var s = Object.getOwnPropertyNames(l).map(function(f) {
        return l[f];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return at = i() ? Object.assign : function(a, l) {
    for (var c, s = r(a), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var h in c)
        t.call(c, h) && (s[h] = c[h]);
      if (e) {
        d = e(c);
        for (var S = 0; S < d.length; S++)
          n.call(c, d[S]) && (s[d[S]] = c[d[S]]);
      }
    }
    return s;
  }, at;
}
var ct, qt;
function mt() {
  if (qt)
    return ct;
  qt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ct = e, ct;
}
var ut, Nt;
function sr() {
  return Nt || (Nt = 1, ut = Function.call.bind(Object.prototype.hasOwnProperty)), ut;
}
var st, Gt;
function Cn() {
  if (Gt)
    return st;
  Gt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = mt(), n = {}, r = sr();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, c, s, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (r(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var S = Error(
                (s || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            h = a[f](l, f, s, c, null, t);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (s || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var u = d ? d() : "";
            e(
              "Failed " + c + " type: " + h.message + (u ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, st = i, st;
}
var lt, Jt;
function Rn() {
  if (Jt)
    return lt;
  Jt = 1;
  var e = ur(), t = _n(), n = mt(), r = sr(), i = Cn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var s = "Warning: " + c;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return lt = function(c, s) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(y) {
      var E = y && (d && y[d] || y[f]);
      if (typeof E == "function")
        return E;
    }
    var S = "<<anonymous>>", u = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: C,
      element: m(),
      elementType: p(),
      instanceOf: I,
      node: F(),
      objectOf: B,
      oneOf: Y,
      oneOfType: X,
      shape: ue,
      exact: k
    };
    function v(y, E) {
      return y === E ? y !== 0 || 1 / y === 1 / E : y !== y && E !== E;
    }
    function b(y, E) {
      this.message = y, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function O(y) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, P = 0;
      function M(H, A, L, z, U, V, le) {
        if (z = z || S, V = V || L, le !== n) {
          if (s) {
            var x = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw x.name = "Invariant Violation", x;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = z + ":" + L;
            !E[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[ye] = !0, P++);
          }
        }
        return A[L] == null ? H ? A[L] === null ? new b("The " + U + " `" + V + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new b("The " + U + " `" + V + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : y(A, L, z, U, V);
      }
      var D = M.bind(null, !1);
      return D.isRequired = M.bind(null, !0), D;
    }
    function R(y) {
      function E(P, M, D, H, A, L) {
        var z = P[M], U = oe(z);
        if (U !== y) {
          var V = pe(z);
          return new b(
            "Invalid " + H + " `" + A + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return O(E);
    }
    function T() {
      return O(l);
    }
    function C(y) {
      function E(P, M, D, H, A) {
        if (typeof y != "function")
          return new b("Property `" + A + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var L = P[M];
        if (!Array.isArray(L)) {
          var z = oe(L);
          return new b("Invalid " + H + " `" + A + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected an array."));
        }
        for (var U = 0; U < L.length; U++) {
          var V = y(L, U, D, H, A + "[" + U + "]", n);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return O(E);
    }
    function m() {
      function y(E, P, M, D, H) {
        var A = E[P];
        if (!c(A)) {
          var L = oe(A);
          return new b("Invalid " + D + " `" + H + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return O(y);
    }
    function p() {
      function y(E, P, M, D, H) {
        var A = E[P];
        if (!e.isValidElementType(A)) {
          var L = oe(A);
          return new b("Invalid " + D + " `" + H + "` of type " + ("`" + L + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return O(y);
    }
    function I(y) {
      function E(P, M, D, H, A) {
        if (!(P[M] instanceof y)) {
          var L = y.name || S, z = ie(P[M]);
          return new b("Invalid " + H + " `" + A + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return O(E);
    }
    function Y(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function E(P, M, D, H, A) {
        for (var L = P[M], z = 0; z < y.length; z++)
          if (v(L, y[z]))
            return null;
        var U = JSON.stringify(y, function(le, x) {
          var ye = pe(x);
          return ye === "symbol" ? String(x) : x;
        });
        return new b("Invalid " + H + " `" + A + "` of value `" + String(L) + "` " + ("supplied to `" + D + "`, expected one of " + U + "."));
      }
      return O(E);
    }
    function B(y) {
      function E(P, M, D, H, A) {
        if (typeof y != "function")
          return new b("Property `" + A + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var L = P[M], z = oe(L);
        if (z !== "object")
          return new b("Invalid " + H + " `" + A + "` of type " + ("`" + z + "` supplied to `" + D + "`, expected an object."));
        for (var U in L)
          if (r(L, U)) {
            var V = y(L, U, D, H, A + "." + U, n);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return O(E);
    }
    function X(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var E = 0; E < y.length; E++) {
        var P = y[E];
        if (typeof P != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(P) + " at index " + E + "."
          ), l;
      }
      function M(D, H, A, L, z) {
        for (var U = [], V = 0; V < y.length; V++) {
          var le = y[V], x = le(D, H, A, L, z, n);
          if (x == null)
            return null;
          x.data && r(x.data, "expectedType") && U.push(x.data.expectedType);
        }
        var ye = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + L + " `" + z + "` supplied to " + ("`" + A + "`" + ye + "."));
      }
      return O(M);
    }
    function F() {
      function y(E, P, M, D, H) {
        return J(E[P]) ? null : new b("Invalid " + D + " `" + H + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return O(y);
    }
    function fe(y, E, P, M, D) {
      return new b(
        (y || "React class") + ": " + E + " type `" + P + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function ue(y) {
      function E(P, M, D, H, A) {
        var L = P[M], z = oe(L);
        if (z !== "object")
          return new b("Invalid " + H + " `" + A + "` of type `" + z + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var U in y) {
          var V = y[U];
          if (typeof V != "function")
            return fe(D, H, A, U, pe(V));
          var le = V(L, U, D, H, A + "." + U, n);
          if (le)
            return le;
        }
        return null;
      }
      return O(E);
    }
    function k(y) {
      function E(P, M, D, H, A) {
        var L = P[M], z = oe(L);
        if (z !== "object")
          return new b("Invalid " + H + " `" + A + "` of type `" + z + "` " + ("supplied to `" + D + "`, expected `object`."));
        var U = t({}, P[M], y);
        for (var V in U) {
          var le = y[V];
          if (r(y, V) && typeof le != "function")
            return fe(D, H, A, V, pe(le));
          if (!le)
            return new b(
              "Invalid " + H + " `" + A + "` key `" + V + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(P[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var x = le(L, V, D, H, A + "." + V, n);
          if (x)
            return x;
        }
        return null;
      }
      return O(E);
    }
    function J(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(J);
          if (y === null || c(y))
            return !0;
          var E = h(y);
          if (E) {
            var P = E.call(y), M;
            if (E !== y.entries) {
              for (; !(M = P.next()).done; )
                if (!J(M.value))
                  return !1;
            } else
              for (; !(M = P.next()).done; ) {
                var D = M.value;
                if (D && !J(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(y, E) {
      return y === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function oe(y) {
      var E = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : ne(E, y) ? "symbol" : E;
    }
    function pe(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var E = oe(y);
      if (E === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function se(y) {
      var E = pe(y);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function ie(y) {
      return !y.constructor || !y.constructor.name ? S : y.constructor.name;
    }
    return u.checkPropTypes = i, u.resetWarningCache = i.resetWarningCache, u.PropTypes = u, u;
  }, lt;
}
var ft, Kt;
function Tn() {
  if (Kt)
    return ft;
  Kt = 1;
  var e = mt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ft = function() {
    function r(l, c, s, d, f, h) {
      if (h !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ft;
}
if (process.env.NODE_ENV !== "production") {
  var Pn = ur(), jn = !0;
  pt.exports = Rn()(Pn.isElement, jn);
} else
  pt.exports = Tn()();
var lr = pt.exports, xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.FrameContextConsumer = xe.FrameContextProvider = xe.useFrame = xe.FrameContext = void 0;
var Dn = be, fr = In(Dn);
function In(e) {
  return e && e.__esModule ? e : { default: e };
}
var dr = void 0, vr = void 0;
typeof document < "u" && (dr = document);
typeof window < "u" && (vr = window);
var xt = xe.FrameContext = fr.default.createContext({ document: dr, window: vr });
xe.useFrame = function() {
  return fr.default.useContext(xt);
};
var Mn = xt.Provider, An = xt.Consumer;
xe.FrameContextProvider = Mn;
xe.FrameContextConsumer = An;
var wt = {};
Object.defineProperty(wt, "__esModule", {
  value: !0
});
var Bn = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), ht = be;
pr(ht);
var kn = lr, dt = pr(kn);
function pr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fn(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function zn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var hr = function(e) {
  zn(t, e);
  function t() {
    return Ln(this, t), Fn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
  }
  return Bn(t, [{
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
      return ht.Children.only(this.props.children);
    }
  }]), t;
}(ht.Component);
hr.propTypes = {
  children: dt.default.element.isRequired,
  contentDidMount: dt.default.func.isRequired,
  contentDidUpdate: dt.default.func.isRequired
};
wt.default = hr;
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.Frame = void 0;
var yt = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
  }
  return e;
}, Vn = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  };
}(), yr = be, Pe = Qe(yr), $n = qr, Xt = Qe($n), Hn = lr, we = Qe(Hn), Wn = xe, Un = wt, Yn = Qe(Un);
function Qe(e) {
  return e && e.__esModule ? e : { default: e };
}
function qn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nn(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Gn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var St = He.Frame = function(e) {
  Gn(t, e);
  function t(n, r) {
    qn(this, t);
    var i = Nn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
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
    }, i._isMounted = !1, i.nodeRef = Pe.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return Vn(t, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
      var r = this.getDoc();
      r && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad);
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
      var r = this.getDoc();
      return this.props.mountTarget ? r.querySelector(this.props.mountTarget) : r.body.children[0];
    }
    // In certain situations on a cold cache DOMContentLoaded never gets called
    // fallback to an interval to check if that's the case
  }, {
    key: "renderFrameContents",
    value: function() {
      if (!this._isMounted)
        return null;
      var r = this.getDoc();
      if (!r)
        return null;
      var i = this.props.contentDidMount, a = this.props.contentDidUpdate, l = r.defaultView || r.parentView, c = Pe.default.createElement(
        Yn.default,
        {
          contentDidMount: i,
          contentDidUpdate: a
        },
        Pe.default.createElement(
          Wn.FrameContextProvider,
          { value: { document: r, window: l } },
          Pe.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), s = this.getMountTarget();
      return s ? [Xt.default.createPortal(this.props.head, this.getDoc().head), Xt.default.createPortal(c, s)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var r = yt({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete r.head, delete r.initialContent, delete r.mountTarget, delete r.contentDidMount, delete r.contentDidUpdate, delete r.forwardedRef, Pe.default.createElement(
        "iframe",
        yt({}, r, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), t;
}(yr.Component);
St.propTypes = {
  style: we.default.object,
  // eslint-disable-line
  head: we.default.node,
  initialContent: we.default.string,
  mountTarget: we.default.string,
  contentDidMount: we.default.func,
  contentDidUpdate: we.default.func,
  children: we.default.oneOfType([we.default.element, we.default.arrayOf(we.default.element)])
};
St.defaultProps = {
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
He.default = Pe.default.forwardRef(function(e, t) {
  return Pe.default.createElement(St, yt({}, e, { forwardedRef: t }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var t = He;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return r(t).default;
    }
  });
  var n = xe;
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
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
})(bt);
const Jn = /* @__PURE__ */ Gr(bt), Kn = ({ children: e, onScroll: t, onRef: n }) => {
  const { document: r } = bt.useFrame();
  return me(() => {
    r && n(r);
  }, [n, r]), me(() => {
    r && (r.onscroll = (i) => t(i.target.documentElement.scrollTop, i.target.documentElement.scrollLeft));
  }, [r, t]), e;
}, Xn = ({ children: e, styles: t, draggingHover: n, resetBody: r }) => {
  const i = Q(
    he(() => gt(({ get: l }) => l(t).map((c) => ({
      id: l(c.id),
      content: l(c.content)
    }))), [t])
  ), a = he(() => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    i.map((l) => Zt("style", { key: l.id }, l.content)),
    /* @__PURE__ */ _.jsx("style", { children: [
      "* { outline: none; }",
      r ? "body { margin:0!important; }" : "",
      `html${n ? "" : ":hover"} body .frame-content * {`,
      "  outline: thin solid #80808050;",
      "}",
      '[data-hover="true"] *, [data-select="true"] * {',
      "  outline: none!important;",
      "}"
    ].join(`
`) })
  ] }), [i, r]);
  return /* @__PURE__ */ _.jsx(
    Jn,
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
}, Zn = (e, t) => Se(({ get: n }) => t.map((r) => n(r.id)).includes(n(e.id)), [e, t]), Ot = (e, t) => Se(({ get: r }) => {
  const i = [...t].reverse();
  let a;
  for (let l = 0; l < i.length; l++) {
    const c = i[l];
    if (r(c.type) === "slot-content" && (a = !1), r(c.type) === "component")
      if (a === !1)
        a = void 0;
      else
        return !0;
  }
  return !!a;
}, [t, e]), Qn = ({ element: e }) => {
  const t = Q(e.name);
  return /* @__PURE__ */ _.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ _.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: t }),
    '" introduces a infinite loop.'
  ] });
}, Oe = ({ value: e, matchWidthValue: t, effect: n }, r) => {
  const i = Se(({ get: a }) => {
    if (!e)
      return !1;
    const l = a(e);
    if (!t)
      return !1;
    const c = a(t);
    return l === c;
  }, [...r]);
  me(() => {
    i && n();
  }, [i]);
}, eo = ({ element: e, onHoverBar: t, onSelectBar: n, onMouseLeave: r, onMouseOver: i, onSelect: a }) => {
  const l = te(null), { selectedId: c } = _e(), { hoveredId: s } = Ce(), d = Q(e.name);
  return Oe({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, l.current)
  }, [s, e]), Oe({
    value: c,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => n(e, l.current)
  }, [c, e]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: r,
      onClick: (f) => a(f, e),
      onMouseOver: (f) => i(f, e, l.current),
      style: {
        outline: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        fontFamily: "sans-serif",
        border: "2px solid orange"
      },
      children: [
        'This component "',
        /* @__PURE__ */ _.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: d }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, to = ({ element: e, parents: t, onMouseOver: n, onMouseLeave: r, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: c, onHoverBar: s, onSelectBar: d, onDoubleClick: f }) => {
  const h = te(null), { onDragStart: S, onDragEnd: u, components: v } = Ee(), { hideInsertBar: b } = je(), { selectedId: O } = _e(), { hoveredId: R } = Ce(), T = Q(e.id), C = Se(({ get: B }) => {
    const X = B(v).find((F) => B(F.id) === B(e.referenceComponentId));
    return X ? B(X.content) : [];
  }, [v, e]);
  Oe({
    value: R,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, h.current)
  }, [R, e]), Oe({
    value: O,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, h.current)
  }, [O, e]);
  const m = he(() => !C || C.length === 0 ? null : C.map((B) => /* @__PURE__ */ _.jsx(
    De,
    {
      element: B,
      parents: [...t, e]
    },
    B.id.value
  )), [C, t, e]), { isDragging: p, preview: I } = Ke({
    id: T,
    element: h,
    data: { element: e, parents: t },
    start: () => {
      S();
    },
    end: () => {
      b(), u();
    }
  }, [T, e, t, b, S, u]);
  me(() => {
    I(
      () => Ze("name dynamic here"),
      (B) => B.remove()
    );
  }, [I]);
  const Y = te({ id: $e() });
  return Ve({
    element: h,
    id: Y.current.id,
    drop: (B, X) => c(B, X, e, t, h, Y.current.id),
    hover: (B, X) => l(B, X, e, t, h, Y.current.id),
    leave: (B, X) => a(B, X, e, t, h, Y.current.id)
  }, [e, t, c, l, a]), /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: h,
      onMouseLeave: r,
      onClick: (B) => i(B, e),
      onDoubleClick: (B) => f(B, e),
      onMouseOver: (B) => n(B, e, h.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: p ? 0.5 : void 0 },
      children: m
    }
  );
}, ro = ({ element: e, parents: t }) => {
  const { components: n } = Ee(), r = Se(({ get: i }) => {
    const a = i(n).find((l) => i(l.id) === i(e.referenceComponentId));
    return a ? i(a.content) : [];
  }, [n, e]);
  return /* @__PURE__ */ _.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: r.map((i) => /* @__PURE__ */ _.jsx(
    De,
    {
      element: i,
      parents: [...t, e]
    },
    i.id.value
  )) });
}, no = ({ element: e, parents: t, ...n }) => {
  const r = Zn(e, t), i = Ot(e, t);
  return r ? i ? /* @__PURE__ */ _.jsx(Qn, { element: e }) : /* @__PURE__ */ _.jsx(
    eo,
    {
      element: e,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar,
      onSelectBar: n.onSelectBar
    }
  ) : i ? /* @__PURE__ */ _.jsx(
    ro,
    {
      element: e,
      parents: t
    }
  ) : /* @__PURE__ */ _.jsx(
    to,
    {
      element: e,
      parents: t,
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
}, gr = (e) => {
  const t = he(() => gt(({ get: n }) => {
    const r = n(e);
    if (!r)
      return {};
    const i = {};
    return r.forEach((a) => {
      const l = n(a.name), c = n(a.value);
      l && (i[ar(l)] = c);
    }), i;
  }), [e]);
  return Q(t);
}, br = (e) => {
  const t = he(() => gt({
    get({ get: n }) {
      const r = n(e);
      if (!r)
        return [{}, {}];
      const i = {}, a = {};
      return r.forEach((l) => {
        const c = n(l.name);
        if (c === void 0 || c === "hidden" || c === "style")
          return;
        const s = n(l.value), d = ar(c);
        switch (d) {
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
            i[d] = s;
            break;
        }
      }), [i, a];
    }
  }), [e]);
  return Q(t);
}, mr = Wr(({ tag: e, ...t }, n) => Zt(e, { ref: n, ...t })), oo = ({ element: e, parents: t, onMouseOver: n, onMouseLeave: r, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: c, onHoverBar: s, onSelectBar: d }) => {
  const f = te(null), [h, S] = Qt(!1), [u, v] = br(e.attributes), b = gr(e.style), O = Q(e.children), R = Q(e.tag), T = Q(e.id), { onDragStart: C, onDragEnd: m } = Ee(), { hideInsertBar: p } = je(), { selectedId: I } = _e(), { hoveredId: Y } = Ce();
  Oe({
    value: Y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, f.current)
  }, [Y, e]), Oe({
    value: I,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [I, e]), me(() => {
    S((J) => Y.value === T === J ? J : !J);
    const k = Y.subscribe((J) => {
      S((ne) => J === T === ne ? ne : !ne);
    });
    return () => k.unsubscribe();
  }, [T, Y]);
  const B = he(() => (!O || O.length === 0) && Object.keys(v).includes("text") ? v.text : !O || O.length === 0 ? null : O.map((k) => /* @__PURE__ */ _.jsx(
    De,
    {
      element: k,
      parents: [...t, e]
    },
    k.id.value
  )), [O, t, e, v.text]), X = he(() => O !== void 0, [O]), { isDragging: F, preview: fe } = Ke({
    id: T,
    element: f,
    data: { element: e, parents: t },
    start: () => {
      C();
    },
    end: () => {
      p(), m();
    }
  }, [T, e, t, p, C, m]);
  me(() => {
    fe(
      () => Ze("name dynamic here"),
      (k) => k.remove()
    );
  }, [fe]);
  const ue = te({ id: $e() });
  return Ve({
    element: f,
    id: ue.current.id,
    drop: (k, J) => c(k, J, e, t, f, ue.current.id),
    hover: (k, J) => l(k, J, e, t, f, ue.current.id),
    leave: (k, J) => a(k, J, e, t, f, ue.current.id)
  }, [e, t, c, l, a]), /* @__PURE__ */ _.jsx(
    mr,
    {
      readOnly: !0,
      tag: R,
      ref: f,
      children: B,
      onMouseLeave: r,
      onClick: (k) => i(k, e),
      onMouseOver: (k) => n(k, e, f.current),
      ...u !== void 0 ? { ...u, ...h ? { disabled: !1 } : {} } : {},
      style: {
        ...b,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: F ? 0.5 : typeof b.opacity == "number" ? Number(b.opacity) : void 0,
        minWidth: B === null && X ? 40 : typeof b.minWidth == "number" ? Number(b.minWidth) : void 0,
        minHeight: B === null && X ? 40 : typeof b.minHeight == "number" ? Number(b.minHeight) : void 0
      }
    }
  );
}, io = ({ element: e, parents: t }) => {
  const [n, r] = br(e.attributes), i = gr(e.style), a = Q(e.children), l = Q(e.tag), c = he(() => (!a || a.length === 0) && Object.keys(r).includes("text") ? r.text : !a || a.length === 0 ? null : a.map((s) => /* @__PURE__ */ _.jsx(
    De,
    {
      element: s,
      parents: [...t, e]
    },
    s.id.value
  )), [a, t, e, r.text]);
  return /* @__PURE__ */ _.jsx(
    mr,
    {
      tag: l,
      children: c,
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
}, ao = ({ element: e, parents: t, ...n }) => Ot(e, t) ? /* @__PURE__ */ _.jsx(
  io,
  {
    element: e,
    parents: t
  }
) : /* @__PURE__ */ _.jsx(
  oo,
  {
    element: e,
    parents: t,
    onDrop: n.onDrop,
    onDragOver: n.onDragOver,
    onDragLeave: n.onDragLeave,
    onSelect: n.onSelect,
    onMouseOver: n.onMouseOver,
    onMouseLeave: n.onMouseLeave,
    onHoverBar: n.onHoverBar,
    onSelectBar: n.onSelectBar
  }
), co = (e, t) => {
  const { components: n } = Ee();
  return Se(({ get: r }) => {
    const i = r(n), a = [...t].reverse(), l = a.findIndex((d) => {
      var S;
      if (r(d.type) !== "component")
        return !1;
      const f = d;
      return r(e.componentId) === r(f.referenceComponentId) ? (S = r(f.slots)) == null ? void 0 : S.some((u) => r(u.referenceSlotId) === r(e.id)) : !1;
    });
    return !a.at(l) || a.slice(l + 1).reduce((d, f) => d !== void 0 ? d : r(f.type) === "slot-content" ? !1 : r(f.type) === "component" ? !0 : d, void 0) ? !1 : i.some((d) => r(d.id) === r(e.componentId));
  }, [t, e, n]);
}, xr = (e, t) => {
  const { onAddSlotContent: n } = Ee();
  return Se(({ get: r }) => {
    var l;
    const i = [...t].reverse().filter((c) => r(c.type) === "component").find((c) => r(c.referenceComponentId) === r(e.componentId));
    if (!i)
      return [];
    const a = (l = r(i.slots)) == null ? void 0 : l.find((c) => r(c.referenceSlotId) === r(e.id));
    return a ? [r(a.children), a] : (setTimeout(() => n(e, i), 0), []);
  }, [t, e, n]);
}, uo = ({ element: e, parents: t, onMouseOver: n, onMouseLeave: r, onDragLeave: i, onDragOver: a, onDrop: l, onHoverBar: c }) => {
  const s = te(null), [d = [], f] = xr(e, t), { hoveredId: h } = Ce();
  Oe({
    value: h,
    matchWidthValue: f == null ? void 0 : f.id,
    effect() {
      f && c(e, s.current);
    }
  }, [h, f == null ? void 0 : f.id, e]);
  const S = te({ id: $e() });
  return Ve({
    element: s,
    id: S.current.id,
    drop: (u, v) => f ? l(u, v, f, t, s, S.current.id) : void 0,
    hover: (u, v) => f ? a(u, v, f, t, s, S.current.id) : void 0,
    leave: (u, v) => f ? i(u, v, f, t, s, S.current.id) : void 0
  }, [f, t, l, a, i]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: r,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (u) => f ? n(u, f, s.current) : void 0,
      children: [
        f && d.length > 0 && d.map((u) => /* @__PURE__ */ _.jsx(
          De,
          {
            element: u,
            parents: [...t, f]
          },
          u.id.value
        )),
        d.length === 0 && /* @__PURE__ */ _.jsx(
          "div",
          {
            style: {
              opacity: 0.5,
              display: "flex",
              minWidth: "40px",
              minHeight: "40px",
              alignItems: "center",
              pointerEvents: "none",
              justifyContent: "center",
              fontFamily: "sans-serif",
              backgroundColor: "#80808020"
            },
            children: "Drag and drop something here..."
          }
        )
      ]
    }
  );
}, so = ({ element: e, parents: t, onMouseOver: n, onMouseLeave: r, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: c, onHoverBar: s, onSelectBar: d }) => {
  const f = te(null), { onDragStart: h, onDragEnd: S } = Ee(), { hideInsertBar: u } = je(), { selectedId: v } = _e(), { hoveredId: b } = Ce(), O = Q(e.name), R = Q(e.id);
  Oe({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, f.current)
  }, [b, e]), Oe({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [v, e]);
  const { isDragging: T, preview: C } = Ke({
    id: R,
    element: f,
    data: { element: e, parents: t },
    start: () => {
      h();
    },
    end: () => {
      u(), S();
    }
  }, [R, e, t, u, h, S]);
  me(() => {
    C(
      () => Ze("name dynamic here"),
      (p) => p.remove()
    );
  }, [C]);
  const m = te({ id: $e() });
  return Ve({
    element: f,
    id: m.current.id,
    drop: (p, I) => c(p, I, e, t, f, m.current.id),
    hover: (p, I) => l(p, I, e, t, f, m.current.id),
    leave: (p, I) => a(p, I, e, t, f, m.current.id)
  }, [e, t, c, l, a]), /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: r,
      onClick: (p) => i(p, e),
      onMouseOver: (p) => n(p, e, f.current),
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
        O,
        '"'
      ]
    }
  );
}, lo = ({ element: e, parents: t }) => {
  const [n = [], r] = xr(e, t);
  return /* @__PURE__ */ _.jsx("div", { style: { outline: "none" }, children: r && n.map((i) => /* @__PURE__ */ _.jsx(
    De,
    {
      element: i,
      parents: [...t, r]
    },
    i.id.value
  )) });
}, fo = ({ element: e, parents: t, ...n }) => {
  const r = Ot(e, t);
  return co(e, t) ? /* @__PURE__ */ _.jsx(
    uo,
    {
      element: e,
      parents: t,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar
    }
  ) : r ? /* @__PURE__ */ _.jsx(
    lo,
    {
      element: e,
      parents: t
    }
  ) : /* @__PURE__ */ _.jsx(
    so,
    {
      element: e,
      parents: t,
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
}, De = ({ element: e, parents: t }) => {
  const n = Q(e.type), { showInsertBar: r, hideInsertBar: i } = je(), { select: a, updateSelectBar: l } = _e(), { hover: c, updateHoverBar: s } = Ce(), { onDrop: d, value: f } = Ee(), h = Z((C, m) => {
    C.stopPropagation(), C.preventDefault(), a(m.id.value);
  }, [a]), S = Z((C) => {
    C.stopPropagation(), C.preventDefault(), a(void 0), c(void 0);
  }, [a, c]), u = Z((C, m) => {
    C.stopPropagation(), c(m.id.value);
  }, [c]), v = Z((C) => {
    C.stopPropagation(), c(void 0);
  }, [c]), b = Z((C, m) => {
    s(C, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [s]), O = Z((C, m) => {
    l(C, t, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [l, t]), R = Z((C, m, p, I, Y, B) => {
    if (!$t(m, p, I, Y, B))
      return c(void 0);
    c(p.id.value);
    const F = gn(m, p, Y);
    if (!F)
      return i();
    r({
      isVisible: !0,
      top: F.top,
      left: F.left,
      width: F.width,
      height: F.height,
      isHorizontal: F.isHorizontal
    });
  }, [r, c, i]), T = Z((C, m, p, I, Y, B) => {
    var ue, k, J, ne, oe, pe;
    if (!$t(m, p, I, Y, B))
      return;
    const F = yn(m, p, Y);
    if (!F)
      return;
    const fe = F.isOverStart || F.isOverEnd;
    if (!(!fe && p.type.value === "component")) {
      if (Object.keys(C).includes("id")) {
        const se = C;
        if (fe) {
          const ie = I.slice(-1).at(0), y = ((ue = (ie ? ie.children : f).value) == null ? void 0 : ue.findIndex((E) => E.id.value === p.id.value)) ?? -1;
          d({
            element: se.id,
            from: { position: -1, element: null },
            to: {
              element: ie || "root",
              position: F.isOverStart ? y : y + 1
            }
          });
        } else {
          const ie = ((k = p.children.value) == null ? void 0 : k.length) || -1;
          d({
            element: se.id,
            from: { position: -1, element: null },
            to: {
              element: p,
              position: F.isOverStart ? ie : ie + 1
            }
          });
        }
      } else {
        const se = C, ie = (J = se.parents) == null ? void 0 : J.slice(-1).at(0), y = ie || "root";
        if (y !== "root" && (y.type.value === "component" || y.type.value === "slot"))
          return;
        const E = ((ne = (y === "root" ? f : y.children).value) == null ? void 0 : ne.findIndex((P) => P.id.value === se.element.id.value)) ?? -1;
        if (fe) {
          const P = I.slice(-1).at(0), M = ((oe = (P ? P.children : f).value) == null ? void 0 : oe.findIndex((D) => D.id.value === p.id.value)) ?? -1;
          d({
            element: se.element,
            from: {
              position: E,
              element: y
            },
            to: {
              element: P || "root",
              position: F.isOverStart ? M : M + 1
            }
          });
        } else {
          const P = ((pe = p.children.value) == null ? void 0 : pe.length) || -1;
          d({
            element: se.element,
            from: {
              position: E,
              element: y
            },
            to: {
              element: p,
              position: F.isOverStart ? P : P + 1
            }
          });
        }
        a(se.element.id.value);
      }
      i();
    }
  }, [a, d, i]);
  return n === "component" ? /* @__PURE__ */ _.jsx(
    no,
    {
      parents: t,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onDoubleClick: S,
      onSelect: h,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: O
    }
  ) : n === "slot" ? /* @__PURE__ */ _.jsx(
    fo,
    {
      parents: t,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: O
    }
  ) : /* @__PURE__ */ _.jsx(
    ao,
    {
      parents: t,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: O
    }
  );
}, vo = () => {
  const e = te({ id: $e() }), { value: t, styles: n, onDrop: r, onKeyDown: i } = Ee(), { updateSelectBarScroll: a, select: l } = _e(), { showInsertBar: c, hideInsertBar: s } = je(), { updateHoverBarScroll: d, hover: f } = Ce(), [h, S] = Qt(null), u = Q(t), v = Z((C, m) => {
    var p;
    if (s(), !!C)
      if (Object.keys(C).includes("id"))
        r({
          element: C.id,
          from: {
            position: -1,
            element: null
          },
          to: {
            element: "root",
            position: t.value.length
          }
        });
      else {
        const I = C, Y = vn(I.parents), B = Y || "root", X = ((p = Y == null ? void 0 : Y.children.value) == null ? void 0 : p.findIndex((F) => F.id.value === I.element.id.value)) ?? -1;
        r({
          element: I.element,
          from: {
            element: B,
            position: X
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), l(I.element.id.value);
      }
  }, [t, l, s]), b = Z((C, m) => {
    const p = h == null ? void 0 : h.lastElementChild;
    if (!p)
      return;
    const I = p.getBoundingClientRect();
    c({
      isVisible: !0,
      isHorizontal: !0,
      left: I.left,
      width: I.width,
      height: I.height,
      top: p ? I.top + I.height : I.top
    });
  }, [h == null ? void 0 : h.lastElementChild, c]), O = Z((C, m) => {
    a(C, m), d(C, m);
  }, [a, d]), [{ isDraggingOver: R, isDraggingOverCurrent: T }] = Ve({
    drop: v,
    hover: b,
    id: e.current.id,
    element: { current: h },
    leave: () => {
      s(), f(void 0);
    }
  }, [v, b, s]);
  return /* @__PURE__ */ _.jsx(
    Xn,
    {
      styles: n,
      resetBody: !0,
      draggingHover: R || T,
      children: /* @__PURE__ */ _.jsxs(Kn, { onRef: S, onScroll: O, onKeyDown: i, children: [
        /* @__PURE__ */ _.jsx(Qr, {}),
        /* @__PURE__ */ _.jsx(Sn, {}),
        /* @__PURE__ */ _.jsx(mn, {}),
        u.map((C) => /* @__PURE__ */ _.jsx(
          De,
          {
            parents: [],
            element: C
          },
          C.id.value
        )),
        u.length === 0 && /* @__PURE__ */ _.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ _.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
      ] })
    }
  );
}, mo = ({ onSelect: e, onHover: t, selectedId: n, hoveredId: r, ...i }) => /* @__PURE__ */ _.jsx(Ur, { children: /* @__PURE__ */ _.jsx(Xr, { ...i, children: /* @__PURE__ */ _.jsx(Zr, { children: /* @__PURE__ */ _.jsx(en, { id: n, onSelect: e, children: /* @__PURE__ */ _.jsx(xn, { id: r, onHover: t, children: /* @__PURE__ */ _.jsx(vo, {}) }) }) }) }) });
export {
  mo as UIEditor
};
//# sourceMappingURL=index.es.js.map

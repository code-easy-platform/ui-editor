import xe, { createContext as Ke, useContext as Je, useRef as oe, useMemo as pe, useCallback as ee, useEffect as ye, memo as Xe, createElement as Qr, forwardRef as Wt, useState as mr } from "react";
import { useDrag as He, useDrop as ke, DragAndDropProvider as Ut } from "react-use-drag-and-drop";
import { observe as le, set as fe, useObserver as je, useObserverValue as Z, useSelectorValue as Oe, selector as xr } from "react-observing";
import { v4 as Yt } from "uuid";
import qt from "react-dom";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hr = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function Kt() {
  if (Vr)
    return ze;
  Vr = 1;
  var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(u, s, d) {
    var l, h = {}, x = null, c = null;
    d !== void 0 && (x = "" + d), s.key !== void 0 && (x = "" + s.key), s.ref !== void 0 && (c = s.ref);
    for (l in s)
      n.call(s, l) && !a.hasOwnProperty(l) && (h[l] = s[l]);
    if (u && u.defaultProps)
      for (l in s = u.defaultProps, s)
        h[l] === void 0 && (h[l] = s[l]);
    return { $$typeof: r, type: u, key: x, ref: c, props: h, _owner: i.current };
  }
  return ze.Fragment = t, ze.jsx = f, ze.jsxs = f, ze;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function Jt() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function w(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[b];
      return typeof g == "function" ? g : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var g = arguments.length, E = new Array(g > 1 ? g - 1 : 0), D = 1; D < g; D++)
          E[D - 1] = arguments[D];
        _("error", o, E);
      }
    }
    function _(o, g, E) {
      {
        var D = R.ReactDebugCurrentFrame, K = D.getStackAddendum();
        K !== "" && (g += "%s", E = E.concat([K]));
        var Q = E.map(function(U) {
          return String(U);
        });
        Q.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, Q);
      }
    }
    var m = !1, p = !1, M = !1, G = !1, Y = !1, L;
    L = Symbol.for("react.module.reference");
    function P(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || Y || o === i || o === d || o === l || G || o === c || m || p || M || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === h || o.$$typeof === f || o.$$typeof === u || o.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === L || o.getModuleId !== void 0));
    }
    function te(o, g, E) {
      var D = o.displayName;
      if (D)
        return D;
      var K = g.displayName || g.name || "";
      return K !== "" ? E + "(" + K + ")" : E;
    }
    function ne(o) {
      return o.displayName || "Context";
    }
    function I(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var g = o;
            return ne(g) + ".Consumer";
          case f:
            var E = o;
            return ne(E._context) + ".Provider";
          case s:
            return te(o, o.render, "ForwardRef");
          case h:
            var D = o.displayName || null;
            return D !== null ? D : I(o.type) || "Memo";
          case x: {
            var K = o, Q = K._payload, U = K._init;
            try {
              return I(U(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, ue = 0, se, F, re, ae, y, C, j;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function A() {
      {
        if (ue === 0) {
          se = console.log, F = console.info, re = console.warn, ae = console.error, y = console.group, C = console.groupCollapsed, j = console.groupEnd;
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
        ue++;
      }
    }
    function W() {
      {
        if (ue--, ue === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, o, {
              value: se
            }),
            info: q({}, o, {
              value: F
            }),
            warn: q({}, o, {
              value: re
            }),
            error: q({}, o, {
              value: ae
            }),
            group: q({}, o, {
              value: y
            }),
            groupCollapsed: q({}, o, {
              value: C
            }),
            groupEnd: q({}, o, {
              value: j
            })
          });
        }
        ue < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = R.ReactCurrentDispatcher, V;
    function z(o, g, E) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (K) {
            var D = K.stack.trim().match(/\n( *(at )?)/);
            V = D && D[1] || "";
          }
        return `
` + V + o;
      }
    }
    var N = !1, $;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new de();
    }
    function S(o, g) {
      if (!o || N)
        return "";
      {
        var E = $.get(o);
        if (E !== void 0)
          return E;
      }
      var D;
      N = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = k.current, k.current = null, A();
      try {
        if (g) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (he) {
              D = he;
            }
            Reflect.construct(o, [], U);
          } else {
            try {
              U.call();
            } catch (he) {
              D = he;
            }
            o.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            D = he;
          }
          o();
        }
      } catch (he) {
        if (he && D && typeof he.stack == "string") {
          for (var H = he.stack.split(`
`), ve = D.stack.split(`
`), ie = H.length - 1, ce = ve.length - 1; ie >= 1 && ce >= 0 && H[ie] !== ve[ce]; )
            ce--;
          for (; ie >= 1 && ce >= 0; ie--, ce--)
            if (H[ie] !== ve[ce]) {
              if (ie !== 1 || ce !== 1)
                do
                  if (ie--, ce--, ce < 0 || H[ie] !== ve[ce]) {
                    var me = `
` + H[ie].replace(" at new ", " at ");
                    return o.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", o.displayName)), typeof o == "function" && $.set(o, me), me;
                  }
                while (ie >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        N = !1, k.current = Q, W(), Error.prepareStackTrace = K;
      }
      var Be = o ? o.displayName || o.name : "", Pe = Be ? z(Be) : "";
      return typeof o == "function" && $.set(o, Pe), Pe;
    }
    function be(o, g, E) {
      return S(o, !1);
    }
    function Me(o) {
      var g = o.prototype;
      return !!(g && g.isReactComponent);
    }
    function Te(o, g, E) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return S(o, Me(o));
      if (typeof o == "string")
        return z(o);
      switch (o) {
        case d:
          return z("Suspense");
        case l:
          return z("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            return be(o.render);
          case h:
            return Te(o.type, g, E);
          case x: {
            var D = o, K = D._payload, Q = D._init;
            try {
              return Te(Q(K), g, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Cr = {}, _r = R.ReactDebugCurrentFrame;
    function Ye(o) {
      if (o) {
        var g = o._owner, E = Te(o.type, o._source, g ? g.type : null);
        _r.setExtraStackFrame(E);
      } else
        _r.setExtraStackFrame(null);
    }
    function wt(o, g, E, D, K) {
      {
        var Q = Function.call.bind(Ve);
        for (var U in o)
          if (Q(o, U)) {
            var H = void 0;
            try {
              if (typeof o[U] != "function") {
                var ve = Error((D || "React class") + ": " + E + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              H = o[U](g, U, D, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              H = ie;
            }
            H && !(H instanceof Error) && (Ye(K), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", E, U, typeof H), Ye(null)), H instanceof Error && !(H.message in Cr) && (Cr[H.message] = !0, Ye(K), T("Failed %s type: %s", E, H.message), Ye(null));
          }
      }
    }
    var St = Array.isArray;
    function tr(o) {
      return St(o);
    }
    function Et(o) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, E = g && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return E;
      }
    }
    function Ot(o) {
      try {
        return Rr(o), !1;
      } catch {
        return !0;
      }
    }
    function Rr(o) {
      return "" + o;
    }
    function Tr(o) {
      if (Ot(o))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(o)), Rr(o);
    }
    var Fe = R.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pr, jr, nr;
    nr = {};
    function _t(o) {
      if (Ve.call(o, "ref")) {
        var g = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Rt(o) {
      if (Ve.call(o, "key")) {
        var g = Object.getOwnPropertyDescriptor(o, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Tt(o, g) {
      if (typeof o.ref == "string" && Fe.current && g && Fe.current.stateNode !== g) {
        var E = I(Fe.current.type);
        nr[E] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Fe.current.type), o.ref), nr[E] = !0);
      }
    }
    function Pt(o, g) {
      {
        var E = function() {
          Pr || (Pr = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        E.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function jt(o, g) {
      {
        var E = function() {
          jr || (jr = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        E.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Dt = function(o, g, E, D, K, Q, U) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: E,
        props: U,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function It(o, g, E, D, K) {
      {
        var Q, U = {}, H = null, ve = null;
        E !== void 0 && (Tr(E), H = "" + E), Rt(g) && (Tr(g.key), H = "" + g.key), _t(g) && (ve = g.ref, Tt(g, K));
        for (Q in g)
          Ve.call(g, Q) && !Ct.hasOwnProperty(Q) && (U[Q] = g[Q]);
        if (o && o.defaultProps) {
          var ie = o.defaultProps;
          for (Q in ie)
            U[Q] === void 0 && (U[Q] = ie[Q]);
        }
        if (H || ve) {
          var ce = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          H && Pt(U, ce), ve && jt(U, ce);
        }
        return Dt(o, H, ve, K, D, Fe.current, U);
      }
    }
    var or = R.ReactCurrentOwner, Dr = R.ReactDebugCurrentFrame;
    function Ae(o) {
      if (o) {
        var g = o._owner, E = Te(o.type, o._source, g ? g.type : null);
        Dr.setExtraStackFrame(E);
      } else
        Dr.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function ar(o) {
      return typeof o == "object" && o !== null && o.$$typeof === r;
    }
    function Ir() {
      {
        if (or.current) {
          var o = I(or.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Mt(o) {
      return "";
    }
    var Mr = {};
    function At(o) {
      {
        var g = Ir();
        if (!g) {
          var E = typeof o == "string" ? o : o.displayName || o.name;
          E && (g = `

Check the top-level render call using <` + E + ">.");
        }
        return g;
      }
    }
    function Ar(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var E = At(g);
        if (Mr[E])
          return;
        Mr[E] = !0;
        var D = "";
        o && o._owner && o._owner !== or.current && (D = " It was passed a child from " + I(o._owner.type) + "."), Ae(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, D), Ae(null);
      }
    }
    function Br(o, g) {
      {
        if (typeof o != "object")
          return;
        if (tr(o))
          for (var E = 0; E < o.length; E++) {
            var D = o[E];
            ar(D) && Ar(D, g);
          }
        else if (ar(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var K = w(o);
          if (typeof K == "function" && K !== o.entries)
            for (var Q = K.call(o), U; !(U = Q.next()).done; )
              ar(U.value) && Ar(U.value, g);
        }
      }
    }
    function Bt(o) {
      {
        var g = o.type;
        if (g == null || typeof g == "string")
          return;
        var E;
        if (typeof g == "function")
          E = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === h))
          E = g.propTypes;
        else
          return;
        if (E) {
          var D = I(g);
          wt(E, o.props, "prop", D, o);
        } else if (g.PropTypes !== void 0 && !ir) {
          ir = !0;
          var K = I(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(o) {
      {
        for (var g = Object.keys(o.props), E = 0; E < g.length; E++) {
          var D = g[E];
          if (D !== "children" && D !== "key") {
            Ae(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Ae(null);
            break;
          }
        }
        o.ref !== null && (Ae(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    var kr = {};
    function Lr(o, g, E, D, K, Q) {
      {
        var U = P(o);
        if (!U) {
          var H = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Mt();
          ve ? H += ve : H += Ir();
          var ie;
          o === null ? ie = "null" : tr(o) ? ie = "array" : o !== void 0 && o.$$typeof === r ? (ie = "<" + (I(o.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, H);
        }
        var ce = It(o, g, E, K, Q);
        if (ce == null)
          return ce;
        if (U) {
          var me = g.children;
          if (me !== void 0)
            if (D)
              if (tr(me)) {
                for (var Be = 0; Be < me.length; Be++)
                  Br(me[Be], o);
                Object.freeze && Object.freeze(me);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Br(me, o);
        }
        if (Ve.call(g, "key")) {
          var Pe = I(o), he = Object.keys(g).filter(function(Ht) {
            return Ht !== "key";
          }), cr = he.length > 0 ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[Pe + cr]) {
            var $t = he.length > 0 ? "{" + he.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cr, Pe, $t, Pe), kr[Pe + cr] = !0;
          }
        }
        return o === n ? kt(ce) : Bt(ce), ce;
      }
    }
    function Lt(o, g, E) {
      return Lr(o, g, E, !0);
    }
    function Vt(o, g, E) {
      return Lr(o, g, E, !1);
    }
    var Ft = Vt, zt = Lt;
    $e.Fragment = n, $e.jsx = Ft, $e.jsxs = zt;
  }()), $e;
}
process.env.NODE_ENV === "production" ? hr.exports = Kt() : hr.exports = Jt();
var O = hr.exports;
const et = Ke({});
function Xt({ children: e, ...r }) {
  return /* @__PURE__ */ O.jsx(et.Provider, { value: r, children: e });
}
const ge = () => Je(et), rt = Ke({}), Zt = ({ children: e }) => {
  const r = oe(le(!1)), t = oe(le(!1)), n = oe(le(0)), i = oe(le(0)), a = oe(le(0)), f = oe(le(0)), u = pe(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: f.current
  }), []), s = ee((l) => {
    fe(f.current, (h) => h !== l.top ? l.top : h), fe(a.current, (h) => h !== l.left ? l.left : h), fe(i.current, (h) => h !== l.width ? l.width : h), fe(n.current, (h) => h !== l.height ? l.height : h), fe(t.current, (h) => h !== l.isVisible ? l.isVisible : h), fe(r.current, (h) => h !== !!l.isHorizontal ? !!l.isHorizontal : h);
  }, []), d = ee(() => {
    s({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [s]);
  return /* @__PURE__ */ O.jsx(rt.Provider, { value: { showInsertBar: s, hideInsertBar: d, observables: u }, children: e });
}, Re = () => Je(rt), Qt = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: a, observableWidth: f } = Re().observables, [u] = je(a), [s] = je(i), [d] = je(f), [l] = je(r), [h] = je(n), [x] = je(t), c = pe(() => ({
    width: x ? d : 4,
    height: x ? 4 : l,
    top: u - (x ? 2 : 0),
    left: s - (x ? 0 : 2)
  }), [l, x, s, u, d]);
  return h ? /* @__PURE__ */ O.jsx(
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
}, tt = Ke({}), en = ({ children: e, id: r, onSelect: t }) => {
  const n = oe({
    documentHorizontalScroll: le(0),
    playgroundSize: le(void 0),
    documentVerticalScroll: le(0),
    getPosition: le(void 0),
    parents: le(void 0),
    element: le(void 0),
    onSelect: t,
    id: r
  });
  return ye(() => {
    n.current.id = r;
  }, [r]), ye(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ O.jsx(tt.Provider, { value: n.current, children: e });
};
var nt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zr = xe.createContext && /* @__PURE__ */ xe.createContext(nt), rn = ["attr", "size", "title"];
function tn(e, r) {
  if (e == null)
    return {};
  var t = nn(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function nn(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0)
        continue;
      t[n] = e[n];
    }
  return t;
}
function Ne() {
  return Ne = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ne.apply(this, arguments);
}
function $r(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ge(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? $r(Object(t), !0).forEach(function(n) {
      on(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $r(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function on(e, r, t) {
  return r = an(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function an(e) {
  var r = cn(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function cn(e, r) {
  if (typeof e != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function ot(e) {
  return e && e.map((r, t) => /* @__PURE__ */ xe.createElement(r.tag, Ge({
    key: t
  }, r.attr), ot(r.child)));
}
function Ze(e) {
  return (r) => /* @__PURE__ */ xe.createElement(un, Ne({
    attr: Ge({}, e.attr)
  }, r), ot(e.child));
}
function un(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: a
    } = e, f = tn(e, rn), u = i || t.size || "1em", s;
    return t.className && (s = t.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ xe.createElement("svg", Ne({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, f, {
      className: s,
      style: Ge(Ge({
        color: e.color || t.color
      }, t.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ xe.createElement("title", null, a), e.children);
  };
  return zr !== void 0 ? /* @__PURE__ */ xe.createElement(zr.Consumer, null, (t) => r(t)) : r(nt);
}
function sn(e) {
  return Ze({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function ln(e) {
  return Ze({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function fn(e) {
  return Ze({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function dn(e) {
  return Ze({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const vn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, We = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function pn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var it = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(c, v) {
      return v = v || "", c.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", f = function(c, v, b, w) {
      return c = c || t, v = v || n, b = b || i, w = w || a, {
        capitalize: new RegExp("(^|[" + c + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + c + "])+([" + v + b + "])", "g"),
        fill: new RegExp("[" + c + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + w + ")\\b", "g"),
        relax: new RegExp("([^" + b + "])([" + b + "]*)([" + b + "])(?=[^" + b + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + c + "]")
      };
    }, u = f(), s = {
      re: u,
      unicodes: r,
      regexps: f,
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
      fill: function(c, v, b) {
        return v != null && (c = c.replace(u.fill, function(w, R) {
          return R ? v + R : "";
        })), b && (c = s.deapostrophe(c)), c;
      },
      prep: function(c, v, b, w) {
        if (c = c == null ? "" : c + "", !w && u.upper.test(c) && (c = s.low.call(c)), !v && !u.hole.test(c)) {
          var R = s.fill(c, " ");
          u.hole.test(R) && (c = R);
        }
        return !b && !u.room.test(c) && (c = c.replace(u.relax, s.relax)), c;
      },
      relax: function(c, v, b, w) {
        return v + " " + (b ? b + " " : "") + w;
      }
    }, d = {
      _: s,
      of: function(c) {
        for (var v = 0, b = s.types.length; v < b; v++)
          if (d[s.types[v]].apply(d, arguments) === c)
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
        d[c] = v, s.types.push(c);
      }
    }, l = {
      lower: function(c, v, b) {
        return s.fill(s.low.call(s.prep(c, v)), v, b);
      },
      snake: function(c) {
        return d.lower(c, "_", !0);
      },
      constant: function(c) {
        return d.upper(c, "_", !0);
      },
      camel: function(c) {
        return s.decap(d.pascal(c));
      },
      kebab: function(c) {
        return d.lower(c, "-", !0);
      },
      upper: function(c, v, b) {
        return s.fill(s.up.call(s.prep(c, v, !1, !0)), v, b);
      },
      capital: function(c, v, b) {
        return s.fill(s.prep(c).replace(u.capitalize, function(w, R, T) {
          return R + s.up.call(T);
        }), v, b);
      },
      header: function(c) {
        return d.capital(c, "-", !0);
      },
      pascal: function(c) {
        return s.fill(s.prep(c, !1, !0).replace(u.pascal, function(v, b, w) {
          return s.up.call(w);
        }), "", !0);
      },
      title: function(c) {
        return d.capital(c).replace(u.improper, function(v, b, w, R) {
          return w > 0 && w < R.lastIndexOf(" ") ? s.low.call(v) : v;
        });
      },
      sentence: function(c, v, b) {
        return c = d.lower(c).replace(u.sentence, function(w, R, T) {
          return R + s.up.call(T);
        }), v && v.forEach(function(w) {
          c = c.replace(new RegExp("\\b" + d.lower(w) + "\\b", "g"), s.cap);
        }), b && b.forEach(function(w) {
          c = c.replace(new RegExp("(\\b" + d.lower(w) + "\\. +)(\\w)"), function(R, T, _) {
            return T + s.low.call(_);
          });
        }), c;
      }
    };
    l.squish = l.pascal, d.default = d;
    for (var h in l)
      d.type(h, l[h]);
    var x = typeof x == "function" ? x : function() {
    };
    x(e.exports ? e.exports = d : this.Case = d);
  }).call(Nt);
})(it);
var hn = it.exports;
function at(e) {
  return hn.camel(pn(e));
}
const Hr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((u) => e.draggingId === u.id.value)), yn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), a = n ? 5 : i.height / 2, f = e.x - i.x, u = e.y - i.y, s = u >= 0 && u <= a, d = u >= i.height - a && u <= i.height, l = u >= a && u <= i.height - a, h = f >= 0 && f <= a, x = f >= i.width - a && f <= i.width, c = f >= a && f <= i.width - a;
  let v = !1, b = !1, w = !1, R = !1;
  if (n) {
    const T = d || x || s || h;
    v = c && l && !T, b = c && l && !T, w = d || x, R = s || h;
  } else
    w = (d || x) && !s, R = (s || h) && !d;
  return { isOverCurrentStart: v, isOverCurrentEnd: b, isOverEnd: w, isOverStart: R };
}, gn = (e, r, t) => {
  if (!t.current)
    return null;
  const n = t.current.getBoundingClientRect();
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return {
      isHorizontal: !0,
      left: n.left,
      width: n.width,
      height: n.height,
      top: n.top + n.height / 2
    };
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), a = i ? 5 : n.height / 2, f = e.x - n.x, u = e.y - n.y, s = u >= n.height - a && u <= n.height, d = u >= a && u <= n.height - a, l = f >= 0 && f <= a, h = f >= n.width - a && f <= n.width, x = f >= a && f <= n.width - a;
  let c = !0, v = n.top, b = n.left, w = n.width, R = n.height;
  return s && (l || h || x) ? v = n.top + n.height : d && l ? c = !1 : d && h ? (b = n.left + n.width, c = !1) : x && d && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: c,
    left: b,
    width: w,
    height: R
  };
}, Le = () => Yt(), Ce = () => {
  const e = Je(tt), r = ee((a) => {
    e.onSelect(a);
  }, [e.id]), t = ee((a, f, u) => {
    fe(e.getPosition, () => u), fe(e.parents, f), fe(e.element, a);
  }, [e.getPosition]), n = ee((a, f) => {
    fe(e.documentHorizontalScroll, f), fe(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = ee((a, f) => {
    fe(e.playgroundSize, { height: a, width: f });
  }, [e.playgroundSize]);
  return {
    select: r,
    selectedId: e.id,
    selectedElement: e.element,
    selectedElementParents: e.parents,
    updateSelectBar: t,
    updateSelectBarScroll: n,
    updateSelectBarPlaygroundSize: i,
    selectBarGetPosition: e.getPosition,
    selectBarPlaygroundSize: e.playgroundSize,
    selectBarDocumentVerticalScroll: e.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, bn = Xe(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: f = "#4a87ee" }) => {
  const u = oe(null), s = pe(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      "data-select": !0,
      style: {
        top: t,
        left: n,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: f,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ O.jsx(
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
            backgroundColor: f,
            top: t - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), mn = Xe(() => {
  const e = oe(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = ge(), { hideInsertBar: a } = Re(), {
    select: f,
    selectedId: u,
    selectedElement: s,
    selectBarGetPosition: d,
    selectedElementParents: l,
    selectBarDocumentVerticalScroll: h,
    selectBarDocumentHorizontalScroll: x
  } = Ce(), c = Z(l), v = Z(s), b = Z(u), w = Oe(({ get: P }) => v ? P(v.name) : "", [v]), { width: R, height: T, top: _, left: m } = Oe(({ get: P }) => {
    const te = P(x), ne = P(h), I = P(d);
    return I ? {
      width: I().width,
      height: I().height,
      top: I().top - ne,
      left: I().left - te
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [x, h, d]), p = ee(() => {
    const P = c == null ? void 0 : c.slice(-1).at(0);
    if (P)
      if (P.type.value === "slot-content") {
        const te = c == null ? void 0 : c.find((ne) => {
          var I;
          return ne.type.value !== "component" ? !1 : (I = ne.slots.value) == null ? void 0 : I.some((q) => q.id.value === P.id.value);
        });
        f(te == null ? void 0 : te.id.value);
      } else
        f(P.id.value);
  }, [f, c]), M = ee(() => {
    v && i(v);
  }, [i, v]), G = ee(() => {
    v && n(v);
  }, [n, v]), { preview: Y, isDragging: L } = He({
    element: e,
    id: b || "default",
    start: () => {
      r();
    },
    end: () => {
      a(), t();
    },
    canDrag: !!v && Array.isArray(c),
    data: {
      element: v,
      parents: c
    }
  }, [b, v, c, a, r, t]);
  return ye(() => {
    Y(
      () => We(w),
      (P) => P.remove()
    );
  }, [Y, w]), !b || R === 0 && T === 0 && m === 0 && _ === 0 ? null : /* @__PURE__ */ O.jsx(
    bn,
    {
      zIndex: 1,
      top: _ - 1,
      width: R,
      height: T,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ O.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        w,
        !L && /* @__PURE__ */ O.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          c && c.length > 0 && /* @__PURE__ */ O.jsx(sn, { title: "Select parent", onClick: p, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx(dn, { title: "Remove element", onClick: M, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx(ln, { title: "Duplicate element and children", onClick: G, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ O.jsx(fn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), ct = Ke({}), xn = ({ children: e, id: r, onHover: t }) => {
  const n = oe({
    documentHorizontalScroll: le(0),
    playgroundSize: le(void 0),
    documentVerticalScroll: le(0),
    getPosition: le(void 0),
    element: le(void 0),
    onHover: t,
    id: r
  });
  return ye(() => {
    n.current.id = r;
  }, [r]), ye(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ O.jsx(ct.Provider, { value: n.current, children: e });
}, _e = () => {
  const e = Je(ct), r = ee((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), t = ee((a, f) => {
    fe(e.getPosition, () => f), fe(e.element, a);
  }, [e.getPosition]), n = ee((a, f) => {
    fe(e.documentHorizontalScroll, f), fe(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = ee((a, f) => {
    fe(e.playgroundSize, { height: a, width: f });
  }, [e.playgroundSize]);
  return {
    hover: r,
    hoveredId: e.id,
    hoveredElement: e.element,
    updateHoverBar: t,
    updateHoverBarScroll: n,
    updateHoverBarPlaygroundSize: i,
    hoverBarGetPosition: e.getPosition,
    hoverBarPlaygroundSize: e.playgroundSize,
    hoverBarDocumentVerticalScroll: e.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, wn = Xe(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: f = "#4a87ee" }) => {
  const u = oe(null), s = pe(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      "data-hover": !0,
      style: {
        top: t,
        left: n,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: i,
        height: a,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: f,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ O.jsx(
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
            backgroundColor: f,
            top: t - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), Sn = Xe(() => {
  const { selectedId: e } = Ce(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: a
  } = _e(), f = Z(a), u = Z(i), s = Z(n), d = Z(t), l = Z(e), h = Z(r), x = Oe(({ get: R }) => d ? R(d.name) : "", [d]), { width: c, height: v, top: b, left: w } = pe(() => s ? {
    width: s().width,
    height: s().height,
    top: s().top - u,
    left: s().left - f
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [f, u, s]);
  return !h || h === l || c === 0 && v === 0 && w === 0 && b === 0 ? null : /* @__PURE__ */ O.jsx(
    wn,
    {
      zIndex: 1,
      top: b - 1,
      width: c,
      left: w - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ O.jsx("div", { children: x })
    }
  );
});
var Qe = {}, Ue = {}, yr = { exports: {} }, qe = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function En() {
  if (Wr)
    return J;
  Wr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function _(p) {
    if (typeof p == "object" && p !== null) {
      var M = p.$$typeof;
      switch (M) {
        case r:
          switch (p = p.type, p) {
            case s:
            case d:
            case n:
            case a:
            case i:
            case h:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case l:
                case v:
                case c:
                case f:
                  return p;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function m(p) {
    return _(p) === d;
  }
  return J.AsyncMode = s, J.ConcurrentMode = d, J.ContextConsumer = u, J.ContextProvider = f, J.Element = r, J.ForwardRef = l, J.Fragment = n, J.Lazy = v, J.Memo = c, J.Portal = t, J.Profiler = a, J.StrictMode = i, J.Suspense = h, J.isAsyncMode = function(p) {
    return m(p) || _(p) === s;
  }, J.isConcurrentMode = m, J.isContextConsumer = function(p) {
    return _(p) === u;
  }, J.isContextProvider = function(p) {
    return _(p) === f;
  }, J.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, J.isForwardRef = function(p) {
    return _(p) === l;
  }, J.isFragment = function(p) {
    return _(p) === n;
  }, J.isLazy = function(p) {
    return _(p) === v;
  }, J.isMemo = function(p) {
    return _(p) === c;
  }, J.isPortal = function(p) {
    return _(p) === t;
  }, J.isProfiler = function(p) {
    return _(p) === a;
  }, J.isStrictMode = function(p) {
    return _(p) === i;
  }, J.isSuspense = function(p) {
    return _(p) === h;
  }, J.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === d || p === a || p === i || p === h || p === x || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === c || p.$$typeof === f || p.$$typeof === u || p.$$typeof === l || p.$$typeof === w || p.$$typeof === R || p.$$typeof === T || p.$$typeof === b);
  }, J.typeOf = _, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function On() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function _(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === a || S === i || S === h || S === x || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === c || S.$$typeof === f || S.$$typeof === u || S.$$typeof === l || S.$$typeof === w || S.$$typeof === R || S.$$typeof === T || S.$$typeof === b);
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var be = S.$$typeof;
        switch (be) {
          case r:
            var Me = S.type;
            switch (Me) {
              case s:
              case d:
              case n:
              case a:
              case i:
              case h:
                return Me;
              default:
                var Te = Me && Me.$$typeof;
                switch (Te) {
                  case u:
                  case l:
                  case v:
                  case c:
                  case f:
                    return Te;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var p = s, M = d, G = u, Y = f, L = r, P = l, te = n, ne = v, I = c, q = t, ue = a, se = i, F = h, re = !1;
    function ae(S) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(S) || m(S) === s;
    }
    function y(S) {
      return m(S) === d;
    }
    function C(S) {
      return m(S) === u;
    }
    function j(S) {
      return m(S) === f;
    }
    function B(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function A(S) {
      return m(S) === l;
    }
    function W(S) {
      return m(S) === n;
    }
    function k(S) {
      return m(S) === v;
    }
    function V(S) {
      return m(S) === c;
    }
    function z(S) {
      return m(S) === t;
    }
    function N(S) {
      return m(S) === a;
    }
    function $(S) {
      return m(S) === i;
    }
    function de(S) {
      return m(S) === h;
    }
    X.AsyncMode = p, X.ConcurrentMode = M, X.ContextConsumer = G, X.ContextProvider = Y, X.Element = L, X.ForwardRef = P, X.Fragment = te, X.Lazy = ne, X.Memo = I, X.Portal = q, X.Profiler = ue, X.StrictMode = se, X.Suspense = F, X.isAsyncMode = ae, X.isConcurrentMode = y, X.isContextConsumer = C, X.isContextProvider = j, X.isElement = B, X.isForwardRef = A, X.isFragment = W, X.isLazy = k, X.isMemo = V, X.isPortal = z, X.isProfiler = N, X.isStrictMode = $, X.isSuspense = de, X.isValidElementType = _, X.typeOf = m;
  }()), X;
}
var Yr;
function ut() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? qe.exports = En() : qe.exports = On()), qe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, qr;
function Cn() {
  if (qr)
    return ur;
  qr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
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
      for (var f = {}, u = 0; u < 10; u++)
        f["_" + String.fromCharCode(u)] = u;
      var s = Object.getOwnPropertyNames(f).map(function(l) {
        return f[l];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        d[l] = l;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = i() ? Object.assign : function(a, f) {
    for (var u, s = n(a), d, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var h in u)
        r.call(u, h) && (s[h] = u[h]);
      if (e) {
        d = e(u);
        for (var x = 0; x < d.length; x++)
          t.call(u, d[x]) && (s[d[x]] = u[d[x]]);
      }
    }
    return s;
  }, ur;
}
var sr, Nr;
function wr() {
  if (Nr)
    return sr;
  Nr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sr = e, sr;
}
var lr, Gr;
function st() {
  return Gr || (Gr = 1, lr = Function.call.bind(Object.prototype.hasOwnProperty)), lr;
}
var fr, Kr;
function _n() {
  if (Kr)
    return fr;
  Kr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = wr(), t = {}, n = st();
    e = function(a) {
      var f = "Warning: " + a;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function i(a, f, u, s, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var h;
          try {
            if (typeof a[l] != "function") {
              var x = Error(
                (s || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            h = a[l](f, l, s, u, null, r);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var c = d ? d() : "";
            e(
              "Failed " + u + " type: " + h.message + (c ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, fr = i, fr;
}
var dr, Jr;
function Rn() {
  if (Jr)
    return dr;
  Jr = 1;
  var e = ut(), r = Cn(), t = wr(), n = st(), i = _n(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return dr = function(u, s) {
    var d = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function h(y) {
      var C = y && (d && y[d] || y[l]);
      if (typeof C == "function")
        return C;
    }
    var x = "<<anonymous>>", c = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: _,
      element: m(),
      elementType: p(),
      instanceOf: M,
      node: P(),
      objectOf: Y,
      oneOf: G,
      oneOfType: L,
      shape: ne,
      exact: I
    };
    function v(y, C) {
      return y === C ? y !== 0 || 1 / y === 1 / C : y !== y && C !== C;
    }
    function b(y, C) {
      this.message = y, this.data = C && typeof C == "object" ? C : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function w(y) {
      if (process.env.NODE_ENV !== "production")
        var C = {}, j = 0;
      function B(W, k, V, z, N, $, de) {
        if (z = z || x, $ = $ || V, de !== t) {
          if (s) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = z + ":" + V;
            !C[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[be] = !0, j++);
          }
        }
        return k[V] == null ? W ? k[V] === null ? new b("The " + N + " `" + $ + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new b("The " + N + " `" + $ + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : y(k, V, z, N, $);
      }
      var A = B.bind(null, !1);
      return A.isRequired = B.bind(null, !0), A;
    }
    function R(y) {
      function C(j, B, A, W, k, V) {
        var z = j[B], N = se(z);
        if (N !== y) {
          var $ = F(z);
          return new b(
            "Invalid " + W + " `" + k + "` of type " + ("`" + $ + "` supplied to `" + A + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return w(C);
    }
    function T() {
      return w(f);
    }
    function _(y) {
      function C(j, B, A, W, k) {
        if (typeof y != "function")
          return new b("Property `" + k + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var V = j[B];
        if (!Array.isArray(V)) {
          var z = se(V);
          return new b("Invalid " + W + " `" + k + "` of type " + ("`" + z + "` supplied to `" + A + "`, expected an array."));
        }
        for (var N = 0; N < V.length; N++) {
          var $ = y(V, N, A, W, k + "[" + N + "]", t);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return w(C);
    }
    function m() {
      function y(C, j, B, A, W) {
        var k = C[j];
        if (!u(k)) {
          var V = se(k);
          return new b("Invalid " + A + " `" + W + "` of type " + ("`" + V + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(y);
    }
    function p() {
      function y(C, j, B, A, W) {
        var k = C[j];
        if (!e.isValidElementType(k)) {
          var V = se(k);
          return new b("Invalid " + A + " `" + W + "` of type " + ("`" + V + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(y);
    }
    function M(y) {
      function C(j, B, A, W, k) {
        if (!(j[B] instanceof y)) {
          var V = y.name || x, z = ae(j[B]);
          return new b("Invalid " + W + " `" + k + "` of type " + ("`" + z + "` supplied to `" + A + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return w(C);
    }
    function G(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), f;
      function C(j, B, A, W, k) {
        for (var V = j[B], z = 0; z < y.length; z++)
          if (v(V, y[z]))
            return null;
        var N = JSON.stringify(y, function(de, S) {
          var be = F(S);
          return be === "symbol" ? String(S) : S;
        });
        return new b("Invalid " + W + " `" + k + "` of value `" + String(V) + "` " + ("supplied to `" + A + "`, expected one of " + N + "."));
      }
      return w(C);
    }
    function Y(y) {
      function C(j, B, A, W, k) {
        if (typeof y != "function")
          return new b("Property `" + k + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var V = j[B], z = se(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + k + "` of type " + ("`" + z + "` supplied to `" + A + "`, expected an object."));
        for (var N in V)
          if (n(V, N)) {
            var $ = y(V, N, A, W, k + "." + N, t);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return w(C);
    }
    function L(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var C = 0; C < y.length; C++) {
        var j = y[C];
        if (typeof j != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + re(j) + " at index " + C + "."
          ), f;
      }
      function B(A, W, k, V, z) {
        for (var N = [], $ = 0; $ < y.length; $++) {
          var de = y[$], S = de(A, W, k, V, z, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && N.push(S.data.expectedType);
        }
        var be = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new b("Invalid " + V + " `" + z + "` supplied to " + ("`" + k + "`" + be + "."));
      }
      return w(B);
    }
    function P() {
      function y(C, j, B, A, W) {
        return q(C[j]) ? null : new b("Invalid " + A + " `" + W + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return w(y);
    }
    function te(y, C, j, B, A) {
      return new b(
        (y || "React class") + ": " + C + " type `" + j + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function ne(y) {
      function C(j, B, A, W, k) {
        var V = j[B], z = se(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + k + "` of type `" + z + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var N in y) {
          var $ = y[N];
          if (typeof $ != "function")
            return te(A, W, k, N, F($));
          var de = $(V, N, A, W, k + "." + N, t);
          if (de)
            return de;
        }
        return null;
      }
      return w(C);
    }
    function I(y) {
      function C(j, B, A, W, k) {
        var V = j[B], z = se(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + k + "` of type `" + z + "` " + ("supplied to `" + A + "`, expected `object`."));
        var N = r({}, j[B], y);
        for (var $ in N) {
          var de = y[$];
          if (n(y, $) && typeof de != "function")
            return te(A, W, k, $, F(de));
          if (!de)
            return new b(
              "Invalid " + W + " `" + k + "` key `" + $ + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(j[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var S = de(V, $, A, W, k + "." + $, t);
          if (S)
            return S;
        }
        return null;
      }
      return w(C);
    }
    function q(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(q);
          if (y === null || u(y))
            return !0;
          var C = h(y);
          if (C) {
            var j = C.call(y), B;
            if (C !== y.entries) {
              for (; !(B = j.next()).done; )
                if (!q(B.value))
                  return !1;
            } else
              for (; !(B = j.next()).done; ) {
                var A = B.value;
                if (A && !q(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(y, C) {
      return y === "symbol" ? !0 : C ? C["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && C instanceof Symbol : !1;
    }
    function se(y) {
      var C = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : ue(C, y) ? "symbol" : C;
    }
    function F(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var C = se(y);
      if (C === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return C;
    }
    function re(y) {
      var C = F(y);
      switch (C) {
        case "array":
        case "object":
          return "an " + C;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + C;
        default:
          return C;
      }
    }
    function ae(y) {
      return !y.constructor || !y.constructor.name ? x : y.constructor.name;
    }
    return c.checkPropTypes = i, c.resetWarningCache = i.resetWarningCache, c.PropTypes = c, c;
  }, dr;
}
var vr, Xr;
function Tn() {
  if (Xr)
    return vr;
  Xr = 1;
  var e = wr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, vr = function() {
    function n(f, u, s, d, l, h) {
      if (h !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, vr;
}
if (process.env.NODE_ENV !== "production") {
  var Pn = ut(), jn = !0;
  yr.exports = Rn()(Pn.isElement, jn);
} else
  yr.exports = Tn()();
var lt = yr.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.FrameContextConsumer = we.FrameContextProvider = we.useFrame = we.FrameContext = void 0;
var Dn = xe, ft = In(Dn);
function In(e) {
  return e && e.__esModule ? e : { default: e };
}
var dt = void 0, vt = void 0;
typeof document < "u" && (dt = document);
typeof window < "u" && (vt = window);
var Sr = we.FrameContext = ft.default.createContext({ document: dt, window: vt });
we.useFrame = function() {
  return ft.default.useContext(Sr);
};
var Mn = Sr.Provider, An = Sr.Consumer;
we.FrameContextProvider = Mn;
we.FrameContextConsumer = An;
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
var Bn = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), gr = xe;
pt(gr);
var kn = lt, pr = pt(kn);
function pt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Vn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Fn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var ht = function(e) {
  Fn(r, e);
  function r() {
    return Ln(this, r), Vn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return Bn(r, [{
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
      return gr.Children.only(this.props.children);
    }
  }]), r;
}(gr.Component);
ht.propTypes = {
  children: pr.default.element.isRequired,
  contentDidMount: pr.default.func.isRequired,
  contentDidUpdate: pr.default.func.isRequired
};
Er.default = ht;
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.Frame = void 0;
var br = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }
  return e;
}, zn = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), yt = xe, De = er(yt), $n = qt, Zr = er($n), Hn = lt, Ee = er(Hn), Wn = we, Un = Er, Yn = er(Un);
function er(e) {
  return e && e.__esModule ? e : { default: e };
}
function qn(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Nn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Gn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Or = Ue.Frame = function(e) {
  Gn(r, e);
  function r(t, n) {
    qn(this, r);
    var i = Nn(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, n));
    return i.setRef = function(a) {
      i.nodeRef.current = a;
      var f = i.props.forwardedRef;
      typeof f == "function" ? f(a) : f && (f.current = a);
    }, i.handleLoad = function() {
      clearInterval(i.loadCheck), i.state.iframeLoaded || i.setState({ iframeLoaded: !0 });
    }, i.loadCheck = function() {
      return setInterval(function() {
        i.handleLoad();
      }, 500);
    }, i._isMounted = !1, i.nodeRef = De.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return zn(r, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
      var n = this.getDoc();
      n && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad);
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
      var n = this.getDoc();
      return this.props.mountTarget ? n.querySelector(this.props.mountTarget) : n.body.children[0];
    }
    // In certain situations on a cold cache DOMContentLoaded never gets called
    // fallback to an interval to check if that's the case
  }, {
    key: "renderFrameContents",
    value: function() {
      if (!this._isMounted)
        return null;
      var n = this.getDoc();
      if (!n)
        return null;
      var i = this.props.contentDidMount, a = this.props.contentDidUpdate, f = n.defaultView || n.parentView, u = De.default.createElement(
        Yn.default,
        {
          contentDidMount: i,
          contentDidUpdate: a
        },
        De.default.createElement(
          Wn.FrameContextProvider,
          { value: { document: n, window: f } },
          De.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), s = this.getMountTarget();
      return s ? [Zr.default.createPortal(this.props.head, this.getDoc().head), Zr.default.createPortal(u, s)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = br({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, De.default.createElement(
        "iframe",
        br({}, n, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), r;
}(yt.Component);
Or.propTypes = {
  style: Ee.default.object,
  // eslint-disable-line
  head: Ee.default.node,
  initialContent: Ee.default.string,
  mountTarget: Ee.default.string,
  contentDidMount: Ee.default.func,
  contentDidUpdate: Ee.default.func,
  children: Ee.default.oneOfType([Ee.default.element, Ee.default.arrayOf(Ee.default.element)])
};
Or.defaultProps = {
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
Ue.default = De.default.forwardRef(function(e, r) {
  return De.default.createElement(Or, br({}, e, { forwardedRef: r }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = Ue;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n(r).default;
    }
  });
  var t = we;
  Object.defineProperty(e, "FrameContext", {
    enumerable: !0,
    get: function() {
      return t.FrameContext;
    }
  }), Object.defineProperty(e, "FrameContextConsumer", {
    enumerable: !0,
    get: function() {
      return t.FrameContextConsumer;
    }
  }), Object.defineProperty(e, "useFrame", {
    enumerable: !0,
    get: function() {
      return t.useFrame;
    }
  });
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
})(Qe);
const Kn = /* @__PURE__ */ Gt(Qe), Jn = ({ children: e, onScroll: r, onRef: t, onKeyDown: n }) => {
  const { document: i } = Qe.useFrame();
  return ye(() => {
    i && t(i);
  }, [t, i]), ye(() => {
    i && (i.onkeydown = n, i.onscroll = (a) => r(a.target.documentElement.scrollTop, a.target.documentElement.scrollLeft));
  }, [i, r]), e;
}, Xn = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = Z(
    pe(() => xr(({ get: f }) => f(r).map((u) => ({
      id: f(u.id),
      content: f(u.content)
    }))), [r])
  ), a = pe(() => /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    i.map((f) => Qr("style", { key: f.id }, f.content)),
    /* @__PURE__ */ O.jsx("style", { children: [
      "* { outline: none; }",
      n ? "body { margin:0!important; }" : "",
      `html${t ? "" : ":hover"} body .frame-content * {`,
      "  outline: thin solid #80808050;",
      "}",
      '[data-hover="true"] *, [data-select="true"] * {',
      "  outline: none!important;",
      "}"
    ].join(`
`) })
  ] }), [i, n]);
  return /* @__PURE__ */ O.jsx(
    Kn,
    {
      tabIndex: -1,
      head: a,
      mountTarget: "body",
      onContextMenu: (f) => f.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, Zn = (e, r) => Oe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), rr = (e, r) => Oe(({ get: n }) => {
  const i = [...r].reverse();
  let a;
  for (let f = 0; f < i.length; f++) {
    const u = i[f];
    if (n(u.type) === "slot-content" && (a = !1), n(u.type) === "component")
      if (a === !1)
        a = void 0;
      else
        return !0;
  }
  return !!a;
}, [r, e]), Qn = ({ element: e }) => {
  const r = Z(e.name);
  return /* @__PURE__ */ O.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ O.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Se = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = Oe(({ get: a }) => {
    if (!e)
      return !1;
    const f = a(e);
    if (!r)
      return !1;
    const u = a(r);
    return f === u;
  }, [...n]);
  ye(() => {
    i && t();
  }, [i]);
}, eo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: a }) => {
  const f = oe(null), { selectedId: u } = Ce(), { hoveredId: s } = _e(), d = Z(e.name);
  return Se({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, f.current)
  }, [s, e]), Se({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, f.current)
  }, [u, e]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: n,
      onClick: (l) => a(l, e),
      onMouseOver: (l) => i(l, e, f.current),
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
        /* @__PURE__ */ O.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: d }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, ro = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: f, onDrop: u, onHoverBar: s, onSelectBar: d, onDoubleClick: l }) => {
  const h = oe(null), { onDragStart: x, onDragEnd: c, components: v } = ge(), { hideInsertBar: b } = Re(), { selectedId: w } = Ce(), { hoveredId: R } = _e(), T = Z(e.name), _ = Z(e.id), m = Oe(({ get: L }) => {
    const P = L(v).find((te) => L(te.id) === L(e.referenceComponentId));
    return P ? L(P.content) : [];
  }, [v, e]);
  Se({
    value: R,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, h.current)
  }, [R, e]), Se({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, h.current)
  }, [w, e]);
  const p = pe(() => !m || m.length === 0 ? null : m.map((L) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: L,
      parents: [...r, e]
    },
    L.id.value
  )), [m, r, e]), { isDragging: M, preview: G } = He({
    id: _,
    element: h,
    data: { element: e, parents: r },
    start: () => {
      x();
    },
    end: () => {
      b(), c();
    }
  }, [_, e, r, b, x, c]);
  ye(() => {
    G(
      () => We(T),
      (L) => L.remove()
    );
  }, [G, T]);
  const Y = oe({ id: Le() });
  return ke({
    element: h,
    id: Y.current.id,
    drop: (L, P) => u(L, P, e, r, h, Y.current.id),
    hover: (L, P) => f(L, P, e, r, h, Y.current.id),
    leave: (L, P) => a(L, P, e, r, h, Y.current.id)
  }, [e, r, u, f, a]), /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: h,
      onMouseLeave: n,
      onClick: (L) => i(L, e),
      onDoubleClick: (L) => l(L, e),
      onMouseOver: (L) => t(L, e, h.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: M ? 0.5 : void 0 },
      children: p
    }
  );
}, to = ({ element: e, parents: r }) => {
  const { components: t } = ge(), n = Oe(({ get: i }) => {
    const a = i(t).find((f) => i(f.id) === i(e.referenceComponentId));
    return a ? i(a.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ O.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, no = ({ element: e, parents: r, ...t }) => {
  const n = Zn(e, r), i = rr(e, r);
  return n ? i ? /* @__PURE__ */ O.jsx(Qn, { element: e }) : /* @__PURE__ */ O.jsx(
    eo,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ O.jsx(
    to,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ O.jsx(
    ro,
    {
      element: e,
      parents: r,
      onDrop: t.onDrop,
      onDragOver: t.onDragOver,
      onDragLeave: t.onDragLeave,
      onDoubleClick: t.onDoubleClick,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  );
}, gt = (e) => {
  const { onExpressionToValue: r } = ge(), t = pe(() => xr(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const a = {};
    return i.forEach((f) => {
      const u = n(f.name), s = n(f.value);
      u && (a[at(u)] = r(s, u, "style", e));
    }), a;
  }), [e, r, e]);
  return Z(t);
}, bt = (e) => {
  const { onExpressionToValue: r } = ge(), t = pe(() => xr({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const a = {}, f = {};
      return i.forEach((u) => {
        const s = n(u.name);
        if (s === void 0 || s === "hidden" || s === "style")
          return;
        const d = r(n(u.value), s, "attribute", e), l = at(s);
        switch (l) {
          case "options":
            f.options = d;
            break;
          case "className":
            a.className = d;
            break;
          case "class":
            a.className = d;
            break;
          default:
            if (s.startsWith("data-")) {
              a[s] = d;
              return;
            } else
              a[l] = d;
            break;
        }
      }), [a, f];
    }
  }), [e, r]);
  return Z(t);
}, mt = Wt(({ tag: e, ...r }, t) => Qr(e, { ref: t, ...r })), oo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: f, onDrop: u, onHoverBar: s, onSelectBar: d }) => {
  const l = oe(null), [h, x] = mr(!1), [
    c
    /* elementSpecialProps */
  ] = bt(e), v = Z(e.children), b = gt(e), w = Z(e.name), R = Z(e.tag), T = Z(e.id), { onDragStart: _, onDragEnd: m } = ge(), { hideInsertBar: p } = Re(), { selectedId: M } = Ce(), { hoveredId: G } = _e();
  Se({
    value: G,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, l.current)
  }, [G, e]), Se({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [M, e]), ye(() => {
    x((q) => G.value === T === q ? q : !q);
    const I = G.subscribe((q) => {
      x((ue) => q === T === ue ? ue : !ue);
    });
    return () => I.unsubscribe();
  }, [T, G]);
  const Y = pe(() => !v || v.length === 0 ? null : v.map((I) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: I,
      parents: [...r, e]
    },
    I.id.value
  )), [v, r, e]), L = pe(() => v !== void 0, [v]), { isDragging: P, preview: te } = He({
    id: T,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      _();
    },
    end: () => {
      p(), m();
    }
  }, [T, e, r, p, _, m]);
  ye(() => {
    te(
      () => We(w),
      (I) => I.remove()
    );
  }, [te, w]);
  const ne = oe({ id: Le() });
  return ke({
    element: l,
    id: ne.current.id,
    drop: (I, q) => u(I, q, e, r, l, ne.current.id),
    hover: (I, q) => f(I, q, e, r, l, ne.current.id),
    leave: (I, q) => a(I, q, e, r, l, ne.current.id)
  }, [e, r, u, f, a]), /* @__PURE__ */ O.jsx(
    mt,
    {
      readOnly: !0,
      tag: R,
      ref: l,
      children: Y,
      onMouseLeave: n,
      onClick: (I) => i(I, e),
      onMouseOver: (I) => t(I, e, l.current),
      ...c !== void 0 ? { ...c, ...h ? { disabled: !1 } : {} } : {},
      style: {
        ...b,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: P ? 0.5 : typeof b.opacity == "number" ? Number(b.opacity) : void 0,
        minWidth: Y === null && L ? 40 : typeof b.minWidth == "number" ? Number(b.minWidth) : void 0,
        minHeight: Y === null && L ? 40 : typeof b.minHeight == "number" ? Number(b.minHeight) : void 0
      }
    }
  );
}, io = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = bt(e), n = Z(e.children), i = gt(e), a = Z(e.tag), f = pe(() => !n || n.length === 0 ? null : n.map((u) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: u,
      parents: [...r, e]
    },
    u.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ O.jsx(
    mt,
    {
      tag: a,
      children: f,
      ...t !== void 0 ? t : {},
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
}, ao = ({ element: e, parents: r, ...t }) => rr(e, r) ? /* @__PURE__ */ O.jsx(
  io,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ O.jsx(
  oo,
  {
    element: e,
    parents: r,
    onDrop: t.onDrop,
    onDragOver: t.onDragOver,
    onDragLeave: t.onDragLeave,
    onSelect: t.onSelect,
    onMouseOver: t.onMouseOver,
    onMouseLeave: t.onMouseLeave,
    onHoverBar: t.onHoverBar,
    onSelectBar: t.onSelectBar
  }
), co = (e, r) => {
  const { components: t } = ge();
  return Oe(({ get: n }) => {
    const i = n(t), a = [...r].reverse(), f = a.findIndex((d) => {
      var x;
      if (n(d.type) !== "component")
        return !1;
      const l = d;
      return n(e.componentId) === n(l.referenceComponentId) ? (x = n(l.slots)) == null ? void 0 : x.some((c) => n(c.referenceSlotId) === n(e.id)) : !1;
    });
    return !a.at(f) || a.slice(f + 1).reduce((d, l) => d !== void 0 ? d : n(l.type) === "slot-content" ? !1 : n(l.type) === "component" ? !0 : d, void 0) ? !1 : i.some((d) => n(d.id) === n(e.componentId));
  }, [r, e, t]);
}, xt = (e, r) => {
  const { onAddSlotContent: t } = ge();
  return Oe(({ get: n }) => {
    var f;
    const i = [...r].reverse().filter((u) => n(u.type) === "component").find((u) => n(u.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const a = (f = n(i.slots)) == null ? void 0 : f.find((u) => n(u.referenceSlotId) === n(e.id));
    return a ? [n(a.children), a] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, uo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: a, onDrop: f, onHoverBar: u }) => {
  const s = oe(null), [d = [], l] = xt(e, r), { hoveredId: h } = _e();
  Se({
    value: h,
    matchWidthValue: l == null ? void 0 : l.id,
    effect() {
      l && u(e, s.current);
    }
  }, [h, l == null ? void 0 : l.id, e]);
  const x = oe({ id: Le() });
  return ke({
    element: s,
    id: x.current.id,
    drop: (c, v) => l ? f(c, v, l, r, s, x.current.id) : void 0,
    hover: (c, v) => l ? a(c, v, l, r, s, x.current.id) : void 0,
    leave: (c, v) => l ? i(c, v, l, r, s, x.current.id) : void 0
  }, [l, r, f, a, i]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (c) => l ? t(c, l, s.current) : void 0,
      children: [
        l && d.length > 0 && d.map((c) => /* @__PURE__ */ O.jsx(
          Ie,
          {
            element: c,
            parents: [...r, l]
          },
          c.id.value
        )),
        d.length === 0 && /* @__PURE__ */ O.jsx(
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
}, so = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: f, onDrop: u, onHoverBar: s, onSelectBar: d }) => {
  const l = oe(null), { onDragStart: h, onDragEnd: x } = ge(), { hideInsertBar: c } = Re(), { selectedId: v } = Ce(), { hoveredId: b } = _e(), w = Z(e.name), R = Z(e.id);
  Se({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, l.current)
  }, [b, e]), Se({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [v, e]);
  const { isDragging: T, preview: _ } = He({
    id: R,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      h();
    },
    end: () => {
      c(), x();
    }
  }, [R, e, r, c, h, x]);
  ye(() => {
    _(
      () => We(w),
      (p) => p.remove()
    );
  }, [_, w]);
  const m = oe({ id: Le() });
  return ke({
    element: l,
    id: m.current.id,
    drop: (p, M) => u(p, M, e, r, l, m.current.id),
    hover: (p, M) => f(p, M, e, r, l, m.current.id),
    leave: (p, M) => a(p, M, e, r, l, m.current.id)
  }, [e, r, u, f, a]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: n,
      onClick: (p) => i(p, e),
      onMouseOver: (p) => t(p, e, l.current),
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
        w,
        '"'
      ]
    }
  );
}, lo = ({ element: e, parents: r }) => {
  const [t = [], n] = xt(e, r);
  return /* @__PURE__ */ O.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, fo = ({ element: e, parents: r, ...t }) => {
  const n = rr(e, r);
  return co(e, r) ? /* @__PURE__ */ O.jsx(
    uo,
    {
      element: e,
      parents: r,
      onDrop: t.onDrop,
      onDragOver: t.onDragOver,
      onDragLeave: t.onDragLeave,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar
    }
  ) : n ? /* @__PURE__ */ O.jsx(
    lo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ O.jsx(
    so,
    {
      element: e,
      parents: r,
      onDrop: t.onDrop,
      onDragOver: t.onDragOver,
      onDragLeave: t.onDragLeave,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  );
}, vo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: f, onDrop: u, onHoverBar: s, onSelectBar: d }) => {
  const l = oe(null), { window: h, document: x } = Qe.useFrame(), [c, v] = je(e.text), b = Z(e.name), w = Z(e.id), { onExpressionToValue: R, onValueToExpression: T } = ge(), { onDragStart: _, onDragEnd: m } = ge(), { hideInsertBar: p } = Re(), { selectedId: M } = Ce(), { hoveredId: G } = _e(), [Y, L] = mr(!1);
  ye(() => {
    !l.current || !Y || (l.current.focus(), d(e, null));
  }, [Y, d]), Se({
    value: G,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, l.current)
  }, [G, e]), Se({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [M, e]);
  const { isDragging: P, preview: te } = He({
    id: w,
    canDrag: !Y,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      _();
    },
    end: () => {
      p(), m();
    }
  }, [w, Y, e, r, p, _, m]);
  ye(() => {
    te(
      () => We(b),
      (F) => F.remove()
    );
  }, [te, b]);
  const ne = oe({ id: Le() });
  ke({
    element: l,
    id: ne.current.id,
    drop: (F, re) => u(F, re, e, r, l, ne.current.id),
    hover: (F, re) => f(F, re, e, r, l, ne.current.id),
    leave: (F, re) => a(F, re, e, r, l, ne.current.id)
  }, [e, r, u, f, a]);
  const I = ee((F) => {
    if (!h || !x)
      return;
    const re = h.getSelection();
    if (!re)
      return;
    const ae = x.createRange(), y = F.currentTarget;
    ae.selectNodeContents(y), re.removeAllRanges(), re.addRange(ae);
  }, [h, x]), q = ee((F) => {
    F.stopPropagation(), (F.code === "Escape" || F.code === "Enter" || F.code === "NumpadEnter") && (F.currentTarget.blur(), d(e, F.currentTarget));
  }, [d, e]), ue = ee((F) => {
    L(!1), v(String(T(F.currentTarget.innerText, "text", "textContent", e))), d(e, F.currentTarget);
  }, [d, T, e]), se = pe(() => R(c, "text", "textContent", e) ?? "", [c, R, e]);
  return /* @__PURE__ */ O.jsx(
    "span",
    {
      contentEditable: Y,
      dangerouslySetInnerHTML: { __html: se },
      onBlur: ue,
      onFocus: I,
      onKeyDown: q,
      onDoubleClick: () => L(!0),
      ref: l,
      onMouseLeave: n,
      onClick: (F) => Y ? F.stopPropagation() : i(F, e),
      onMouseOver: (F) => Y ? F.stopPropagation() : t(F, e, l.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: P ? 0.5 : void 0,
        borderRadius: Y ? 4 : void 0,
        boxShadow: Y ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, po = ({ element: e }) => {
  const { onExpressionToValue: r } = ge(), t = Z(e.text);
  return pe(() => r(t, "text", "textContent", e), [t, r, e]);
}, ho = ({ element: e, parents: r, ...t }) => rr(e, r) ? /* @__PURE__ */ O.jsx(
  po,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ O.jsx(
  vo,
  {
    element: e,
    parents: r,
    onDrop: t.onDrop,
    onDragOver: t.onDragOver,
    onDragLeave: t.onDragLeave,
    onSelect: t.onSelect,
    onMouseOver: t.onMouseOver,
    onMouseLeave: t.onMouseLeave,
    onHoverBar: t.onHoverBar,
    onSelectBar: t.onSelectBar
  }
), Ie = ({ element: e, parents: r }) => {
  const t = Z(e.type), { showInsertBar: n, hideInsertBar: i } = Re(), { select: a, updateSelectBar: f } = Ce(), { hover: u, updateHoverBar: s } = _e(), { onDrop: d, value: l } = ge(), h = ee((_, m) => {
    _.stopPropagation(), _.preventDefault(), a(m.id.value);
  }, [a]), x = ee((_) => {
    _.stopPropagation(), _.preventDefault(), a(void 0), u(void 0);
  }, [a, u]), c = ee((_, m) => {
    _.stopPropagation(), u(m.id.value);
  }, [u]), v = ee((_) => {
    _.stopPropagation(), u(void 0);
  }, [u]), b = ee((_, m) => {
    s(_, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [s]), w = ee((_, m) => {
    f(_, r, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [f, r]), R = ee((_, m, p, M, G, Y) => {
    if (!Hr(m, p, M, G, Y))
      return u(void 0);
    u(p.id.value);
    const P = gn(m, p, G);
    if (!P)
      return i();
    n({
      isVisible: !0,
      top: P.top,
      left: P.left,
      width: P.width,
      height: P.height,
      isHorizontal: P.isHorizontal
    });
  }, [n, u, i]), T = ee((_, m, p, M, G, Y) => {
    var ne, I, q, ue, se, F;
    if (!Hr(m, p, M, G, Y))
      return;
    const P = yn(m, p, G);
    if (!P)
      return;
    const te = P.isOverStart || P.isOverEnd;
    if (!(!te && p.type.value === "component")) {
      if (Object.keys(_).includes("id")) {
        const re = _;
        if (te) {
          const ae = M.slice(-1).at(0), y = ((ne = (ae ? ae.children : l).value) == null ? void 0 : ne.findIndex((C) => C.id.value === p.id.value)) ?? -1;
          d({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              element: ae || "root",
              position: P.isOverStart ? y : y + 1
            }
          });
        } else {
          const ae = ((I = p.children.value) == null ? void 0 : I.length) || -1;
          d({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              element: p,
              position: P.isOverStart ? ae : ae + 1
            }
          });
        }
      } else {
        const re = _, ae = (q = re.parents) == null ? void 0 : q.slice(-1).at(0), y = ae || "root";
        if (y !== "root" && y.type.value === "component")
          return;
        const C = ((ue = (y === "root" ? l : y.children).value) == null ? void 0 : ue.findIndex((j) => j.id.value === re.element.id.value)) ?? -1;
        if (te) {
          const j = M.slice(-1).at(0), B = ((se = (j ? j.children : l).value) == null ? void 0 : se.findIndex((A) => A.id.value === p.id.value)) ?? -1;
          d({
            element: re.element,
            from: {
              position: C,
              element: y
            },
            to: {
              element: j || "root",
              position: P.isOverStart ? B : B + 1
            }
          });
        } else {
          const j = ((F = p.children.value) == null ? void 0 : F.length) || -1;
          d({
            element: re.element,
            from: {
              position: C,
              element: y
            },
            to: {
              element: p,
              position: P.isOverStart ? j : j + 1
            }
          });
        }
        a(re.element.id.value);
      }
      i();
    }
  }, [a, d, i]);
  return t === "component" ? /* @__PURE__ */ O.jsx(
    no,
    {
      parents: r,
      element: e,
      onDrop: T,
      onDragOver: R,
      onDragLeave: () => {
      },
      onDoubleClick: x,
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: w
    }
  ) : t === "slot" ? /* @__PURE__ */ O.jsx(
    fo,
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
      onHoverBar: b,
      onSelectBar: w
    }
  ) : t === "text" ? /* @__PURE__ */ O.jsx(
    ho,
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
      onHoverBar: b,
      onSelectBar: w
    }
  ) : /* @__PURE__ */ O.jsx(
    ao,
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
      onHoverBar: b,
      onSelectBar: w
    }
  );
}, yo = () => {
  const e = oe({ id: Le() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = ge(), { updateSelectBarScroll: a, select: f } = Ce(), { showInsertBar: u, hideInsertBar: s } = Re(), { updateHoverBarScroll: d, hover: l } = _e(), [h, x] = mr(null), c = Z(r), v = ee((_, m) => {
    var p;
    if (s(), !!_)
      if (Object.keys(_).includes("id"))
        n({
          element: _.id,
          from: {
            position: -1,
            element: null
          },
          to: {
            element: "root",
            position: r.value.length
          }
        });
      else {
        const M = _, G = vn(M.parents || []), Y = G || "root", L = ((p = G == null ? void 0 : G.children.value) == null ? void 0 : p.findIndex((P) => P.id.value === M.element.id.value)) ?? -1;
        n({
          element: M.element,
          from: {
            element: Y,
            position: L
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), f(M.element.id.value);
      }
  }, [r, f, s]), b = ee((_, m) => {
    const p = h == null ? void 0 : h.lastElementChild;
    if (!p)
      return;
    const M = p.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: M.left,
      width: M.width,
      height: M.height,
      top: p ? M.top + M.height : M.top
    });
  }, [h == null ? void 0 : h.lastElementChild, u]), w = ee((_, m) => {
    a(_, m), d(_, m);
  }, [a, d]), [{ isDraggingOver: R, isDraggingOverCurrent: T }] = ke({
    drop: v,
    hover: b,
    id: e.current.id,
    element: { current: h },
    leave: () => {
      s(), l(void 0);
    }
  }, [v, b, s]);
  return /* @__PURE__ */ O.jsx(
    Xn,
    {
      styles: t,
      resetBody: !0,
      draggingHover: R || T,
      children: /* @__PURE__ */ O.jsxs(Jn, { onRef: x, onScroll: w, onKeyDown: i, children: [
        /* @__PURE__ */ O.jsx(Qt, {}),
        /* @__PURE__ */ O.jsx(Sn, {}),
        /* @__PURE__ */ O.jsx(mn, {}),
        c.map((_) => /* @__PURE__ */ O.jsx(
          Ie,
          {
            parents: [],
            element: _
          },
          _.id.value
        )),
        c.length === 0 && /* @__PURE__ */ O.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ O.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
      ] })
    }
  );
};
function So({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ O.jsx(Ut, { children: /* @__PURE__ */ O.jsx(Xt, { ...i, children: /* @__PURE__ */ O.jsx(Zt, { children: /* @__PURE__ */ O.jsx(en, { id: t, onSelect: e, children: /* @__PURE__ */ O.jsx(xn, { id: n, onHover: r, children: /* @__PURE__ */ O.jsx(yo, {}) }) }) }) }) });
}
export {
  So as UIEditor
};
//# sourceMappingURL=index.es.js.map

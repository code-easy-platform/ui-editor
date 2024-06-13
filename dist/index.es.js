import xe, { createContext as Je, useContext as Ke, useRef as oe, useMemo as pe, useCallback as Q, useEffect as ye, memo as Xe, createElement as Qr, forwardRef as Wt, useState as mr } from "react";
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
function Jt() {
  if (Vr)
    return ze;
  Vr = 1;
  var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, l, d) {
    var f, p = {}, x = null, c = null;
    d !== void 0 && (x = "" + d), l.key !== void 0 && (x = "" + l.key), l.ref !== void 0 && (c = l.ref);
    for (f in l)
      n.call(l, f) && !a.hasOwnProperty(f) && (p[f] = l[f]);
    if (u && u.defaultProps)
      for (f in l = u.defaultProps, l)
        p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: r, type: u, key: x, ref: c, props: p, _owner: i.current };
  }
  return ze.Fragment = t, ze.jsx = s, ze.jsxs = s, ze;
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
function Kt() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function w(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[b];
      return typeof g == "function" ? g : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(o) {
      {
        for (var g = arguments.length, E = new Array(g > 1 ? g - 1 : 0), D = 1; D < g; D++)
          E[D - 1] = arguments[D];
        R("error", o, E);
      }
    }
    function R(o, g, E) {
      {
        var D = _.ReactDebugCurrentFrame, J = D.getStackAddendum();
        J !== "" && (g += "%s", E = E.concat([J]));
        var ee = E.map(function(q) {
          return String(q);
        });
        ee.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, ee);
      }
    }
    var m = !1, h = !1, F = !1, z = !1, $ = !1, k;
    k = Symbol.for("react.module.reference");
    function P(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || $ || o === i || o === d || o === f || z || o === c || m || h || F || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === p || o.$$typeof === s || o.$$typeof === u || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === k || o.getModuleId !== void 0));
    }
    function re(o, g, E) {
      var D = o.displayName;
      if (D)
        return D;
      var J = g.displayName || g.name || "";
      return J !== "" ? E + "(" + J + ")" : E;
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
        case f:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case u:
            var g = o;
            return ne(g) + ".Consumer";
          case s:
            var E = o;
            return ne(E._context) + ".Provider";
          case l:
            return re(o, o.render, "ForwardRef");
          case p:
            var D = o.displayName || null;
            return D !== null ? D : I(o.type) || "Memo";
          case x: {
            var J = o, ee = J._payload, q = J._init;
            try {
              return I(q(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, ue = 0, se, V, te, ae, y, C, j;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function M() {
      {
        if (ue === 0) {
          se = console.log, V = console.info, te = console.warn, ae = console.error, y = console.group, C = console.groupCollapsed, j = console.groupEnd;
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
    function Y() {
      {
        if (ue--, ue === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, o, {
              value: se
            }),
            info: N({}, o, {
              value: V
            }),
            warn: N({}, o, {
              value: te
            }),
            error: N({}, o, {
              value: ae
            }),
            group: N({}, o, {
              value: y
            }),
            groupCollapsed: N({}, o, {
              value: C
            }),
            groupEnd: N({}, o, {
              value: j
            })
          });
        }
        ue < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var A = _.ReactCurrentDispatcher, L;
    function H(o, g, E) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (J) {
            var D = J.stack.trim().match(/\n( *(at )?)/);
            L = D && D[1] || "";
          }
        return `
` + L + o;
      }
    }
    var G = !1, W;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      W = new de();
    }
    function S(o, g) {
      if (!o || G)
        return "";
      {
        var E = W.get(o);
        if (E !== void 0)
          return E;
      }
      var D;
      G = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = A.current, A.current = null, M();
      try {
        if (g) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (he) {
              D = he;
            }
            Reflect.construct(o, [], q);
          } else {
            try {
              q.call();
            } catch (he) {
              D = he;
            }
            o.call(q.prototype);
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
          for (var U = he.stack.split(`
`), ve = D.stack.split(`
`), ie = U.length - 1, ce = ve.length - 1; ie >= 1 && ce >= 0 && U[ie] !== ve[ce]; )
            ce--;
          for (; ie >= 1 && ce >= 0; ie--, ce--)
            if (U[ie] !== ve[ce]) {
              if (ie !== 1 || ce !== 1)
                do
                  if (ie--, ce--, ce < 0 || U[ie] !== ve[ce]) {
                    var me = `
` + U[ie].replace(" at new ", " at ");
                    return o.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", o.displayName)), typeof o == "function" && W.set(o, me), me;
                  }
                while (ie >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        G = !1, A.current = ee, Y(), Error.prepareStackTrace = J;
      }
      var Ae = o ? o.displayName || o.name : "", Pe = Ae ? H(Ae) : "";
      return typeof o == "function" && W.set(o, Pe), Pe;
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
        return H(o);
      switch (o) {
        case d:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return be(o.render);
          case p:
            return Te(o.type, g, E);
          case x: {
            var D = o, J = D._payload, ee = D._init;
            try {
              return Te(ee(J), g, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Cr = {}, _r = _.ReactDebugCurrentFrame;
    function Ye(o) {
      if (o) {
        var g = o._owner, E = Te(o.type, o._source, g ? g.type : null);
        _r.setExtraStackFrame(E);
      } else
        _r.setExtraStackFrame(null);
    }
    function wt(o, g, E, D, J) {
      {
        var ee = Function.call.bind(Ve);
        for (var q in o)
          if (ee(o, q)) {
            var U = void 0;
            try {
              if (typeof o[q] != "function") {
                var ve = Error((D || "React class") + ": " + E + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              U = o[q](g, q, D, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              U = ie;
            }
            U && !(U instanceof Error) && (Ye(J), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", E, q, typeof U), Ye(null)), U instanceof Error && !(U.message in Cr) && (Cr[U.message] = !0, Ye(J), T("Failed %s type: %s", E, U.message), Ye(null));
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
    var Fe = _.ReactCurrentOwner, Ct = {
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
    var Dt = function(o, g, E, D, J, ee, q) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: E,
        props: q,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function It(o, g, E, D, J) {
      {
        var ee, q = {}, U = null, ve = null;
        E !== void 0 && (Tr(E), U = "" + E), Rt(g) && (Tr(g.key), U = "" + g.key), _t(g) && (ve = g.ref, Tt(g, J));
        for (ee in g)
          Ve.call(g, ee) && !Ct.hasOwnProperty(ee) && (q[ee] = g[ee]);
        if (o && o.defaultProps) {
          var ie = o.defaultProps;
          for (ee in ie)
            q[ee] === void 0 && (q[ee] = ie[ee]);
        }
        if (U || ve) {
          var ce = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          U && Pt(q, ce), ve && jt(q, ce);
        }
        return Dt(o, U, ve, J, D, Fe.current, q);
      }
    }
    var or = _.ReactCurrentOwner, Dr = _.ReactDebugCurrentFrame;
    function Be(o) {
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
    function Bt(o) {
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
    function Br(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var E = Bt(g);
        if (Mr[E])
          return;
        Mr[E] = !0;
        var D = "";
        o && o._owner && o._owner !== or.current && (D = " It was passed a child from " + I(o._owner.type) + "."), Be(o), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, D), Be(null);
      }
    }
    function Ar(o, g) {
      {
        if (typeof o != "object")
          return;
        if (tr(o))
          for (var E = 0; E < o.length; E++) {
            var D = o[E];
            ar(D) && Br(D, g);
          }
        else if (ar(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var J = w(o);
          if (typeof J == "function" && J !== o.entries)
            for (var ee = J.call(o), q; !(q = ee.next()).done; )
              ar(q.value) && Br(q.value, g);
        }
      }
    }
    function At(o) {
      {
        var g = o.type;
        if (g == null || typeof g == "string")
          return;
        var E;
        if (typeof g == "function")
          E = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          E = g.propTypes;
        else
          return;
        if (E) {
          var D = I(g);
          wt(E, o.props, "prop", D, o);
        } else if (g.PropTypes !== void 0 && !ir) {
          ir = !0;
          var J = I(g);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(o) {
      {
        for (var g = Object.keys(o.props), E = 0; E < g.length; E++) {
          var D = g[E];
          if (D !== "children" && D !== "key") {
            Be(o), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Be(null);
            break;
          }
        }
        o.ref !== null && (Be(o), T("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var kr = {};
    function Lr(o, g, E, D, J, ee) {
      {
        var q = P(o);
        if (!q) {
          var U = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Mt();
          ve ? U += ve : U += Ir();
          var ie;
          o === null ? ie = "null" : tr(o) ? ie = "array" : o !== void 0 && o.$$typeof === r ? (ie = "<" + (I(o.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof o, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, U);
        }
        var ce = It(o, g, E, J, ee);
        if (ce == null)
          return ce;
        if (q) {
          var me = g.children;
          if (me !== void 0)
            if (D)
              if (tr(me)) {
                for (var Ae = 0; Ae < me.length; Ae++)
                  Ar(me[Ae], o);
                Object.freeze && Object.freeze(me);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ar(me, o);
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
        return o === n ? kt(ce) : At(ce), ce;
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
process.env.NODE_ENV === "production" ? hr.exports = Jt() : hr.exports = Kt();
var O = hr.exports;
const et = Je({});
function Xt({ children: e, ...r }) {
  return /* @__PURE__ */ O.jsx(et.Provider, { value: r, children: e });
}
const ge = () => Ke(et), rt = Je({}), Zt = ({ children: e }) => {
  const r = oe(le(!1)), t = oe(le(!1)), n = oe(le(0)), i = oe(le(0)), a = oe(le(0)), s = oe(le(0)), u = pe(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: s.current
  }), []), l = Q((f) => {
    fe(s.current, (p) => p !== f.top ? f.top : p), fe(a.current, (p) => p !== f.left ? f.left : p), fe(i.current, (p) => p !== f.width ? f.width : p), fe(n.current, (p) => p !== f.height ? f.height : p), fe(t.current, (p) => p !== f.isVisible ? f.isVisible : p), fe(r.current, (p) => p !== !!f.isHorizontal ? !!f.isHorizontal : p);
  }, []), d = Q(() => {
    l({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [l]);
  return /* @__PURE__ */ O.jsx(rt.Provider, { value: { showInsertBar: l, hideInsertBar: d, observables: u }, children: e });
}, Re = () => Ke(rt), Qt = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: a, observableWidth: s } = Re().observables, [u] = je(a), [l] = je(i), [d] = je(s), [f] = je(r), [p] = je(n), [x] = je(t), c = pe(() => ({
    width: x ? d : 4,
    height: x ? 4 : f,
    top: u - (x ? 2 : 0),
    left: l - (x ? 0 : 2)
  }), [f, x, l, u, d]);
  return p ? /* @__PURE__ */ O.jsx(
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
}, tt = Je({}), en = ({ children: e, id: r, onSelect: t }) => {
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
    } = e, s = tn(e, rn), u = i || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ xe.createElement("svg", Ne({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, s, {
      className: l,
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
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", s = function(c, v, b, w) {
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
    }, u = s(), l = {
      re: u,
      unicodes: r,
      regexps: s,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(c) {
        return l.up.call(c.charAt(0)) + c.slice(1);
      },
      decap: function(c) {
        return l.low.call(c.charAt(0)) + c.slice(1);
      },
      deapostrophe: function(c) {
        return c.replace(u.apostrophe, "");
      },
      fill: function(c, v, b) {
        return v != null && (c = c.replace(u.fill, function(w, _) {
          return _ ? v + _ : "";
        })), b && (c = l.deapostrophe(c)), c;
      },
      prep: function(c, v, b, w) {
        if (c = c == null ? "" : c + "", !w && u.upper.test(c) && (c = l.low.call(c)), !v && !u.hole.test(c)) {
          var _ = l.fill(c, " ");
          u.hole.test(_) && (c = _);
        }
        return !b && !u.room.test(c) && (c = c.replace(u.relax, l.relax)), c;
      },
      relax: function(c, v, b, w) {
        return v + " " + (b ? b + " " : "") + w;
      }
    }, d = {
      _: l,
      of: function(c) {
        for (var v = 0, b = l.types.length; v < b; v++)
          if (d[l.types[v]].apply(d, arguments) === c)
            return l.types[v];
      },
      flip: function(c) {
        return c.replace(/\w/g, function(v) {
          return (v == l.up.call(v) ? l.low : l.up).call(v);
        });
      },
      random: function(c) {
        return c.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? l.up : l.low).call(v);
        });
      },
      type: function(c, v) {
        d[c] = v, l.types.push(c);
      }
    }, f = {
      lower: function(c, v, b) {
        return l.fill(l.low.call(l.prep(c, v)), v, b);
      },
      snake: function(c) {
        return d.lower(c, "_", !0);
      },
      constant: function(c) {
        return d.upper(c, "_", !0);
      },
      camel: function(c) {
        return l.decap(d.pascal(c));
      },
      kebab: function(c) {
        return d.lower(c, "-", !0);
      },
      upper: function(c, v, b) {
        return l.fill(l.up.call(l.prep(c, v, !1, !0)), v, b);
      },
      capital: function(c, v, b) {
        return l.fill(l.prep(c).replace(u.capitalize, function(w, _, T) {
          return _ + l.up.call(T);
        }), v, b);
      },
      header: function(c) {
        return d.capital(c, "-", !0);
      },
      pascal: function(c) {
        return l.fill(l.prep(c, !1, !0).replace(u.pascal, function(v, b, w) {
          return l.up.call(w);
        }), "", !0);
      },
      title: function(c) {
        return d.capital(c).replace(u.improper, function(v, b, w, _) {
          return w > 0 && w < _.lastIndexOf(" ") ? l.low.call(v) : v;
        });
      },
      sentence: function(c, v, b) {
        return c = d.lower(c).replace(u.sentence, function(w, _, T) {
          return _ + l.up.call(T);
        }), v && v.forEach(function(w) {
          c = c.replace(new RegExp("\\b" + d.lower(w) + "\\b", "g"), l.cap);
        }), b && b.forEach(function(w) {
          c = c.replace(new RegExp("(\\b" + d.lower(w) + "\\. +)(\\w)"), function(_, T, R) {
            return T + l.low.call(R);
          });
        }), c;
      }
    };
    f.squish = f.pascal, d.default = d;
    for (var p in f)
      d.type(p, f[p]);
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
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), a = n ? 5 : i.height / 2, s = e.x - i.x, u = e.y - i.y, l = u >= 0 && u <= a, d = u >= i.height - a && u <= i.height, f = u >= a && u <= i.height - a, p = s >= 0 && s <= a, x = s >= i.width - a && s <= i.width, c = s >= a && s <= i.width - a;
  let v = !1, b = !1, w = !1, _ = !1;
  if (n) {
    const T = d || x || l || p;
    v = c && f && !T, b = c && f && !T, w = d || x, _ = l || p;
  } else
    w = (d || x) && !l, _ = (l || p) && !d;
  return { isOverCurrentStart: v, isOverCurrentEnd: b, isOverEnd: w, isOverStart: _ };
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), a = i ? 5 : n.height / 2, s = e.x - n.x, u = e.y - n.y, l = u >= n.height - a && u <= n.height, d = u >= a && u <= n.height - a, f = s >= 0 && s <= a, p = s >= n.width - a && s <= n.width, x = s >= a && s <= n.width - a;
  let c = !0, v = n.top, b = n.left, w = n.width, _ = n.height;
  return l && (f || p || x) ? v = n.top + n.height : d && f ? c = !1 : d && p ? (b = n.left + n.width, c = !1) : x && d && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: c,
    left: b,
    width: w,
    height: _
  };
}, Le = () => Yt(), Ce = () => {
  const e = Ke(tt), r = Q((a) => {
    e.onSelect(a);
  }, [e.id]), t = Q((a, s, u) => {
    fe(e.getPosition, () => u), fe(e.parents, s), fe(e.element, a);
  }, [e.getPosition]), n = Q((a, s) => {
    fe(e.documentHorizontalScroll, s), fe(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Q((a, s) => {
    fe(e.playgroundSize, { height: a, width: s });
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
}, bn = Xe(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: s = "#4a87ee" }) => {
  const u = oe(null), l = pe(() => {
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
        borderColor: s,
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
            left: l,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: s,
            top: t - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), mn = Xe(() => {
  const e = oe(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = ge(), { hideInsertBar: a } = Re(), {
    select: s,
    selectedId: u,
    selectedElement: l,
    selectBarGetPosition: d,
    selectedElementParents: f,
    selectBarDocumentVerticalScroll: p,
    selectBarDocumentHorizontalScroll: x
  } = Ce(), c = Z(f), v = Z(l), b = Z(u), w = Oe(({ get: P }) => v ? P(v.name) : "", [v]), { width: _, height: T, top: R, left: m } = Oe(({ get: P }) => {
    const re = P(x), ne = P(p), I = P(d);
    return I ? {
      width: I().width,
      height: I().height,
      top: I().top - ne,
      left: I().left - re
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [x, p, d]), h = Q(() => {
    const P = c == null ? void 0 : c.slice(-1).at(0);
    if (P)
      if (P.type.value === "slot-content") {
        const re = c == null ? void 0 : c.find((ne) => {
          var I;
          return ne.type.value !== "component" ? !1 : (I = ne.slots.value) == null ? void 0 : I.some((N) => N.id.value === P.id.value);
        });
        s(re == null ? void 0 : re.id.value);
      } else
        s(P.id.value);
  }, [s, c]), F = Q(() => {
    v && i(v);
  }, [i, v]), z = Q(() => {
    v && n(v);
  }, [n, v]), { preview: $, isDragging: k } = He({
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
    $(
      () => We(w),
      (P) => P.remove()
    );
  }, [$, w]), !b || _ === 0 && T === 0 && m === 0 && R === 0 ? null : /* @__PURE__ */ O.jsx(
    bn,
    {
      zIndex: 1,
      top: R - 1,
      width: _,
      height: T,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ O.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        w,
        !k && /* @__PURE__ */ O.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          c && c.length > 0 && /* @__PURE__ */ O.jsx(sn, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx(dn, { title: "Remove element", onClick: F, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx(ln, { title: "Duplicate element and children", onClick: z, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ O.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ O.jsx(fn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), ct = Je({}), xn = ({ children: e, id: r, onHover: t }) => {
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
  const e = Ke(ct), r = Q((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), t = Q((a, s) => {
    fe(e.getPosition, () => s), fe(e.element, a);
  }, [e.getPosition]), n = Q((a, s) => {
    fe(e.documentHorizontalScroll, s), fe(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Q((a, s) => {
    fe(e.playgroundSize, { height: a, width: s });
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
}, wn = Xe(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: s = "#4a87ee" }) => {
  const u = oe(null), l = pe(() => {
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
        borderColor: s,
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
            left: l,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: s,
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
  } = _e(), s = Z(a), u = Z(i), l = Z(n), d = Z(t), f = Z(e), p = Z(r), x = Oe(({ get: _ }) => d ? _(d.name) : "", [d]), { width: c, height: v, top: b, left: w } = pe(() => l ? {
    width: l().width,
    height: l().height,
    top: l().top - u,
    left: l().left - s
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [s, u, l]);
  return !p || p === f || c === 0 && v === 0 && w === 0 && b === 0 ? null : /* @__PURE__ */ O.jsx(
    wn,
    {
      zIndex: 1,
      top: b - 1,
      width: c,
      left: w - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ O.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: x })
    }
  );
});
var Qe = {}, Ue = {}, yr = { exports: {} }, qe = { exports: {} }, K = {};
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
    return K;
  Wr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function R(h) {
    if (typeof h == "object" && h !== null) {
      var F = h.$$typeof;
      switch (F) {
        case r:
          switch (h = h.type, h) {
            case l:
            case d:
            case n:
            case a:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case f:
                case v:
                case c:
                case s:
                  return h;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  function m(h) {
    return R(h) === d;
  }
  return K.AsyncMode = l, K.ConcurrentMode = d, K.ContextConsumer = u, K.ContextProvider = s, K.Element = r, K.ForwardRef = f, K.Fragment = n, K.Lazy = v, K.Memo = c, K.Portal = t, K.Profiler = a, K.StrictMode = i, K.Suspense = p, K.isAsyncMode = function(h) {
    return m(h) || R(h) === l;
  }, K.isConcurrentMode = m, K.isContextConsumer = function(h) {
    return R(h) === u;
  }, K.isContextProvider = function(h) {
    return R(h) === s;
  }, K.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, K.isForwardRef = function(h) {
    return R(h) === f;
  }, K.isFragment = function(h) {
    return R(h) === n;
  }, K.isLazy = function(h) {
    return R(h) === v;
  }, K.isMemo = function(h) {
    return R(h) === c;
  }, K.isPortal = function(h) {
    return R(h) === t;
  }, K.isProfiler = function(h) {
    return R(h) === a;
  }, K.isStrictMode = function(h) {
    return R(h) === i;
  }, K.isSuspense = function(h) {
    return R(h) === p;
  }, K.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === d || h === a || h === i || h === p || h === x || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === c || h.$$typeof === s || h.$$typeof === u || h.$$typeof === f || h.$$typeof === w || h.$$typeof === _ || h.$$typeof === T || h.$$typeof === b);
  }, K.typeOf = R, K;
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
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function R(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === a || S === i || S === p || S === x || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === c || S.$$typeof === s || S.$$typeof === u || S.$$typeof === f || S.$$typeof === w || S.$$typeof === _ || S.$$typeof === T || S.$$typeof === b);
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var be = S.$$typeof;
        switch (be) {
          case r:
            var Me = S.type;
            switch (Me) {
              case l:
              case d:
              case n:
              case a:
              case i:
              case p:
                return Me;
              default:
                var Te = Me && Me.$$typeof;
                switch (Te) {
                  case u:
                  case f:
                  case v:
                  case c:
                  case s:
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
    var h = l, F = d, z = u, $ = s, k = r, P = f, re = n, ne = v, I = c, N = t, ue = a, se = i, V = p, te = !1;
    function ae(S) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(S) || m(S) === l;
    }
    function y(S) {
      return m(S) === d;
    }
    function C(S) {
      return m(S) === u;
    }
    function j(S) {
      return m(S) === s;
    }
    function B(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function M(S) {
      return m(S) === f;
    }
    function Y(S) {
      return m(S) === n;
    }
    function A(S) {
      return m(S) === v;
    }
    function L(S) {
      return m(S) === c;
    }
    function H(S) {
      return m(S) === t;
    }
    function G(S) {
      return m(S) === a;
    }
    function W(S) {
      return m(S) === i;
    }
    function de(S) {
      return m(S) === p;
    }
    X.AsyncMode = h, X.ConcurrentMode = F, X.ContextConsumer = z, X.ContextProvider = $, X.Element = k, X.ForwardRef = P, X.Fragment = re, X.Lazy = ne, X.Memo = I, X.Portal = N, X.Profiler = ue, X.StrictMode = se, X.Suspense = V, X.isAsyncMode = ae, X.isConcurrentMode = y, X.isContextConsumer = C, X.isContextProvider = j, X.isElement = B, X.isForwardRef = M, X.isFragment = Y, X.isLazy = A, X.isMemo = L, X.isPortal = H, X.isProfiler = G, X.isStrictMode = W, X.isSuspense = de, X.isValidElementType = R, X.typeOf = m;
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
      for (var s = {}, u = 0; u < 10; u++)
        s["_" + String.fromCharCode(u)] = u;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = i() ? Object.assign : function(a, s) {
    for (var u, l = n(a), d, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var p in u)
        r.call(u, p) && (l[p] = u[p]);
      if (e) {
        d = e(u);
        for (var x = 0; x < d.length; x++)
          t.call(u, d[x]) && (l[d[x]] = u[d[x]]);
      }
    }
    return l;
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
var fr, Jr;
function _n() {
  if (Jr)
    return fr;
  Jr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = wr(), t = {}, n = st();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, u, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var p;
          try {
            if (typeof a[f] != "function") {
              var x = Error(
                (l || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            p = a[f](s, f, l, u, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var c = d ? d() : "";
            e(
              "Failed " + u + " type: " + p.message + (c ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, fr = i, fr;
}
var dr, Kr;
function Rn() {
  if (Kr)
    return dr;
  Kr = 1;
  var e = ut(), r = Cn(), t = wr(), n = st(), i = _n(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var l = "Warning: " + u;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return dr = function(u, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(y) {
      var C = y && (d && y[d] || y[f]);
      if (typeof C == "function")
        return C;
    }
    var x = "<<anonymous>>", c = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: T(),
      arrayOf: R,
      element: m(),
      elementType: h(),
      instanceOf: F,
      node: P(),
      objectOf: $,
      oneOf: z,
      oneOfType: k,
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
      function B(Y, A, L, H, G, W, de) {
        if (H = H || x, W = W || L, de !== t) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = H + ":" + L;
            !C[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), C[be] = !0, j++);
          }
        }
        return A[L] == null ? Y ? A[L] === null ? new b("The " + G + " `" + W + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new b("The " + G + " `" + W + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : y(A, L, H, G, W);
      }
      var M = B.bind(null, !1);
      return M.isRequired = B.bind(null, !0), M;
    }
    function _(y) {
      function C(j, B, M, Y, A, L) {
        var H = j[B], G = se(H);
        if (G !== y) {
          var W = V(H);
          return new b(
            "Invalid " + Y + " `" + A + "` of type " + ("`" + W + "` supplied to `" + M + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return w(C);
    }
    function T() {
      return w(s);
    }
    function R(y) {
      function C(j, B, M, Y, A) {
        if (typeof y != "function")
          return new b("Property `" + A + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var L = j[B];
        if (!Array.isArray(L)) {
          var H = se(L);
          return new b("Invalid " + Y + " `" + A + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected an array."));
        }
        for (var G = 0; G < L.length; G++) {
          var W = y(L, G, M, Y, A + "[" + G + "]", t);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return w(C);
    }
    function m() {
      function y(C, j, B, M, Y) {
        var A = C[j];
        if (!u(A)) {
          var L = se(A);
          return new b("Invalid " + M + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(y);
    }
    function h() {
      function y(C, j, B, M, Y) {
        var A = C[j];
        if (!e.isValidElementType(A)) {
          var L = se(A);
          return new b("Invalid " + M + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(y);
    }
    function F(y) {
      function C(j, B, M, Y, A) {
        if (!(j[B] instanceof y)) {
          var L = y.name || x, H = ae(j[B]);
          return new b("Invalid " + Y + " `" + A + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return w(C);
    }
    function z(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function C(j, B, M, Y, A) {
        for (var L = j[B], H = 0; H < y.length; H++)
          if (v(L, y[H]))
            return null;
        var G = JSON.stringify(y, function(de, S) {
          var be = V(S);
          return be === "symbol" ? String(S) : S;
        });
        return new b("Invalid " + Y + " `" + A + "` of value `" + String(L) + "` " + ("supplied to `" + M + "`, expected one of " + G + "."));
      }
      return w(C);
    }
    function $(y) {
      function C(j, B, M, Y, A) {
        if (typeof y != "function")
          return new b("Property `" + A + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var L = j[B], H = se(L);
        if (H !== "object")
          return new b("Invalid " + Y + " `" + A + "` of type " + ("`" + H + "` supplied to `" + M + "`, expected an object."));
        for (var G in L)
          if (n(L, G)) {
            var W = y(L, G, M, Y, A + "." + G, t);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return w(C);
    }
    function k(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var C = 0; C < y.length; C++) {
        var j = y[C];
        if (typeof j != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(j) + " at index " + C + "."
          ), s;
      }
      function B(M, Y, A, L, H) {
        for (var G = [], W = 0; W < y.length; W++) {
          var de = y[W], S = de(M, Y, A, L, H, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && G.push(S.data.expectedType);
        }
        var be = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new b("Invalid " + L + " `" + H + "` supplied to " + ("`" + A + "`" + be + "."));
      }
      return w(B);
    }
    function P() {
      function y(C, j, B, M, Y) {
        return N(C[j]) ? null : new b("Invalid " + M + " `" + Y + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return w(y);
    }
    function re(y, C, j, B, M) {
      return new b(
        (y || "React class") + ": " + C + " type `" + j + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function ne(y) {
      function C(j, B, M, Y, A) {
        var L = j[B], H = se(L);
        if (H !== "object")
          return new b("Invalid " + Y + " `" + A + "` of type `" + H + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var G in y) {
          var W = y[G];
          if (typeof W != "function")
            return re(M, Y, A, G, V(W));
          var de = W(L, G, M, Y, A + "." + G, t);
          if (de)
            return de;
        }
        return null;
      }
      return w(C);
    }
    function I(y) {
      function C(j, B, M, Y, A) {
        var L = j[B], H = se(L);
        if (H !== "object")
          return new b("Invalid " + Y + " `" + A + "` of type `" + H + "` " + ("supplied to `" + M + "`, expected `object`."));
        var G = r({}, j[B], y);
        for (var W in G) {
          var de = y[W];
          if (n(y, W) && typeof de != "function")
            return re(M, Y, A, W, V(de));
          if (!de)
            return new b(
              "Invalid " + Y + " `" + A + "` key `" + W + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(j[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var S = de(L, W, M, Y, A + "." + W, t);
          if (S)
            return S;
        }
        return null;
      }
      return w(C);
    }
    function N(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(N);
          if (y === null || u(y))
            return !0;
          var C = p(y);
          if (C) {
            var j = C.call(y), B;
            if (C !== y.entries) {
              for (; !(B = j.next()).done; )
                if (!N(B.value))
                  return !1;
            } else
              for (; !(B = j.next()).done; ) {
                var M = B.value;
                if (M && !N(M[1]))
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
    function V(y) {
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
    function te(y) {
      var C = V(y);
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
    function n(s, u, l, d, f, p) {
      if (p !== e) {
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
var Mn = Sr.Provider, Bn = Sr.Consumer;
we.FrameContextProvider = Mn;
we.FrameContextConsumer = Bn;
var Er = {};
Object.defineProperty(Er, "__esModule", {
  value: !0
});
var An = /* @__PURE__ */ function() {
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
  return An(r, [{
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
      var s = i.props.forwardedRef;
      typeof s == "function" ? s(a) : s && (s.current = a);
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
      var i = this.props.contentDidMount, a = this.props.contentDidUpdate, s = n.defaultView || n.parentView, u = De.default.createElement(
        Yn.default,
        {
          contentDidMount: i,
          contentDidUpdate: a
        },
        De.default.createElement(
          Wn.FrameContextProvider,
          { value: { document: n, window: s } },
          De.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), l = this.getMountTarget();
      return l ? [Zr.default.createPortal(this.props.head, this.getDoc().head), Zr.default.createPortal(u, l)] : null;
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
const Jn = /* @__PURE__ */ Gt(Qe), Kn = ({ children: e, onScroll: r, onRef: t, onKeyDown: n, onClick: i }) => {
  const { document: a } = Qe.useFrame();
  return ye(() => {
    a && t(a);
  }, [t, a]), ye(() => {
    a && (a.onclick = i, a.onkeydown = n, a.onscroll = (s) => r(s.target.documentElement.scrollTop, s.target.documentElement.scrollLeft));
  }, [a, r, n, i]), e;
}, Xn = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = Z(
    pe(() => xr(({ get: s }) => s(r).map((u) => ({
      id: s(u.id),
      content: s(u.content)
    }))), [r])
  ), a = pe(() => /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    i.map((s) => Qr("style", { key: s.id }, s.content)),
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
    Jn,
    {
      tabIndex: -1,
      head: a,
      mountTarget: "body",
      onContextMenu: (s) => s.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, Zn = (e, r) => Oe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), rr = (e, r) => Oe(({ get: n }) => {
  const i = [...r].reverse();
  let a;
  for (let s = 0; s < i.length; s++) {
    const u = i[s];
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
    const s = a(e);
    if (!r)
      return !1;
    const u = a(r);
    return s === u;
  }, [...n]);
  ye(() => {
    i && t();
  }, [i]);
}, eo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: a }) => {
  const s = oe(null), { selectedId: u } = Ce(), { hoveredId: l } = _e(), d = Z(e.name);
  return Se({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, s.current)
  }, [l, e]), Se({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, s.current)
  }, [u, e]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: n,
      onClick: (f) => a(f, e),
      onMouseOver: (f) => i(f, e, s.current),
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
}, ro = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: l, onSelectBar: d, onDoubleClick: f }) => {
  const p = oe(null), { onDragStart: x, onDragEnd: c, components: v } = ge(), { hideInsertBar: b } = Re(), { selectedId: w } = Ce(), { hoveredId: _ } = _e(), T = Z(e.name), R = Z(e.id), m = Oe(({ get: k }) => {
    const P = k(v).find((re) => k(re.id) === k(e.referenceComponentId));
    return P ? k(P.content) : [];
  }, [v, e]);
  Se({
    value: _,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, p.current)
  }, [_, e]), Se({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, p.current)
  }, [w, e]);
  const h = pe(() => !m || m.length === 0 ? null : m.map((k) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: k,
      parents: [...r, e]
    },
    k.id.value
  )), [m, r, e]), { isDragging: F, preview: z } = He({
    id: R,
    element: p,
    data: { element: e, parents: r },
    start: () => {
      x();
    },
    end: () => {
      b(), c();
    }
  }, [R, e, r, b, x, c]);
  ye(() => {
    z(
      () => We(T),
      (k) => k.remove()
    );
  }, [z, T]);
  const $ = oe({ id: Le() });
  return ke({
    element: p,
    id: $.current.id,
    drop: (k, P) => u(k, P, e, r, p, $.current.id),
    hover: (k, P) => s(k, P, e, r, p, $.current.id),
    leave: (k, P) => a(k, P, e, r, p, $.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: p,
      onMouseLeave: n,
      onClick: (k) => i(k, e),
      onDoubleClick: (k) => f(k, e),
      onMouseOver: (k) => t(k, e, p.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: F ? 0.5 : void 0 },
      children: h
    }
  );
}, to = ({ element: e, parents: r }) => {
  const { components: t } = ge(), n = Oe(({ get: i }) => {
    const a = i(t).find((s) => i(s.id) === i(e.referenceComponentId));
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
    return i.forEach((s) => {
      const u = n(s.name), l = n(s.value);
      u && (a[at(u)] = r(l, u, "style", e));
    }), a;
  }), [e, r, e]);
  return Z(t);
}, bt = (e) => {
  const { onExpressionToValue: r } = ge(), t = pe(() => xr({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const a = {}, s = {};
      return i.forEach((u) => {
        const l = n(u.name);
        if (l === void 0 || l === "hidden" || l === "style")
          return;
        const d = r(n(u.value), l, "attribute", e), f = at(l);
        switch (f) {
          case "options":
            s.options = d;
            break;
          case "className":
            a.className = d;
            break;
          case "class":
            a.className = d;
            break;
          default:
            if (l.startsWith("data-")) {
              a[l] = d;
              return;
            } else
              a[f] = d;
            break;
        }
      }), [a, s];
    }
  }), [e, r]);
  return Z(t);
}, mt = Wt(({ tag: e, ...r }, t) => Qr(e, { ref: t, ...r })), oo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: l, onSelectBar: d }) => {
  const f = oe(null), [p, x] = mr(!1), [
    c
    /* elementSpecialProps */
  ] = bt(e), v = Z(e.children), b = gt(e), w = Z(e.name), _ = Z(e.tag), T = Z(e.id), { onDragStart: R, onDragEnd: m } = ge(), { hideInsertBar: h } = Re(), { selectedId: F } = Ce(), { hoveredId: z } = _e();
  Se({
    value: z,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, f.current)
  }, [z, e]), Se({
    value: F,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [F, e]), ye(() => {
    x((N) => z.value === T === N ? N : !N);
    const I = z.subscribe((N) => {
      x((ue) => N === T === ue ? ue : !ue);
    });
    return () => I.unsubscribe();
  }, [T, z]);
  const $ = pe(() => !v || v.length === 0 ? null : v.map((I) => /* @__PURE__ */ O.jsx(
    Ie,
    {
      element: I,
      parents: [...r, e]
    },
    I.id.value
  )), [v, r, e]), k = pe(() => v !== void 0, [v]), { isDragging: P, preview: re } = He({
    id: T,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      R();
    },
    end: () => {
      h(), m();
    }
  }, [T, e, r, h, R, m]);
  ye(() => {
    re(
      () => We(w),
      (I) => I.remove()
    );
  }, [re, w]);
  const ne = oe({ id: Le() });
  return ke({
    element: f,
    id: ne.current.id,
    drop: (I, N) => u(I, N, e, r, f, ne.current.id),
    hover: (I, N) => s(I, N, e, r, f, ne.current.id),
    leave: (I, N) => a(I, N, e, r, f, ne.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ O.jsx(
    mt,
    {
      readOnly: !0,
      tag: _,
      ref: f,
      children: $,
      onMouseLeave: n,
      onClick: (I) => i(I, e),
      onMouseOver: (I) => t(I, e, f.current),
      ...c !== void 0 ? { ...c, ...p ? { disabled: !1 } : {} } : {},
      style: {
        ...b,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: P ? 0.5 : typeof b.opacity == "number" ? Number(b.opacity) : void 0,
        minWidth: $ === null && k ? 40 : typeof b.minWidth == "number" ? Number(b.minWidth) : void 0,
        minHeight: $ === null && k ? 40 : typeof b.minHeight == "number" ? Number(b.minHeight) : void 0
      }
    }
  );
}, io = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = bt(e), n = Z(e.children), i = gt(e), a = Z(e.tag), s = pe(() => !n || n.length === 0 ? null : n.map((u) => /* @__PURE__ */ O.jsx(
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
      children: s,
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
    const i = n(t), a = [...r].reverse(), s = a.findIndex((d) => {
      var x;
      if (n(d.type) !== "component")
        return !1;
      const f = d;
      return n(e.componentId) === n(f.referenceComponentId) ? (x = n(f.slots)) == null ? void 0 : x.some((c) => n(c.referenceSlotId) === n(e.id)) : !1;
    });
    return !a.at(s) || a.slice(s + 1).reduce((d, f) => d !== void 0 ? d : n(f.type) === "slot-content" ? !1 : n(f.type) === "component" ? !0 : d, void 0) ? !1 : i.some((d) => n(d.id) === n(e.componentId));
  }, [r, e, t]);
}, xt = (e, r) => {
  const { onAddSlotContent: t } = ge();
  return Oe(({ get: n }) => {
    var s;
    const i = [...r].reverse().filter((u) => n(u.type) === "component").find((u) => n(u.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const a = (s = n(i.slots)) == null ? void 0 : s.find((u) => n(u.referenceSlotId) === n(e.id));
    return a ? [n(a.children), a] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, uo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: a, onDrop: s, onHoverBar: u }) => {
  const l = oe(null), [d = [], f] = xt(e, r), { hoveredId: p } = _e();
  Se({
    value: p,
    matchWidthValue: f == null ? void 0 : f.id,
    effect() {
      f && u(e, l.current);
    }
  }, [p, f == null ? void 0 : f.id, e]);
  const x = oe({ id: Le() });
  return ke({
    element: l,
    id: x.current.id,
    drop: (c, v) => f ? s(c, v, f, r, l, x.current.id) : void 0,
    hover: (c, v) => f ? a(c, v, f, r, l, x.current.id) : void 0,
    leave: (c, v) => f ? i(c, v, f, r, l, x.current.id) : void 0
  }, [f, r, s, a, i]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (c) => f ? t(c, f, l.current) : void 0,
      children: [
        f && d.length > 0 && d.map((c) => /* @__PURE__ */ O.jsx(
          Ie,
          {
            element: c,
            parents: [...r, f]
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
}, so = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: l, onSelectBar: d }) => {
  const f = oe(null), { onDragStart: p, onDragEnd: x } = ge(), { hideInsertBar: c } = Re(), { selectedId: v } = Ce(), { hoveredId: b } = _e(), w = Z(e.name), _ = Z(e.id);
  Se({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, f.current)
  }, [b, e]), Se({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [v, e]);
  const { isDragging: T, preview: R } = He({
    id: _,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      p();
    },
    end: () => {
      c(), x();
    }
  }, [_, e, r, c, p, x]);
  ye(() => {
    R(
      () => We(w),
      (h) => h.remove()
    );
  }, [R, w]);
  const m = oe({ id: Le() });
  return ke({
    element: f,
    id: m.current.id,
    drop: (h, F) => u(h, F, e, r, f, m.current.id),
    hover: (h, F) => s(h, F, e, r, f, m.current.id),
    leave: (h, F) => a(h, F, e, r, f, m.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ O.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: n,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => t(h, e, f.current),
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
}, vo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: l, onSelectBar: d }) => {
  const f = oe(null), { window: p, document: x } = Qe.useFrame(), [c, v] = je(e.text), b = Z(e.name), w = Z(e.id), { onExpressionToValue: _, onValueToExpression: T } = ge(), { onDragStart: R, onDragEnd: m } = ge(), { hideInsertBar: h } = Re(), { selectedId: F } = Ce(), { hoveredId: z } = _e(), [$, k] = mr(!1);
  ye(() => {
    !f.current || !$ || (f.current.focus(), d(e, null));
  }, [$, d]), Se({
    value: z,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, f.current)
  }, [z, e]), Se({
    value: F,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [F, e]);
  const { isDragging: P, preview: re } = He({
    id: w,
    canDrag: !$,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      R();
    },
    end: () => {
      h(), m();
    }
  }, [w, $, e, r, h, R, m]);
  ye(() => {
    re(
      () => We(b),
      (V) => V.remove()
    );
  }, [re, b]);
  const ne = oe({ id: Le() });
  ke({
    element: f,
    id: ne.current.id,
    drop: (V, te) => u(V, te, e, r, f, ne.current.id),
    hover: (V, te) => s(V, te, e, r, f, ne.current.id),
    leave: (V, te) => a(V, te, e, r, f, ne.current.id)
  }, [e, r, u, s, a]);
  const I = Q((V) => {
    if (!p || !x)
      return;
    const te = p.getSelection();
    if (!te)
      return;
    const ae = x.createRange(), y = V.currentTarget;
    ae.selectNodeContents(y), te.removeAllRanges(), te.addRange(ae);
  }, [p, x]), N = Q((V) => {
    V.stopPropagation(), (V.code === "Escape" || V.code === "Enter" || V.code === "NumpadEnter") && (V.currentTarget.blur(), d(e, V.currentTarget));
  }, [d, e]), ue = Q((V) => {
    k(!1), v(String(T(V.currentTarget.innerText, "text", "textContent", e))), d(e, V.currentTarget);
  }, [d, T, e]), se = pe(() => _(c, "text", "textContent", e) ?? "", [c, _, e]);
  return /* @__PURE__ */ O.jsx(
    "span",
    {
      contentEditable: $,
      dangerouslySetInnerHTML: { __html: se },
      onBlur: ue,
      onFocus: I,
      onKeyDown: N,
      onDoubleClick: () => k(!0),
      ref: f,
      onMouseLeave: n,
      onClick: (V) => $ ? V.stopPropagation() : i(V, e),
      onMouseOver: (V) => $ ? V.stopPropagation() : t(V, e, f.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: P ? 0.5 : void 0,
        borderRadius: $ ? 4 : void 0,
        boxShadow: $ ? "0 0 6px 2px orange" : void 0
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
  const t = Z(e.type), { showInsertBar: n, hideInsertBar: i } = Re(), { select: a, updateSelectBar: s } = Ce(), { hover: u, updateHoverBar: l } = _e(), { onDrop: d, value: f } = ge(), p = Q((R, m) => {
    R.stopPropagation(), R.preventDefault(), a(m.id.value);
  }, [a]), x = Q((R) => {
    R.stopPropagation(), R.preventDefault(), a(void 0), u(void 0);
  }, [a, u]), c = Q((R, m) => {
    R.stopPropagation(), u(m.id.value);
  }, [u]), v = Q((R) => {
    R.stopPropagation(), u(void 0);
  }, [u]), b = Q((R, m) => {
    l(R, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [l]), w = Q((R, m) => {
    s(R, r, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [s, r]), _ = Q((R, m, h, F, z, $) => {
    if (!Hr(m, h, F, z, $))
      return u(void 0);
    u(h.id.value);
    const P = gn(m, h, z);
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
  }, [n, u, i]), T = Q((R, m, h, F, z, $) => {
    var ne, I, N, ue, se, V;
    if (!Hr(m, h, F, z, $))
      return;
    const P = yn(m, h, z);
    if (!P)
      return;
    const re = P.isOverStart || P.isOverEnd;
    if (!(!re && h.type.value === "component")) {
      if (Object.keys(R).includes("id")) {
        const te = R;
        if (re) {
          const ae = F.slice(-1).at(0), y = ((ne = (ae ? ae.children : f).value) == null ? void 0 : ne.findIndex((C) => C.id.value === h.id.value)) ?? -1;
          d({
            element: te.id,
            from: { position: -1, element: null },
            to: {
              element: ae || "root",
              position: P.isOverStart ? y : y + 1
            }
          });
        } else {
          const ae = ((I = h.children.value) == null ? void 0 : I.length) || -1;
          d({
            element: te.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: P.isOverStart ? ae : ae + 1
            }
          });
        }
      } else {
        const te = R, ae = (N = te.parents) == null ? void 0 : N.slice(-1).at(0), y = ae || "root";
        if (y !== "root" && y.type.value === "component")
          return;
        const C = ((ue = (y === "root" ? f : y.children).value) == null ? void 0 : ue.findIndex((j) => j.id.value === te.element.id.value)) ?? -1;
        if (re) {
          const j = F.slice(-1).at(0), B = ((se = (j ? j.children : f).value) == null ? void 0 : se.findIndex((M) => M.id.value === h.id.value)) ?? -1;
          d({
            element: te.element,
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
          const j = ((V = h.children.value) == null ? void 0 : V.length) || -1;
          d({
            element: te.element,
            from: {
              position: C,
              element: y
            },
            to: {
              element: h,
              position: P.isOverStart ? j : j + 1
            }
          });
        }
        a(te.element.id.value);
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
      onDragOver: _,
      onDragLeave: () => {
      },
      onDoubleClick: x,
      onSelect: p,
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
      onDragOver: _,
      onDragLeave: () => {
      },
      onSelect: p,
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
      onDragOver: _,
      onDragLeave: () => {
      },
      onSelect: p,
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
      onDragOver: _,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: w
    }
  );
}, yo = () => {
  const e = oe({ id: Le() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = ge(), { updateSelectBarScroll: a, select: s } = Ce(), { showInsertBar: u, hideInsertBar: l } = Re(), { updateHoverBarScroll: d, hover: f } = _e(), [p, x] = mr(null), c = Z(r), v = Q((m, h) => {
    var F;
    if (l(), !!m)
      if (Object.keys(m).includes("id"))
        n({
          element: m.id,
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
        const z = m, $ = vn(z.parents || []), k = $ || "root", P = ((F = $ == null ? void 0 : $.children.value) == null ? void 0 : F.findIndex((re) => re.id.value === z.element.id.value)) ?? -1;
        n({
          element: z.element,
          from: {
            element: k,
            position: P
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), s(z.element.id.value);
      }
  }, [r, s, l]), b = Q((m, h) => {
    const F = p == null ? void 0 : p.lastElementChild;
    if (!F)
      return;
    const z = F.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: z.left,
      width: z.width,
      height: z.height,
      top: F ? z.top + z.height : z.top
    });
  }, [p == null ? void 0 : p.lastElementChild, u]), w = Q((m, h) => {
    a(m, h), d(m, h);
  }, [a, d]), _ = Q((m) => {
    m.stopPropagation(), s(void 0);
  }, [s]), [{ isDraggingOver: T, isDraggingOverCurrent: R }] = ke({
    drop: v,
    hover: b,
    id: e.current.id,
    element: { current: p },
    leave: () => {
      l(), f(void 0);
    }
  }, [v, b, l]);
  return /* @__PURE__ */ O.jsx(
    Xn,
    {
      styles: t,
      resetBody: !0,
      draggingHover: T || R,
      children: /* @__PURE__ */ O.jsxs(
        Kn,
        {
          onClick: _,
          onKeyDown: i,
          onScroll: w,
          onRef: x,
          children: [
            /* @__PURE__ */ O.jsx(Qt, {}),
            /* @__PURE__ */ O.jsx(Sn, {}),
            /* @__PURE__ */ O.jsx(mn, {}),
            c.map((m) => /* @__PURE__ */ O.jsx(
              Ie,
              {
                parents: [],
                element: m
              },
              m.id.value
            )),
            c.length === 0 && /* @__PURE__ */ O.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ O.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
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

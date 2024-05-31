import be, { createContext as Ne, useContext as Ge, useRef as ne, useMemo as he, useCallback as ee, useEffect as me, memo as Je, createElement as Zt, forwardRef as Wr, useState as Qt } from "react";
import { useDrag as Ke, useDrop as Ve, DragAndDropProvider as Ur } from "react-use-drag-and-drop";
import { observe as ae, set as ce, useObserver as Be, useObserverValue as K, useSelectorValue as Se, selector as gt } from "react-observing";
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
  var e = be, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, s, d) {
    var f, h = {}, O = null, c = null;
    d !== void 0 && (O = "" + d), s.key !== void 0 && (O = "" + s.key), s.ref !== void 0 && (c = s.ref);
    for (f in s)
      n.call(s, f) && !a.hasOwnProperty(f) && (h[f] = s[f]);
    if (u && u.defaultProps)
      for (f in s = u.defaultProps, s)
        h[f] === void 0 && (h[f] = s[f]);
    return { $$typeof: t, type: u, key: O, ref: c, props: h, _owner: i.current };
  }
  return Fe.Fragment = r, Fe.jsx = l, Fe.jsxs = l, Fe;
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
    var e = be, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function x(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[b];
      return typeof g == "function" ? g : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(o) {
      {
        for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), j = 1; j < g; j++)
          S[j - 1] = arguments[j];
        _("error", o, S);
      }
    }
    function _(o, g, S) {
      {
        var j = R.ReactDebugCurrentFrame, Y = j.getStackAddendum();
        Y !== "" && (g += "%s", S = S.concat([Y]));
        var J = S.map(function(W) {
          return String(W);
        });
        J.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, J);
      }
    }
    var m = !1, p = !1, A = !1, X = !1, Z = !1, L;
    L = Symbol.for("react.module.reference");
    function D(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || Z || o === i || o === d || o === f || X || o === c || m || p || A || typeof o == "object" && o !== null && (o.$$typeof === O || o.$$typeof === h || o.$$typeof === l || o.$$typeof === u || o.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === L || o.getModuleId !== void 0));
    }
    function ue(o, g, S) {
      var j = o.displayName;
      if (j)
        return j;
      var Y = g.displayName || g.name || "";
      return Y !== "" ? S + "(" + Y + ")" : S;
    }
    function de(o) {
      return o.displayName || "Context";
    }
    function G(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case n:
          return "Fragment";
        case r:
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
            return de(g) + ".Consumer";
          case l:
            var S = o;
            return de(S._context) + ".Provider";
          case s:
            return ue(o, o.render, "ForwardRef");
          case h:
            var j = o.displayName || null;
            return j !== null ? j : G(o.type) || "Memo";
          case O: {
            var Y = o, J = Y._payload, W = Y._init;
            try {
              return G(W(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, Q = 0, te, ve, se, ie, y, E, T;
    function M() {
    }
    M.__reactDisabledLog = !0;
    function I() {
      {
        if (Q === 0) {
          te = console.log, ve = console.info, se = console.warn, ie = console.error, y = console.group, E = console.groupCollapsed, T = console.groupEnd;
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
        Q++;
      }
    }
    function H() {
      {
        if (Q--, Q === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, o, {
              value: te
            }),
            info: $({}, o, {
              value: ve
            }),
            warn: $({}, o, {
              value: se
            }),
            error: $({}, o, {
              value: ie
            }),
            group: $({}, o, {
              value: y
            }),
            groupCollapsed: $({}, o, {
              value: E
            }),
            groupEnd: $({}, o, {
              value: T
            })
          });
        }
        Q < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = R.ReactCurrentDispatcher, k;
    function F(o, g, S) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Y) {
            var j = Y.stack.trim().match(/\n( *(at )?)/);
            k = j && j[1] || "";
          }
        return `
` + k + o;
      }
    }
    var U = !1, z;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      z = new le();
    }
    function w(o, g) {
      if (!o || U)
        return "";
      {
        var S = z.get(o);
        if (S !== void 0)
          return S;
      }
      var j;
      U = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = B.current, B.current = null, I();
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
            } catch (pe) {
              j = pe;
            }
            Reflect.construct(o, [], W);
          } else {
            try {
              W.call();
            } catch (pe) {
              j = pe;
            }
            o.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            j = pe;
          }
          o();
        }
      } catch (pe) {
        if (pe && j && typeof pe.stack == "string") {
          for (var V = pe.stack.split(`
`), fe = j.stack.split(`
`), re = V.length - 1, oe = fe.length - 1; re >= 1 && oe >= 0 && V[re] !== fe[oe]; )
            oe--;
          for (; re >= 1 && oe >= 0; re--, oe--)
            if (V[re] !== fe[oe]) {
              if (re !== 1 || oe !== 1)
                do
                  if (re--, oe--, oe < 0 || V[re] !== fe[oe]) {
                    var ge = `
` + V[re].replace(" at new ", " at ");
                    return o.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", o.displayName)), typeof o == "function" && z.set(o, ge), ge;
                  }
                while (re >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        U = !1, B.current = J, H(), Error.prepareStackTrace = Y;
      }
      var Ae = o ? o.displayName || o.name : "", Te = Ae ? F(Ae) : "";
      return typeof o == "function" && z.set(o, Te), Te;
    }
    function ye(o, g, S) {
      return w(o, !1);
    }
    function Ie(o) {
      var g = o.prototype;
      return !!(g && g.isReactComponent);
    }
    function Re(o, g, S) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return w(o, Ie(o));
      if (typeof o == "string")
        return F(o);
      switch (o) {
        case d:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case s:
            return ye(o.render);
          case h:
            return Re(o.type, g, S);
          case O: {
            var j = o, Y = j._payload, J = j._init;
            try {
              return Re(J(Y), g, S);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Et = {}, _t = R.ReactDebugCurrentFrame;
    function We(o) {
      if (o) {
        var g = o._owner, S = Re(o.type, o._source, g ? g.type : null);
        _t.setExtraStackFrame(S);
      } else
        _t.setExtraStackFrame(null);
    }
    function wr(o, g, S, j, Y) {
      {
        var J = Function.call.bind(ke);
        for (var W in o)
          if (J(o, W)) {
            var V = void 0;
            try {
              if (typeof o[W] != "function") {
                var fe = Error((j || "React class") + ": " + S + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              V = o[W](g, W, j, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              V = re;
            }
            V && !(V instanceof Error) && (We(Y), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", S, W, typeof V), We(null)), V instanceof Error && !(V.message in Et) && (Et[V.message] = !0, We(Y), P("Failed %s type: %s", S, V.message), We(null));
          }
      }
    }
    var Sr = Array.isArray;
    function et(o) {
      return Sr(o);
    }
    function Or(o) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, S = g && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return S;
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
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(o)), Ct(o);
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
        var S = G(Le.current.type);
        tt[S] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Le.current.type), o.ref), tt[S] = !0);
      }
    }
    function Pr(o, g) {
      {
        var S = function() {
          Tt || (Tt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function jr(o, g) {
      {
        var S = function() {
          Pt || (Pt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Dr = function(o, g, S, j, Y, J, W) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: S,
        props: W,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Ir(o, g, S, j, Y) {
      {
        var J, W = {}, V = null, fe = null;
        S !== void 0 && (Rt(S), V = "" + S), Rr(g) && (Rt(g.key), V = "" + g.key), Cr(g) && (fe = g.ref, Tr(g, Y));
        for (J in g)
          ke.call(g, J) && !_r.hasOwnProperty(J) && (W[J] = g[J]);
        if (o && o.defaultProps) {
          var re = o.defaultProps;
          for (J in re)
            W[J] === void 0 && (W[J] = re[J]);
        }
        if (V || fe) {
          var oe = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          V && Pr(W, oe), fe && jr(W, oe);
        }
        return Dr(o, V, fe, Y, j, Le.current, W);
      }
    }
    var rt = R.ReactCurrentOwner, jt = R.ReactDebugCurrentFrame;
    function Me(o) {
      if (o) {
        var g = o._owner, S = Re(o.type, o._source, g ? g.type : null);
        jt.setExtraStackFrame(S);
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
          var o = G(rt.current.type);
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
          var S = typeof o == "string" ? o : o.displayName || o.name;
          S && (g = `

Check the top-level render call using <` + S + ">.");
        }
        return g;
      }
    }
    function Mt(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var S = Ar(g);
        if (It[S])
          return;
        It[S] = !0;
        var j = "";
        o && o._owner && o._owner !== rt.current && (j = " It was passed a child from " + G(o._owner.type) + "."), Me(o), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, j), Me(null);
      }
    }
    function At(o, g) {
      {
        if (typeof o != "object")
          return;
        if (et(o))
          for (var S = 0; S < o.length; S++) {
            var j = o[S];
            ot(j) && Mt(j, g);
          }
        else if (ot(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var Y = x(o);
          if (typeof Y == "function" && Y !== o.entries)
            for (var J = Y.call(o), W; !(W = J.next()).done; )
              ot(W.value) && Mt(W.value, g);
        }
      }
    }
    function Br(o) {
      {
        var g = o.type;
        if (g == null || typeof g == "string")
          return;
        var S;
        if (typeof g == "function")
          S = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === h))
          S = g.propTypes;
        else
          return;
        if (S) {
          var j = G(g);
          wr(S, o.props, "prop", j, o);
        } else if (g.PropTypes !== void 0 && !nt) {
          nt = !0;
          var Y = G(g);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(o) {
      {
        for (var g = Object.keys(o.props), S = 0; S < g.length; S++) {
          var j = g[S];
          if (j !== "children" && j !== "key") {
            Me(o), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Me(null);
            break;
          }
        }
        o.ref !== null && (Me(o), P("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var Bt = {};
    function kt(o, g, S, j, Y, J) {
      {
        var W = D(o);
        if (!W) {
          var V = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = Mr();
          fe ? V += fe : V += Dt();
          var re;
          o === null ? re = "null" : et(o) ? re = "array" : o !== void 0 && o.$$typeof === t ? (re = "<" + (G(o.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : re = typeof o, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, V);
        }
        var oe = Ir(o, g, S, Y, J);
        if (oe == null)
          return oe;
        if (W) {
          var ge = g.children;
          if (ge !== void 0)
            if (j)
              if (et(ge)) {
                for (var Ae = 0; Ae < ge.length; Ae++)
                  At(ge[Ae], o);
                Object.freeze && Object.freeze(ge);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              At(ge, o);
        }
        if (ke.call(g, "key")) {
          var Te = G(o), pe = Object.keys(g).filter(function(Hr) {
            return Hr !== "key";
          }), it = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bt[Te + it]) {
            var $r = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, it, Te, $r, Te), Bt[Te + it] = !0;
          }
        }
        return o === n ? kr(oe) : Br(oe), oe;
      }
    }
    function Lr(o, g, S) {
      return kt(o, g, S, !0);
    }
    function Fr(o, g, S) {
      return kt(o, g, S, !1);
    }
    var zr = Fr, Vr = Lr;
    ze.Fragment = n, ze.jsx = zr, ze.jsxs = Vr;
  }()), ze;
}
process.env.NODE_ENV === "production" ? vt.exports = Jr() : vt.exports = Kr();
var C = vt.exports;
const er = Ne({}), Xr = ({ children: e, ...t }) => /* @__PURE__ */ C.jsx(er.Provider, { value: t, children: e }), Ee = () => Ge(er), tr = Ne({}), Zr = ({ children: e }) => {
  const t = ne(ae(!1)), r = ne(ae(!1)), n = ne(ae(0)), i = ne(ae(0)), a = ne(ae(0)), l = ne(ae(0)), u = he(() => ({
    observableIsHorizontal: t.current,
    observableIsVisible: r.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: l.current
  }), []), s = ee((f) => {
    ce(l.current, (h) => h !== f.top ? f.top : h), ce(a.current, (h) => h !== f.left ? f.left : h), ce(i.current, (h) => h !== f.width ? f.width : h), ce(n.current, (h) => h !== f.height ? f.height : h), ce(r.current, (h) => h !== f.isVisible ? f.isVisible : h), ce(t.current, (h) => h !== !!f.isHorizontal ? !!f.isHorizontal : h);
  }, []), d = ee(() => {
    s({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [s]);
  return /* @__PURE__ */ C.jsx(tr.Provider, { value: { showInsertBar: s, hideInsertBar: d, observables: u }, children: e });
}, je = () => Ge(tr), Qr = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: t, observableIsHorizontal: r, observableIsVisible: n, observableLeft: i, observableTop: a, observableWidth: l } = je().observables, [u] = Be(a), [s] = Be(i), [d] = Be(l), [f] = Be(t), [h] = Be(n), [O] = Be(r), c = he(() => ({
    width: O ? d : 4,
    height: O ? 4 : f,
    top: u - (O ? 2 : 0),
    left: s - (O ? 0 : 2)
  }), [f, O, s, u, d]);
  return h ? /* @__PURE__ */ C.jsx(
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
}, rr = Ne({}), en = ({ children: e, id: t, onSelect: r }) => {
  const n = ne({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    parents: ae(void 0),
    element: ae(void 0),
    onSelect: r,
    id: t
  });
  return me(() => {
    n.current.id = t;
  }, [t]), me(() => {
    n.current.onSelect = r;
  }, [r]), /* @__PURE__ */ C.jsx(rr.Provider, { value: n.current, children: e });
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
  var r = nn(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nn(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0)
        continue;
      r[n] = e[n];
    }
  return r;
}
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ye.apply(this, arguments);
}
function Vt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vt(Object(r), !0).forEach(function(n) {
      on(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function on(e, t, r) {
  return t = an(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function an(e) {
  var t = cn(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cn(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function or(e) {
  return e && e.map((t, r) => /* @__PURE__ */ be.createElement(t.tag, qe({
    key: r
  }, t.attr), or(t.child)));
}
function Xe(e) {
  return (t) => /* @__PURE__ */ be.createElement(un, Ye({
    attr: qe({}, e.attr)
  }, t), or(e.child));
}
function un(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: a
    } = e, l = rn(e, tn), u = i || r.size || "1em", s;
    return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ be.createElement("svg", Ye({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, l, {
      className: s,
      style: qe(qe({
        color: e.color || r.color
      }, r.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ be.createElement("title", null, a), e.children);
  };
  return zt !== void 0 ? /* @__PURE__ */ be.createElement(zt.Consumer, null, (r) => t(r)) : t(nr);
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
  let t, r = 0;
  if (!(!e || e.length === 0)) {
    do
      r--, t = e == null ? void 0 : e.slice(r).at(0);
    while (!t || !["html", "slot-content"].includes(t.type.value));
    return t;
  }
}, Ze = (e, t) => {
  const r = document.createElement("label");
  return r.style.padding = "4px", r.style.paddingTop = "2px", r.style.paddingRight = "8px", r.style.paddingBottom = "2px", r.style.backgroundColor = "#3e8ce4", r.style.color = "#ffffff", r.style.alignItems = "center", r.style.borderRadius = "2px", r.style.fontWeight = "600", r.style.position = "fixed", r.style.fontSize = "11px", r.style.display = "flex", r.style.height = "20px", r.style.zIndex = "-100", r.style.width = "auto", r.appendChild(new Text(e)), document.body.appendChild(r), r;
};
function pn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var ir = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var t = function(c, v) {
      return v = v || "", c.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, r = t("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + t("DF-F6,F8-FF", "00"), i = "A-Z" + t("C0-D6,D8-DE", "00"), a = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", l = function(c, v, b, x) {
      return c = c || r, v = v || n, b = b || i, x = x || a, {
        capitalize: new RegExp("(^|[" + c + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + c + "])+([" + v + b + "])", "g"),
        fill: new RegExp("[" + c + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + x + ")\\b", "g"),
        relax: new RegExp("([^" + b + "])([" + b + "]*)([" + b + "])(?=[^" + b + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + c + "]")
      };
    }, u = l(), s = {
      re: u,
      unicodes: t,
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
      fill: function(c, v, b) {
        return v != null && (c = c.replace(u.fill, function(x, R) {
          return R ? v + R : "";
        })), b && (c = s.deapostrophe(c)), c;
      },
      prep: function(c, v, b, x) {
        if (c = c == null ? "" : c + "", !x && u.upper.test(c) && (c = s.low.call(c)), !v && !u.hole.test(c)) {
          var R = s.fill(c, " ");
          u.hole.test(R) && (c = R);
        }
        return !b && !u.room.test(c) && (c = c.replace(u.relax, s.relax)), c;
      },
      relax: function(c, v, b, x) {
        return v + " " + (b ? b + " " : "") + x;
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
    }, f = {
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
        return s.fill(s.prep(c).replace(u.capitalize, function(x, R, P) {
          return R + s.up.call(P);
        }), v, b);
      },
      header: function(c) {
        return d.capital(c, "-", !0);
      },
      pascal: function(c) {
        return s.fill(s.prep(c, !1, !0).replace(u.pascal, function(v, b, x) {
          return s.up.call(x);
        }), "", !0);
      },
      title: function(c) {
        return d.capital(c).replace(u.improper, function(v, b, x, R) {
          return x > 0 && x < R.lastIndexOf(" ") ? s.low.call(v) : v;
        });
      },
      sentence: function(c, v, b) {
        return c = d.lower(c).replace(u.sentence, function(x, R, P) {
          return R + s.up.call(P);
        }), v && v.forEach(function(x) {
          c = c.replace(new RegExp("\\b" + d.lower(x) + "\\b", "g"), s.cap);
        }), b && b.forEach(function(x) {
          c = c.replace(new RegExp("(\\b" + d.lower(x) + "\\. +)(\\w)"), function(R, P, _) {
            return P + s.low.call(_);
          });
        }), c;
      }
    };
    f.squish = f.pascal, d.default = d;
    for (var h in f)
      d.type(h, f[h]);
    var O = typeof O == "function" ? O : function() {
    };
    O(e.exports ? e.exports = d : this.Case = d);
  }).call(Nr);
})(ir);
var hn = ir.exports;
function ar(e) {
  return hn.camel(pn(e));
}
const $t = (e, t, r, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === t.id.value || r.some((u) => e.draggingId === u.id.value)), yn = (e, t, r) => {
  if (!r.current)
    return null;
  if (t.type.value === "slot-content" && Array.isArray(t.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = t.type.value === "component" ? !1 : Array.isArray(t.children.value), i = r.current.getBoundingClientRect(), a = n ? 5 : i.height / 2, l = e.x - i.x, u = e.y - i.y, s = u >= 0 && u <= a, d = u >= i.height - a && u <= i.height, f = u >= a && u <= i.height - a, h = l >= 0 && l <= a, O = l >= i.width - a && l <= i.width, c = l >= a && l <= i.width - a;
  let v = !1, b = !1, x = !1, R = !1;
  if (n) {
    const P = d || O || s || h;
    v = c && f && !P, b = c && f && !P, x = d || O, R = s || h;
  } else
    x = (d || O) && !s, R = (s || h) && !d;
  return { isOverCurrentStart: v, isOverCurrentEnd: b, isOverEnd: x, isOverStart: R };
}, gn = (e, t, r) => {
  if (!r.current)
    return null;
  const n = r.current.getBoundingClientRect();
  if (t.type.value === "slot-content" && Array.isArray(t.children.value))
    return {
      isHorizontal: !0,
      left: n.left,
      width: n.width,
      height: n.height,
      top: n.top + n.height / 2
    };
  const i = t.type.value === "component" ? !1 : Array.isArray(t.children.value), a = i ? 5 : n.height / 2, l = e.x - n.x, u = e.y - n.y, s = u >= n.height - a && u <= n.height, d = u >= a && u <= n.height - a, f = l >= 0 && l <= a, h = l >= n.width - a && l <= n.width, O = l >= a && l <= n.width - a;
  let c = !0, v = n.top, b = n.left, x = n.width, R = n.height;
  return s && (f || h || O) ? v = n.top + n.height : d && f ? c = !1 : d && h ? (b = n.left + n.width, c = !1) : O && d && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: c,
    left: b,
    width: x,
    height: R
  };
}, $e = () => Yr(), _e = () => {
  const e = Ge(rr), t = ee((a) => {
    e.onSelect(a);
  }, [e.id]), r = ee((a, l, u) => {
    ce(e.getPosition, () => u), ce(e.parents, l), ce(e.element, a);
  }, [e.getPosition]), n = ee((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = ee((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    select: t,
    selectedId: e.id,
    selectedElement: e.element,
    selectedElementParents: e.parents,
    updateSelectBar: r,
    updateSelectBarScroll: n,
    updateSelectBarPlaygroundSize: i,
    selectBarGetPosition: e.getPosition,
    selectBarPlaygroundSize: e.playgroundSize,
    selectBarDocumentVerticalScroll: e.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, bn = Je(({ children: e, zIndex: t = 0, top: r = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const u = ne(null), s = he(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      "data-select": !0,
      style: {
        top: r,
        left: n,
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
      children: /* @__PURE__ */ C.jsx(
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
            top: r - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), mn = Je(() => {
  const e = ne(null), { onDragStart: t, onDragEnd: r, onDuplicate: n, onRemove: i } = Ee(), { hideInsertBar: a } = je(), {
    select: l,
    selectedId: u,
    selectedElement: s,
    selectBarGetPosition: d,
    selectedElementParents: f,
    selectBarDocumentVerticalScroll: h,
    selectBarDocumentHorizontalScroll: O
  } = _e(), c = K(f), v = K(s), b = K(u), x = Se(({ get: D }) => v ? D(v.name) : "", [v]), { width: R, height: P, top: _, left: m } = Se(({ get: D }) => {
    const ue = D(O), de = D(h), G = D(d);
    return G ? {
      width: G().width,
      height: G().height,
      top: G().top - de,
      left: G().left - ue
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [O, h, d]), p = ee(() => {
    const D = c == null ? void 0 : c.slice(-1).at(0);
    D && l(D.id.value);
  }, [l, c]), A = ee(() => {
    v && i(v);
  }, [i, v]), X = ee(() => {
    v && n(v);
  }, [n, v]), { preview: Z, isDragging: L } = Ke({
    element: e,
    id: b || "default",
    start: () => {
      t();
    },
    end: () => {
      a(), r();
    },
    canDrag: !!v && Array.isArray(c),
    data: {
      element: v,
      parents: c
    }
  }, [b, v, c, a, t, r]);
  return me(() => {
    Z(
      () => Ze(x),
      (D) => D.remove()
    );
  }, [Z, x]), !b || R === 0 && P === 0 && m === 0 && _ === 0 ? null : /* @__PURE__ */ C.jsx(
    bn,
    {
      zIndex: 1,
      top: _ - 1,
      width: R,
      height: P,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ C.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        x,
        !L && /* @__PURE__ */ C.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          c && c.length > 0 && /* @__PURE__ */ C.jsx(sn, { title: "Select parent", onClick: p, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ C.jsx(dn, { title: "Remove element", onClick: A, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ C.jsx(ln, { title: "Duplicate element and children", onClick: X, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ C.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ C.jsx(fn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), cr = Ne({}), xn = ({ children: e, id: t, onHover: r }) => {
  const n = ne({
    documentHorizontalScroll: ae(0),
    playgroundSize: ae(void 0),
    documentVerticalScroll: ae(0),
    getPosition: ae(void 0),
    element: ae(void 0),
    onHover: r,
    id: t
  });
  return me(() => {
    n.current.id = t;
  }, [t]), me(() => {
    n.current.onHover = r;
  }, [r]), /* @__PURE__ */ C.jsx(cr.Provider, { value: n.current, children: e });
}, Ce = () => {
  const e = Ge(cr), t = ee((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), r = ee((a, l) => {
    ce(e.getPosition, () => l), ce(e.element, a);
  }, [e.getPosition]), n = ee((a, l) => {
    ce(e.documentHorizontalScroll, l), ce(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = ee((a, l) => {
    ce(e.playgroundSize, { height: a, width: l });
  }, [e.playgroundSize]);
  return {
    hover: t,
    hoveredId: e.id,
    hoveredElement: e.element,
    updateHoverBar: r,
    updateHoverBarScroll: n,
    updateHoverBarPlaygroundSize: i,
    hoverBarGetPosition: e.getPosition,
    hoverBarPlaygroundSize: e.playgroundSize,
    hoverBarDocumentVerticalScroll: e.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, wn = Je(({ children: e, zIndex: t = 0, top: r = -1e3, left: n = -1e3, width: i = 0, height: a = 0, color: l = "#4a87ee" }) => {
  const u = ne(null), s = he(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ C.jsx(
    "div",
    {
      "data-hover": !0,
      style: {
        top: r,
        left: n,
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
      children: /* @__PURE__ */ C.jsx(
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
            top: r - 20 < 0 ? a + 20 >= 500 ? 0 : a : -20
          },
          children: e
        }
      )
    }
  );
}), Sn = Je(() => {
  const { selectedId: e } = _e(), {
    hoveredId: t,
    hoveredElement: r,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: a
  } = Ce(), l = K(a), u = K(i), s = K(n), d = K(r), f = K(e), h = K(t), O = Se(({ get: R }) => d ? R(d.name) : "", [d]), { width: c, height: v, top: b, left: x } = he(() => s ? {
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
  return !h || h === f || c === 0 && v === 0 && x === 0 && b === 0 ? null : /* @__PURE__ */ C.jsx(
    wn,
    {
      zIndex: 1,
      top: b - 1,
      width: c,
      left: x - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ C.jsx("div", { children: O })
    }
  );
});
var bt = {}, He = {}, pt = { exports: {} }, Ue = { exports: {} }, q = {};
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
    return q;
  Ht = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function _(p) {
    if (typeof p == "object" && p !== null) {
      var A = p.$$typeof;
      switch (A) {
        case t:
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
                case f:
                case v:
                case c:
                case l:
                  return p;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function m(p) {
    return _(p) === d;
  }
  return q.AsyncMode = s, q.ConcurrentMode = d, q.ContextConsumer = u, q.ContextProvider = l, q.Element = t, q.ForwardRef = f, q.Fragment = n, q.Lazy = v, q.Memo = c, q.Portal = r, q.Profiler = a, q.StrictMode = i, q.Suspense = h, q.isAsyncMode = function(p) {
    return m(p) || _(p) === s;
  }, q.isConcurrentMode = m, q.isContextConsumer = function(p) {
    return _(p) === u;
  }, q.isContextProvider = function(p) {
    return _(p) === l;
  }, q.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, q.isForwardRef = function(p) {
    return _(p) === f;
  }, q.isFragment = function(p) {
    return _(p) === n;
  }, q.isLazy = function(p) {
    return _(p) === v;
  }, q.isMemo = function(p) {
    return _(p) === c;
  }, q.isPortal = function(p) {
    return _(p) === r;
  }, q.isProfiler = function(p) {
    return _(p) === a;
  }, q.isStrictMode = function(p) {
    return _(p) === i;
  }, q.isSuspense = function(p) {
    return _(p) === h;
  }, q.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === d || p === a || p === i || p === h || p === O || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === c || p.$$typeof === l || p.$$typeof === u || p.$$typeof === f || p.$$typeof === x || p.$$typeof === R || p.$$typeof === P || p.$$typeof === b);
  }, q.typeOf = _, q;
}
var N = {};
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function _(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === n || w === d || w === a || w === i || w === h || w === O || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === c || w.$$typeof === l || w.$$typeof === u || w.$$typeof === f || w.$$typeof === x || w.$$typeof === R || w.$$typeof === P || w.$$typeof === b);
    }
    function m(w) {
      if (typeof w == "object" && w !== null) {
        var ye = w.$$typeof;
        switch (ye) {
          case t:
            var Ie = w.type;
            switch (Ie) {
              case s:
              case d:
              case n:
              case a:
              case i:
              case h:
                return Ie;
              default:
                var Re = Ie && Ie.$$typeof;
                switch (Re) {
                  case u:
                  case f:
                  case v:
                  case c:
                  case l:
                    return Re;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var p = s, A = d, X = u, Z = l, L = t, D = f, ue = n, de = v, G = c, $ = r, Q = a, te = i, ve = h, se = !1;
    function ie(w) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(w) || m(w) === s;
    }
    function y(w) {
      return m(w) === d;
    }
    function E(w) {
      return m(w) === u;
    }
    function T(w) {
      return m(w) === l;
    }
    function M(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function I(w) {
      return m(w) === f;
    }
    function H(w) {
      return m(w) === n;
    }
    function B(w) {
      return m(w) === v;
    }
    function k(w) {
      return m(w) === c;
    }
    function F(w) {
      return m(w) === r;
    }
    function U(w) {
      return m(w) === a;
    }
    function z(w) {
      return m(w) === i;
    }
    function le(w) {
      return m(w) === h;
    }
    N.AsyncMode = p, N.ConcurrentMode = A, N.ContextConsumer = X, N.ContextProvider = Z, N.Element = L, N.ForwardRef = D, N.Fragment = ue, N.Lazy = de, N.Memo = G, N.Portal = $, N.Profiler = Q, N.StrictMode = te, N.Suspense = ve, N.isAsyncMode = ie, N.isConcurrentMode = y, N.isContextConsumer = E, N.isContextProvider = T, N.isElement = M, N.isForwardRef = I, N.isFragment = H, N.isLazy = B, N.isMemo = k, N.isPortal = F, N.isProfiler = U, N.isStrictMode = z, N.isSuspense = le, N.isValidElementType = _, N.typeOf = m;
  }()), N;
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
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var l = {}, u = 0; u < 10; u++)
        l["_" + String.fromCharCode(u)] = u;
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
    for (var u, s = n(a), d, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var h in u)
        t.call(u, h) && (s[h] = u[h]);
      if (e) {
        d = e(u);
        for (var O = 0; O < d.length; O++)
          r.call(u, d[O]) && (s[d[O]] = u[d[O]]);
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
    var t = mt(), r = {}, n = sr();
    e = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(a, l, u, s, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in a)
        if (n(a, f)) {
          var h;
          try {
            if (typeof a[f] != "function") {
              var O = Error(
                (s || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            h = a[f](l, f, s, u, null, t);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var c = d ? d() : "";
            e(
              "Failed " + u + " type: " + h.message + (c ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, st = i, st;
}
var lt, Jt;
function Rn() {
  if (Jt)
    return lt;
  Jt = 1;
  var e = ur(), t = _n(), r = mt(), n = sr(), i = Cn(), a = function() {
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
  return lt = function(u, s) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function h(y) {
      var E = y && (d && y[d] || y[f]);
      if (typeof E == "function")
        return E;
    }
    var O = "<<anonymous>>", c = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: P(),
      arrayOf: _,
      element: m(),
      elementType: p(),
      instanceOf: A,
      node: D(),
      objectOf: Z,
      oneOf: X,
      oneOfType: L,
      shape: de,
      exact: G
    };
    function v(y, E) {
      return y === E ? y !== 0 || 1 / y === 1 / E : y !== y && E !== E;
    }
    function b(y, E) {
      this.message = y, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(y) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, T = 0;
      function M(H, B, k, F, U, z, le) {
        if (F = F || O, z = z || k, le !== r) {
          if (s) {
            var w = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw w.name = "Invariant Violation", w;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = F + ":" + k;
            !E[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            T < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + z + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[ye] = !0, T++);
          }
        }
        return B[k] == null ? H ? B[k] === null ? new b("The " + U + " `" + z + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new b("The " + U + " `" + z + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : y(B, k, F, U, z);
      }
      var I = M.bind(null, !1);
      return I.isRequired = M.bind(null, !0), I;
    }
    function R(y) {
      function E(T, M, I, H, B, k) {
        var F = T[M], U = te(F);
        if (U !== y) {
          var z = ve(F);
          return new b(
            "Invalid " + H + " `" + B + "` of type " + ("`" + z + "` supplied to `" + I + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return x(E);
    }
    function P() {
      return x(l);
    }
    function _(y) {
      function E(T, M, I, H, B) {
        if (typeof y != "function")
          return new b("Property `" + B + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var k = T[M];
        if (!Array.isArray(k)) {
          var F = te(k);
          return new b("Invalid " + H + " `" + B + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected an array."));
        }
        for (var U = 0; U < k.length; U++) {
          var z = y(k, U, I, H, B + "[" + U + "]", r);
          if (z instanceof Error)
            return z;
        }
        return null;
      }
      return x(E);
    }
    function m() {
      function y(E, T, M, I, H) {
        var B = E[T];
        if (!u(B)) {
          var k = te(B);
          return new b("Invalid " + I + " `" + H + "` of type " + ("`" + k + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(y);
    }
    function p() {
      function y(E, T, M, I, H) {
        var B = E[T];
        if (!e.isValidElementType(B)) {
          var k = te(B);
          return new b("Invalid " + I + " `" + H + "` of type " + ("`" + k + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(y);
    }
    function A(y) {
      function E(T, M, I, H, B) {
        if (!(T[M] instanceof y)) {
          var k = y.name || O, F = ie(T[M]);
          return new b("Invalid " + H + " `" + B + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return x(E);
    }
    function X(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function E(T, M, I, H, B) {
        for (var k = T[M], F = 0; F < y.length; F++)
          if (v(k, y[F]))
            return null;
        var U = JSON.stringify(y, function(le, w) {
          var ye = ve(w);
          return ye === "symbol" ? String(w) : w;
        });
        return new b("Invalid " + H + " `" + B + "` of value `" + String(k) + "` " + ("supplied to `" + I + "`, expected one of " + U + "."));
      }
      return x(E);
    }
    function Z(y) {
      function E(T, M, I, H, B) {
        if (typeof y != "function")
          return new b("Property `" + B + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var k = T[M], F = te(k);
        if (F !== "object")
          return new b("Invalid " + H + " `" + B + "` of type " + ("`" + F + "` supplied to `" + I + "`, expected an object."));
        for (var U in k)
          if (n(k, U)) {
            var z = y(k, U, I, H, B + "." + U, r);
            if (z instanceof Error)
              return z;
          }
        return null;
      }
      return x(E);
    }
    function L(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var E = 0; E < y.length; E++) {
        var T = y[E];
        if (typeof T != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(T) + " at index " + E + "."
          ), l;
      }
      function M(I, H, B, k, F) {
        for (var U = [], z = 0; z < y.length; z++) {
          var le = y[z], w = le(I, H, B, k, F, r);
          if (w == null)
            return null;
          w.data && n(w.data, "expectedType") && U.push(w.data.expectedType);
        }
        var ye = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new b("Invalid " + k + " `" + F + "` supplied to " + ("`" + B + "`" + ye + "."));
      }
      return x(M);
    }
    function D() {
      function y(E, T, M, I, H) {
        return $(E[T]) ? null : new b("Invalid " + I + " `" + H + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return x(y);
    }
    function ue(y, E, T, M, I) {
      return new b(
        (y || "React class") + ": " + E + " type `" + T + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function de(y) {
      function E(T, M, I, H, B) {
        var k = T[M], F = te(k);
        if (F !== "object")
          return new b("Invalid " + H + " `" + B + "` of type `" + F + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var U in y) {
          var z = y[U];
          if (typeof z != "function")
            return ue(I, H, B, U, ve(z));
          var le = z(k, U, I, H, B + "." + U, r);
          if (le)
            return le;
        }
        return null;
      }
      return x(E);
    }
    function G(y) {
      function E(T, M, I, H, B) {
        var k = T[M], F = te(k);
        if (F !== "object")
          return new b("Invalid " + H + " `" + B + "` of type `" + F + "` " + ("supplied to `" + I + "`, expected `object`."));
        var U = t({}, T[M], y);
        for (var z in U) {
          var le = y[z];
          if (n(y, z) && typeof le != "function")
            return ue(I, H, B, z, ve(le));
          if (!le)
            return new b(
              "Invalid " + H + " `" + B + "` key `" + z + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(T[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var w = le(k, z, I, H, B + "." + z, r);
          if (w)
            return w;
        }
        return null;
      }
      return x(E);
    }
    function $(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every($);
          if (y === null || u(y))
            return !0;
          var E = h(y);
          if (E) {
            var T = E.call(y), M;
            if (E !== y.entries) {
              for (; !(M = T.next()).done; )
                if (!$(M.value))
                  return !1;
            } else
              for (; !(M = T.next()).done; ) {
                var I = M.value;
                if (I && !$(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(y, E) {
      return y === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function te(y) {
      var E = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : Q(E, y) ? "symbol" : E;
    }
    function ve(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var E = te(y);
      if (E === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function se(y) {
      var E = ve(y);
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
      return !y.constructor || !y.constructor.name ? O : y.constructor.name;
    }
    return c.checkPropTypes = i, c.resetWarningCache = i.resetWarningCache, c.PropTypes = c, c;
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
  function r() {
  }
  return r.resetWarningCache = t, ft = function() {
    function n(l, u, s, d, f, h) {
      if (h !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
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
      checkPropTypes: r,
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
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
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
    var r = arguments[t];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
  return e;
}, Vn = /* @__PURE__ */ function() {
  function e(t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  return function(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
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
  function t(r, n) {
    qn(this, t);
    var i = Nn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r, n));
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
      var i = this.props.contentDidMount, a = this.props.contentDidUpdate, l = n.defaultView || n.parentView, u = Pe.default.createElement(
        Yn.default,
        {
          contentDidMount: i,
          contentDidUpdate: a
        },
        Pe.default.createElement(
          Wn.FrameContextProvider,
          { value: { document: n, window: l } },
          Pe.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), s = this.getMountTarget();
      return s ? [Xt.default.createPortal(this.props.head, this.getDoc().head), Xt.default.createPortal(u, s)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = yt({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, Pe.default.createElement(
        "iframe",
        yt({}, n, { ref: this.setRef, onLoad: this.handleLoad }),
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
      return n(t).default;
    }
  });
  var r = xe;
  Object.defineProperty(e, "FrameContext", {
    enumerable: !0,
    get: function() {
      return r.FrameContext;
    }
  }), Object.defineProperty(e, "FrameContextConsumer", {
    enumerable: !0,
    get: function() {
      return r.FrameContextConsumer;
    }
  }), Object.defineProperty(e, "useFrame", {
    enumerable: !0,
    get: function() {
      return r.useFrame;
    }
  });
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
})(bt);
const Jn = /* @__PURE__ */ Gr(bt), Kn = ({ children: e, onScroll: t, onRef: r, onKeyDown: n }) => {
  const { document: i } = bt.useFrame();
  return me(() => {
    i && r(i);
  }, [r, i]), me(() => {
    i && (i.onkeydown = n, i.onscroll = (a) => t(a.target.documentElement.scrollTop, a.target.documentElement.scrollLeft));
  }, [i, t]), e;
}, Xn = ({ children: e, styles: t, draggingHover: r, resetBody: n }) => {
  const i = K(
    he(() => gt(({ get: l }) => l(t).map((u) => ({
      id: l(u.id),
      content: l(u.content)
    }))), [t])
  ), a = he(() => /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    i.map((l) => Zt("style", { key: l.id }, l.content)),
    /* @__PURE__ */ C.jsx("style", { children: [
      "* { outline: none; }",
      n ? "body { margin:0!important; }" : "",
      `html${r ? "" : ":hover"} body .frame-content * {`,
      "  outline: thin solid #80808050;",
      "}",
      '[data-hover="true"] *, [data-select="true"] * {',
      "  outline: none!important;",
      "}"
    ].join(`
`) })
  ] }), [i, n]);
  return /* @__PURE__ */ C.jsx(
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
}, Zn = (e, t) => Se(({ get: r }) => t.map((n) => r(n.id)).includes(r(e.id)), [e, t]), Ot = (e, t) => Se(({ get: n }) => {
  const i = [...t].reverse();
  let a;
  for (let l = 0; l < i.length; l++) {
    const u = i[l];
    if (n(u.type) === "slot-content" && (a = !1), n(u.type) === "component")
      if (a === !1)
        a = void 0;
      else
        return !0;
  }
  return !!a;
}, [t, e]), Qn = ({ element: e }) => {
  const t = K(e.name);
  return /* @__PURE__ */ C.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ C.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: t }),
    '" introduces a infinite loop.'
  ] });
}, Oe = ({ value: e, matchWidthValue: t, effect: r }, n) => {
  const i = Se(({ get: a }) => {
    if (!e)
      return !1;
    const l = a(e);
    if (!t)
      return !1;
    const u = a(t);
    return l === u;
  }, [...n]);
  me(() => {
    i && r();
  }, [i]);
}, eo = ({ element: e, onHoverBar: t, onSelectBar: r, onMouseLeave: n, onMouseOver: i, onSelect: a }) => {
  const l = ne(null), { selectedId: u } = _e(), { hoveredId: s } = Ce(), d = K(e.name);
  return Oe({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, l.current)
  }, [s, e]), Oe({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, l.current)
  }, [u, e]), /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: n,
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
        /* @__PURE__ */ C.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: d }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, to = ({ element: e, parents: t, onMouseOver: r, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: d, onDoubleClick: f }) => {
  const h = ne(null), { onDragStart: O, onDragEnd: c, components: v } = Ee(), { hideInsertBar: b } = je(), { selectedId: x } = _e(), { hoveredId: R } = Ce(), P = K(e.name), _ = K(e.id), m = Se(({ get: L }) => {
    const D = L(v).find((ue) => L(ue.id) === L(e.referenceComponentId));
    return D ? L(D.content) : [];
  }, [v, e]);
  Oe({
    value: R,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, h.current)
  }, [R, e]), Oe({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, h.current)
  }, [x, e]);
  const p = he(() => !m || m.length === 0 ? null : m.map((L) => /* @__PURE__ */ C.jsx(
    De,
    {
      element: L,
      parents: [...t, e]
    },
    L.id.value
  )), [m, t, e]), { isDragging: A, preview: X } = Ke({
    id: _,
    element: h,
    data: { element: e, parents: t },
    start: () => {
      O();
    },
    end: () => {
      b(), c();
    }
  }, [_, e, t, b, O, c]);
  me(() => {
    X(
      () => Ze(P),
      (L) => L.remove()
    );
  }, [X, P]);
  const Z = ne({ id: $e() });
  return Ve({
    element: h,
    id: Z.current.id,
    drop: (L, D) => u(L, D, e, t, h, Z.current.id),
    hover: (L, D) => l(L, D, e, t, h, Z.current.id),
    leave: (L, D) => a(L, D, e, t, h, Z.current.id)
  }, [e, t, u, l, a]), /* @__PURE__ */ C.jsx(
    "div",
    {
      ref: h,
      onMouseLeave: n,
      onClick: (L) => i(L, e),
      onDoubleClick: (L) => f(L, e),
      onMouseOver: (L) => r(L, e, h.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: A ? 0.5 : void 0 },
      children: p
    }
  );
}, ro = ({ element: e, parents: t }) => {
  const { components: r } = Ee(), n = Se(({ get: i }) => {
    const a = i(r).find((l) => i(l.id) === i(e.referenceComponentId));
    return a ? i(a.content) : [];
  }, [r, e]);
  return /* @__PURE__ */ C.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ C.jsx(
    De,
    {
      element: i,
      parents: [...t, e]
    },
    i.id.value
  )) });
}, no = ({ element: e, parents: t, ...r }) => {
  const n = Zn(e, t), i = Ot(e, t);
  return n ? i ? /* @__PURE__ */ C.jsx(Qn, { element: e }) : /* @__PURE__ */ C.jsx(
    eo,
    {
      element: e,
      onSelect: r.onSelect,
      onMouseOver: r.onMouseOver,
      onMouseLeave: r.onMouseLeave,
      onHoverBar: r.onHoverBar,
      onSelectBar: r.onSelectBar
    }
  ) : i ? /* @__PURE__ */ C.jsx(
    ro,
    {
      element: e,
      parents: t
    }
  ) : /* @__PURE__ */ C.jsx(
    to,
    {
      element: e,
      parents: t,
      onDrop: r.onDrop,
      onDragOver: r.onDragOver,
      onDragLeave: r.onDragLeave,
      onDoubleClick: r.onDoubleClick,
      onSelect: r.onSelect,
      onMouseOver: r.onMouseOver,
      onMouseLeave: r.onMouseLeave,
      onHoverBar: r.onHoverBar,
      onSelectBar: r.onSelectBar
    }
  );
}, gr = (e) => {
  const t = he(() => gt(({ get: r }) => {
    const n = r(e);
    if (!n)
      return {};
    const i = {};
    return n.forEach((a) => {
      const l = r(a.name), u = r(a.value);
      l && (i[ar(l)] = u);
    }), i;
  }), [e]);
  return K(t);
}, br = (e) => {
  const t = he(() => gt({
    get({ get: r }) {
      const n = r(e);
      if (!n)
        return [{}, {}];
      const i = {}, a = {};
      return n.forEach((l) => {
        const u = r(l.name);
        if (u === void 0 || u === "hidden" || u === "style")
          return;
        const s = r(l.value), d = ar(u);
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
  return K(t);
}, mr = Wr(({ tag: e, ...t }, r) => Zt(e, { ref: r, ...t })), oo = ({ element: e, parents: t, onMouseOver: r, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: d }) => {
  const f = ne(null), [h, O] = Qt(!1), [c, v] = br(e.attributes), b = gr(e.style), x = K(e.children), R = K(e.name), P = K(e.tag), _ = K(e.id), { onDragStart: m, onDragEnd: p } = Ee(), { hideInsertBar: A } = je(), { selectedId: X } = _e(), { hoveredId: Z } = Ce();
  Oe({
    value: Z,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, f.current)
  }, [Z, e]), Oe({
    value: X,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [X, e]), me(() => {
    O((Q) => Z.value === _ === Q ? Q : !Q);
    const $ = Z.subscribe((Q) => {
      O((te) => Q === _ === te ? te : !te);
    });
    return () => $.unsubscribe();
  }, [_, Z]);
  const L = he(() => (!x || x.length === 0) && Object.keys(v).includes("text") ? v.text : !x || x.length === 0 ? null : x.map(($) => /* @__PURE__ */ C.jsx(
    De,
    {
      element: $,
      parents: [...t, e]
    },
    $.id.value
  )), [x, t, e, v.text]), D = he(() => x !== void 0, [x]), { isDragging: ue, preview: de } = Ke({
    id: _,
    element: f,
    data: { element: e, parents: t },
    start: () => {
      m();
    },
    end: () => {
      A(), p();
    }
  }, [_, e, t, A, m, p]);
  me(() => {
    de(
      () => Ze(R),
      ($) => $.remove()
    );
  }, [de, R]);
  const G = ne({ id: $e() });
  return Ve({
    element: f,
    id: G.current.id,
    drop: ($, Q) => u($, Q, e, t, f, G.current.id),
    hover: ($, Q) => l($, Q, e, t, f, G.current.id),
    leave: ($, Q) => a($, Q, e, t, f, G.current.id)
  }, [e, t, u, l, a]), /* @__PURE__ */ C.jsx(
    mr,
    {
      readOnly: !0,
      tag: P,
      ref: f,
      children: L,
      onMouseLeave: n,
      onClick: ($) => i($, e),
      onMouseOver: ($) => r($, e, f.current),
      ...c !== void 0 ? { ...c, ...h ? { disabled: !1 } : {} } : {},
      style: {
        ...b,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: ue ? 0.5 : typeof b.opacity == "number" ? Number(b.opacity) : void 0,
        minWidth: L === null && D ? 40 : typeof b.minWidth == "number" ? Number(b.minWidth) : void 0,
        minHeight: L === null && D ? 40 : typeof b.minHeight == "number" ? Number(b.minHeight) : void 0
      }
    }
  );
}, io = ({ element: e, parents: t }) => {
  const [r, n] = br(e.attributes), i = gr(e.style), a = K(e.children), l = K(e.tag), u = he(() => (!a || a.length === 0) && Object.keys(n).includes("text") ? n.text : !a || a.length === 0 ? null : a.map((s) => /* @__PURE__ */ C.jsx(
    De,
    {
      element: s,
      parents: [...t, e]
    },
    s.id.value
  )), [a, t, e, n.text]);
  return /* @__PURE__ */ C.jsx(
    mr,
    {
      tag: l,
      children: u,
      ...r !== void 0 ? r : {},
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
}, ao = ({ element: e, parents: t, ...r }) => Ot(e, t) ? /* @__PURE__ */ C.jsx(
  io,
  {
    element: e,
    parents: t
  }
) : /* @__PURE__ */ C.jsx(
  oo,
  {
    element: e,
    parents: t,
    onDrop: r.onDrop,
    onDragOver: r.onDragOver,
    onDragLeave: r.onDragLeave,
    onSelect: r.onSelect,
    onMouseOver: r.onMouseOver,
    onMouseLeave: r.onMouseLeave,
    onHoverBar: r.onHoverBar,
    onSelectBar: r.onSelectBar
  }
), co = (e, t) => {
  const { components: r } = Ee();
  return Se(({ get: n }) => {
    const i = n(r), a = [...t].reverse(), l = a.findIndex((d) => {
      var O;
      if (n(d.type) !== "component")
        return !1;
      const f = d;
      return n(e.componentId) === n(f.referenceComponentId) ? (O = n(f.slots)) == null ? void 0 : O.some((c) => n(c.referenceSlotId) === n(e.id)) : !1;
    });
    return !a.at(l) || a.slice(l + 1).reduce((d, f) => d !== void 0 ? d : n(f.type) === "slot-content" ? !1 : n(f.type) === "component" ? !0 : d, void 0) ? !1 : i.some((d) => n(d.id) === n(e.componentId));
  }, [t, e, r]);
}, xr = (e, t) => {
  const { onAddSlotContent: r } = Ee();
  return Se(({ get: n }) => {
    var l;
    const i = [...t].reverse().filter((u) => n(u.type) === "component").find((u) => n(u.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const a = (l = n(i.slots)) == null ? void 0 : l.find((u) => n(u.referenceSlotId) === n(e.id));
    return a ? [n(a.children), a] : (setTimeout(() => r(e, i), 0), []);
  }, [t, e, r]);
}, uo = ({ element: e, parents: t, onMouseOver: r, onMouseLeave: n, onDragLeave: i, onDragOver: a, onDrop: l, onHoverBar: u }) => {
  const s = ne(null), [d = [], f] = xr(e, t), { hoveredId: h } = Ce();
  Oe({
    value: h,
    matchWidthValue: f == null ? void 0 : f.id,
    effect() {
      f && u(e, s.current);
    }
  }, [h, f == null ? void 0 : f.id, e]);
  const O = ne({ id: $e() });
  return Ve({
    element: s,
    id: O.current.id,
    drop: (c, v) => f ? l(c, v, f, t, s, O.current.id) : void 0,
    hover: (c, v) => f ? a(c, v, f, t, s, O.current.id) : void 0,
    leave: (c, v) => f ? i(c, v, f, t, s, O.current.id) : void 0
  }, [f, t, l, a, i]), /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (c) => f ? r(c, f, s.current) : void 0,
      children: [
        f && d.length > 0 && d.map((c) => /* @__PURE__ */ C.jsx(
          De,
          {
            element: c,
            parents: [...t, f]
          },
          c.id.value
        )),
        d.length === 0 && /* @__PURE__ */ C.jsx(
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
}, so = ({ element: e, parents: t, onMouseOver: r, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: l, onDrop: u, onHoverBar: s, onSelectBar: d }) => {
  const f = ne(null), { onDragStart: h, onDragEnd: O } = Ee(), { hideInsertBar: c } = je(), { selectedId: v } = _e(), { hoveredId: b } = Ce(), x = K(e.name), R = K(e.id);
  Oe({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => s(e, f.current)
  }, [b, e]), Oe({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [v, e]);
  const { isDragging: P, preview: _ } = Ke({
    id: R,
    element: f,
    data: { element: e, parents: t },
    start: () => {
      h();
    },
    end: () => {
      c(), O();
    }
  }, [R, e, t, c, h, O]);
  me(() => {
    _(
      () => Ze(x),
      (p) => p.remove()
    );
  }, [_, x]);
  const m = ne({ id: $e() });
  return Ve({
    element: f,
    id: m.current.id,
    drop: (p, A) => u(p, A, e, t, f, m.current.id),
    hover: (p, A) => l(p, A, e, t, f, m.current.id),
    leave: (p, A) => a(p, A, e, t, f, m.current.id)
  }, [e, t, u, l, a]), /* @__PURE__ */ C.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: n,
      onClick: (p) => i(p, e),
      onMouseOver: (p) => r(p, e, f.current),
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
        opacity: P ? 0.5 : void 0
      },
      children: [
        'Slot "',
        x,
        '"'
      ]
    }
  );
}, lo = ({ element: e, parents: t }) => {
  const [r = [], n] = xr(e, t);
  return /* @__PURE__ */ C.jsx("div", { style: { outline: "none" }, children: n && r.map((i) => /* @__PURE__ */ C.jsx(
    De,
    {
      element: i,
      parents: [...t, n]
    },
    i.id.value
  )) });
}, fo = ({ element: e, parents: t, ...r }) => {
  const n = Ot(e, t);
  return co(e, t) ? /* @__PURE__ */ C.jsx(
    uo,
    {
      element: e,
      parents: t,
      onDrop: r.onDrop,
      onDragOver: r.onDragOver,
      onDragLeave: r.onDragLeave,
      onMouseOver: r.onMouseOver,
      onMouseLeave: r.onMouseLeave,
      onHoverBar: r.onHoverBar
    }
  ) : n ? /* @__PURE__ */ C.jsx(
    lo,
    {
      element: e,
      parents: t
    }
  ) : /* @__PURE__ */ C.jsx(
    so,
    {
      element: e,
      parents: t,
      onDrop: r.onDrop,
      onDragOver: r.onDragOver,
      onDragLeave: r.onDragLeave,
      onSelect: r.onSelect,
      onMouseOver: r.onMouseOver,
      onMouseLeave: r.onMouseLeave,
      onHoverBar: r.onHoverBar,
      onSelectBar: r.onSelectBar
    }
  );
}, De = ({ element: e, parents: t }) => {
  const r = K(e.type), { showInsertBar: n, hideInsertBar: i } = je(), { select: a, updateSelectBar: l } = _e(), { hover: u, updateHoverBar: s } = Ce(), { onDrop: d, value: f } = Ee(), h = ee((_, m) => {
    _.stopPropagation(), _.preventDefault(), a(m.id.value);
  }, [a]), O = ee((_) => {
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
  }, [s]), x = ee((_, m) => {
    l(_, t, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [l, t]), R = ee((_, m, p, A, X, Z) => {
    if (!$t(m, p, A, X, Z))
      return u(void 0);
    u(p.id.value);
    const D = gn(m, p, X);
    if (!D)
      return i();
    n({
      isVisible: !0,
      top: D.top,
      left: D.left,
      width: D.width,
      height: D.height,
      isHorizontal: D.isHorizontal
    });
  }, [n, u, i]), P = ee((_, m, p, A, X, Z) => {
    var de, G, $, Q, te, ve;
    if (console.log("data", _), !$t(m, p, A, X, Z))
      return;
    const D = yn(m, p, X);
    if (!D)
      return;
    const ue = D.isOverStart || D.isOverEnd;
    if (!(!ue && p.type.value === "component")) {
      if (Object.keys(_).includes("id")) {
        const se = _;
        if (ue) {
          const ie = A.slice(-1).at(0), y = ((de = (ie ? ie.children : f).value) == null ? void 0 : de.findIndex((E) => E.id.value === p.id.value)) ?? -1;
          d({
            element: se.id,
            from: { position: -1, element: null },
            to: {
              element: ie || "root",
              position: D.isOverStart ? y : y + 1
            }
          });
        } else {
          const ie = ((G = p.children.value) == null ? void 0 : G.length) || -1;
          d({
            element: se.id,
            from: { position: -1, element: null },
            to: {
              element: p,
              position: D.isOverStart ? ie : ie + 1
            }
          });
        }
      } else {
        const se = _, ie = ($ = se.parents) == null ? void 0 : $.slice(-1).at(0), y = ie || "root";
        if (y !== "root" && (y.type.value === "component" || y.type.value === "slot"))
          return;
        const E = ((Q = (y === "root" ? f : y.children).value) == null ? void 0 : Q.findIndex((T) => T.id.value === se.element.id.value)) ?? -1;
        if (ue) {
          const T = A.slice(-1).at(0), M = ((te = (T ? T.children : f).value) == null ? void 0 : te.findIndex((I) => I.id.value === p.id.value)) ?? -1;
          d({
            element: se.element,
            from: {
              position: E,
              element: y
            },
            to: {
              element: T || "root",
              position: D.isOverStart ? M : M + 1
            }
          });
        } else {
          const T = ((ve = p.children.value) == null ? void 0 : ve.length) || -1;
          d({
            element: se.element,
            from: {
              position: E,
              element: y
            },
            to: {
              element: p,
              position: D.isOverStart ? T : T + 1
            }
          });
        }
        a(se.element.id.value);
      }
      i();
    }
  }, [a, d, i]);
  return r === "component" ? /* @__PURE__ */ C.jsx(
    no,
    {
      parents: t,
      element: e,
      onDrop: P,
      onDragOver: R,
      onDragLeave: () => {
      },
      onDoubleClick: O,
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: x
    }
  ) : r === "slot" ? /* @__PURE__ */ C.jsx(
    fo,
    {
      parents: t,
      element: e,
      onDrop: P,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: x
    }
  ) : /* @__PURE__ */ C.jsx(
    ao,
    {
      parents: t,
      element: e,
      onDrop: P,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: x
    }
  );
}, vo = () => {
  const e = ne({ id: $e() }), { value: t, styles: r, onDrop: n, onKeyDown: i } = Ee(), { updateSelectBarScroll: a, select: l } = _e(), { showInsertBar: u, hideInsertBar: s } = je(), { updateHoverBarScroll: d, hover: f } = Ce(), [h, O] = Qt(null), c = K(t), v = ee((_, m) => {
    var p;
    if (s(), console.log("data", _), !!_)
      if (Object.keys(_).includes("id"))
        n({
          element: _.id,
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
        const A = _, X = vn(A.parents), Z = X || "root", L = ((p = X == null ? void 0 : X.children.value) == null ? void 0 : p.findIndex((D) => D.id.value === A.element.id.value)) ?? -1;
        n({
          element: A.element,
          from: {
            element: Z,
            position: L
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), l(A.element.id.value);
      }
  }, [t, l, s]), b = ee((_, m) => {
    const p = h == null ? void 0 : h.lastElementChild;
    if (!p)
      return;
    const A = p.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: A.left,
      width: A.width,
      height: A.height,
      top: p ? A.top + A.height : A.top
    });
  }, [h == null ? void 0 : h.lastElementChild, u]), x = ee((_, m) => {
    a(_, m), d(_, m);
  }, [a, d]), [{ isDraggingOver: R, isDraggingOverCurrent: P }] = Ve({
    drop: v,
    hover: b,
    id: e.current.id,
    element: { current: h },
    leave: () => {
      s(), f(void 0);
    }
  }, [v, b, s]);
  return /* @__PURE__ */ C.jsx(
    Xn,
    {
      styles: r,
      resetBody: !0,
      draggingHover: R || P,
      children: /* @__PURE__ */ C.jsxs(Kn, { onRef: O, onScroll: x, onKeyDown: i, children: [
        /* @__PURE__ */ C.jsx(Qr, {}),
        /* @__PURE__ */ C.jsx(Sn, {}),
        /* @__PURE__ */ C.jsx(mn, {}),
        c.map((_) => /* @__PURE__ */ C.jsx(
          De,
          {
            parents: [],
            element: _
          },
          _.id.value
        )),
        c.length === 0 && /* @__PURE__ */ C.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ C.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
      ] })
    }
  );
}, mo = ({ onSelect: e, onHover: t, selectedId: r, hoveredId: n, ...i }) => /* @__PURE__ */ C.jsx(Ur, { children: /* @__PURE__ */ C.jsx(Xr, { ...i, children: /* @__PURE__ */ C.jsx(Zr, { children: /* @__PURE__ */ C.jsx(en, { id: r, onSelect: e, children: /* @__PURE__ */ C.jsx(xn, { id: n, onHover: t, children: /* @__PURE__ */ C.jsx(vo, {}) }) }) }) }) });
export {
  mo as UIEditor
};
//# sourceMappingURL=index.es.js.map

import Oe, { createContext as Ve, useContext as Ae, useRef as Y, useEffect as ce, useCallback as U, useMemo as de, memo as or, createElement as ut, forwardRef as an, useState as Tr } from "react";
import { useDrag as _e, useDrop as Se, DragAndDropProvider as lt } from "react-use-drag-and-drop";
import { useSelectorValue as pe, useObserverValue as F, observe as fe, set as ve, useObserver as ke, selector as Dr } from "react-observing";
import { v4 as dt } from "uuid";
import cn from "react-dom";
var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cr = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function ln() {
  if (qr)
    return Je;
  qr = 1;
  var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var u, v = {}, m = null, l = null;
    f !== void 0 && (m = "" + f), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (l = d.ref);
    for (u in d)
      n.call(d, u) && !o.hasOwnProperty(u) && (v[u] = d[u]);
    if (s && s.defaultProps)
      for (u in d = s.defaultProps, d)
        v[u] === void 0 && (v[u] = d[u]);
    return { $$typeof: r, type: s, key: m, ref: l, props: v, _owner: i.current };
  }
  return Je.Fragment = t, Je.jsx = c, Je.jsxs = c, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function dn() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), p = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var S = p && a[p] || a[y];
      return typeof S == "function" ? S : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(a) {
      {
        for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), V = 1; V < S; V++)
          _[V - 1] = arguments[V];
        E("error", a, _);
      }
    }
    function E(a, S, _) {
      {
        var V = w.ReactDebugCurrentFrame, ee = V.getStackAddendum();
        ee !== "" && (S += "%s", _ = _.concat([ee]));
        var ie = _.map(function(J) {
          return String(J);
        });
        ie.unshift("Warning: " + S), Function.prototype.apply.call(console[a], console, ie);
      }
    }
    var x = !1, h = !1, j = !1, P = !1, B = !1, D;
    D = Symbol.for("react.module.reference");
    function I(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || B || a === i || a === f || a === u || P || a === l || x || h || j || typeof a == "object" && a !== null && (a.$$typeof === m || a.$$typeof === v || a.$$typeof === c || a.$$typeof === s || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === D || a.getModuleId !== void 0));
    }
    function Z(a, S, _) {
      var V = a.displayName;
      if (V)
        return V;
      var ee = S.displayName || S.name || "";
      return ee !== "" ? _ + "(" + ee + ")" : _;
    }
    function oe(a) {
      return a.displayName || "Context";
    }
    function M(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case s:
            var S = a;
            return oe(S) + ".Consumer";
          case c:
            var _ = a;
            return oe(_._context) + ".Provider";
          case d:
            return Z(a, a.render, "ForwardRef");
          case v:
            var V = a.displayName || null;
            return V !== null ? V : M(a.type) || "Memo";
          case m: {
            var ee = a, ie = ee._payload, J = ee._init;
            try {
              return M(J(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, Q = 0, ae, k, ne, se, O, T, L;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function $() {
      {
        if (Q === 0) {
          ae = console.log, k = console.info, ne = console.warn, se = console.error, O = console.group, T = console.groupCollapsed, L = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        Q++;
      }
    }
    function K() {
      {
        if (Q--, Q === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, a, {
              value: ae
            }),
            info: A({}, a, {
              value: k
            }),
            warn: A({}, a, {
              value: ne
            }),
            error: A({}, a, {
              value: se
            }),
            group: A({}, a, {
              value: O
            }),
            groupCollapsed: A({}, a, {
              value: T
            }),
            groupEnd: A({}, a, {
              value: L
            })
          });
        }
        Q < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = w.ReactCurrentDispatcher, W;
    function N(a, S, _) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (ee) {
            var V = ee.stack.trim().match(/\n( *(at )?)/);
            W = V && V[1] || "";
          }
        return `
` + W + a;
      }
    }
    var X = !1, q;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      q = new he();
    }
    function R(a, S) {
      if (!a || X)
        return "";
      {
        var _ = q.get(a);
        if (_ !== void 0)
          return _;
      }
      var V;
      X = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = z.current, z.current = null, $();
      try {
        if (S) {
          var J = function() {
            throw Error();
          };
          if (Object.defineProperty(J.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J, []);
            } catch (ge) {
              V = ge;
            }
            Reflect.construct(a, [], J);
          } else {
            try {
              J.call();
            } catch (ge) {
              V = ge;
            }
            a.call(J.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            V = ge;
          }
          a();
        }
      } catch (ge) {
        if (ge && V && typeof ge.stack == "string") {
          for (var G = ge.stack.split(`
`), ye = V.stack.split(`
`), ue = G.length - 1, le = ye.length - 1; ue >= 1 && le >= 0 && G[ue] !== ye[le]; )
            le--;
          for (; ue >= 1 && le >= 0; ue--, le--)
            if (G[ue] !== ye[le]) {
              if (ue !== 1 || le !== 1)
                do
                  if (ue--, le--, le < 0 || G[ue] !== ye[le]) {
                    var me = `
` + G[ue].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && q.set(a, me), me;
                  }
                while (ue >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        X = !1, z.current = ie, K(), Error.prepareStackTrace = ee;
      }
      var Ue = a ? a.displayName || a.name : "", Be = Ue ? N(Ue) : "";
      return typeof a == "function" && q.set(a, Be), Be;
    }
    function xe(a, S, _) {
      return R(a, !1);
    }
    function ze(a) {
      var S = a.prototype;
      return !!(S && S.isReactComponent);
    }
    function Me(a, S, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return R(a, ze(a));
      if (typeof a == "string")
        return N(a);
      switch (a) {
        case f:
          return N("Suspense");
        case u:
          return N("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return xe(a.render);
          case v:
            return Me(a.type, S, _);
          case m: {
            var V = a, ee = V._payload, ie = V._init;
            try {
              return Me(ie(ee), S, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ge = Object.prototype.hasOwnProperty, Br = {}, kr = w.ReactDebugCurrentFrame;
    function er(a) {
      if (a) {
        var S = a._owner, _ = Me(a.type, a._source, S ? S.type : null);
        kr.setExtraStackFrame(_);
      } else
        kr.setExtraStackFrame(null);
    }
    function Vt(a, S, _, V, ee) {
      {
        var ie = Function.call.bind(Ge);
        for (var J in a)
          if (ie(a, J)) {
            var G = void 0;
            try {
              if (typeof a[J] != "function") {
                var ye = Error((V || "React class") + ": " + _ + " type `" + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[J] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              G = a[J](S, J, V, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              G = ue;
            }
            G && !(G instanceof Error) && (er(ee), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", _, J, typeof G), er(null)), G instanceof Error && !(G.message in Br) && (Br[G.message] = !0, er(ee), C("Failed %s type: %s", _, G.message), er(null));
          }
      }
    }
    var At = Array.isArray;
    function dr(a) {
      return At(a);
    }
    function $t(a) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, _ = S && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function Ft(a) {
      try {
        return Lr(a), !1;
      } catch {
        return !0;
      }
    }
    function Lr(a) {
      return "" + a;
    }
    function Vr(a) {
      if (Ft(a))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(a)), Lr(a);
    }
    var Ke = w.ReactCurrentOwner, Ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ar, $r, fr;
    fr = {};
    function zt(a) {
      if (Ge.call(a, "ref")) {
        var S = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Wt(a) {
      if (Ge.call(a, "key")) {
        var S = Object.getOwnPropertyDescriptor(a, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ut(a, S) {
      if (typeof a.ref == "string" && Ke.current && S && Ke.current.stateNode !== S) {
        var _ = M(Ke.current.type);
        fr[_] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Ke.current.type), a.ref), fr[_] = !0);
      }
    }
    function Yt(a, S) {
      {
        var _ = function() {
          Ar || (Ar = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Nt(a, S) {
      {
        var _ = function() {
          $r || ($r = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var qt = function(a, S, _, V, ee, ie, J) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: S,
        ref: _,
        props: J,
        // Record the component responsible for creating this element.
        _owner: ie
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Gt(a, S, _, V, ee) {
      {
        var ie, J = {}, G = null, ye = null;
        _ !== void 0 && (Vr(_), G = "" + _), Wt(S) && (Vr(S.key), G = "" + S.key), zt(S) && (ye = S.ref, Ut(S, ee));
        for (ie in S)
          Ge.call(S, ie) && !Ht.hasOwnProperty(ie) && (J[ie] = S[ie]);
        if (a && a.defaultProps) {
          var ue = a.defaultProps;
          for (ie in ue)
            J[ie] === void 0 && (J[ie] = ue[ie]);
        }
        if (G || ye) {
          var le = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          G && Yt(J, le), ye && Nt(J, le);
        }
        return qt(a, G, ye, ee, V, Ke.current, J);
      }
    }
    var vr = w.ReactCurrentOwner, Fr = w.ReactDebugCurrentFrame;
    function We(a) {
      if (a) {
        var S = a._owner, _ = Me(a.type, a._source, S ? S.type : null);
        Fr.setExtraStackFrame(_);
      } else
        Fr.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function hr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Hr() {
      {
        if (vr.current) {
          var a = M(vr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Kt(a) {
      return "";
    }
    var zr = {};
    function Jt(a) {
      {
        var S = Hr();
        if (!S) {
          var _ = typeof a == "string" ? a : a.displayName || a.name;
          _ && (S = `

Check the top-level render call using <` + _ + ">.");
        }
        return S;
      }
    }
    function Wr(a, S) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var _ = Jt(S);
        if (zr[_])
          return;
        zr[_] = !0;
        var V = "";
        a && a._owner && a._owner !== vr.current && (V = " It was passed a child from " + M(a._owner.type) + "."), We(a), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, V), We(null);
      }
    }
    function Ur(a, S) {
      {
        if (typeof a != "object")
          return;
        if (dr(a))
          for (var _ = 0; _ < a.length; _++) {
            var V = a[_];
            hr(V) && Wr(V, S);
          }
        else if (hr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var ee = b(a);
          if (typeof ee == "function" && ee !== a.entries)
            for (var ie = ee.call(a), J; !(J = ie.next()).done; )
              hr(J.value) && Wr(J.value, S);
        }
      }
    }
    function Xt(a) {
      {
        var S = a.type;
        if (S == null || typeof S == "string")
          return;
        var _;
        if (typeof S == "function")
          _ = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === v))
          _ = S.propTypes;
        else
          return;
        if (_) {
          var V = M(S);
          Vt(_, a.props, "prop", V, a);
        } else if (S.PropTypes !== void 0 && !pr) {
          pr = !0;
          var ee = M(S);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(a) {
      {
        for (var S = Object.keys(a.props), _ = 0; _ < S.length; _++) {
          var V = S[_];
          if (V !== "children" && V !== "key") {
            We(a), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), We(null);
            break;
          }
        }
        a.ref !== null && (We(a), C("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Yr = {};
    function Nr(a, S, _, V, ee, ie) {
      {
        var J = I(a);
        if (!J) {
          var G = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = Kt();
          ye ? G += ye : G += Hr();
          var ue;
          a === null ? ue = "null" : dr(a) ? ue = "array" : a !== void 0 && a.$$typeof === r ? (ue = "<" + (M(a.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof a, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, G);
        }
        var le = Gt(a, S, _, ee, ie);
        if (le == null)
          return le;
        if (J) {
          var me = S.children;
          if (me !== void 0)
            if (V)
              if (dr(me)) {
                for (var Ue = 0; Ue < me.length; Ue++)
                  Ur(me[Ue], a);
                Object.freeze && Object.freeze(me);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ur(me, a);
        }
        if (Ge.call(S, "key")) {
          var Be = M(a), ge = Object.keys(S).filter(function(on) {
            return on !== "key";
          }), yr = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yr[Be + yr]) {
            var nn = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yr, Be, nn, Be), Yr[Be + yr] = !0;
          }
        }
        return a === n ? Zt(le) : Xt(le), le;
      }
    }
    function Qt(a, S, _) {
      return Nr(a, S, _, !0);
    }
    function en(a, S, _) {
      return Nr(a, S, _, !1);
    }
    var rn = en, tn = Qt;
    Xe.Fragment = n, Xe.jsx = rn, Xe.jsxs = tn;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Cr.exports = ln() : Cr.exports = dn();
var g = Cr.exports;
const ft = Ve({});
function fn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(ft.Provider, { value: r, children: e });
}
const je = () => Ae(ft), vt = Ve({}), vn = ({ children: e, id: r, onSelect: t }) => {
  const n = Y({ onSelect: t, id: r });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(vt.Provider, { value: n.current, children: e });
}, $e = () => {
  const e = Ae(vt);
  return {
    select: U((t) => {
      e.onSelect(t);
    }, [e.id]),
    selectedId: e.id
  };
}, pt = Ve({}), pn = ({ children: e, id: r, onHover: t }) => {
  const n = Y({ onHover: t, id: r });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(pt.Provider, { value: n.current, children: e });
}, Pe = () => {
  const e = Ae(pt);
  return {
    hover: U((t) => {
      e.id.value !== t && e.onHover(t);
    }, [e.id]),
    hoveredId: e.id
  };
}, hn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, ir = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
var ht = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(l, p) {
      return p = p || "", l.replace(/(^|-)/g, "$1\\u" + p).replace(/,/g, "\\u" + p);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), o = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", c = function(l, p, y, b) {
      return l = l || t, p = p || n, y = y || i, b = b || o, {
        capitalize: new RegExp("(^|[" + l + "])([" + p + "])", "g"),
        pascal: new RegExp("(^|[" + l + "])+([" + p + y + "])", "g"),
        fill: new RegExp("[" + l + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + p + "])", "g"),
        improper: new RegExp("\\b(" + b + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + p + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + l + "]")
      };
    }, s = c(), d = {
      re: s,
      unicodes: r,
      regexps: c,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(l) {
        return d.up.call(l.charAt(0)) + l.slice(1);
      },
      decap: function(l) {
        return d.low.call(l.charAt(0)) + l.slice(1);
      },
      deapostrophe: function(l) {
        return l.replace(s.apostrophe, "");
      },
      fill: function(l, p, y) {
        return p != null && (l = l.replace(s.fill, function(b, w) {
          return w ? p + w : "";
        })), y && (l = d.deapostrophe(l)), l;
      },
      prep: function(l, p, y, b) {
        if (l = l == null ? "" : l + "", !b && s.upper.test(l) && (l = d.low.call(l)), !p && !s.hole.test(l)) {
          var w = d.fill(l, " ");
          s.hole.test(w) && (l = w);
        }
        return !y && !s.room.test(l) && (l = l.replace(s.relax, d.relax)), l;
      },
      relax: function(l, p, y, b) {
        return p + " " + (y ? y + " " : "") + b;
      }
    }, f = {
      _: d,
      of: function(l) {
        for (var p = 0, y = d.types.length; p < y; p++)
          if (f[d.types[p]].apply(f, arguments) === l)
            return d.types[p];
      },
      flip: function(l) {
        return l.replace(/\w/g, function(p) {
          return (p == d.up.call(p) ? d.low : d.up).call(p);
        });
      },
      random: function(l) {
        return l.replace(/\w/g, function(p) {
          return (Math.round(Math.random()) ? d.up : d.low).call(p);
        });
      },
      type: function(l, p) {
        f[l] = p, d.types.push(l);
      }
    }, u = {
      lower: function(l, p, y) {
        return d.fill(d.low.call(d.prep(l, p)), p, y);
      },
      snake: function(l) {
        return f.lower(l, "_", !0);
      },
      constant: function(l) {
        return f.upper(l, "_", !0);
      },
      camel: function(l) {
        return d.decap(f.pascal(l));
      },
      kebab: function(l) {
        return f.lower(l, "-", !0);
      },
      upper: function(l, p, y) {
        return d.fill(d.up.call(d.prep(l, p, !1, !0)), p, y);
      },
      capital: function(l, p, y) {
        return d.fill(d.prep(l).replace(s.capitalize, function(b, w, C) {
          return w + d.up.call(C);
        }), p, y);
      },
      header: function(l) {
        return f.capital(l, "-", !0);
      },
      pascal: function(l) {
        return d.fill(d.prep(l, !1, !0).replace(s.pascal, function(p, y, b) {
          return d.up.call(b);
        }), "", !0);
      },
      title: function(l) {
        return f.capital(l).replace(s.improper, function(p, y, b, w) {
          return b > 0 && b < w.lastIndexOf(" ") ? d.low.call(p) : p;
        });
      },
      sentence: function(l, p, y) {
        return l = f.lower(l).replace(s.sentence, function(b, w, C) {
          return w + d.up.call(C);
        }), p && p.forEach(function(b) {
          l = l.replace(new RegExp("\\b" + f.lower(b) + "\\b", "g"), d.cap);
        }), y && y.forEach(function(b) {
          l = l.replace(new RegExp("(\\b" + f.lower(b) + "\\. +)(\\w)"), function(w, C, E) {
            return C + d.low.call(E);
          });
        }), l;
      }
    };
    u.squish = u.pascal, f.default = f;
    for (var v in u)
      f.type(v, u[v]);
    var m = typeof m == "function" ? m : function() {
    };
    m(e.exports ? e.exports = f : this.Case = f);
  }).call(sn);
})(ht);
var yn = ht.exports;
const Kr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), gn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, s = e.y - i.y, d = s >= 0 && s <= o, f = s >= i.height - o && s <= i.height, u = s >= o && s <= i.height - o, v = c >= 0 && c <= o, m = c >= i.width - o && c <= i.width, l = c >= o && c <= i.width - o;
  let p = !1, y = !1, b = !1, w = !1;
  if (n) {
    const C = f || m || d || v;
    p = l && u && !C, y = l && u && !C, b = f || m, w = d || v;
  } else
    b = (f || m) && !d, w = (d || v) && !f;
  return { isOverCurrentStart: p, isOverCurrentEnd: y, isOverEnd: b, isOverStart: w };
}, Ye = () => dt(), bn = () => /* @__PURE__ */ g.jsx("div", { className: "animate-pulse p-0.5 bg-[#3e8ce4] z-10" }), xn = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), ar = (e, r) => pe(({ get: n }) => {
  const i = [...r].reverse();
  let o;
  for (let c = 0; c < i.length; c++) {
    const s = i[c];
    if (n(s.type) === "slot-content" && (o = !1), n(s.type) === "component")
      if (o === !1)
        o = void 0;
      else
        return !0;
  }
  return !!o;
}, [r, e]), Ce = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = pe(({ get: o }) => {
    if (!e)
      return !1;
    const c = o(e);
    if (!r)
      return !1;
    const s = o(r);
    return c === s;
  }, [...n]);
  return ce(() => {
    i && (t == null || t());
  }, [i]), i;
}, Ne = ({ label: e, hover: r, select: t, paddingLeft: n }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    "data-hover": r,
    "data-select": t,
    style: { paddingLeft: n },
    className: "pl-2 cursor-pointer rounded-sm outline-1 outline-transparent outline data-[hover=true]:outline-[#ed8c5f89] data-[select=true]:outline-[#3e8be4c1]",
    children: e
  }
), mn = ({ element: e, paddingLeft: r, onMouseLeave: t, onMouseOver: n, onSelect: i }) => {
  const o = Y(null), { selectedId: c } = $e(), { hoveredId: s } = Pe(), d = F(e.name), f = Ce({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id
  }, [s, e]), u = Ce({
    value: c,
    matchWidthValue: e == null ? void 0 : e.id
  }, [c, e]);
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: o,
      onMouseLeave: t,
      onClick: (v) => i(v, e),
      onMouseOver: (v) => n(v, e, o.current),
      children: /* @__PURE__ */ g.jsx(
        Ne,
        {
          hover: f,
          select: u,
          paddingLeft: r,
          label: d + "(Infinity loop)"
        }
      )
    }
  );
}, On = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: d, onDoubleClick: f }) => {
  const u = Y(null), { onDragStart: v, onDragEnd: m, components: l } = je(), { selectedId: p } = $e(), { hoveredId: y } = Pe(), b = F(e.name), w = F(e.id), C = pe(({ get: D }) => {
    const I = D(l).find((Z) => D(Z.id) === D(e.referenceComponentId));
    return I ? D(I.content) : [];
  }, [l, e]), E = Ce({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id
  }, [y, e]), x = Ce({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id
  }, [p, e]), h = de(() => !C || C.length === 0 ? null : C.map((D) => /* @__PURE__ */ g.jsx(
    Fe,
    {
      element: D,
      paddingLeft: t,
      parents: [...r, e]
    },
    D.id.value
  )), [C, r, e, t]), { isDragging: j, preview: P } = _e({
    id: w,
    element: u,
    end: () => m(),
    data: { element: e, parents: r },
    start: () => {
      v();
    }
  }, [w, e, r, v, m]);
  ce(() => {
    P(
      () => ir(b),
      (D) => D.remove()
    );
  }, [P, b]);
  const B = Y({ id: Ye() });
  return Se({
    element: u,
    id: B.current.id,
    drop: (D, I) => d(D, I, e, r, u, B.current.id),
    hover: (D, I) => s(D, I, e, r, u, B.current.id),
    leave: (D, I) => c(D, I, e, r, u, B.current.id)
  }, [e, r, d, s, c]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: u,
        "data-dragging": j,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (D) => o(D, e),
        onDoubleClick: (D) => f(D, e),
        onMouseOver: (D) => n(D, e, u.current),
        children: /* @__PURE__ */ g.jsx(
          Ne,
          {
            label: b,
            hover: E,
            select: x,
            paddingLeft: t
          }
        )
      }
    ),
    h
  ] });
}, Sn = ({ element: e, parents: r, paddingLeft: t }) => {
  const { components: n } = je();
  return pe(({ get: o }) => {
    const c = o(n).find((s) => o(s.id) === o(e.referenceComponentId));
    return c ? o(c.content) : [];
  }, [n, e]).map((o) => /* @__PURE__ */ g.jsx(
    Fe,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  ));
}, wn = ({ element: e, parents: r, paddingLeft: t, ...n }) => {
  const i = xn(e, r), o = ar(e, r);
  return i ? o ? null : /* @__PURE__ */ g.jsx(
    mn,
    {
      element: e,
      paddingLeft: t,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave
    }
  ) : o ? /* @__PURE__ */ g.jsx(
    Sn,
    {
      element: e,
      parents: r,
      paddingLeft: t
    }
  ) : /* @__PURE__ */ g.jsx(
    On,
    {
      element: e,
      parents: r,
      paddingLeft: t,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onDoubleClick: n.onDoubleClick,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave
    }
  );
}, Cn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: d }) => {
  const f = Y(null), u = F(e.children), v = F(e.name), m = F(e.id), { onDragStart: l, onDragEnd: p } = je(), { selectedId: y } = $e(), { hoveredId: b } = Pe(), w = Ce({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id
  }, [b, e]), C = Ce({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id
  }, [y, e]), E = de(() => !u || u.length === 0 ? null : u.map((P) => /* @__PURE__ */ g.jsx(
    Fe,
    {
      element: P,
      paddingLeft: t + 8,
      parents: [...r, e]
    },
    P.id.value
  )), [u, r, e, t]), { isDragging: x, preview: h } = _e({
    id: m,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      l();
    },
    end: () => p()
  }, [m, e, r, l, p]);
  ce(() => {
    h(
      () => ir(v),
      (P) => P.remove()
    );
  }, [h, v]);
  const j = Y({ id: Ye() });
  return Se({
    element: f,
    id: j.current.id,
    drop: (P, B) => d(P, B, e, r, f, j.current.id),
    hover: (P, B) => s(P, B, e, r, f, j.current.id),
    leave: (P, B) => c(P, B, e, r, f, j.current.id)
  }, [e, r, d, s, c]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: f,
        "data-dragging": x,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (P) => o(P, e),
        onMouseOver: (P) => n(P, e, f.current),
        children: /* @__PURE__ */ g.jsx(
          Ne,
          {
            label: v,
            hover: w,
            select: C,
            paddingLeft: t
          }
        )
      }
    ),
    E
  ] });
}, En = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = F(e.children);
  return de(() => !n || n.length === 0 ? null : n.map((o) => /* @__PURE__ */ g.jsx(
    Fe,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  )), [n, r, e, t]);
}, Rn = ({ element: e, parents: r, paddingLeft: t, ...n }) => ar(e, r) ? /* @__PURE__ */ g.jsx(
  En,
  {
    element: e,
    parents: r,
    paddingLeft: t
  }
) : /* @__PURE__ */ g.jsx(
  Cn,
  {
    element: e,
    parents: r,
    paddingLeft: t,
    onDrop: n.onDrop,
    onDragOver: n.onDragOver,
    onDragLeave: n.onDragLeave,
    onSelect: n.onSelect,
    onMouseOver: n.onMouseOver,
    onMouseLeave: n.onMouseLeave
  }
), _n = (e, r) => {
  const { components: t } = je();
  return pe(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var m;
      if (n(f.type) !== "component")
        return !1;
      const u = f;
      return n(e.componentId) === n(u.referenceComponentId) ? (m = n(u.slots)) == null ? void 0 : m.some((l) => n(l.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, u) => f !== void 0 ? f : n(u.type) === "slot-content" ? !1 : n(u.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, yt = (e, r) => pe(({ get: t }) => {
  var o;
  const n = [...r].reverse().filter((c) => t(c.type) === "component").find((c) => t(c.referenceComponentId) === t(e.componentId));
  if (!n)
    return [];
  const i = (o = t(n.slots)) == null ? void 0 : o.find((c) => t(c.referenceSlotId) === t(e.id));
  return i ? [t(i.children), i] : [];
}, [r, e]), Tn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onDragLeave: o, onDragOver: c, onDrop: s }) => {
  const d = Y(null), f = F(e.name), [u = [], v] = yt(e, r), { hoveredId: m } = Pe(), l = Ce({
    value: m,
    matchWidthValue: e == null ? void 0 : e.id
  }, [m, e]), p = Y({ id: Ye() });
  return Se({
    element: d,
    id: p.current.id,
    drop: (y, b) => v ? s(y, b, v, r, d, p.current.id) : void 0,
    hover: (y, b) => v ? c(y, b, v, r, d, p.current.id) : void 0,
    leave: (y, b) => v ? o(y, b, v, r, d, p.current.id) : void 0
  }, [v, r, s, c, o]), /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: d,
        style: { paddingLeft: r.length * 8 },
        onMouseLeave: i,
        onMouseOver: (y) => v ? n(y, v, d.current) : void 0,
        children: /* @__PURE__ */ g.jsx(
          Ne,
          {
            label: f,
            select: !1,
            hover: l,
            paddingLeft: t
          }
        )
      }
    ),
    v && u.length > 0 && u.map((y) => /* @__PURE__ */ g.jsx(
      Fe,
      {
        element: y,
        paddingLeft: t + 8,
        parents: [...r, v]
      },
      y.id.value
    ))
  ] });
}, Dn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: d }) => {
  const f = Y(null), { onDragStart: u, onDragEnd: v } = je(), { selectedId: m } = $e(), { hoveredId: l } = Pe(), p = F(e.name), y = F(e.id), b = Ce({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id
  }, [l, e]), w = Ce({
    value: m,
    matchWidthValue: e == null ? void 0 : e.id
  }, [m, e]), { isDragging: C, preview: E } = _e({
    id: y,
    element: f,
    end: () => v(),
    data: { element: e, parents: r },
    start: () => {
      u();
    }
  }, [y, e, r, u, v]);
  ce(() => {
    E(
      () => ir(p),
      (h) => h.remove()
    );
  }, [E, p]);
  const x = Y({ id: Ye() });
  return Se({
    element: f,
    id: x.current.id,
    drop: (h, j) => d(h, j, e, r, f, x.current.id),
    hover: (h, j) => s(h, j, e, r, f, x.current.id),
    leave: (h, j) => c(h, j, e, r, f, x.current.id)
  }, [e, r, d, s, c]), /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": C,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (h) => o(h, e),
      onMouseOver: (h) => n(h, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        Ne,
        {
          label: p,
          hover: b,
          select: w,
          paddingLeft: t
        }
      )
    }
  ) });
}, jn = ({ element: e, parents: r, paddingLeft: t }) => {
  const [n = [], i] = yt(e, r);
  return i ? n.map((o) => /* @__PURE__ */ g.jsx(
    Fe,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, i]
    },
    o.id.value
  )) : null;
}, Pn = ({ element: e, parents: r, paddingLeft: t, ...n }) => {
  const i = ar(e, r);
  return _n(e, r) ? /* @__PURE__ */ g.jsx(
    Tn,
    {
      element: e,
      parents: r,
      paddingLeft: t,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave
    }
  ) : i ? /* @__PURE__ */ g.jsx(
    jn,
    {
      element: e,
      parents: r,
      paddingLeft: t
    }
  ) : /* @__PURE__ */ g.jsx(
    Dn,
    {
      element: e,
      parents: r,
      paddingLeft: t,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave
    }
  );
}, In = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: d }) => {
  const f = Y(null), u = F(e.name), v = F(e.id), { onDragStart: m, onDragEnd: l } = je(), { selectedId: p } = $e(), { hoveredId: y } = Pe(), b = Ce({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id
  }, [y, e]), w = Ce({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id
  }, [p, e]), { isDragging: C, preview: E } = _e({
    id: v,
    element: f,
    end: () => l(),
    data: { element: e, parents: r },
    start: () => {
      m();
    }
  }, [v, e, r, m, l]);
  ce(() => {
    E(
      () => ir(u),
      (h) => h.remove()
    );
  }, [E, u]);
  const x = Y({ id: Ye() });
  return Se({
    element: f,
    id: x.current.id,
    drop: (h, j) => d(h, j, e, r, f, x.current.id),
    hover: (h, j) => s(h, j, e, r, f, x.current.id),
    leave: (h, j) => c(h, j, e, r, f, x.current.id)
  }, [e, r, d, s, c]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": C,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (h) => o(h, e),
      onMouseOver: (h) => n(h, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        Ne,
        {
          label: u,
          hover: b,
          select: w,
          paddingLeft: t
        }
      )
    }
  );
}, Mn = ({ element: e, parents: r, paddingLeft: t, ...n }) => ar(e, r) ? null : /* @__PURE__ */ g.jsx(
  In,
  {
    element: e,
    parents: r,
    paddingLeft: t,
    onDrop: n.onDrop,
    onDragOver: n.onDragOver,
    onDragLeave: n.onDragLeave,
    onSelect: n.onSelect,
    onMouseOver: n.onMouseOver,
    onMouseLeave: n.onMouseLeave
  }
), Fe = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = F(e.type), { onDrop: i, value: o } = je(), { select: c } = $e(), { hover: s } = Pe(), d = U((p, y) => {
    p.stopPropagation(), p.preventDefault(), c(y.id.value);
  }, [c]), f = U((p) => {
    p.stopPropagation(), p.preventDefault(), c(void 0), s(void 0);
  }, [c, s]), u = U((p, y) => {
    p.stopPropagation(), s(y.id.value);
  }, [s]), v = U((p) => {
    p.stopPropagation(), s(void 0);
  }, [s]), m = U((p, y, b, w, C, E) => {
    if (!Kr(y, b, w, C, E))
      return s(void 0);
    s(b.id.value);
  }, [s]), l = U((p, y, b, w, C, E) => {
    var P, B, D, I, Z, oe;
    if (!Kr(y, b, w, C, E))
      return;
    const h = gn(y, b, C);
    if (!h)
      return;
    const j = h.isOverStart || h.isOverEnd;
    if (!(!j && b.type.value === "component"))
      if (Object.keys(p).includes("id")) {
        const M = p;
        if (j) {
          const A = w.slice(-1).at(0), Q = ((P = (A ? A.children : o).value) == null ? void 0 : P.findIndex((ae) => ae.id.value === b.id.value)) ?? -1;
          i({
            element: M.id,
            from: { position: -1, element: null },
            to: {
              element: A || "root",
              position: h.isOverStart ? Q : Q + 1
            }
          });
        } else {
          const A = ((B = b.children.value) == null ? void 0 : B.length) || -1;
          i({
            element: M.id,
            from: { position: -1, element: null },
            to: {
              element: b,
              position: h.isOverStart ? A : A + 1
            }
          });
        }
      } else {
        const M = p, A = (D = M.parents) == null ? void 0 : D.slice(-1).at(0), Q = A || "root";
        if (Q !== "root" && Q.type.value === "component")
          return;
        const ae = ((I = (Q === "root" ? o : Q.children).value) == null ? void 0 : I.findIndex((k) => k.id.value === M.element.id.value)) ?? -1;
        if (j) {
          const k = w.slice(-1).at(0), ne = ((Z = (k ? k.children : o).value) == null ? void 0 : Z.findIndex((se) => se.id.value === b.id.value)) ?? -1;
          i({
            element: M.element,
            from: {
              position: ae,
              element: Q
            },
            to: {
              element: k || "root",
              position: h.isOverStart ? ne : ne + 1
            }
          });
        } else {
          const k = ((oe = b.children.value) == null ? void 0 : oe.length) || -1;
          i({
            element: M.element,
            from: {
              position: ae,
              element: Q
            },
            to: {
              element: b,
              position: h.isOverStart ? k : k + 1
            }
          });
        }
        c(M.element.id.value);
      }
  }, [c, i]);
  return n === "component" ? /* @__PURE__ */ g.jsx(
    wn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: l,
      onDragOver: m,
      onDragLeave: () => {
      },
      onDoubleClick: f,
      onSelect: d,
      onMouseOver: u,
      onMouseLeave: v
    }
  ) : n === "slot" ? /* @__PURE__ */ g.jsx(
    Pn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: l,
      onDragOver: m,
      onDragLeave: () => {
      },
      onSelect: d,
      onMouseOver: u,
      onMouseLeave: v
    }
  ) : n === "text" ? /* @__PURE__ */ g.jsx(
    Mn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: l,
      onDragOver: m,
      onDragLeave: () => {
      },
      onSelect: d,
      onMouseOver: u,
      onMouseLeave: v
    }
  ) : /* @__PURE__ */ g.jsx(
    Rn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: l,
      onDragOver: m,
      onDragLeave: () => {
      },
      onSelect: d,
      onMouseOver: u,
      onMouseLeave: v
    }
  );
}, Bn = () => {
  const e = Y(null), r = Y({ id: Ye() }), { value: t, onDrop: n, onKeyDown: i } = je(), { select: o } = $e(), { hover: c } = Pe(), s = F(t), d = U((v, m) => {
    var l;
    if (v)
      if (Object.keys(v).includes("id"))
        n({
          element: v.id,
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
        const p = v, y = hn(p.parents || []), b = y || "root", w = ((l = y == null ? void 0 : y.children.value) == null ? void 0 : l.findIndex((C) => C.id.value === p.element.id.value)) ?? -1;
        n({
          element: p.element,
          from: {
            element: b,
            position: w
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), o(p.element.id.value);
      }
  }, [t, o]), f = U((v) => {
    v.stopPropagation(), o(void 0);
  }, [o]), [{ isDraggingOver: u }] = Se({
    drop: d,
    element: e,
    id: r.current.id,
    leave: () => c(void 0)
  }, [d]);
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      tabIndex: 0,
      onKeyDown: i,
      onClick: f,
      ref: e,
      className: "flex-1 h-full w-full outline-none",
      children: [
        s.map((v) => /* @__PURE__ */ g.jsx(
          Fe,
          {
            parents: [],
            paddingLeft: 4,
            element: v
          },
          v.id.value
        )),
        s.length === 0 && /* @__PURE__ */ g.jsx("p", { children: "Drag and drop here to start" }),
        u && /* @__PURE__ */ g.jsx(bn, {})
      ]
    }
  );
};
function oi({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(lt, { children: /* @__PURE__ */ g.jsx(fn, { ...i, children: /* @__PURE__ */ g.jsx(vn, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(pn, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(Bn, {}) }) }) }) });
}
const gt = Ve({});
function kn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(gt.Provider, { value: r, children: e });
}
const be = () => Ae(gt), bt = Ve({}), Ln = ({ children: e }) => {
  const r = Y(fe(!1)), t = Y(fe(!1)), n = Y(fe(0)), i = Y(fe(0)), o = Y(fe(0)), c = Y(fe(0)), s = de(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: o.current,
    observableTop: c.current
  }), []), d = U((u) => {
    ve(c.current, (v) => v !== u.top ? u.top : v), ve(o.current, (v) => v !== u.left ? u.left : v), ve(i.current, (v) => v !== u.width ? u.width : v), ve(n.current, (v) => v !== u.height ? u.height : v), ve(t.current, (v) => v !== u.isVisible ? u.isVisible : v), ve(r.current, (v) => v !== !!u.isHorizontal ? !!u.isHorizontal : v);
  }, []), f = U(() => {
    d({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [d]);
  return /* @__PURE__ */ g.jsx(bt.Provider, { value: { showInsertBar: d, hideInsertBar: f, observables: s }, children: e });
}, Ie = () => Ae(bt), Vn = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: o, observableWidth: c } = Ie().observables, [s] = ke(o), [d] = ke(i), [f] = ke(c), [u] = ke(r), [v] = ke(n), [m] = ke(t), l = de(() => ({
    width: m ? f : 4,
    height: m ? 4 : u,
    top: s - (m ? 2 : 0),
    left: d - (m ? 0 : 2)
  }), [u, m, d, s, f]);
  return v ? /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "animate-pulse",
      style: {
        zIndex: 10,
        borderRadius: 5,
        top: l.top,
        position: "fixed",
        left: l.left,
        width: l.width,
        pointerEvents: "none",
        height: l.height,
        backgroundColor: e
      }
    }
  ) : null;
}, xt = Ve({}), An = ({ children: e, id: r, onSelect: t }) => {
  const n = Y({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    parents: fe(void 0),
    element: fe(void 0),
    onSelect: t,
    id: r
  });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(xt.Provider, { value: n.current, children: e });
};
var mt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Jr = Oe.createContext && /* @__PURE__ */ Oe.createContext(mt), $n = ["attr", "size", "title"];
function Fn(e, r) {
  if (e == null)
    return {};
  var t = Hn(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Hn(e, r) {
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
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function Xr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function nr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xr(Object(t), !0).forEach(function(n) {
      zn(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function zn(e, r, t) {
  return r = Wn(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Wn(e) {
  var r = Un(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Un(e, r) {
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
function Ot(e) {
  return e && e.map((r, t) => /* @__PURE__ */ Oe.createElement(r.tag, nr({
    key: t
  }, r.attr), Ot(r.child)));
}
function cr(e) {
  return (r) => /* @__PURE__ */ Oe.createElement(Yn, tr({
    attr: nr({}, e.attr)
  }, r), Ot(e.child));
}
function Yn(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, c = Fn(e, $n), s = i || t.size || "1em", d;
    return t.className && (d = t.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ Oe.createElement("svg", tr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, c, {
      className: d,
      style: nr(nr({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Oe.createElement("title", null, o), e.children);
  };
  return Jr !== void 0 ? /* @__PURE__ */ Oe.createElement(Jr.Consumer, null, (t) => r(t)) : r(mt);
}
function Nn(e) {
  return cr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function qn(e) {
  return cr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function Gn(e) {
  return cr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function Kn(e) {
  return cr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const Jn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, Ze = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function Xn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function St(e) {
  return yn.camel(Xn(e));
}
const Zr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), Zn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, s = e.y - i.y, d = s >= 0 && s <= o, f = s >= i.height - o && s <= i.height, u = s >= o && s <= i.height - o, v = c >= 0 && c <= o, m = c >= i.width - o && c <= i.width, l = c >= o && c <= i.width - o;
  let p = !1, y = !1, b = !1, w = !1;
  if (n) {
    const C = f || m || d || v;
    p = l && u && !C, y = l && u && !C, b = f || m, w = d || v;
  } else
    b = (f || m) && !d, w = (d || v) && !f;
  return { isOverCurrentStart: p, isOverCurrentEnd: y, isOverEnd: b, isOverStart: w };
}, Qn = (e, r, t) => {
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = i ? 5 : n.height / 2, c = e.x - n.x, s = e.y - n.y, d = s >= n.height - o && s <= n.height, f = s >= o && s <= n.height - o, u = c >= 0 && c <= o, v = c >= n.width - o && c <= n.width, m = c >= o && c <= n.width - o;
  let l = !0, p = n.top, y = n.left, b = n.width, w = n.height;
  return d && (u || v || m) ? p = n.top + n.height : f && u ? l = !1 : f && v ? (y = n.left + n.width, l = !1) : m && f && (p = n.top + (i ? n.height / 2 : n.height)), {
    top: p,
    isHorizontal: l,
    left: y,
    width: b,
    height: w
  };
}, qe = () => dt(), Te = () => {
  const e = Ae(xt), r = U((o) => {
    e.onSelect(o);
  }, [e.id]), t = U((o, c, s) => {
    ve(e.getPosition, () => s), ve(e.parents, c), ve(e.element, o);
  }, [e.getPosition]), n = U((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = U((o, c) => {
    ve(e.playgroundSize, { height: o, width: c });
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
}, eo = or(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const s = Y(null), d = de(() => {
    if (!s.current || n + s.current.getBoundingClientRect().width <= s.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const f = n + s.current.getBoundingClientRect().width;
    return s.current.ownerDocument.documentElement.clientWidth - f;
  }, [n]);
  return /* @__PURE__ */ g.jsx(
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
        height: o,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: c,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ g.jsx(
        "span",
        {
          ref: s,
          style: {
            zIndex: 5,
            height: 20,
            color: "white",
            paddingLeft: 8,
            borderRadius: 4,
            paddingRight: 8,
            outline: "none",
            display: "flex",
            left: d,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: c,
            top: t - 20 < 0 ? o + 20 >= 500 ? 0 : o : -20
          },
          children: e
        }
      )
    }
  );
}), ro = or(() => {
  const e = Y(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = be(), { hideInsertBar: o } = Ie(), {
    select: c,
    selectedId: s,
    selectedElement: d,
    selectBarGetPosition: f,
    selectedElementParents: u,
    selectBarDocumentVerticalScroll: v,
    selectBarDocumentHorizontalScroll: m
  } = Te(), l = F(u), p = F(d), y = F(s), b = pe(({ get: I }) => p ? I(p.name) : "", [p]), { width: w, height: C, top: E, left: x } = pe(({ get: I }) => {
    const Z = I(m), oe = I(v), M = I(f);
    return M ? {
      width: M().width,
      height: M().height,
      top: M().top - oe,
      left: M().left - Z
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [m, v, f]), h = U((I) => {
    I.stopPropagation();
    const Z = l == null ? void 0 : l.slice(-1).at(0);
    if (Z)
      if (Z.type.value === "slot-content") {
        const oe = l == null ? void 0 : l.find((M) => {
          var A;
          return M.type.value !== "component" ? !1 : (A = M.slots.value) == null ? void 0 : A.some((Q) => Q.id.value === Z.id.value);
        });
        c(oe == null ? void 0 : oe.id.value);
      } else
        c(Z.id.value);
  }, [c, l]), j = U(() => {
    p && i(p);
  }, [i, p]), P = U(() => {
    p && n(p);
  }, [n, p]), { preview: B, isDragging: D } = _e({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      o(), t();
    },
    canDrag: !!p && Array.isArray(l),
    data: {
      element: p,
      parents: l
    }
  }, [y, p, l, o, r, t]);
  return ce(() => {
    B(
      () => Ze(b),
      (I) => I.remove()
    );
  }, [B, b]), !y || w === 0 && C === 0 && x === 0 && E === 0 ? null : /* @__PURE__ */ g.jsx(
    eo,
    {
      zIndex: 1,
      top: E - 1,
      width: w,
      height: C,
      left: x - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        b,
        !D && /* @__PURE__ */ g.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          l && l.length > 0 && /* @__PURE__ */ g.jsx(Nn, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(Kn, { title: "Remove element", onClick: j, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(qn, { title: "Duplicate element and children", onClick: P, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ g.jsx(Gn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), wt = Ve({}), to = ({ children: e, id: r, onHover: t }) => {
  const n = Y({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    element: fe(void 0),
    onHover: t,
    id: r
  });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(wt.Provider, { value: n.current, children: e });
}, De = () => {
  const e = Ae(wt), r = U((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), t = U((o, c) => {
    ve(e.getPosition, () => c), ve(e.element, o);
  }, [e.getPosition]), n = U((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = U((o, c) => {
    ve(e.playgroundSize, { height: o, width: c });
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
}, no = or(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const s = Y(null), d = de(() => {
    if (!s.current || n + s.current.getBoundingClientRect().width <= s.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const f = n + s.current.getBoundingClientRect().width;
    return s.current.ownerDocument.documentElement.clientWidth - f;
  }, [n]);
  return /* @__PURE__ */ g.jsx(
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
        height: o,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: c,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ g.jsx(
        "span",
        {
          ref: s,
          style: {
            zIndex: 5,
            height: 20,
            color: "white",
            paddingLeft: 8,
            borderRadius: 4,
            paddingRight: 8,
            outline: "none",
            display: "flex",
            left: d,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: c,
            top: t - 20 < 0 ? o + 20 >= 500 ? 0 : o : -20
          },
          children: e
        }
      )
    }
  );
}), oo = or(() => {
  const { selectedId: e } = Te(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: o
  } = De(), c = F(o), s = F(i), d = F(n), f = F(t), u = F(e), v = F(r), m = pe(({ get: w }) => f ? w(f.name) : "", [f]), { width: l, height: p, top: y, left: b } = de(() => d ? {
    width: d().width,
    height: d().height,
    top: d().top - s,
    left: d().left - c
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [c, s, d]);
  return !v || v === u || l === 0 && p === 0 && b === 0 && y === 0 ? null : /* @__PURE__ */ g.jsx(
    no,
    {
      zIndex: 1,
      top: y - 1,
      width: l,
      left: b - 1,
      height: p,
      color: "#ed8b5f",
      children: /* @__PURE__ */ g.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: m })
    }
  );
});
var sr = {}, Qe = {}, Er = { exports: {} }, rr = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function io() {
  if (Qr)
    return re;
  Qr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var j = h.$$typeof;
      switch (j) {
        case r:
          switch (h = h.type, h) {
            case d:
            case f:
            case n:
            case o:
            case i:
            case v:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case u:
                case p:
                case l:
                case c:
                  return h;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  function x(h) {
    return E(h) === f;
  }
  return re.AsyncMode = d, re.ConcurrentMode = f, re.ContextConsumer = s, re.ContextProvider = c, re.Element = r, re.ForwardRef = u, re.Fragment = n, re.Lazy = p, re.Memo = l, re.Portal = t, re.Profiler = o, re.StrictMode = i, re.Suspense = v, re.isAsyncMode = function(h) {
    return x(h) || E(h) === d;
  }, re.isConcurrentMode = x, re.isContextConsumer = function(h) {
    return E(h) === s;
  }, re.isContextProvider = function(h) {
    return E(h) === c;
  }, re.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, re.isForwardRef = function(h) {
    return E(h) === u;
  }, re.isFragment = function(h) {
    return E(h) === n;
  }, re.isLazy = function(h) {
    return E(h) === p;
  }, re.isMemo = function(h) {
    return E(h) === l;
  }, re.isPortal = function(h) {
    return E(h) === t;
  }, re.isProfiler = function(h) {
    return E(h) === o;
  }, re.isStrictMode = function(h) {
    return E(h) === i;
  }, re.isSuspense = function(h) {
    return E(h) === v;
  }, re.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === o || h === i || h === v || h === m || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === l || h.$$typeof === c || h.$$typeof === s || h.$$typeof === u || h.$$typeof === b || h.$$typeof === w || h.$$typeof === C || h.$$typeof === y);
  }, re.typeOf = E, re;
}
var te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function ao() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function E(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === f || R === o || R === i || R === v || R === m || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === l || R.$$typeof === c || R.$$typeof === s || R.$$typeof === u || R.$$typeof === b || R.$$typeof === w || R.$$typeof === C || R.$$typeof === y);
    }
    function x(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case r:
            var ze = R.type;
            switch (ze) {
              case d:
              case f:
              case n:
              case o:
              case i:
              case v:
                return ze;
              default:
                var Me = ze && ze.$$typeof;
                switch (Me) {
                  case s:
                  case u:
                  case p:
                  case l:
                  case c:
                    return Me;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var h = d, j = f, P = s, B = c, D = r, I = u, Z = n, oe = p, M = l, A = t, Q = o, ae = i, k = v, ne = !1;
    function se(R) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(R) || x(R) === d;
    }
    function O(R) {
      return x(R) === f;
    }
    function T(R) {
      return x(R) === s;
    }
    function L(R) {
      return x(R) === c;
    }
    function H(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function $(R) {
      return x(R) === u;
    }
    function K(R) {
      return x(R) === n;
    }
    function z(R) {
      return x(R) === p;
    }
    function W(R) {
      return x(R) === l;
    }
    function N(R) {
      return x(R) === t;
    }
    function X(R) {
      return x(R) === o;
    }
    function q(R) {
      return x(R) === i;
    }
    function he(R) {
      return x(R) === v;
    }
    te.AsyncMode = h, te.ConcurrentMode = j, te.ContextConsumer = P, te.ContextProvider = B, te.Element = D, te.ForwardRef = I, te.Fragment = Z, te.Lazy = oe, te.Memo = M, te.Portal = A, te.Profiler = Q, te.StrictMode = ae, te.Suspense = k, te.isAsyncMode = se, te.isConcurrentMode = O, te.isContextConsumer = T, te.isContextProvider = L, te.isElement = H, te.isForwardRef = $, te.isFragment = K, te.isLazy = z, te.isMemo = W, te.isPortal = N, te.isProfiler = X, te.isStrictMode = q, te.isSuspense = he, te.isValidElementType = E, te.typeOf = x;
  }()), te;
}
var rt;
function Ct() {
  return rt || (rt = 1, process.env.NODE_ENV === "production" ? rr.exports = io() : rr.exports = ao()), rr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gr, tt;
function co() {
  if (tt)
    return gr;
  tt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var d = Object.getOwnPropertyNames(c).map(function(u) {
        return c[u];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        f[u] = u;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gr = i() ? Object.assign : function(o, c) {
    for (var s, d = n(o), f, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var v in s)
        r.call(s, v) && (d[v] = s[v]);
      if (e) {
        f = e(s);
        for (var m = 0; m < f.length; m++)
          t.call(s, f[m]) && (d[f[m]] = s[f[m]]);
      }
    }
    return d;
  }, gr;
}
var br, nt;
function jr() {
  if (nt)
    return br;
  nt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var xr, ot;
function Et() {
  return ot || (ot = 1, xr = Function.call.bind(Object.prototype.hasOwnProperty)), xr;
}
var mr, it;
function so() {
  if (it)
    return mr;
  it = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = jr(), t = {}, n = Et();
    e = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(o, c, s, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var v;
          try {
            if (typeof o[u] != "function") {
              var m = Error(
                (d || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            v = o[u](c, u, d, s, null, r);
          } catch (p) {
            v = p;
          }
          if (v && !(v instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in t)) {
            t[v.message] = !0;
            var l = f ? f() : "";
            e(
              "Failed " + s + " type: " + v.message + (l ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, mr = i, mr;
}
var Or, at;
function uo() {
  if (at)
    return Or;
  at = 1;
  var e = Ct(), r = co(), t = jr(), n = Et(), i = so(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var d = "Warning: " + s;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Or = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function v(O) {
      var T = O && (f && O[f] || O[u]);
      if (typeof T == "function")
        return T;
    }
    var m = "<<anonymous>>", l = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: C(),
      arrayOf: E,
      element: x(),
      elementType: h(),
      instanceOf: j,
      node: I(),
      objectOf: B,
      oneOf: P,
      oneOfType: D,
      shape: oe,
      exact: M
    };
    function p(O, T) {
      return O === T ? O !== 0 || 1 / O === 1 / T : O !== O && T !== T;
    }
    function y(O, T) {
      this.message = O, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(O) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, L = 0;
      function H(K, z, W, N, X, q, he) {
        if (N = N || m, q = q || W, he !== t) {
          if (d) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = N + ":" + W;
            !T[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[xe] = !0, L++);
          }
        }
        return z[W] == null ? K ? z[W] === null ? new y("The " + X + " `" + q + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new y("The " + X + " `" + q + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : O(z, W, N, X, q);
      }
      var $ = H.bind(null, !1);
      return $.isRequired = H.bind(null, !0), $;
    }
    function w(O) {
      function T(L, H, $, K, z, W) {
        var N = L[H], X = ae(N);
        if (X !== O) {
          var q = k(N);
          return new y(
            "Invalid " + K + " `" + z + "` of type " + ("`" + q + "` supplied to `" + $ + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return b(T);
    }
    function C() {
      return b(c);
    }
    function E(O) {
      function T(L, H, $, K, z) {
        if (typeof O != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var W = L[H];
        if (!Array.isArray(W)) {
          var N = ae(W);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var X = 0; X < W.length; X++) {
          var q = O(W, X, $, K, z + "[" + X + "]", t);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return b(T);
    }
    function x() {
      function O(T, L, H, $, K) {
        var z = T[L];
        if (!s(z)) {
          var W = ae(z);
          return new y("Invalid " + $ + " `" + K + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(O);
    }
    function h() {
      function O(T, L, H, $, K) {
        var z = T[L];
        if (!e.isValidElementType(z)) {
          var W = ae(z);
          return new y("Invalid " + $ + " `" + K + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(O);
    }
    function j(O) {
      function T(L, H, $, K, z) {
        if (!(L[H] instanceof O)) {
          var W = O.name || m, N = se(L[H]);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return b(T);
    }
    function P(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function T(L, H, $, K, z) {
        for (var W = L[H], N = 0; N < O.length; N++)
          if (p(W, O[N]))
            return null;
        var X = JSON.stringify(O, function(he, R) {
          var xe = k(R);
          return xe === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + K + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + $ + "`, expected one of " + X + "."));
      }
      return b(T);
    }
    function B(O) {
      function T(L, H, $, K, z) {
        if (typeof O != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var W = L[H], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an object."));
        for (var X in W)
          if (n(W, X)) {
            var q = O(W, X, $, K, z + "." + X, t);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return b(T);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var T = 0; T < O.length; T++) {
        var L = O[T];
        if (typeof L != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(L) + " at index " + T + "."
          ), c;
      }
      function H($, K, z, W, N) {
        for (var X = [], q = 0; q < O.length; q++) {
          var he = O[q], R = he($, K, z, W, N, t);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && X.push(R.data.expectedType);
        }
        var xe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new y("Invalid " + W + " `" + N + "` supplied to " + ("`" + z + "`" + xe + "."));
      }
      return b(H);
    }
    function I() {
      function O(T, L, H, $, K) {
        return A(T[L]) ? null : new y("Invalid " + $ + " `" + K + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return b(O);
    }
    function Z(O, T, L, H, $) {
      return new y(
        (O || "React class") + ": " + T + " type `" + L + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function oe(O) {
      function T(L, H, $, K, z) {
        var W = L[H], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var X in O) {
          var q = O[X];
          if (typeof q != "function")
            return Z($, K, z, X, k(q));
          var he = q(W, X, $, K, z + "." + X, t);
          if (he)
            return he;
        }
        return null;
      }
      return b(T);
    }
    function M(O) {
      function T(L, H, $, K, z) {
        var W = L[H], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var X = r({}, L[H], O);
        for (var q in X) {
          var he = O[q];
          if (n(O, q) && typeof he != "function")
            return Z($, K, z, q, k(he));
          if (!he)
            return new y(
              "Invalid " + K + " `" + z + "` key `" + q + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(L[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var R = he(W, q, $, K, z + "." + q, t);
          if (R)
            return R;
        }
        return null;
      }
      return b(T);
    }
    function A(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(A);
          if (O === null || s(O))
            return !0;
          var T = v(O);
          if (T) {
            var L = T.call(O), H;
            if (T !== O.entries) {
              for (; !(H = L.next()).done; )
                if (!A(H.value))
                  return !1;
            } else
              for (; !(H = L.next()).done; ) {
                var $ = H.value;
                if ($ && !A($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Q(O, T) {
      return O === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ae(O) {
      var T = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : Q(T, O) ? "symbol" : T;
    }
    function k(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var T = ae(O);
      if (T === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function ne(O) {
      var T = k(O);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function se(O) {
      return !O.constructor || !O.constructor.name ? m : O.constructor.name;
    }
    return l.checkPropTypes = i, l.resetWarningCache = i.resetWarningCache, l.PropTypes = l, l;
  }, Or;
}
var Sr, ct;
function lo() {
  if (ct)
    return Sr;
  ct = 1;
  var e = jr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Sr = function() {
    function n(c, s, d, f, u, v) {
      if (v !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, Sr;
}
if (process.env.NODE_ENV !== "production") {
  var fo = Ct(), vo = !0;
  Er.exports = uo()(fo.isElement, vo);
} else
  Er.exports = lo()();
var Rt = Er.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.FrameContextConsumer = we.FrameContextProvider = we.useFrame = we.FrameContext = void 0;
var po = Oe, _t = ho(po);
function ho(e) {
  return e && e.__esModule ? e : { default: e };
}
var Tt = void 0, Dt = void 0;
typeof document < "u" && (Tt = document);
typeof window < "u" && (Dt = window);
var Pr = we.FrameContext = _t.default.createContext({ document: Tt, window: Dt });
we.useFrame = function() {
  return _t.default.useContext(Pr);
};
var yo = Pr.Provider, go = Pr.Consumer;
we.FrameContextProvider = yo;
we.FrameContextConsumer = go;
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
var bo = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), Rr = Oe;
jt(Rr);
var xo = Rt, wr = jt(xo);
function jt(e) {
  return e && e.__esModule ? e : { default: e };
}
function mo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Oo(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function So(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Pt = function(e) {
  So(r, e);
  function r() {
    return mo(this, r), Oo(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return bo(r, [{
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
      return Rr.Children.only(this.props.children);
    }
  }]), r;
}(Rr.Component);
Pt.propTypes = {
  children: wr.default.element.isRequired,
  contentDidMount: wr.default.func.isRequired,
  contentDidUpdate: wr.default.func.isRequired
};
Ir.default = Pt;
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.Frame = void 0;
var _r = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }
  return e;
}, wo = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), It = Oe, Le = ur(It), Co = cn, st = ur(Co), Eo = Rt, Re = ur(Eo), Ro = we, _o = Ir, To = ur(_o);
function ur(e) {
  return e && e.__esModule ? e : { default: e };
}
function Do(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function jo(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Po(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Mr = Qe.Frame = function(e) {
  Po(r, e);
  function r(t, n) {
    Do(this, r);
    var i = jo(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, n));
    return i.setRef = function(o) {
      i.nodeRef.current = o;
      var c = i.props.forwardedRef;
      typeof c == "function" ? c(o) : c && (c.current = o);
    }, i.handleLoad = function() {
      clearInterval(i.loadCheck), i.state.iframeLoaded || i.setState({ iframeLoaded: !0 });
    }, i.loadCheck = function() {
      return setInterval(function() {
        i.handleLoad();
      }, 500);
    }, i._isMounted = !1, i.nodeRef = Le.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return wo(r, [{
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
      var i = this.props.contentDidMount, o = this.props.contentDidUpdate, c = n.defaultView || n.parentView, s = Le.default.createElement(
        To.default,
        {
          contentDidMount: i,
          contentDidUpdate: o
        },
        Le.default.createElement(
          Ro.FrameContextProvider,
          { value: { document: n, window: c } },
          Le.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), d = this.getMountTarget();
      return d ? [st.default.createPortal(this.props.head, this.getDoc().head), st.default.createPortal(s, d)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = _r({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, Le.default.createElement(
        "iframe",
        _r({}, n, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), r;
}(It.Component);
Mr.propTypes = {
  style: Re.default.object,
  // eslint-disable-line
  head: Re.default.node,
  initialContent: Re.default.string,
  mountTarget: Re.default.string,
  contentDidMount: Re.default.func,
  contentDidUpdate: Re.default.func,
  children: Re.default.oneOfType([Re.default.element, Re.default.arrayOf(Re.default.element)])
};
Mr.defaultProps = {
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
Qe.default = Le.default.forwardRef(function(e, r) {
  return Le.default.createElement(Mr, _r({}, e, { forwardedRef: r }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = Qe;
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
})(sr);
const Io = /* @__PURE__ */ un(sr), Mo = ({ children: e, onScroll: r, onRef: t, onKeyDown: n, onClick: i }) => {
  const { document: o } = sr.useFrame();
  return ce(() => {
    o && t(o);
  }, [t, o]), ce(() => {
    o && (o.onclick = i, o.onkeydown = n, o.onscroll = (c) => r(c.target.documentElement.scrollTop, c.target.documentElement.scrollLeft));
  }, [o, r, n, i]), e;
}, Bo = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = F(
    de(() => Dr(({ get: c }) => c(r).map((s) => ({
      id: c(s.id),
      content: c(s.content)
    }))), [r])
  ), o = de(() => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    i.map((c) => ut("style", { key: c.id }, c.content)),
    /* @__PURE__ */ g.jsx("style", { children: [
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
  return /* @__PURE__ */ g.jsx(
    Io,
    {
      tabIndex: -1,
      head: o,
      mountTarget: "body",
      onContextMenu: (c) => c.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, ko = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), lr = (e, r) => pe(({ get: n }) => {
  const i = [...r].reverse();
  let o;
  for (let c = 0; c < i.length; c++) {
    const s = i[c];
    if (n(s.type) === "slot-content" && (o = !1), n(s.type) === "component")
      if (o === !1)
        o = void 0;
      else
        return !0;
  }
  return !!o;
}, [r, e]), Lo = ({ element: e }) => {
  const r = F(e.name);
  return /* @__PURE__ */ g.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ g.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Ee = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = pe(({ get: o }) => {
    if (!e)
      return !1;
    const c = o(e);
    if (!r)
      return !1;
    const s = o(r);
    return c === s;
  }, [...n]);
  ce(() => {
    i && t();
  }, [i]);
}, Vo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: o }) => {
  const c = Y(null), { selectedId: s } = Te(), { hoveredId: d } = De(), f = F(e.name);
  return Ee({
    value: d,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [d, e]), Ee({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [s, e]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (u) => o(u, e),
      onMouseOver: (u) => i(u, e, c.current),
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
        /* @__PURE__ */ g.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: f }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, Ao = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f, onDoubleClick: u }) => {
  const v = Y(null), { onDragStart: m, onDragEnd: l, components: p } = be(), { hideInsertBar: y } = Ie(), { selectedId: b } = Te(), { hoveredId: w } = De(), C = F(e.name), E = F(e.id), x = pe(({ get: D }) => {
    const I = D(p).find((Z) => D(Z.id) === D(e.referenceComponentId));
    return I ? D(I.content) : [];
  }, [p, e]);
  Ee({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, v.current)
  }, [w, e]), Ee({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, v.current)
  }, [b, e]);
  const h = de(() => !x || x.length === 0 ? null : x.map((D) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: D,
      parents: [...r, e]
    },
    D.id.value
  )), [x, r, e]), { isDragging: j, preview: P } = _e({
    id: E,
    element: v,
    data: { element: e, parents: r },
    start: () => {
      m();
    },
    end: () => {
      y(), l();
    }
  }, [E, e, r, y, m, l]);
  ce(() => {
    P(
      () => Ze(C),
      (D) => D.remove()
    );
  }, [P, C]);
  const B = Y({ id: qe() });
  return Se({
    element: v,
    id: B.current.id,
    drop: (D, I) => s(D, I, e, r, v, B.current.id),
    hover: (D, I) => c(D, I, e, r, v, B.current.id),
    leave: (D, I) => o(D, I, e, r, v, B.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: v,
      onMouseLeave: n,
      onClick: (D) => i(D, e),
      onDoubleClick: (D) => u(D, e),
      onMouseOver: (D) => t(D, e, v.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: j ? 0.5 : void 0 },
      children: h
    }
  );
}, $o = ({ element: e, parents: r }) => {
  const { components: t } = be(), n = pe(({ get: i }) => {
    const o = i(t).find((c) => i(c.id) === i(e.referenceComponentId));
    return o ? i(o.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, Fo = ({ element: e, parents: r, ...t }) => {
  const n = ko(e, r), i = lr(e, r);
  return n ? i ? /* @__PURE__ */ g.jsx(Lo, { element: e }) : /* @__PURE__ */ g.jsx(
    Vo,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ g.jsx(
    $o,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    Ao,
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
}, Mt = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Dr(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((c) => {
      const s = n(c.name), d = n(c.value);
      s && (o[St(s)] = r(d, s, "style", e));
    }), o;
  }), [e, r, e]);
  return F(t);
}, Bt = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Dr({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, c = {};
      return i.forEach((s) => {
        const d = n(s.name);
        if (d === void 0 || d === "hidden" || d === "style")
          return;
        const f = r(n(s.value), d, "attribute", e), u = St(d);
        switch (u) {
          case "options":
            c.options = f;
            break;
          case "className":
            o.className = f;
            break;
          case "class":
            o.className = f;
            break;
          default:
            if (d.startsWith("data-")) {
              o[d] = f;
              return;
            } else
              o[u] = f;
            break;
        }
      }), [o, c];
    }
  }), [e, r]);
  return F(t);
}, kt = an(({ tag: e, ...r }, t) => ut(e, { ref: t, ...r })), Ho = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const u = Y(null), [v, m] = Tr(!1), [
    l
    /* elementSpecialProps */
  ] = Bt(e), p = F(e.children), y = Mt(e), b = F(e.name), w = F(e.tag), C = F(e.id), { onDragStart: E, onDragEnd: x } = be(), { hideInsertBar: h } = Ie(), { selectedId: j } = Te(), { hoveredId: P } = De();
  Ee({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, u.current)
  }, [P, e]), Ee({
    value: j,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, u.current)
  }, [j, e]), ce(() => {
    m((A) => P.value === C === A ? A : !A);
    const M = P.subscribe((A) => {
      m((Q) => A === C === Q ? Q : !Q);
    });
    return () => M.unsubscribe();
  }, [C, P]);
  const B = de(() => !p || p.length === 0 ? null : p.map((M) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: M,
      parents: [...r, e]
    },
    M.id.value
  )), [p, r, e]), D = de(() => p !== void 0, [p]), { isDragging: I, preview: Z } = _e({
    id: C,
    element: u,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), x();
    }
  }, [C, e, r, h, E, x]);
  ce(() => {
    Z(
      () => Ze(b),
      (M) => M.remove()
    );
  }, [Z, b]);
  const oe = Y({ id: qe() });
  return Se({
    element: u,
    id: oe.current.id,
    drop: (M, A) => s(M, A, e, r, u, oe.current.id),
    hover: (M, A) => c(M, A, e, r, u, oe.current.id),
    leave: (M, A) => o(M, A, e, r, u, oe.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    kt,
    {
      readOnly: !0,
      tag: w,
      ref: u,
      children: B,
      onMouseLeave: n,
      onClick: (M) => i(M, e),
      onMouseOver: (M) => t(M, e, u.current),
      ...l !== void 0 ? { ...l, ...v ? { disabled: !1 } : {} } : {},
      style: {
        ...y,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: I ? 0.5 : typeof y.opacity == "number" ? Number(y.opacity) : void 0,
        minWidth: B === null && D ? 40 : typeof y.minWidth == "number" ? Number(y.minWidth) : void 0,
        minHeight: B === null && D ? 40 : typeof y.minHeight == "number" ? Number(y.minHeight) : void 0
      }
    }
  );
}, zo = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = Bt(e), n = F(e.children), i = Mt(e), o = F(e.tag), c = de(() => !n || n.length === 0 ? null : n.map((s) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: s,
      parents: [...r, e]
    },
    s.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ g.jsx(
    kt,
    {
      tag: o,
      children: c,
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
}, Wo = ({ element: e, parents: r, ...t }) => lr(e, r) ? /* @__PURE__ */ g.jsx(
  zo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  Ho,
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
), Uo = (e, r) => {
  const { components: t } = be();
  return pe(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var m;
      if (n(f.type) !== "component")
        return !1;
      const u = f;
      return n(e.componentId) === n(u.referenceComponentId) ? (m = n(u.slots)) == null ? void 0 : m.some((l) => n(l.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, u) => f !== void 0 ? f : n(u.type) === "slot-content" ? !1 : n(u.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, Lt = (e, r) => {
  const { onAddSlotContent: t } = be();
  return pe(({ get: n }) => {
    var c;
    const i = [...r].reverse().filter((s) => n(s.type) === "component").find((s) => n(s.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const o = (c = n(i.slots)) == null ? void 0 : c.find((s) => n(s.referenceSlotId) === n(e.id));
    return o ? [n(o.children), o] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, Yo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: o, onDrop: c, onHoverBar: s }) => {
  const d = Y(null), [f = [], u] = Lt(e, r), { hoveredId: v } = De();
  Ee({
    value: v,
    matchWidthValue: u == null ? void 0 : u.id,
    effect() {
      u && s(e, d.current);
    }
  }, [v, u == null ? void 0 : u.id, e]);
  const m = Y({ id: qe() });
  return Se({
    element: d,
    id: m.current.id,
    drop: (l, p) => u ? c(l, p, u, r, d, m.current.id) : void 0,
    hover: (l, p) => u ? o(l, p, u, r, d, m.current.id) : void 0,
    leave: (l, p) => u ? i(l, p, u, r, d, m.current.id) : void 0
  }, [u, r, c, o, i]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (l) => u ? t(l, u, d.current) : void 0,
      children: [
        u && f.length > 0 && f.map((l) => /* @__PURE__ */ g.jsx(
          He,
          {
            element: l,
            parents: [...r, u]
          },
          l.id.value
        )),
        f.length === 0 && /* @__PURE__ */ g.jsx(
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
}, No = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const u = Y(null), { onDragStart: v, onDragEnd: m } = be(), { hideInsertBar: l } = Ie(), { selectedId: p } = Te(), { hoveredId: y } = De(), b = F(e.name), w = F(e.id);
  Ee({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, u.current)
  }, [y, e]), Ee({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, u.current)
  }, [p, e]);
  const { isDragging: C, preview: E } = _e({
    id: w,
    element: u,
    data: { element: e, parents: r },
    start: () => {
      v();
    },
    end: () => {
      l(), m();
    }
  }, [w, e, r, l, v, m]);
  ce(() => {
    E(
      () => Ze(b),
      (h) => h.remove()
    );
  }, [E, b]);
  const x = Y({ id: qe() });
  return Se({
    element: u,
    id: x.current.id,
    drop: (h, j) => s(h, j, e, r, u, x.current.id),
    hover: (h, j) => c(h, j, e, r, u, x.current.id),
    leave: (h, j) => o(h, j, e, r, u, x.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: u,
      onMouseLeave: n,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => t(h, e, u.current),
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
        opacity: C ? 0.5 : void 0
      },
      children: [
        'Slot "',
        b,
        '"'
      ]
    }
  );
}, qo = ({ element: e, parents: r }) => {
  const [t = [], n] = Lt(e, r);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, Go = ({ element: e, parents: r, ...t }) => {
  const n = lr(e, r);
  return Uo(e, r) ? /* @__PURE__ */ g.jsx(
    Yo,
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
  ) : n ? /* @__PURE__ */ g.jsx(
    qo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    No,
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
}, Ko = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const u = Y(null), { window: v, document: m } = sr.useFrame(), [l, p] = ke(e.text), y = F(e.name), b = F(e.id), { onExpressionToValue: w, onValueToExpression: C } = be(), { onDragStart: E, onDragEnd: x } = be(), { hideInsertBar: h } = Ie(), { selectedId: j } = Te(), { hoveredId: P } = De(), [B, D] = Tr(!1);
  ce(() => {
    !u.current || !B || (u.current.focus(), f(e, null));
  }, [B, f]), Ee({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, u.current)
  }, [P, e]), Ee({
    value: j,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, u.current)
  }, [j, e]);
  const { isDragging: I, preview: Z } = _e({
    id: b,
    canDrag: !B,
    element: u,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), x();
    }
  }, [b, B, e, r, h, E, x]);
  ce(() => {
    Z(
      () => Ze(y),
      (k) => k.remove()
    );
  }, [Z, y]);
  const oe = Y({ id: qe() });
  Se({
    element: u,
    id: oe.current.id,
    drop: (k, ne) => s(k, ne, e, r, u, oe.current.id),
    hover: (k, ne) => c(k, ne, e, r, u, oe.current.id),
    leave: (k, ne) => o(k, ne, e, r, u, oe.current.id)
  }, [e, r, s, c, o]);
  const M = U((k) => {
    if (!v || !m)
      return;
    const ne = v.getSelection();
    if (!ne)
      return;
    const se = m.createRange(), O = k.currentTarget;
    se.selectNodeContents(O), ne.removeAllRanges(), ne.addRange(se);
  }, [v, m]), A = U((k) => {
    k.stopPropagation(), (k.code === "Escape" || k.code === "Enter" || k.code === "NumpadEnter") && (k.currentTarget.blur(), f(e, k.currentTarget));
  }, [f, e]), Q = U((k) => {
    D(!1), p(String(C(k.currentTarget.innerText, "text", "textContent", e))), f(e, k.currentTarget);
  }, [f, C, e]), ae = de(() => w(l, "text", "textContent", e) ?? "", [l, w, e]);
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      contentEditable: B,
      dangerouslySetInnerHTML: { __html: ae },
      onBlur: Q,
      onFocus: M,
      onKeyDown: A,
      onDoubleClick: () => D(!0),
      ref: u,
      onMouseLeave: n,
      onClick: (k) => B ? k.stopPropagation() : i(k, e),
      onMouseOver: (k) => B ? k.stopPropagation() : t(k, e, u.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: I ? 0.5 : void 0,
        borderRadius: B ? 4 : void 0,
        boxShadow: B ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, Jo = ({ element: e }) => {
  const { onExpressionToValue: r } = be(), t = F(e.text);
  return de(() => r(t, "text", "textContent", e), [t, r, e]);
}, Xo = ({ element: e, parents: r, ...t }) => lr(e, r) ? /* @__PURE__ */ g.jsx(
  Jo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  Ko,
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
), He = ({ element: e, parents: r }) => {
  const t = F(e.type), { showInsertBar: n, hideInsertBar: i } = Ie(), { select: o, updateSelectBar: c } = Te(), { hover: s, updateHoverBar: d } = De(), { onDrop: f, value: u } = be(), v = U((E, x) => {
    E.stopPropagation(), E.preventDefault(), o(x.id.value);
  }, [o]), m = U((E) => {
    E.stopPropagation(), E.preventDefault(), o(void 0), s(void 0);
  }, [o, s]), l = U((E, x) => {
    E.stopPropagation(), s(x.id.value);
  }, [s]), p = U((E) => {
    E.stopPropagation(), s(void 0);
  }, [s]), y = U((E, x) => {
    d(E, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [d]), b = U((E, x) => {
    c(E, r, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [c, r]), w = U((E, x, h, j, P, B) => {
    if (!Zr(x, h, j, P, B))
      return s(void 0);
    s(h.id.value);
    const I = Qn(x, h, P);
    if (!I)
      return i();
    n({
      isVisible: !0,
      top: I.top,
      left: I.left,
      width: I.width,
      height: I.height,
      isHorizontal: I.isHorizontal
    });
  }, [n, s, i]), C = U((E, x, h, j, P, B) => {
    var oe, M, A, Q, ae, k;
    if (!Zr(x, h, j, P, B))
      return;
    const I = Zn(x, h, P);
    if (!I)
      return;
    const Z = I.isOverStart || I.isOverEnd;
    if (!(!Z && h.type.value === "component")) {
      if (Object.keys(E).includes("id")) {
        const ne = E;
        if (Z) {
          const se = j.slice(-1).at(0), O = ((oe = (se ? se.children : u).value) == null ? void 0 : oe.findIndex((T) => T.id.value === h.id.value)) ?? -1;
          f({
            element: ne.id,
            from: { position: -1, element: null },
            to: {
              element: se || "root",
              position: I.isOverStart ? O : O + 1
            }
          });
        } else {
          const se = ((M = h.children.value) == null ? void 0 : M.length) || -1;
          f({
            element: ne.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: I.isOverStart ? se : se + 1
            }
          });
        }
      } else {
        const ne = E, se = (A = ne.parents) == null ? void 0 : A.slice(-1).at(0), O = se || "root";
        if (O !== "root" && O.type.value === "component")
          return;
        const T = ((Q = (O === "root" ? u : O.children).value) == null ? void 0 : Q.findIndex((L) => L.id.value === ne.element.id.value)) ?? -1;
        if (Z) {
          const L = j.slice(-1).at(0), H = ((ae = (L ? L.children : u).value) == null ? void 0 : ae.findIndex(($) => $.id.value === h.id.value)) ?? -1;
          f({
            element: ne.element,
            from: {
              position: T,
              element: O
            },
            to: {
              element: L || "root",
              position: I.isOverStart ? H : H + 1
            }
          });
        } else {
          const L = ((k = h.children.value) == null ? void 0 : k.length) || -1;
          f({
            element: ne.element,
            from: {
              position: T,
              element: O
            },
            to: {
              element: h,
              position: I.isOverStart ? L : L + 1
            }
          });
        }
        o(ne.element.id.value);
      }
      i();
    }
  }, [o, f, i]);
  return t === "component" ? /* @__PURE__ */ g.jsx(
    Fo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onDoubleClick: m,
      onSelect: v,
      onMouseOver: l,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : t === "slot" ? /* @__PURE__ */ g.jsx(
    Go,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: v,
      onMouseOver: l,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : t === "text" ? /* @__PURE__ */ g.jsx(
    Xo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: v,
      onMouseOver: l,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : /* @__PURE__ */ g.jsx(
    Wo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: v,
      onMouseOver: l,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: b
    }
  );
}, Zo = () => {
  const e = Y({ id: qe() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = be(), { updateSelectBarScroll: o, select: c } = Te(), { showInsertBar: s, hideInsertBar: d } = Ie(), { updateHoverBarScroll: f, hover: u } = De(), [v, m] = Tr(null), l = F(r), p = U((x, h) => {
    var j;
    if (d(), !!x)
      if (Object.keys(x).includes("id"))
        n({
          element: x.id,
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
        const P = x, B = Jn(P.parents || []), D = B || "root", I = ((j = B == null ? void 0 : B.children.value) == null ? void 0 : j.findIndex((Z) => Z.id.value === P.element.id.value)) ?? -1;
        n({
          element: P.element,
          from: {
            element: D,
            position: I
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), c(P.element.id.value);
      }
  }, [r, c, d]), y = U((x, h) => {
    const j = v == null ? void 0 : v.lastElementChild;
    if (!j)
      return;
    const P = j.getBoundingClientRect();
    s({
      isVisible: !0,
      isHorizontal: !0,
      left: P.left,
      width: P.width,
      height: P.height,
      top: j ? P.top + P.height : P.top
    });
  }, [v == null ? void 0 : v.lastElementChild, s]), b = U((x, h) => {
    o(x, h), f(x, h);
  }, [o, f]), w = U((x) => {
    x.stopPropagation(), c(void 0);
  }, [c]), [{ isDraggingOver: C, isDraggingOverCurrent: E }] = Se({
    drop: p,
    hover: y,
    id: e.current.id,
    element: { current: v },
    leave: () => {
      d(), u(void 0);
    }
  }, [p, y, d]);
  return /* @__PURE__ */ g.jsx(
    Bo,
    {
      styles: t,
      resetBody: !0,
      draggingHover: C || E,
      children: /* @__PURE__ */ g.jsxs(
        Mo,
        {
          onClick: w,
          onKeyDown: i,
          onScroll: b,
          onRef: m,
          children: [
            /* @__PURE__ */ g.jsx(Vn, {}),
            /* @__PURE__ */ g.jsx(oo, {}),
            /* @__PURE__ */ g.jsx(ro, {}),
            l.map((x) => /* @__PURE__ */ g.jsx(
              He,
              {
                parents: [],
                element: x
              },
              x.id.value
            )),
            l.length === 0 && /* @__PURE__ */ g.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ g.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function ii({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(lt, { children: /* @__PURE__ */ g.jsx(kn, { ...i, children: /* @__PURE__ */ g.jsx(Ln, { children: /* @__PURE__ */ g.jsx(An, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(to, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(Zo, {}) }) }) }) }) });
}
export {
  ii as UIEditor,
  oi as UiOverview
};
//# sourceMappingURL=index.es.js.map

import Oe, { createContext as Ve, useContext as Ae, useRef as Y, useEffect as ce, useCallback as U, useMemo as de, memo as or, createElement as ut, forwardRef as an, useState as Tr } from "react";
import { useDrag as _e, useDrop as Se, DragAndDropProvider as lt } from "react-use-drag-and-drop";
import { useSelectorValue as pe, useObserverValue as H, observe as fe, set as ve, useObserver as ke, selector as Dr } from "react-observing";
import { v4 as dt } from "uuid";
import cn from "react-dom";
var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, Je = {};
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
  var e = Oe, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, v) {
    var d, f = {}, g = null, u = null;
    v !== void 0 && (g = "" + v), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (u = l.ref);
    for (d in l)
      t.call(l, d) && !o.hasOwnProperty(d) && (f[d] = l[d]);
    if (c && c.defaultProps)
      for (d in l = c.defaultProps, l)
        f[d] === void 0 && (f[d] = l[d]);
    return { $$typeof: r, type: c, key: g, ref: u, props: f, _owner: i.current };
  }
  return Je.Fragment = n, Je.jsx = s, Je.jsxs = s, Je;
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
    var e = Oe, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), p = Symbol.iterator, y = "@@iterator";
    function x(a) {
      if (a === null || typeof a != "object")
        return null;
      var S = p && a[p] || a[y];
      return typeof S == "function" ? S : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(a) {
      {
        for (var S = arguments.length, _ = new Array(S > 1 ? S - 1 : 0), V = 1; V < S; V++)
          _[V - 1] = arguments[V];
        C("error", a, _);
      }
    }
    function C(a, S, _) {
      {
        var V = w.ReactDebugCurrentFrame, ee = V.getStackAddendum();
        ee !== "" && (S += "%s", _ = _.concat([ee]));
        var ie = _.map(function(J) {
          return String(J);
        });
        ie.unshift("Warning: " + S), Function.prototype.apply.call(console[a], console, ie);
      }
    }
    var m = !1, h = !1, j = !1, P = !1, B = !1, D;
    D = Symbol.for("react.module.reference");
    function I(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === t || a === o || B || a === i || a === v || a === d || P || a === u || m || h || j || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === f || a.$$typeof === s || a.$$typeof === c || a.$$typeof === l || // This needs to include all possible module reference object
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
      if (typeof a.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case v:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var S = a;
            return oe(S) + ".Consumer";
          case s:
            var _ = a;
            return oe(_._context) + ".Provider";
          case l:
            return Z(a, a.render, "ForwardRef");
          case f:
            var V = a.displayName || null;
            return V !== null ? V : M(a.type) || "Memo";
          case g: {
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
    function F() {
    }
    F.__reactDisabledLog = !0;
    function $() {
      {
        if (Q === 0) {
          ae = console.log, k = console.info, ne = console.warn, se = console.error, O = console.group, T = console.groupCollapsed, L = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: F,
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
        Q < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
        case v:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return xe(a.render);
          case f:
            return Me(a.type, S, _);
          case g: {
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
            G && !(G instanceof Error) && (er(ee), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", _, J, typeof G), er(null)), G instanceof Error && !(G.message in Br) && (Br[G.message] = !0, er(ee), E("Failed %s type: %s", _, G.message), er(null));
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
    function Ht(a) {
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
      if (Ht(a))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(a)), Lr(a);
    }
    var Ke = w.ReactCurrentOwner, Ft = {
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
        fr[_] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Ke.current.type), a.ref), fr[_] = !0);
      }
    }
    function Yt(a, S) {
      {
        var _ = function() {
          Ar || (Ar = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
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
          $r || ($r = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
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
          Ge.call(S, ie) && !Ft.hasOwnProperty(ie) && (J[ie] = S[ie]);
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
    var vr = w.ReactCurrentOwner, Hr = w.ReactDebugCurrentFrame;
    function We(a) {
      if (a) {
        var S = a._owner, _ = Me(a.type, a._source, S ? S.type : null);
        Hr.setExtraStackFrame(_);
      } else
        Hr.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function hr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Fr() {
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
        var S = Fr();
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
        a && a._owner && a._owner !== vr.current && (V = " It was passed a child from " + M(a._owner.type) + "."), We(a), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, V), We(null);
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
          var ee = x(a);
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
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === f))
          _ = S.propTypes;
        else
          return;
        if (_) {
          var V = M(S);
          Vt(_, a.props, "prop", V, a);
        } else if (S.PropTypes !== void 0 && !pr) {
          pr = !0;
          var ee = M(S);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(a) {
      {
        for (var S = Object.keys(a.props), _ = 0; _ < S.length; _++) {
          var V = S[_];
          if (V !== "children" && V !== "key") {
            We(a), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), We(null);
            break;
          }
        }
        a.ref !== null && (We(a), E("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
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
          ye ? G += ye : G += Fr();
          var ue;
          a === null ? ue = "null" : dr(a) ? ue = "array" : a !== void 0 && a.$$typeof === r ? (ue = "<" + (M(a.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof a, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, G);
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
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ur(me, a);
        }
        if (Ge.call(S, "key")) {
          var Be = M(a), ge = Object.keys(S).filter(function(on) {
            return on !== "key";
          }), yr = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yr[Be + yr]) {
            var nn = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yr, Be, nn, Be), Yr[Be + yr] = !0;
          }
        }
        return a === t ? Zt(le) : Xt(le), le;
      }
    }
    function Qt(a, S, _) {
      return Nr(a, S, _, !0);
    }
    function en(a, S, _) {
      return Nr(a, S, _, !1);
    }
    var rn = en, tn = Qt;
    Xe.Fragment = t, Xe.jsx = rn, Xe.jsxs = tn;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Er.exports = ln() : Er.exports = dn();
var b = Er.exports;
const ft = Ve({});
function fn({ children: e, ...r }) {
  return /* @__PURE__ */ b.jsx(ft.Provider, { value: r, children: e });
}
const je = () => Ae(ft), vt = Ve({}), vn = ({ children: e, id: r, onSelect: n }) => {
  const t = Y({ onSelect: n, id: r });
  return ce(() => {
    t.current.id = r;
  }, [r]), ce(() => {
    t.current.onSelect = n;
  }, [n]), /* @__PURE__ */ b.jsx(vt.Provider, { value: t.current, children: e });
}, $e = () => {
  const e = Ae(vt);
  return {
    select: U((n) => {
      e.onSelect(n);
    }, [e.id]),
    selectedId: e.id
  };
}, pt = Ve({}), pn = ({ children: e, id: r, onHover: n }) => {
  const t = Y({ onHover: n, id: r });
  return ce(() => {
    t.current.id = r;
  }, [r]), ce(() => {
    t.current.onHover = n;
  }, [n]), /* @__PURE__ */ b.jsx(pt.Provider, { value: t.current, children: e });
}, Pe = () => {
  const e = Ae(pt);
  return {
    hover: U((n) => {
      e.id.value !== n && e.onHover(n);
    }, [e.id]),
    hoveredId: e.id
  };
}, hn = (e) => {
  let r, n = 0;
  if (!(!e || e.length === 0)) {
    do
      n--, r = e == null ? void 0 : e.slice(n).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, ir = (e, r) => {
  const n = document.createElement("label");
  return n.style.padding = "4px", n.style.paddingTop = "2px", n.style.paddingRight = "8px", n.style.paddingBottom = "2px", n.style.backgroundColor = "#3e8ce4", n.style.color = "#ffffff", n.style.alignItems = "center", n.style.borderRadius = "2px", n.style.fontWeight = "600", n.style.position = "fixed", n.style.fontSize = "11px", n.style.display = "flex", n.style.height = "20px", n.style.zIndex = "-100", n.style.width = "auto", n.appendChild(new Text(e)), document.body.appendChild(n), n;
};
var ht = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(u, p) {
      return p = p || "", u.replace(/(^|-)/g, "$1\\u" + p).replace(/,/g, "\\u" + p);
    }, n = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), t = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), o = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", s = function(u, p, y, x) {
      return u = u || n, p = p || t, y = y || i, x = x || o, {
        capitalize: new RegExp("(^|[" + u + "])([" + p + "])", "g"),
        pascal: new RegExp("(^|[" + u + "])+([" + p + y + "])", "g"),
        fill: new RegExp("[" + u + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + p + "])", "g"),
        improper: new RegExp("\\b(" + x + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + p + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + u + "]")
      };
    }, c = s(), l = {
      re: c,
      unicodes: r,
      regexps: s,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(u) {
        return l.up.call(u.charAt(0)) + u.slice(1);
      },
      decap: function(u) {
        return l.low.call(u.charAt(0)) + u.slice(1);
      },
      deapostrophe: function(u) {
        return u.replace(c.apostrophe, "");
      },
      fill: function(u, p, y) {
        return p != null && (u = u.replace(c.fill, function(x, w) {
          return w ? p + w : "";
        })), y && (u = l.deapostrophe(u)), u;
      },
      prep: function(u, p, y, x) {
        if (u = u == null ? "" : u + "", !x && c.upper.test(u) && (u = l.low.call(u)), !p && !c.hole.test(u)) {
          var w = l.fill(u, " ");
          c.hole.test(w) && (u = w);
        }
        return !y && !c.room.test(u) && (u = u.replace(c.relax, l.relax)), u;
      },
      relax: function(u, p, y, x) {
        return p + " " + (y ? y + " " : "") + x;
      }
    }, v = {
      _: l,
      of: function(u) {
        for (var p = 0, y = l.types.length; p < y; p++)
          if (v[l.types[p]].apply(v, arguments) === u)
            return l.types[p];
      },
      flip: function(u) {
        return u.replace(/\w/g, function(p) {
          return (p == l.up.call(p) ? l.low : l.up).call(p);
        });
      },
      random: function(u) {
        return u.replace(/\w/g, function(p) {
          return (Math.round(Math.random()) ? l.up : l.low).call(p);
        });
      },
      type: function(u, p) {
        v[u] = p, l.types.push(u);
      }
    }, d = {
      lower: function(u, p, y) {
        return l.fill(l.low.call(l.prep(u, p)), p, y);
      },
      snake: function(u) {
        return v.lower(u, "_", !0);
      },
      constant: function(u) {
        return v.upper(u, "_", !0);
      },
      camel: function(u) {
        return l.decap(v.pascal(u));
      },
      kebab: function(u) {
        return v.lower(u, "-", !0);
      },
      upper: function(u, p, y) {
        return l.fill(l.up.call(l.prep(u, p, !1, !0)), p, y);
      },
      capital: function(u, p, y) {
        return l.fill(l.prep(u).replace(c.capitalize, function(x, w, E) {
          return w + l.up.call(E);
        }), p, y);
      },
      header: function(u) {
        return v.capital(u, "-", !0);
      },
      pascal: function(u) {
        return l.fill(l.prep(u, !1, !0).replace(c.pascal, function(p, y, x) {
          return l.up.call(x);
        }), "", !0);
      },
      title: function(u) {
        return v.capital(u).replace(c.improper, function(p, y, x, w) {
          return x > 0 && x < w.lastIndexOf(" ") ? l.low.call(p) : p;
        });
      },
      sentence: function(u, p, y) {
        return u = v.lower(u).replace(c.sentence, function(x, w, E) {
          return w + l.up.call(E);
        }), p && p.forEach(function(x) {
          u = u.replace(new RegExp("\\b" + v.lower(x) + "\\b", "g"), l.cap);
        }), y && y.forEach(function(x) {
          u = u.replace(new RegExp("(\\b" + v.lower(x) + "\\. +)(\\w)"), function(w, E, C) {
            return E + l.low.call(C);
          });
        }), u;
      }
    };
    d.squish = d.pascal, v.default = v;
    for (var f in d)
      v.type(f, d[f]);
    var g = typeof g == "function" ? g : function() {
    };
    g(e.exports ? e.exports = v : this.Case = v);
  }).call(sn);
})(ht);
var yn = ht.exports;
const Kr = (e, r, n, t, i) => !(!t.current || e.droppableId !== i || e.draggingId === r.id.value || n.some((c) => e.draggingId === c.id.value)), gn = (e, r, n) => {
  if (!n.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const t = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = n.current.getBoundingClientRect(), o = t ? 5 : i.height / 2, s = e.x - i.x, c = e.y - i.y, l = c >= 0 && c <= o, v = c >= i.height - o && c <= i.height, d = c >= o && c <= i.height - o, f = s >= 0 && s <= o, g = s >= i.width - o && s <= i.width, u = s >= o && s <= i.width - o;
  let p = !1, y = !1, x = !1, w = !1;
  if (t) {
    const E = v || g || l || f;
    p = u && d && !E, y = u && d && !E, x = v || g, w = l || f;
  } else
    x = (v || g) && !l, w = (l || f) && !v;
  return { isOverCurrentStart: p, isOverCurrentEnd: y, isOverEnd: x, isOverStart: w };
}, Ye = () => dt(), bn = () => /* @__PURE__ */ b.jsx("div", { className: "animate-pulse p-0.5 bg-[#3e8ce4] z-10" }), xn = (e, r) => pe(({ get: n }) => r.map((t) => n(t.id)).includes(n(e.id)), [e, r]), ar = (e, r) => pe(({ get: t }) => {
  const i = [...r].reverse();
  let o;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    if (t(c.type) === "slot-content" && (o = !1), t(c.type) === "component")
      if (o === !1)
        o = void 0;
      else
        return !0;
  }
  return !!o;
}, [r, e]), Ee = ({ value: e, matchWidthValue: r, effect: n }, t) => {
  const i = pe(({ get: o }) => {
    if (!e)
      return !1;
    const s = o(e);
    if (!r)
      return !1;
    const c = o(r);
    return s === c;
  }, [...t]);
  ce(() => {
    i && n();
  }, [i]);
}, Ne = ({ label: e, paddingLeft: r }) => /* @__PURE__ */ b.jsx("div", { className: "pl-2 cursor-pointer rounded-sm outline-[#ed8c5f89] outline-1 hover:outline", style: { paddingLeft: r }, children: e }), mn = ({ element: e, paddingLeft: r, onHoverBar: n, onSelectBar: t, onMouseLeave: i, onMouseOver: o, onSelect: s }) => {
  const c = Y(null), { selectedId: l } = $e(), { hoveredId: v } = Pe(), d = H(e.name);
  return Ee({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => n(e, c.current)
  }, [v, e]), Ee({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [l, e]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: c,
      onMouseLeave: i,
      onClick: (f) => s(f, e),
      onMouseOver: (f) => o(f, e, c.current),
      children: /* @__PURE__ */ b.jsx(Ne, { label: d + "(Infinity loop)", paddingLeft: r })
    }
  );
}, On = ({ element: e, parents: r, paddingLeft: n, onMouseOver: t, onMouseLeave: i, onSelect: o, onDragLeave: s, onDragOver: c, onDrop: l, onHoverBar: v, onSelectBar: d, onDoubleClick: f }) => {
  const g = Y(null), { onDragStart: u, onDragEnd: p, components: y } = je(), { selectedId: x } = $e(), { hoveredId: w } = Pe(), E = H(e.name), C = H(e.id), m = pe(({ get: D }) => {
    const I = D(y).find((Z) => D(Z.id) === D(e.referenceComponentId));
    return I ? D(I.content) : [];
  }, [y, e]);
  Ee({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, g.current)
  }, [w, e]), Ee({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, g.current)
  }, [x, e]);
  const h = de(() => !m || m.length === 0 ? null : m.map((D) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: D,
      paddingLeft: n,
      parents: [...r, e]
    },
    D.id.value
  )), [m, r, e, n]), { isDragging: j, preview: P } = _e({
    id: C,
    element: g,
    end: () => p(),
    data: { element: e, parents: r },
    start: () => {
      u();
    }
  }, [C, e, r, u, p]);
  ce(() => {
    P(
      () => ir(E),
      (D) => D.remove()
    );
  }, [P, E]);
  const B = Y({ id: Ye() });
  return Se({
    element: g,
    id: B.current.id,
    drop: (D, I) => l(D, I, e, r, g, B.current.id),
    hover: (D, I) => c(D, I, e, r, g, B.current.id),
    leave: (D, I) => s(D, I, e, r, g, B.current.id)
  }, [e, r, l, c, s]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: g,
        "data-dragging": j,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (D) => o(D, e),
        onDoubleClick: (D) => f(D, e),
        onMouseOver: (D) => t(D, e, g.current),
        children: /* @__PURE__ */ b.jsx(Ne, { label: E, paddingLeft: n })
      }
    ),
    h
  ] });
}, Sn = ({ element: e, parents: r, paddingLeft: n }) => {
  const { components: t } = je();
  return pe(({ get: o }) => {
    const s = o(t).find((c) => o(c.id) === o(e.referenceComponentId));
    return s ? o(s.content) : [];
  }, [t, e]).map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      paddingLeft: n,
      parents: [...r, e]
    },
    o.id.value
  ));
}, wn = ({ element: e, parents: r, paddingLeft: n, ...t }) => {
  const i = xn(e, r), o = ar(e, r);
  return i ? o ? null : /* @__PURE__ */ b.jsx(
    mn,
    {
      element: e,
      paddingLeft: n,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : o ? /* @__PURE__ */ b.jsx(
    Sn,
    {
      element: e,
      parents: r,
      paddingLeft: n
    }
  ) : /* @__PURE__ */ b.jsx(
    On,
    {
      element: e,
      parents: r,
      paddingLeft: n,
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
}, En = ({ element: e, parents: r, paddingLeft: n, onMouseOver: t, onMouseLeave: i, onSelect: o, onDragLeave: s, onDragOver: c, onDrop: l, onHoverBar: v, onSelectBar: d }) => {
  const f = Y(null), g = H(e.children), u = H(e.name), p = H(e.id), { onDragStart: y, onDragEnd: x } = je(), { selectedId: w } = $e(), { hoveredId: E } = Pe();
  Ee({
    value: E,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, f.current)
  }, [E, e]), Ee({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [w, e]);
  const C = de(() => !g || g.length === 0 ? null : g.map((P) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: P,
      paddingLeft: n + 8,
      parents: [...r, e]
    },
    P.id.value
  )), [g, r, e, n]), { isDragging: m, preview: h } = _e({
    id: p,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      y();
    },
    end: () => x()
  }, [p, e, r, y, x]);
  ce(() => {
    h(
      () => ir(u),
      (P) => P.remove()
    );
  }, [h, u]);
  const j = Y({ id: Ye() });
  return Se({
    element: f,
    id: j.current.id,
    drop: (P, B) => l(P, B, e, r, f, j.current.id),
    hover: (P, B) => c(P, B, e, r, f, j.current.id),
    leave: (P, B) => s(P, B, e, r, f, j.current.id)
  }, [e, r, l, c, s]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: f,
        "data-dragging": m,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (P) => o(P, e),
        onMouseOver: (P) => t(P, e, f.current),
        children: /* @__PURE__ */ b.jsx(Ne, { label: u, paddingLeft: n })
      }
    ),
    C
  ] });
}, Cn = ({ element: e, parents: r, paddingLeft: n }) => {
  const t = H(e.children);
  return de(() => !t || t.length === 0 ? null : t.map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      paddingLeft: n,
      parents: [...r, e]
    },
    o.id.value
  )), [t, r, e, n]);
}, Rn = ({ element: e, parents: r, paddingLeft: n, ...t }) => ar(e, r) ? /* @__PURE__ */ b.jsx(
  Cn,
  {
    element: e,
    parents: r,
    paddingLeft: n
  }
) : /* @__PURE__ */ b.jsx(
  En,
  {
    element: e,
    parents: r,
    paddingLeft: n,
    onDrop: t.onDrop,
    onDragOver: t.onDragOver,
    onDragLeave: t.onDragLeave,
    onSelect: t.onSelect,
    onMouseOver: t.onMouseOver,
    onMouseLeave: t.onMouseLeave,
    onHoverBar: t.onHoverBar,
    onSelectBar: t.onSelectBar
  }
), _n = (e, r) => {
  const { components: n } = je();
  return pe(({ get: t }) => {
    const i = t(n), o = [...r].reverse(), s = o.findIndex((v) => {
      var g;
      if (t(v.type) !== "component")
        return !1;
      const d = v;
      return t(e.componentId) === t(d.referenceComponentId) ? (g = t(d.slots)) == null ? void 0 : g.some((u) => t(u.referenceSlotId) === t(e.id)) : !1;
    });
    return !o.at(s) || o.slice(s + 1).reduce((v, d) => v !== void 0 ? v : t(d.type) === "slot-content" ? !1 : t(d.type) === "component" ? !0 : v, void 0) ? !1 : i.some((v) => t(v.id) === t(e.componentId));
  }, [r, e, n]);
}, yt = (e, r) => pe(({ get: n }) => {
  var o;
  const t = [...r].reverse().filter((s) => n(s.type) === "component").find((s) => n(s.referenceComponentId) === n(e.componentId));
  if (!t)
    return [];
  const i = (o = n(t.slots)) == null ? void 0 : o.find((s) => n(s.referenceSlotId) === n(e.id));
  return i ? [n(i.children), i] : [];
}, [r, e]), Tn = ({ element: e, parents: r, paddingLeft: n, onMouseOver: t, onMouseLeave: i, onDragLeave: o, onDragOver: s, onDrop: c, onHoverBar: l }) => {
  const v = Y(null), d = H(e.name), [f = [], g] = yt(e, r), { hoveredId: u } = Pe();
  Ee({
    value: u,
    matchWidthValue: g == null ? void 0 : g.id,
    effect() {
      g && l(e, v.current);
    }
  }, [u, g == null ? void 0 : g.id, e]);
  const p = Y({ id: Ye() });
  return Se({
    element: v,
    id: p.current.id,
    drop: (y, x) => g ? c(y, x, g, r, v, p.current.id) : void 0,
    hover: (y, x) => g ? s(y, x, g, r, v, p.current.id) : void 0,
    leave: (y, x) => g ? o(y, x, g, r, v, p.current.id) : void 0
  }, [g, r, c, s, o]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: v,
        style: { paddingLeft: r.length * 8 },
        onMouseLeave: i,
        onMouseOver: (y) => g ? t(y, g, v.current) : void 0,
        children: /* @__PURE__ */ b.jsx(Ne, { label: d, paddingLeft: n })
      }
    ),
    g && f.length > 0 && f.map((y) => /* @__PURE__ */ b.jsx(
      He,
      {
        element: y,
        paddingLeft: n + 8,
        parents: [...r, g]
      },
      y.id.value
    ))
  ] });
}, Dn = ({ element: e, parents: r, paddingLeft: n, onMouseOver: t, onMouseLeave: i, onSelect: o, onDragLeave: s, onDragOver: c, onDrop: l, onHoverBar: v, onSelectBar: d }) => {
  const f = Y(null), { onDragStart: g, onDragEnd: u } = je(), { selectedId: p } = $e(), { hoveredId: y } = Pe(), x = H(e.name), w = H(e.id);
  Ee({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, f.current)
  }, [y, e]), Ee({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [p, e]);
  const { isDragging: E, preview: C } = _e({
    id: w,
    element: f,
    end: () => u(),
    data: { element: e, parents: r },
    start: () => {
      g();
    }
  }, [w, e, r, g, u]);
  ce(() => {
    C(
      () => ir(x),
      (h) => h.remove()
    );
  }, [C, x]);
  const m = Y({ id: Ye() });
  return Se({
    element: f,
    id: m.current.id,
    drop: (h, j) => l(h, j, e, r, f, m.current.id),
    hover: (h, j) => c(h, j, e, r, f, m.current.id),
    leave: (h, j) => s(h, j, e, r, f, m.current.id)
  }, [e, r, l, c, s]), /* @__PURE__ */ b.jsx(b.Fragment, { children: /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: f,
      "data-dragging": E,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (h) => o(h, e),
      onMouseOver: (h) => t(h, e, f.current),
      children: /* @__PURE__ */ b.jsx(Ne, { label: x, paddingLeft: n })
    }
  ) });
}, jn = ({ element: e, parents: r, paddingLeft: n }) => {
  const [t = [], i] = yt(e, r);
  return i ? t.map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      paddingLeft: n,
      parents: [...r, i]
    },
    o.id.value
  )) : null;
}, Pn = ({ element: e, parents: r, paddingLeft: n, ...t }) => {
  const i = ar(e, r);
  return _n(e, r) ? /* @__PURE__ */ b.jsx(
    Tn,
    {
      element: e,
      parents: r,
      paddingLeft: n,
      onDrop: t.onDrop,
      onDragOver: t.onDragOver,
      onDragLeave: t.onDragLeave,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar
    }
  ) : i ? /* @__PURE__ */ b.jsx(
    jn,
    {
      element: e,
      parents: r,
      paddingLeft: n
    }
  ) : /* @__PURE__ */ b.jsx(
    Dn,
    {
      element: e,
      parents: r,
      paddingLeft: n,
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
}, In = ({ element: e, parents: r, paddingLeft: n, onMouseOver: t, onMouseLeave: i, onSelect: o, onDragLeave: s, onDragOver: c, onDrop: l, onHoverBar: v, onSelectBar: d }) => {
  const f = Y(null), g = H(e.name), u = H(e.id), { onDragStart: p, onDragEnd: y } = je(), { selectedId: x } = $e(), { hoveredId: w } = Pe();
  Ee({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, f.current)
  }, [w, e]), Ee({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [x, e]);
  const { isDragging: E, preview: C } = _e({
    id: u,
    element: f,
    end: () => y(),
    data: { element: e, parents: r },
    start: () => {
      p();
    }
  }, [u, e, r, p, y]);
  ce(() => {
    C(
      () => ir(g),
      (h) => h.remove()
    );
  }, [C, g]);
  const m = Y({ id: Ye() });
  return Se({
    element: f,
    id: m.current.id,
    drop: (h, j) => l(h, j, e, r, f, m.current.id),
    hover: (h, j) => c(h, j, e, r, f, m.current.id),
    leave: (h, j) => s(h, j, e, r, f, m.current.id)
  }, [e, r, l, c, s]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: f,
      "data-dragging": E,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (h) => o(h, e),
      onMouseOver: (h) => t(h, e, f.current),
      children: /* @__PURE__ */ b.jsx(Ne, { label: g, paddingLeft: n })
    }
  );
}, Mn = ({ element: e, parents: r, paddingLeft: n, ...t }) => ar(e, r) ? null : /* @__PURE__ */ b.jsx(
  In,
  {
    element: e,
    parents: r,
    paddingLeft: n,
    onDrop: t.onDrop,
    onDragOver: t.onDragOver,
    onDragLeave: t.onDragLeave,
    onSelect: t.onSelect,
    onMouseOver: t.onMouseOver,
    onMouseLeave: t.onMouseLeave,
    onHoverBar: t.onHoverBar,
    onSelectBar: t.onSelectBar
  }
), He = ({ element: e, parents: r, paddingLeft: n }) => {
  const t = H(e.type), { onDrop: i, value: o } = je(), { select: s } = $e(), { hover: c } = Pe(), l = U((p, y) => {
    p.stopPropagation(), p.preventDefault(), s(y.id.value);
  }, [s]), v = U((p) => {
    p.stopPropagation(), p.preventDefault(), s(void 0), c(void 0);
  }, [s, c]), d = U((p, y) => {
    p.stopPropagation(), c(y.id.value);
  }, [c]), f = U((p) => {
    p.stopPropagation(), c(void 0);
  }, [c]), g = U((p, y, x, w, E, C) => {
    if (!Kr(y, x, w, E, C))
      return c(void 0);
    c(x.id.value);
  }, [c]), u = U((p, y, x, w, E, C) => {
    var P, B, D, I, Z, oe;
    if (!Kr(y, x, w, E, C))
      return;
    const h = gn(y, x, E);
    if (!h)
      return;
    const j = h.isOverStart || h.isOverEnd;
    if (!(!j && x.type.value === "component"))
      if (Object.keys(p).includes("id")) {
        const M = p;
        if (j) {
          const A = w.slice(-1).at(0), Q = ((P = (A ? A.children : o).value) == null ? void 0 : P.findIndex((ae) => ae.id.value === x.id.value)) ?? -1;
          i({
            element: M.id,
            from: { position: -1, element: null },
            to: {
              element: A || "root",
              position: h.isOverStart ? Q : Q + 1
            }
          });
        } else {
          const A = ((B = x.children.value) == null ? void 0 : B.length) || -1;
          i({
            element: M.id,
            from: { position: -1, element: null },
            to: {
              element: x,
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
          const k = w.slice(-1).at(0), ne = ((Z = (k ? k.children : o).value) == null ? void 0 : Z.findIndex((se) => se.id.value === x.id.value)) ?? -1;
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
          const k = ((oe = x.children.value) == null ? void 0 : oe.length) || -1;
          i({
            element: M.element,
            from: {
              position: ae,
              element: Q
            },
            to: {
              element: x,
              position: h.isOverStart ? k : k + 1
            }
          });
        }
        s(M.element.id.value);
      }
  }, [s, i]);
  return t === "component" ? /* @__PURE__ */ b.jsx(
    wn,
    {
      parents: r,
      paddingLeft: n,
      element: e,
      onDrop: u,
      onDragOver: g,
      onDragLeave: () => {
      },
      onDoubleClick: v,
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: f,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : t === "slot" ? /* @__PURE__ */ b.jsx(
    Pn,
    {
      parents: r,
      paddingLeft: n,
      element: e,
      onDrop: u,
      onDragOver: g,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: f,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : t === "text" ? /* @__PURE__ */ b.jsx(
    Mn,
    {
      parents: r,
      paddingLeft: n,
      element: e,
      onDrop: u,
      onDragOver: g,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: f,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : /* @__PURE__ */ b.jsx(
    Rn,
    {
      parents: r,
      paddingLeft: n,
      element: e,
      onDrop: u,
      onDragOver: g,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: f,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  );
}, Bn = () => {
  const e = Y(null), r = Y({ id: Ye() }), { value: n, onDrop: t, onKeyDown: i } = je(), { select: o } = $e(), { hover: s } = Pe(), c = H(n), l = U((f, g) => {
    var u;
    if (f)
      if (Object.keys(f).includes("id"))
        t({
          element: f.id,
          from: {
            position: -1,
            element: null
          },
          to: {
            element: "root",
            position: n.value.length
          }
        });
      else {
        const p = f, y = hn(p.parents || []), x = y || "root", w = ((u = y == null ? void 0 : y.children.value) == null ? void 0 : u.findIndex((E) => E.id.value === p.element.id.value)) ?? -1;
        t({
          element: p.element,
          from: {
            element: x,
            position: w
          },
          to: {
            element: "root",
            position: n.value.length
          }
        }), o(p.element.id.value);
      }
  }, [n, o]), v = U((f) => {
    f.stopPropagation(), o(void 0);
  }, [o]), [{ isDraggingOver: d }] = Se({
    drop: l,
    element: e,
    id: r.current.id,
    leave: () => s(void 0)
  }, [l]);
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      tabIndex: 0,
      onKeyDown: i,
      onClick: v,
      ref: e,
      className: "flex-1 h-full w-full outline-none",
      children: [
        c.map((f) => /* @__PURE__ */ b.jsx(
          He,
          {
            parents: [],
            paddingLeft: 4,
            element: f
          },
          f.id.value
        )),
        c.length === 0 && /* @__PURE__ */ b.jsx("p", { children: "Drag and drop here to start" }),
        d && /* @__PURE__ */ b.jsx(bn, {})
      ]
    }
  );
};
function oi({ onSelect: e, onHover: r, selectedId: n, hoveredId: t, ...i }) {
  return /* @__PURE__ */ b.jsx(lt, { children: /* @__PURE__ */ b.jsx(fn, { ...i, children: /* @__PURE__ */ b.jsx(vn, { id: n, onSelect: e, children: /* @__PURE__ */ b.jsx(pn, { id: t, onHover: r, children: /* @__PURE__ */ b.jsx(Bn, {}) }) }) }) });
}
const gt = Ve({});
function kn({ children: e, ...r }) {
  return /* @__PURE__ */ b.jsx(gt.Provider, { value: r, children: e });
}
const be = () => Ae(gt), bt = Ve({}), Ln = ({ children: e }) => {
  const r = Y(fe(!1)), n = Y(fe(!1)), t = Y(fe(0)), i = Y(fe(0)), o = Y(fe(0)), s = Y(fe(0)), c = de(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: n.current,
    observableHeight: t.current,
    observableWidth: i.current,
    observableLeft: o.current,
    observableTop: s.current
  }), []), l = U((d) => {
    ve(s.current, (f) => f !== d.top ? d.top : f), ve(o.current, (f) => f !== d.left ? d.left : f), ve(i.current, (f) => f !== d.width ? d.width : f), ve(t.current, (f) => f !== d.height ? d.height : f), ve(n.current, (f) => f !== d.isVisible ? d.isVisible : f), ve(r.current, (f) => f !== !!d.isHorizontal ? !!d.isHorizontal : f);
  }, []), v = U(() => {
    l({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [l]);
  return /* @__PURE__ */ b.jsx(bt.Provider, { value: { showInsertBar: l, hideInsertBar: v, observables: c }, children: e });
}, Ie = () => Ae(bt), Vn = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: n, observableIsVisible: t, observableLeft: i, observableTop: o, observableWidth: s } = Ie().observables, [c] = ke(o), [l] = ke(i), [v] = ke(s), [d] = ke(r), [f] = ke(t), [g] = ke(n), u = de(() => ({
    width: g ? v : 4,
    height: g ? 4 : d,
    top: c - (g ? 2 : 0),
    left: l - (g ? 0 : 2)
  }), [d, g, l, c, v]);
  return f ? /* @__PURE__ */ b.jsx(
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
}, xt = Ve({}), An = ({ children: e, id: r, onSelect: n }) => {
  const t = Y({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    parents: fe(void 0),
    element: fe(void 0),
    onSelect: n,
    id: r
  });
  return ce(() => {
    t.current.id = r;
  }, [r]), ce(() => {
    t.current.onSelect = n;
  }, [n]), /* @__PURE__ */ b.jsx(xt.Provider, { value: t.current, children: e });
};
var mt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Jr = Oe.createContext && /* @__PURE__ */ Oe.createContext(mt), $n = ["attr", "size", "title"];
function Hn(e, r) {
  if (e == null)
    return {};
  var n = Fn(e, r), t, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      t = o[i], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
  }
  return n;
}
function Fn(e, r) {
  if (e == null)
    return {};
  var n = {};
  for (var t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      if (r.indexOf(t) >= 0)
        continue;
      n[t] = e[t];
    }
  return n;
}
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function Xr(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function nr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xr(Object(n), !0).forEach(function(t) {
      zn(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xr(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function zn(e, r, n) {
  return r = Wn(r), r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function Wn(e) {
  var r = Un(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Un(e, r) {
  if (typeof e != "object" || !e)
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
function Ot(e) {
  return e && e.map((r, n) => /* @__PURE__ */ Oe.createElement(r.tag, nr({
    key: n
  }, r.attr), Ot(r.child)));
}
function cr(e) {
  return (r) => /* @__PURE__ */ Oe.createElement(Yn, tr({
    attr: nr({}, e.attr)
  }, r), Ot(e.child));
}
function Yn(e) {
  var r = (n) => {
    var {
      attr: t,
      size: i,
      title: o
    } = e, s = Hn(e, $n), c = i || n.size || "1em", l;
    return n.className && (l = n.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Oe.createElement("svg", tr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, t, s, {
      className: l,
      style: nr(nr({
        color: e.color || n.color
      }, n.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Oe.createElement("title", null, o), e.children);
  };
  return Jr !== void 0 ? /* @__PURE__ */ Oe.createElement(Jr.Consumer, null, (n) => r(n)) : r(mt);
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
  let r, n = 0;
  if (!(!e || e.length === 0)) {
    do
      n--, r = e == null ? void 0 : e.slice(n).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, Ze = (e, r) => {
  const n = document.createElement("label");
  return n.style.padding = "4px", n.style.paddingTop = "2px", n.style.paddingRight = "8px", n.style.paddingBottom = "2px", n.style.backgroundColor = "#3e8ce4", n.style.color = "#ffffff", n.style.alignItems = "center", n.style.borderRadius = "2px", n.style.fontWeight = "600", n.style.position = "fixed", n.style.fontSize = "11px", n.style.display = "flex", n.style.height = "20px", n.style.zIndex = "-100", n.style.width = "auto", n.appendChild(new Text(e)), document.body.appendChild(n), n;
};
function Xn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function St(e) {
  return yn.camel(Xn(e));
}
const Zr = (e, r, n, t, i) => !(!t.current || e.droppableId !== i || e.draggingId === r.id.value || n.some((c) => e.draggingId === c.id.value)), Zn = (e, r, n) => {
  if (!n.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const t = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = n.current.getBoundingClientRect(), o = t ? 5 : i.height / 2, s = e.x - i.x, c = e.y - i.y, l = c >= 0 && c <= o, v = c >= i.height - o && c <= i.height, d = c >= o && c <= i.height - o, f = s >= 0 && s <= o, g = s >= i.width - o && s <= i.width, u = s >= o && s <= i.width - o;
  let p = !1, y = !1, x = !1, w = !1;
  if (t) {
    const E = v || g || l || f;
    p = u && d && !E, y = u && d && !E, x = v || g, w = l || f;
  } else
    x = (v || g) && !l, w = (l || f) && !v;
  return { isOverCurrentStart: p, isOverCurrentEnd: y, isOverEnd: x, isOverStart: w };
}, Qn = (e, r, n) => {
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = i ? 5 : t.height / 2, s = e.x - t.x, c = e.y - t.y, l = c >= t.height - o && c <= t.height, v = c >= o && c <= t.height - o, d = s >= 0 && s <= o, f = s >= t.width - o && s <= t.width, g = s >= o && s <= t.width - o;
  let u = !0, p = t.top, y = t.left, x = t.width, w = t.height;
  return l && (d || f || g) ? p = t.top + t.height : v && d ? u = !1 : v && f ? (y = t.left + t.width, u = !1) : g && v && (p = t.top + (i ? t.height / 2 : t.height)), {
    top: p,
    isHorizontal: u,
    left: y,
    width: x,
    height: w
  };
}, qe = () => dt(), Te = () => {
  const e = Ae(xt), r = U((o) => {
    e.onSelect(o);
  }, [e.id]), n = U((o, s, c) => {
    ve(e.getPosition, () => c), ve(e.parents, s), ve(e.element, o);
  }, [e.getPosition]), t = U((o, s) => {
    ve(e.documentHorizontalScroll, s), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = U((o, s) => {
    ve(e.playgroundSize, { height: o, width: s });
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
}, eo = or(({ children: e, zIndex: r = 0, top: n = -1e3, left: t = -1e3, width: i = 0, height: o = 0, color: s = "#4a87ee" }) => {
  const c = Y(null), l = de(() => {
    if (!c.current || t + c.current.getBoundingClientRect().width <= c.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const v = t + c.current.getBoundingClientRect().width;
    return c.current.ownerDocument.documentElement.clientWidth - v;
  }, [t]);
  return /* @__PURE__ */ b.jsx(
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
        height: o,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: s,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ b.jsx(
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
            left: l,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: s,
            top: n - 20 < 0 ? o + 20 >= 500 ? 0 : o : -20
          },
          children: e
        }
      )
    }
  );
}), ro = or(() => {
  const e = Y(null), { onDragStart: r, onDragEnd: n, onDuplicate: t, onRemove: i } = be(), { hideInsertBar: o } = Ie(), {
    select: s,
    selectedId: c,
    selectedElement: l,
    selectBarGetPosition: v,
    selectedElementParents: d,
    selectBarDocumentVerticalScroll: f,
    selectBarDocumentHorizontalScroll: g
  } = Te(), u = H(d), p = H(l), y = H(c), x = pe(({ get: I }) => p ? I(p.name) : "", [p]), { width: w, height: E, top: C, left: m } = pe(({ get: I }) => {
    const Z = I(g), oe = I(f), M = I(v);
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
  }, [g, f, v]), h = U((I) => {
    I.stopPropagation();
    const Z = u == null ? void 0 : u.slice(-1).at(0);
    if (Z)
      if (Z.type.value === "slot-content") {
        const oe = u == null ? void 0 : u.find((M) => {
          var A;
          return M.type.value !== "component" ? !1 : (A = M.slots.value) == null ? void 0 : A.some((Q) => Q.id.value === Z.id.value);
        });
        s(oe == null ? void 0 : oe.id.value);
      } else
        s(Z.id.value);
  }, [s, u]), j = U(() => {
    p && i(p);
  }, [i, p]), P = U(() => {
    p && t(p);
  }, [t, p]), { preview: B, isDragging: D } = _e({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      o(), n();
    },
    canDrag: !!p && Array.isArray(u),
    data: {
      element: p,
      parents: u
    }
  }, [y, p, u, o, r, n]);
  return ce(() => {
    B(
      () => Ze(x),
      (I) => I.remove()
    );
  }, [B, x]), !y || w === 0 && E === 0 && m === 0 && C === 0 ? null : /* @__PURE__ */ b.jsx(
    eo,
    {
      zIndex: 1,
      top: C - 1,
      width: w,
      height: E,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ b.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        x,
        !D && /* @__PURE__ */ b.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          u && u.length > 0 && /* @__PURE__ */ b.jsx(Nn, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx(Kn, { title: "Remove element", onClick: j, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx(qn, { title: "Duplicate element and children", onClick: P, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ b.jsx(Gn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), wt = Ve({}), to = ({ children: e, id: r, onHover: n }) => {
  const t = Y({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    element: fe(void 0),
    onHover: n,
    id: r
  });
  return ce(() => {
    t.current.id = r;
  }, [r]), ce(() => {
    t.current.onHover = n;
  }, [n]), /* @__PURE__ */ b.jsx(wt.Provider, { value: t.current, children: e });
}, De = () => {
  const e = Ae(wt), r = U((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), n = U((o, s) => {
    ve(e.getPosition, () => s), ve(e.element, o);
  }, [e.getPosition]), t = U((o, s) => {
    ve(e.documentHorizontalScroll, s), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = U((o, s) => {
    ve(e.playgroundSize, { height: o, width: s });
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
}, no = or(({ children: e, zIndex: r = 0, top: n = -1e3, left: t = -1e3, width: i = 0, height: o = 0, color: s = "#4a87ee" }) => {
  const c = Y(null), l = de(() => {
    if (!c.current || t + c.current.getBoundingClientRect().width <= c.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const v = t + c.current.getBoundingClientRect().width;
    return c.current.ownerDocument.documentElement.clientWidth - v;
  }, [t]);
  return /* @__PURE__ */ b.jsx(
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
        height: o,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: s,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ b.jsx(
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
            left: l,
            userSelect: "none",
            position: "absolute",
            alignItems: "center",
            pointerEvents: "none",
            backgroundColor: s,
            top: n - 20 < 0 ? o + 20 >= 500 ? 0 : o : -20
          },
          children: e
        }
      )
    }
  );
}), oo = or(() => {
  const { selectedId: e } = Te(), {
    hoveredId: r,
    hoveredElement: n,
    hoverBarGetPosition: t,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: o
  } = De(), s = H(o), c = H(i), l = H(t), v = H(n), d = H(e), f = H(r), g = pe(({ get: w }) => v ? w(v.name) : "", [v]), { width: u, height: p, top: y, left: x } = de(() => l ? {
    width: l().width,
    height: l().height,
    top: l().top - c,
    left: l().left - s
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [s, c, l]);
  return !f || f === d || u === 0 && p === 0 && x === 0 && y === 0 ? null : /* @__PURE__ */ b.jsx(
    no,
    {
      zIndex: 1,
      top: y - 1,
      width: u,
      left: x - 1,
      height: p,
      color: "#ed8b5f",
      children: /* @__PURE__ */ b.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: g })
    }
  );
});
var sr = {}, Qe = {}, Cr = { exports: {} }, rr = { exports: {} }, re = {};
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
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var j = h.$$typeof;
      switch (j) {
        case r:
          switch (h = h.type, h) {
            case l:
            case v:
            case t:
            case o:
            case i:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case p:
                case u:
                case s:
                  return h;
                default:
                  return j;
              }
          }
        case n:
          return j;
      }
    }
  }
  function m(h) {
    return C(h) === v;
  }
  return re.AsyncMode = l, re.ConcurrentMode = v, re.ContextConsumer = c, re.ContextProvider = s, re.Element = r, re.ForwardRef = d, re.Fragment = t, re.Lazy = p, re.Memo = u, re.Portal = n, re.Profiler = o, re.StrictMode = i, re.Suspense = f, re.isAsyncMode = function(h) {
    return m(h) || C(h) === l;
  }, re.isConcurrentMode = m, re.isContextConsumer = function(h) {
    return C(h) === c;
  }, re.isContextProvider = function(h) {
    return C(h) === s;
  }, re.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, re.isForwardRef = function(h) {
    return C(h) === d;
  }, re.isFragment = function(h) {
    return C(h) === t;
  }, re.isLazy = function(h) {
    return C(h) === p;
  }, re.isMemo = function(h) {
    return C(h) === u;
  }, re.isPortal = function(h) {
    return C(h) === n;
  }, re.isProfiler = function(h) {
    return C(h) === o;
  }, re.isStrictMode = function(h) {
    return C(h) === i;
  }, re.isSuspense = function(h) {
    return C(h) === f;
  }, re.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === v || h === o || h === i || h === f || h === g || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === u || h.$$typeof === s || h.$$typeof === c || h.$$typeof === d || h.$$typeof === x || h.$$typeof === w || h.$$typeof === E || h.$$typeof === y);
  }, re.typeOf = C, re;
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
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, t = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, v = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function C(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === t || R === v || R === o || R === i || R === f || R === g || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === u || R.$$typeof === s || R.$$typeof === c || R.$$typeof === d || R.$$typeof === x || R.$$typeof === w || R.$$typeof === E || R.$$typeof === y);
    }
    function m(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case r:
            var ze = R.type;
            switch (ze) {
              case l:
              case v:
              case t:
              case o:
              case i:
              case f:
                return ze;
              default:
                var Me = ze && ze.$$typeof;
                switch (Me) {
                  case c:
                  case d:
                  case p:
                  case u:
                  case s:
                    return Me;
                  default:
                    return xe;
                }
            }
          case n:
            return xe;
        }
      }
    }
    var h = l, j = v, P = c, B = s, D = r, I = d, Z = t, oe = p, M = u, A = n, Q = o, ae = i, k = f, ne = !1;
    function se(R) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(R) || m(R) === l;
    }
    function O(R) {
      return m(R) === v;
    }
    function T(R) {
      return m(R) === c;
    }
    function L(R) {
      return m(R) === s;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function $(R) {
      return m(R) === d;
    }
    function K(R) {
      return m(R) === t;
    }
    function z(R) {
      return m(R) === p;
    }
    function W(R) {
      return m(R) === u;
    }
    function N(R) {
      return m(R) === n;
    }
    function X(R) {
      return m(R) === o;
    }
    function q(R) {
      return m(R) === i;
    }
    function he(R) {
      return m(R) === f;
    }
    te.AsyncMode = h, te.ConcurrentMode = j, te.ContextConsumer = P, te.ContextProvider = B, te.Element = D, te.ForwardRef = I, te.Fragment = Z, te.Lazy = oe, te.Memo = M, te.Portal = A, te.Profiler = Q, te.StrictMode = ae, te.Suspense = k, te.isAsyncMode = se, te.isConcurrentMode = O, te.isContextConsumer = T, te.isContextProvider = L, te.isElement = F, te.isForwardRef = $, te.isFragment = K, te.isLazy = z, te.isMemo = W, te.isPortal = N, te.isProfiler = X, te.isStrictMode = q, te.isSuspense = he, te.isValidElementType = C, te.typeOf = m;
  }()), te;
}
var rt;
function Et() {
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
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(o) {
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        v[d] = d;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gr = i() ? Object.assign : function(o, s) {
    for (var c, l = t(o), v, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var f in c)
        r.call(c, f) && (l[f] = c[f]);
      if (e) {
        v = e(c);
        for (var g = 0; g < v.length; g++)
          n.call(c, v[g]) && (l[v[g]] = c[v[g]]);
      }
    }
    return l;
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
function Ct() {
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
    var r = jr(), n = {}, t = Ct();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(o, s, c, l, v) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (t(o, d)) {
          var f;
          try {
            if (typeof o[d] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            f = o[d](s, d, l, c, null, r);
          } catch (p) {
            f = p;
          }
          if (f && !(f instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var u = v ? v() : "";
            e(
              "Failed " + c + " type: " + f.message + (u ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, mr = i, mr;
}
var Or, at;
function uo() {
  if (at)
    return Or;
  at = 1;
  var e = Et(), r = co(), n = jr(), t = Ct(), i = so(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Or = function(c, l) {
    var v = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function f(O) {
      var T = O && (v && O[v] || O[d]);
      if (typeof T == "function")
        return T;
    }
    var g = "<<anonymous>>", u = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: E(),
      arrayOf: C,
      element: m(),
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
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, L = 0;
      function F(K, z, W, N, X, q, he) {
        if (N = N || g, q = q || W, he !== n) {
          if (l) {
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
      var $ = F.bind(null, !1);
      return $.isRequired = F.bind(null, !0), $;
    }
    function w(O) {
      function T(L, F, $, K, z, W) {
        var N = L[F], X = ae(N);
        if (X !== O) {
          var q = k(N);
          return new y(
            "Invalid " + K + " `" + z + "` of type " + ("`" + q + "` supplied to `" + $ + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(T);
    }
    function E() {
      return x(s);
    }
    function C(O) {
      function T(L, F, $, K, z) {
        if (typeof O != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var W = L[F];
        if (!Array.isArray(W)) {
          var N = ae(W);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var X = 0; X < W.length; X++) {
          var q = O(W, X, $, K, z + "[" + X + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return x(T);
    }
    function m() {
      function O(T, L, F, $, K) {
        var z = T[L];
        if (!c(z)) {
          var W = ae(z);
          return new y("Invalid " + $ + " `" + K + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function h() {
      function O(T, L, F, $, K) {
        var z = T[L];
        if (!e.isValidElementType(z)) {
          var W = ae(z);
          return new y("Invalid " + $ + " `" + K + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function j(O) {
      function T(L, F, $, K, z) {
        if (!(L[F] instanceof O)) {
          var W = O.name || g, N = se(L[F]);
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return x(T);
    }
    function P(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function T(L, F, $, K, z) {
        for (var W = L[F], N = 0; N < O.length; N++)
          if (p(W, O[N]))
            return null;
        var X = JSON.stringify(O, function(he, R) {
          var xe = k(R);
          return xe === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + K + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + $ + "`, expected one of " + X + "."));
      }
      return x(T);
    }
    function B(O) {
      function T(L, F, $, K, z) {
        if (typeof O != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var W = L[F], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type " + ("`" + N + "` supplied to `" + $ + "`, expected an object."));
        for (var X in W)
          if (t(W, X)) {
            var q = O(W, X, $, K, z + "." + X, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return x(T);
    }
    function D(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var T = 0; T < O.length; T++) {
        var L = O[T];
        if (typeof L != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(L) + " at index " + T + "."
          ), s;
      }
      function F($, K, z, W, N) {
        for (var X = [], q = 0; q < O.length; q++) {
          var he = O[q], R = he($, K, z, W, N, n);
          if (R == null)
            return null;
          R.data && t(R.data, "expectedType") && X.push(R.data.expectedType);
        }
        var xe = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new y("Invalid " + W + " `" + N + "` supplied to " + ("`" + z + "`" + xe + "."));
      }
      return x(F);
    }
    function I() {
      function O(T, L, F, $, K) {
        return A(T[L]) ? null : new y("Invalid " + $ + " `" + K + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function Z(O, T, L, F, $) {
      return new y(
        (O || "React class") + ": " + T + " type `" + L + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function oe(O) {
      function T(L, F, $, K, z) {
        var W = L[F], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var X in O) {
          var q = O[X];
          if (typeof q != "function")
            return Z($, K, z, X, k(q));
          var he = q(W, X, $, K, z + "." + X, n);
          if (he)
            return he;
        }
        return null;
      }
      return x(T);
    }
    function M(O) {
      function T(L, F, $, K, z) {
        var W = L[F], N = ae(W);
        if (N !== "object")
          return new y("Invalid " + K + " `" + z + "` of type `" + N + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var X = r({}, L[F], O);
        for (var q in X) {
          var he = O[q];
          if (t(O, q) && typeof he != "function")
            return Z($, K, z, q, k(he));
          if (!he)
            return new y(
              "Invalid " + K + " `" + z + "` key `" + q + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(L[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var R = he(W, q, $, K, z + "." + q, n);
          if (R)
            return R;
        }
        return null;
      }
      return x(T);
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
          if (O === null || c(O))
            return !0;
          var T = f(O);
          if (T) {
            var L = T.call(O), F;
            if (T !== O.entries) {
              for (; !(F = L.next()).done; )
                if (!A(F.value))
                  return !1;
            } else
              for (; !(F = L.next()).done; ) {
                var $ = F.value;
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
      return !O.constructor || !O.constructor.name ? g : O.constructor.name;
    }
    return u.checkPropTypes = i, u.resetWarningCache = i.resetWarningCache, u.PropTypes = u, u;
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
  function n() {
  }
  return n.resetWarningCache = r, Sr = function() {
    function t(s, c, l, v, d, f) {
      if (f !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    t.isRequired = t;
    function i() {
      return t;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, Sr;
}
if (process.env.NODE_ENV !== "production") {
  var fo = Et(), vo = !0;
  Cr.exports = uo()(fo.isElement, vo);
} else
  Cr.exports = lo()();
var Rt = Cr.exports, we = {};
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
  function e(r, n) {
    for (var t = 0; t < n.length; t++) {
      var i = n[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, n, t) {
    return n && e(r.prototype, n), t && e(r, t), r;
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
    var n = arguments[r];
    for (var t in n)
      Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  }
  return e;
}, wo = /* @__PURE__ */ function() {
  function e(r, n) {
    for (var t = 0; t < n.length; t++) {
      var i = n[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, n, t) {
    return n && e(r.prototype, n), t && e(r, t), r;
  };
}(), It = Oe, Le = ur(It), Eo = cn, st = ur(Eo), Co = Rt, Re = ur(Co), Ro = we, _o = Ir, To = ur(_o);
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
  function r(n, t) {
    Do(this, r);
    var i = jo(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, n, t));
    return i.setRef = function(o) {
      i.nodeRef.current = o;
      var s = i.props.forwardedRef;
      typeof s == "function" ? s(o) : s && (s.current = o);
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
      var i = this.props.contentDidMount, o = this.props.contentDidUpdate, s = t.defaultView || t.parentView, c = Le.default.createElement(
        To.default,
        {
          contentDidMount: i,
          contentDidUpdate: o
        },
        Le.default.createElement(
          Ro.FrameContextProvider,
          { value: { document: t, window: s } },
          Le.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), l = this.getMountTarget();
      return l ? [st.default.createPortal(this.props.head, this.getDoc().head), st.default.createPortal(c, l)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var t = _r({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete t.head, delete t.initialContent, delete t.mountTarget, delete t.contentDidMount, delete t.contentDidUpdate, delete t.forwardedRef, Le.default.createElement(
        "iframe",
        _r({}, t, { ref: this.setRef, onLoad: this.handleLoad }),
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
      return t(r).default;
    }
  });
  var n = we;
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
})(sr);
const Io = /* @__PURE__ */ un(sr), Mo = ({ children: e, onScroll: r, onRef: n, onKeyDown: t, onClick: i }) => {
  const { document: o } = sr.useFrame();
  return ce(() => {
    o && n(o);
  }, [n, o]), ce(() => {
    o && (o.onclick = i, o.onkeydown = t, o.onscroll = (s) => r(s.target.documentElement.scrollTop, s.target.documentElement.scrollLeft));
  }, [o, r, t, i]), e;
}, Bo = ({ children: e, styles: r, draggingHover: n, resetBody: t }) => {
  const i = H(
    de(() => Dr(({ get: s }) => s(r).map((c) => ({
      id: s(c.id),
      content: s(c.content)
    }))), [r])
  ), o = de(() => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    i.map((s) => ut("style", { key: s.id }, s.content)),
    /* @__PURE__ */ b.jsx("style", { children: [
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
  return /* @__PURE__ */ b.jsx(
    Io,
    {
      tabIndex: -1,
      head: o,
      mountTarget: "body",
      onContextMenu: (s) => s.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, ko = (e, r) => pe(({ get: n }) => r.map((t) => n(t.id)).includes(n(e.id)), [e, r]), lr = (e, r) => pe(({ get: t }) => {
  const i = [...r].reverse();
  let o;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    if (t(c.type) === "slot-content" && (o = !1), t(c.type) === "component")
      if (o === !1)
        o = void 0;
      else
        return !0;
  }
  return !!o;
}, [r, e]), Lo = ({ element: e }) => {
  const r = H(e.name);
  return /* @__PURE__ */ b.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ b.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Ce = ({ value: e, matchWidthValue: r, effect: n }, t) => {
  const i = pe(({ get: o }) => {
    if (!e)
      return !1;
    const s = o(e);
    if (!r)
      return !1;
    const c = o(r);
    return s === c;
  }, [...t]);
  ce(() => {
    i && n();
  }, [i]);
}, Vo = ({ element: e, onHoverBar: r, onSelectBar: n, onMouseLeave: t, onMouseOver: i, onSelect: o }) => {
  const s = Y(null), { selectedId: c } = Te(), { hoveredId: l } = De(), v = H(e.name);
  return Ce({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, s.current)
  }, [l, e]), Ce({
    value: c,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => n(e, s.current)
  }, [c, e]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: t,
      onClick: (d) => o(d, e),
      onMouseOver: (d) => i(d, e, s.current),
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
        /* @__PURE__ */ b.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: v }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, Ao = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: o, onDragOver: s, onDrop: c, onHoverBar: l, onSelectBar: v, onDoubleClick: d }) => {
  const f = Y(null), { onDragStart: g, onDragEnd: u, components: p } = be(), { hideInsertBar: y } = Ie(), { selectedId: x } = Te(), { hoveredId: w } = De(), E = H(e.name), C = H(e.id), m = pe(({ get: D }) => {
    const I = D(p).find((Z) => D(Z.id) === D(e.referenceComponentId));
    return I ? D(I.content) : [];
  }, [p, e]);
  Ce({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, f.current)
  }, [w, e]), Ce({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, f.current)
  }, [x, e]);
  const h = de(() => !m || m.length === 0 ? null : m.map((D) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: D,
      parents: [...r, e]
    },
    D.id.value
  )), [m, r, e]), { isDragging: j, preview: P } = _e({
    id: C,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      g();
    },
    end: () => {
      y(), u();
    }
  }, [C, e, r, y, g, u]);
  ce(() => {
    P(
      () => Ze(E),
      (D) => D.remove()
    );
  }, [P, E]);
  const B = Y({ id: qe() });
  return Se({
    element: f,
    id: B.current.id,
    drop: (D, I) => c(D, I, e, r, f, B.current.id),
    hover: (D, I) => s(D, I, e, r, f, B.current.id),
    leave: (D, I) => o(D, I, e, r, f, B.current.id)
  }, [e, r, c, s, o]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: f,
      onMouseLeave: t,
      onClick: (D) => i(D, e),
      onDoubleClick: (D) => d(D, e),
      onMouseOver: (D) => n(D, e, f.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: j ? 0.5 : void 0 },
      children: h
    }
  );
}, $o = ({ element: e, parents: r }) => {
  const { components: n } = be(), t = pe(({ get: i }) => {
    const o = i(n).find((s) => i(s.id) === i(e.referenceComponentId));
    return o ? i(o.content) : [];
  }, [n, e]);
  return /* @__PURE__ */ b.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: t.map((i) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, Ho = ({ element: e, parents: r, ...n }) => {
  const t = ko(e, r), i = lr(e, r);
  return t ? i ? /* @__PURE__ */ b.jsx(Lo, { element: e }) : /* @__PURE__ */ b.jsx(
    Vo,
    {
      element: e,
      onSelect: n.onSelect,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar,
      onSelectBar: n.onSelectBar
    }
  ) : i ? /* @__PURE__ */ b.jsx(
    $o,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    Ao,
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
}, Mt = (e) => {
  const { onExpressionToValue: r } = be(), n = de(() => Dr(({ get: t }) => {
    const i = t(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((s) => {
      const c = t(s.name), l = t(s.value);
      c && (o[St(c)] = r(l, c, "style", e));
    }), o;
  }), [e, r, e]);
  return H(n);
}, Bt = (e) => {
  const { onExpressionToValue: r } = be(), n = de(() => Dr({
    get({ get: t }) {
      const i = t(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, s = {};
      return i.forEach((c) => {
        const l = t(c.name);
        if (l === void 0 || l === "hidden" || l === "style")
          return;
        const v = r(t(c.value), l, "attribute", e), d = St(l);
        switch (d) {
          case "options":
            s.options = v;
            break;
          case "className":
            o.className = v;
            break;
          case "class":
            o.className = v;
            break;
          default:
            if (l.startsWith("data-")) {
              o[l] = v;
              return;
            } else
              o[d] = v;
            break;
        }
      }), [o, s];
    }
  }), [e, r]);
  return H(n);
}, kt = an(({ tag: e, ...r }, n) => ut(e, { ref: n, ...r })), Fo = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: o, onDragOver: s, onDrop: c, onHoverBar: l, onSelectBar: v }) => {
  const d = Y(null), [f, g] = Tr(!1), [
    u
    /* elementSpecialProps */
  ] = Bt(e), p = H(e.children), y = Mt(e), x = H(e.name), w = H(e.tag), E = H(e.id), { onDragStart: C, onDragEnd: m } = be(), { hideInsertBar: h } = Ie(), { selectedId: j } = Te(), { hoveredId: P } = De();
  Ce({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [P, e]), Ce({
    value: j,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, d.current)
  }, [j, e]), ce(() => {
    g((A) => P.value === E === A ? A : !A);
    const M = P.subscribe((A) => {
      g((Q) => A === E === Q ? Q : !Q);
    });
    return () => M.unsubscribe();
  }, [E, P]);
  const B = de(() => !p || p.length === 0 ? null : p.map((M) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: M,
      parents: [...r, e]
    },
    M.id.value
  )), [p, r, e]), D = de(() => p !== void 0, [p]), { isDragging: I, preview: Z } = _e({
    id: E,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      C();
    },
    end: () => {
      h(), m();
    }
  }, [E, e, r, h, C, m]);
  ce(() => {
    Z(
      () => Ze(x),
      (M) => M.remove()
    );
  }, [Z, x]);
  const oe = Y({ id: qe() });
  return Se({
    element: d,
    id: oe.current.id,
    drop: (M, A) => c(M, A, e, r, d, oe.current.id),
    hover: (M, A) => s(M, A, e, r, d, oe.current.id),
    leave: (M, A) => o(M, A, e, r, d, oe.current.id)
  }, [e, r, c, s, o]), /* @__PURE__ */ b.jsx(
    kt,
    {
      readOnly: !0,
      tag: w,
      ref: d,
      children: B,
      onMouseLeave: t,
      onClick: (M) => i(M, e),
      onMouseOver: (M) => n(M, e, d.current),
      ...u !== void 0 ? { ...u, ...f ? { disabled: !1 } : {} } : {},
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
    n
    /* elementSpecialProps */
  ] = Bt(e), t = H(e.children), i = Mt(e), o = H(e.tag), s = de(() => !t || t.length === 0 ? null : t.map((c) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: c,
      parents: [...r, e]
    },
    c.id.value
  )), [t, r, e]);
  return /* @__PURE__ */ b.jsx(
    kt,
    {
      tag: o,
      children: s,
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
}, Wo = ({ element: e, parents: r, ...n }) => lr(e, r) ? /* @__PURE__ */ b.jsx(
  zo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ b.jsx(
  Fo,
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
), Uo = (e, r) => {
  const { components: n } = be();
  return pe(({ get: t }) => {
    const i = t(n), o = [...r].reverse(), s = o.findIndex((v) => {
      var g;
      if (t(v.type) !== "component")
        return !1;
      const d = v;
      return t(e.componentId) === t(d.referenceComponentId) ? (g = t(d.slots)) == null ? void 0 : g.some((u) => t(u.referenceSlotId) === t(e.id)) : !1;
    });
    return !o.at(s) || o.slice(s + 1).reduce((v, d) => v !== void 0 ? v : t(d.type) === "slot-content" ? !1 : t(d.type) === "component" ? !0 : v, void 0) ? !1 : i.some((v) => t(v.id) === t(e.componentId));
  }, [r, e, n]);
}, Lt = (e, r) => {
  const { onAddSlotContent: n } = be();
  return pe(({ get: t }) => {
    var s;
    const i = [...r].reverse().filter((c) => t(c.type) === "component").find((c) => t(c.referenceComponentId) === t(e.componentId));
    if (!i)
      return [];
    const o = (s = t(i.slots)) == null ? void 0 : s.find((c) => t(c.referenceSlotId) === t(e.id));
    return o ? [t(o.children), o] : (setTimeout(() => n(e, i), 0), []);
  }, [r, e, n]);
}, Yo = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onDragLeave: i, onDragOver: o, onDrop: s, onHoverBar: c }) => {
  const l = Y(null), [v = [], d] = Lt(e, r), { hoveredId: f } = De();
  Ce({
    value: f,
    matchWidthValue: d == null ? void 0 : d.id,
    effect() {
      d && c(e, l.current);
    }
  }, [f, d == null ? void 0 : d.id, e]);
  const g = Y({ id: qe() });
  return Se({
    element: l,
    id: g.current.id,
    drop: (u, p) => d ? s(u, p, d, r, l, g.current.id) : void 0,
    hover: (u, p) => d ? o(u, p, d, r, l, g.current.id) : void 0,
    leave: (u, p) => d ? i(u, p, d, r, l, g.current.id) : void 0
  }, [d, r, s, o, i]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: t,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (u) => d ? n(u, d, l.current) : void 0,
      children: [
        d && v.length > 0 && v.map((u) => /* @__PURE__ */ b.jsx(
          Fe,
          {
            element: u,
            parents: [...r, d]
          },
          u.id.value
        )),
        v.length === 0 && /* @__PURE__ */ b.jsx(
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
}, No = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: o, onDragOver: s, onDrop: c, onHoverBar: l, onSelectBar: v }) => {
  const d = Y(null), { onDragStart: f, onDragEnd: g } = be(), { hideInsertBar: u } = Ie(), { selectedId: p } = Te(), { hoveredId: y } = De(), x = H(e.name), w = H(e.id);
  Ce({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [y, e]), Ce({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, d.current)
  }, [p, e]);
  const { isDragging: E, preview: C } = _e({
    id: w,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      f();
    },
    end: () => {
      u(), g();
    }
  }, [w, e, r, u, f, g]);
  ce(() => {
    C(
      () => Ze(x),
      (h) => h.remove()
    );
  }, [C, x]);
  const m = Y({ id: qe() });
  return Se({
    element: d,
    id: m.current.id,
    drop: (h, j) => c(h, j, e, r, d, m.current.id),
    hover: (h, j) => s(h, j, e, r, d, m.current.id),
    leave: (h, j) => o(h, j, e, r, d, m.current.id)
  }, [e, r, c, s, o]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: t,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => n(h, e, d.current),
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
        opacity: E ? 0.5 : void 0
      },
      children: [
        'Slot "',
        x,
        '"'
      ]
    }
  );
}, qo = ({ element: e, parents: r }) => {
  const [n = [], t] = Lt(e, r);
  return /* @__PURE__ */ b.jsx("div", { style: { outline: "none" }, children: t && n.map((i) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: i,
      parents: [...r, t]
    },
    i.id.value
  )) });
}, Go = ({ element: e, parents: r, ...n }) => {
  const t = lr(e, r);
  return Uo(e, r) ? /* @__PURE__ */ b.jsx(
    Yo,
    {
      element: e,
      parents: r,
      onDrop: n.onDrop,
      onDragOver: n.onDragOver,
      onDragLeave: n.onDragLeave,
      onMouseOver: n.onMouseOver,
      onMouseLeave: n.onMouseLeave,
      onHoverBar: n.onHoverBar
    }
  ) : t ? /* @__PURE__ */ b.jsx(
    qo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    No,
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
}, Ko = ({ element: e, parents: r, onMouseOver: n, onMouseLeave: t, onSelect: i, onDragLeave: o, onDragOver: s, onDrop: c, onHoverBar: l, onSelectBar: v }) => {
  const d = Y(null), { window: f, document: g } = sr.useFrame(), [u, p] = ke(e.text), y = H(e.name), x = H(e.id), { onExpressionToValue: w, onValueToExpression: E } = be(), { onDragStart: C, onDragEnd: m } = be(), { hideInsertBar: h } = Ie(), { selectedId: j } = Te(), { hoveredId: P } = De(), [B, D] = Tr(!1);
  ce(() => {
    !d.current || !B || (d.current.focus(), v(e, null));
  }, [B, v]), Ce({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [P, e]), Ce({
    value: j,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => v(e, d.current)
  }, [j, e]);
  const { isDragging: I, preview: Z } = _e({
    id: x,
    canDrag: !B,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      C();
    },
    end: () => {
      h(), m();
    }
  }, [x, B, e, r, h, C, m]);
  ce(() => {
    Z(
      () => Ze(y),
      (k) => k.remove()
    );
  }, [Z, y]);
  const oe = Y({ id: qe() });
  Se({
    element: d,
    id: oe.current.id,
    drop: (k, ne) => c(k, ne, e, r, d, oe.current.id),
    hover: (k, ne) => s(k, ne, e, r, d, oe.current.id),
    leave: (k, ne) => o(k, ne, e, r, d, oe.current.id)
  }, [e, r, c, s, o]);
  const M = U((k) => {
    if (!f || !g)
      return;
    const ne = f.getSelection();
    if (!ne)
      return;
    const se = g.createRange(), O = k.currentTarget;
    se.selectNodeContents(O), ne.removeAllRanges(), ne.addRange(se);
  }, [f, g]), A = U((k) => {
    k.stopPropagation(), (k.code === "Escape" || k.code === "Enter" || k.code === "NumpadEnter") && (k.currentTarget.blur(), v(e, k.currentTarget));
  }, [v, e]), Q = U((k) => {
    D(!1), p(String(E(k.currentTarget.innerText, "text", "textContent", e))), v(e, k.currentTarget);
  }, [v, E, e]), ae = de(() => w(u, "text", "textContent", e) ?? "", [u, w, e]);
  return /* @__PURE__ */ b.jsx(
    "span",
    {
      contentEditable: B,
      dangerouslySetInnerHTML: { __html: ae },
      onBlur: Q,
      onFocus: M,
      onKeyDown: A,
      onDoubleClick: () => D(!0),
      ref: d,
      onMouseLeave: t,
      onClick: (k) => B ? k.stopPropagation() : i(k, e),
      onMouseOver: (k) => B ? k.stopPropagation() : n(k, e, d.current),
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
  const { onExpressionToValue: r } = be(), n = H(e.text);
  return de(() => r(n, "text", "textContent", e), [n, r, e]);
}, Xo = ({ element: e, parents: r, ...n }) => lr(e, r) ? /* @__PURE__ */ b.jsx(
  Jo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ b.jsx(
  Ko,
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
), Fe = ({ element: e, parents: r }) => {
  const n = H(e.type), { showInsertBar: t, hideInsertBar: i } = Ie(), { select: o, updateSelectBar: s } = Te(), { hover: c, updateHoverBar: l } = De(), { onDrop: v, value: d } = be(), f = U((C, m) => {
    C.stopPropagation(), C.preventDefault(), o(m.id.value);
  }, [o]), g = U((C) => {
    C.stopPropagation(), C.preventDefault(), o(void 0), c(void 0);
  }, [o, c]), u = U((C, m) => {
    C.stopPropagation(), c(m.id.value);
  }, [c]), p = U((C) => {
    C.stopPropagation(), c(void 0);
  }, [c]), y = U((C, m) => {
    l(C, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [l]), x = U((C, m) => {
    s(C, r, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [s, r]), w = U((C, m, h, j, P, B) => {
    if (!Zr(m, h, j, P, B))
      return c(void 0);
    c(h.id.value);
    const I = Qn(m, h, P);
    if (!I)
      return i();
    t({
      isVisible: !0,
      top: I.top,
      left: I.left,
      width: I.width,
      height: I.height,
      isHorizontal: I.isHorizontal
    });
  }, [t, c, i]), E = U((C, m, h, j, P, B) => {
    var oe, M, A, Q, ae, k;
    if (!Zr(m, h, j, P, B))
      return;
    const I = Zn(m, h, P);
    if (!I)
      return;
    const Z = I.isOverStart || I.isOverEnd;
    if (!(!Z && h.type.value === "component")) {
      if (Object.keys(C).includes("id")) {
        const ne = C;
        if (Z) {
          const se = j.slice(-1).at(0), O = ((oe = (se ? se.children : d).value) == null ? void 0 : oe.findIndex((T) => T.id.value === h.id.value)) ?? -1;
          v({
            element: ne.id,
            from: { position: -1, element: null },
            to: {
              element: se || "root",
              position: I.isOverStart ? O : O + 1
            }
          });
        } else {
          const se = ((M = h.children.value) == null ? void 0 : M.length) || -1;
          v({
            element: ne.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: I.isOverStart ? se : se + 1
            }
          });
        }
      } else {
        const ne = C, se = (A = ne.parents) == null ? void 0 : A.slice(-1).at(0), O = se || "root";
        if (O !== "root" && O.type.value === "component")
          return;
        const T = ((Q = (O === "root" ? d : O.children).value) == null ? void 0 : Q.findIndex((L) => L.id.value === ne.element.id.value)) ?? -1;
        if (Z) {
          const L = j.slice(-1).at(0), F = ((ae = (L ? L.children : d).value) == null ? void 0 : ae.findIndex(($) => $.id.value === h.id.value)) ?? -1;
          v({
            element: ne.element,
            from: {
              position: T,
              element: O
            },
            to: {
              element: L || "root",
              position: I.isOverStart ? F : F + 1
            }
          });
        } else {
          const L = ((k = h.children.value) == null ? void 0 : k.length) || -1;
          v({
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
  }, [o, v, i]);
  return n === "component" ? /* @__PURE__ */ b.jsx(
    Ho,
    {
      parents: r,
      element: e,
      onDrop: E,
      onDragOver: w,
      onDragLeave: () => {
      },
      onDoubleClick: g,
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : n === "slot" ? /* @__PURE__ */ b.jsx(
    Go,
    {
      parents: r,
      element: e,
      onDrop: E,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : n === "text" ? /* @__PURE__ */ b.jsx(
    Xo,
    {
      parents: r,
      element: e,
      onDrop: E,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : /* @__PURE__ */ b.jsx(
    Wo,
    {
      parents: r,
      element: e,
      onDrop: E,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: p,
      onHoverBar: y,
      onSelectBar: x
    }
  );
}, Zo = () => {
  const e = Y({ id: qe() }), { value: r, styles: n, onDrop: t, onKeyDown: i } = be(), { updateSelectBarScroll: o, select: s } = Te(), { showInsertBar: c, hideInsertBar: l } = Ie(), { updateHoverBarScroll: v, hover: d } = De(), [f, g] = Tr(null), u = H(r), p = U((m, h) => {
    var j;
    if (l(), !!m)
      if (Object.keys(m).includes("id"))
        t({
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
        const P = m, B = Jn(P.parents || []), D = B || "root", I = ((j = B == null ? void 0 : B.children.value) == null ? void 0 : j.findIndex((Z) => Z.id.value === P.element.id.value)) ?? -1;
        t({
          element: P.element,
          from: {
            element: D,
            position: I
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), s(P.element.id.value);
      }
  }, [r, s, l]), y = U((m, h) => {
    const j = f == null ? void 0 : f.lastElementChild;
    if (!j)
      return;
    const P = j.getBoundingClientRect();
    c({
      isVisible: !0,
      isHorizontal: !0,
      left: P.left,
      width: P.width,
      height: P.height,
      top: j ? P.top + P.height : P.top
    });
  }, [f == null ? void 0 : f.lastElementChild, c]), x = U((m, h) => {
    o(m, h), v(m, h);
  }, [o, v]), w = U((m) => {
    m.stopPropagation(), s(void 0);
  }, [s]), [{ isDraggingOver: E, isDraggingOverCurrent: C }] = Se({
    drop: p,
    hover: y,
    id: e.current.id,
    element: { current: f },
    leave: () => {
      l(), d(void 0);
    }
  }, [p, y, l]);
  return /* @__PURE__ */ b.jsx(
    Bo,
    {
      styles: n,
      resetBody: !0,
      draggingHover: E || C,
      children: /* @__PURE__ */ b.jsxs(
        Mo,
        {
          onClick: w,
          onKeyDown: i,
          onScroll: x,
          onRef: g,
          children: [
            /* @__PURE__ */ b.jsx(Vn, {}),
            /* @__PURE__ */ b.jsx(oo, {}),
            /* @__PURE__ */ b.jsx(ro, {}),
            u.map((m) => /* @__PURE__ */ b.jsx(
              Fe,
              {
                parents: [],
                element: m
              },
              m.id.value
            )),
            u.length === 0 && /* @__PURE__ */ b.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ b.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function ii({ onSelect: e, onHover: r, selectedId: n, hoveredId: t, ...i }) {
  return /* @__PURE__ */ b.jsx(lt, { children: /* @__PURE__ */ b.jsx(kn, { ...i, children: /* @__PURE__ */ b.jsx(Ln, { children: /* @__PURE__ */ b.jsx(An, { id: n, onSelect: e, children: /* @__PURE__ */ b.jsx(to, { id: t, onHover: r, children: /* @__PURE__ */ b.jsx(Zo, {}) }) }) }) }) });
}
export {
  ii as UIEditor,
  oi as UiOverview
};
//# sourceMappingURL=index.es.js.map

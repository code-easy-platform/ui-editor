import Oe, { createContext as Le, useContext as $e, useRef as q, useEffect as se, useCallback as N, useState as je, useMemo as de, memo as ir, createElement as dt, forwardRef as sn } from "react";
import { useDrag as _e, useDrop as we, DragAndDropProvider as ft } from "react-use-drag-and-drop";
import { useSelectorValue as pe, useObserverValue as F, observe as fe, set as ve, useObserver as ke, selector as jr } from "react-observing";
import { v4 as vt } from "uuid";
import un from "react-dom";
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function fn() {
  if (Gr)
    return Xe;
  Gr = 1;
  var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, d, f) {
    var l, p = {}, O = null, s = null;
    f !== void 0 && (O = "" + f), d.key !== void 0 && (O = "" + d.key), d.ref !== void 0 && (s = d.ref);
    for (l in d)
      n.call(d, l) && !o.hasOwnProperty(l) && (p[l] = d[l]);
    if (u && u.defaultProps)
      for (l in d = u.defaultProps, d)
        p[l] === void 0 && (p[l] = d[l]);
    return { $$typeof: r, type: u, key: O, ref: s, props: p, _owner: i.current };
  }
  return Xe.Fragment = t, Xe.jsx = c, Xe.jsxs = c, Xe;
}
var Ze = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function vn() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), s = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function b(a) {
      if (a === null || typeof a != "object")
        return null;
      var w = v && a[v] || a[y];
      return typeof w == "function" ? w : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(a) {
      {
        for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), L = 1; L < w; L++)
          P[L - 1] = arguments[L];
        E("error", a, P);
      }
    }
    function E(a, w, P) {
      {
        var L = C.ReactDebugCurrentFrame, te = L.getStackAddendum();
        te !== "" && (w += "%s", P = P.concat([te]));
        var ce = P.map(function(Z) {
          return String(Z);
        });
        ce.unshift("Warning: " + w), Function.prototype.apply.call(console[a], console, ce);
      }
    }
    var x = !1, h = !1, M = !1, A = !1, R = !1, T;
    T = Symbol.for("react.module.reference");
    function j(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || R || a === i || a === f || a === l || A || a === s || x || h || M || typeof a == "object" && a !== null && (a.$$typeof === O || a.$$typeof === p || a.$$typeof === c || a.$$typeof === u || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === T || a.getModuleId !== void 0));
    }
    function Y(a, w, P) {
      var L = a.displayName;
      if (L)
        return L;
      var te = w.displayName || w.name || "";
      return te !== "" ? P + "(" + te + ")" : P;
    }
    function B(a) {
      return a.displayName || "Context";
    }
    function I(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
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
        case l:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            var w = a;
            return B(w) + ".Consumer";
          case c:
            var P = a;
            return B(P._context) + ".Provider";
          case d:
            return Y(a, a.render, "ForwardRef");
          case p:
            var L = a.displayName || null;
            return L !== null ? L : I(a.type) || "Memo";
          case O: {
            var te = a, ce = te._payload, Z = te._init;
            try {
              return I(Z(ce));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, re = 0, ie, k, ee, ae, m, _, V;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function $() {
      {
        if (re === 0) {
          ie = console.log, k = console.info, ee = console.warn, ae = console.error, m = console.group, _ = console.groupCollapsed, V = console.groupEnd;
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
        re++;
      }
    }
    function X() {
      {
        if (re--, re === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, a, {
              value: ie
            }),
            info: U({}, a, {
              value: k
            }),
            warn: U({}, a, {
              value: ee
            }),
            error: U({}, a, {
              value: ae
            }),
            group: U({}, a, {
              value: m
            }),
            groupCollapsed: U({}, a, {
              value: _
            }),
            groupEnd: U({}, a, {
              value: V
            })
          });
        }
        re < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = C.ReactCurrentDispatcher, W;
    function G(a, w, P) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (te) {
            var L = te.stack.trim().match(/\n( *(at )?)/);
            W = L && L[1] || "";
          }
        return `
` + W + a;
      }
    }
    var Q = !1, K;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      K = new he();
    }
    function D(a, w) {
      if (!a || Q)
        return "";
      {
        var P = K.get(a);
        if (P !== void 0)
          return P;
      }
      var L;
      Q = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = z.current, z.current = null, $();
      try {
        if (w) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (ye) {
              L = ye;
            }
            Reflect.construct(a, [], Z);
          } else {
            try {
              Z.call();
            } catch (ye) {
              L = ye;
            }
            a.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            L = ye;
          }
          a();
        }
      } catch (ye) {
        if (ye && L && typeof ye.stack == "string") {
          for (var J = ye.stack.split(`
`), ge = L.stack.split(`
`), ue = J.length - 1, le = ge.length - 1; ue >= 1 && le >= 0 && J[ue] !== ge[le]; )
            le--;
          for (; ue >= 1 && le >= 0; ue--, le--)
            if (J[ue] !== ge[le]) {
              if (ue !== 1 || le !== 1)
                do
                  if (ue--, le--, le < 0 || J[ue] !== ge[le]) {
                    var me = `
` + J[ue].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && K.set(a, me), me;
                  }
                while (ue >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        Q = !1, z.current = ce, X(), Error.prepareStackTrace = te;
      }
      var Ye = a ? a.displayName || a.name : "", Be = Ye ? G(Ye) : "";
      return typeof a == "function" && K.set(a, Be), Be;
    }
    function xe(a, w, P) {
      return D(a, !1);
    }
    function We(a) {
      var w = a.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ae(a, w, P) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return D(a, We(a));
      if (typeof a == "string")
        return G(a);
      switch (a) {
        case f:
          return G("Suspense");
        case l:
          return G("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return xe(a.render);
          case p:
            return Ae(a.type, w, P);
          case O: {
            var L = a, te = L._payload, ce = L._init;
            try {
              return Ae(ce(te), w, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, Br = {}, kr = C.ReactDebugCurrentFrame;
    function rr(a) {
      if (a) {
        var w = a._owner, P = Ae(a.type, a._source, w ? w.type : null);
        kr.setExtraStackFrame(P);
      } else
        kr.setExtraStackFrame(null);
    }
    function $t(a, w, P, L, te) {
      {
        var ce = Function.call.bind(Ke);
        for (var Z in a)
          if (ce(a, Z)) {
            var J = void 0;
            try {
              if (typeof a[Z] != "function") {
                var ge = Error((L || "React class") + ": " + P + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ge.name = "Invariant Violation", ge;
              }
              J = a[Z](w, Z, L, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              J = ue;
            }
            J && !(J instanceof Error) && (rr(te), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", P, Z, typeof J), rr(null)), J instanceof Error && !(J.message in Br) && (Br[J.message] = !0, rr(te), S("Failed %s type: %s", P, J.message), rr(null));
          }
      }
    }
    var Ft = Array.isArray;
    function fr(a) {
      return Ft(a);
    }
    function Ht(a) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return P;
      }
    }
    function zt(a) {
      try {
        return Vr(a), !1;
      } catch {
        return !0;
      }
    }
    function Vr(a) {
      return "" + a;
    }
    function Lr(a) {
      if (zt(a))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ht(a)), Vr(a);
    }
    var Je = C.ReactCurrentOwner, Wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $r, Fr, vr;
    vr = {};
    function Ut(a) {
      if (Ke.call(a, "ref")) {
        var w = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Yt(a) {
      if (Ke.call(a, "key")) {
        var w = Object.getOwnPropertyDescriptor(a, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Nt(a, w) {
      if (typeof a.ref == "string" && Je.current && w && Je.current.stateNode !== w) {
        var P = I(Je.current.type);
        vr[P] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Je.current.type), a.ref), vr[P] = !0);
      }
    }
    function qt(a, w) {
      {
        var P = function() {
          $r || ($r = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Gt(a, w) {
      {
        var P = function() {
          Fr || (Fr = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Kt = function(a, w, P, L, te, ce, Z) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: w,
        ref: P,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: ce
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Jt(a, w, P, L, te) {
      {
        var ce, Z = {}, J = null, ge = null;
        P !== void 0 && (Lr(P), J = "" + P), Yt(w) && (Lr(w.key), J = "" + w.key), Ut(w) && (ge = w.ref, Nt(w, te));
        for (ce in w)
          Ke.call(w, ce) && !Wt.hasOwnProperty(ce) && (Z[ce] = w[ce]);
        if (a && a.defaultProps) {
          var ue = a.defaultProps;
          for (ce in ue)
            Z[ce] === void 0 && (Z[ce] = ue[ce]);
        }
        if (J || ge) {
          var le = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          J && qt(Z, le), ge && Gt(Z, le);
        }
        return Kt(a, J, ge, te, L, Je.current, Z);
      }
    }
    var pr = C.ReactCurrentOwner, Hr = C.ReactDebugCurrentFrame;
    function Ue(a) {
      if (a) {
        var w = a._owner, P = Ae(a.type, a._source, w ? w.type : null);
        Hr.setExtraStackFrame(P);
      } else
        Hr.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function gr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function zr() {
      {
        if (pr.current) {
          var a = I(pr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Xt(a) {
      return "";
    }
    var Wr = {};
    function Zt(a) {
      {
        var w = zr();
        if (!w) {
          var P = typeof a == "string" ? a : a.displayName || a.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
    }
    function Ur(a, w) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var P = Zt(w);
        if (Wr[P])
          return;
        Wr[P] = !0;
        var L = "";
        a && a._owner && a._owner !== pr.current && (L = " It was passed a child from " + I(a._owner.type) + "."), Ue(a), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, L), Ue(null);
      }
    }
    function Yr(a, w) {
      {
        if (typeof a != "object")
          return;
        if (fr(a))
          for (var P = 0; P < a.length; P++) {
            var L = a[P];
            gr(L) && Ur(L, w);
          }
        else if (gr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var te = b(a);
          if (typeof te == "function" && te !== a.entries)
            for (var ce = te.call(a), Z; !(Z = ce.next()).done; )
              gr(Z.value) && Ur(Z.value, w);
        }
      }
    }
    function Qt(a) {
      {
        var w = a.type;
        if (w == null || typeof w == "string")
          return;
        var P;
        if (typeof w == "function")
          P = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === p))
          P = w.propTypes;
        else
          return;
        if (P) {
          var L = I(w);
          $t(P, a.props, "prop", L, a);
        } else if (w.PropTypes !== void 0 && !hr) {
          hr = !0;
          var te = I(w);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(a) {
      {
        for (var w = Object.keys(a.props), P = 0; P < w.length; P++) {
          var L = w[P];
          if (L !== "children" && L !== "key") {
            Ue(a), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Ue(null);
            break;
          }
        }
        a.ref !== null && (Ue(a), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
      }
    }
    var Nr = {};
    function qr(a, w, P, L, te, ce) {
      {
        var Z = j(a);
        if (!Z) {
          var J = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Xt();
          ge ? J += ge : J += zr();
          var ue;
          a === null ? ue = "null" : fr(a) ? ue = "array" : a !== void 0 && a.$$typeof === r ? (ue = "<" + (I(a.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof a, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, J);
        }
        var le = Jt(a, w, P, te, ce);
        if (le == null)
          return le;
        if (Z) {
          var me = w.children;
          if (me !== void 0)
            if (L)
              if (fr(me)) {
                for (var Ye = 0; Ye < me.length; Ye++)
                  Yr(me[Ye], a);
                Object.freeze && Object.freeze(me);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(me, a);
        }
        if (Ke.call(w, "key")) {
          var Be = I(a), ye = Object.keys(w).filter(function(cn) {
            return cn !== "key";
          }), yr = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[Be + yr]) {
            var an = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yr, Be, an, Be), Nr[Be + yr] = !0;
          }
        }
        return a === n ? en(le) : Qt(le), le;
      }
    }
    function rn(a, w, P) {
      return qr(a, w, P, !0);
    }
    function tn(a, w, P) {
      return qr(a, w, P, !1);
    }
    var nn = tn, on = rn;
    Ze.Fragment = n, Ze.jsx = nn, Ze.jsxs = on;
  }()), Ze;
}
process.env.NODE_ENV === "production" ? Er.exports = fn() : Er.exports = vn();
var g = Er.exports;
const pt = Le({});
function pn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(pt.Provider, { value: r, children: e });
}
const Te = () => $e(pt), ht = Le({}), hn = ({ children: e, id: r, onSelect: t }) => {
  const n = q({ onSelect: t, id: r });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(ht.Provider, { value: n.current, children: e });
}, Fe = () => {
  const e = $e(ht);
  return {
    select: N((t) => {
      e.onSelect(t);
    }, [e.id]),
    selectedId: e.id
  };
}, gt = Le({}), gn = ({ children: e, id: r, onHover: t }) => {
  const n = q({ onHover: t, id: r });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(gt.Provider, { value: n.current, children: e });
}, Ie = () => {
  const e = $e(gt);
  return {
    hover: N((t) => {
      e.id.value !== t && e.onHover(t);
    }, [e.id]),
    hoveredId: e.id
  };
}, yn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, ar = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
var yt = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(s, v) {
      return v = v || "", s.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), o = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", c = function(s, v, y, b) {
      return s = s || t, v = v || n, y = y || i, b = b || o, {
        capitalize: new RegExp("(^|[" + s + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + s + "])+([" + v + y + "])", "g"),
        fill: new RegExp("[" + s + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + b + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + s + "]")
      };
    }, u = c(), d = {
      re: u,
      unicodes: r,
      regexps: c,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(s) {
        return d.up.call(s.charAt(0)) + s.slice(1);
      },
      decap: function(s) {
        return d.low.call(s.charAt(0)) + s.slice(1);
      },
      deapostrophe: function(s) {
        return s.replace(u.apostrophe, "");
      },
      fill: function(s, v, y) {
        return v != null && (s = s.replace(u.fill, function(b, C) {
          return C ? v + C : "";
        })), y && (s = d.deapostrophe(s)), s;
      },
      prep: function(s, v, y, b) {
        if (s = s == null ? "" : s + "", !b && u.upper.test(s) && (s = d.low.call(s)), !v && !u.hole.test(s)) {
          var C = d.fill(s, " ");
          u.hole.test(C) && (s = C);
        }
        return !y && !u.room.test(s) && (s = s.replace(u.relax, d.relax)), s;
      },
      relax: function(s, v, y, b) {
        return v + " " + (y ? y + " " : "") + b;
      }
    }, f = {
      _: d,
      of: function(s) {
        for (var v = 0, y = d.types.length; v < y; v++)
          if (f[d.types[v]].apply(f, arguments) === s)
            return d.types[v];
      },
      flip: function(s) {
        return s.replace(/\w/g, function(v) {
          return (v == d.up.call(v) ? d.low : d.up).call(v);
        });
      },
      random: function(s) {
        return s.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? d.up : d.low).call(v);
        });
      },
      type: function(s, v) {
        f[s] = v, d.types.push(s);
      }
    }, l = {
      lower: function(s, v, y) {
        return d.fill(d.low.call(d.prep(s, v)), v, y);
      },
      snake: function(s) {
        return f.lower(s, "_", !0);
      },
      constant: function(s) {
        return f.upper(s, "_", !0);
      },
      camel: function(s) {
        return d.decap(f.pascal(s));
      },
      kebab: function(s) {
        return f.lower(s, "-", !0);
      },
      upper: function(s, v, y) {
        return d.fill(d.up.call(d.prep(s, v, !1, !0)), v, y);
      },
      capital: function(s, v, y) {
        return d.fill(d.prep(s).replace(u.capitalize, function(b, C, S) {
          return C + d.up.call(S);
        }), v, y);
      },
      header: function(s) {
        return f.capital(s, "-", !0);
      },
      pascal: function(s) {
        return d.fill(d.prep(s, !1, !0).replace(u.pascal, function(v, y, b) {
          return d.up.call(b);
        }), "", !0);
      },
      title: function(s) {
        return f.capital(s).replace(u.improper, function(v, y, b, C) {
          return b > 0 && b < C.lastIndexOf(" ") ? d.low.call(v) : v;
        });
      },
      sentence: function(s, v, y) {
        return s = f.lower(s).replace(u.sentence, function(b, C, S) {
          return C + d.up.call(S);
        }), v && v.forEach(function(b) {
          s = s.replace(new RegExp("\\b" + f.lower(b) + "\\b", "g"), d.cap);
        }), y && y.forEach(function(b) {
          s = s.replace(new RegExp("(\\b" + f.lower(b) + "\\. +)(\\w)"), function(C, S, E) {
            return S + d.low.call(E);
          });
        }), s;
      }
    };
    l.squish = l.pascal, f.default = f;
    for (var p in l)
      f.type(p, l[p]);
    var O = typeof O == "function" ? O : function() {
    };
    O(e.exports ? e.exports = f : this.Case = f);
  }).call(ln);
})(yt);
var bn = yt.exports;
const Jr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((u) => e.draggingId === u.id.value)), Xr = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content")
    return "center";
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.y - i.y;
  return c >= 0 && c <= o ? "start" : c >= i.height - o && c <= i.height ? "end" : c >= o && c <= i.height - o ? "center" : null;
}, Ne = () => vt(), Rr = () => /* @__PURE__ */ g.jsx("div", { className: "animate-pulse pointer-events-none py-0.5 -my-0.5 rounded bg-[#3e8ce4] z-10" }), xn = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), cr = (e, r) => pe(({ get: n }) => {
  const i = [...r].reverse();
  let o;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    if (n(u.type) === "slot-content" && (o = !1), n(u.type) === "component")
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
    const u = o(r);
    return c === u;
  }, [...n]);
  return se(() => {
    i && (t == null || t());
  }, [i]), i;
}, qe = ({ label: e, hover: r, select: t, paddingLeft: n, insertBarAt: i, dragging: o, dragOver: c }) => /* @__PURE__ */ g.jsxs("div", { className: "pointer-events-none", children: [
  c && i === "start" && /* @__PURE__ */ g.jsx(Rr, {}),
  /* @__PURE__ */ g.jsx(
    "div",
    {
      "data-hover": r,
      "data-select": t,
      style: { paddingLeft: n },
      "data-dragging": o,
      "data-drag-over": c,
      className: "cursor-pointer rounded-sm outline outline-1 outline-transparent pointer-events-none data-[hover=true]:outline-[#ed8c5f89] data-[select=true]:outline-[#3e8be4c1]",
      children: e
    }
  ),
  c && i === "end" && /* @__PURE__ */ g.jsx(Rr, {})
] }), mn = ({ element: e, paddingLeft: r, onMouseLeave: t, onMouseOver: n, onSelect: i }) => {
  const o = q(null), { selectedId: c } = Fe(), { hoveredId: u } = Ie(), d = F(e.name), f = Ce({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id
  }, [u, e]), l = Ce({
    value: c,
    matchWidthValue: e == null ? void 0 : e.id
  }, [c, e]);
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: o,
      onMouseLeave: t,
      onClick: (p) => i(p, e),
      onMouseOver: (p) => n(p, e, o.current),
      children: /* @__PURE__ */ g.jsx(
        qe,
        {
          dragOver: !1,
          dragging: !1,
          hover: f,
          insertBarAt: null,
          select: l,
          paddingLeft: r,
          label: d + "(Infinity loop)"
        }
      )
    }
  );
}, On = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: u, onDrop: d, onDoubleClick: f }) => {
  const l = q(null), { onDragStart: p, onDragEnd: O, components: s } = Te(), { selectedId: v } = Fe(), { hoveredId: y } = Ie(), [b, C] = je(null), S = F(e.name), E = F(e.id), x = pe(({ get: B }) => {
    const I = B(s).find((U) => B(U.id) === B(e.referenceComponentId));
    return I ? B(I.content) : [];
  }, [s, e]), h = Ce({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id
  }, [y, e]), M = Ce({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id
  }, [v, e]), A = de(() => !x || x.length === 0 ? null : x.map((B) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: B,
      paddingLeft: t,
      parents: [...r, e]
    },
    B.id.value
  )), [x, r, e, t]), { isDragging: R, preview: T } = _e({
    id: E,
    element: l,
    end: () => O(),
    data: { element: e, parents: r },
    start: () => {
      p();
    }
  }, [E, e, r, p, O]);
  se(() => {
    T(
      () => ar(S),
      (B) => B.remove()
    );
  }, [T, S]);
  const j = q({ id: Ne() }), [{ isDraggingOver: Y }] = we({
    element: l,
    id: j.current.id,
    drop: (B, I) => d(B, I, e, r, l, j.current.id),
    hover: (B, I) => C(u(B, I, e, r, l, j.current.id)),
    leave: (B, I) => C(c(B, I, e, r, l, j.current.id))
  }, [e, r, d, u, c]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: l,
        "data-dragging": R,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (B) => o(B, e),
        onDoubleClick: (B) => f(B, e),
        onMouseOver: (B) => n(B, e, l.current),
        children: /* @__PURE__ */ g.jsx(
          qe,
          {
            label: S,
            hover: h,
            select: M,
            dragging: R,
            dragOver: Y,
            paddingLeft: t,
            insertBarAt: b
          }
        )
      }
    ),
    A
  ] });
}, wn = ({ element: e, parents: r, paddingLeft: t }) => {
  const { components: n } = Te();
  return pe(({ get: o }) => {
    const c = o(n).find((u) => o(u.id) === o(e.referenceComponentId));
    return c ? o(c.content) : [];
  }, [n, e]).map((o) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  ));
}, Sn = ({ element: e, parents: r, paddingLeft: t, ...n }) => {
  const i = xn(e, r), o = cr(e, r);
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
    wn,
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
}, Cn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: u, onDrop: d }) => {
  const f = q(null), [l, p] = je(null), O = F(e.children), s = F(e.name), v = F(e.id), { onDragStart: y, onDragEnd: b } = Te(), { selectedId: C } = Fe(), { hoveredId: S } = Ie(), E = Ce({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id
  }, [S, e]), x = Ce({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id
  }, [C, e]), h = de(() => !O || O.length === 0 ? null : O.map((j) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: j,
      paddingLeft: t + 8,
      parents: [...r, e]
    },
    j.id.value
  )), [O, r, e, t]), { isDragging: M, preview: A } = _e({
    id: v,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      y();
    },
    end: () => b()
  }, [v, e, r, y, b]);
  se(() => {
    A(
      () => ar(s),
      (j) => j.remove()
    );
  }, [A, s]);
  const R = q({ id: Ne() }), [{ isDraggingOver: T }] = we({
    element: f,
    id: R.current.id,
    drop: (j, Y) => d(j, Y, e, r, f, R.current.id),
    hover: (j, Y) => p(u(j, Y, e, r, f, R.current.id)),
    leave: (j, Y) => p(c(j, Y, e, r, f, R.current.id))
  }, [e, r, d, u, c]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: f,
        "data-dragging": M,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (j) => o(j, e),
        onMouseOver: (j) => n(j, e, f.current),
        children: /* @__PURE__ */ g.jsx(
          qe,
          {
            label: s,
            hover: E,
            select: x,
            dragging: M,
            dragOver: T,
            paddingLeft: t,
            insertBarAt: l
          }
        )
      }
    ),
    h
  ] });
}, En = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = F(e.children);
  return de(() => !n || n.length === 0 ? null : n.map((o) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  )), [n, r, e, t]);
}, Rn = ({ element: e, parents: r, paddingLeft: t, ...n }) => cr(e, r) ? /* @__PURE__ */ g.jsx(
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
  const { components: t } = Te();
  return pe(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var O;
      if (n(f.type) !== "component")
        return !1;
      const l = f;
      return n(e.componentId) === n(l.referenceComponentId) ? (O = n(l.slots)) == null ? void 0 : O.some((s) => n(s.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, l) => f !== void 0 ? f : n(l.type) === "slot-content" ? !1 : n(l.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, bt = (e, r) => pe(({ get: t }) => {
  var o;
  const n = [...r].reverse().filter((c) => t(c.type) === "component").find((c) => t(c.referenceComponentId) === t(e.componentId));
  if (!n)
    return [];
  const i = (o = t(n.slots)) == null ? void 0 : o.find((c) => t(c.referenceSlotId) === t(e.id));
  return i ? [t(i.children), i] : [];
}, [r, e]), Dn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onDragLeave: o, onDragOver: c, onDrop: u }) => {
  const d = q(null), [f, l] = je(null), p = F(e.name), [O = [], s] = bt(e, r), { hoveredId: v } = Ie(), y = Ce({
    value: v,
    matchWidthValue: s == null ? void 0 : s.id
  }, [v, s]), b = q({ id: Ne() }), [{ isDraggingOver: C }] = we({
    element: d,
    id: b.current.id,
    drop: (S, E) => s ? u(S, E, s, r, d, b.current.id) : null,
    hover: (S, E) => l(s ? c(S, E, s, r, d, b.current.id) : null),
    leave: (S, E) => l(s ? o(S, E, s, r, d, b.current.id) : null)
  }, [s, r, u, c, o]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: d,
        onMouseLeave: i,
        onMouseOver: (S) => s ? n(S, s, d.current) : void 0,
        children: /* @__PURE__ */ g.jsx(
          qe,
          {
            label: p,
            select: !1,
            dragging: !1,
            hover: y,
            dragOver: C,
            insertBarAt: f,
            paddingLeft: t + 8
          }
        )
      }
    ),
    s && O.length > 0 && O.map((S) => /* @__PURE__ */ g.jsx(
      He,
      {
        element: S,
        paddingLeft: t + 16,
        parents: [...r, s]
      },
      S.id.value
    ))
  ] });
}, Pn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: u, onDrop: d }) => {
  const f = q(null), { onDragStart: l, onDragEnd: p } = Te(), { selectedId: O } = Fe(), { hoveredId: s } = Ie(), [v, y] = je(null), b = F(e.name), C = F(e.id), S = Ce({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id
  }, [s, e]), E = Ce({
    value: O,
    matchWidthValue: e == null ? void 0 : e.id
  }, [O, e]), { isDragging: x, preview: h } = _e({
    id: C,
    element: f,
    end: () => p(),
    data: { element: e, parents: r },
    start: () => {
      l();
    }
  }, [C, e, r, l, p]);
  se(() => {
    h(
      () => ar(b),
      (R) => R.remove()
    );
  }, [h, b]);
  const M = q({ id: Ne() }), [{ isDraggingOver: A }] = we({
    element: f,
    id: M.current.id,
    drop: (R, T) => d(R, T, e, r, f, M.current.id),
    hover: (R, T) => y(u(R, T, e, r, f, M.current.id)),
    leave: (R, T) => y(c(R, T, e, r, f, M.current.id))
  }, [e, r, d, u, c]);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": x,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (R) => o(R, e),
      onMouseOver: (R) => n(R, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        qe,
        {
          label: b,
          hover: S,
          select: E,
          dragging: x,
          dragOver: A,
          paddingLeft: t,
          insertBarAt: v
        }
      )
    }
  ) });
}, jn = ({ element: e, parents: r, paddingLeft: t }) => {
  const [n = [], i] = bt(e, r);
  return i ? n.map((o) => /* @__PURE__ */ g.jsx(
    He,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, i]
    },
    o.id.value
  )) : null;
}, Tn = ({ element: e, parents: r, paddingLeft: t, ...n }) => {
  const i = cr(e, r);
  return _n(e, r) ? /* @__PURE__ */ g.jsx(
    Dn,
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
    Pn,
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
}, In = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: u, onDrop: d }) => {
  const f = q(null), [l, p] = je(null), O = F(e.name), s = F(e.id), { onDragStart: v, onDragEnd: y } = Te(), { selectedId: b } = Fe(), { hoveredId: C } = Ie(), S = Ce({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id
  }, [C, e]), E = Ce({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id
  }, [b, e]), { isDragging: x, preview: h } = _e({
    id: s,
    element: f,
    end: () => y(),
    data: { element: e, parents: r },
    start: () => {
      v();
    }
  }, [s, e, r, v, y]);
  se(() => {
    h(
      () => ar(O),
      (R) => R.remove()
    );
  }, [h, O]);
  const M = q({ id: Ne() }), [{ isDraggingOver: A }] = we({
    element: f,
    id: M.current.id,
    drop: (R, T) => d(R, T, e, r, f, M.current.id),
    hover: (R, T) => p(u(R, T, e, r, f, M.current.id)),
    leave: (R, T) => p(c(R, T, e, r, f, M.current.id))
  }, [e, r, d, u, c]);
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": x,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (R) => o(R, e),
      onMouseOver: (R) => n(R, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        qe,
        {
          label: O,
          hover: S,
          select: E,
          dragging: x,
          dragOver: A,
          paddingLeft: t,
          insertBarAt: l
        }
      )
    }
  );
}, Mn = ({ element: e, parents: r, paddingLeft: t, ...n }) => cr(e, r) ? null : /* @__PURE__ */ g.jsx(
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
), He = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = F(e.type), { onDrop: i, value: o } = Te(), { select: c } = Fe(), { hover: u } = Ie(), d = N((v, y) => {
    v.stopPropagation(), v.preventDefault(), c(y.id.value);
  }, [c]), f = N((v) => {
    v.stopPropagation(), v.preventDefault(), c(void 0), u(void 0);
  }, [c, u]), l = N((v, y) => {
    v.stopPropagation(), u(y.id.value);
  }, [u]), p = N((v) => {
    v.stopPropagation(), u(void 0);
  }, [u]), O = N((v, y, b, C, S, E) => {
    if (!Jr(y, b, C, S, E))
      return u(void 0), null;
    const h = Xr(y, b, S);
    return h ? (u(e.id.value), h) : (u(void 0), null);
  }, [u]), s = N((v, y, b, C, S, E) => {
    var R, T, j, Y, B, I, U;
    if (!Jr(y, b, C, S, E))
      return;
    const h = Xr(y, b, S);
    if (!h)
      return;
    const M = ["html", "slot-content"].includes(b.type.value) && ((R = b.children.value) == null ? void 0 : R.length) || !1, A = h === "start" || h === "end" && !M;
    if (!(!A && b.type.value === "component"))
      if (Object.keys(v).includes("id")) {
        const re = v;
        if (A) {
          const ie = C.slice(-1).at(0), k = ((T = (ie ? ie.children : o).value) == null ? void 0 : T.findIndex((ee) => ee.id.value === b.id.value)) ?? -1;
          i({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              element: ie || "root",
              position: h === "start" ? k : k + 1
            }
          });
        } else {
          const ie = ((j = b.children.value) == null ? void 0 : j.length) || 0;
          i({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              position: h === "end" ? 0 : ie,
              element: b
            }
          });
        }
      } else {
        const re = v, ie = (Y = re.parents) == null ? void 0 : Y.slice(-1).at(0), k = ie || "root";
        if (k !== "root" && k.type.value === "component")
          return;
        const ee = ((B = (k === "root" ? o : k.children).value) == null ? void 0 : B.findIndex((ae) => ae.id.value === re.element.id.value)) ?? -1;
        if (A) {
          const ae = C.slice(-1).at(0), m = ((I = (ae ? ae.children : o).value) == null ? void 0 : I.findIndex((_) => _.id.value === b.id.value)) ?? -1;
          i({
            element: re.element,
            from: {
              position: ee,
              element: k
            },
            to: {
              element: ae || "root",
              position: h === "start" ? m : m + 1
            }
          });
        } else {
          const ae = ((U = b.children.value) == null ? void 0 : U.length) || 0;
          i({
            element: re.element,
            from: {
              position: ee,
              element: k
            },
            to: {
              position: M ? 0 : ae,
              element: b
            }
          });
        }
        c(re.element.id.value);
      }
  }, [c, i]);
  return n === "component" ? /* @__PURE__ */ g.jsx(
    Sn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: s,
      onDragLeave: () => null,
      onDragOver: O,
      onDoubleClick: f,
      onSelect: d,
      onMouseOver: l,
      onMouseLeave: p
    }
  ) : n === "slot" ? /* @__PURE__ */ g.jsx(
    Tn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: s,
      onDragLeave: () => null,
      onDragOver: O,
      onSelect: d,
      onMouseOver: l,
      onMouseLeave: p
    }
  ) : n === "text" ? /* @__PURE__ */ g.jsx(
    Mn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: s,
      onDragLeave: () => null,
      onDragOver: O,
      onSelect: d,
      onMouseOver: l,
      onMouseLeave: p
    }
  ) : /* @__PURE__ */ g.jsx(
    Rn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: s,
      onDragLeave: () => null,
      onDragOver: O,
      onSelect: d,
      onMouseOver: l,
      onMouseLeave: p
    }
  );
}, An = () => {
  const e = q(null), r = q({ id: Ne() }), { value: t, onDrop: n, onKeyDown: i } = Te(), { select: o } = Fe(), { hover: c } = Ie(), u = F(t), d = N((p, O) => {
    var s;
    if (p)
      if (Object.keys(p).includes("id"))
        n({
          element: p.id,
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
        const v = p, y = yn(v.parents || []), b = y || "root", C = ((s = y == null ? void 0 : y.children.value) == null ? void 0 : s.findIndex((S) => S.id.value === v.element.id.value)) ?? -1;
        n({
          element: v.element,
          from: {
            element: b,
            position: C
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), o(v.element.id.value);
      }
  }, [t, o]), f = N((p) => {
    p.stopPropagation(), o(void 0);
  }, [o]), [{ isDraggingOver: l }] = we({
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
        u.map((p) => /* @__PURE__ */ g.jsx(
          He,
          {
            parents: [],
            paddingLeft: 4,
            element: p
          },
          p.id.value
        )),
        u.length === 0 && /* @__PURE__ */ g.jsx("p", { children: "Drag and drop here to start" }),
        l && /* @__PURE__ */ g.jsx(Rr, {})
      ]
    }
  );
};
function oi({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(ft, { children: /* @__PURE__ */ g.jsx(pn, { ...i, children: /* @__PURE__ */ g.jsx(hn, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(gn, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(An, {}) }) }) }) });
}
const xt = Le({});
function Bn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(xt.Provider, { value: r, children: e });
}
const be = () => $e(xt), mt = Le({}), kn = ({ children: e }) => {
  const r = q(fe(!1)), t = q(fe(!1)), n = q(fe(0)), i = q(fe(0)), o = q(fe(0)), c = q(fe(0)), u = de(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: o.current,
    observableTop: c.current
  }), []), d = N((l) => {
    ve(c.current, (p) => p !== l.top ? l.top : p), ve(o.current, (p) => p !== l.left ? l.left : p), ve(i.current, (p) => p !== l.width ? l.width : p), ve(n.current, (p) => p !== l.height ? l.height : p), ve(t.current, (p) => p !== l.isVisible ? l.isVisible : p), ve(r.current, (p) => p !== !!l.isHorizontal ? !!l.isHorizontal : p);
  }, []), f = N(() => {
    d({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [d]);
  return /* @__PURE__ */ g.jsx(mt.Provider, { value: { showInsertBar: d, hideInsertBar: f, observables: u }, children: e });
}, Me = () => $e(mt), Vn = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: o, observableWidth: c } = Me().observables, [u] = ke(o), [d] = ke(i), [f] = ke(c), [l] = ke(r), [p] = ke(n), [O] = ke(t), s = de(() => ({
    width: O ? f : 4,
    height: O ? 4 : l,
    top: u - (O ? 2 : 0),
    left: d - (O ? 0 : 2)
  }), [l, O, d, u, f]);
  return p ? /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "animate-pulse",
      style: {
        zIndex: 10,
        borderRadius: 5,
        top: s.top,
        position: "fixed",
        left: s.left,
        width: s.width,
        pointerEvents: "none",
        height: s.height,
        backgroundColor: e
      }
    }
  ) : null;
}, Ot = Le({}), Ln = ({ children: e, id: r, onSelect: t }) => {
  const n = q({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    parents: fe(void 0),
    element: fe(void 0),
    onSelect: t,
    id: r
  });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(Ot.Provider, { value: n.current, children: e });
};
var wt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Zr = Oe.createContext && /* @__PURE__ */ Oe.createContext(wt), $n = ["attr", "size", "title"];
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
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, nr.apply(this, arguments);
}
function Qr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function or(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Qr(Object(t), !0).forEach(function(n) {
      zn(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qr(Object(t)).forEach(function(n) {
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
function St(e) {
  return e && e.map((r, t) => /* @__PURE__ */ Oe.createElement(r.tag, or({
    key: t
  }, r.attr), St(r.child)));
}
function sr(e) {
  return (r) => /* @__PURE__ */ Oe.createElement(Yn, nr({
    attr: or({}, e.attr)
  }, r), St(e.child));
}
function Yn(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, c = Fn(e, $n), u = i || t.size || "1em", d;
    return t.className && (d = t.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ Oe.createElement("svg", nr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, c, {
      className: d,
      style: or(or({
        color: e.color || t.color
      }, t.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Oe.createElement("title", null, o), e.children);
  };
  return Zr !== void 0 ? /* @__PURE__ */ Oe.createElement(Zr.Consumer, null, (t) => r(t)) : r(wt);
}
function Nn(e) {
  return sr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function qn(e) {
  return sr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function Gn(e) {
  return sr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function Kn(e) {
  return sr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const Jn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, Qe = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function Xn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Ct(e) {
  return bn.camel(Xn(e));
}
const et = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((u) => e.draggingId === u.id.value)), Zn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, u = e.y - i.y, d = u >= 0 && u <= o, f = u >= i.height - o && u <= i.height, l = u >= o && u <= i.height - o, p = c >= 0 && c <= o, O = c >= i.width - o && c <= i.width, s = c >= o && c <= i.width - o;
  let v = !1, y = !1, b = !1, C = !1;
  if (n) {
    const S = f || O || d || p;
    v = s && l && !S, y = s && l && !S, b = f || O, C = d || p;
  } else
    b = (f || O) && !d, C = (d || p) && !f;
  return { isOverCurrentStart: v, isOverCurrentEnd: y, isOverEnd: b, isOverStart: C };
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = i ? 5 : n.height / 2, c = e.x - n.x, u = e.y - n.y, d = u >= n.height - o && u <= n.height, f = u >= o && u <= n.height - o, l = c >= 0 && c <= o, p = c >= n.width - o && c <= n.width, O = c >= o && c <= n.width - o;
  let s = !0, v = n.top, y = n.left, b = n.width, C = n.height;
  return d && (l || p || O) ? v = n.top + n.height : f && l ? s = !1 : f && p ? (y = n.left + n.width, s = !1) : O && f && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: s,
    left: y,
    width: b,
    height: C
  };
}, Ge = () => vt(), De = () => {
  const e = $e(Ot), r = N((o) => {
    e.onSelect(o);
  }, [e.id]), t = N((o, c, u) => {
    ve(e.getPosition, () => u), ve(e.parents, c), ve(e.element, o);
  }, [e.getPosition]), n = N((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = N((o, c) => {
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
}, eo = ir(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const u = q(null), d = de(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const f = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - f;
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
}), ro = ir(() => {
  const e = q(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = be(), { hideInsertBar: o } = Me(), {
    select: c,
    selectedId: u,
    selectedElement: d,
    selectBarGetPosition: f,
    selectedElementParents: l,
    selectBarDocumentVerticalScroll: p,
    selectBarDocumentHorizontalScroll: O
  } = De(), s = F(l), v = F(d), y = F(u), b = pe(({ get: j }) => v ? j(v.name) : "", [v]), { width: C, height: S, top: E, left: x } = pe(({ get: j }) => {
    const Y = j(O), B = j(p), I = j(f);
    return I ? {
      width: I().width,
      height: I().height,
      top: I().top - B,
      left: I().left - Y
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [O, p, f]), h = N((j) => {
    j.stopPropagation();
    const Y = s == null ? void 0 : s.slice(-1).at(0);
    if (Y)
      if (Y.type.value === "slot-content") {
        const B = s == null ? void 0 : s.find((I) => {
          var U;
          return I.type.value !== "component" ? !1 : (U = I.slots.value) == null ? void 0 : U.some((re) => re.id.value === Y.id.value);
        });
        c(B == null ? void 0 : B.id.value);
      } else
        c(Y.id.value);
  }, [c, s]), M = N(() => {
    v && i(v);
  }, [i, v]), A = N(() => {
    v && n(v);
  }, [n, v]), { preview: R, isDragging: T } = _e({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      o(), t();
    },
    canDrag: !!v && Array.isArray(s),
    data: {
      element: v,
      parents: s
    }
  }, [y, v, s, o, r, t]);
  return se(() => {
    R(
      () => Qe(b),
      (j) => j.remove()
    );
  }, [R, b]), !y || C === 0 && S === 0 && x === 0 && E === 0 ? null : /* @__PURE__ */ g.jsx(
    eo,
    {
      zIndex: 1,
      top: E - 1,
      width: C,
      height: S,
      left: x - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        b,
        !T && /* @__PURE__ */ g.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          s && s.length > 0 && /* @__PURE__ */ g.jsx(Nn, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(Kn, { title: "Remove element", onClick: M, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(qn, { title: "Duplicate element and children", onClick: A, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ g.jsx(Gn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), Et = Le({}), to = ({ children: e, id: r, onHover: t }) => {
  const n = q({
    documentHorizontalScroll: fe(0),
    playgroundSize: fe(void 0),
    documentVerticalScroll: fe(0),
    getPosition: fe(void 0),
    element: fe(void 0),
    onHover: t,
    id: r
  });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(Et.Provider, { value: n.current, children: e });
}, Pe = () => {
  const e = $e(Et), r = N((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), t = N((o, c) => {
    ve(e.getPosition, () => c), ve(e.element, o);
  }, [e.getPosition]), n = N((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = N((o, c) => {
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
}, no = ir(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const u = q(null), d = de(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const f = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - f;
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
}), oo = ir(() => {
  const { selectedId: e } = De(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: o
  } = Pe(), c = F(o), u = F(i), d = F(n), f = F(t), l = F(e), p = F(r), O = pe(({ get: C }) => f ? C(f.name) : "", [f]), { width: s, height: v, top: y, left: b } = de(() => d ? {
    width: d().width,
    height: d().height,
    top: d().top - u,
    left: d().left - c
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [c, u, d]);
  return !p || p === l || s === 0 && v === 0 && b === 0 && y === 0 ? null : /* @__PURE__ */ g.jsx(
    no,
    {
      zIndex: 1,
      top: y - 1,
      width: s,
      left: b - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ g.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: O })
    }
  );
});
var ur = {}, er = {}, _r = { exports: {} }, tr = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function io() {
  if (rt)
    return ne;
  rt = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var M = h.$$typeof;
      switch (M) {
        case r:
          switch (h = h.type, h) {
            case d:
            case f:
            case n:
            case o:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case l:
                case v:
                case s:
                case c:
                  return h;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  function x(h) {
    return E(h) === f;
  }
  return ne.AsyncMode = d, ne.ConcurrentMode = f, ne.ContextConsumer = u, ne.ContextProvider = c, ne.Element = r, ne.ForwardRef = l, ne.Fragment = n, ne.Lazy = v, ne.Memo = s, ne.Portal = t, ne.Profiler = o, ne.StrictMode = i, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return x(h) || E(h) === d;
  }, ne.isConcurrentMode = x, ne.isContextConsumer = function(h) {
    return E(h) === u;
  }, ne.isContextProvider = function(h) {
    return E(h) === c;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, ne.isForwardRef = function(h) {
    return E(h) === l;
  }, ne.isFragment = function(h) {
    return E(h) === n;
  }, ne.isLazy = function(h) {
    return E(h) === v;
  }, ne.isMemo = function(h) {
    return E(h) === s;
  }, ne.isPortal = function(h) {
    return E(h) === t;
  }, ne.isProfiler = function(h) {
    return E(h) === o;
  }, ne.isStrictMode = function(h) {
    return E(h) === i;
  }, ne.isSuspense = function(h) {
    return E(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === o || h === i || h === p || h === O || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === s || h.$$typeof === c || h.$$typeof === u || h.$$typeof === l || h.$$typeof === b || h.$$typeof === C || h.$$typeof === S || h.$$typeof === y);
  }, ne.typeOf = E, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function ao() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, s = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === f || D === o || D === i || D === p || D === O || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === s || D.$$typeof === c || D.$$typeof === u || D.$$typeof === l || D.$$typeof === b || D.$$typeof === C || D.$$typeof === S || D.$$typeof === y);
    }
    function x(D) {
      if (typeof D == "object" && D !== null) {
        var xe = D.$$typeof;
        switch (xe) {
          case r:
            var We = D.type;
            switch (We) {
              case d:
              case f:
              case n:
              case o:
              case i:
              case p:
                return We;
              default:
                var Ae = We && We.$$typeof;
                switch (Ae) {
                  case u:
                  case l:
                  case v:
                  case s:
                  case c:
                    return Ae;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var h = d, M = f, A = u, R = c, T = r, j = l, Y = n, B = v, I = s, U = t, re = o, ie = i, k = p, ee = !1;
    function ae(D) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(D) || x(D) === d;
    }
    function m(D) {
      return x(D) === f;
    }
    function _(D) {
      return x(D) === u;
    }
    function V(D) {
      return x(D) === c;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === r;
    }
    function $(D) {
      return x(D) === l;
    }
    function X(D) {
      return x(D) === n;
    }
    function z(D) {
      return x(D) === v;
    }
    function W(D) {
      return x(D) === s;
    }
    function G(D) {
      return x(D) === t;
    }
    function Q(D) {
      return x(D) === o;
    }
    function K(D) {
      return x(D) === i;
    }
    function he(D) {
      return x(D) === p;
    }
    oe.AsyncMode = h, oe.ConcurrentMode = M, oe.ContextConsumer = A, oe.ContextProvider = R, oe.Element = T, oe.ForwardRef = j, oe.Fragment = Y, oe.Lazy = B, oe.Memo = I, oe.Portal = U, oe.Profiler = re, oe.StrictMode = ie, oe.Suspense = k, oe.isAsyncMode = ae, oe.isConcurrentMode = m, oe.isContextConsumer = _, oe.isContextProvider = V, oe.isElement = H, oe.isForwardRef = $, oe.isFragment = X, oe.isLazy = z, oe.isMemo = W, oe.isPortal = G, oe.isProfiler = Q, oe.isStrictMode = K, oe.isSuspense = he, oe.isValidElementType = E, oe.typeOf = x;
  }()), oe;
}
var nt;
function Rt() {
  return nt || (nt = 1, process.env.NODE_ENV === "production" ? tr.exports = io() : tr.exports = ao()), tr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br, ot;
function co() {
  if (ot)
    return br;
  ot = 1;
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
      for (var c = {}, u = 0; u < 10; u++)
        c["_" + String.fromCharCode(u)] = u;
      var d = Object.getOwnPropertyNames(c).map(function(l) {
        return c[l];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        f[l] = l;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return br = i() ? Object.assign : function(o, c) {
    for (var u, d = n(o), f, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var p in u)
        r.call(u, p) && (d[p] = u[p]);
      if (e) {
        f = e(u);
        for (var O = 0; O < f.length; O++)
          t.call(u, f[O]) && (d[f[O]] = u[f[O]]);
      }
    }
    return d;
  }, br;
}
var xr, it;
function Tr() {
  if (it)
    return xr;
  it = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var mr, at;
function _t() {
  return at || (at = 1, mr = Function.call.bind(Object.prototype.hasOwnProperty)), mr;
}
var Or, ct;
function so() {
  if (ct)
    return Or;
  ct = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Tr(), t = {}, n = _t();
    e = function(o) {
      var c = "Warning: " + o;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function i(o, c, u, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (n(o, l)) {
          var p;
          try {
            if (typeof o[l] != "function") {
              var O = Error(
                (d || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            p = o[l](c, l, d, u, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var s = f ? f() : "";
            e(
              "Failed " + u + " type: " + p.message + (s ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Or = i, Or;
}
var wr, st;
function uo() {
  if (st)
    return wr;
  st = 1;
  var e = Rt(), r = co(), t = Tr(), n = _t(), i = so(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(u) {
    var d = "Warning: " + u;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return wr = function(u, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function p(m) {
      var _ = m && (f && m[f] || m[l]);
      if (typeof _ == "function")
        return _;
    }
    var O = "<<anonymous>>", s = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: S(),
      arrayOf: E,
      element: x(),
      elementType: h(),
      instanceOf: M,
      node: j(),
      objectOf: R,
      oneOf: A,
      oneOfType: T,
      shape: B,
      exact: I
    };
    function v(m, _) {
      return m === _ ? m !== 0 || 1 / m === 1 / _ : m !== m && _ !== _;
    }
    function y(m, _) {
      this.message = m, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function b(m) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, V = 0;
      function H(X, z, W, G, Q, K, he) {
        if (G = G || O, K = K || W, he !== t) {
          if (d) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = G + ":" + W;
            !_[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[xe] = !0, V++);
          }
        }
        return z[W] == null ? X ? z[W] === null ? new y("The " + Q + " `" + K + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new y("The " + Q + " `" + K + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : m(z, W, G, Q, K);
      }
      var $ = H.bind(null, !1);
      return $.isRequired = H.bind(null, !0), $;
    }
    function C(m) {
      function _(V, H, $, X, z, W) {
        var G = V[H], Q = ie(G);
        if (Q !== m) {
          var K = k(G);
          return new y(
            "Invalid " + X + " `" + z + "` of type " + ("`" + K + "` supplied to `" + $ + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return b(_);
    }
    function S() {
      return b(c);
    }
    function E(m) {
      function _(V, H, $, X, z) {
        if (typeof m != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var W = V[H];
        if (!Array.isArray(W)) {
          var G = ie(W);
          return new y("Invalid " + X + " `" + z + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var Q = 0; Q < W.length; Q++) {
          var K = m(W, Q, $, X, z + "[" + Q + "]", t);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return b(_);
    }
    function x() {
      function m(_, V, H, $, X) {
        var z = _[V];
        if (!u(z)) {
          var W = ie(z);
          return new y("Invalid " + $ + " `" + X + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(m);
    }
    function h() {
      function m(_, V, H, $, X) {
        var z = _[V];
        if (!e.isValidElementType(z)) {
          var W = ie(z);
          return new y("Invalid " + $ + " `" + X + "` of type " + ("`" + W + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(m);
    }
    function M(m) {
      function _(V, H, $, X, z) {
        if (!(V[H] instanceof m)) {
          var W = m.name || O, G = ae(V[H]);
          return new y("Invalid " + X + " `" + z + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return b(_);
    }
    function A(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function _(V, H, $, X, z) {
        for (var W = V[H], G = 0; G < m.length; G++)
          if (v(W, m[G]))
            return null;
        var Q = JSON.stringify(m, function(he, D) {
          var xe = k(D);
          return xe === "symbol" ? String(D) : D;
        });
        return new y("Invalid " + X + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + $ + "`, expected one of " + Q + "."));
      }
      return b(_);
    }
    function R(m) {
      function _(V, H, $, X, z) {
        if (typeof m != "function")
          return new y("Property `" + z + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var W = V[H], G = ie(W);
        if (G !== "object")
          return new y("Invalid " + X + " `" + z + "` of type " + ("`" + G + "` supplied to `" + $ + "`, expected an object."));
        for (var Q in W)
          if (n(W, Q)) {
            var K = m(W, Q, $, X, z + "." + Q, t);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return b(_);
    }
    function T(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var _ = 0; _ < m.length; _++) {
        var V = m[_];
        if (typeof V != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(V) + " at index " + _ + "."
          ), c;
      }
      function H($, X, z, W, G) {
        for (var Q = [], K = 0; K < m.length; K++) {
          var he = m[K], D = he($, X, z, W, G, t);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && Q.push(D.data.expectedType);
        }
        var xe = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new y("Invalid " + W + " `" + G + "` supplied to " + ("`" + z + "`" + xe + "."));
      }
      return b(H);
    }
    function j() {
      function m(_, V, H, $, X) {
        return U(_[V]) ? null : new y("Invalid " + $ + " `" + X + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return b(m);
    }
    function Y(m, _, V, H, $) {
      return new y(
        (m || "React class") + ": " + _ + " type `" + V + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function B(m) {
      function _(V, H, $, X, z) {
        var W = V[H], G = ie(W);
        if (G !== "object")
          return new y("Invalid " + X + " `" + z + "` of type `" + G + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var Q in m) {
          var K = m[Q];
          if (typeof K != "function")
            return Y($, X, z, Q, k(K));
          var he = K(W, Q, $, X, z + "." + Q, t);
          if (he)
            return he;
        }
        return null;
      }
      return b(_);
    }
    function I(m) {
      function _(V, H, $, X, z) {
        var W = V[H], G = ie(W);
        if (G !== "object")
          return new y("Invalid " + X + " `" + z + "` of type `" + G + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var Q = r({}, V[H], m);
        for (var K in Q) {
          var he = m[K];
          if (n(m, K) && typeof he != "function")
            return Y($, X, z, K, k(he));
          if (!he)
            return new y(
              "Invalid " + X + " `" + z + "` key `" + K + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(V[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var D = he(W, K, $, X, z + "." + K, t);
          if (D)
            return D;
        }
        return null;
      }
      return b(_);
    }
    function U(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(U);
          if (m === null || u(m))
            return !0;
          var _ = p(m);
          if (_) {
            var V = _.call(m), H;
            if (_ !== m.entries) {
              for (; !(H = V.next()).done; )
                if (!U(H.value))
                  return !1;
            } else
              for (; !(H = V.next()).done; ) {
                var $ = H.value;
                if ($ && !U($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(m, _) {
      return m === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ie(m) {
      var _ = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : re(_, m) ? "symbol" : _;
    }
    function k(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var _ = ie(m);
      if (_ === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ee(m) {
      var _ = k(m);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function ae(m) {
      return !m.constructor || !m.constructor.name ? O : m.constructor.name;
    }
    return s.checkPropTypes = i, s.resetWarningCache = i.resetWarningCache, s.PropTypes = s, s;
  }, wr;
}
var Sr, ut;
function lo() {
  if (ut)
    return Sr;
  ut = 1;
  var e = Tr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Sr = function() {
    function n(c, u, d, f, l, p) {
      if (p !== e) {
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
  var fo = Rt(), vo = !0;
  _r.exports = uo()(fo.isElement, vo);
} else
  _r.exports = lo()();
var Dt = _r.exports, Se = {};
Object.defineProperty(Se, "__esModule", {
  value: !0
});
Se.FrameContextConsumer = Se.FrameContextProvider = Se.useFrame = Se.FrameContext = void 0;
var po = Oe, Pt = ho(po);
function ho(e) {
  return e && e.__esModule ? e : { default: e };
}
var jt = void 0, Tt = void 0;
typeof document < "u" && (jt = document);
typeof window < "u" && (Tt = window);
var Ir = Se.FrameContext = Pt.default.createContext({ document: jt, window: Tt });
Se.useFrame = function() {
  return Pt.default.useContext(Ir);
};
var go = Ir.Provider, yo = Ir.Consumer;
Se.FrameContextProvider = go;
Se.FrameContextConsumer = yo;
var Mr = {};
Object.defineProperty(Mr, "__esModule", {
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
}(), Dr = Oe;
It(Dr);
var xo = Dt, Cr = It(xo);
function It(e) {
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
function wo(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Mt = function(e) {
  wo(r, e);
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
      return Dr.Children.only(this.props.children);
    }
  }]), r;
}(Dr.Component);
Mt.propTypes = {
  children: Cr.default.element.isRequired,
  contentDidMount: Cr.default.func.isRequired,
  contentDidUpdate: Cr.default.func.isRequired
};
Mr.default = Mt;
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.Frame = void 0;
var Pr = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }
  return e;
}, So = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), At = Oe, Ve = lr(At), Co = un, lt = lr(Co), Eo = Dt, Re = lr(Eo), Ro = Se, _o = Mr, Do = lr(_o);
function lr(e) {
  return e && e.__esModule ? e : { default: e };
}
function Po(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function jo(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function To(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Ar = er.Frame = function(e) {
  To(r, e);
  function r(t, n) {
    Po(this, r);
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
    }, i._isMounted = !1, i.nodeRef = Ve.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return So(r, [{
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
      var i = this.props.contentDidMount, o = this.props.contentDidUpdate, c = n.defaultView || n.parentView, u = Ve.default.createElement(
        Do.default,
        {
          contentDidMount: i,
          contentDidUpdate: o
        },
        Ve.default.createElement(
          Ro.FrameContextProvider,
          { value: { document: n, window: c } },
          Ve.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), d = this.getMountTarget();
      return d ? [lt.default.createPortal(this.props.head, this.getDoc().head), lt.default.createPortal(u, d)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = Pr({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, Ve.default.createElement(
        "iframe",
        Pr({}, n, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), r;
}(At.Component);
Ar.propTypes = {
  style: Re.default.object,
  // eslint-disable-line
  head: Re.default.node,
  initialContent: Re.default.string,
  mountTarget: Re.default.string,
  contentDidMount: Re.default.func,
  contentDidUpdate: Re.default.func,
  children: Re.default.oneOfType([Re.default.element, Re.default.arrayOf(Re.default.element)])
};
Ar.defaultProps = {
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
er.default = Ve.default.forwardRef(function(e, r) {
  return Ve.default.createElement(Ar, Pr({}, e, { forwardedRef: r }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = er;
  Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return n(r).default;
    }
  });
  var t = Se;
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
})(ur);
const Io = /* @__PURE__ */ dn(ur), Mo = ({ children: e, onScroll: r, onRef: t, onKeyDown: n, onClick: i }) => {
  const { document: o } = ur.useFrame();
  return se(() => {
    o && t(o);
  }, [t, o]), se(() => {
    o && (o.onclick = i, o.onkeydown = n, o.onscroll = (c) => r(c.target.documentElement.scrollTop, c.target.documentElement.scrollLeft));
  }, [o, r, n, i]), e;
}, Ao = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = F(
    de(() => jr(({ get: c }) => c(r).map((u) => ({
      id: c(u.id),
      content: c(u.content)
    }))), [r])
  ), o = de(() => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    i.map((c) => dt("style", { key: c.id }, c.content)),
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
}, Bo = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), dr = (e, r) => pe(({ get: n }) => {
  const i = [...r].reverse();
  let o;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    if (n(u.type) === "slot-content" && (o = !1), n(u.type) === "component")
      if (o === !1)
        o = void 0;
      else
        return !0;
  }
  return !!o;
}, [r, e]), ko = ({ element: e }) => {
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
    const u = o(r);
    return c === u;
  }, [...n]);
  se(() => {
    i && t();
  }, [i]);
}, Vo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: o }) => {
  const c = q(null), { selectedId: u } = De(), { hoveredId: d } = Pe(), f = F(e.name);
  return Ee({
    value: d,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [d, e]), Ee({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [u, e]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (l) => o(l, e),
      onMouseOver: (l) => i(l, e, c.current),
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
}, Lo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: u, onHoverBar: d, onSelectBar: f, onDoubleClick: l }) => {
  const p = q(null), { onDragStart: O, onDragEnd: s, components: v } = be(), { hideInsertBar: y } = Me(), { selectedId: b } = De(), { hoveredId: C } = Pe(), S = F(e.name), E = F(e.id), x = pe(({ get: T }) => {
    const j = T(v).find((Y) => T(Y.id) === T(e.referenceComponentId));
    return j ? T(j.content) : [];
  }, [v, e]);
  Ee({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, p.current)
  }, [C, e]), Ee({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, p.current)
  }, [b, e]);
  const h = de(() => !x || x.length === 0 ? null : x.map((T) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: T,
      parents: [...r, e]
    },
    T.id.value
  )), [x, r, e]), { isDragging: M, preview: A } = _e({
    id: E,
    element: p,
    data: { element: e, parents: r },
    start: () => {
      O();
    },
    end: () => {
      y(), s();
    }
  }, [E, e, r, y, O, s]);
  se(() => {
    A(
      () => Qe(S),
      (T) => T.remove()
    );
  }, [A, S]);
  const R = q({ id: Ge() });
  return we({
    element: p,
    id: R.current.id,
    drop: (T, j) => u(T, j, e, r, p, R.current.id),
    hover: (T, j) => c(T, j, e, r, p, R.current.id),
    leave: (T, j) => o(T, j, e, r, p, R.current.id)
  }, [e, r, u, c, o]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: p,
      onMouseLeave: n,
      onClick: (T) => i(T, e),
      onDoubleClick: (T) => l(T, e),
      onMouseOver: (T) => t(T, e, p.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: M ? 0.5 : void 0 },
      children: h
    }
  );
}, $o = ({ element: e, parents: r }) => {
  const { components: t } = be(), n = pe(({ get: i }) => {
    const o = i(t).find((c) => i(c.id) === i(e.referenceComponentId));
    return o ? i(o.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, Fo = ({ element: e, parents: r, ...t }) => {
  const n = Bo(e, r), i = dr(e, r);
  return n ? i ? /* @__PURE__ */ g.jsx(ko, { element: e }) : /* @__PURE__ */ g.jsx(
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
    Lo,
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
}, Bt = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => jr(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((c) => {
      const u = n(c.name), d = n(c.value);
      u && (o[Ct(u)] = r(d, u, "style", e));
    }), o;
  }), [e, r, e]);
  return F(t);
}, kt = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => jr({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, c = {};
      return i.forEach((u) => {
        const d = n(u.name);
        if (d === void 0 || d === "hidden" || d === "style")
          return;
        const f = r(n(u.value), d, "attribute", e), l = Ct(d);
        switch (l) {
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
              o[l] = f;
            break;
        }
      }), [o, c];
    }
  }), [e, r]);
  return F(t);
}, Vt = sn(({ tag: e, ...r }, t) => dt(e, { ref: t, ...r })), Ho = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: u, onHoverBar: d, onSelectBar: f }) => {
  const l = q(null), [p, O] = je(!1), [
    s
    /* elementSpecialProps */
  ] = kt(e), v = F(e.children), y = Bt(e), b = F(e.name), C = F(e.tag), S = F(e.id), { onDragStart: E, onDragEnd: x } = be(), { hideInsertBar: h } = Me(), { selectedId: M } = De(), { hoveredId: A } = Pe();
  Ee({
    value: A,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [A, e]), Ee({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [M, e]), se(() => {
    O((U) => A.value === S === U ? U : !U);
    const I = A.subscribe((U) => {
      O((re) => U === S === re ? re : !re);
    });
    return () => I.unsubscribe();
  }, [S, A]);
  const R = de(() => !v || v.length === 0 ? null : v.map((I) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: I,
      parents: [...r, e]
    },
    I.id.value
  )), [v, r, e]), T = de(() => v !== void 0, [v]), { isDragging: j, preview: Y } = _e({
    id: S,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), x();
    }
  }, [S, e, r, h, E, x]);
  se(() => {
    Y(
      () => Qe(b),
      (I) => I.remove()
    );
  }, [Y, b]);
  const B = q({ id: Ge() });
  return we({
    element: l,
    id: B.current.id,
    drop: (I, U) => u(I, U, e, r, l, B.current.id),
    hover: (I, U) => c(I, U, e, r, l, B.current.id),
    leave: (I, U) => o(I, U, e, r, l, B.current.id)
  }, [e, r, u, c, o]), /* @__PURE__ */ g.jsx(
    Vt,
    {
      readOnly: !0,
      tag: C,
      ref: l,
      children: R,
      onMouseLeave: n,
      onClick: (I) => i(I, e),
      onMouseOver: (I) => t(I, e, l.current),
      ...s !== void 0 ? { ...s, ...p ? { disabled: !1 } : {} } : {},
      style: {
        ...y,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: j ? 0.5 : typeof y.opacity == "number" ? Number(y.opacity) : void 0,
        minWidth: R === null && T ? 40 : typeof y.minWidth == "number" ? Number(y.minWidth) : void 0,
        minHeight: R === null && T ? 40 : typeof y.minHeight == "number" ? Number(y.minHeight) : void 0
      }
    }
  );
}, zo = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = kt(e), n = F(e.children), i = Bt(e), o = F(e.tag), c = de(() => !n || n.length === 0 ? null : n.map((u) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: u,
      parents: [...r, e]
    },
    u.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ g.jsx(
    Vt,
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
}, Wo = ({ element: e, parents: r, ...t }) => dr(e, r) ? /* @__PURE__ */ g.jsx(
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
      var O;
      if (n(f.type) !== "component")
        return !1;
      const l = f;
      return n(e.componentId) === n(l.referenceComponentId) ? (O = n(l.slots)) == null ? void 0 : O.some((s) => n(s.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, l) => f !== void 0 ? f : n(l.type) === "slot-content" ? !1 : n(l.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, Lt = (e, r) => {
  const { onAddSlotContent: t } = be();
  return pe(({ get: n }) => {
    var c;
    const i = [...r].reverse().filter((u) => n(u.type) === "component").find((u) => n(u.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const o = (c = n(i.slots)) == null ? void 0 : c.find((u) => n(u.referenceSlotId) === n(e.id));
    return o ? [n(o.children), o] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, Yo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: o, onDrop: c, onHoverBar: u }) => {
  const d = q(null), [f = [], l] = Lt(e, r), { hoveredId: p } = Pe();
  Ee({
    value: p,
    matchWidthValue: l == null ? void 0 : l.id,
    effect() {
      l && u(e, d.current);
    }
  }, [p, l == null ? void 0 : l.id, e]);
  const O = q({ id: Ge() });
  return we({
    element: d,
    id: O.current.id,
    drop: (s, v) => l ? c(s, v, l, r, d, O.current.id) : void 0,
    hover: (s, v) => l ? o(s, v, l, r, d, O.current.id) : void 0,
    leave: (s, v) => l ? i(s, v, l, r, d, O.current.id) : void 0
  }, [l, r, c, o, i]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (s) => l ? t(s, l, d.current) : void 0,
      children: [
        l && f.length > 0 && f.map((s) => /* @__PURE__ */ g.jsx(
          ze,
          {
            element: s,
            parents: [...r, l]
          },
          s.id.value
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
}, No = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: u, onHoverBar: d, onSelectBar: f }) => {
  const l = q(null), { onDragStart: p, onDragEnd: O } = be(), { hideInsertBar: s } = Me(), { selectedId: v } = De(), { hoveredId: y } = Pe(), b = F(e.name), C = F(e.id);
  Ee({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [y, e]), Ee({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [v, e]);
  const { isDragging: S, preview: E } = _e({
    id: C,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      p();
    },
    end: () => {
      s(), O();
    }
  }, [C, e, r, s, p, O]);
  se(() => {
    E(
      () => Qe(b),
      (h) => h.remove()
    );
  }, [E, b]);
  const x = q({ id: Ge() });
  return we({
    element: l,
    id: x.current.id,
    drop: (h, M) => u(h, M, e, r, l, x.current.id),
    hover: (h, M) => c(h, M, e, r, l, x.current.id),
    leave: (h, M) => o(h, M, e, r, l, x.current.id)
  }, [e, r, u, c, o]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: n,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => t(h, e, l.current),
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
        opacity: S ? 0.5 : void 0
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
    ze,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, Go = ({ element: e, parents: r, ...t }) => {
  const n = dr(e, r);
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
}, Ko = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: u, onHoverBar: d, onSelectBar: f }) => {
  const l = q(null), { window: p, document: O } = ur.useFrame(), [s, v] = ke(e.text), y = F(e.name), b = F(e.id), { onExpressionToValue: C, onValueToExpression: S } = be(), { onDragStart: E, onDragEnd: x } = be(), { hideInsertBar: h } = Me(), { selectedId: M } = De(), { hoveredId: A } = Pe(), [R, T] = je(!1);
  se(() => {
    !l.current || !R || (l.current.focus(), f(e, null));
  }, [R, f]), Ee({
    value: A,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [A, e]), Ee({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [M, e]);
  const { isDragging: j, preview: Y } = _e({
    id: b,
    canDrag: !R,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), x();
    }
  }, [b, R, e, r, h, E, x]);
  se(() => {
    Y(
      () => Qe(y),
      (k) => k.remove()
    );
  }, [Y, y]);
  const B = q({ id: Ge() });
  we({
    element: l,
    id: B.current.id,
    drop: (k, ee) => u(k, ee, e, r, l, B.current.id),
    hover: (k, ee) => c(k, ee, e, r, l, B.current.id),
    leave: (k, ee) => o(k, ee, e, r, l, B.current.id)
  }, [e, r, u, c, o]);
  const I = N((k) => {
    if (!p || !O)
      return;
    const ee = p.getSelection();
    if (!ee)
      return;
    const ae = O.createRange(), m = k.currentTarget;
    ae.selectNodeContents(m), ee.removeAllRanges(), ee.addRange(ae);
  }, [p, O]), U = N((k) => {
    k.stopPropagation(), (k.code === "Escape" || k.code === "Enter" || k.code === "NumpadEnter") && (k.currentTarget.blur(), f(e, k.currentTarget));
  }, [f, e]), re = N((k) => {
    T(!1), v(String(S(k.currentTarget.innerText, "text", "textContent", e))), f(e, k.currentTarget);
  }, [f, S, e]), ie = de(() => C(s, "text", "textContent", e) ?? "", [s, C, e]);
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      contentEditable: R,
      dangerouslySetInnerHTML: { __html: ie },
      onBlur: re,
      onFocus: I,
      onKeyDown: U,
      onDoubleClick: () => T(!0),
      ref: l,
      onMouseLeave: n,
      onClick: (k) => R ? k.stopPropagation() : i(k, e),
      onMouseOver: (k) => R ? k.stopPropagation() : t(k, e, l.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: j ? 0.5 : void 0,
        borderRadius: R ? 4 : void 0,
        boxShadow: R ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, Jo = ({ element: e }) => {
  const { onExpressionToValue: r } = be(), t = F(e.text);
  return de(() => r(t, "text", "textContent", e), [t, r, e]);
}, Xo = ({ element: e, parents: r, ...t }) => dr(e, r) ? /* @__PURE__ */ g.jsx(
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
), ze = ({ element: e, parents: r }) => {
  const t = F(e.type), { showInsertBar: n, hideInsertBar: i } = Me(), { select: o, updateSelectBar: c } = De(), { hover: u, updateHoverBar: d } = Pe(), { onDrop: f, value: l } = be(), p = N((E, x) => {
    E.stopPropagation(), E.preventDefault(), o(x.id.value);
  }, [o]), O = N((E) => {
    E.stopPropagation(), E.preventDefault(), o(void 0), u(void 0);
  }, [o, u]), s = N((E, x) => {
    E.stopPropagation(), u(x.id.value);
  }, [u]), v = N((E) => {
    E.stopPropagation(), u(void 0);
  }, [u]), y = N((E, x) => {
    d(E, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [d]), b = N((E, x) => {
    c(E, r, () => ({
      top: (x == null ? void 0 : x.offsetTop) || 0,
      left: (x == null ? void 0 : x.offsetLeft) || 0,
      width: (x == null ? void 0 : x.getBoundingClientRect().width) || 0,
      height: (x == null ? void 0 : x.getBoundingClientRect().height) || 0
    }));
  }, [c, r]), C = N((E, x, h, M, A, R) => {
    if (!et(x, h, M, A, R))
      return u(void 0);
    u(h.id.value);
    const j = Qn(x, h, A);
    if (!j)
      return i();
    n({
      isVisible: !0,
      top: j.top,
      left: j.left,
      width: j.width,
      height: j.height,
      isHorizontal: j.isHorizontal
    });
  }, [n, u, i]), S = N((E, x, h, M, A, R) => {
    var B, I, U, re, ie, k;
    if (!et(x, h, M, A, R))
      return;
    const j = Zn(x, h, A);
    if (!j)
      return;
    const Y = j.isOverStart || j.isOverEnd;
    if (!(!Y && h.type.value === "component")) {
      if (Object.keys(E).includes("id")) {
        const ee = E;
        if (Y) {
          const ae = M.slice(-1).at(0), m = ((B = (ae ? ae.children : l).value) == null ? void 0 : B.findIndex((_) => _.id.value === h.id.value)) ?? -1;
          f({
            element: ee.id,
            from: { position: -1, element: null },
            to: {
              element: ae || "root",
              position: j.isOverStart ? m : m + 1
            }
          });
        } else {
          const ae = ((I = h.children.value) == null ? void 0 : I.length) || -1;
          f({
            element: ee.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: j.isOverStart ? ae : ae + 1
            }
          });
        }
      } else {
        const ee = E, ae = (U = ee.parents) == null ? void 0 : U.slice(-1).at(0), m = ae || "root";
        if (m !== "root" && m.type.value === "component")
          return;
        const _ = ((re = (m === "root" ? l : m.children).value) == null ? void 0 : re.findIndex((V) => V.id.value === ee.element.id.value)) ?? -1;
        if (Y) {
          const V = M.slice(-1).at(0), H = ((ie = (V ? V.children : l).value) == null ? void 0 : ie.findIndex(($) => $.id.value === h.id.value)) ?? -1;
          f({
            element: ee.element,
            from: {
              position: _,
              element: m
            },
            to: {
              element: V || "root",
              position: j.isOverStart ? H : H + 1
            }
          });
        } else {
          const V = ((k = h.children.value) == null ? void 0 : k.length) || -1;
          f({
            element: ee.element,
            from: {
              position: _,
              element: m
            },
            to: {
              element: h,
              position: j.isOverStart ? V : V + 1
            }
          });
        }
        o(ee.element.id.value);
      }
      i();
    }
  }, [o, f, i]);
  return t === "component" ? /* @__PURE__ */ g.jsx(
    Fo,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: C,
      onDragLeave: () => {
      },
      onDoubleClick: O,
      onSelect: p,
      onMouseOver: s,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : t === "slot" ? /* @__PURE__ */ g.jsx(
    Go,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: C,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: s,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : t === "text" ? /* @__PURE__ */ g.jsx(
    Xo,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: C,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: s,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: b
    }
  ) : /* @__PURE__ */ g.jsx(
    Wo,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: C,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: s,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: b
    }
  );
}, Zo = () => {
  const e = q({ id: Ge() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = be(), { updateSelectBarScroll: o, select: c } = De(), { showInsertBar: u, hideInsertBar: d } = Me(), { updateHoverBarScroll: f, hover: l } = Pe(), [p, O] = je(null), s = F(r), v = N((x, h) => {
    var M;
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
        const A = x, R = Jn(A.parents || []), T = R || "root", j = ((M = R == null ? void 0 : R.children.value) == null ? void 0 : M.findIndex((Y) => Y.id.value === A.element.id.value)) ?? -1;
        n({
          element: A.element,
          from: {
            element: T,
            position: j
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), c(A.element.id.value);
      }
  }, [r, c, d]), y = N((x, h) => {
    const M = p == null ? void 0 : p.lastElementChild;
    if (!M)
      return;
    const A = M.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: A.left,
      width: A.width,
      height: A.height,
      top: M ? A.top + A.height : A.top
    });
  }, [p == null ? void 0 : p.lastElementChild, u]), b = N((x, h) => {
    o(x, h), f(x, h);
  }, [o, f]), C = N((x) => {
    x.stopPropagation(), c(void 0);
  }, [c]), [{ isDraggingOver: S, isDraggingOverCurrent: E }] = we({
    drop: v,
    hover: y,
    id: e.current.id,
    element: { current: p },
    leave: () => {
      d(), l(void 0);
    }
  }, [v, y, d]);
  return /* @__PURE__ */ g.jsx(
    Ao,
    {
      styles: t,
      resetBody: !0,
      draggingHover: S || E,
      children: /* @__PURE__ */ g.jsxs(
        Mo,
        {
          onClick: C,
          onKeyDown: i,
          onScroll: b,
          onRef: O,
          children: [
            /* @__PURE__ */ g.jsx(Vn, {}),
            /* @__PURE__ */ g.jsx(oo, {}),
            /* @__PURE__ */ g.jsx(ro, {}),
            s.map((x) => /* @__PURE__ */ g.jsx(
              ze,
              {
                parents: [],
                element: x
              },
              x.id.value
            )),
            s.length === 0 && /* @__PURE__ */ g.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ g.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function ii({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(ft, { children: /* @__PURE__ */ g.jsx(Bn, { ...i, children: /* @__PURE__ */ g.jsx(kn, { children: /* @__PURE__ */ g.jsx(Ln, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(to, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(Zo, {}) }) }) }) }) });
}
export {
  ii as UIEditor,
  oi as UiOverview
};
//# sourceMappingURL=index.es.js.map

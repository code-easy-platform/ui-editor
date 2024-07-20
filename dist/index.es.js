import Se, { createContext as $e, useContext as Fe, useRef as N, useEffect as se, useCallback as W, useState as _e, useMemo as fe, memo as ir, createElement as dt, forwardRef as sn } from "react";
import { useDrag as De, useDrop as we, DragAndDropProvider as ft } from "react-use-drag-and-drop";
import { useSelectorValue as ge, useObserverValue as H, observe as de, set as ve, useObserver as ke, selector as jr } from "react-observing";
import { v4 as vt } from "uuid";
import un from "react-dom";
var ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Or = { exports: {} }, Xe = {};
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
  var e = Se, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, l, f) {
    var d, p = {}, S = null, u = null;
    f !== void 0 && (S = "" + f), l.key !== void 0 && (S = "" + l.key), l.ref !== void 0 && (u = l.ref);
    for (d in l)
      n.call(l, d) && !o.hasOwnProperty(d) && (p[d] = l[d]);
    if (s && s.defaultProps)
      for (d in l = s.defaultProps, l)
        p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: r, type: s, key: S, ref: u, props: p, _owner: i.current };
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
    var e = Se, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function x(a) {
      if (a === null || typeof a != "object")
        return null;
      var w = v && a[v] || a[y];
      return typeof w == "function" ? w : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(a) {
      {
        for (var w = arguments.length, P = new Array(w > 1 ? w - 1 : 0), $ = 1; $ < w; $++)
          P[$ - 1] = arguments[$];
        O("error", a, P);
      }
    }
    function O(a, w, P) {
      {
        var $ = E.ReactDebugCurrentFrame, te = $.getStackAddendum();
        te !== "" && (w += "%s", P = P.concat([te]));
        var ce = P.map(function(Z) {
          return String(Z);
        });
        ce.unshift("Warning: " + w), Function.prototype.apply.call(console[a], console, ce);
      }
    }
    var b = !1, h = !1, M = !1, A = !1, R = !1, T;
    T = Symbol.for("react.module.reference");
    function j(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === o || R || a === i || a === f || a === d || A || a === u || b || h || M || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === p || a.$$typeof === c || a.$$typeof === s || a.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === T || a.getModuleId !== void 0));
    }
    function q(a, w, P) {
      var $ = a.displayName;
      if ($)
        return $;
      var te = w.displayName || w.name || "";
      return te !== "" ? P + "(" + te + ")" : P;
    }
    function B(a) {
      return a.displayName || "Context";
    }
    function I(a) {
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
        case d:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case s:
            var w = a;
            return B(w) + ".Consumer";
          case c:
            var P = a;
            return B(P._context) + ".Provider";
          case l:
            return q(a, a.render, "ForwardRef");
          case p:
            var $ = a.displayName || null;
            return $ !== null ? $ : I(a.type) || "Memo";
          case S: {
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
    var Y = Object.assign, re = 0, ie, k, ee, ae, m, _, L;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function F() {
      {
        if (re === 0) {
          ie = console.log, k = console.info, ee = console.warn, ae = console.error, m = console.group, _ = console.groupCollapsed, L = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: z,
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
            log: Y({}, a, {
              value: ie
            }),
            info: Y({}, a, {
              value: k
            }),
            warn: Y({}, a, {
              value: ee
            }),
            error: Y({}, a, {
              value: ae
            }),
            group: Y({}, a, {
              value: m
            }),
            groupCollapsed: Y({}, a, {
              value: _
            }),
            groupEnd: Y({}, a, {
              value: L
            })
          });
        }
        re < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = E.ReactCurrentDispatcher, U;
    function G(a, w, P) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (te) {
            var $ = te.stack.trim().match(/\n( *(at )?)/);
            U = $ && $[1] || "";
          }
        return `
` + U + a;
      }
    }
    var Q = !1, K;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      K = new pe();
    }
    function D(a, w) {
      if (!a || Q)
        return "";
      {
        var P = K.get(a);
        if (P !== void 0)
          return P;
      }
      var $;
      Q = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ce;
      ce = V.current, V.current = null, F();
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
              $ = ye;
            }
            Reflect.construct(a, [], Z);
          } else {
            try {
              Z.call();
            } catch (ye) {
              $ = ye;
            }
            a.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            $ = ye;
          }
          a();
        }
      } catch (ye) {
        if (ye && $ && typeof ye.stack == "string") {
          for (var J = ye.stack.split(`
`), he = $.stack.split(`
`), ue = J.length - 1, le = he.length - 1; ue >= 1 && le >= 0 && J[ue] !== he[le]; )
            le--;
          for (; ue >= 1 && le >= 0; ue--, le--)
            if (J[ue] !== he[le]) {
              if (ue !== 1 || le !== 1)
                do
                  if (ue--, le--, le < 0 || J[ue] !== he[le]) {
                    var me = `
` + J[ue].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && K.set(a, me), me;
                  }
                while (ue >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        Q = !1, V.current = ce, X(), Error.prepareStackTrace = te;
      }
      var Ye = a ? a.displayName || a.name : "", Be = Ye ? G(Ye) : "";
      return typeof a == "function" && K.set(a, Be), Be;
    }
    function be(a, w, P) {
      return D(a, !1);
    }
    function Ue(a) {
      var w = a.prototype;
      return !!(w && w.isReactComponent);
    }
    function Ae(a, w, P) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return D(a, Ue(a));
      if (typeof a == "string")
        return G(a);
      switch (a) {
        case f:
          return G("Suspense");
        case d:
          return G("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            return be(a.render);
          case p:
            return Ae(a.type, w, P);
          case S: {
            var $ = a, te = $._payload, ce = $._init;
            try {
              return Ae(ce(te), w, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, Br = {}, kr = E.ReactDebugCurrentFrame;
    function rr(a) {
      if (a) {
        var w = a._owner, P = Ae(a.type, a._source, w ? w.type : null);
        kr.setExtraStackFrame(P);
      } else
        kr.setExtraStackFrame(null);
    }
    function Ft(a, w, P, $, te) {
      {
        var ce = Function.call.bind(Ke);
        for (var Z in a)
          if (ce(a, Z)) {
            var J = void 0;
            try {
              if (typeof a[Z] != "function") {
                var he = Error(($ || "React class") + ": " + P + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              J = a[Z](w, Z, $, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              J = ue;
            }
            J && !(J instanceof Error) && (rr(te), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", P, Z, typeof J), rr(null)), J instanceof Error && !(J.message in Br) && (Br[J.message] = !0, rr(te), C("Failed %s type: %s", P, J.message), rr(null));
          }
      }
    }
    var Ht = Array.isArray;
    function fr(a) {
      return Ht(a);
    }
    function zt(a) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, P = w && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return P;
      }
    }
    function Vt(a) {
      try {
        return Lr(a), !1;
      } catch {
        return !0;
      }
    }
    function Lr(a) {
      return "" + a;
    }
    function $r(a) {
      if (Vt(a))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zt(a)), Lr(a);
    }
    var Je = E.ReactCurrentOwner, Ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, Hr, vr;
    vr = {};
    function Wt(a) {
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
        vr[P] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Je.current.type), a.ref), vr[P] = !0);
      }
    }
    function qt(a, w) {
      {
        var P = function() {
          Fr || (Fr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
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
          Hr || (Hr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        P.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Kt = function(a, w, P, $, te, ce, Z) {
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
        value: $
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Jt(a, w, P, $, te) {
      {
        var ce, Z = {}, J = null, he = null;
        P !== void 0 && ($r(P), J = "" + P), Yt(w) && ($r(w.key), J = "" + w.key), Wt(w) && (he = w.ref, Nt(w, te));
        for (ce in w)
          Ke.call(w, ce) && !Ut.hasOwnProperty(ce) && (Z[ce] = w[ce]);
        if (a && a.defaultProps) {
          var ue = a.defaultProps;
          for (ce in ue)
            Z[ce] === void 0 && (Z[ce] = ue[ce]);
        }
        if (J || he) {
          var le = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          J && qt(Z, le), he && Gt(Z, le);
        }
        return Kt(a, J, he, te, $, Je.current, Z);
      }
    }
    var pr = E.ReactCurrentOwner, zr = E.ReactDebugCurrentFrame;
    function We(a) {
      if (a) {
        var w = a._owner, P = Ae(a.type, a._source, w ? w.type : null);
        zr.setExtraStackFrame(P);
      } else
        zr.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function gr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Vr() {
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
    var Ur = {};
    function Zt(a) {
      {
        var w = Vr();
        if (!w) {
          var P = typeof a == "string" ? a : a.displayName || a.name;
          P && (w = `

Check the top-level render call using <` + P + ">.");
        }
        return w;
      }
    }
    function Wr(a, w) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var P = Zt(w);
        if (Ur[P])
          return;
        Ur[P] = !0;
        var $ = "";
        a && a._owner && a._owner !== pr.current && ($ = " It was passed a child from " + I(a._owner.type) + "."), We(a), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, $), We(null);
      }
    }
    function Yr(a, w) {
      {
        if (typeof a != "object")
          return;
        if (fr(a))
          for (var P = 0; P < a.length; P++) {
            var $ = a[P];
            gr($) && Wr($, w);
          }
        else if (gr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var te = x(a);
          if (typeof te == "function" && te !== a.entries)
            for (var ce = te.call(a), Z; !(Z = ce.next()).done; )
              gr(Z.value) && Wr(Z.value, w);
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
        else if (typeof w == "object" && (w.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === p))
          P = w.propTypes;
        else
          return;
        if (P) {
          var $ = I(w);
          Ft(P, a.props, "prop", $, a);
        } else if (w.PropTypes !== void 0 && !hr) {
          hr = !0;
          var te = I(w);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function en(a) {
      {
        for (var w = Object.keys(a.props), P = 0; P < w.length; P++) {
          var $ = w[P];
          if ($ !== "children" && $ !== "key") {
            We(a), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), We(null);
            break;
          }
        }
        a.ref !== null && (We(a), C("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Nr = {};
    function qr(a, w, P, $, te, ce) {
      {
        var Z = j(a);
        if (!Z) {
          var J = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Xt();
          he ? J += he : J += Vr();
          var ue;
          a === null ? ue = "null" : fr(a) ? ue = "array" : a !== void 0 && a.$$typeof === r ? (ue = "<" + (I(a.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof a, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, J);
        }
        var le = Jt(a, w, P, te, ce);
        if (le == null)
          return le;
        if (Z) {
          var me = w.children;
          if (me !== void 0)
            if ($)
              if (fr(me)) {
                for (var Ye = 0; Ye < me.length; Ye++)
                  Yr(me[Ye], a);
                Object.freeze && Object.freeze(me);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yr(me, a);
        }
        if (Ke.call(w, "key")) {
          var Be = I(a), ye = Object.keys(w).filter(function(cn) {
            return cn !== "key";
          }), yr = ye.length > 0 ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nr[Be + yr]) {
            var an = ye.length > 0 ? "{" + ye.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
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
process.env.NODE_ENV === "production" ? Or.exports = fn() : Or.exports = vn();
var g = Or.exports;
const pt = $e({});
function pn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(pt.Provider, { value: r, children: e });
}
const Te = () => Fe(pt), ht = $e({}), hn = ({ children: e, id: r, onSelect: t }) => {
  const n = N({ onSelect: t, id: r });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(ht.Provider, { value: n.current, children: e });
}, He = () => {
  const e = Fe(ht);
  return {
    select: W((t) => {
      e.onSelect(t);
    }, [e.id]),
    selectedId: e.id
  };
}, gt = $e({}), gn = ({ children: e, id: r, onHover: t }) => {
  const n = N({ onHover: t, id: r });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(gt.Provider, { value: n.current, children: e });
}, Ie = () => {
  const e = Fe(gt);
  return {
    hover: W((t) => {
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
    var r = function(u, v) {
      return v = v || "", u.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), o = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", c = function(u, v, y, x) {
      return u = u || t, v = v || n, y = y || i, x = x || o, {
        capitalize: new RegExp("(^|[" + u + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + u + "])+([" + v + y + "])", "g"),
        fill: new RegExp("[" + u + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + x + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + u + "]")
      };
    }, s = c(), l = {
      re: s,
      unicodes: r,
      regexps: c,
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
        return u.replace(s.apostrophe, "");
      },
      fill: function(u, v, y) {
        return v != null && (u = u.replace(s.fill, function(x, E) {
          return E ? v + E : "";
        })), y && (u = l.deapostrophe(u)), u;
      },
      prep: function(u, v, y, x) {
        if (u = u == null ? "" : u + "", !x && s.upper.test(u) && (u = l.low.call(u)), !v && !s.hole.test(u)) {
          var E = l.fill(u, " ");
          s.hole.test(E) && (u = E);
        }
        return !y && !s.room.test(u) && (u = u.replace(s.relax, l.relax)), u;
      },
      relax: function(u, v, y, x) {
        return v + " " + (y ? y + " " : "") + x;
      }
    }, f = {
      _: l,
      of: function(u) {
        for (var v = 0, y = l.types.length; v < y; v++)
          if (f[l.types[v]].apply(f, arguments) === u)
            return l.types[v];
      },
      flip: function(u) {
        return u.replace(/\w/g, function(v) {
          return (v == l.up.call(v) ? l.low : l.up).call(v);
        });
      },
      random: function(u) {
        return u.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? l.up : l.low).call(v);
        });
      },
      type: function(u, v) {
        f[u] = v, l.types.push(u);
      }
    }, d = {
      lower: function(u, v, y) {
        return l.fill(l.low.call(l.prep(u, v)), v, y);
      },
      snake: function(u) {
        return f.lower(u, "_", !0);
      },
      constant: function(u) {
        return f.upper(u, "_", !0);
      },
      camel: function(u) {
        return l.decap(f.pascal(u));
      },
      kebab: function(u) {
        return f.lower(u, "-", !0);
      },
      upper: function(u, v, y) {
        return l.fill(l.up.call(l.prep(u, v, !1, !0)), v, y);
      },
      capital: function(u, v, y) {
        return l.fill(l.prep(u).replace(s.capitalize, function(x, E, C) {
          return E + l.up.call(C);
        }), v, y);
      },
      header: function(u) {
        return f.capital(u, "-", !0);
      },
      pascal: function(u) {
        return l.fill(l.prep(u, !1, !0).replace(s.pascal, function(v, y, x) {
          return l.up.call(x);
        }), "", !0);
      },
      title: function(u) {
        return f.capital(u).replace(s.improper, function(v, y, x, E) {
          return x > 0 && x < E.lastIndexOf(" ") ? l.low.call(v) : v;
        });
      },
      sentence: function(u, v, y) {
        return u = f.lower(u).replace(s.sentence, function(x, E, C) {
          return E + l.up.call(C);
        }), v && v.forEach(function(x) {
          u = u.replace(new RegExp("\\b" + f.lower(x) + "\\b", "g"), l.cap);
        }), y && y.forEach(function(x) {
          u = u.replace(new RegExp("(\\b" + f.lower(x) + "\\. +)(\\w)"), function(E, C, O) {
            return C + l.low.call(O);
          });
        }), u;
      }
    };
    d.squish = d.pascal, f.default = f;
    for (var p in d)
      f.type(p, d[p]);
    var S = typeof S == "function" ? S : function() {
    };
    S(e.exports ? e.exports = f : this.Case = f);
  }).call(ln);
})(yt);
var xn = yt.exports;
const Jr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), Xr = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content")
    return "center";
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.y - i.y;
  return c >= 0 && c <= o ? "start" : c >= i.height - o && c <= i.height ? "end" : c >= o && c <= i.height - o ? "center" : null;
}, Ne = () => vt(), Rr = () => /* @__PURE__ */ g.jsx("div", { className: "animate-pulse pointer-events-none py-0.5 -my-0.5 rounded bg-[#3e8ce4] z-10" }), bn = (e, r) => ge(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), cr = (e, r) => ge(({ get: n }) => {
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
}, [r, e]), Ee = ({ value: e, matchWidthValue: r }) => {
  const [t, n] = _e(!1), i = W((o) => {
    n((c) => c === o ? c : o);
  }, []);
  return se(() => {
    if ((e == null ? void 0 : e.value) === void 0) {
      i(!1);
      return;
    }
    if ((r == null ? void 0 : r.value) === void 0) {
      i(!1);
      return;
    }
    i(e.value === r.value);
  }, [i, e == null ? void 0 : e.value, r == null ? void 0 : r.value]), se(() => {
    if ((e == null ? void 0 : e.value) === void 0 || (r == null ? void 0 : r.value) === void 0)
      return;
    const o = e.subscribe((s) => i(s === r.value)), c = r.subscribe((s) => i(s === e.value));
    return () => {
      o.unsubscribe(), c.unsubscribe();
    };
  }, [i, e, r]), t;
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
  const o = N(null), { selectedId: c } = He(), { hoveredId: s } = Ie(), l = H(e.name), f = Ee({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id
  }), d = Ee({
    value: c,
    matchWidthValue: e == null ? void 0 : e.id
  });
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
          select: d,
          paddingLeft: r,
          label: l + "(Infinity loop)"
        }
      )
    }
  );
}, Sn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: l, onDoubleClick: f }) => {
  const d = N(null), { onDragStart: p, onDragEnd: S, components: u } = Te(), { selectedId: v } = He(), { hoveredId: y } = Ie(), [x, E] = _e(null), C = H(e.name), O = H(e.id), b = ge(({ get: B }) => {
    const I = B(u).find((Y) => B(Y.id) === B(e.referenceComponentId));
    return I ? B(I.content) : [];
  }, [u, e]), h = Ee({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id
  }), M = Ee({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id
  }), A = fe(() => !b || b.length === 0 ? null : b.map((B) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: B,
      paddingLeft: t,
      parents: [...r, e]
    },
    B.id.value
  )), [b, r, e, t]), { isDragging: R, preview: T } = De({
    id: O,
    element: d,
    end: () => S(),
    data: { element: e, parents: r },
    start: () => {
      p();
    }
  }, [O, e, r, p, S]);
  se(() => {
    T(
      () => ar(C),
      (B) => B.remove()
    );
  }, [T, C]);
  const j = N({ id: Ne() }), [{ isDraggingOver: q }] = we({
    element: d,
    id: j.current.id,
    drop: (B, I) => l(B, I, e, r, d, j.current.id),
    hover: (B, I) => E(s(B, I, e, r, d, j.current.id)),
    leave: (B, I) => E(c(B, I, e, r, d, j.current.id))
  }, [e, r, l, s, c]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: d,
        "data-dragging": R,
        className: "data-[dragging=true]:opacity-50",
        onMouseLeave: i,
        onClick: (B) => o(B, e),
        onDoubleClick: (B) => f(B, e),
        onMouseOver: (B) => n(B, e, d.current),
        children: /* @__PURE__ */ g.jsx(
          qe,
          {
            label: C,
            hover: h,
            select: M,
            dragging: R,
            dragOver: q,
            paddingLeft: t,
            insertBarAt: x
          }
        )
      }
    ),
    A
  ] });
}, wn = ({ element: e, parents: r, paddingLeft: t }) => {
  const { components: n } = Te();
  return ge(({ get: o }) => {
    const c = o(n).find((s) => o(s.id) === o(e.referenceComponentId));
    return c ? o(c.content) : [];
  }, [n, e]).map((o) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  ));
}, Cn = ({ element: e, parents: r, paddingLeft: t, ...n }) => {
  const i = bn(e, r), o = cr(e, r);
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
    Sn,
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
}, En = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: l }) => {
  const f = N(null), [d, p] = _e(null), S = H(e.children), u = H(e.name), v = H(e.id), { onDragStart: y, onDragEnd: x } = Te(), { selectedId: E } = He(), { hoveredId: C } = Ie(), O = Ee({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id
  }), b = Ee({
    value: E,
    matchWidthValue: e == null ? void 0 : e.id
  }), h = fe(() => !S || S.length === 0 ? null : S.map((j) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: j,
      paddingLeft: t + 8,
      parents: [...r, e]
    },
    j.id.value
  )), [S, r, e, t]), { isDragging: M, preview: A } = De({
    id: v,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      y();
    },
    end: () => x()
  }, [v, e, r, y, x]);
  se(() => {
    A(
      () => ar(u),
      (j) => j.remove()
    );
  }, [A, u]);
  const R = N({ id: Ne() }), [{ isDraggingOver: T }] = we({
    element: f,
    id: R.current.id,
    drop: (j, q) => l(j, q, e, r, f, R.current.id),
    hover: (j, q) => p(s(j, q, e, r, f, R.current.id)),
    leave: (j, q) => p(c(j, q, e, r, f, R.current.id))
  }, [e, r, l, s, c]);
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
            label: u,
            hover: O,
            select: b,
            dragging: M,
            dragOver: T,
            paddingLeft: t,
            insertBarAt: d
          }
        )
      }
    ),
    h
  ] });
}, On = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = H(e.children);
  return fe(() => !n || n.length === 0 ? null : n.map((o) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: o,
      paddingLeft: t,
      parents: [...r, e]
    },
    o.id.value
  )), [n, r, e, t]);
}, Rn = ({ element: e, parents: r, paddingLeft: t, ...n }) => cr(e, r) ? /* @__PURE__ */ g.jsx(
  On,
  {
    element: e,
    parents: r,
    paddingLeft: t
  }
) : /* @__PURE__ */ g.jsx(
  En,
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
  return ge(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var S;
      if (n(f.type) !== "component")
        return !1;
      const d = f;
      return n(e.componentId) === n(d.referenceComponentId) ? (S = n(d.slots)) == null ? void 0 : S.some((u) => n(u.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, d) => f !== void 0 ? f : n(d.type) === "slot-content" ? !1 : n(d.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, xt = (e, r) => ge(({ get: t }) => {
  var o;
  const n = [...r].reverse().filter((c) => t(c.type) === "component").find((c) => t(c.referenceComponentId) === t(e.componentId));
  if (!n)
    return [];
  const i = (o = t(n.slots)) == null ? void 0 : o.find((c) => t(c.referenceSlotId) === t(e.id));
  return i ? [t(i.children), i] : [];
}, [r, e]), Dn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onDragLeave: o, onDragOver: c, onDrop: s }) => {
  const l = N(null), [f, d] = _e(null), p = H(e.name), [S = [], u] = xt(e, r), { hoveredId: v } = Ie(), y = Ee({
    value: v,
    matchWidthValue: u == null ? void 0 : u.id
  }), x = N({ id: Ne() }), [{ isDraggingOver: E }] = we({
    element: l,
    id: x.current.id,
    drop: (C, O) => u ? s(C, O, u, r, l, x.current.id) : null,
    hover: (C, O) => d(u ? c(C, O, u, r, l, x.current.id) : null),
    leave: (C, O) => d(u ? o(C, O, u, r, l, x.current.id) : null)
  }, [u, r, s, c, o]);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: l,
        onMouseLeave: i,
        onMouseOver: (C) => u ? n(C, u, l.current) : void 0,
        children: /* @__PURE__ */ g.jsx(
          qe,
          {
            label: p,
            select: !1,
            dragging: !1,
            hover: y,
            dragOver: E,
            insertBarAt: f,
            paddingLeft: t + 8
          }
        )
      }
    ),
    u && S.length > 0 && S.map((C) => /* @__PURE__ */ g.jsx(
      ze,
      {
        element: C,
        paddingLeft: t + 16,
        parents: [...r, u]
      },
      C.id.value
    ))
  ] });
}, Pn = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: l }) => {
  const f = N(null), { onDragStart: d, onDragEnd: p } = Te(), { selectedId: S } = He(), { hoveredId: u } = Ie(), [v, y] = _e(null), x = H(e.name), E = H(e.id), C = Ee({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id
  }), O = Ee({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id
  }), { isDragging: b, preview: h } = De({
    id: E,
    element: f,
    end: () => p(),
    data: { element: e, parents: r },
    start: () => {
      d();
    }
  }, [E, e, r, d, p]);
  se(() => {
    h(
      () => ar(x),
      (R) => R.remove()
    );
  }, [h, x]);
  const M = N({ id: Ne() }), [{ isDraggingOver: A }] = we({
    element: f,
    id: M.current.id,
    drop: (R, T) => l(R, T, e, r, f, M.current.id),
    hover: (R, T) => y(s(R, T, e, r, f, M.current.id)),
    leave: (R, T) => y(c(R, T, e, r, f, M.current.id))
  }, [e, r, l, s, c]);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": b,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (R) => o(R, e),
      onMouseOver: (R) => n(R, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        qe,
        {
          label: x,
          hover: C,
          select: O,
          dragging: b,
          dragOver: A,
          paddingLeft: t,
          insertBarAt: v
        }
      )
    }
  ) });
}, jn = ({ element: e, parents: r, paddingLeft: t }) => {
  const [n = [], i] = xt(e, r);
  return i ? n.map((o) => /* @__PURE__ */ g.jsx(
    ze,
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
}, In = ({ element: e, parents: r, paddingLeft: t, onMouseOver: n, onMouseLeave: i, onSelect: o, onDragLeave: c, onDragOver: s, onDrop: l }) => {
  const f = N(null), [d, p] = _e(null), S = H(e.name), u = H(e.id), { onDragStart: v, onDragEnd: y } = Te(), { selectedId: x } = He(), { hoveredId: E } = Ie(), C = Ee({
    value: E,
    matchWidthValue: e == null ? void 0 : e.id
  }), O = Ee({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id
  }), { isDragging: b, preview: h } = De({
    id: u,
    element: f,
    end: () => y(),
    data: { element: e, parents: r },
    start: () => {
      v();
    }
  }, [u, e, r, v, y]);
  se(() => {
    h(
      () => ar(S),
      (R) => R.remove()
    );
  }, [h, S]);
  const M = N({ id: Ne() }), [{ isDraggingOver: A }] = we({
    element: f,
    id: M.current.id,
    drop: (R, T) => l(R, T, e, r, f, M.current.id),
    hover: (R, T) => p(s(R, T, e, r, f, M.current.id)),
    leave: (R, T) => p(c(R, T, e, r, f, M.current.id))
  }, [e, r, l, s, c]);
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: f,
      "data-dragging": b,
      className: "data-[dragging=true]:opacity-50",
      onMouseLeave: i,
      onClick: (R) => o(R, e),
      onMouseOver: (R) => n(R, e, f.current),
      children: /* @__PURE__ */ g.jsx(
        qe,
        {
          label: S,
          hover: C,
          select: O,
          dragging: b,
          dragOver: A,
          paddingLeft: t,
          insertBarAt: d
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
), ze = ({ element: e, parents: r, paddingLeft: t }) => {
  const n = H(e.type), { onDrop: i, value: o } = Te(), { select: c } = He(), { hover: s } = Ie(), l = W((v, y) => {
    v.stopPropagation(), v.preventDefault(), c(y.id.value);
  }, [c]), f = W((v) => {
    v.stopPropagation(), v.preventDefault(), c(void 0), s(void 0);
  }, [c, s]), d = W((v, y) => {
    v.stopPropagation(), s(y.id.value);
  }, [s]), p = W((v) => {
    v.stopPropagation(), s(void 0);
  }, [s]), S = W((v, y, x, E, C, O) => {
    if (!Jr(y, x, E, C, O))
      return s(void 0), null;
    const h = Xr(y, x, C);
    return h ? (s(e.id.value), h) : (s(void 0), null);
  }, [s]), u = W((v, y, x, E, C, O) => {
    var R, T, j, q, B, I, Y;
    if (!Jr(y, x, E, C, O))
      return;
    const h = Xr(y, x, C);
    if (!h)
      return;
    const M = ["html", "slot-content"].includes(x.type.value) && ((R = x.children.value) == null ? void 0 : R.length) || !1, A = h === "start" || h === "end" && !M;
    if (!(!A && x.type.value === "component"))
      if (Object.keys(v).includes("id")) {
        const re = v;
        if (A) {
          const ie = E.slice(-1).at(0), k = ((T = (ie ? ie.children : o).value) == null ? void 0 : T.findIndex((ee) => ee.id.value === x.id.value)) ?? -1;
          i({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              element: ie || "root",
              position: h === "start" ? k : k + 1
            }
          });
        } else {
          const ie = ((j = x.children.value) == null ? void 0 : j.length) || 0;
          i({
            element: re.id,
            from: { position: -1, element: null },
            to: {
              position: h === "end" ? 0 : ie,
              element: x
            }
          });
        }
      } else {
        const re = v, ie = (q = re.parents) == null ? void 0 : q.slice(-1).at(0), k = ie || "root";
        if (k !== "root" && k.type.value === "component")
          return;
        const ee = ((B = (k === "root" ? o : k.children).value) == null ? void 0 : B.findIndex((ae) => ae.id.value === re.element.id.value)) ?? -1;
        if (A) {
          const ae = E.slice(-1).at(0), m = ((I = (ae ? ae.children : o).value) == null ? void 0 : I.findIndex((_) => _.id.value === x.id.value)) ?? -1;
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
          const ae = ((Y = x.children.value) == null ? void 0 : Y.length) || 0;
          i({
            element: re.element,
            from: {
              position: ee,
              element: k
            },
            to: {
              position: M ? 0 : ae,
              element: x
            }
          });
        }
        c(re.element.id.value);
      }
  }, [c, i]);
  return n === "component" ? /* @__PURE__ */ g.jsx(
    Cn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: u,
      onDragLeave: () => null,
      onDragOver: S,
      onDoubleClick: f,
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: p
    }
  ) : n === "slot" ? /* @__PURE__ */ g.jsx(
    Tn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: u,
      onDragLeave: () => null,
      onDragOver: S,
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: p
    }
  ) : n === "text" ? /* @__PURE__ */ g.jsx(
    Mn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: u,
      onDragLeave: () => null,
      onDragOver: S,
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: p
    }
  ) : /* @__PURE__ */ g.jsx(
    Rn,
    {
      parents: r,
      paddingLeft: t,
      element: e,
      onDrop: u,
      onDragLeave: () => null,
      onDragOver: S,
      onSelect: l,
      onMouseOver: d,
      onMouseLeave: p
    }
  );
}, An = () => {
  const e = N(null), r = N({ id: Ne() }), { value: t, onDrop: n, onKeyDown: i } = Te(), { select: o } = He(), { hover: c } = Ie(), s = H(t), l = W((p, S) => {
    var u;
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
        const v = p, y = yn(v.parents || []), x = y || "root", E = ((u = y == null ? void 0 : y.children.value) == null ? void 0 : u.findIndex((C) => C.id.value === v.element.id.value)) ?? -1;
        n({
          element: v.element,
          from: {
            element: x,
            position: E
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), o(v.element.id.value);
      }
  }, [t, o]), f = W((p) => {
    p.stopPropagation(), o(void 0);
  }, [o]), [{ isDraggingOver: d }] = we({
    drop: l,
    element: e,
    id: r.current.id,
    leave: () => c(void 0)
  }, [l]);
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      tabIndex: 0,
      onKeyDown: i,
      onClick: f,
      ref: e,
      className: "flex-1 h-full w-full outline-none",
      children: [
        s.map((p) => /* @__PURE__ */ g.jsx(
          ze,
          {
            parents: [],
            paddingLeft: 4,
            element: p
          },
          p.id.value
        )),
        s.length === 0 && /* @__PURE__ */ g.jsx("p", { children: "Drag and drop here to start" }),
        d && /* @__PURE__ */ g.jsx(Rr, {})
      ]
    }
  );
};
function oi({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(ft, { children: /* @__PURE__ */ g.jsx(pn, { ...i, children: /* @__PURE__ */ g.jsx(hn, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(gn, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(An, {}) }) }) }) });
}
const bt = $e({});
function Bn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(bt.Provider, { value: r, children: e });
}
const xe = () => Fe(bt), mt = $e({}), kn = ({ children: e }) => {
  const r = N(de(!1)), t = N(de(!1)), n = N(de(0)), i = N(de(0)), o = N(de(0)), c = N(de(0)), s = fe(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: o.current,
    observableTop: c.current
  }), []), l = W((d) => {
    ve(c.current, (p) => p !== d.top ? d.top : p), ve(o.current, (p) => p !== d.left ? d.left : p), ve(i.current, (p) => p !== d.width ? d.width : p), ve(n.current, (p) => p !== d.height ? d.height : p), ve(t.current, (p) => p !== d.isVisible ? d.isVisible : p), ve(r.current, (p) => p !== !!d.isHorizontal ? !!d.isHorizontal : p);
  }, []), f = W(() => {
    l({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [l]);
  return /* @__PURE__ */ g.jsx(mt.Provider, { value: { showInsertBar: l, hideInsertBar: f, observables: s }, children: e });
}, Me = () => Fe(mt), Ln = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: o, observableWidth: c } = Me().observables, [s] = ke(o), [l] = ke(i), [f] = ke(c), [d] = ke(r), [p] = ke(n), [S] = ke(t), u = fe(() => ({
    width: S ? f : 4,
    height: S ? 4 : d,
    top: s - (S ? 2 : 0),
    left: l - (S ? 0 : 2)
  }), [d, S, l, s, f]);
  return p ? /* @__PURE__ */ g.jsx(
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
}, St = $e({}), $n = ({ children: e, id: r, onSelect: t }) => {
  const n = N({
    documentHorizontalScroll: de(0),
    playgroundSize: de(void 0),
    documentVerticalScroll: de(0),
    getPosition: de(void 0),
    parents: de(void 0),
    element: de(void 0),
    onSelect: t,
    id: r
  });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(St.Provider, { value: n.current, children: e });
};
var wt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Zr = Se.createContext && /* @__PURE__ */ Se.createContext(wt), Fn = ["attr", "size", "title"];
function Hn(e, r) {
  if (e == null)
    return {};
  var t = zn(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function zn(e, r) {
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
      Vn(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Vn(e, r, t) {
  return r = Un(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Un(e) {
  var r = Wn(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Wn(e, r) {
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
function Ct(e) {
  return e && e.map((r, t) => /* @__PURE__ */ Se.createElement(r.tag, or({
    key: t
  }, r.attr), Ct(r.child)));
}
function sr(e) {
  return (r) => /* @__PURE__ */ Se.createElement(Yn, nr({
    attr: or({}, e.attr)
  }, r), Ct(e.child));
}
function Yn(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, c = Hn(e, Fn), s = i || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Se.createElement("svg", nr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, c, {
      className: l,
      style: or(or({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Se.createElement("title", null, o), e.children);
  };
  return Zr !== void 0 ? /* @__PURE__ */ Se.createElement(Zr.Consumer, null, (t) => r(t)) : r(wt);
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
function Et(e) {
  return xn.camel(Xn(e));
}
const et = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), Zn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, s = e.y - i.y, l = s >= 0 && s <= o, f = s >= i.height - o && s <= i.height, d = s >= o && s <= i.height - o, p = c >= 0 && c <= o, S = c >= i.width - o && c <= i.width, u = c >= o && c <= i.width - o;
  let v = !1, y = !1, x = !1, E = !1;
  if (n) {
    const C = f || S || l || p;
    v = u && d && !C, y = u && d && !C, x = f || S, E = l || p;
  } else
    x = (f || S) && !l, E = (l || p) && !f;
  return { isOverCurrentStart: v, isOverCurrentEnd: y, isOverEnd: x, isOverStart: E };
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = i ? 5 : n.height / 2, c = e.x - n.x, s = e.y - n.y, l = s >= n.height - o && s <= n.height, f = s >= o && s <= n.height - o, d = c >= 0 && c <= o, p = c >= n.width - o && c <= n.width, S = c >= o && c <= n.width - o;
  let u = !0, v = n.top, y = n.left, x = n.width, E = n.height;
  return l && (d || p || S) ? v = n.top + n.height : f && d ? u = !1 : f && p ? (y = n.left + n.width, u = !1) : S && f && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: u,
    left: y,
    width: x,
    height: E
  };
}, Ge = () => vt(), Pe = () => {
  const e = Fe(St), r = W((o) => {
    e.onSelect(o);
  }, [e.id]), t = W((o, c, s) => {
    ve(e.getPosition, () => s), ve(e.parents, c), ve(e.element, o);
  }, [e.getPosition]), n = W((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = W((o, c) => {
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
  const s = N(null), l = fe(() => {
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
            left: l,
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
  const e = N(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = xe(), { hideInsertBar: o } = Me(), {
    select: c,
    selectedId: s,
    selectedElement: l,
    selectBarGetPosition: f,
    selectedElementParents: d,
    selectBarDocumentVerticalScroll: p,
    selectBarDocumentHorizontalScroll: S
  } = Pe(), u = H(d), v = H(l), y = H(s), x = ge(({ get: j }) => v ? j(v.name) : "", [v]), { width: E, height: C, top: O, left: b } = ge(({ get: j }) => {
    const q = j(S), B = j(p), I = j(f);
    return I ? {
      width: I().width,
      height: I().height,
      top: I().top - B,
      left: I().left - q
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [S, p, f]), h = W((j) => {
    j.stopPropagation();
    const q = u == null ? void 0 : u.slice(-1).at(0);
    if (q)
      if (q.type.value === "slot-content") {
        const B = u == null ? void 0 : u.find((I) => {
          var Y;
          return I.type.value !== "component" ? !1 : (Y = I.slots.value) == null ? void 0 : Y.some((re) => re.id.value === q.id.value);
        });
        c(B == null ? void 0 : B.id.value);
      } else
        c(q.id.value);
  }, [c, u]), M = W(() => {
    v && i(v);
  }, [i, v]), A = W(() => {
    v && n(v);
  }, [n, v]), { preview: R, isDragging: T } = De({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      o(), t();
    },
    canDrag: !!v && Array.isArray(u),
    data: {
      element: v,
      parents: u
    }
  }, [y, v, u, o, r, t]);
  return se(() => {
    R(
      () => Qe(x),
      (j) => j.remove()
    );
  }, [R, x]), !y || E === 0 && C === 0 && b === 0 && O === 0 ? null : /* @__PURE__ */ g.jsx(
    eo,
    {
      zIndex: 1,
      top: O - 1,
      width: E,
      height: C,
      left: b - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        x,
        !T && /* @__PURE__ */ g.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          u && u.length > 0 && /* @__PURE__ */ g.jsx(Nn, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(Kn, { title: "Remove element", onClick: M, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(qn, { title: "Duplicate element and children", onClick: A, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ g.jsx(Gn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), Ot = $e({}), to = ({ children: e, id: r, onHover: t }) => {
  const n = N({
    documentHorizontalScroll: de(0),
    playgroundSize: de(void 0),
    documentVerticalScroll: de(0),
    getPosition: de(void 0),
    element: de(void 0),
    onHover: t,
    id: r
  });
  return se(() => {
    n.current.id = r;
  }, [r]), se(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(Ot.Provider, { value: n.current, children: e });
}, je = () => {
  const e = Fe(Ot), r = W((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), t = W((o, c) => {
    ve(e.getPosition, () => c), ve(e.element, o);
  }, [e.getPosition]), n = W((o, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = W((o, c) => {
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
  const s = N(null), l = fe(() => {
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
            left: l,
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
  const { selectedId: e } = Pe(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: o
  } = je(), c = H(o), s = H(i), l = H(n), f = H(t), d = H(e), p = H(r), S = ge(({ get: E }) => f ? E(f.name) : "", [f]), { width: u, height: v, top: y, left: x } = fe(() => l ? {
    width: l().width,
    height: l().height,
    top: l().top - s,
    left: l().left - c
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [c, s, l]);
  return !p || p === d || u === 0 && v === 0 && x === 0 && y === 0 ? null : /* @__PURE__ */ g.jsx(
    no,
    {
      zIndex: 1,
      top: y - 1,
      width: u,
      left: x - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ g.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: S })
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
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function O(h) {
    if (typeof h == "object" && h !== null) {
      var M = h.$$typeof;
      switch (M) {
        case r:
          switch (h = h.type, h) {
            case l:
            case f:
            case n:
            case o:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case d:
                case v:
                case u:
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
  function b(h) {
    return O(h) === f;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = f, ne.ContextConsumer = s, ne.ContextProvider = c, ne.Element = r, ne.ForwardRef = d, ne.Fragment = n, ne.Lazy = v, ne.Memo = u, ne.Portal = t, ne.Profiler = o, ne.StrictMode = i, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return b(h) || O(h) === l;
  }, ne.isConcurrentMode = b, ne.isContextConsumer = function(h) {
    return O(h) === s;
  }, ne.isContextProvider = function(h) {
    return O(h) === c;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, ne.isForwardRef = function(h) {
    return O(h) === d;
  }, ne.isFragment = function(h) {
    return O(h) === n;
  }, ne.isLazy = function(h) {
    return O(h) === v;
  }, ne.isMemo = function(h) {
    return O(h) === u;
  }, ne.isPortal = function(h) {
    return O(h) === t;
  }, ne.isProfiler = function(h) {
    return O(h) === o;
  }, ne.isStrictMode = function(h) {
    return O(h) === i;
  }, ne.isSuspense = function(h) {
    return O(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === o || h === i || h === p || h === S || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === u || h.$$typeof === c || h.$$typeof === s || h.$$typeof === d || h.$$typeof === x || h.$$typeof === E || h.$$typeof === C || h.$$typeof === y);
  }, ne.typeOf = O, ne;
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
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, S = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function O(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === f || D === o || D === i || D === p || D === S || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === u || D.$$typeof === c || D.$$typeof === s || D.$$typeof === d || D.$$typeof === x || D.$$typeof === E || D.$$typeof === C || D.$$typeof === y);
    }
    function b(D) {
      if (typeof D == "object" && D !== null) {
        var be = D.$$typeof;
        switch (be) {
          case r:
            var Ue = D.type;
            switch (Ue) {
              case l:
              case f:
              case n:
              case o:
              case i:
              case p:
                return Ue;
              default:
                var Ae = Ue && Ue.$$typeof;
                switch (Ae) {
                  case s:
                  case d:
                  case v:
                  case u:
                  case c:
                    return Ae;
                  default:
                    return be;
                }
            }
          case t:
            return be;
        }
      }
    }
    var h = l, M = f, A = s, R = c, T = r, j = d, q = n, B = v, I = u, Y = t, re = o, ie = i, k = p, ee = !1;
    function ae(D) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(D) || b(D) === l;
    }
    function m(D) {
      return b(D) === f;
    }
    function _(D) {
      return b(D) === s;
    }
    function L(D) {
      return b(D) === c;
    }
    function z(D) {
      return typeof D == "object" && D !== null && D.$$typeof === r;
    }
    function F(D) {
      return b(D) === d;
    }
    function X(D) {
      return b(D) === n;
    }
    function V(D) {
      return b(D) === v;
    }
    function U(D) {
      return b(D) === u;
    }
    function G(D) {
      return b(D) === t;
    }
    function Q(D) {
      return b(D) === o;
    }
    function K(D) {
      return b(D) === i;
    }
    function pe(D) {
      return b(D) === p;
    }
    oe.AsyncMode = h, oe.ConcurrentMode = M, oe.ContextConsumer = A, oe.ContextProvider = R, oe.Element = T, oe.ForwardRef = j, oe.Fragment = q, oe.Lazy = B, oe.Memo = I, oe.Portal = Y, oe.Profiler = re, oe.StrictMode = ie, oe.Suspense = k, oe.isAsyncMode = ae, oe.isConcurrentMode = m, oe.isContextConsumer = _, oe.isContextProvider = L, oe.isElement = z, oe.isForwardRef = F, oe.isFragment = X, oe.isLazy = V, oe.isMemo = U, oe.isPortal = G, oe.isProfiler = Q, oe.isStrictMode = K, oe.isSuspense = pe, oe.isValidElementType = O, oe.typeOf = b;
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
var xr, ot;
function co() {
  if (ot)
    return xr;
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
      for (var c = {}, s = 0; s < 10; s++)
        c["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(c).map(function(d) {
        return c[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xr = i() ? Object.assign : function(o, c) {
    for (var s, l = n(o), f, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var p in s)
        r.call(s, p) && (l[p] = s[p]);
      if (e) {
        f = e(s);
        for (var S = 0; S < f.length; S++)
          t.call(s, f[S]) && (l[f[S]] = s[f[S]]);
      }
    }
    return l;
  }, xr;
}
var br, it;
function Tr() {
  if (it)
    return br;
  it = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var mr, at;
function _t() {
  return at || (at = 1, mr = Function.call.bind(Object.prototype.hasOwnProperty)), mr;
}
var Sr, ct;
function so() {
  if (ct)
    return Sr;
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
  function i(o, c, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (n(o, d)) {
          var p;
          try {
            if (typeof o[d] != "function") {
              var S = Error(
                (l || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw S.name = "Invariant Violation", S;
            }
            p = o[d](c, d, l, s, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var u = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (u ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Sr = i, Sr;
}
var wr, st;
function uo() {
  if (st)
    return wr;
  st = 1;
  var e = Rt(), r = co(), t = Tr(), n = _t(), i = so(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return wr = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(m) {
      var _ = m && (f && m[f] || m[d]);
      if (typeof _ == "function")
        return _;
    }
    var S = "<<anonymous>>", u = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: C(),
      arrayOf: O,
      element: b(),
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
    function x(m) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, L = 0;
      function z(X, V, U, G, Q, K, pe) {
        if (G = G || S, K = K || U, pe !== t) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = G + ":" + U;
            !_[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[be] = !0, L++);
          }
        }
        return V[U] == null ? X ? V[U] === null ? new y("The " + Q + " `" + K + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new y("The " + Q + " `" + K + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : m(V, U, G, Q, K);
      }
      var F = z.bind(null, !1);
      return F.isRequired = z.bind(null, !0), F;
    }
    function E(m) {
      function _(L, z, F, X, V, U) {
        var G = L[z], Q = ie(G);
        if (Q !== m) {
          var K = k(G);
          return new y(
            "Invalid " + X + " `" + V + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return x(_);
    }
    function C() {
      return x(c);
    }
    function O(m) {
      function _(L, z, F, X, V) {
        if (typeof m != "function")
          return new y("Property `" + V + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var U = L[z];
        if (!Array.isArray(U)) {
          var G = ie(U);
          return new y("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + F + "`, expected an array."));
        }
        for (var Q = 0; Q < U.length; Q++) {
          var K = m(U, Q, F, X, V + "[" + Q + "]", t);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return x(_);
    }
    function b() {
      function m(_, L, z, F, X) {
        var V = _[L];
        if (!s(V)) {
          var U = ie(V);
          return new y("Invalid " + F + " `" + X + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(m);
    }
    function h() {
      function m(_, L, z, F, X) {
        var V = _[L];
        if (!e.isValidElementType(V)) {
          var U = ie(V);
          return new y("Invalid " + F + " `" + X + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(m);
    }
    function M(m) {
      function _(L, z, F, X, V) {
        if (!(L[z] instanceof m)) {
          var U = m.name || S, G = ae(L[z]);
          return new y("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + F + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return x(_);
    }
    function A(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function _(L, z, F, X, V) {
        for (var U = L[z], G = 0; G < m.length; G++)
          if (v(U, m[G]))
            return null;
        var Q = JSON.stringify(m, function(pe, D) {
          var be = k(D);
          return be === "symbol" ? String(D) : D;
        });
        return new y("Invalid " + X + " `" + V + "` of value `" + String(U) + "` " + ("supplied to `" + F + "`, expected one of " + Q + "."));
      }
      return x(_);
    }
    function R(m) {
      function _(L, z, F, X, V) {
        if (typeof m != "function")
          return new y("Property `" + V + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var U = L[z], G = ie(U);
        if (G !== "object")
          return new y("Invalid " + X + " `" + V + "` of type " + ("`" + G + "` supplied to `" + F + "`, expected an object."));
        for (var Q in U)
          if (n(U, Q)) {
            var K = m(U, Q, F, X, V + "." + Q, t);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return x(_);
    }
    function T(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var _ = 0; _ < m.length; _++) {
        var L = m[_];
        if (typeof L != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(L) + " at index " + _ + "."
          ), c;
      }
      function z(F, X, V, U, G) {
        for (var Q = [], K = 0; K < m.length; K++) {
          var pe = m[K], D = pe(F, X, V, U, G, t);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && Q.push(D.data.expectedType);
        }
        var be = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new y("Invalid " + U + " `" + G + "` supplied to " + ("`" + V + "`" + be + "."));
      }
      return x(z);
    }
    function j() {
      function m(_, L, z, F, X) {
        return Y(_[L]) ? null : new y("Invalid " + F + " `" + X + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return x(m);
    }
    function q(m, _, L, z, F) {
      return new y(
        (m || "React class") + ": " + _ + " type `" + L + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function B(m) {
      function _(L, z, F, X, V) {
        var U = L[z], G = ie(U);
        if (G !== "object")
          return new y("Invalid " + X + " `" + V + "` of type `" + G + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var Q in m) {
          var K = m[Q];
          if (typeof K != "function")
            return q(F, X, V, Q, k(K));
          var pe = K(U, Q, F, X, V + "." + Q, t);
          if (pe)
            return pe;
        }
        return null;
      }
      return x(_);
    }
    function I(m) {
      function _(L, z, F, X, V) {
        var U = L[z], G = ie(U);
        if (G !== "object")
          return new y("Invalid " + X + " `" + V + "` of type `" + G + "` " + ("supplied to `" + F + "`, expected `object`."));
        var Q = r({}, L[z], m);
        for (var K in Q) {
          var pe = m[K];
          if (n(m, K) && typeof pe != "function")
            return q(F, X, V, K, k(pe));
          if (!pe)
            return new y(
              "Invalid " + X + " `" + V + "` key `" + K + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(L[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var D = pe(U, K, F, X, V + "." + K, t);
          if (D)
            return D;
        }
        return null;
      }
      return x(_);
    }
    function Y(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(Y);
          if (m === null || s(m))
            return !0;
          var _ = p(m);
          if (_) {
            var L = _.call(m), z;
            if (_ !== m.entries) {
              for (; !(z = L.next()).done; )
                if (!Y(z.value))
                  return !1;
            } else
              for (; !(z = L.next()).done; ) {
                var F = z.value;
                if (F && !Y(F[1]))
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
      return !m.constructor || !m.constructor.name ? S : m.constructor.name;
    }
    return u.checkPropTypes = i, u.resetWarningCache = i.resetWarningCache, u.PropTypes = u, u;
  }, wr;
}
var Cr, ut;
function lo() {
  if (ut)
    return Cr;
  ut = 1;
  var e = Tr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Cr = function() {
    function n(c, s, l, f, d, p) {
      if (p !== e) {
        var S = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw S.name = "Invariant Violation", S;
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
  }, Cr;
}
if (process.env.NODE_ENV !== "production") {
  var fo = Rt(), vo = !0;
  _r.exports = uo()(fo.isElement, vo);
} else
  _r.exports = lo()();
var Dt = _r.exports, Ce = {};
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.FrameContextConsumer = Ce.FrameContextProvider = Ce.useFrame = Ce.FrameContext = void 0;
var po = Se, Pt = ho(po);
function ho(e) {
  return e && e.__esModule ? e : { default: e };
}
var jt = void 0, Tt = void 0;
typeof document < "u" && (jt = document);
typeof window < "u" && (Tt = window);
var Ir = Ce.FrameContext = Pt.default.createContext({ document: jt, window: Tt });
Ce.useFrame = function() {
  return Pt.default.useContext(Ir);
};
var go = Ir.Provider, yo = Ir.Consumer;
Ce.FrameContextProvider = go;
Ce.FrameContextConsumer = yo;
var Mr = {};
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
var xo = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), Dr = Se;
It(Dr);
var bo = Dt, Er = It(bo);
function It(e) {
  return e && e.__esModule ? e : { default: e };
}
function mo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function So(e, r) {
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
    return mo(this, r), So(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return xo(r, [{
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
  children: Er.default.element.isRequired,
  contentDidMount: Er.default.func.isRequired,
  contentDidUpdate: Er.default.func.isRequired
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
}, Co = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), At = Se, Le = lr(At), Eo = un, lt = lr(Eo), Oo = Dt, Re = lr(Oo), Ro = Ce, _o = Mr, Do = lr(_o);
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
    }, i._isMounted = !1, i.nodeRef = Le.default.createRef(), i.state = { iframeLoaded: !1 }, i;
  }
  return Co(r, [{
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
        Do.default,
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
      ), l = this.getMountTarget();
      return l ? [lt.default.createPortal(this.props.head, this.getDoc().head), lt.default.createPortal(s, l)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = Pr({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, Le.default.createElement(
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
er.default = Le.default.forwardRef(function(e, r) {
  return Le.default.createElement(Ar, Pr({}, e, { forwardedRef: r }));
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
  var t = Ce;
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
  const i = H(
    fe(() => jr(({ get: c }) => c(r).map((s) => ({
      id: c(s.id),
      content: c(s.content)
    }))), [r])
  ), o = fe(() => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
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
}, Bo = (e, r) => ge(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), dr = (e, r) => ge(({ get: n }) => {
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
}, [r, e]), ko = ({ element: e }) => {
  const r = H(e.name);
  return /* @__PURE__ */ g.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ g.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Oe = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = N(de(!1)), o = W((c) => {
    i.current.value !== c && (i.current.value = c);
  }, []);
  se(() => {
    if ((e == null ? void 0 : e.value) === void 0) {
      o(!1);
      return;
    }
    if ((r == null ? void 0 : r.value) === void 0) {
      o(!1);
      return;
    }
    o(e.value === r.value);
  }, [o, e == null ? void 0 : e.value, r == null ? void 0 : r.value]), se(() => {
    if ((e == null ? void 0 : e.value) === void 0 || (r == null ? void 0 : r.value) === void 0)
      return;
    const c = e.subscribe((l) => o(l === r.value)), s = r.subscribe((l) => o(l === e.value));
    return () => {
      c.unsubscribe(), s.unsubscribe();
    };
  }, [o, e, r]), se(() => {
    i.current.value && t();
    const c = i.current.subscribe((s) => {
      s && t();
    });
    return () => c.unsubscribe();
  }, [...n]);
}, Lo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: o }) => {
  const c = N(null), { selectedId: s } = Pe(), { hoveredId: l } = je(), f = H(e.name);
  return Oe({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [l, e]), Oe({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [s, e]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (d) => o(d, e),
      onMouseOver: (d) => i(d, e, c.current),
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
}, $o = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: l, onSelectBar: f, onDoubleClick: d }) => {
  const p = N(null), { onDragStart: S, onDragEnd: u, components: v } = xe(), { hideInsertBar: y } = Me(), { selectedId: x } = Pe(), { hoveredId: E } = je(), C = H(e.name), O = H(e.id), b = ge(({ get: T }) => {
    const j = T(v).find((q) => T(q.id) === T(e.referenceComponentId));
    return j ? T(j.content) : [];
  }, [v, e]);
  Oe({
    value: E,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, p.current)
  }, [E, e]), Oe({
    value: x,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, p.current)
  }, [x, e]);
  const h = fe(() => !b || b.length === 0 ? null : b.map((T) => /* @__PURE__ */ g.jsx(
    Ve,
    {
      element: T,
      parents: [...r, e]
    },
    T.id.value
  )), [b, r, e]), { isDragging: M, preview: A } = De({
    id: O,
    element: p,
    data: { element: e, parents: r },
    start: () => {
      S();
    },
    end: () => {
      y(), u();
    }
  }, [O, e, r, y, S, u]);
  se(() => {
    A(
      () => Qe(C),
      (T) => T.remove()
    );
  }, [A, C]);
  const R = N({ id: Ge() });
  return we({
    element: p,
    id: R.current.id,
    drop: (T, j) => s(T, j, e, r, p, R.current.id),
    hover: (T, j) => c(T, j, e, r, p, R.current.id),
    leave: (T, j) => o(T, j, e, r, p, R.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: p,
      onMouseLeave: n,
      onClick: (T) => i(T, e),
      onDoubleClick: (T) => d(T, e),
      onMouseOver: (T) => t(T, e, p.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: M ? 0.5 : void 0 },
      children: h
    }
  );
}, Fo = ({ element: e, parents: r }) => {
  const { components: t } = xe(), n = ge(({ get: i }) => {
    const o = i(t).find((c) => i(c.id) === i(e.referenceComponentId));
    return o ? i(o.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ g.jsx(
    Ve,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, Ho = ({ element: e, parents: r, ...t }) => {
  const n = Bo(e, r), i = dr(e, r);
  return n ? i ? /* @__PURE__ */ g.jsx(ko, { element: e }) : /* @__PURE__ */ g.jsx(
    Lo,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ g.jsx(
    Fo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    $o,
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
  const { onExpressionToValue: r } = xe(), t = fe(() => jr(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((c) => {
      const s = n(c.name), l = n(c.value);
      s && (o[Et(s)] = r(l, s, "style", e));
    }), o;
  }), [e, r, e]);
  return H(t);
}, kt = (e) => {
  const { onExpressionToValue: r } = xe(), t = fe(() => jr({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, c = {};
      return i.forEach((s) => {
        const l = n(s.name);
        if (l === void 0 || l === "hidden" || l === "style")
          return;
        const f = r(n(s.value), l, "attribute", e), d = Et(l);
        switch (d) {
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
            if (l.startsWith("data-")) {
              o[l] = f;
              return;
            } else
              o[d] = f;
            break;
        }
      }), [o, c];
    }
  }), [e, r]);
  return H(t);
}, Lt = sn(({ tag: e, ...r }, t) => dt(e, { ref: t, ...r })), zo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: l, onSelectBar: f }) => {
  const d = N(null), [p, S] = _e(!1), [
    u
    /* elementSpecialProps */
  ] = kt(e), v = H(e.children), y = Bt(e), x = H(e.name), E = H(e.tag), C = H(e.id), { onDragStart: O, onDragEnd: b } = xe(), { hideInsertBar: h } = Me(), { selectedId: M } = Pe(), { hoveredId: A } = je();
  Oe({
    value: A,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [A, e]), Oe({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, d.current)
  }, [M, e]), se(() => {
    S((Y) => A.value === C === Y ? Y : !Y);
    const I = A.subscribe((Y) => {
      S((re) => Y === C === re ? re : !re);
    });
    return () => I.unsubscribe();
  }, [C, A]);
  const R = fe(() => !v || v.length === 0 ? null : v.map((I) => /* @__PURE__ */ g.jsx(
    Ve,
    {
      element: I,
      parents: [...r, e]
    },
    I.id.value
  )), [v, r, e]), T = fe(() => v !== void 0, [v]), { isDragging: j, preview: q } = De({
    id: C,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      O();
    },
    end: () => {
      h(), b();
    }
  }, [C, e, r, h, O, b]);
  se(() => {
    q(
      () => Qe(x),
      (I) => I.remove()
    );
  }, [q, x]);
  const B = N({ id: Ge() });
  return we({
    element: d,
    id: B.current.id,
    drop: (I, Y) => s(I, Y, e, r, d, B.current.id),
    hover: (I, Y) => c(I, Y, e, r, d, B.current.id),
    leave: (I, Y) => o(I, Y, e, r, d, B.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    Lt,
    {
      readOnly: !0,
      tag: E,
      ref: d,
      children: R,
      onMouseLeave: n,
      onClick: (I) => i(I, e),
      onMouseOver: (I) => t(I, e, d.current),
      ...u !== void 0 ? { ...u, ...p ? { disabled: !1 } : {} } : {},
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
}, Vo = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = kt(e), n = H(e.children), i = Bt(e), o = H(e.tag), c = fe(() => !n || n.length === 0 ? null : n.map((s) => /* @__PURE__ */ g.jsx(
    Ve,
    {
      element: s,
      parents: [...r, e]
    },
    s.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ g.jsx(
    Lt,
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
}, Uo = ({ element: e, parents: r, ...t }) => dr(e, r) ? /* @__PURE__ */ g.jsx(
  Vo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  zo,
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
), Wo = (e, r) => {
  const { components: t } = xe();
  return ge(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var S;
      if (n(f.type) !== "component")
        return !1;
      const d = f;
      return n(e.componentId) === n(d.referenceComponentId) ? (S = n(d.slots)) == null ? void 0 : S.some((u) => n(u.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, d) => f !== void 0 ? f : n(d.type) === "slot-content" ? !1 : n(d.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, $t = (e, r) => {
  const { onAddSlotContent: t } = xe();
  return ge(({ get: n }) => {
    var c;
    const i = [...r].reverse().filter((s) => n(s.type) === "component").find((s) => n(s.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const o = (c = n(i.slots)) == null ? void 0 : c.find((s) => n(s.referenceSlotId) === n(e.id));
    return o ? [n(o.children), o] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, Yo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: o, onDrop: c, onHoverBar: s }) => {
  const l = N(null), [f = [], d] = $t(e, r), { hoveredId: p } = je();
  Oe({
    value: p,
    matchWidthValue: d == null ? void 0 : d.id,
    effect() {
      d && s(e, l.current);
    }
  }, [p, d == null ? void 0 : d.id, e]);
  const S = N({ id: Ge() });
  return we({
    element: l,
    id: S.current.id,
    drop: (u, v) => d ? c(u, v, d, r, l, S.current.id) : void 0,
    hover: (u, v) => d ? o(u, v, d, r, l, S.current.id) : void 0,
    leave: (u, v) => d ? i(u, v, d, r, l, S.current.id) : void 0
  }, [d, r, c, o, i]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: l,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (u) => d ? t(u, d, l.current) : void 0,
      children: [
        d && f.length > 0 && f.map((u) => /* @__PURE__ */ g.jsx(
          Ve,
          {
            element: u,
            parents: [...r, d]
          },
          u.id.value
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
}, No = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: l, onSelectBar: f }) => {
  const d = N(null), { onDragStart: p, onDragEnd: S } = xe(), { hideInsertBar: u } = Me(), { selectedId: v } = Pe(), { hoveredId: y } = je(), x = H(e.name), E = H(e.id);
  Oe({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [y, e]), Oe({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, d.current)
  }, [v, e]);
  const { isDragging: C, preview: O } = De({
    id: E,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      p();
    },
    end: () => {
      u(), S();
    }
  }, [E, e, r, u, p, S]);
  se(() => {
    O(
      () => Qe(x),
      (h) => h.remove()
    );
  }, [O, x]);
  const b = N({ id: Ge() });
  return we({
    element: d,
    id: b.current.id,
    drop: (h, M) => s(h, M, e, r, d, b.current.id),
    hover: (h, M) => c(h, M, e, r, d, b.current.id),
    leave: (h, M) => o(h, M, e, r, d, b.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => t(h, e, d.current),
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
        x,
        '"'
      ]
    }
  );
}, qo = ({ element: e, parents: r }) => {
  const [t = [], n] = $t(e, r);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ g.jsx(
    Ve,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, Go = ({ element: e, parents: r, ...t }) => {
  const n = dr(e, r);
  return Wo(e, r) ? /* @__PURE__ */ g.jsx(
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
}, Ko = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: l, onSelectBar: f }) => {
  const d = N(null), { window: p, document: S } = ur.useFrame(), [u, v] = ke(e.text), y = H(e.name), x = H(e.id), { onExpressionToValue: E, onValueToExpression: C } = xe(), { onDragStart: O, onDragEnd: b } = xe(), { hideInsertBar: h } = Me(), { selectedId: M } = Pe(), { hoveredId: A } = je(), [R, T] = _e(!1);
  se(() => {
    !d.current || !R || (d.current.focus(), f(e, null));
  }, [R, f]), Oe({
    value: A,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => l(e, d.current)
  }, [A, e]), Oe({
    value: M,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, d.current)
  }, [M, e]);
  const { isDragging: j, preview: q } = De({
    id: x,
    canDrag: !R,
    element: d,
    data: { element: e, parents: r },
    start: () => {
      O();
    },
    end: () => {
      h(), b();
    }
  }, [x, R, e, r, h, O, b]);
  se(() => {
    q(
      () => Qe(y),
      (k) => k.remove()
    );
  }, [q, y]);
  const B = N({ id: Ge() });
  we({
    element: d,
    id: B.current.id,
    drop: (k, ee) => s(k, ee, e, r, d, B.current.id),
    hover: (k, ee) => c(k, ee, e, r, d, B.current.id),
    leave: (k, ee) => o(k, ee, e, r, d, B.current.id)
  }, [e, r, s, c, o]);
  const I = W((k) => {
    if (!p || !S)
      return;
    const ee = p.getSelection();
    if (!ee)
      return;
    const ae = S.createRange(), m = k.currentTarget;
    ae.selectNodeContents(m), ee.removeAllRanges(), ee.addRange(ae);
  }, [p, S]), Y = W((k) => {
    k.stopPropagation(), (k.code === "Escape" || k.code === "Enter" || k.code === "NumpadEnter") && (k.currentTarget.blur(), f(e, k.currentTarget));
  }, [f, e]), re = W((k) => {
    T(!1), v(String(C(k.currentTarget.innerText, "text", "textContent", e))), f(e, k.currentTarget);
  }, [f, C, e]), ie = fe(() => E(u, "text", "textContent", e) ?? "", [u, E, e]);
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      contentEditable: R,
      dangerouslySetInnerHTML: { __html: ie },
      onBlur: re,
      onFocus: I,
      onKeyDown: Y,
      onDoubleClick: () => T(!0),
      ref: d,
      onMouseLeave: n,
      onClick: (k) => R ? k.stopPropagation() : i(k, e),
      onMouseOver: (k) => R ? k.stopPropagation() : t(k, e, d.current),
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
  const { onExpressionToValue: r } = xe(), t = H(e.text);
  return fe(() => r(t, "text", "textContent", e), [t, r, e]);
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
), Ve = ({ element: e, parents: r }) => {
  const t = H(e.type), { showInsertBar: n, hideInsertBar: i } = Me(), { select: o, updateSelectBar: c } = Pe(), { hover: s, updateHoverBar: l } = je(), { onDrop: f, value: d } = xe(), p = W((O, b) => {
    O.stopPropagation(), O.preventDefault(), o(b.id.value);
  }, [o]), S = W((O) => {
    O.stopPropagation(), O.preventDefault(), o(void 0), s(void 0);
  }, [o, s]), u = W((O, b) => {
    O.stopPropagation(), s(b.id.value);
  }, [s]), v = W((O) => {
    O.stopPropagation(), s(void 0);
  }, [s]), y = W((O, b) => {
    l(O, () => ({
      top: (b == null ? void 0 : b.offsetTop) || 0,
      left: (b == null ? void 0 : b.offsetLeft) || 0,
      width: (b == null ? void 0 : b.getBoundingClientRect().width) || 0,
      height: (b == null ? void 0 : b.getBoundingClientRect().height) || 0
    }));
  }, [l]), x = W((O, b) => {
    c(O, r, () => ({
      top: (b == null ? void 0 : b.offsetTop) || 0,
      left: (b == null ? void 0 : b.offsetLeft) || 0,
      width: (b == null ? void 0 : b.getBoundingClientRect().width) || 0,
      height: (b == null ? void 0 : b.getBoundingClientRect().height) || 0
    }));
  }, [c, r]), E = W((O, b, h, M, A, R) => {
    if (!et(b, h, M, A, R))
      return s(void 0);
    s(h.id.value);
    const j = Qn(b, h, A);
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
  }, [n, s, i]), C = W((O, b, h, M, A, R) => {
    var B, I, Y, re, ie, k;
    if (!et(b, h, M, A, R))
      return;
    const j = Zn(b, h, A);
    if (!j)
      return;
    const q = j.isOverStart || j.isOverEnd;
    if (!(!q && h.type.value === "component")) {
      if (Object.keys(O).includes("id")) {
        const ee = O;
        if (q) {
          const ae = M.slice(-1).at(0), m = ((B = (ae ? ae.children : d).value) == null ? void 0 : B.findIndex((_) => _.id.value === h.id.value)) ?? -1;
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
        const ee = O, ae = (Y = ee.parents) == null ? void 0 : Y.slice(-1).at(0), m = ae || "root";
        if (m !== "root" && m.type.value === "component")
          return;
        const _ = ((re = (m === "root" ? d : m.children).value) == null ? void 0 : re.findIndex((L) => L.id.value === ee.element.id.value)) ?? -1;
        if (q) {
          const L = M.slice(-1).at(0), z = ((ie = (L ? L.children : d).value) == null ? void 0 : ie.findIndex((F) => F.id.value === h.id.value)) ?? -1;
          f({
            element: ee.element,
            from: {
              position: _,
              element: m
            },
            to: {
              element: L || "root",
              position: j.isOverStart ? z : z + 1
            }
          });
        } else {
          const L = ((k = h.children.value) == null ? void 0 : k.length) || -1;
          f({
            element: ee.element,
            from: {
              position: _,
              element: m
            },
            to: {
              element: h,
              position: j.isOverStart ? L : L + 1
            }
          });
        }
        o(ee.element.id.value);
      }
      i();
    }
  }, [o, f, i]);
  return t === "component" ? /* @__PURE__ */ g.jsx(
    Ho,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: E,
      onDragLeave: () => {
      },
      onDoubleClick: S,
      onSelect: p,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : t === "slot" ? /* @__PURE__ */ g.jsx(
    Go,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: E,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : t === "text" ? /* @__PURE__ */ g.jsx(
    Xo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: E,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: x
    }
  ) : /* @__PURE__ */ g.jsx(
    Uo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: E,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: x
    }
  );
}, Zo = () => {
  const e = N({ id: Ge() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = xe(), { updateSelectBarScroll: o, select: c } = Pe(), { showInsertBar: s, hideInsertBar: l } = Me(), { updateHoverBarScroll: f, hover: d } = je(), [p, S] = _e(null), u = H(r), v = W((b, h) => {
    var M;
    if (l(), !!b)
      if (Object.keys(b).includes("id"))
        n({
          element: b.id,
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
        const A = b, R = Jn(A.parents || []), T = R || "root", j = ((M = R == null ? void 0 : R.children.value) == null ? void 0 : M.findIndex((q) => q.id.value === A.element.id.value)) ?? -1;
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
  }, [r, c, l]), y = W((b, h) => {
    const M = p == null ? void 0 : p.lastElementChild;
    if (!M)
      return;
    const A = M.getBoundingClientRect();
    s({
      isVisible: !0,
      isHorizontal: !0,
      left: A.left,
      width: A.width,
      height: A.height,
      top: M ? A.top + A.height : A.top
    });
  }, [p == null ? void 0 : p.lastElementChild, s]), x = W((b, h) => {
    o(b, h), f(b, h);
  }, [o, f]), E = W((b) => {
    b.stopPropagation(), c(void 0);
  }, [c]), [{ isDraggingOver: C, isDraggingOverCurrent: O }] = we({
    drop: v,
    hover: y,
    id: e.current.id,
    element: { current: p },
    leave: () => {
      l(), d(void 0);
    }
  }, [v, y, l]);
  return /* @__PURE__ */ g.jsx(
    Ao,
    {
      styles: t,
      resetBody: !0,
      draggingHover: C || O,
      children: /* @__PURE__ */ g.jsxs(
        Mo,
        {
          onClick: E,
          onKeyDown: i,
          onScroll: x,
          onRef: S,
          children: [
            /* @__PURE__ */ g.jsx(Ln, {}),
            /* @__PURE__ */ g.jsx(oo, {}),
            /* @__PURE__ */ g.jsx(ro, {}),
            u.map((b) => /* @__PURE__ */ g.jsx(
              Ve,
              {
                parents: [],
                element: b
              },
              b.id.value
            )),
            u.length === 0 && /* @__PURE__ */ g.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ g.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function ii({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(ft, { children: /* @__PURE__ */ g.jsx(Bn, { ...i, children: /* @__PURE__ */ g.jsx(kn, { children: /* @__PURE__ */ g.jsx($n, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(to, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(Zo, {}) }) }) }) }) });
}
export {
  ii as UIEditor,
  oi as UiOverview
};
//# sourceMappingURL=index.es.js.map

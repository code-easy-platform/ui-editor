import Oe, { createContext as Ve, useContext as Ae, useRef as Y, useEffect as ce, useCallback as U, useMemo as de, memo as nr, createElement as st, forwardRef as on, useState as _r } from "react";
import { useDrag as _e, useDrop as Se, DragAndDropProvider as ut } from "react-use-drag-and-drop";
import { useSelectorValue as pe, useObserverValue as $, observe as fe, set as ve, useObserver as Le, selector as Tr } from "react-observing";
import { v4 as lt } from "uuid";
import an from "react-dom";
var cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, Ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function un() {
  if (Nr)
    return Ke;
  Nr = 1;
  var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(l, d, p) {
    var s, f = {}, x = null, u = null;
    p !== void 0 && (x = "" + p), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (u = d.ref);
    for (s in d)
      n.call(d, s) && !i.hasOwnProperty(s) && (f[s] = d[s]);
    if (l && l.defaultProps)
      for (s in d = l.defaultProps, d)
        f[s] === void 0 && (f[s] = d[s]);
    return { $$typeof: r, type: l, key: x, ref: u, props: f, _owner: o.current };
  }
  return Ke.Fragment = t, Ke.jsx = c, Ke.jsxs = c, Ke;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function ln() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Oe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function S(a) {
      if (a === null || typeof a != "object")
        return null;
      var O = v && a[v] || a[h];
      return typeof O == "function" ? O : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(a) {
      {
        for (var O = arguments.length, _ = new Array(O > 1 ? O - 1 : 0), k = 1; k < O; k++)
          _[k - 1] = arguments[k];
        E("error", a, _);
      }
    }
    function E(a, O, _) {
      {
        var k = w.ReactDebugCurrentFrame, ee = k.getStackAddendum();
        ee !== "" && (O += "%s", _ = _.concat([ee]));
        var ie = _.map(function(X) {
          return String(X);
        });
        ie.unshift("Warning: " + O), Function.prototype.apply.call(console[a], console, ie);
      }
    }
    var g = !1, y = !1, P = !1, I = !1, D = !1, M;
    M = Symbol.for("react.module.reference");
    function B(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === i || D || a === o || a === p || a === s || I || a === u || g || y || P || typeof a == "object" && a !== null && (a.$$typeof === x || a.$$typeof === f || a.$$typeof === c || a.$$typeof === l || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === M || a.getModuleId !== void 0));
    }
    function Q(a, O, _) {
      var k = a.displayName;
      if (k)
        return k;
      var ee = O.displayName || O.name || "";
      return ee !== "" ? _ + "(" + ee + ")" : _;
    }
    function K(a) {
      return a.displayName || "Context";
    }
    function j(a) {
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
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var O = a;
            return K(O) + ".Consumer";
          case c:
            var _ = a;
            return K(_._context) + ".Provider";
          case d:
            return Q(a, a.render, "ForwardRef");
          case f:
            var k = a.displayName || null;
            return k !== null ? k : j(a.type) || "Memo";
          case x: {
            var ee = a, ie = ee._payload, X = ee._init;
            try {
              return j(X(ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, ae = 0, ne, H, oe, ue, m, T, L;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function A() {
      {
        if (ae === 0) {
          ne = console.log, H = console.info, oe = console.warn, ue = console.error, m = console.group, T = console.groupCollapsed, L = console.groupEnd;
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
        ae++;
      }
    }
    function J() {
      {
        if (ae--, ae === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, a, {
              value: ne
            }),
            info: V({}, a, {
              value: H
            }),
            warn: V({}, a, {
              value: oe
            }),
            error: V({}, a, {
              value: ue
            }),
            group: V({}, a, {
              value: m
            }),
            groupCollapsed: V({}, a, {
              value: T
            }),
            groupEnd: V({}, a, {
              value: L
            })
          });
        }
        ae < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = w.ReactCurrentDispatcher, W;
    function N(a, O, _) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (ee) {
            var k = ee.stack.trim().match(/\n( *(at )?)/);
            W = k && k[1] || "";
          }
        return `
` + W + a;
      }
    }
    var Z = !1, q;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      q = new he();
    }
    function R(a, O) {
      if (!a || Z)
        return "";
      {
        var _ = q.get(a);
        if (_ !== void 0)
          return _;
      }
      var k;
      Z = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ie;
      ie = z.current, z.current = null, A();
      try {
        if (O) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (ge) {
              k = ge;
            }
            Reflect.construct(a, [], X);
          } else {
            try {
              X.call();
            } catch (ge) {
              k = ge;
            }
            a.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            k = ge;
          }
          a();
        }
      } catch (ge) {
        if (ge && k && typeof ge.stack == "string") {
          for (var G = ge.stack.split(`
`), ye = k.stack.split(`
`), se = G.length - 1, le = ye.length - 1; se >= 1 && le >= 0 && G[se] !== ye[le]; )
            le--;
          for (; se >= 1 && le >= 0; se--, le--)
            if (G[se] !== ye[le]) {
              if (se !== 1 || le !== 1)
                do
                  if (se--, le--, le < 0 || G[se] !== ye[le]) {
                    var me = `
` + G[se].replace(" at new ", " at ");
                    return a.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", a.displayName)), typeof a == "function" && q.set(a, me), me;
                  }
                while (se >= 1 && le >= 0);
              break;
            }
        }
      } finally {
        Z = !1, z.current = ie, J(), Error.prepareStackTrace = ee;
      }
      var Ue = a ? a.displayName || a.name : "", Be = Ue ? N(Ue) : "";
      return typeof a == "function" && q.set(a, Be), Be;
    }
    function xe(a, O, _) {
      return R(a, !1);
    }
    function ze(a) {
      var O = a.prototype;
      return !!(O && O.isReactComponent);
    }
    function Me(a, O, _) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return R(a, ze(a));
      if (typeof a == "string")
        return N(a);
      switch (a) {
        case p:
          return N("Suspense");
        case s:
          return N("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return xe(a.render);
          case f:
            return Me(a.type, O, _);
          case x: {
            var k = a, ee = k._payload, ie = k._init;
            try {
              return Me(ie(ee), O, _);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Mr = {}, Br = w.ReactDebugCurrentFrame;
    function Qe(a) {
      if (a) {
        var O = a._owner, _ = Me(a.type, a._source, O ? O.type : null);
        Br.setExtraStackFrame(_);
      } else
        Br.setExtraStackFrame(null);
    }
    function kt(a, O, _, k, ee) {
      {
        var ie = Function.call.bind(qe);
        for (var X in a)
          if (ie(a, X)) {
            var G = void 0;
            try {
              if (typeof a[X] != "function") {
                var ye = Error((k || "React class") + ": " + _ + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              G = a[X](O, X, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (se) {
              G = se;
            }
            G && !(G instanceof Error) && (Qe(ee), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, X, typeof G), Qe(null)), G instanceof Error && !(G.message in Mr) && (Mr[G.message] = !0, Qe(ee), C("Failed %s type: %s", _, G.message), Qe(null));
          }
      }
    }
    var Vt = Array.isArray;
    function lr(a) {
      return Vt(a);
    }
    function At(a) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, _ = O && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return _;
      }
    }
    function $t(a) {
      try {
        return Lr(a), !1;
      } catch {
        return !0;
      }
    }
    function Lr(a) {
      return "" + a;
    }
    function kr(a) {
      if ($t(a))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(a)), Lr(a);
    }
    var Ge = w.ReactCurrentOwner, Ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Vr, Ar, dr;
    dr = {};
    function Ft(a) {
      if (qe.call(a, "ref")) {
        var O = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function zt(a) {
      if (qe.call(a, "key")) {
        var O = Object.getOwnPropertyDescriptor(a, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Wt(a, O) {
      if (typeof a.ref == "string" && Ge.current && O && Ge.current.stateNode !== O) {
        var _ = j(Ge.current.type);
        dr[_] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Ge.current.type), a.ref), dr[_] = !0);
      }
    }
    function Ut(a, O) {
      {
        var _ = function() {
          Vr || (Vr = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Yt(a, O) {
      {
        var _ = function() {
          Ar || (Ar = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        _.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var Nt = function(a, O, _, k, ee, ie, X) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: O,
        ref: _,
        props: X,
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
        value: k
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function qt(a, O, _, k, ee) {
      {
        var ie, X = {}, G = null, ye = null;
        _ !== void 0 && (kr(_), G = "" + _), zt(O) && (kr(O.key), G = "" + O.key), Ft(O) && (ye = O.ref, Wt(O, ee));
        for (ie in O)
          qe.call(O, ie) && !Ht.hasOwnProperty(ie) && (X[ie] = O[ie]);
        if (a && a.defaultProps) {
          var se = a.defaultProps;
          for (ie in se)
            X[ie] === void 0 && (X[ie] = se[ie]);
        }
        if (G || ye) {
          var le = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          G && Ut(X, le), ye && Yt(X, le);
        }
        return Nt(a, G, ye, ee, k, Ge.current, X);
      }
    }
    var fr = w.ReactCurrentOwner, $r = w.ReactDebugCurrentFrame;
    function We(a) {
      if (a) {
        var O = a._owner, _ = Me(a.type, a._source, O ? O.type : null);
        $r.setExtraStackFrame(_);
      } else
        $r.setExtraStackFrame(null);
    }
    var vr;
    vr = !1;
    function pr(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function Hr() {
      {
        if (fr.current) {
          var a = j(fr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Gt(a) {
      return "";
    }
    var Fr = {};
    function Kt(a) {
      {
        var O = Hr();
        if (!O) {
          var _ = typeof a == "string" ? a : a.displayName || a.name;
          _ && (O = `

Check the top-level render call using <` + _ + ">.");
        }
        return O;
      }
    }
    function zr(a, O) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var _ = Kt(O);
        if (Fr[_])
          return;
        Fr[_] = !0;
        var k = "";
        a && a._owner && a._owner !== fr.current && (k = " It was passed a child from " + j(a._owner.type) + "."), We(a), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), We(null);
      }
    }
    function Wr(a, O) {
      {
        if (typeof a != "object")
          return;
        if (lr(a))
          for (var _ = 0; _ < a.length; _++) {
            var k = a[_];
            pr(k) && zr(k, O);
          }
        else if (pr(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var ee = S(a);
          if (typeof ee == "function" && ee !== a.entries)
            for (var ie = ee.call(a), X; !(X = ie.next()).done; )
              pr(X.value) && zr(X.value, O);
        }
      }
    }
    function Jt(a) {
      {
        var O = a.type;
        if (O == null || typeof O == "string")
          return;
        var _;
        if (typeof O == "function")
          _ = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === f))
          _ = O.propTypes;
        else
          return;
        if (_) {
          var k = j(O);
          kt(_, a.props, "prop", k, a);
        } else if (O.PropTypes !== void 0 && !vr) {
          vr = !0;
          var ee = j(O);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(a) {
      {
        for (var O = Object.keys(a.props), _ = 0; _ < O.length; _++) {
          var k = O[_];
          if (k !== "children" && k !== "key") {
            We(a), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), We(null);
            break;
          }
        }
        a.ref !== null && (We(a), C("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Ur = {};
    function Yr(a, O, _, k, ee, ie) {
      {
        var X = B(a);
        if (!X) {
          var G = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = Gt();
          ye ? G += ye : G += Hr();
          var se;
          a === null ? se = "null" : lr(a) ? se = "array" : a !== void 0 && a.$$typeof === r ? (se = "<" + (j(a.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : se = typeof a, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, G);
        }
        var le = qt(a, O, _, ee, ie);
        if (le == null)
          return le;
        if (X) {
          var me = O.children;
          if (me !== void 0)
            if (k)
              if (lr(me)) {
                for (var Ue = 0; Ue < me.length; Ue++)
                  Wr(me[Ue], a);
                Object.freeze && Object.freeze(me);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wr(me, a);
        }
        if (qe.call(O, "key")) {
          var Be = j(a), ge = Object.keys(O).filter(function(nn) {
            return nn !== "key";
          }), hr = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ur[Be + hr]) {
            var tn = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, hr, Be, tn, Be), Ur[Be + hr] = !0;
          }
        }
        return a === n ? Xt(le) : Jt(le), le;
      }
    }
    function Zt(a, O, _) {
      return Yr(a, O, _, !0);
    }
    function Qt(a, O, _) {
      return Yr(a, O, _, !1);
    }
    var en = Qt, rn = Zt;
    Je.Fragment = n, Je.jsx = en, Je.jsxs = rn;
  }()), Je;
}
process.env.NODE_ENV === "production" ? wr.exports = un() : wr.exports = ln();
var b = wr.exports;
const dt = Ve({});
function dn({ children: e, ...r }) {
  return /* @__PURE__ */ b.jsx(dt.Provider, { value: r, children: e });
}
const Pe = () => Ae(dt), ft = Ve({}), fn = ({ children: e, id: r, onSelect: t }) => {
  const n = Y({ onSelect: t, id: r });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ b.jsx(ft.Provider, { value: n.current, children: e });
}, $e = () => {
  const e = Ae(ft);
  return {
    select: U((t) => {
      e.onSelect(t);
    }, [e.id]),
    selectedId: e.id
  };
}, vt = Ve({}), vn = ({ children: e, id: r, onHover: t }) => {
  const n = Y({ onHover: t, id: r });
  return ce(() => {
    n.current.id = r;
  }, [r]), ce(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ b.jsx(vt.Provider, { value: n.current, children: e });
}, je = () => {
  const e = Ae(vt);
  return {
    hover: U((t) => {
      e.id.value !== t && e.onHover(t);
    }, [e.id]),
    hoveredId: e.id
  };
}, pn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, or = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
var pt = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(u, v) {
      return v = v || "", u.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), o = "A-Z" + r("C0-D6,D8-DE", "00"), i = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", c = function(u, v, h, S) {
      return u = u || t, v = v || n, h = h || o, S = S || i, {
        capitalize: new RegExp("(^|[" + u + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + u + "])+([" + v + h + "])", "g"),
        fill: new RegExp("[" + u + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + S + ")\\b", "g"),
        relax: new RegExp("([^" + h + "])([" + h + "]*)([" + h + "])(?=[^" + h + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
        hole: /[^\s]\s[^\s]/,
        apostrophe: /'/g,
        room: new RegExp("[" + u + "]")
      };
    }, l = c(), d = {
      re: l,
      unicodes: r,
      regexps: c,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(u) {
        return d.up.call(u.charAt(0)) + u.slice(1);
      },
      decap: function(u) {
        return d.low.call(u.charAt(0)) + u.slice(1);
      },
      deapostrophe: function(u) {
        return u.replace(l.apostrophe, "");
      },
      fill: function(u, v, h) {
        return v != null && (u = u.replace(l.fill, function(S, w) {
          return w ? v + w : "";
        })), h && (u = d.deapostrophe(u)), u;
      },
      prep: function(u, v, h, S) {
        if (u = u == null ? "" : u + "", !S && l.upper.test(u) && (u = d.low.call(u)), !v && !l.hole.test(u)) {
          var w = d.fill(u, " ");
          l.hole.test(w) && (u = w);
        }
        return !h && !l.room.test(u) && (u = u.replace(l.relax, d.relax)), u;
      },
      relax: function(u, v, h, S) {
        return v + " " + (h ? h + " " : "") + S;
      }
    }, p = {
      _: d,
      of: function(u) {
        for (var v = 0, h = d.types.length; v < h; v++)
          if (p[d.types[v]].apply(p, arguments) === u)
            return d.types[v];
      },
      flip: function(u) {
        return u.replace(/\w/g, function(v) {
          return (v == d.up.call(v) ? d.low : d.up).call(v);
        });
      },
      random: function(u) {
        return u.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? d.up : d.low).call(v);
        });
      },
      type: function(u, v) {
        p[u] = v, d.types.push(u);
      }
    }, s = {
      lower: function(u, v, h) {
        return d.fill(d.low.call(d.prep(u, v)), v, h);
      },
      snake: function(u) {
        return p.lower(u, "_", !0);
      },
      constant: function(u) {
        return p.upper(u, "_", !0);
      },
      camel: function(u) {
        return d.decap(p.pascal(u));
      },
      kebab: function(u) {
        return p.lower(u, "-", !0);
      },
      upper: function(u, v, h) {
        return d.fill(d.up.call(d.prep(u, v, !1, !0)), v, h);
      },
      capital: function(u, v, h) {
        return d.fill(d.prep(u).replace(l.capitalize, function(S, w, C) {
          return w + d.up.call(C);
        }), v, h);
      },
      header: function(u) {
        return p.capital(u, "-", !0);
      },
      pascal: function(u) {
        return d.fill(d.prep(u, !1, !0).replace(l.pascal, function(v, h, S) {
          return d.up.call(S);
        }), "", !0);
      },
      title: function(u) {
        return p.capital(u).replace(l.improper, function(v, h, S, w) {
          return S > 0 && S < w.lastIndexOf(" ") ? d.low.call(v) : v;
        });
      },
      sentence: function(u, v, h) {
        return u = p.lower(u).replace(l.sentence, function(S, w, C) {
          return w + d.up.call(C);
        }), v && v.forEach(function(S) {
          u = u.replace(new RegExp("\\b" + p.lower(S) + "\\b", "g"), d.cap);
        }), h && h.forEach(function(S) {
          u = u.replace(new RegExp("(\\b" + p.lower(S) + "\\. +)(\\w)"), function(w, C, E) {
            return C + d.low.call(E);
          });
        }), u;
      }
    };
    s.squish = s.pascal, p.default = p;
    for (var f in s)
      p.type(f, s[f]);
    var x = typeof x == "function" ? x : function() {
    };
    x(e.exports ? e.exports = p : this.Case = p);
  }).call(cn);
})(pt);
var hn = pt.exports;
const Gr = (e, r, t, n, o) => !(!n.current || e.droppableId !== o || e.draggingId === r.id.value || t.some((l) => e.draggingId === l.id.value)), yn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = t.current.getBoundingClientRect(), i = n ? 5 : o.height / 2, c = e.x - o.x, l = e.y - o.y, d = l >= 0 && l <= i, p = l >= o.height - i && l <= o.height, s = l >= i && l <= o.height - i, f = c >= 0 && c <= i, x = c >= o.width - i && c <= o.width, u = c >= i && c <= o.width - i;
  let v = !1, h = !1, S = !1, w = !1;
  if (n) {
    const C = p || x || d || f;
    v = u && s && !C, h = u && s && !C, S = p || x, w = d || f;
  } else
    S = (p || x) && !d, w = (d || f) && !p;
  return { isOverCurrentStart: v, isOverCurrentEnd: h, isOverEnd: S, isOverStart: w };
}, Ye = () => lt(), gn = () => /* @__PURE__ */ b.jsx("div", { className: "animate-pulse p-0.5 bg-[#3e8ce4] z-10" }), bn = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), ir = (e, r) => pe(({ get: n }) => {
  const o = [...r].reverse();
  let i;
  for (let c = 0; c < o.length; c++) {
    const l = o[c];
    if (n(l.type) === "slot-content" && (i = !1), n(l.type) === "component")
      if (i === !1)
        i = void 0;
      else
        return !0;
  }
  return !!i;
}, [r, e]), Ee = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const o = pe(({ get: i }) => {
    if (!e)
      return !1;
    const c = i(e);
    if (!r)
      return !1;
    const l = i(r);
    return c === l;
  }, [...n]);
  ce(() => {
    o && t();
  }, [o]);
}, xn = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: o, onSelect: i }) => {
  const c = Y(null), { selectedId: l } = $e(), { hoveredId: d } = je(), p = $(e.name);
  return Ee({
    value: d,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [d, e]), Ee({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [l, e]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (s) => i(s, e),
      onMouseOver: (s) => o(s, e, c.current),
      children: [
        p,
        "(Infinity loop)"
      ]
    }
  );
}, mn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p, onDoubleClick: s }) => {
  const f = Y(null), { onDragStart: x, onDragEnd: u, components: v } = Pe(), { selectedId: h } = $e(), { hoveredId: S } = je(), w = $(e.name), C = $(e.id), E = pe(({ get: D }) => {
    const M = D(v).find((B) => D(B.id) === D(e.referenceComponentId));
    return M ? D(M.content) : [];
  }, [v, e]);
  Ee({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [S, e]), Ee({
    value: h,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, f.current)
  }, [h, e]);
  const g = de(() => !E || E.length === 0 ? null : E.map((D) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: D,
      parents: [...r, e]
    },
    D.id.value
  )), [E, r, e]), { isDragging: y, preview: P } = _e({
    id: C,
    element: f,
    end: () => u(),
    data: { element: e, parents: r },
    start: () => {
      x();
    }
  }, [C, e, r, x, u]);
  ce(() => {
    P(
      () => or(w),
      (D) => D.remove()
    );
  }, [P, w]);
  const I = Y({ id: Ye() });
  return Se({
    element: f,
    id: I.current.id,
    drop: (D, M) => l(D, M, e, r, f, I.current.id),
    hover: (D, M) => c(D, M, e, r, f, I.current.id),
    leave: (D, M) => i(D, M, e, r, f, I.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: f,
        "data-dragging": y,
        className: "data-[dragging=true]:opacity-50",
        style: { paddingLeft: r.length * 8 },
        onMouseLeave: n,
        onClick: (D) => o(D, e),
        onDoubleClick: (D) => s(D, e),
        onMouseOver: (D) => t(D, e, f.current),
        children: w
      }
    ),
    g
  ] });
}, On = ({ element: e, parents: r }) => {
  const { components: t } = Pe();
  return pe(({ get: o }) => {
    const i = o(t).find((c) => o(c.id) === o(e.referenceComponentId));
    return i ? o(i.content) : [];
  }, [t, e]).map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      parents: [...r, e]
    },
    o.id.value
  ));
}, Sn = ({ element: e, parents: r, ...t }) => {
  const n = bn(e, r), o = ir(e, r);
  return n ? o ? null : /* @__PURE__ */ b.jsx(
    xn,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : o ? /* @__PURE__ */ b.jsx(
    On,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    mn,
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
}, wn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), f = $(e.children), x = $(e.name), u = $(e.id), { onDragStart: v, onDragEnd: h } = Pe(), { selectedId: S } = $e(), { hoveredId: w } = je();
  Ee({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [w, e]), Ee({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [S, e]);
  const C = de(() => !f || f.length === 0 ? null : f.map((P) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: P,
      parents: [...r, e]
    },
    P.id.value
  )), [f, r, e]), { isDragging: E, preview: g } = _e({
    id: u,
    element: s,
    data: { element: e, parents: r },
    start: () => {
      v();
    },
    end: () => h()
  }, [u, e, r, v, h]);
  ce(() => {
    g(
      () => or(x),
      (P) => P.remove()
    );
  }, [g, x]);
  const y = Y({ id: Ye() });
  return Se({
    element: s,
    id: y.current.id,
    drop: (P, I) => l(P, I, e, r, s, y.current.id),
    hover: (P, I) => c(P, I, e, r, s, y.current.id),
    leave: (P, I) => i(P, I, e, r, s, y.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: s,
        "data-dragging": E,
        className: "data-[dragging=true]:opacity-50",
        style: { paddingLeft: r.length * 8 },
        onMouseLeave: n,
        onClick: (P) => o(P, e),
        onMouseOver: (P) => t(P, e, s.current),
        children: x
      }
    ),
    C
  ] });
}, En = ({ element: e, parents: r }) => {
  const t = $(e.children);
  return de(() => !t || t.length === 0 ? null : t.map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      parents: [...r, e]
    },
    o.id.value
  )), [t, r, e]);
}, Cn = ({ element: e, parents: r, ...t }) => ir(e, r) ? /* @__PURE__ */ b.jsx(
  En,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ b.jsx(
  wn,
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
), Rn = (e, r) => {
  const { components: t } = Pe();
  return pe(({ get: n }) => {
    const o = n(t), i = [...r].reverse(), c = i.findIndex((p) => {
      var x;
      if (n(p.type) !== "component")
        return !1;
      const s = p;
      return n(e.componentId) === n(s.referenceComponentId) ? (x = n(s.slots)) == null ? void 0 : x.some((u) => n(u.referenceSlotId) === n(e.id)) : !1;
    });
    return !i.at(c) || i.slice(c + 1).reduce((p, s) => p !== void 0 ? p : n(s.type) === "slot-content" ? !1 : n(s.type) === "component" ? !0 : p, void 0) ? !1 : o.some((p) => n(p.id) === n(e.componentId));
  }, [r, e, t]);
}, ht = (e, r) => pe(({ get: t }) => {
  var i;
  const n = [...r].reverse().filter((c) => t(c.type) === "component").find((c) => t(c.referenceComponentId) === t(e.componentId));
  if (!n)
    return [];
  const o = (i = t(n.slots)) == null ? void 0 : i.find((c) => t(c.referenceSlotId) === t(e.id));
  return o ? [t(o.children), o] : [];
}, [r, e]), _n = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: o, onDragOver: i, onDrop: c, onHoverBar: l }) => {
  const d = Y(null), p = $(e.name), [s = [], f] = ht(e, r), { hoveredId: x } = je();
  Ee({
    value: x,
    matchWidthValue: f == null ? void 0 : f.id,
    effect() {
      f && l(e, d.current);
    }
  }, [x, f == null ? void 0 : f.id, e]);
  const u = Y({ id: Ye() });
  return Se({
    element: d,
    id: u.current.id,
    drop: (v, h) => f ? c(v, h, f, r, d, u.current.id) : void 0,
    hover: (v, h) => f ? i(v, h, f, r, d, u.current.id) : void 0,
    leave: (v, h) => f ? o(v, h, f, r, d, u.current.id) : void 0
  }, [f, r, c, i, o]), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        ref: d,
        style: { paddingLeft: r.length * 8 },
        onMouseLeave: n,
        onMouseOver: (v) => f ? t(v, f, d.current) : void 0,
        children: p
      }
    ),
    f && s.length > 0 && s.map((v) => /* @__PURE__ */ b.jsx(
      He,
      {
        element: v,
        parents: [...r, f]
      },
      v.id.value
    ))
  ] });
}, Tn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), { onDragStart: f, onDragEnd: x } = Pe(), { selectedId: u } = $e(), { hoveredId: v } = je(), h = $(e.name), S = $(e.id);
  Ee({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [v, e]), Ee({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [u, e]);
  const { isDragging: w, preview: C } = _e({
    id: S,
    element: s,
    end: () => x(),
    data: { element: e, parents: r },
    start: () => {
      f();
    }
  }, [S, e, r, f, x]);
  ce(() => {
    C(
      () => or(h),
      (g) => g.remove()
    );
  }, [C, h]);
  const E = Y({ id: Ye() });
  return Se({
    element: s,
    id: E.current.id,
    drop: (g, y) => l(g, y, e, r, s, E.current.id),
    hover: (g, y) => c(g, y, e, r, s, E.current.id),
    leave: (g, y) => i(g, y, e, r, s, E.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsx(b.Fragment, { children: /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: s,
      "data-dragging": w,
      className: "data-[dragging=true]:opacity-50",
      style: { paddingLeft: r.length * 8 },
      onMouseLeave: n,
      onClick: (g) => o(g, e),
      onMouseOver: (g) => t(g, e, s.current),
      children: h
    }
  ) });
}, Dn = ({ element: e, parents: r }) => {
  const [t = [], n] = ht(e, r);
  return n ? t.map((o) => /* @__PURE__ */ b.jsx(
    He,
    {
      element: o,
      parents: [...r, n]
    },
    o.id.value
  )) : null;
}, Pn = ({ element: e, parents: r, ...t }) => {
  const n = ir(e, r);
  return Rn(e, r) ? /* @__PURE__ */ b.jsx(
    _n,
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
  ) : n ? /* @__PURE__ */ b.jsx(
    Dn,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    Tn,
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
}, jn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), f = $(e.name), x = $(e.id), { onDragStart: u, onDragEnd: v } = Pe(), { selectedId: h } = $e(), { hoveredId: S } = je();
  Ee({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [S, e]), Ee({
    value: h,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [h, e]);
  const { isDragging: w, preview: C } = _e({
    id: x,
    element: s,
    end: () => v(),
    data: { element: e, parents: r },
    start: () => {
      u();
    }
  }, [x, e, r, u, v]);
  ce(() => {
    C(
      () => or(f),
      (g) => g.remove()
    );
  }, [C, f]);
  const E = Y({ id: Ye() });
  return Se({
    element: s,
    id: E.current.id,
    drop: (g, y) => l(g, y, e, r, s, E.current.id),
    hover: (g, y) => c(g, y, e, r, s, E.current.id),
    leave: (g, y) => i(g, y, e, r, s, E.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: s,
      "data-dragging": w,
      className: "data-[dragging=true]:opacity-50",
      style: { paddingLeft: r.length * 8 },
      onMouseLeave: n,
      onClick: (g) => o(g, e),
      onMouseOver: (g) => t(g, e, s.current),
      children: f
    }
  );
}, In = ({ element: e, parents: r, ...t }) => ir(e, r) ? null : /* @__PURE__ */ b.jsx(
  jn,
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
  const t = $(e.type), { onDrop: n, value: o } = Pe(), { select: i } = $e(), { hover: c } = je(), l = U((u, v) => {
    u.stopPropagation(), u.preventDefault(), i(v.id.value);
  }, [i]), d = U((u) => {
    u.stopPropagation(), u.preventDefault(), i(void 0), c(void 0);
  }, [i, c]), p = U((u, v) => {
    u.stopPropagation(), c(v.id.value);
  }, [c]), s = U((u) => {
    u.stopPropagation(), c(void 0);
  }, [c]), f = U((u, v, h, S, w, C) => {
    if (!Gr(v, h, S, w, C))
      return c(void 0);
    c(h.id.value);
  }, [c]), x = U((u, v, h, S, w, C) => {
    var P, I, D, M, B, Q;
    if (!Gr(v, h, S, w, C))
      return;
    const g = yn(v, h, w);
    if (!g)
      return;
    const y = g.isOverStart || g.isOverEnd;
    if (!(!y && h.type.value === "component"))
      if (Object.keys(u).includes("id")) {
        const K = u;
        if (y) {
          const j = S.slice(-1).at(0), V = ((P = (j ? j.children : o).value) == null ? void 0 : P.findIndex((ae) => ae.id.value === h.id.value)) ?? -1;
          n({
            element: K.id,
            from: { position: -1, element: null },
            to: {
              element: j || "root",
              position: g.isOverStart ? V : V + 1
            }
          });
        } else {
          const j = ((I = h.children.value) == null ? void 0 : I.length) || -1;
          n({
            element: K.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: g.isOverStart ? j : j + 1
            }
          });
        }
      } else {
        const K = u, j = (D = K.parents) == null ? void 0 : D.slice(-1).at(0), V = j || "root";
        if (V !== "root" && V.type.value === "component")
          return;
        const ae = ((M = (V === "root" ? o : V.children).value) == null ? void 0 : M.findIndex((ne) => ne.id.value === K.element.id.value)) ?? -1;
        if (y) {
          const ne = S.slice(-1).at(0), H = ((B = (ne ? ne.children : o).value) == null ? void 0 : B.findIndex((oe) => oe.id.value === h.id.value)) ?? -1;
          n({
            element: K.element,
            from: {
              position: ae,
              element: V
            },
            to: {
              element: ne || "root",
              position: g.isOverStart ? H : H + 1
            }
          });
        } else {
          const ne = ((Q = h.children.value) == null ? void 0 : Q.length) || -1;
          n({
            element: K.element,
            from: {
              position: ae,
              element: V
            },
            to: {
              element: h,
              position: g.isOverStart ? ne : ne + 1
            }
          });
        }
        i(K.element.id.value);
      }
  }, [i, n]);
  return t === "component" ? /* @__PURE__ */ b.jsx(
    Sn,
    {
      parents: r,
      element: e,
      onDrop: x,
      onDragOver: f,
      onDragLeave: () => {
      },
      onDoubleClick: d,
      onSelect: l,
      onMouseOver: p,
      onMouseLeave: s,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : t === "slot" ? /* @__PURE__ */ b.jsx(
    Pn,
    {
      parents: r,
      element: e,
      onDrop: x,
      onDragOver: f,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: p,
      onMouseLeave: s,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : t === "text" ? /* @__PURE__ */ b.jsx(
    In,
    {
      parents: r,
      element: e,
      onDrop: x,
      onDragOver: f,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: p,
      onMouseLeave: s,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  ) : /* @__PURE__ */ b.jsx(
    Cn,
    {
      parents: r,
      element: e,
      onDrop: x,
      onDragOver: f,
      onDragLeave: () => {
      },
      onSelect: l,
      onMouseOver: p,
      onMouseLeave: s,
      onHoverBar: () => null,
      onSelectBar: () => null
    }
  );
}, Mn = () => {
  const e = Y(null), r = Y({ id: Ye() }), { value: t, onDrop: n, onKeyDown: o } = Pe(), { select: i } = $e(), { hover: c } = je(), l = $(t), d = U((f, x) => {
    var u;
    if (f)
      if (Object.keys(f).includes("id"))
        n({
          element: f.id,
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
        const v = f, h = pn(v.parents || []), S = h || "root", w = ((u = h == null ? void 0 : h.children.value) == null ? void 0 : u.findIndex((C) => C.id.value === v.element.id.value)) ?? -1;
        n({
          element: v.element,
          from: {
            element: S,
            position: w
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), i(v.element.id.value);
      }
  }, [t, i]), p = U((f) => {
    f.stopPropagation(), i(void 0);
  }, [i]), [{ isDraggingOver: s }] = Se({
    drop: d,
    element: e,
    id: r.current.id,
    leave: () => c(void 0)
  }, [d]);
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      tabIndex: 0,
      onKeyDown: o,
      onClick: p,
      ref: e,
      className: "flex-1 h-full w-full outline-none",
      children: [
        l.map((f) => /* @__PURE__ */ b.jsx(
          He,
          {
            parents: [],
            element: f
          },
          f.id.value
        )),
        l.length === 0 && /* @__PURE__ */ b.jsx("p", { children: "Drag and drop here to start" }),
        s && /* @__PURE__ */ b.jsx(gn, {})
      ]
    }
  );
};
function ni({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...o }) {
  return /* @__PURE__ */ b.jsx(ut, { children: /* @__PURE__ */ b.jsx(dn, { ...o, children: /* @__PURE__ */ b.jsx(fn, { id: t, onSelect: e, children: /* @__PURE__ */ b.jsx(vn, { id: n, onHover: r, children: /* @__PURE__ */ b.jsx(Mn, {}) }) }) }) });
}
const yt = Ve({});
function Bn({ children: e, ...r }) {
  return /* @__PURE__ */ b.jsx(yt.Provider, { value: r, children: e });
}
const be = () => Ae(yt), gt = Ve({}), Ln = ({ children: e }) => {
  const r = Y(fe(!1)), t = Y(fe(!1)), n = Y(fe(0)), o = Y(fe(0)), i = Y(fe(0)), c = Y(fe(0)), l = de(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: o.current,
    observableLeft: i.current,
    observableTop: c.current
  }), []), d = U((s) => {
    ve(c.current, (f) => f !== s.top ? s.top : f), ve(i.current, (f) => f !== s.left ? s.left : f), ve(o.current, (f) => f !== s.width ? s.width : f), ve(n.current, (f) => f !== s.height ? s.height : f), ve(t.current, (f) => f !== s.isVisible ? s.isVisible : f), ve(r.current, (f) => f !== !!s.isHorizontal ? !!s.isHorizontal : f);
  }, []), p = U(() => {
    d({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [d]);
  return /* @__PURE__ */ b.jsx(gt.Provider, { value: { showInsertBar: d, hideInsertBar: p, observables: l }, children: e });
}, Ie = () => Ae(gt), kn = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: o, observableTop: i, observableWidth: c } = Ie().observables, [l] = Le(i), [d] = Le(o), [p] = Le(c), [s] = Le(r), [f] = Le(n), [x] = Le(t), u = de(() => ({
    width: x ? p : 4,
    height: x ? 4 : s,
    top: l - (x ? 2 : 0),
    left: d - (x ? 0 : 2)
  }), [s, x, d, l, p]);
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
}, bt = Ve({}), Vn = ({ children: e, id: r, onSelect: t }) => {
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
  }, [t]), /* @__PURE__ */ b.jsx(bt.Provider, { value: n.current, children: e });
};
var xt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Kr = Oe.createContext && /* @__PURE__ */ Oe.createContext(xt), An = ["attr", "size", "title"];
function $n(e, r) {
  if (e == null)
    return {};
  var t = Hn(e, r), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      n = i[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
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
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, rr.apply(this, arguments);
}
function Jr(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function tr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Jr(Object(t), !0).forEach(function(n) {
      Fn(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Jr(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Fn(e, r, t) {
  return r = zn(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function zn(e) {
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
function mt(e) {
  return e && e.map((r, t) => /* @__PURE__ */ Oe.createElement(r.tag, tr({
    key: t
  }, r.attr), mt(r.child)));
}
function ar(e) {
  return (r) => /* @__PURE__ */ Oe.createElement(Un, rr({
    attr: tr({}, e.attr)
  }, r), mt(e.child));
}
function Un(e) {
  var r = (t) => {
    var {
      attr: n,
      size: o,
      title: i
    } = e, c = $n(e, An), l = o || t.size || "1em", d;
    return t.className && (d = t.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ Oe.createElement("svg", rr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, c, {
      className: d,
      style: tr(tr({
        color: e.color || t.color
      }, t.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ Oe.createElement("title", null, i), e.children);
  };
  return Kr !== void 0 ? /* @__PURE__ */ Oe.createElement(Kr.Consumer, null, (t) => r(t)) : r(xt);
}
function Yn(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function Nn(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function qn(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function Gn(e) {
  return ar({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const Kn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, Xe = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function Jn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Ot(e) {
  return hn.camel(Jn(e));
}
const Xr = (e, r, t, n, o) => !(!n.current || e.droppableId !== o || e.draggingId === r.id.value || t.some((l) => e.draggingId === l.id.value)), Xn = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = t.current.getBoundingClientRect(), i = n ? 5 : o.height / 2, c = e.x - o.x, l = e.y - o.y, d = l >= 0 && l <= i, p = l >= o.height - i && l <= o.height, s = l >= i && l <= o.height - i, f = c >= 0 && c <= i, x = c >= o.width - i && c <= o.width, u = c >= i && c <= o.width - i;
  let v = !1, h = !1, S = !1, w = !1;
  if (n) {
    const C = p || x || d || f;
    v = u && s && !C, h = u && s && !C, S = p || x, w = d || f;
  } else
    S = (p || x) && !d, w = (d || f) && !p;
  return { isOverCurrentStart: v, isOverCurrentEnd: h, isOverEnd: S, isOverStart: w };
}, Zn = (e, r, t) => {
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
  const o = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = o ? 5 : n.height / 2, c = e.x - n.x, l = e.y - n.y, d = l >= n.height - i && l <= n.height, p = l >= i && l <= n.height - i, s = c >= 0 && c <= i, f = c >= n.width - i && c <= n.width, x = c >= i && c <= n.width - i;
  let u = !0, v = n.top, h = n.left, S = n.width, w = n.height;
  return d && (s || f || x) ? v = n.top + n.height : p && s ? u = !1 : p && f ? (h = n.left + n.width, u = !1) : x && p && (v = n.top + (o ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: u,
    left: h,
    width: S,
    height: w
  };
}, Ne = () => lt(), Te = () => {
  const e = Ae(bt), r = U((i) => {
    e.onSelect(i);
  }, [e.id]), t = U((i, c, l) => {
    ve(e.getPosition, () => l), ve(e.parents, c), ve(e.element, i);
  }, [e.getPosition]), n = U((i, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, i);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), o = U((i, c) => {
    ve(e.playgroundSize, { height: i, width: c });
  }, [e.playgroundSize]);
  return {
    select: r,
    selectedId: e.id,
    selectedElement: e.element,
    selectedElementParents: e.parents,
    updateSelectBar: t,
    updateSelectBarScroll: n,
    updateSelectBarPlaygroundSize: o,
    selectBarGetPosition: e.getPosition,
    selectBarPlaygroundSize: e.playgroundSize,
    selectBarDocumentVerticalScroll: e.documentVerticalScroll,
    selectBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, Qn = nr(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: o = 0, height: i = 0, color: c = "#4a87ee" }) => {
  const l = Y(null), d = de(() => {
    if (!l.current || n + l.current.getBoundingClientRect().width <= l.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const p = n + l.current.getBoundingClientRect().width;
    return l.current.ownerDocument.documentElement.clientWidth - p;
  }, [n]);
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "data-select": !0,
      style: {
        top: t,
        left: n,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: o,
        height: i,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: c,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ b.jsx(
        "span",
        {
          ref: l,
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
            top: t - 20 < 0 ? i + 20 >= 500 ? 0 : i : -20
          },
          children: e
        }
      )
    }
  );
}), eo = nr(() => {
  const e = Y(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: o } = be(), { hideInsertBar: i } = Ie(), {
    select: c,
    selectedId: l,
    selectedElement: d,
    selectBarGetPosition: p,
    selectedElementParents: s,
    selectBarDocumentVerticalScroll: f,
    selectBarDocumentHorizontalScroll: x
  } = Te(), u = $(s), v = $(d), h = $(l), S = pe(({ get: B }) => v ? B(v.name) : "", [v]), { width: w, height: C, top: E, left: g } = pe(({ get: B }) => {
    const Q = B(x), K = B(f), j = B(p);
    return j ? {
      width: j().width,
      height: j().height,
      top: j().top - K,
      left: j().left - Q
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [x, f, p]), y = U((B) => {
    B.stopPropagation();
    const Q = u == null ? void 0 : u.slice(-1).at(0);
    if (Q)
      if (Q.type.value === "slot-content") {
        const K = u == null ? void 0 : u.find((j) => {
          var V;
          return j.type.value !== "component" ? !1 : (V = j.slots.value) == null ? void 0 : V.some((ae) => ae.id.value === Q.id.value);
        });
        c(K == null ? void 0 : K.id.value);
      } else
        c(Q.id.value);
  }, [c, u]), P = U(() => {
    v && o(v);
  }, [o, v]), I = U(() => {
    v && n(v);
  }, [n, v]), { preview: D, isDragging: M } = _e({
    element: e,
    id: h || "default",
    start: () => {
      r();
    },
    end: () => {
      i(), t();
    },
    canDrag: !!v && Array.isArray(u),
    data: {
      element: v,
      parents: u
    }
  }, [h, v, u, i, r, t]);
  return ce(() => {
    D(
      () => Xe(S),
      (B) => B.remove()
    );
  }, [D, S]), !h || w === 0 && C === 0 && g === 0 && E === 0 ? null : /* @__PURE__ */ b.jsx(
    Qn,
    {
      zIndex: 1,
      top: E - 1,
      width: w,
      height: C,
      left: g - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ b.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        S,
        !M && /* @__PURE__ */ b.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          u && u.length > 0 && /* @__PURE__ */ b.jsx(Yn, { title: "Select parent", onClick: y, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx(Gn, { title: "Remove element", onClick: P, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx(Nn, { title: "Duplicate element and children", onClick: I, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ b.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ b.jsx(qn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), St = Ve({}), ro = ({ children: e, id: r, onHover: t }) => {
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
  }, [t]), /* @__PURE__ */ b.jsx(St.Provider, { value: n.current, children: e });
}, De = () => {
  const e = Ae(St), r = U((i) => {
    e.id.value !== i && e.onHover(i);
  }, [e.id]), t = U((i, c) => {
    ve(e.getPosition, () => c), ve(e.element, i);
  }, [e.getPosition]), n = U((i, c) => {
    ve(e.documentHorizontalScroll, c), ve(e.documentVerticalScroll, i);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), o = U((i, c) => {
    ve(e.playgroundSize, { height: i, width: c });
  }, [e.playgroundSize]);
  return {
    hover: r,
    hoveredId: e.id,
    hoveredElement: e.element,
    updateHoverBar: t,
    updateHoverBarScroll: n,
    updateHoverBarPlaygroundSize: o,
    hoverBarGetPosition: e.getPosition,
    hoverBarPlaygroundSize: e.playgroundSize,
    hoverBarDocumentVerticalScroll: e.documentVerticalScroll,
    hoverBarDocumentHorizontalScroll: e.documentHorizontalScroll
  };
}, to = nr(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: o = 0, height: i = 0, color: c = "#4a87ee" }) => {
  const l = Y(null), d = de(() => {
    if (!l.current || n + l.current.getBoundingClientRect().width <= l.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const p = n + l.current.getBoundingClientRect().width;
    return l.current.ownerDocument.documentElement.clientWidth - p;
  }, [n]);
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "data-hover": !0,
      style: {
        top: t,
        left: n,
        position: "fixed",
        border: "thin solid",
        pointerEvents: "none",
        width: o,
        height: i,
        fontSize: 14,
        zIndex: 5 + r,
        borderColor: c,
        fontFamily: "sans-serif"
      },
      children: /* @__PURE__ */ b.jsx(
        "span",
        {
          ref: l,
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
            top: t - 20 < 0 ? i + 20 >= 500 ? 0 : i : -20
          },
          children: e
        }
      )
    }
  );
}), no = nr(() => {
  const { selectedId: e } = Te(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: o,
    hoverBarDocumentHorizontalScroll: i
  } = De(), c = $(i), l = $(o), d = $(n), p = $(t), s = $(e), f = $(r), x = pe(({ get: w }) => p ? w(p.name) : "", [p]), { width: u, height: v, top: h, left: S } = de(() => d ? {
    width: d().width,
    height: d().height,
    top: d().top - l,
    left: d().left - c
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [c, l, d]);
  return !f || f === s || u === 0 && v === 0 && S === 0 && h === 0 ? null : /* @__PURE__ */ b.jsx(
    to,
    {
      zIndex: 1,
      top: h - 1,
      width: u,
      left: S - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ b.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: x })
    }
  );
});
var cr = {}, Ze = {}, Er = { exports: {} }, er = { exports: {} }, re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function oo() {
  if (Zr)
    return re;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var P = y.$$typeof;
      switch (P) {
        case r:
          switch (y = y.type, y) {
            case d:
            case p:
            case n:
            case i:
            case o:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case s:
                case v:
                case u:
                case c:
                  return y;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  function g(y) {
    return E(y) === p;
  }
  return re.AsyncMode = d, re.ConcurrentMode = p, re.ContextConsumer = l, re.ContextProvider = c, re.Element = r, re.ForwardRef = s, re.Fragment = n, re.Lazy = v, re.Memo = u, re.Portal = t, re.Profiler = i, re.StrictMode = o, re.Suspense = f, re.isAsyncMode = function(y) {
    return g(y) || E(y) === d;
  }, re.isConcurrentMode = g, re.isContextConsumer = function(y) {
    return E(y) === l;
  }, re.isContextProvider = function(y) {
    return E(y) === c;
  }, re.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === r;
  }, re.isForwardRef = function(y) {
    return E(y) === s;
  }, re.isFragment = function(y) {
    return E(y) === n;
  }, re.isLazy = function(y) {
    return E(y) === v;
  }, re.isMemo = function(y) {
    return E(y) === u;
  }, re.isPortal = function(y) {
    return E(y) === t;
  }, re.isProfiler = function(y) {
    return E(y) === i;
  }, re.isStrictMode = function(y) {
    return E(y) === o;
  }, re.isSuspense = function(y) {
    return E(y) === f;
  }, re.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === p || y === i || y === o || y === f || y === x || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === u || y.$$typeof === c || y.$$typeof === l || y.$$typeof === s || y.$$typeof === S || y.$$typeof === w || y.$$typeof === C || y.$$typeof === h);
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
var Qr;
function io() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, s = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, u = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function E(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === p || R === i || R === o || R === f || R === x || typeof R == "object" && R !== null && (R.$$typeof === v || R.$$typeof === u || R.$$typeof === c || R.$$typeof === l || R.$$typeof === s || R.$$typeof === S || R.$$typeof === w || R.$$typeof === C || R.$$typeof === h);
    }
    function g(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case r:
            var ze = R.type;
            switch (ze) {
              case d:
              case p:
              case n:
              case i:
              case o:
              case f:
                return ze;
              default:
                var Me = ze && ze.$$typeof;
                switch (Me) {
                  case l:
                  case s:
                  case v:
                  case u:
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
    var y = d, P = p, I = l, D = c, M = r, B = s, Q = n, K = v, j = u, V = t, ae = i, ne = o, H = f, oe = !1;
    function ue(R) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(R) || g(R) === d;
    }
    function m(R) {
      return g(R) === p;
    }
    function T(R) {
      return g(R) === l;
    }
    function L(R) {
      return g(R) === c;
    }
    function F(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function A(R) {
      return g(R) === s;
    }
    function J(R) {
      return g(R) === n;
    }
    function z(R) {
      return g(R) === v;
    }
    function W(R) {
      return g(R) === u;
    }
    function N(R) {
      return g(R) === t;
    }
    function Z(R) {
      return g(R) === i;
    }
    function q(R) {
      return g(R) === o;
    }
    function he(R) {
      return g(R) === f;
    }
    te.AsyncMode = y, te.ConcurrentMode = P, te.ContextConsumer = I, te.ContextProvider = D, te.Element = M, te.ForwardRef = B, te.Fragment = Q, te.Lazy = K, te.Memo = j, te.Portal = V, te.Profiler = ae, te.StrictMode = ne, te.Suspense = H, te.isAsyncMode = ue, te.isConcurrentMode = m, te.isContextConsumer = T, te.isContextProvider = L, te.isElement = F, te.isForwardRef = A, te.isFragment = J, te.isLazy = z, te.isMemo = W, te.isPortal = N, te.isProfiler = Z, te.isStrictMode = q, te.isSuspense = he, te.isValidElementType = E, te.typeOf = g;
  }()), te;
}
var et;
function wt() {
  return et || (et = 1, process.env.NODE_ENV === "production" ? er.exports = oo() : er.exports = io()), er.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var yr, rt;
function ao() {
  if (rt)
    return yr;
  rt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var c = {}, l = 0; l < 10; l++)
        c["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(c).map(function(s) {
        return c[s];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(s) {
        p[s] = s;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return yr = o() ? Object.assign : function(i, c) {
    for (var l, d = n(i), p, s = 1; s < arguments.length; s++) {
      l = Object(arguments[s]);
      for (var f in l)
        r.call(l, f) && (d[f] = l[f]);
      if (e) {
        p = e(l);
        for (var x = 0; x < p.length; x++)
          t.call(l, p[x]) && (d[p[x]] = l[p[x]]);
      }
    }
    return d;
  }, yr;
}
var gr, tt;
function Dr() {
  if (tt)
    return gr;
  tt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gr = e, gr;
}
var br, nt;
function Et() {
  return nt || (nt = 1, br = Function.call.bind(Object.prototype.hasOwnProperty)), br;
}
var xr, ot;
function co() {
  if (ot)
    return xr;
  ot = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Dr(), t = {}, n = Et();
    e = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function o(i, c, l, d, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var s in i)
        if (n(i, s)) {
          var f;
          try {
            if (typeof i[s] != "function") {
              var x = Error(
                (d || "React class") + ": " + l + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            f = i[s](c, s, d, l, null, r);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (d || "React class") + ": type specification of " + l + " `" + s + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in t)) {
            t[f.message] = !0;
            var u = p ? p() : "";
            e(
              "Failed " + l + " type: " + f.message + (u ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xr = o, xr;
}
var mr, it;
function so() {
  if (it)
    return mr;
  it = 1;
  var e = wt(), r = ao(), t = Dr(), n = Et(), o = co(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var d = "Warning: " + l;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return mr = function(l, d) {
    var p = typeof Symbol == "function" && Symbol.iterator, s = "@@iterator";
    function f(m) {
      var T = m && (p && m[p] || m[s]);
      if (typeof T == "function")
        return T;
    }
    var x = "<<anonymous>>", u = {
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
      element: g(),
      elementType: y(),
      instanceOf: P,
      node: B(),
      objectOf: D,
      oneOf: I,
      oneOfType: M,
      shape: K,
      exact: j
    };
    function v(m, T) {
      return m === T ? m !== 0 || 1 / m === 1 / T : m !== m && T !== T;
    }
    function h(m, T) {
      this.message = m, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function S(m) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, L = 0;
      function F(J, z, W, N, Z, q, he) {
        if (N = N || x, q = q || W, he !== t) {
          if (d) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = N + ":" + W;
            !T[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[xe] = !0, L++);
          }
        }
        return z[W] == null ? J ? z[W] === null ? new h("The " + Z + " `" + q + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new h("The " + Z + " `" + q + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : m(z, W, N, Z, q);
      }
      var A = F.bind(null, !1);
      return A.isRequired = F.bind(null, !0), A;
    }
    function w(m) {
      function T(L, F, A, J, z, W) {
        var N = L[F], Z = ne(N);
        if (Z !== m) {
          var q = H(N);
          return new h(
            "Invalid " + J + " `" + z + "` of type " + ("`" + q + "` supplied to `" + A + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return S(T);
    }
    function C() {
      return S(c);
    }
    function E(m) {
      function T(L, F, A, J, z) {
        if (typeof m != "function")
          return new h("Property `" + z + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var W = L[F];
        if (!Array.isArray(W)) {
          var N = ne(W);
          return new h("Invalid " + J + " `" + z + "` of type " + ("`" + N + "` supplied to `" + A + "`, expected an array."));
        }
        for (var Z = 0; Z < W.length; Z++) {
          var q = m(W, Z, A, J, z + "[" + Z + "]", t);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return S(T);
    }
    function g() {
      function m(T, L, F, A, J) {
        var z = T[L];
        if (!l(z)) {
          var W = ne(z);
          return new h("Invalid " + A + " `" + J + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(m);
    }
    function y() {
      function m(T, L, F, A, J) {
        var z = T[L];
        if (!e.isValidElementType(z)) {
          var W = ne(z);
          return new h("Invalid " + A + " `" + J + "` of type " + ("`" + W + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(m);
    }
    function P(m) {
      function T(L, F, A, J, z) {
        if (!(L[F] instanceof m)) {
          var W = m.name || x, N = ue(L[F]);
          return new h("Invalid " + J + " `" + z + "` of type " + ("`" + N + "` supplied to `" + A + "`, expected ") + ("instance of `" + W + "`."));
        }
        return null;
      }
      return S(T);
    }
    function I(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function T(L, F, A, J, z) {
        for (var W = L[F], N = 0; N < m.length; N++)
          if (v(W, m[N]))
            return null;
        var Z = JSON.stringify(m, function(he, R) {
          var xe = H(R);
          return xe === "symbol" ? String(R) : R;
        });
        return new h("Invalid " + J + " `" + z + "` of value `" + String(W) + "` " + ("supplied to `" + A + "`, expected one of " + Z + "."));
      }
      return S(T);
    }
    function D(m) {
      function T(L, F, A, J, z) {
        if (typeof m != "function")
          return new h("Property `" + z + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var W = L[F], N = ne(W);
        if (N !== "object")
          return new h("Invalid " + J + " `" + z + "` of type " + ("`" + N + "` supplied to `" + A + "`, expected an object."));
        for (var Z in W)
          if (n(W, Z)) {
            var q = m(W, Z, A, J, z + "." + Z, t);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return S(T);
    }
    function M(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var T = 0; T < m.length; T++) {
        var L = m[T];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(L) + " at index " + T + "."
          ), c;
      }
      function F(A, J, z, W, N) {
        for (var Z = [], q = 0; q < m.length; q++) {
          var he = m[q], R = he(A, J, z, W, N, t);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && Z.push(R.data.expectedType);
        }
        var xe = Z.length > 0 ? ", expected one of type [" + Z.join(", ") + "]" : "";
        return new h("Invalid " + W + " `" + N + "` supplied to " + ("`" + z + "`" + xe + "."));
      }
      return S(F);
    }
    function B() {
      function m(T, L, F, A, J) {
        return V(T[L]) ? null : new h("Invalid " + A + " `" + J + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return S(m);
    }
    function Q(m, T, L, F, A) {
      return new h(
        (m || "React class") + ": " + T + " type `" + L + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function K(m) {
      function T(L, F, A, J, z) {
        var W = L[F], N = ne(W);
        if (N !== "object")
          return new h("Invalid " + J + " `" + z + "` of type `" + N + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var Z in m) {
          var q = m[Z];
          if (typeof q != "function")
            return Q(A, J, z, Z, H(q));
          var he = q(W, Z, A, J, z + "." + Z, t);
          if (he)
            return he;
        }
        return null;
      }
      return S(T);
    }
    function j(m) {
      function T(L, F, A, J, z) {
        var W = L[F], N = ne(W);
        if (N !== "object")
          return new h("Invalid " + J + " `" + z + "` of type `" + N + "` " + ("supplied to `" + A + "`, expected `object`."));
        var Z = r({}, L[F], m);
        for (var q in Z) {
          var he = m[q];
          if (n(m, q) && typeof he != "function")
            return Q(A, J, z, q, H(he));
          if (!he)
            return new h(
              "Invalid " + J + " `" + z + "` key `" + q + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(L[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var R = he(W, q, A, J, z + "." + q, t);
          if (R)
            return R;
        }
        return null;
      }
      return S(T);
    }
    function V(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(V);
          if (m === null || l(m))
            return !0;
          var T = f(m);
          if (T) {
            var L = T.call(m), F;
            if (T !== m.entries) {
              for (; !(F = L.next()).done; )
                if (!V(F.value))
                  return !1;
            } else
              for (; !(F = L.next()).done; ) {
                var A = F.value;
                if (A && !V(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(m, T) {
      return m === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function ne(m) {
      var T = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : ae(T, m) ? "symbol" : T;
    }
    function H(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var T = ne(m);
      if (T === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function oe(m) {
      var T = H(m);
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
    function ue(m) {
      return !m.constructor || !m.constructor.name ? x : m.constructor.name;
    }
    return u.checkPropTypes = o, u.resetWarningCache = o.resetWarningCache, u.PropTypes = u, u;
  }, mr;
}
var Or, at;
function uo() {
  if (at)
    return Or;
  at = 1;
  var e = Dr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Or = function() {
    function n(c, l, d, p, s, f) {
      if (f !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Or;
}
if (process.env.NODE_ENV !== "production") {
  var lo = wt(), fo = !0;
  Er.exports = so()(lo.isElement, fo);
} else
  Er.exports = uo()();
var Ct = Er.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.FrameContextConsumer = we.FrameContextProvider = we.useFrame = we.FrameContext = void 0;
var vo = Oe, Rt = po(vo);
function po(e) {
  return e && e.__esModule ? e : { default: e };
}
var _t = void 0, Tt = void 0;
typeof document < "u" && (_t = document);
typeof window < "u" && (Tt = window);
var Pr = we.FrameContext = Rt.default.createContext({ document: _t, window: Tt });
we.useFrame = function() {
  return Rt.default.useContext(Pr);
};
var ho = Pr.Provider, yo = Pr.Consumer;
we.FrameContextProvider = ho;
we.FrameContextConsumer = yo;
var jr = {};
Object.defineProperty(jr, "__esModule", {
  value: !0
});
var go = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), Cr = Oe;
Dt(Cr);
var bo = Ct, Sr = Dt(bo);
function Dt(e) {
  return e && e.__esModule ? e : { default: e };
}
function xo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function mo(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Oo(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Pt = function(e) {
  Oo(r, e);
  function r() {
    return xo(this, r), mo(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return go(r, [{
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
      return Cr.Children.only(this.props.children);
    }
  }]), r;
}(Cr.Component);
Pt.propTypes = {
  children: Sr.default.element.isRequired,
  contentDidMount: Sr.default.func.isRequired,
  contentDidUpdate: Sr.default.func.isRequired
};
jr.default = Pt;
Object.defineProperty(Ze, "__esModule", {
  value: !0
});
Ze.Frame = void 0;
var Rr = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }
  return e;
}, So = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), jt = Oe, ke = sr(jt), wo = an, ct = sr(wo), Eo = Ct, Re = sr(Eo), Co = we, Ro = jr, _o = sr(Ro);
function sr(e) {
  return e && e.__esModule ? e : { default: e };
}
function To(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Do(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Po(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Ir = Ze.Frame = function(e) {
  Po(r, e);
  function r(t, n) {
    To(this, r);
    var o = Do(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, n));
    return o.setRef = function(i) {
      o.nodeRef.current = i;
      var c = o.props.forwardedRef;
      typeof c == "function" ? c(i) : c && (c.current = i);
    }, o.handleLoad = function() {
      clearInterval(o.loadCheck), o.state.iframeLoaded || o.setState({ iframeLoaded: !0 });
    }, o.loadCheck = function() {
      return setInterval(function() {
        o.handleLoad();
      }, 500);
    }, o._isMounted = !1, o.nodeRef = ke.default.createRef(), o.state = { iframeLoaded: !1 }, o;
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
      var o = this.props.contentDidMount, i = this.props.contentDidUpdate, c = n.defaultView || n.parentView, l = ke.default.createElement(
        _o.default,
        {
          contentDidMount: o,
          contentDidUpdate: i
        },
        ke.default.createElement(
          Co.FrameContextProvider,
          { value: { document: n, window: c } },
          ke.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), d = this.getMountTarget();
      return d ? [ct.default.createPortal(this.props.head, this.getDoc().head), ct.default.createPortal(l, d)] : null;
    }
  }, {
    key: "render",
    value: function() {
      var n = Rr({}, this.props, {
        srcDoc: this.props.initialContent,
        children: void 0
        // The iframe isn't ready so we drop children from props here. #12, #17
      });
      return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, ke.default.createElement(
        "iframe",
        Rr({}, n, { ref: this.setRef, onLoad: this.handleLoad }),
        this.state.iframeLoaded && this.renderFrameContents()
      );
    }
  }]), r;
}(jt.Component);
Ir.propTypes = {
  style: Re.default.object,
  // eslint-disable-line
  head: Re.default.node,
  initialContent: Re.default.string,
  mountTarget: Re.default.string,
  contentDidMount: Re.default.func,
  contentDidUpdate: Re.default.func,
  children: Re.default.oneOfType([Re.default.element, Re.default.arrayOf(Re.default.element)])
};
Ir.defaultProps = {
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
Ze.default = ke.default.forwardRef(function(e, r) {
  return ke.default.createElement(Ir, Rr({}, e, { forwardedRef: r }));
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = Ze;
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
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
})(cr);
const jo = /* @__PURE__ */ sn(cr), Io = ({ children: e, onScroll: r, onRef: t, onKeyDown: n, onClick: o }) => {
  const { document: i } = cr.useFrame();
  return ce(() => {
    i && t(i);
  }, [t, i]), ce(() => {
    i && (i.onclick = o, i.onkeydown = n, i.onscroll = (c) => r(c.target.documentElement.scrollTop, c.target.documentElement.scrollLeft));
  }, [i, r, n, o]), e;
}, Mo = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const o = $(
    de(() => Tr(({ get: c }) => c(r).map((l) => ({
      id: c(l.id),
      content: c(l.content)
    }))), [r])
  ), i = de(() => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    o.map((c) => st("style", { key: c.id }, c.content)),
    /* @__PURE__ */ b.jsx("style", { children: [
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
  ] }), [o, n]);
  return /* @__PURE__ */ b.jsx(
    jo,
    {
      tabIndex: -1,
      head: i,
      mountTarget: "body",
      onContextMenu: (c) => c.preventDefault(),
      className: "w-full h-full bg-white border-none outline-none",
      initialContent: '<html tabindex="0"><head></head><body style="min-height: 500px"></body></html>',
      children: e
    }
  );
}, Bo = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), ur = (e, r) => pe(({ get: n }) => {
  const o = [...r].reverse();
  let i;
  for (let c = 0; c < o.length; c++) {
    const l = o[c];
    if (n(l.type) === "slot-content" && (i = !1), n(l.type) === "component")
      if (i === !1)
        i = void 0;
      else
        return !0;
  }
  return !!i;
}, [r, e]), Lo = ({ element: e }) => {
  const r = $(e.name);
  return /* @__PURE__ */ b.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ b.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Ce = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const o = pe(({ get: i }) => {
    if (!e)
      return !1;
    const c = i(e);
    if (!r)
      return !1;
    const l = i(r);
    return c === l;
  }, [...n]);
  ce(() => {
    o && t();
  }, [o]);
}, ko = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: o, onSelect: i }) => {
  const c = Y(null), { selectedId: l } = Te(), { hoveredId: d } = De(), p = $(e.name);
  return Ce({
    value: d,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [d, e]), Ce({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [l, e]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (s) => i(s, e),
      onMouseOver: (s) => o(s, e, c.current),
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
        /* @__PURE__ */ b.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: p }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, Vo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p, onDoubleClick: s }) => {
  const f = Y(null), { onDragStart: x, onDragEnd: u, components: v } = be(), { hideInsertBar: h } = Ie(), { selectedId: S } = Te(), { hoveredId: w } = De(), C = $(e.name), E = $(e.id), g = pe(({ get: M }) => {
    const B = M(v).find((Q) => M(Q.id) === M(e.referenceComponentId));
    return B ? M(B.content) : [];
  }, [v, e]);
  Ce({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, f.current)
  }, [w, e]), Ce({
    value: S,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, f.current)
  }, [S, e]);
  const y = de(() => !g || g.length === 0 ? null : g.map((M) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: M,
      parents: [...r, e]
    },
    M.id.value
  )), [g, r, e]), { isDragging: P, preview: I } = _e({
    id: E,
    element: f,
    data: { element: e, parents: r },
    start: () => {
      x();
    },
    end: () => {
      h(), u();
    }
  }, [E, e, r, h, x, u]);
  ce(() => {
    I(
      () => Xe(C),
      (M) => M.remove()
    );
  }, [I, C]);
  const D = Y({ id: Ne() });
  return Se({
    element: f,
    id: D.current.id,
    drop: (M, B) => l(M, B, e, r, f, D.current.id),
    hover: (M, B) => c(M, B, e, r, f, D.current.id),
    leave: (M, B) => i(M, B, e, r, f, D.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsx(
    "div",
    {
      ref: f,
      onMouseLeave: n,
      onClick: (M) => o(M, e),
      onDoubleClick: (M) => s(M, e),
      onMouseOver: (M) => t(M, e, f.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: P ? 0.5 : void 0 },
      children: y
    }
  );
}, Ao = ({ element: e, parents: r }) => {
  const { components: t } = be(), n = pe(({ get: o }) => {
    const i = o(t).find((c) => o(c.id) === o(e.referenceComponentId));
    return i ? o(i.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ b.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((o) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: o,
      parents: [...r, e]
    },
    o.id.value
  )) });
}, $o = ({ element: e, parents: r, ...t }) => {
  const n = Bo(e, r), o = ur(e, r);
  return n ? o ? /* @__PURE__ */ b.jsx(Lo, { element: e }) : /* @__PURE__ */ b.jsx(
    ko,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : o ? /* @__PURE__ */ b.jsx(
    Ao,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    Vo,
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
}, It = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Tr(({ get: n }) => {
    const o = n(e.style);
    if (!o)
      return {};
    const i = {};
    return o.forEach((c) => {
      const l = n(c.name), d = n(c.value);
      l && (i[Ot(l)] = r(d, l, "style", e));
    }), i;
  }), [e, r, e]);
  return $(t);
}, Mt = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Tr({
    get({ get: n }) {
      const o = n(e.attributes);
      if (!o)
        return [{}, {}];
      const i = {}, c = {};
      return o.forEach((l) => {
        const d = n(l.name);
        if (d === void 0 || d === "hidden" || d === "style")
          return;
        const p = r(n(l.value), d, "attribute", e), s = Ot(d);
        switch (s) {
          case "options":
            c.options = p;
            break;
          case "className":
            i.className = p;
            break;
          case "class":
            i.className = p;
            break;
          default:
            if (d.startsWith("data-")) {
              i[d] = p;
              return;
            } else
              i[s] = p;
            break;
        }
      }), [i, c];
    }
  }), [e, r]);
  return $(t);
}, Bt = on(({ tag: e, ...r }, t) => st(e, { ref: t, ...r })), Ho = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), [f, x] = _r(!1), [
    u
    /* elementSpecialProps */
  ] = Mt(e), v = $(e.children), h = It(e), S = $(e.name), w = $(e.tag), C = $(e.id), { onDragStart: E, onDragEnd: g } = be(), { hideInsertBar: y } = Ie(), { selectedId: P } = Te(), { hoveredId: I } = De();
  Ce({
    value: I,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [I, e]), Ce({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [P, e]), ce(() => {
    x((V) => I.value === C === V ? V : !V);
    const j = I.subscribe((V) => {
      x((ae) => V === C === ae ? ae : !ae);
    });
    return () => j.unsubscribe();
  }, [C, I]);
  const D = de(() => !v || v.length === 0 ? null : v.map((j) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: j,
      parents: [...r, e]
    },
    j.id.value
  )), [v, r, e]), M = de(() => v !== void 0, [v]), { isDragging: B, preview: Q } = _e({
    id: C,
    element: s,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      y(), g();
    }
  }, [C, e, r, y, E, g]);
  ce(() => {
    Q(
      () => Xe(S),
      (j) => j.remove()
    );
  }, [Q, S]);
  const K = Y({ id: Ne() });
  return Se({
    element: s,
    id: K.current.id,
    drop: (j, V) => l(j, V, e, r, s, K.current.id),
    hover: (j, V) => c(j, V, e, r, s, K.current.id),
    leave: (j, V) => i(j, V, e, r, s, K.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsx(
    Bt,
    {
      readOnly: !0,
      tag: w,
      ref: s,
      children: D,
      onMouseLeave: n,
      onClick: (j) => o(j, e),
      onMouseOver: (j) => t(j, e, s.current),
      ...u !== void 0 ? { ...u, ...f ? { disabled: !1 } : {} } : {},
      style: {
        ...h,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: B ? 0.5 : typeof h.opacity == "number" ? Number(h.opacity) : void 0,
        minWidth: D === null && M ? 40 : typeof h.minWidth == "number" ? Number(h.minWidth) : void 0,
        minHeight: D === null && M ? 40 : typeof h.minHeight == "number" ? Number(h.minHeight) : void 0
      }
    }
  );
}, Fo = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = Mt(e), n = $(e.children), o = It(e), i = $(e.tag), c = de(() => !n || n.length === 0 ? null : n.map((l) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: l,
      parents: [...r, e]
    },
    l.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ b.jsx(
    Bt,
    {
      tag: i,
      children: c,
      ...t !== void 0 ? t : {},
      style: {
        ...o,
        resize: "none",
        outline: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "none"
      }
    }
  );
}, zo = ({ element: e, parents: r, ...t }) => ur(e, r) ? /* @__PURE__ */ b.jsx(
  Fo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ b.jsx(
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
), Wo = (e, r) => {
  const { components: t } = be();
  return pe(({ get: n }) => {
    const o = n(t), i = [...r].reverse(), c = i.findIndex((p) => {
      var x;
      if (n(p.type) !== "component")
        return !1;
      const s = p;
      return n(e.componentId) === n(s.referenceComponentId) ? (x = n(s.slots)) == null ? void 0 : x.some((u) => n(u.referenceSlotId) === n(e.id)) : !1;
    });
    return !i.at(c) || i.slice(c + 1).reduce((p, s) => p !== void 0 ? p : n(s.type) === "slot-content" ? !1 : n(s.type) === "component" ? !0 : p, void 0) ? !1 : o.some((p) => n(p.id) === n(e.componentId));
  }, [r, e, t]);
}, Lt = (e, r) => {
  const { onAddSlotContent: t } = be();
  return pe(({ get: n }) => {
    var c;
    const o = [...r].reverse().filter((l) => n(l.type) === "component").find((l) => n(l.referenceComponentId) === n(e.componentId));
    if (!o)
      return [];
    const i = (c = n(o.slots)) == null ? void 0 : c.find((l) => n(l.referenceSlotId) === n(e.id));
    return i ? [n(i.children), i] : (setTimeout(() => t(e, o), 0), []);
  }, [r, e, t]);
}, Uo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: o, onDragOver: i, onDrop: c, onHoverBar: l }) => {
  const d = Y(null), [p = [], s] = Lt(e, r), { hoveredId: f } = De();
  Ce({
    value: f,
    matchWidthValue: s == null ? void 0 : s.id,
    effect() {
      s && l(e, d.current);
    }
  }, [f, s == null ? void 0 : s.id, e]);
  const x = Y({ id: Ne() });
  return Se({
    element: d,
    id: x.current.id,
    drop: (u, v) => s ? c(u, v, s, r, d, x.current.id) : void 0,
    hover: (u, v) => s ? i(u, v, s, r, d, x.current.id) : void 0,
    leave: (u, v) => s ? o(u, v, s, r, d, x.current.id) : void 0
  }, [s, r, c, i, o]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (u) => s ? t(u, s, d.current) : void 0,
      children: [
        s && p.length > 0 && p.map((u) => /* @__PURE__ */ b.jsx(
          Fe,
          {
            element: u,
            parents: [...r, s]
          },
          u.id.value
        )),
        p.length === 0 && /* @__PURE__ */ b.jsx(
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
}, Yo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), { onDragStart: f, onDragEnd: x } = be(), { hideInsertBar: u } = Ie(), { selectedId: v } = Te(), { hoveredId: h } = De(), S = $(e.name), w = $(e.id);
  Ce({
    value: h,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [h, e]), Ce({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [v, e]);
  const { isDragging: C, preview: E } = _e({
    id: w,
    element: s,
    data: { element: e, parents: r },
    start: () => {
      f();
    },
    end: () => {
      u(), x();
    }
  }, [w, e, r, u, f, x]);
  ce(() => {
    E(
      () => Xe(S),
      (y) => y.remove()
    );
  }, [E, S]);
  const g = Y({ id: Ne() });
  return Se({
    element: s,
    id: g.current.id,
    drop: (y, P) => l(y, P, e, r, s, g.current.id),
    hover: (y, P) => c(y, P, e, r, s, g.current.id),
    leave: (y, P) => i(y, P, e, r, s, g.current.id)
  }, [e, r, l, c, i]), /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: n,
      onClick: (y) => o(y, e),
      onMouseOver: (y) => t(y, e, s.current),
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
        S,
        '"'
      ]
    }
  );
}, No = ({ element: e, parents: r }) => {
  const [t = [], n] = Lt(e, r);
  return /* @__PURE__ */ b.jsx("div", { style: { outline: "none" }, children: n && t.map((o) => /* @__PURE__ */ b.jsx(
    Fe,
    {
      element: o,
      parents: [...r, n]
    },
    o.id.value
  )) });
}, qo = ({ element: e, parents: r, ...t }) => {
  const n = ur(e, r);
  return Wo(e, r) ? /* @__PURE__ */ b.jsx(
    Uo,
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
  ) : n ? /* @__PURE__ */ b.jsx(
    No,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ b.jsx(
    Yo,
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
}, Go = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: o, onDragLeave: i, onDragOver: c, onDrop: l, onHoverBar: d, onSelectBar: p }) => {
  const s = Y(null), { window: f, document: x } = cr.useFrame(), [u, v] = Le(e.text), h = $(e.name), S = $(e.id), { onExpressionToValue: w, onValueToExpression: C } = be(), { onDragStart: E, onDragEnd: g } = be(), { hideInsertBar: y } = Ie(), { selectedId: P } = Te(), { hoveredId: I } = De(), [D, M] = _r(!1);
  ce(() => {
    !s.current || !D || (s.current.focus(), p(e, null));
  }, [D, p]), Ce({
    value: I,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, s.current)
  }, [I, e]), Ce({
    value: P,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => p(e, s.current)
  }, [P, e]);
  const { isDragging: B, preview: Q } = _e({
    id: S,
    canDrag: !D,
    element: s,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      y(), g();
    }
  }, [S, D, e, r, y, E, g]);
  ce(() => {
    Q(
      () => Xe(h),
      (H) => H.remove()
    );
  }, [Q, h]);
  const K = Y({ id: Ne() });
  Se({
    element: s,
    id: K.current.id,
    drop: (H, oe) => l(H, oe, e, r, s, K.current.id),
    hover: (H, oe) => c(H, oe, e, r, s, K.current.id),
    leave: (H, oe) => i(H, oe, e, r, s, K.current.id)
  }, [e, r, l, c, i]);
  const j = U((H) => {
    if (!f || !x)
      return;
    const oe = f.getSelection();
    if (!oe)
      return;
    const ue = x.createRange(), m = H.currentTarget;
    ue.selectNodeContents(m), oe.removeAllRanges(), oe.addRange(ue);
  }, [f, x]), V = U((H) => {
    H.stopPropagation(), (H.code === "Escape" || H.code === "Enter" || H.code === "NumpadEnter") && (H.currentTarget.blur(), p(e, H.currentTarget));
  }, [p, e]), ae = U((H) => {
    M(!1), v(String(C(H.currentTarget.innerText, "text", "textContent", e))), p(e, H.currentTarget);
  }, [p, C, e]), ne = de(() => w(u, "text", "textContent", e) ?? "", [u, w, e]);
  return /* @__PURE__ */ b.jsx(
    "span",
    {
      contentEditable: D,
      dangerouslySetInnerHTML: { __html: ne },
      onBlur: ae,
      onFocus: j,
      onKeyDown: V,
      onDoubleClick: () => M(!0),
      ref: s,
      onMouseLeave: n,
      onClick: (H) => D ? H.stopPropagation() : o(H, e),
      onMouseOver: (H) => D ? H.stopPropagation() : t(H, e, s.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: B ? 0.5 : void 0,
        borderRadius: D ? 4 : void 0,
        boxShadow: D ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, Ko = ({ element: e }) => {
  const { onExpressionToValue: r } = be(), t = $(e.text);
  return de(() => r(t, "text", "textContent", e), [t, r, e]);
}, Jo = ({ element: e, parents: r, ...t }) => ur(e, r) ? /* @__PURE__ */ b.jsx(
  Ko,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ b.jsx(
  Go,
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
), Fe = ({ element: e, parents: r }) => {
  const t = $(e.type), { showInsertBar: n, hideInsertBar: o } = Ie(), { select: i, updateSelectBar: c } = Te(), { hover: l, updateHoverBar: d } = De(), { onDrop: p, value: s } = be(), f = U((E, g) => {
    E.stopPropagation(), E.preventDefault(), i(g.id.value);
  }, [i]), x = U((E) => {
    E.stopPropagation(), E.preventDefault(), i(void 0), l(void 0);
  }, [i, l]), u = U((E, g) => {
    E.stopPropagation(), l(g.id.value);
  }, [l]), v = U((E) => {
    E.stopPropagation(), l(void 0);
  }, [l]), h = U((E, g) => {
    d(E, () => ({
      top: (g == null ? void 0 : g.offsetTop) || 0,
      left: (g == null ? void 0 : g.offsetLeft) || 0,
      width: (g == null ? void 0 : g.getBoundingClientRect().width) || 0,
      height: (g == null ? void 0 : g.getBoundingClientRect().height) || 0
    }));
  }, [d]), S = U((E, g) => {
    c(E, r, () => ({
      top: (g == null ? void 0 : g.offsetTop) || 0,
      left: (g == null ? void 0 : g.offsetLeft) || 0,
      width: (g == null ? void 0 : g.getBoundingClientRect().width) || 0,
      height: (g == null ? void 0 : g.getBoundingClientRect().height) || 0
    }));
  }, [c, r]), w = U((E, g, y, P, I, D) => {
    if (!Xr(g, y, P, I, D))
      return l(void 0);
    l(y.id.value);
    const B = Zn(g, y, I);
    if (!B)
      return o();
    n({
      isVisible: !0,
      top: B.top,
      left: B.left,
      width: B.width,
      height: B.height,
      isHorizontal: B.isHorizontal
    });
  }, [n, l, o]), C = U((E, g, y, P, I, D) => {
    var K, j, V, ae, ne, H;
    if (!Xr(g, y, P, I, D))
      return;
    const B = Xn(g, y, I);
    if (!B)
      return;
    const Q = B.isOverStart || B.isOverEnd;
    if (!(!Q && y.type.value === "component")) {
      if (Object.keys(E).includes("id")) {
        const oe = E;
        if (Q) {
          const ue = P.slice(-1).at(0), m = ((K = (ue ? ue.children : s).value) == null ? void 0 : K.findIndex((T) => T.id.value === y.id.value)) ?? -1;
          p({
            element: oe.id,
            from: { position: -1, element: null },
            to: {
              element: ue || "root",
              position: B.isOverStart ? m : m + 1
            }
          });
        } else {
          const ue = ((j = y.children.value) == null ? void 0 : j.length) || -1;
          p({
            element: oe.id,
            from: { position: -1, element: null },
            to: {
              element: y,
              position: B.isOverStart ? ue : ue + 1
            }
          });
        }
      } else {
        const oe = E, ue = (V = oe.parents) == null ? void 0 : V.slice(-1).at(0), m = ue || "root";
        if (m !== "root" && m.type.value === "component")
          return;
        const T = ((ae = (m === "root" ? s : m.children).value) == null ? void 0 : ae.findIndex((L) => L.id.value === oe.element.id.value)) ?? -1;
        if (Q) {
          const L = P.slice(-1).at(0), F = ((ne = (L ? L.children : s).value) == null ? void 0 : ne.findIndex((A) => A.id.value === y.id.value)) ?? -1;
          p({
            element: oe.element,
            from: {
              position: T,
              element: m
            },
            to: {
              element: L || "root",
              position: B.isOverStart ? F : F + 1
            }
          });
        } else {
          const L = ((H = y.children.value) == null ? void 0 : H.length) || -1;
          p({
            element: oe.element,
            from: {
              position: T,
              element: m
            },
            to: {
              element: y,
              position: B.isOverStart ? L : L + 1
            }
          });
        }
        i(oe.element.id.value);
      }
      o();
    }
  }, [i, p, o]);
  return t === "component" ? /* @__PURE__ */ b.jsx(
    $o,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onDoubleClick: x,
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: h,
      onSelectBar: S
    }
  ) : t === "slot" ? /* @__PURE__ */ b.jsx(
    qo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: h,
      onSelectBar: S
    }
  ) : t === "text" ? /* @__PURE__ */ b.jsx(
    Jo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: h,
      onSelectBar: S
    }
  ) : /* @__PURE__ */ b.jsx(
    zo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: u,
      onMouseLeave: v,
      onHoverBar: h,
      onSelectBar: S
    }
  );
}, Xo = () => {
  const e = Y({ id: Ne() }), { value: r, styles: t, onDrop: n, onKeyDown: o } = be(), { updateSelectBarScroll: i, select: c } = Te(), { showInsertBar: l, hideInsertBar: d } = Ie(), { updateHoverBarScroll: p, hover: s } = De(), [f, x] = _r(null), u = $(r), v = U((g, y) => {
    var P;
    if (d(), !!g)
      if (Object.keys(g).includes("id"))
        n({
          element: g.id,
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
        const I = g, D = Kn(I.parents || []), M = D || "root", B = ((P = D == null ? void 0 : D.children.value) == null ? void 0 : P.findIndex((Q) => Q.id.value === I.element.id.value)) ?? -1;
        n({
          element: I.element,
          from: {
            element: M,
            position: B
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), c(I.element.id.value);
      }
  }, [r, c, d]), h = U((g, y) => {
    const P = f == null ? void 0 : f.lastElementChild;
    if (!P)
      return;
    const I = P.getBoundingClientRect();
    l({
      isVisible: !0,
      isHorizontal: !0,
      left: I.left,
      width: I.width,
      height: I.height,
      top: P ? I.top + I.height : I.top
    });
  }, [f == null ? void 0 : f.lastElementChild, l]), S = U((g, y) => {
    i(g, y), p(g, y);
  }, [i, p]), w = U((g) => {
    g.stopPropagation(), c(void 0);
  }, [c]), [{ isDraggingOver: C, isDraggingOverCurrent: E }] = Se({
    drop: v,
    hover: h,
    id: e.current.id,
    element: { current: f },
    leave: () => {
      d(), s(void 0);
    }
  }, [v, h, d]);
  return /* @__PURE__ */ b.jsx(
    Mo,
    {
      styles: t,
      resetBody: !0,
      draggingHover: C || E,
      children: /* @__PURE__ */ b.jsxs(
        Io,
        {
          onClick: w,
          onKeyDown: o,
          onScroll: S,
          onRef: x,
          children: [
            /* @__PURE__ */ b.jsx(kn, {}),
            /* @__PURE__ */ b.jsx(no, {}),
            /* @__PURE__ */ b.jsx(eo, {}),
            u.map((g) => /* @__PURE__ */ b.jsx(
              Fe,
              {
                parents: [],
                element: g
              },
              g.id.value
            )),
            u.length === 0 && /* @__PURE__ */ b.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ b.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function oi({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...o }) {
  return /* @__PURE__ */ b.jsx(ut, { children: /* @__PURE__ */ b.jsx(Bn, { ...o, children: /* @__PURE__ */ b.jsx(Ln, { children: /* @__PURE__ */ b.jsx(Vn, { id: t, onSelect: e, children: /* @__PURE__ */ b.jsx(ro, { id: n, onHover: r, children: /* @__PURE__ */ b.jsx(Xo, {}) }) }) }) }) });
}
export {
  oi as UIEditor,
  ni as UiOverview
};
//# sourceMappingURL=index.es.js.map

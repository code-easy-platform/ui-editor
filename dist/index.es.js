import we, { createContext as ke, useContext as He, useRef as K, useEffect as le, useCallback as H, useMemo as de, forwardRef as ut, createElement as Pr, useState as Xe, memo as ar } from "react";
import { useDrag as _e, useDrop as me, DragAndDropProvider as lt } from "react-use-drag-and-drop";
import { observe as ie, set as ae, useSelectorValue as pe, useObserverValue as A, selector as Ze, useObserver as je } from "react-observing";
import { v4 as dt } from "uuid";
import dn from "react-dom";
var fn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Er = { exports: {} }, Ke = {};
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
function pn() {
  if (qr)
    return Ke;
  qr = 1;
  var e = we, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(s, d, f) {
    var a, p = {}, O = null, l = null;
    f !== void 0 && (O = "" + f), d.key !== void 0 && (O = "" + d.key), d.ref !== void 0 && (l = d.ref);
    for (a in d)
      n.call(d, a) && !o.hasOwnProperty(a) && (p[a] = d[a]);
    if (s && s.defaultProps)
      for (a in d = s.defaultProps, d)
        p[a] === void 0 && (p[a] = d[a]);
    return { $$typeof: r, type: s, key: O, ref: l, props: p, _owner: i.current };
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
var Gr;
function hn() {
  return Gr || (Gr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), a = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function C(u) {
      if (u === null || typeof u != "object")
        return null;
      var m = v && u[v] || u[y];
      return typeof m == "function" ? m : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(u) {
      {
        for (var m = arguments.length, P = new Array(m > 1 ? m - 1 : 0), $ = 1; $ < m; $++)
          P[$ - 1] = arguments[$];
        E("error", u, P);
      }
    }
    function E(u, m, P) {
      {
        var $ = w.ReactDebugCurrentFrame, te = $.getStackAddendum();
        te !== "" && (m += "%s", P = P.concat([te]));
        var ue = P.map(function(ee) {
          return String(ee);
        });
        ue.unshift("Warning: " + m), Function.prototype.apply.call(console[u], console, ue);
      }
    }
    var b = !1, h = !1, V = !1, I = !1, R = !1, B;
    B = Symbol.for("react.module.reference");
    function M(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === o || R || u === i || u === f || u === a || I || u === l || b || h || V || typeof u == "object" && u !== null && (u.$$typeof === O || u.$$typeof === p || u.$$typeof === c || u.$$typeof === s || u.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === B || u.getModuleId !== void 0));
    }
    function N(u, m, P) {
      var $ = u.displayName;
      if ($)
        return $;
      var te = m.displayName || m.name || "";
      return te !== "" ? P + "(" + te + ")" : P;
    }
    function z(u) {
      return u.displayName || "Context";
    }
    function D(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
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
        case a:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case s:
            var m = u;
            return z(m) + ".Consumer";
          case c:
            var P = u;
            return z(P._context) + ".Provider";
          case d:
            return N(u, u.render, "ForwardRef");
          case p:
            var $ = u.displayName || null;
            return $ !== null ? $ : D(u.type) || "Memo";
          case O: {
            var te = u, ue = te._payload, ee = te._init;
            try {
              return D(ee(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, ce = 0, L, j, G, se, x, T, k;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function W() {
      {
        if (ce === 0) {
          L = console.log, j = console.info, G = console.warn, se = console.error, x = console.group, T = console.groupCollapsed, k = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ce++;
      }
    }
    function Q() {
      {
        if (ce--, ce === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, u, {
              value: L
            }),
            info: F({}, u, {
              value: j
            }),
            warn: F({}, u, {
              value: G
            }),
            error: F({}, u, {
              value: se
            }),
            group: F({}, u, {
              value: x
            }),
            groupCollapsed: F({}, u, {
              value: T
            }),
            groupEnd: F({}, u, {
              value: k
            })
          });
        }
        ce < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, q;
    function J(u, m, P) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (te) {
            var $ = te.stack.trim().match(/\n( *(at )?)/);
            q = $ && $[1] || "";
          }
        return `
` + q + u;
      }
    }
    var re = !1, X;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      X = new he();
    }
    function _(u, m) {
      if (!u || re)
        return "";
      {
        var P = X.get(u);
        if (P !== void 0)
          return P;
      }
      var $;
      re = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = Y.current, Y.current = null, W();
      try {
        if (m) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (ge) {
              $ = ge;
            }
            Reflect.construct(u, [], ee);
          } else {
            try {
              ee.call();
            } catch (ge) {
              $ = ge;
            }
            u.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            $ = ge;
          }
          u();
        }
      } catch (ge) {
        if (ge && $ && typeof ge.stack == "string") {
          for (var Z = ge.stack.split(`
`), ye = $.stack.split(`
`), fe = Z.length - 1, ve = ye.length - 1; fe >= 1 && ve >= 0 && Z[fe] !== ye[ve]; )
            ve--;
          for (; fe >= 1 && ve >= 0; fe--, ve--)
            if (Z[fe] !== ye[ve]) {
              if (fe !== 1 || ve !== 1)
                do
                  if (fe--, ve--, ve < 0 || Z[fe] !== ye[ve]) {
                    var Oe = `
` + Z[fe].replace(" at new ", " at ");
                    return u.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", u.displayName)), typeof u == "function" && X.set(u, Oe), Oe;
                  }
                while (fe >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        re = !1, Y.current = ue, Q(), Error.prepareStackTrace = te;
      }
      var Ue = u ? u.displayName || u.name : "", Ve = Ue ? J(Ue) : "";
      return typeof u == "function" && X.set(u, Ve), Ve;
    }
    function Se(u, m, P) {
      return _(u, !1);
    }
    function Fe(u) {
      var m = u.prototype;
      return !!(m && m.isReactComponent);
    }
    function Me(u, m, P) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return _(u, Fe(u));
      if (typeof u == "string")
        return J(u);
      switch (u) {
        case f:
          return J("Suspense");
        case a:
          return J("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case d:
            return Se(u.render);
          case p:
            return Me(u.type, m, P);
          case O: {
            var $ = u, te = $._payload, ue = $._init;
            try {
              return Me(ue(te), m, P);
            } catch {
            }
          }
        }
      return "";
    }
    var qe = Object.prototype.hasOwnProperty, Mr = {}, Vr = w.ReactDebugCurrentFrame;
    function tr(u) {
      if (u) {
        var m = u._owner, P = Me(u.type, u._source, m ? m.type : null);
        Vr.setExtraStackFrame(P);
      } else
        Vr.setExtraStackFrame(null);
    }
    function Ft(u, m, P, $, te) {
      {
        var ue = Function.call.bind(qe);
        for (var ee in u)
          if (ue(u, ee)) {
            var Z = void 0;
            try {
              if (typeof u[ee] != "function") {
                var ye = Error(($ || "React class") + ": " + P + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              Z = u[ee](m, ee, $, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              Z = fe;
            }
            Z && !(Z instanceof Error) && (tr(te), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", P, ee, typeof Z), tr(null)), Z instanceof Error && !(Z.message in Mr) && (Mr[Z.message] = !0, tr(te), S("Failed %s type: %s", P, Z.message), tr(null));
          }
      }
    }
    var Wt = Array.isArray;
    function fr(u) {
      return Wt(u);
    }
    function Ut(u) {
      {
        var m = typeof Symbol == "function" && Symbol.toStringTag, P = m && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return P;
      }
    }
    function Yt(u) {
      try {
        return Lr(u), !1;
      } catch {
        return !0;
      }
    }
    function Lr(u) {
      return "" + u;
    }
    function kr(u) {
      if (Yt(u))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ut(u)), Lr(u);
    }
    var Ge = w.ReactCurrentOwner, Nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Hr, Ar, vr;
    vr = {};
    function qt(u) {
      if (qe.call(u, "ref")) {
        var m = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Gt(u) {
      if (qe.call(u, "key")) {
        var m = Object.getOwnPropertyDescriptor(u, "key").get;
        if (m && m.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Kt(u, m) {
      if (typeof u.ref == "string" && Ge.current && m && Ge.current.stateNode !== m) {
        var P = D(Ge.current.type);
        vr[P] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Ge.current.type), u.ref), vr[P] = !0);
      }
    }
    function Jt(u, m) {
      {
        var P = function() {
          Hr || (Hr = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Xt(u, m) {
      {
        var P = function() {
          Ar || (Ar = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", m));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Zt = function(u, m, P, $, te, ue, ee) {
      var Z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: u,
        key: m,
        ref: P,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function Qt(u, m, P, $, te) {
      {
        var ue, ee = {}, Z = null, ye = null;
        P !== void 0 && (kr(P), Z = "" + P), Gt(m) && (kr(m.key), Z = "" + m.key), qt(m) && (ye = m.ref, Kt(m, te));
        for (ue in m)
          qe.call(m, ue) && !Nt.hasOwnProperty(ue) && (ee[ue] = m[ue]);
        if (u && u.defaultProps) {
          var fe = u.defaultProps;
          for (ue in fe)
            ee[ue] === void 0 && (ee[ue] = fe[ue]);
        }
        if (Z || ye) {
          var ve = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          Z && Jt(ee, ve), ye && Xt(ee, ve);
        }
        return Zt(u, Z, ye, te, $, Ge.current, ee);
      }
    }
    var pr = w.ReactCurrentOwner, zr = w.ReactDebugCurrentFrame;
    function We(u) {
      if (u) {
        var m = u._owner, P = Me(u.type, u._source, m ? m.type : null);
        zr.setExtraStackFrame(P);
      } else
        zr.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function yr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === r;
    }
    function $r() {
      {
        if (pr.current) {
          var u = D(pr.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function en(u) {
      return "";
    }
    var Fr = {};
    function rn(u) {
      {
        var m = $r();
        if (!m) {
          var P = typeof u == "string" ? u : u.displayName || u.name;
          P && (m = `

Check the top-level render call using <` + P + ">.");
        }
        return m;
      }
    }
    function Wr(u, m) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var P = rn(m);
        if (Fr[P])
          return;
        Fr[P] = !0;
        var $ = "";
        u && u._owner && u._owner !== pr.current && ($ = " It was passed a child from " + D(u._owner.type) + "."), We(u), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, $), We(null);
      }
    }
    function Ur(u, m) {
      {
        if (typeof u != "object")
          return;
        if (fr(u))
          for (var P = 0; P < u.length; P++) {
            var $ = u[P];
            yr($) && Wr($, m);
          }
        else if (yr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var te = C(u);
          if (typeof te == "function" && te !== u.entries)
            for (var ue = te.call(u), ee; !(ee = ue.next()).done; )
              yr(ee.value) && Wr(ee.value, m);
        }
      }
    }
    function tn(u) {
      {
        var m = u.type;
        if (m == null || typeof m == "string")
          return;
        var P;
        if (typeof m == "function")
          P = m.propTypes;
        else if (typeof m == "object" && (m.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        m.$$typeof === p))
          P = m.propTypes;
        else
          return;
        if (P) {
          var $ = D(m);
          Ft(P, u.props, "prop", $, u);
        } else if (m.PropTypes !== void 0 && !hr) {
          hr = !0;
          var te = D(m);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof m.getDefaultProps == "function" && !m.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(u) {
      {
        for (var m = Object.keys(u.props), P = 0; P < m.length; P++) {
          var $ = m[P];
          if ($ !== "children" && $ !== "key") {
            We(u), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), We(null);
            break;
          }
        }
        u.ref !== null && (We(u), S("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Yr = {};
    function Nr(u, m, P, $, te, ue) {
      {
        var ee = M(u);
        if (!ee) {
          var Z = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = en();
          ye ? Z += ye : Z += $r();
          var fe;
          u === null ? fe = "null" : fr(u) ? fe = "array" : u !== void 0 && u.$$typeof === r ? (fe = "<" + (D(u.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof u, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, Z);
        }
        var ve = Qt(u, m, P, te, ue);
        if (ve == null)
          return ve;
        if (ee) {
          var Oe = m.children;
          if (Oe !== void 0)
            if ($)
              if (fr(Oe)) {
                for (var Ue = 0; Ue < Oe.length; Ue++)
                  Ur(Oe[Ue], u);
                Object.freeze && Object.freeze(Oe);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ur(Oe, u);
        }
        if (qe.call(m, "key")) {
          var Ve = D(u), ge = Object.keys(m).filter(function(ln) {
            return ln !== "key";
          }), gr = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yr[Ve + gr]) {
            var un = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gr, Ve, un, Ve), Yr[Ve + gr] = !0;
          }
        }
        return u === n ? nn(ve) : tn(ve), ve;
      }
    }
    function on(u, m, P) {
      return Nr(u, m, P, !0);
    }
    function an(u, m, P) {
      return Nr(u, m, P, !1);
    }
    var cn = an, sn = on;
    Je.Fragment = n, Je.jsx = cn, Je.jsxs = sn;
  }()), Je;
}
process.env.NODE_ENV === "production" ? Er.exports = pn() : Er.exports = hn();
var g = Er.exports;
const ft = ke({});
function yn({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(ft.Provider, { value: r, children: e });
}
const xe = () => He(ft), vt = ke({}), gn = ({ children: e, id: r, onSelect: t }) => {
  const n = K({
    documentHorizontalScroll: ie(0),
    playgroundSize: ie(void 0),
    documentVerticalScroll: ie(0),
    getPosition: ie(void 0),
    parents: ie(void 0),
    element: ie(void 0),
    onSelect: t,
    id: r
  });
  return le(() => {
    n.current.id = r;
  }, [r]), le(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(vt.Provider, { value: n.current, children: e });
}, Ae = () => {
  const e = He(vt), r = H((o) => {
    e.onSelect(o);
  }, [e.id]), t = H((o, c, s) => {
    ae(e.getPosition, () => s), ae(e.parents, c), ae(e.element, o);
  }, [e.getPosition]), n = H((o, c) => {
    ae(e.documentHorizontalScroll, c), ae(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = H((o, c) => {
    ae(e.playgroundSize, { height: o, width: c });
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
}, pt = ke({}), bn = ({ children: e, id: r, onHover: t }) => {
  const n = K({
    documentHorizontalScroll: ie(0),
    playgroundSize: ie(void 0),
    documentVerticalScroll: ie(0),
    getPosition: ie(void 0),
    element: ie(void 0),
    onHover: t,
    id: r
  });
  return le(() => {
    n.current.id = r;
  }, [r]), le(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(pt.Provider, { value: n.current, children: e });
}, Ie = () => {
  const e = He(pt), r = H((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), t = H((o, c) => {
    ae(e.getPosition, () => c), ae(e.element, o);
  }, [e.getPosition]), n = H((o, c) => {
    ae(e.documentHorizontalScroll, c), ae(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = H((o, c) => {
    ae(e.playgroundSize, { height: o, width: c });
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
}, xn = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, cr = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function Sn(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
var ht = { exports: {} };
/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */
(function(e) {
  (function() {
    var r = function(l, v) {
      return v = v || "", l.replace(/(^|-)/g, "$1\\u" + v).replace(/,/g, "\\u" + v);
    }, t = r("20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7", "00"), n = "a-z" + r("DF-F6,F8-FF", "00"), i = "A-Z" + r("C0-D6,D8-DE", "00"), o = "A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via", c = function(l, v, y, C) {
      return l = l || t, v = v || n, y = y || i, C = C || o, {
        capitalize: new RegExp("(^|[" + l + "])([" + v + "])", "g"),
        pascal: new RegExp("(^|[" + l + "])+([" + v + y + "])", "g"),
        fill: new RegExp("[" + l + "]+(.|$)", "g"),
        sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + v + "])", "g"),
        improper: new RegExp("\\b(" + C + ")\\b", "g"),
        relax: new RegExp("([^" + y + "])([" + y + "]*)([" + y + "])(?=[^" + y + "]|$)", "g"),
        upper: new RegExp("^[^" + v + "]+$"),
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
      fill: function(l, v, y) {
        return v != null && (l = l.replace(s.fill, function(C, w) {
          return w ? v + w : "";
        })), y && (l = d.deapostrophe(l)), l;
      },
      prep: function(l, v, y, C) {
        if (l = l == null ? "" : l + "", !C && s.upper.test(l) && (l = d.low.call(l)), !v && !s.hole.test(l)) {
          var w = d.fill(l, " ");
          s.hole.test(w) && (l = w);
        }
        return !y && !s.room.test(l) && (l = l.replace(s.relax, d.relax)), l;
      },
      relax: function(l, v, y, C) {
        return v + " " + (y ? y + " " : "") + C;
      }
    }, f = {
      _: d,
      of: function(l) {
        for (var v = 0, y = d.types.length; v < y; v++)
          if (f[d.types[v]].apply(f, arguments) === l)
            return d.types[v];
      },
      flip: function(l) {
        return l.replace(/\w/g, function(v) {
          return (v == d.up.call(v) ? d.low : d.up).call(v);
        });
      },
      random: function(l) {
        return l.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? d.up : d.low).call(v);
        });
      },
      type: function(l, v) {
        f[l] = v, d.types.push(l);
      }
    }, a = {
      lower: function(l, v, y) {
        return d.fill(d.low.call(d.prep(l, v)), v, y);
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
      upper: function(l, v, y) {
        return d.fill(d.up.call(d.prep(l, v, !1, !0)), v, y);
      },
      capital: function(l, v, y) {
        return d.fill(d.prep(l).replace(s.capitalize, function(C, w, S) {
          return w + d.up.call(S);
        }), v, y);
      },
      header: function(l) {
        return f.capital(l, "-", !0);
      },
      pascal: function(l) {
        return d.fill(d.prep(l, !1, !0).replace(s.pascal, function(v, y, C) {
          return d.up.call(C);
        }), "", !0);
      },
      title: function(l) {
        return f.capital(l).replace(s.improper, function(v, y, C, w) {
          return C > 0 && C < w.lastIndexOf(" ") ? d.low.call(v) : v;
        });
      },
      sentence: function(l, v, y) {
        return l = f.lower(l).replace(s.sentence, function(C, w, S) {
          return w + d.up.call(S);
        }), v && v.forEach(function(C) {
          l = l.replace(new RegExp("\\b" + f.lower(C) + "\\b", "g"), d.cap);
        }), y && y.forEach(function(C) {
          l = l.replace(new RegExp("(\\b" + f.lower(C) + "\\. +)(\\w)"), function(w, S, E) {
            return S + d.low.call(E);
          });
        }), l;
      }
    };
    a.squish = a.pascal, f.default = f;
    for (var p in a)
      f.type(p, a[p]);
    var O = typeof O == "function" ? O : function() {
    };
    O(e.exports ? e.exports = f : this.Case = f);
  }).call(fn);
})(ht);
var yt = ht.exports;
function gt(e) {
  return yt.camel(Sn(e));
}
const Kr = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), On = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, s = e.y - i.y, d = s >= 0 && s <= o, f = s >= i.height - o && s <= i.height, a = s >= o && s <= i.height - o, p = c >= 0 && c <= o, O = c >= i.width - o && c <= i.width, l = c >= o && c <= i.width - o;
  let v = !1, y = !1, C = !1, w = !1;
  if (n) {
    const S = f || O || d || p;
    v = l && a && !S, y = l && a && !S, C = f || O, w = d || p;
  } else
    C = (f || O) && !d, w = (d || p) && !f;
  return { isOverCurrentStart: v, isOverCurrentEnd: y, isOverEnd: C, isOverStart: w };
}, Ye = () => dt(), wn = () => /* @__PURE__ */ g.jsx("div", { className: "animate-pulse p-0.5 bg-[#3e8ce4] z-10" }), mn = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), sr = (e, r) => pe(({ get: n }) => {
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
}, [r, e]), Cn = ({ element: e }) => {
  const r = A(e.name);
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
  le(() => {
    i && t();
  }, [i]);
}, En = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: o }) => {
  const c = K(null), { selectedId: s } = Ae(), { hoveredId: d } = Ie(), f = A(e.name);
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
      onClick: (a) => o(a, e),
      onMouseOver: (a) => i(a, e, c.current),
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
}, Rn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f, onDoubleClick: a }) => {
  const p = K(null), { onDragStart: O, onDragEnd: l, components: v } = xe(), { selectedId: y } = Ae(), { hoveredId: C } = Ie(), w = A(e.name), S = A(e.id), E = pe(({ get: R }) => {
    const B = R(v).find((M) => R(M.id) === R(e.referenceComponentId));
    return B ? R(B.content) : [];
  }, [v, e]);
  Ee({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, p.current)
  }, [C, e]), Ee({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, p.current)
  }, [y, e]);
  const b = de(() => !E || E.length === 0 ? null : E.map((R) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: R,
      parents: [...r, e]
    },
    R.id.value
  )), [E, r, e]), { isDragging: h, preview: V } = _e({
    id: S,
    element: p,
    end: () => l(),
    data: { element: e, parents: r },
    start: () => {
      O();
    }
  }, [S, e, r, O, l]);
  le(() => {
    V(
      () => cr(w),
      (R) => R.remove()
    );
  }, [V, w]);
  const I = K({ id: Ye() });
  return me({
    element: p,
    id: I.current.id,
    drop: (R, B) => s(R, B, e, r, p, I.current.id),
    hover: (R, B) => c(R, B, e, r, p, I.current.id),
    leave: (R, B) => o(R, B, e, r, p, I.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: p,
      onMouseLeave: n,
      onClick: (R) => i(R, e),
      onDoubleClick: (R) => a(R, e),
      onMouseOver: (R) => t(R, e, p.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: h ? 0.5 : void 0 },
      children: b
    }
  );
}, Tn = ({ element: e, parents: r }) => {
  const { components: t } = xe(), n = pe(({ get: i }) => {
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
}, _n = ({ element: e, parents: r, ...t }) => {
  const n = mn(e, r), i = sr(e, r);
  return n ? i ? /* @__PURE__ */ g.jsx(Cn, { element: e }) : /* @__PURE__ */ g.jsx(
    En,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ g.jsx(
    Tn,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    Rn,
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
}, bt = (e) => {
  const { onExpressionToValue: r } = xe(), t = de(() => Ze(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((c) => {
      const s = n(c.name), d = n(c.value);
      s && (o[gt(s)] = r(d, s, "style", e));
    }), o;
  }), [e, r, e]);
  return A(t);
}, xt = (e) => {
  const { onExpressionToValue: r } = xe(), t = de(() => Ze({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, c = {};
      return i.forEach((s) => {
        const d = n(s.name);
        if (d === void 0 || d === "hidden" || d === "style")
          return;
        const f = r(n(s.value), d, "attribute", e), a = gt(d);
        switch (a) {
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
              o[a] = f;
            break;
        }
      }), [o, c];
    }
  }), [e, r]);
  return A(t);
}, St = ut(({ tag: e, ...r }, t) => Pr(e, { ref: t, ...r })), Pn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), [p, O] = Xe(!1), [
    l
    /* elementSpecialProps */
  ] = xt(e), v = A(e.children), y = bt(e), C = A(e.name), w = A(e.tag), S = A(e.id), { onDragStart: E, onDragEnd: b } = xe(), { selectedId: h } = Ae(), { hoveredId: V } = Ie();
  Ee({
    value: V,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [V, e]), Ee({
    value: h,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [h, e]), le(() => {
    O((D) => V.value === S === D ? D : !D);
    const z = V.subscribe((D) => {
      O((F) => D === S === F ? F : !F);
    });
    return () => z.unsubscribe();
  }, [S, V]);
  const I = de(() => !v || v.length === 0 ? null : v.map((z) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: z,
      parents: [...r, e]
    },
    z.id.value
  )), [v, r, e]), R = de(() => v !== void 0, [v]), { isDragging: B, preview: M } = _e({
    id: S,
    element: a,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => b()
  }, [S, e, r, E, b]);
  le(() => {
    M(
      () => cr(C),
      (z) => z.remove()
    );
  }, [M, C]);
  const N = K({ id: Ye() });
  return me({
    element: a,
    id: N.current.id,
    drop: (z, D) => s(z, D, e, r, a, N.current.id),
    hover: (z, D) => c(z, D, e, r, a, N.current.id),
    leave: (z, D) => o(z, D, e, r, a, N.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    St,
    {
      readOnly: !0,
      tag: w,
      ref: a,
      children: I,
      onMouseLeave: n,
      onClick: (z) => i(z, e),
      onMouseOver: (z) => t(z, e, a.current),
      ...l !== void 0 ? { ...l, ...p ? { disabled: !1 } : {} } : {},
      style: {
        ...y,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: B ? 0.5 : typeof y.opacity == "number" ? Number(y.opacity) : void 0,
        minWidth: I === null && R ? 40 : typeof y.minWidth == "number" ? Number(y.minWidth) : void 0,
        minHeight: I === null && R ? 40 : typeof y.minHeight == "number" ? Number(y.minHeight) : void 0
      }
    }
  );
}, Dn = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = xt(e), n = A(e.children), i = bt(e), o = A(e.tag), c = de(() => !n || n.length === 0 ? null : n.map((s) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: s,
      parents: [...r, e]
    },
    s.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ g.jsx(
    St,
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
}, jn = ({ element: e, parents: r, ...t }) => sr(e, r) ? /* @__PURE__ */ g.jsx(
  Dn,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  Pn,
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
), In = (e, r) => {
  const { components: t } = xe();
  return pe(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var O;
      if (n(f.type) !== "component")
        return !1;
      const a = f;
      return n(e.componentId) === n(a.referenceComponentId) ? (O = n(a.slots)) == null ? void 0 : O.some((l) => n(l.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, a) => f !== void 0 ? f : n(a.type) === "slot-content" ? !1 : n(a.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, Ot = (e, r) => {
  const { onAddSlotContent: t } = xe();
  return pe(({ get: n }) => {
    var c;
    const i = [...r].reverse().filter((s) => n(s.type) === "component").find((s) => n(s.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const o = (c = n(i.slots)) == null ? void 0 : c.find((s) => n(s.referenceSlotId) === n(e.id));
    return o ? [n(o.children), o] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, Bn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: o, onDrop: c, onHoverBar: s }) => {
  const d = K(null), [f = [], a] = Ot(e, r), { hoveredId: p } = Ie();
  Ee({
    value: p,
    matchWidthValue: a == null ? void 0 : a.id,
    effect() {
      a && s(e, d.current);
    }
  }, [p, a == null ? void 0 : a.id, e]);
  const O = K({ id: Ye() });
  return me({
    element: d,
    id: O.current.id,
    drop: (l, v) => a ? c(l, v, a, r, d, O.current.id) : void 0,
    hover: (l, v) => a ? o(l, v, a, r, d, O.current.id) : void 0,
    leave: (l, v) => a ? i(l, v, a, r, d, O.current.id) : void 0
  }, [a, r, c, o, i]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (l) => a ? t(l, a, d.current) : void 0,
      children: [
        a && f.length > 0 && f.map((l) => /* @__PURE__ */ g.jsx(
          ze,
          {
            element: l,
            parents: [...r, a]
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
}, Mn = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), { onDragStart: p, onDragEnd: O } = xe(), { selectedId: l } = Ae(), { hoveredId: v } = Ie(), y = A(e.name), C = A(e.id);
  Ee({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [v, e]), Ee({
    value: l,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [l, e]);
  const { isDragging: w, preview: S } = _e({
    id: C,
    element: a,
    end: () => O(),
    data: { element: e, parents: r },
    start: () => {
      p();
    }
  }, [C, e, r, p, O]);
  le(() => {
    S(
      () => cr(y),
      (b) => b.remove()
    );
  }, [S, y]);
  const E = K({ id: Ye() });
  return me({
    element: a,
    id: E.current.id,
    drop: (b, h) => s(b, h, e, r, a, E.current.id),
    hover: (b, h) => c(b, h, e, r, a, E.current.id),
    leave: (b, h) => o(b, h, e, r, a, E.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: a,
      onMouseLeave: n,
      onClick: (b) => i(b, e),
      onMouseOver: (b) => t(b, e, a.current),
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
        opacity: w ? 0.5 : void 0
      },
      children: [
        'Slot "',
        y,
        '"'
      ]
    }
  );
}, Vn = ({ element: e, parents: r }) => {
  const [t = [], n] = Ot(e, r);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ g.jsx(
    ze,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, Ln = ({ element: e, parents: r, ...t }) => {
  const n = sr(e, r);
  return In(e, r) ? /* @__PURE__ */ g.jsx(
    Bn,
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
    Vn,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    Mn,
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
};
var Qe = {}, er = {}, Rr = { exports: {} }, nr = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function kn() {
  if (Jr)
    return ne;
  Jr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, a = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function E(h) {
    if (typeof h == "object" && h !== null) {
      var V = h.$$typeof;
      switch (V) {
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
                case s:
                case a:
                case v:
                case l:
                case c:
                  return h;
                default:
                  return V;
              }
          }
        case t:
          return V;
      }
    }
  }
  function b(h) {
    return E(h) === f;
  }
  return ne.AsyncMode = d, ne.ConcurrentMode = f, ne.ContextConsumer = s, ne.ContextProvider = c, ne.Element = r, ne.ForwardRef = a, ne.Fragment = n, ne.Lazy = v, ne.Memo = l, ne.Portal = t, ne.Profiler = o, ne.StrictMode = i, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return b(h) || E(h) === d;
  }, ne.isConcurrentMode = b, ne.isContextConsumer = function(h) {
    return E(h) === s;
  }, ne.isContextProvider = function(h) {
    return E(h) === c;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, ne.isForwardRef = function(h) {
    return E(h) === a;
  }, ne.isFragment = function(h) {
    return E(h) === n;
  }, ne.isLazy = function(h) {
    return E(h) === v;
  }, ne.isMemo = function(h) {
    return E(h) === l;
  }, ne.isPortal = function(h) {
    return E(h) === t;
  }, ne.isProfiler = function(h) {
    return E(h) === o;
  }, ne.isStrictMode = function(h) {
    return E(h) === i;
  }, ne.isSuspense = function(h) {
    return E(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === o || h === i || h === p || h === O || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === l || h.$$typeof === c || h.$$typeof === s || h.$$typeof === a || h.$$typeof === C || h.$$typeof === w || h.$$typeof === S || h.$$typeof === y);
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
var Xr;
function Hn() {
  return Xr || (Xr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, a = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, l = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function E(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === f || _ === o || _ === i || _ === p || _ === O || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === l || _.$$typeof === c || _.$$typeof === s || _.$$typeof === a || _.$$typeof === C || _.$$typeof === w || _.$$typeof === S || _.$$typeof === y);
    }
    function b(_) {
      if (typeof _ == "object" && _ !== null) {
        var Se = _.$$typeof;
        switch (Se) {
          case r:
            var Fe = _.type;
            switch (Fe) {
              case d:
              case f:
              case n:
              case o:
              case i:
              case p:
                return Fe;
              default:
                var Me = Fe && Fe.$$typeof;
                switch (Me) {
                  case s:
                  case a:
                  case v:
                  case l:
                  case c:
                    return Me;
                  default:
                    return Se;
                }
            }
          case t:
            return Se;
        }
      }
    }
    var h = d, V = f, I = s, R = c, B = r, M = a, N = n, z = v, D = l, F = t, ce = o, L = i, j = p, G = !1;
    function se(_) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), x(_) || b(_) === d;
    }
    function x(_) {
      return b(_) === f;
    }
    function T(_) {
      return b(_) === s;
    }
    function k(_) {
      return b(_) === c;
    }
    function U(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === r;
    }
    function W(_) {
      return b(_) === a;
    }
    function Q(_) {
      return b(_) === n;
    }
    function Y(_) {
      return b(_) === v;
    }
    function q(_) {
      return b(_) === l;
    }
    function J(_) {
      return b(_) === t;
    }
    function re(_) {
      return b(_) === o;
    }
    function X(_) {
      return b(_) === i;
    }
    function he(_) {
      return b(_) === p;
    }
    oe.AsyncMode = h, oe.ConcurrentMode = V, oe.ContextConsumer = I, oe.ContextProvider = R, oe.Element = B, oe.ForwardRef = M, oe.Fragment = N, oe.Lazy = z, oe.Memo = D, oe.Portal = F, oe.Profiler = ce, oe.StrictMode = L, oe.Suspense = j, oe.isAsyncMode = se, oe.isConcurrentMode = x, oe.isContextConsumer = T, oe.isContextProvider = k, oe.isElement = U, oe.isForwardRef = W, oe.isFragment = Q, oe.isLazy = Y, oe.isMemo = q, oe.isPortal = J, oe.isProfiler = re, oe.isStrictMode = X, oe.isSuspense = he, oe.isValidElementType = E, oe.typeOf = b;
  }()), oe;
}
var Zr;
function wt() {
  return Zr || (Zr = 1, process.env.NODE_ENV === "production" ? nr.exports = kn() : nr.exports = Hn()), nr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br, Qr;
function An() {
  if (Qr)
    return br;
  Qr = 1;
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
      var d = Object.getOwnPropertyNames(c).map(function(a) {
        return c[a];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(a) {
        f[a] = a;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return br = i() ? Object.assign : function(o, c) {
    for (var s, d = n(o), f, a = 1; a < arguments.length; a++) {
      s = Object(arguments[a]);
      for (var p in s)
        r.call(s, p) && (d[p] = s[p]);
      if (e) {
        f = e(s);
        for (var O = 0; O < f.length; O++)
          t.call(s, f[O]) && (d[f[O]] = s[f[O]]);
      }
    }
    return d;
  }, br;
}
var xr, et;
function Dr() {
  if (et)
    return xr;
  et = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var Sr, rt;
function mt() {
  return rt || (rt = 1, Sr = Function.call.bind(Object.prototype.hasOwnProperty)), Sr;
}
var Or, tt;
function zn() {
  if (tt)
    return Or;
  tt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Dr(), t = {}, n = mt();
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
      for (var a in o)
        if (n(o, a)) {
          var p;
          try {
            if (typeof o[a] != "function") {
              var O = Error(
                (d || "React class") + ": " + s + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            p = o[a](c, a, d, s, null, r);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + a + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var l = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (l ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Or = i, Or;
}
var wr, nt;
function $n() {
  if (nt)
    return wr;
  nt = 1;
  var e = wt(), r = An(), t = Dr(), n = mt(), i = zn(), o = function() {
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
  return wr = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, a = "@@iterator";
    function p(x) {
      var T = x && (f && x[f] || x[a]);
      if (typeof T == "function")
        return T;
    }
    var O = "<<anonymous>>", l = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: S(),
      arrayOf: E,
      element: b(),
      elementType: h(),
      instanceOf: V,
      node: M(),
      objectOf: R,
      oneOf: I,
      oneOfType: B,
      shape: z,
      exact: D
    };
    function v(x, T) {
      return x === T ? x !== 0 || 1 / x === 1 / T : x !== x && T !== T;
    }
    function y(x, T) {
      this.message = x, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function C(x) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, k = 0;
      function U(Q, Y, q, J, re, X, he) {
        if (J = J || O, X = X || q, he !== t) {
          if (d) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Se = J + ":" + q;
            !T[Se] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[Se] = !0, k++);
          }
        }
        return Y[q] == null ? Q ? Y[q] === null ? new y("The " + re + " `" + X + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new y("The " + re + " `" + X + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : x(Y, q, J, re, X);
      }
      var W = U.bind(null, !1);
      return W.isRequired = U.bind(null, !0), W;
    }
    function w(x) {
      function T(k, U, W, Q, Y, q) {
        var J = k[U], re = L(J);
        if (re !== x) {
          var X = j(J);
          return new y(
            "Invalid " + Q + " `" + Y + "` of type " + ("`" + X + "` supplied to `" + W + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return C(T);
    }
    function S() {
      return C(c);
    }
    function E(x) {
      function T(k, U, W, Q, Y) {
        if (typeof x != "function")
          return new y("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var q = k[U];
        if (!Array.isArray(q)) {
          var J = L(q);
          return new y("Invalid " + Q + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an array."));
        }
        for (var re = 0; re < q.length; re++) {
          var X = x(q, re, W, Q, Y + "[" + re + "]", t);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return C(T);
    }
    function b() {
      function x(T, k, U, W, Q) {
        var Y = T[k];
        if (!s(Y)) {
          var q = L(Y);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(x);
    }
    function h() {
      function x(T, k, U, W, Q) {
        var Y = T[k];
        if (!e.isValidElementType(Y)) {
          var q = L(Y);
          return new y("Invalid " + W + " `" + Q + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(x);
    }
    function V(x) {
      function T(k, U, W, Q, Y) {
        if (!(k[U] instanceof x)) {
          var q = x.name || O, J = se(k[U]);
          return new y("Invalid " + Q + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("instance of `" + q + "`."));
        }
        return null;
      }
      return C(T);
    }
    function I(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), c;
      function T(k, U, W, Q, Y) {
        for (var q = k[U], J = 0; J < x.length; J++)
          if (v(q, x[J]))
            return null;
        var re = JSON.stringify(x, function(he, _) {
          var Se = j(_);
          return Se === "symbol" ? String(_) : _;
        });
        return new y("Invalid " + Q + " `" + Y + "` of value `" + String(q) + "` " + ("supplied to `" + W + "`, expected one of " + re + "."));
      }
      return C(T);
    }
    function R(x) {
      function T(k, U, W, Q, Y) {
        if (typeof x != "function")
          return new y("Property `" + Y + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var q = k[U], J = L(q);
        if (J !== "object")
          return new y("Invalid " + Q + " `" + Y + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected an object."));
        for (var re in q)
          if (n(q, re)) {
            var X = x(q, re, W, Q, Y + "." + re, t);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return C(T);
    }
    function B(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var T = 0; T < x.length; T++) {
        var k = x[T];
        if (typeof k != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(k) + " at index " + T + "."
          ), c;
      }
      function U(W, Q, Y, q, J) {
        for (var re = [], X = 0; X < x.length; X++) {
          var he = x[X], _ = he(W, Q, Y, q, J, t);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && re.push(_.data.expectedType);
        }
        var Se = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new y("Invalid " + q + " `" + J + "` supplied to " + ("`" + Y + "`" + Se + "."));
      }
      return C(U);
    }
    function M() {
      function x(T, k, U, W, Q) {
        return F(T[k]) ? null : new y("Invalid " + W + " `" + Q + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return C(x);
    }
    function N(x, T, k, U, W) {
      return new y(
        (x || "React class") + ": " + T + " type `" + k + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function z(x) {
      function T(k, U, W, Q, Y) {
        var q = k[U], J = L(q);
        if (J !== "object")
          return new y("Invalid " + Q + " `" + Y + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var re in x) {
          var X = x[re];
          if (typeof X != "function")
            return N(W, Q, Y, re, j(X));
          var he = X(q, re, W, Q, Y + "." + re, t);
          if (he)
            return he;
        }
        return null;
      }
      return C(T);
    }
    function D(x) {
      function T(k, U, W, Q, Y) {
        var q = k[U], J = L(q);
        if (J !== "object")
          return new y("Invalid " + Q + " `" + Y + "` of type `" + J + "` " + ("supplied to `" + W + "`, expected `object`."));
        var re = r({}, k[U], x);
        for (var X in re) {
          var he = x[X];
          if (n(x, X) && typeof he != "function")
            return N(W, Q, Y, X, j(he));
          if (!he)
            return new y(
              "Invalid " + Q + " `" + Y + "` key `" + X + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(k[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var _ = he(q, X, W, Q, Y + "." + X, t);
          if (_)
            return _;
        }
        return null;
      }
      return C(T);
    }
    function F(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(F);
          if (x === null || s(x))
            return !0;
          var T = p(x);
          if (T) {
            var k = T.call(x), U;
            if (T !== x.entries) {
              for (; !(U = k.next()).done; )
                if (!F(U.value))
                  return !1;
            } else
              for (; !(U = k.next()).done; ) {
                var W = U.value;
                if (W && !F(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(x, T) {
      return x === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function L(x) {
      var T = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : ce(T, x) ? "symbol" : T;
    }
    function j(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var T = L(x);
      if (T === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function G(x) {
      var T = j(x);
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
    function se(x) {
      return !x.constructor || !x.constructor.name ? O : x.constructor.name;
    }
    return l.checkPropTypes = i, l.resetWarningCache = i.resetWarningCache, l.PropTypes = l, l;
  }, wr;
}
var mr, ot;
function Fn() {
  if (ot)
    return mr;
  ot = 1;
  var e = Dr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, mr = function() {
    function n(c, s, d, f, a, p) {
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
  }, mr;
}
if (process.env.NODE_ENV !== "production") {
  var Wn = wt(), Un = !0;
  Rr.exports = $n()(Wn.isElement, Un);
} else
  Rr.exports = Fn()();
var Ct = Rr.exports, Ce = {};
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.FrameContextConsumer = Ce.FrameContextProvider = Ce.useFrame = Ce.FrameContext = void 0;
var Yn = we, Et = Nn(Yn);
function Nn(e) {
  return e && e.__esModule ? e : { default: e };
}
var Rt = void 0, Tt = void 0;
typeof document < "u" && (Rt = document);
typeof window < "u" && (Tt = window);
var jr = Ce.FrameContext = Et.default.createContext({ document: Rt, window: Tt });
Ce.useFrame = function() {
  return Et.default.useContext(jr);
};
var qn = jr.Provider, Gn = jr.Consumer;
Ce.FrameContextProvider = qn;
Ce.FrameContextConsumer = Gn;
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
var Kn = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), Tr = we;
_t(Tr);
var Jn = Ct, Cr = _t(Jn);
function _t(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xn(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Zn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Qn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Pt = function(e) {
  Qn(r, e);
  function r() {
    return Xn(this, r), Zn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
  }
  return Kn(r, [{
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
      return Tr.Children.only(this.props.children);
    }
  }]), r;
}(Tr.Component);
Pt.propTypes = {
  children: Cr.default.element.isRequired,
  contentDidMount: Cr.default.func.isRequired,
  contentDidUpdate: Cr.default.func.isRequired
};
Ir.default = Pt;
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.Frame = void 0;
var _r = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r];
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  }
  return e;
}, eo = /* @__PURE__ */ function() {
  function e(r, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
  }
  return function(r, t, n) {
    return t && e(r.prototype, t), n && e(r, n), r;
  };
}(), Dt = we, Le = ur(Dt), ro = dn, it = ur(ro), to = Ct, Te = ur(to), no = Ce, oo = Ir, io = ur(oo);
function ur(e) {
  return e && e.__esModule ? e : { default: e };
}
function ao(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function co(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function so(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var Br = er.Frame = function(e) {
  so(r, e);
  function r(t, n) {
    ao(this, r);
    var i = co(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t, n));
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
  return eo(r, [{
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
        io.default,
        {
          contentDidMount: i,
          contentDidUpdate: o
        },
        Le.default.createElement(
          no.FrameContextProvider,
          { value: { document: n, window: c } },
          Le.default.createElement(
            "div",
            { className: "frame-content" },
            this.props.children
          )
        )
      ), d = this.getMountTarget();
      return d ? [it.default.createPortal(this.props.head, this.getDoc().head), it.default.createPortal(s, d)] : null;
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
}(Dt.Component);
Br.propTypes = {
  style: Te.default.object,
  // eslint-disable-line
  head: Te.default.node,
  initialContent: Te.default.string,
  mountTarget: Te.default.string,
  contentDidMount: Te.default.func,
  contentDidUpdate: Te.default.func,
  children: Te.default.oneOfType([Te.default.element, Te.default.arrayOf(Te.default.element)])
};
Br.defaultProps = {
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
  return Le.default.createElement(Br, _r({}, e, { forwardedRef: r }));
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
})(Qe);
const uo = /* @__PURE__ */ vn(Qe), lo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), { window: p, document: O } = Qe.useFrame(), [l, v] = je(e.text), y = A(e.name), C = A(e.id), { onExpressionToValue: w, onValueToExpression: S } = xe(), { onDragStart: E, onDragEnd: b } = xe(), { selectedId: h } = Ae(), { hoveredId: V } = Ie(), [I, R] = Xe(!1);
  le(() => {
    !a.current || !I || (a.current.focus(), f(e, null));
  }, [I, f]), Ee({
    value: V,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [V, e]), Ee({
    value: h,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [h, e]);
  const { isDragging: B, preview: M } = _e({
    id: C,
    canDrag: !I,
    element: a,
    end: () => b(),
    data: { element: e, parents: r },
    start: () => {
      E();
    }
  }, [C, I, e, r, E, b]);
  le(() => {
    M(
      () => cr(y),
      (L) => L.remove()
    );
  }, [M, y]);
  const N = K({ id: Ye() });
  me({
    element: a,
    id: N.current.id,
    drop: (L, j) => s(L, j, e, r, a, N.current.id),
    hover: (L, j) => c(L, j, e, r, a, N.current.id),
    leave: (L, j) => o(L, j, e, r, a, N.current.id)
  }, [e, r, s, c, o]);
  const z = H((L) => {
    if (!p || !O)
      return;
    const j = p.getSelection();
    if (!j)
      return;
    const G = O.createRange(), se = L.currentTarget;
    G.selectNodeContents(se), j.removeAllRanges(), j.addRange(G);
  }, [p, O]), D = H((L) => {
    L.stopPropagation(), (L.code === "Escape" || L.code === "Enter" || L.code === "NumpadEnter") && (L.currentTarget.blur(), f(e, L.currentTarget));
  }, [f, e]), F = H((L) => {
    R(!1), v(String(S(L.currentTarget.innerText, "text", "textContent", e))), f(e, L.currentTarget);
  }, [f, S, e]), ce = de(() => w(l, "text", "textContent", e) ?? "", [l, w, e]);
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      contentEditable: I,
      dangerouslySetInnerHTML: { __html: ce },
      onBlur: F,
      onFocus: z,
      onKeyDown: D,
      onDoubleClick: () => R(!0),
      ref: a,
      onMouseLeave: n,
      onClick: (L) => I ? L.stopPropagation() : i(L, e),
      onMouseOver: (L) => I ? L.stopPropagation() : t(L, e, a.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: B ? 0.5 : void 0,
        borderRadius: I ? 4 : void 0,
        boxShadow: I ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, fo = ({ element: e }) => {
  const { onExpressionToValue: r } = xe(), t = A(e.text);
  return de(() => r(t, "text", "textContent", e), [t, r, e]);
}, vo = ({ element: e, parents: r, ...t }) => sr(e, r) ? /* @__PURE__ */ g.jsx(
  fo,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  lo,
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
  const t = A(e.type), { select: n, updateSelectBar: i } = Ae(), { onDrop: o, value: c } = xe(), { hover: s, updateHoverBar: d } = Ie(), f = H((w, S) => {
    w.stopPropagation(), w.preventDefault(), n(S.id.value);
  }, [n]), a = H((w) => {
    w.stopPropagation(), w.preventDefault(), n(void 0), s(void 0);
  }, [n, s]), p = H((w, S) => {
    w.stopPropagation(), s(S.id.value);
  }, [s]), O = H((w) => {
    w.stopPropagation(), s(void 0);
  }, [s]), l = H((w, S) => {
    d(w, () => ({
      top: (S == null ? void 0 : S.offsetTop) || 0,
      left: (S == null ? void 0 : S.offsetLeft) || 0,
      width: (S == null ? void 0 : S.getBoundingClientRect().width) || 0,
      height: (S == null ? void 0 : S.getBoundingClientRect().height) || 0
    }));
  }, [d]), v = H((w, S) => {
    i(w, r, () => ({
      top: (S == null ? void 0 : S.offsetTop) || 0,
      left: (S == null ? void 0 : S.offsetLeft) || 0,
      width: (S == null ? void 0 : S.getBoundingClientRect().width) || 0,
      height: (S == null ? void 0 : S.getBoundingClientRect().height) || 0
    }));
  }, [i, r]), y = H((w, S, E, b, h, V) => {
    if (!Kr(S, E, b, h, V))
      return s(void 0);
    s(E.id.value);
  }, [s]), C = H((w, S, E, b, h, V) => {
    var M, N, z, D, F, ce;
    if (!Kr(S, E, b, h, V))
      return;
    const R = On(S, E, h);
    if (!R)
      return;
    const B = R.isOverStart || R.isOverEnd;
    if (!(!B && E.type.value === "component"))
      if (Object.keys(w).includes("id")) {
        const L = w;
        if (B) {
          const j = b.slice(-1).at(0), G = ((M = (j ? j.children : c).value) == null ? void 0 : M.findIndex((se) => se.id.value === E.id.value)) ?? -1;
          o({
            element: L.id,
            from: { position: -1, element: null },
            to: {
              element: j || "root",
              position: R.isOverStart ? G : G + 1
            }
          });
        } else {
          const j = ((N = E.children.value) == null ? void 0 : N.length) || -1;
          o({
            element: L.id,
            from: { position: -1, element: null },
            to: {
              element: E,
              position: R.isOverStart ? j : j + 1
            }
          });
        }
      } else {
        const L = w, j = (z = L.parents) == null ? void 0 : z.slice(-1).at(0), G = j || "root";
        if (G !== "root" && G.type.value === "component")
          return;
        const se = ((D = (G === "root" ? c : G.children).value) == null ? void 0 : D.findIndex((x) => x.id.value === L.element.id.value)) ?? -1;
        if (B) {
          const x = b.slice(-1).at(0), T = ((F = (x ? x.children : c).value) == null ? void 0 : F.findIndex((k) => k.id.value === E.id.value)) ?? -1;
          o({
            element: L.element,
            from: {
              position: se,
              element: G
            },
            to: {
              element: x || "root",
              position: R.isOverStart ? T : T + 1
            }
          });
        } else {
          const x = ((ce = E.children.value) == null ? void 0 : ce.length) || -1;
          o({
            element: L.element,
            from: {
              position: se,
              element: G
            },
            to: {
              element: E,
              position: R.isOverStart ? x : x + 1
            }
          });
        }
        n(L.element.id.value);
      }
  }, [n, o]);
  return t === "component" ? /* @__PURE__ */ g.jsx(
    _n,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: y,
      onDragLeave: () => {
      },
      onDoubleClick: a,
      onSelect: f,
      onMouseOver: p,
      onMouseLeave: O,
      onHoverBar: l,
      onSelectBar: v
    }
  ) : t === "slot" ? /* @__PURE__ */ g.jsx(
    Ln,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: y,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: p,
      onMouseLeave: O,
      onHoverBar: l,
      onSelectBar: v
    }
  ) : t === "text" ? /* @__PURE__ */ g.jsx(
    vo,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: y,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: p,
      onMouseLeave: O,
      onHoverBar: l,
      onSelectBar: v
    }
  ) : /* @__PURE__ */ g.jsx(
    jn,
    {
      parents: r,
      element: e,
      onDrop: C,
      onDragOver: y,
      onDragLeave: () => {
      },
      onSelect: f,
      onMouseOver: p,
      onMouseLeave: O,
      onHoverBar: l,
      onSelectBar: v
    }
  );
}, po = () => {
  const e = K(null), r = K({ id: Ye() }), { value: t, onDrop: n } = xe(), { select: i } = Ae(), { hover: o } = Ie(), c = A(t), s = H((a, p) => {
    var O;
    if (a)
      if (Object.keys(a).includes("id"))
        n({
          element: a.id,
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
        const l = a, v = xn(l.parents || []), y = v || "root", C = ((O = v == null ? void 0 : v.children.value) == null ? void 0 : O.findIndex((w) => w.id.value === l.element.id.value)) ?? -1;
        n({
          element: l.element,
          from: {
            element: y,
            position: C
          },
          to: {
            element: "root",
            position: t.value.length
          }
        }), i(l.element.id.value);
      }
  }, [t, i]), d = H((a) => {
    a.stopPropagation(), i(void 0);
  }, [i]), [{ isDraggingOver: f }] = me({
    drop: s,
    element: e,
    id: r.current.id,
    leave: () => o(void 0)
  }, [s]);
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      onClick: d,
      ref: e,
      className: "flex-1 h-full w-full",
      children: [
        c.map((a) => /* @__PURE__ */ g.jsx(
          ze,
          {
            parents: [],
            element: a
          },
          a.id.value
        )),
        c.length === 0 && /* @__PURE__ */ g.jsx("p", { children: "Drag and drop here to start" }),
        f && /* @__PURE__ */ g.jsx(wn, {})
      ]
    }
  );
};
function li({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(lt, { children: /* @__PURE__ */ g.jsx(yn, { ...i, children: /* @__PURE__ */ g.jsx(gn, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(bn, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(po, {}) }) }) }) });
}
const jt = ke({});
function ho({ children: e, ...r }) {
  return /* @__PURE__ */ g.jsx(jt.Provider, { value: r, children: e });
}
const be = () => He(jt), It = ke({}), yo = ({ children: e }) => {
  const r = K(ie(!1)), t = K(ie(!1)), n = K(ie(0)), i = K(ie(0)), o = K(ie(0)), c = K(ie(0)), s = de(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: o.current,
    observableTop: c.current
  }), []), d = H((a) => {
    ae(c.current, (p) => p !== a.top ? a.top : p), ae(o.current, (p) => p !== a.left ? a.left : p), ae(i.current, (p) => p !== a.width ? a.width : p), ae(n.current, (p) => p !== a.height ? a.height : p), ae(t.current, (p) => p !== a.isVisible ? a.isVisible : p), ae(r.current, (p) => p !== !!a.isHorizontal ? !!a.isHorizontal : p);
  }, []), f = H(() => {
    d({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [d]);
  return /* @__PURE__ */ g.jsx(It.Provider, { value: { showInsertBar: d, hideInsertBar: f, observables: s }, children: e });
}, Be = () => He(It), go = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: o, observableWidth: c } = Be().observables, [s] = je(o), [d] = je(i), [f] = je(c), [a] = je(r), [p] = je(n), [O] = je(t), l = de(() => ({
    width: O ? f : 4,
    height: O ? 4 : a,
    top: s - (O ? 2 : 0),
    left: d - (O ? 0 : 2)
  }), [a, O, d, s, f]);
  return p ? /* @__PURE__ */ g.jsx(
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
}, Bt = ke({}), bo = ({ children: e, id: r, onSelect: t }) => {
  const n = K({
    documentHorizontalScroll: ie(0),
    playgroundSize: ie(void 0),
    documentVerticalScroll: ie(0),
    getPosition: ie(void 0),
    parents: ie(void 0),
    element: ie(void 0),
    onSelect: t,
    id: r
  });
  return le(() => {
    n.current.id = r;
  }, [r]), le(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ g.jsx(Bt.Provider, { value: n.current, children: e });
};
var Mt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, at = we.createContext && /* @__PURE__ */ we.createContext(Mt), xo = ["attr", "size", "title"];
function So(e, r) {
  if (e == null)
    return {};
  var t = Oo(e, r), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Oo(e, r) {
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
function or() {
  return or = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, or.apply(this, arguments);
}
function ct(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ir(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ct(Object(t), !0).forEach(function(n) {
      wo(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ct(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function wo(e, r, t) {
  return r = mo(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function mo(e) {
  var r = Co(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Co(e, r) {
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
function Vt(e) {
  return e && e.map((r, t) => /* @__PURE__ */ we.createElement(r.tag, ir({
    key: t
  }, r.attr), Vt(r.child)));
}
function lr(e) {
  return (r) => /* @__PURE__ */ we.createElement(Eo, or({
    attr: ir({}, e.attr)
  }, r), Vt(e.child));
}
function Eo(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, c = So(e, xo), s = i || t.size || "1em", d;
    return t.className && (d = t.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ we.createElement("svg", or({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, c, {
      className: d,
      style: ir(ir({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ we.createElement("title", null, o), e.children);
  };
  return at !== void 0 ? /* @__PURE__ */ we.createElement(at.Consumer, null, (t) => r(t)) : r(Mt);
}
function Ro(e) {
  return lr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 7l-5-5h-.707l-5 5 .707.707L8 3.561V14h1V3.56l4.146 4.147.708-.707z" }, child: [] }] })(e);
}
function To(e) {
  return lr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z" }, child: [] }] })(e);
}
function _o(e) {
  return lr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10.232 10.707L8.5 12.44V9h-1v3.44l-1.732-1.733-.707.707L7.646 14h.708l2.585-2.586-.707-.707zM5.061 3.586l.707.707L7.5 2.56V6h1V2.56l1.732 1.733.707-.707L8.354 1h-.708L5.061 3.586zm-.268 1.682L3.06 7H6.5v1H3.06l1.733 1.732-.707.707L1.5 7.854v-.708l2.586-2.585.707.707zM9.5 7h3.44l-1.733-1.732.707-.707L14.5 7.146v.708l-2.586 2.585-.707-.707L12.94 8H9.5V7z" }, child: [] }] })(e);
}
function Po(e) {
  return lr({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" }, child: [] }] })(e);
}
const Do = (e) => {
  let r, t = 0;
  if (!(!e || e.length === 0)) {
    do
      t--, r = e == null ? void 0 : e.slice(t).at(0);
    while (!r || !["html", "slot-content"].includes(r.type.value));
    return r;
  }
}, rr = (e, r) => {
  const t = document.createElement("label");
  return t.style.padding = "4px", t.style.paddingTop = "2px", t.style.paddingRight = "8px", t.style.paddingBottom = "2px", t.style.backgroundColor = "#3e8ce4", t.style.color = "#ffffff", t.style.alignItems = "center", t.style.borderRadius = "2px", t.style.fontWeight = "600", t.style.position = "fixed", t.style.fontSize = "11px", t.style.display = "flex", t.style.height = "20px", t.style.zIndex = "-100", t.style.width = "auto", t.appendChild(new Text(e)), document.body.appendChild(t), t;
};
function jo(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Lt(e) {
  return yt.camel(jo(e));
}
const st = (e, r, t, n, i) => !(!n.current || e.droppableId !== i || e.draggingId === r.id.value || t.some((s) => e.draggingId === s.id.value)), Io = (e, r, t) => {
  if (!t.current)
    return null;
  if (r.type.value === "slot-content" && Array.isArray(r.children.value))
    return { isOverCurrentStart: !1, isOverCurrentEnd: !1, isOverEnd: !1, isOverStart: !1 };
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), o = n ? 5 : i.height / 2, c = e.x - i.x, s = e.y - i.y, d = s >= 0 && s <= o, f = s >= i.height - o && s <= i.height, a = s >= o && s <= i.height - o, p = c >= 0 && c <= o, O = c >= i.width - o && c <= i.width, l = c >= o && c <= i.width - o;
  let v = !1, y = !1, C = !1, w = !1;
  if (n) {
    const S = f || O || d || p;
    v = l && a && !S, y = l && a && !S, C = f || O, w = d || p;
  } else
    C = (f || O) && !d, w = (d || p) && !f;
  return { isOverCurrentStart: v, isOverCurrentEnd: y, isOverEnd: C, isOverStart: w };
}, Bo = (e, r, t) => {
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), o = i ? 5 : n.height / 2, c = e.x - n.x, s = e.y - n.y, d = s >= n.height - o && s <= n.height, f = s >= o && s <= n.height - o, a = c >= 0 && c <= o, p = c >= n.width - o && c <= n.width, O = c >= o && c <= n.width - o;
  let l = !0, v = n.top, y = n.left, C = n.width, w = n.height;
  return d && (a || p || O) ? v = n.top + n.height : f && a ? l = !1 : f && p ? (y = n.left + n.width, l = !1) : O && f && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: l,
    left: y,
    width: C,
    height: w
  };
}, Ne = () => dt(), Pe = () => {
  const e = He(Bt), r = H((o) => {
    e.onSelect(o);
  }, [e.id]), t = H((o, c, s) => {
    ae(e.getPosition, () => s), ae(e.parents, c), ae(e.element, o);
  }, [e.getPosition]), n = H((o, c) => {
    ae(e.documentHorizontalScroll, c), ae(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = H((o, c) => {
    ae(e.playgroundSize, { height: o, width: c });
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
}, Mo = ar(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const s = K(null), d = de(() => {
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
}), Vo = ar(() => {
  const e = K(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = be(), { hideInsertBar: o } = Be(), {
    select: c,
    selectedId: s,
    selectedElement: d,
    selectBarGetPosition: f,
    selectedElementParents: a,
    selectBarDocumentVerticalScroll: p,
    selectBarDocumentHorizontalScroll: O
  } = Pe(), l = A(a), v = A(d), y = A(s), C = pe(({ get: M }) => v ? M(v.name) : "", [v]), { width: w, height: S, top: E, left: b } = pe(({ get: M }) => {
    const N = M(O), z = M(p), D = M(f);
    return D ? {
      width: D().width,
      height: D().height,
      top: D().top - z,
      left: D().left - N
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [O, p, f]), h = H((M) => {
    M.stopPropagation();
    const N = l == null ? void 0 : l.slice(-1).at(0);
    if (N)
      if (N.type.value === "slot-content") {
        const z = l == null ? void 0 : l.find((D) => {
          var F;
          return D.type.value !== "component" ? !1 : (F = D.slots.value) == null ? void 0 : F.some((ce) => ce.id.value === N.id.value);
        });
        c(z == null ? void 0 : z.id.value);
      } else
        c(N.id.value);
  }, [c, l]), V = H(() => {
    v && i(v);
  }, [i, v]), I = H(() => {
    v && n(v);
  }, [n, v]), { preview: R, isDragging: B } = _e({
    element: e,
    id: y || "default",
    start: () => {
      r();
    },
    end: () => {
      o(), t();
    },
    canDrag: !!v && Array.isArray(l),
    data: {
      element: v,
      parents: l
    }
  }, [y, v, l, o, r, t]);
  return le(() => {
    R(
      () => rr(C),
      (M) => M.remove()
    );
  }, [R, C]), !y || w === 0 && S === 0 && b === 0 && E === 0 ? null : /* @__PURE__ */ g.jsx(
    Mo,
    {
      zIndex: 1,
      top: E - 1,
      width: w,
      height: S,
      left: b - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ g.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", wordBreak: "keep-all" }, children: [
        C,
        !B && /* @__PURE__ */ g.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          l && l.length > 0 && /* @__PURE__ */ g.jsx(Ro, { title: "Select parent", onClick: h, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(Po, { title: "Remove element", onClick: V, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx(To, { title: "Duplicate element and children", onClick: I, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ g.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ g.jsx(_o, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), kt = ke({}), Lo = ({ children: e, id: r, onHover: t }) => {
  const n = K({
    documentHorizontalScroll: ie(0),
    playgroundSize: ie(void 0),
    documentVerticalScroll: ie(0),
    getPosition: ie(void 0),
    element: ie(void 0),
    onHover: t,
    id: r
  });
  return le(() => {
    n.current.id = r;
  }, [r]), le(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ g.jsx(kt.Provider, { value: n.current, children: e });
}, De = () => {
  const e = He(kt), r = H((o) => {
    e.id.value !== o && e.onHover(o);
  }, [e.id]), t = H((o, c) => {
    ae(e.getPosition, () => c), ae(e.element, o);
  }, [e.getPosition]), n = H((o, c) => {
    ae(e.documentHorizontalScroll, c), ae(e.documentVerticalScroll, o);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = H((o, c) => {
    ae(e.playgroundSize, { height: o, width: c });
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
}, ko = ar(({ children: e, zIndex: r = 0, top: t = -1e3, left: n = -1e3, width: i = 0, height: o = 0, color: c = "#4a87ee" }) => {
  const s = K(null), d = de(() => {
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
}), Ho = ar(() => {
  const { selectedId: e } = Pe(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: o
  } = De(), c = A(o), s = A(i), d = A(n), f = A(t), a = A(e), p = A(r), O = pe(({ get: w }) => f ? w(f.name) : "", [f]), { width: l, height: v, top: y, left: C } = de(() => d ? {
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
  return !p || p === a || l === 0 && v === 0 && C === 0 && y === 0 ? null : /* @__PURE__ */ g.jsx(
    ko,
    {
      zIndex: 1,
      top: y - 1,
      width: l,
      left: C - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ g.jsx("div", { style: { whiteSpace: "nowrap", wordBreak: "keep-all" }, children: O })
    }
  );
}), Ao = ({ children: e, onScroll: r, onRef: t, onKeyDown: n, onClick: i }) => {
  const { document: o } = Qe.useFrame();
  return le(() => {
    o && t(o);
  }, [t, o]), le(() => {
    o && (o.onclick = i, o.onkeydown = n, o.onscroll = (c) => r(c.target.documentElement.scrollTop, c.target.documentElement.scrollLeft));
  }, [o, r, n, i]), e;
}, zo = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = A(
    de(() => Ze(({ get: c }) => c(r).map((s) => ({
      id: c(s.id),
      content: c(s.content)
    }))), [r])
  ), o = de(() => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    i.map((c) => Pr("style", { key: c.id }, c.content)),
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
    uo,
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
}, $o = (e, r) => pe(({ get: t }) => r.map((n) => t(n.id)).includes(t(e.id)), [e, r]), dr = (e, r) => pe(({ get: n }) => {
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
}, [r, e]), Fo = ({ element: e }) => {
  const r = A(e.name);
  return /* @__PURE__ */ g.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ g.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, Re = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = pe(({ get: o }) => {
    if (!e)
      return !1;
    const c = o(e);
    if (!r)
      return !1;
    const s = o(r);
    return c === s;
  }, [...n]);
  le(() => {
    i && t();
  }, [i]);
}, Wo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: o }) => {
  const c = K(null), { selectedId: s } = Pe(), { hoveredId: d } = De(), f = A(e.name);
  return Re({
    value: d,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, c.current)
  }, [d, e]), Re({
    value: s,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, c.current)
  }, [s, e]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: c,
      onMouseLeave: n,
      onClick: (a) => o(a, e),
      onMouseOver: (a) => i(a, e, c.current),
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
}, Uo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f, onDoubleClick: a }) => {
  const p = K(null), { onDragStart: O, onDragEnd: l, components: v } = be(), { hideInsertBar: y } = Be(), { selectedId: C } = Pe(), { hoveredId: w } = De(), S = A(e.name), E = A(e.id), b = pe(({ get: B }) => {
    const M = B(v).find((N) => B(N.id) === B(e.referenceComponentId));
    return M ? B(M.content) : [];
  }, [v, e]);
  Re({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, p.current)
  }, [w, e]), Re({
    value: C,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, p.current)
  }, [C, e]);
  const h = de(() => !b || b.length === 0 ? null : b.map((B) => /* @__PURE__ */ g.jsx(
    $e,
    {
      element: B,
      parents: [...r, e]
    },
    B.id.value
  )), [b, r, e]), { isDragging: V, preview: I } = _e({
    id: E,
    element: p,
    data: { element: e, parents: r },
    start: () => {
      O();
    },
    end: () => {
      y(), l();
    }
  }, [E, e, r, y, O, l]);
  le(() => {
    I(
      () => rr(S),
      (B) => B.remove()
    );
  }, [I, S]);
  const R = K({ id: Ne() });
  return me({
    element: p,
    id: R.current.id,
    drop: (B, M) => s(B, M, e, r, p, R.current.id),
    hover: (B, M) => c(B, M, e, r, p, R.current.id),
    leave: (B, M) => o(B, M, e, r, p, R.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    "div",
    {
      ref: p,
      onMouseLeave: n,
      onClick: (B) => i(B, e),
      onDoubleClick: (B) => a(B, e),
      onMouseOver: (B) => t(B, e, p.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: V ? 0.5 : void 0 },
      children: h
    }
  );
}, Yo = ({ element: e, parents: r }) => {
  const { components: t } = be(), n = pe(({ get: i }) => {
    const o = i(t).find((c) => i(c.id) === i(e.referenceComponentId));
    return o ? i(o.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ g.jsx(
    $e,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, No = ({ element: e, parents: r, ...t }) => {
  const n = $o(e, r), i = dr(e, r);
  return n ? i ? /* @__PURE__ */ g.jsx(Fo, { element: e }) : /* @__PURE__ */ g.jsx(
    Wo,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ g.jsx(
    Yo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    Uo,
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
}, Ht = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Ze(({ get: n }) => {
    const i = n(e.style);
    if (!i)
      return {};
    const o = {};
    return i.forEach((c) => {
      const s = n(c.name), d = n(c.value);
      s && (o[Lt(s)] = r(d, s, "style", e));
    }), o;
  }), [e, r, e]);
  return A(t);
}, At = (e) => {
  const { onExpressionToValue: r } = be(), t = de(() => Ze({
    get({ get: n }) {
      const i = n(e.attributes);
      if (!i)
        return [{}, {}];
      const o = {}, c = {};
      return i.forEach((s) => {
        const d = n(s.name);
        if (d === void 0 || d === "hidden" || d === "style")
          return;
        const f = r(n(s.value), d, "attribute", e), a = Lt(d);
        switch (a) {
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
              o[a] = f;
            break;
        }
      }), [o, c];
    }
  }), [e, r]);
  return A(t);
}, zt = ut(({ tag: e, ...r }, t) => Pr(e, { ref: t, ...r })), qo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), [p, O] = Xe(!1), [
    l
    /* elementSpecialProps */
  ] = At(e), v = A(e.children), y = Ht(e), C = A(e.name), w = A(e.tag), S = A(e.id), { onDragStart: E, onDragEnd: b } = be(), { hideInsertBar: h } = Be(), { selectedId: V } = Pe(), { hoveredId: I } = De();
  Re({
    value: I,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [I, e]), Re({
    value: V,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [V, e]), le(() => {
    O((F) => I.value === S === F ? F : !F);
    const D = I.subscribe((F) => {
      O((ce) => F === S === ce ? ce : !ce);
    });
    return () => D.unsubscribe();
  }, [S, I]);
  const R = de(() => !v || v.length === 0 ? null : v.map((D) => /* @__PURE__ */ g.jsx(
    $e,
    {
      element: D,
      parents: [...r, e]
    },
    D.id.value
  )), [v, r, e]), B = de(() => v !== void 0, [v]), { isDragging: M, preview: N } = _e({
    id: S,
    element: a,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), b();
    }
  }, [S, e, r, h, E, b]);
  le(() => {
    N(
      () => rr(C),
      (D) => D.remove()
    );
  }, [N, C]);
  const z = K({ id: Ne() });
  return me({
    element: a,
    id: z.current.id,
    drop: (D, F) => s(D, F, e, r, a, z.current.id),
    hover: (D, F) => c(D, F, e, r, a, z.current.id),
    leave: (D, F) => o(D, F, e, r, a, z.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsx(
    zt,
    {
      readOnly: !0,
      tag: w,
      ref: a,
      children: R,
      onMouseLeave: n,
      onClick: (D) => i(D, e),
      onMouseOver: (D) => t(D, e, a.current),
      ...l !== void 0 ? { ...l, ...p ? { disabled: !1 } : {} } : {},
      style: {
        ...y,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: M ? 0.5 : typeof y.opacity == "number" ? Number(y.opacity) : void 0,
        minWidth: R === null && B ? 40 : typeof y.minWidth == "number" ? Number(y.minWidth) : void 0,
        minHeight: R === null && B ? 40 : typeof y.minHeight == "number" ? Number(y.minHeight) : void 0
      }
    }
  );
}, Go = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = At(e), n = A(e.children), i = Ht(e), o = A(e.tag), c = de(() => !n || n.length === 0 ? null : n.map((s) => /* @__PURE__ */ g.jsx(
    $e,
    {
      element: s,
      parents: [...r, e]
    },
    s.id.value
  )), [n, r, e]);
  return /* @__PURE__ */ g.jsx(
    zt,
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
}, Ko = ({ element: e, parents: r, ...t }) => dr(e, r) ? /* @__PURE__ */ g.jsx(
  Go,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  qo,
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
), Jo = (e, r) => {
  const { components: t } = be();
  return pe(({ get: n }) => {
    const i = n(t), o = [...r].reverse(), c = o.findIndex((f) => {
      var O;
      if (n(f.type) !== "component")
        return !1;
      const a = f;
      return n(e.componentId) === n(a.referenceComponentId) ? (O = n(a.slots)) == null ? void 0 : O.some((l) => n(l.referenceSlotId) === n(e.id)) : !1;
    });
    return !o.at(c) || o.slice(c + 1).reduce((f, a) => f !== void 0 ? f : n(a.type) === "slot-content" ? !1 : n(a.type) === "component" ? !0 : f, void 0) ? !1 : i.some((f) => n(f.id) === n(e.componentId));
  }, [r, e, t]);
}, $t = (e, r) => {
  const { onAddSlotContent: t } = be();
  return pe(({ get: n }) => {
    var c;
    const i = [...r].reverse().filter((s) => n(s.type) === "component").find((s) => n(s.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const o = (c = n(i.slots)) == null ? void 0 : c.find((s) => n(s.referenceSlotId) === n(e.id));
    return o ? [n(o.children), o] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, Xo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: o, onDrop: c, onHoverBar: s }) => {
  const d = K(null), [f = [], a] = $t(e, r), { hoveredId: p } = De();
  Re({
    value: p,
    matchWidthValue: a == null ? void 0 : a.id,
    effect() {
      a && s(e, d.current);
    }
  }, [p, a == null ? void 0 : a.id, e]);
  const O = K({ id: Ne() });
  return me({
    element: d,
    id: O.current.id,
    drop: (l, v) => a ? c(l, v, a, r, d, O.current.id) : void 0,
    hover: (l, v) => a ? o(l, v, a, r, d, O.current.id) : void 0,
    leave: (l, v) => a ? i(l, v, a, r, d, O.current.id) : void 0
  }, [a, r, c, o, i]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: d,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (l) => a ? t(l, a, d.current) : void 0,
      children: [
        a && f.length > 0 && f.map((l) => /* @__PURE__ */ g.jsx(
          $e,
          {
            element: l,
            parents: [...r, a]
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
}, Zo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), { onDragStart: p, onDragEnd: O } = be(), { hideInsertBar: l } = Be(), { selectedId: v } = Pe(), { hoveredId: y } = De(), C = A(e.name), w = A(e.id);
  Re({
    value: y,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [y, e]), Re({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [v, e]);
  const { isDragging: S, preview: E } = _e({
    id: w,
    element: a,
    data: { element: e, parents: r },
    start: () => {
      p();
    },
    end: () => {
      l(), O();
    }
  }, [w, e, r, l, p, O]);
  le(() => {
    E(
      () => rr(C),
      (h) => h.remove()
    );
  }, [E, C]);
  const b = K({ id: Ne() });
  return me({
    element: a,
    id: b.current.id,
    drop: (h, V) => s(h, V, e, r, a, b.current.id),
    hover: (h, V) => c(h, V, e, r, a, b.current.id),
    leave: (h, V) => o(h, V, e, r, a, b.current.id)
  }, [e, r, s, c, o]), /* @__PURE__ */ g.jsxs(
    "div",
    {
      ref: a,
      onMouseLeave: n,
      onClick: (h) => i(h, e),
      onMouseOver: (h) => t(h, e, a.current),
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
        C,
        '"'
      ]
    }
  );
}, Qo = ({ element: e, parents: r }) => {
  const [t = [], n] = $t(e, r);
  return /* @__PURE__ */ g.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ g.jsx(
    $e,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, ei = ({ element: e, parents: r, ...t }) => {
  const n = dr(e, r);
  return Jo(e, r) ? /* @__PURE__ */ g.jsx(
    Xo,
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
    Qo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ g.jsx(
    Zo,
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
}, ri = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: o, onDragOver: c, onDrop: s, onHoverBar: d, onSelectBar: f }) => {
  const a = K(null), { window: p, document: O } = Qe.useFrame(), [l, v] = je(e.text), y = A(e.name), C = A(e.id), { onExpressionToValue: w, onValueToExpression: S } = be(), { onDragStart: E, onDragEnd: b } = be(), { hideInsertBar: h } = Be(), { selectedId: V } = Pe(), { hoveredId: I } = De(), [R, B] = Xe(!1);
  le(() => {
    !a.current || !R || (a.current.focus(), f(e, null));
  }, [R, f]), Re({
    value: I,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, a.current)
  }, [I, e]), Re({
    value: V,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, a.current)
  }, [V, e]);
  const { isDragging: M, preview: N } = _e({
    id: C,
    canDrag: !R,
    element: a,
    data: { element: e, parents: r },
    start: () => {
      E();
    },
    end: () => {
      h(), b();
    }
  }, [C, R, e, r, h, E, b]);
  le(() => {
    N(
      () => rr(y),
      (j) => j.remove()
    );
  }, [N, y]);
  const z = K({ id: Ne() });
  me({
    element: a,
    id: z.current.id,
    drop: (j, G) => s(j, G, e, r, a, z.current.id),
    hover: (j, G) => c(j, G, e, r, a, z.current.id),
    leave: (j, G) => o(j, G, e, r, a, z.current.id)
  }, [e, r, s, c, o]);
  const D = H((j) => {
    if (!p || !O)
      return;
    const G = p.getSelection();
    if (!G)
      return;
    const se = O.createRange(), x = j.currentTarget;
    se.selectNodeContents(x), G.removeAllRanges(), G.addRange(se);
  }, [p, O]), F = H((j) => {
    j.stopPropagation(), (j.code === "Escape" || j.code === "Enter" || j.code === "NumpadEnter") && (j.currentTarget.blur(), f(e, j.currentTarget));
  }, [f, e]), ce = H((j) => {
    B(!1), v(String(S(j.currentTarget.innerText, "text", "textContent", e))), f(e, j.currentTarget);
  }, [f, S, e]), L = de(() => w(l, "text", "textContent", e) ?? "", [l, w, e]);
  return /* @__PURE__ */ g.jsx(
    "span",
    {
      contentEditable: R,
      dangerouslySetInnerHTML: { __html: L },
      onBlur: ce,
      onFocus: D,
      onKeyDown: F,
      onDoubleClick: () => B(!0),
      ref: a,
      onMouseLeave: n,
      onClick: (j) => R ? j.stopPropagation() : i(j, e),
      onMouseOver: (j) => R ? j.stopPropagation() : t(j, e, a.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: M ? 0.5 : void 0,
        borderRadius: R ? 4 : void 0,
        boxShadow: R ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, ti = ({ element: e }) => {
  const { onExpressionToValue: r } = be(), t = A(e.text);
  return de(() => r(t, "text", "textContent", e), [t, r, e]);
}, ni = ({ element: e, parents: r, ...t }) => dr(e, r) ? /* @__PURE__ */ g.jsx(
  ti,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ g.jsx(
  ri,
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
), $e = ({ element: e, parents: r }) => {
  const t = A(e.type), { showInsertBar: n, hideInsertBar: i } = Be(), { select: o, updateSelectBar: c } = Pe(), { hover: s, updateHoverBar: d } = De(), { onDrop: f, value: a } = be(), p = H((E, b) => {
    E.stopPropagation(), E.preventDefault(), o(b.id.value);
  }, [o]), O = H((E) => {
    E.stopPropagation(), E.preventDefault(), o(void 0), s(void 0);
  }, [o, s]), l = H((E, b) => {
    E.stopPropagation(), s(b.id.value);
  }, [s]), v = H((E) => {
    E.stopPropagation(), s(void 0);
  }, [s]), y = H((E, b) => {
    d(E, () => ({
      top: (b == null ? void 0 : b.offsetTop) || 0,
      left: (b == null ? void 0 : b.offsetLeft) || 0,
      width: (b == null ? void 0 : b.getBoundingClientRect().width) || 0,
      height: (b == null ? void 0 : b.getBoundingClientRect().height) || 0
    }));
  }, [d]), C = H((E, b) => {
    c(E, r, () => ({
      top: (b == null ? void 0 : b.offsetTop) || 0,
      left: (b == null ? void 0 : b.offsetLeft) || 0,
      width: (b == null ? void 0 : b.getBoundingClientRect().width) || 0,
      height: (b == null ? void 0 : b.getBoundingClientRect().height) || 0
    }));
  }, [c, r]), w = H((E, b, h, V, I, R) => {
    if (!st(b, h, V, I, R))
      return s(void 0);
    s(h.id.value);
    const M = Bo(b, h, I);
    if (!M)
      return i();
    n({
      isVisible: !0,
      top: M.top,
      left: M.left,
      width: M.width,
      height: M.height,
      isHorizontal: M.isHorizontal
    });
  }, [n, s, i]), S = H((E, b, h, V, I, R) => {
    var z, D, F, ce, L, j;
    if (!st(b, h, V, I, R))
      return;
    const M = Io(b, h, I);
    if (!M)
      return;
    const N = M.isOverStart || M.isOverEnd;
    if (!(!N && h.type.value === "component")) {
      if (Object.keys(E).includes("id")) {
        const G = E;
        if (N) {
          const se = V.slice(-1).at(0), x = ((z = (se ? se.children : a).value) == null ? void 0 : z.findIndex((T) => T.id.value === h.id.value)) ?? -1;
          f({
            element: G.id,
            from: { position: -1, element: null },
            to: {
              element: se || "root",
              position: M.isOverStart ? x : x + 1
            }
          });
        } else {
          const se = ((D = h.children.value) == null ? void 0 : D.length) || -1;
          f({
            element: G.id,
            from: { position: -1, element: null },
            to: {
              element: h,
              position: M.isOverStart ? se : se + 1
            }
          });
        }
      } else {
        const G = E, se = (F = G.parents) == null ? void 0 : F.slice(-1).at(0), x = se || "root";
        if (x !== "root" && x.type.value === "component")
          return;
        const T = ((ce = (x === "root" ? a : x.children).value) == null ? void 0 : ce.findIndex((k) => k.id.value === G.element.id.value)) ?? -1;
        if (N) {
          const k = V.slice(-1).at(0), U = ((L = (k ? k.children : a).value) == null ? void 0 : L.findIndex((W) => W.id.value === h.id.value)) ?? -1;
          f({
            element: G.element,
            from: {
              position: T,
              element: x
            },
            to: {
              element: k || "root",
              position: M.isOverStart ? U : U + 1
            }
          });
        } else {
          const k = ((j = h.children.value) == null ? void 0 : j.length) || -1;
          f({
            element: G.element,
            from: {
              position: T,
              element: x
            },
            to: {
              element: h,
              position: M.isOverStart ? k : k + 1
            }
          });
        }
        o(G.element.id.value);
      }
      i();
    }
  }, [o, f, i]);
  return t === "component" ? /* @__PURE__ */ g.jsx(
    No,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: w,
      onDragLeave: () => {
      },
      onDoubleClick: O,
      onSelect: p,
      onMouseOver: l,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: C
    }
  ) : t === "slot" ? /* @__PURE__ */ g.jsx(
    ei,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: l,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: C
    }
  ) : t === "text" ? /* @__PURE__ */ g.jsx(
    ni,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: l,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: C
    }
  ) : /* @__PURE__ */ g.jsx(
    Ko,
    {
      parents: r,
      element: e,
      onDrop: S,
      onDragOver: w,
      onDragLeave: () => {
      },
      onSelect: p,
      onMouseOver: l,
      onMouseLeave: v,
      onHoverBar: y,
      onSelectBar: C
    }
  );
}, oi = () => {
  const e = K({ id: Ne() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = be(), { updateSelectBarScroll: o, select: c } = Pe(), { showInsertBar: s, hideInsertBar: d } = Be(), { updateHoverBarScroll: f, hover: a } = De(), [p, O] = Xe(null), l = A(r), v = H((b, h) => {
    var V;
    if (d(), !!b)
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
        const I = b, R = Do(I.parents || []), B = R || "root", M = ((V = R == null ? void 0 : R.children.value) == null ? void 0 : V.findIndex((N) => N.id.value === I.element.id.value)) ?? -1;
        n({
          element: I.element,
          from: {
            element: B,
            position: M
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), c(I.element.id.value);
      }
  }, [r, c, d]), y = H((b, h) => {
    const V = p == null ? void 0 : p.lastElementChild;
    if (!V)
      return;
    const I = V.getBoundingClientRect();
    s({
      isVisible: !0,
      isHorizontal: !0,
      left: I.left,
      width: I.width,
      height: I.height,
      top: V ? I.top + I.height : I.top
    });
  }, [p == null ? void 0 : p.lastElementChild, s]), C = H((b, h) => {
    o(b, h), f(b, h);
  }, [o, f]), w = H((b) => {
    b.stopPropagation(), c(void 0);
  }, [c]), [{ isDraggingOver: S, isDraggingOverCurrent: E }] = me({
    drop: v,
    hover: y,
    id: e.current.id,
    element: { current: p },
    leave: () => {
      d(), a(void 0);
    }
  }, [v, y, d]);
  return /* @__PURE__ */ g.jsx(
    zo,
    {
      styles: t,
      resetBody: !0,
      draggingHover: S || E,
      children: /* @__PURE__ */ g.jsxs(
        Ao,
        {
          onClick: w,
          onKeyDown: i,
          onScroll: C,
          onRef: O,
          children: [
            /* @__PURE__ */ g.jsx(go, {}),
            /* @__PURE__ */ g.jsx(Ho, {}),
            /* @__PURE__ */ g.jsx(Vo, {}),
            l.map((b) => /* @__PURE__ */ g.jsx(
              $e,
              {
                parents: [],
                element: b
              },
              b.id.value
            )),
            l.length === 0 && /* @__PURE__ */ g.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ g.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
          ]
        }
      )
    }
  );
};
function di({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ g.jsx(lt, { children: /* @__PURE__ */ g.jsx(ho, { ...i, children: /* @__PURE__ */ g.jsx(yo, { children: /* @__PURE__ */ g.jsx(bo, { id: t, onSelect: e, children: /* @__PURE__ */ g.jsx(Lo, { id: n, onHover: r, children: /* @__PURE__ */ g.jsx(oi, {}) }) }) }) }) });
}
export {
  di as UIEditor,
  li as UiOverview
};
//# sourceMappingURL=index.es.js.map

import me, { createContext as Ke, useContext as Je, useRef as te, useMemo as ye, useCallback as Q, useEffect as he, memo as Xe, createElement as Qr, forwardRef as Wt, useState as mr } from "react";
import { useDrag as He, useDrop as ke, DragAndDropProvider as Ut } from "react-use-drag-and-drop";
import { observe as ue, set as se, useObserver as je, useObserverValue as J, useSelectorValue as Oe, selector as xr } from "react-observing";
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
var Fr;
function Kt() {
  if (Fr)
    return ze;
  Fr = 1;
  var e = me, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(u, f, d) {
    var l, h = {}, x = null, c = null;
    d !== void 0 && (x = "" + d), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (c = f.ref);
    for (l in f)
      n.call(f, l) && !a.hasOwnProperty(l) && (h[l] = f[l]);
    if (u && u.defaultProps)
      for (l in f = u.defaultProps, f)
        h[l] === void 0 && (h[l] = f[l]);
    return { $$typeof: r, type: u, key: x, ref: c, props: h, _owner: i.current };
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
var Vr;
function Jt() {
  return Vr || (Vr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), v = Symbol.iterator, b = "@@iterator";
    function w(o) {
      if (o === null || typeof o != "object")
        return null;
      var g = v && o[v] || o[b];
      return typeof g == "function" ? g : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(o) {
      {
        for (var g = arguments.length, O = new Array(g > 1 ? g - 1 : 0), M = 1; M < g; M++)
          O[M - 1] = arguments[M];
        C("error", o, O);
      }
    }
    function C(o, g, O) {
      {
        var M = R.ReactDebugCurrentFrame, N = M.getStackAddendum();
        N !== "" && (g += "%s", O = O.concat([N]));
        var Z = O.map(function(U) {
          return String(U);
        });
        Z.unshift("Warning: " + g), Function.prototype.apply.call(console[o], console, Z);
      }
    }
    var m = !1, p = !1, j = !1, q = !1, ee = !1, F;
    F = Symbol.for("react.module.reference");
    function D(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === n || o === a || ee || o === i || o === d || o === l || q || o === c || m || p || j || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === h || o.$$typeof === s || o.$$typeof === u || o.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === F || o.getModuleId !== void 0));
    }
    function re(o, g, O) {
      var M = o.displayName;
      if (M)
        return M;
      var N = g.displayName || g.name || "";
      return N !== "" ? O + "(" + N + ")" : O;
    }
    function ne(o) {
      return o.displayName || "Context";
    }
    function A(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
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
          case s:
            var O = o;
            return ne(O._context) + ".Provider";
          case f:
            return re(o, o.render, "ForwardRef");
          case h:
            var M = o.displayName || null;
            return M !== null ? M : A(o.type) || "Memo";
          case x: {
            var N = o, Z = N._payload, U = N._init;
            try {
              return A(U(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, X = 0, ie, de, le, ce, y, _, I;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function B() {
      {
        if (X === 0) {
          ie = console.log, de = console.info, le = console.warn, ce = console.error, y = console.group, _ = console.groupCollapsed, I = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: k,
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
        X++;
      }
    }
    function W() {
      {
        if (X--, X === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, o, {
              value: ie
            }),
            info: T({}, o, {
              value: de
            }),
            warn: T({}, o, {
              value: le
            }),
            error: T({}, o, {
              value: ce
            }),
            group: T({}, o, {
              value: y
            }),
            groupCollapsed: T({}, o, {
              value: _
            }),
            groupEnd: T({}, o, {
              value: I
            })
          });
        }
        X < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = R.ReactCurrentDispatcher, V;
    function z(o, g, O) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (N) {
            var M = N.stack.trim().match(/\n( *(at )?)/);
            V = M && M[1] || "";
          }
        return `
` + V + o;
      }
    }
    var Y = !1, $;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new fe();
    }
    function S(o, g) {
      if (!o || Y)
        return "";
      {
        var O = $.get(o);
        if (O !== void 0)
          return O;
      }
      var M;
      Y = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = L.current, L.current = null, B();
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
            } catch (pe) {
              M = pe;
            }
            Reflect.construct(o, [], U);
          } else {
            try {
              U.call();
            } catch (pe) {
              M = pe;
            }
            o.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            M = pe;
          }
          o();
        }
      } catch (pe) {
        if (pe && M && typeof pe.stack == "string") {
          for (var H = pe.stack.split(`
`), ve = M.stack.split(`
`), oe = H.length - 1, ae = ve.length - 1; oe >= 1 && ae >= 0 && H[oe] !== ve[ae]; )
            ae--;
          for (; oe >= 1 && ae >= 0; oe--, ae--)
            if (H[oe] !== ve[ae]) {
              if (oe !== 1 || ae !== 1)
                do
                  if (oe--, ae--, ae < 0 || H[oe] !== ve[ae]) {
                    var be = `
` + H[oe].replace(" at new ", " at ");
                    return o.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", o.displayName)), typeof o == "function" && $.set(o, be), be;
                  }
                while (oe >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        Y = !1, L.current = Z, W(), Error.prepareStackTrace = N;
      }
      var Be = o ? o.displayName || o.name : "", Pe = Be ? z(Be) : "";
      return typeof o == "function" && $.set(o, Pe), Pe;
    }
    function ge(o, g, O) {
      return S(o, !1);
    }
    function Me(o) {
      var g = o.prototype;
      return !!(g && g.isReactComponent);
    }
    function Te(o, g, O) {
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
          case f:
            return ge(o.render);
          case h:
            return Te(o.type, g, O);
          case x: {
            var M = o, N = M._payload, Z = M._init;
            try {
              return Te(Z(N), g, O);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, _r = {}, Cr = R.ReactDebugCurrentFrame;
    function Ye(o) {
      if (o) {
        var g = o._owner, O = Te(o.type, o._source, g ? g.type : null);
        Cr.setExtraStackFrame(O);
      } else
        Cr.setExtraStackFrame(null);
    }
    function wt(o, g, O, M, N) {
      {
        var Z = Function.call.bind(Fe);
        for (var U in o)
          if (Z(o, U)) {
            var H = void 0;
            try {
              if (typeof o[U] != "function") {
                var ve = Error((M || "React class") + ": " + O + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              H = o[U](g, U, M, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              H = oe;
            }
            H && !(H instanceof Error) && (Ye(N), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", O, U, typeof H), Ye(null)), H instanceof Error && !(H.message in _r) && (_r[H.message] = !0, Ye(N), P("Failed %s type: %s", O, H.message), Ye(null));
          }
      }
    }
    var St = Array.isArray;
    function tr(o) {
      return St(o);
    }
    function Ot(o) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, O = g && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return O;
      }
    }
    function Et(o) {
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
      if (Et(o))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(o)), Rr(o);
    }
    var Ve = R.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pr, jr, nr;
    nr = {};
    function Ct(o) {
      if (Fe.call(o, "ref")) {
        var g = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Rt(o) {
      if (Fe.call(o, "key")) {
        var g = Object.getOwnPropertyDescriptor(o, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Tt(o, g) {
      if (typeof o.ref == "string" && Ve.current && g && Ve.current.stateNode !== g) {
        var O = A(Ve.current.type);
        nr[O] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Ve.current.type), o.ref), nr[O] = !0);
      }
    }
    function Pt(o, g) {
      {
        var O = function() {
          Pr || (Pr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        O.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function jt(o, g) {
      {
        var O = function() {
          jr || (jr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        O.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Dt = function(o, g, O, M, N, Z, U) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: o,
        key: g,
        ref: O,
        props: U,
        // Record the component responsible for creating this element.
        _owner: Z
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
        value: M
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function It(o, g, O, M, N) {
      {
        var Z, U = {}, H = null, ve = null;
        O !== void 0 && (Tr(O), H = "" + O), Rt(g) && (Tr(g.key), H = "" + g.key), Ct(g) && (ve = g.ref, Tt(g, N));
        for (Z in g)
          Fe.call(g, Z) && !_t.hasOwnProperty(Z) && (U[Z] = g[Z]);
        if (o && o.defaultProps) {
          var oe = o.defaultProps;
          for (Z in oe)
            U[Z] === void 0 && (U[Z] = oe[Z]);
        }
        if (H || ve) {
          var ae = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          H && Pt(U, ae), ve && jt(U, ae);
        }
        return Dt(o, H, ve, N, M, Ve.current, U);
      }
    }
    var or = R.ReactCurrentOwner, Dr = R.ReactDebugCurrentFrame;
    function Ae(o) {
      if (o) {
        var g = o._owner, O = Te(o.type, o._source, g ? g.type : null);
        Dr.setExtraStackFrame(O);
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
          var o = A(or.current.type);
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
          var O = typeof o == "string" ? o : o.displayName || o.name;
          O && (g = `

Check the top-level render call using <` + O + ">.");
        }
        return g;
      }
    }
    function Ar(o, g) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var O = At(g);
        if (Mr[O])
          return;
        Mr[O] = !0;
        var M = "";
        o && o._owner && o._owner !== or.current && (M = " It was passed a child from " + A(o._owner.type) + "."), Ae(o), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, M), Ae(null);
      }
    }
    function Br(o, g) {
      {
        if (typeof o != "object")
          return;
        if (tr(o))
          for (var O = 0; O < o.length; O++) {
            var M = o[O];
            ar(M) && Ar(M, g);
          }
        else if (ar(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var N = w(o);
          if (typeof N == "function" && N !== o.entries)
            for (var Z = N.call(o), U; !(U = Z.next()).done; )
              ar(U.value) && Ar(U.value, g);
        }
      }
    }
    function Bt(o) {
      {
        var g = o.type;
        if (g == null || typeof g == "string")
          return;
        var O;
        if (typeof g == "function")
          O = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === h))
          O = g.propTypes;
        else
          return;
        if (O) {
          var M = A(g);
          wt(O, o.props, "prop", M, o);
        } else if (g.PropTypes !== void 0 && !ir) {
          ir = !0;
          var N = A(g);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(o) {
      {
        for (var g = Object.keys(o.props), O = 0; O < g.length; O++) {
          var M = g[O];
          if (M !== "children" && M !== "key") {
            Ae(o), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), Ae(null);
            break;
          }
        }
        o.ref !== null && (Ae(o), P("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    var kr = {};
    function Lr(o, g, O, M, N, Z) {
      {
        var U = D(o);
        if (!U) {
          var H = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Mt();
          ve ? H += ve : H += Ir();
          var oe;
          o === null ? oe = "null" : tr(o) ? oe = "array" : o !== void 0 && o.$$typeof === r ? (oe = "<" + (A(o.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof o, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, H);
        }
        var ae = It(o, g, O, N, Z);
        if (ae == null)
          return ae;
        if (U) {
          var be = g.children;
          if (be !== void 0)
            if (M)
              if (tr(be)) {
                for (var Be = 0; Be < be.length; Be++)
                  Br(be[Be], o);
                Object.freeze && Object.freeze(be);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Br(be, o);
        }
        if (Fe.call(g, "key")) {
          var Pe = A(o), pe = Object.keys(g).filter(function(Ht) {
            return Ht !== "key";
          }), cr = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kr[Pe + cr]) {
            var $t = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, cr, Pe, $t, Pe), kr[Pe + cr] = !0;
          }
        }
        return o === n ? kt(ae) : Bt(ae), ae;
      }
    }
    function Lt(o, g, O) {
      return Lr(o, g, O, !0);
    }
    function Ft(o, g, O) {
      return Lr(o, g, O, !1);
    }
    var Vt = Ft, zt = Lt;
    $e.Fragment = n, $e.jsx = Vt, $e.jsxs = zt;
  }()), $e;
}
process.env.NODE_ENV === "production" ? hr.exports = Kt() : hr.exports = Jt();
var E = hr.exports;
const et = Ke({});
function Xt({ children: e, ...r }) {
  return /* @__PURE__ */ E.jsx(et.Provider, { value: r, children: e });
}
const Ee = () => Je(et), rt = Ke({}), Zt = ({ children: e }) => {
  const r = te(ue(!1)), t = te(ue(!1)), n = te(ue(0)), i = te(ue(0)), a = te(ue(0)), s = te(ue(0)), u = ye(() => ({
    observableIsHorizontal: r.current,
    observableIsVisible: t.current,
    observableHeight: n.current,
    observableWidth: i.current,
    observableLeft: a.current,
    observableTop: s.current
  }), []), f = Q((l) => {
    se(s.current, (h) => h !== l.top ? l.top : h), se(a.current, (h) => h !== l.left ? l.left : h), se(i.current, (h) => h !== l.width ? l.width : h), se(n.current, (h) => h !== l.height ? l.height : h), se(t.current, (h) => h !== l.isVisible ? l.isVisible : h), se(r.current, (h) => h !== !!l.isHorizontal ? !!l.isHorizontal : h);
  }, []), d = Q(() => {
    f({
      width: 0,
      height: 0,
      top: -100,
      left: -100,
      isVisible: !1
    });
  }, [f]);
  return /* @__PURE__ */ E.jsx(rt.Provider, { value: { showInsertBar: f, hideInsertBar: d, observables: u }, children: e });
}, Re = () => Je(rt), Qt = ({ color: e = "#3e8ce4" }) => {
  const { observableHeight: r, observableIsHorizontal: t, observableIsVisible: n, observableLeft: i, observableTop: a, observableWidth: s } = Re().observables, [u] = je(a), [f] = je(i), [d] = je(s), [l] = je(r), [h] = je(n), [x] = je(t), c = ye(() => ({
    width: x ? d : 4,
    height: x ? 4 : l,
    top: u - (x ? 2 : 0),
    left: f - (x ? 0 : 2)
  }), [l, x, f, u, d]);
  return h ? /* @__PURE__ */ E.jsx(
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
  const n = te({
    documentHorizontalScroll: ue(0),
    playgroundSize: ue(void 0),
    documentVerticalScroll: ue(0),
    getPosition: ue(void 0),
    parents: ue(void 0),
    element: ue(void 0),
    onSelect: t,
    id: r
  });
  return he(() => {
    n.current.id = r;
  }, [r]), he(() => {
    n.current.onSelect = t;
  }, [t]), /* @__PURE__ */ E.jsx(tt.Provider, { value: n.current, children: e });
};
var nt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, zr = me.createContext && /* @__PURE__ */ me.createContext(nt), rn = ["attr", "size", "title"];
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
  return e && e.map((r, t) => /* @__PURE__ */ me.createElement(r.tag, Ge({
    key: t
  }, r.attr), ot(r.child)));
}
function Ze(e) {
  return (r) => /* @__PURE__ */ me.createElement(un, Ne({
    attr: Ge({}, e.attr)
  }, r), ot(e.child));
}
function un(e) {
  var r = (t) => {
    var {
      attr: n,
      size: i,
      title: a
    } = e, s = tn(e, rn), u = i || t.size || "1em", f;
    return t.className && (f = t.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ me.createElement("svg", Ne({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, s, {
      className: f,
      style: Ge(Ge({
        color: e.color || t.color
      }, t.style), e.style),
      height: u,
      width: u,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ me.createElement("title", null, a), e.children);
  };
  return zr !== void 0 ? /* @__PURE__ */ me.createElement(zr.Consumer, null, (t) => r(t)) : r(nt);
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
    }, u = s(), f = {
      re: u,
      unicodes: r,
      regexps: s,
      types: [],
      up: String.prototype.toUpperCase,
      low: String.prototype.toLowerCase,
      cap: function(c) {
        return f.up.call(c.charAt(0)) + c.slice(1);
      },
      decap: function(c) {
        return f.low.call(c.charAt(0)) + c.slice(1);
      },
      deapostrophe: function(c) {
        return c.replace(u.apostrophe, "");
      },
      fill: function(c, v, b) {
        return v != null && (c = c.replace(u.fill, function(w, R) {
          return R ? v + R : "";
        })), b && (c = f.deapostrophe(c)), c;
      },
      prep: function(c, v, b, w) {
        if (c = c == null ? "" : c + "", !w && u.upper.test(c) && (c = f.low.call(c)), !v && !u.hole.test(c)) {
          var R = f.fill(c, " ");
          u.hole.test(R) && (c = R);
        }
        return !b && !u.room.test(c) && (c = c.replace(u.relax, f.relax)), c;
      },
      relax: function(c, v, b, w) {
        return v + " " + (b ? b + " " : "") + w;
      }
    }, d = {
      _: f,
      of: function(c) {
        for (var v = 0, b = f.types.length; v < b; v++)
          if (d[f.types[v]].apply(d, arguments) === c)
            return f.types[v];
      },
      flip: function(c) {
        return c.replace(/\w/g, function(v) {
          return (v == f.up.call(v) ? f.low : f.up).call(v);
        });
      },
      random: function(c) {
        return c.replace(/\w/g, function(v) {
          return (Math.round(Math.random()) ? f.up : f.low).call(v);
        });
      },
      type: function(c, v) {
        d[c] = v, f.types.push(c);
      }
    }, l = {
      lower: function(c, v, b) {
        return f.fill(f.low.call(f.prep(c, v)), v, b);
      },
      snake: function(c) {
        return d.lower(c, "_", !0);
      },
      constant: function(c) {
        return d.upper(c, "_", !0);
      },
      camel: function(c) {
        return f.decap(d.pascal(c));
      },
      kebab: function(c) {
        return d.lower(c, "-", !0);
      },
      upper: function(c, v, b) {
        return f.fill(f.up.call(f.prep(c, v, !1, !0)), v, b);
      },
      capital: function(c, v, b) {
        return f.fill(f.prep(c).replace(u.capitalize, function(w, R, P) {
          return R + f.up.call(P);
        }), v, b);
      },
      header: function(c) {
        return d.capital(c, "-", !0);
      },
      pascal: function(c) {
        return f.fill(f.prep(c, !1, !0).replace(u.pascal, function(v, b, w) {
          return f.up.call(w);
        }), "", !0);
      },
      title: function(c) {
        return d.capital(c).replace(u.improper, function(v, b, w, R) {
          return w > 0 && w < R.lastIndexOf(" ") ? f.low.call(v) : v;
        });
      },
      sentence: function(c, v, b) {
        return c = d.lower(c).replace(u.sentence, function(w, R, P) {
          return R + f.up.call(P);
        }), v && v.forEach(function(w) {
          c = c.replace(new RegExp("\\b" + d.lower(w) + "\\b", "g"), f.cap);
        }), b && b.forEach(function(w) {
          c = c.replace(new RegExp("(\\b" + d.lower(w) + "\\. +)(\\w)"), function(R, P, C) {
            return P + f.low.call(C);
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
  const n = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), i = t.current.getBoundingClientRect(), a = n ? 5 : i.height / 2, s = e.x - i.x, u = e.y - i.y, f = u >= 0 && u <= a, d = u >= i.height - a && u <= i.height, l = u >= a && u <= i.height - a, h = s >= 0 && s <= a, x = s >= i.width - a && s <= i.width, c = s >= a && s <= i.width - a;
  let v = !1, b = !1, w = !1, R = !1;
  if (n) {
    const P = d || x || f || h;
    v = c && l && !P, b = c && l && !P, w = d || x, R = f || h;
  } else
    w = (d || x) && !f, R = (f || h) && !d;
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
  const i = ["component", "slot", "text"].includes(r.type.value) ? !1 : Array.isArray(r.children.value), a = i ? 5 : n.height / 2, s = e.x - n.x, u = e.y - n.y, f = u >= n.height - a && u <= n.height, d = u >= a && u <= n.height - a, l = s >= 0 && s <= a, h = s >= n.width - a && s <= n.width, x = s >= a && s <= n.width - a;
  let c = !0, v = n.top, b = n.left, w = n.width, R = n.height;
  return f && (l || h || x) ? v = n.top + n.height : d && l ? c = !1 : d && h ? (b = n.left + n.width, c = !1) : x && d && (v = n.top + (i ? n.height / 2 : n.height)), {
    top: v,
    isHorizontal: c,
    left: b,
    width: w,
    height: R
  };
}, Le = () => Yt(), _e = () => {
  const e = Je(tt), r = Q((a) => {
    e.onSelect(a);
  }, [e.id]), t = Q((a, s, u) => {
    se(e.getPosition, () => u), se(e.parents, s), se(e.element, a);
  }, [e.getPosition]), n = Q((a, s) => {
    se(e.documentHorizontalScroll, s), se(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Q((a, s) => {
    se(e.playgroundSize, { height: a, width: s });
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
  const u = te(null), f = ye(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ E.jsx(
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
      children: /* @__PURE__ */ E.jsx(
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
            left: f,
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
  const e = te(null), { onDragStart: r, onDragEnd: t, onDuplicate: n, onRemove: i } = Ee(), { hideInsertBar: a } = Re(), {
    select: s,
    selectedId: u,
    selectedElement: f,
    selectBarGetPosition: d,
    selectedElementParents: l,
    selectBarDocumentVerticalScroll: h,
    selectBarDocumentHorizontalScroll: x
  } = _e(), c = J(l), v = J(f), b = J(u), w = Oe(({ get: D }) => v ? D(v.name) : "", [v]), { width: R, height: P, top: C, left: m } = Oe(({ get: D }) => {
    const re = D(x), ne = D(h), A = D(d);
    return A ? {
      width: A().width,
      height: A().height,
      top: A().top - ne,
      left: A().left - re
    } : {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }, [x, h, d]), p = Q(() => {
    const D = c == null ? void 0 : c.slice(-1).at(0);
    if (D)
      if (D.type.value === "slot-content") {
        const re = c == null ? void 0 : c.find((ne) => {
          var A;
          return ne.type.value !== "component" ? !1 : (A = ne.slots.value) == null ? void 0 : A.some((T) => T.id.value === D.id.value);
        });
        s(re == null ? void 0 : re.id.value);
      } else
        s(D.id.value);
  }, [s, c]), j = Q(() => {
    v && i(v);
  }, [i, v]), q = Q(() => {
    v && n(v);
  }, [n, v]), { preview: ee, isDragging: F } = He({
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
  return he(() => {
    ee(
      () => We(w),
      (D) => D.remove()
    );
  }, [ee, w]), !b || R === 0 && P === 0 && m === 0 && C === 0 ? null : /* @__PURE__ */ E.jsx(
    bn,
    {
      zIndex: 1,
      top: C - 1,
      width: R,
      height: P,
      left: m - 1,
      color: "#4a87ee",
      children: /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
        w,
        !F && /* @__PURE__ */ E.jsxs("div", { style: { pointerEvents: "auto", display: "flex", alignItems: "center", gap: 4 }, children: [
          c && c.length > 0 && /* @__PURE__ */ E.jsx(sn, { title: "Select parent", onClick: p, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ E.jsx(dn, { title: "Remove element", onClick: j, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ E.jsx(ln, { title: "Duplicate element and children", onClick: q, style: { cursor: "pointer", width: 14, height: 14 } }),
          /* @__PURE__ */ E.jsx("span", { ref: e, title: "Drag element", style: { display: "flex", cursor: "move" }, children: /* @__PURE__ */ E.jsx(fn, { style: { width: 14, height: 14, pointerEvents: "none" } }) })
        ] })
      ] })
    }
  );
}), ct = Ke({}), xn = ({ children: e, id: r, onHover: t }) => {
  const n = te({
    documentHorizontalScroll: ue(0),
    playgroundSize: ue(void 0),
    documentVerticalScroll: ue(0),
    getPosition: ue(void 0),
    element: ue(void 0),
    onHover: t,
    id: r
  });
  return he(() => {
    n.current.id = r;
  }, [r]), he(() => {
    n.current.onHover = t;
  }, [t]), /* @__PURE__ */ E.jsx(ct.Provider, { value: n.current, children: e });
}, Ce = () => {
  const e = Je(ct), r = Q((a) => {
    e.id.value !== a && e.onHover(a);
  }, [e.id]), t = Q((a, s) => {
    se(e.getPosition, () => s), se(e.element, a);
  }, [e.getPosition]), n = Q((a, s) => {
    se(e.documentHorizontalScroll, s), se(e.documentVerticalScroll, a);
  }, [e.documentVerticalScroll, e.documentHorizontalScroll]), i = Q((a, s) => {
    se(e.playgroundSize, { height: a, width: s });
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
  const u = te(null), f = ye(() => {
    if (!u.current || n + u.current.getBoundingClientRect().width <= u.current.ownerDocument.documentElement.clientWidth)
      return 0;
    const d = n + u.current.getBoundingClientRect().width;
    return u.current.ownerDocument.documentElement.clientWidth - d;
  }, [n]);
  return /* @__PURE__ */ E.jsx(
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
      children: /* @__PURE__ */ E.jsx(
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
            left: f,
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
  const { selectedId: e } = _e(), {
    hoveredId: r,
    hoveredElement: t,
    hoverBarGetPosition: n,
    hoverBarDocumentVerticalScroll: i,
    hoverBarDocumentHorizontalScroll: a
  } = Ce(), s = J(a), u = J(i), f = J(n), d = J(t), l = J(e), h = J(r), x = Oe(({ get: R }) => d ? R(d.name) : "", [d]), { width: c, height: v, top: b, left: w } = ye(() => f ? {
    width: f().width,
    height: f().height,
    top: f().top - u,
    left: f().left - s
  } : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  }, [s, u, f]);
  return !h || h === l || c === 0 && v === 0 && w === 0 && b === 0 ? null : /* @__PURE__ */ E.jsx(
    wn,
    {
      zIndex: 1,
      top: b - 1,
      width: c,
      left: w - 1,
      height: v,
      color: "#ed8b5f",
      children: /* @__PURE__ */ E.jsx("div", { children: x })
    }
  );
});
var Qe = {}, Ue = {}, yr = { exports: {} }, qe = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wr;
function On() {
  if (Wr)
    return G;
  Wr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(p) {
    if (typeof p == "object" && p !== null) {
      var j = p.$$typeof;
      switch (j) {
        case r:
          switch (p = p.type, p) {
            case f:
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
                case s:
                  return p;
                default:
                  return j;
              }
          }
        case t:
          return j;
      }
    }
  }
  function m(p) {
    return C(p) === d;
  }
  return G.AsyncMode = f, G.ConcurrentMode = d, G.ContextConsumer = u, G.ContextProvider = s, G.Element = r, G.ForwardRef = l, G.Fragment = n, G.Lazy = v, G.Memo = c, G.Portal = t, G.Profiler = a, G.StrictMode = i, G.Suspense = h, G.isAsyncMode = function(p) {
    return m(p) || C(p) === f;
  }, G.isConcurrentMode = m, G.isContextConsumer = function(p) {
    return C(p) === u;
  }, G.isContextProvider = function(p) {
    return C(p) === s;
  }, G.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === r;
  }, G.isForwardRef = function(p) {
    return C(p) === l;
  }, G.isFragment = function(p) {
    return C(p) === n;
  }, G.isLazy = function(p) {
    return C(p) === v;
  }, G.isMemo = function(p) {
    return C(p) === c;
  }, G.isPortal = function(p) {
    return C(p) === t;
  }, G.isProfiler = function(p) {
    return C(p) === a;
  }, G.isStrictMode = function(p) {
    return C(p) === i;
  }, G.isSuspense = function(p) {
    return C(p) === h;
  }, G.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === d || p === a || p === i || p === h || p === x || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === c || p.$$typeof === s || p.$$typeof === u || p.$$typeof === l || p.$$typeof === w || p.$$typeof === R || p.$$typeof === P || p.$$typeof === b);
  }, G.typeOf = C, G;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function En() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, c = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function C(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === d || S === a || S === i || S === h || S === x || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === c || S.$$typeof === s || S.$$typeof === u || S.$$typeof === l || S.$$typeof === w || S.$$typeof === R || S.$$typeof === P || S.$$typeof === b);
    }
    function m(S) {
      if (typeof S == "object" && S !== null) {
        var ge = S.$$typeof;
        switch (ge) {
          case r:
            var Me = S.type;
            switch (Me) {
              case f:
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
                  case s:
                    return Te;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var p = f, j = d, q = u, ee = s, F = r, D = l, re = n, ne = v, A = c, T = t, X = a, ie = i, de = h, le = !1;
    function ce(S) {
      return le || (le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(S) || m(S) === f;
    }
    function y(S) {
      return m(S) === d;
    }
    function _(S) {
      return m(S) === u;
    }
    function I(S) {
      return m(S) === s;
    }
    function k(S) {
      return typeof S == "object" && S !== null && S.$$typeof === r;
    }
    function B(S) {
      return m(S) === l;
    }
    function W(S) {
      return m(S) === n;
    }
    function L(S) {
      return m(S) === v;
    }
    function V(S) {
      return m(S) === c;
    }
    function z(S) {
      return m(S) === t;
    }
    function Y(S) {
      return m(S) === a;
    }
    function $(S) {
      return m(S) === i;
    }
    function fe(S) {
      return m(S) === h;
    }
    K.AsyncMode = p, K.ConcurrentMode = j, K.ContextConsumer = q, K.ContextProvider = ee, K.Element = F, K.ForwardRef = D, K.Fragment = re, K.Lazy = ne, K.Memo = A, K.Portal = T, K.Profiler = X, K.StrictMode = ie, K.Suspense = de, K.isAsyncMode = ce, K.isConcurrentMode = y, K.isContextConsumer = _, K.isContextProvider = I, K.isElement = k, K.isForwardRef = B, K.isFragment = W, K.isLazy = L, K.isMemo = V, K.isPortal = z, K.isProfiler = Y, K.isStrictMode = $, K.isSuspense = fe, K.isValidElementType = C, K.typeOf = m;
  }()), K;
}
var Yr;
function ut() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? qe.exports = On() : qe.exports = En()), qe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ur, qr;
function _n() {
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
      var f = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        d[l] = l;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ur = i() ? Object.assign : function(a, s) {
    for (var u, f = n(a), d, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var h in u)
        r.call(u, h) && (f[h] = u[h]);
      if (e) {
        d = e(u);
        for (var x = 0; x < d.length; x++)
          t.call(u, d[x]) && (f[d[x]] = u[d[x]]);
      }
    }
    return f;
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
function Cn() {
  if (Kr)
    return fr;
  Kr = 1;
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
  function i(a, s, u, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var h;
          try {
            if (typeof a[l] != "function") {
              var x = Error(
                (f || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            h = a[l](s, l, f, u, null, r);
          } catch (v) {
            h = v;
          }
          if (h && !(h instanceof Error) && e(
            (f || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
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
  var e = ut(), r = _n(), t = wr(), n = st(), i = Cn(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var f = "Warning: " + u;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return dr = function(u, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function h(y) {
      var _ = y && (d && y[d] || y[l]);
      if (typeof _ == "function")
        return _;
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
      any: P(),
      arrayOf: C,
      element: m(),
      elementType: p(),
      instanceOf: j,
      node: D(),
      objectOf: ee,
      oneOf: q,
      oneOfType: F,
      shape: ne,
      exact: A
    };
    function v(y, _) {
      return y === _ ? y !== 0 || 1 / y === 1 / _ : y !== y && _ !== _;
    }
    function b(y, _) {
      this.message = y, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function w(y) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, I = 0;
      function k(W, L, V, z, Y, $, fe) {
        if (z = z || x, $ = $ || V, fe !== t) {
          if (f) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = z + ":" + V;
            !_[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ge] = !0, I++);
          }
        }
        return L[V] == null ? W ? L[V] === null ? new b("The " + Y + " `" + $ + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new b("The " + Y + " `" + $ + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : y(L, V, z, Y, $);
      }
      var B = k.bind(null, !1);
      return B.isRequired = k.bind(null, !0), B;
    }
    function R(y) {
      function _(I, k, B, W, L, V) {
        var z = I[k], Y = ie(z);
        if (Y !== y) {
          var $ = de(z);
          return new b(
            "Invalid " + W + " `" + L + "` of type " + ("`" + $ + "` supplied to `" + B + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return w(_);
    }
    function P() {
      return w(s);
    }
    function C(y) {
      function _(I, k, B, W, L) {
        if (typeof y != "function")
          return new b("Property `" + L + "` of component `" + B + "` has invalid PropType notation inside arrayOf.");
        var V = I[k];
        if (!Array.isArray(V)) {
          var z = ie(V);
          return new b("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + B + "`, expected an array."));
        }
        for (var Y = 0; Y < V.length; Y++) {
          var $ = y(V, Y, B, W, L + "[" + Y + "]", t);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return w(_);
    }
    function m() {
      function y(_, I, k, B, W) {
        var L = _[I];
        if (!u(L)) {
          var V = ie(L);
          return new b("Invalid " + B + " `" + W + "` of type " + ("`" + V + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(y);
    }
    function p() {
      function y(_, I, k, B, W) {
        var L = _[I];
        if (!e.isValidElementType(L)) {
          var V = ie(L);
          return new b("Invalid " + B + " `" + W + "` of type " + ("`" + V + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(y);
    }
    function j(y) {
      function _(I, k, B, W, L) {
        if (!(I[k] instanceof y)) {
          var V = y.name || x, z = ce(I[k]);
          return new b("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + B + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return w(_);
    }
    function q(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(I, k, B, W, L) {
        for (var V = I[k], z = 0; z < y.length; z++)
          if (v(V, y[z]))
            return null;
        var Y = JSON.stringify(y, function(fe, S) {
          var ge = de(S);
          return ge === "symbol" ? String(S) : S;
        });
        return new b("Invalid " + W + " `" + L + "` of value `" + String(V) + "` " + ("supplied to `" + B + "`, expected one of " + Y + "."));
      }
      return w(_);
    }
    function ee(y) {
      function _(I, k, B, W, L) {
        if (typeof y != "function")
          return new b("Property `" + L + "` of component `" + B + "` has invalid PropType notation inside objectOf.");
        var V = I[k], z = ie(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + L + "` of type " + ("`" + z + "` supplied to `" + B + "`, expected an object."));
        for (var Y in V)
          if (n(V, Y)) {
            var $ = y(V, Y, B, W, L + "." + Y, t);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return w(_);
    }
    function F(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < y.length; _++) {
        var I = y[_];
        if (typeof I != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + le(I) + " at index " + _ + "."
          ), s;
      }
      function k(B, W, L, V, z) {
        for (var Y = [], $ = 0; $ < y.length; $++) {
          var fe = y[$], S = fe(B, W, L, V, z, t);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && Y.push(S.data.expectedType);
        }
        var ge = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new b("Invalid " + V + " `" + z + "` supplied to " + ("`" + L + "`" + ge + "."));
      }
      return w(k);
    }
    function D() {
      function y(_, I, k, B, W) {
        return T(_[I]) ? null : new b("Invalid " + B + " `" + W + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return w(y);
    }
    function re(y, _, I, k, B) {
      return new b(
        (y || "React class") + ": " + _ + " type `" + I + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + B + "`."
      );
    }
    function ne(y) {
      function _(I, k, B, W, L) {
        var V = I[k], z = ie(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + L + "` of type `" + z + "` " + ("supplied to `" + B + "`, expected `object`."));
        for (var Y in y) {
          var $ = y[Y];
          if (typeof $ != "function")
            return re(B, W, L, Y, de($));
          var fe = $(V, Y, B, W, L + "." + Y, t);
          if (fe)
            return fe;
        }
        return null;
      }
      return w(_);
    }
    function A(y) {
      function _(I, k, B, W, L) {
        var V = I[k], z = ie(V);
        if (z !== "object")
          return new b("Invalid " + W + " `" + L + "` of type `" + z + "` " + ("supplied to `" + B + "`, expected `object`."));
        var Y = r({}, I[k], y);
        for (var $ in Y) {
          var fe = y[$];
          if (n(y, $) && typeof fe != "function")
            return re(B, W, L, $, de(fe));
          if (!fe)
            return new b(
              "Invalid " + W + " `" + L + "` key `" + $ + "` supplied to `" + B + "`.\nBad object: " + JSON.stringify(I[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var S = fe(V, $, B, W, L + "." + $, t);
          if (S)
            return S;
        }
        return null;
      }
      return w(_);
    }
    function T(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(T);
          if (y === null || u(y))
            return !0;
          var _ = h(y);
          if (_) {
            var I = _.call(y), k;
            if (_ !== y.entries) {
              for (; !(k = I.next()).done; )
                if (!T(k.value))
                  return !1;
            } else
              for (; !(k = I.next()).done; ) {
                var B = k.value;
                if (B && !T(B[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(y, _) {
      return y === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ie(y) {
      var _ = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : X(_, y) ? "symbol" : _;
    }
    function de(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var _ = ie(y);
      if (_ === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function le(y) {
      var _ = de(y);
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
    function ce(y) {
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
    function n(s, u, f, d, l, h) {
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
var lt = yr.exports, xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.FrameContextConsumer = xe.FrameContextProvider = xe.useFrame = xe.FrameContext = void 0;
var Dn = me, ft = In(Dn);
function In(e) {
  return e && e.__esModule ? e : { default: e };
}
var dt = void 0, vt = void 0;
typeof document < "u" && (dt = document);
typeof window < "u" && (vt = window);
var Sr = xe.FrameContext = ft.default.createContext({ document: dt, window: vt });
xe.useFrame = function() {
  return ft.default.useContext(Sr);
};
var Mn = Sr.Provider, An = Sr.Consumer;
xe.FrameContextProvider = Mn;
xe.FrameContextConsumer = An;
var Or = {};
Object.defineProperty(Or, "__esModule", {
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
}(), gr = me;
pt(gr);
var kn = lt, pr = pt(kn);
function pt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ln(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Fn(e, r) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && (typeof r == "object" || typeof r == "function") ? r : e;
}
function Vn(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
}
var ht = function(e) {
  Vn(r, e);
  function r() {
    return Ln(this, r), Fn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
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
Or.default = ht;
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
}(), yt = me, De = er(yt), $n = qt, Zr = er($n), Hn = lt, Se = er(Hn), Wn = xe, Un = Or, Yn = er(Un);
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
var Er = Ue.Frame = function(e) {
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
      ), f = this.getMountTarget();
      return f ? [Zr.default.createPortal(this.props.head, this.getDoc().head), Zr.default.createPortal(u, f)] : null;
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
Er.propTypes = {
  style: Se.default.object,
  // eslint-disable-line
  head: Se.default.node,
  initialContent: Se.default.string,
  mountTarget: Se.default.string,
  contentDidMount: Se.default.func,
  contentDidUpdate: Se.default.func,
  children: Se.default.oneOfType([Se.default.element, Se.default.arrayOf(Se.default.element)])
};
Er.defaultProps = {
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
  return De.default.createElement(Er, br({}, e, { forwardedRef: r }));
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
  var t = xe;
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
  return he(() => {
    i && t(i);
  }, [t, i]), he(() => {
    i && (i.onkeydown = n, i.onscroll = (a) => r(a.target.documentElement.scrollTop, a.target.documentElement.scrollLeft));
  }, [i, r]), e;
}, Xn = ({ children: e, styles: r, draggingHover: t, resetBody: n }) => {
  const i = J(
    ye(() => xr(({ get: s }) => s(r).map((u) => ({
      id: s(u.id),
      content: s(u.content)
    }))), [r])
  ), a = ye(() => /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
    i.map((s) => Qr("style", { key: s.id }, s.content)),
    /* @__PURE__ */ E.jsx("style", { children: [
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
  return /* @__PURE__ */ E.jsx(
    Kn,
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
  const r = J(e.name);
  return /* @__PURE__ */ E.jsxs("div", { style: { cursor: "default", userSelect: "none", pointerEvents: "none", outline: "none", border: "2px solid orange", fontFamily: "sans-serif" }, children: [
    'This component "',
    /* @__PURE__ */ E.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: r }),
    '" introduces a infinite loop.'
  ] });
}, we = ({ value: e, matchWidthValue: r, effect: t }, n) => {
  const i = Oe(({ get: a }) => {
    if (!e)
      return !1;
    const s = a(e);
    if (!r)
      return !1;
    const u = a(r);
    return s === u;
  }, [...n]);
  he(() => {
    i && t();
  }, [i]);
}, eo = ({ element: e, onHoverBar: r, onSelectBar: t, onMouseLeave: n, onMouseOver: i, onSelect: a }) => {
  const s = te(null), { selectedId: u } = _e(), { hoveredId: f } = Ce(), d = J(e.name);
  return we({
    value: f,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => r(e, s.current)
  }, [f, e]), we({
    value: u,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => t(e, s.current)
  }, [u, e]), /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: s,
      onMouseLeave: n,
      onClick: (l) => a(l, e),
      onMouseOver: (l) => i(l, e, s.current),
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
        /* @__PURE__ */ E.jsx("b", { style: { fontWeight: "bold", outline: "none", pointerEvents: "none" }, children: d }),
        '" introduces a infinite loop.'
      ]
    }
  );
}, ro = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: f, onSelectBar: d, onDoubleClick: l }) => {
  const h = te(null), { onDragStart: x, onDragEnd: c, components: v } = Ee(), { hideInsertBar: b } = Re(), { selectedId: w } = _e(), { hoveredId: R } = Ce(), P = J(e.name), C = J(e.id), m = Oe(({ get: F }) => {
    const D = F(v).find((re) => F(re.id) === F(e.referenceComponentId));
    return D ? F(D.content) : [];
  }, [v, e]);
  we({
    value: R,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, h.current)
  }, [R, e]), we({
    value: w,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, h.current)
  }, [w, e]);
  const p = ye(() => !m || m.length === 0 ? null : m.map((F) => /* @__PURE__ */ E.jsx(
    Ie,
    {
      element: F,
      parents: [...r, e]
    },
    F.id.value
  )), [m, r, e]), { isDragging: j, preview: q } = He({
    id: C,
    element: h,
    data: { element: e, parents: r },
    start: () => {
      x();
    },
    end: () => {
      b(), c();
    }
  }, [C, e, r, b, x, c]);
  he(() => {
    q(
      () => We(P),
      (F) => F.remove()
    );
  }, [q, P]);
  const ee = te({ id: Le() });
  return ke({
    element: h,
    id: ee.current.id,
    drop: (F, D) => u(F, D, e, r, h, ee.current.id),
    hover: (F, D) => s(F, D, e, r, h, ee.current.id),
    leave: (F, D) => a(F, D, e, r, h, ee.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ E.jsx(
    "div",
    {
      ref: h,
      onMouseLeave: n,
      onClick: (F) => i(F, e),
      onDoubleClick: (F) => l(F, e),
      onMouseOver: (F) => t(F, e, h.current),
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", opacity: j ? 0.5 : void 0 },
      children: p
    }
  );
}, to = ({ element: e, parents: r }) => {
  const { components: t } = Ee(), n = Oe(({ get: i }) => {
    const a = i(t).find((s) => i(s.id) === i(e.referenceComponentId));
    return a ? i(a.content) : [];
  }, [t, e]);
  return /* @__PURE__ */ E.jsx("div", { style: { outline: "none", pointerEvents: "none" }, children: n.map((i) => /* @__PURE__ */ E.jsx(
    Ie,
    {
      element: i,
      parents: [...r, e]
    },
    i.id.value
  )) });
}, no = ({ element: e, parents: r, ...t }) => {
  const n = Zn(e, r), i = rr(e, r);
  return n ? i ? /* @__PURE__ */ E.jsx(Qn, { element: e }) : /* @__PURE__ */ E.jsx(
    eo,
    {
      element: e,
      onSelect: t.onSelect,
      onMouseOver: t.onMouseOver,
      onMouseLeave: t.onMouseLeave,
      onHoverBar: t.onHoverBar,
      onSelectBar: t.onSelectBar
    }
  ) : i ? /* @__PURE__ */ E.jsx(
    to,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ E.jsx(
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
  const r = ye(() => xr(({ get: t }) => {
    const n = t(e);
    if (!n)
      return {};
    const i = {};
    return n.forEach((a) => {
      const s = t(a.name), u = t(a.value);
      s && (i[at(s)] = u);
    }), i;
  }), [e]);
  return J(r);
}, bt = (e) => {
  const r = ye(() => xr({
    get({ get: t }) {
      const n = t(e);
      if (!n)
        return [{}, {}];
      const i = {}, a = {};
      return n.forEach((s) => {
        const u = t(s.name);
        if (u === void 0 || u === "hidden" || u === "style")
          return;
        const f = t(s.value), d = at(u);
        switch (d) {
          case "options":
            a.options = f;
            break;
          case "className":
            i.className = f;
            break;
          case "class":
            i.className = f;
            break;
          default:
            if (u.startsWith("data-")) {
              i[u] = f;
              return;
            } else
              i[d] = f;
            break;
        }
      }), [i, a];
    }
  }), [e]);
  return J(r);
}, mt = Wt(({ tag: e, ...r }, t) => Qr(e, { ref: t, ...r })), oo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: f, onSelectBar: d }) => {
  const l = te(null), [h, x] = mr(!1), [
    c
    /* elementSpecialProps */
  ] = bt(e.attributes), v = gt(e.style), b = J(e.children), w = J(e.name), R = J(e.tag), P = J(e.id), { onDragStart: C, onDragEnd: m } = Ee(), { hideInsertBar: p } = Re(), { selectedId: j } = _e(), { hoveredId: q } = Ce();
  we({
    value: q,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [q, e]), we({
    value: j,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [j, e]), he(() => {
    x((T) => q.value === P === T ? T : !T);
    const A = q.subscribe((T) => {
      x((X) => T === P === X ? X : !X);
    });
    return () => A.unsubscribe();
  }, [P, q]);
  const ee = ye(() => !b || b.length === 0 ? null : b.map((A) => /* @__PURE__ */ E.jsx(
    Ie,
    {
      element: A,
      parents: [...r, e]
    },
    A.id.value
  )), [b, r, e]), F = ye(() => b !== void 0, [b]), { isDragging: D, preview: re } = He({
    id: P,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      C();
    },
    end: () => {
      p(), m();
    }
  }, [P, e, r, p, C, m]);
  he(() => {
    re(
      () => We(w),
      (A) => A.remove()
    );
  }, [re, w]);
  const ne = te({ id: Le() });
  return ke({
    element: l,
    id: ne.current.id,
    drop: (A, T) => u(A, T, e, r, l, ne.current.id),
    hover: (A, T) => s(A, T, e, r, l, ne.current.id),
    leave: (A, T) => a(A, T, e, r, l, ne.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ E.jsx(
    mt,
    {
      readOnly: !0,
      tag: R,
      ref: l,
      children: ee,
      onMouseLeave: n,
      onClick: (A) => i(A, e),
      onMouseOver: (A) => t(A, e, l.current),
      ...c !== void 0 ? { ...c, ...h ? { disabled: !1 } : {} } : {},
      style: {
        ...v,
        resize: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "all",
        opacity: D ? 0.5 : typeof v.opacity == "number" ? Number(v.opacity) : void 0,
        minWidth: ee === null && F ? 40 : typeof v.minWidth == "number" ? Number(v.minWidth) : void 0,
        minHeight: ee === null && F ? 40 : typeof v.minHeight == "number" ? Number(v.minHeight) : void 0
      }
    }
  );
}, io = ({ element: e, parents: r }) => {
  const [
    t
    /* elementSpecialProps */
  ] = bt(e.attributes), n = gt(e.style), i = J(e.children), a = J(e.tag), s = ye(() => !i || i.length === 0 ? null : i.map((u) => /* @__PURE__ */ E.jsx(
    Ie,
    {
      element: u,
      parents: [...r, e]
    },
    u.id.value
  )), [i, r, e]);
  return /* @__PURE__ */ E.jsx(
    mt,
    {
      tag: a,
      children: s,
      ...t !== void 0 ? t : {},
      style: {
        ...n,
        resize: "none",
        outline: "none",
        cursor: "default",
        userSelect: "none",
        pointerEvents: "none"
      }
    }
  );
}, ao = ({ element: e, parents: r, ...t }) => rr(e, r) ? /* @__PURE__ */ E.jsx(
  io,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ E.jsx(
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
  const { components: t } = Ee();
  return Oe(({ get: n }) => {
    const i = n(t), a = [...r].reverse(), s = a.findIndex((d) => {
      var x;
      if (n(d.type) !== "component")
        return !1;
      const l = d;
      return n(e.componentId) === n(l.referenceComponentId) ? (x = n(l.slots)) == null ? void 0 : x.some((c) => n(c.referenceSlotId) === n(e.id)) : !1;
    });
    return !a.at(s) || a.slice(s + 1).reduce((d, l) => d !== void 0 ? d : n(l.type) === "slot-content" ? !1 : n(l.type) === "component" ? !0 : d, void 0) ? !1 : i.some((d) => n(d.id) === n(e.componentId));
  }, [r, e, t]);
}, xt = (e, r) => {
  const { onAddSlotContent: t } = Ee();
  return Oe(({ get: n }) => {
    var s;
    const i = [...r].reverse().filter((u) => n(u.type) === "component").find((u) => n(u.referenceComponentId) === n(e.componentId));
    if (!i)
      return [];
    const a = (s = n(i.slots)) == null ? void 0 : s.find((u) => n(u.referenceSlotId) === n(e.id));
    return a ? [n(a.children), a] : (setTimeout(() => t(e, i), 0), []);
  }, [r, e, t]);
}, uo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onDragLeave: i, onDragOver: a, onDrop: s, onHoverBar: u }) => {
  const f = te(null), [d = [], l] = xt(e, r), { hoveredId: h } = Ce();
  we({
    value: h,
    matchWidthValue: l == null ? void 0 : l.id,
    effect() {
      l && u(e, f.current);
    }
  }, [h, l == null ? void 0 : l.id, e]);
  const x = te({ id: Le() });
  return ke({
    element: f,
    id: x.current.id,
    drop: (c, v) => l ? s(c, v, l, r, f, x.current.id) : void 0,
    hover: (c, v) => l ? a(c, v, l, r, f, x.current.id) : void 0,
    leave: (c, v) => l ? i(c, v, l, r, f, x.current.id) : void 0
  }, [l, r, s, a, i]), /* @__PURE__ */ E.jsxs(
    "div",
    {
      ref: f,
      onMouseLeave: n,
      style: { cursor: "default", userSelect: "none", pointerEvents: "all", outline: "none" },
      onMouseOver: (c) => l ? t(c, l, f.current) : void 0,
      children: [
        l && d.length > 0 && d.map((c) => /* @__PURE__ */ E.jsx(
          Ie,
          {
            element: c,
            parents: [...r, l]
          },
          c.id.value
        )),
        d.length === 0 && /* @__PURE__ */ E.jsx(
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
}, so = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: f, onSelectBar: d }) => {
  const l = te(null), { onDragStart: h, onDragEnd: x } = Ee(), { hideInsertBar: c } = Re(), { selectedId: v } = _e(), { hoveredId: b } = Ce(), w = J(e.name), R = J(e.id);
  we({
    value: b,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [b, e]), we({
    value: v,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [v, e]);
  const { isDragging: P, preview: C } = He({
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
  he(() => {
    C(
      () => We(w),
      (p) => p.remove()
    );
  }, [C, w]);
  const m = te({ id: Le() });
  return ke({
    element: l,
    id: m.current.id,
    drop: (p, j) => u(p, j, e, r, l, m.current.id),
    hover: (p, j) => s(p, j, e, r, l, m.current.id),
    leave: (p, j) => a(p, j, e, r, l, m.current.id)
  }, [e, r, u, s, a]), /* @__PURE__ */ E.jsxs(
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
        opacity: P ? 0.5 : void 0
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
  return /* @__PURE__ */ E.jsx("div", { style: { outline: "none" }, children: n && t.map((i) => /* @__PURE__ */ E.jsx(
    Ie,
    {
      element: i,
      parents: [...r, n]
    },
    i.id.value
  )) });
}, fo = ({ element: e, parents: r, ...t }) => {
  const n = rr(e, r);
  return co(e, r) ? /* @__PURE__ */ E.jsx(
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
  ) : n ? /* @__PURE__ */ E.jsx(
    lo,
    {
      element: e,
      parents: r
    }
  ) : /* @__PURE__ */ E.jsx(
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
}, vo = ({ element: e, parents: r, onMouseOver: t, onMouseLeave: n, onSelect: i, onDragLeave: a, onDragOver: s, onDrop: u, onHoverBar: f, onSelectBar: d }) => {
  const l = te(null), { window: h, document: x } = Qe.useFrame(), [c, v] = je(e.text), b = J(e.name), w = J(e.id), { onDragStart: R, onDragEnd: P } = Ee(), { hideInsertBar: C } = Re(), { selectedId: m } = _e(), { hoveredId: p } = Ce(), [j, q] = mr(!1);
  he(() => {
    !l.current || !j || (l.current.focus(), d(e, null));
  }, [j, d]), we({
    value: p,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => f(e, l.current)
  }, [p, e]), we({
    value: m,
    matchWidthValue: e == null ? void 0 : e.id,
    effect: () => d(e, l.current)
  }, [m, e, c]);
  const { isDragging: ee, preview: F } = He({
    id: w,
    canDrag: !j,
    element: l,
    data: { element: e, parents: r },
    start: () => {
      R();
    },
    end: () => {
      C(), P();
    }
  }, [w, j, e, r, C, R, P]);
  he(() => {
    F(
      () => We(b),
      (T) => T.remove()
    );
  }, [F, b]);
  const D = te({ id: Le() });
  ke({
    element: l,
    id: D.current.id,
    drop: (T, X) => u(T, X, e, r, l, D.current.id),
    hover: (T, X) => s(T, X, e, r, l, D.current.id),
    leave: (T, X) => a(T, X, e, r, l, D.current.id)
  }, [e, r, u, s, a]);
  const re = Q((T) => {
    if (!h || !x)
      return;
    const X = h.getSelection();
    if (!X)
      return;
    const ie = x.createRange(), de = T.currentTarget;
    ie.selectNodeContents(de), X.removeAllRanges(), X.addRange(ie);
  }, [h, x]), ne = Q((T) => {
    T.stopPropagation(), (T.code === "Escape" || T.code === "Enter" || T.code === "NumpadEnter") && (q(!1), d(e, T.currentTarget));
  }, [d, e]), A = Q((T) => {
    q(!1), v(T.currentTarget.innerText), d(e, T.currentTarget);
  }, [d, e]);
  return /* @__PURE__ */ E.jsx(
    "span",
    {
      contentEditable: j,
      dangerouslySetInnerHTML: { __html: c },
      onBlur: A,
      onFocus: re,
      onKeyDown: ne,
      onDoubleClick: () => q(!0),
      ref: l,
      onMouseLeave: n,
      onClick: (T) => j ? T.stopPropagation() : i(T, e),
      onMouseOver: (T) => j ? T.stopPropagation() : t(T, e, l.current),
      style: {
        resize: "none",
        cursor: "default",
        pointerEvents: "all",
        opacity: ee ? 0.5 : void 0,
        borderRadius: j ? 4 : void 0,
        boxShadow: j ? "0 0 6px 2px orange" : void 0
      }
    }
  );
}, po = ({ element: e }) => J(e.text), ho = ({ element: e, parents: r, ...t }) => rr(e, r) ? /* @__PURE__ */ E.jsx(
  po,
  {
    element: e,
    parents: r
  }
) : /* @__PURE__ */ E.jsx(
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
  const t = J(e.type), { showInsertBar: n, hideInsertBar: i } = Re(), { select: a, updateSelectBar: s } = _e(), { hover: u, updateHoverBar: f } = Ce(), { onDrop: d, value: l } = Ee(), h = Q((C, m) => {
    C.stopPropagation(), C.preventDefault(), a(m.id.value);
  }, [a]), x = Q((C) => {
    C.stopPropagation(), C.preventDefault(), a(void 0), u(void 0);
  }, [a, u]), c = Q((C, m) => {
    C.stopPropagation(), u(m.id.value);
  }, [u]), v = Q((C) => {
    C.stopPropagation(), u(void 0);
  }, [u]), b = Q((C, m) => {
    f(C, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [f]), w = Q((C, m) => {
    s(C, r, () => ({
      top: (m == null ? void 0 : m.offsetTop) || 0,
      left: (m == null ? void 0 : m.offsetLeft) || 0,
      width: (m == null ? void 0 : m.getBoundingClientRect().width) || 0,
      height: (m == null ? void 0 : m.getBoundingClientRect().height) || 0
    }));
  }, [s, r]), R = Q((C, m, p, j, q, ee) => {
    if (!Hr(m, p, j, q, ee))
      return u(void 0);
    u(p.id.value);
    const D = gn(m, p, q);
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
  }, [n, u, i]), P = Q((C, m, p, j, q, ee) => {
    var ne, A, T, X, ie, de;
    if (!Hr(m, p, j, q, ee))
      return;
    const D = yn(m, p, q);
    if (!D)
      return;
    const re = D.isOverStart || D.isOverEnd;
    if (!(!re && p.type.value === "component")) {
      if (Object.keys(C).includes("id")) {
        const le = C;
        if (re) {
          const ce = j.slice(-1).at(0), y = ((ne = (ce ? ce.children : l).value) == null ? void 0 : ne.findIndex((_) => _.id.value === p.id.value)) ?? -1;
          d({
            element: le.id,
            from: { position: -1, element: null },
            to: {
              element: ce || "root",
              position: D.isOverStart ? y : y + 1
            }
          });
        } else {
          const ce = ((A = p.children.value) == null ? void 0 : A.length) || -1;
          d({
            element: le.id,
            from: { position: -1, element: null },
            to: {
              element: p,
              position: D.isOverStart ? ce : ce + 1
            }
          });
        }
      } else {
        const le = C, ce = (T = le.parents) == null ? void 0 : T.slice(-1).at(0), y = ce || "root";
        if (y !== "root" && y.type.value === "component")
          return;
        const _ = ((X = (y === "root" ? l : y.children).value) == null ? void 0 : X.findIndex((I) => I.id.value === le.element.id.value)) ?? -1;
        if (re) {
          const I = j.slice(-1).at(0), k = ((ie = (I ? I.children : l).value) == null ? void 0 : ie.findIndex((B) => B.id.value === p.id.value)) ?? -1;
          d({
            element: le.element,
            from: {
              position: _,
              element: y
            },
            to: {
              element: I || "root",
              position: D.isOverStart ? k : k + 1
            }
          });
        } else {
          const I = ((de = p.children.value) == null ? void 0 : de.length) || -1;
          d({
            element: le.element,
            from: {
              position: _,
              element: y
            },
            to: {
              element: p,
              position: D.isOverStart ? I : I + 1
            }
          });
        }
        a(le.element.id.value);
      }
      i();
    }
  }, [a, d, i]);
  return t === "component" ? /* @__PURE__ */ E.jsx(
    no,
    {
      parents: r,
      element: e,
      onDrop: P,
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
  ) : t === "slot" ? /* @__PURE__ */ E.jsx(
    fo,
    {
      parents: r,
      element: e,
      onDrop: P,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: w
    }
  ) : t === "text" ? /* @__PURE__ */ E.jsx(
    ho,
    {
      parents: r,
      element: e,
      onDrop: P,
      onDragOver: R,
      onDragLeave: () => {
      },
      onSelect: h,
      onMouseOver: c,
      onMouseLeave: v,
      onHoverBar: b,
      onSelectBar: w
    }
  ) : /* @__PURE__ */ E.jsx(
    ao,
    {
      parents: r,
      element: e,
      onDrop: P,
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
  const e = te({ id: Le() }), { value: r, styles: t, onDrop: n, onKeyDown: i } = Ee(), { updateSelectBarScroll: a, select: s } = _e(), { showInsertBar: u, hideInsertBar: f } = Re(), { updateHoverBarScroll: d, hover: l } = Ce(), [h, x] = mr(null), c = J(r), v = Q((C, m) => {
    var p;
    if (f(), !!C)
      if (Object.keys(C).includes("id"))
        n({
          element: C.id,
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
        const j = C, q = vn(j.parents || []), ee = q || "root", F = ((p = q == null ? void 0 : q.children.value) == null ? void 0 : p.findIndex((D) => D.id.value === j.element.id.value)) ?? -1;
        n({
          element: j.element,
          from: {
            element: ee,
            position: F
          },
          to: {
            element: "root",
            position: r.value.length
          }
        }), s(j.element.id.value);
      }
  }, [r, s, f]), b = Q((C, m) => {
    const p = h == null ? void 0 : h.lastElementChild;
    if (!p)
      return;
    const j = p.getBoundingClientRect();
    u({
      isVisible: !0,
      isHorizontal: !0,
      left: j.left,
      width: j.width,
      height: j.height,
      top: p ? j.top + j.height : j.top
    });
  }, [h == null ? void 0 : h.lastElementChild, u]), w = Q((C, m) => {
    a(C, m), d(C, m);
  }, [a, d]), [{ isDraggingOver: R, isDraggingOverCurrent: P }] = ke({
    drop: v,
    hover: b,
    id: e.current.id,
    element: { current: h },
    leave: () => {
      f(), l(void 0);
    }
  }, [v, b, f]);
  return /* @__PURE__ */ E.jsx(
    Xn,
    {
      styles: t,
      resetBody: !0,
      draggingHover: R || P,
      children: /* @__PURE__ */ E.jsxs(Jn, { onRef: x, onScroll: w, onKeyDown: i, children: [
        /* @__PURE__ */ E.jsx(Qt, {}),
        /* @__PURE__ */ E.jsx(Sn, {}),
        /* @__PURE__ */ E.jsx(mn, {}),
        c.map((C) => /* @__PURE__ */ E.jsx(
          Ie,
          {
            parents: [],
            element: C
          },
          C.id.value
        )),
        c.length === 0 && /* @__PURE__ */ E.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", margin: 24, padding: 24, backgroundColor: "lightgray", borderRadius: 8, outline: "none" }, children: /* @__PURE__ */ E.jsx("span", { style: { fontFamily: "sans-serif", fontSize: 14, opacity: 0.5, userSelect: "none", outline: "none" }, children: "Drag and drop here to start" }) })
      ] })
    }
  );
};
function So({ onSelect: e, onHover: r, selectedId: t, hoveredId: n, ...i }) {
  return /* @__PURE__ */ E.jsx(Ut, { children: /* @__PURE__ */ E.jsx(Xt, { ...i, children: /* @__PURE__ */ E.jsx(Zt, { children: /* @__PURE__ */ E.jsx(en, { id: t, onSelect: e, children: /* @__PURE__ */ E.jsx(xn, { id: n, onHover: r, children: /* @__PURE__ */ E.jsx(yo, {}) }) }) }) }) });
}
export {
  So as UIEditor
};
//# sourceMappingURL=index.es.js.map

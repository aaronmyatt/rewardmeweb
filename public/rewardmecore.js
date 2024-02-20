var pipe = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __require = /* @__PURE__ */ ((x8) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x8, {
    get: (a6, b6) => (typeof require !== "undefined" ? require : a6)[b6]
  }) : x8)(function(x8) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x8 + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // ../../Library/Caches/deno/deno_esbuild/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js
  var require_jsonpointer = __commonJS({
    "../../Library/Caches/deno/deno_esbuild/jsonpointer@5.0.1/node_modules/jsonpointer/jsonpointer.js"(exports) {
      var hasExcape = /~/;
      var escapeMatcher = /~[01]/g;
      function escapeReplacer(m8) {
        switch (m8) {
          case "~1":
            return "/";
          case "~0":
            return "~";
        }
        throw new Error("Invalid tilde escape: " + m8);
      }
      function untilde(str) {
        if (!hasExcape.test(str))
          return str;
        return str.replace(escapeMatcher, escapeReplacer);
      }
      function setter(obj, pointer, value) {
        var part;
        var hasNextPart;
        for (var p7 = 1, len = pointer.length; p7 < len; ) {
          if (pointer[p7] === "constructor" || pointer[p7] === "prototype" || pointer[p7] === "__proto__")
            return obj;
          part = untilde(pointer[p7++]);
          hasNextPart = len > p7;
          if (typeof obj[part] === "undefined") {
            if (Array.isArray(obj) && part === "-") {
              part = obj.length;
            }
            if (hasNextPart) {
              if (pointer[p7] !== "" && pointer[p7] < Infinity || pointer[p7] === "-")
                obj[part] = [];
              else
                obj[part] = {};
            }
          }
          if (!hasNextPart)
            break;
          obj = obj[part];
        }
        var oldValue = obj[part];
        if (value === void 0)
          delete obj[part];
        else
          obj[part] = value;
        return oldValue;
      }
      function compilePointer(pointer) {
        if (typeof pointer === "string") {
          pointer = pointer.split("/");
          if (pointer[0] === "")
            return pointer;
          throw new Error("Invalid JSON pointer.");
        } else if (Array.isArray(pointer)) {
          for (const part of pointer) {
            if (typeof part !== "string" && typeof part !== "number") {
              throw new Error("Invalid JSON pointer. Must be of type string or number.");
            }
          }
          return pointer;
        }
        throw new Error("Invalid JSON pointer.");
      }
      function get(obj, pointer) {
        if (typeof obj !== "object")
          throw new Error("Invalid input object.");
        pointer = compilePointer(pointer);
        var len = pointer.length;
        if (len === 1)
          return obj;
        for (var p7 = 1; p7 < len; ) {
          obj = obj[untilde(pointer[p7++])];
          if (len === p7)
            return obj;
          if (typeof obj !== "object" || obj === null)
            return void 0;
        }
      }
      function set(obj, pointer, value) {
        if (typeof obj !== "object")
          throw new Error("Invalid input object.");
        pointer = compilePointer(pointer);
        if (pointer.length === 0)
          throw new Error("Invalid JSON pointer for set.");
        return setter(obj, pointer, value);
      }
      function compile(pointer) {
        var compiled = compilePointer(pointer);
        return {
          get: function(object) {
            return get(object, compiled);
          },
          set: function(object, value) {
            return set(object, compiled, value);
          }
        };
      }
      exports.get = get;
      exports.set = set;
      exports.compile = compile;
    }
  });

  // https://esm.sh/v135/@supabase/node-fetch@2.6.15/denonext/node-fetch.mjs
  var node_fetch_exports = {};
  __export(node_fetch_exports, {
    FetchError: () => h,
    Headers: () => w,
    Request: () => R,
    Response: () => g,
    __esModule: () => _,
    default: () => m,
    fetch: () => u
  });
  var __global$, f, d, t, l, e, u, a, c, p, i, _, w, R, g, h, n, b, m;
  var init_node_fetch = __esm({
    "https://esm.sh/v135/@supabase/node-fetch@2.6.15/denonext/node-fetch.mjs"() {
      __global$ = globalThis || (typeof window !== "undefined" ? window : self);
      f = Object.defineProperty;
      d = (s2, o3) => {
        for (var r2 in o3)
          f(s2, r2, { get: o3[r2], enumerable: true });
      };
      t = {};
      d(t, { Headers: () => c, Request: () => p, Response: () => i, default: () => a, fetch: () => u });
      l = function() {
        if (typeof self < "u")
          return self;
        if (typeof window < "u")
          return window;
        if (typeof __global$ < "u")
          return __global$;
        throw new Error("unable to locate global object");
      };
      e = l();
      u = e.fetch;
      a = e.fetch.bind(e);
      c = e.Headers;
      p = e.Request;
      i = e.Response;
      ({ __esModule: _, Headers: w, Request: R, Response: g, FetchError: h } = t);
      ({ default: n, ...b } = t);
      m = n !== void 0 ? n : b;
    }
  });

  // https://esm.sh/v135/@supabase/node-fetch@2.6.14/denonext/node-fetch.mjs
  var node_fetch_exports2 = {};
  __export(node_fetch_exports2, {
    FetchError: () => F2,
    Headers: () => j2,
    Request: () => v2,
    Response: () => E2,
    __esModule: () => H2,
    default: () => M
  });
  var __global$2, w2, u2, R3, g3, h2, m3, x, q2, l2, f2, c3, a2, r, _2, H2, j2, v2, E2, F2, b3, G2, M;
  var init_node_fetch2 = __esm({
    "https://esm.sh/v135/@supabase/node-fetch@2.6.14/denonext/node-fetch.mjs"() {
      __global$2 = globalThis || (typeof window !== "undefined" ? window : self);
      w2 = Object.create;
      u2 = Object.defineProperty;
      R3 = Object.getOwnPropertyDescriptor;
      g3 = Object.getOwnPropertyNames;
      h2 = Object.getPrototypeOf;
      m3 = Object.prototype.hasOwnProperty;
      x = (t3, e2) => () => (e2 || t3((e2 = { exports: {} }).exports, e2), e2.exports);
      q2 = (t3, e2) => {
        for (var o3 in e2)
          u2(t3, o3, { get: e2[o3], enumerable: true });
      };
      l2 = (t3, e2, o3, i3) => {
        if (e2 && typeof e2 == "object" || typeof e2 == "function")
          for (let d5 of g3(e2))
            !m3.call(t3, d5) && d5 !== o3 && u2(t3, d5, { get: () => e2[d5], enumerable: !(i3 = R3(e2, d5)) || i3.enumerable });
        return t3;
      };
      f2 = (t3, e2, o3) => (l2(t3, e2, "default"), o3 && l2(o3, e2, "default"));
      c3 = (t3, e2, o3) => (o3 = t3 != null ? w2(h2(t3)) : {}, l2(e2 || !t3 || !t3.__esModule ? u2(o3, "default", { value: t3, enumerable: true }) : o3, t3));
      a2 = x((s2, p7) => {
        "use strict";
        var y6 = function() {
          if (typeof self < "u")
            return self;
          if (typeof window < "u")
            return window;
          if (typeof __global$2 < "u")
            return __global$2;
          throw new Error("unable to locate global object");
        }, n5 = y6();
        p7.exports = s2 = n5.fetch;
        n5.fetch && (s2.default = n5.fetch.bind(n5));
        s2.Headers = n5.Headers;
        s2.Request = n5.Request;
        s2.Response = n5.Response;
      });
      r = {};
      q2(r, { FetchError: () => F2, Headers: () => j2, Request: () => v2, Response: () => E2, __esModule: () => H2, default: () => M });
      _2 = c3(a2());
      f2(r, c3(a2()));
      ({ __esModule: H2, Headers: j2, Request: v2, Response: E2, FetchError: F2 } = _2);
      ({ default: b3, ...G2 } = _2);
      M = b3 !== void 0 ? b3 : G2;
    }
  });

  // https://esm.sh/v135/node-gyp-build@4.6.1/denonext/node-gyp-build.mjs
  var node_gyp_build_exports = {};
  __export(node_gyp_build_exports, {
    compareTags: () => le2,
    compareTuples: () => ve2,
    default: () => de2,
    matchTags: () => ae2,
    matchTuple: () => fe2,
    parseTags: () => ce2,
    parseTuple: () => pe2,
    resolve: () => ue2
  });
  var import_node_process, __0$, __1$, __2$, require2, K2, v3, Q2, W2, X2, Z2, l3, E3, ee2, f3, a3, R4, V2, T2, c4, $2, ue2, ce2, ae2, le2, pe2, fe2, ve2, Y2, me2, de2;
  var init_node_gyp_build = __esm({
    "https://esm.sh/v135/node-gyp-build@4.6.1/denonext/node-gyp-build.mjs"() {
      import_node_process = __toESM(__require("node:process"), 1);
      __0$ = __toESM(__require("node:fs"), 1);
      __1$ = __toESM(__require("node:path"), 1);
      __2$ = __toESM(__require("node:os"), 1);
      require2 = (n5) => {
        const e2 = (m8) => typeof m8.default < "u" ? m8.default : m8, c8 = (m8) => Object.assign({}, m8);
        switch (n5) {
          case "fs":
            return e2(__0$);
          case "path":
            return e2(__1$);
          case "os":
            return e2(__2$);
          default:
            throw new Error('module "' + n5 + '" not found');
        }
      };
      K2 = Object.create;
      v3 = Object.defineProperty;
      Q2 = Object.getOwnPropertyDescriptor;
      W2 = Object.getOwnPropertyNames;
      X2 = Object.getPrototypeOf;
      Z2 = Object.prototype.hasOwnProperty;
      l3 = ((e2) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, n5) => (typeof require2 < "u" ? require2 : r2)[n5] }) : e2)(function(e2) {
        if (typeof require2 < "u")
          return require2.apply(this, arguments);
        throw Error('Dynamic require of "' + e2 + '" is not supported');
      });
      E3 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
      ee2 = (e2, r2) => {
        for (var n5 in r2)
          v3(e2, n5, { get: r2[n5], enumerable: true });
      };
      f3 = (e2, r2, n5, i3) => {
        if (r2 && typeof r2 == "object" || typeof r2 == "function")
          for (let o3 of W2(r2))
            !Z2.call(e2, o3) && o3 !== n5 && v3(e2, o3, { get: () => r2[o3], enumerable: !(i3 = Q2(r2, o3)) || i3.enumerable });
        return e2;
      };
      a3 = (e2, r2, n5) => (f3(e2, r2, "default"), n5 && f3(n5, r2, "default"));
      R4 = (e2, r2, n5) => (n5 = e2 != null ? K2(X2(e2)) : {}, f3(r2 || !e2 || !e2.__esModule ? v3(n5, "default", { value: e2, enumerable: true }) : n5, e2));
      V2 = E3((be3, M3) => {
        var L5 = l3("fs"), u4 = l3("path"), S5 = l3("os"), D4 = typeof __webpack_require__ == "function" ? __non_webpack_require__ : l3, re2 = import_node_process.default.config && import_node_process.default.config.variables || {}, ne3 = !!import_node_process.default.env.PREBUILDS_ONLY, k7 = import_node_process.default.versions.modules, m8 = oe3() ? "electron" : se() ? "node-webkit" : "node", d5 = import_node_process.default.env.npm_config_arch || S5.arch(), _8 = import_node_process.default.env.npm_config_platform || S5.platform(), I4 = import_node_process.default.env.LIBC || (te3(_8) ? "musl" : "glibc"), b6 = import_node_process.default.env.ARM_VERSION || (d5 === "arm64" ? "8" : re2.arm_version) || "", O4 = (import_node_process.default.versions.uv || "").split(".")[0];
        M3.exports = t3;
        function t3(e2) {
          return D4(t3.resolve(e2));
        }
        t3.resolve = t3.path = function(e2) {
          e2 = u4.resolve(e2 || ".");
          try {
            var r2 = D4(u4.join(e2, "package.json")).name.toUpperCase().replace(/-/g, "_");
            import_node_process.default.env[r2 + "_PREBUILD"] && (e2 = import_node_process.default.env[r2 + "_PREBUILD"]);
          } catch {
          }
          if (!ne3) {
            var n5 = B5(u4.join(e2, "build/Release"), N3);
            if (n5)
              return n5;
            var i3 = B5(u4.join(e2, "build/Debug"), N3);
            if (i3)
              return i3;
          }
          var o3 = w9(e2);
          if (o3)
            return o3;
          var s2 = w9(u4.dirname(import_node_process.default.execPath));
          if (s2)
            return s2;
          var z3 = ["platform=" + _8, "arch=" + d5, "runtime=" + m8, "abi=" + k7, "uv=" + O4, b6 ? "armv=" + b6 : "", "libc=" + I4, "node=" + import_node_process.default.versions.node, import_node_process.default.versions.electron ? "electron=" + import_node_process.default.versions.electron : "", typeof __webpack_require__ == "function" ? "webpack=true" : ""].filter(Boolean).join(" ");
          throw new Error("No native build was found for " + z3 + `
    loaded from: ` + e2 + `
`);
          function w9(p7) {
            var G4 = h6(u4.join(p7, "prebuilds")).map(U4), j8 = G4.filter(A4(_8, d5)).sort(P4)[0];
            if (j8) {
              var x8 = u4.join(p7, "prebuilds", j8.name), H4 = h6(x8).map(C5), J3 = H4.filter(g8(m8, k7)), q7 = J3.sort(F9(m8))[0];
              if (q7)
                return u4.join(x8, q7.file);
            }
          }
        };
        function h6(e2) {
          try {
            return L5.readdirSync(e2);
          } catch {
            return [];
          }
        }
        function B5(e2, r2) {
          var n5 = h6(e2).filter(r2);
          return n5[0] && u4.join(e2, n5[0]);
        }
        function N3(e2) {
          return /\.node$/.test(e2);
        }
        function U4(e2) {
          var r2 = e2.split("-");
          if (r2.length === 2) {
            var n5 = r2[0], i3 = r2[1].split("+");
            if (n5 && i3.length && i3.every(Boolean))
              return { name: e2, platform: n5, architectures: i3 };
          }
        }
        function A4(e2, r2) {
          return function(n5) {
            return n5 == null || n5.platform !== e2 ? false : n5.architectures.includes(r2);
          };
        }
        function P4(e2, r2) {
          return e2.architectures.length - r2.architectures.length;
        }
        function C5(e2) {
          var r2 = e2.split("."), n5 = r2.pop(), i3 = { file: e2, specificity: 0 };
          if (n5 === "node") {
            for (var o3 = 0; o3 < r2.length; o3++) {
              var s2 = r2[o3];
              if (s2 === "node" || s2 === "electron" || s2 === "node-webkit")
                i3.runtime = s2;
              else if (s2 === "napi")
                i3.napi = true;
              else if (s2.slice(0, 3) === "abi")
                i3.abi = s2.slice(3);
              else if (s2.slice(0, 2) === "uv")
                i3.uv = s2.slice(2);
              else if (s2.slice(0, 4) === "armv")
                i3.armv = s2.slice(4);
              else if (s2 === "glibc" || s2 === "musl")
                i3.libc = s2;
              else
                continue;
              i3.specificity++;
            }
            return i3;
          }
        }
        function g8(e2, r2) {
          return function(n5) {
            return !(n5 == null || n5.runtime !== e2 && !ie(n5) || n5.abi !== r2 && !n5.napi || n5.uv && n5.uv !== O4 || n5.armv && n5.armv !== b6 || n5.libc && n5.libc !== I4);
          };
        }
        function ie(e2) {
          return e2.runtime === "node" && e2.napi;
        }
        function F9(e2) {
          return function(r2, n5) {
            return r2.runtime !== n5.runtime ? r2.runtime === e2 ? -1 : 1 : r2.abi !== n5.abi ? r2.abi ? -1 : 1 : r2.specificity !== n5.specificity ? r2.specificity > n5.specificity ? -1 : 1 : 0;
          };
        }
        function se() {
          return !!(import_node_process.default.versions && import_node_process.default.versions.nw);
        }
        function oe3() {
          return import_node_process.default.versions && import_node_process.default.versions.electron || import_node_process.default.env.ELECTRON_RUN_AS_NODE ? true : typeof window < "u" && window.process && window.process.type === "renderer";
        }
        function te3(e2) {
          return e2 === "linux" && L5.existsSync("/etc/alpine-release");
        }
        t3.parseTags = C5;
        t3.matchTags = g8;
        t3.compareTags = F9;
        t3.parseTuple = U4;
        t3.matchTuple = A4;
        t3.compareTuples = P4;
      });
      T2 = E3((ye2, y6) => {
        typeof import_node_process.default.addon == "function" ? y6.exports = import_node_process.default.addon.bind(import_node_process.default) : y6.exports = V2();
      });
      c4 = {};
      ee2(c4, { compareTags: () => le2, compareTuples: () => ve2, default: () => de2, matchTags: () => ae2, matchTuple: () => fe2, parseTags: () => ce2, parseTuple: () => pe2, resolve: () => ue2 });
      $2 = R4(T2());
      a3(c4, R4(T2()));
      ({ resolve: ue2, parseTags: ce2, matchTags: ae2, compareTags: le2, parseTuple: pe2, matchTuple: fe2, compareTuples: ve2 } = $2);
      ({ default: Y2, ...me2 } = $2);
      de2 = Y2 !== void 0 ? Y2 : me2;
    }
  });

  // https://esm.sh/v135/utf-8-validate@6.0.3/denonext/utf-8-validate.mjs
  var utf_8_validate_exports = {};
  __export(utf_8_validate_exports, {
    default: () => k2
  });
  var require3, h4, c5, q3, g4, w4, y3, F4, d3, T3, l4, s, _3, p3, a4, t2, V3, m5, j3, k2;
  var init_utf_8_validate = __esm({
    "https://esm.sh/v135/utf-8-validate@6.0.3/denonext/utf-8-validate.mjs"() {
      init_node_gyp_build();
      require3 = (n5) => {
        const e2 = (m8) => typeof m8.default < "u" ? m8.default : m8, c8 = (m8) => Object.assign({}, m8);
        switch (n5) {
          case "node-gyp-build":
            return e2(node_gyp_build_exports);
          default:
            throw new Error('module "' + n5 + '" not found');
        }
      };
      h4 = Object.create;
      c5 = Object.defineProperty;
      q3 = Object.getOwnPropertyDescriptor;
      g4 = Object.getOwnPropertyNames;
      w4 = Object.getPrototypeOf;
      y3 = Object.prototype.hasOwnProperty;
      F4 = ((e2) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e2, { get: (r2, x8) => (typeof require3 < "u" ? require3 : r2)[x8] }) : e2)(function(e2) {
        if (typeof require3 < "u")
          return require3.apply(this, arguments);
        throw Error('Dynamic require of "' + e2 + '" is not supported');
      });
      d3 = (e2, r2) => () => (r2 || e2((r2 = { exports: {} }).exports, r2), r2.exports);
      T3 = (e2, r2) => {
        for (var x8 in r2)
          c5(e2, x8, { get: r2[x8], enumerable: true });
      };
      l4 = (e2, r2, x8, o3) => {
        if (r2 && typeof r2 == "object" || typeof r2 == "function")
          for (let i3 of g4(r2))
            !y3.call(e2, i3) && i3 !== x8 && c5(e2, i3, { get: () => r2[i3], enumerable: !(o3 = q3(r2, i3)) || o3.enumerable });
        return e2;
      };
      s = (e2, r2, x8) => (l4(e2, r2, "default"), x8 && l4(x8, r2, "default"));
      _3 = (e2, r2, x8) => (x8 = e2 != null ? h4(w4(e2)) : {}, l4(r2 || !e2 || !e2.__esModule ? c5(x8, "default", { value: e2, enumerable: true }) : x8, e2));
      p3 = d3((z3, f8) => {
        "use strict";
        function U4(e2) {
          let r2 = e2.length, x8 = 0;
          for (; x8 < r2; )
            if (!(e2[x8] & 128))
              x8++;
            else if ((e2[x8] & 224) === 192) {
              if (x8 + 1 === r2 || (e2[x8 + 1] & 192) !== 128 || (e2[x8] & 254) === 192)
                return false;
              x8 += 2;
            } else if ((e2[x8] & 240) === 224) {
              if (x8 + 2 >= r2 || (e2[x8 + 1] & 192) !== 128 || (e2[x8 + 2] & 192) !== 128 || e2[x8] === 224 && (e2[x8 + 1] & 224) === 128 || e2[x8] === 237 && (e2[x8 + 1] & 224) === 160)
                return false;
              x8 += 3;
            } else if ((e2[x8] & 248) === 240) {
              if (x8 + 3 >= r2 || (e2[x8 + 1] & 192) !== 128 || (e2[x8 + 2] & 192) !== 128 || (e2[x8 + 3] & 192) !== 128 || e2[x8] === 240 && (e2[x8 + 1] & 240) === 128 || e2[x8] === 244 && e2[x8 + 1] > 143 || e2[x8] > 244)
                return false;
              x8 += 4;
            } else
              return false;
          return true;
        }
        f8.exports = U4;
      });
      a4 = d3((A4, n5) => {
        "use strict";
        try {
          n5.exports = F4("node-gyp-build")("/_virtual/esm.sh/v135/utf-8-validate@6.0.3/denonext");
        } catch {
          n5.exports = p3();
        }
      });
      t2 = {};
      T3(t2, { default: () => k2 });
      V3 = _3(a4());
      s(t2, _3(a4()));
      ({ default: m5, ...j3 } = V3);
      k2 = m5 !== void 0 ? m5 : j3;
    }
  });

  // https://esm.sh/v135/bufferutil@4.0.8/denonext/bufferutil.mjs
  var bufferutil_exports = {};
  __export(bufferutil_exports, {
    default: () => C2
  });
  var require4, g5, _4, k3, q4, v4, y4, i2, f4, j4, c6, n2, l5, x3, m6, a5, A2, h5, B2, C2;
  var init_bufferutil = __esm({
    "https://esm.sh/v135/bufferutil@4.0.8/denonext/bufferutil.mjs"() {
      init_node_gyp_build();
      require4 = (n5) => {
        const e2 = (m8) => typeof m8.default < "u" ? m8.default : m8, c8 = (m8) => Object.assign({}, m8);
        switch (n5) {
          case "node-gyp-build":
            return e2(node_gyp_build_exports);
          default:
            throw new Error('module "' + n5 + '" not found');
        }
      };
      g5 = Object.create;
      _4 = Object.defineProperty;
      k3 = Object.getOwnPropertyDescriptor;
      q4 = Object.getOwnPropertyNames;
      v4 = Object.getPrototypeOf;
      y4 = Object.prototype.hasOwnProperty;
      i2 = ((t3) => typeof require4 < "u" ? require4 : typeof Proxy < "u" ? new Proxy(t3, { get: (e2, r2) => (typeof require4 < "u" ? require4 : e2)[r2] }) : t3)(function(t3) {
        if (typeof require4 < "u")
          return require4.apply(this, arguments);
        throw Error('Dynamic require of "' + t3 + '" is not supported');
      });
      f4 = (t3, e2) => () => (e2 || t3((e2 = { exports: {} }).exports, e2), e2.exports);
      j4 = (t3, e2) => {
        for (var r2 in e2)
          _4(t3, r2, { get: e2[r2], enumerable: true });
      };
      c6 = (t3, e2, r2, o3) => {
        if (e2 && typeof e2 == "object" || typeof e2 == "function")
          for (let s2 of q4(e2))
            !y4.call(t3, s2) && s2 !== r2 && _4(t3, s2, { get: () => e2[s2], enumerable: !(o3 = k3(e2, s2)) || o3.enumerable });
        return t3;
      };
      n2 = (t3, e2, r2) => (c6(t3, e2, "default"), r2 && c6(r2, e2, "default"));
      l5 = (t3, e2, r2) => (r2 = t3 != null ? g5(v4(t3)) : {}, c6(e2 || !t3 || !t3.__esModule ? _4(r2, "default", { value: t3, enumerable: true }) : r2, t3));
      x3 = f4((E6, p7) => {
        "use strict";
        var w9 = (t3, e2, r2, o3, s2) => {
          for (var u4 = 0; u4 < s2; u4++)
            r2[o3 + u4] = t3[u4] ^ e2[u4 & 3];
        }, z3 = (t3, e2) => {
          let r2 = t3.length;
          for (var o3 = 0; o3 < r2; o3++)
            t3[o3] ^= e2[o3 & 3];
        };
        p7.exports = { mask: w9, unmask: z3 };
      });
      m6 = f4((F9, d5) => {
        "use strict";
        try {
          d5.exports = i2("node-gyp-build")("/_virtual/esm.sh/v135/bufferutil@4.0.8/denonext");
        } catch {
          d5.exports = x3();
        }
      });
      a5 = {};
      j4(a5, { default: () => C2 });
      A2 = l5(m6());
      n2(a5, l5(m6()));
      ({ default: h5, ...B2 } = A2);
      C2 = h5 !== void 0 ? h5 : B2;
    }
  });

  // https://esm.sh/v135/ws@8.16.0/denonext/ws.mjs
  var ws_exports = {};
  __export(ws_exports, {
    Receiver: () => export_Receiver,
    Sender: () => export_Sender,
    WebSocket: () => export_WebSocket,
    WebSocketServer: () => export_WebSocketServer,
    createWebSocketStream: () => export_createWebSocketStream,
    default: () => Ts
  });
  var import_node_process2, import_node_buffer, __0$2, __1$2, __2$2, __3$, __4$, __5$, __7$, __8$, __9$, __a$, __c$, __d$, __e$, __f$, __10$, __11$, __12$, __13$, require5, Ft, Me, qt, Gt, $t, jt, p4, S2, Vt, F5, Fe, C3, q5, He, j5, V4, be2, ke, mt, Te2, Re2, Lt, Dt, ns, os, as, At, fs, Ts, export_Receiver, export_Sender, export_WebSocket, export_WebSocketServer, export_createWebSocketStream;
  var init_ws = __esm({
    "https://esm.sh/v135/ws@8.16.0/denonext/ws.mjs"() {
      import_node_process2 = __toESM(__require("node:process"), 1);
      import_node_buffer = __require("node:buffer");
      __0$2 = __toESM(__require("node:events"), 1);
      __1$2 = __toESM(__require("node:http"), 1);
      __2$2 = __toESM(__require("node:stream"), 1);
      __3$ = __toESM(__require("node:crypto"), 1);
      __4$ = __toESM(__require("node:stream"), 1);
      __5$ = __toESM(__require("node:buffer"), 1);
      init_utf_8_validate();
      __7$ = __toESM(__require("node:zlib"), 1);
      __8$ = __toESM(__require("node:stream"), 1);
      __9$ = __toESM(__require("node:crypto"), 1);
      __a$ = __toESM(__require("node:stream"), 1);
      init_bufferutil();
      __c$ = __toESM(__require("node:events"), 1);
      __d$ = __toESM(__require("node:https"), 1);
      __e$ = __toESM(__require("node:http"), 1);
      __f$ = __toESM(__require("node:net"), 1);
      __10$ = __toESM(__require("node:tls"), 1);
      __11$ = __toESM(__require("node:crypto"), 1);
      __12$ = __toESM(__require("node:stream"), 1);
      __13$ = __toESM(__require("node:url"), 1);
      require5 = (n5) => {
        const e2 = (m8) => typeof m8.default < "u" ? m8.default : m8, c8 = (m8) => Object.assign({}, m8);
        switch (n5) {
          case "events":
            return e2(__0$2);
          case "http":
            return e2(__1$2);
          case "stream":
            return e2(__2$2);
          case "crypto":
            return e2(__3$);
          case "buffer":
            return e2(__5$);
          case "utf-8-validate":
            return e2(utf_8_validate_exports);
          case "zlib":
            return e2(__7$);
          case "bufferutil":
            return e2(bufferutil_exports);
          case "https":
            return e2(__d$);
          case "net":
            return e2(__f$);
          case "tls":
            return e2(__10$);
          case "url":
            return e2(__13$);
          default:
            throw new Error('module "' + n5 + '" not found');
        }
      };
      Ft = Object.create;
      Me = Object.defineProperty;
      qt = Object.getOwnPropertyDescriptor;
      Gt = Object.getOwnPropertyNames;
      $t = Object.getPrototypeOf;
      jt = Object.prototype.hasOwnProperty;
      p4 = ((t3) => typeof require5 < "u" ? require5 : typeof Proxy < "u" ? new Proxy(t3, { get: (e2, r2) => (typeof require5 < "u" ? require5 : e2)[r2] }) : t3)(function(t3) {
        if (typeof require5 < "u")
          return require5.apply(this, arguments);
        throw Error('Dynamic require of "' + t3 + '" is not supported');
      });
      S2 = (t3, e2) => () => (e2 || t3((e2 = { exports: {} }).exports, e2), e2.exports);
      Vt = (t3, e2, r2, i3) => {
        if (e2 && typeof e2 == "object" || typeof e2 == "function")
          for (let s2 of Gt(e2))
            !jt.call(t3, s2) && s2 !== r2 && Me(t3, s2, { get: () => e2[s2], enumerable: !(i3 = qt(e2, s2)) || i3.enumerable });
        return t3;
      };
      F5 = (t3, e2, r2) => (r2 = t3 != null ? Ft($t(t3)) : {}, Vt(e2 || !t3 || !t3.__esModule ? Me(r2, "default", { value: t3, enumerable: true }) : r2, t3));
      Fe = S2((hs, We) => {
        "use strict";
        var { Duplex: Ht } = p4("stream");
        function De(t3) {
          t3.emit("close");
        }
        function zt() {
          !this.destroyed && this._writableState.finished && this.destroy();
        }
        function Ae2(t3) {
          this.removeListener("error", Ae2), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", t3);
        }
        function Yt(t3, e2) {
          let r2 = true, i3 = new Ht({ ...e2, autoDestroy: false, emitClose: false, objectMode: false, writableObjectMode: false });
          return t3.on("message", function(n5, o3) {
            let f8 = !o3 && i3._readableState.objectMode ? n5.toString() : n5;
            i3.push(f8) || t3.pause();
          }), t3.once("error", function(n5) {
            i3.destroyed || (r2 = false, i3.destroy(n5));
          }), t3.once("close", function() {
            i3.destroyed || i3.push(null);
          }), i3._destroy = function(s2, n5) {
            if (t3.readyState === t3.CLOSED) {
              n5(s2), import_node_process2.default.nextTick(De, i3);
              return;
            }
            let o3 = false;
            t3.once("error", function(l8) {
              o3 = true, n5(l8);
            }), t3.once("close", function() {
              o3 || n5(s2), import_node_process2.default.nextTick(De, i3);
            }), r2 && t3.terminate();
          }, i3._final = function(s2) {
            if (t3.readyState === t3.CONNECTING) {
              t3.once("open", function() {
                i3._final(s2);
              });
              return;
            }
            t3._socket !== null && (t3._socket._writableState.finished ? (s2(), i3._readableState.endEmitted && i3.destroy()) : (t3._socket.once("finish", function() {
              s2();
            }), t3.close()));
          }, i3._read = function() {
            t3.isPaused && t3.resume();
          }, i3._write = function(s2, n5, o3) {
            if (t3.readyState === t3.CONNECTING) {
              t3.once("open", function() {
                i3._write(s2, n5, o3);
              });
              return;
            }
            t3.send(s2, o3);
          }, i3.on("end", zt), i3.on("error", Ae2), i3;
        }
        We.exports = Yt;
      });
      C3 = S2((cs, qe) => {
        "use strict";
        qe.exports = { BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"], EMPTY_BUFFER: import_node_buffer.Buffer.alloc(0), GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11", kForOnEventAttribute: Symbol("kIsForOnEventAttribute"), kListener: Symbol("kListener"), kStatusCode: Symbol("status-code"), kWebSocket: Symbol("websocket"), NOOP: () => {
        } };
      });
      q5 = S2((us, Q4) => {
        "use strict";
        var { EMPTY_BUFFER: Kt } = C3(), de3 = import_node_buffer.Buffer[Symbol.species];
        function Xt(t3, e2) {
          if (t3.length === 0)
            return Kt;
          if (t3.length === 1)
            return t3[0];
          let r2 = import_node_buffer.Buffer.allocUnsafe(e2), i3 = 0;
          for (let s2 = 0; s2 < t3.length; s2++) {
            let n5 = t3[s2];
            r2.set(n5, i3), i3 += n5.length;
          }
          return i3 < e2 ? new de3(r2.buffer, r2.byteOffset, i3) : r2;
        }
        function Ge(t3, e2, r2, i3, s2) {
          for (let n5 = 0; n5 < s2; n5++)
            r2[i3 + n5] = t3[n5] ^ e2[n5 & 3];
        }
        function $e2(t3, e2) {
          for (let r2 = 0; r2 < t3.length; r2++)
            t3[r2] ^= e2[r2 & 3];
        }
        function Zt(t3) {
          return t3.length === t3.buffer.byteLength ? t3.buffer : t3.buffer.slice(t3.byteOffset, t3.byteOffset + t3.length);
        }
        function _e2(t3) {
          if (_e2.readOnly = true, import_node_buffer.Buffer.isBuffer(t3))
            return t3;
          let e2;
          return t3 instanceof ArrayBuffer ? e2 = new de3(t3) : ArrayBuffer.isView(t3) ? e2 = new de3(t3.buffer, t3.byteOffset, t3.byteLength) : (e2 = import_node_buffer.Buffer.from(t3), _e2.readOnly = false), e2;
        }
        Q4.exports = { concat: Xt, mask: Ge, toArrayBuffer: Zt, toBuffer: _e2, unmask: $e2 };
        if (!import_node_process2.default.env.WS_NO_BUFFER_UTIL)
          try {
            let t3 = p4("bufferutil");
            Q4.exports.mask = function(e2, r2, i3, s2, n5) {
              n5 < 48 ? Ge(e2, r2, i3, s2, n5) : t3.mask(e2, r2, i3, s2, n5);
            }, Q4.exports.unmask = function(e2, r2) {
              e2.length < 32 ? $e2(e2, r2) : t3.unmask(e2, r2);
            };
          } catch {
          }
      });
      He = S2((ds, Ve) => {
        "use strict";
        var je = Symbol("kDone"), pe3 = Symbol("kRun"), me3 = class {
          constructor(e2) {
            this[je] = () => {
              this.pending--, this[pe3]();
            }, this.concurrency = e2 || 1 / 0, this.jobs = [], this.pending = 0;
          }
          add(e2) {
            this.jobs.push(e2), this[pe3]();
          }
          [pe3]() {
            if (this.pending !== this.concurrency && this.jobs.length) {
              let e2 = this.jobs.shift();
              this.pending++, e2(this[je]);
            }
          }
        };
        Ve.exports = me3;
      });
      j5 = S2((_s, Xe) => {
        "use strict";
        var G4 = p4("zlib"), ze = q5(), Qt = He(), { kStatusCode: Ye } = C3(), Jt = import_node_buffer.Buffer[Symbol.species], er = import_node_buffer.Buffer.from([0, 0, 255, 255]), te3 = Symbol("permessage-deflate"), k7 = Symbol("total-length"), $6 = Symbol("callback"), N3 = Symbol("buffers"), ee3 = Symbol("error"), J3, ge2 = class {
          constructor(e2, r2, i3) {
            if (this._maxPayload = i3 | 0, this._options = e2 || {}, this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024, this._isServer = !!r2, this._deflate = null, this._inflate = null, this.params = null, !J3) {
              let s2 = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
              J3 = new Qt(s2);
            }
          }
          static get extensionName() {
            return "permessage-deflate";
          }
          offer() {
            let e2 = {};
            return this._options.serverNoContextTakeover && (e2.server_no_context_takeover = true), this._options.clientNoContextTakeover && (e2.client_no_context_takeover = true), this._options.serverMaxWindowBits && (e2.server_max_window_bits = this._options.serverMaxWindowBits), this._options.clientMaxWindowBits ? e2.client_max_window_bits = this._options.clientMaxWindowBits : this._options.clientMaxWindowBits == null && (e2.client_max_window_bits = true), e2;
          }
          accept(e2) {
            return e2 = this.normalizeParams(e2), this.params = this._isServer ? this.acceptAsServer(e2) : this.acceptAsClient(e2), this.params;
          }
          cleanup() {
            if (this._inflate && (this._inflate.close(), this._inflate = null), this._deflate) {
              let e2 = this._deflate[$6];
              this._deflate.close(), this._deflate = null, e2 && e2(new Error("The deflate stream was closed while data was being processed"));
            }
          }
          acceptAsServer(e2) {
            let r2 = this._options, i3 = e2.find((s2) => !(r2.serverNoContextTakeover === false && s2.server_no_context_takeover || s2.server_max_window_bits && (r2.serverMaxWindowBits === false || typeof r2.serverMaxWindowBits == "number" && r2.serverMaxWindowBits > s2.server_max_window_bits) || typeof r2.clientMaxWindowBits == "number" && !s2.client_max_window_bits));
            if (!i3)
              throw new Error("None of the extension offers can be accepted");
            return r2.serverNoContextTakeover && (i3.server_no_context_takeover = true), r2.clientNoContextTakeover && (i3.client_no_context_takeover = true), typeof r2.serverMaxWindowBits == "number" && (i3.server_max_window_bits = r2.serverMaxWindowBits), typeof r2.clientMaxWindowBits == "number" ? i3.client_max_window_bits = r2.clientMaxWindowBits : (i3.client_max_window_bits === true || r2.clientMaxWindowBits === false) && delete i3.client_max_window_bits, i3;
          }
          acceptAsClient(e2) {
            let r2 = e2[0];
            if (this._options.clientNoContextTakeover === false && r2.client_no_context_takeover)
              throw new Error('Unexpected parameter "client_no_context_takeover"');
            if (!r2.client_max_window_bits)
              typeof this._options.clientMaxWindowBits == "number" && (r2.client_max_window_bits = this._options.clientMaxWindowBits);
            else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits == "number" && r2.client_max_window_bits > this._options.clientMaxWindowBits)
              throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
            return r2;
          }
          normalizeParams(e2) {
            return e2.forEach((r2) => {
              Object.keys(r2).forEach((i3) => {
                let s2 = r2[i3];
                if (s2.length > 1)
                  throw new Error(`Parameter "${i3}" must have only a single value`);
                if (s2 = s2[0], i3 === "client_max_window_bits") {
                  if (s2 !== true) {
                    let n5 = +s2;
                    if (!Number.isInteger(n5) || n5 < 8 || n5 > 15)
                      throw new TypeError(`Invalid value for parameter "${i3}": ${s2}`);
                    s2 = n5;
                  } else if (!this._isServer)
                    throw new TypeError(`Invalid value for parameter "${i3}": ${s2}`);
                } else if (i3 === "server_max_window_bits") {
                  let n5 = +s2;
                  if (!Number.isInteger(n5) || n5 < 8 || n5 > 15)
                    throw new TypeError(`Invalid value for parameter "${i3}": ${s2}`);
                  s2 = n5;
                } else if (i3 === "client_no_context_takeover" || i3 === "server_no_context_takeover") {
                  if (s2 !== true)
                    throw new TypeError(`Invalid value for parameter "${i3}": ${s2}`);
                } else
                  throw new Error(`Unknown parameter "${i3}"`);
                r2[i3] = s2;
              });
            }), e2;
          }
          decompress(e2, r2, i3) {
            J3.add((s2) => {
              this._decompress(e2, r2, (n5, o3) => {
                s2(), i3(n5, o3);
              });
            });
          }
          compress(e2, r2, i3) {
            J3.add((s2) => {
              this._compress(e2, r2, (n5, o3) => {
                s2(), i3(n5, o3);
              });
            });
          }
          _decompress(e2, r2, i3) {
            let s2 = this._isServer ? "client" : "server";
            if (!this._inflate) {
              let n5 = `${s2}_max_window_bits`, o3 = typeof this.params[n5] != "number" ? G4.Z_DEFAULT_WINDOWBITS : this.params[n5];
              this._inflate = G4.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: o3 }), this._inflate[te3] = this, this._inflate[k7] = 0, this._inflate[N3] = [], this._inflate.on("error", rr), this._inflate.on("data", Ke);
            }
            this._inflate[$6] = i3, this._inflate.write(e2), r2 && this._inflate.write(er), this._inflate.flush(() => {
              let n5 = this._inflate[ee3];
              if (n5) {
                this._inflate.close(), this._inflate = null, i3(n5);
                return;
              }
              let o3 = ze.concat(this._inflate[N3], this._inflate[k7]);
              this._inflate._readableState.endEmitted ? (this._inflate.close(), this._inflate = null) : (this._inflate[k7] = 0, this._inflate[N3] = [], r2 && this.params[`${s2}_no_context_takeover`] && this._inflate.reset()), i3(null, o3);
            });
          }
          _compress(e2, r2, i3) {
            let s2 = this._isServer ? "server" : "client";
            if (!this._deflate) {
              let n5 = `${s2}_max_window_bits`, o3 = typeof this.params[n5] != "number" ? G4.Z_DEFAULT_WINDOWBITS : this.params[n5];
              this._deflate = G4.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: o3 }), this._deflate[k7] = 0, this._deflate[N3] = [], this._deflate.on("data", tr);
            }
            this._deflate[$6] = i3, this._deflate.write(e2), this._deflate.flush(G4.Z_SYNC_FLUSH, () => {
              if (!this._deflate)
                return;
              let n5 = ze.concat(this._deflate[N3], this._deflate[k7]);
              r2 && (n5 = new Jt(n5.buffer, n5.byteOffset, n5.length - 4)), this._deflate[$6] = null, this._deflate[k7] = 0, this._deflate[N3] = [], r2 && this.params[`${s2}_no_context_takeover`] && this._deflate.reset(), i3(null, n5);
            });
          }
        };
        Xe.exports = ge2;
        function tr(t3) {
          this[N3].push(t3), this[k7] += t3.length;
        }
        function Ke(t3) {
          if (this[k7] += t3.length, this[te3]._maxPayload < 1 || this[k7] <= this[te3]._maxPayload) {
            this[N3].push(t3);
            return;
          }
          this[ee3] = new RangeError("Max payload size exceeded"), this[ee3].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH", this[ee3][Ye] = 1009, this.removeListener("data", Ke), this.reset();
        }
        function rr(t3) {
          this[te3]._inflate = null, t3[Ye] = 1007, this[$6](t3);
        }
      });
      V4 = S2((ps, re2) => {
        "use strict";
        var { isUtf8: Ze } = p4("buffer"), sr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0];
        function ir(t3) {
          return t3 >= 1e3 && t3 <= 1014 && t3 !== 1004 && t3 !== 1005 && t3 !== 1006 || t3 >= 3e3 && t3 <= 4999;
        }
        function ye2(t3) {
          let e2 = t3.length, r2 = 0;
          for (; r2 < e2; )
            if (!(t3[r2] & 128))
              r2++;
            else if ((t3[r2] & 224) === 192) {
              if (r2 + 1 === e2 || (t3[r2 + 1] & 192) !== 128 || (t3[r2] & 254) === 192)
                return false;
              r2 += 2;
            } else if ((t3[r2] & 240) === 224) {
              if (r2 + 2 >= e2 || (t3[r2 + 1] & 192) !== 128 || (t3[r2 + 2] & 192) !== 128 || t3[r2] === 224 && (t3[r2 + 1] & 224) === 128 || t3[r2] === 237 && (t3[r2 + 1] & 224) === 160)
                return false;
              r2 += 3;
            } else if ((t3[r2] & 248) === 240) {
              if (r2 + 3 >= e2 || (t3[r2 + 1] & 192) !== 128 || (t3[r2 + 2] & 192) !== 128 || (t3[r2 + 3] & 192) !== 128 || t3[r2] === 240 && (t3[r2 + 1] & 240) === 128 || t3[r2] === 244 && t3[r2 + 1] > 143 || t3[r2] > 244)
                return false;
              r2 += 4;
            } else
              return false;
          return true;
        }
        re2.exports = { isValidStatusCode: ir, isValidUTF8: ye2, tokenChars: sr };
        if (Ze)
          re2.exports.isValidUTF8 = function(t3) {
            return t3.length < 24 ? ye2(t3) : Ze(t3);
          };
        else if (!import_node_process2.default.env.WS_NO_UTF_8_VALIDATE)
          try {
            let t3 = p4("utf-8-validate");
            re2.exports.isValidUTF8 = function(e2) {
              return e2.length < 32 ? ye2(e2) : t3(e2);
            };
          } catch {
          }
      });
      be2 = S2((ms, it) => {
        "use strict";
        var { Writable: nr } = p4("stream"), Qe = j5(), { BINARY_TYPES: or, EMPTY_BUFFER: Je, kStatusCode: ar, kWebSocket: fr } = C3(), { concat: xe2, toArrayBuffer: lr, unmask: hr } = q5(), { isValidStatusCode: cr, isValidUTF8: et } = V4(), se = import_node_buffer.Buffer[Symbol.species], ur = Promise.resolve(), Se = typeof queueMicrotask == "function" ? queueMicrotask : dr, v7 = 0, tt = 1, rt = 2, st = 3, Ee2 = 4, ie = 5, ne3 = 6, ve3 = class extends nr {
          constructor(e2 = {}) {
            super(), this._allowSynchronousEvents = !!e2.allowSynchronousEvents, this._binaryType = e2.binaryType || or[0], this._extensions = e2.extensions || {}, this._isServer = !!e2.isServer, this._maxPayload = e2.maxPayload | 0, this._skipUTF8Validation = !!e2.skipUTF8Validation, this[fr] = void 0, this._bufferedBytes = 0, this._buffers = [], this._compressed = false, this._payloadLength = 0, this._mask = void 0, this._fragmented = 0, this._masked = false, this._fin = false, this._opcode = 0, this._totalPayloadLength = 0, this._messageLength = 0, this._fragments = [], this._errored = false, this._loop = false, this._state = v7;
          }
          _write(e2, r2, i3) {
            if (this._opcode === 8 && this._state == v7)
              return i3();
            this._bufferedBytes += e2.length, this._buffers.push(e2), this.startLoop(i3);
          }
          consume(e2) {
            if (this._bufferedBytes -= e2, e2 === this._buffers[0].length)
              return this._buffers.shift();
            if (e2 < this._buffers[0].length) {
              let i3 = this._buffers[0];
              return this._buffers[0] = new se(i3.buffer, i3.byteOffset + e2, i3.length - e2), new se(i3.buffer, i3.byteOffset, e2);
            }
            let r2 = import_node_buffer.Buffer.allocUnsafe(e2);
            do {
              let i3 = this._buffers[0], s2 = r2.length - e2;
              e2 >= i3.length ? r2.set(this._buffers.shift(), s2) : (r2.set(new Uint8Array(i3.buffer, i3.byteOffset, e2), s2), this._buffers[0] = new se(i3.buffer, i3.byteOffset + e2, i3.length - e2)), e2 -= i3.length;
            } while (e2 > 0);
            return r2;
          }
          startLoop(e2) {
            this._loop = true;
            do
              switch (this._state) {
                case v7:
                  this.getInfo(e2);
                  break;
                case tt:
                  this.getPayloadLength16(e2);
                  break;
                case rt:
                  this.getPayloadLength64(e2);
                  break;
                case st:
                  this.getMask();
                  break;
                case Ee2:
                  this.getData(e2);
                  break;
                case ie:
                case ne3:
                  this._loop = false;
                  return;
              }
            while (this._loop);
            this._errored || e2();
          }
          getInfo(e2) {
            if (this._bufferedBytes < 2) {
              this._loop = false;
              return;
            }
            let r2 = this.consume(2);
            if (r2[0] & 48) {
              let s2 = this.createError(RangeError, "RSV2 and RSV3 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_2_3");
              e2(s2);
              return;
            }
            let i3 = (r2[0] & 64) === 64;
            if (i3 && !this._extensions[Qe.extensionName]) {
              let s2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
              e2(s2);
              return;
            }
            if (this._fin = (r2[0] & 128) === 128, this._opcode = r2[0] & 15, this._payloadLength = r2[1] & 127, this._opcode === 0) {
              if (i3) {
                let s2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                e2(s2);
                return;
              }
              if (!this._fragmented) {
                let s2 = this.createError(RangeError, "invalid opcode 0", true, 1002, "WS_ERR_INVALID_OPCODE");
                e2(s2);
                return;
              }
              this._opcode = this._fragmented;
            } else if (this._opcode === 1 || this._opcode === 2) {
              if (this._fragmented) {
                let s2 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
                e2(s2);
                return;
              }
              this._compressed = i3;
            } else if (this._opcode > 7 && this._opcode < 11) {
              if (!this._fin) {
                let s2 = this.createError(RangeError, "FIN must be set", true, 1002, "WS_ERR_EXPECTED_FIN");
                e2(s2);
                return;
              }
              if (i3) {
                let s2 = this.createError(RangeError, "RSV1 must be clear", true, 1002, "WS_ERR_UNEXPECTED_RSV_1");
                e2(s2);
                return;
              }
              if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
                let s2 = this.createError(RangeError, `invalid payload length ${this._payloadLength}`, true, 1002, "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH");
                e2(s2);
                return;
              }
            } else {
              let s2 = this.createError(RangeError, `invalid opcode ${this._opcode}`, true, 1002, "WS_ERR_INVALID_OPCODE");
              e2(s2);
              return;
            }
            if (!this._fin && !this._fragmented && (this._fragmented = this._opcode), this._masked = (r2[1] & 128) === 128, this._isServer) {
              if (!this._masked) {
                let s2 = this.createError(RangeError, "MASK must be set", true, 1002, "WS_ERR_EXPECTED_MASK");
                e2(s2);
                return;
              }
            } else if (this._masked) {
              let s2 = this.createError(RangeError, "MASK must be clear", true, 1002, "WS_ERR_UNEXPECTED_MASK");
              e2(s2);
              return;
            }
            this._payloadLength === 126 ? this._state = tt : this._payloadLength === 127 ? this._state = rt : this.haveLength(e2);
          }
          getPayloadLength16(e2) {
            if (this._bufferedBytes < 2) {
              this._loop = false;
              return;
            }
            this._payloadLength = this.consume(2).readUInt16BE(0), this.haveLength(e2);
          }
          getPayloadLength64(e2) {
            if (this._bufferedBytes < 8) {
              this._loop = false;
              return;
            }
            let r2 = this.consume(8), i3 = r2.readUInt32BE(0);
            if (i3 > Math.pow(2, 21) - 1) {
              let s2 = this.createError(RangeError, "Unsupported WebSocket frame: payload length > 2^53 - 1", false, 1009, "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH");
              e2(s2);
              return;
            }
            this._payloadLength = i3 * Math.pow(2, 32) + r2.readUInt32BE(4), this.haveLength(e2);
          }
          haveLength(e2) {
            if (this._payloadLength && this._opcode < 8 && (this._totalPayloadLength += this._payloadLength, this._totalPayloadLength > this._maxPayload && this._maxPayload > 0)) {
              let r2 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
              e2(r2);
              return;
            }
            this._masked ? this._state = st : this._state = Ee2;
          }
          getMask() {
            if (this._bufferedBytes < 4) {
              this._loop = false;
              return;
            }
            this._mask = this.consume(4), this._state = Ee2;
          }
          getData(e2) {
            let r2 = Je;
            if (this._payloadLength) {
              if (this._bufferedBytes < this._payloadLength) {
                this._loop = false;
                return;
              }
              r2 = this.consume(this._payloadLength), this._masked && this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3] && hr(r2, this._mask);
            }
            if (this._opcode > 7) {
              this.controlMessage(r2, e2);
              return;
            }
            if (this._compressed) {
              this._state = ie, this.decompress(r2, e2);
              return;
            }
            r2.length && (this._messageLength = this._totalPayloadLength, this._fragments.push(r2)), this.dataMessage(e2);
          }
          decompress(e2, r2) {
            this._extensions[Qe.extensionName].decompress(e2, this._fin, (s2, n5) => {
              if (s2)
                return r2(s2);
              if (n5.length) {
                if (this._messageLength += n5.length, this._messageLength > this._maxPayload && this._maxPayload > 0) {
                  let o3 = this.createError(RangeError, "Max payload size exceeded", false, 1009, "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH");
                  r2(o3);
                  return;
                }
                this._fragments.push(n5);
              }
              this.dataMessage(r2), this._state === v7 && this.startLoop(r2);
            });
          }
          dataMessage(e2) {
            if (!this._fin) {
              this._state = v7;
              return;
            }
            let r2 = this._messageLength, i3 = this._fragments;
            if (this._totalPayloadLength = 0, this._messageLength = 0, this._fragmented = 0, this._fragments = [], this._opcode === 2) {
              let s2;
              this._binaryType === "nodebuffer" ? s2 = xe2(i3, r2) : this._binaryType === "arraybuffer" ? s2 = lr(xe2(i3, r2)) : s2 = i3, this._state === ie || this._allowSynchronousEvents ? (this.emit("message", s2, true), this._state = v7) : (this._state = ne3, Se(() => {
                this.emit("message", s2, true), this._state = v7, this.startLoop(e2);
              }));
            } else {
              let s2 = xe2(i3, r2);
              if (!this._skipUTF8Validation && !et(s2)) {
                let n5 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
                e2(n5);
                return;
              }
              this._state === ie || this._allowSynchronousEvents ? (this.emit("message", s2, false), this._state = v7) : (this._state = ne3, Se(() => {
                this.emit("message", s2, false), this._state = v7, this.startLoop(e2);
              }));
            }
          }
          controlMessage(e2, r2) {
            if (this._opcode === 8) {
              if (e2.length === 0)
                this._loop = false, this.emit("conclude", 1005, Je), this.end();
              else {
                let i3 = e2.readUInt16BE(0);
                if (!cr(i3)) {
                  let n5 = this.createError(RangeError, `invalid status code ${i3}`, true, 1002, "WS_ERR_INVALID_CLOSE_CODE");
                  r2(n5);
                  return;
                }
                let s2 = new se(e2.buffer, e2.byteOffset + 2, e2.length - 2);
                if (!this._skipUTF8Validation && !et(s2)) {
                  let n5 = this.createError(Error, "invalid UTF-8 sequence", true, 1007, "WS_ERR_INVALID_UTF8");
                  r2(n5);
                  return;
                }
                this._loop = false, this.emit("conclude", i3, s2), this.end();
              }
              this._state = v7;
              return;
            }
            this._allowSynchronousEvents ? (this.emit(this._opcode === 9 ? "ping" : "pong", e2), this._state = v7) : (this._state = ne3, Se(() => {
              this.emit(this._opcode === 9 ? "ping" : "pong", e2), this._state = v7, this.startLoop(r2);
            }));
          }
          createError(e2, r2, i3, s2, n5) {
            this._loop = false, this._errored = true;
            let o3 = new e2(i3 ? `Invalid WebSocket frame: ${r2}` : r2);
            return Error.captureStackTrace(o3, this.createError), o3.code = n5, o3[ar] = s2, o3;
          }
        };
        it.exports = ve3;
        function dr(t3) {
          ur.then(t3).catch(pr);
        }
        function _r(t3) {
          throw t3;
        }
        function pr(t3) {
          import_node_process2.default.nextTick(_r, t3);
        }
      });
      ke = S2((ys, at) => {
        "use strict";
        var { Duplex: gs } = p4("stream"), { randomFillSync: mr } = p4("crypto"), nt = j5(), { EMPTY_BUFFER: gr } = C3(), { isValidStatusCode: yr } = V4(), { mask: ot, toBuffer: M3 } = q5(), b6 = Symbol("kByteLength"), xr = import_node_buffer.Buffer.alloc(4), we2 = class t3 {
          constructor(e2, r2, i3) {
            this._extensions = r2 || {}, i3 && (this._generateMask = i3, this._maskBuffer = import_node_buffer.Buffer.alloc(4)), this._socket = e2, this._firstFragment = true, this._compress = false, this._bufferedBytes = 0, this._deflating = false, this._queue = [];
          }
          static frame(e2, r2) {
            let i3, s2 = false, n5 = 2, o3 = false;
            r2.mask && (i3 = r2.maskBuffer || xr, r2.generateMask ? r2.generateMask(i3) : mr(i3, 0, 4), o3 = (i3[0] | i3[1] | i3[2] | i3[3]) === 0, n5 = 6);
            let f8;
            typeof e2 == "string" ? (!r2.mask || o3) && r2[b6] !== void 0 ? f8 = r2[b6] : (e2 = import_node_buffer.Buffer.from(e2), f8 = e2.length) : (f8 = e2.length, s2 = r2.mask && r2.readOnly && !o3);
            let l8 = f8;
            f8 >= 65536 ? (n5 += 8, l8 = 127) : f8 > 125 && (n5 += 2, l8 = 126);
            let a6 = import_node_buffer.Buffer.allocUnsafe(s2 ? f8 + n5 : n5);
            return a6[0] = r2.fin ? r2.opcode | 128 : r2.opcode, r2.rsv1 && (a6[0] |= 64), a6[1] = l8, l8 === 126 ? a6.writeUInt16BE(f8, 2) : l8 === 127 && (a6[2] = a6[3] = 0, a6.writeUIntBE(f8, 4, 6)), r2.mask ? (a6[1] |= 128, a6[n5 - 4] = i3[0], a6[n5 - 3] = i3[1], a6[n5 - 2] = i3[2], a6[n5 - 1] = i3[3], o3 ? [a6, e2] : s2 ? (ot(e2, i3, a6, n5, f8), [a6]) : (ot(e2, i3, e2, 0, f8), [a6, e2])) : [a6, e2];
          }
          close(e2, r2, i3, s2) {
            let n5;
            if (e2 === void 0)
              n5 = gr;
            else {
              if (typeof e2 != "number" || !yr(e2))
                throw new TypeError("First argument must be a valid error code number");
              if (r2 === void 0 || !r2.length)
                n5 = import_node_buffer.Buffer.allocUnsafe(2), n5.writeUInt16BE(e2, 0);
              else {
                let f8 = import_node_buffer.Buffer.byteLength(r2);
                if (f8 > 123)
                  throw new RangeError("The message must not be greater than 123 bytes");
                n5 = import_node_buffer.Buffer.allocUnsafe(2 + f8), n5.writeUInt16BE(e2, 0), typeof r2 == "string" ? n5.write(r2, 2) : n5.set(r2, 2);
              }
            }
            let o3 = { [b6]: n5.length, fin: true, generateMask: this._generateMask, mask: i3, maskBuffer: this._maskBuffer, opcode: 8, readOnly: false, rsv1: false };
            this._deflating ? this.enqueue([this.dispatch, n5, false, o3, s2]) : this.sendFrame(t3.frame(n5, o3), s2);
          }
          ping(e2, r2, i3) {
            let s2, n5;
            if (typeof e2 == "string" ? (s2 = import_node_buffer.Buffer.byteLength(e2), n5 = false) : (e2 = M3(e2), s2 = e2.length, n5 = M3.readOnly), s2 > 125)
              throw new RangeError("The data size must not be greater than 125 bytes");
            let o3 = { [b6]: s2, fin: true, generateMask: this._generateMask, mask: r2, maskBuffer: this._maskBuffer, opcode: 9, readOnly: n5, rsv1: false };
            this._deflating ? this.enqueue([this.dispatch, e2, false, o3, i3]) : this.sendFrame(t3.frame(e2, o3), i3);
          }
          pong(e2, r2, i3) {
            let s2, n5;
            if (typeof e2 == "string" ? (s2 = import_node_buffer.Buffer.byteLength(e2), n5 = false) : (e2 = M3(e2), s2 = e2.length, n5 = M3.readOnly), s2 > 125)
              throw new RangeError("The data size must not be greater than 125 bytes");
            let o3 = { [b6]: s2, fin: true, generateMask: this._generateMask, mask: r2, maskBuffer: this._maskBuffer, opcode: 10, readOnly: n5, rsv1: false };
            this._deflating ? this.enqueue([this.dispatch, e2, false, o3, i3]) : this.sendFrame(t3.frame(e2, o3), i3);
          }
          send(e2, r2, i3) {
            let s2 = this._extensions[nt.extensionName], n5 = r2.binary ? 2 : 1, o3 = r2.compress, f8, l8;
            if (typeof e2 == "string" ? (f8 = import_node_buffer.Buffer.byteLength(e2), l8 = false) : (e2 = M3(e2), f8 = e2.length, l8 = M3.readOnly), this._firstFragment ? (this._firstFragment = false, o3 && s2 && s2.params[s2._isServer ? "server_no_context_takeover" : "client_no_context_takeover"] && (o3 = f8 >= s2._threshold), this._compress = o3) : (o3 = false, n5 = 0), r2.fin && (this._firstFragment = true), s2) {
              let a6 = { [b6]: f8, fin: r2.fin, generateMask: this._generateMask, mask: r2.mask, maskBuffer: this._maskBuffer, opcode: n5, readOnly: l8, rsv1: o3 };
              this._deflating ? this.enqueue([this.dispatch, e2, this._compress, a6, i3]) : this.dispatch(e2, this._compress, a6, i3);
            } else
              this.sendFrame(t3.frame(e2, { [b6]: f8, fin: r2.fin, generateMask: this._generateMask, mask: r2.mask, maskBuffer: this._maskBuffer, opcode: n5, readOnly: l8, rsv1: false }), i3);
          }
          dispatch(e2, r2, i3, s2) {
            if (!r2) {
              this.sendFrame(t3.frame(e2, i3), s2);
              return;
            }
            let n5 = this._extensions[nt.extensionName];
            this._bufferedBytes += i3[b6], this._deflating = true, n5.compress(e2, i3.fin, (o3, f8) => {
              if (this._socket.destroyed) {
                let l8 = new Error("The socket was closed while data was being compressed");
                typeof s2 == "function" && s2(l8);
                for (let a6 = 0; a6 < this._queue.length; a6++) {
                  let c8 = this._queue[a6], h6 = c8[c8.length - 1];
                  typeof h6 == "function" && h6(l8);
                }
                return;
              }
              this._bufferedBytes -= i3[b6], this._deflating = false, i3.readOnly = false, this.sendFrame(t3.frame(f8, i3), s2), this.dequeue();
            });
          }
          dequeue() {
            for (; !this._deflating && this._queue.length; ) {
              let e2 = this._queue.shift();
              this._bufferedBytes -= e2[3][b6], Reflect.apply(e2[0], this, e2.slice(1));
            }
          }
          enqueue(e2) {
            this._bufferedBytes += e2[3][b6], this._queue.push(e2);
          }
          sendFrame(e2, r2) {
            e2.length === 2 ? (this._socket.cork(), this._socket.write(e2[0]), this._socket.write(e2[1], r2), this._socket.uncork()) : this._socket.write(e2[0], r2);
          }
        };
        at.exports = we2;
      });
      mt = S2((xs, pt) => {
        "use strict";
        var { kForOnEventAttribute: H4, kListener: Oe2 } = C3(), ft = Symbol("kCode"), lt = Symbol("kData"), ht = Symbol("kError"), ct = Symbol("kMessage"), ut = Symbol("kReason"), D4 = Symbol("kTarget"), dt = Symbol("kType"), _t = Symbol("kWasClean"), O4 = class {
          constructor(e2) {
            this[D4] = null, this[dt] = e2;
          }
          get target() {
            return this[D4];
          }
          get type() {
            return this[dt];
          }
        };
        Object.defineProperty(O4.prototype, "target", { enumerable: true });
        Object.defineProperty(O4.prototype, "type", { enumerable: true });
        var R7 = class extends O4 {
          constructor(e2, r2 = {}) {
            super(e2), this[ft] = r2.code === void 0 ? 0 : r2.code, this[ut] = r2.reason === void 0 ? "" : r2.reason, this[_t] = r2.wasClean === void 0 ? false : r2.wasClean;
          }
          get code() {
            return this[ft];
          }
          get reason() {
            return this[ut];
          }
          get wasClean() {
            return this[_t];
          }
        };
        Object.defineProperty(R7.prototype, "code", { enumerable: true });
        Object.defineProperty(R7.prototype, "reason", { enumerable: true });
        Object.defineProperty(R7.prototype, "wasClean", { enumerable: true });
        var A4 = class extends O4 {
          constructor(e2, r2 = {}) {
            super(e2), this[ht] = r2.error === void 0 ? null : r2.error, this[ct] = r2.message === void 0 ? "" : r2.message;
          }
          get error() {
            return this[ht];
          }
          get message() {
            return this[ct];
          }
        };
        Object.defineProperty(A4.prototype, "error", { enumerable: true });
        Object.defineProperty(A4.prototype, "message", { enumerable: true });
        var z3 = class extends O4 {
          constructor(e2, r2 = {}) {
            super(e2), this[lt] = r2.data === void 0 ? null : r2.data;
          }
          get data() {
            return this[lt];
          }
        };
        Object.defineProperty(z3.prototype, "data", { enumerable: true });
        var Sr = { addEventListener(t3, e2, r2 = {}) {
          for (let s2 of this.listeners(t3))
            if (!r2[H4] && s2[Oe2] === e2 && !s2[H4])
              return;
          let i3;
          if (t3 === "message")
            i3 = function(n5, o3) {
              let f8 = new z3("message", { data: o3 ? n5 : n5.toString() });
              f8[D4] = this, oe3(e2, this, f8);
            };
          else if (t3 === "close")
            i3 = function(n5, o3) {
              let f8 = new R7("close", { code: n5, reason: o3.toString(), wasClean: this._closeFrameReceived && this._closeFrameSent });
              f8[D4] = this, oe3(e2, this, f8);
            };
          else if (t3 === "error")
            i3 = function(n5) {
              let o3 = new A4("error", { error: n5, message: n5.message });
              o3[D4] = this, oe3(e2, this, o3);
            };
          else if (t3 === "open")
            i3 = function() {
              let n5 = new O4("open");
              n5[D4] = this, oe3(e2, this, n5);
            };
          else
            return;
          i3[H4] = !!r2[H4], i3[Oe2] = e2, r2.once ? this.once(t3, i3) : this.on(t3, i3);
        }, removeEventListener(t3, e2) {
          for (let r2 of this.listeners(t3))
            if (r2[Oe2] === e2 && !r2[H4]) {
              this.removeListener(t3, r2);
              break;
            }
        } };
        pt.exports = { CloseEvent: R7, ErrorEvent: A4, Event: O4, EventTarget: Sr, MessageEvent: z3 };
        function oe3(t3, e2, r2) {
          typeof t3 == "object" && t3.handleEvent ? t3.handleEvent.call(t3, r2) : t3.call(e2, r2);
        }
      });
      Te2 = S2((Ss, gt) => {
        "use strict";
        var { tokenChars: Y4 } = V4();
        function w9(t3, e2, r2) {
          t3[e2] === void 0 ? t3[e2] = [r2] : t3[e2].push(r2);
        }
        function Er(t3) {
          let e2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i3 = false, s2 = false, n5 = false, o3, f8, l8 = -1, a6 = -1, c8 = -1, h6 = 0;
          for (; h6 < t3.length; h6++)
            if (a6 = t3.charCodeAt(h6), o3 === void 0)
              if (c8 === -1 && Y4[a6] === 1)
                l8 === -1 && (l8 = h6);
              else if (h6 !== 0 && (a6 === 32 || a6 === 9))
                c8 === -1 && l8 !== -1 && (c8 = h6);
              else if (a6 === 59 || a6 === 44) {
                if (l8 === -1)
                  throw new SyntaxError(`Unexpected character at index ${h6}`);
                c8 === -1 && (c8 = h6);
                let y6 = t3.slice(l8, c8);
                a6 === 44 ? (w9(e2, y6, r2), r2 = /* @__PURE__ */ Object.create(null)) : o3 = y6, l8 = c8 = -1;
              } else
                throw new SyntaxError(`Unexpected character at index ${h6}`);
            else if (f8 === void 0)
              if (c8 === -1 && Y4[a6] === 1)
                l8 === -1 && (l8 = h6);
              else if (a6 === 32 || a6 === 9)
                c8 === -1 && l8 !== -1 && (c8 = h6);
              else if (a6 === 59 || a6 === 44) {
                if (l8 === -1)
                  throw new SyntaxError(`Unexpected character at index ${h6}`);
                c8 === -1 && (c8 = h6), w9(r2, t3.slice(l8, c8), true), a6 === 44 && (w9(e2, o3, r2), r2 = /* @__PURE__ */ Object.create(null), o3 = void 0), l8 = c8 = -1;
              } else if (a6 === 61 && l8 !== -1 && c8 === -1)
                f8 = t3.slice(l8, h6), l8 = c8 = -1;
              else
                throw new SyntaxError(`Unexpected character at index ${h6}`);
            else if (s2) {
              if (Y4[a6] !== 1)
                throw new SyntaxError(`Unexpected character at index ${h6}`);
              l8 === -1 ? l8 = h6 : i3 || (i3 = true), s2 = false;
            } else if (n5)
              if (Y4[a6] === 1)
                l8 === -1 && (l8 = h6);
              else if (a6 === 34 && l8 !== -1)
                n5 = false, c8 = h6;
              else if (a6 === 92)
                s2 = true;
              else
                throw new SyntaxError(`Unexpected character at index ${h6}`);
            else if (a6 === 34 && t3.charCodeAt(h6 - 1) === 61)
              n5 = true;
            else if (c8 === -1 && Y4[a6] === 1)
              l8 === -1 && (l8 = h6);
            else if (l8 !== -1 && (a6 === 32 || a6 === 9))
              c8 === -1 && (c8 = h6);
            else if (a6 === 59 || a6 === 44) {
              if (l8 === -1)
                throw new SyntaxError(`Unexpected character at index ${h6}`);
              c8 === -1 && (c8 = h6);
              let y6 = t3.slice(l8, c8);
              i3 && (y6 = y6.replace(/\\/g, ""), i3 = false), w9(r2, f8, y6), a6 === 44 && (w9(e2, o3, r2), r2 = /* @__PURE__ */ Object.create(null), o3 = void 0), f8 = void 0, l8 = c8 = -1;
            } else
              throw new SyntaxError(`Unexpected character at index ${h6}`);
          if (l8 === -1 || n5 || a6 === 32 || a6 === 9)
            throw new SyntaxError("Unexpected end of input");
          c8 === -1 && (c8 = h6);
          let m8 = t3.slice(l8, c8);
          return o3 === void 0 ? w9(e2, m8, r2) : (f8 === void 0 ? w9(r2, m8, true) : i3 ? w9(r2, f8, m8.replace(/\\/g, "")) : w9(r2, f8, m8), w9(e2, o3, r2)), e2;
        }
        function vr(t3) {
          return Object.keys(t3).map((e2) => {
            let r2 = t3[e2];
            return Array.isArray(r2) || (r2 = [r2]), r2.map((i3) => [e2].concat(Object.keys(i3).map((s2) => {
              let n5 = i3[s2];
              return Array.isArray(n5) || (n5 = [n5]), n5.map((o3) => o3 === true ? s2 : `${s2}=${o3}`).join("; ");
            })).join("; ")).join(", ");
          }).join(", ");
        }
        gt.exports = { format: vr, parse: Er };
      });
      Re2 = S2((bs, Ct) => {
        "use strict";
        var br = p4("events"), wr = p4("https"), kr = p4("http"), St = p4("net"), Or = p4("tls"), { randomBytes: Tr, createHash: Cr } = p4("crypto"), { Duplex: Es, Readable: vs } = p4("stream"), { URL: Ce2 } = p4("url"), L5 = j5(), Nr = be2(), Lr = ke(), { BINARY_TYPES: yt, EMPTY_BUFFER: ae3, GUID: Pr, kForOnEventAttribute: Ne, kListener: Rr, kStatusCode: Ur, kWebSocket: g8, NOOP: Et } = C3(), { EventTarget: { addEventListener: Br, removeEventListener: Ir } } = mt(), { format: Mr, parse: Dr } = Te2(), { toBuffer: Ar } = q5(), Wr = 30 * 1e3, vt = Symbol("kAborted"), Le2 = [8, 13], T7 = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"], Fr = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/, d5 = class t3 extends br {
          constructor(e2, r2, i3) {
            super(), this._binaryType = yt[0], this._closeCode = 1006, this._closeFrameReceived = false, this._closeFrameSent = false, this._closeMessage = ae3, this._closeTimer = null, this._extensions = {}, this._paused = false, this._protocol = "", this._readyState = t3.CONNECTING, this._receiver = null, this._sender = null, this._socket = null, e2 !== null ? (this._bufferedAmount = 0, this._isServer = false, this._redirects = 0, r2 === void 0 ? r2 = [] : Array.isArray(r2) || (typeof r2 == "object" && r2 !== null ? (i3 = r2, r2 = []) : r2 = [r2]), bt(this, e2, r2, i3)) : (this._autoPong = i3.autoPong, this._isServer = true);
          }
          get binaryType() {
            return this._binaryType;
          }
          set binaryType(e2) {
            yt.includes(e2) && (this._binaryType = e2, this._receiver && (this._receiver._binaryType = e2));
          }
          get bufferedAmount() {
            return this._socket ? this._socket._writableState.length + this._sender._bufferedBytes : this._bufferedAmount;
          }
          get extensions() {
            return Object.keys(this._extensions).join();
          }
          get isPaused() {
            return this._paused;
          }
          get onclose() {
            return null;
          }
          get onerror() {
            return null;
          }
          get onopen() {
            return null;
          }
          get onmessage() {
            return null;
          }
          get protocol() {
            return this._protocol;
          }
          get readyState() {
            return this._readyState;
          }
          get url() {
            return this._url;
          }
          setSocket(e2, r2, i3) {
            let s2 = new Nr({ allowSynchronousEvents: i3.allowSynchronousEvents, binaryType: this.binaryType, extensions: this._extensions, isServer: this._isServer, maxPayload: i3.maxPayload, skipUTF8Validation: i3.skipUTF8Validation });
            this._sender = new Lr(e2, this._extensions, i3.generateMask), this._receiver = s2, this._socket = e2, s2[g8] = this, e2[g8] = this, s2.on("conclude", $r), s2.on("drain", jr), s2.on("error", Vr), s2.on("message", Hr), s2.on("ping", zr), s2.on("pong", Yr), e2.setTimeout && e2.setTimeout(0), e2.setNoDelay && e2.setNoDelay(), r2.length > 0 && e2.unshift(r2), e2.on("close", kt), e2.on("data", le3), e2.on("end", Ot), e2.on("error", Tt), this._readyState = t3.OPEN, this.emit("open");
          }
          emitClose() {
            if (!this._socket) {
              this._readyState = t3.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
              return;
            }
            this._extensions[L5.extensionName] && this._extensions[L5.extensionName].cleanup(), this._receiver.removeAllListeners(), this._readyState = t3.CLOSED, this.emit("close", this._closeCode, this._closeMessage);
          }
          close(e2, r2) {
            if (this.readyState !== t3.CLOSED) {
              if (this.readyState === t3.CONNECTING) {
                let i3 = "WebSocket was closed before the connection was established";
                E6(this, this._req, i3);
                return;
              }
              if (this.readyState === t3.CLOSING) {
                this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end();
                return;
              }
              this._readyState = t3.CLOSING, this._sender.close(e2, r2, !this._isServer, (i3) => {
                i3 || (this._closeFrameSent = true, (this._closeFrameReceived || this._receiver._writableState.errorEmitted) && this._socket.end());
              }), this._closeTimer = setTimeout(this._socket.destroy.bind(this._socket), Wr);
            }
          }
          pause() {
            this.readyState === t3.CONNECTING || this.readyState === t3.CLOSED || (this._paused = true, this._socket.pause());
          }
          ping(e2, r2, i3) {
            if (this.readyState === t3.CONNECTING)
              throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof e2 == "function" ? (i3 = e2, e2 = r2 = void 0) : typeof r2 == "function" && (i3 = r2, r2 = void 0), typeof e2 == "number" && (e2 = e2.toString()), this.readyState !== t3.OPEN) {
              Pe2(this, e2, i3);
              return;
            }
            r2 === void 0 && (r2 = !this._isServer), this._sender.ping(e2 || ae3, r2, i3);
          }
          pong(e2, r2, i3) {
            if (this.readyState === t3.CONNECTING)
              throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof e2 == "function" ? (i3 = e2, e2 = r2 = void 0) : typeof r2 == "function" && (i3 = r2, r2 = void 0), typeof e2 == "number" && (e2 = e2.toString()), this.readyState !== t3.OPEN) {
              Pe2(this, e2, i3);
              return;
            }
            r2 === void 0 && (r2 = !this._isServer), this._sender.pong(e2 || ae3, r2, i3);
          }
          resume() {
            this.readyState === t3.CONNECTING || this.readyState === t3.CLOSED || (this._paused = false, this._receiver._writableState.needDrain || this._socket.resume());
          }
          send(e2, r2, i3) {
            if (this.readyState === t3.CONNECTING)
              throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
            if (typeof r2 == "function" && (i3 = r2, r2 = {}), typeof e2 == "number" && (e2 = e2.toString()), this.readyState !== t3.OPEN) {
              Pe2(this, e2, i3);
              return;
            }
            let s2 = { binary: typeof e2 != "string", mask: !this._isServer, compress: true, fin: true, ...r2 };
            this._extensions[L5.extensionName] || (s2.compress = false), this._sender.send(e2 || ae3, s2, i3);
          }
          terminate() {
            if (this.readyState !== t3.CLOSED) {
              if (this.readyState === t3.CONNECTING) {
                let e2 = "WebSocket was closed before the connection was established";
                E6(this, this._req, e2);
                return;
              }
              this._socket && (this._readyState = t3.CLOSING, this._socket.destroy());
            }
          }
        };
        Object.defineProperty(d5, "CONNECTING", { enumerable: true, value: T7.indexOf("CONNECTING") });
        Object.defineProperty(d5.prototype, "CONNECTING", { enumerable: true, value: T7.indexOf("CONNECTING") });
        Object.defineProperty(d5, "OPEN", { enumerable: true, value: T7.indexOf("OPEN") });
        Object.defineProperty(d5.prototype, "OPEN", { enumerable: true, value: T7.indexOf("OPEN") });
        Object.defineProperty(d5, "CLOSING", { enumerable: true, value: T7.indexOf("CLOSING") });
        Object.defineProperty(d5.prototype, "CLOSING", { enumerable: true, value: T7.indexOf("CLOSING") });
        Object.defineProperty(d5, "CLOSED", { enumerable: true, value: T7.indexOf("CLOSED") });
        Object.defineProperty(d5.prototype, "CLOSED", { enumerable: true, value: T7.indexOf("CLOSED") });
        ["binaryType", "bufferedAmount", "extensions", "isPaused", "protocol", "readyState", "url"].forEach((t3) => {
          Object.defineProperty(d5.prototype, t3, { enumerable: true });
        });
        ["open", "error", "close", "message"].forEach((t3) => {
          Object.defineProperty(d5.prototype, `on${t3}`, { enumerable: true, get() {
            for (let e2 of this.listeners(t3))
              if (e2[Ne])
                return e2[Rr];
            return null;
          }, set(e2) {
            for (let r2 of this.listeners(t3))
              if (r2[Ne]) {
                this.removeListener(t3, r2);
                break;
              }
            typeof e2 == "function" && this.addEventListener(t3, e2, { [Ne]: true });
          } });
        });
        d5.prototype.addEventListener = Br;
        d5.prototype.removeEventListener = Ir;
        Ct.exports = d5;
        function bt(t3, e2, r2, i3) {
          let s2 = { allowSynchronousEvents: false, autoPong: true, protocolVersion: Le2[1], maxPayload: 104857600, skipUTF8Validation: false, perMessageDeflate: true, followRedirects: false, maxRedirects: 10, ...i3, createConnection: void 0, socketPath: void 0, hostname: void 0, protocol: void 0, timeout: void 0, method: "GET", host: void 0, path: void 0, port: void 0 };
          if (t3._autoPong = s2.autoPong, !Le2.includes(s2.protocolVersion))
            throw new RangeError(`Unsupported protocol version: ${s2.protocolVersion} (supported versions: ${Le2.join(", ")})`);
          let n5;
          if (e2 instanceof Ce2)
            n5 = e2;
          else
            try {
              n5 = new Ce2(e2);
            } catch {
              throw new SyntaxError(`Invalid URL: ${e2}`);
            }
          n5.protocol === "http:" ? n5.protocol = "ws:" : n5.protocol === "https:" && (n5.protocol = "wss:"), t3._url = n5.href;
          let o3 = n5.protocol === "wss:", f8 = n5.protocol === "ws+unix:", l8;
          if (n5.protocol !== "ws:" && !o3 && !f8 ? l8 = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"` : f8 && !n5.pathname ? l8 = "The URL's pathname is empty" : n5.hash && (l8 = "The URL contains a fragment identifier"), l8) {
            let u4 = new SyntaxError(l8);
            if (t3._redirects === 0)
              throw u4;
            fe3(t3, u4);
            return;
          }
          let a6 = o3 ? 443 : 80, c8 = Tr(16).toString("base64"), h6 = o3 ? wr.request : kr.request, m8 = /* @__PURE__ */ new Set(), y6;
          if (s2.createConnection = o3 ? Gr : qr, s2.defaultPort = s2.defaultPort || a6, s2.port = n5.port || a6, s2.host = n5.hostname.startsWith("[") ? n5.hostname.slice(1, -1) : n5.hostname, s2.headers = { ...s2.headers, "Sec-WebSocket-Version": s2.protocolVersion, "Sec-WebSocket-Key": c8, Connection: "Upgrade", Upgrade: "websocket" }, s2.path = n5.pathname + n5.search, s2.timeout = s2.handshakeTimeout, s2.perMessageDeflate && (y6 = new L5(s2.perMessageDeflate !== true ? s2.perMessageDeflate : {}, false, s2.maxPayload), s2.headers["Sec-WebSocket-Extensions"] = Mr({ [L5.extensionName]: y6.offer() })), r2.length) {
            for (let u4 of r2) {
              if (typeof u4 != "string" || !Fr.test(u4) || m8.has(u4))
                throw new SyntaxError("An invalid or duplicated subprotocol was specified");
              m8.add(u4);
            }
            s2.headers["Sec-WebSocket-Protocol"] = r2.join(",");
          }
          if (s2.origin && (s2.protocolVersion < 13 ? s2.headers["Sec-WebSocket-Origin"] = s2.origin : s2.headers.Origin = s2.origin), (n5.username || n5.password) && (s2.auth = `${n5.username}:${n5.password}`), f8) {
            let u4 = s2.path.split(":");
            s2.socketPath = u4[0], s2.path = u4[1];
          }
          let _8;
          if (s2.followRedirects) {
            if (t3._redirects === 0) {
              t3._originalIpc = f8, t3._originalSecure = o3, t3._originalHostOrSocketPath = f8 ? s2.socketPath : n5.host;
              let u4 = i3 && i3.headers;
              if (i3 = { ...i3, headers: {} }, u4)
                for (let [x8, I4] of Object.entries(u4))
                  i3.headers[x8.toLowerCase()] = I4;
            } else if (t3.listenerCount("redirect") === 0) {
              let u4 = f8 ? t3._originalIpc ? s2.socketPath === t3._originalHostOrSocketPath : false : t3._originalIpc ? false : n5.host === t3._originalHostOrSocketPath;
              (!u4 || t3._originalSecure && !o3) && (delete s2.headers.authorization, delete s2.headers.cookie, u4 || delete s2.headers.host, s2.auth = void 0);
            }
            s2.auth && !i3.headers.authorization && (i3.headers.authorization = "Basic " + import_node_buffer.Buffer.from(s2.auth).toString("base64")), _8 = t3._req = h6(s2), t3._redirects && t3.emit("redirect", t3.url, _8);
          } else
            _8 = t3._req = h6(s2);
          s2.timeout && _8.on("timeout", () => {
            E6(t3, _8, "Opening handshake has timed out");
          }), _8.on("error", (u4) => {
            _8 === null || _8[vt] || (_8 = t3._req = null, fe3(t3, u4));
          }), _8.on("response", (u4) => {
            let x8 = u4.headers.location, I4 = u4.statusCode;
            if (x8 && s2.followRedirects && I4 >= 300 && I4 < 400) {
              if (++t3._redirects > s2.maxRedirects) {
                E6(t3, _8, "Maximum redirects exceeded");
                return;
              }
              _8.abort();
              let Z4;
              try {
                Z4 = new Ce2(x8, e2);
              } catch {
                let P4 = new SyntaxError(`Invalid URL: ${x8}`);
                fe3(t3, P4);
                return;
              }
              bt(t3, Z4, r2, i3);
            } else
              t3.emit("unexpected-response", _8, u4) || E6(t3, _8, `Unexpected server response: ${u4.statusCode}`);
          }), _8.on("upgrade", (u4, x8, I4) => {
            if (t3.emit("upgrade", u4), t3.readyState !== d5.CONNECTING)
              return;
            if (_8 = t3._req = null, u4.headers.upgrade.toLowerCase() !== "websocket") {
              E6(t3, x8, "Invalid Upgrade header");
              return;
            }
            let Z4 = Cr("sha1").update(c8 + Pr).digest("base64");
            if (u4.headers["sec-websocket-accept"] !== Z4) {
              E6(t3, x8, "Invalid Sec-WebSocket-Accept header");
              return;
            }
            let W4 = u4.headers["sec-websocket-protocol"], P4;
            if (W4 !== void 0 ? m8.size ? m8.has(W4) || (P4 = "Server sent an invalid subprotocol") : P4 = "Server sent a subprotocol but none was requested" : m8.size && (P4 = "Server sent no subprotocol"), P4) {
              E6(t3, x8, P4);
              return;
            }
            W4 && (t3._protocol = W4);
            let Be = u4.headers["sec-websocket-extensions"];
            if (Be !== void 0) {
              if (!y6) {
                E6(t3, x8, "Server sent a Sec-WebSocket-Extensions header but no extension was requested");
                return;
              }
              let ce3;
              try {
                ce3 = Dr(Be);
              } catch {
                E6(t3, x8, "Invalid Sec-WebSocket-Extensions header");
                return;
              }
              let Ie2 = Object.keys(ce3);
              if (Ie2.length !== 1 || Ie2[0] !== L5.extensionName) {
                E6(t3, x8, "Server indicated an extension that was not requested");
                return;
              }
              try {
                y6.accept(ce3[L5.extensionName]);
              } catch {
                E6(t3, x8, "Invalid Sec-WebSocket-Extensions header");
                return;
              }
              t3._extensions[L5.extensionName] = y6;
            }
            t3.setSocket(x8, I4, { allowSynchronousEvents: s2.allowSynchronousEvents, generateMask: s2.generateMask, maxPayload: s2.maxPayload, skipUTF8Validation: s2.skipUTF8Validation });
          }), s2.finishRequest ? s2.finishRequest(_8, t3) : _8.end();
        }
        function fe3(t3, e2) {
          t3._readyState = d5.CLOSING, t3.emit("error", e2), t3.emitClose();
        }
        function qr(t3) {
          return t3.path = t3.socketPath, St.connect(t3);
        }
        function Gr(t3) {
          return t3.path = void 0, !t3.servername && t3.servername !== "" && (t3.servername = St.isIP(t3.host) ? "" : t3.host), Or.connect(t3);
        }
        function E6(t3, e2, r2) {
          t3._readyState = d5.CLOSING;
          let i3 = new Error(r2);
          Error.captureStackTrace(i3, E6), e2.setHeader ? (e2[vt] = true, e2.abort(), e2.socket && !e2.socket.destroyed && e2.socket.destroy(), import_node_process2.default.nextTick(fe3, t3, i3)) : (e2.destroy(i3), e2.once("error", t3.emit.bind(t3, "error")), e2.once("close", t3.emitClose.bind(t3)));
        }
        function Pe2(t3, e2, r2) {
          if (e2) {
            let i3 = Ar(e2).length;
            t3._socket ? t3._sender._bufferedBytes += i3 : t3._bufferedAmount += i3;
          }
          if (r2) {
            let i3 = new Error(`WebSocket is not open: readyState ${t3.readyState} (${T7[t3.readyState]})`);
            import_node_process2.default.nextTick(r2, i3);
          }
        }
        function $r(t3, e2) {
          let r2 = this[g8];
          r2._closeFrameReceived = true, r2._closeMessage = e2, r2._closeCode = t3, r2._socket[g8] !== void 0 && (r2._socket.removeListener("data", le3), import_node_process2.default.nextTick(wt, r2._socket), t3 === 1005 ? r2.close() : r2.close(t3, e2));
        }
        function jr() {
          let t3 = this[g8];
          t3.isPaused || t3._socket.resume();
        }
        function Vr(t3) {
          let e2 = this[g8];
          e2._socket[g8] !== void 0 && (e2._socket.removeListener("data", le3), import_node_process2.default.nextTick(wt, e2._socket), e2.close(t3[Ur])), e2.emit("error", t3);
        }
        function xt() {
          this[g8].emitClose();
        }
        function Hr(t3, e2) {
          this[g8].emit("message", t3, e2);
        }
        function zr(t3) {
          let e2 = this[g8];
          e2._autoPong && e2.pong(t3, !this._isServer, Et), e2.emit("ping", t3);
        }
        function Yr(t3) {
          this[g8].emit("pong", t3);
        }
        function wt(t3) {
          t3.resume();
        }
        function kt() {
          let t3 = this[g8];
          this.removeListener("close", kt), this.removeListener("data", le3), this.removeListener("end", Ot), t3._readyState = d5.CLOSING;
          let e2;
          !this._readableState.endEmitted && !t3._closeFrameReceived && !t3._receiver._writableState.errorEmitted && (e2 = t3._socket.read()) !== null && t3._receiver.write(e2), t3._receiver.end(), this[g8] = void 0, clearTimeout(t3._closeTimer), t3._receiver._writableState.finished || t3._receiver._writableState.errorEmitted ? t3.emitClose() : (t3._receiver.on("error", xt), t3._receiver.on("finish", xt));
        }
        function le3(t3) {
          this[g8]._receiver.write(t3) || this.pause();
        }
        function Ot() {
          let t3 = this[g8];
          t3._readyState = d5.CLOSING, t3._receiver.end(), this.end();
        }
        function Tt() {
          let t3 = this[g8];
          this.removeListener("error", Tt), this.on("error", Et), t3 && (t3._readyState = d5.CLOSING, this.destroy());
        }
      });
      Lt = S2((ws, Nt) => {
        "use strict";
        var { tokenChars: Kr } = V4();
        function Xr(t3) {
          let e2 = /* @__PURE__ */ new Set(), r2 = -1, i3 = -1, s2 = 0;
          for (s2; s2 < t3.length; s2++) {
            let o3 = t3.charCodeAt(s2);
            if (i3 === -1 && Kr[o3] === 1)
              r2 === -1 && (r2 = s2);
            else if (s2 !== 0 && (o3 === 32 || o3 === 9))
              i3 === -1 && r2 !== -1 && (i3 = s2);
            else if (o3 === 44) {
              if (r2 === -1)
                throw new SyntaxError(`Unexpected character at index ${s2}`);
              i3 === -1 && (i3 = s2);
              let f8 = t3.slice(r2, i3);
              if (e2.has(f8))
                throw new SyntaxError(`The "${f8}" subprotocol is duplicated`);
              e2.add(f8), r2 = i3 = -1;
            } else
              throw new SyntaxError(`Unexpected character at index ${s2}`);
          }
          if (r2 === -1 || i3 !== -1)
            throw new SyntaxError("Unexpected end of input");
          let n5 = t3.slice(r2, s2);
          if (e2.has(n5))
            throw new SyntaxError(`The "${n5}" subprotocol is duplicated`);
          return e2.add(n5), e2;
        }
        Nt.exports = { parse: Xr };
      });
      Dt = S2((Os, Mt) => {
        "use strict";
        var Zr = p4("events"), he2 = p4("http"), { Duplex: ks } = p4("stream"), { createHash: Qr } = p4("crypto"), Pt = Te2(), U4 = j5(), Jr = Lt(), es = Re2(), { GUID: ts, kWebSocket: rs } = C3(), ss = /^[+/0-9A-Za-z]{22}==$/, Rt = 0, Ut = 1, It = 2, Ue = class extends Zr {
          constructor(e2, r2) {
            if (super(), e2 = { allowSynchronousEvents: false, autoPong: true, maxPayload: 100 * 1024 * 1024, skipUTF8Validation: false, perMessageDeflate: false, handleProtocols: null, clientTracking: true, verifyClient: null, noServer: false, backlog: null, server: null, host: null, path: null, port: null, WebSocket: es, ...e2 }, e2.port == null && !e2.server && !e2.noServer || e2.port != null && (e2.server || e2.noServer) || e2.server && e2.noServer)
              throw new TypeError('One and only one of the "port", "server", or "noServer" options must be specified');
            if (e2.port != null ? (this._server = he2.createServer((i3, s2) => {
              let n5 = he2.STATUS_CODES[426];
              s2.writeHead(426, { "Content-Length": n5.length, "Content-Type": "text/plain" }), s2.end(n5);
            }), this._server.listen(e2.port, e2.host, e2.backlog, r2)) : e2.server && (this._server = e2.server), this._server) {
              let i3 = this.emit.bind(this, "connection");
              this._removeListeners = is(this._server, { listening: this.emit.bind(this, "listening"), error: this.emit.bind(this, "error"), upgrade: (s2, n5, o3) => {
                this.handleUpgrade(s2, n5, o3, i3);
              } });
            }
            e2.perMessageDeflate === true && (e2.perMessageDeflate = {}), e2.clientTracking && (this.clients = /* @__PURE__ */ new Set(), this._shouldEmitClose = false), this.options = e2, this._state = Rt;
          }
          address() {
            if (this.options.noServer)
              throw new Error('The server is operating in "noServer" mode');
            return this._server ? this._server.address() : null;
          }
          close(e2) {
            if (this._state === It) {
              e2 && this.once("close", () => {
                e2(new Error("The server is not running"));
              }), import_node_process2.default.nextTick(K4, this);
              return;
            }
            if (e2 && this.once("close", e2), this._state !== Ut)
              if (this._state = Ut, this.options.noServer || this.options.server)
                this._server && (this._removeListeners(), this._removeListeners = this._server = null), this.clients ? this.clients.size ? this._shouldEmitClose = true : import_node_process2.default.nextTick(K4, this) : import_node_process2.default.nextTick(K4, this);
              else {
                let r2 = this._server;
                this._removeListeners(), this._removeListeners = this._server = null, r2.close(() => {
                  K4(this);
                });
              }
          }
          shouldHandle(e2) {
            if (this.options.path) {
              let r2 = e2.url.indexOf("?");
              if ((r2 !== -1 ? e2.url.slice(0, r2) : e2.url) !== this.options.path)
                return false;
            }
            return true;
          }
          handleUpgrade(e2, r2, i3, s2) {
            r2.on("error", Bt);
            let n5 = e2.headers["sec-websocket-key"], o3 = +e2.headers["sec-websocket-version"];
            if (e2.method !== "GET") {
              B5(this, e2, r2, 405, "Invalid HTTP method");
              return;
            }
            if (e2.headers.upgrade.toLowerCase() !== "websocket") {
              B5(this, e2, r2, 400, "Invalid Upgrade header");
              return;
            }
            if (!n5 || !ss.test(n5)) {
              B5(this, e2, r2, 400, "Missing or invalid Sec-WebSocket-Key header");
              return;
            }
            if (o3 !== 8 && o3 !== 13) {
              B5(this, e2, r2, 400, "Missing or invalid Sec-WebSocket-Version header");
              return;
            }
            if (!this.shouldHandle(e2)) {
              X4(r2, 400);
              return;
            }
            let f8 = e2.headers["sec-websocket-protocol"], l8 = /* @__PURE__ */ new Set();
            if (f8 !== void 0)
              try {
                l8 = Jr.parse(f8);
              } catch {
                B5(this, e2, r2, 400, "Invalid Sec-WebSocket-Protocol header");
                return;
              }
            let a6 = e2.headers["sec-websocket-extensions"], c8 = {};
            if (this.options.perMessageDeflate && a6 !== void 0) {
              let h6 = new U4(this.options.perMessageDeflate, true, this.options.maxPayload);
              try {
                let m8 = Pt.parse(a6);
                m8[U4.extensionName] && (h6.accept(m8[U4.extensionName]), c8[U4.extensionName] = h6);
              } catch {
                B5(this, e2, r2, 400, "Invalid or unacceptable Sec-WebSocket-Extensions header");
                return;
              }
            }
            if (this.options.verifyClient) {
              let h6 = { origin: e2.headers[`${o3 === 8 ? "sec-websocket-origin" : "origin"}`], secure: !!(e2.socket.authorized || e2.socket.encrypted), req: e2 };
              if (this.options.verifyClient.length === 2) {
                this.options.verifyClient(h6, (m8, y6, _8, u4) => {
                  if (!m8)
                    return X4(r2, y6 || 401, _8, u4);
                  this.completeUpgrade(c8, n5, l8, e2, r2, i3, s2);
                });
                return;
              }
              if (!this.options.verifyClient(h6))
                return X4(r2, 401);
            }
            this.completeUpgrade(c8, n5, l8, e2, r2, i3, s2);
          }
          completeUpgrade(e2, r2, i3, s2, n5, o3, f8) {
            if (!n5.readable || !n5.writable)
              return n5.destroy();
            if (n5[rs])
              throw new Error("server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration");
            if (this._state > Rt)
              return X4(n5, 503);
            let a6 = ["HTTP/1.1 101 Switching Protocols", "Upgrade: websocket", "Connection: Upgrade", `Sec-WebSocket-Accept: ${Qr("sha1").update(r2 + ts).digest("base64")}`], c8 = new this.options.WebSocket(null, void 0, this.options);
            if (i3.size) {
              let h6 = this.options.handleProtocols ? this.options.handleProtocols(i3, s2) : i3.values().next().value;
              h6 && (a6.push(`Sec-WebSocket-Protocol: ${h6}`), c8._protocol = h6);
            }
            if (e2[U4.extensionName]) {
              let h6 = e2[U4.extensionName].params, m8 = Pt.format({ [U4.extensionName]: [h6] });
              a6.push(`Sec-WebSocket-Extensions: ${m8}`), c8._extensions = e2;
            }
            this.emit("headers", a6, s2), n5.write(a6.concat(`\r
`).join(`\r
`)), n5.removeListener("error", Bt), c8.setSocket(n5, o3, { allowSynchronousEvents: this.options.allowSynchronousEvents, maxPayload: this.options.maxPayload, skipUTF8Validation: this.options.skipUTF8Validation }), this.clients && (this.clients.add(c8), c8.on("close", () => {
              this.clients.delete(c8), this._shouldEmitClose && !this.clients.size && import_node_process2.default.nextTick(K4, this);
            })), f8(c8, s2);
          }
        };
        Mt.exports = Ue;
        function is(t3, e2) {
          for (let r2 of Object.keys(e2))
            t3.on(r2, e2[r2]);
          return function() {
            for (let i3 of Object.keys(e2))
              t3.removeListener(i3, e2[i3]);
          };
        }
        function K4(t3) {
          t3._state = It, t3.emit("close");
        }
        function Bt() {
          this.destroy();
        }
        function X4(t3, e2, r2, i3) {
          r2 = r2 || he2.STATUS_CODES[e2], i3 = { Connection: "close", "Content-Type": "text/html", "Content-Length": import_node_buffer.Buffer.byteLength(r2), ...i3 }, t3.once("finish", t3.destroy), t3.end(`HTTP/1.1 ${e2} ${he2.STATUS_CODES[e2]}\r
` + Object.keys(i3).map((s2) => `${s2}: ${i3[s2]}`).join(`\r
`) + `\r
\r
` + r2);
        }
        function B5(t3, e2, r2, i3, s2) {
          if (t3.listenerCount("wsClientError")) {
            let n5 = new Error(s2);
            Error.captureStackTrace(n5, B5), t3.emit("wsClientError", n5, r2, e2);
          } else
            X4(r2, i3, s2);
        }
      });
      ns = F5(Fe(), 1);
      os = F5(be2(), 1);
      as = F5(ke(), 1);
      At = F5(Re2(), 1);
      fs = F5(Dt(), 1);
      Ts = At.default;
      export_Receiver = os.default;
      export_Sender = as.default;
      export_WebSocket = At.default;
      export_WebSocketServer = fs.default;
      export_createWebSocketStream = ns.default;
    }
  });

  // .pd/rewardme/index.ts
  var rewardme_exports = {};
  __export(rewardme_exports, {
    default: () => rewardme_default,
    pipe: () => pipe4,
    rawPipe: () => rawPipe4
  });

  // ../../WebstormProjects/pipedown/pipeline.ts
  function Pipeline(presetStages) {
    this.defaultArgs = {};
    this.stages = presetStages || [];
  }
  Pipeline.prototype.pipe = function(stage) {
    this.stages.push(stage);
    return this;
  };
  Pipeline.prototype.process = function(args) {
    args = Object.assign({}, this.defaultArgs, args);
    if (this.stages.length === 0) {
      return args;
    }
    var stageOutput = args;
    this.stages.forEach(function(stage, counter) {
      if (stageOutput && typeof stageOutput.then === "function") {
        stageOutput = stageOutput.then(stage);
      } else {
        if (typeof stage === "function") {
          stageOutput = stage(stageOutput);
        } else {
          stageOutput = stage;
        }
      }
    });
    return stageOutput;
  };
  var pipeline_default = Pipeline;

  // ../../WebstormProjects/pipedown/jsonPointers.ts
  var import_npm_jsonpointer = __toESM(require_jsonpointer());
  var setNew = (data, path) => {
    const tmpObj = {};
    import_npm_jsonpointer.default.set(tmpObj, path, data);
    return tmpObj;
  };
  import_npm_jsonpointer.default.new = setNew;

  // ../../WebstormProjects/pipedown/pdUtils.ts
  var PD_PIPE_DIR = `/Users/aaronmyatt/WebstormProjects/pipedown`;
  var REMOTE_PDPIPE_PATH = `${PD_PIPE_DIR}/pdPipe.ts`;
  function funcWrapper(funcs, opts = {}) {
    opts.$p = import_npm_jsonpointer.default;
    return funcs.map((func, index) => async (input) => {
      const funcConfig = import_npm_jsonpointer.default.get(opts, "/steps/" + index + "/config");
      if (funcConfig && funcConfig.check) {
        const checks = funcConfig.check.reduce((acc, check) => {
          acc[check] = import_npm_jsonpointer.default.get(input, check);
          return acc;
        }, {});
        opts.checks = checks;
        if (!Object.values(checks).some((check) => !!check)) {
          return input;
        }
      }
      if (funcConfig && funcConfig.route && input.request) {
        const pattern = new URLPattern({ pathname: funcConfig.route });
        if (!pattern.test(input.request.url)) {
          return input;
        }
      }
      if (input.errors && input.errors.length > 0) {
        return input;
      }
      try {
        await func(input, opts);
      } catch (e2) {
        input.errors = input.errors || [];
        input.errors.push({
          message: e2.message,
          stack: e2.stack,
          name: e2.name,
          func: func.name
        });
      }
      return input;
    });
  }

  // ../../WebstormProjects/pipedown/pdPipe.ts
  function Pipe(steps, opts) {
    const dispatchOnStart = (input) => {
      const event = new CustomEvent("pd::pipe::start", { detail: input });
      globalThis.dispatchEvent(event);
    };
    steps.push((input) => {
      const event = new CustomEvent("pd::pipe::processed", { detail: input });
      globalThis.dispatchEvent(event);
    });
    const pipe5 = new pipeline_default(funcWrapper(steps, opts));
    return pipe5;
  }

  // https://deno.land/x/zod@v3.22.4/external.ts
  var external_exports = {};
  __export(external_exports, {
    BRAND: () => BRAND,
    DIRTY: () => DIRTY,
    EMPTY_PATH: () => EMPTY_PATH,
    INVALID: () => INVALID,
    NEVER: () => NEVER,
    OK: () => OK,
    ParseStatus: () => ParseStatus,
    Schema: () => ZodType,
    ZodAny: () => ZodAny,
    ZodArray: () => ZodArray,
    ZodBigInt: () => ZodBigInt,
    ZodBoolean: () => ZodBoolean,
    ZodBranded: () => ZodBranded,
    ZodCatch: () => ZodCatch,
    ZodDate: () => ZodDate,
    ZodDefault: () => ZodDefault,
    ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
    ZodEffects: () => ZodEffects,
    ZodEnum: () => ZodEnum,
    ZodError: () => ZodError,
    ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
    ZodFunction: () => ZodFunction,
    ZodIntersection: () => ZodIntersection,
    ZodIssueCode: () => ZodIssueCode,
    ZodLazy: () => ZodLazy,
    ZodLiteral: () => ZodLiteral,
    ZodMap: () => ZodMap,
    ZodNaN: () => ZodNaN,
    ZodNativeEnum: () => ZodNativeEnum,
    ZodNever: () => ZodNever,
    ZodNull: () => ZodNull,
    ZodNullable: () => ZodNullable,
    ZodNumber: () => ZodNumber,
    ZodObject: () => ZodObject,
    ZodOptional: () => ZodOptional,
    ZodParsedType: () => ZodParsedType,
    ZodPipeline: () => ZodPipeline,
    ZodPromise: () => ZodPromise,
    ZodReadonly: () => ZodReadonly,
    ZodRecord: () => ZodRecord,
    ZodSchema: () => ZodType,
    ZodSet: () => ZodSet,
    ZodString: () => ZodString,
    ZodSymbol: () => ZodSymbol,
    ZodTransformer: () => ZodEffects,
    ZodTuple: () => ZodTuple,
    ZodType: () => ZodType,
    ZodUndefined: () => ZodUndefined,
    ZodUnion: () => ZodUnion,
    ZodUnknown: () => ZodUnknown,
    ZodVoid: () => ZodVoid,
    addIssueToContext: () => addIssueToContext,
    any: () => anyType,
    array: () => arrayType,
    bigint: () => bigIntType,
    boolean: () => booleanType,
    coerce: () => coerce,
    custom: () => custom,
    date: () => dateType,
    defaultErrorMap: () => en_default,
    discriminatedUnion: () => discriminatedUnionType,
    effect: () => effectsType,
    enum: () => enumType,
    function: () => functionType,
    getErrorMap: () => getErrorMap,
    getParsedType: () => getParsedType,
    instanceof: () => instanceOfType,
    intersection: () => intersectionType,
    isAborted: () => isAborted,
    isAsync: () => isAsync,
    isDirty: () => isDirty,
    isValid: () => isValid,
    late: () => late,
    lazy: () => lazyType,
    literal: () => literalType,
    makeIssue: () => makeIssue,
    map: () => mapType,
    nan: () => nanType,
    nativeEnum: () => nativeEnumType,
    never: () => neverType,
    null: () => nullType,
    nullable: () => nullableType,
    number: () => numberType,
    object: () => objectType,
    objectUtil: () => objectUtil,
    oboolean: () => oboolean,
    onumber: () => onumber,
    optional: () => optionalType,
    ostring: () => ostring,
    pipeline: () => pipelineType,
    preprocess: () => preprocessType,
    promise: () => promiseType,
    quotelessJson: () => quotelessJson,
    record: () => recordType,
    set: () => setType,
    setErrorMap: () => setErrorMap,
    strictObject: () => strictObjectType,
    string: () => stringType,
    symbol: () => symbolType,
    transformer: () => effectsType,
    tuple: () => tupleType,
    undefined: () => undefinedType,
    union: () => unionType,
    unknown: () => unknownType,
    util: () => util,
    void: () => voidType
  });

  // https://deno.land/x/zod@v3.22.4/helpers/util.ts
  var util;
  ((util2) => {
    util2.assertEqual = (val) => val;
    function assertIs(_arg) {
    }
    util2.assertIs = assertIs;
    function assertNever(_x) {
      throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items) => {
      const obj = {};
      for (const item of items) {
        obj[item] = item;
      }
      return obj;
    };
    util2.getValidEnumValues = (obj) => {
      const validKeys = (0, util2.objectKeys)(obj).filter(
        (k7) => typeof obj[obj[k7]] !== "number"
      );
      const filtered = {};
      for (const k7 of validKeys) {
        filtered[k7] = obj[k7];
      }
      return (0, util2.objectValues)(filtered);
    };
    util2.objectValues = (obj) => {
      return (0, util2.objectKeys)(obj).map(function(e2) {
        return obj[e2];
      });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
      const keys = [];
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
          keys.push(key);
        }
      }
      return keys;
    };
    util2.find = (arr, checker) => {
      for (const item of arr) {
        if (checker(item))
          return item;
      }
      return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array, separator = " | ") {
      return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_8, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
  })(util || (util = {}));
  var objectUtil;
  ((objectUtil3) => {
    objectUtil3.mergeShapes = (first, second) => {
      return {
        ...first,
        ...second
        // second overwrites first
      };
    };
  })(objectUtil || (objectUtil = {}));
  var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  var getParsedType = (data) => {
    const t3 = typeof data;
    switch (t3) {
      case "undefined":
        return ZodParsedType.undefined;
      case "string":
        return ZodParsedType.string;
      case "number":
        return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
      case "boolean":
        return ZodParsedType.boolean;
      case "function":
        return ZodParsedType.function;
      case "bigint":
        return ZodParsedType.bigint;
      case "symbol":
        return ZodParsedType.symbol;
      case "object":
        if (Array.isArray(data)) {
          return ZodParsedType.array;
        }
        if (data === null) {
          return ZodParsedType.null;
        }
        if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
          return ZodParsedType.promise;
        }
        if (typeof Map !== "undefined" && data instanceof Map) {
          return ZodParsedType.map;
        }
        if (typeof Set !== "undefined" && data instanceof Set) {
          return ZodParsedType.set;
        }
        if (typeof Date !== "undefined" && data instanceof Date) {
          return ZodParsedType.date;
        }
        return ZodParsedType.object;
      default:
        return ZodParsedType.unknown;
    }
  };

  // https://deno.land/x/zod@v3.22.4/ZodError.ts
  var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  var quotelessJson = (obj) => {
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
  };
  var _ZodError = class _ZodError extends Error {
    constructor(issues) {
      super();
      __publicField(this, "issues", []);
      __publicField(this, "addIssue", (sub) => {
        this.issues = [...this.issues, sub];
      });
      __publicField(this, "addIssues", (subs = []) => {
        this.issues = [...this.issues, ...subs];
      });
      const actualProto = new.target.prototype;
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(this, actualProto);
      } else {
        this.__proto__ = actualProto;
      }
      this.name = "ZodError";
      this.issues = issues;
    }
    get errors() {
      return this.issues;
    }
    format(_mapper) {
      const mapper = _mapper || function(issue) {
        return issue.message;
      };
      const fieldErrors = { _errors: [] };
      const processError = (error) => {
        for (const issue of error.issues) {
          if (issue.code === "invalid_union") {
            issue.unionErrors.map(processError);
          } else if (issue.code === "invalid_return_type") {
            processError(issue.returnTypeError);
          } else if (issue.code === "invalid_arguments") {
            processError(issue.argumentsError);
          } else if (issue.path.length === 0) {
            fieldErrors._errors.push(mapper(issue));
          } else {
            let curr = fieldErrors;
            let i3 = 0;
            while (i3 < issue.path.length) {
              const el = issue.path[i3];
              const terminal = i3 === issue.path.length - 1;
              if (!terminal) {
                curr[el] = curr[el] || { _errors: [] };
              } else {
                curr[el] = curr[el] || { _errors: [] };
                curr[el]._errors.push(mapper(issue));
              }
              curr = curr[el];
              i3++;
            }
          }
        }
      };
      processError(this);
      return fieldErrors;
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(mapper = (issue) => issue.message) {
      const fieldErrors = {};
      const formErrors = [];
      for (const sub of this.issues) {
        if (sub.path.length > 0) {
          fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
          fieldErrors[sub.path[0]].push(mapper(sub));
        } else {
          formErrors.push(mapper(sub));
        }
      }
      return { formErrors, fieldErrors };
    }
    get formErrors() {
      return this.flatten();
    }
  };
  __publicField(_ZodError, "create", (issues) => {
    const error = new _ZodError(issues);
    return error;
  });
  var ZodError = _ZodError;

  // https://deno.land/x/zod@v3.22.4/locales/en.ts
  var errorMap = (issue, _ctx) => {
    let message;
    switch (issue.code) {
      case ZodIssueCode.invalid_type:
        if (issue.received === ZodParsedType.undefined) {
          message = "Required";
        } else {
          message = `Expected ${issue.expected}, received ${issue.received}`;
        }
        break;
      case ZodIssueCode.invalid_literal:
        message = `Invalid literal value, expected ${JSON.stringify(
          issue.expected,
          util.jsonStringifyReplacer
        )}`;
        break;
      case ZodIssueCode.unrecognized_keys:
        message = `Unrecognized key(s) in object: ${util.joinValues(
          issue.keys,
          ", "
        )}`;
        break;
      case ZodIssueCode.invalid_union:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_union_discriminator:
        message = `Invalid discriminator value. Expected ${util.joinValues(
          issue.options
        )}`;
        break;
      case ZodIssueCode.invalid_enum_value:
        message = `Invalid enum value. Expected ${util.joinValues(
          issue.options
        )}, received '${issue.received}'`;
        break;
      case ZodIssueCode.invalid_arguments:
        message = `Invalid function arguments`;
        break;
      case ZodIssueCode.invalid_return_type:
        message = `Invalid function return type`;
        break;
      case ZodIssueCode.invalid_date:
        message = `Invalid date`;
        break;
      case ZodIssueCode.invalid_string:
        if (typeof issue.validation === "object") {
          if ("includes" in issue.validation) {
            message = `Invalid input: must include "${issue.validation.includes}"`;
            if (typeof issue.validation.position === "number") {
              message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
            }
          } else if ("startsWith" in issue.validation) {
            message = `Invalid input: must start with "${issue.validation.startsWith}"`;
          } else if ("endsWith" in issue.validation) {
            message = `Invalid input: must end with "${issue.validation.endsWith}"`;
          } else {
            util.assertNever(issue.validation);
          }
        } else if (issue.validation !== "regex") {
          message = `Invalid ${issue.validation}`;
        } else {
          message = "Invalid";
        }
        break;
      case ZodIssueCode.too_small:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.too_big:
        if (issue.type === "array")
          message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
        else if (issue.type === "string")
          message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
        else if (issue.type === "number")
          message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "bigint")
          message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
        else if (issue.type === "date")
          message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
        else
          message = "Invalid input";
        break;
      case ZodIssueCode.custom:
        message = `Invalid input`;
        break;
      case ZodIssueCode.invalid_intersection_types:
        message = `Intersection results could not be merged`;
        break;
      case ZodIssueCode.not_multiple_of:
        message = `Number must be a multiple of ${issue.multipleOf}`;
        break;
      case ZodIssueCode.not_finite:
        message = "Number must be finite";
        break;
      default:
        message = _ctx.defaultError;
        util.assertNever(issue);
    }
    return { message };
  };
  var en_default = errorMap;

  // https://deno.land/x/zod@v3.22.4/errors.ts
  var overrideErrorMap = en_default;
  function setErrorMap(map) {
    overrideErrorMap = map;
  }
  function getErrorMap() {
    return overrideErrorMap;
  }

  // https://deno.land/x/zod@v3.22.4/helpers/parseUtil.ts
  var makeIssue = (params) => {
    const { data, path, errorMaps, issueData } = params;
    const fullPath = [...path, ...issueData.path || []];
    const fullIssue = {
      ...issueData,
      path: fullPath
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m8) => !!m8).slice().reverse();
    for (const map of maps) {
      errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
    }
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message || errorMessage
    };
  };
  var EMPTY_PATH = [];
  function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
      issueData,
      data: ctx.data,
      path: ctx.path,
      errorMaps: [
        ctx.common.contextualErrorMap,
        // contextual error map is first priority
        ctx.schemaErrorMap,
        // then schema-bound map if available
        getErrorMap(),
        // then global override map
        en_default
        // then global default map
      ].filter((x8) => !!x8)
    });
    ctx.common.issues.push(issue);
  }
  var ParseStatus = class _ParseStatus {
    constructor() {
      __publicField(this, "value", "valid");
    }
    dirty() {
      if (this.value === "valid")
        this.value = "dirty";
    }
    abort() {
      if (this.value !== "aborted")
        this.value = "aborted";
    }
    static mergeArray(status, results) {
      const arrayValue = [];
      for (const s2 of results) {
        if (s2.status === "aborted")
          return INVALID;
        if (s2.status === "dirty")
          status.dirty();
        arrayValue.push(s2.value);
      }
      return { status: status.value, value: arrayValue };
    }
    static async mergeObjectAsync(status, pairs) {
      const syncPairs = [];
      for (const pair of pairs) {
        syncPairs.push({
          key: await pair.key,
          value: await pair.value
        });
      }
      return _ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
      const finalObject = {};
      for (const pair of pairs) {
        const { key, value } = pair;
        if (key.status === "aborted")
          return INVALID;
        if (value.status === "aborted")
          return INVALID;
        if (key.status === "dirty")
          status.dirty();
        if (value.status === "dirty")
          status.dirty();
        if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
          finalObject[key.value] = value.value;
        }
      }
      return { status: status.value, value: finalObject };
    }
  };
  var INVALID = Object.freeze({
    status: "aborted"
  });
  var DIRTY = (value) => ({ status: "dirty", value });
  var OK = (value) => ({ status: "valid", value });
  var isAborted = (x8) => x8.status === "aborted";
  var isDirty = (x8) => x8.status === "dirty";
  var isValid = (x8) => x8.status === "valid";
  var isAsync = (x8) => typeof Promise !== "undefined" && x8 instanceof Promise;

  // https://deno.land/x/zod@v3.22.4/helpers/errorUtil.ts
  var errorUtil;
  ((errorUtil2) => {
    errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
    errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));

  // https://deno.land/x/zod@v3.22.4/types.ts
  var ParseInputLazyPath = class {
    constructor(parent, value, path, key) {
      __publicField(this, "parent");
      __publicField(this, "data");
      __publicField(this, "_path");
      __publicField(this, "_key");
      __publicField(this, "_cachedPath", []);
      this.parent = parent;
      this.data = value;
      this._path = path;
      this._key = key;
    }
    get path() {
      if (!this._cachedPath.length) {
        if (this._key instanceof Array) {
          this._cachedPath.push(...this._path, ...this._key);
        } else {
          this._cachedPath.push(...this._path, this._key);
        }
      }
      return this._cachedPath;
    }
  };
  var handleResult = (ctx, result) => {
    if (isValid(result)) {
      return { success: true, data: result.value };
    } else {
      if (!ctx.common.issues.length) {
        throw new Error("Validation failed but no issues detected.");
      }
      return {
        success: false,
        get error() {
          if (this._error)
            return this._error;
          const error = new ZodError(ctx.common.issues);
          this._error = error;
          return this._error;
        }
      };
    }
  };
  function processCreateParams(params) {
    if (!params)
      return {};
    const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
    if (errorMap2 && (invalid_type_error || required_error)) {
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
      );
    }
    if (errorMap2)
      return { errorMap: errorMap2, description };
    const customMap = (iss, ctx) => {
      if (iss.code !== "invalid_type")
        return { message: ctx.defaultError };
      if (typeof ctx.data === "undefined") {
        return { message: required_error ?? ctx.defaultError };
      }
      return { message: invalid_type_error ?? ctx.defaultError };
    };
    return { errorMap: customMap, description };
  }
  var ZodType = class {
    constructor(def) {
      __publicField(this, "_type");
      __publicField(this, "_output");
      __publicField(this, "_input");
      __publicField(this, "_def");
      /** Alias of safeParseAsync */
      __publicField(this, "spa", this.safeParseAsync);
      this._def = def;
      this.parse = this.parse.bind(this);
      this.safeParse = this.safeParse.bind(this);
      this.parseAsync = this.parseAsync.bind(this);
      this.safeParseAsync = this.safeParseAsync.bind(this);
      this.spa = this.spa.bind(this);
      this.refine = this.refine.bind(this);
      this.refinement = this.refinement.bind(this);
      this.superRefine = this.superRefine.bind(this);
      this.optional = this.optional.bind(this);
      this.nullable = this.nullable.bind(this);
      this.nullish = this.nullish.bind(this);
      this.array = this.array.bind(this);
      this.promise = this.promise.bind(this);
      this.or = this.or.bind(this);
      this.and = this.and.bind(this);
      this.transform = this.transform.bind(this);
      this.brand = this.brand.bind(this);
      this.default = this.default.bind(this);
      this.catch = this.catch.bind(this);
      this.describe = this.describe.bind(this);
      this.pipe = this.pipe.bind(this);
      this.readonly = this.readonly.bind(this);
      this.isNullable = this.isNullable.bind(this);
      this.isOptional = this.isOptional.bind(this);
    }
    get description() {
      return this._def.description;
    }
    _getType(input) {
      return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
      return ctx || {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      };
    }
    _processInputParams(input) {
      return {
        status: new ParseStatus(),
        ctx: {
          common: input.parent.common,
          data: input.data,
          parsedType: getParsedType(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        }
      };
    }
    _parseSync(input) {
      const result = this._parse(input);
      if (isAsync(result)) {
        throw new Error("Synchronous parse encountered promise.");
      }
      return result;
    }
    _parseAsync(input) {
      const result = this._parse(input);
      return Promise.resolve(result);
    }
    parse(data, params) {
      const result = this.safeParse(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    safeParse(data, params) {
      const ctx = {
        common: {
          issues: [],
          async: params?.async ?? false,
          contextualErrorMap: params?.errorMap
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const result = this._parseSync({ data, path: ctx.path, parent: ctx });
      return handleResult(ctx, result);
    }
    async parseAsync(data, params) {
      const result = await this.safeParseAsync(data, params);
      if (result.success)
        return result.data;
      throw result.error;
    }
    async safeParseAsync(data, params) {
      const ctx = {
        common: {
          issues: [],
          contextualErrorMap: params?.errorMap,
          async: true
        },
        path: params?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data,
        parsedType: getParsedType(data)
      };
      const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
      const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
      return handleResult(ctx, result);
    }
    refine(check, message) {
      const getIssueProperties = (val) => {
        if (typeof message === "string" || typeof message === "undefined") {
          return { message };
        } else if (typeof message === "function") {
          return message(val);
        } else {
          return message;
        }
      };
      return this._refinement((val, ctx) => {
        const result = check(val);
        const setError = () => ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val)
        });
        if (typeof Promise !== "undefined" && result instanceof Promise) {
          return result.then((data) => {
            if (!data) {
              setError();
              return false;
            } else {
              return true;
            }
          });
        }
        if (!result) {
          setError();
          return false;
        } else {
          return true;
        }
      });
    }
    refinement(check, refinementData) {
      return this._refinement((val, ctx) => {
        if (!check(val)) {
          ctx.addIssue(
            typeof refinementData === "function" ? refinementData(val, ctx) : refinementData
          );
          return false;
        } else {
          return true;
        }
      });
    }
    _refinement(refinement) {
      return new ZodEffects({
        schema: this,
        typeName: "ZodEffects" /* ZodEffects */,
        effect: { type: "refinement", refinement }
      });
    }
    superRefine(refinement) {
      return this._refinement(refinement);
    }
    optional() {
      return ZodOptional.create(this, this._def);
    }
    nullable() {
      return ZodNullable.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ZodArray.create(this, this._def);
    }
    promise() {
      return ZodPromise.create(this, this._def);
    }
    or(option) {
      return ZodUnion.create([this, option], this._def);
    }
    and(incoming) {
      return ZodIntersection.create(this, incoming, this._def);
    }
    transform(transform) {
      return new ZodEffects({
        ...processCreateParams(this._def),
        schema: this,
        typeName: "ZodEffects" /* ZodEffects */,
        effect: { type: "transform", transform }
      });
    }
    default(def) {
      const defaultValueFunc = typeof def === "function" ? def : () => def;
      return new ZodDefault({
        ...processCreateParams(this._def),
        innerType: this,
        defaultValue: defaultValueFunc,
        typeName: "ZodDefault" /* ZodDefault */
      });
    }
    brand() {
      return new ZodBranded({
        typeName: "ZodBranded" /* ZodBranded */,
        type: this,
        ...processCreateParams(this._def)
      });
    }
    catch(def) {
      const catchValueFunc = typeof def === "function" ? def : () => def;
      return new ZodCatch({
        ...processCreateParams(this._def),
        innerType: this,
        catchValue: catchValueFunc,
        typeName: "ZodCatch" /* ZodCatch */
      });
    }
    describe(description) {
      const This = this.constructor;
      return new This({
        ...this._def,
        description
      });
    }
    pipe(target) {
      return ZodPipeline.create(this, target);
    }
    readonly() {
      return ZodReadonly.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  };
  var cuidRegex = /^c[^\s-]{8,}$/i;
  var cuid2Regex = /^[a-z][a-z0-9]*$/;
  var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
  var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  var emojiRegex;
  var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
  var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
  var datetimeRegex = (args) => {
    if (args.precision) {
      if (args.offset) {
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
        );
      } else {
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`
        );
      }
    } else if (args.precision === 0) {
      if (args.offset) {
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
        );
      } else {
        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
      }
    } else {
      if (args.offset) {
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`
        );
      } else {
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`
        );
      }
    }
  };
  function isValidIP(ip, version) {
    if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
      return true;
    }
    if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
      return true;
    }
    return false;
  }
  var _ZodString = class _ZodString extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = String(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.string) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(
          ctx2,
          {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.string,
            received: ctx2.parsedType
          }
          //
        );
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.length < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.length > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "length") {
          const tooBig = input.data.length > check.value;
          const tooSmall = input.data.length < check.value;
          if (tooBig || tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            if (tooBig) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            } else if (tooSmall) {
              addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: true,
                message: check.message
              });
            }
            status.dirty();
          }
        } else if (check.kind === "email") {
          if (!emailRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "email",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "emoji") {
          if (!emojiRegex) {
            emojiRegex = new RegExp(_emojiRegex, "u");
          }
          if (!emojiRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "emoji",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "uuid") {
          if (!uuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "uuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid") {
          if (!cuidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "cuid2") {
          if (!cuid2Regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "cuid2",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ulid") {
          if (!ulidRegex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ulid",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "url") {
          try {
            new URL(input.data);
          } catch {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "url",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "regex") {
          check.regex.lastIndex = 0;
          const testResult = check.regex.test(input.data);
          if (!testResult) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "regex",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "trim") {
          input.data = input.data.trim();
        } else if (check.kind === "includes") {
          if (!input.data.includes(check.value, check.position)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { includes: check.value, position: check.position },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "toLowerCase") {
          input.data = input.data.toLowerCase();
        } else if (check.kind === "toUpperCase") {
          input.data = input.data.toUpperCase();
        } else if (check.kind === "startsWith") {
          if (!input.data.startsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { startsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "endsWith") {
          if (!input.data.endsWith(check.value)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: { endsWith: check.value },
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "datetime") {
          const regex = datetimeRegex(check);
          if (!regex.test(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_string,
              validation: "datetime",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "ip") {
          if (!isValidIP(input.data, check.version)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              validation: "ip",
              code: ZodIssueCode.invalid_string,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    _regex(regex, validation, message) {
      return this.refinement((data) => regex.test(data), {
        validation,
        code: ZodIssueCode.invalid_string,
        ...errorUtil.errToObj(message)
      });
    }
    _addCheck(check) {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    email(message) {
      return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
    }
    url(message) {
      return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
    }
    emoji(message) {
      return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
    }
    uuid(message) {
      return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
    }
    cuid(message) {
      return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
    }
    cuid2(message) {
      return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
    }
    ulid(message) {
      return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
    }
    ip(options) {
      return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
    }
    datetime(options) {
      if (typeof options === "string") {
        return this._addCheck({
          kind: "datetime",
          precision: null,
          offset: false,
          message: options
        });
      }
      return this._addCheck({
        kind: "datetime",
        precision: typeof options?.precision === "undefined" ? null : options?.precision,
        offset: options?.offset ?? false,
        ...errorUtil.errToObj(options?.message)
      });
    }
    regex(regex, message) {
      return this._addCheck({
        kind: "regex",
        regex,
        ...errorUtil.errToObj(message)
      });
    }
    includes(value, options) {
      return this._addCheck({
        kind: "includes",
        value,
        position: options?.position,
        ...errorUtil.errToObj(options?.message)
      });
    }
    startsWith(value, message) {
      return this._addCheck({
        kind: "startsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    endsWith(value, message) {
      return this._addCheck({
        kind: "endsWith",
        value,
        ...errorUtil.errToObj(message)
      });
    }
    min(minLength, message) {
      return this._addCheck({
        kind: "min",
        value: minLength,
        ...errorUtil.errToObj(message)
      });
    }
    max(maxLength, message) {
      return this._addCheck({
        kind: "max",
        value: maxLength,
        ...errorUtil.errToObj(message)
      });
    }
    length(len, message) {
      return this._addCheck({
        kind: "length",
        value: len,
        ...errorUtil.errToObj(message)
      });
    }
    /**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */
    nonempty(message) {
      return this.min(1, errorUtil.errToObj(message));
    }
    trim() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      });
    }
    toLowerCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      });
    }
    toUpperCase() {
      return new _ZodString({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((ch) => ch.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((ch) => ch.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((ch) => ch.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((ch) => ch.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((ch) => ch.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((ch) => ch.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((ch) => ch.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((ch) => ch.kind === "ip");
    }
    get minLength() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxLength() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  __publicField(_ZodString, "create", (params) => {
    return new _ZodString({
      checks: [],
      typeName: "ZodString" /* ZodString */,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  });
  var ZodString = _ZodString;
  function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
  }
  var _ZodNumber = class _ZodNumber extends ZodType {
    constructor() {
      super(...arguments);
      __publicField(this, "min", this.gte);
      __publicField(this, "max", this.lte);
      __publicField(this, "step", this.multipleOf);
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = Number(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.number) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.number,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "int") {
          if (!util.isInteger(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: "integer",
              received: "float",
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "number",
              inclusive: check.inclusive,
              exact: false,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (floatSafeRemainder(input.data, check.value) !== 0) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "finite") {
          if (!Number.isFinite(input.data)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_finite,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodNumber({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodNumber({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    int(message) {
      return this._addCheck({
        kind: "int",
        message: errorUtil.toString(message)
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    finite(message) {
      return this._addCheck({
        kind: "finite",
        message: errorUtil.toString(message)
      });
    }
    safe(message) {
      return this._addCheck({
        kind: "min",
        inclusive: true,
        value: Number.MIN_SAFE_INTEGER,
        message: errorUtil.toString(message)
      })._addCheck({
        kind: "max",
        inclusive: true,
        value: Number.MAX_SAFE_INTEGER,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
    get isInt() {
      return !!this._def.checks.find(
        (ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value)
      );
    }
    get isFinite() {
      let max = null, min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
          return true;
        } else if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        } else if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return Number.isFinite(min) && Number.isFinite(max);
    }
  };
  __publicField(_ZodNumber, "create", (params) => {
    return new _ZodNumber({
      checks: [],
      typeName: "ZodNumber" /* ZodNumber */,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  });
  var ZodNumber = _ZodNumber;
  var _ZodBigInt = class _ZodBigInt extends ZodType {
    constructor() {
      super(...arguments);
      __publicField(this, "min", this.gte);
      __publicField(this, "max", this.lte);
    }
    _parse(input) {
      if (this._def.coerce) {
        input.data = BigInt(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.bigint) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.bigint,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      let ctx = void 0;
      const status = new ParseStatus();
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
          if (tooSmall) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              type: "bigint",
              minimum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
          if (tooBig) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              type: "bigint",
              maximum: check.value,
              inclusive: check.inclusive,
              message: check.message
            });
            status.dirty();
          }
        } else if (check.kind === "multipleOf") {
          if (input.data % check.value !== BigInt(0)) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.not_multiple_of,
              multipleOf: check.value,
              message: check.message
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return { status: status.value, value: input.data };
    }
    gte(value, message) {
      return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
      return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
      return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
      return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
      return new _ZodBigInt({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind,
            value,
            inclusive,
            message: errorUtil.toString(message)
          }
        ]
      });
    }
    _addCheck(check) {
      return new _ZodBigInt({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    positive(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    negative(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: false,
        message: errorUtil.toString(message)
      });
    }
    nonpositive(message) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    nonnegative(message) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: true,
        message: errorUtil.toString(message)
      });
    }
    multipleOf(value, message) {
      return this._addCheck({
        kind: "multipleOf",
        value,
        message: errorUtil.toString(message)
      });
    }
    get minValue() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min;
    }
    get maxValue() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max;
    }
  };
  __publicField(_ZodBigInt, "create", (params) => {
    return new _ZodBigInt({
      checks: [],
      typeName: "ZodBigInt" /* ZodBigInt */,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params)
    });
  });
  var ZodBigInt = _ZodBigInt;
  var _ZodBoolean = class _ZodBoolean extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = Boolean(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.boolean) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.boolean,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  __publicField(_ZodBoolean, "create", (params) => {
    return new _ZodBoolean({
      typeName: "ZodBoolean" /* ZodBoolean */,
      coerce: params?.coerce || false,
      ...processCreateParams(params)
    });
  });
  var ZodBoolean = _ZodBoolean;
  var _ZodDate = class _ZodDate extends ZodType {
    _parse(input) {
      if (this._def.coerce) {
        input.data = new Date(input.data);
      }
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.date) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.date,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      if (isNaN(input.data.getTime())) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_date
        });
        return INVALID;
      }
      const status = new ParseStatus();
      let ctx = void 0;
      for (const check of this._def.checks) {
        if (check.kind === "min") {
          if (input.data.getTime() < check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              message: check.message,
              inclusive: true,
              exact: false,
              minimum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else if (check.kind === "max") {
          if (input.data.getTime() > check.value) {
            ctx = this._getOrReturnCtx(input, ctx);
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              message: check.message,
              inclusive: true,
              exact: false,
              maximum: check.value,
              type: "date"
            });
            status.dirty();
          }
        } else {
          util.assertNever(check);
        }
      }
      return {
        status: status.value,
        value: new Date(input.data.getTime())
      };
    }
    _addCheck(check) {
      return new _ZodDate({
        ...this._def,
        checks: [...this._def.checks, check]
      });
    }
    min(minDate, message) {
      return this._addCheck({
        kind: "min",
        value: minDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    max(maxDate, message) {
      return this._addCheck({
        kind: "max",
        value: maxDate.getTime(),
        message: errorUtil.toString(message)
      });
    }
    get minDate() {
      let min = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "min") {
          if (min === null || ch.value > min)
            min = ch.value;
        }
      }
      return min != null ? new Date(min) : null;
    }
    get maxDate() {
      let max = null;
      for (const ch of this._def.checks) {
        if (ch.kind === "max") {
          if (max === null || ch.value < max)
            max = ch.value;
        }
      }
      return max != null ? new Date(max) : null;
    }
  };
  __publicField(_ZodDate, "create", (params) => {
    return new _ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: "ZodDate" /* ZodDate */,
      ...processCreateParams(params)
    });
  });
  var ZodDate = _ZodDate;
  var _ZodSymbol = class _ZodSymbol extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.symbol) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.symbol,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  __publicField(_ZodSymbol, "create", (params) => {
    return new _ZodSymbol({
      typeName: "ZodSymbol" /* ZodSymbol */,
      ...processCreateParams(params)
    });
  });
  var ZodSymbol = _ZodSymbol;
  var _ZodUndefined = class _ZodUndefined extends ZodType {
    constructor() {
      super(...arguments);
      __publicField(this, "params");
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.undefined,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  __publicField(_ZodUndefined, "create", (params) => {
    return new _ZodUndefined({
      typeName: "ZodUndefined" /* ZodUndefined */,
      ...processCreateParams(params)
    });
  });
  var ZodUndefined = _ZodUndefined;
  var _ZodNull = class _ZodNull extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.null) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.null,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  __publicField(_ZodNull, "create", (params) => {
    return new _ZodNull({
      typeName: "ZodNull" /* ZodNull */,
      ...processCreateParams(params)
    });
  });
  var ZodNull = _ZodNull;
  var _ZodAny = class _ZodAny extends ZodType {
    constructor() {
      super(...arguments);
      // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
      __publicField(this, "_any", true);
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  __publicField(_ZodAny, "create", (params) => {
    return new _ZodAny({
      typeName: "ZodAny" /* ZodAny */,
      ...processCreateParams(params)
    });
  });
  var ZodAny = _ZodAny;
  var _ZodUnknown = class _ZodUnknown extends ZodType {
    constructor() {
      super(...arguments);
      // required
      __publicField(this, "_unknown", true);
    }
    _parse(input) {
      return OK(input.data);
    }
  };
  __publicField(_ZodUnknown, "create", (params) => {
    return new _ZodUnknown({
      typeName: "ZodUnknown" /* ZodUnknown */,
      ...processCreateParams(params)
    });
  });
  var ZodUnknown = _ZodUnknown;
  var _ZodNever = class _ZodNever extends ZodType {
    _parse(input) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.never,
        received: ctx.parsedType
      });
      return INVALID;
    }
  };
  __publicField(_ZodNever, "create", (params) => {
    return new _ZodNever({
      typeName: "ZodNever" /* ZodNever */,
      ...processCreateParams(params)
    });
  });
  var ZodNever = _ZodNever;
  var _ZodVoid = class _ZodVoid extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.undefined) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.void,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return OK(input.data);
    }
  };
  __publicField(_ZodVoid, "create", (params) => {
    return new _ZodVoid({
      typeName: "ZodVoid" /* ZodVoid */,
      ...processCreateParams(params)
    });
  });
  var ZodVoid = _ZodVoid;
  var _ZodArray = class _ZodArray extends ZodType {
    _parse(input) {
      const { ctx, status } = this._processInputParams(input);
      const def = this._def;
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (def.exactLength !== null) {
        const tooBig = ctx.data.length > def.exactLength.value;
        const tooSmall = ctx.data.length < def.exactLength.value;
        if (tooBig || tooSmall) {
          addIssueToContext(ctx, {
            code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
            minimum: tooSmall ? def.exactLength.value : void 0,
            maximum: tooBig ? def.exactLength.value : void 0,
            type: "array",
            inclusive: true,
            exact: true,
            message: def.exactLength.message
          });
          status.dirty();
        }
      }
      if (def.minLength !== null) {
        if (ctx.data.length < def.minLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.minLength.message
          });
          status.dirty();
        }
      }
      if (def.maxLength !== null) {
        if (ctx.data.length > def.maxLength.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxLength.value,
            type: "array",
            inclusive: true,
            exact: false,
            message: def.maxLength.message
          });
          status.dirty();
        }
      }
      if (ctx.common.async) {
        return Promise.all(
          [...ctx.data].map((item, i3) => {
            return def.type._parseAsync(
              new ParseInputLazyPath(ctx, item, ctx.path, i3)
            );
          })
        ).then((result2) => {
          return ParseStatus.mergeArray(status, result2);
        });
      }
      const result = [...ctx.data].map((item, i3) => {
        return def.type._parseSync(
          new ParseInputLazyPath(ctx, item, ctx.path, i3)
        );
      });
      return ParseStatus.mergeArray(status, result);
    }
    get element() {
      return this._def.type;
    }
    min(minLength, message) {
      return new _ZodArray({
        ...this._def,
        minLength: { value: minLength, message: errorUtil.toString(message) }
      });
    }
    max(maxLength, message) {
      return new _ZodArray({
        ...this._def,
        maxLength: { value: maxLength, message: errorUtil.toString(message) }
      });
    }
    length(len, message) {
      return new _ZodArray({
        ...this._def,
        exactLength: { value: len, message: errorUtil.toString(message) }
      });
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  __publicField(_ZodArray, "create", (schema, params) => {
    return new _ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: "ZodArray" /* ZodArray */,
      ...processCreateParams(params)
    });
  });
  var ZodArray = _ZodArray;
  function deepPartialify(schema) {
    if (schema instanceof ZodObject) {
      const newShape = {};
      for (const key in schema.shape) {
        const fieldSchema = schema.shape[key];
        newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
      }
      return new ZodObject({
        ...schema._def,
        shape: () => newShape
      });
    } else if (schema instanceof ZodArray) {
      return new ZodArray({
        ...schema._def,
        type: deepPartialify(schema.element)
      });
    } else if (schema instanceof ZodOptional) {
      return ZodOptional.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodNullable) {
      return ZodNullable.create(deepPartialify(schema.unwrap()));
    } else if (schema instanceof ZodTuple) {
      return ZodTuple.create(
        schema.items.map((item) => deepPartialify(item))
      );
    } else {
      return schema;
    }
  }
  var _ZodObject = class _ZodObject extends ZodType {
    constructor() {
      super(...arguments);
      __publicField(this, "_cached", null);
      /**
       * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
       * If you want to pass through unknown properties, use `.passthrough()` instead.
       */
      __publicField(this, "nonstrict", this.passthrough);
      // extend<
      //   Augmentation extends ZodRawShape,
      //   NewOutput extends util.flatten<{
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   }>,
      //   NewInput extends util.flatten<{
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }>
      // >(
      //   augmentation: Augmentation
      // ): ZodObject<
      //   extendShape<T, Augmentation>,
      //   UnknownKeys,
      //   Catchall,
      //   NewOutput,
      //   NewInput
      // > {
      //   return new ZodObject({
      //     ...this._def,
      //     shape: () => ({
      //       ...this._def.shape(),
      //       ...augmentation,
      //     }),
      //   }) as any;
      // }
      /**
       * @deprecated Use `.extend` instead
       *  */
      __publicField(this, "augment", this.extend);
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const shape = this._def.shape();
      const keys = util.objectKeys(shape);
      return this._cached = { shape, keys };
    }
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.object) {
        const ctx2 = this._getOrReturnCtx(input);
        addIssueToContext(ctx2, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx2.parsedType
        });
        return INVALID;
      }
      const { status, ctx } = this._processInputParams(input);
      const { shape, keys: shapeKeys } = this._getCached();
      const extraKeys = [];
      if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
        for (const key in ctx.data) {
          if (!shapeKeys.includes(key)) {
            extraKeys.push(key);
          }
        }
      }
      const pairs = [];
      for (const key of shapeKeys) {
        const keyValidator = shape[key];
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: keyValidator._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
          ),
          alwaysSet: key in ctx.data
        });
      }
      if (this._def.catchall instanceof ZodNever) {
        const unknownKeys = this._def.unknownKeys;
        if (unknownKeys === "passthrough") {
          for (const key of extraKeys) {
            pairs.push({
              key: { status: "valid", value: key },
              value: { status: "valid", value: ctx.data[key] }
            });
          }
        } else if (unknownKeys === "strict") {
          if (extraKeys.length > 0) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.unrecognized_keys,
              keys: extraKeys
            });
            status.dirty();
          }
        } else if (unknownKeys === "strip") {
        } else {
          throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        }
      } else {
        const catchall = this._def.catchall;
        for (const key of extraKeys) {
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: catchall._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, key)
              //, ctx.child(key), value, getParsedType(value)
            ),
            alwaysSet: key in ctx.data
          });
        }
      }
      if (ctx.common.async) {
        return Promise.resolve().then(async () => {
          const syncPairs = [];
          for (const pair of pairs) {
            const key = await pair.key;
            syncPairs.push({
              key,
              value: await pair.value,
              alwaysSet: pair.alwaysSet
            });
          }
          return syncPairs;
        }).then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get shape() {
      return this._def.shape();
    }
    strict(message) {
      errorUtil.errToObj;
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strict",
        ...message !== void 0 ? {
          errorMap: (issue, ctx) => {
            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
            if (issue.code === "unrecognized_keys")
              return {
                message: errorUtil.errToObj(message).message ?? defaultError
              };
            return {
              message: defaultError
            };
          }
        } : {}
      });
    }
    strip() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new _ZodObject({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    // const AugmentFactory =
    //   <Def extends ZodObjectDef>(def: Def) =>
    //   <Augmentation extends ZodRawShape>(
    //     augmentation: Augmentation
    //   ): ZodObject<
    //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
    //     Def["unknownKeys"],
    //     Def["catchall"]
    //   > => {
    //     return new ZodObject({
    //       ...def,
    //       shape: () => ({
    //         ...def.shape(),
    //         ...augmentation,
    //       }),
    //     }) as any;
    //   };
    extend(augmentation) {
      return new _ZodObject({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...augmentation
        })
      });
    }
    /**
     * Prior to zod@1.0.12 there was a bug in the
     * inferred type of merged objects. Please
     * upgrade if you are experiencing issues.
     */
    merge(merging) {
      const merged = new _ZodObject({
        unknownKeys: merging._def.unknownKeys,
        catchall: merging._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...merging._def.shape()
        }),
        typeName: "ZodObject" /* ZodObject */
      });
      return merged;
    }
    // merge<
    //   Incoming extends AnyZodObject,
    //   Augmentation extends Incoming["shape"],
    //   NewOutput extends {
    //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
    //       ? Augmentation[k]["_output"]
    //       : k extends keyof Output
    //       ? Output[k]
    //       : never;
    //   },
    //   NewInput extends {
    //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
    //       ? Augmentation[k]["_input"]
    //       : k extends keyof Input
    //       ? Input[k]
    //       : never;
    //   }
    // >(
    //   merging: Incoming
    // ): ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"],
    //   NewOutput,
    //   NewInput
    // > {
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    setKey(key, schema) {
      return this.augment({ [key]: schema });
    }
    // merge<Incoming extends AnyZodObject>(
    //   merging: Incoming
    // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
    // ZodObject<
    //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
    //   Incoming["_def"]["unknownKeys"],
    //   Incoming["_def"]["catchall"]
    // > {
    //   // const mergedShape = objectUtil.mergeShapes(
    //   //   this._def.shape(),
    //   //   merging._def.shape()
    //   // );
    //   const merged: any = new ZodObject({
    //     unknownKeys: merging._def.unknownKeys,
    //     catchall: merging._def.catchall,
    //     shape: () =>
    //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
    //     typeName: ZodFirstPartyTypeKind.ZodObject,
    //   }) as any;
    //   return merged;
    // }
    catchall(index) {
      return new _ZodObject({
        ...this._def,
        catchall: index
      });
    }
    pick(mask) {
      const shape = {};
      util.objectKeys(mask).forEach((key) => {
        if (mask[key] && this.shape[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    omit(mask) {
      const shape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (!mask[key]) {
          shape[key] = this.shape[key];
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => shape
      });
    }
    /**
     * @deprecated
     */
    deepPartial() {
      return deepPartialify(this);
    }
    partial(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        const fieldSchema = this.shape[key];
        if (mask && !mask[key]) {
          newShape[key] = fieldSchema;
        } else {
          newShape[key] = fieldSchema.optional();
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    required(mask) {
      const newShape = {};
      util.objectKeys(this.shape).forEach((key) => {
        if (mask && !mask[key]) {
          newShape[key] = this.shape[key];
        } else {
          const fieldSchema = this.shape[key];
          let newField = fieldSchema;
          while (newField instanceof ZodOptional) {
            newField = newField._def.innerType;
          }
          newShape[key] = newField;
        }
      });
      return new _ZodObject({
        ...this._def,
        shape: () => newShape
      });
    }
    keyof() {
      return createZodEnum(
        util.objectKeys(this.shape)
      );
    }
  };
  __publicField(_ZodObject, "create", (shape, params) => {
    return new _ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  });
  __publicField(_ZodObject, "strictCreate", (shape, params) => {
    return new _ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  });
  __publicField(_ZodObject, "lazycreate", (shape, params) => {
    return new _ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: "ZodObject" /* ZodObject */,
      ...processCreateParams(params)
    });
  });
  var ZodObject = _ZodObject;
  var _ZodUnion = class _ZodUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const options = this._def.options;
      function handleResults(results) {
        for (const result of results) {
          if (result.result.status === "valid") {
            return result.result;
          }
        }
        for (const result of results) {
          if (result.result.status === "dirty") {
            ctx.common.issues.push(...result.ctx.common.issues);
            return result.result;
          }
        }
        const unionErrors = results.map(
          (result) => new ZodError(result.ctx.common.issues)
        );
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return Promise.all(
          options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })
        ).then(handleResults);
      } else {
        let dirty = void 0;
        const issues = [];
        for (const option of options) {
          const childCtx = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: []
            },
            parent: null
          };
          const result = option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          });
          if (result.status === "valid") {
            return result;
          } else if (result.status === "dirty" && !dirty) {
            dirty = { result, ctx: childCtx };
          }
          if (childCtx.common.issues.length) {
            issues.push(childCtx.common.issues);
          }
        }
        if (dirty) {
          ctx.common.issues.push(...dirty.ctx.common.issues);
          return dirty.result;
        }
        const unionErrors = issues.map((issues2) => new ZodError(issues2));
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union,
          unionErrors
        });
        return INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  __publicField(_ZodUnion, "create", (types, params) => {
    return new _ZodUnion({
      options: types,
      typeName: "ZodUnion" /* ZodUnion */,
      ...processCreateParams(params)
    });
  });
  var ZodUnion = _ZodUnion;
  var getDiscriminator = (type) => {
    if (type instanceof ZodLazy) {
      return getDiscriminator(type.schema);
    } else if (type instanceof ZodEffects) {
      return getDiscriminator(type.innerType());
    } else if (type instanceof ZodLiteral) {
      return [type.value];
    } else if (type instanceof ZodEnum) {
      return type.options;
    } else if (type instanceof ZodNativeEnum) {
      return Object.keys(type.enum);
    } else if (type instanceof ZodDefault) {
      return getDiscriminator(type._def.innerType);
    } else if (type instanceof ZodUndefined) {
      return [void 0];
    } else if (type instanceof ZodNull) {
      return [null];
    } else {
      return null;
    }
  };
  var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const discriminator = this.discriminator;
      const discriminatorValue = ctx.data[discriminator];
      const option = this.optionsMap.get(discriminatorValue);
      if (!option) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [discriminator]
        });
        return INVALID;
      }
      if (ctx.common.async) {
        return option._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      } else {
        return option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    /**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */
    static create(discriminator, options, params) {
      const optionsMap = /* @__PURE__ */ new Map();
      for (const type of options) {
        const discriminatorValues = getDiscriminator(type.shape[discriminator]);
        if (!discriminatorValues) {
          throw new Error(
            `A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`
          );
        }
        for (const value of discriminatorValues) {
          if (optionsMap.has(value)) {
            throw new Error(
              `Discriminator property ${String(
                discriminator
              )} has duplicate value ${String(value)}`
            );
          }
          optionsMap.set(value, type);
        }
      }
      return new _ZodDiscriminatedUnion({
        typeName: "ZodDiscriminatedUnion" /* ZodDiscriminatedUnion */,
        discriminator,
        options,
        optionsMap,
        ...processCreateParams(params)
      });
    }
  };
  function mergeValues(a6, b6) {
    const aType = getParsedType(a6);
    const bType = getParsedType(b6);
    if (a6 === b6) {
      return { valid: true, data: a6 };
    } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
      const bKeys = util.objectKeys(b6);
      const sharedKeys = util.objectKeys(a6).filter((key) => bKeys.indexOf(key) !== -1);
      const newObj = { ...a6, ...b6 };
      for (const key of sharedKeys) {
        const sharedValue = mergeValues(a6[key], b6[key]);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newObj[key] = sharedValue.data;
      }
      return { valid: true, data: newObj };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
      if (a6.length !== b6.length) {
        return { valid: false };
      }
      const newArray = [];
      for (let index = 0; index < a6.length; index++) {
        const itemA = a6[index];
        const itemB = b6[index];
        const sharedValue = mergeValues(itemA, itemB);
        if (!sharedValue.valid) {
          return { valid: false };
        }
        newArray.push(sharedValue.data);
      }
      return { valid: true, data: newArray };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a6 === +b6) {
      return { valid: true, data: a6 };
    } else {
      return { valid: false };
    }
  }
  var _ZodIntersection = class _ZodIntersection extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const handleParsed = (parsedLeft, parsedRight) => {
        if (isAborted(parsedLeft) || isAborted(parsedRight)) {
          return INVALID;
        }
        const merged = mergeValues(parsedLeft.value, parsedRight.value);
        if (!merged.valid) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_intersection_types
          });
          return INVALID;
        }
        if (isDirty(parsedLeft) || isDirty(parsedRight)) {
          status.dirty();
        }
        return { status: status.value, value: merged.data };
      };
      if (ctx.common.async) {
        return Promise.all([
          this._def.left._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        ]).then(([left, right]) => handleParsed(left, right));
      } else {
        return handleParsed(
          this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }),
          this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          })
        );
      }
    }
  };
  __publicField(_ZodIntersection, "create", (left, right, params) => {
    return new _ZodIntersection({
      left,
      right,
      typeName: "ZodIntersection" /* ZodIntersection */,
      ...processCreateParams(params)
    });
  });
  var ZodIntersection = _ZodIntersection;
  var _ZodTuple = class _ZodTuple extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.array) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.array,
          received: ctx.parsedType
        });
        return INVALID;
      }
      if (ctx.data.length < this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        return INVALID;
      }
      const rest = this._def.rest;
      if (!rest && ctx.data.length > this._def.items.length) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: "array"
        });
        status.dirty();
      }
      const items = [...ctx.data].map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema)
          return null;
        return schema._parse(
          new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)
        );
      }).filter((x8) => !!x8);
      if (ctx.common.async) {
        return Promise.all(items).then((results) => {
          return ParseStatus.mergeArray(status, results);
        });
      } else {
        return ParseStatus.mergeArray(status, items);
      }
    }
    get items() {
      return this._def.items;
    }
    rest(rest) {
      return new _ZodTuple({
        ...this._def,
        rest
      });
    }
  };
  __publicField(_ZodTuple, "create", (schemas, params) => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new _ZodTuple({
      items: schemas,
      typeName: "ZodTuple" /* ZodTuple */,
      rest: null,
      ...processCreateParams(params)
    });
  });
  var ZodTuple = _ZodTuple;
  var ZodRecord = class _ZodRecord extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.object) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.object,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const pairs = [];
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      for (const key in ctx.data) {
        pairs.push({
          key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
          value: valueType._parse(
            new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)
          )
        });
      }
      if (ctx.common.async) {
        return ParseStatus.mergeObjectAsync(status, pairs);
      } else {
        return ParseStatus.mergeObjectSync(status, pairs);
      }
    }
    get element() {
      return this._def.valueType;
    }
    static create(first, second, third) {
      if (second instanceof ZodType) {
        return new _ZodRecord({
          keyType: first,
          valueType: second,
          typeName: "ZodRecord" /* ZodRecord */,
          ...processCreateParams(third)
        });
      }
      return new _ZodRecord({
        keyType: ZodString.create(),
        valueType: first,
        typeName: "ZodRecord" /* ZodRecord */,
        ...processCreateParams(second)
      });
    }
  };
  var _ZodMap = class _ZodMap extends ZodType {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.map) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.map,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const keyType = this._def.keyType;
      const valueType = this._def.valueType;
      const pairs = [...ctx.data.entries()].map(
        ([key, value], index) => {
          return {
            key: keyType._parse(
              new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])
            ),
            value: valueType._parse(
              new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])
            )
          };
        }
      );
      if (ctx.common.async) {
        const finalMap = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        });
      } else {
        const finalMap = /* @__PURE__ */ new Map();
        for (const pair of pairs) {
          const key = pair.key;
          const value = pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      }
    }
  };
  __publicField(_ZodMap, "create", (keyType, valueType, params) => {
    return new _ZodMap({
      valueType,
      keyType,
      typeName: "ZodMap" /* ZodMap */,
      ...processCreateParams(params)
    });
  });
  var ZodMap = _ZodMap;
  var _ZodSet = class _ZodSet extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.set) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.set,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const def = this._def;
      if (def.minSize !== null) {
        if (ctx.data.size < def.minSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: def.minSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.minSize.message
          });
          status.dirty();
        }
      }
      if (def.maxSize !== null) {
        if (ctx.data.size > def.maxSize.value) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: def.maxSize.value,
            type: "set",
            inclusive: true,
            exact: false,
            message: def.maxSize.message
          });
          status.dirty();
        }
      }
      const valueType = this._def.valueType;
      function finalizeSet(elements2) {
        const parsedSet = /* @__PURE__ */ new Set();
        for (const element of elements2) {
          if (element.status === "aborted")
            return INVALID;
          if (element.status === "dirty")
            status.dirty();
          parsedSet.add(element.value);
        }
        return { status: status.value, value: parsedSet };
      }
      const elements = [...ctx.data.values()].map(
        (item, i3) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i3))
      );
      if (ctx.common.async) {
        return Promise.all(elements).then((elements2) => finalizeSet(elements2));
      } else {
        return finalizeSet(elements);
      }
    }
    min(minSize, message) {
      return new _ZodSet({
        ...this._def,
        minSize: { value: minSize, message: errorUtil.toString(message) }
      });
    }
    max(maxSize, message) {
      return new _ZodSet({
        ...this._def,
        maxSize: { value: maxSize, message: errorUtil.toString(message) }
      });
    }
    size(size, message) {
      return this.min(size, message).max(size, message);
    }
    nonempty(message) {
      return this.min(1, message);
    }
  };
  __publicField(_ZodSet, "create", (valueType, params) => {
    return new _ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: "ZodSet" /* ZodSet */,
      ...processCreateParams(params)
    });
  });
  var ZodSet = _ZodSet;
  var ZodFunction = class _ZodFunction extends ZodType {
    constructor() {
      super(...arguments);
      __publicField(this, "validate", this.implement);
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.function) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.function,
          received: ctx.parsedType
        });
        return INVALID;
      }
      function makeArgsIssue(args, error) {
        return makeIssue({
          data: args,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            en_default
          ].filter((x8) => !!x8),
          issueData: {
            code: ZodIssueCode.invalid_arguments,
            argumentsError: error
          }
        });
      }
      function makeReturnsIssue(returns, error) {
        return makeIssue({
          data: returns,
          path: ctx.path,
          errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            en_default
          ].filter((x8) => !!x8),
          issueData: {
            code: ZodIssueCode.invalid_return_type,
            returnTypeError: error
          }
        });
      }
      const params = { errorMap: ctx.common.contextualErrorMap };
      const fn = ctx.data;
      if (this._def.returns instanceof ZodPromise) {
        const me3 = this;
        return OK(async function(...args) {
          const error = new ZodError([]);
          const parsedArgs = await me3._def.args.parseAsync(args, params).catch((e2) => {
            error.addIssue(makeArgsIssue(args, e2));
            throw error;
          });
          const result = await Reflect.apply(fn, this, parsedArgs);
          const parsedReturns = await me3._def.returns._def.type.parseAsync(result, params).catch((e2) => {
            error.addIssue(makeReturnsIssue(result, e2));
            throw error;
          });
          return parsedReturns;
        });
      } else {
        const me3 = this;
        return OK(function(...args) {
          const parsedArgs = me3._def.args.safeParse(args, params);
          if (!parsedArgs.success) {
            throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
          }
          const result = Reflect.apply(fn, this, parsedArgs.data);
          const parsedReturns = me3._def.returns.safeParse(result, params);
          if (!parsedReturns.success) {
            throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
          }
          return parsedReturns.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...items) {
      return new _ZodFunction({
        ...this._def,
        args: ZodTuple.create(items).rest(ZodUnknown.create())
      });
    }
    returns(returnType) {
      return new _ZodFunction({
        ...this._def,
        returns: returnType
      });
    }
    implement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    strictImplement(func) {
      const validatedFunc = this.parse(func);
      return validatedFunc;
    }
    static create(args, returns, params) {
      return new _ZodFunction({
        args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
        returns: returns || ZodUnknown.create(),
        typeName: "ZodFunction" /* ZodFunction */,
        ...processCreateParams(params)
      });
    }
  };
  var _ZodLazy = class _ZodLazy extends ZodType {
    get schema() {
      return this._def.getter();
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const lazySchema = this._def.getter();
      return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  };
  __publicField(_ZodLazy, "create", (getter, params) => {
    return new _ZodLazy({
      getter,
      typeName: "ZodLazy" /* ZodLazy */,
      ...processCreateParams(params)
    });
  });
  var ZodLazy = _ZodLazy;
  var _ZodLiteral = class _ZodLiteral extends ZodType {
    _parse(input) {
      if (input.data !== this._def.value) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_literal,
          expected: this._def.value
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
    get value() {
      return this._def.value;
    }
  };
  __publicField(_ZodLiteral, "create", (value, params) => {
    return new _ZodLiteral({
      value,
      typeName: "ZodLiteral" /* ZodLiteral */,
      ...processCreateParams(params)
    });
  });
  var ZodLiteral = _ZodLiteral;
  function createZodEnum(values, params) {
    return new ZodEnum({
      values,
      typeName: "ZodEnum" /* ZodEnum */,
      ...processCreateParams(params)
    });
  }
  var _ZodEnum = class _ZodEnum extends ZodType {
    _parse(input) {
      if (typeof input.data !== "string") {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (this._def.values.indexOf(input.data) === -1) {
        const ctx = this._getOrReturnCtx(input);
        const expectedValues = this._def.values;
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Values() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    get Enum() {
      const enumValues = {};
      for (const val of this._def.values) {
        enumValues[val] = val;
      }
      return enumValues;
    }
    extract(values) {
      return _ZodEnum.create(values);
    }
    exclude(values) {
      return _ZodEnum.create(
        this.options.filter((opt) => !values.includes(opt))
      );
    }
  };
  __publicField(_ZodEnum, "create", createZodEnum);
  var ZodEnum = _ZodEnum;
  var _ZodNativeEnum = class _ZodNativeEnum extends ZodType {
    _parse(input) {
      const nativeEnumValues = util.getValidEnumValues(this._def.values);
      const ctx = this._getOrReturnCtx(input);
      if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          expected: util.joinValues(expectedValues),
          received: ctx.parsedType,
          code: ZodIssueCode.invalid_type
        });
        return INVALID;
      }
      if (nativeEnumValues.indexOf(input.data) === -1) {
        const expectedValues = util.objectValues(nativeEnumValues);
        addIssueToContext(ctx, {
          received: ctx.data,
          code: ZodIssueCode.invalid_enum_value,
          options: expectedValues
        });
        return INVALID;
      }
      return OK(input.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  __publicField(_ZodNativeEnum, "create", (values, params) => {
    return new _ZodNativeEnum({
      values,
      typeName: "ZodNativeEnum" /* ZodNativeEnum */,
      ...processCreateParams(params)
    });
  });
  var ZodNativeEnum = _ZodNativeEnum;
  var _ZodPromise = class _ZodPromise extends ZodType {
    unwrap() {
      return this._def.type;
    }
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.promise,
          received: ctx.parsedType
        });
        return INVALID;
      }
      const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
      return OK(
        promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        })
      );
    }
  };
  __publicField(_ZodPromise, "create", (schema, params) => {
    return new _ZodPromise({
      type: schema,
      typeName: "ZodPromise" /* ZodPromise */,
      ...processCreateParams(params)
    });
  });
  var ZodPromise = _ZodPromise;
  var _ZodEffects = class _ZodEffects extends ZodType {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === "ZodEffects" /* ZodEffects */ ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      const effect = this._def.effect || null;
      const checkCtx = {
        addIssue: (arg) => {
          addIssueToContext(ctx, arg);
          if (arg.fatal) {
            status.abort();
          } else {
            status.dirty();
          }
        },
        get path() {
          return ctx.path;
        }
      };
      checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
      if (effect.type === "preprocess") {
        const processed = effect.transform(ctx.data, checkCtx);
        if (ctx.common.issues.length) {
          return {
            status: "dirty",
            value: ctx.data
          };
        }
        if (ctx.common.async) {
          return Promise.resolve(processed).then((processed2) => {
            return this._def.schema._parseAsync({
              data: processed2,
              path: ctx.path,
              parent: ctx
            });
          });
        } else {
          return this._def.schema._parseSync({
            data: processed,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      if (effect.type === "refinement") {
        const executeRefinement = (acc) => {
          const result = effect.refinement(acc, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(result);
          }
          if (result instanceof Promise) {
            throw new Error(
              "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
            );
          }
          return acc;
        };
        if (ctx.common.async === false) {
          const inner = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          executeRefinement(inner.value);
          return { status: status.value, value: inner.value };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
            if (inner.status === "aborted")
              return INVALID;
            if (inner.status === "dirty")
              status.dirty();
            return executeRefinement(inner.value).then(() => {
              return { status: status.value, value: inner.value };
            });
          });
        }
      }
      if (effect.type === "transform") {
        if (ctx.common.async === false) {
          const base = this._def.schema._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (!isValid(base))
            return base;
          const result = effect.transform(base.value, checkCtx);
          if (result instanceof Promise) {
            throw new Error(
              `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`
            );
          }
          return { status: status.value, value: result };
        } else {
          return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
            if (!isValid(base))
              return base;
            return Promise.resolve(effect.transform(base.value, checkCtx)).then(
              (result) => ({ status: status.value, value: result })
            );
          });
        }
      }
      util.assertNever(effect);
    }
  };
  __publicField(_ZodEffects, "create", (schema, effect, params) => {
    return new _ZodEffects({
      schema,
      typeName: "ZodEffects" /* ZodEffects */,
      effect,
      ...processCreateParams(params)
    });
  });
  __publicField(_ZodEffects, "createWithPreprocess", (preprocess, schema, params) => {
    return new _ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: "ZodEffects" /* ZodEffects */,
      ...processCreateParams(params)
    });
  });
  var ZodEffects = _ZodEffects;
  var _ZodOptional = class _ZodOptional extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.undefined) {
        return OK(void 0);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  __publicField(_ZodOptional, "create", (type, params) => {
    return new _ZodOptional({
      innerType: type,
      typeName: "ZodOptional" /* ZodOptional */,
      ...processCreateParams(params)
    });
  });
  var ZodOptional = _ZodOptional;
  var _ZodNullable = class _ZodNullable extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType === ZodParsedType.null) {
        return OK(null);
      }
      return this._def.innerType._parse(input);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  __publicField(_ZodNullable, "create", (type, params) => {
    return new _ZodNullable({
      innerType: type,
      typeName: "ZodNullable" /* ZodNullable */,
      ...processCreateParams(params)
    });
  });
  var ZodNullable = _ZodNullable;
  var _ZodDefault = class _ZodDefault extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      let data = ctx.data;
      if (ctx.parsedType === ZodParsedType.undefined) {
        data = this._def.defaultValue();
      }
      return this._def.innerType._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  __publicField(_ZodDefault, "create", (type, params) => {
    return new _ZodDefault({
      innerType: type,
      typeName: "ZodDefault" /* ZodDefault */,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default,
      ...processCreateParams(params)
    });
  });
  var ZodDefault = _ZodDefault;
  var _ZodCatch = class _ZodCatch extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const newCtx = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        }
      };
      const result = this._def.innerType._parse({
        data: newCtx.data,
        path: newCtx.path,
        parent: {
          ...newCtx
        }
      });
      if (isAsync(result)) {
        return result.then((result2) => {
          return {
            status: "valid",
            value: result2.status === "valid" ? result2.value : this._def.catchValue({
              get error() {
                return new ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        });
      } else {
        return {
          status: "valid",
          value: result.status === "valid" ? result.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      }
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  __publicField(_ZodCatch, "create", (type, params) => {
    return new _ZodCatch({
      innerType: type,
      typeName: "ZodCatch" /* ZodCatch */,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params)
    });
  });
  var ZodCatch = _ZodCatch;
  var _ZodNaN = class _ZodNaN extends ZodType {
    _parse(input) {
      const parsedType = this._getType(input);
      if (parsedType !== ZodParsedType.nan) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.nan,
          received: ctx.parsedType
        });
        return INVALID;
      }
      return { status: "valid", value: input.data };
    }
  };
  __publicField(_ZodNaN, "create", (params) => {
    return new _ZodNaN({
      typeName: "ZodNaN" /* ZodNaN */,
      ...processCreateParams(params)
    });
  });
  var ZodNaN = _ZodNaN;
  var BRAND = Symbol("zod_brand");
  var ZodBranded = class extends ZodType {
    _parse(input) {
      const { ctx } = this._processInputParams(input);
      const data = ctx.data;
      return this._def.type._parse({
        data,
        path: ctx.path,
        parent: ctx
      });
    }
    unwrap() {
      return this._def.type;
    }
  };
  var ZodPipeline = class _ZodPipeline extends ZodType {
    _parse(input) {
      const { status, ctx } = this._processInputParams(input);
      if (ctx.common.async) {
        const handleAsync = async () => {
          const inResult = await this._def.in._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return DIRTY(inResult.value);
          } else {
            return this._def.out._parseAsync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        };
        return handleAsync();
      } else {
        const inResult = this._def.in._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return {
            status: "dirty",
            value: inResult.value
          };
        } else {
          return this._def.out._parseSync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }
    }
    static create(a6, b6) {
      return new _ZodPipeline({
        in: a6,
        out: b6,
        typeName: "ZodPipeline" /* ZodPipeline */
      });
    }
  };
  var _ZodReadonly = class _ZodReadonly extends ZodType {
    _parse(input) {
      const result = this._def.innerType._parse(input);
      if (isValid(result)) {
        result.value = Object.freeze(result.value);
      }
      return result;
    }
  };
  __publicField(_ZodReadonly, "create", (type, params) => {
    return new _ZodReadonly({
      innerType: type,
      typeName: "ZodReadonly" /* ZodReadonly */,
      ...processCreateParams(params)
    });
  });
  var ZodReadonly = _ZodReadonly;
  var custom = (check, params = {}, fatal) => {
    if (check)
      return ZodAny.create().superRefine((data, ctx) => {
        if (!check(data)) {
          const p7 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
          const _fatal = p7.fatal ?? fatal ?? true;
          const p22 = typeof p7 === "string" ? { message: p7 } : p7;
          ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
        }
      });
    return ZodAny.create();
  };
  var late = {
    object: ZodObject.lazycreate
  };
  var ZodFirstPartyTypeKind = /* @__PURE__ */ ((ZodFirstPartyTypeKind2) => {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
    ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
    ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    return ZodFirstPartyTypeKind2;
  })(ZodFirstPartyTypeKind || {});
  var instanceOfType = (cls, params = {
    message: `Input not instance of ${cls.name}`
  }) => custom((data) => data instanceof cls, params);
  var stringType = ZodString.create;
  var numberType = ZodNumber.create;
  var nanType = ZodNaN.create;
  var bigIntType = ZodBigInt.create;
  var booleanType = ZodBoolean.create;
  var dateType = ZodDate.create;
  var symbolType = ZodSymbol.create;
  var undefinedType = ZodUndefined.create;
  var nullType = ZodNull.create;
  var anyType = ZodAny.create;
  var unknownType = ZodUnknown.create;
  var neverType = ZodNever.create;
  var voidType = ZodVoid.create;
  var arrayType = ZodArray.create;
  var objectType = ZodObject.create;
  var strictObjectType = ZodObject.strictCreate;
  var unionType = ZodUnion.create;
  var discriminatedUnionType = ZodDiscriminatedUnion.create;
  var intersectionType = ZodIntersection.create;
  var tupleType = ZodTuple.create;
  var recordType = ZodRecord.create;
  var mapType = ZodMap.create;
  var setType = ZodSet.create;
  var functionType = ZodFunction.create;
  var lazyType = ZodLazy.create;
  var literalType = ZodLiteral.create;
  var enumType = ZodEnum.create;
  var nativeEnumType = ZodNativeEnum.create;
  var promiseType = ZodPromise.create;
  var effectsType = ZodEffects.create;
  var optionalType = ZodOptional.create;
  var nullableType = ZodNullable.create;
  var preprocessType = ZodEffects.createWithPreprocess;
  var pipelineType = ZodPipeline.create;
  var ostring = () => stringType().optional();
  var onumber = () => numberType().optional();
  var oboolean = () => booleanType().optional();
  var coerce = {
    string: (arg) => ZodString.create({ ...arg, coerce: true }),
    number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
    boolean: (arg) => ZodBoolean.create({
      ...arg,
      coerce: true
    }),
    bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
    date: (arg) => ZodDate.create({ ...arg, coerce: true })
  };
  var NEVER = INVALID;

  // .pd/rmState/index.ts
  async function keyNames(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    globalThis.keys = {
      points: "POINTS",
      rewards: "REWARDS",
      settings: "SETTINGS",
      children: "CHILDREN",
      activeChild: "ACTIVE_CHILD"
    };
    globalThis.test = input.test || false;
  }
  async function localStorage2(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    function withCreatedDate(value, override) {
      return {
        ...value,
        created_at: override || Date.now()
      };
    }
    function _getRaw(key) {
      return window.localStorage.getItem(key);
    }
    function _setRaw(key, value) {
      window.localStorage.setItem(key, value);
    }
    function _push(key, value) {
      let currentValue = JSON.parse(_getRaw(key));
      if (currentValue === null) {
        _setRaw(key, JSON.stringify([]));
        currentValue = [];
      }
      const dateOverride = globalThis.test ? 1 : void 0;
      currentValue.push(withCreatedDate(value, dateOverride));
      _setRaw(key, JSON.stringify(currentValue));
      return value;
    }
    function _getItem(key) {
      return JSON.parse(_getRaw(key)) || [];
    }
    function _clear(key) {
      return window.localStorage.removeItem(key);
    }
    function namespaceActions(key) {
      return {
        generateId() {
          const uuid = crypto.randomUUID();
          if (globalThis.test) {
            const nextSequentialId = String(this.length() + 1);
            const testuuid = uuid.replaceAll(/\d|\w/g, "0").substring(0, uuid.length - nextSequentialId.length);
            return testuuid + nextSequentialId;
          } else {
            return uuid;
          }
        },
        push(change) {
          return _push(key, change);
        },
        all() {
          return _getItem(key) || [];
        },
        clear() {
          _clear(key);
        },
        last() {
          return this.all().at(-1);
        },
        empty() {
          return this.all().length === 0;
        },
        length() {
          return this.all().length;
        }
      };
    }
    input.state = {
      clearAll() {
        Object.entries(globalThis.keys).forEach(([table, key]) => {
          window.localStorage.removeItem(key);
        });
      },
      points: {
        ...namespaceActions(globalThis.keys.points),
        getTotalFor(id) {
          return this.all().reduce((acc, cur) => {
            if (id === cur.child.id)
              return acc + cur.points;
            return acc;
          }, 0);
        }
      },
      rewards: {
        ...namespaceActions(globalThis.keys.rewards),
        allLatest() {
          return Object.values(Object.groupBy(this.all(), (i3) => i3.id)).map((group) => group.at(-1)).filter((item) => !item.archived);
        },
        getById(id) {
          return this.allLatest().findLast((reward) => reward.id === id);
        },
        getForChild(id) {
          return this.allLatest().filter((reward) => reward.child.id === id);
        }
      },
      children: {
        ...namespaceActions(globalThis.keys.children),
        allLatest() {
          return Object.values(Object.groupBy(this.all(), (i3) => i3.id)).map((group) => group.at(-1)).filter((item) => !item.archived);
        },
        getById(id) {
          return this.allLatest().findLast((child) => child.id === id);
        }
      },
      activeChild: {
        ...namespaceActions(globalThis.keys.activeChild)
      },
      settings: {
        ...namespaceActions(globalThis.keys.settings)
      }
    };
  }
  async function denoKv(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
  }
  async function supabase2(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
  }
  var funcSequence = [keyNames, localStorage2, denoKv, supabase2];
  var rawPipe = {
    "name": "rmState",
    "camelName": "rmState",
    "steps": [
      {
        "code": 'globalThis.keys = {\n  points: "POINTS",\n  rewards: "REWARDS",\n  settings: "SETTINGS",\n  children: "CHILDREN",\n  activeChild: "ACTIVE_CHILD",\n};\nglobalThis.test = input.test || false;\n',
        "range": [
          15,
          17
        ],
        "name": "keyNames",
        "funcName": "keyNames",
        "inList": false
      },
      {
        "code": "function withCreatedDate(value, override){\n  return {\n    ...value,\n    created_at: override || Date.now()\n  }\n}\n\nfunction _getRaw(key){\n	return window.localStorage.getItem(key)\n}\nfunction _setRaw(key, value){\n	window.localStorage.setItem(key, value);\n}\n\nfunction _push(key, value) {\n  let currentValue = JSON.parse(_getRaw(key));\n  // set to empty if null\n  if (currentValue === null) {\n    _setRaw(key, JSON.stringify([]))\n    currentValue = [];\n  }\n  const dateOverride = globalThis.test ? 1 : undefined;\n  currentValue.push(withCreatedDate(value, dateOverride));\n  _setRaw(key, JSON.stringify(currentValue))\n  return value;\n}\n\nfunction _getItem(key) {\n  return JSON.parse(_getRaw(key)) || [];\n}\n\nfunction _clear(key) {\n  return window.localStorage.removeItem(key);\n}\n\nfunction namespaceActions(key){\n  return {\n    generateId(){\n      const uuid = crypto.randomUUID()\n      if(globalThis.test){\n        const nextSequentialId = String(this.length()+1)\n        const testuuid = uuid.replaceAll(/\\d|\\w/g, '0').substring(0, uuid.length - nextSequentialId.length)\n        return testuuid+nextSequentialId\n      } else {\n        return uuid\n      }\n    },\n    push(change) {\n      return _push(key, change);\n    },\n    all() {\n      return _getItem(key) || [];\n    },\n    clear(){\n        _clear(key)\n    },\n    last(){\n      return this.all().at(-1)\n    },\n    empty(){\n      return this.all().length === 0;\n    },\n    length(){\n      return this.all().length;\n    },\n  }\n}\n\ninput.state = {\n  clearAll(){\n    Object.entries(globalThis.keys).forEach(([table, key]) => {\n      window.localStorage.removeItem(key)\n    })\n  },\n  points: {\n    ...namespaceActions(globalThis.keys.points),\n    getTotalFor(id){\n      return this.all().reduce((acc, cur) => {\n        if(id === cur.child.id) return acc+cur.points;\n        return acc;\n      }, 0)\n    }\n  },\n  rewards: {\n    ...namespaceActions(globalThis.keys.rewards),\n    allLatest() {\n      return Object.values(Object.groupBy(this.all(), i => i.id))\n        .map(group => group.at(-1))\n        .filter(item => !item.archived);\n    },\n    getById(id){\n      return this.allLatest().findLast(reward => reward.id === id)\n    },\n    getForChild(id){\n      return this.allLatest().filter(reward => reward.child.id === id)\n    },\n  },  \n  children: {\n    ...namespaceActions(globalThis.keys.children),\n    allLatest() {\n      return Object.values(Object.groupBy(this.all(), i => i.id))\n        .map(group => group.at(-1))\n        .filter(item => !item.archived);\n    },\n    getById(id){\n      return this.allLatest().findLast(child => child.id === id)\n    },\n  },\n  activeChild: {\n    ...namespaceActions(globalThis.keys.activeChild)\n  },\n  settings: {\n    ...namespaceActions(globalThis.keys.settings)\n  }, \n};\n",
        "range": [
          21,
          23
        ],
        "name": "localStorage",
        "funcName": "localStorage",
        "inList": false
      },
      {
        "code": "\n",
        "range": [
          30,
          32
        ],
        "name": "Deno kv",
        "funcName": "denoKv",
        "inList": false
      },
      {
        "code": "\n",
        "range": [
          41,
          43
        ],
        "name": "Supabase",
        "funcName": "supabase",
        "inList": false
      }
    ],
    "config": {
      "state": {
        "connection": "localstorage"
      },
      "build": {},
      "export": {
        "name": "rewardme.md",
        "auto": true,
        "copy_to": "../rewardmeweb/public/rewardmecore.js"
      },
      "commands": {
        "export": "<pipe name>"
      },
      "on": {
        "export": "export",
        "start": [
          "export"
        ],
        "processed": [
          "export"
        ]
      }
    },
    "dir": "./.pd/rmState",
    "fileName": "rmState"
  };
  var pipe = Pipe(funcSequence, rawPipe);
  pipe.json = rawPipe;
  var rmState_default = pipe;

  // https://esm.sh/v135/@supabase/gotrue-js@2.62.0/denonext/gotrue-js.mjs
  function oe(o3) {
    return Math.round(Date.now() / 1e3) + o3;
  }
  function ne() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(o3) {
      let e2 = Math.random() * 16 | 0;
      return (o3 == "x" ? e2 : e2 & 3 | 8).toString(16);
    });
  }
  var g2 = () => typeof document < "u";
  var A = { tested: false, writable: false };
  var b2 = () => {
    if (!g2())
      return false;
    try {
      if (typeof globalThis.localStorage != "object")
        return false;
    } catch {
      return false;
    }
    if (A.tested)
      return A.writable;
    let o3 = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(o3, o3), globalThis.localStorage.removeItem(o3), A.tested = true, A.writable = true;
    } catch {
      A.tested = true, A.writable = false;
    }
    return A.writable;
  };
  function V(o3) {
    let e2 = {}, t3 = new URL(o3);
    if (t3.hash && t3.hash[0] === "#")
      try {
        new URLSearchParams(t3.hash.substring(1)).forEach((s2, i3) => {
          e2[i3] = s2;
        });
      } catch {
      }
    return t3.searchParams.forEach((r2, s2) => {
      e2[s2] = r2;
    }), e2;
  }
  var z = (o3) => {
    let e2;
    return o3 ? e2 = o3 : typeof fetch > "u" ? e2 = (...t3) => Promise.resolve().then(() => (init_node_fetch(), node_fetch_exports)).then(({ default: r2 }) => r2(...t3)) : e2 = fetch, (...t3) => e2(...t3);
  };
  var ae = (o3) => typeof o3 == "object" && o3 !== null && "status" in o3 && "ok" in o3 && "json" in o3 && typeof o3.json == "function";
  var k = async (o3, e2, t3) => {
    await o3.setItem(e2, JSON.stringify(t3));
  };
  var D = async (o3, e2) => {
    let t3 = await o3.getItem(e2);
    if (!t3)
      return null;
    try {
      return JSON.parse(t3);
    } catch {
      return t3;
    }
  };
  var J = async (o3, e2) => {
    await o3.removeItem(e2);
  };
  function Te(o3) {
    let e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", t3 = "", r2, s2, i3, n5, a6, l8, u4, h6 = 0;
    for (o3 = o3.replace("-", "+").replace("_", "/"); h6 < o3.length; )
      n5 = e2.indexOf(o3.charAt(h6++)), a6 = e2.indexOf(o3.charAt(h6++)), l8 = e2.indexOf(o3.charAt(h6++)), u4 = e2.indexOf(o3.charAt(h6++)), r2 = n5 << 2 | a6 >> 4, s2 = (a6 & 15) << 4 | l8 >> 2, i3 = (l8 & 3) << 6 | u4, t3 = t3 + String.fromCharCode(r2), l8 != 64 && s2 != 0 && (t3 = t3 + String.fromCharCode(s2)), u4 != 64 && i3 != 0 && (t3 = t3 + String.fromCharCode(i3));
    return t3;
  }
  var N = class o {
    constructor() {
      this.promise = new o.promiseConstructor((e2, t3) => {
        this.resolve = e2, this.reject = t3;
      });
    }
  };
  N.promiseConstructor = Promise;
  function Q(o3) {
    let e2 = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i, t3 = o3.split(".");
    if (t3.length !== 3)
      throw new Error("JWT is not valid: not a JWT structure");
    if (!e2.test(t3[1]))
      throw new Error("JWT is not valid: payload is not in base64url format");
    let r2 = t3[1];
    return JSON.parse(Te(r2));
  }
  async function le(o3) {
    return await new Promise((e2) => {
      setTimeout(() => e2(null), o3);
    });
  }
  function ce(o3, e2) {
    return new Promise((r2, s2) => {
      (async () => {
        for (let i3 = 0; i3 < 1 / 0; i3++)
          try {
            let n5 = await o3(i3);
            if (!e2(i3, null, n5)) {
              r2(n5);
              return;
            }
          } catch (n5) {
            if (!e2(i3, n5)) {
              s2(n5);
              return;
            }
          }
      })();
    });
  }
  function xe(o3) {
    return ("0" + o3.toString(16)).substr(-2);
  }
  function E() {
    let e2 = new Uint32Array(56);
    if (typeof crypto > "u") {
      let t3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r2 = t3.length, s2 = "";
      for (let i3 = 0; i3 < 56; i3++)
        s2 += t3.charAt(Math.floor(Math.random() * r2));
      return s2;
    }
    return crypto.getRandomValues(e2), Array.from(e2, xe).join("");
  }
  async function Ae(o3) {
    let t3 = new TextEncoder().encode(o3), r2 = await crypto.subtle.digest("SHA-256", t3), s2 = new Uint8Array(r2);
    return Array.from(s2).map((i3) => String.fromCharCode(i3)).join("");
  }
  function Ee(o3) {
    return btoa(o3).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  async function I(o3) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
      return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), o3;
    let t3 = await Ae(o3);
    return Ee(t3);
  }
  var q = class extends Error {
    constructor(e2, t3) {
      super(e2), this.__isAuthError = true, this.name = "AuthError", this.status = t3;
    }
  };
  function c2(o3) {
    return typeof o3 == "object" && o3 !== null && "__isAuthError" in o3;
  }
  var W = class extends q {
    constructor(e2, t3) {
      super(e2, t3), this.name = "AuthApiError", this.status = t3;
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  };
  function ue(o3) {
    return c2(o3) && o3.name === "AuthApiError";
  }
  var L = class extends q {
    constructor(e2, t3) {
      super(e2), this.name = "AuthUnknownError", this.originalError = t3;
    }
  };
  var v = class extends q {
    constructor(e2, t3, r2) {
      super(e2), this.name = t3, this.status = r2;
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  };
  var m2 = class extends v {
    constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400);
    }
  };
  var $ = class extends v {
    constructor() {
      super("Auth session or user missing", "AuthInvalidTokenResponseError", 500);
    }
  };
  var R2 = class extends v {
    constructor(e2) {
      super(e2, "AuthInvalidCredentialsError", 400);
    }
  };
  var O = class extends v {
    constructor(e2, t3 = null) {
      super(e2, "AuthImplicitGrantRedirectError", 500), this.details = null, this.details = t3;
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status, details: this.details };
    }
  };
  var F = class extends v {
    constructor(e2, t3 = null) {
      super(e2, "AuthPKCEGrantCodeExchangeError", 500), this.details = null, this.details = t3;
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status, details: this.details };
    }
  };
  var j = class extends v {
    constructor(e2, t3) {
      super(e2, "AuthRetryableFetchError", t3);
    }
  };
  function Y(o3) {
    return c2(o3) && o3.name === "AuthRetryableFetchError";
  }
  var B = class extends v {
    constructor(e2, t3, r2) {
      super(e2, "AuthWeakPasswordError", t3), this.reasons = r2;
    }
  };
  var Ie = function(o3, e2) {
    var t3 = {};
    for (var r2 in o3)
      Object.prototype.hasOwnProperty.call(o3, r2) && e2.indexOf(r2) < 0 && (t3[r2] = o3[r2]);
    if (o3 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s2 = 0, r2 = Object.getOwnPropertySymbols(o3); s2 < r2.length; s2++)
        e2.indexOf(r2[s2]) < 0 && Object.prototype.propertyIsEnumerable.call(o3, r2[s2]) && (t3[r2[s2]] = o3[r2[s2]]);
    return t3;
  };
  var U = (o3) => o3.msg || o3.message || o3.error_description || o3.error || JSON.stringify(o3);
  var Re = [502, 503, 504];
  async function he(o3) {
    if (!ae(o3))
      throw new j(U(o3), 0);
    if (Re.includes(o3.status))
      throw new j(U(o3), o3.status);
    let e2;
    try {
      e2 = await o3.json();
    } catch (t3) {
      throw new L(U(t3), t3);
    }
    throw typeof e2 == "object" && e2 && typeof e2.weak_password == "object" && e2.weak_password && Array.isArray(e2.weak_password.reasons) && e2.weak_password.reasons.length && e2.weak_password.reasons.reduce((t3, r2) => t3 && typeof r2 == "string", true) ? new B(U(e2), o3.status, e2.weak_password.reasons) : new W(U(e2), o3.status || 500);
  }
  var Oe = (o3, e2, t3, r2) => {
    let s2 = { method: o3, headers: e2?.headers || {} };
    return o3 === "GET" ? s2 : (s2.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e2?.headers), s2.body = JSON.stringify(r2), Object.assign(Object.assign({}, s2), t3));
  };
  async function d2(o3, e2, t3, r2) {
    var s2;
    let i3 = Object.assign({}, r2?.headers);
    r2?.jwt && (i3.Authorization = `Bearer ${r2.jwt}`);
    let n5 = (s2 = r2?.query) !== null && s2 !== void 0 ? s2 : {};
    r2?.redirectTo && (n5.redirect_to = r2.redirectTo);
    let a6 = Object.keys(n5).length ? "?" + new URLSearchParams(n5).toString() : "", l8 = await Pe(o3, e2, t3 + a6, { headers: i3, noResolveJson: r2?.noResolveJson }, {}, r2?.body);
    return r2?.xform ? r2?.xform(l8) : { data: Object.assign({}, l8), error: null };
  }
  async function Pe(o3, e2, t3, r2, s2, i3) {
    let n5 = Oe(e2, r2, s2, i3), a6;
    try {
      a6 = await o3(t3, n5);
    } catch (l8) {
      throw console.error(l8), new j(U(l8), 0);
    }
    if (a6.ok || await he(a6), r2?.noResolveJson)
      return a6;
    try {
      return await a6.json();
    } catch (l8) {
      await he(l8);
    }
  }
  function S(o3) {
    var e2;
    let t3 = null;
    Ce(o3) && (t3 = Object.assign({}, o3), o3.expires_at || (t3.expires_at = oe(o3.expires_in)));
    let r2 = (e2 = o3.user) !== null && e2 !== void 0 ? e2 : o3;
    return { data: { session: t3, user: r2 }, error: null };
  }
  function Z(o3) {
    let e2 = S(o3);
    return !e2.error && o3.weak_password && typeof o3.weak_password == "object" && Array.isArray(o3.weak_password.reasons) && o3.weak_password.reasons.length && o3.weak_password.message && typeof o3.weak_password.message == "string" && o3.weak_password.reasons.reduce((t3, r2) => t3 && typeof r2 == "string", true) && (e2.data.weak_password = o3.weak_password), e2;
  }
  function y(o3) {
    var e2;
    return { data: { user: (e2 = o3.user) !== null && e2 !== void 0 ? e2 : o3 }, error: null };
  }
  function de(o3) {
    return { data: o3, error: null };
  }
  function fe(o3) {
    let { action_link: e2, email_otp: t3, hashed_token: r2, redirect_to: s2, verification_type: i3 } = o3, n5 = Ie(o3, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a6 = { action_link: e2, email_otp: t3, hashed_token: r2, redirect_to: s2, verification_type: i3 }, l8 = Object.assign({}, n5);
    return { data: { properties: a6, user: l8 }, error: null };
  }
  function _e(o3) {
    return o3;
  }
  function Ce(o3) {
    return o3.access_token && o3.refresh_token && o3.expires_in;
  }
  var Le = function(o3, e2) {
    var t3 = {};
    for (var r2 in o3)
      Object.prototype.hasOwnProperty.call(o3, r2) && e2.indexOf(r2) < 0 && (t3[r2] = o3[r2]);
    if (o3 != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s2 = 0, r2 = Object.getOwnPropertySymbols(o3); s2 < r2.length; s2++)
        e2.indexOf(r2[s2]) < 0 && Object.prototype.propertyIsEnumerable.call(o3, r2[s2]) && (t3[r2[s2]] = o3[r2[s2]]);
    return t3;
  };
  var T = class {
    constructor({ url: e2 = "", headers: t3 = {}, fetch: r2 }) {
      this.url = e2, this.headers = t3, this.fetch = z(r2), this.mfa = { listFactors: this._listFactors.bind(this), deleteFactor: this._deleteFactor.bind(this) };
    }
    async signOut(e2, t3 = "global") {
      try {
        return await d2(this.fetch, "POST", `${this.url}/logout?scope=${t3}`, { headers: this.headers, jwt: e2, noResolveJson: true }), { data: null, error: null };
      } catch (r2) {
        if (c2(r2))
          return { data: null, error: r2 };
        throw r2;
      }
    }
    async inviteUserByEmail(e2, t3 = {}) {
      try {
        return await d2(this.fetch, "POST", `${this.url}/invite`, { body: { email: e2, data: t3.data }, headers: this.headers, redirectTo: t3.redirectTo, xform: y });
      } catch (r2) {
        if (c2(r2))
          return { data: { user: null }, error: r2 };
        throw r2;
      }
    }
    async generateLink(e2) {
      try {
        let { options: t3 } = e2, r2 = Le(e2, ["options"]), s2 = Object.assign(Object.assign({}, r2), t3);
        return "newEmail" in r2 && (s2.new_email = r2?.newEmail, delete s2.newEmail), await d2(this.fetch, "POST", `${this.url}/admin/generate_link`, { body: s2, headers: this.headers, xform: fe, redirectTo: t3?.redirectTo });
      } catch (t3) {
        if (c2(t3))
          return { data: { properties: null, user: null }, error: t3 };
        throw t3;
      }
    }
    async createUser(e2) {
      try {
        return await d2(this.fetch, "POST", `${this.url}/admin/users`, { body: e2, headers: this.headers, xform: y });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null }, error: t3 };
        throw t3;
      }
    }
    async listUsers(e2) {
      var t3, r2, s2, i3, n5, a6, l8;
      try {
        let u4 = { nextPage: null, lastPage: 0, total: 0 }, h6 = await d2(this.fetch, "GET", `${this.url}/admin/users`, { headers: this.headers, noResolveJson: true, query: { page: (r2 = (t3 = e2?.page) === null || t3 === void 0 ? void 0 : t3.toString()) !== null && r2 !== void 0 ? r2 : "", per_page: (i3 = (s2 = e2?.perPage) === null || s2 === void 0 ? void 0 : s2.toString()) !== null && i3 !== void 0 ? i3 : "" }, xform: _e });
        if (h6.error)
          throw h6.error;
        let _8 = await h6.json(), f8 = (n5 = h6.headers.get("x-total-count")) !== null && n5 !== void 0 ? n5 : 0, w9 = (l8 = (a6 = h6.headers.get("link")) === null || a6 === void 0 ? void 0 : a6.split(",")) !== null && l8 !== void 0 ? l8 : [];
        return w9.length > 0 && (w9.forEach((p7) => {
          let x8 = parseInt(p7.split(";")[0].split("=")[1].substring(0, 1)), M3 = JSON.parse(p7.split(";")[1].split("=")[1]);
          u4[`${M3}Page`] = x8;
        }), u4.total = parseInt(f8)), { data: Object.assign(Object.assign({}, _8), u4), error: null };
      } catch (u4) {
        if (c2(u4))
          return { data: { users: [] }, error: u4 };
        throw u4;
      }
    }
    async getUserById(e2) {
      try {
        return await d2(this.fetch, "GET", `${this.url}/admin/users/${e2}`, { headers: this.headers, xform: y });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null }, error: t3 };
        throw t3;
      }
    }
    async updateUserById(e2, t3) {
      try {
        return await d2(this.fetch, "PUT", `${this.url}/admin/users/${e2}`, { body: t3, headers: this.headers, xform: y });
      } catch (r2) {
        if (c2(r2))
          return { data: { user: null }, error: r2 };
        throw r2;
      }
    }
    async deleteUser(e2, t3 = false) {
      try {
        return await d2(this.fetch, "DELETE", `${this.url}/admin/users/${e2}`, { headers: this.headers, body: { should_soft_delete: t3 }, xform: y });
      } catch (r2) {
        if (c2(r2))
          return { data: { user: null }, error: r2 };
        throw r2;
      }
    }
    async _listFactors(e2) {
      try {
        let { data: t3, error: r2 } = await d2(this.fetch, "GET", `${this.url}/admin/users/${e2.userId}/factors`, { headers: this.headers, xform: (s2) => ({ data: { factors: s2 }, error: null }) });
        return { data: t3, error: r2 };
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
    async _deleteFactor(e2) {
      try {
        return { data: await d2(this.fetch, "DELETE", `${this.url}/admin/users/${e2.userId}/factors/${e2.id}`, { headers: this.headers }), error: null };
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
  };
  var H = "2.62.0";
  var ge = "http://localhost:9999";
  var we = "supabase.auth.token";
  var pe = { "X-Client-Info": `gotrue-js/${H}` };
  var ee = 10;
  var ye = { getItem: (o3) => b2() ? globalThis.localStorage.getItem(o3) : null, setItem: (o3, e2) => {
    b2() && globalThis.localStorage.setItem(o3, e2);
  }, removeItem: (o3) => {
    b2() && globalThis.localStorage.removeItem(o3);
  } };
  function te(o3 = {}) {
    return { getItem: (e2) => o3[e2] || null, setItem: (e2, t3) => {
      o3[e2] = t3;
    }, removeItem: (e2) => {
      delete o3[e2];
    } };
  }
  function ve() {
    if (typeof globalThis != "object")
      try {
        Object.defineProperty(Object.prototype, "__magic__", { get: function() {
          return this;
        }, configurable: true }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
      } catch {
        typeof self < "u" && (self.globalThis = self);
      }
  }
  var P = { debug: !!(globalThis && b2() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true") };
  var K = class extends Error {
    constructor(e2) {
      super(e2), this.isAcquireTimeout = true;
    }
  };
  var X = class extends K {
  };
  async function re(o3, e2, t3) {
    P.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", o3, e2);
    let r2 = new globalThis.AbortController();
    return e2 > 0 && setTimeout(() => {
      r2.abort(), P.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", o3);
    }, e2), await globalThis.navigator.locks.request(o3, e2 === 0 ? { mode: "exclusive", ifAvailable: true } : { mode: "exclusive", signal: r2.signal }, async (s2) => {
      if (s2) {
        P.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", o3, s2.name);
        try {
          return await t3();
        } finally {
          P.debug && console.log("@supabase/gotrue-js: navigatorLock: released", o3, s2.name);
        }
      } else {
        if (e2 === 0)
          throw P.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", o3), new X(`Acquiring an exclusive Navigator LockManager lock "${o3}" immediately failed`);
        if (P.debug)
          try {
            let i3 = await globalThis.navigator.locks.query();
            console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(i3, null, "  "));
          } catch (i3) {
            console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i3);
          }
        return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await t3();
      }
    });
  }
  ve();
  var $e = { url: ge, storageKey: we, autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, headers: pe, flowType: "implicit", debug: false };
  var G = 30 * 1e3;
  var me = 3;
  async function be(o3, e2, t3) {
    return await t3();
  }
  var C = class o2 {
    constructor(e2) {
      var t3, r2;
      this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = true, this.lockAcquired = false, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = o2.nextInstanceID, o2.nextInstanceID += 1, this.instanceID > 0 && g2() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
      let s2 = Object.assign(Object.assign({}, $e), e2);
      if (this.logDebugMessages = !!s2.debug, typeof s2.debug == "function" && (this.logger = s2.debug), this.persistSession = s2.persistSession, this.storageKey = s2.storageKey, this.autoRefreshToken = s2.autoRefreshToken, this.admin = new T({ url: s2.url, headers: s2.headers, fetch: s2.fetch }), this.url = s2.url, this.headers = s2.headers, this.fetch = z(s2.fetch), this.lock = s2.lock || be, this.detectSessionInUrl = s2.detectSessionInUrl, this.flowType = s2.flowType, s2.lock ? this.lock = s2.lock : g2() && (!((t3 = globalThis?.navigator) === null || t3 === void 0) && t3.locks) ? this.lock = re : this.lock = be, this.mfa = { verify: this._verify.bind(this), enroll: this._enroll.bind(this), unenroll: this._unenroll.bind(this), challenge: this._challenge.bind(this), listFactors: this._listFactors.bind(this), challengeAndVerify: this._challengeAndVerify.bind(this), getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this) }, this.persistSession ? s2.storage ? this.storage = s2.storage : b2() ? this.storage = ye : (this.memoryStorage = {}, this.storage = te(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = te(this.memoryStorage)), g2() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
        try {
          this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
        } catch (i3) {
          console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", i3);
        }
        (r2 = this.broadcastChannel) === null || r2 === void 0 || r2.addEventListener("message", async (i3) => {
          this._debug("received broadcast notification from other tab or client", i3), await this._notifyAllSubscribers(i3.data.event, i3.data.session, false);
        });
      }
      this.initialize();
    }
    _debug(...e2) {
      return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${H}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e2), this;
    }
    async initialize() {
      return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
    }
    async _initialize() {
      try {
        let e2 = g2() ? await this._isPKCEFlow() : false;
        if (this._debug("#_initialize()", "begin", "is PKCE flow", e2), e2 || this.detectSessionInUrl && this._isImplicitGrantFlow()) {
          let { data: t3, error: r2 } = await this._getSessionFromURL(e2);
          if (r2)
            return this._debug("#_initialize()", "error detecting session from URL", r2), r2?.message === "Identity is already linked" || r2?.message === "Identity is already linked to another user" ? { error: r2 } : (await this._removeSession(), { error: r2 });
          let { session: s2, redirectType: i3 } = t3;
          return this._debug("#_initialize()", "detected session in URL", s2, "redirect type", i3), await this._saveSession(s2), setTimeout(async () => {
            i3 === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", s2) : await this._notifyAllSubscribers("SIGNED_IN", s2);
          }, 0), { error: null };
        }
        return await this._recoverAndRefresh(), { error: null };
      } catch (e2) {
        return c2(e2) ? { error: e2 } : { error: new L("Unexpected error during initialization", e2) };
      } finally {
        await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
      }
    }
    async signUp(e2) {
      var t3, r2, s2;
      try {
        await this._removeSession();
        let i3;
        if ("email" in e2) {
          let { email: h6, password: _8, options: f8 } = e2, w9 = null, p7 = null;
          if (this.flowType === "pkce") {
            let x8 = E();
            await k(this.storage, `${this.storageKey}-code-verifier`, x8), w9 = await I(x8), p7 = x8 === w9 ? "plain" : "s256";
          }
          i3 = await d2(this.fetch, "POST", `${this.url}/signup`, { headers: this.headers, redirectTo: f8?.emailRedirectTo, body: { email: h6, password: _8, data: (t3 = f8?.data) !== null && t3 !== void 0 ? t3 : {}, gotrue_meta_security: { captcha_token: f8?.captchaToken }, code_challenge: w9, code_challenge_method: p7 }, xform: S });
        } else if ("phone" in e2) {
          let { phone: h6, password: _8, options: f8 } = e2;
          i3 = await d2(this.fetch, "POST", `${this.url}/signup`, { headers: this.headers, body: { phone: h6, password: _8, data: (r2 = f8?.data) !== null && r2 !== void 0 ? r2 : {}, channel: (s2 = f8?.channel) !== null && s2 !== void 0 ? s2 : "sms", gotrue_meta_security: { captcha_token: f8?.captchaToken } }, xform: S });
        } else
          throw new R2("You must provide either an email or phone number and a password");
        let { data: n5, error: a6 } = i3;
        if (a6 || !n5)
          return { data: { user: null, session: null }, error: a6 };
        let l8 = n5.session, u4 = n5.user;
        return n5.session && (await this._saveSession(n5.session), await this._notifyAllSubscribers("SIGNED_IN", l8)), { data: { user: u4, session: l8 }, error: null };
      } catch (i3) {
        if (c2(i3))
          return { data: { user: null, session: null }, error: i3 };
        throw i3;
      }
    }
    async signInWithPassword(e2) {
      try {
        await this._removeSession();
        let t3;
        if ("email" in e2) {
          let { email: i3, password: n5, options: a6 } = e2;
          t3 = await d2(this.fetch, "POST", `${this.url}/token?grant_type=password`, { headers: this.headers, body: { email: i3, password: n5, gotrue_meta_security: { captcha_token: a6?.captchaToken } }, xform: Z });
        } else if ("phone" in e2) {
          let { phone: i3, password: n5, options: a6 } = e2;
          t3 = await d2(this.fetch, "POST", `${this.url}/token?grant_type=password`, { headers: this.headers, body: { phone: i3, password: n5, gotrue_meta_security: { captcha_token: a6?.captchaToken } }, xform: Z });
        } else
          throw new R2("You must provide either an email or phone number and a password");
        let { data: r2, error: s2 } = t3;
        return s2 ? { data: { user: null, session: null }, error: s2 } : !r2 || !r2.session || !r2.user ? { data: { user: null, session: null }, error: new $() } : (r2.session && (await this._saveSession(r2.session), await this._notifyAllSubscribers("SIGNED_IN", r2.session)), { data: Object.assign({ user: r2.user, session: r2.session }, r2.weak_password ? { weakPassword: r2.weak_password } : null), error: s2 });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null, session: null }, error: t3 };
        throw t3;
      }
    }
    async signInWithOAuth(e2) {
      var t3, r2, s2, i3;
      return await this._removeSession(), await this._handleProviderSignIn(e2.provider, { redirectTo: (t3 = e2.options) === null || t3 === void 0 ? void 0 : t3.redirectTo, scopes: (r2 = e2.options) === null || r2 === void 0 ? void 0 : r2.scopes, queryParams: (s2 = e2.options) === null || s2 === void 0 ? void 0 : s2.queryParams, skipBrowserRedirect: (i3 = e2.options) === null || i3 === void 0 ? void 0 : i3.skipBrowserRedirect });
    }
    async exchangeCodeForSession(e2) {
      return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e2));
    }
    async _exchangeCodeForSession(e2) {
      let t3 = await D(this.storage, `${this.storageKey}-code-verifier`), [r2, s2] = (t3 ?? "").split("/"), { data: i3, error: n5 } = await d2(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, { headers: this.headers, body: { auth_code: e2, code_verifier: r2 }, xform: S });
      return await J(this.storage, `${this.storageKey}-code-verifier`), n5 ? { data: { user: null, session: null, redirectType: null }, error: n5 } : !i3 || !i3.session || !i3.user ? { data: { user: null, session: null, redirectType: null }, error: new $() } : (i3.session && (await this._saveSession(i3.session), await this._notifyAllSubscribers("SIGNED_IN", i3.session)), { data: Object.assign(Object.assign({}, i3), { redirectType: s2 ?? null }), error: n5 });
    }
    async signInWithIdToken(e2) {
      await this._removeSession();
      try {
        let { options: t3, provider: r2, token: s2, access_token: i3, nonce: n5 } = e2, a6 = await d2(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, { headers: this.headers, body: { provider: r2, id_token: s2, access_token: i3, nonce: n5, gotrue_meta_security: { captcha_token: t3?.captchaToken } }, xform: S }), { data: l8, error: u4 } = a6;
        return u4 ? { data: { user: null, session: null }, error: u4 } : !l8 || !l8.session || !l8.user ? { data: { user: null, session: null }, error: new $() } : (l8.session && (await this._saveSession(l8.session), await this._notifyAllSubscribers("SIGNED_IN", l8.session)), { data: l8, error: u4 });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null, session: null }, error: t3 };
        throw t3;
      }
    }
    async signInWithOtp(e2) {
      var t3, r2, s2, i3, n5;
      try {
        if (await this._removeSession(), "email" in e2) {
          let { email: a6, options: l8 } = e2, u4 = null, h6 = null;
          if (this.flowType === "pkce") {
            let f8 = E();
            await k(this.storage, `${this.storageKey}-code-verifier`, f8), u4 = await I(f8), h6 = f8 === u4 ? "plain" : "s256";
          }
          let { error: _8 } = await d2(this.fetch, "POST", `${this.url}/otp`, { headers: this.headers, body: { email: a6, data: (t3 = l8?.data) !== null && t3 !== void 0 ? t3 : {}, create_user: (r2 = l8?.shouldCreateUser) !== null && r2 !== void 0 ? r2 : true, gotrue_meta_security: { captcha_token: l8?.captchaToken }, code_challenge: u4, code_challenge_method: h6 }, redirectTo: l8?.emailRedirectTo });
          return { data: { user: null, session: null }, error: _8 };
        }
        if ("phone" in e2) {
          let { phone: a6, options: l8 } = e2, { data: u4, error: h6 } = await d2(this.fetch, "POST", `${this.url}/otp`, { headers: this.headers, body: { phone: a6, data: (s2 = l8?.data) !== null && s2 !== void 0 ? s2 : {}, create_user: (i3 = l8?.shouldCreateUser) !== null && i3 !== void 0 ? i3 : true, gotrue_meta_security: { captcha_token: l8?.captchaToken }, channel: (n5 = l8?.channel) !== null && n5 !== void 0 ? n5 : "sms" } });
          return { data: { user: null, session: null, messageId: u4?.message_id }, error: h6 };
        }
        throw new R2("You must provide either an email or phone number.");
      } catch (a6) {
        if (c2(a6))
          return { data: { user: null, session: null }, error: a6 };
        throw a6;
      }
    }
    async verifyOtp(e2) {
      var t3, r2;
      try {
        e2.type !== "email_change" && e2.type !== "phone_change" && await this._removeSession();
        let s2, i3;
        "options" in e2 && (s2 = (t3 = e2.options) === null || t3 === void 0 ? void 0 : t3.redirectTo, i3 = (r2 = e2.options) === null || r2 === void 0 ? void 0 : r2.captchaToken);
        let { data: n5, error: a6 } = await d2(this.fetch, "POST", `${this.url}/verify`, { headers: this.headers, body: Object.assign(Object.assign({}, e2), { gotrue_meta_security: { captcha_token: i3 } }), redirectTo: s2, xform: S });
        if (a6)
          throw a6;
        if (!n5)
          throw new Error("An error occurred on token verification.");
        let l8 = n5.session, u4 = n5.user;
        return l8?.access_token && (await this._saveSession(l8), await this._notifyAllSubscribers("SIGNED_IN", l8)), { data: { user: u4, session: l8 }, error: null };
      } catch (s2) {
        if (c2(s2))
          return { data: { user: null, session: null }, error: s2 };
        throw s2;
      }
    }
    async signInWithSSO(e2) {
      var t3, r2, s2;
      try {
        await this._removeSession();
        let i3 = null, n5 = null;
        if (this.flowType === "pkce") {
          let a6 = E();
          await k(this.storage, `${this.storageKey}-code-verifier`, a6), i3 = await I(a6), n5 = a6 === i3 ? "plain" : "s256";
        }
        return await d2(this.fetch, "POST", `${this.url}/sso`, { body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e2 ? { provider_id: e2.providerId } : null), "domain" in e2 ? { domain: e2.domain } : null), { redirect_to: (r2 = (t3 = e2.options) === null || t3 === void 0 ? void 0 : t3.redirectTo) !== null && r2 !== void 0 ? r2 : void 0 }), !((s2 = e2?.options) === null || s2 === void 0) && s2.captchaToken ? { gotrue_meta_security: { captcha_token: e2.options.captchaToken } } : null), { skip_http_redirect: true, code_challenge: i3, code_challenge_method: n5 }), headers: this.headers, xform: de });
      } catch (i3) {
        if (c2(i3))
          return { data: null, error: i3 };
        throw i3;
      }
    }
    async reauthenticate() {
      return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
    }
    async _reauthenticate() {
      try {
        return await this._useSession(async (e2) => {
          let { data: { session: t3 }, error: r2 } = e2;
          if (r2)
            throw r2;
          if (!t3)
            throw new m2();
          let { error: s2 } = await d2(this.fetch, "GET", `${this.url}/reauthenticate`, { headers: this.headers, jwt: t3.access_token });
          return { data: { user: null, session: null }, error: s2 };
        });
      } catch (e2) {
        if (c2(e2))
          return { data: { user: null, session: null }, error: e2 };
        throw e2;
      }
    }
    async resend(e2) {
      try {
        e2.type != "email_change" && e2.type != "phone_change" && await this._removeSession();
        let t3 = `${this.url}/resend`;
        if ("email" in e2) {
          let { email: r2, type: s2, options: i3 } = e2, { error: n5 } = await d2(this.fetch, "POST", t3, { headers: this.headers, body: { email: r2, type: s2, gotrue_meta_security: { captcha_token: i3?.captchaToken } }, redirectTo: i3?.emailRedirectTo });
          return { data: { user: null, session: null }, error: n5 };
        } else if ("phone" in e2) {
          let { phone: r2, type: s2, options: i3 } = e2, { data: n5, error: a6 } = await d2(this.fetch, "POST", t3, { headers: this.headers, body: { phone: r2, type: s2, gotrue_meta_security: { captcha_token: i3?.captchaToken } } });
          return { data: { user: null, session: null, messageId: n5?.message_id }, error: a6 };
        }
        throw new R2("You must provide either an email or phone number and a type");
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null, session: null }, error: t3 };
        throw t3;
      }
    }
    async getSession() {
      return await this.initializePromise, this._acquireLock(-1, async () => this._useSession(async (e2) => e2));
    }
    async _acquireLock(e2, t3) {
      this._debug("#_acquireLock", "begin", e2);
      try {
        if (this.lockAcquired) {
          let r2 = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), s2 = (async () => (await r2, await t3()))();
          return this.pendingInLock.push((async () => {
            try {
              await s2;
            } catch {
            }
          })()), s2;
        }
        return await this.lock(`lock:${this.storageKey}`, e2, async () => {
          this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
          try {
            this.lockAcquired = true;
            let r2 = t3();
            for (this.pendingInLock.push((async () => {
              try {
                await r2;
              } catch {
              }
            })()), await r2; this.pendingInLock.length; ) {
              let s2 = [...this.pendingInLock];
              await Promise.all(s2), this.pendingInLock.splice(0, s2.length);
            }
            return await r2;
          } finally {
            this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = false;
          }
        });
      } finally {
        this._debug("#_acquireLock", "end");
      }
    }
    async _useSession(e2) {
      this._debug("#_useSession", "begin");
      try {
        let t3 = await this.__loadSession();
        return await e2(t3);
      } finally {
        this._debug("#_useSession", "end");
      }
    }
    async __loadSession() {
      this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
      try {
        let e2 = null, t3 = await D(this.storage, this.storageKey);
        if (this._debug("#getSession()", "session from storage", t3), t3 !== null && (this._isValidSession(t3) ? e2 = t3 : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e2)
          return { data: { session: null }, error: null };
        let r2 = e2.expires_at ? e2.expires_at <= Date.now() / 1e3 : false;
        if (this._debug("#__loadSession()", `session has${r2 ? "" : " not"} expired`, "expires_at", e2.expires_at), !r2)
          return { data: { session: e2 }, error: null };
        let { session: s2, error: i3 } = await this._callRefreshToken(e2.refresh_token);
        return i3 ? { data: { session: null }, error: i3 } : { data: { session: s2 }, error: null };
      } finally {
        this._debug("#__loadSession()", "end");
      }
    }
    async getUser(e2) {
      return e2 ? await this._getUser(e2) : (await this.initializePromise, this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e2) {
      try {
        return e2 ? await d2(this.fetch, "GET", `${this.url}/user`, { headers: this.headers, jwt: e2, xform: y }) : await this._useSession(async (t3) => {
          var r2, s2;
          let { data: i3, error: n5 } = t3;
          if (n5)
            throw n5;
          return await d2(this.fetch, "GET", `${this.url}/user`, { headers: this.headers, jwt: (s2 = (r2 = i3.session) === null || r2 === void 0 ? void 0 : r2.access_token) !== null && s2 !== void 0 ? s2 : void 0, xform: y });
        });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null }, error: t3 };
        throw t3;
      }
    }
    async updateUser(e2, t3 = {}) {
      return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e2, t3));
    }
    async _updateUser(e2, t3 = {}) {
      try {
        return await this._useSession(async (r2) => {
          let { data: s2, error: i3 } = r2;
          if (i3)
            throw i3;
          if (!s2.session)
            throw new m2();
          let n5 = s2.session, a6 = null, l8 = null;
          if (this.flowType === "pkce" && e2.email != null) {
            let _8 = E();
            await k(this.storage, `${this.storageKey}-code-verifier`, _8), a6 = await I(_8), l8 = _8 === a6 ? "plain" : "s256";
          }
          let { data: u4, error: h6 } = await d2(this.fetch, "PUT", `${this.url}/user`, { headers: this.headers, redirectTo: t3?.emailRedirectTo, body: Object.assign(Object.assign({}, e2), { code_challenge: a6, code_challenge_method: l8 }), jwt: n5.access_token, xform: y });
          if (h6)
            throw h6;
          return n5.user = u4.user, await this._saveSession(n5), await this._notifyAllSubscribers("USER_UPDATED", n5), { data: { user: n5.user }, error: null };
        });
      } catch (r2) {
        if (c2(r2))
          return { data: { user: null }, error: r2 };
        throw r2;
      }
    }
    _decodeJWT(e2) {
      return Q(e2);
    }
    async setSession(e2) {
      return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e2));
    }
    async _setSession(e2) {
      try {
        if (!e2.access_token || !e2.refresh_token)
          throw new m2();
        let t3 = Date.now() / 1e3, r2 = t3, s2 = true, i3 = null, n5 = Q(e2.access_token);
        if (n5.exp && (r2 = n5.exp, s2 = r2 <= t3), s2) {
          let { session: a6, error: l8 } = await this._callRefreshToken(e2.refresh_token);
          if (l8)
            return { data: { user: null, session: null }, error: l8 };
          if (!a6)
            return { data: { user: null, session: null }, error: null };
          i3 = a6;
        } else {
          let { data: a6, error: l8 } = await this._getUser(e2.access_token);
          if (l8)
            throw l8;
          i3 = { access_token: e2.access_token, refresh_token: e2.refresh_token, user: a6.user, token_type: "bearer", expires_in: r2 - t3, expires_at: r2 }, await this._saveSession(i3), await this._notifyAllSubscribers("SIGNED_IN", i3);
        }
        return { data: { user: i3.user, session: i3 }, error: null };
      } catch (t3) {
        if (c2(t3))
          return { data: { session: null, user: null }, error: t3 };
        throw t3;
      }
    }
    async refreshSession(e2) {
      return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e2));
    }
    async _refreshSession(e2) {
      try {
        return await this._useSession(async (t3) => {
          var r2;
          if (!e2) {
            let { data: n5, error: a6 } = t3;
            if (a6)
              throw a6;
            e2 = (r2 = n5.session) !== null && r2 !== void 0 ? r2 : void 0;
          }
          if (!e2?.refresh_token)
            throw new m2();
          let { session: s2, error: i3 } = await this._callRefreshToken(e2.refresh_token);
          return i3 ? { data: { user: null, session: null }, error: i3 } : s2 ? { data: { user: s2.user, session: s2 }, error: null } : { data: { user: null, session: null }, error: null };
        });
      } catch (t3) {
        if (c2(t3))
          return { data: { user: null, session: null }, error: t3 };
        throw t3;
      }
    }
    async _getSessionFromURL(e2) {
      try {
        if (!g2())
          throw new O("No browser detected.");
        if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
          throw new O("Not a valid implicit grant flow url.");
        if (this.flowType == "pkce" && !e2)
          throw new F("Not a valid PKCE flow url.");
        let t3 = V(window.location.href);
        if (e2) {
          if (!t3.code)
            throw new F("No code detected.");
          let { data: Se, error: se } = await this._exchangeCodeForSession(t3.code);
          if (se)
            throw se;
          let ie = new URL(window.location.href);
          return ie.searchParams.delete("code"), window.history.replaceState(window.history.state, "", ie.toString()), { data: { session: Se.session, redirectType: null }, error: null };
        }
        if (t3.error || t3.error_description || t3.error_code)
          throw new O(t3.error_description || "Error in URL with unspecified error_description", { error: t3.error || "unspecified_error", code: t3.error_code || "unspecified_code" });
        let { provider_token: r2, provider_refresh_token: s2, access_token: i3, refresh_token: n5, expires_in: a6, expires_at: l8, token_type: u4 } = t3;
        if (!i3 || !a6 || !n5 || !u4)
          throw new O("No session defined in URL");
        let h6 = Math.round(Date.now() / 1e3), _8 = parseInt(a6), f8 = h6 + _8;
        l8 && (f8 = parseInt(l8));
        let w9 = f8 - h6;
        w9 * 1e3 <= G && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w9}s, should have been closer to ${_8}s`);
        let p7 = f8 - _8;
        h6 - p7 >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p7, f8, h6) : h6 - p7 < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew", p7, f8, h6);
        let { data: x8, error: M3 } = await this._getUser(i3);
        if (M3)
          throw M3;
        let ke2 = { provider_token: r2, provider_refresh_token: s2, access_token: i3, expires_in: _8, expires_at: f8, refresh_token: n5, token_type: u4, user: x8.user };
        return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: ke2, redirectType: t3.type }, error: null };
      } catch (t3) {
        if (c2(t3))
          return { data: { session: null, redirectType: null }, error: t3 };
        throw t3;
      }
    }
    _isImplicitGrantFlow() {
      let e2 = V(window.location.href);
      return !!(g2() && (e2.access_token || e2.error_description));
    }
    async _isPKCEFlow() {
      let e2 = V(window.location.href), t3 = await D(this.storage, `${this.storageKey}-code-verifier`);
      return !!(e2.code && t3);
    }
    async signOut(e2 = { scope: "global" }) {
      return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e2));
    }
    async _signOut({ scope: e2 } = { scope: "global" }) {
      return await this._useSession(async (t3) => {
        var r2;
        let { data: s2, error: i3 } = t3;
        if (i3)
          return { error: i3 };
        let n5 = (r2 = s2.session) === null || r2 === void 0 ? void 0 : r2.access_token;
        if (n5) {
          let { error: a6 } = await this.admin.signOut(n5, e2);
          if (a6 && !(ue(a6) && (a6.status === 404 || a6.status === 401)))
            return { error: a6 };
        }
        return e2 !== "others" && (await this._removeSession(), await J(this.storage, `${this.storageKey}-code-verifier`), await this._notifyAllSubscribers("SIGNED_OUT", null)), { error: null };
      });
    }
    onAuthStateChange(e2) {
      let t3 = ne(), r2 = { id: t3, callback: e2, unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", t3), this.stateChangeEmitters.delete(t3);
      } };
      return this._debug("#onAuthStateChange()", "registered callback with id", t3), this.stateChangeEmitters.set(t3, r2), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
        this._emitInitialSession(t3);
      })))(), { data: { subscription: r2 } };
    }
    async _emitInitialSession(e2) {
      return await this._useSession(async (t3) => {
        var r2, s2;
        try {
          let { data: { session: i3 }, error: n5 } = t3;
          if (n5)
            throw n5;
          await ((r2 = this.stateChangeEmitters.get(e2)) === null || r2 === void 0 ? void 0 : r2.callback("INITIAL_SESSION", i3)), this._debug("INITIAL_SESSION", "callback id", e2, "session", i3);
        } catch (i3) {
          await ((s2 = this.stateChangeEmitters.get(e2)) === null || s2 === void 0 ? void 0 : s2.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e2, "error", i3), console.error(i3);
        }
      });
    }
    async resetPasswordForEmail(e2, t3 = {}) {
      let r2 = null, s2 = null;
      if (this.flowType === "pkce") {
        let i3 = E();
        await k(this.storage, `${this.storageKey}-code-verifier`, `${i3}/PASSWORD_RECOVERY`), r2 = await I(i3), s2 = i3 === r2 ? "plain" : "s256";
      }
      try {
        return await d2(this.fetch, "POST", `${this.url}/recover`, { body: { email: e2, code_challenge: r2, code_challenge_method: s2, gotrue_meta_security: { captcha_token: t3.captchaToken } }, headers: this.headers, redirectTo: t3.redirectTo });
      } catch (i3) {
        if (c2(i3))
          return { data: null, error: i3 };
        throw i3;
      }
    }
    async getUserIdentities() {
      var e2;
      try {
        let { data: t3, error: r2 } = await this.getUser();
        if (r2)
          throw r2;
        return { data: { identities: (e2 = t3.user.identities) !== null && e2 !== void 0 ? e2 : [] }, error: null };
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
    async linkIdentity(e2) {
      var t3;
      try {
        let { data: r2, error: s2 } = await this._useSession(async (i3) => {
          var n5, a6, l8, u4, h6;
          let { data: _8, error: f8 } = i3;
          if (f8)
            throw f8;
          let w9 = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e2.provider, { redirectTo: (n5 = e2.options) === null || n5 === void 0 ? void 0 : n5.redirectTo, scopes: (a6 = e2.options) === null || a6 === void 0 ? void 0 : a6.scopes, queryParams: (l8 = e2.options) === null || l8 === void 0 ? void 0 : l8.queryParams, skipBrowserRedirect: true });
          return await d2(this.fetch, "GET", w9, { headers: this.headers, jwt: (h6 = (u4 = _8.session) === null || u4 === void 0 ? void 0 : u4.access_token) !== null && h6 !== void 0 ? h6 : void 0 });
        });
        if (s2)
          throw s2;
        return g2() && !(!((t3 = e2.options) === null || t3 === void 0) && t3.skipBrowserRedirect) && window.location.assign(r2?.url), { data: { provider: e2.provider, url: r2?.url }, error: null };
      } catch (r2) {
        if (c2(r2))
          return { data: { provider: e2.provider, url: null }, error: r2 };
        throw r2;
      }
    }
    async unlinkIdentity(e2) {
      try {
        return await this._useSession(async (t3) => {
          var r2, s2;
          let { data: i3, error: n5 } = t3;
          if (n5)
            throw n5;
          return await d2(this.fetch, "DELETE", `${this.url}/user/identities/${e2.identity_id}`, { headers: this.headers, jwt: (s2 = (r2 = i3.session) === null || r2 === void 0 ? void 0 : r2.access_token) !== null && s2 !== void 0 ? s2 : void 0 });
        });
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
    async _refreshAccessToken(e2) {
      let t3 = `#_refreshAccessToken(${e2.substring(0, 5)}...)`;
      this._debug(t3, "begin");
      try {
        let r2 = Date.now();
        return await ce(async (s2) => (await le(s2 * 200), this._debug(t3, "refreshing attempt", s2), await d2(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, { body: { refresh_token: e2 }, headers: this.headers, xform: S })), (s2, i3, n5) => n5 && n5.error && Y(n5.error) && Date.now() + (s2 + 1) * 200 - r2 < G);
      } catch (r2) {
        if (this._debug(t3, "error", r2), c2(r2))
          return { data: { session: null, user: null }, error: r2 };
        throw r2;
      } finally {
        this._debug(t3, "end");
      }
    }
    _isValidSession(e2) {
      return typeof e2 == "object" && e2 !== null && "access_token" in e2 && "refresh_token" in e2 && "expires_at" in e2;
    }
    async _handleProviderSignIn(e2, t3) {
      let r2 = await this._getUrlForProvider(`${this.url}/authorize`, e2, { redirectTo: t3.redirectTo, scopes: t3.scopes, queryParams: t3.queryParams });
      return this._debug("#_handleProviderSignIn()", "provider", e2, "options", t3, "url", r2), g2() && !t3.skipBrowserRedirect && window.location.assign(r2), { data: { provider: e2, url: r2 }, error: null };
    }
    async _recoverAndRefresh() {
      var e2;
      let t3 = "#_recoverAndRefresh()";
      this._debug(t3, "begin");
      try {
        let r2 = await D(this.storage, this.storageKey);
        if (this._debug(t3, "session from storage", r2), !this._isValidSession(r2)) {
          this._debug(t3, "session is not valid"), r2 !== null && await this._removeSession();
          return;
        }
        let s2 = Math.round(Date.now() / 1e3), i3 = ((e2 = r2.expires_at) !== null && e2 !== void 0 ? e2 : 1 / 0) < s2 + ee;
        if (this._debug(t3, `session has${i3 ? "" : " not"} expired with margin of ${ee}s`), i3) {
          if (this.autoRefreshToken && r2.refresh_token) {
            let { error: n5 } = await this._callRefreshToken(r2.refresh_token);
            n5 && (console.error(n5), Y(n5) || (this._debug(t3, "refresh failed with a non-retryable error, removing the session", n5), await this._removeSession()));
          }
        } else
          await this._notifyAllSubscribers("SIGNED_IN", r2);
      } catch (r2) {
        this._debug(t3, "error", r2), console.error(r2);
        return;
      } finally {
        this._debug(t3, "end");
      }
    }
    async _callRefreshToken(e2) {
      var t3, r2;
      if (!e2)
        throw new m2();
      if (this.refreshingDeferred)
        return this.refreshingDeferred.promise;
      let s2 = `#_callRefreshToken(${e2.substring(0, 5)}...)`;
      this._debug(s2, "begin");
      try {
        this.refreshingDeferred = new N();
        let { data: i3, error: n5 } = await this._refreshAccessToken(e2);
        if (n5)
          throw n5;
        if (!i3.session)
          throw new m2();
        await this._saveSession(i3.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i3.session);
        let a6 = { session: i3.session, error: null };
        return this.refreshingDeferred.resolve(a6), a6;
      } catch (i3) {
        if (this._debug(s2, "error", i3), c2(i3)) {
          let n5 = { session: null, error: i3 };
          return Y(i3) || (await this._removeSession(), await this._notifyAllSubscribers("SIGNED_OUT", null)), (t3 = this.refreshingDeferred) === null || t3 === void 0 || t3.resolve(n5), n5;
        }
        throw (r2 = this.refreshingDeferred) === null || r2 === void 0 || r2.reject(i3), i3;
      } finally {
        this.refreshingDeferred = null, this._debug(s2, "end");
      }
    }
    async _notifyAllSubscribers(e2, t3, r2 = true) {
      let s2 = `#_notifyAllSubscribers(${e2})`;
      this._debug(s2, "begin", t3, `broadcast = ${r2}`);
      try {
        this.broadcastChannel && r2 && this.broadcastChannel.postMessage({ event: e2, session: t3 });
        let i3 = [], n5 = Array.from(this.stateChangeEmitters.values()).map(async (a6) => {
          try {
            await a6.callback(e2, t3);
          } catch (l8) {
            i3.push(l8);
          }
        });
        if (await Promise.all(n5), i3.length > 0) {
          for (let a6 = 0; a6 < i3.length; a6 += 1)
            console.error(i3[a6]);
          throw i3[0];
        }
      } finally {
        this._debug(s2, "end");
      }
    }
    async _saveSession(e2) {
      this._debug("#_saveSession()", e2), await k(this.storage, this.storageKey, e2);
    }
    async _removeSession() {
      this._debug("#_removeSession()"), await J(this.storage, this.storageKey);
    }
    _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      let e2 = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
        e2 && g2() && window?.removeEventListener && window.removeEventListener("visibilitychange", e2);
      } catch (t3) {
        console.error("removing visibilitychange callback failed", t3);
      }
    }
    async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      let e2 = setInterval(() => this._autoRefreshTokenTick(), G);
      this.autoRefreshTicker = e2, e2 && typeof e2 == "object" && typeof e2.unref == "function" ? e2.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e2), setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
    }
    async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      let e2 = this.autoRefreshTicker;
      this.autoRefreshTicker = null, e2 && clearInterval(e2);
    }
    async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
        await this._acquireLock(0, async () => {
          try {
            let e2 = Date.now();
            try {
              return await this._useSession(async (t3) => {
                let { data: { session: r2 } } = t3;
                if (!r2 || !r2.refresh_token || !r2.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                let s2 = Math.floor((r2.expires_at * 1e3 - e2) / G);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${s2} ticks, a tick lasts ${G}ms, refresh threshold is ${me} ticks`), s2 <= me && await this._callRefreshToken(r2.refresh_token);
              });
            } catch (t3) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", t3);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e2) {
        if (e2.isAcquireTimeout || e2 instanceof K)
          this._debug("auto refresh token tick lock not available");
        else
          throw e2;
      }
    }
    async _handleVisibilityChange() {
      if (this._debug("#_handleVisibilityChange()"), !g2() || !window?.addEventListener)
        return this.autoRefreshToken && this.startAutoRefresh(), false;
      try {
        this.visibilityChangedCallback = async () => await this._onVisibilityChanged(false), window?.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(true);
      } catch (e2) {
        console.error("_handleVisibilityChange", e2);
      }
    }
    async _onVisibilityChanged(e2) {
      let t3 = `#_onVisibilityChanged(${e2})`;
      this._debug(t3, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e2 || (await this.initializePromise, await this._acquireLock(-1, async () => {
        if (document.visibilityState !== "visible") {
          this._debug(t3, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
          return;
        }
        await this._recoverAndRefresh();
      }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
    }
    async _getUrlForProvider(e2, t3, r2) {
      let s2 = [`provider=${encodeURIComponent(t3)}`];
      if (r2?.redirectTo && s2.push(`redirect_to=${encodeURIComponent(r2.redirectTo)}`), r2?.scopes && s2.push(`scopes=${encodeURIComponent(r2.scopes)}`), this.flowType === "pkce") {
        let i3 = E();
        await k(this.storage, `${this.storageKey}-code-verifier`, i3);
        let n5 = await I(i3), a6 = i3 === n5 ? "plain" : "s256";
        this._debug("PKCE", "code verifier", `${i3.substring(0, 5)}...`, "code challenge", n5, "method", a6);
        let l8 = new URLSearchParams({ code_challenge: `${encodeURIComponent(n5)}`, code_challenge_method: `${encodeURIComponent(a6)}` });
        s2.push(l8.toString());
      }
      if (r2?.queryParams) {
        let i3 = new URLSearchParams(r2.queryParams);
        s2.push(i3.toString());
      }
      return r2?.skipBrowserRedirect && s2.push(`skip_http_redirect=${r2.skipBrowserRedirect}`), `${e2}?${s2.join("&")}`;
    }
    async _unenroll(e2) {
      try {
        return await this._useSession(async (t3) => {
          var r2;
          let { data: s2, error: i3 } = t3;
          return i3 ? { data: null, error: i3 } : await d2(this.fetch, "DELETE", `${this.url}/factors/${e2.factorId}`, { headers: this.headers, jwt: (r2 = s2?.session) === null || r2 === void 0 ? void 0 : r2.access_token });
        });
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
    async _enroll(e2) {
      try {
        return await this._useSession(async (t3) => {
          var r2, s2;
          let { data: i3, error: n5 } = t3;
          if (n5)
            return { data: null, error: n5 };
          let { data: a6, error: l8 } = await d2(this.fetch, "POST", `${this.url}/factors`, { body: { friendly_name: e2.friendlyName, factor_type: e2.factorType, issuer: e2.issuer }, headers: this.headers, jwt: (r2 = i3?.session) === null || r2 === void 0 ? void 0 : r2.access_token });
          return l8 ? { data: null, error: l8 } : (!((s2 = a6?.totp) === null || s2 === void 0) && s2.qr_code && (a6.totp.qr_code = `data:image/svg+xml;utf-8,${a6.totp.qr_code}`), { data: a6, error: null });
        });
      } catch (t3) {
        if (c2(t3))
          return { data: null, error: t3 };
        throw t3;
      }
    }
    async _verify(e2) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t3) => {
            var r2;
            let { data: s2, error: i3 } = t3;
            if (i3)
              return { data: null, error: i3 };
            let { data: n5, error: a6 } = await d2(this.fetch, "POST", `${this.url}/factors/${e2.factorId}/verify`, { body: { code: e2.code, challenge_id: e2.challengeId }, headers: this.headers, jwt: (r2 = s2?.session) === null || r2 === void 0 ? void 0 : r2.access_token });
            return a6 ? { data: null, error: a6 } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + n5.expires_in }, n5)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", n5), { data: n5, error: a6 });
          });
        } catch (t3) {
          if (c2(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    async _challenge(e2) {
      return this._acquireLock(-1, async () => {
        try {
          return await this._useSession(async (t3) => {
            var r2;
            let { data: s2, error: i3 } = t3;
            return i3 ? { data: null, error: i3 } : await d2(this.fetch, "POST", `${this.url}/factors/${e2.factorId}/challenge`, { headers: this.headers, jwt: (r2 = s2?.session) === null || r2 === void 0 ? void 0 : r2.access_token });
          });
        } catch (t3) {
          if (c2(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    async _challengeAndVerify(e2) {
      let { data: t3, error: r2 } = await this._challenge({ factorId: e2.factorId });
      return r2 ? { data: null, error: r2 } : await this._verify({ factorId: e2.factorId, challengeId: t3.id, code: e2.code });
    }
    async _listFactors() {
      let { data: { user: e2 }, error: t3 } = await this.getUser();
      if (t3)
        return { data: null, error: t3 };
      let r2 = e2?.factors || [], s2 = r2.filter((i3) => i3.factor_type === "totp" && i3.status === "verified");
      return { data: { all: r2, totp: s2 }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(-1, async () => await this._useSession(async (e2) => {
        var t3, r2;
        let { data: { session: s2 }, error: i3 } = e2;
        if (i3)
          return { data: null, error: i3 };
        if (!s2)
          return { data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] }, error: null };
        let n5 = this._decodeJWT(s2.access_token), a6 = null;
        n5.aal && (a6 = n5.aal);
        let l8 = a6;
        ((r2 = (t3 = s2.user.factors) === null || t3 === void 0 ? void 0 : t3.filter((_8) => _8.status === "verified")) !== null && r2 !== void 0 ? r2 : []).length > 0 && (l8 = "aal2");
        let h6 = n5.amr || [];
        return { data: { currentLevel: a6, nextLevel: l8, currentAuthenticationMethods: h6 }, error: null };
      }));
    }
  };
  C.nextInstanceID = 0;

  // https://esm.sh/v135/@supabase/functions-js@2.1.5/denonext/functions-js.mjs
  var F3 = (i3) => {
    let t3;
    return i3 ? t3 = i3 : typeof fetch > "u" ? t3 = (...e2) => Promise.resolve().then(() => (init_node_fetch2(), node_fetch_exports2)).then(({ default: r2 }) => r2(...e2)) : t3 = fetch, (...e2) => t3(...e2);
  };
  var p2 = class extends Error {
    constructor(t3, e2 = "FunctionsError", r2) {
      super(t3), this.name = e2, this.context = r2;
    }
  };
  var h3 = class extends p2 {
    constructor(t3) {
      super("Failed to send a request to the Edge Function", "FunctionsFetchError", t3);
    }
  };
  var y2 = class extends p2 {
    constructor(t3) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", t3);
    }
  };
  var x2 = class extends p2 {
    constructor(t3) {
      super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t3);
    }
  };
  var w3 = function(i3, t3, e2, r2) {
    function a6(c8) {
      return c8 instanceof e2 ? c8 : new e2(function(n5) {
        n5(c8);
      });
    }
    return new (e2 || (e2 = Promise))(function(c8, n5) {
      function f8(s2) {
        try {
          o3(r2.next(s2));
        } catch (u4) {
          n5(u4);
        }
      }
      function l8(s2) {
        try {
          o3(r2.throw(s2));
        } catch (u4) {
          n5(u4);
        }
      }
      function o3(s2) {
        s2.done ? c8(s2.value) : a6(s2.value).then(f8, l8);
      }
      o3((r2 = r2.apply(i3, t3 || [])).next());
    });
  };
  var m4 = class {
    constructor(t3, { headers: e2 = {}, customFetch: r2 } = {}) {
      this.url = t3, this.headers = e2, this.fetch = F3(r2);
    }
    setAuth(t3) {
      this.headers.Authorization = `Bearer ${t3}`;
    }
    invoke(t3, e2 = {}) {
      var r2;
      return w3(this, void 0, void 0, function* () {
        try {
          let { headers: a6, method: c8, body: n5 } = e2, f8 = {}, l8;
          n5 && (a6 && !Object.prototype.hasOwnProperty.call(a6, "Content-Type") || !a6) && (typeof Blob < "u" && n5 instanceof Blob || n5 instanceof ArrayBuffer ? (f8["Content-Type"] = "application/octet-stream", l8 = n5) : typeof n5 == "string" ? (f8["Content-Type"] = "text/plain", l8 = n5) : typeof FormData < "u" && n5 instanceof FormData ? l8 = n5 : (f8["Content-Type"] = "application/json", l8 = JSON.stringify(n5)));
          let o3 = yield this.fetch(`${this.url}/${t3}`, { method: c8 || "POST", headers: Object.assign(Object.assign(Object.assign({}, f8), this.headers), a6), body: l8 }).catch((E6) => {
            throw new h3(E6);
          }), s2 = o3.headers.get("x-relay-error");
          if (s2 && s2 === "true")
            throw new y2(o3);
          if (!o3.ok)
            throw new x2(o3);
          let u4 = ((r2 = o3.headers.get("Content-Type")) !== null && r2 !== void 0 ? r2 : "text/plain").split(";")[0].trim(), d5;
          return u4 === "application/json" ? d5 = yield o3.json() : u4 === "application/octet-stream" ? d5 = yield o3.blob() : u4 === "multipart/form-data" ? d5 = yield o3.formData() : d5 = yield o3.text(), { data: d5, error: null };
        } catch (a6) {
          return { data: null, error: a6 };
        }
      });
    }
  };

  // https://esm.sh/v135/@supabase/realtime-js@2.9.3/denonext/realtime-js.mjs
  var H3 = "2.9.3";
  var z2 = { "X-Client-Info": `realtime-js/${H3}` };
  var F6 = "1.0.0";
  var A3 = 1e4;
  var W3 = 1e3;
  var L2;
  (function(n5) {
    n5[n5.connecting = 0] = "connecting", n5[n5.open = 1] = "open", n5[n5.closing = 2] = "closing", n5[n5.closed = 3] = "closed";
  })(L2 || (L2 = {}));
  var _5;
  (function(n5) {
    n5.closed = "closed", n5.errored = "errored", n5.joined = "joined", n5.joining = "joining", n5.leaving = "leaving";
  })(_5 || (_5 = {}));
  var R5;
  (function(n5) {
    n5.close = "phx_close", n5.error = "phx_error", n5.join = "phx_join", n5.reply = "phx_reply", n5.leave = "phx_leave", n5.access_token = "access_token";
  })(R5 || (R5 = {}));
  var S3;
  (function(n5) {
    n5.websocket = "websocket";
  })(S3 || (S3 = {}));
  var E4;
  (function(n5) {
    n5.Connecting = "connecting", n5.Open = "open", n5.Closing = "closing", n5.Closed = "closed";
  })(E4 || (E4 = {}));
  var O2 = class {
    constructor(e2, t3) {
      this.callback = e2, this.timerCalc = t3, this.timer = void 0, this.tries = 0, this.callback = e2, this.timerCalc = t3;
    }
    reset() {
      this.tries = 0, clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer), this.timer = setTimeout(() => {
        this.tries = this.tries + 1, this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var x4 = class {
    constructor() {
      this.HEADER_LENGTH = 1;
    }
    decode(e2, t3) {
      return e2.constructor === ArrayBuffer ? t3(this._binaryDecode(e2)) : t3(typeof e2 == "string" ? JSON.parse(e2) : {});
    }
    _binaryDecode(e2) {
      let t3 = new DataView(e2), i3 = new TextDecoder();
      return this._decodeBroadcast(e2, t3, i3);
    }
    _decodeBroadcast(e2, t3, i3) {
      let s2 = t3.getUint8(1), r2 = t3.getUint8(2), o3 = this.HEADER_LENGTH + 2, c8 = i3.decode(e2.slice(o3, o3 + s2));
      o3 = o3 + s2;
      let h6 = i3.decode(e2.slice(o3, o3 + r2));
      o3 = o3 + r2;
      let a6 = JSON.parse(i3.decode(e2.slice(o3, e2.byteLength)));
      return { ref: null, topic: c8, event: h6, payload: a6 };
    }
  };
  var T4 = class {
    constructor(e2, t3, i3 = {}, s2 = A3) {
      this.channel = e2, this.event = t3, this.payload = i3, this.timeout = s2, this.sent = false, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
    }
    resend(e2) {
      this.timeout = e2, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = false, this.send();
    }
    send() {
      this._hasReceived("timeout") || (this.startTimeout(), this.sent = true, this.channel.socket.push({ topic: this.channel.topic, event: this.event, payload: this.payload, ref: this.ref, join_ref: this.channel._joinRef() }));
    }
    updatePayload(e2) {
      this.payload = Object.assign(Object.assign({}, this.payload), e2);
    }
    receive(e2, t3) {
      var i3;
      return this._hasReceived(e2) && t3((i3 = this.receivedResp) === null || i3 === void 0 ? void 0 : i3.response), this.recHooks.push({ status: e2, callback: t3 }), this;
    }
    startTimeout() {
      if (this.timeoutTimer)
        return;
      this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
      let e2 = (t3) => {
        this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = t3, this._matchReceive(t3);
      };
      this.channel._on(this.refEvent, {}, e2), this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    trigger(e2, t3) {
      this.refEvent && this.channel._trigger(this.refEvent, { status: e2, response: t3 });
    }
    destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
      clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
    }
    _matchReceive({ status: e2, response: t3 }) {
      this.recHooks.filter((i3) => i3.status === e2).forEach((i3) => i3.callback(t3));
    }
    _hasReceived(e2) {
      return this.receivedResp && this.receivedResp.status === e2;
    }
  };
  var U2;
  (function(n5) {
    n5.SYNC = "sync", n5.JOIN = "join", n5.LEAVE = "leave";
  })(U2 || (U2 = {}));
  var k4 = class n3 {
    constructor(e2, t3) {
      this.channel = e2, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = { onJoin: () => {
      }, onLeave: () => {
      }, onSync: () => {
      } };
      let i3 = t3?.events || { state: "presence_state", diff: "presence_diff" };
      this.channel._on(i3.state, {}, (s2) => {
        let { onJoin: r2, onLeave: o3, onSync: c8 } = this.caller;
        this.joinRef = this.channel._joinRef(), this.state = n3.syncState(this.state, s2, r2, o3), this.pendingDiffs.forEach((h6) => {
          this.state = n3.syncDiff(this.state, h6, r2, o3);
        }), this.pendingDiffs = [], c8();
      }), this.channel._on(i3.diff, {}, (s2) => {
        let { onJoin: r2, onLeave: o3, onSync: c8 } = this.caller;
        this.inPendingSyncState() ? this.pendingDiffs.push(s2) : (this.state = n3.syncDiff(this.state, s2, r2, o3), c8());
      }), this.onJoin((s2, r2, o3) => {
        this.channel._trigger("presence", { event: "join", key: s2, currentPresences: r2, newPresences: o3 });
      }), this.onLeave((s2, r2, o3) => {
        this.channel._trigger("presence", { event: "leave", key: s2, currentPresences: r2, leftPresences: o3 });
      }), this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
    }
    static syncState(e2, t3, i3, s2) {
      let r2 = this.cloneDeep(e2), o3 = this.transformState(t3), c8 = {}, h6 = {};
      return this.map(r2, (a6, m8) => {
        o3[a6] || (h6[a6] = m8);
      }), this.map(o3, (a6, m8) => {
        let p7 = r2[a6];
        if (p7) {
          let g8 = m8.map((u4) => u4.presence_ref), d5 = p7.map((u4) => u4.presence_ref), f8 = m8.filter((u4) => d5.indexOf(u4.presence_ref) < 0), v7 = p7.filter((u4) => g8.indexOf(u4.presence_ref) < 0);
          f8.length > 0 && (c8[a6] = f8), v7.length > 0 && (h6[a6] = v7);
        } else
          c8[a6] = m8;
      }), this.syncDiff(r2, { joins: c8, leaves: h6 }, i3, s2);
    }
    static syncDiff(e2, t3, i3, s2) {
      let { joins: r2, leaves: o3 } = { joins: this.transformState(t3.joins), leaves: this.transformState(t3.leaves) };
      return i3 || (i3 = () => {
      }), s2 || (s2 = () => {
      }), this.map(r2, (c8, h6) => {
        var a6;
        let m8 = (a6 = e2[c8]) !== null && a6 !== void 0 ? a6 : [];
        if (e2[c8] = this.cloneDeep(h6), m8.length > 0) {
          let p7 = e2[c8].map((d5) => d5.presence_ref), g8 = m8.filter((d5) => p7.indexOf(d5.presence_ref) < 0);
          e2[c8].unshift(...g8);
        }
        i3(c8, m8, h6);
      }), this.map(o3, (c8, h6) => {
        let a6 = e2[c8];
        if (!a6)
          return;
        let m8 = h6.map((p7) => p7.presence_ref);
        a6 = a6.filter((p7) => m8.indexOf(p7.presence_ref) < 0), e2[c8] = a6, s2(c8, a6, h6), a6.length === 0 && delete e2[c8];
      }), e2;
    }
    static map(e2, t3) {
      return Object.getOwnPropertyNames(e2).map((i3) => t3(i3, e2[i3]));
    }
    static transformState(e2) {
      return e2 = this.cloneDeep(e2), Object.getOwnPropertyNames(e2).reduce((t3, i3) => {
        let s2 = e2[i3];
        return "metas" in s2 ? t3[i3] = s2.metas.map((r2) => (r2.presence_ref = r2.phx_ref, delete r2.phx_ref, delete r2.phx_ref_prev, r2)) : t3[i3] = s2, t3;
      }, {});
    }
    static cloneDeep(e2) {
      return JSON.parse(JSON.stringify(e2));
    }
    onJoin(e2) {
      this.caller.onJoin = e2;
    }
    onLeave(e2) {
      this.caller.onLeave = e2;
    }
    onSync(e2) {
      this.caller.onSync = e2;
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
  };
  var l6;
  (function(n5) {
    n5.abstime = "abstime", n5.bool = "bool", n5.date = "date", n5.daterange = "daterange", n5.float4 = "float4", n5.float8 = "float8", n5.int2 = "int2", n5.int4 = "int4", n5.int4range = "int4range", n5.int8 = "int8", n5.int8range = "int8range", n5.json = "json", n5.jsonb = "jsonb", n5.money = "money", n5.numeric = "numeric", n5.oid = "oid", n5.reltime = "reltime", n5.text = "text", n5.time = "time", n5.timestamp = "timestamp", n5.timestamptz = "timestamptz", n5.timetz = "timetz", n5.tsrange = "tsrange", n5.tstzrange = "tstzrange";
  })(l6 || (l6 = {}));
  var B3 = (n5, e2, t3 = {}) => {
    var i3;
    let s2 = (i3 = t3.skipTypes) !== null && i3 !== void 0 ? i3 : [];
    return Object.keys(e2).reduce((r2, o3) => (r2[o3] = q6(o3, n5, e2, s2), r2), {});
  };
  var q6 = (n5, e2, t3, i3) => {
    let s2 = e2.find((c8) => c8.name === n5), r2 = s2?.type, o3 = t3[n5];
    return r2 && !i3.includes(r2) ? V5(r2, o3) : N2(o3);
  };
  var V5 = (n5, e2) => {
    if (n5.charAt(0) === "_") {
      let t3 = n5.slice(1, n5.length);
      return Q3(e2, t3);
    }
    switch (n5) {
      case l6.bool:
        return G3(e2);
      case l6.float4:
      case l6.float8:
      case l6.int2:
      case l6.int4:
      case l6.int8:
      case l6.numeric:
      case l6.oid:
        return X3(e2);
      case l6.json:
      case l6.jsonb:
        return Y3(e2);
      case l6.timestamp:
        return Z3(e2);
      case l6.abstime:
      case l6.date:
      case l6.daterange:
      case l6.int4range:
      case l6.int8range:
      case l6.money:
      case l6.reltime:
      case l6.text:
      case l6.time:
      case l6.timestamptz:
      case l6.timetz:
      case l6.tsrange:
      case l6.tstzrange:
        return N2(e2);
      default:
        return N2(e2);
    }
  };
  var N2 = (n5) => n5;
  var G3 = (n5) => {
    switch (n5) {
      case "t":
        return true;
      case "f":
        return false;
      default:
        return n5;
    }
  };
  var X3 = (n5) => {
    if (typeof n5 == "string") {
      let e2 = parseFloat(n5);
      if (!Number.isNaN(e2))
        return e2;
    }
    return n5;
  };
  var Y3 = (n5) => {
    if (typeof n5 == "string")
      try {
        return JSON.parse(n5);
      } catch (e2) {
        return console.log(`JSON parse error: ${e2}`), n5;
      }
    return n5;
  };
  var Q3 = (n5, e2) => {
    if (typeof n5 != "string")
      return n5;
    let t3 = n5.length - 1, i3 = n5[t3];
    if (n5[0] === "{" && i3 === "}") {
      let r2, o3 = n5.slice(1, t3);
      try {
        r2 = JSON.parse("[" + o3 + "]");
      } catch {
        r2 = o3 ? o3.split(",") : [];
      }
      return r2.map((c8) => V5(e2, c8));
    }
    return n5;
  };
  var Z3 = (n5) => typeof n5 == "string" ? n5.replace(" ", "T") : n5;
  var $3;
  (function(n5) {
    n5.ALL = "*", n5.INSERT = "INSERT", n5.UPDATE = "UPDATE", n5.DELETE = "DELETE";
  })($3 || ($3 = {}));
  var J2;
  (function(n5) {
    n5.BROADCAST = "broadcast", n5.PRESENCE = "presence", n5.POSTGRES_CHANGES = "postgres_changes";
  })(J2 || (J2 = {}));
  var I2;
  (function(n5) {
    n5.SUBSCRIBED = "SUBSCRIBED", n5.TIMED_OUT = "TIMED_OUT", n5.CLOSED = "CLOSED", n5.CHANNEL_ERROR = "CHANNEL_ERROR";
  })(I2 || (I2 = {}));
  var w5 = class n4 {
    constructor(e2, t3 = { config: {} }, i3) {
      this.topic = e2, this.params = t3, this.socket = i3, this.bindings = {}, this.state = _5.closed, this.joinedOnce = false, this.pushBuffer = [], this.subTopic = e2.replace(/^realtime:/i, ""), this.params.config = Object.assign({ broadcast: { ack: false, self: false }, presence: { key: "" } }, t3.config), this.timeout = this.socket.timeout, this.joinPush = new T4(this, R5.join, this.params, this.timeout), this.rejoinTimer = new O2(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
        this.state = _5.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((s2) => s2.send()), this.pushBuffer = [];
      }), this._onClose(() => {
        this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = _5.closed, this.socket._remove(this);
      }), this._onError((s2) => {
        this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, s2), this.state = _5.errored, this.rejoinTimer.scheduleTimeout());
      }), this.joinPush.receive("timeout", () => {
        this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = _5.errored, this.rejoinTimer.scheduleTimeout());
      }), this._on(R5.reply, {}, (s2, r2) => {
        this._trigger(this._replyEventName(r2), s2);
      }), this.presence = new k4(this), this.broadcastEndpointURL = this._broadcastEndpointURL();
    }
    subscribe(e2, t3 = this.timeout) {
      var i3, s2;
      if (this.socket.isConnected() || this.socket.connect(), this.joinedOnce)
        throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
        let { config: { broadcast: r2, presence: o3 } } = this.params;
        this._onError((a6) => e2 && e2("CHANNEL_ERROR", a6)), this._onClose(() => e2 && e2("CLOSED"));
        let c8 = {}, h6 = { broadcast: r2, presence: o3, postgres_changes: (s2 = (i3 = this.bindings.postgres_changes) === null || i3 === void 0 ? void 0 : i3.map((a6) => a6.filter)) !== null && s2 !== void 0 ? s2 : [] };
        this.socket.accessToken && (c8.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({ config: h6 }, c8)), this.joinedOnce = true, this._rejoin(t3), this.joinPush.receive("ok", ({ postgres_changes: a6 }) => {
          var m8;
          if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), a6 === void 0) {
            e2 && e2("SUBSCRIBED");
            return;
          } else {
            let p7 = this.bindings.postgres_changes, g8 = (m8 = p7?.length) !== null && m8 !== void 0 ? m8 : 0, d5 = [];
            for (let f8 = 0; f8 < g8; f8++) {
              let v7 = p7[f8], { filter: { event: u4, schema: j8, table: C5, filter: y6 } } = v7, b6 = a6 && a6[f8];
              if (b6 && b6.event === u4 && b6.schema === j8 && b6.table === C5 && b6.filter === y6)
                d5.push(Object.assign(Object.assign({}, v7), { id: b6.id }));
              else {
                this.unsubscribe(), e2 && e2("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                return;
              }
            }
            this.bindings.postgres_changes = d5, e2 && e2("SUBSCRIBED");
            return;
          }
        }).receive("error", (a6) => {
          e2 && e2("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(a6).join(", ") || "error")));
        }).receive("timeout", () => {
          e2 && e2("TIMED_OUT");
        });
      }
      return this;
    }
    presenceState() {
      return this.presence.state;
    }
    async track(e2, t3 = {}) {
      return await this.send({ type: "presence", event: "track", payload: e2 }, t3.timeout || this.timeout);
    }
    async untrack(e2 = {}) {
      return await this.send({ type: "presence", event: "untrack" }, e2);
    }
    on(e2, t3, i3) {
      return this._on(e2, t3, i3);
    }
    async send(e2, t3 = {}) {
      var i3, s2;
      if (!this._canPush() && e2.type === "broadcast") {
        let { event: r2, payload: o3 } = e2, c8 = { method: "POST", headers: { apikey: (i3 = this.socket.apiKey) !== null && i3 !== void 0 ? i3 : "", "Content-Type": "application/json" }, body: JSON.stringify({ messages: [{ topic: this.subTopic, event: r2, payload: o3 }] }) };
        try {
          return (await this._fetchWithTimeout(this.broadcastEndpointURL, c8, (s2 = t3.timeout) !== null && s2 !== void 0 ? s2 : this.timeout)).ok ? "ok" : "error";
        } catch (h6) {
          return h6.name === "AbortError" ? "timed out" : "error";
        }
      } else
        return new Promise((r2) => {
          var o3, c8, h6;
          let a6 = this._push(e2.type, e2, t3.timeout || this.timeout);
          e2.type === "broadcast" && !(!((h6 = (c8 = (o3 = this.params) === null || o3 === void 0 ? void 0 : o3.config) === null || c8 === void 0 ? void 0 : c8.broadcast) === null || h6 === void 0) && h6.ack) && r2("ok"), a6.receive("ok", () => r2("ok")), a6.receive("timeout", () => r2("timed out"));
        });
    }
    updateJoinPayload(e2) {
      this.joinPush.updatePayload(e2);
    }
    unsubscribe(e2 = this.timeout) {
      this.state = _5.leaving;
      let t3 = () => {
        this.socket.log("channel", `leave ${this.topic}`), this._trigger(R5.close, "leave", this._joinRef());
      };
      return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise((i3) => {
        let s2 = new T4(this, R5.leave, {}, e2);
        s2.receive("ok", () => {
          t3(), i3("ok");
        }).receive("timeout", () => {
          t3(), i3("timed out");
        }).receive("error", () => {
          i3("error");
        }), s2.send(), this._canPush() || s2.trigger("ok", {});
      });
    }
    _broadcastEndpointURL() {
      let e2 = this.socket.endPoint;
      return e2 = e2.replace(/^ws/i, "http"), e2 = e2.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e2.replace(/\/+$/, "") + "/api/broadcast";
    }
    async _fetchWithTimeout(e2, t3, i3) {
      let s2 = new AbortController(), r2 = setTimeout(() => s2.abort(), i3), o3 = await this.socket.fetch(e2, Object.assign(Object.assign({}, t3), { signal: s2.signal }));
      return clearTimeout(r2), o3;
    }
    _push(e2, t3, i3 = this.timeout) {
      if (!this.joinedOnce)
        throw `tried to push '${e2}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let s2 = new T4(this, e2, t3, i3);
      return this._canPush() ? s2.send() : (s2.startTimeout(), this.pushBuffer.push(s2)), s2;
    }
    _onMessage(e2, t3, i3) {
      return t3;
    }
    _isMember(e2) {
      return this.topic === e2;
    }
    _joinRef() {
      return this.joinPush.ref;
    }
    _trigger(e2, t3, i3) {
      var s2, r2;
      let o3 = e2.toLocaleLowerCase(), { close: c8, error: h6, leave: a6, join: m8 } = R5;
      if (i3 && [c8, h6, a6, m8].indexOf(o3) >= 0 && i3 !== this._joinRef())
        return;
      let g8 = this._onMessage(o3, t3, i3);
      if (t3 && !g8)
        throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(o3) ? (s2 = this.bindings.postgres_changes) === null || s2 === void 0 || s2.filter((d5) => {
        var f8, v7, u4;
        return ((f8 = d5.filter) === null || f8 === void 0 ? void 0 : f8.event) === "*" || ((u4 = (v7 = d5.filter) === null || v7 === void 0 ? void 0 : v7.event) === null || u4 === void 0 ? void 0 : u4.toLocaleLowerCase()) === o3;
      }).map((d5) => d5.callback(g8, i3)) : (r2 = this.bindings[o3]) === null || r2 === void 0 || r2.filter((d5) => {
        var f8, v7, u4, j8, C5, y6;
        if (["broadcast", "presence", "postgres_changes"].includes(o3))
          if ("id" in d5) {
            let b6 = d5.id, D4 = (f8 = d5.filter) === null || f8 === void 0 ? void 0 : f8.event;
            return b6 && ((v7 = t3.ids) === null || v7 === void 0 ? void 0 : v7.includes(b6)) && (D4 === "*" || D4?.toLocaleLowerCase() === ((u4 = t3.data) === null || u4 === void 0 ? void 0 : u4.type.toLocaleLowerCase()));
          } else {
            let b6 = (C5 = (j8 = d5?.filter) === null || j8 === void 0 ? void 0 : j8.event) === null || C5 === void 0 ? void 0 : C5.toLocaleLowerCase();
            return b6 === "*" || b6 === ((y6 = t3?.event) === null || y6 === void 0 ? void 0 : y6.toLocaleLowerCase());
          }
        else
          return d5.type.toLocaleLowerCase() === o3;
      }).map((d5) => {
        if (typeof g8 == "object" && "ids" in g8) {
          let f8 = g8.data, { schema: v7, table: u4, commit_timestamp: j8, type: C5, errors: y6 } = f8;
          g8 = Object.assign(Object.assign({}, { schema: v7, table: u4, commit_timestamp: j8, eventType: C5, new: {}, old: {}, errors: y6 }), this._getPayloadRecords(f8));
        }
        d5.callback(g8, i3);
      });
    }
    _isClosed() {
      return this.state === _5.closed;
    }
    _isJoined() {
      return this.state === _5.joined;
    }
    _isJoining() {
      return this.state === _5.joining;
    }
    _isLeaving() {
      return this.state === _5.leaving;
    }
    _replyEventName(e2) {
      return `chan_reply_${e2}`;
    }
    _on(e2, t3, i3) {
      let s2 = e2.toLocaleLowerCase(), r2 = { type: s2, filter: t3, callback: i3 };
      return this.bindings[s2] ? this.bindings[s2].push(r2) : this.bindings[s2] = [r2], this;
    }
    _off(e2, t3) {
      let i3 = e2.toLocaleLowerCase();
      return this.bindings[i3] = this.bindings[i3].filter((s2) => {
        var r2;
        return !(((r2 = s2.type) === null || r2 === void 0 ? void 0 : r2.toLocaleLowerCase()) === i3 && n4.isEqual(s2.filter, t3));
      }), this;
    }
    static isEqual(e2, t3) {
      if (Object.keys(e2).length !== Object.keys(t3).length)
        return false;
      for (let i3 in e2)
        if (e2[i3] !== t3[i3])
          return false;
      return true;
    }
    _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
    }
    _onClose(e2) {
      this._on(R5.close, {}, e2);
    }
    _onError(e2) {
      this._on(R5.error, {}, (t3) => e2(t3));
    }
    _canPush() {
      return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e2 = this.timeout) {
      this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = _5.joining, this.joinPush.resend(e2));
    }
    _getPayloadRecords(e2) {
      let t3 = { new: {}, old: {} };
      return (e2.type === "INSERT" || e2.type === "UPDATE") && (t3.new = B3(e2.columns, e2.record)), (e2.type === "UPDATE" || e2.type === "DELETE") && (t3.old = B3(e2.columns, e2.old_record)), t3;
    }
  };
  var te2 = () => {
  };
  var ne2 = typeof WebSocket < "u";
  var P2 = class {
    constructor(e2, t3) {
      var i3;
      this.accessToken = null, this.apiKey = null, this.channels = [], this.endPoint = "", this.headers = z2, this.params = {}, this.timeout = A3, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = te2, this.conn = null, this.sendBuffer = [], this.serializer = new x4(), this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this._resolveFetch = (r2) => {
        let o3;
        return r2 ? o3 = r2 : typeof fetch > "u" ? o3 = (...c8) => Promise.resolve().then(() => (init_node_fetch(), node_fetch_exports)).then(({ default: h6 }) => h6(...c8)) : o3 = fetch, (...c8) => o3(...c8);
      }, this.endPoint = `${e2}/${S3.websocket}`, t3?.transport ? this.transport = t3.transport : this.transport = null, t3?.params && (this.params = t3.params), t3?.headers && (this.headers = Object.assign(Object.assign({}, this.headers), t3.headers)), t3?.timeout && (this.timeout = t3.timeout), t3?.logger && (this.logger = t3.logger), t3?.heartbeatIntervalMs && (this.heartbeatIntervalMs = t3.heartbeatIntervalMs);
      let s2 = (i3 = t3?.params) === null || i3 === void 0 ? void 0 : i3.apikey;
      s2 && (this.accessToken = s2, this.apiKey = s2), this.reconnectAfterMs = t3?.reconnectAfterMs ? t3.reconnectAfterMs : (r2) => [1e3, 2e3, 5e3, 1e4][r2 - 1] || 1e4, this.encode = t3?.encode ? t3.encode : (r2, o3) => o3(JSON.stringify(r2)), this.decode = t3?.decode ? t3.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new O2(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs), this.fetch = this._resolveFetch(t3?.fetch);
    }
    connect() {
      if (!this.conn) {
        if (this.transport) {
          this.conn = new this.transport(this._endPointURL(), void 0, { headers: this.headers });
          return;
        }
        if (ne2) {
          this.conn = new WebSocket(this._endPointURL()), this.setupConnection();
          return;
        }
        this.conn = new M2(this._endPointURL(), void 0, { close: () => {
          this.conn = null;
        } }), Promise.resolve().then(() => (init_ws(), ws_exports)).then(({ default: e2 }) => {
          this.conn = new e2(this._endPointURL(), void 0, { headers: this.headers }), this.setupConnection();
        });
      }
    }
    disconnect(e2, t3) {
      this.conn && (this.conn.onclose = function() {
      }, e2 ? this.conn.close(e2, t3 ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset());
    }
    getChannels() {
      return this.channels;
    }
    async removeChannel(e2) {
      let t3 = await e2.unsubscribe();
      return this.channels.length === 0 && this.disconnect(), t3;
    }
    async removeAllChannels() {
      let e2 = await Promise.all(this.channels.map((t3) => t3.unsubscribe()));
      return this.disconnect(), e2;
    }
    log(e2, t3, i3) {
      this.logger(e2, t3, i3);
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case L2.connecting:
          return E4.Connecting;
        case L2.open:
          return E4.Open;
        case L2.closing:
          return E4.Closing;
        default:
          return E4.Closed;
      }
    }
    isConnected() {
      return this.connectionState() === E4.Open;
    }
    channel(e2, t3 = { config: {} }) {
      let i3 = new w5(`realtime:${e2}`, t3, this);
      return this.channels.push(i3), i3;
    }
    push(e2) {
      let { topic: t3, event: i3, payload: s2, ref: r2 } = e2, o3 = () => {
        this.encode(e2, (c8) => {
          var h6;
          (h6 = this.conn) === null || h6 === void 0 || h6.send(c8);
        });
      };
      this.log("push", `${t3} ${i3} (${r2})`, s2), this.isConnected() ? o3() : this.sendBuffer.push(o3);
    }
    setAuth(e2) {
      this.accessToken = e2, this.channels.forEach((t3) => {
        e2 && t3.updateJoinPayload({ access_token: e2 }), t3.joinedOnce && t3._isJoined() && t3._push(R5.access_token, { access_token: e2 });
      });
    }
    _makeRef() {
      let e2 = this.ref + 1;
      return e2 === this.ref ? this.ref = 0 : this.ref = e2, this.ref.toString();
    }
    _leaveOpenTopic(e2) {
      let t3 = this.channels.find((i3) => i3.topic === e2 && (i3._isJoined() || i3._isJoining()));
      t3 && (this.log("transport", `leaving duplicate topic "${e2}"`), t3.unsubscribe());
    }
    _remove(e2) {
      this.channels = this.channels.filter((t3) => t3._joinRef() !== e2._joinRef());
    }
    setupConnection() {
      this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e2) => this._onConnError(e2), this.conn.onmessage = (e2) => this._onConnMessage(e2), this.conn.onclose = (e2) => this._onConnClose(e2));
    }
    _endPointURL() {
      return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: F6 }));
    }
    _onConnMessage(e2) {
      this.decode(e2.data, (t3) => {
        let { topic: i3, event: s2, payload: r2, ref: o3 } = t3;
        (o3 && o3 === this.pendingHeartbeatRef || s2 === r2?.type) && (this.pendingHeartbeatRef = null), this.log("receive", `${r2.status || ""} ${i3} ${s2} ${o3 && "(" + o3 + ")" || ""}`, r2), this.channels.filter((c8) => c8._isMember(i3)).forEach((c8) => c8._trigger(s2, r2, o3)), this.stateChangeCallbacks.message.forEach((c8) => c8(t3));
      });
    }
    _onConnOpen() {
      this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach((e2) => e2());
    }
    _onConnClose(e2) {
      this.log("transport", "close", e2), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((t3) => t3(e2));
    }
    _onConnError(e2) {
      this.log("transport", e2.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((t3) => t3(e2));
    }
    _triggerChanError() {
      this.channels.forEach((e2) => e2._trigger(R5.error));
    }
    _appendParams(e2, t3) {
      if (Object.keys(t3).length === 0)
        return e2;
      let i3 = e2.match(/\?/) ? "&" : "?", s2 = new URLSearchParams(t3);
      return `${e2}${i3}${s2}`;
    }
    _flushSendBuffer() {
      this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e2) => e2()), this.sendBuffer = []);
    }
    _sendHeartbeat() {
      var e2;
      if (this.isConnected()) {
        if (this.pendingHeartbeatRef) {
          this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e2 = this.conn) === null || e2 === void 0 || e2.close(W3, "hearbeat timeout");
          return;
        }
        this.pendingHeartbeatRef = this._makeRef(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef }), this.setAuth(this.accessToken);
      }
    }
  };
  var M2 = class {
    constructor(e2, t3, i3) {
      this.binaryType = "arraybuffer", this.onclose = () => {
      }, this.onerror = () => {
      }, this.onmessage = () => {
      }, this.onopen = () => {
      }, this.readyState = L2.connecting, this.send = () => {
      }, this.url = null, this.url = e2, this.close = i3.close;
    }
  };

  // https://esm.sh/v135/@supabase/postgrest-js@1.9.1/denonext/postgrest-js.mjs
  init_node_fetch();
  var u3 = class {
    constructor(e2) {
      this.shouldThrowOnError = false, this.method = e2.method, this.url = e2.url, this.headers = e2.headers, this.schema = e2.schema, this.body = e2.body, this.shouldThrowOnError = e2.shouldThrowOnError, this.signal = e2.signal, this.isMaybeSingle = e2.isMaybeSingle, e2.fetch ? this.fetch = e2.fetch : typeof fetch > "u" ? this.fetch = m : this.fetch = fetch;
    }
    throwOnError() {
      return this.shouldThrowOnError = true, this;
    }
    then(e2, s2) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
      let i3 = this.fetch, r2 = i3(this.url.toString(), { method: this.method, headers: this.headers, body: JSON.stringify(this.body), signal: this.signal }).then(async (t3) => {
        var h6, a6, l8;
        let n5 = null, o3 = null, A4 = null, m8 = t3.status, P4 = t3.statusText;
        if (t3.ok) {
          if (this.method !== "HEAD") {
            let y6 = await t3.text();
            y6 === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? o3 = y6 : o3 = JSON.parse(y6));
          }
          let $6 = (h6 = this.headers.Prefer) === null || h6 === void 0 ? void 0 : h6.match(/count=(exact|planned|estimated)/), g8 = (a6 = t3.headers.get("content-range")) === null || a6 === void 0 ? void 0 : a6.split("/");
          $6 && g8 && g8.length > 1 && (A4 = parseInt(g8[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(o3) && (o3.length > 1 ? (n5 = { code: "PGRST116", details: `Results contain ${o3.length} rows, application/vnd.pgrst.object+json requires 1 row`, hint: null, message: "JSON object requested, multiple (or no) rows returned" }, o3 = null, A4 = null, m8 = 406, P4 = "Not Acceptable") : o3.length === 1 ? o3 = o3[0] : o3 = null);
        } else {
          let $6 = await t3.text();
          try {
            n5 = JSON.parse($6), Array.isArray(n5) && t3.status === 404 && (o3 = [], n5 = null, m8 = 200, P4 = "OK");
          } catch {
            t3.status === 404 && $6 === "" ? (m8 = 204, P4 = "No Content") : n5 = { message: $6 };
          }
          if (n5 && this.isMaybeSingle && (!((l8 = n5?.details) === null || l8 === void 0) && l8.includes("0 rows")) && (n5 = null, m8 = 200, P4 = "OK"), n5 && this.shouldThrowOnError)
            throw n5;
        }
        return { error: n5, data: o3, count: A4, status: m8, statusText: P4 };
      });
      return this.shouldThrowOnError || (r2 = r2.catch((t3) => {
        var h6, a6, l8;
        return { error: { message: `${(h6 = t3?.name) !== null && h6 !== void 0 ? h6 : "FetchError"}: ${t3?.message}`, details: `${(a6 = t3?.stack) !== null && a6 !== void 0 ? a6 : ""}`, hint: "", code: `${(l8 = t3?.code) !== null && l8 !== void 0 ? l8 : ""}` }, data: null, count: null, status: 0, statusText: "" };
      })), r2.then(e2, s2);
    }
  };
  var d4 = class extends u3 {
    select(e2) {
      let s2 = false, i3 = (e2 ?? "*").split("").map((r2) => /\s/.test(r2) && !s2 ? "" : (r2 === '"' && (s2 = !s2), r2)).join("");
      return this.url.searchParams.set("select", i3), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
    }
    order(e2, { ascending: s2 = true, nullsFirst: i3, foreignTable: r2, referencedTable: t3 = r2 } = {}) {
      let h6 = t3 ? `${t3}.order` : "order", a6 = this.url.searchParams.get(h6);
      return this.url.searchParams.set(h6, `${a6 ? `${a6},` : ""}${e2}.${s2 ? "asc" : "desc"}${i3 === void 0 ? "" : i3 ? ".nullsfirst" : ".nullslast"}`), this;
    }
    limit(e2, { foreignTable: s2, referencedTable: i3 = s2 } = {}) {
      let r2 = typeof i3 > "u" ? "limit" : `${i3}.limit`;
      return this.url.searchParams.set(r2, `${e2}`), this;
    }
    range(e2, s2, { foreignTable: i3, referencedTable: r2 = i3 } = {}) {
      let t3 = typeof r2 > "u" ? "offset" : `${r2}.offset`, h6 = typeof r2 > "u" ? "limit" : `${r2}.limit`;
      return this.url.searchParams.set(t3, `${e2}`), this.url.searchParams.set(h6, `${s2 - e2 + 1}`), this;
    }
    abortSignal(e2) {
      return this.signal = e2, this;
    }
    single() {
      return this.headers.Accept = "application/vnd.pgrst.object+json", this;
    }
    maybeSingle() {
      return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = true, this;
    }
    csv() {
      return this.headers.Accept = "text/csv", this;
    }
    geojson() {
      return this.headers.Accept = "application/geo+json", this;
    }
    explain({ analyze: e2 = false, verbose: s2 = false, settings: i3 = false, buffers: r2 = false, wal: t3 = false, format: h6 = "text" } = {}) {
      var a6;
      let l8 = [e2 ? "analyze" : null, s2 ? "verbose" : null, i3 ? "settings" : null, r2 ? "buffers" : null, t3 ? "wal" : null].filter(Boolean).join("|"), n5 = (a6 = this.headers.Accept) !== null && a6 !== void 0 ? a6 : "application/json";
      return this.headers.Accept = `application/vnd.pgrst.plan+${h6}; for="${n5}"; options=${l8};`, h6 === "json" ? this : this;
    }
    rollback() {
      var e2;
      return ((e2 = this.headers.Prefer) !== null && e2 !== void 0 ? e2 : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
    }
    returns() {
      return this;
    }
  };
  var c7 = class extends d4 {
    eq(e2, s2) {
      return this.url.searchParams.append(e2, `eq.${s2}`), this;
    }
    neq(e2, s2) {
      return this.url.searchParams.append(e2, `neq.${s2}`), this;
    }
    gt(e2, s2) {
      return this.url.searchParams.append(e2, `gt.${s2}`), this;
    }
    gte(e2, s2) {
      return this.url.searchParams.append(e2, `gte.${s2}`), this;
    }
    lt(e2, s2) {
      return this.url.searchParams.append(e2, `lt.${s2}`), this;
    }
    lte(e2, s2) {
      return this.url.searchParams.append(e2, `lte.${s2}`), this;
    }
    like(e2, s2) {
      return this.url.searchParams.append(e2, `like.${s2}`), this;
    }
    likeAllOf(e2, s2) {
      return this.url.searchParams.append(e2, `like(all).{${s2.join(",")}}`), this;
    }
    likeAnyOf(e2, s2) {
      return this.url.searchParams.append(e2, `like(any).{${s2.join(",")}}`), this;
    }
    ilike(e2, s2) {
      return this.url.searchParams.append(e2, `ilike.${s2}`), this;
    }
    ilikeAllOf(e2, s2) {
      return this.url.searchParams.append(e2, `ilike(all).{${s2.join(",")}}`), this;
    }
    ilikeAnyOf(e2, s2) {
      return this.url.searchParams.append(e2, `ilike(any).{${s2.join(",")}}`), this;
    }
    is(e2, s2) {
      return this.url.searchParams.append(e2, `is.${s2}`), this;
    }
    in(e2, s2) {
      let i3 = s2.map((r2) => typeof r2 == "string" && new RegExp("[,()]").test(r2) ? `"${r2}"` : `${r2}`).join(",");
      return this.url.searchParams.append(e2, `in.(${i3})`), this;
    }
    contains(e2, s2) {
      return typeof s2 == "string" ? this.url.searchParams.append(e2, `cs.${s2}`) : Array.isArray(s2) ? this.url.searchParams.append(e2, `cs.{${s2.join(",")}}`) : this.url.searchParams.append(e2, `cs.${JSON.stringify(s2)}`), this;
    }
    containedBy(e2, s2) {
      return typeof s2 == "string" ? this.url.searchParams.append(e2, `cd.${s2}`) : Array.isArray(s2) ? this.url.searchParams.append(e2, `cd.{${s2.join(",")}}`) : this.url.searchParams.append(e2, `cd.${JSON.stringify(s2)}`), this;
    }
    rangeGt(e2, s2) {
      return this.url.searchParams.append(e2, `sr.${s2}`), this;
    }
    rangeGte(e2, s2) {
      return this.url.searchParams.append(e2, `nxl.${s2}`), this;
    }
    rangeLt(e2, s2) {
      return this.url.searchParams.append(e2, `sl.${s2}`), this;
    }
    rangeLte(e2, s2) {
      return this.url.searchParams.append(e2, `nxr.${s2}`), this;
    }
    rangeAdjacent(e2, s2) {
      return this.url.searchParams.append(e2, `adj.${s2}`), this;
    }
    overlaps(e2, s2) {
      return typeof s2 == "string" ? this.url.searchParams.append(e2, `ov.${s2}`) : this.url.searchParams.append(e2, `ov.{${s2.join(",")}}`), this;
    }
    textSearch(e2, s2, { config: i3, type: r2 } = {}) {
      let t3 = "";
      r2 === "plain" ? t3 = "pl" : r2 === "phrase" ? t3 = "ph" : r2 === "websearch" && (t3 = "w");
      let h6 = i3 === void 0 ? "" : `(${i3})`;
      return this.url.searchParams.append(e2, `${t3}fts${h6}.${s2}`), this;
    }
    match(e2) {
      return Object.entries(e2).forEach(([s2, i3]) => {
        this.url.searchParams.append(s2, `eq.${i3}`);
      }), this;
    }
    not(e2, s2, i3) {
      return this.url.searchParams.append(e2, `not.${s2}.${i3}`), this;
    }
    or(e2, { foreignTable: s2, referencedTable: i3 = s2 } = {}) {
      let r2 = i3 ? `${i3}.or` : "or";
      return this.url.searchParams.append(r2, `(${e2})`), this;
    }
    filter(e2, s2, i3) {
      return this.url.searchParams.append(e2, `${s2}.${i3}`), this;
    }
  };
  var p5 = class {
    constructor(e2, { headers: s2 = {}, schema: i3, fetch: r2 }) {
      this.url = e2, this.headers = s2, this.schema = i3, this.fetch = r2;
    }
    select(e2, { head: s2 = false, count: i3 } = {}) {
      let r2 = s2 ? "HEAD" : "GET", t3 = false, h6 = (e2 ?? "*").split("").map((a6) => /\s/.test(a6) && !t3 ? "" : (a6 === '"' && (t3 = !t3), a6)).join("");
      return this.url.searchParams.set("select", h6), i3 && (this.headers.Prefer = `count=${i3}`), new c7({ method: r2, url: this.url, headers: this.headers, schema: this.schema, fetch: this.fetch, allowEmpty: false });
    }
    insert(e2, { count: s2, defaultToNull: i3 = true } = {}) {
      let r2 = "POST", t3 = [];
      if (this.headers.Prefer && t3.push(this.headers.Prefer), s2 && t3.push(`count=${s2}`), i3 || t3.push("missing=default"), this.headers.Prefer = t3.join(","), Array.isArray(e2)) {
        let h6 = e2.reduce((a6, l8) => a6.concat(Object.keys(l8)), []);
        if (h6.length > 0) {
          let a6 = [...new Set(h6)].map((l8) => `"${l8}"`);
          this.url.searchParams.set("columns", a6.join(","));
        }
      }
      return new c7({ method: r2, url: this.url, headers: this.headers, schema: this.schema, body: e2, fetch: this.fetch, allowEmpty: false });
    }
    upsert(e2, { onConflict: s2, ignoreDuplicates: i3 = false, count: r2, defaultToNull: t3 = true } = {}) {
      let h6 = "POST", a6 = [`resolution=${i3 ? "ignore" : "merge"}-duplicates`];
      if (s2 !== void 0 && this.url.searchParams.set("on_conflict", s2), this.headers.Prefer && a6.push(this.headers.Prefer), r2 && a6.push(`count=${r2}`), t3 || a6.push("missing=default"), this.headers.Prefer = a6.join(","), Array.isArray(e2)) {
        let l8 = e2.reduce((n5, o3) => n5.concat(Object.keys(o3)), []);
        if (l8.length > 0) {
          let n5 = [...new Set(l8)].map((o3) => `"${o3}"`);
          this.url.searchParams.set("columns", n5.join(","));
        }
      }
      return new c7({ method: h6, url: this.url, headers: this.headers, schema: this.schema, body: e2, fetch: this.fetch, allowEmpty: false });
    }
    update(e2, { count: s2 } = {}) {
      let i3 = "PATCH", r2 = [];
      return this.headers.Prefer && r2.push(this.headers.Prefer), s2 && r2.push(`count=${s2}`), this.headers.Prefer = r2.join(","), new c7({ method: i3, url: this.url, headers: this.headers, schema: this.schema, body: e2, fetch: this.fetch, allowEmpty: false });
    }
    delete({ count: e2 } = {}) {
      let s2 = "DELETE", i3 = [];
      return e2 && i3.push(`count=${e2}`), this.headers.Prefer && i3.unshift(this.headers.Prefer), this.headers.Prefer = i3.join(","), new c7({ method: s2, url: this.url, headers: this.headers, schema: this.schema, fetch: this.fetch, allowEmpty: false });
    }
  };
  var w6 = "1.9.1";
  var x5 = { "X-Client-Info": `postgrest-js/${w6}` };
  var j6 = class f5 {
    constructor(e2, { headers: s2 = {}, schema: i3, fetch: r2 } = {}) {
      this.url = e2, this.headers = Object.assign(Object.assign({}, x5), s2), this.schemaName = i3, this.fetch = r2;
    }
    from(e2) {
      let s2 = new URL(`${this.url}/${e2}`);
      return new p5(s2, { headers: Object.assign({}, this.headers), schema: this.schemaName, fetch: this.fetch });
    }
    schema(e2) {
      return new f5(this.url, { headers: this.headers, schema: e2, fetch: this.fetch });
    }
    rpc(e2, s2 = {}, { head: i3 = false, count: r2 } = {}) {
      let t3, h6 = new URL(`${this.url}/rpc/${e2}`), a6;
      i3 ? (t3 = "HEAD", Object.entries(s2).forEach(([n5, o3]) => {
        h6.searchParams.append(n5, `${o3}`);
      })) : (t3 = "POST", a6 = s2);
      let l8 = Object.assign({}, this.headers);
      return r2 && (l8.Prefer = `count=${r2}`), new c7({ method: t3, url: h6, headers: l8, schema: this.schemaName, body: a6, fetch: this.fetch, allowEmpty: false });
    }
  };

  // https://esm.sh/v135/@supabase/storage-js@2.5.5/denonext/storage-js.mjs
  var m7 = class extends Error {
    constructor(e2) {
      super(e2), this.__isStorageError = true, this.name = "StorageError";
    }
  };
  function l7(i3) {
    return typeof i3 == "object" && i3 !== null && "__isStorageError" in i3;
  }
  var $4 = class extends m7 {
    constructor(e2, t3) {
      super(e2), this.name = "StorageApiError", this.status = t3;
    }
    toJSON() {
      return { name: this.name, message: this.message, status: this.status };
    }
  };
  var w7 = class extends m7 {
    constructor(e2, t3) {
      super(e2), this.name = "StorageUnknownError", this.originalError = t3;
    }
  };
  var I3 = function(i3, e2, t3, r2) {
    function o3(n5) {
      return n5 instanceof t3 ? n5 : new t3(function(a6) {
        a6(n5);
      });
    }
    return new (t3 || (t3 = Promise))(function(n5, a6) {
      function u4(s2) {
        try {
          d5(r2.next(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function c8(s2) {
        try {
          d5(r2.throw(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function d5(s2) {
        s2.done ? n5(s2.value) : o3(s2.value).then(u4, c8);
      }
      d5((r2 = r2.apply(i3, e2 || [])).next());
    });
  };
  var x6 = (i3) => {
    let e2;
    return i3 ? e2 = i3 : typeof fetch > "u" ? e2 = (...t3) => Promise.resolve().then(() => (init_node_fetch(), node_fetch_exports)).then(({ default: r2 }) => r2(...t3)) : e2 = fetch, (...t3) => e2(...t3);
  };
  var T5 = () => I3(void 0, void 0, void 0, function* () {
    return typeof Response > "u" ? (yield Promise.resolve().then(() => (init_node_fetch(), node_fetch_exports))).Response : Response;
  });
  var v5 = function(i3, e2, t3, r2) {
    function o3(n5) {
      return n5 instanceof t3 ? n5 : new t3(function(a6) {
        a6(n5);
      });
    }
    return new (t3 || (t3 = Promise))(function(n5, a6) {
      function u4(s2) {
        try {
          d5(r2.next(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function c8(s2) {
        try {
          d5(r2.throw(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function d5(s2) {
        s2.done ? n5(s2.value) : o3(s2.value).then(u4, c8);
      }
      d5((r2 = r2.apply(i3, e2 || [])).next());
    });
  };
  var U3 = (i3) => i3.msg || i3.message || i3.error_description || i3.error || JSON.stringify(i3);
  var C4 = (i3, e2) => v5(void 0, void 0, void 0, function* () {
    let t3 = yield T5();
    i3 instanceof t3 ? i3.json().then((r2) => {
      e2(new $4(U3(r2), i3.status || 500));
    }).catch((r2) => {
      e2(new w7(U3(r2), r2));
    }) : e2(new w7(U3(i3), i3));
  });
  var D2 = (i3, e2, t3, r2) => {
    let o3 = { method: i3, headers: e2?.headers || {} };
    return i3 === "GET" ? o3 : (o3.headers = Object.assign({ "Content-Type": "application/json" }, e2?.headers), o3.body = JSON.stringify(r2), Object.assign(Object.assign({}, o3), t3));
  };
  function j7(i3, e2, t3, r2, o3, n5) {
    return v5(this, void 0, void 0, function* () {
      return new Promise((a6, u4) => {
        i3(t3, D2(e2, r2, o3, n5)).then((c8) => {
          if (!c8.ok)
            throw c8;
          return r2?.noResolveJson ? c8 : c8.json();
        }).then((c8) => a6(c8)).catch((c8) => C4(c8, u4));
      });
    });
  }
  function g6(i3, e2, t3, r2) {
    return v5(this, void 0, void 0, function* () {
      return j7(i3, "GET", e2, t3, r2);
    });
  }
  function p6(i3, e2, t3, r2, o3) {
    return v5(this, void 0, void 0, function* () {
      return j7(i3, "POST", e2, r2, o3, t3);
    });
  }
  function k5(i3, e2, t3, r2, o3) {
    return v5(this, void 0, void 0, function* () {
      return j7(i3, "PUT", e2, r2, o3, t3);
    });
  }
  function S4(i3, e2, t3, r2, o3) {
    return v5(this, void 0, void 0, function* () {
      return j7(i3, "DELETE", e2, r2, o3, t3);
    });
  }
  var f6 = function(i3, e2, t3, r2) {
    function o3(n5) {
      return n5 instanceof t3 ? n5 : new t3(function(a6) {
        a6(n5);
      });
    }
    return new (t3 || (t3 = Promise))(function(n5, a6) {
      function u4(s2) {
        try {
          d5(r2.next(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function c8(s2) {
        try {
          d5(r2.throw(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function d5(s2) {
        s2.done ? n5(s2.value) : o3(s2.value).then(u4, c8);
      }
      d5((r2 = r2.apply(i3, e2 || [])).next());
    });
  };
  var L3 = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } };
  var F7 = { cacheControl: "3600", contentType: "text/plain;charset=UTF-8", upsert: false };
  var b4 = class {
    constructor(e2, t3 = {}, r2, o3) {
      this.url = e2, this.headers = t3, this.bucketId = r2, this.fetch = x6(o3);
    }
    uploadOrUpdate(e2, t3, r2, o3) {
      return f6(this, void 0, void 0, function* () {
        try {
          let n5, a6 = Object.assign(Object.assign({}, F7), o3), u4 = Object.assign(Object.assign({}, this.headers), e2 === "POST" && { "x-upsert": String(a6.upsert) });
          typeof Blob < "u" && r2 instanceof Blob ? (n5 = new FormData(), n5.append("cacheControl", a6.cacheControl), n5.append("", r2)) : typeof FormData < "u" && r2 instanceof FormData ? (n5 = r2, n5.append("cacheControl", a6.cacheControl)) : (n5 = r2, u4["cache-control"] = `max-age=${a6.cacheControl}`, u4["content-type"] = a6.contentType);
          let c8 = this._removeEmptyFolders(t3), d5 = this._getFinalPath(c8), s2 = yield this.fetch(`${this.url}/object/${d5}`, Object.assign({ method: e2, body: n5, headers: u4 }, a6?.duplex ? { duplex: a6.duplex } : {})), h6 = yield s2.json();
          return s2.ok ? { data: { path: c8, id: h6.Id, fullPath: h6.Key }, error: null } : { data: null, error: h6 };
        } catch (n5) {
          if (l7(n5))
            return { data: null, error: n5 };
          throw n5;
        }
      });
    }
    upload(e2, t3, r2) {
      return f6(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("POST", e2, t3, r2);
      });
    }
    uploadToSignedUrl(e2, t3, r2, o3) {
      return f6(this, void 0, void 0, function* () {
        let n5 = this._removeEmptyFolders(e2), a6 = this._getFinalPath(n5), u4 = new URL(this.url + `/object/upload/sign/${a6}`);
        u4.searchParams.set("token", t3);
        try {
          let c8, d5 = Object.assign({ upsert: F7.upsert }, o3), s2 = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(d5.upsert) });
          typeof Blob < "u" && r2 instanceof Blob ? (c8 = new FormData(), c8.append("cacheControl", d5.cacheControl), c8.append("", r2)) : typeof FormData < "u" && r2 instanceof FormData ? (c8 = r2, c8.append("cacheControl", d5.cacheControl)) : (c8 = r2, s2["cache-control"] = `max-age=${d5.cacheControl}`, s2["content-type"] = d5.contentType);
          let h6 = yield this.fetch(u4.toString(), { method: "PUT", body: c8, headers: s2 }), O4 = yield h6.json();
          return h6.ok ? { data: { path: n5, fullPath: O4.Key }, error: null } : { data: null, error: O4 };
        } catch (c8) {
          if (l7(c8))
            return { data: null, error: c8 };
          throw c8;
        }
      });
    }
    createSignedUploadUrl(e2) {
      return f6(this, void 0, void 0, function* () {
        try {
          let t3 = this._getFinalPath(e2), r2 = yield p6(this.fetch, `${this.url}/object/upload/sign/${t3}`, {}, { headers: this.headers }), o3 = new URL(this.url + r2.url), n5 = o3.searchParams.get("token");
          if (!n5)
            throw new m7("No token returned by API");
          return { data: { signedUrl: o3.toString(), path: e2, token: n5 }, error: null };
        } catch (t3) {
          if (l7(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    update(e2, t3, r2) {
      return f6(this, void 0, void 0, function* () {
        return this.uploadOrUpdate("PUT", e2, t3, r2);
      });
    }
    move(e2, t3) {
      return f6(this, void 0, void 0, function* () {
        try {
          return { data: yield p6(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: e2, destinationKey: t3 }, { headers: this.headers }), error: null };
        } catch (r2) {
          if (l7(r2))
            return { data: null, error: r2 };
          throw r2;
        }
      });
    }
    copy(e2, t3) {
      return f6(this, void 0, void 0, function* () {
        try {
          return { data: { path: (yield p6(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: e2, destinationKey: t3 }, { headers: this.headers })).Key }, error: null };
        } catch (r2) {
          if (l7(r2))
            return { data: null, error: r2 };
          throw r2;
        }
      });
    }
    createSignedUrl(e2, t3, r2) {
      return f6(this, void 0, void 0, function* () {
        try {
          let o3 = this._getFinalPath(e2), n5 = yield p6(this.fetch, `${this.url}/object/sign/${o3}`, Object.assign({ expiresIn: t3 }, r2?.transform ? { transform: r2.transform } : {}), { headers: this.headers }), a6 = r2?.download ? `&download=${r2.download === true ? "" : r2.download}` : "";
          return n5 = { signedUrl: encodeURI(`${this.url}${n5.signedURL}${a6}`) }, { data: n5, error: null };
        } catch (o3) {
          if (l7(o3))
            return { data: null, error: o3 };
          throw o3;
        }
      });
    }
    createSignedUrls(e2, t3, r2) {
      return f6(this, void 0, void 0, function* () {
        try {
          let o3 = yield p6(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: t3, paths: e2 }, { headers: this.headers }), n5 = r2?.download ? `&download=${r2.download === true ? "" : r2.download}` : "";
          return { data: o3.map((a6) => Object.assign(Object.assign({}, a6), { signedUrl: a6.signedURL ? encodeURI(`${this.url}${a6.signedURL}${n5}`) : null })), error: null };
        } catch (o3) {
          if (l7(o3))
            return { data: null, error: o3 };
          throw o3;
        }
      });
    }
    download(e2, t3) {
      return f6(this, void 0, void 0, function* () {
        let o3 = typeof t3?.transform < "u" ? "render/image/authenticated" : "object", n5 = this.transformOptsToQueryString(t3?.transform || {}), a6 = n5 ? `?${n5}` : "";
        try {
          let u4 = this._getFinalPath(e2);
          return { data: yield (yield g6(this.fetch, `${this.url}/${o3}/${u4}${a6}`, { headers: this.headers, noResolveJson: true })).blob(), error: null };
        } catch (u4) {
          if (l7(u4))
            return { data: null, error: u4 };
          throw u4;
        }
      });
    }
    getPublicUrl(e2, t3) {
      let r2 = this._getFinalPath(e2), o3 = [], n5 = t3?.download ? `download=${t3.download === true ? "" : t3.download}` : "";
      n5 !== "" && o3.push(n5);
      let u4 = typeof t3?.transform < "u" ? "render/image" : "object", c8 = this.transformOptsToQueryString(t3?.transform || {});
      c8 !== "" && o3.push(c8);
      let d5 = o3.join("&");
      return d5 !== "" && (d5 = `?${d5}`), { data: { publicUrl: encodeURI(`${this.url}/${u4}/public/${r2}${d5}`) } };
    }
    remove(e2) {
      return f6(this, void 0, void 0, function* () {
        try {
          return { data: yield S4(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e2 }, { headers: this.headers }), error: null };
        } catch (t3) {
          if (l7(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    list(e2, t3, r2) {
      return f6(this, void 0, void 0, function* () {
        try {
          let o3 = Object.assign(Object.assign(Object.assign({}, L3), t3), { prefix: e2 || "" });
          return { data: yield p6(this.fetch, `${this.url}/object/list/${this.bucketId}`, o3, { headers: this.headers }, r2), error: null };
        } catch (o3) {
          if (l7(o3))
            return { data: null, error: o3 };
          throw o3;
        }
      });
    }
    _getFinalPath(e2) {
      return `${this.bucketId}/${e2}`;
    }
    _removeEmptyFolders(e2) {
      return e2.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e2) {
      let t3 = [];
      return e2.width && t3.push(`width=${e2.width}`), e2.height && t3.push(`height=${e2.height}`), e2.resize && t3.push(`resize=${e2.resize}`), e2.format && t3.push(`format=${e2.format}`), e2.quality && t3.push(`quality=${e2.quality}`), t3.join("&");
    }
  };
  var P3 = "2.5.5";
  var R6 = { "X-Client-Info": `storage-js/${P3}` };
  var y5 = function(i3, e2, t3, r2) {
    function o3(n5) {
      return n5 instanceof t3 ? n5 : new t3(function(a6) {
        a6(n5);
      });
    }
    return new (t3 || (t3 = Promise))(function(n5, a6) {
      function u4(s2) {
        try {
          d5(r2.next(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function c8(s2) {
        try {
          d5(r2.throw(s2));
        } catch (h6) {
          a6(h6);
        }
      }
      function d5(s2) {
        s2.done ? n5(s2.value) : o3(s2.value).then(u4, c8);
      }
      d5((r2 = r2.apply(i3, e2 || [])).next());
    });
  };
  var _6 = class {
    constructor(e2, t3 = {}, r2) {
      this.url = e2, this.headers = Object.assign(Object.assign({}, R6), t3), this.fetch = x6(r2);
    }
    listBuckets() {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield g6(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
        } catch (e2) {
          if (l7(e2))
            return { data: null, error: e2 };
          throw e2;
        }
      });
    }
    getBucket(e2) {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield g6(this.fetch, `${this.url}/bucket/${e2}`, { headers: this.headers }), error: null };
        } catch (t3) {
          if (l7(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    createBucket(e2, t3 = { public: false }) {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield p6(this.fetch, `${this.url}/bucket`, { id: e2, name: e2, public: t3.public, file_size_limit: t3.fileSizeLimit, allowed_mime_types: t3.allowedMimeTypes }, { headers: this.headers }), error: null };
        } catch (r2) {
          if (l7(r2))
            return { data: null, error: r2 };
          throw r2;
        }
      });
    }
    updateBucket(e2, t3) {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield k5(this.fetch, `${this.url}/bucket/${e2}`, { id: e2, name: e2, public: t3.public, file_size_limit: t3.fileSizeLimit, allowed_mime_types: t3.allowedMimeTypes }, { headers: this.headers }), error: null };
        } catch (r2) {
          if (l7(r2))
            return { data: null, error: r2 };
          throw r2;
        }
      });
    }
    emptyBucket(e2) {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield p6(this.fetch, `${this.url}/bucket/${e2}/empty`, {}, { headers: this.headers }), error: null };
        } catch (t3) {
          if (l7(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
    deleteBucket(e2) {
      return y5(this, void 0, void 0, function* () {
        try {
          return { data: yield S4(this.fetch, `${this.url}/bucket/${e2}`, {}, { headers: this.headers }), error: null };
        } catch (t3) {
          if (l7(t3))
            return { data: null, error: t3 };
          throw t3;
        }
      });
    }
  };
  var E5 = class extends _6 {
    constructor(e2, t3 = {}, r2) {
      super(e2, t3, r2);
    }
    from(e2) {
      return new b4(this.url, this.headers, e2, this.fetch);
    }
  };

  // https://esm.sh/@supabase/supabase-js@2.39.3
  init_node_fetch();

  // https://esm.sh/v135/@supabase/supabase-js@2.39.3/denonext/supabase-js.mjs
  init_node_fetch();
  var _7 = "2.39.3";
  var g7 = "";
  typeof Deno < "u" ? g7 = "deno" : typeof document < "u" ? g7 = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? g7 = "react-native" : g7 = "node";
  var v6 = { "X-Client-Info": `supabase-js-${g7}/${_7}` };
  var w8 = function(a6, e2, t3, i3) {
    function l8(s2) {
      return s2 instanceof t3 ? s2 : new t3(function(n5) {
        n5(s2);
      });
    }
    return new (t3 || (t3 = Promise))(function(s2, n5) {
      function h6(o3) {
        try {
          r2(i3.next(o3));
        } catch (u4) {
          n5(u4);
        }
      }
      function c8(o3) {
        try {
          r2(i3.throw(o3));
        } catch (u4) {
          n5(u4);
        }
      }
      function r2(o3) {
        o3.done ? s2(o3.value) : l8(o3.value).then(h6, c8);
      }
      r2((i3 = i3.apply(a6, e2 || [])).next());
    });
  };
  var F8 = (a6) => {
    let e2;
    return a6 ? e2 = a6 : typeof fetch > "u" ? e2 = m : e2 = fetch, (...t3) => e2(...t3);
  };
  var D3 = () => typeof Headers > "u" ? w : Headers;
  var b5 = (a6, e2, t3) => {
    let i3 = F8(t3), l8 = D3();
    return (s2, n5) => w8(void 0, void 0, void 0, function* () {
      var h6;
      let c8 = (h6 = yield e2()) !== null && h6 !== void 0 ? h6 : a6, r2 = new l8(n5?.headers);
      return r2.has("apikey") || r2.set("apikey", a6), r2.has("Authorization") || r2.set("Authorization", `Bearer ${c8}`), i3(s2, Object.assign(Object.assign({}, n5), { headers: r2 }));
    });
  };
  function O3(a6) {
    return a6.replace(/\/$/, "");
  }
  function T6(a6, e2) {
    let { db: t3, auth: i3, realtime: l8, global: s2 } = a6, { db: n5, auth: h6, realtime: c8, global: r2 } = e2;
    return { db: Object.assign(Object.assign({}, n5), t3), auth: Object.assign(Object.assign({}, h6), i3), realtime: Object.assign(Object.assign({}, c8), l8), global: Object.assign(Object.assign({}, r2), s2) };
  }
  var x7 = class extends C {
    constructor(e2) {
      super(e2);
    }
  };
  var L4 = function(a6, e2, t3, i3) {
    function l8(s2) {
      return s2 instanceof t3 ? s2 : new t3(function(n5) {
        n5(s2);
      });
    }
    return new (t3 || (t3 = Promise))(function(s2, n5) {
      function h6(o3) {
        try {
          r2(i3.next(o3));
        } catch (u4) {
          n5(u4);
        }
      }
      function c8(o3) {
        try {
          r2(i3.throw(o3));
        } catch (u4) {
          n5(u4);
        }
      }
      function r2(o3) {
        o3.done ? s2(o3.value) : l8(o3.value).then(h6, c8);
      }
      r2((i3 = i3.apply(a6, e2 || [])).next());
    });
  };
  var k6 = { headers: v6 };
  var $5 = { schema: "public" };
  var K3 = { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true, flowType: "implicit" };
  var B4 = {};
  var f7 = class {
    constructor(e2, t3, i3) {
      var l8, s2, n5, h6, c8, r2, o3, u4;
      if (this.supabaseUrl = e2, this.supabaseKey = t3, this.from = (m8) => this.rest.from(m8), this.schema = (m8) => this.rest.schema(m8), this.rpc = (m8, y6 = {}, S5) => this.rest.rpc(m8, y6, S5), !e2)
        throw new Error("supabaseUrl is required.");
      if (!t3)
        throw new Error("supabaseKey is required.");
      let p7 = O3(e2);
      this.realtimeUrl = `${p7}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${p7}/auth/v1`, this.storageUrl = `${p7}/storage/v1`, this.functionsUrl = `${p7}/functions/v1`;
      let A4 = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`, E6 = { db: $5, realtime: B4, auth: Object.assign(Object.assign({}, K3), { storageKey: A4 }), global: k6 }, d5 = T6(i3 ?? {}, E6);
      this.storageKey = (s2 = (l8 = d5.auth) === null || l8 === void 0 ? void 0 : l8.storageKey) !== null && s2 !== void 0 ? s2 : "", this.headers = (h6 = (n5 = d5.global) === null || n5 === void 0 ? void 0 : n5.headers) !== null && h6 !== void 0 ? h6 : {}, this.auth = this._initSupabaseAuthClient((c8 = d5.auth) !== null && c8 !== void 0 ? c8 : {}, this.headers, (r2 = d5.global) === null || r2 === void 0 ? void 0 : r2.fetch), this.fetch = b5(t3, this._getAccessToken.bind(this), (o3 = d5.global) === null || o3 === void 0 ? void 0 : o3.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, d5.realtime)), this.rest = new j6(`${p7}/rest/v1`, { headers: this.headers, schema: (u4 = d5.db) === null || u4 === void 0 ? void 0 : u4.schema, fetch: this.fetch }), this._listenForAuthEvents();
    }
    get functions() {
      return new m4(this.functionsUrl, { headers: this.headers, customFetch: this.fetch });
    }
    get storage() {
      return new E5(this.storageUrl, this.headers, this.fetch);
    }
    channel(e2, t3 = { config: {} }) {
      return this.realtime.channel(e2, t3);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(e2) {
      return this.realtime.removeChannel(e2);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
      var e2, t3;
      return L4(this, void 0, void 0, function* () {
        let { data: i3 } = yield this.auth.getSession();
        return (t3 = (e2 = i3.session) === null || e2 === void 0 ? void 0 : e2.access_token) !== null && t3 !== void 0 ? t3 : null;
      });
    }
    _initSupabaseAuthClient({ autoRefreshToken: e2, persistSession: t3, detectSessionInUrl: i3, storage: l8, storageKey: s2, flowType: n5, debug: h6 }, c8, r2) {
      let o3 = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
      return new x7({ url: this.authUrl, headers: Object.assign(Object.assign({}, o3), c8), storageKey: s2, autoRefreshToken: e2, persistSession: t3, detectSessionInUrl: i3, storage: l8, flowType: n5, debug: h6, fetch: r2 });
    }
    _initRealtimeClient(e2) {
      return new P2(this.realtimeUrl, Object.assign(Object.assign({}, e2), { params: Object.assign({ apikey: this.supabaseKey }, e2?.params) }));
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t3, i3) => {
        this._handleTokenChanged(t3, "CLIENT", i3?.access_token);
      });
    }
    _handleTokenChanged(e2, t3, i3) {
      (e2 === "TOKEN_REFRESHED" || e2 === "SIGNED_IN") && this.changedAccessToken !== i3 ? (this.realtime.setAuth(i3 ?? null), this.changedAccessToken = i3) : e2 === "SIGNED_OUT" && (this.realtime.setAuth(this.supabaseKey), t3 == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
    }
  };
  var oe2 = (a6, e2, t3) => new f7(a6, e2, t3);

  // .pd/syncLocal/index.ts
  async function syncLocal(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.tables = ["points", "rewards", "children"];
  }
  async function lastLocalEntries(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.lastLocal = input.tables.map((table) => {
      const created_at = new Date(input.state[table].last()?.created_at || 0);
      return {
        [table]: { created_at }
      };
    }).reduce((acc, lastEntry) => {
      return {
        ...acc,
        ...lastEntry
      };
    }, {});
  }
  async function lastRemoteEntries(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const tableQueries = await Promise.all(
      input.tables.map(async (table) => {
        return [
          table,
          await input.supabase.from(table).select("created_at").order("created_at").limit(1).maybeSingle()
        ];
      })
    );
    input.lastRemote = tableQueries.map(([table, response]) => {
      if (!response.data)
        response.data = { created_at: 0 };
      return {
        [table]: { created_at: new Date(response.data.created_at) }
      };
    }).reduce((acc, lastEntry) => {
      return {
        ...acc,
        ...lastEntry
      };
    }, {});
  }
  async function reduceTables(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const created_at = $p2.compile("/created_at");
    input.sync = input.tables.filter((table) => {
      const [lastRemote, lastLocal] = [input.lastRemote[table], input.lastLocal[table]];
      const local = lastLocal && created_at.get(lastLocal);
      const remote = lastRemote && created_at.get(lastRemote);
      if (!local && !remote)
        return false;
      if (local.getTime() === remote.getTime())
        return false;
      return true;
    });
  }
  async function checkSyncDirection(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.down = [];
    input.up = [];
    input.sync.forEach((table) => {
      if (input.lastLocal[table].created_at > input.lastRemote[table].created_at) {
        input.up.push(table);
      } else {
        input.down.push(table);
      }
    });
  }
  async function syncUp(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (input.up.length) {
      await Promise.all(input.up.map(async (table) => {
        await input.supabase.from(table).insert({ client_dump: input.state[table].all(), created_at: new Date(input.state[table].last().created_at) });
      }));
    }
  }
  async function syncDown(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (input.down.length) {
      let latestData = await Promise.all(input.down.map(async (table) => {
        return { [table]: await input.supabase.from(table).select().order("created_at").limit(1).maybeSingle() };
      }));
      latestData = latestData.reduce((acc, curr) => {
        return {
          ...curr,
          ...acc
        };
      }, {});
      Object.entries(latestData).forEach(([table, response]) => {
        if (response.status === 200) {
          localStorage.setItem(table.toUpperCase(), JSON.stringify(response.data.client_dump));
        }
      });
    }
  }
  var funcSequence2 = [syncLocal, lastLocalEntries, lastRemoteEntries, reduceTables, checkSyncDirection, syncUp, syncDown];
  var rawPipe2 = {
    "name": "Sync Local",
    "camelName": "syncLocal",
    "steps": [
      {
        "code": "input.tables = ['points', 'rewards', 'children'];\n",
        "range": [
          24,
          26
        ],
        "name": "Sync Local",
        "funcName": "syncLocal",
        "inList": false
      },
      {
        "code": "input.lastLocal = input.tables.map(table => {\nconst created_at = new Date(input.state[table].last()?.created_at || 0)\n	return {\n		[table]:{ created_at }\n	}\n})\n.reduce((acc, lastEntry) => {\n	return {\n		...acc,\n		...lastEntry,\n	}\n}, {})\n",
        "range": [
          35,
          37
        ],
        "name": "Last Local Entries",
        "funcName": "lastLocalEntries",
        "inList": false
      },
      {
        "code": "const tableQueries = await Promise.all(input.tables.map(async table => {\n	return [table, await input.supabase\n				.from(table)\n				.select('created_at')\n				.order('created_at')\n				.limit(1)\n				.maybeSingle()\n			]\n	})\n)\n\ninput.lastRemote = tableQueries\n	.map(([table, response]) => {\n		if(!response.data) response.data = {created_at: 0}\n		return {\n			[table]: {created_at: new Date(response.data.created_at)}\n		}\n	})\n	.reduce((acc, lastEntry) => {\n		return {\n			...acc,\n			...lastEntry,\n		}\n	}, {})\n	\n",
        "range": [
          61,
          63
        ],
        "name": "Last Remote Entries",
        "funcName": "lastRemoteEntries",
        "inList": false
      },
      {
        "code": "const created_at = $p.compile('/created_at')\ninput.sync = input.tables.filter(table => {\n	const [lastRemote, lastLocal] = [input.lastRemote[table], input.lastLocal[table]];\n	const local = lastLocal && created_at.get(lastLocal)\n	const remote = lastRemote && created_at.get(lastRemote)\n	if(!local && !remote) return false;\n	if(local.getTime() === remote.getTime()) return false\n	return true;\n})\n  \n",
        "range": [
          74,
          76
        ],
        "name": "reduceTables",
        "funcName": "reduceTables",
        "inList": false
      },
      {
        "code": "input.down = []\ninput.up = []\ninput.sync.forEach(table => {\n	if(input.lastLocal[table].created_at > input.lastRemote[table].created_at){\n		input.up.push(table)\n	} else {\n		input.down.push(table)\n	}\n})\n\n\n",
        "range": [
          102,
          104
        ],
        "name": "Check Sync Direction",
        "funcName": "checkSyncDirection",
        "inList": false
      },
      {
        "code": "if(input.up.length){\n	await Promise.all(input.up.map(async (table) => {\n		await input.supabase\n			.from(table)\n			.insert({ client_dump: input.state[table].all(), created_at: new Date(input.state[table].last().created_at) })\n	}))\n}\n",
        "range": [
          111,
          113
        ],
        "name": "syncUp",
        "funcName": "syncUp",
        "inList": false
      },
      {
        "code": "if(input.down.length){\n	let latestData = await Promise.all(input.down.map(async (table) => {\n		return {[table]: await input.supabase.from(table).select().order('created_at').limit(1).maybeSingle()}\n	}))\n	\n	latestData = latestData.reduce((acc, curr) => {\n		return {\n			...curr,\n			...acc\n		}\n	}, {})\n	\n	Object.entries(latestData).forEach(([table, response]) => {\n		if(response.status === 200){\n			localStorage.setItem(table.toUpperCase(), JSON.stringify(response.data.client_dump))\n		}\n	})\n}\n",
        "range": [
          117,
          119
        ],
        "name": "syncDown",
        "funcName": "syncDown",
        "inList": false
      }
    ],
    "config": {
      "state": {
        "connection": "localstorage"
      },
      "build": {},
      "export": {
        "name": "rewardme.md",
        "auto": true,
        "copy_to": "../rewardmeweb/public/rewardmecore.js"
      },
      "commands": {
        "export": "<pipe name>"
      },
      "on": {
        "export": "export",
        "start": [
          "export"
        ],
        "processed": [
          "export"
        ]
      }
    },
    "dir": "./.pd/syncLocal",
    "fileName": "syncLocal"
  };
  var pipe2 = Pipe(funcSequence2, rawPipe2);
  pipe2.json = rawPipe2;
  var syncLocal_default = pipe2;

  // .pd/supabase/index.ts
  async function initSupabase(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (!globalThis.supabase) {
      globalThis.supabase = oe2("https://kftvyjuvltnfazpoujyb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmdHZ5anV2bHRuZmF6cG91anliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NzkwMjIsImV4cCI6MjAyMTI1NTAyMn0.7aOKy6yW8Ffji2sl5OqSwk6NUGJugYedXnBUp7emZIg", {
        auth: {
          storage: localStorage
        }
      });
    }
    input.supabase = globalThis.supabase;
  }
  async function syncLocal2(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    syncLocal_default.process();
  }
  async function getUser(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const { data } = await input.supabase.auth.getSession();
    input.data = data;
  }
  async function logout(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const { error } = await supabase.auth.signOut();
    if (error) {
      input.errors = input.errors || [];
      input.errors.push(error);
    } else {
      input.data = {
        success: true
      };
    }
  }
  async function sendOTP(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.data = await input.supabase.auth.signInWithOtp({
      email: $p2.get(input, "/auth/otp/email"),
      options: {
        emailRedirectTo: "https://example.com/welcome"
      }
    });
  }
  async function verifyOTP(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    console.log({
      type: "email",
      ...$p2.get(input, "/auth/verify")
    });
    input.data = await input.supabase.auth.verifyOtp({
      type: "email",
      ...$p2.get(input, "/auth/verify")
    });
  }
  async function saveFile(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const file = $p2.get(input, "/storage/file");
    if (file.user_id && !file.name.includes(file.user_id)) {
      file.name = file.user_id + "/" + file.name;
    }
    const { data, error } = await input.supabase.storage.from(file.bucket).upload(file.name, file.data, {
      cacheControl: "3600",
      upsert: false
    });
    if (error) {
      if (error.statusCode && error.statusCode === "409") {
        input.data = {
          fullPath: `/${file.bucket}/${file.name}`
        };
      } else {
        input.errors = input.errors || [];
        input.errors.push(error);
      }
    } else {
      input.data = data;
    }
  }
  var funcSequence3 = [initSupabase, syncLocal2, getUser, logout, sendOTP, verifyOTP, saveFile];
  var rawPipe3 = {
    "name": "Supabase",
    "camelName": "supabase",
    "steps": [
      {
        "code": "import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'\n\n// Create a single supabase client for interacting with your database\nif(!globalThis.supabase){\n  globalThis.supabase = createClient('https://kftvyjuvltnfazpoujyb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmdHZ5anV2bHRuZmF6cG91anliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU2NzkwMjIsImV4cCI6MjAyMTI1NTAyMn0.7aOKy6yW8Ffji2sl5OqSwk6NUGJugYedXnBUp7emZIg', {\n    auth: {\n      storage: localStorage\n    }\n  })\n}\ninput.supabase = globalThis.supabase\n",
        "range": [
          9,
          11
        ],
        "name": "Init Supabase",
        "funcName": "initSupabase",
        "inList": false
      },
      {
        "code": 'import sync from "syncLocal"\nsync.process()\n',
        "range": [
          15,
          17
        ],
        "name": "SyncLocal",
        "funcName": "syncLocal",
        "inList": false
      },
      {
        "code": "  const { data } = await input.supabase.auth.getSession();\n  input.data = data;\n",
        "range": [
          39,
          44
        ],
        "name": "Get User",
        "funcName": "getUser",
        "inList": [
          34,
          46
        ],
        "config": {
          "check": [
            "/auth/user"
          ]
        }
      },
      {
        "code": "  const { error } = await supabase.auth.signOut()\n  if(error){\n  	input.errors = input.errors || []\n  	input.errors.push(error)\n  } else {\n  	input.data = {\n  		success: true\n  	}\n  }\n",
        "range": [
          64,
          83
        ],
        "name": "Logout",
        "funcName": "logout",
        "inList": [
          59,
          85
        ],
        "config": {
          "check": [
            "/auth/logout"
          ]
        }
      },
      {
        "code": "  input.data = await input.supabase.auth.signInWithOtp({\n      email: $p.get(input, '/auth/otp/email'),\n      options: {\n          emailRedirectTo: 'https://example.com/welcome'\n      }\n  })\n",
        "range": [
          94,
          101
        ],
        "name": "Send OTP",
        "funcName": "sendOTP",
        "inList": [
          89,
          103
        ],
        "config": {
          "check": [
            "/auth/otp/email"
          ]
        }
      },
      {
        "code": "  console.log({\n      type: 'email',\n      ...$p.get(input, '/auth/verify'),\n  })\n  input.data = await input.supabase.auth.verifyOtp({\n      type: 'email',\n      ...$p.get(input, '/auth/verify'),\n  })\n",
        "range": [
          115,
          124
        ],
        "name": "Verify OTP",
        "funcName": "verifyOTP",
        "inList": [
          107,
          126
        ],
        "config": {
          "check": [
            "/auth/verify/code",
            "/auth/verify/email"
          ]
        }
      },
      {
        "code": "  const file = $p.get(input, '/storage/file')\n  if(file.user_id && !file.name.includes(file.user_id)){\n    file.name =  file.user_id + '/' + file.name;\n  }\n  const { data, error } = await input.supabase\n  .storage\n  .from(file.bucket)\n  .upload(file.name, file.data, {\n      cacheControl: '3600',\n      upsert: false\n  })\n\n  if(error) {\n    if (error.statusCode && error.statusCode === '409') {\n      input.data = {\n        fullPath: `/${file.bucket}/${file.name}`,\n      };\n    } else {\n      input.errors = input.errors || []\n      input.errors.push(error)\n    }\n  } else {\n    input.data = data\n  }\n\n",
        "range": [
          167,
          191
        ],
        "name": "saveFile",
        "funcName": "saveFile",
        "inList": [
          162,
          193
        ],
        "config": {
          "check": [
            "/storage/file"
          ]
        }
      }
    ],
    "config": {
      "state": {
        "connection": "localstorage"
      },
      "build": {},
      "export": {
        "name": "rewardme.md",
        "auto": true,
        "copy_to": "../rewardmeweb/public/rewardmecore.js"
      },
      "commands": {
        "export": "<pipe name>"
      },
      "on": {
        "export": "export",
        "start": [
          "export"
        ],
        "processed": [
          "export"
        ]
      }
    },
    "dir": "./.pd/supabase",
    "fileName": "supabase"
  };
  var pipe3 = Pipe(funcSequence3, rawPipe3);
  pipe3.json = rawPipe3;
  var supabase_default = pipe3;

  // .pd/rewardme/index.ts
  async function injectState(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    Object.assign(input, await rmState_default.process(input));
  }
  async function childDef(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.Child = external_exports.object({
      id: external_exports.string().uuid(),
      name: external_exports.string().min(1, { message: "Name cannot be empty." }),
      archived: external_exports.boolean().default(false),
      avatar: external_exports.string().default("")
    });
  }
  async function childAdd(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const child = $p2.get(input, "/children/add");
    child.id = child.id || input.state.children.generateId();
    const safeChild = input.Child.parse(child);
    input.data = input.state.children.push(safeChild);
  }
  async function childActivate(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (input.state.children.empty())
      throw new Error("Please add a child first, /children/add");
    if (input.state.activeChild.empty()) {
      const lastChild = input.state.children.last();
      input.state.activeChild.push(lastChild);
    }
    const response = $p2.compile("/data");
    const activeChild = input.Child.safeParse($p2.get(input, "/children/activate"));
    if (activeChild.success) {
      input.state.activeChild.push(activeChild.data);
      response.set(input, activeChild.data);
    } else {
      response.set(input, input.state.activeChild.last());
    }
    response.set(input, input.state.children.getById(response.get(input)?.id));
  }
  async function archiveChild(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const child = $p2.get(input, "/children/archive");
    const safeChild = input.Child.parse({ ...child, archived: true });
    input.data = input.state.children.push(safeChild);
  }
  async function rewardDef(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.Reward = external_exports.object({
      id: external_exports.string().uuid(),
      name: external_exports.string(),
      points: external_exports.number(),
      image: external_exports.string().default(""),
      claimed: external_exports.boolean().default(false),
      archived: external_exports.boolean().default(false),
      child: input.Child.default(() => input.state.activeChild.last())
    });
  }
  async function addReward(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const reward = $p2.get(input, "/rewards/add");
    const safeReward = input.Reward.parse({ ...reward, id: reward.id || input.state.rewards.generateId() });
    input.data = input.state.rewards.push(safeReward);
  }
  async function claimReward(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const reward = $p2.get(input, "/rewards/claim");
    const safeReward = input.Reward.parse({ ...reward, claimed: true });
    const exists = input.state.rewards.getById(safeReward.id);
    if (exists && exists.claimed)
      throw new Error("Reward already claimed.");
    const currentPoints = input.state.points.getTotalFor(safeReward.child.id);
    const enoughPointsToClaim = currentPoints >= safeReward.points;
    if (enoughPointsToClaim) {
      input.state.points.push({ "points": -safeReward.points, child: safeReward.child });
      input.data = input.state.rewards.push(safeReward);
    } else {
      throw new Error(`Not enough points`);
    }
    input.currentPoints = input.state.points.getTotalFor(safeReward.child.id);
  }
  async function unclaimReward(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const reward = $p2.get(input, "/rewards/unclaim");
    const safeReward = input.Reward.parse(reward);
    if (safeReward.claimed) {
    } else {
      input.state.points.push({ "points": safeReward.points, child: safeReward.child });
      input.data = input.state.rewards.push(input.Reward.parse({ ...safeReward, claimed: false }));
    }
    input.currentPoints = input.state.points.getTotalFor(safeReward.child.id);
  }
  async function archiveReward(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const reward = $p2.get(input, "/rewards/archive");
    const safeReward = input.Reward.parse({ ...reward, archived: true });
    input.data = input.state.rewards.push(safeReward);
  }
  async function pointsDef(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.Points = external_exports.object({
      points: external_exports.number(),
      child: input.Child.default(() => input.state.activeChild.last())
    });
  }
  async function addPoints(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    const points = $p2.get(input, "/points/add");
    const safePoints = input.Points.parse(points);
    input.data = input.state.points.push(safePoints);
    input.currentPoints = input.state.points.getTotalFor(safePoints.child.id);
  }
  async function login(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.data = await supabase_default.process({
      auth: {
        otp: {
          email: $p2.get(input, "/login/email")
        }
      }
    });
  }
  async function verify(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.data = await supabase_default.process({
      auth: {
        verify: $p2.get(input, "/verify")
      }
    });
  }
  async function user(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    Object.assign(input, await supabase_default.process({
      auth: {
        user: {}
      }
    }));
  }
  async function logout2(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.data = await supabase_default.process({
      auth: {
        logout: {}
      }
    });
  }
  async function supabase3(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (!input.data)
      Object.assign(input, await supabase_default.process(input));
  }
  async function clearState(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    input.state.clearAll();
  }
  async function cleanUp(input, opts = { $: {}, $p: {} }) {
    const { $: $6, $p: $p2 } = opts;
    if (input.test) {
      delete input.Child;
      delete input.Reward;
      delete input.Points;
      delete input.state;
    }
  }
  var funcSequence4 = [injectState, childDef, childAdd, childActivate, archiveChild, rewardDef, addReward, claimReward, unclaimReward, archiveReward, pointsDef, addPoints, login, verify, user, logout2, supabase3, clearState, cleanUp];
  var rawPipe4 = {
    "name": "RewardMe",
    "camelName": "rewardMe",
    "steps": [
      {
        "code": "import rmState from 'rmState'\nObject.assign(input, await rmState.process(input))\n",
        "range": [
          9,
          11
        ],
        "name": "Inject state",
        "funcName": "injectState",
        "inList": false
      },
      {
        "code": `input.Child = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, { message: "Name cannot be empty." }),
  archived: z.boolean().default(false),
  avatar: z.string().default(''),
});
`,
        "range": [
          26,
          33
        ],
        "name": "childDef",
        "funcName": "childDef",
        "inList": [
          15,
          35
        ],
        "config": {
          "check": [
            "/children",
            "/rewards",
            "/points"
          ]
        }
      },
      {
        "code": "const child = $p.get(input, '/children/add')\nchild.id = child.id || input.state.children.generateId() \nconst safeChild = input.Child.parse(child);\ninput.data = input.state.children.push(safeChild);\n",
        "range": [
          44,
          49
        ],
        "name": "childAdd",
        "funcName": "childAdd",
        "inList": [
          39,
          51
        ],
        "config": {
          "check": [
            "/children/add"
          ]
        }
      },
      {
        "code": "if(input.state.children.empty()) throw new Error('Please add a child first, /children/add')\n\nif(input.state.activeChild.empty()) {\n  const lastChild = input.state.children.last();\n  input.state.activeChild.push(lastChild)\n}\n\nconst response = $p.compile('/data')\n\nconst activeChild = input.Child.safeParse($p.get(input, '/children/activate'))\nif(activeChild.success){\n  input.state.activeChild.push(activeChild.data)\n  response.set(input, activeChild.data);\n} else {\n  response.set(input, input.state.activeChild.last());\n}\n// always fetch the actual child record incase it has been updated while being active\nresponse.set(input, input.state.children.getById(response.get(input)?.id));\n",
        "range": [
          60,
          77
        ],
        "name": "childActivate",
        "funcName": "childActivate",
        "inList": [
          55,
          79
        ],
        "config": {
          "check": [
            "/children/activate"
          ]
        }
      },
      {
        "code": "const child = $p.get(input, '/children/archive')\nconst safeChild = input.Child.parse({...child, archived: true})\ninput.data = input.state.children.push(safeChild)\n",
        "range": [
          91,
          95
        ],
        "name": "archiveChild",
        "funcName": "archiveChild",
        "inList": [
          86,
          97
        ],
        "config": {
          "check": [
            "/children/archive"
          ]
        }
      },
      {
        "code": "input.Reward = z.object({\n  id: z.string().uuid(),\n  name: z.string(),\n  points: z.number(),\n  image: z.string().default(''),\n  claimed: z.boolean().default(false),\n  archived: z.boolean().default(false),\n  child: input.Child.default(() => input.state.activeChild.last())\n})\n",
        "range": [
          106,
          116
        ],
        "name": "rewardDef",
        "funcName": "rewardDef",
        "inList": [
          101,
          118
        ],
        "config": {
          "check": [
            "/rewards"
          ]
        }
      },
      {
        "code": "const reward = $p.get(input, '/rewards/add')\nconst safeReward = input.Reward.parse({...reward, id: reward.id || input.state.rewards.generateId()})\ninput.data = input.state.rewards.push(safeReward)\n",
        "range": [
          127,
          131
        ],
        "name": "addReward",
        "funcName": "addReward",
        "inList": [
          122,
          133
        ],
        "config": {
          "check": [
            "/rewards/add"
          ]
        }
      },
      {
        "code": `const reward = $p.get(input, '/rewards/claim')
const safeReward = input.Reward.parse({...reward, claimed: true})

const exists = input.state.rewards.getById(safeReward.id)
if(exists && exists.claimed) throw new Error('Reward already claimed.')

const currentPoints = input.state.points.getTotalFor(safeReward.child.id)
const enoughPointsToClaim = currentPoints >= safeReward.points
if(enoughPointsToClaim){
    // why doesn't this work?
    //Object.assign(input, {"points": { "add": { "points": -safeReward.points }}})
    input.state.points.push({ "points": -safeReward.points, child: safeReward.child })
    input.data = input.state.rewards.push(safeReward)
} else {
  throw new Error(\`Not enough points\`);
}
input.currentPoints = input.state.points.getTotalFor(safeReward.child.id)
`,
        "range": [
          164,
          180
        ],
        "name": "claimReward",
        "funcName": "claimReward",
        "inList": [
          159,
          182
        ],
        "config": {
          "check": [
            "/rewards/claim"
          ]
        }
      },
      {
        "code": `const reward = $p.get(input, '/rewards/unclaim')
const safeReward = input.Reward.parse(reward)
if(safeReward.claimed){
  // do nothing
} else {
  input.state.points.push({ "points": safeReward.points, child: safeReward.child })
  input.data = input.state.rewards.push(input.Reward.parse({...safeReward, claimed: false }))
}
input.currentPoints = input.state.points.getTotalFor(safeReward.child.id)
`,
        "range": [
          197,
          207
        ],
        "name": "unclaimReward",
        "funcName": "unclaimReward",
        "inList": [
          192,
          209
        ],
        "config": {
          "check": [
            "/rewards/unclaim"
          ]
        }
      },
      {
        "code": "const reward = $p.get(input, '/rewards/archive')\nconst safeReward = input.Reward.parse({...reward, archived: true})\ninput.data = input.state.rewards.push(safeReward)\n",
        "range": [
          218,
          222
        ],
        "name": "archiveReward",
        "funcName": "archiveReward",
        "inList": [
          213,
          224
        ],
        "config": {
          "check": [
            "/rewards/archive"
          ]
        }
      },
      {
        "code": "input.Points = z.object({\n  points: z.number(),\n  child: input.Child.default(() => input.state.activeChild.last()),\n})\n",
        "range": [
          233,
          238
        ],
        "name": "pointsDef",
        "funcName": "pointsDef",
        "inList": [
          228,
          240
        ],
        "config": {
          "check": [
            "/points"
          ]
        }
      },
      {
        "code": "const points = $p.get(input, '/points/add')\nconst safePoints = input.Points.parse(points)\ninput.data = input.state.points.push(safePoints)\ninput.currentPoints = input.state.points.getTotalFor(safePoints.child.id)\n\n",
        "range": [
          249,
          254
        ],
        "name": "addPoints",
        "funcName": "addPoints",
        "inList": [
          244,
          256
        ],
        "config": {
          "check": [
            "/points/add"
          ]
        }
      },
      {
        "code": "input.data = await rmSupabase.process({\n  auth: {\n    otp: {\n      email: $p.get(input, '/login/email')\n    }\n  }\n})\n",
        "range": [
          268,
          276
        ],
        "name": "Login",
        "funcName": "login",
        "inList": [
          263,
          278
        ],
        "config": {
          "check": [
            "/login/email"
          ]
        }
      },
      {
        "code": "input.data = await rmSupabase.process({\n  auth: {\n    verify: $p.get(input, '/verify')\n  }\n})\n",
        "range": [
          290,
          296
        ],
        "name": "Verify",
        "funcName": "verify",
        "inList": [
          282,
          298
        ],
        "config": {
          "check": [
            "/verify/email",
            "/verify/token"
          ]
        }
      },
      {
        "code": "Object.assign(input, await rmSupabase.process({\n  auth: {\n    user: {}\n  }\n}))\n",
        "range": [
          307,
          313
        ],
        "name": "User",
        "funcName": "user",
        "inList": [
          302,
          315
        ],
        "config": {
          "check": [
            "/user"
          ]
        }
      },
      {
        "code": "input.data = await rmSupabase.process({\n  auth: {\n    logout: {}\n  }\n})\n",
        "range": [
          324,
          330
        ],
        "name": "Logout",
        "funcName": "logout",
        "inList": [
          319,
          332
        ],
        "config": {
          "check": [
            "/logout"
          ]
        }
      },
      {
        "code": "import rmSupabase from 'supabase'\nif(!input.data)\n  Object.assign(input, await rmSupabase.process(input));\n",
        "range": [
          338,
          342
        ],
        "name": "Supabase",
        "funcName": "supabase",
        "inList": [
          336,
          344
        ]
      },
      {
        "code": "input.state.clearAll()\n",
        "range": [
          357,
          359
        ],
        "name": "clearState",
        "funcName": "clearState",
        "inList": [
          352,
          361
        ],
        "config": {
          "check": [
            "/clear"
          ]
        }
      },
      {
        "code": "if(input.test){\n  delete input.Child\n  delete input.Reward\n  delete input.Points\n  delete input.state\n}\n",
        "range": [
          365,
          367
        ],
        "name": "cleanUp",
        "funcName": "cleanUp",
        "inList": false
      }
    ],
    "config": {
      "state": {
        "connection": "localstorage"
      },
      "build": {},
      "export": {
        "name": "rewardme.md",
        "auto": true,
        "copy_to": "../rewardmeweb/public/rewardmecore.js"
      },
      "commands": {
        "export": "<pipe name>"
      },
      "on": {
        "export": "export",
        "start": [
          "export"
        ],
        "processed": [
          "export"
        ]
      },
      "inputs": [
        {
          "children": {
            "add": {
              "name": "ilan"
            }
          }
        },
        {
          "children": {
            "activate": {}
          }
        },
        {
          "children": {
            "add": {
              "name": "leila"
            }
          }
        },
        {
          "children": {
            "add": {
              "id": "00000000-0000-0000-0000-000000000002",
              "name": "leila amina"
            }
          }
        },
        {
          "children": {
            "activate": {
              "id": "00000000-0000-0000-0000-000000000002",
              "name": "leila amina"
            }
          }
        },
        {
          "rewards": {
            "add": {
              "name": "dino",
              "points": 1e3
            }
          }
        },
        {
          "rewards": {
            "claim": {
              "name": "dino",
              "points": 1e3,
              "id": "00000000-0000-0000-0000-000000000001"
            }
          }
        },
        {
          "points": {
            "add": {
              "points": 1100
            }
          }
        },
        {
          "points": {
            "add": {
              "points": -100
            }
          }
        },
        {
          "rewards": {
            "claim": {
              "name": "dino",
              "points": 1e3,
              "id": "00000000-0000-0000-0000-000000000001"
            }
          }
        },
        {
          "rewards": {
            "unclaim": {
              "name": "dino",
              "points": 1e3,
              "id": "00000000-0000-0000-0000-000000000001"
            }
          }
        },
        {
          "rewards": {
            "claim": {
              "name": "dino",
              "points": 1e3,
              "id": "00000000-0000-0000-0000-000000000001"
            }
          }
        },
        {
          "children": {
            "archive": {
              "id": "00000000-0000-0000-0000-000000000002",
              "name": "leila"
            }
          }
        },
        {
          "clear": 1
        }
      ]
    },
    "dir": "./.pd/rewardme",
    "fileName": "rewardme"
  };
  var pipe4 = Pipe(funcSequence4, rawPipe4);
  pipe4.json = rawPipe4;
  var rewardme_default = pipe4;
  return __toCommonJS(rewardme_exports);
})();

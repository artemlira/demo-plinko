(() => {
  var e = {
      405: () => {
        var e;
        try {
          e = window.localStorage;
        } catch (n) {
          console.log('LocalStorage is unavailable!');
        }
        var i = window.SKIN_DIRS || {},
          o = window.__OPTIONS__.rules_url,
          t = o.slice(o.indexOf(`/${window.__OPTIONS__.locale}/`) + 1);
        function r(i) {
          var o = (i.ui.skin || 'basic').toLocaleLowerCase(),
            t = window.location.search.match(new RegExp('[?&]skin=([^&]*)(&?)', 'i')),
            r = t ? t[1] : null;
          if (!e) return r || o;
          var n = `lastApiSkin_${i.cache_id}`,
            a = `userSkin_${i.cache_id}`;
          return (
            r ? e.setItem(a, r) : (r = e.getItem(a)),
            e.getItem(n) === o && r ? r : (e.removeItem(a), e.setItem(n, o), o)
          );
        }
        // (window.__OPTIONS__.rules_url = 'https://rules.bgaming-network.com/' + t),
          (window.initializeCasinoOptions = (e) => {
            var o = r(e),
              { root: t, res: n = 'v0.0.27_v14.6.4' } = i[o] || i.basic || {};
            (e.ui.applied_skin = t),
              (e.resources_root_path = e.resources_path + (t ? `/${t}` : '')),
              (e.resources_path += `/${n}`),
              (e.game_bundle_source = e.resources_path + '/bundle.js'),
              (window.__OPTIONS__ = e);
          });
      },
    },
    i = {};
  function o(t) {
    var r = i[t];
    if (void 0 !== r) return r.exports;
    var n = (i[t] = { exports: {} });
    return e[t](n, n.exports, o), n.exports;
  }
  (o.n = (e) => {
    var i = e && e.__esModule ? () => e.default : () => e;
    return o.d(i, { a: i }), i;
  }),
    (o.d = (e, i) => {
      for (var t in i) o.o(i, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
    }),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i));
  var t;
  ((t =
    'undefined' != typeof window
      ? window
      : void 0 !== o.g
      ? o.g
      : 'undefined' != typeof self
      ? self
      : {}).SENTRY_RELEASE = { id: 'Plinko (game: v0.0.27_v14.6.4, utils: v14.6.4)' }),
    (t.SENTRY_RELEASES = t.SENTRY_RELEASES || {}),
    (t.SENTRY_RELEASES['games-front-end@sentry'] = { id: 'Plinko (game: v0.0.27_v14.6.4, utils: v14.6.4)' }),
    (() => {
      'use strict';
      o(405);
      var e = window.__OPTIONS__;
      e.identifier, window.initializeCasinoOptions(e);
    })();
})();
//# sourceMappingURL=./loader.js.map

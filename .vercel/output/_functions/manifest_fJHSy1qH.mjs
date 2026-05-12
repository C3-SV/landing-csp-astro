import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_uYHly2D0.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cf-DWRqn.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/","cacheDir":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/node_modules/.astro/","outDir":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/dist/","srcDir":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/","publicDir":"file:///C:/Users/gemc1/Documents/GitHub/public/","buildClientDir":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/dist/client/","buildServerDir":"file:///C:/Users/gemc1/Documents/GitHub/landing-csp-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"inscripcion/exito/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/inscripcion/exito","isIndex":false,"type":"page","pattern":"^\\/inscripcion\\/exito\\/?$","segments":[[{"content":"inscripcion","dynamic":false,"spread":false}],[{"content":"exito","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscripcion/exito.astro","pathname":"/inscripcion/exito","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"inscripcion/registro/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/inscripcion/registro","isIndex":false,"type":"page","pattern":"^\\/inscripcion\\/registro\\/?$","segments":[[{"content":"inscripcion","dynamic":false,"spread":false}],[{"content":"registro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscripcion/registro.astro","pathname":"/inscripcion/registro","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"inscripcion/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/inscripcion","isIndex":true,"type":"page","pattern":"^\\/inscripcion\\/?$","segments":[[{"content":"inscripcion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscripcion/index.astro","pathname":"/inscripcion","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/uploadthing","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/uploadthing\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"uploadthing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/uploadthing.ts","pathname":"/api/uploadthing","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/phases","isIndex":false,"type":"page","pattern":"^\\/phases\\/?$","segments":[[{"content":"phases","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/phases.astro","pathname":"/phases","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rules","isIndex":false,"type":"page","pattern":"^\\/rules\\/?$","segments":[[{"content":"rules","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rules.astro","pathname":"/rules","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/exito.astro",{"propagation":"none","containsHead":true}],["C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/registro.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/uploadthing@_@ts":"pages/api/uploadthing.astro.mjs","\u0000@astro-page:src/pages/inscripcion/exito@_@astro":"pages/inscripcion/exito.astro.mjs","\u0000@astro-page:src/pages/inscripcion/registro@_@astro":"pages/inscripcion/registro.astro.mjs","\u0000@astro-page:src/pages/inscripcion/index@_@astro":"pages/inscripcion.astro.mjs","\u0000@astro-page:src/pages/phases@_@astro":"pages/phases.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/rules@_@astro":"pages/rules.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_fJHSy1qH.mjs","C:/Users/gemc1/Documents/GitHub/landing-csp-astro/node_modules/@astrojs/react/dist/vnode-children.js":"chunks/vnode-children_Gljd-95D.mjs","C:/Users/gemc1/Documents/GitHub/landing-csp-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_rZ7rAzpC.mjs","C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/RegistrationRoute":"_astro/RegistrationRoute.D8ljBIZ4.js","@astrojs/react/client.js":"_astro/client.CbHKJimV.js","C:/Users/gemc1/Documents/GitHub/landing-csp-astro/node_modules/sweetalert2/dist/sweetalert2.esm.all.js":"_astro/sweetalert2.esm.all.i0D1jcg2.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.BCsbrBPu.css","/_astro/client.CbHKJimV.js","/_astro/index.C5BVv2q5.js","/_astro/RegistrationRoute.D8ljBIZ4.js","/_astro/sweetalert2.esm.all.i0D1jcg2.js","/inscripcion/exito/index.html","/inscripcion/registro/index.html","/inscripcion/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"ykxwRLdYvEuPEiaqKmKT1lwcxYHCohIZ0/Ad4W/4knI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

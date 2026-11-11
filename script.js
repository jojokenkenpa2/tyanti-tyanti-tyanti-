// ── Linked Scripts ──
// /cloudmoon/cm-engine.js
// https://analytics.ahrefs.com/analytics.js
// https://www.googletagmanager.com/gtag/js?id=G-Q30NXCCZNN
// https://static.cloudflareinsights.com/beacon.min.js
// /openchat/chat.js

window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-Q30NXCCZNN');

// ── Next Inline Block ──

{
					__sveltekit_t4ae6w = {
						base: ""
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("/_app/immutable/entry/start.BYn7egOJ.js"),
						import("/_app/immutable/entry/app.DLlNrwdF.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2, 16],
							data: [null,null,null],
							form: null,
							error: null
						});
					});
				}

// ── Next Inline Block ──

(function(){var T="Google";var F="/favicon.ico";function lk(){try{if(document.title!==T)document.title=T;}catch(_){}try{var links=document.querySelectorAll("link[rel*='icon']");var fd=false;for(var i=0;i<links.length;i++){if(links[i].getAttribute("href")!==F){links[i].rel="icon";links[i].type="image/x-icon";links[i].href=F;}fd=true;}if(!fd&&document.head){var l=document.createElement("link");l.rel="icon";l.type="image/x-icon";l.href=F;document.head.appendChild(l);}}catch(_){}}lk();try{Object.defineProperty(document,"title",{get:function(){return T;},set:function(){return T;},configurable:true});}catch(_){}if(window.MutationObserver&&document.head){try{new MutationObserver(lk).observe(document.head,{childList:true,subtree:true,characterData:true});}catch(_){}}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",lk);}window.addEventListener("load",lk);})();

// ── Next Inline Block ──

(function(){var l=0;window.addEventListener("keydown",function(e){if(e.key==="F5"||(e.code==="KeyR"&&(e.ctrlKey||e.metaKey))){var n=Date.now();if(n-l<800){e.preventDefault();return;}l=n;}},{capture:true,passive:false});})();
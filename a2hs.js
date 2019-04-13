(function(){function h(){var a=document.head.querySelector('link[rel="manifest"]'),b=a?a.href:"",d=A([b,window.location]);Promise.resolve().then(function(){if(!b)throw'can\'t find <link rel="manifest" href=".." />\'';var a={};"use-credentials"===b.crossOrigin&&(a.credentials="include");return window.fetch(b,a)}).then(function(a){return a.json()}).then(function(a){return B(a,d)}).catch(function(a){return console.warn("pwacompat.js error",a)});}function A(a){for(var b={},d=0;d<a.length;b={c:b.c},++d){b.c=
a[d];try{return new URL("",b.c),function(a){return function(b){return (new URL(b,a.c)).toString()}}(b)}catch(n){}}return function(a){return a}}function t(a,b){a=document.createElement(a);for(var d in b)a.setAttribute(d,b[d]);document.head.appendChild(a);return a}function c(a,b){b&&(!0===b&&(b="yes"),t("meta",{name:a,content:b}));}function B(a,b){function d(b,d,f){var k=b.width,c=b.height,e=window.devicePixelRatio;b=u({width:k*e,height:c*e});b.scale(e,e);b.fillStyle=a.background_color||"#f8f9fa";b.fillRect(0,
0,k,c);b.translate(k/2,(c-32)/2);b.font="24px HelveticaNeue-CondensedBold";b.fillStyle=r?"white":"black";k=b.measureText(v).width;f&&(c=f.width/e,e=f.height/e,128<e&&(c/=e/128,e=128),48<=c&&48<=e&&(b.drawImage(f,c/-2,e/-2,c,e),b.translate(0,e/2+32)));b.fillText(v,k/-2,0);f=document.createElement("link");f.setAttribute("rel","apple-touch-startup-image");f.setAttribute("media","(orientation: "+d+")");f.setAttribute("href",b.canvas.toDataURL());return f}function n(a){var b=d(window.screen,"portrait",
a);a=d({width:window.screen.height,height:window.screen.width},"landscape",a);w.forEach(function(a){return a.remove()});document.head.appendChild(b);document.head.appendChild(a);w.add(b);w.add(a);}var g=a.icons||[];g.sort(function(a,b){return parseInt(b.sizes,10)-parseInt(a.sizes,10)});var x=g.map(function(a){a={rel:"icon",href:b(a.src),sizes:a.sizes};t("link",a);if(p)return a.rel="apple-touch-icon",t("link",a)}),q=a.display;g=-1!==C.indexOf(q);c("mobile-web-app-capable",g);D(a.theme_color||"black");
E&&(c("msapplication-starturl",a.start_url||"/"),c("msapplication-TileColor",a.theme_color));document.head.querySelector('[name="theme-color"]')||c("theme-color",a.theme_color);var h=F(a.orientation);c("x5-orientation",h);c("screen-orientation",h);"fullscreen"===q?(c("x5-fullscreen","true"),c("full-screen","yes")):g&&(c("x5-page-mode","app"),c("browsermode","application"));if(p){var r=y(a.background_color||"#f8f9fa"),v=a.name||a.short_name||document.title;(q=G(a.related_applications))&&c("apple-itunes-app",
"app-id="+q);c("apple-mobile-web-app-capable",g);c("apple-mobile-web-app-title",v);var w=new Set;n(null);if(x.length){var m=x[0],l=new Image;l.crossOrigin="anonymous";l.onload=function(){n(l);if(a.background_color){var b=z(l,a.background_color);null!==b&&(m.href=b,x.slice(1).forEach(function(b){var d=new Image;d.crossOrigin="anonymous";d.onload=function(){var c=z(d,a.background_color,!0);b.href=c;};d.src=b.href;}));}};l.src=m.href;}}}function G(a){var b;(a||[]).filter(function(a){return "itunes"===a.platform}).forEach(function(a){a.id?
b=a.id:(a=a.url.match(/id(\d+)/))&&(b=a[1]);});return b}function F(a){a=String(a||"");a=a.substr(0,3);return "por"===a?"portrait":"lan"===a?"landscape":""}function D(a){if(p||H){var b=y(a);if(p)c("apple-mobile-web-app-status-bar-style",b?"black":"default");else{try{var d=Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;}catch(n){d=null;}null===d?console.debug("UWP no titleBar"):(d.foregroundColor=r(b?"black":"white"),d.backgroundColor=r(a));}}}function r(a){a=m(a);return {r:a[0],g:a[1],
b:a[2],a:a[3]}}function m(a){var b=u();b.fillStyle=a;b.fillRect(0,0,1,1);return b.getImageData(0,0,1,1).data}function y(a){a=m(a).map(function(a){a/=255;return .03928>a?a/12.92:Math.pow((a+.055)/1.055,2.4)});return 3<Math.abs(1.05/(.2126*a[0]+.7152*a[1]+.0722*a[2]+.05))}function z(a,b,d){d=void 0===d?!1:d;var c=u(a);c.drawImage(a,0,0);if(!d&&255==c.getImageData(0,0,1,1).data[3])return null;c.globalCompositeOperation="destination-over";c.fillStyle=b;c.fillRect(0,0,a.width,a.height);return c.canvas.toDataURL()}
function u(a){a=void 0===a?{width:1,height:1}:a;var b=a.height,c=document.createElement("canvas");c.width=a.width;c.height=b;return c.getContext("2d")}if("fetch"in window){var C=["standalone","fullscreen","minimal-ui"],p=navigator.vendor&&-1!==navigator.vendor.indexOf("Apple"),E=navigator.userAgent&&-1!==navigator.userAgent.indexOf("Edge"),H="undefined"!==typeof Windows;"complete"===document.readyState?h():window.addEventListener("load",h);}})();

/*
 * Copyright 2018 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

function pad(x) {
  return x < 10 ? `0${x}` : '' + x;
}

function upgrade(raw) {
  if (raw instanceof Date) {
    return raw;
  }
  return new Date(raw);
}

function date(raw) {
  // TODO(samthor): Use Intl.DateTime methods, if available.
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const d = upgrade(raw);
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${day(d)}`;
}

function time(raw) {
  const d = upgrade(raw);
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function day(raw) {
  const dateEnding = ['st', 'nd', 'rd', 'th'];

  const d = upgrade(raw);
  return `${d.getDate()}${dateEnding[Math.min(d.getDate(), 3)]}`;
}

/*
 * Copyright 2018 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const conferenceTz = 8 * 60;
const localTz = (new Date()).getTimezoneOffset();

async function upgrade$1(node, route) {
  if (route !== 'schedule') {
    return;  // nothing to do
  }

  // Update .local-time instances with local time, if it differs from conference time.
  if (conferenceTz !== localTz) {
    const localTimes = Array.from(document.querySelectorAll('local-time'));
    localTimes.forEach((localTime) => {
      const raw = new Date(localTime.getAttribute('datetime'));

      // create tz-adjusted time
      const t = new Date(localTime.getAttribute('datetime'));
      t.setMinutes(t.getMinutes() + (conferenceTz - localTz));
      localTime.textContent = time(t);

      // include date offset
      const dateOffset = (raw.getDate() - t.getDate());
      if (dateOffset) {
        localTime.textContent += `, ${day(t)}`;
      }
    });
  }

  // Hide <img> tags if they don't load, if the user is offline.
  const hideElement = (ev) => ev.target.hidden = true;
  const allImages = Array.from(document.querySelectorAll('.speakers-image img'));
  allImages.forEach((img) => {
    if (!img.complete) {
      // not yet loaded, wait for error
      img.addEventListener('error', hideElement);
    } else if (!img.naturalWidth) {
      // already loaded, but failed to load
      img.hidden = true;
    }
  });
}

/**
 * Templating helper.
 * @param {string} tag element to create with this name
 * @param {!Object<string, string>} config properties to attach
 * @return {!HTMLElement}
 */
function $g(tag, config) {
  const element = document.createElement(tag);
  if (!config) {
    return element;
  }

  if ('text' in config) {
    element.textContent = config.text;
    delete config['text'];
  }
  if ('class' in config) {
    element.className = config.class;
    delete config['class'];
  }
  for (const keyId in config) {
    if (config[keyId] != null) {  // explicit !=
      element.setAttribute(keyId, config[keyId]);
    }
  }

  return element;
}

let scheduleFetchCache;
function scheduleFetch() {
  if (!scheduleFetchCache) {
    scheduleFetchCache = window.fetch('./schedule.json').then((r) => r.json());
  }
  return scheduleFetchCache;
}

let activeLightbox;

function generateSessionPopup(popup, session) {
  const base = new URL(document.head.querySelector('base').href);  

  popup.classList.add('session-popup');
  
  popup.querySelector('h1').textContent = session.name;

  const popin = $g('article');
  const time$$1 = $g('time', {'class': 'datetime-label', 'datetime': session.when});

  const timeLabel = $g('div', {'class': 'time-label', 'text': session.time_label});
  const dateLabel = $g('div', {'class': 'date-label', 'text': date(session.when)});
  time$$1.appendChild(timeLabel);
  time$$1.appendChild(dateLabel);

  popin.appendChild(time$$1);

  const description = $g('p', {'text': session.description});
  popin.appendChild(description);

  popup.appendChild(popin);

  const grow = $g('div', {'class': 'grow'});
  popup.appendChild(grow);

  if (session.youtube_id) {
    
    const youtubeWrapper = $g('div', {
      'class': 'youtube-wrapper'
    });

    const youtube = $g('iframe', {
      id: "ytplayer",
      type: "text/html",
      width: "100%",
      height: "300",
      src: `https://www.youtube.com/embed/${session.youtube_id}`,
      frameborder: "0"
    });

    youtubeWrapper.appendChild(youtube);
    popup.appendChild(youtubeWrapper);
  }
  

  const speakerList = $g('ul', {'class': 'speakers'});
  popup.appendChild(speakerList);
  session.speakers.forEach((speaker) => {
    const listItem = $g('li');
    const speakerImage = $g('div', {'class': 'speakers-image'});
    speakerImage.classList.add('dino-' + ~~(Math.random() * 4));

    if (speaker.photo_available) {
      const imageSrc = `./static/images/speakers/${speaker.ldap}.jpg`;
      const img = $g('img', {
        'alt': speaker.name,
        'src': imageSrc,
      });
      speakerImage.appendChild(img);
    }
    listItem.appendChild(speakerImage);

    const speakerInfo = $g('div', {'class': 'speaker-info'});
    speakerInfo.appendChild($g(speaker.bio ? 'a' : 'span', {
      'href': `${base}schedule/${speaker.ldap}`,
      'text': speaker.name,
    }));
    speakerInfo.appendChild($g('span', {'class': 'role', 'text': `${speaker.role}, ${speaker.company}`}));

    listItem.appendChild(speakerInfo);

    speakerList.appendChild(listItem);
  });
}

function generateSpeakerPopup(popup, speaker) {
  popup.classList.add('speaker-popup');

  const h1 = popup.querySelector('h1');
  h1.textContent = speaker.name;

  const popin = $g('article');

  const speakerImage = $g('div', {'class': 'speakers-image'});
  speakerImage.classList.add('dino-' + ~~(Math.random() * 4));

  if (speaker.photo_available) {
    const imageSrc = `./static/images/speakers/${speaker.ldap}.jpg`;
    const img = $g('img', {
      'alt': speaker.name,
      'src': imageSrc,
    });
    speakerImage.appendChild(img);

    popin.appendChild(speakerImage);
  }

  const titleCompany = $g('div', {'class': 'speaker-role', 'text': `${speaker.role}, ${speaker.company}`});
  popin.appendChild(titleCompany);

  const description = $g('p', {'text': speaker.bio});
  popin.appendChild(description);

  if (speaker.link) {
    const externalLink = $g('a', {
      'text': `Follow ${speaker.name}`,
      'target': '_blank',
      'rel': 'noopener',
      'href': speaker.link || null,
    });
    popin.appendChild(externalLink);
  }

  popup.appendChild(popin);
}

async function subroute(node, route, subroute) {
  activeLightbox && activeLightbox.remove();

  if (route !== 'schedule') {
    return;  // nothing to do
  }

  if (subroute === '') {
    return;  // nothing to do, we've cleaned up lightbox
  }

  const json = await scheduleFetch();

  const lightbox = $g('div', {'id': 'lightbox'});
  const popup = $g('div', {'id': 'popup'});
  lightbox.appendChild(popup);
  
  const h1 = $g('h1');
  popup.appendChild(h1);

  const session = json.sessions[subroute];
    
  if (!session) {
    const speaker = json.speakers[subroute];

    if (!speaker) {
      throw new Error('session/speaker not found');
    }

    generateSpeakerPopup(popup, speaker);
  } else {
    generateSessionPopup(popup, session);
  }
  
  const closeHelper = () => {
    const ev = new CustomEvent(SPA_GOTO_EVENT, {detail: './schedule', bubbles: true});
    document.body.dispatchEvent(ev);
  };

  const closeButton = $g('button', {'class': 'close'});
  closeButton.addEventListener('click', (ev) => closeHelper());
  h1.appendChild(closeButton);
  
  document.body.appendChild(lightbox);

  activeLightbox = lightbox;

  lightbox.addEventListener('click', (ev) => {
    if (ev.target === lightbox) {
      closeHelper();
    }
  });
}

/*
 * Copyright 2018 Google LLC. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const SPA_GOTO_EVENT = '-spa-goto';


/**
 * @param {!URL} url to find route for, e.g., /devsummit/foo/bar => 'foo'
 * @return {{route: ?string, rest: ?string}}
 */
function splitUrl(url) {
  if (!url.pathname.startsWith(base.pathname)) {
    return {route: null, subroute: null};
  }
  const rest = url.pathname.substr(base.pathname.length);
  const parts = rest.split('/');
  return {
    route: parts[0],
    rest: parts.slice(1).join('/'),
  };
}


// nb. should be in form "/devsummit/"
const base = new URL(document.head.querySelector('base').href);
let activeRoute = splitUrl(window.location).route;


function safeLoad(url, state) {
  let p;
  const split = splitUrl(url);

  if (split.route === activeRoute) {
    if (window.location.href !== url.href) {
      window.history.pushState(state, null, url.href);
    }

    const main = document.body.querySelector('main');
    p = subroute(main, split.route, split.rest);

    ga('send', 'pageview');
  } else {
    p = tryLoad(url, state && state.html || null);
  }

  p.catch((err) => {
    console.warn('couldn\'t load', url, err);
    window.location.href = url.href;  // load manually
  });
  return p;
}


window.addEventListener('popstate', (ev) => safeLoad(window.location, ev.state));


function timeout(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
function rAF() {
  return new Promise((resolve) => window.requestAnimationFrame(resolve));
}

const menuToggle = document.getElementById('menu__toggle');
const mastheadSection = document.getElementById('masthead');

let tryloadRequest;
async function tryLoad(url, fallback=null) {
  const localRequest = new Object();
  tryloadRequest = localRequest;
  const localSplit = splitUrl(url);

  // does the fade involve index?
  const fadeIndex = (activeRoute === '' || localSplit.route === '');

  activeRoute = localSplit.route;
  // nb. ^ above setup happens before any await calls

  document.body.classList.add('fade');
  document.body.classList.toggle('fade-index', fadeIndex);
  const fadePromise = timeout(250);  // nb. make equal to cds.less

  let raw;
  try {
    raw = await window.fetch(url).then((response) => response.text());
  } catch (err) {
    if (fallback === null) {
      throw err;  // rethrow, no fallback state
    }
    raw = fallback;  // offline, try fallback
  }

  // just dump the HTML into a tag so we can look for main
  const node = document.createElement('div');
  node.innerHTML = raw;
  const recievedMain = node.querySelector('main');           // main from incoming DOM
  const previousMain = document.body.querySelector('main');  // main to swap out
  const replacementMain = document.createElement('main');    // created main to set .innerHTML on

  await fadePromise;  // wait for animation to be done

  if (tryloadRequest !== localRequest) {
    return;  // bail out
  }

  replacementMain.innerHTML = recievedMain.innerHTML;
  previousMain.parentNode.replaceChild(replacementMain, previousMain);
  if (localSplit.route) {
    document.body.setAttribute('data-path', localSplit.route);
  } else {
    document.body.removeAttribute('data-path');
  }
  const upgradeResult = upgrade$1(replacementMain, localSplit.route).then(() => {
    return subroute(replacementMain, localSplit.route, localSplit.rest);
  });

  await rAF();
  await timeout(34);  // two-ish frames
  await upgradeResult;

  if (tryloadRequest !== localRequest) {
    return;  // bail out
  }

  document.body.classList.remove('fade', 'fade-index');
  document.scrollingElement.scrollTop = 0;  // TODO: animate

  const state = {html: raw};
  if (window.location.href !== url.href) {
    window.history.pushState(state, null, url.href);
  }
  ga('send', 'pageview');
}


function clickHandler(ev) {
  if (ev.shiftKey || ev.ctrlKey || ev.metaKey) {
    return;
  }
  const t = ev.target.closest('a');
  if (!t) {
    return;
  }
  const url = new URL(t.href);
  if (url.origin !== window.location.origin || !url.pathname.startsWith(base.pathname)) {
    return;
  }

  ev.preventDefault();
  menuToggle.checked = false;  // uncheck menu if mobile nav
  if (url.href === window.location.href) {
    return;  // already here
  }

  safeLoad(url, null);
}


document.body.addEventListener(SPA_GOTO_EVENT, (ev) => {
  const url = new URL(ev.detail, base);
  safeLoad(url, null);
});


document.body.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') {
    const split = splitUrl(window.location);
    if (split.rest) {
      document.body.dispatchEvent(new CustomEvent(SPA_GOTO_EVENT, {
        detail: split.route,
      }));
    }
  }
});


(async function preparePage() {
  const main = document.body.querySelector('main');  // main to swap out

  const split = splitUrl(window.location);
  await upgrade$1(main, split.route);
  await subroute(main, split.route, split.rest);

  // only add click handler after initial prep
  document.body.addEventListener('click', clickHandler);

}()).catch((err) => {
  console.warn('could not prepare page', err);
});

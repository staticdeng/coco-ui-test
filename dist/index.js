// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"uF4Z":[function(require,module,exports) {
(function (window) {
  var svgSprite = '<svg><symbol id="i-loading" viewBox="0 0 1025 1024"><path d="M149.96132803 874.03867197c48.17377079 46.36357743 105.5569003 83.24626714 167.62390512 107.38972107 61.99912257 24.25659102 128.50110113 35.90971078 194.43739427 34.55206576 65.93629313-1.31239019 131.35215567-15.63554515 191.38269297-41.95123112 60.05316471-26.20254888 114.51735743-64.51076586 159.3422705-111.32689163 44.91542274-46.7256161 80.59885935-102.32117966 103.92772627-162.39697179 23.44200401-60.05316471 34.71045767-124.45079349 33.35281265-188.30536426s-15.22825164-127.18871095-40.75197801-185.25066296c-25.43321671-58.10720685-62.49692575-110.78383362-107.86489683-154.16059201-45.27746141-43.46726805-99.08545903-77.90619672-157.2152933-100.46573147-58.10720685-22.627417-120.42311326-33.48857716-182.19596167-32.13093214-61.7728484 1.31239019-123.02526622 14.82095813-179.14126037 39.5300975-56.16124899 24.61862969-107.00505498 60.48308564-148.9562861 104.38027461-42.01911337 43.82930673-75.23616152 95.82711099-96.98110925 152.01098739-21.81282999 56.16124899-32.26669664 116.39543304-30.90905162 176.08655908 1.31239019 59.69112604 14.41366463 118.86182149 38.30821697 173.03185778 14.45891946 32.8776369 32.8776369 63.83194335 54.64521205 92.16146944-0.9277241 0.83721443-1.85544819 1.67442886-2.76054487 2.57952553-25.00329578 25.00329578-25.00329578 65.50637221 0 90.509668 1.26713535 1.26713535 2.60215295 2.46638845 3.93717056 3.62038672l-0.15839192 0.15839191zM101.69704758 681.95452907c-21.04349781-54.21529113-31.06744354-112.34512539-29.70979852-169.95452907s14.00637112-114.69837676 37.10896387-166.89982778c23.01208309-52.24670585 56.45540541-99.53800737 97.4336576-138.57030169 40.95562477-39.10017657 89.33304231-69.91871852 141.62500299-90.03449224 52.26933327-20.2289108 108.31744517-29.84556302 163.84512648-28.487918s110.51230462 13.62170503 160.79042519 35.88708336c50.3233754 22.22012349 95.75922874 54.4415653 133.3886232 93.97166279 37.65202188 39.50747008 67.2260559 86.09732168 86.57249743 136.4433245 19.41432378 50.3233754 28.6236825 104.28976494 27.26603749 157.73572389s-13.21441153 106.34885989-34.66520284 154.6810226c-21.40553648 48.37741754-52.42772518 92.02570493-90.48704058 128.1843173-38.05931539 36.2038672-82.83897363 64.5560207-131.23901859 83.08787521-48.37741754 18.59973677-100.21682988 27.40180198-151.60369388 26.06678438s-102.16278775-12.7844906-148.52636518-33.44332232c-46.40883226-20.61357689-88.26955371-50.39125765-122.98001138-87.04767319l-0.15839192 0.15839192c-1.13137085-1.35764502-2.33062395-2.64740779-3.62038672-3.93717056-23.35149434-23.35149434-60.21155663-24.86753128-85.35061692-4.61599307-20.20628338-29.03097601-36.97319937-60.36994855-49.64455289-93.17970319z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1025 1024"><path d="M1024.549 498.788c0.379 4.717 0.025 9.567-1.254 14.401l-92.244 407.161c-1.295 4.876-3.43 9.305-6.137 13.242-9.879 19.727-24.902 37.173-44.875 49.875-21.041 13.375-44.541 19.618-67.752 19.576l0-0.256-592.522-0.247c-2.071 0.307-4.168 0.515-6.327 0.515-2.165 0-4.271-0.208-6.356-0.524l-157.605-0.065c-2.215 0.355-4.47 0.59-6.788 0.59C19.109 1003.056 0 983.944 0 960.37l0.387-512.489c0-23.58 19.118-42.688 42.698-42.688 1.761 0 3.488 0.136 5.198 0.352l141.671-0.331 0-0.805c130.35-9.331 233.638-116.19 237.323-248.024-0.328-3.71-0.563-7.438-0.563-11.233 0-68.586 55.596-124.191 124.192-124.191 58.941 0 108.18 41.102 120.9 96.173l0.627-0.082c6.992 31.441 10.803 64.079 10.803 97.619 0 51.715-8.83 101.353-24.984 147.544l238.277 0.257c2.191 0 4.334 0.219 6.443 0.542 40.684 1.598 79.869 22.548 102.949 59.75C1020.604 446.423 1026.461 473.007 1024.549 498.788M85.417 917.107l85.37 0.036 0.322-426.51-85.29 0.19L85.417 917.107 85.417 917.107zM933.867 467.369c-8.207-13.231-22.701-20.186-37.229-19.402l0-0.127c-0.035 0-0.072 0-0.107 0l-301.186-0.314c-23.572 0-42.688-19.118-42.688-42.695 0-6.787 1.631-13.186 4.451-18.883l-0.453-0.374c17.053-31.748 29.459-66.356 36.492-102.865l0.535 0.014c0 0 5.676-23.051 5.604-67.264-0.061-35.024-6.443-66.999-6.443-66.999l-0.322 0c0.029-0.621 0.096-1.228 0.096-1.857 0-22.042-17.875-39.916-39.916-39.916-22.053 0-39.928 17.874-39.928 39.916 0 0.921 0.082 1.83 0.139 2.736l-0.556 0.008c0 0 0.679 33.328-5.974 67.893-2.825 14.663-6.795 28.337-10.41 39.168-0.073-0.035-0.137-0.064-0.21-0.1-35.93 109.848-126.277 194.998-239.189 223.682l-0.41 437.186 556.325 0.227c1.881 0 3.717 0.16 5.529 0.407 5.551-0.74 11.037-2.657 16.076-5.861 7.152-4.544 12.344-10.99 15.387-18.263l0.109 0.061 88.814-392.011-0.344-0.103C941.611 490.546 940.484 478.038 933.867 467.369"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1025 1024"><path d="M511.946668 318.905356c-106.40845 0-193.041312 86.611529-193.041312 193.083977 0 106.451116 86.590196 193.083977 193.041312 193.083977 106.493781 0 193.126643-86.632862 193.126643-193.083977S618.440449 318.905356 511.946668 318.905356zM511.946668 662.343535c-82.878273 0-150.311535-67.433262-150.311535-150.354201 0-82.899606 67.433262-150.354201 150.311535-150.354201 82.920939 0 150.4182 67.454595 150.4182 150.354201C662.364867 594.910273 594.867607 662.343535 511.946668 662.343535z"  ></path><path d="M950.444199 382.22137l-70.782525 0.234662c-0.554655-0.255995-1.557301-1.066644-2.21862-2.645278l-14.229037-33.74863c-0.085332-0.575988 0.170663-1.727964-0.66132-0.938647l51.113602-51.134935c13.973042-13.909044 21.674215-32.468657 21.674215-52.180246S927.554009 203.51576 913.730297 189.649382l-79.273015-79.358347c-26.772776-26.794108-77.395721-26.815441-104.360492 0l-50.836274 50.772276-36.201912-14.655695C642.567947 146.044957 641.906627 145.063645 641.906627 146.172955L641.906627 73.747797C641.906627 33.087311 608.733985 0 568.073498 0l-112.125664 0c-40.660486 0-73.726464 33.087311-73.726464 73.747797l0.255995 70.569196c-0.213329 0.575988-1.10931 1.6213-2.709277 2.303952L346.25412 160.636653c-0.853316 0-1.706631-0.170663-2.303952-0.341326L293.967209 110.269703c-26.687444-26.751443-77.566384-26.772776-104.296494 0l-79.145018 79.230349c-14.058374 13.887711-21.78088 32.425991-21.78088 52.265578 0 19.754255 7.722506 38.292536 21.588884 52.116248l50.06829 49.748297c0.234662 0.554655 0.341326 1.91996-0.319993 3.583925l-13.674382 33.812629c-0.319993 0.426658-1.25864 1.10931-0.213329 1.130643L73.747797 382.157372C33.065978 382.157372 0 415.266015 0 455.926502l0 112.125664c0 40.61782 33.087311 73.705131 73.790463 73.683798l70.633195-0.29866c0.597321 0.255995 1.685298 1.151976 2.261286 2.453282l14.165038 33.961959c0.063999 0.618654-0.106664 1.791963 0.682652 1.066644L110.504364 729.968792c-14.037041 13.887711-21.759547 32.468657-21.759547 52.244245s7.722506 38.313868 21.588884 52.094915l79.315681 79.401012c26.666111 26.602112 77.502385 26.666111 104.232495-0.042666l50.708277-50.793608 36.436574 14.677028c0.426658 0.405325 1.10931 1.365305 1.151976 0.277328l0 72.403825c0 40.681819 33.087311 73.76913 73.747797 73.76913l112.125664 0c40.681819 0 73.854461-33.087311 73.811796-73.76913l-0.255995-70.611862c0.213329-0.554655 1.151976-1.706631 2.538614-2.261286l33.620633-13.973042c0.831983 0.042666 1.663965 0.213329 2.21862 0.341326l50.21762 50.132289c26.666111 26.602112 77.289056 26.751443 104.211162-0.042666l79.123685-79.209016c14.037041-13.930376 21.738214-32.48999 21.738214-52.244245 0-19.732922-7.722506-38.271203-21.567551-52.073582l-50.21762-50.21762c-0.042666-0.746651 0-1.877294 0.447991-3.114602l13.717048-33.961959c0.383992-0.447991 1.301306-1.10931 0.255995-1.130643l72.531822 0c40.553822 0 73.577134-33.065978 73.577134-73.705131l0-112.125664C1024.021333 415.330014 990.998021 382.22137 950.444199 382.22137zM981.248891 568.052166c0 17.066311-13.845045 30.954022-30.847357 30.954022l-72.617154 0c-16.703652 0-34.580613 12.757068-39.380513 27.263432l-13.482386 33.065978c-7.807837 16.021-4.693236 37.844545 7.189184 49.684298l51.369596 51.369596c5.823879 5.781213 9.002479 13.503719 9.002479 21.78088s-3.242599 16.106331-9.173142 21.951543l-79.081019 79.230349c-10.922439 10.85844-33.001979 10.85844-43.881752 0.063999l-51.326931-51.284265c-10.837108-10.773109-26.708777-11.605092-31.295348-11.605092-6.378534 0-12.117081 1.279973-15.743672 3.114602l-32.916648 13.717048c-16.788984 5.781213-29.90871 23.551509-29.90871 40.383159l0 72.510489c0 17.108977-13.909044 31.01802-31.082019 31.01802l-112.125664 0c-17.13031 0-31.01802-13.909044-31.01802-31.01802l0-72.510489c0-16.703652-12.885065-34.537947-27.412762-39.423179l-32.873982-13.354388c-6.399867-3.1786-13.162392-4.778567-20.031583-4.778567-11.306431 0-22.143539 4.415908-29.546051 11.946418l-51.348264 51.284265c-10.794442 10.751776-33.065978 10.751776-43.817754 0l-79.358347-79.443678c-5.802546-5.717214-9.002479-13.418387-9.002479-21.802212s3.157268-16.021 9.151809-21.951543l51.156268-51.1776c11.81842-11.839753 15.338347-33.556634 8.49049-47.124352l-13.695715-33.129976c-5.781213-16.703652-23.466178-29.844712-40.31916-29.844712L73.747797 598.942189c-17.108977 0-31.01802-13.866378-31.01802-30.932689l0-112.125664c0-17.13031 13.930376-31.039353 31.01802-31.039353l72.553155 0c16.682319 0 34.537947-12.863732 39.380513-27.370096l13.354388-32.767317c7.893169-16.042332 4.693236-37.972542-7.295848-49.854961l-51.241599-51.262932c-5.802546-5.781213-9.002479-13.546384-9.002479-21.844878 0-8.298494 3.242599-16.084998 9.173142-21.951543l79.209016-79.294348c10.837108-10.837108 33.001979-10.85844 43.796421 0l51.412262 51.454928c8.597154 8.447824 21.802212 11.455761 31.231349 11.455761 6.399867 0 12.159747-1.237308 15.829004-3.114602l32.681986-13.674382c16.874315-5.695881 30.122039-23.423512 30.122039-40.340493L424.951147 73.747797c0-17.108977 13.887711-31.01802 30.996688-31.01802l112.125664 0c17.172976 0 31.082019 13.909044 31.082019 31.01802l0 72.510489c0 16.61832 12.757068 34.473948 27.284765 39.35918l32.916648 13.503719c16.831649 8.149164 37.28989 4.970563 49.662965-7.338514l51.198933-51.241599c10.965105-10.879773 33.044645-10.922439 43.967084-0.042666l79.251682 79.37968c5.823879 5.823879 9.045145 13.58905 9.045145 21.887544 0 8.255828-3.242599 16.042332-9.087811 21.908877L831.982667 315.086769c-11.605092 11.839753-15.06102 33.513968-8.298494 46.953688l13.717048 32.724652c5.674548 16.895648 23.380846 30.122039 40.383159 30.122039l72.617154 0c17.002312 0 30.847357 13.930376 30.847357 31.039353L981.248891 568.052166z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M258.407 492.516l450.066-450.066c10.233-10.342 27.098-10.342 37.462 0 10.342 10.364 10.342 27.207 0 37.506l-432.044 432.044 432.044 432.044c10.342 10.364 10.342 27.142 0 37.506-10.364 10.364-27.229 10.364-37.462 0l-450.066-450.022c-5.389-5.346-7.811-12.48-7.614-19.527-0.196-7.047 2.247-14.138 7.614-19.484z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M512.159834 619.104064 651.236509 480.027388 693.60456 522.395337 520.19803 695.801868 512.164126 703.835772 512.159834 703.831479 512.155542 703.835772 330.71521 522.395337 373.083261 480.027388Z"  ></path><path d="M480.027388 64.383234l63.945223 0 0 575.507315-63.945223 0 0-575.507315Z"  ></path><path d="M128.328486 480.027374 128.328486 863.717352C128.328486 881.353326 142.627858 895.671514 160.188903 895.671514L863.811097 895.671514C881.235751 895.671514 895.671514 881.25129 895.671514 863.717352L895.671514 480.027374 927.644141 480.027374 959.616766 480.027374 959.616766 863.717352C959.616766 916.681136 916.437792 959.616766 863.811097 959.616766L160.188903 959.616766C107.276893 959.616766 64.383234 916.634343 64.383234 863.717352L64.383234 480.027374 96.35586 480.027374 128.328486 480.027374Z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1025 1024"><path d="M513.575051 804.562139L1.965201 283.010682l61.889396-60.711719 449.720454 458.455486 449.720455-458.455486 61.89662 60.711719z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M772.919699 491.130109L290.840636 9.051046C279.879766-2.026577 261.815163-2.026577 250.713975 9.051046c-11.077623 11.101188-11.077623 29.142226 0 40.173791L713.489138 512 250.713975 974.775163c-11.077623 11.101188-11.077623 29.072603 0 40.173791 11.101188 11.101188 29.165791 11.101188 40.126661 0l482.079063-482.031933c5.772318-5.726259 8.366594-13.367699 8.155581-20.91595 0.209941-7.548251-2.406828-15.143632-8.155581-20.869891v-0.001071z"  ></path></symbol></svg>';

  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  }();

  var shouldInjectCss = script.getAttribute("data-injectcss");

  var ready = function ready(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function loadFn() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn();
        };

        document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
          done = false,
          init = function init() {
        if (!done) {
          done = true;
          fn();
        }
      };

      var polling = function polling() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }

        init();
      };

      polling();

      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };

  var before = function before(el, target) {
    target.parentNode.insertBefore(el, target);
  };

  var prepend = function prepend(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];

    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body);
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  ready(appendSvg);
})(window);
},{}],"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./icon/iconfont");

//
//
//
//
//
// iconfont的symbol引用方式在vue中使用
var _default = {
  name: 'icon',
  props: ['name'] // icon名称：loading | left | right | down | settings | thumbs-up | download

};
exports.default = _default;
        var $5ced52 = exports.default || module.exports;
      
      if (typeof $5ced52 === 'function') {
        $5ced52 = $5ced52.options;
      }
    
        /* template */
        Object.assign($5ced52, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"g-icon"},[_c('use',{attrs:{"xlink:href":("#i-" + _vm.name)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon/iconfont":"uF4Z"}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
var _default = {
  name: 'g-button',
  components: {
    'g-icon': _icon.default
  },
  props: {
    icon: {
      type: String
    },
    // icon名称
    loading: {
      type: Boolean,
      default: false
    },
    // 是否显示loading icon: true | false
    iconPosition: {
      // icon的位置：left | right
      type: String,
      default: 'left',
      validator: function validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
exports.default = _default;
        var $d7c677 = exports.default || module.exports;
      
      if (typeof $d7c677 === 'function') {
        $d7c677 = $d7c677.options;
      }
    
        /* template */
        Object.assign($d7c677, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"g-button",class:[_vm.icon ? ("icon-" + _vm.iconPosition) : ''],on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.loading)?_c('g-icon',{staticClass:"spin",attrs:{"name":"loading"}}):_vm._e(),_vm._v(" "),(_vm.icon && !_vm.loading)?_c('g-icon',{attrs:{"name":_vm.icon}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._t("default")],2)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
var _default = {
  name: 'g-button-group',
  mounted: function mounted() {
    var _iterator = _createForOfIteratorHelper(this.$el.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        var name = node.nodeName.toLowerCase();

        if (name !== 'button') {
          console.warn('g-button-group的子元素应该全是g-button，而不是${name}');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
exports.default = _default;
        var $8535e2 = exports.default || module.exports;
      
      if (typeof $8535e2 === 'function') {
        $8535e2 = $8535e2.options;
      }
    
        /* template */
        Object.assign($8535e2, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _buttonGroup = _interopRequireDefault(require("./src/button-group"));

var _icon = _interopRequireDefault(require("./src/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/button-group":"h0wh","./src/icon":"wFXB"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map
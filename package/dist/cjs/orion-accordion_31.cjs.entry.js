'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-972e7dc6.js');

// Generate a universally unique identifier
function generateUUID() {
  return Date.now().toString(36) + Math.floor(10 ** 12 + Math.random() * 9 * 10 ** 12).toString(36);
}

const orionAccordionCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}button{border:none;outline:none;text-align:left;background-color:transparent}.orion-accordion__container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:100%;margin:0;padding:0;border:none;box-shadow:inset 0 -1px 0 0 var(--orion-gray-20, #ccc);background-color:var(--orion-color-background, #fff)}.orion-accordion__container--visible{border-radius:var(--orion-border-radius, 4px);box-shadow:inset 0px 0px 0px 1px var(--orion-gray-40, #999)}.orion-accordion__header,.orion-accordion__header__title,.orion-accordion__panel{width:100%;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0}.orion-accordion__header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);font-weight:var(--orion-font-weight-semi-bold, 600);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent;cursor:pointer;outline:none;padding:var(--orion-space-xxl, 18px) 0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__header__title{flex:1}.orion-accordion__panel{font-weight:var(--orion-font-weight-normal, 400);padding:0 0 var(--orion-space-xxl, 18px) 0}.orion-accordion__container--visible .orion-accordion__panel{width:auto;padding:0 var(--orion-space-xl, 16px) var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__icon{fill:var(--orion-color-activation, #6244bb);display:flex;flex-direction:column;justify-content:center;align-items:center;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.orion-accordion__header:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__header:focus:not(:focus-visible){box-shadow:none}.orion-accordion__header:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__panel--open{display:block;height:auto}.orion-accordion__panel--closed{display:none}@media screen and (min-width: 769px){.orion-accordion__header,.orion-accordion__panel{font-size:var(--orion-font-size-body, 16px)}.orion-accordion__header{padding:var(--orion-space-md, 8px) 0}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-md, 8px) var(--orion-space-xl, 16px)}.orion-accordion__header.chevron-left{flex-direction:row-reverse;justify-content:flex-end}.orion-accordion__icon{width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px);margin:var(--orion-space-xs, 4px) 0}.orion-accordion__panel{padding:0 0 var(--orion-space-xl, 16px) 0}.orion-accordion__container--visible .orion-accordion__panel{padding:0 var(--orion-space-xl, 16px) var(--orion-space-xl, 16px) var(--orion-space-xl, 16px)}}";

const OrionAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = index.createEvent(this, "toggle", 7);
    this.btnUid = '';
    this.sectionUid = '';
    this.open = false;
    this.chevronLeft = false;
    this.hasContainer = false;
  }
  toggleComponent() {
    this.open = !this.open;
    this.toggle.emit({ visible: this.open });
  }
  componentWillLoad() {
    if (this.open) {
      this.toggle.emit({ visible: this.open });
    }
    this.btnUid = generateUUID();
    this.sectionUid = `sect-${this.btnUid}`;
  }
  render() {
    return (index.h("div", { class: `orion-accordion__container ${this.hasContainer ? 'orion-accordion__container--visible' : ''}` }, index.h("button", { type: "button", class: `orion-accordion__header ${this.chevronLeft ? 'chevron-left' : ''}`, "aria-expanded": this.open ? 'true' : 'false', "aria-controls": this.sectionUid, id: this.btnUid, onClick: () => this.toggleComponent() }, index.h("span", { class: "orion-accordion__header__title" }, index.h("slot", { name: "orion-accordion-header" })), this.open ? (index.h("span", { class: "orion-accordion__icon" }, index.h("svg", { viewBox: "0 0 24 24" }, index.h("path", { d: "M21.7250876,17.6196441 C22.2464651,18.1277218 23.0906844,18.1266464 23.6107041,17.6172421 C24.1307239,17.1078378 24.1296232,16.2830056 23.6082457,15.7749279 L12.941579,5.38035589 C12.4211626,4.8732147 11.5788374,4.8732147 11.058421,5.38035589 L0.391754315,15.7749279 C-0.129623174,16.2830056 -0.130723851,17.1078378 0.389295885,17.6172421 C0.90931562,18.1266464 1.75353487,18.1277218 2.27491236,17.6196441 L12,8.14263249 L21.7250876,17.6196441 Z", id: "path-1" })))) : (index.h("span", { class: "orion-accordion__icon" }, index.h("svg", { viewBox: "0 0 24 24" }, index.h("path", { d: "M2.27491236,5.8803559 C1.75353487,5.37227816 0.90931562,5.37335356 0.389295885,5.88275787 C-0.130723851,6.39216218 -0.129623174,7.21699435 0.391754315,7.72507209 L11.058421,18.1196441 C11.5788374,18.6267853 12.4211626,18.6267853 12.941579,18.1196441 L23.6082457,7.72507209 C24.1296232,7.21699435 24.1307239,6.39216218 23.6107041,5.88275787 C23.0906844,5.37335356 22.2464651,5.37227816 21.7250876,5.8803559 L12,15.3573675 L2.27491236,5.8803559 Z", id: "path-1" }))))), index.h("div", { class: `orion-accordion__panel ${this.open ? 'orion-accordion__panel--open' : 'orion-accordion__panel--closed'}`, id: this.sectionUid, "aria-labelledby": this.btnUid, "aria-hidden": this.open ? 'false' : 'true', role: "region" }, index.h("slot", { name: "orion-accordion-panel" }))));
  }
};
OrionAccordion.style = orionAccordionCss;

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const orionButtonCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-button-radius:var(--orion-border-radius, 4px);--orion-button-width:100%}:host([disabled]){pointer-events:none}.orion-button{display:flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;gap:var(--orion-space-md, 8px);width:var(--orion-button-width);height:var(--orion-touch-size, 60px);min-width:var(--orion-touch-size, 60px);max-width:var(--orion-breakpoint-md, 1024px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-label, 18px);font-weight:var(--orion-font-weight-semi-bold, 600);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);border-radius:var(--orion-button-radius);outline:none;transition:var(--orion-transition, 200ms ease-in-out);cursor:pointer}.orion-button i[class^=orion-icon-]:before{display:flex}.orion-button--primary{color:var(--orion-white, #fff);background-color:var(--orion-color-activation, #6244bb)}.orion-button--secondary{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-white, #fff)}.orion-button--tertiary{color:var(--orion-color-activation, #6244bb);background-color:transparent;border:var(--orion-border-standard, 1px solid) transparent}.orion-button:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-button:focus:not(:focus-visible){box-shadow:none}.orion-button--tertiary:focus:not(:focus-visible){border:var(--orion-border-standard, 1px solid) transparent}.orion-button:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-button--primary:hover{background-color:var(--orion-color-hover-dark, #8972cc);border:var(--orion-border-standard, 1px solid) var(--orion-color-hover-dark, #8972cc)}.orion-button--secondary:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-hover-light, #eaeaf3)}.orion-button--tertiary:hover{background-color:rgba(182, 184, 220, 0.25)}.orion-button:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-button--primary:active{color:var(--orion-white, #fff);background-color:var(--orion-color-active, #49328c);border:var(--orion-border-standard, 1px solid) var(--orion-color-active, #49328c)}.orion-button--secondary:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-button--tertiary:focus-visible{border:var(--orion-border-standard, 1px solid) transparent}.orion-button--tertiary:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-focus, rgba(182, 184, 220, 0.5));border:none}.orion-button:disabled{color:var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-button--primary:disabled{border:none;background-color:var(--orion-gray-40, #999);color:var(--orion-white, #fff)}.orion-button--tertiary:disabled{border:none;background-color:rgba(51, 51, 51, 0.08)}.orion-button--small{width:-moz-fit-content;width:fit-content;font-size:16px}.orion-button--sticky{position:fixed;bottom:0;left:0;right:0;border:none;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);border-radius:0;z-index:var(--orion-z-low, 10)}.orion-button--sticky:disabled{border:none;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:0}.orion-button.orion-button--no-text{width:var(--orion-touch-size, 60px);height:var(--orion-touch-size, 60px)}@media screen and (min-width: 769px){.orion-button{max-width:var(--orion-container-width-xs, 368px);min-width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-label, 16px);padding:var(--orion-space-md, 8px)}.orion-button--small{font-size:var(---orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);height:var(--orion-touch-size-sm, 32px);min-width:var(--orion-touch-size-sm, 32px)}.orion-button--sticky{display:none}.orion-button.orion-button--no-text{width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px)}.orion-button.orion-button--no-text.orion-button--small{width:var(--orion-touch-size-sm, 32px);height:var(--orion-touch-size-sm, 32px);padding:0}}@media (hover: none){.orion-button--primary:hover{color:var(--orion-white, #fff);background-color:var(--orion-color-activation, #6244bb)}.orion-button--secondary:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-white, #fff)}.orion-button--tertiary:hover{color:var(--orion-color-activation, #6244bb);background-color:transparent;border:var(--orion-border-standard, 1px solid) transparent}}";

const OrionButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hasText = false;
    this.iconSize = 24;
    this.type = 'button';
    this.variant = 'secondary';
    this.disabled = false;
    this.small = false;
    this.sticky = false;
    this.iconName = '';
    this.iconRight = false;
    this.isMobile = false;
  }
  componentWillLoad() {
    this.hasText = this.el.innerHTML !== '';
    this.setIsMobile();
  }
  handleResize() {
    this.setIsMobile();
  }
  componentWillRender() {
    if (this.isMobile) {
      this.iconSize = this.small ? 20 : 24;
    }
    else {
      this.iconSize = this.small ? 16 : 20;
    }
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  getCSSClass() {
    return classnames(`orion-button orion-button--${this.variant}`, // this class is always applied
    {
      'orion-button--small orion-button--no-text': !this.hasText && this.small,
      'orion-button--no-text': !this.hasText,
      'orion-button--small': this.small,
      'orion-button--sticky': this.sticky, // this class is applied if the button is sticky
    });
  }
  render() {
    let inlineCSSFontSize = {};
    inlineCSSFontSize = {
      fontSize: `${this.iconSize}px`,
    };
    return (index.h("button", { class: this.getCSSClass(), type: this.type, disabled: this.disabled }, this.iconName !== '' && !this.iconRight ? (index.h("span", { class: "orion-button__icon" }, index.h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null, this.hasText ? index.h("slot", null) : null, this.iconName !== '' && this.iconRight ? (index.h("span", { class: "orion-button__icon" }, index.h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null));
  }
  get el() { return index.getElement(this); }
};
OrionButton.style = orionButtonCss;

const orionCheckboxCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-checkbox--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-checkbox__label{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:var(--orion-checkbox--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px) var(--orion-space-xxl, 18px) 0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-checkbox__label--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-checkbox__input{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);margin-right:var(--orion-space-md, 8px)}.orion-checkbox__label input:focus~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input:focus:not(:focus-visible)~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none}.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input~.orion-checkbox__input{transition:var(--orion-transition, 200ms ease-in-out)}.orion-checkbox__label input:checked~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);background-color:var(--orion-color-activation, #6244bb)}.orion-checkbox__label input:disabled~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-color-background--dimmed, #e6e6e6)}.orion-checkbox__label input:disabled:checked~.orion-checkbox__input{background-color:var(--orion-gray-40, #999)}.orion-checkbox__input:after{content:\"\";position:absolute;display:none}.orion-checkbox__label input:checked~.orion-checkbox__input:after{display:block}.orion-checkbox__label .orion-checkbox__input:after{left:50%;top:45%;width:6px;height:12px;border:solid var(--orion-color-background, #fff);border-width:0 3px 3px 0;transform:translate(-50%, -50%) rotate(45deg)}@media screen and (min-width: 769px){.orion-checkbox__label{font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-md, 8px) var(--orion-space-md, 8px) 0}.orion-checkbox__input{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);border-radius:var(--orion-border-radius-sm, 2px);margin-top:2px}.orion-checkbox__label input:focus~.orion-checkbox__input,.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border-radius:var(--orion-border-radius-sm, 2px)}.orion-checkbox__label .orion-checkbox__input:after{width:5px;height:10px;border-width:0 2px 2px 0}}";

const OrionCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.value = '';
    this.checked = false;
    this.name = '';
    this.disabled = false;
    this.required = false;
  }
  onCheckboxChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value, checked: event.target.checked });
  }
  render() {
    return (index.h("label", { class: `orion-checkbox__label 
          ${this.disabled ? 'orion-checkbox__label--disabled' : ''}` }, index.h("span", null, index.h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onCheckboxChangeValue.bind(this) }), index.h("span", { class: "orion-checkbox__input" })), index.h("slot", null)));
  }
};
OrionCheckbox.style = orionCheckboxCss;

const orionCheckboxGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-checkbox-group{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-checkbox-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-checkbox-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionCheckboxGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inline = false;
    this.disabled = false;
  }
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get checkboxes() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-CHECKBOX');
  }
  componentDidLoad() {
    if (this.disabled) {
      this.setCheckboxGroupDisabled();
    }
  }
  /**
   * Disable all checkboxes in group
   */
  setCheckboxGroupDisabled() {
    this.checkboxes.forEach(checkbox => {
      checkbox.setAttribute('disabled', '');
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("span", { class: `orion-checkbox-group
          ${this.inline ? 'orion-checkbox-group--inline' : ''}` }, index.h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionCheckboxGroup.style = orionCheckboxGroupCss;

const orionChipCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:inline-block;--orion-chip-color__bg:var(--orion-rhapsody-blue, #002244);--orion-chip-color__text:var(--orion-white, #fff)}:host(:not([is-open])){display:none}.orion-chip{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-weight:var(--orion-font-weight-semi-bold, 600);line-height:1;font-size:var(--orion-font-size-label, 18px);min-height:44px;padding:8px 11px;border:var(--orion-border-standard, 1px solid);border-radius:100px;box-sizing:border-box;background-color:var(--orion-white, #fff);color:var(--orion-color-text, #333);outline:none;pointer-events:none;cursor:default}.orion-chip--high{border-color:var(--orion-red, #d50032)}.orion-chip--medium{border-color:var(--orion-orange, #f46335)}.orion-chip--low{border-color:var(--orion-yellow, #edb72b)}.orion-chip--success{border-color:var(--orion-green, #208500)}.orion-chip--info{border-color:var(--orion-rhapsody-blue, #002244)}.orion-chip--custom{border-color:var(--orion-chip-color__bg);color:var(--orion-chip-color__text)}.orion-chip.is-open{display:inline-flex;align-items:center;gap:13px}.orion-chip .white{color:var(--orion-white, #fff)}.orion-chip .black{color:var(--orion-black, #000)}.orion-chip .red{color:var(--orion-alert-red, #d50032)}.orion-chip .orange{color:var(--orion-alert-orange, #f46335)}.orion-chip .yellow{color:var(--orion-alert-yellow, #edb72b)}.orion-chip .green{color:var(--orion-alert-green, #208500)}.orion-chip .rhapsody-blue{color:var(--orion-rhapsody-blue, #002244)}.orion-chip--solid-bg.orion-chip--high{background-color:var(--orion-red, #d50032);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--medium{background-color:var(--orion-orange, #f46335);color:var(--orion-black, #000)}.orion-chip--solid-bg.orion-chip--low{background-color:var(--orion-yellow, #edb72b);color:var(--orion-black, #000)}.orion-chip--solid-bg.orion-chip--success{background-color:var(--orion-green, #208500);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--info{background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--custom{background-color:var(--orion-chip-color__bg);color:var(--orion-chip-color__text)}.orion-chip__close-btn{float:right;display:flex;background-color:transparent;border:none;cursor:pointer;font-size:var(--orion-icon-size, 24px);pointer-events:all;margin:0;padding:0}.orion-chip__close-btn .orion-icon{display:flex}.orion-chip:has(.orion-chip__close-btn).orion-chip--high:focus-visible{outline:var(--orion-border-thicker) rgba(213, 0, 50, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--medium:focus-visible{outline:var(--orion-border-thicker) rgba(244, 99, 53, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--low:focus-visible{outline:var(--orion-border-thicker) rgba(237, 183, 43, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--success:focus-visible{outline:var(--orion-border-thicker) rgba(32, 133, 0, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--info:focus-visible{outline:var(--orion-border-thicker) rgba(12, 35, 64, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--custom:focus-visible{outline:var(--orion-border-thicker) rgba(0, 0, 0, 0.25)}::slotted(*){display:inline}@media screen and (min-width: 769px){.orion-chip{min-height:32px;font-size:var(--orion-font-size-label, 16px);padding:4px 8px}.orion-chip.is-open{gap:9px}.orion-chip__close-btn{font-size:var(--orion-icon-size, 20px)}}";

const OrionChip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = 'info';
    this.dismissible = false;
    this.isOpen = false;
    this.solidBg = false;
  }
  _handleClose() {
    this.isOpen = false;
  }
  /**
   * Handle closing the chip via keyboard
   */
  handleKeyPress(event) {
    // if the user presses escape, space, or enter, close the chip
    if (event.key === 'Escape' || event.code === 'Space' || event.key === 'Enter') {
      this.isOpen = false;
    }
  }
  render() {
    const variantClass = this.variant ? `orion-chip--${this.variant}` : '';
    const iconConfigMap = {
      high: {
        color: 'red',
        dismissibleSolidColor: 'white',
      },
      medium: {
        color: 'orange',
        dismissibleSolidColor: 'black',
      },
      low: {
        color: 'yellow',
        dismissibleSolidColor: 'black',
      },
      success: {
        color: 'green',
        dismissibleSolidColor: 'white',
      },
      info: {
        color: 'rhapsody-blue',
        dismissibleSolidColor: 'white',
      },
      custom: {
        color: '',
        dismissibleSolidColor: '',
      },
    };
    const iconConfig = iconConfigMap[this.variant] || iconConfigMap.info;
    const iconColor = this.dismissible ? iconConfig.dismissibleSolidColor : iconConfig.color;
    const component = (
    // TODO: address the eslint accessbility error below
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    index.h("button", { class: `orion-chip ${variantClass}  ${this.isOpen ? 'is-open' : ''} ${this.solidBg ? 'orion-chip--solid-bg' : ''}    `, "aria-hidden": this.isOpen ? 'false' : 'true', tabindex: this.dismissible ? '1' : '-1' }, index.h("span", { class: "orion-chip__label" }, index.h("slot", null)), this.dismissible ? (index.h("span", { class: "orion-chip__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, index.h("i", { class: `orion-icon orion-icon-cancel ${this.solidBg && this.variant != 'custom' ? iconColor : ''}` }))) : ('')));
    return index.h(index.Host, null, component);
  }
  get el() { return index.getElement(this); }
};
OrionChip.style = orionChipCss;

var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};

var pad = function (number, length) {
    if (length === void 0) { length = 2; }
    return ("000" + number).slice(length * -1);
};
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce$1(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};

function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (var key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}

var doNothing = function () { return undefined; };
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return pad(date.getFullYear(), 4); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

var createDateFormatter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, locale, config)
                : c !== "\\"
                    ? c
                    : "";
        })
            .join("");
    };
};
var createDateParser = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
            return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) { timeless = true; }
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}

if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];
            _loop_1(source);
        }
        return target;
    };
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
        l10n: english,
    };
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                compareDates(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = getDefaultHours(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        var limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = parseSeconds(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var eventTarget = getEventTarget(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce$1(onResize, 50);
        self._debouncedChange = debounce$1(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver(getEventTarget(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return getEventTarget(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = getEventTarget(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && getEventTarget(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0], true) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        clearNode(self.daysContainer);
        if (self.weekNumbers)
            clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            var month = createElement("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = createElement("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = getEventTarget(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
        };
    }
    function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var defaults = getDefaultHours(self.config);
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        else
            clearNode(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = createElement("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) { isOffset = true; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = getEventTarget(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = getEventTarget(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (x) { return x; });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    isBetween(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = getEventTarget(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (HOOKS.indexOf(key) > -1) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        toggleClass(self.calendarContainer, "arrowCenter", isCenter);
        toggleClass(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            toggleClass(self.calendarContainer, "rightMost", false);
            toggleClass(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(getEventTarget(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (HOOKS.indexOf(option) > -1)
                self.config[option] = arrayify(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                compareDates(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = getEventTarget(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}

const orionDateCalendarModalCss = ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;box-sizing:border-box;touch-action:manipulation;box-shadow:0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #eceef1}.flatpickr-calendar.hasTime .flatpickr-innerContainer{border-bottom:0}.flatpickr-calendar.hasTime .flatpickr-time{border:1px solid #eceef1}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#eceef1}.flatpickr-calendar.arrowTop:after{border-bottom-color:#eceef1}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#eceef1}.flatpickr-calendar.arrowBottom:after{border-top-color:#eceef1}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:flex}.flatpickr-months .flatpickr-month{border-radius:5px 5px 0 0;background:#eceef1;color:#5a6171;fill:#5a6171;height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:#5a6171;fill:#5a6171}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0;}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0;}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#bbb}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{transition:fill 0.1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(72,72,72,0.15);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(72,72,72,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(72,72,72,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(90,97,113,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;transform:translate3d(0px, 0px, 0px)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#5a6171}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#5a6171}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(90,97,113,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:#eceef1;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 0.5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:#eceef1;outline:none;padding:0}.flatpickr-weekdays{background:#eceef1;text-align:center;overflow:hidden;width:100%;display:flex;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:flex;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:#eceef1;color:#5a6171;line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;align-items:flex-start;width:307.875px;border-left:1px solid #eceef1;border-right:1px solid #eceef1}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate3d(0px, 0px, 0px);opacity:1}.dayContainer+.dayContainer{box-shadow:-1px 0 0 #eceef1}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#484848;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e2e2e2;border-color:#e2e2e2}.flatpickr-day.today{border-color:#bbb}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#bbb;background:#bbb;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#ff5a5f;box-shadow:none;color:#fff;border-color:#ff5a5f}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:-10px 0 0 #ff5a5f}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(72,72,72,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(72,72,72,0.1)}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 0 #ff5a5f, 5px 0 0 #ff5a5f}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;border-left:1px solid #eceef1}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(72,72,72,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden;background:#fff;border-bottom:1px solid #eceef1}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex;background:#fff;border-radius:0 0 5px 5px}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#484848}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#484848}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#484848;font-size:14px;position:relative;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#484848;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eaeaea}.flatpickr-input[readonly]{cursor:pointer}@keyframes fpFadeInDown{from{opacity:0;transform:translate3d(0, -20px, 0)}to{opacity:1;transform:translate3d(0, 0, 0)}}span.flatpickr-day.selected{font-weight:bold}html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}@media screen and (max-width: 769px){.flatpickr-override--desktop .flatpickr-wrapper{display:none}}.flatpickr-override .flatpickr-wrapper{position:absolute;left:0;bottom:0}.flatpickr-override .flatpickr-calendar{padding:16px;background:var(--orion-white, #fff);border:1px solid var(--orion-gray-40, #999);width:auto !important;box-shadow:2px 2px 4px rgba(0, 0, 0, 0.25)}.flatpickr-override .arrowTop::before,.flatpickr-override .arrowTop::after{display:none}.flatpickr-override .flatpickr-months{padding-bottom:20px}.flatpickr-override .flatpickr-months .flatpickr-month{height:auto;background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-months .flatpickr-prev-month,.flatpickr-override .flatpickr-months .flatpickr-next-month{position:relative;height:auto;padding:0 10px;display:flex;justify-content:center;align-items:center}.flatpickr-override .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-override .flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:flex;visibility:hidden}.flatpickr-override .flatpickr-current-month{padding:0;position:relative;height:auto;width:100%;left:initial;display:flex;justify-content:center;align-items:center}.flatpickr-override .flatpickr-current-month input.cur-year:disabled,.flatpickr-override .flatpickr-current-month .cur-month{margin:0;color:var(--orion-gray-80, #333);-webkit-text-fill-color:var(--orion-gray-80, #333);-webkit-opacity:1;font-size:var(--orion-font-size-body, 16px);line-height:var(--orion-line-height-normal, 24px);font-weight:var(--orion-font-weight-semi-bold, 600)}.flatpickr-override .flatpickr-current-month input.cur-year:disabled:hover,.flatpickr-override .flatpickr-current-month .cur-month:hover{background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-current-month .numInputWrapper{width:5ch}.flatpickr-override .flatpickr-current-month .numInputWrapper:hover{background:transparent}.flatpickr-override .numInputWrapper span.arrowUp,.flatpickr-override .numInputWrapper span.arrowDown{display:none}.flatpickr-override .flatpickr-innerContainer{border:none;overflow:visible}.flatpickr-override .flatpickr-weekdays{background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-weekday{background:var(--orion-white, #fff);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);font-weight:var(--orion-font-weight-semi-bold, 600)}.flatpickr-override .dayContainer{width:auto;min-width:364px;max-width:none}.flatpickr-override .flatpickr-days{width:auto !important;border:none;overflow:visible}.flatpickr-override .flatpickr-day{width:50px;height:58px;max-width:none;font-size:var(--orion-font-size-body, 16px);line-height:var(--orion-line-height-normal, 24px);display:flex;justify-content:center;align-items:center;border-radius:0;margin:1px 0;border:none}.flatpickr-override .flatpickr-day:focus{background:#fff;box-shadow:var(--orion-date-input-focus-box-shadow);color:var(--orion-gray-80, #333);z-index:4}.flatpickr-override .flatpickr-day:hover{background:var(--orion-color-focus, #f1f1f0);border-color:#fff;border-radius:0}.flatpickr-override .flatpickr-day.today{border:none;position:relative;font-weight:var(--orion-font-weight-bold, 700);border-radius:4px}.flatpickr-override .flatpickr-day.today::after{content:\"\";display:block;position:absolute;height:calc(100% - 10px);width:calc(100% - 10px);border:2px solid var(--orion-dusk, #b6b8dc);border-radius:2px;z-index:3}.flatpickr-override .flatpickr-day.selected,.flatpickr-override .flatpickr-day.startRange,.flatpickr-override .flatpickr-day.endRange,.flatpickr-override .flatpickr-day.selected.prevMonthDay,.flatpickr-override .flatpickr-day.selected.nextMonthDay,.flatpickr-override .flatpickr-day.startRange.prevMonthDay,.flatpickr-override .flatpickr-day.startRange.nextMonthDay,.flatpickr-override .flatpickr-day.endRange.prevMonthDay,.flatpickr-override .flatpickr-day.endRange.nextMonthDay{background:var(--orion-rhapsody-blue, #002244);border-color:var(--orion-rhapsody-blue, #002244)}.flatpickr-override .flatpickr-day.selected.startRange,.flatpickr-override .flatpickr-day.startRange.startRange{border-radius:4px 0 0 4px}.flatpickr-override .flatpickr-day.selected.endRange,.flatpickr-override .flatpickr-day.endRange.endRange{border-radius:0 4px 4px 0}.flatpickr-override .flatpickr-day.inRange,.flatpickr-override .flatpickr-day.inRange.nextMonthDay,.flatpickr-override .flatpickr-day.inRange.prevMonthDay{background:var(--orion-dusk-50, #d8d9eb);box-shadow:-2.5px 0 0 var(--orion-dusk-50, #d8d9eb), 2.5px 0 0 var(--orion-dusk-50, #d8d9eb);border-color:var(--orion-dusk-50, #d8d9eb);color:var(--orion-gray-80);border-radius:0}.flatpickr-override .flatpickr-day.inRange:focus{box-shadow:var(--orion-date-input-focus-box-shadow)}.flatpickr-override .flatpickr-day.inRange:hover{background:var(--orion-dusk-25)}.flatpickr-override .flatpickr-day.selected:focus,.flatpickr-override .flatpickr-day.startRange:focus,.flatpickr-override .flatpickr-day.endRange:focus{color:var(--orion-white, #fff)}.flatpickr-override .flatpickr-day.selected:hover,.flatpickr-override .flatpickr-day.startRange:hover,.flatpickr-override .flatpickr-day.endRange:hover{background:var(--orion-rhapsody-blue-80, #334e69)}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)):not(:focus),.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)):not(:focus),.flatpickr-override .flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-day.selected.startRange.endRange{border-radius:4px}.flatpickr-override .flatpickr-day.flatpickr-disabled{background:var(--orion-runway-gray-25, #f1f1f0);color:var(--orion-gray-60, #666);border-radius:0;box-shadow:0 -1px 0 var(--orion-runway-gray-25, #f1f1f0), 0 1px 0 var(--orion-runway-gray-25, #f1f1f0)}.flatpickr-override .flatpickr-day.hidden{height:0}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:none}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)):focus,.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)):focus{box-shadow:var(--orion-date-input-focus-box-shadow)}.flatpickr-override .flatpickr-calendar.multiMonth::after{content:\"\";display:block;width:1px;height:calc(100% - 32px);position:absolute;left:calc(50% + 3px);top:16px;background:var(--orion-gray-20, #ccc);z-index:2;border:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-weekdaycontainer:first-of-type{margin-right:15px}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-weekdaycontainer:last-of-type{margin-left:15px}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:first-of-type{margin-right:15px}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer+.dayContainer{margin-left:15px;box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1):focus{box-shadow:var(--orion-date-input-focus-box-shadow) !important}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-day.inRange:not(.hidden):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7):focus{box-shadow:var(--orion-date-input-focus-box-shadow) !important}.flatpickr-override--modal .flatpickr-rContainer{width:100%}.flatpickr-override--modal .flatpickr-innerContainer{position:relative;margin-bottom:30px}.flatpickr-override--modal .flatpickr-wrapper{position:relative;left:auto;bottom:auto;height:100%}.flatpickr-override--modal .flatpickr-calendar{position:relative;top:0;padding:0 24px;height:100%;max-height:none;overflow-y:scroll;box-shadow:none;border:none}.flatpickr-override--modal .flatpickr-months{display:none}.flatpickr-override--modal .flatpickr-weekdays{display:none}.flatpickr-override--modal .flatpickr-days{flex-direction:column}.flatpickr-override--modal .flatpickr-calendar.multiMonth::after{display:none}.flatpickr-override--modal .flatpickr-calendar.multiMonth .dayContainer{min-width:0;position:relative}.flatpickr-override--modal .flatpickr-calendar.multiMonth .dayContainer:first-of-type{margin:0;margin-top:95px}.flatpickr-override--modal .flatpickr-calendar.multiMonth .dayContainer+.dayContainer{margin:0;margin-top:100px}.flatpickr-override--modal .flatpickr-calendar.multiMonth .dayContainer .flatpickr-day{height:100%;aspect-ratio:0.89}.flatpickr-override--modal .flatpickr-calendar.multiMonth .flatpickr-weekdaycontainer:last-of-type{margin:0}.flatpickr-override__header{position:absolute;width:100%}.flatpickr-override__header .flatpickr-month{margin-bottom:24px}.flatpickr-override__header .flatpickr-weekdaycontainer{display:flex}:host{display:block;--orion-date-calendar-modal-heading-height:144px}*{box-sizing:border-box}.orion-date-calendar-modal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:var(--orion-z-mid, 100);background-color:#fff;flex-direction:column}.orion-date-calendar-modal--closed{display:none}.orion-date-calendar-modal--open{display:flex}@media screen and (min-width: 769px){.orion-date-calendar-modal{display:none}}.orion-date-calendar-modal__label{height:calc(var(--orion-date-calendar-modal-heading-height, 72px) / 2);flex-shrink:0;display:flex;justify-content:space-between;align-items:center;padding:0 24px}.orion-date-calendar-modal__label-heading{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px);font-weight:var(--orion-font-weight-semi-bold, 600)}.orion-date-calendar-modal__close-button{background:none;border:none;height:24px;width:24px;padding:0;font-size:24px;line-height:1;color:var(--orion-gray-80, #333)}.orion-date-calendar-modal__date-selections{height:calc(var(--orion-date-calendar-modal-heading-height, 72px) / 2);flex-shrink:0;border-bottom:1px solid var(--orion-gray-40, #999);border-top:1px solid var(--orion-gray-40, #999);display:flex}.orion-date-calendar-modal__date-selection-label{width:50%;font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-normal, 24px);padding:0 24px;display:flex;flex-direction:column;justify-content:center;flex-grow:1;color:var(--orion-gray-80)}.orion-date-calendar-modal__date-selection-label:nth-of-type(2){border-left:1px solid var(--orion-gray-40, #999)}.orion-date-calendar-modal__date-selection-label--selected{background:var(--orion-dusk-25, #eaeaf3)}.orion-date-calendar-modal__selected-date--selected{color:var(--orion-gray-80, #333)}.orion-date-calendar-modal__selected-date--empty{color:var(--orion-gray-60, #666)}.orion-date-calendar-modal__flatpickr{flex-grow:1;height:calc(100% - var(--orion-date-calendar-modal-heading-height, 144px) - var(--orion-touch-size, 60px))}.orion-date-calendar-modal__date-input{display:none}.orion-date-calendar-modal__button{flex-shrink:0;height:var(--orion-touch-size, 60px)}";

const OrionDateCalendarModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selectModalDates = index.createEvent(this, "selectModalDates", 7);
    this.closeDateModal = index.createEvent(this, "closeDateModal", 7);
    // How many months to show on the calendar
    // TODO: change this based on min/max dates
    this.monthCount = 12;
    // Flatpickr instance
    this.flatpickerInstance = null;
    // Mutation Observer to watch flatpickr updates and apply month header transforms
    this.mutationObserver = null;
    // reference to the monthly header elements
    this.monthHeaders = [];
    // reference to the weekday header elements
    this.weekDayHeaders = [];
    // reference to the monthly elements
    this.dayContainers = [];
    // padding for modal logic
    this.originalPaddingRight = 0;
    // overflow for modal logic
    this.originalOverflow = 'auto';
    // height for modal logic
    this.originalHeight = 'auto';
    this.scrollContainer = null;
    this.currentScrollPos = 0;
    this.onValueUpdate = () => {
      var _a, _b;
      this.currentScrollPos = (_b = (_a = this.scrollContainer) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
    };
    this.queryElements = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      this.monthHeaders = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.flatpickr-month')) !== null && _b !== void 0 ? _b : [];
      this.weekDayHeaders = (_d = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelectorAll('.flatpickr-weekdaycontainer')) !== null && _d !== void 0 ? _d : [];
      this.dayContainers = (_f = (_e = this.el.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelectorAll('.dayContainer')) !== null && _f !== void 0 ? _f : [];
      this.innerContainer = (_g = this.el.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector('.flatpickr-innerContainer');
    };
    this.onCalendarReady = () => {
      var _a;
      this.queryElements();
      this.adjustHeaderElements();
      if (!this.mutationObserver) {
        const div = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.flatpickr-days');
        this.mutationObserver = new MutationObserver(this.onCalendarDaysChanged);
        this.mutationObserver.observe(div, { childList: true });
      }
    };
    this.onCalendarDaysChanged = (mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes[0] && mutation.addedNodes[0].clientHeight > 0) {
          this.adjustSelectedMonth();
          this.adjustHeaderElements(mutation.addedNodes);
        }
      });
    };
    this.adjustHeaderElements = (months = this.dayContainers) => {
      var _a, _b, _c, _d;
      // starting margin from top
      let headerOffset = 23;
      for (let i = 0; i < this.monthCount; i += 1) {
        const headerDiv = (_a = this.headings[i]) !== null && _a !== void 0 ? _a : document.createElement('div');
        // increase offset based on previous month's height + top margin of each month
        if (i > 0) {
          const previousMonthHeight = months[i - 1].getBoundingClientRect().height;
          headerOffset += previousMonthHeight;
          headerOffset += 100;
        }
        headerDiv.style.top = `${headerOffset}px`;
        // if the heading doesn't exist, add a class, append elements, and save to state
        if (!this.headings[i]) {
          headerDiv.classList.add('flatpickr-override__header');
          headerDiv.prepend(this.weekDayHeaders[i]);
          headerDiv.prepend(this.monthHeaders[i]);
          (_b = this.innerContainer) === null || _b === void 0 ? void 0 : _b.append(headerDiv);
          this.headings[i] = headerDiv;
        }
        if (((_c = this.innerContainer) === null || _c === void 0 ? void 0 : _c.childNodes) && !Array.from(this.innerContainer.childNodes).includes(this.headings[i])) {
          (_d = this.innerContainer) === null || _d === void 0 ? void 0 : _d.append(headerDiv);
        }
      }
    };
    this.scrollToSelectedElement = (instant = false) => {
      var _a;
      if (this.flatpickerInstance) {
        (_a = this.flatpickerInstance.selectedDateElem) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'center' });
      }
    };
    this.updateDocumentStyling = () => {
      if (this.isOpen && this.isMobile) {
        // get width of scrollbar
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        // add padding right to body so the content doesn't shift when scrollbar disapears
        document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      }
      else {
        // reset padding
        document.body.style.paddingRight = `${this.originalPaddingRight}px`;
        // Allow body to scroll when modal is closed
        document.body.style.overflow = this.originalOverflow;
        document.body.style.height = this.originalHeight;
      }
    };
    this.handleInputChange = (dates, _, instance) => {
      if (this.range) {
        const newDates = dates.map(date => instance.formatDate(date, this.dateFormat));
        if (!newDates[1])
          newDates[1] = '';
        this.localDates = newDates;
      }
      else {
        this.localDates = [instance.formatDate(dates[0], this.dateFormat), ''];
      }
    };
    this.handleClose = () => {
      this.closeDateModal.emit();
    };
    this.handleSelectDates = () => {
      var _a, _b;
      this.selectModalDates.emit({ dates: (_b = (_a = this.flatpickerInstance) === null || _a === void 0 ? void 0 : _a.selectedDates) !== null && _b !== void 0 ? _b : [] });
      this.handleClose();
    };
    this.getModalClasses = () => {
      return `
      orion-date-calendar-modal
      orion-date-calendar-modal--${this.isOpen ? 'open' : 'closed'}
      flatpickr-override
      flatpickr-override--modal
    `;
    };
    this.getDateSelectionClasses = (buttonIndex) => {
      let selected = false;
      if (buttonIndex === 0) {
        if (this.range) {
          selected = !this.localDates[0] || (!!this.localDates[0] && !!this.localDates[1]);
        }
      }
      else {
        selected = !!this.localDates[0] && !this.localDates[1];
      }
      return `
    orion-date-calendar-modal__date-selection-label
    orion-date-calendar-modal__date-selection-label--${selected ? 'selected' : 'empty'}
    `;
    };
    this.getDateSelectionSpanClasses = (dateIndex) => {
      return `
    orion-date-calendar-modal__selected-date
    orion-date-calendar-modal__selected-date--${this.localDates[dateIndex] ? 'selected' : 'empty'}
    `;
    };
    this.label = undefined;
    this.startingDate = new Date();
    this.flatpickrConfig = undefined;
    this.dates = ['', ''];
    this.isOpen = undefined;
    this.range = undefined;
    this.dateFormat = undefined;
    this.firstDateLabel = undefined;
    this.secondDateLabel = '';
    this.headings = [];
    this.localDates = ['', ''];
    this.isMobile = false;
  }
  componentWillLoad() {
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
    this.setIsMobile();
    this.queryElements();
  }
  componentDidLoad() {
    var _a;
    this.flatpickerInstance = flatpickr(this.dateInput, Object.assign(Object.assign({}, this.flatpickrConfig), { disableMobile: false, inline: true, showMonths: this.monthCount, onReady: this.onCalendarReady, onChange: this.handleInputChange, onDayCreate: undefined, onValueUpdate: this.onValueUpdate }));
    this.scrollContainer = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.flatpickr-calendar');
  }
  adjustSelectedMonth() {
    if (!this.scrollContainer || !this.flatpickerInstance)
      return;
    if (this.flatpickerInstance.currentMonth !== this.startingDate.getMonth()) {
      this.flatpickerInstance.changeMonth(this.startingDate.getMonth(), false);
    }
    if (this.flatpickerInstance.currentYear !== this.startingDate.getFullYear()) {
      this.flatpickerInstance.changeYear(this.startingDate.getFullYear());
      this.scrollContainer.scrollTop = this.currentScrollPos;
    }
  }
  handleResize() {
    if (this.isOpen) {
      this.setIsMobile();
      this.adjustHeaderElements();
    }
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  handleOpen() {
    if (this.isOpen) {
      // prepopulate flatpickr & local date state
      this.localDates = this.dates;
      if (this.flatpickerInstance) {
        this.flatpickerInstance.setDate(this.dates);
        setTimeout(() => {
          this.scrollToSelectedElement();
        });
      }
      this.setIsMobile();
      this.queryElements();
    }
    this.updateDocumentStyling();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: this.getModalClasses() }, index.h("div", { class: "orion-date-calendar-modal__label" }, index.h("h2", { class: "orion-date-calendar-modal__label-heading" }, this.label), index.h("button", { class: "orion-date-calendar-modal__close-button", onClick: this.handleClose, "aria-label": "Cancels date selection and closes the calendar date picker." }, index.h("i", { class: "orion-icon orion-icon-close" }))), index.h("div", { class: "orion-date-calendar-modal__date-selections" }, index.h("p", { class: this.getDateSelectionClasses(0) }, this.firstDateLabel, index.h("span", { class: this.getDateSelectionSpanClasses(0) }, this.localDates[0] || `Select a date`)), this.range && (index.h("p", { class: this.getDateSelectionClasses(1) }, this.secondDateLabel, index.h("span", { class: this.getDateSelectionSpanClasses(1) }, this.localDates[1] || `Select a date`)))), index.h("div", { class: "orion-date-calendar-modal__flatpickr" }, index.h("input", { ref: el => {
        this.dateInput = el;
      }, class: "orion-date-calendar-modal__date-input", name: "orion-date", id: "orion-date", tabIndex: -1 })), index.h("orion-button", { disabled: !this.localDates[0] || (this.range && !this.localDates[1]), onClick: this.handleSelectDates, class: "orion-date-calendar-modal__button", sticky: true, variant: "primary" }, `Select date${this.range ? 's' : ''}`))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isOpen": ["handleOpen"]
  }; }
};
OrionDateCalendarModal.style = orionDateCalendarModalCss;

const orionDateInputCss = ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;box-sizing:border-box;touch-action:manipulation;box-shadow:0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{animation:fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){box-shadow:-2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #eceef1}.flatpickr-calendar.hasTime .flatpickr-innerContainer{border-bottom:0}.flatpickr-calendar.hasTime .flatpickr-time{border:1px solid #eceef1}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#eceef1}.flatpickr-calendar.arrowTop:after{border-bottom-color:#eceef1}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#eceef1}.flatpickr-calendar.arrowBottom:after{border-top-color:#eceef1}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:flex}.flatpickr-months .flatpickr-month{border-radius:5px 5px 0 0;background:#eceef1;color:#5a6171;fill:#5a6171;height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:#5a6171;fill:#5a6171}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0;}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0;}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#bbb}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{transition:fill 0.1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(72,72,72,0.15);box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(72,72,72,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(72,72,72,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(90,97,113,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;transform:translate3d(0px, 0px, 0px)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:0.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:#5a6171}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:#5a6171}.flatpickr-current-month input.cur-year{background:transparent;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 0.5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(90,97,113,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:#eceef1;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 0.5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:#eceef1;outline:none;padding:0}.flatpickr-weekdays{background:#eceef1;text-align:center;overflow:hidden;width:100%;display:flex;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:flex;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:#eceef1;color:#5a6171;line-height:1;margin:0;text-align:center;display:block;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:flex;align-items:flex-start;width:307.875px;border-left:1px solid #eceef1;border-right:1px solid #eceef1}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;box-sizing:border-box;display:inline-block;display:flex;flex-wrap:wrap;-ms-flex-wrap:wrap;justify-content:space-around;transform:translate3d(0px, 0px, 0px);opacity:1}.dayContainer+.dayContainer{box-shadow:-1px 0 0 #eceef1}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;box-sizing:border-box;color:#484848;cursor:pointer;font-weight:400;width:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e2e2e2;border-color:#e2e2e2}.flatpickr-day.today{border-color:#bbb}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#bbb;background:#bbb;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#ff5a5f;box-shadow:none;color:#fff;border-color:#ff5a5f}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:-10px 0 0 #ff5a5f}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;box-shadow:-5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(72,72,72,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(72,72,72,0.1)}.flatpickr-day.week.selected{border-radius:0;box-shadow:-5px 0 0 #ff5a5f, 5px 0 0 #ff5a5f}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;border-left:1px solid #eceef1}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(72,72,72,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:flex;box-sizing:border-box;overflow:hidden;background:#fff;border-bottom:1px solid #eceef1}.flatpickr-rContainer{display:inline-block;padding:0;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;box-sizing:border-box;overflow:hidden;display:flex;background:#fff;border-radius:0 0 5px 5px}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#484848}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#484848}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#484848;font-size:14px;position:relative;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#484848;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eaeaea}.flatpickr-input[readonly]{cursor:pointer}@keyframes fpFadeInDown{from{opacity:0;transform:translate3d(0, -20px, 0)}to{opacity:1;transform:translate3d(0, 0, 0)}}span.flatpickr-day.selected{font-weight:bold}html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}@media screen and (max-width: 769px){.flatpickr-override--desktop .flatpickr-wrapper{display:none}}.flatpickr-override .flatpickr-wrapper{position:absolute;left:0;bottom:0}.flatpickr-override .flatpickr-calendar{padding:16px;background:var(--orion-white, #fff);border:1px solid var(--orion-gray-40, #999);width:auto !important;box-shadow:2px 2px 4px rgba(0, 0, 0, 0.25)}.flatpickr-override .arrowTop::before,.flatpickr-override .arrowTop::after{display:none}.flatpickr-override .flatpickr-months{padding-bottom:20px}.flatpickr-override .flatpickr-months .flatpickr-month{height:auto;background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-months .flatpickr-prev-month,.flatpickr-override .flatpickr-months .flatpickr-next-month{position:relative;height:auto;padding:0 10px;display:flex;justify-content:center;align-items:center}.flatpickr-override .flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-override .flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:flex;visibility:hidden}.flatpickr-override .flatpickr-current-month{padding:0;position:relative;height:auto;width:100%;left:initial;display:flex;justify-content:center;align-items:center}.flatpickr-override .flatpickr-current-month input.cur-year:disabled,.flatpickr-override .flatpickr-current-month .cur-month{margin:0;color:var(--orion-gray-80, #333);-webkit-text-fill-color:var(--orion-gray-80, #333);-webkit-opacity:1;font-size:var(--orion-font-size-body, 16px);line-height:var(--orion-line-height-normal, 24px);font-weight:var(--orion-font-weight-semi-bold, 600)}.flatpickr-override .flatpickr-current-month input.cur-year:disabled:hover,.flatpickr-override .flatpickr-current-month .cur-month:hover{background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-current-month .numInputWrapper{width:5ch}.flatpickr-override .flatpickr-current-month .numInputWrapper:hover{background:transparent}.flatpickr-override .numInputWrapper span.arrowUp,.flatpickr-override .numInputWrapper span.arrowDown{display:none}.flatpickr-override .flatpickr-innerContainer{border:none;overflow:visible}.flatpickr-override .flatpickr-weekdays{background:var(--orion-white, #fff)}.flatpickr-override .flatpickr-weekday{background:var(--orion-white, #fff);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);font-weight:var(--orion-font-weight-semi-bold, 600)}.flatpickr-override .dayContainer{width:auto;min-width:364px;max-width:none}.flatpickr-override .flatpickr-days{width:auto !important;border:none;overflow:visible}.flatpickr-override .flatpickr-day{width:50px;height:58px;max-width:none;font-size:var(--orion-font-size-body, 16px);line-height:var(--orion-line-height-normal, 24px);display:flex;justify-content:center;align-items:center;border-radius:0;margin:1px 0;border:none}.flatpickr-override .flatpickr-day:focus{background:#fff;box-shadow:var(--orion-date-input-focus-box-shadow);color:var(--orion-gray-80, #333);z-index:4}.flatpickr-override .flatpickr-day:hover{background:var(--orion-color-focus, #f1f1f0);border-color:#fff;border-radius:0}.flatpickr-override .flatpickr-day.today{border:none;position:relative;font-weight:var(--orion-font-weight-bold, 700);border-radius:4px}.flatpickr-override .flatpickr-day.today::after{content:\"\";display:block;position:absolute;height:calc(100% - 10px);width:calc(100% - 10px);border:2px solid var(--orion-dusk, #b6b8dc);border-radius:2px;z-index:3}.flatpickr-override .flatpickr-day.selected,.flatpickr-override .flatpickr-day.startRange,.flatpickr-override .flatpickr-day.endRange,.flatpickr-override .flatpickr-day.selected.prevMonthDay,.flatpickr-override .flatpickr-day.selected.nextMonthDay,.flatpickr-override .flatpickr-day.startRange.prevMonthDay,.flatpickr-override .flatpickr-day.startRange.nextMonthDay,.flatpickr-override .flatpickr-day.endRange.prevMonthDay,.flatpickr-override .flatpickr-day.endRange.nextMonthDay{background:var(--orion-rhapsody-blue, #002244);border-color:var(--orion-rhapsody-blue, #002244)}.flatpickr-override .flatpickr-day.selected.startRange,.flatpickr-override .flatpickr-day.startRange.startRange{border-radius:4px 0 0 4px}.flatpickr-override .flatpickr-day.selected.endRange,.flatpickr-override .flatpickr-day.endRange.endRange{border-radius:0 4px 4px 0}.flatpickr-override .flatpickr-day.inRange,.flatpickr-override .flatpickr-day.inRange.nextMonthDay,.flatpickr-override .flatpickr-day.inRange.prevMonthDay{background:var(--orion-dusk-50, #d8d9eb);box-shadow:-2.5px 0 0 var(--orion-dusk-50, #d8d9eb), 2.5px 0 0 var(--orion-dusk-50, #d8d9eb);border-color:var(--orion-dusk-50, #d8d9eb);color:var(--orion-gray-80);border-radius:0}.flatpickr-override .flatpickr-day.inRange:focus{box-shadow:var(--orion-date-input-focus-box-shadow)}.flatpickr-override .flatpickr-day.inRange:hover{background:var(--orion-dusk-25)}.flatpickr-override .flatpickr-day.selected:focus,.flatpickr-override .flatpickr-day.startRange:focus,.flatpickr-override .flatpickr-day.endRange:focus{color:var(--orion-white, #fff)}.flatpickr-override .flatpickr-day.selected:hover,.flatpickr-override .flatpickr-day.startRange:hover,.flatpickr-override .flatpickr-day.endRange:hover{background:var(--orion-rhapsody-blue-80, #334e69)}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)):not(:focus),.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)):not(:focus),.flatpickr-override .flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-day.selected.startRange.endRange{border-radius:4px}.flatpickr-override .flatpickr-day.flatpickr-disabled{background:var(--orion-runway-gray-25, #f1f1f0);color:var(--orion-gray-60, #666);border-radius:0;box-shadow:0 -1px 0 var(--orion-runway-gray-25, #f1f1f0), 0 1px 0 var(--orion-runway-gray-25, #f1f1f0)}.flatpickr-override .flatpickr-day.hidden{height:0}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){box-shadow:none}.flatpickr-override .flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)):focus,.flatpickr-override .flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)):focus{box-shadow:var(--orion-date-input-focus-box-shadow)}.flatpickr-override .flatpickr-calendar.multiMonth::after{content:\"\";display:block;width:1px;height:calc(100% - 32px);position:absolute;left:calc(50% + 3px);top:16px;background:var(--orion-gray-20, #ccc);z-index:2;border:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-weekdaycontainer:first-of-type{margin-right:15px}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-weekdaycontainer:last-of-type{margin-left:15px}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:first-of-type{margin-right:15px}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer+.dayContainer{margin-left:15px;box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1):focus{box-shadow:var(--orion-date-input-focus-box-shadow) !important}.flatpickr-override .flatpickr-calendar.multiMonth .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-day.inRange:not(.hidden):not(:focus){box-shadow:none}.flatpickr-override .flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7):focus{box-shadow:var(--orion-date-input-focus-box-shadow) !important}:host{display:block;--orion-date-input-min-width:140px;--orion-date-input-max-width:398px;--orion-date-input-hover:var(--orion-dusk-25, #eaeaf3);--orion-date-input-focus-box-shadow:0 0 0 4px var(--orion-color-focus-25, rgba(241, 241, 240, 0.25))}@media screen and (max-width: 769px){:host{--orion-date-input-min-width:124px}}::slotted([slot=orion-date-input-first-label]){min-width:var(--orion-date-input-min-width);width:50%;flex-grow:1}::slotted([slot=orion-date-input-second-label]){min-width:var(--orion-date-input-min-width);width:calc(50% + 40px);flex-grow:2}.visually-hidden{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.orion-date-input__wrapper{display:block;max-width:var(--orion-date-input-max-width)}.orion-date-input__wrapper--inline{display:flex;justify-content:space-between;align-items:center}.orion-date-input__wrapper--inline .orion-date-input__label{--orion-label--padding-right:0}.orion-date-input__wrapper--inline .orion-date-input__label orion-label{min-width:0}.orion-date-input__wrapper--inline .orion-date-input__inner-wrapper{flex-grow:1}.orion-date-input__label{display:flex;justify-content:space-between}.orion-date-input__label orion-label{min-width:var(--orion-date-input-min-width);width:50%;flex-grow:1}.orion-date-input__label orion-label:last-of-type{width:calc(50% + 40px);flex-grow:2}.orion-date-input__inner-wrapper{position:relative;display:flex;border-radius:var(--orion-border-radius, 4px);transition:var(--orion-transition, 200ms ease-in-out)}.orion-date-input__inner-wrapper:focus-within .orion-date-input__button:not(.orion-date-input__inner-wrapper:focus-within .orion-date-input__button--open) .orion-date-input__button-icon{color:var(--orion-color-activation, #6244bb)}.orion-date-input__inner-wrapper:focus-within .orion-date-input__status{box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}.orion-date-input__inner-wrapper--error .orion-date-input__button-icon{color:var(--orion-color-error, #d50032)}.orion-date-input__inner-wrapper--error .orion-date-input__status{box-shadow:inset 0 0 0 2px var(--orion-color-error, #d50032)}.orion-date-input__status{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:var(--orion-z-low, 10);border-radius:var(--orion-border-radius, 4px);box-shadow:inset 0 0 0 2px transparent;transition:var(--orion-transition, 200ms ease-in-out)}.orion-date-input__button{border:var(--orion-border-width, 1px) solid var(--orion-gray-80, #333);border-radius:0 var(--orion-border-radius, 4px) var(--orion-border-radius, 4px) 0;padding:8px 9px 6px;background:none;transition:var(--orion-transition, 200ms ease-in-out)}.orion-date-input__button:not(.orion-date-input__button--open):focus{outline:none;background:var(--orion-date-input-hover, #eaeaf3)}.orion-date-input__button:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);border-color:var(--orion-color-text--dimmed, #666);cursor:auto}.orion-date-input__button:disabled .orion-date-input__button-icon{color:var(--orion-gray-60, #666)}@media screen and (max-width: 769px){.orion-date-input__button{width:var(--orion-touch-size, 60px);flex-shrink:0}}.orion-date-input__button--open{outline:none;background:var(--orion-atlantic-amethyst, #6244bb)}.orion-date-input__button--open.orion-date-input__button--open{border-left-color:var(--orion-atlantic-amethyst, #6244bb)}.orion-date-input__button--open .orion-date-input__button-icon{color:white}.orion-date-input__button-icon{font-size:var(--orion-icon-size, 20px);line-height:var(--orion-icon-size, 20px);color:var(--orion-atlantic-amethyst, #6244bb);transition:var(--orion-transition, 200ms ease-in-out)}.orion-date-input__text-input{box-sizing:border-box;display:inline-flex;justify-content:flex-start;align-items:center;padding:8px 8px 6px;flex:1 1;height:var(--orion-touch-size, 60px);min-width:var(--orion-date-input-min-width);border-radius:var(--orion-border-radius, 4px) 0 0 var(--orion-border-radius, 4px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 16px);line-height:var(--orion-line-height-normal, 24px);border-right:none;transition:var(--orion-transition, 200ms ease-in-out);background:var(--orion-white, #fff);text-transform:uppercase}.orion-date-input__text-input:nth-of-type(2){border-radius:0}.orion-date-input__text-input:focus{outline:none}.orion-date-input__text-input:focus::-moz-placeholder{opacity:0}.orion-date-input__text-input:focus::placeholder{opacity:0}.orion-date-input__text-input:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);border-color:var(--orion-color-text, #333);opacity:1}.orion-date-input__text-input--active{background-color:var(--orion-dusk-25, #eaeaf3)}.orion-date-input__text-input::-moz-placeholder{text-transform:uppercase;font-style:italic;color:var(--orion-gray-60, #666);opacity:1}.orion-date-input__text-input::placeholder{text-transform:uppercase;font-style:italic;color:var(--orion-gray-60, #666);opacity:1}@media screen and (max-width: 769px){.orion-date-input__text-input{min-width:0}}.orion-date-input__date-input{position:absolute;left:0;top:0;pointer-events:none;z-index:-1;display:none}.orion-date-input .orion-icon{font-size:var(--orion-icon-size-sm, 16px);display:flex;align-items:center}";

const DATE_SEPARATOR = '|';
const isCompleteDate = ({ datestring }) => {
  return /^\d{1,2}\/\d{1,2}\/\d{4}$/gi.test(datestring);
};
const isPastMinimumDate = ({ datestring, minimumDate }) => {
  if (!minimumDate)
    return true;
  const date = new Date(datestring);
  return date.getTime() >= new Date(minimumDate.toDateString()).getTime();
};
const isBeforeMaximumDate = ({ datestring, maximumDate }) => {
  if (!maximumDate)
    return true;
  const date = new Date(datestring);
  return date.getTime() <= new Date(maximumDate.toDateString()).getTime();
};
const dateValidators = [isCompleteDate, isPastMinimumDate, isBeforeMaximumDate];
const OrionDateInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.orionDateSelected = index.createEvent(this, "orionDateSelected", 7);
    // flatpickr object instance that controls the current calendar
    this.flatpickrInstance = null;
    this.hasFirstLabelSlot = false;
    this.hasSecondLabelSlot = false;
    this.hasConditionalSlot = false;
    this.toggleCalendar = () => {
      var _a, _b;
      this.isModalOpen = !this.isModalOpen;
      if (!this.isCalendarOpen) {
        (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.open();
      }
      else {
        (_b = this.flatpickrInstance) === null || _b === void 0 ? void 0 : _b.close();
      }
    };
    this.onCalendarOpen = (_selectedDates, _, instance) => {
      var _a, _b;
      if (!this.isMobile) {
        if (instance.selectedDateElem) {
          (_a = instance.selectedDateElem) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          (_b = instance.todayDateElem) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
      this.isCalendarOpen = true;
    };
    this.onCalendarClose = (_selectedDates, _, instance) => {
      if (!this.isMobile) {
        this.calendarOpenButton.focus();
        this.isModalOpen = false;
        setTimeout(() => {
          this.isCalendarOpen = false;
          instance.setDate(this.dates);
        }, 100);
      }
    };
    // hide previous / next month days to match design. This way flatpickr will ignore these elements and not index them for keyboard controls
    this.onCalendarDayCreate = (_, __, ___, dayElem) => {
      if (dayElem.classList.contains('nextMonthDay') || dayElem.classList.contains('prevMonthDay')) {
        dayElem.classList.add('flatpickr-disabled');
        dayElem.classList.add('hidden');
      }
    };
    this.onCalendarChange = (dates, _, instance) => {
      var _a;
      if (this.range) {
        const newDates = dates.map(date => instance.formatDate(date, this.dateFormat));
        if (!newDates[1])
          newDates[1] = '';
        this.dates = newDates;
      }
      else {
        this.dates = [instance.formatDate(dates[0], this.dateFormat), ''];
      }
      if (this.isMobile) {
        (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.setDate(dates);
      }
      this.checkDateValidaty();
      this.orionDateSelected.emit({
        startDate: dates[0],
        endDate: dates[1],
      });
    };
    this.adjustForSlashes = (datestring, input) => {
      var _a;
      let adjustedString = datestring;
      // append a forward slash to the cases:
      // '##' | '#/##' | '##/##'
      if (/^\d{2}$/gi.test(datestring) || /^\d{1,2}\/\d{2}$/gi.test(adjustedString)) {
        adjustedString += '/';
      }
      if (/\/\//gi.test(adjustedString)) {
        const curPos = (_a = input.selectionStart) !== null && _a !== void 0 ? _a : 0;
        adjustedString = adjustedString.replace(/\/{2,}/gi, '/');
        input.value = adjustedString;
        // reset cursor after setting input value
        input.selectionEnd = curPos - 1;
      }
      return adjustedString;
    };
    this.handleOnInput = (e, inputIndex) => {
      var _a;
      let newDateString = e.target.value;
      if (e.data) {
        newDateString = this.adjustForSlashes(newDateString, e.target);
      }
      // spread / update array of date strings
      const newDates = [...this.dates];
      newDates[inputIndex] = newDateString;
      this.dates = newDates;
      this.checkDateValidaty();
      this.orionDateSelected.emit({
        startDate: this.dates[0] ? new Date(this.dates[0]) : undefined,
        endDate: this.dates[1] ? new Date(this.dates[1]) : undefined,
      });
      // even if date is invalid, pass it along to flatpickr so that the calendar doesn't keep old date
      (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.setDate(newDates);
    };
    this.checkDateValidaty = () => {
      const validity = [false, false];
      this.dates.forEach((datestring, i) => {
        const dateToValidate = {
          datestring,
          minimumDate: this.minDate,
          maximumDate: this.maxDate,
        };
        const isValidDate = dateValidators.reduce((isValid, comparitor) => {
          // if already invalid, skip comparison
          if (!isValid || !comparitor(dateToValidate))
            return false;
          if (isValid)
            return true;
          return false;
        }, true);
        validity[i] = isValidDate;
      });
      // if not a range, set second date to always be valid
      if (!this.range)
        validity[1] = true;
      this.inputValidity = validity;
    };
    this.convertMinMaxDates = () => {
      if (typeof this.minDate === 'string') {
        const minDateAsDate = new Date(this.minDate);
        if (minDateAsDate.toString() !== 'Invalid Date') {
          this.minDate = minDateAsDate;
        }
      }
      if (typeof this.maxDate === 'string') {
        const maxDateAsDate = new Date(this.maxDate);
        if (maxDateAsDate.toString() !== 'Invalid Date') {
          this.maxDate = maxDateAsDate;
        }
      }
    };
    this.adjustInputLabelConditionals = () => {
      var _a, _b;
      const firstLabel = this.el.querySelector('[slot="orion-date-input-first-label"]');
      const secondLabel = this.el.querySelector('[slot="orion-date-input-second-label"]');
      let firstConditional = firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.querySelector('[slot="orion-label-conditional"]');
      let secondConditional = secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.querySelector('[slot="orion-label-conditional"]');
      this.hasFirstLabelSlot = Boolean(firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.textContent);
      this.hasSecondLabelSlot = Boolean(secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.textContent);
      // apply ids for a11y, and grab label text for mobile modal
      if (firstLabel) {
        firstLabel.id = 'firstInputLabel';
        this.firstSlotLabel = (_a = firstLabel.textContent) !== null && _a !== void 0 ? _a : '';
        // remove conditional text if it exists
        const labelConditional = firstLabel.querySelector('[slot="orion-label-conditional"]');
        if (labelConditional === null || labelConditional === void 0 ? void 0 : labelConditional.textContent)
          this.firstSlotLabel = this.firstSlotLabel.replace(labelConditional.textContent, '');
      }
      if (secondLabel) {
        secondLabel.id = 'secondInputLabel';
        this.secondSlotLabel = (_b = secondLabel.textContent) !== null && _b !== void 0 ? _b : '';
        // remove conditional text if it exists
        const labelConditional = secondLabel.querySelector('[slot="orion-label-conditional"]');
        if (labelConditional === null || labelConditional === void 0 ? void 0 : labelConditional.textContent)
          this.secondSlotLabel = this.secondSlotLabel.replace(labelConditional.textContent, '');
      }
      // if conditional is only within the first label, but we have a second label
      if (secondLabel && firstConditional && !secondConditional) {
        const newSecondConditional = document.createElement(firstConditional.tagName);
        newSecondConditional.innerHTML = firstConditional.innerHTML;
        newSecondConditional.setAttribute('slot', firstConditional.slot);
        secondConditional = newSecondConditional;
        secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.append(newSecondConditional);
      }
      // if we have 2 labels (w/ conditional only on 2nd)
      if (firstLabel && secondConditional && !firstConditional) {
        const newFirstConditional = document.createElement(secondConditional.tagName);
        newFirstConditional.innerHTML = secondConditional.innerHTML;
        newFirstConditional.setAttribute('slot', secondConditional.slot);
        firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.append(newFirstConditional);
        firstConditional = newFirstConditional;
      }
      // if we have a first conditional with a second label (which should have a conditional (either from the get go - or copied over here))
      if (firstConditional && secondLabel) {
        firstConditional.classList.add('visually-hidden');
      }
    };
    this.adjustInputLabelPositioning = () => {
      var _a;
      const labelHolder = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.orion-date-input__label');
      const firstLabel = this.el.querySelector('[slot="orion-date-input-first-label"]');
      const secondLabel = this.el.querySelector('[slot="orion-date-input-second-label"]');
      if (firstLabel) {
        labelHolder === null || labelHolder === void 0 ? void 0 : labelHolder.append(firstLabel);
      }
      if (secondLabel) {
        labelHolder === null || labelHolder === void 0 ? void 0 : labelHolder.append(secondLabel);
      }
    };
    this.getWrapperClasses = () => {
      return `
      orion-date-input__wrapper
      orion-date-input__wrapper--${this.inline ? 'inline' : 'stacked'}
    `;
    };
    this.getDateInputClasses = () => {
      return classnames('orion-date-input__inner-wrapper', 'flatpickr-override', 'flatpickr-override--desktop', {
        'orion-date-input__inner-wrapper--error': this.error,
        'orion-date-input__inner-wrapper--disabled': this.disabled,
      });
    };
    this.getButtonCSSClasses = () => {
      return `
      orion-date-input__button
      orion-date-input__button--${this.isCalendarOpen ? 'open' : 'closed'}
    `;
    };
    this.getInputCSSClasses = (isActive) => {
      return `
      orion-date-input__text-input
      orion-date-input__text-input--${this.range && isActive ? 'active' : 'inactive'}
    `;
    };
    this.getInputs = () => {
      var _a, _b;
      const inputConfigs = [
        {
          dateIndex: 0,
          isActive: !!(((_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.isOpen) && (this.flatpickrInstance.selectedDates.length === 0 || this.flatpickrInstance.selectedDates.length === 2 || !this.dates[0])),
          id: 'firstInput',
          ariaLabelledby: 'firstInputLabel',
        },
        this.range
          ? {
            dateIndex: 1,
            isActive: !!(((_b = this.flatpickrInstance) === null || _b === void 0 ? void 0 : _b.isOpen) && this.flatpickrInstance.selectedDates.length === 1 && !this.dates[1]),
            id: 'secondInput',
            ariaLabelledby: 'secondInputLabel',
          }
          : null,
      ];
      return inputConfigs.map(config => {
        if (!config)
          return null;
        return (index.h("input", { placeholder: this.placeholder, class: this.getInputCSSClasses(config.isActive), type: "text", disabled: this.disabled, value: this.dates[config.dateIndex], onInput: e => {
            this.handleOnInput(e, config.dateIndex);
          }, pattern: "\\d{1,2}/\\d{1,2}/\\d{4}", id: config.id, "aria-labelledby": config.ariaLabelledby, "aria-invalid": Boolean(this.error).toString(), inputmode: "numeric" }));
      });
    };
    this.range = false;
    this.placeholder = 'mm/dd/yyyy';
    this.dateFormat = 'm/d/Y';
    this.minDate = undefined;
    this.maxDate = undefined;
    this.multiMonth = false;
    this.error = false;
    this.disabled = false;
    this.inline = false;
    this.isCalendarOpen = false;
    this.isModalOpen = false;
    this.dates = ['', ''];
    this.inputValidity = [true, true];
    this.flatpickrConfig = {};
    this.isMobile = false;
    this.firstSlotLabel = '';
    this.secondSlotLabel = '';
  }
  get isValid() {
    const isFirstInputValid = this.dates[0] && this.inputValidity[0];
    const isSecondInputValid = this.dates[1] && this.inputValidity[1];
    return this.range ? isFirstInputValid && isSecondInputValid : isFirstInputValid;
  }
  handleResize() {
    this.setIsMobile();
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  closeModal() {
    var _a;
    this.isModalOpen = false;
    (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.close();
    this.isCalendarOpen = false;
  }
  onModalDateSelect(event) {
    if (this.flatpickrInstance) {
      this.onCalendarChange(event.detail.dates, '', this.flatpickrInstance);
    }
  }
  componentWillLoad() {
    var _a, _b;
    this.convertMinMaxDates();
    const isMinDateToday = this.minDate ? new Date((_a = this.minDate) === null || _a === void 0 ? void 0 : _a.toDateString()).getTime() === new Date(new Date().toDateString()).getTime() : false;
    const isMaxDateToday = this.maxDate ? new Date((_b = this.maxDate) === null || _b === void 0 ? void 0 : _b.toDateString()).getTime() === new Date(new Date().toDateString()).getTime() : false;
    this.flatpickrConfig = {
      static: true,
      dateFormat: this.dateFormat,
      minDate: isMinDateToday ? 'today' : this.minDate,
      maxDate: isMaxDateToday ? 'today' : this.maxDate,
      mode: this.range ? 'range' : 'single',
      showMonths: this.multiMonth ? 2 : 1,
      monthSelectorType: 'static',
      nextArrow: '<i class="orion-icon orion-icon-chevron_right"></i>',
      prevArrow: '<i class="orion-icon orion-icon-chevron_left"></i>',
      locale: {
        weekdays: {
          shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        rangeSeparator: DATE_SEPARATOR,
      },
      onChange: this.onCalendarChange,
      onOpen: this.onCalendarOpen,
      onClose: this.onCalendarClose,
      onDayCreate: this.onCalendarDayCreate,
    };
    this.setIsMobile();
    this.adjustInputLabelConditionals();
  }
  componentDidLoad() {
    var _a;
    this.isCalendarOpen = false;
    this.flatpickrInstance = flatpickr(this.dateInput, this.flatpickrConfig);
    // disable flatpickr's year input
    (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.numInput.cur-year').forEach(el => {
      el.setAttribute('disabled', 'true');
    });
    this.adjustInputLabelPositioning();
  }
  render() {
    return (index.h(index.Host, null, index.h("orion-date-calendar-modal", { isOpen: this.isModalOpen && this.isMobile, label: this.range ? 'Roundtrip' : 'One-way', flatpickrConfig: this.flatpickrConfig, dates: this.dates, range: this.range, dateFormat: this.dateFormat, firstDateLabel: this.firstSlotLabel, secondDateLabel: this.secondSlotLabel }), index.h("span", { class: this.getWrapperClasses() }, index.h("div", { class: "orion-date-input__label" }, this.hasFirstLabelSlot && index.h("slot", { name: "orion-date-input-first-label" }), this.hasSecondLabelSlot && index.h("slot", { name: "orion-date-input-second-label" })), index.h("div", { class: this.getDateInputClasses() }, index.h("div", { class: "orion-date-input__status" }), this.getInputs(), index.h("button", { onClick: this.toggleCalendar, class: this.getButtonCSSClasses(), ref: el => {
        this.calendarOpenButton = el;
      }, disabled: this.disabled, "aria-label": "Opens a calendar date picker." }, index.h("i", { class: "orion-date-input__button-icon orion-icon-calendar" })), index.h("input", { ref: el => {
        this.dateInput = el;
      }, class: `orion-date-input__date-input`, name: "orion-date", id: "orion-date", tabIndex: -1 })))));
  }
  get el() { return index.getElement(this); }
};
OrionDateInput.style = orionDateInputCss;

const orionDrawerCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-drawer-top-value:0px;--orion-drawer-max-width-sm:50%;--orion-drawer-max-width-md:40%;--orion-drawer-max-width-lg:33%}::slotted([slot=orion-drawer-title]){display:flex;justify-content:center;text-align:center;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px);font-weight:var(--orion-font-weight-semi-bold, 600);margin-top:64px;padding:0 24px}h2{margin:0;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif)}.orion-drawer{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);display:flex;flex-direction:column;position:fixed;top:0;left:unset;right:0;bottom:0;height:100%;width:100%;transform:translateX(100%);z-index:var(--orion-z-negative, -1);background-color:var(--orion-white, #fff);color:var(--orion-color-text, #333);visibility:hidden;overflow:hidden;transition:var(--orion-transition, 200ms ease-in-out);box-sizing:border-box;max-height:unset}.orion-drawer.is-open{transform:translateX(0);z-index:var(--orion-z-high, 500);visibility:visible}.orion-drawer__close-btn{position:absolute;top:0;right:0;padding:24px;background-color:transparent;color:var(--orion-color-text, #333);border:none;cursor:pointer;font-size:24px;line-height:0;}.orion-drawer__close-btn:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-drawer__close-btn:focus:not(:focus-visible){outline:none}.orion-drawer__close-btn:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-drawer__body{flex:1;padding:24px;overflow-y:auto}.orion-drawer__footer{display:flex;flex-direction:column;gap:var(--orion-space-xl, 16px)}.orion-drawer__footer-content{padding:0 24px}.orion-drawer__footer-buttons{display:flex}.orion-drawer__footer-buttons>*{flex:1;border-radius:0}.orion-drawer__btn-secondary,.orion-drawer__btn-primary{--orion-button-radius:0}@media screen and (min-width: 769px){.orion-drawer__btn-secondary,.orion-drawer__btn-primary{--orion-button-radius:4px}}:host([open-from=left]) .orion-drawer{left:0;right:unset;transform:translateX(-100%)}:host([open-from=left]) .orion-drawer.is-open{transform:translateX(0)}:host([open-from=right]) .orion-drawer{left:unset;right:0}:host([open-from=right]) .orion-drawer.is-open{transform:translateX(0)}:host([open-from=bottom]) .orion-drawer{left:0;right:0;top:unset;transform:translate(0, 100%)}:host([open-from=bottom]) .orion-drawer.is-open{transform:translate(0, 0)}@media screen and (min-width: 769px){.orion-drawer{max-width:var(--orion-drawer-max-width-sm);box-shadow:-2px 0 4px 0 rgba(0, 0, 0, 0.5);top:var(--orion-drawer-top-value, 0px);height:calc(100% - var(--orion-drawer-top-value, 0px))}.orion-drawer__close-btn{position:relative;padding-right:48px}.orion-drawer__body{padding:0 48px}.orion-drawer__footer{padding:24px 48px;border-top:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-drawer__footer-content{padding:0}.orion-drawer__footer-buttons{gap:var(--orion-space-xl, 16px);min-width:336px;margin-left:auto}.orion-drawer__footer-buttons>*{max-width:160px;margin-left:auto}.orion-drawer__header{display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse;padding-left:48px}::slotted([slot=orion-drawer-title]){margin-top:0;text-align:left;padding:0}:host([open-from=left]) .orion-drawer{box-shadow:2px 0 4px 0 rgba(0, 0, 0, 0.5)}:host([open-from=bottom]) .orion-drawer{max-width:100%;width:100%;max-height:40%;box-shadow:0 -2px 4px 0 rgba(0, 0, 0, 0.5)}}@media screen and (min-width: 1025px){.orion-drawer{max-width:var(--orion-drawer-max-width-md)}}@media screen and (min-width: 1441px){.orion-drawer{max-width:var(--orion-drawer-max-width-lg)}}";

const OrionDrawer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.orionDrawerFooterBtnClicked = index.createEvent(this, "orionDrawerFooterBtnClicked", 7);
    this.hasFooterSlot = false;
    this.hasPrimaryButton = false;
    this.hasSecondaryButton = false;
    this.originalPaddingRight = 0;
    this.originalOverflow = 'auto';
    this.originalHeight = 'auto';
    this.isOpen = false;
    this.openFrom = 'right';
  }
  componentWillLoad() {
    const footerSlot = this.el.querySelector('[slot="orion-drawer-footer-content"]');
    const secondaryButtonSlot = this.el.querySelector('[slot="orion-drawer-secondary-button"]');
    const primaryButtonSlot = this.el.querySelector('[slot="orion-drawer-primary-button"]');
    // check if slot exists check if it has content
    this.hasFooterSlot = Boolean(footerSlot === null || footerSlot === void 0 ? void 0 : footerSlot.textContent);
    this.hasSecondaryButton = Boolean(secondaryButtonSlot === null || secondaryButtonSlot === void 0 ? void 0 : secondaryButtonSlot.textContent);
    this.hasPrimaryButton = Boolean(primaryButtonSlot === null || primaryButtonSlot === void 0 ? void 0 : primaryButtonSlot.textContent);
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
  }
  componentDidUpdate() {
    const isMobile = window.innerWidth <= 768;
    // check only for mobile as the body scroll for desktop should be enabled
    if (isMobile && this.isOpen) {
      // get width of scrollbar
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      // add padding right to body so the content doesn't shift when scrollbar disapears
      document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!this.isOpen) {
      // reset padding
      document.body.style.paddingRight = `${this.originalPaddingRight}px`;
      // Allow body to scroll when drawer is closed
      document.body.style.overflow = this.originalOverflow;
      document.body.style.height = this.originalHeight;
    }
  }
  _handleClose() {
    this.isOpen = false;
  }
  onFooterBtnClick(variant) {
    this.orionDrawerFooterBtnClicked.emit({ variant });
  }
  render() {
    return (index.h("aside", { class: `orion-drawer ${this.isOpen ? 'is-open' : ''}`, "aria-labelledby": "dialog-header", tabindex: "-1", "aria-hidden": this.isOpen ? 'false' : 'true' }, index.h("div", { class: "orion-drawer__header" }, index.h("button", { type: "button", class: "orion-drawer__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, index.h("i", { class: `orion-icon-close` })), index.h("h2", null, index.h("slot", { name: "orion-drawer-title" }))), index.h("div", { class: "orion-drawer__body" }, index.h("slot", { name: "orion-drawer-body" })), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (index.h("div", { class: "orion-drawer__footer" }, this.hasFooterSlot ? (index.h("div", { class: "orion-drawer__footer-content" }, index.h("slot", { name: "orion-drawer-footer-content" }))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (index.h("div", { class: "orion-drawer__footer-buttons" }, this.hasSecondaryButton ? (index.h("orion-button", { class: "orion-drawer__btn-secondary", variant: "secondary", onClick: () => this.onFooterBtnClick('secondary') }, index.h("slot", { name: "orion-drawer-secondary-button" }))) : (''), this.hasPrimaryButton ? (index.h("orion-button", { class: "orion-drawer__btn-primary", variant: "primary", onClick: () => this.onFooterBtnClick('primary') }, index.h("slot", { name: "orion-drawer-primary-button" }))) : (''))) : (''))) : ('')));
  }
  get el() { return index.getElement(this); }
};
OrionDrawer.style = orionDrawerCss;

const orionDropdownCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none;margin:0;padding:0}details>summary{list-style:none;cursor:pointer}details>summary::-webkit-details-marker{display:none}fieldset:disabled{opacity:0;pointer-events:none}.orion-dropdown__container{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}details{width:100%;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-dropdown summary{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown--disabled summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown--error summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}.orion-dropdown--isOpen summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown summary:focus,.orion-dropdown summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown--disabled summary:focus,.orion-dropdown--disabled summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px)}.orion-dropdown__placeholder{font-style:italic;color:var(--orion-color-text--dimmed, #666)}.orion-dropdown__listbox{position:absolute;z-index:var(--orion-z-mid, 100);width:calc(100% - 2px);max-height:75vh;overflow-y:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown__chevron{width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);position:absolute;right:12px}.orion-dropdown__chevron--disabled,.orion-dropdown__chevron--error--isClosed,.orion-dropdown__chevron--isClosed{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTIuMjc0OTEyMzYsNS44ODAzNTU5IEMxLjc1MzUzNDg3LDUuMzcyMjc4MTYgMC45MDkzMTU2Miw1LjM3MzM1MzU2IDAuMzg5Mjk1ODg1LDUuODgyNzU3ODcgQy0wLjEzMDcyMzg1MSw2LjM5MjE2MjE4IC0wLjEyOTYyMzE3NCw3LjIxNjk5NDM1IDAuMzkxNzU0MzE1LDcuNzI1MDcyMDkgTDExLjA1ODQyMSwxOC4xMTk2NDQxIEMxMS41Nzg4Mzc0LDE4LjYyNjc4NTMgMTIuNDIxMTYyNiwxOC42MjY3ODUzIDEyLjk0MTU3OSwxOC4xMTk2NDQxIEwyMy42MDgyNDU3LDcuNzI1MDcyMDkgQzI0LjEyOTYyMzIsNy4yMTY5OTQzNSAyNC4xMzA3MjM5LDYuMzkyMTYyMTggMjMuNjEwNzA0MSw1Ljg4Mjc1Nzg3IEMyMy4wOTA2ODQ0LDUuMzczMzUzNTYgMjIuMjQ2NDY1MSw1LjM3MjI3ODE2IDIxLjcyNTA4NzYsNS44ODAzNTU5IEwxMiwxNS4zNTczNjc1IEwyLjI3NDkxMjM2LDUuODgwMzU1OSBaIiBpZD0icGF0aC0xIj48L3BhdGg+PC9zdmc+\");background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--isOpen{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIxLjcyNTA4NzYsMTcuNjE5NjQ0MSBDMjIuMjQ2NDY1MSwxOC4xMjc3MjE4IDIzLjA5MDY4NDQsMTguMTI2NjQ2NCAyMy42MTA3MDQxLDE3LjYxNzI0MjEgQzI0LjEzMDcyMzksMTcuMTA3ODM3OCAyNC4xMjk2MjMyLDE2LjI4MzAwNTYgMjMuNjA4MjQ1NywxNS43NzQ5Mjc5IEwxMi45NDE1NzksNS4zODAzNTU4OSBDMTIuNDIxMTYyNiw0Ljg3MzIxNDcgMTEuNTc4ODM3NCw0Ljg3MzIxNDcgMTEuMDU4NDIxLDUuMzgwMzU1ODkgTDAuMzkxNzU0MzE1LDE1Ljc3NDkyNzkgQy0wLjEyOTYyMzE3NCwxNi4yODMwMDU2IC0wLjEzMDcyMzg1MSwxNy4xMDc4Mzc4IDAuMzg5Mjk1ODg1LDE3LjYxNzI0MjEgQzAuOTA5MzE1NjIsMTguMTI2NjQ2NCAxLjc1MzUzNDg3LDE4LjEyNzcyMTggMi4yNzQ5MTIzNiwxNy42MTk2NDQxIEwxMiw4LjE0MjYzMjQ5IEwyMS43MjUwODc2LDE3LjYxOTY0NDEgWiIKICAgICAgICAgICAgICAgICAgaWQ9InBhdGgtMSIKICAgICAgICAgICAgICAgID48L3BhdGg+PC9zdmc+\");background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--error--isClosed{filter:brightness(0) saturate(100%) invert(17%) sepia(98%) saturate(5127%) hue-rotate(338deg) brightness(80%) contrast(112%)}.orion-dropdown__chevron--isOpen,.orion-dropdown__chevron--isClosed,details:focus-within~.orion-dropdown__chevron{filter:brightness(0) saturate(100%) invert(32%) sepia(18%) saturate(4839%) hue-rotate(232deg) brightness(87%) contrast(93%)}.orion-dropdown__chevron--disabled,details:focus-within~.orion-dropdown__chevron--disabled{filter:brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1%) hue-rotate(141deg) brightness(96%) contrast(84%);cursor:not-allowed}@media screen and (min-width: 769px){details{font-size:var(--orion-font-size-body, 16px)}.orion-dropdown summary{height:var(--orion-touch-size, 40px)}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-md, 8px)}.orion-dropdown__chevron{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);top:10px;right:8px}}";

const OrionDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.mouseDown = false;
    this.listBoxUID = '';
    this.name = 'dropdown';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.placeholder = '';
    this.summary = '';
    this.isOpen = false;
  }
  /**
   * A getter that returns an array of `orion-dropdown-options` that are in the slot
   */
  get dropdownOptions() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-DROPDOWN-OPTION');
  }
  /**
   * Listen to the `dropdownOptionChanged` event emitted by the
   * `orion-dropdown-option` component and update
   */
  onOptionChanged(event) {
    this.setDropdownOptionStateByValue(event.detail.value);
    this.isOpen = false;
  }
  // Initialize summary text to placeholder text
  componentWillLoad() {
    this.summary = this.placeholder;
    this.listBoxUID = generateUUID();
  }
  /**
   * When the component is initially loaded, set the checked
   * dropdown option according to `value` and update the `name`
   */
  componentDidLoad() {
    this.setDropdownOptionStateByValue(this.value);
    this.setDropdownOptionName();
    this.makeFirstFocusableIfNoneChecked();
  }
  /**
   * Check to see if any dropdown options are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked() {
    const hasAnyChecked = this.dropdownOptions.some(option => option.checked);
    const hasCheckedDisabled = this.dropdownOptions.some(option => option.checked && option.disabled);
    if (!hasAnyChecked || hasCheckedDisabled) {
      const firstButton = this.dropdownOptions[0];
      if (firstButton) {
        firstButton.focusable = true;
      }
    }
  }
  /**
   * Update value and emit update
   */
  updateValue(value) {
    this.value = value;
    this.valueChanged.emit({ value });
  }
  /**
   * Set the name on all the dropdown options
   */
  setDropdownOptionName() {
    this.dropdownOptions.forEach(option => {
      option.setAttribute('name', this.name);
    });
  }
  /**
   * Set the dropdown option with the selected value to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByValue(selectedValue) {
    this.dropdownOptions.forEach(option => {
      const isSelected = option.value === selectedValue;
      option.checked = isSelected;
      if (!option.disabled) {
        option.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(option.value);
        this.getSummary(option.value, option.label);
      }
    });
  }
  /**
   * Set the summary text based on the selected value
   */
  getSummary(value, label) {
    this.dropdownOptions.forEach(option => {
      const isSelected = option.value === value;
      if (isSelected) {
        this.summary = label;
      }
    });
  }
  /**
   * Set the dropdown option at the selected index to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByIndex(selectedIndex) {
    this.dropdownOptions.forEach((option, optionIndex) => {
      const isSelected = optionIndex === selectedIndex;
      option.checked = isSelected;
      if (!option.disabled) {
        option.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(option.value);
        this.getSummary(option.value, option.label);
      }
    });
  }
  /**
   *
   * Gets the index of the currently checked dropdown option
   */
  getCheckedIndex() {
    const currentActiveTrigger = this.dropdownOptions.find(element => element.checked);
    return currentActiveTrigger ? this.dropdownOptions.indexOf(currentActiveTrigger) : -1;
  }
  /**
   * Move checked to the next dropdown option
   */
  nextOption() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex < this.dropdownOptions.length - 1 ? currentIndex + 1 : 0;
    if (!this.dropdownOptions[nextIndex].disabled) {
      this.setDropdownOptionStateByIndex(nextIndex);
    }
  }
  /**
   * Move checked to the previous dropdown option
   */
  prevOption() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex <= 0 ? this.dropdownOptions.length - 1 : currentIndex - 1;
    if (!this.dropdownOptions[nextIndex].disabled) {
      this.setDropdownOptionStateByIndex(nextIndex);
    }
  }
  /**
   * Handle keyboard navigation, move to previous/next dropdown option
   */
  handleKeyPress(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.isOpen = true;
      this.nextOption();
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.isOpen = true;
      this.prevOption();
    }
    else if (event.key === 'Escape' || event.key === 'Tab' || event.key === 'Enter') {
      this.isOpen = false;
    }
  }
  /**
   * Close dropdown when clicking outside of dropdown
   */
  closeDropdown(event) {
    const target = event.target;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }
  handleMouseDown(event) {
    if (event.target === this.el) {
      this.mouseDown = true;
    }
  }
  handleMouseUp(event) {
    if (event.target === this.el) {
      this.isOpen = !this.isOpen;
      this.mouseDown = false;
    }
  }
  getDropdownClass() {
    return classnames('orion-dropdown', // this class is always applied
    {
      'orion-dropdown--disabled': this.disabled,
      'orion-dropdown--error': this.error,
      'orion-dropdown-isOpen': this.isOpen, // this class is applied if the isOpen prop is true
    });
  }
  getChevronClass() {
    return classnames('orion-dropdown__chevron', // this class is always applied
    {
      'orion-dropdown__chevron--disabled': this.disabled,
      'orion-dropdown__chevron--error--isClosed': this.error && !this.isOpen,
      'orion-dropdown__chevron--isClosed': !this.isOpen && !this.error,
      'orion-dropdown__chevron--isOpen': this.isOpen && !this.disabled, // this class is applied if the isOpen prop is true and the disabled prop is false
    });
  }
  render() {
    return (index.h("div", { class: "orion-dropdown__container" }, index.h("details", { class: this.getDropdownClass(), open: this.isOpen }, index.h("summary", { class: this.summary === this.placeholder ? 'orion-dropdown__placeholder' : 'orion-dropdown__value', tabIndex: this.disabled ? -1 : 0, "aria-controls": this.listBoxUID, "aria-expanded": this.isOpen ? 'true' : 'false' }, this.summary), index.h("fieldset", { class: "orion-dropdown__listbox", disabled: this.disabled, id: this.listBoxUID }, index.h("div", { role: "listbox" }, index.h("slot", { ref: el => {
        this.slotEl = el;
      } })))), index.h("div", { class: this.getChevronClass() })));
  }
  get el() { return index.getElement(this); }
};
OrionDropdown.style = orionDropdownCss;

const orionDropdownOptionCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;background-color:var(--orion-white, #fff)}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-dropdown__option{position:relative;display:flex;flex-direction:row;justify-content:stretch;align-items:center;margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);cursor:pointer;background-color:var(--orion-color-background, #fff)}.orion-dropdown__option--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}.orion-dropdown__option:after{content:\"\";width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);position:absolute;top:20px;right:12px;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTguMTQzLDEzLjM1NSBMMy40MTYzMzUzNCw4LjYyOTE2NDcyIEMyLjg3OTQyMDMyLDguMDkyMzQzOTEgMi4wMDg5ODU0NCw4LjA5MjQyMDI5IDEuNDcyMTY0NjQsOC42MjkzMzUzMSBDMS40NzIxMDk3NSw4LjYyOTM5MDIgMS40NzIwNTQ4Nyw4LjYyOTQ0NTEgMS40NzIsOC42Mjk1IEMwLjkzNTE1OTM3Nyw5LjE2NjYxNjc4IDAuOTM1MzI4MjkyLDEwLjAzNzIxNDMgMS40NzIzNzczLDEwLjU3NDEyMjcgTDcuNDMyODAwNjYsMTYuNTMyOTg1OCBDNy44MjM0NzQ3MywxNi45MjMyMzM4IDguNDU2NTE0ODYsMTYuOTIzMjIzNCA4Ljg0NzE3NjEsMTYuNTMyOTYyNSBMMjIuNDY5NjU0NywyLjkxMzE1NDggQzIzLjAwNTkyMzMsMi4zNzY5OTE0MyAyMy4wMDYwMDg1LDEuNTA3NjEzNiAyMi40Njk4NDUxLDAuOTcxMzQ1MDc0IEMyMi40Njk3MzAxLDAuOTcxMjMwMDI5IDIyLjQ2OTYxNTEsMC45NzExMTUwMDQgMjIuNDY5NSwwLjk3MSBDMjEuOTMyOTE0OSwwLjQzNDY5MTA4MyAyMS4wNjMxOTcsMC40MzQ4MDMwMTYgMjAuNTI2NzUsMC45NzEyNTAwMzIiIGlkPSJwYXRoLTEiPjwvcGF0aD48L3N2Zz4=\");filter:brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(110deg) brightness(106%) contrast(101%);background-repeat:no-repeat;background-size:cover;display:none}input:checked~.orion-dropdown__option{background-color:var(--orion-color-activation, #6244bb);color:var(--orion-white, #fff)}input:checked~.orion-dropdown__option:after{display:block}input:hover:not(:checked)+.orion-dropdown__option{background-color:var(--orion-color-hover-light, #eaeaf3)}input:disabled:hover~.orion-dropdown__option{background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}@media screen and (min-width: 769px){.orion-dropdown__option{padding:var(--orion-space-md, 8px)}.orion-dropdown__option:after{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);top:12px;right:8px}}";

const OrionDropdownOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dropdownOptionChanged = index.createEvent(this, "dropdownOptionChanged", 7);
    this.name = 'dropdown-option';
    this.disabled = false;
    this.value = '';
    this.label = '';
    this.checked = false;
    this.required = false;
    this.focusable = false;
  }
  onDropdownOptionChangeValue() {
    this.checked = true;
    this.dropdownOptionChanged.emit({ value: this.value, label: this.label, checked: this.checked });
  }
  componentWillLoad() {
    this.label = this.el.innerHTML;
  }
  /**
   * The `orion-dropdown` component will toggle the checked prop
   */
  watchChecked(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.inputEl.checked = newValue;
    }
  }
  render() {
    return (index.h("label", null, index.h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, "aria-selected": this.checked ? 'true' : 'false', role: "option", value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onDropdownOptionChangeValue.bind(this) }), index.h("span", { class: `orion-dropdown__option 
        ${this.disabled ? 'orion-dropdown__option--disabled' : ''}` }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["watchChecked"]
  }; }
};
OrionDropdownOption.style = orionDropdownOptionCss;

const orionErrorCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-error{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-error, #d50032);font-size:var(--orion-font-size-small, 13px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-sm, 16px);font-style:italic;margin:0;padding:var(--orion-space-md, 8px) 0 0 0}.orion-error svg{fill:var(--orion-error-color-text, #d50032);padding-right:var(--orion-space-xs, 4px)}";

const OrionError = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "orion-error" }, index.h("span", null, index.h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, index.h("path", { d: "M15.7965714,12.8914286 L9.28228571,1.62285714 C9.02503828,1.15724226 8.53188534,0.871547603 8,0.88 C7.8690389,0.878267092 7.73841176,0.893634991 7.61142857,0.925714286 C7.23326196,1.0300281 6.91237715,1.28097647 6.72,1.62285714 L0.194285714,12.8914286 C0.0675374493,13.1185497 0.000677122129,13.3741921 0,13.6342857 C0,14.4548231 0.665176943,15.1200075 1.48571429,15.1200075 L14.5142857,15.1200075 C14.7760842,15.1208485 15.0330738,15.0496821 15.2571429,14.9142857 C15.598165,14.7187274 15.8469621,14.3950705 15.948253,14.0152294 C16.049544,13.6353882 15.9949392,13.2308242 15.7965714,12.8914286 Z M8,12.4914416 C7.54240872,12.4882619 7.17402274,12.1147476 7.17718217,11.6571563 C7.1803416,11.1995649 7.55385006,10.831173 8.01144144,10.8343252 C8.46903281,10.8374774 8.83743063,11.21098 8.83428571,11.6685714 C8.83051289,12.125918 8.45735512,12.493964 8,12.4914416 L8,12.4914416 Z M7.42857143,5.49714286 L8.57142857,5.49714286 L8.57142857,9.49714286 L7.42857143,9.49714286 L7.42857143,5.49714286 Z", id: "path-1" }))), index.h("slot", null)));
  }
};
OrionError.style = orionErrorCss;

const orionLabelCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-label--padding-right:8px;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-label{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-label, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-label__label{padding:var(--orion-space-md, 8px) var(--orion-label--padding-right) var(--orion-space-md, 8px) 0}.orion-label__label--disabled{color:var(--orion-color-text--disabled, #666)}.orion-label__label--error{color:var(--orion-color-error, #d50032)}.orion-label__conditional{color:var(--orion-color-text--disabled, #666);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);padding:var(--orion-space-md, 8px) 0 var(--orion-space-md, 8px) var(--orion-space-md, 8px)}@media screen and (min-width: 769px){.orion-label{font-size:var(--orion-font-size-label, 16px)}}";

const OrionLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hasConditionalSlot = false;
    this.disabled = false;
    this.error = false;
  }
  getCSSClass() {
    return classnames('orion-label__label', // this class is always applied
    {
      'orion-label__label--disabled': this.disabled,
      'orion-label__label--error': this.error, // this class is applied if the error prop is true
    });
  }
  componentWillLoad() {
    this.hasConditionalSlot = !!this.el.querySelector('[slot="orion-label-conditional"]');
  }
  render() {
    return (index.h("div", { class: "orion-label" }, 
    /* Disabling eslint for the next line because this component is meant to wrap a label around
     * a control which will be inserted into the slot
     */
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    index.h("label", { class: this.getCSSClass() }, index.h("slot", null)), this.hasConditionalSlot ? (index.h("span", { class: "orion-label__conditional" }, index.h("slot", { name: "orion-label-conditional" }))) : null));
  }
  get el() { return index.getElement(this); }
};
OrionLabel.style = orionLabelCss;

const orionLinkCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{--orion-link-color:var(--orion-color-activation, #6244bb);--orion-link-color--hover:var(--orion-color-hover-dark, #8972cc);--orion-link-color--active:var(--orion-color-active, #49328c);--orion-link-font-size:inherit;--orion-link-font-weight:var(--orion-font-weight-semi-bold, 600);--orion-link-line-height:inherit;--orion-link-font-style:normal;--orion-link-icon-top:0px;--orion-link-icon-left:0px}a,a:link,a:visited,a:focus,a:focus-visible{color:var(--orion-link-color);text-decoration:underline}a:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-link-color--hover)}a:active{color:var(--orion-link-color--active)}.orion-link{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-link-font-size);font-weight:var(--orion-link-font-weight);font-style:var(--orion-link-font-style);letter-spacing:0;line-height:var(--orion-link-line-height);margin:0;padding:0;outline:none;border:none;cursor:pointer}.orion-link--disabled{color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-link--disabled:hover{color:var(--orion-color-text--dimmed, #666)}a.orion-link--no-underline{text-decoration:none}.orion-link__icon{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-link-font-size);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.orion-link__icon .left{margin-left:var(--orion-space-sm, 4px);margin-right:var(--orion-space-md, 8px)}.orion-link__icon .right{margin-left:var(--orion-space-md, 8px);margin-right:var(--orion-space-sm, 4px)}.orion-link__icon .orion-icon:before{position:relative;top:var(--orion-link-icon-top);left:var(--orion-link-icon-left)}";

const OrionLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = '';
    this.disabled = false;
    this.target = '_self';
    this.rel = '';
    this.download = '';
    this.iconName = '';
    this.iconLeft = false;
    this.noUnderline = false;
  }
  componentWillLoad() {
    /* Disable link if href is not provided */
    if (this.href === '') {
      console.warn('orion-link: href is required');
      this.disabled = true;
    }
  }
  getCSSClass() {
    return classnames('orion-link', // Default class
    {
      'orion-link--disabled': this.disabled,
      'orion-link--no-underline': this.iconName !== '' || this.noUnderline, // No underline class if icon is present or noUnderline is true
    });
  }
  render() {
    return (index.h("a", Object.assign({}, (this.disabled ? null : { href: this.href }), { target: this.target, rel: this.rel, download: this.download, class: this.getCSSClass() }), this.iconName !== '' && this.iconLeft ? (index.h("span", { class: "orion-link__icon" }, index.h("i", { class: `orion-icon orion-icon-${this.iconName} left` }))) : null, index.h("slot", null), this.iconName !== '' && !this.iconLeft ? (index.h("span", { class: "orion-link__icon" }, index.h("i", { class: `orion-icon orion-icon-${this.iconName} right` }))) : null));
  }
};
OrionLink.style = orionLinkCss;

const orionListCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-list{box-sizing:border-box;position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;border:none}.orion-list::before{content:\"\";position:absolute;top:0;left:0;right:0;height:1px;background-color:var(--orion-gray-40, #999);transform:scaleY(0.5);z-index:var(--orion-z-base, 1)}";

const OrionList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("ul", { class: "orion-list" }, index.h("slot", null)));
  }
};
OrionList.style = orionListCss;

const orionListItemCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-list-item-icon-color:var(--orion-info, #024);--orion-list-item-trailing-icon-color:var(--orion-info, #024);--orion-list-item-marker-color:var(--orion-info, #024);--orion-list-item-marker-size:var(--orion-space-xl, 16px);--orion-list-item--vertical-align:center}a,a:link,a:visited,a:focus,a:hover,a:active{text-decoration:none;outline:none;color:inherit}.orion-list-item{position:relative;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-list-item--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);min-height:var(--orion-touch-size, 60px);background-color:var(--orion-white, #fff);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);gap:var(--orion-space-md, 8px);border:none;transition:var(--orion-transition, 200ms ease-in-out)}.orion-list-item::after{content:\"\";position:absolute;bottom:0;left:0;right:0;height:1px;background-color:var(--orion-gray-40, #999);transform:scaleY(0.5)}.orion-list-item__marker-container{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;height:var(--orion-line-height-normal, 24px);width:-moz-fit-content;width:fit-content;align-self:flex-start}.orion-list-item__marker{height:var(--orion-list-item-marker-size);width:var(--orion-list-item-marker-size);border-radius:50%;background-color:var(--orion-list-item-marker-color)}.orion-list-item__icon,.orion-list-item__trailing-icon{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-icon-size, 24px);width:var(--orion-line-height-normal, 24px);height:var(--orion-line-height-normal, 24px)}.orion-list-item__icon{color:var(--orion-list-item-icon-color);align-self:flex-start}.orion-list-item__trailing-icon{color:var(--orion-list-item-trailing-icon-color)}.orion-list-item__image{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;align-self:flex-start}.orion-list-item__content{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-grow:1;flex-basis:0}.orion-list-item__heading{font-weight:600}.orion-list-item__subheading{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}.orion-list-item--disabled,.orion-list-item--disabled .orion-list-item__icon,.orion-list-item--disabled .orion-list-item__trailing-icon{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666)}.orion-list-item--disabled .orion-list-item__marker{background-color:var(--orion-color-text--dimmed, #666)}.orion-list-item--disabled .orion-list-item__image{opacity:0.5}.orion-list-item__link{display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-list-item--vertical-align);width:100%;margin:0;padding:0;gap:var(--orion-space-md, 8px)}.orion-list-item__link:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));outline-offset:4px;z-index:1;width:100%}@media screen and (min-width: 769px){.orion-list-item{min-height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-xl, 16px)}.orion-list-item__icon,.orion-list-item__trailing-icon{font-size:var(--orion-icon-size-sm, 16px)}}";

const OrionListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hasImageSlot = false;
    this.hasHeadingSlot = false;
    this.hasSubHeadingSlot = false;
    this.hasBodySlot = false;
    this.disabled = false;
    this.hasMarker = false;
    this.hasIcon = false;
    this.iconName = '';
    this.hasTrailingIcon = false;
    this.trailingIconName = 'chevron_right';
    this.href = '';
  }
  componentWillLoad() {
    this.hasImageSlot = !!this.el.querySelector('[slot="orion-list-item-image"]');
    this.hasHeadingSlot = !!this.el.querySelector('[slot="orion-list-item-heading"]');
    this.hasSubHeadingSlot = !!this.el.querySelector('[slot="orion-list-item-subheading"]');
    this.hasBodySlot = !!this.el.querySelector('[slot="orion-list-item-body"]');
    if (this.href !== '') {
      this.hasTrailingIcon = true;
    }
    if (this.disabled) {
      this.href = '';
    }
  }
  render() {
    // create fragment to hold the list item content
    const component = (index.h(index.Fragment, null, this.hasMarker ? (index.h("span", { class: "orion-list-item__marker-container" }, index.h("span", { class: "orion-list-item__marker" }))) : null, this.hasIcon && this.iconName !== '' ? (index.h("span", { class: "orion-list-item__icon" }, index.h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasImageSlot ? (index.h("span", { class: "orion-list-item__image" }, index.h("slot", { name: "orion-list-item-image" }))) : null, index.h("span", { class: "orion-list-item__content" }, this.hasHeadingSlot ? (index.h("span", { class: "orion-list-item__heading" }, index.h("slot", { name: "orion-list-item-heading" }))) : null, this.hasSubHeadingSlot ? (index.h("span", { class: "orion-list-item__subheading" }, index.h("slot", { name: "orion-list-item-subheading" }))) : null, this.hasBodySlot ? (index.h("span", null, index.h("slot", { name: "orion-list-item-body" }))) : null, index.h("slot", null)), this.hasTrailingIcon && this.trailingIconName !== '' ? (index.h("span", { class: "orion-list-item__trailing-icon" }, index.h("i", { class: `orion-icon orion-icon-${this.trailingIconName}` }))) : null));
    // if href prop is set, wrap the list item content in an anchor tag, if not, just return the list item content
    return (index.h("li", { class: `orion-list-item ${this.disabled ? 'orion-list-item--disabled' : ''}` }, this.href ? (index.h("a", { href: this.href, class: "orion-list-item__link" }, component)) : (component)));
  }
  get el() { return index.getElement(this); }
};
OrionListItem.style = orionListItemCss;

const orionMessageCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block}:host(:not([is-open])){display:none}.orion-message{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);width:100%;border:var(--orion-border-standard, 1px solid);border-left:var(--orion-border-thicker, 4px solid);border-radius:var(--orion-border-radius, 4px);box-sizing:border-box;padding:var(--orion-space-xl, 16px)}.orion-message--high{border-color:var(--orion-red, #d50032)}.orion-message--medium{border-color:var(--orion-orange, #f46335)}.orion-message--low{border-color:var(--orion-yellow, #edb72b)}.orion-message--success{border-color:var(--orion-green, #208500)}.orion-message--info{border-color:var(--orion-rhapsody-blue, #002244)}.orion-message__header{margin-top:-4px;margin-bottom:var(--orion-space-xs, 4px);padding-right:28px}.orion-message__priority-icon{position:relative;display:inline-block;top:-1px;margin-right:var(--orion-space-md, 8px)}.orion-message__heading{position:relative;display:inline;top:-4px;margin:0;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px);font-weight:var(--orion-font-weight-semi-bold, 600)}.orion-message__heading+::slotted(*){display:block;margin:0}.orion-message.small{padding:14px var(--orion-space-xl, 16px)}.orion-message.small .orion-message__priority-icon{top:2px;margin-right:3px}.orion-message.is-open{display:inline-block}.orion-message--success-overlay{display:flex;visibility:hidden;opacity:0;background-color:var(--orion-green, #208500);color:var(--orion-white, #fff);position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-radius:0;z-index:var(--orion-z-extreme, 9999);border:none;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:var(--orion-space-md, 8px);transition:var(--orion-transition, 200ms ease-in-out);padding:var(--orion-space-xxl, 18px)}.orion-message--success-overlay.is-open{display:flex;visibility:visible;opacity:1;transition:var(--orion-transition, 200ms ease-in-out)}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark{width:120px;height:120px;border-radius:50%;display:block;stroke-width:5;stroke:var(--orion-green, #208500);stroke-miterlimit:10;margin:10% auto;box-shadow:inset 0px 0px 0px var(--orion-green, #208500);animation:fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:var(--orion-white, #fff);fill:none;animation:stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark__check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards}@keyframes stroke{100%{stroke-dashoffset:0}}@keyframes scale{0%,100%{transform:none}50%{transform:scale3d(1.1, 1.1, 1)}}@keyframes fill{100%{box-shadow:inset 0px 0px 0px 60px var(--orion-white, #fff)}}.orion-message--success-overlay .orion-message__priority-icon{margin:0}.orion-message--success-overlay .orion-message__heading{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:48px;line-height:64px;margin-bottom:var(--orion-space-xs, 4px)}.orion-message--success-overlay ::slotted(*){font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title1, 32px) !important;line-height:var(--orion-line-height-xl, 40px) !important;text-align:center}.orion-message--success-overlay .orion-message__footer{position:absolute;bottom:0;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title5, 16px);line-height:var(--orion-line-height-md, 24px);margin-bottom:var(--orion-line-height-normal, 24px)}.orion-message .white{color:var(--orion-white, #fff)}.orion-message .black{color:var(--orion-black, #000)}.orion-message .red{color:var(--orion-alert-red, #d50032)}.orion-message .orange{color:var(--orion-alert-orange, #f46335)}.orion-message .yellow{color:var(--orion-alert-yellow, #edb72b)}.orion-message .green{color:var(--orion-alert-green, #208500)}.orion-message .rhapsody-blue{color:var(--orion-rhapsody-blue, #002244)}::slotted(*){display:inline}:host([dismissible]) .orion-message{position:relative;border-radius:var(--orion-border-radius-md, 8px);border:none;box-shadow:4px 4px 8px 0 rgba(0, 0, 0, 0.5);min-height:52px;background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--high{background-color:var(--orion-red, #d50032);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--medium{background-color:var(--orion-orange, #f46335);color:var(--orion-black, #000)}:host([dismissible]) .orion-message--low{background-color:var(--orion-yellow, #edb72b);color:var(--orion-black, #000)}:host([dismissible]) .orion-message--success{background-color:var(--orion-green, #208500);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--info{background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message__close-btn{float:right;padding:3px;margin-top:-1px;margin-right:-2px;margin-left:5px;background-color:transparent;border:none;cursor:pointer;font-size:20px;}:host([dismissible]) .orion-message__close-btn:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}:host([dismissible]) .orion-message__close-btn:focus:not(:focus-visible){outline:none}:host([dismissible]) .orion-message__close-btn:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}";

const OrionMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hasSlot = false;
    this.isMobile = false;
    this.originalVariant = '';
    this.variant = 'info';
    this.overlayTime = 3000;
    this.heading = '';
    this.dismissible = false;
    this.hasIcon = false;
    this.isOpen = false;
  }
  componentWillRender() {
    this.isMobile = window.innerWidth <= 768;
    // The below logic is a fallback for the success-overlay variant on desktop.
    // If success-overlay is chosen, the desktop breakpoint should show the temporary toast message
    if (this.variant === 'success-overlay' && !this.isMobile) {
      this.originalVariant = 'success-overlay';
      this.variant = 'success';
      this.dismissible = true;
    }
    if (this.variant === 'success' && this.originalVariant === 'success-overlay' && this.isMobile) {
      this.variant = 'success-overlay';
      this.dismissible = false;
    }
  }
  componentDidUpdate() {
    if (this.variant === 'success-overlay') {
      if (this.isOpen) {
        // get width of scrollbar
        const paddingRight = window.innerWidth - document.body.clientWidth;
        // add padding right to body so the content doesn't shift when scrollbar disapears
        document.body.style.paddingRight = `${paddingRight}px`;
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
        // close overlay after given time
        setTimeout(() => {
          this.isOpen = false;
        }, this.overlayTime); // time in milliseconds
      }
      else {
        // reset padding
        document.body.style.paddingRight = '0';
        // Allow body to scroll when modal is closed
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
    }
  }
  _handleClose() {
    this.isOpen = false;
  }
  _handleOverlayClick() {
    if (this.variant === 'success-overlay') {
      this._handleClose();
    }
  }
  render() {
    const variantClass = this.variant ? `orion-message--${this.variant}` : '';
    const iconConfigMap = {
      'high': {
        name: 'alert',
        color: 'red',
        dismissibleColor: 'white',
      },
      'medium': {
        name: 'alert',
        color: 'orange',
        dismissibleColor: 'black',
      },
      'low': {
        name: 'alert',
        color: 'yellow',
        dismissibleColor: 'black',
      },
      'success': {
        name: 'success',
        color: 'green',
        dismissibleColor: 'white',
      },
      'success-overlay': {
        name: 'success',
        color: 'white',
        dismissibleColor: 'white',
      },
      'info': {
        name: 'info',
        color: 'rhapsody-blue',
        dismissibleColor: 'white',
      },
    };
    const iconConfig = iconConfigMap[this.variant] || iconConfigMap.info;
    const iconName = iconConfig.name;
    const iconColor = this.dismissible ? iconConfig.dismissibleColor : iconConfig.color;
    const iconSize = this.heading ? 24 : 20;
    // check if there's content in the slot
    this.hasSlot = !!this.el.querySelector('[slot]');
    let inlineCSS = {};
    let inlineCSSFontSize = {};
    inlineCSSFontSize = {
      fontSize: `${iconSize}px`,
    };
    // if no heading and no content in slot, make icon bigger
    if (!this.heading && !this.hasSlot) {
      inlineCSS = {
        transform: `scale(1.3333)`,
      };
    }
    const component = (
    // TODO: address the eslint accessbility error below
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    index.h("div", { class: `orion-message ${variantClass}  ${!this.heading ? 'small' : ''} ${this.isOpen ? 'is-open' : ''}`, role: "message", "aria-hidden": this.isOpen ? 'false' : 'true', onClick: this._handleOverlayClick.bind(this) }, this.hasIcon && this.variant !== 'success-overlay' ? index.h("i", { style: inlineCSSFontSize, class: `orion-message__priority-icon orion-icon-${iconName} ${iconColor}` }) : '', this.variant === 'success-overlay' ? (index.h("div", { class: "orion-message__success-animation", style: inlineCSS, "aria-hidden": "true" }, index.h("svg", { class: "checkmark", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 52 52" }, index.h("circle", { class: "checkmark__circle", cx: "26", cy: "26", r: "25", fill: "none" }), index.h("path", { class: "checkmark__check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" })))) : (''), this.dismissible ? (index.h("button", { type: "button", class: "orion-message__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, index.h("i", { class: `orion-icon orion-icon-close ${iconColor}` }))) : (''), this.heading ? index.h("h2", { class: "orion-message__heading" }, this.heading) : '', index.h("slot", null), this.variant === 'success-overlay' ? index.h("p", { class: "orion-message__footer" }, "Tap to close") : ''));
    return index.h(index.Host, null, component);
  }
  get el() { return index.getElement(this); }
};
OrionMessage.style = orionMessageCss;

const orionModalCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-modal-max-height-mobile:480px;--orion-modal-max-height-desktop:50vh;--orion-modal-height-mobile:auto;--orion-modal-height-desktop:auto}button{border:none;outline:none;margin:0;padding:0}.orion-modal__wrapper{position:fixed;z-index:var(--orion-z-very-high, 5000);top:0;bottom:0;left:0;right:0;width:100%;height:100%;opacity:0;visibility:hidden}.orion-modal__scrim{background-color:rgba(0, 0, 0, 0.2);width:100%;height:100%;position:absolute;opacity:0}.orion-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, 100%);display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;border:none;border-radius:var(--orion-border-radius, 4px);box-sizing:border-box;box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-gray-40, #999), 4px 4px 8px rgba(0, 0, 0, 0.5);background-color:var(--orion-color-background, #fff);padding:var(--orion-space-xl, 16px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);width:368px;min-height:140px;height:var(--orion-modal-height-mobile);max-height:var(--orion-modal-max-height-mobile);opacity:0}.orion-modal__header{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);width:100%;position:relative}.orion-modal__icon{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-line-height-lg, 32px);width:var(--orion-line-height-lg, 32px);height:var(--orion-line-height-lg, 32px)}.orion-modal__title{align-self:flex-start;text-align:left;flex-wrap:wrap;flex-grow:1;font-size:var(--orion-font-size-title3, 24px);font-weight:var(--orion-font-weight-semi-bold, 600);letter-spacing:0;line-height:var(--orion-line-height-lg, 32px);padding:0;margin:0 var(--orion-space-xxxl, 32px) var(--orion-space-xl, 16px) 0}.orion-modal__title--centered{text-align:center;margin-left:var(--orion-space-xxxl, 32px)}.orion-modal__title--centered-with-icon{text-align:center;margin-left:0}.orion-modal__body{display:flex;flex-direction:column;justify-content:flex-start;flex-grow:1;width:100%;font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0 0 var(--orion-space-xl, 16px) 0;padding-right:2px;overflow-x:hidden;overflow-y:auto;min-height:64px}.orion-modal__body--no-title-with-cancel{margin-top:40px}.orion-modal__footer{display:flex;flex-direction:column;justify-content:flex-start;width:100%;gap:var(--orion-space-xl, 16px)}.orion-modal__footer-content{display:flex;justify-content:space-between;align-items:center;gap:var(--orion-space-xl, 16px);gap:20px;width:100%;border-top:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);padding-top:var(--orion-space-xl, 16px)}.orion-modal__footer-button-row{display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:center;gap:var(--orion-space-xl, 16px);width:100%}.orion-modal__footer-button-row>*{flex:1}.orion-modal__footer-buttons{display:flex;justify-content:flex-end;gap:var(--orion-space-xl, 16px);width:100%}.orion-modal__footer-buttons>*{flex:1}.orion-modal__footer-left{justify-content:flex-start;flex-grow:1;flex-basis:0}.orion-modal__footer-center{justify-content:center}.orion-modal__footer-right{justify-content:flex-end;flex-grow:1;flex-basis:0}.orion-modal__close-icon{position:absolute;top:0;right:0;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;width:24px;height:24px;border:none;background-color:transparent;}.orion-modal__close-icon svg{fill:var(--orion-gray-60, #666)}.orion-modal__close-icon:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px)}.orion-modal__close-icon:focus:not(:focus-visible){box-shadow:none}.orion-modal__close-icon:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px)}.is-open{opacity:1;visibility:visible}.orion-modal__wrapper.is-open .orion-modal__scrim{transition:var(--orion-transition--slow, 400ms ease-in-out);opacity:1}.orion-modal__wrapper.is-open .orion-modal{transition:var(--orion-transition--slow, 400ms ease-in-out);opacity:1;transform:translate(-50%, -50%)}.orion-modal--fullscreen,.orion-modal--fullscreen-mobile{width:100vw;max-width:100%;height:100vh;max-height:100%}::slotted([slot=orion-modal-footer-left]){display:flex;flex-direction:row;justify-content:flex-start}::slotted([slot=orion-modal-footer-center]){display:flex;flex-direction:row;justify-content:center}::slotted([slot=orion-modal-footer-right]){display:flex;flex-direction:row;justify-content:flex-end}@media screen and (min-width: 769px){.orion-modal{min-width:368px;width:auto;max-width:50vw;min-height:216px;height:var(--orion-modal-height-desktop);max-height:var(--orion-modal-max-height-desktop)}.orion-modal__icon{font-size:var(--orion-line-height-normal, 24px);width:var(--orion-line-height-normal, 24px);height:var(--orion-line-height-normal, 24px)}.orion-modal__title{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-normal, 24px)}.orion-modal__body{font-size:var(--orion-modal__body-font-size, 16px);margin-bottom:var(--orion-space-xxxl, 32px)}.orion-modal__body--no-title-with-cancel{margin-top:36px}.orion-modal__footer-button-row{display:flex;flex-direction:row}.orion-modal__footer-buttons>*{flex:0;min-width:146px}.orion-modal__close-icon{width:20px;height:20px}.orion-modal--fullscreen{width:80vw;max-width:80%;height:80vh;max-height:80%}}";

const OrionModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.orionModalFooterBtnClicked = index.createEvent(this, "orionModalFooterBtnClicked", 7);
    this.uid = '';
    this.hasTitleSlot = false;
    this.hasBodySlot = false;
    this.hasFooterSlot = false;
    this.hasSecondaryButton = false;
    this.hasPrimaryButton = false;
    this.hasButtonRowSlot = false;
    this.originalPaddingRight = 0;
    this.originalOverflow = 'auto';
    this.originalHeight = 'auto';
    this.isOpen = false;
    this.hasCancelIcon = false;
    this.hasIcon = false;
    this.iconName = '';
    this.isFullscreen = false;
    this.isFullscreenMobile = false;
    this.isTitleCentered = false;
    this.secondaryButtonDisabled = false;
    this.primaryButtonDisabled = false;
  }
  componentWillLoad() {
    this.uid = generateUUID();
    const titleSlot = this.el.querySelector('[slot="orion-modal-title"]');
    const bodySlot = this.el.querySelector('[slot="orion-modal-body"]');
    const footerLeftSlot = this.el.querySelector('[slot="orion-modal-footer-left"]');
    const footerCenterSlot = this.el.querySelector('[slot="orion-modal-footer-center"]');
    const footerRightSlot = this.el.querySelector('[slot="orion-modal-footer-right"]');
    const secondaryButtonSlot = this.el.querySelector('[slot="orion-modal-secondary-button"]');
    const primaryButtonSlot = this.el.querySelector('[slot="orion-modal-primary-button"]');
    const buttonRowSlot = this.el.querySelector('[slot="orion-modal-button-row"]');
    // check if slot exists check if it has content
    this.hasTitleSlot = Boolean(titleSlot === null || titleSlot === void 0 ? void 0 : titleSlot.textContent);
    this.hasBodySlot = Boolean(bodySlot === null || bodySlot === void 0 ? void 0 : bodySlot.textContent);
    this.hasFooterSlot = Boolean(footerLeftSlot === null || footerLeftSlot === void 0 ? void 0 : footerLeftSlot.textContent) || Boolean(footerCenterSlot === null || footerCenterSlot === void 0 ? void 0 : footerCenterSlot.textContent) || Boolean(footerRightSlot === null || footerRightSlot === void 0 ? void 0 : footerRightSlot.textContent);
    this.hasSecondaryButton = Boolean(secondaryButtonSlot === null || secondaryButtonSlot === void 0 ? void 0 : secondaryButtonSlot.textContent);
    this.hasPrimaryButton = Boolean(primaryButtonSlot === null || primaryButtonSlot === void 0 ? void 0 : primaryButtonSlot.textContent);
    this.hasButtonRowSlot = Boolean(buttonRowSlot === null || buttonRowSlot === void 0 ? void 0 : buttonRowSlot.textContent);
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
  }
  componentDidUpdate() {
    if (this.isOpen) {
      // get width of scrollbar
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      // add padding right to body so the content doesn't shift when scrollbar disapears
      document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!this.isOpen) {
      // reset padding
      document.body.style.paddingRight = `${this.originalPaddingRight}px`;
      // Allow body to scroll when modal is closed
      document.body.style.overflow = this.originalOverflow;
      document.body.style.height = this.originalHeight;
    }
  }
  handleKeydown(event) {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }
  _handleClose() {
    this.isOpen = false;
  }
  onFooterBtnClick(variant) {
    this.orionModalFooterBtnClicked.emit({ variant });
  }
  getHeaderCSSClass() {
    return classnames('orion-modal__title', // this class is always applied
    {
      'orion-modal__title--centered-with-icon': this.hasIcon && this.isTitleCentered,
      'orion-modal__title--centered': this.isTitleCentered, // this class is applied if the isTitleCentered prop is true
    });
  }
  getBodyCSSClass() {
    return classnames('orion-modal__body', // this class is always applied
    {
      'orion-modal__body--no-title-with-cancel': !this.hasTitleSlot && this.hasCancelIcon, // this class is applied if the hasTitleSlot prop is false and the hasCancelIcon prop is true
    });
  }
  render() {
    return (index.h("div", { id: this.uid, class: `orion-modal__wrapper 
          ${this.isOpen ? 'is-open' : ''}` }, index.h("div", { class: "orion-modal__scrim" }), index.h("div", { class: `orion-modal ${this.isFullscreen ? 'orion-modal--fullscreen' : ''} ${this.isFullscreenMobile ? 'orion-modal--fullscreen-mobile' : ''}  ` }, index.h("div", { class: "orion-modal__header" }, this.hasIcon && this.iconName !== '' ? (index.h("span", { class: "orion-modal__icon" }, index.h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasTitleSlot ? (index.h("span", { class: this.getHeaderCSSClass() }, index.h("slot", { name: "orion-modal-title" }))) : (''), this.hasCancelIcon ? (index.h("button", { type: "button", "aria-label": "Close", class: "orion-modal__close-icon", onClick: this._handleClose.bind(this) }, index.h("svg", { viewBox: "0 0 24 24" }, index.h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" })))) : ('')), this.hasBodySlot ? (index.h("div", { class: this.getBodyCSSClass() }, index.h("slot", { name: "orion-modal-body" }))) : (''), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (index.h("div", { class: "orion-modal__footer" }, this.hasFooterSlot ? (index.h("div", { class: "orion-modal__footer-content" }, index.h("span", { class: "orion-modal__footer-left" }, index.h("slot", { name: "orion-modal-footer-left" })), index.h("span", { class: "orion-modal__footer-center" }, index.h("slot", { name: "orion-modal-footer-center" })), index.h("span", { class: "orion-modal__footer-right" }, index.h("slot", { name: "orion-modal-footer-right" })))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (index.h("div", { class: "orion-modal__footer-button-row" }, this.hasButtonRowSlot ? (index.h("span", null, index.h("slot", { name: "orion-modal-button-row" }))) : (''), index.h("div", { class: "orion-modal__footer-buttons" }, this.hasSecondaryButton ? (index.h("orion-button", { class: "orion-modal__btn-secondary", variant: "secondary", disabled: this.secondaryButtonDisabled, onClick: () => this.onFooterBtnClick('secondary') }, index.h("slot", { name: "orion-modal-secondary-button" }))) : (''), this.hasPrimaryButton ? (index.h("orion-button", { class: "orion-modal__btn-primary", variant: "primary", disabled: this.primaryButtonDisabled, onClick: () => this.onFooterBtnClick('primary') }, index.h("slot", { name: "orion-modal-primary-button" }))) : ('')))) : (''))) : (''))));
  }
  get el() { return index.getElement(this); }
};
OrionModal.style = orionModalCss;

const orionNoteCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-note{width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text--disabled, #666);font-size:var(--orion-font-size-small, 13px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-sm, 16px);margin:0;padding:var(--orion-space-md, 8px) 0 0 0}";

const OrionNote = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "orion-note" }, index.h("slot", null)));
  }
};
OrionNote.style = orionNoteCss;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const orionPopoverCss = "orion-popover{}orion-popover *,orion-popover *::before,orion-popover *::after{box-sizing:border-box}orion-popover html,orion-popover body,orion-popover p,orion-popover ol,orion-popover ul,orion-popover li,orion-popover dl,orion-popover dt,orion-popover dd,orion-popover blockquote,orion-popover figure,orion-popover fieldset,orion-popover legend,orion-popover textarea,orion-popover pre,orion-popover iframe,orion-popover hr,orion-popover h1,orion-popover h2,orion-popover h3,orion-popover h4,orion-popover h5,orion-popover h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}orion-popover h1,orion-popover h2,orion-popover h3,orion-popover h4,orion-popover h5,orion-popover h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}orion-popover ul{list-style:none}orion-popover button,orion-popover input,orion-popover select,orion-popover textarea{margin:0}orion-popover img,orion-popover embed,orion-popover iframe,orion-popover object,orion-popover audio,orion-popover video{max-width:100%;height:auto}orion-popover iframe{border:0}orion-popover table{border-spacing:0;border-collapse:collapse}orion-popover td,orion-popover th{padding:0;text-align:left}orion-popover html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}orion-popover body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}orion-popover *::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-popover *::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-popover a,orion-popover a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-popover a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-popover a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-popover a:focus:not(:focus-visible){outline:none}orion-popover a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-popover a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}orion-popover a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}orion-popover a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}orion-popover a,orion-popover button{cursor:pointer}orion-popover h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}orion-popover h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}orion-popover h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}orion-popover h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}orion-popover h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-popover label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover p,orion-popover li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-popover sup,orion-popover sub{vertical-align:baseline;position:relative;top:-0.4em}orion-popover sub{top:0.4em}orion-popover strong,orion-popover b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){orion-popover body{font-size:var(--orion-font-size-body, 16px)}orion-popover h5{font-size:var(--orion-font-size-title5, 16px)}orion-popover label{font-size:var(--orion-font-size-label, 16px)}orion-popover p,orion-popover li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){orion-popover a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}.orion-popover__trigger:focus,.orion-popover__close-icon:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-popover__trigger:focus:not(:focus-visible),.orion-popover__close-icon:focus{outline:none}.orion-popover__trigger:focus-visible,.orion-popover__close-icon:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-popover__content{display:none;background-color:var(--orion-white, #fff);color:var(--orion-gray-80, #333);border-radius:var(--orion-border-radius, 4px);max-width:640px;min-width:100px;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);border:var(--orion-border-standard, 1px solid) var(--orion-gray-20, #ccc);box-shadow:0 6px 12px 0 rgba(0, 0, 0, 0.25);z-index:var(--orion-z-mid, 100)}.orion-popover__content[data-show]{display:block}.orion-popover__content[data-popper-placement^=left]{margin-right:6px !important}.orion-popover__content[data-popper-placement^=right]{margin-left:6px !important}.arrow,.arrow::before,.arrow::after{position:absolute;width:8px;height:12px;background:inherit}.arrow{visibility:hidden;background:transparent}.arrow::before,.arrow::after{visibility:visible;content:\"\";position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.orion-popover__content[data-popper-placement^=top]>.arrow{bottom:-13px}.orion-popover__content[data-popper-placement^=top]>.arrow:before{top:0px;left:-1px;border-top-color:var(--orion-gray-20, #ccc);border-width:8px 6px 0 6px}.orion-popover__content[data-popper-placement^=top]>.arrow:after{top:-1px;left:-1px;border-top-color:var(--orion-white, #fff);border-width:8px 6px 0 6px}.orion-popover__content[data-popper-placement^=bottom]>.arrow{top:-12px}.orion-popover__content[data-popper-placement^=bottom]>.arrow:before{bottom:1px;left:-2px;border-bottom-color:var(--orion-gray-20, #ccc);border-width:0 6px 8px 6px}.orion-popover__content[data-popper-placement^=bottom]>.arrow:after{bottom:0;left:-2px;border-bottom-color:var(--orion-white, #fff);border-width:0 6px 8px 6px}.orion-popover__content[data-popper-placement^=left]>.arrow{right:-8px}.orion-popover__content[data-popper-placement^=left]>.arrow:before{right:-1px;border-left-color:var(--orion-gray-20, #ccc);border-width:6px 0 6px 8px;width:9px}.orion-popover__content[data-popper-placement^=left]>.arrow:after{right:1px;border-left-color:var(--orion-white, #fff);border-width:6px 0 6px 8px}.orion-popover__content[data-popper-placement^=right]>.arrow{left:-9px}.orion-popover__content[data-popper-placement^=right]>.arrow:before{left:0px;border-right-color:var(--orion-gray-20, #ccc);border-width:6px 8px 6px 0}.orion-popover__content[data-popper-placement^=right]>.arrow:after{left:1px;border-right-color:var(--orion-white, #fff);border-width:6px 8px 6px 0}.orion-popover__wrapper,.orion-popover__trigger{display:inline-block;position:relative}.orion-popover__trigger{cursor:pointer}.orion-popover__title{display:flex;justify-content:space-between;align-items:flex-start;padding:12px 16px;border-bottom:var(--orion-border-standard, 1px solid) var(--orion-gray-20, #ccc);font-size:var(--orion-font-size-title5-desktop, 16px);font-weight:var(----orion-font-weight-semi-bold, 600)}.orion-popover__close-icon{cursor:pointer;margin-left:16px;margin-top:2px;margin-right:-2px;background-color:transparent;border:none;padding:15px 15px 14px;margin:-11px -16px -12px 0px}.orion-popover__close-icon svg{height:16px;width:16px}.orion-popover__close-icon svg{fill:var(--orion-modal__close-icon-color-text, #666)}.orion-popover__body{padding:8px 12px}.orion-popover__title+.orion-popover__body{padding:16px}@media screen and (max-width: 769px){.orion-popover__content{max-width:320px}}";

const OrionPopover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uid = '';
    this.isOpen = false;
    this.popperPadding = 24; // pixel distance from the edge of browser where popper would change position
    this.hasTitleSlot = false;
    this.hasBodySlot = false;
    // used for resize event in _handleWidth()
    this.originalWidth = this.popperWidth;
    this.mouseDownFlag = false;
    this.popperWidth = 300;
    this.placement = 'bottom';
  }
  handleResize() {
    this._handleWidth();
  }
  closeWhenFocused(e) {
    const target = e.target;
    if (!this.el.contains(target) && this.popover.hasAttribute('data-show')) {
      this._handleClose();
    }
  }
  componentWillLoad() {
    this.uid = generateUUID();
    this._handleWidth();
    this.hasTitleSlot = !!this.el.querySelector('[slot="orion-popover-title"]');
    this.hasBodySlot = !!this.el.querySelector('[slot="orion-popover-body"]');
  }
  componentDidLoad() {
    // This component uses popperJS
    // Please refer to the documentation on https://popper.js.org/
    // for any updates to the below options
    // handle position if it is outside the viewport
    this.popperInstance = createPopper(this.trigger, this.popover, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 5],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: this.popperPadding,
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['right', 'left', 'bottom', 'top'],
            padding: this.popperPadding,
          },
        },
        {
          name: 'arrow',
          options: {
            padding: 4, // at least 4px from the edges of the popper
          },
        },
      ],
    });
  }
  _hidePopover() {
    if (this.popover != null && !this.mouseDownFlag) {
      if (this.popover.hasAttribute('data-show')) {
        this.popover.removeAttribute('data-show');
        this.popover.setAttribute('aria-hidden', 'true');
        this.trigger.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
        this.mouseDownFlag = false;
      }
    }
  }
  _showPopover() {
    if (!this.isOpen) {
      this.popover.setAttribute('data-show', '');
      this.popover.setAttribute('aria-hidden', 'false');
      this.trigger.setAttribute('aria-expanded', 'true');
      this.isOpen = true;
      // We need to tell Popper to update the popover position
      // after we show the popover, otherwise it will be incorrect
      this.popperInstance.update();
    }
  }
  _handleWidth() {
    const screenWidth = document.body.clientWidth - this.popperPadding * 2;
    // handle width if tooltip is wider than viewport
    if (this.originalWidth >= screenWidth) {
      this.popperWidth = screenWidth;
    }
  }
  _setClickFlag() {
    // used as conditional in _hidePopover() so popper won't close if user clicks in it
    this.mouseDownFlag = true;
  }
  _handleClose() {
    this.mouseDownFlag = false;
    this._hidePopover();
  }
  _onKeyDown(event) {
    if (event.key === 'Escape') {
      this.mouseDownFlag = false;
      this._hidePopover();
    }
  }
  _triggerClick(e) {
    if (this.isOpen) {
      this.mouseDownFlag = false;
      this._hidePopover();
    }
    else {
      // force the trigger to focus so the Escape keyDown event works on the element
      this.trigger.focus();
      this._showPopover();
    }
    // prevent popover from showing again on focus
    e.preventDefault();
  }
  // this function is called when ANY focuasable element inside the popper is about to lose focus
  _onFocusOut() {
    // if the component does not have a focused element inside it, then hide popper
    if (!this.wrapper.matches(':focus-within')) {
      // remove focus from trigger if user clicks outside of the browser/console log etc.
      this.trigger.blur();
      this._hidePopover();
    }
  }
  render() {
    const inlineCSS = {
      width: `${this.popperWidth}px`,
    };
    return (
    // TODO: address the eslint accessbility error below
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    index.h("div", { class: "orion-popover__wrapper", ref: el => {
        this.wrapper = el;
      }, onFocusout: this._onFocusOut.bind(this), onKeyDown: this._onKeyDown.bind(this) }, index.h("div", { ref: el => {
        this.trigger = el;
      }, class: "orion-popover__trigger", "aria-describedby": this.uid, "aria-expanded": "false", role: "button", tabIndex: 0, onMouseDown: this._triggerClick.bind(this), onFocus: this._showPopover.bind(this) }, index.h("slot", null)), index.h("div", { class: "orion-popover__content", ref: el => {
        this.popover = el;
      }, "aria-hidden": "true", role: "region", style: inlineCSS, onMouseDown: this._setClickFlag.bind(this) }, index.h("div", { class: "arrow", "data-popper-arrow": true }), this.hasTitleSlot ? (index.h("div", { class: "orion-popover__title" }, index.h("slot", { name: "orion-popover-title" }), index.h("button", { type: "button", class: "orion-popover__close-icon", "aria-label": "Close", onClick: this._handleClose.bind(this) }, index.h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, index.h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" }))))) : (''), index.h("div", { id: this.uid, class: "orion-popover__body" }, index.h("slot", { name: "orion-popover-body" })))));
  }
  get el() { return index.getElement(this); }
};
OrionPopover.style = orionPopoverCss;

const orionProgressMeterCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-progress-meter__color-progress:var(--orion-info, #002244);--orion-progress-meter__color-circle-label:var(--orion-color-background, #fff);--orion-progress-meter__color-progess-background:var(--orion-gray-10, #e6e6e6);--orion-progress-meter__color-success:var(--orion-green, #208500);--orion-progress-meter__color-warn:var(--orion-yellow, #edb72b);--orion-progress-meter__color-error:var(--orion-red, #d50032);display:block}*::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-progress-meter{display:flex;align-items:center;justify-content:center;width:100%;height:var(--orion-space-md, 8px);border-radius:var(--orion-space-xl, 16px);position:relative}.orion-progress-meter--circle{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%}.orion-progress-meter--circle.orion-progress-meter--small{width:56px;height:56px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter--circle__overlay{width:40px;height:40px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter__segment--circle{width:56px}.orion-progress-meter--circle.orion-progress-meter--medium{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter--circle__overlay{width:64px;height:64px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter__segment--circle{width:88px}.orion-progress-meter--circle.orion-progress-meter--large{width:120px;height:120px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay .orion-progress-meter--circle__value{font-size:16px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter__segment--circle{width:120px}.orion-progress-meter--circle__overlay{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;z-index:var(--orion-z-base, 1)}.orion-progress-meter--circle__value{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:13px;font-weight:var(--orion-font-weight-bold, 700);letter-spacing:0;z-index:var(--orion-z-base, 1)}.orion-progress-meter__segment{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:var(--orion-space-md, 8px)}.orion-progress-meter__segment:first-child{border-top-left-radius:var(--orion-space-xl, 16px);border-bottom-left-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment:last-child{border-top-right-radius:var(--orion-space-xl, 16px);border-bottom-right-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment--circle{position:absolute;width:48px;height:2px}";

const OrionProgressMeter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.oddSegments = this.segments % 2 === 1;
    this.value = 0;
    this.max = 100;
    this.target = 0;
    this.percentOfTarget = 0.8;
    this.isCircle = false;
    this.showValue = false;
    this.size = 'small';
    this.segments = 1;
  }
  getCSSStyle() {
    let colorVar = '--orion-progress-meter__color-progress';
    if (this.target !== 0) {
      if (this.value >= this.target) {
        colorVar = '--orion-progress-meter__color-success';
      }
      else if (this.value >= this.target * this.percentOfTarget) {
        colorVar = '--orion-progress-meter__color-warn';
      }
      else {
        colorVar = '--orion-progress-meter__color-error';
      }
    }
    const percent = (this.value / this.max) * 100;
    const remainder = 100 - percent;
    if (this.isCircle) {
      return { background: `conic-gradient(var(${colorVar}) ${percent}%, 0, var(--orion-progress-meter__color-progess-background) ${remainder}%)` };
    }
    return { background: `linear-gradient(to right, var(${colorVar}) ${percent}%, 0, var(--orion-progress-meter__color-progess-background) ${remainder}%)` };
  }
  getSegmentCSSStyle() {
    return {
      outline: `1px solid var(--orion-progress-meter__color-circle-label)`,
    };
  }
  getCircleSegmentCSSStyle() {
    if (this.oddSegments) {
      return {
        background: `linear-gradient(
        to right,
        transparent 0%,
        transparent 50%,
        var(--orion-progress-meter__color-circle-label) 50%,
        var(--orion-progress-meter__color-circle-label) 100%
        )`,
      };
    }
    return { backgroundColor: `var(--orion-progress-meter__color-circle-label)` };
  }
  render() {
    const component = (index.h("div", null, this.isCircle ? (index.h("div", { class: `orion-progress-meter--circle ${this.size ? `orion-progress-meter--${this.size}` : ''}`, style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => (index.h("div", { class: "orion-progress-meter__segment--circle", style: Object.assign({ transform: `rotate(${(i * 360) / this.segments - 90}deg` }, this.getCircleSegmentCSSStyle()) })))
      : '', index.h("span", { class: "orion-progress-meter--circle__overlay", style: { backgroundColor: `var(--orion-progress-meter__color-circle-label)` } }, this.showValue ? index.h("span", { class: "orion-progress-meter--circle__value" }, this.value) : ''))) : (index.h("div", { class: "orion-progress-meter", style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => index.h("div", { class: "orion-progress-meter__segment", style: Object.assign({ right: `${(i * 100) / this.segments}%` }, this.getSegmentCSSStyle()) }))
      : ''))));
    return index.h(index.Host, null, component);
  }
};
OrionProgressMeter.style = orionProgressMeterCss;

const orionRadioButtonCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-radio--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-radio{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-radio__label{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:var(--orion-radio--vertical-align);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px) var(--orion-space-xxl, 18px) 0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-radio__label--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-radio__input{position:relative;display:flex;justify-content:center;align-items:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:50%;background-color:var(--orion-color-background, #fff);margin-right:var(--orion-space-md, 8px)}.orion-radio__label input~.orion-radio__input{transition:var(--orion-transition, 200ms ease-in-out)}.orion-radio__label input:checked~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background, #fff)}.orion-radio__input:after{content:\"\";position:absolute;display:none}.orion-radio__label input:checked~.orion-radio__input:after{display:block}.orion-radio__label .orion-radio__input:after{top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:var(--orion-color-activation, #6244bb)}@supports selector(:focus-visible){:host([focusable]):host-context(orion-radio-button-group:focus-visible) .orion-radio__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thick, 0 0 0 3px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:50%;transition:var(--orion-transition, 200ms ease-in-out)}}@supports not selector(:focus-visible){:host([focusable]):host-context(orion-radio-button-group:focus) .orion-radio__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thick, 0 0 0 3px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:50%;transition:var(--orion-transition, 200ms ease-in-out)}}.orion-radio__label input:disabled~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-gray-10, #e6e6e6)}.orion-radio__label input:checked:disabled~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-gray-10, #e6e6e6)}.orion-radio__label input:checked:disabled~.orion-radio__input:after{background-color:var(--orion-gray-40, #999)}@media screen and (min-width: 769px){.orion-radio__label{font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-md, 8px) var(--orion-space-md, 8px) 0}.orion-radio__input{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);margin-top:2px}.orion-radio__label .orion-radio__input:after{width:12px;height:12px}}";

const OrionRadioButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.radioButtonChanged = index.createEvent(this, "radioButtonChanged", 7);
    this.name = 'radio';
    this.disabled = false;
    this.value = '';
    this.checked = false;
    this.required = false;
    this.focusable = false;
  }
  onRadioChangeValue() {
    this.checked = true;
    this.radioButtonChanged.emit({ value: this.value });
  }
  /**
   * The `orion-radio-button-group` component will toggle the checked prop
   */
  watchChecked(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.inputEl.checked = newValue;
    }
  }
  render() {
    return (index.h("label", { class: `orion-radio__label 
          ${this.disabled ? 'orion-radio__label--disabled' : ''}` }, index.h("span", null, index.h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onRadioChangeValue.bind(this) }), index.h("span", { class: "orion-radio__input" })), index.h("slot", null)));
  }
  static get watchers() { return {
    "checked": ["watchChecked"]
  }; }
};
OrionRadioButton.style = orionRadioButtonCss;

const orionRadioButtonGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none}.orion-radio-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-radio-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionRadioButtonGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.name = 'radiogroup';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.inline = false;
  }
  /**
   * A getter that returns an array of `orion-radio-buttons` that are in the slot
   */
  get radioButtons() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-RADIO-BUTTON');
  }
  /**
   * Listen to the `radioButtonChanged` event emitted by the
   * `orion-radio-button` component and update
   */
  onRadioChanged(event) {
    this.setRadioButtonStateByValue(event.detail.value);
  }
  /**
   * When the component is initially loaded, set the checked
   * radio button according to `value` and update the `name`
   */
  componentDidLoad() {
    this.setRadioButtonStateByValue(this.value);
    this.setRadioButtonName();
    this.makeFirstFocusableIfNoneChecked();
    if (this.disabled) {
      this.setRadioButtonGroupDisabled();
    }
  }
  /**
   * Check to see if any radio buttons are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked() {
    const hasAnyChecked = this.radioButtons.some(radio => radio.checked);
    const hasCheckedDisabled = this.radioButtons.some(radio => radio.checked && radio.disabled);
    if (!hasAnyChecked || hasCheckedDisabled) {
      const firstButton = this.radioButtons[0];
      if (firstButton) {
        firstButton.focusable = true;
      }
    }
  }
  /**
   * Update value and emit update
   */
  updateValue(value) {
    this.value = value;
    this.valueChanged.emit({ value });
  }
  /**
   * Set the name on all the radio buttons
   */
  setRadioButtonName() {
    this.radioButtons.forEach(radio => {
      radio.setAttribute('name', this.name);
    });
  }
  /**
   * Disable all radio buttons in group
   */
  setRadioButtonGroupDisabled() {
    this.radioButtons.forEach(radio => {
      radio.setAttribute('disabled', '');
    });
  }
  /**
   * Set the radio button with the selected value to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByValue(selectedValue) {
    this.radioButtons.forEach(radio => {
      const isSelected = radio.value === selectedValue;
      radio.checked = isSelected;
      if (!radio.disabled) {
        radio.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(radio.value);
      }
    });
  }
  /**
   * Set the radio button at the selected index to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByIndex(selectedIndex) {
    this.radioButtons.forEach((radio, radioIndex) => {
      const isSelected = radioIndex === selectedIndex;
      radio.checked = isSelected;
      if (!radio.disabled) {
        radio.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(radio.value);
      }
    });
  }
  /**
   *
   * Gets the index of the currently checked radio button
   */
  getCheckedIndex() {
    const currentActiveTrigger = this.radioButtons.find(element => element.checked);
    return currentActiveTrigger ? this.radioButtons.indexOf(currentActiveTrigger) : -1;
  }
  /**
   * Move checked to the next radio button
   */
  nextRadio() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex < this.radioButtons.length - 1 ? currentIndex + 1 : 0;
    this.setRadioButtonStateByIndex(nextIndex);
  }
  /**
   * Move checked to the previous radio button
   */
  prevRadio() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex <= 0 ? this.radioButtons.length - 1 : currentIndex - 1;
    this.setRadioButtonStateByIndex(nextIndex);
  }
  /**
   * Handle keyboard navigation, move to previous/next radio button
   */
  handleKeyPress(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.nextRadio();
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.prevRadio();
    }
  }
  render() {
    return (index.h(index.Host, { tabindex: this.disabled ? '-1' : '0' }, index.h("fieldset", { class: `orion-radio-group 
            ${this.inline ? 'orion-radio-group--inline' : ''}` }, index.h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionRadioButtonGroup.style = orionRadioButtonGroupCss;

const orionStepperCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;--orion-stepper-tally-width:var(--orion-touch-size)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type=number],input[type=number]:focus,input[type=number]:hover,input[type=number]:active,input[type=number]:disabled{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input{outline:none}.orion-stepper{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{border:none;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-bottom:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);background-color:var(--orion-color-background, #fff);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 60px);text-align:center;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;transition:var(--orion-transition, 200ms ease-in-out)}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-focus, #d8d9eb)}input::selection{background-color:var(--orion-color-focus, #d8d9eb)}input:disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);border-color:var(--orion-color-text--dimmed, #666);opacity:1;cursor:not-allowed}.orion-stepper--error input{-webkit-appearance:none;appearance:none;-moz-appearance:textfield;border:2px solid var(--orion-color-error, #d50032)}.orion-stepper--error input:focus{border:1px solid var(--orion-color-activation, #6244bb);box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}.orion-stepper--error .orion-stepper__button-left{border-right:none;padding-right:1px}.orion-stepper--error .orion-stepper__button-right{border-left:none;padding-left:1px}.orion-stepper--hide-tally input{display:none}.orion-stepper__button{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-shrink:0;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background, #fff);width:var(--orion-touch-size, 60px);height:var(--orion-touch-size, 60px);margin:0;padding:0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out)}.orion-stepper__button svg{fill:var(--orion-color-activation, #6244bb)}.orion-stepper__button:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:focus:not(:focus-visible){box-shadow:none}.orion-stepper__button:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-hover-light, #eaeaf3)}.orion-stepper__button:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-stepper__button:disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}.orion-stepper__button:disabled svg{fill:var(--orion-color-text--dimmed, #666)}.orion-stepper__button-left{border-top-left-radius:var(--orion-border-radius, 4px);border-bottom-left-radius:var(--orion-border-radius, 4px)}.orion-stepper__button-right{border-top-right-radius:var(--orion-border-radius, 4px);border-bottom-right-radius:var(--orion-border-radius, 4px)}.svg-container__mobile{display:block;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.svg-container__desktop{display:none}@media screen and (min-width: 769px){:host{--orion-stepper-tally-width:calc(var(--orion-touch-size) + 4px)}input{font-size:var(--orion-font-size-body, 16px);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 40px)}.orion-stepper__button{width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px)}.svg-container__mobile{display:none}.svg-container__desktop{display:block;width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px)}}@media (hover: none){.orion-stepper__button:hover:not(:disabled){color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-background, #fff)}.orion-stepper__button:hover:not(:disabled) svg{fill:var(--orion-color-activation, #6244bb)}}";

const OrionStepper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.disabled = false;
    this.error = false;
    this.hideTally = false;
    this.value = 0;
    this.step = 1;
    this.min = 0;
    this.max = 100;
  }
  handleKeyDown(ev) {
    if (ev.key === 'Home') {
      ev.preventDefault();
      this.value = this.min;
    }
    if (ev.key === 'End') {
      ev.preventDefault();
      this.value = this.max;
    }
  }
  onInputChangeValue(event) {
    this.value = parseInt(event.target.value);
    this.valueChanged.emit({ value: this.value });
  }
  subtract() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.valueChanged.emit({ value: this.value });
    }
  }
  add() {
    if (this.value < this.max) {
      this.value += this.step;
      this.valueChanged.emit({ value: this.value });
    }
  }
  isAddDisabled() {
    return this.value >= this.max;
  }
  isSubstractDisabled() {
    return this.value <= this.min;
  }
  isError() {
    return this.value < this.min || this.value > this.max;
  }
  getCSSClass() {
    return classnames({
      'orion-stepper--hide-tally': this.hideTally,
      'orion-stepper--error': (this.error || this.isError()) && !this.disabled, // this class is applied if the error prop is true and the disabled prop is false
    });
  }
  render() {
    return (index.h("div", { class: `orion-stepper ${this.getCSSClass()}` }, index.h("button", { class: "orion-stepper__button orion-stepper__button-left", disabled: this.disabled || this.isSubstractDisabled(), onClick: this.subtract.bind(this), "aria-label": "subtract" }, index.h("div", { class: "svg-container__mobile" }, index.h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, index.h("path", { d: "M1,13 L23,13 C23.5522847,13 24,12.5522847 24,12 C24,11.4477153 23.5522847,11 23,11 L1,11 C0.44771525,11 -6.76353751e-17,11.4477153 0,12 C6.76353751e-17,12.5522847 0.44771525,13 1,13 Z", id: "path-1" }))), index.h("div", { class: "svg-container__desktop" }, index.h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, index.h("path", { d: "M0.5,8.5 L15.5,8.5 C15.7761424,8.5 16,8.27614237 16,8 C16,7.72385763 15.7761424,7.5 15.5,7.5 L0.5,7.5 C0.223857625,7.5 -3.38176876e-17,7.72385763 0,8 C3.38176876e-17,8.27614237 0.223857625,8.5 0.5,8.5 Z", id: "path-1" })))), index.h("input", { onKeyDown: this.handleKeyDown.bind(this), type: "number", inputmode: "numeric", pattern: "[0-9]*", id: "stepper", step: this.step, min: this.min, max: this.max, value: this.value, disabled: this.disabled, onInput: this.onInputChangeValue.bind(this), role: "spinbutton", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value }), index.h("button", { class: "orion-stepper__button orion-stepper__button-right", disabled: this.disabled || this.isAddDisabled(), onClick: this.add.bind(this), "aria-label": "add" }, index.h("div", { class: "svg-container__mobile" }, index.h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, index.h("path", { d: "M13,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 L13,13 L13,23 C13,23.5522847 12.5522847,24 12,24 C11.4477153,24 11,23.5522847 11,23 L11,13 L1,13 C0.44771525,13 -3.01980663e-14,12.5522847 -3.01980663e-14,12 C-3.01980663e-14,11.4477153 0.44771525,11 1,11 L11,11 L11,1 C11,0.44771525 11.4477153,0 12,0 C12.5522847,0 13,0.44771525 13,1 L13,11 Z", id: "path-1" }))), index.h("div", { class: "svg-container__desktop" }, index.h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, index.h("path", { d: "M8.66666667,7.33333333 L15.3333333,7.33333333 C15.7015232,7.33333333 16,7.63181017 16,8 C16,8.36818983 15.7015232,8.66666667 15.3333333,8.66666667 L8.66666667,8.66666667 L8.66666667,15.3333333 C8.66666667,15.7015232 8.36818983,16 8,16 C7.63181017,16 7.33333333,15.7015232 7.33333333,15.3333333 L7.33333333,8.66666667 L0.666666667,8.66666667 C0.298476833,8.66666667 -1.95399252e-14,8.36818983 -1.95399252e-14,8 C-1.95399252e-14,7.63181017 0.298476833,7.33333333 0.666666667,7.33333333 L7.33333333,7.33333333 L7.33333333,0.666666667 C7.33333333,0.298476833 7.63181017,0 8,0 C8.36818983,0 8.66666667,0.298476833 8.66666667,0.666666667 L8.66666667,7.33333333 Z", id: "path-1" }))))));
  }
};
OrionStepper.style = orionStepperCss;

const orionTabCss = ":host{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}";

const OrionTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
OrionTab.style = orionTabCss;

const orionTabPanelCss = ":host{display:block;--orion-tab-panel-active-display:block;--orion-tab-panel-inactive-display:none}.orion-tab-panel--active{display:var(--orion-tab-panel-active-display)}.orion-tab-panel--inactive{display:var(--orion-tab-panel-inactive-display)}";

const OrionTabPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.getPanelClasses = () => {
      return `
      orion-tab-panel
      orion-tab-panel--${this.isActive ? 'active' : 'inactive'}
    `;
    };
    this.panelIndex = -1;
    this.for = '';
    this.isActive = false;
  }
  tabSelected(e) {
    const { target, detail } = e;
    if (target.id === this.for) {
      if (detail) {
        const { tabIndex } = detail;
        this.isActive = tabIndex === this.panelIndex;
      }
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: this.getPanelClasses(), role: "tabpanel", "aria-labelledby": `${this.for}-tab-${this.panelIndex}` }, index.h("slot", null))));
  }
};
OrionTabPanel.style = orionTabPanelCss;

const orionTabsCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-tabs-focus:var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-icon{height:var(--orion-icon-size-sm, 16px);position:relative;top:1px}.orion-tabs__nav-button--left .orion-icon{margin-right:5px}.orion-tabs__nav-button--right .orion-icon{margin-left:1px}.orion-tabs{position:relative;margin:var(--orion-space-xs, 4px) 0}.orion-tabs__nav-button{position:absolute;top:-4px;z-index:var(--orion-z-mid, 15);justify-content:center;align-items:center;height:calc(100% + 8px);color:var(--orion-atlantic-amethyst, #6244bb);border-color:var(--orion-gray-20, #ccc);border-style:solid;border-width:0;background:var(--orion-white, #fff);font-size:var(--orion-font-size-title6, 16px);line-height:var(--orion-line-height-sm, 24px);cursor:pointer;display:none}@media screen and (min-width: 769px){.orion-tabs__nav-button{display:flex}}.orion-tabs__nav-button--left{padding:0 var(--orion-space-xl, 16px) 0 var(--orion-space-xs, 4px);left:0;border-right-width:1px;box-shadow:6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--left::after{left:0}.orion-tabs__nav-button--right{padding:0 var(--orion-space-xs, 4px) 0 var(--orion-space-xl, 16px);right:0;border-left-width:1px;box-shadow:-6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--right::after{right:0}.orion-tabs__nav-button--hidden{opacity:0;transition:opacity var(--orion-transition, 0.1s ease-in);pointer-events:none}.orion-tabs__nav-button--visible{opacity:1;transition:opacity var(--orion-transition, 0.1s ease-out);pointer-events:auto}.orion-tabs__nav-button::after{content:\"\";display:block;position:absolute;bottom:var(--orion-space-xs, 4px);width:calc(100% - 7px);height:1px;background-color:var(--orion-atlantic-amethyst, #6244bb);transition:height var(--orion-transition, 0.1s ease-out)}.orion-tabs__nav-button--offscreen-selection::after{height:4px;bottom:3px}.orion-tabs__list{list-style:none;margin:0;padding:0;display:flex;position:relative;scroll-behavior:smooth;scroll-snap-type:x mandatory;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.orion-tabs__list::-webkit-scrollbar{height:0;display:none}.orion-tabs__list--held{scroll-behavior:auto}.orion-tabs__list--held .orion-tabs__list-button{cursor:grab}.orion-tabs__list-item{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;text-align:center;position:relative;flex:1 1 0}.orion-tabs__list-item::after{display:block;content:\"\";position:absolute;width:100%;height:1px;background:var(--orion-gray-60, #666);left:0;bottom:0;transition:all var(--orion-transition, 0.1s ease-out);z-index:var(--orion-z-low, 10)}.orion-tabs__list-item--active::after{height:4px;background:var(--orion-rhapsody-blue, #002244)}.orion-tabs__list-button{background:none;border:none;cursor:pointer;width:100%;height:100%;padding:10px 25px;color:inherit;color:var(--orion-gray-60, #666);font-size:var(--orion-font-size-title5, 16px);line-height:var(--orion-line-height-normal, 24px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);border:4px solid transparent;border-bottom:none;border-radius:4px 4px 0 0}.orion-tabs__list-button:focus-visible{border-color:var(--orion-tabs-focus)}.orion-tabs__list-button:focus{outline:none}.orion-tabs__list-item--active .orion-tabs__list-button{color:var(--orion-rhapsody-blue, #002244)}";

const OrionTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.orionTabSelected = index.createEvent(this, "orionTabSelected", 7);
    this.tabButtons = [];
    this.isMouseDown = false;
    this.startingMouseX = 0;
    this.currentMouseX = 0;
    this.scrollToActiveTab = () => {
      const { x, width } = this.tabButtons[this.activeTab].getBoundingClientRect();
      this.tabsList.scrollLeft = x - width / 2;
    };
    this.parseChildren = () => {
      if (!this.slotEl)
        return;
      let tabCount = 0;
      let panelCount = 0;
      this.slotEl.assignedElements().forEach(ele => {
        // assign each generic slot to a specific slot based on component type
        if (ele.tagName === 'ORION-TAB-PANEL') {
          ele.setAttribute('slot', `orion-tab-content-${panelCount}`);
          ele.setAttribute('for', this.el.id);
          ele.setAttribute('panel-index', panelCount.toString());
          panelCount += 1;
        }
        else if (ele.tagName === 'ORION-TAB') {
          ele.setAttribute('slot', `orion-tab-slot-${tabCount}`);
          tabCount += 1;
        }
        else ;
      });
      this.tabCount = tabCount;
      this.panelCount = panelCount;
    };
    this.intersectionCallback = (entries) => {
      const { width: parentWidth, left: parentLeft } = this.el.getBoundingClientRect();
      let newIntersectionMap = Object.assign({}, this.intersectionMap);
      entries.forEach(entry => {
        const { boundingClientRect, target, isIntersecting } = entry;
        const middlePosition = boundingClientRect.x + boundingClientRect.width / 2 - parentLeft;
        const isLeft = middlePosition < 0;
        const isRight = middlePosition > parentWidth;
        newIntersectionMap = Object.assign(Object.assign({}, newIntersectionMap), { [target.id]: { isVisible: isIntersecting, isLeft, isRight } });
      });
      this.intersectionMap = newIntersectionMap;
    };
    this.getTabId = (index = this.activeTab) => `${this.el.id}-tab-${index}`;
    this.onSideBtnClick = (direction) => {
      if (direction === 'left' && this.tabsToTheLeft === 1) {
        this.tabsList.scrollLeft = 0;
      }
      else if (direction === 'right' && this.tabsToTheRight === 1) {
        this.tabsList.scrollLeft = this.tabsList.scrollWidth;
      }
      else if (this.tabButtons.length > 0) {
        const buttonWidth = this.tabButtons[0].getBoundingClientRect().width;
        this.tabsList.scrollLeft += (direction === 'right' ? 1 : -1) * buttonWidth;
      }
    };
    this.onMouseDown = (e) => {
      this.startingMouseX = e.x;
      this.currentMouseX = e.x;
      this.isMouseDown = true;
    };
    this.onMouseMove = (e) => {
      if (this.isMouseDown) {
        this.tabsList.classList.add('orion-tabs__list--held');
        const scrollDiff = this.currentMouseX - e.x;
        if (this.tabsList)
          this.tabsList.scrollLeft += scrollDiff;
        this.currentMouseX = e.x;
      }
    };
    this.resetMouse = () => {
      this.tabsList.classList.remove('orion-tabs__list--held');
      this.isMouseDown = false;
    };
    this.onMouseUp = (e) => {
      if (e.x === this.startingMouseX) {
        this.resetMouse();
      }
      else {
        setTimeout(() => {
          this.resetMouse();
        });
      }
    };
    this.onMouseLeave = () => {
      this.resetMouse();
    };
    this.onTabSelected = (tabIndex) => {
      if (this.isMouseDown)
        return;
      this.activeTab = tabIndex;
    };
    /**
     * When the list has gained focus
     * If the focus is coming in from another element, update our intersection observers
     */
    this.onListFocusIn = () => {
      if (this.focused)
        return;
      this.focused = true;
      this.setupIntersection();
    };
    /**
     * When list has lost focus
     * Make sure that focus has left the list, and not just gone from one button to another
     */
    this.onListFocusOut = (e) => {
      const focusMovedTo = e.relatedTarget;
      if (!focusMovedTo) {
        this.focused = false;
        return;
      }
      const currentListItem = focusMovedTo.parentElement;
      const isFocusedContained = Array.from(this.tabsList.childNodes).includes(currentListItem);
      this.focused = isFocusedContained;
    };
    this.onButtonKeyDown = (e, tabIndex) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (tabIndex < this.tabButtons.length - 1) {
          this.tabButtons[tabIndex + 1].focus();
        }
        else {
          this.tabButtons[0].focus();
          this.setupIntersection();
        }
      }
      else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (tabIndex > 0) {
          this.tabButtons[tabIndex - 1].focus();
        }
        else {
          this.tabButtons[this.tabButtons.length - 1].focus();
          this.setupIntersection();
        }
      }
    };
    this.activeTab = 0;
    this.scrollToStartingActiveTab = false;
    this.minTabWidth = '104px';
    this.tabCount = 0;
    this.panelCount = 0;
    this.intersectionMap = {};
    this.tabsToTheLeft = 0;
    this.tabsToTheRight = 0;
    this.activeTabSide = 'middle';
    this.focused = false;
  }
  componentDidLoad() {
    this.parseChildren();
    this.orionTabSelected.emit({ tabIndex: this.activeTab });
  }
  componentDidUpdate() {
    // On the very first componentDidUpdate, the observer will be null
    // waiting until this step insures that the first render has happened and the slots are populated
    if (!this.observer) {
      if (this.scrollToStartingActiveTab) {
        this.scrollToActiveTab();
      }
      // wait until the scroll is done
      setTimeout(() => {
        this.setupIntersection();
      });
    }
  }
  onActiveTabChange() {
    this.computeActiveTabSide();
    this.orionTabSelected.emit({ tabIndex: this.activeTab });
  }
  setupIntersection() {
    if (this.observer)
      this.observer.disconnect();
    this.intersectionMap = {};
    const options = {
      root: this.tabsList,
      rootMargin: '0px',
      threshold: [0.8, 0.2],
    };
    this.observer = new IntersectionObserver(this.intersectionCallback, options);
    const tabs = this.tabsList.querySelectorAll('.orion-tabs__list-item');
    tabs.forEach(element => {
      this.observer.observe(element);
    });
  }
  computeOffscreenButtonCounts() {
    let rightCount = 0;
    let leftCount = 0;
    Object.values(this.intersectionMap).forEach(({ isVisible, isLeft, isRight }) => {
      if (isVisible)
        return;
      if (isLeft)
        leftCount += 1;
      else if (isRight)
        rightCount += 1;
    });
    this.tabsToTheLeft = leftCount;
    this.tabsToTheRight = rightCount;
    this.computeActiveTabSide();
  }
  computeActiveTabSide() {
    const activeId = this.getTabId();
    if (!this.intersectionMap[activeId])
      return;
    const { isVisible, isLeft, isRight } = this.intersectionMap[activeId];
    if (isVisible)
      this.activeTabSide = 'middle';
    else if (isLeft)
      this.activeTabSide = 'left';
    else if (isRight)
      this.activeTabSide = 'right';
  }
  getNavButtonClasses(direction) {
    const isVisible = direction === 'left' ? this.tabsToTheLeft > 0 : this.tabsToTheRight > 0;
    return `
      orion-tabs__nav-button
      orion-tabs__nav-button--${direction}
      orion-tabs__nav-button--${isVisible ? 'visible' : 'hidden'}
      ${this.activeTabSide === direction ? 'orion-tabs__nav-button--offscreen-selection' : ''}
    `;
  }
  getTabItemClasses(isActive) {
    return `
      orion-tabs__list-item
      orion-tabs__list-item--${isActive ? 'active' : 'inactive'}
    `;
  }
  render() {
    const inlineCSS = {
      minWidth: this.minTabWidth,
    };
    return (index.h(index.Host, null, index.h("nav", { class: "orion-tabs" }, index.h("slot", { ref: el => {
        this.slotEl = el;
      } }), index.h("button", { onClick: () => this.onSideBtnClick('left'), class: this.getNavButtonClasses('left'), tabIndex: -1 }, index.h("i", { class: "orion-icon orion-icon-chevron_left" }), Math.max(1, this.tabsToTheLeft)), index.h("button", { onClick: () => this.onSideBtnClick('right'), class: this.getNavButtonClasses('right'), tabIndex: -1 }, Math.max(1, this.tabsToTheRight), index.h("i", { class: "orion-icon orion-icon-chevron_right" })), index.h("ul", { class: "orion-tabs__list", ref: el => {
        this.tabsList = el;
      }, role: "tablist", tabIndex: -1, onFocusout: this.onListFocusOut, onFocusin: this.onListFocusIn, onMouseDown: this.onMouseDown, onMouseMove: this.onMouseMove, onMouseUp: this.onMouseUp, onMouseLeave: this.onMouseLeave }, [...Array(this.tabCount)].map((_, tabIndex) => {
      const isActive = this.activeTab === tabIndex;
      return (index.h("li", { id: this.getTabId(tabIndex), class: this.getTabItemClasses(isActive), style: inlineCSS }, index.h("button", { onKeyDown: e => this.onButtonKeyDown(e, tabIndex), tabIndex: isActive ? 0 : -1, role: "tab", "aria-selected": isActive.toString(), class: "orion-tabs__list-button", onClick: () => this.onTabSelected(tabIndex), ref: el => {
          this.tabButtons[tabIndex] = el;
        } }, index.h("slot", { name: `orion-tab-slot-${tabIndex}` }))));
    }))), [...Array(this.panelCount)].map((_, tabIndex) => {
      return index.h("slot", { name: `orion-tab-content-${tabIndex}` });
    })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "activeTab": ["onActiveTabChange"],
    "intersectionMap": ["computeOffscreenButtonCounts"]
  }; }
};
OrionTabs.style = orionTabsCss;

const orionTextInputCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-text-input{position:relative;display:flex;flex-direction:column;justify-content:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);transition:var(--orion-transition, 200ms ease-in-out)}input::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}input::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-text-input--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}@media screen and (min-width: 769px){input{height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}";

const OrionTextInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.type = 'text';
    this.value = '';
    this.placeholder = '';
    this.disabled = false;
    this.error = false;
    this.required = false;
    this.autocomplete = '';
    this.dirname = '';
    this.form = '';
    this.list = '';
    this.maxlength = 524288;
    this.minlength = 0;
    this.multiple = false;
    this.name = '';
    this.pattern = '';
    this.readonly = false;
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  render() {
    return (index.h("div", { class: "orion-text-input" }, index.h("input", { class: this.error && !this.disabled ? 'orion-text-input--error' : '', type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autoComplete: this.autocomplete, dirName: this.dirname, form: this.form, list: this.list, maxlength: this.maxlength, minlength: this.minlength, multiple: this.multiple, name: this.name, pattern: this.pattern, readOnly: this.readonly })));
  }
};
OrionTextInput.style = orionTextInputCss;

const orionTextareaCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-textarea{--orion-textarea__resize-handle:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvMTZweC9JbnRlcmZhY2UvRHJhZyBjb3JuZXIvQnRtIHJpZ2h0PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xLjUsMTYgQzAuNjcxNTcyODc1LDE2IDAsMTUuMzI4NDI3MSAwLDE0LjUgQzAsMTMuNjcxNTcyOSAwLjY3MTU3Mjg3NSwxMyAxLjUsMTMgQzIuMzI4NDI3MTIsMTMgMywxMy42NzE1NzI5IDMsMTQuNSBDMywxNS4zMjg0MjcxIDIuMzI4NDI3MTIsMTYgMS41LDE2IFogTTgsMTYgQzcuMTcxNTcyODgsMTYgNi41LDE1LjMyODQyNzEgNi41LDE0LjUgQzYuNSwxMy42NzE1NzI5IDcuMTcxNTcyODgsMTMgOCwxMyBDOC44Mjg0MjcxMiwxMyA5LjUsMTMuNjcxNTcyOSA5LjUsMTQuNSBDOS41LDE1LjMyODQyNzEgOC44Mjg0MjcxMiwxNiA4LDE2IFogTTgsOS41IEM3LjE3MTU3Mjg4LDkuNSA2LjUsOC44Mjg0MjcxMiA2LjUsOCBDNi41LDcuMTcxNTcyODggNy4xNzE1NzI4OCw2LjUgOCw2LjUgQzguODI4NDI3MTIsNi41IDkuNSw3LjE3MTU3Mjg4IDkuNSw4IEM5LjUsOC44Mjg0MjcxMiA4LjgyODQyNzEyLDkuNSA4LDkuNSBaIE0xNC41LDE2IEMxMy42NzE1NzI5LDE2IDEzLDE1LjMyODQyNzEgMTMsMTQuNSBDMTMsMTMuNjcxNTcyOSAxMy42NzE1NzI5LDEzIDE0LjUsMTMgQzE1LjMyODQyNzEsMTMgMTYsMTMuNjcxNTcyOSAxNiwxNC41IEMxNiwxNS4zMjg0MjcxIDE1LjMyODQyNzEsMTYgMTQuNSwxNiBaIE0xNC41LDkuNSBDMTMuNjcxNTcyOSw5LjUgMTMsOC44Mjg0MjcxMiAxMyw4IEMxMyw3LjE3MTU3Mjg4IDEzLjY3MTU3MjksNi41IDE0LjUsNi41IEMxNS4zMjg0MjcxLDYuNSAxNiw3LjE3MTU3Mjg4IDE2LDggQzE2LDguODI4NDI3MTIgMTUuMzI4NDI3MSw5LjUgMTQuNSw5LjUgWiBNMTQuNSwzIEMxMy42NzE1NzI5LDMgMTMsMi4zMjg0MjcxMiAxMywxLjUgQzEzLDAuNjcxNTcyODc1IDEzLjY3MTU3MjksMCAxNC41LDAgQzE1LjMyODQyNzEsMCAxNiwwLjY3MTU3Mjg3NSAxNiwxLjUgQzE2LDIuMzI4NDI3MTIgMTUuMzI4NDI3MSwzIDE0LjUsMyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iSWNvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzEuMDAwMDAwLCAtODIyLjAwMDAwMCkiIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3MS4wMDAwMDAsIDgyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJEcmFnLWNvcm5lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iU2hhcGUiIGZpbGw9IiM3Qzg3OEUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgbWFzaz0idXJsKCNtYXNrLTIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDAwMDAwKSIgaWQ9IkNvbG9yL0dyYXlzY2FsZS84MCUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzMzMzMzMyIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");position:relative;display:flex;flex-direction:column;justify-content:flex-start;min-width:176px;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;overflow:auto}textarea{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;min-width:176px;max-width:var(--orion-container-width-md, 944px);min-height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);overflow:auto;resize:none;transition:var(--orion-transition, 200ms ease-in-out);position:relative}textarea::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}textarea:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}textarea::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}textarea::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-textarea--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:none}.orion-textarea--resize{resize:both}.orion-textarea--resizeX{resize:horizontal}.orion-textarea--resizeY{resize:vertical}.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:var(--orion-textarea__resize-handle);background-position:bottom 7px right 7px;background-repeat:no-repeat;transition:none;background-size:14px}@media screen and (min-width: 769px){textarea{min-height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}@media (hover: none){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}@-moz-document url-prefix(){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}";

const OrionTextarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.value = '';
    this.placeholder = '';
    this.resize = false;
    this.resizeHorizontal = false;
    this.resizeVertical = false;
    this.autocorrect = 'off';
    this.autofocus = false;
    this.cols = 20;
    this.form = '';
    this.maxLength = 524288;
    this.minLength = 0;
    this.name = '';
    this.readonly = false;
    this.rows = 2;
    this.spellcheck = false;
    this.wrap = 'soft';
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  getCSSClass() {
    return classnames('', // this class is always applied
    {
      'orion-textarea--error orion-textarea--resize': this.error && this.resize,
      'orion-textarea--error orion-textarea--resizeX': this.error && this.resizeHorizontal,
      'orion-textarea--error orion-textarea--resizeY': this.error && this.resizeVertical,
      'orion-textarea--error': this.error,
      'orion-textarea--resize': this.resize,
      'orion-textarea--resizeX': this.resizeHorizontal,
      'orion-textarea--resizeY': this.resizeVertical, // this class is applied if the resize vertical prop is true
    });
  }
  render() {
    return (index.h("div", { class: "orion-textarea" }, index.h("textarea", { class: !this.disabled ? this.getCSSClass() : '', value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autocorrect: this.autocorrect, autofocus: this.autofocus, cols: this.cols, form: this.form, maxLength: this.maxLength, minLength: this.minLength, name: this.name, readOnly: this.readonly, rows: this.rows, spellcheck: this.spellcheck, wrap: this.wrap })));
  }
};
OrionTextarea.style = orionTextareaCss;

const orionToggleCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-toggle--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-toggle{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-toggle--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) 0;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-toggle--disabled{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666)}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-toggle__input{position:relative;display:inline-block;width:54px;min-width:54px;height:32px;background-color:var(--orion-gray-10, #e6e6e6);border-radius:50px;box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle__input::after{content:\"\";position:absolute;height:100%;box-sizing:border-box;aspect-ratio:1;border-radius:50%;background-color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);top:0;left:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-toggle input:checked~.orion-toggle__input{background-color:var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:checked~.orion-toggle__input::after{left:22px;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus:not(:focus-visible)~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:not(:focus-visible):checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus-visible~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus-visible:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:disabled~.orion-toggle__input::after{background-color:var(--orion-gray-10, #e6e6e6);border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-toggle input:disabled~.orion-toggle__input{background-color:var(--orion-gray-20, #ccc);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-gray-40, #999)}@media screen and (min-width: 769px){.orion-toggle{width:-moz-fit-content;width:fit-content;justify-content:space-between;font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) 0}.orion-toggle__input{width:40px;min-width:40px;height:24px}.orion-toggle input:checked~.orion-toggle__input::after{left:16px}}";

const OrionToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChanged = index.createEvent(this, "valueChanged", 7);
    this.value = '';
    this.checked = false;
    this.name = '';
    this.disabled = false;
    this.required = false;
    this.justify = false;
  }
  onToggleChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value, checked: event.target.checked });
  }
  getCSSStyle() {
    if (this.justify) {
      return {
        width: '100%',
      };
    }
    return {};
  }
  render() {
    return (index.h("label", { class: `orion-toggle 
          ${this.disabled ? 'orion-toggle--disabled' : ''}`, style: this.getCSSStyle() }, index.h("slot", null), index.h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onToggleChangeValue.bind(this) }), index.h("span", { class: "orion-toggle__input" })));
  }
  get el() { return index.getElement(this); }
};
OrionToggle.style = orionToggleCss;

const orionToggleGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-toggle-group{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-toggle-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-toggle-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionToggleGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inline = false;
    this.justify = false;
    this.disabled = false;
  }
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get toggles() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-TOGGLE');
  }
  componentDidLoad() {
    if (this.disabled) {
      this.setToggleGroupDisabled();
    }
    if (this.justify) {
      this.setToggleGroupJustify();
    }
  }
  /**
   * Disable all toggless in group
   */
  setToggleGroupDisabled() {
    this.toggles.forEach(toggle => {
      toggle.setAttribute('disabled', '');
    });
  }
  /**
   * Justify the content of the toggle group
   */
  setToggleGroupJustify() {
    this.toggles.forEach(toggle => {
      toggle.setAttribute('justify', '');
    });
  }
  render() {
    return (index.h(index.Host, null, index.h("span", { class: `orion-toggle-group 
          ${this.inline ? 'orion-toggle-group--inline' : ''}` }, index.h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionToggleGroup.style = orionToggleGroupCss;

const orionTooltipCss = "orion-tooltip{}orion-tooltip html,orion-tooltip body,orion-tooltip p,orion-tooltip ol,orion-tooltip ul,orion-tooltip li,orion-tooltip dl,orion-tooltip dt,orion-tooltip dd,orion-tooltip blockquote,orion-tooltip figure,orion-tooltip fieldset,orion-tooltip legend,orion-tooltip textarea,orion-tooltip pre,orion-tooltip iframe,orion-tooltip hr,orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}orion-tooltip ul{list-style:none}orion-tooltip button,orion-tooltip input,orion-tooltip select,orion-tooltip textarea{margin:0}orion-tooltip img,orion-tooltip embed,orion-tooltip iframe,orion-tooltip object,orion-tooltip audio,orion-tooltip video{max-width:100%;height:auto}orion-tooltip iframe{border:0}orion-tooltip table{border-spacing:0;border-collapse:collapse}orion-tooltip td,orion-tooltip th{padding:0;text-align:left}orion-tooltip html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}orion-tooltip body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}orion-tooltip *::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip *::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip a,orion-tooltip a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:focus:not(:focus-visible){outline:none}orion-tooltip a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}orion-tooltip a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}orion-tooltip a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}orion-tooltip a,orion-tooltip button{cursor:pointer}orion-tooltip h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}orion-tooltip h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip sup,orion-tooltip sub{vertical-align:baseline;position:relative;top:-0.4em}orion-tooltip sub{top:0.4em}orion-tooltip strong,orion-tooltip b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){orion-tooltip body{font-size:var(--orion-font-size-body, 16px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 16px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){orion-tooltip a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}.tooltip-wrapper{position:relative;display:inline-block}.tooltip-wrapper:hover{cursor:pointer}.tooltip-wrapper:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.tooltip-wrapper:focus:not(:focus-visible){outline:none}.tooltip-wrapper:focus-visible{color:var(--orion-color-activation, #6244bb);outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-tooltip{visibility:hidden;opacity:0;position:absolute;background-color:var(--orion-rhapsody-blue, #024);min-height:10px;min-width:10px;max-width:456px;color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-weight:var(--orion-font-weight-semi-bold, 600);padding:var(--orion-space-md, 8px);box-sizing:border-box;cursor:initial;transition:var(--orion-transition, 200ms ease-in-out);z-index:var(--orion-z-mid, 100)}.open{visibility:visible;opacity:1}.orion-tooltip.bottom{left:50%;transform:translate(-50%, 8px)}.orion-tooltip.top{left:50%;bottom:0;transform:translate(-50%, -30px)}";

const OrionTooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.uid = '';
    // save a reference to the dismiss timeout
    this.timeout = 0;
    this.delay = false;
    this.tooltipWidth = 200;
    this.tooltipPosition = 'bottom';
    this.open = false;
  }
  handleResize() {
    this._handleDropdownPosition();
  }
  componentWillLoad() {
    this.uid = generateUUID();
    // if component author uses an unacceptable position then default to bottom
    if (this.tooltipPosition !== 'top' && this.tooltipPosition !== 'bottom') {
      this.tooltipPosition = 'bottom';
    }
  }
  componentDidLoad() {
    // handle position if it is outside the viewport
    this._handleDropdownPosition();
  }
  _openTooltip() {
    // clear close timeout, if exists
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
    this.open = true;
  }
  _closeTooltip(delay = true) {
    if (delay) {
      // hide the tooltip after 500ms
      this.timeout = window.setTimeout(() => {
        this.open = false;
      }, 500);
    }
    else {
      this.open = false;
    }
  }
  _onKeyDown(event) {
    if (event.key === 'Escape') {
      // this.dismissed = true;
      this._closeTooltip(false);
    }
  }
  _handleDropdownPosition() {
    const screenPadding = 16;
    const placeholderRect = this.placeholder.getBoundingClientRect();
    const dropdownRect = this.dropdown.getBoundingClientRect();
    const dropdownRightX = dropdownRect.x + dropdownRect.width;
    const placeholderRightX = placeholderRect.x + placeholderRect.width;
    // handle width if tooltip is wider than viewport
    if (this.dropdown.offsetWidth + screenPadding * 2 > document.body.clientWidth - screenPadding * 2) {
      this.tooltipWidth = document.body.clientWidth - screenPadding * 2;
    }
    // if it crops left
    if (dropdownRect.x < screenPadding) {
      this.dropdown.style.left = '0';
      this.dropdown.style.right = 'auto';
      // update position so left edge lines up with screenPadding
      if (this.tooltipPosition === 'top') {
        this.dropdown.style.transform = `translate(${-placeholderRect.x + screenPadding}px, -30px)`;
      }
      else {
        this.dropdown.style.transform = `translate(${-placeholderRect.x + screenPadding}px, 8px)`;
      }
    }
    // if it crops on right
    else if (dropdownRightX > document.body.clientWidth - screenPadding * 2) {
      this.dropdown.style.left = 'auto';
      this.dropdown.style.right = '0';
      // update position so right edge lines up with screenPadding
      if (this.tooltipPosition === 'top') {
        this.dropdown.style.transform = `translate(${document.body.clientWidth - placeholderRightX - screenPadding}px, -30px)`;
      }
      else {
        this.dropdown.style.transform = `translate(${document.body.clientWidth - placeholderRightX - screenPadding}px, 8px)`;
      }
    }
  }
  render() {
    const inlineCSS = {
      width: `${this.tooltipWidth}px`,
    };
    const { open, tooltipPosition } = this;
    return (
    // TODO: address the eslint accessibility error below
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    index.h("div", { class: "tooltip-wrapper", onKeyDown: this._onKeyDown.bind(this), onFocus: this._openTooltip.bind(this), onMouseEnter: this._openTooltip.bind(this), onBlur: () => this._closeTooltip(),
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      onMouseLeave: () => {
        this._closeTooltip();
      }, tabindex: "-1" }, index.h("span", {
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      ref: el => {
        this.placeholder = el;
      }, "data-tooltip-placeholder": true, "aria-describedby": this.uid, "aria-expanded": open ? 'true' : 'false'
    }, index.h("slot", null)), index.h("div", { ref: el => {
        this.dropdown = el;
      }, id: this.uid, style: inlineCSS, class: `orion-tooltip ${tooltipPosition} ${open ? 'open' : ''}`, "aria-label": "tooltip", "aria-hidden": open ? 'false' : 'true', "data-tooltip-dropdown": true }, index.h("slot", { name: "orion-tooltip-body" }))));
  }
  get el() { return index.getElement(this); }
};
OrionTooltip.style = orionTooltipCss;

exports.orion_accordion = OrionAccordion;
exports.orion_button = OrionButton;
exports.orion_checkbox = OrionCheckbox;
exports.orion_checkbox_group = OrionCheckboxGroup;
exports.orion_chip = OrionChip;
exports.orion_date_calendar_modal = OrionDateCalendarModal;
exports.orion_date_input = OrionDateInput;
exports.orion_drawer = OrionDrawer;
exports.orion_dropdown = OrionDropdown;
exports.orion_dropdown_option = OrionDropdownOption;
exports.orion_error = OrionError;
exports.orion_label = OrionLabel;
exports.orion_link = OrionLink;
exports.orion_list = OrionList;
exports.orion_list_item = OrionListItem;
exports.orion_message = OrionMessage;
exports.orion_modal = OrionModal;
exports.orion_note = OrionNote;
exports.orion_popover = OrionPopover;
exports.orion_progress_meter = OrionProgressMeter;
exports.orion_radio_button = OrionRadioButton;
exports.orion_radio_button_group = OrionRadioButtonGroup;
exports.orion_stepper = OrionStepper;
exports.orion_tab = OrionTab;
exports.orion_tab_panel = OrionTabPanel;
exports.orion_tabs = OrionTabs;
exports.orion_text_input = OrionTextInput;
exports.orion_textarea = OrionTextarea;
exports.orion_toggle = OrionToggle;
exports.orion_toggle_group = OrionToggleGroup;
exports.orion_tooltip = OrionTooltip;

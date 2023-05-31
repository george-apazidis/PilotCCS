import { r as registerInstance, c as createEvent, h, g as getElement, H as Host, F as Fragment } from './index-ed6bbb9e.js';

// Generate a universally unique identifier
function generateUUID() {
  return Date.now().toString(36) + Math.floor(10 ** 12 + Math.random() * 9 * 10 ** 12).toString(36);
}

const orionAccordionCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}button{border:none;outline:none;text-align:left;background-color:transparent}.orion-accordion__container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:100%;margin:0;padding:0;border:none;box-shadow:inset 0 -1px 0 0 var(--orion-gray-20, #ccc);background-color:var(--orion-color-background, #fff)}.orion-accordion__container--visible{border-radius:var(--orion-border-radius, 4px);box-shadow:inset 0px 0px 0px 1px var(--orion-gray-40, #999)}.orion-accordion__header,.orion-accordion__header__title,.orion-accordion__panel{width:100%;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0}.orion-accordion__header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);font-weight:var(--orion-font-weight-semi-bold, 600);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent;cursor:pointer;outline:none;padding:var(--orion-space-xxl, 18px) 0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__header__title{flex:1}.orion-accordion__panel{font-weight:var(--orion-font-weight-normal, 400);padding:0 0 var(--orion-space-xxl, 18px) 0}.orion-accordion__container--visible .orion-accordion__panel{width:auto;padding:0 var(--orion-space-xl, 16px) var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__icon{fill:var(--orion-color-activation, #6244bb);display:flex;flex-direction:column;justify-content:center;align-items:center;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.orion-accordion__header:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__header:focus:not(:focus-visible){box-shadow:none}.orion-accordion__header:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__panel--open{display:block;height:auto}.orion-accordion__panel--closed{display:none}@media screen and (min-width: 769px){.orion-accordion__header,.orion-accordion__panel{font-size:var(--orion-font-size-body, 16px)}.orion-accordion__header{padding:var(--orion-space-md, 8px) 0}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-md, 8px) var(--orion-space-xl, 16px)}.orion-accordion__header.chevron-left{flex-direction:row-reverse;justify-content:flex-end}.orion-accordion__icon{width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px);margin:var(--orion-space-xs, 4px) 0}.orion-accordion__panel{padding:0 0 var(--orion-space-xl, 16px) 0}.orion-accordion__container--visible .orion-accordion__panel{padding:0 var(--orion-space-xl, 16px) var(--orion-space-xl, 16px) var(--orion-space-xl, 16px)}}";

const OrionAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = createEvent(this, "toggle", 7);
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
    return (h("div", { class: `orion-accordion__container ${this.hasContainer ? 'orion-accordion__container--visible' : ''}` }, h("button", { type: "button", class: `orion-accordion__header ${this.chevronLeft ? 'chevron-left' : ''}`, "aria-expanded": this.open ? 'true' : 'false', "aria-controls": this.sectionUid, id: this.btnUid, onClick: () => this.toggleComponent() }, h("span", { class: "orion-accordion__header__title" }, h("slot", { name: "orion-accordion-header" })), this.open ? (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M21.7250876,17.6196441 C22.2464651,18.1277218 23.0906844,18.1266464 23.6107041,17.6172421 C24.1307239,17.1078378 24.1296232,16.2830056 23.6082457,15.7749279 L12.941579,5.38035589 C12.4211626,4.8732147 11.5788374,4.8732147 11.058421,5.38035589 L0.391754315,15.7749279 C-0.129623174,16.2830056 -0.130723851,17.1078378 0.389295885,17.6172421 C0.90931562,18.1266464 1.75353487,18.1277218 2.27491236,17.6196441 L12,8.14263249 L21.7250876,17.6196441 Z", id: "path-1" })))) : (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M2.27491236,5.8803559 C1.75353487,5.37227816 0.90931562,5.37335356 0.389295885,5.88275787 C-0.130723851,6.39216218 -0.129623174,7.21699435 0.391754315,7.72507209 L11.058421,18.1196441 C11.5788374,18.6267853 12.4211626,18.6267853 12.941579,18.1196441 L23.6082457,7.72507209 C24.1296232,7.21699435 24.1307239,6.39216218 23.6107041,5.88275787 C23.0906844,5.37335356 22.2464651,5.37227816 21.7250876,5.8803559 L12,15.3573675 L2.27491236,5.8803559 Z", id: "path-1" }))))), h("div", { class: `orion-accordion__panel ${this.open ? 'orion-accordion__panel--open' : 'orion-accordion__panel--closed'}`, id: this.sectionUid, "aria-labelledby": this.btnUid, "aria-hidden": this.open ? 'false' : 'true', role: "region" }, h("slot", { name: "orion-accordion-panel" }))));
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

const orionButtonCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{display:block;--orion-button-radius:var(--orion-border-radius, 4px);--orion-button-width:100%}:host([disabled]){pointer-events:none}.orion-button{display:flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;gap:var(--orion-space-md, 8px);width:var(--orion-button-width);height:var(--orion-touch-size, 60px);min-width:var(--orion-touch-size, 60px);max-width:var(--orion-breakpoint-md, 1024px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-label, 18px);font-weight:var(--orion-font-weight-semi-bold, 600);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);border-radius:var(--orion-button-radius);outline:none;transition:var(--orion-transition, 200ms ease-in-out);cursor:pointer}.orion-button i[class^='orion-icon-']:before{display:flex}.orion-button--primary{color:var(--orion-white, #fff);background-color:var(--orion-color-activation, #6244bb)}.orion-button--secondary{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-white, #fff)}.orion-button--tertiary{color:var(--orion-color-activation, #6244bb);background-color:transparent;border:var(--orion-border-standard, 1px solid) transparent}.orion-button:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-button:focus:not(:focus-visible){box-shadow:none}.orion-button--tertiary:focus:not(:focus-visible){border:var(--orion-border-standard, 1px solid) transparent}.orion-button:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-button--primary:hover{background-color:var(--orion-color-hover-dark, #8972cc);border:var(--orion-border-standard, 1px solid) var(--orion-color-hover-dark, #8972cc)}.orion-button--secondary:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-hover-light, #eaeaf3)}.orion-button--tertiary:hover{background-color:rgba(182, 184, 220, 0.25)}.orion-button:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-button--primary:active{color:var(--orion-white, #fff);background-color:var(--orion-color-active, #49328c);border:var(--orion-border-standard, 1px solid) var(--orion-color-active, #49328c)}.orion-button--secondary:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-button--tertiary:focus-visible{border:var(--orion-border-standard, 1px solid) transparent}.orion-button--tertiary:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-focus, rgba(182, 184, 220, 0.5));border:none}.orion-button:disabled{color:var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-button--primary:disabled{border:none;background-color:var(--orion-gray-40, #999);color:var(--orion-white, #fff)}.orion-button--tertiary:disabled{border:none;background-color:rgba(51, 51, 51, 0.08)}.orion-button--small{width:-moz-fit-content;width:fit-content;font-size:16px}.orion-button--sticky{position:fixed;bottom:0;left:0;right:0;border:none;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);border-radius:0;z-index:var(--orion-z-low, 10)}.orion-button--sticky:disabled{border:none;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:0}.orion-button.orion-button--no-text{width:var(--orion-touch-size, 60px);height:var(--orion-touch-size, 60px)}@media screen and (min-width: 769px){.orion-button{max-width:var(--orion-container-width-xs, 368px);min-width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-label, 16px);padding:var(--orion-space-md, 8px)}.orion-button--small{font-size:var(---orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);height:var(--orion-touch-size-sm, 32px);min-width:var(--orion-touch-size-sm, 32px)}.orion-button--sticky{display:none}.orion-button.orion-button--no-text{width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px)}.orion-button.orion-button--no-text.orion-button--small{width:var(--orion-touch-size-sm, 32px);height:var(--orion-touch-size-sm, 32px);padding:0}}@media (hover: none){.orion-button--primary:hover{color:var(--orion-white, #fff);background-color:var(--orion-color-activation, #6244bb)}.orion-button--secondary:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-white, #fff)}.orion-button--tertiary:hover{color:var(--orion-color-activation, #6244bb);background-color:transparent;border:var(--orion-border-standard, 1px solid) transparent}}";

const OrionButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("button", { class: this.getCSSClass(), type: this.type, disabled: this.disabled }, this.iconName !== '' && !this.iconRight ? (h("span", { class: "orion-button__icon" }, h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null, this.hasText ? h("slot", null) : null, this.iconName !== '' && this.iconRight ? (h("span", { class: "orion-button__icon" }, h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null));
  }
  get el() { return getElement(this); }
};
OrionButton.style = orionButtonCss;

const orionCheckboxCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-checkbox--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-checkbox__label{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:var(--orion-checkbox--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px) var(--orion-space-xxl, 18px) 0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-checkbox__label--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-checkbox__input{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);margin-right:var(--orion-space-md, 8px)}.orion-checkbox__label input:focus~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input:focus:not(:focus-visible)~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none}.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input~.orion-checkbox__input{transition:var(--orion-transition, 200ms ease-in-out)}.orion-checkbox__label input:checked~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);background-color:var(--orion-color-activation, #6244bb)}.orion-checkbox__label input:disabled~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-color-background--dimmed, #e6e6e6)}.orion-checkbox__label input:disabled:checked~.orion-checkbox__input{background-color:var(--orion-gray-40, #999)}.orion-checkbox__input:after{content:'';position:absolute;display:none}.orion-checkbox__label input:checked~.orion-checkbox__input:after{display:block}.orion-checkbox__label .orion-checkbox__input:after{left:50%;top:45%;width:6px;height:12px;border:solid var(--orion-color-background, #fff);border-width:0 3px 3px 0;transform:translate(-50%, -50%) rotate(45deg)}@media screen and (min-width: 769px){.orion-checkbox__label{font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-md, 8px) var(--orion-space-md, 8px) 0}.orion-checkbox__input{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);border-radius:var(--orion-border-radius-sm, 2px);margin-top:2px}.orion-checkbox__label input:focus~.orion-checkbox__input,.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border-radius:var(--orion-border-radius-sm, 2px)}.orion-checkbox__label .orion-checkbox__input:after{width:5px;height:10px;border-width:0 2px 2px 0}}";

const OrionCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("label", { class: `orion-checkbox__label 
          ${this.disabled ? 'orion-checkbox__label--disabled' : ''}` }, h("span", null, h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onCheckboxChangeValue.bind(this) }), h("span", { class: "orion-checkbox__input" })), h("slot", null)));
  }
};
OrionCheckbox.style = orionCheckboxCss;

const orionCheckboxGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-checkbox-group{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-checkbox-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-checkbox-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionCheckboxGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("span", { class: `orion-checkbox-group
          ${this.inline ? 'orion-checkbox-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionCheckboxGroup.style = orionCheckboxGroupCss;

const orionChipCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{display:inline-block;--orion-chip-color__bg:var(--orion-rhapsody-blue, #002244);--orion-chip-color__text:var(--orion-white, #fff)}:host(:not([is-open])){display:none}.orion-chip{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-weight:var(--orion-font-weight-semi-bold, 600);line-height:1;font-size:var(--orion-font-size-label, 18px);min-height:44px;padding:8px 11px;border:var(--orion-border-standard, 1px solid);border-radius:100px;box-sizing:border-box;background-color:var(--orion-white, #fff);color:var(--orion-color-text, #333);outline:none;pointer-events:none;cursor:default}.orion-chip--high{border-color:var(--orion-red, #d50032)}.orion-chip--medium{border-color:var(--orion-orange, #f46335)}.orion-chip--low{border-color:var(--orion-yellow, #edb72b)}.orion-chip--success{border-color:var(--orion-green, #208500)}.orion-chip--info{border-color:var(--orion-rhapsody-blue, #002244)}.orion-chip--custom{border-color:var(--orion-chip-color__bg);color:var(--orion-chip-color__text)}.orion-chip.is-open{display:inline-flex;align-items:center;gap:13px}.orion-chip .white{color:var(--orion-white, #fff)}.orion-chip .black{color:var(--orion-black, #000)}.orion-chip .red{color:var(--orion-alert-red, #d50032)}.orion-chip .orange{color:var(--orion-alert-orange, #f46335)}.orion-chip .yellow{color:var(--orion-alert-yellow, #edb72b)}.orion-chip .green{color:var(--orion-alert-green, #208500)}.orion-chip .rhapsody-blue{color:var(--orion-rhapsody-blue, #002244)}.orion-chip--solid-bg.orion-chip--high{background-color:var(--orion-red, #d50032);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--medium{background-color:var(--orion-orange, #f46335);color:var(--orion-black, #000)}.orion-chip--solid-bg.orion-chip--low{background-color:var(--orion-yellow, #edb72b);color:var(--orion-black, #000)}.orion-chip--solid-bg.orion-chip--success{background-color:var(--orion-green, #208500);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--info{background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}.orion-chip--solid-bg.orion-chip--custom{background-color:var(--orion-chip-color__bg);color:var(--orion-chip-color__text)}.orion-chip__close-btn{float:right;display:flex;background-color:transparent;border:none;cursor:pointer;font-size:var(--orion-icon-size, 24px);pointer-events:all;margin:0;padding:0}.orion-chip__close-btn .orion-icon{display:flex}.orion-chip:has(.orion-chip__close-btn).orion-chip--high:focus-visible{outline:var(--orion-border-thicker) rgba(213, 0, 50, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--medium:focus-visible{outline:var(--orion-border-thicker) rgba(244, 99, 53, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--low:focus-visible{outline:var(--orion-border-thicker) rgba(237, 183, 43, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--success:focus-visible{outline:var(--orion-border-thicker) rgba(32, 133, 0, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--info:focus-visible{outline:var(--orion-border-thicker) rgba(12, 35, 64, 0.25)}.orion-chip:has(.orion-chip__close-btn).orion-chip--custom:focus-visible{outline:var(--orion-border-thicker) rgba(0, 0, 0, 0.25)}::slotted(*){display:inline}@media screen and (min-width: 769px){.orion-chip{min-height:32px;font-size:var(--orion-font-size-label, 16px);padding:4px 8px}.orion-chip.is-open{gap:9px}.orion-chip__close-btn{font-size:var(--orion-icon-size, 20px)}}";

const OrionChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    h("button", { class: `orion-chip ${variantClass}  ${this.isOpen ? 'is-open' : ''} ${this.solidBg ? 'orion-chip--solid-bg' : ''}    `, "aria-hidden": this.isOpen ? 'false' : 'true', tabindex: this.dismissible ? '1' : '-1' }, h("span", { class: "orion-chip__label" }, h("slot", null)), this.dismissible ? (h("span", { class: "orion-chip__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("i", { class: `orion-icon orion-icon-cancel ${this.solidBg && this.variant != 'custom' ? iconColor : ''}` }))) : ('')));
    return h(Host, null, component);
  }
  get el() { return getElement(this); }
};
OrionChip.style = orionChipCss;

const orionDrawerCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{display:block;--orion-drawer-top-value:0px;--orion-drawer-max-width-sm:50%;--orion-drawer-max-width-md:40%;--orion-drawer-max-width-lg:33%}::slotted([slot='orion-drawer-title']){display:flex;justify-content:center;text-align:center;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px);font-weight:var(--orion-font-weight-semi-bold, 600);margin-top:64px;padding:0 24px}h2{margin:0;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif)}.orion-drawer{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);display:flex;flex-direction:column;position:fixed;top:0;left:unset;right:0;bottom:0;height:100%;width:100%;transform:translateX(100%);z-index:var(--orion-z-negative, -1);background-color:var(--orion-white, #fff);color:var(--orion-color-text, #333);visibility:hidden;overflow:hidden;transition:var(--orion-transition, 200ms ease-in-out);box-sizing:border-box;max-height:unset}.orion-drawer.is-open{transform:translateX(0);z-index:var(--orion-z-high, 500);visibility:visible}.orion-drawer__close-btn{position:absolute;top:0;right:0;padding:24px;background-color:transparent;color:var(--orion-color-text, #333);border:none;cursor:pointer;font-size:24px;line-height:0;}.orion-drawer__close-btn:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-drawer__close-btn:focus:not(:focus-visible){outline:none}.orion-drawer__close-btn:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-drawer__body{flex:1;padding:24px;overflow-y:auto}.orion-drawer__footer{display:flex;flex-direction:column;gap:var(--orion-space-xl, 16px)}.orion-drawer__footer-content{padding:0 24px}.orion-drawer__footer-buttons{display:flex}.orion-drawer__footer-buttons>*{flex:1;border-radius:0}.orion-drawer__btn-secondary,.orion-drawer__btn-primary{--orion-button-radius:0}@media screen and (min-width: 769px){.orion-drawer__btn-secondary,.orion-drawer__btn-primary{--orion-button-radius:4px}}:host([open-from='left']) .orion-drawer{left:0;right:unset;transform:translateX(-100%)}:host([open-from='left']) .orion-drawer.is-open{transform:translateX(0)}:host([open-from='right']) .orion-drawer{left:unset;right:0}:host([open-from='right']) .orion-drawer.is-open{transform:translateX(0)}:host([open-from='bottom']) .orion-drawer{left:0;right:0;top:unset;transform:translate(0, 100%)}:host([open-from='bottom']) .orion-drawer.is-open{transform:translate(0, 0)}@media screen and (min-width: 769px){.orion-drawer{max-width:var(--orion-drawer-max-width-sm);box-shadow:-2px 0 4px 0 rgba(0, 0, 0, 0.5);top:var(--orion-drawer-top-value, 0px);height:calc(100% - var(--orion-drawer-top-value, 0px))}.orion-drawer__close-btn{position:relative;padding-right:48px}.orion-drawer__body{padding:0 48px}.orion-drawer__footer{padding:24px 48px;border-top:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-drawer__footer-content{padding:0}.orion-drawer__footer-buttons{gap:var(--orion-space-xl, 16px);min-width:336px;margin-left:auto}.orion-drawer__footer-buttons>*{max-width:160px;margin-left:auto}.orion-drawer__header{display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse;padding-left:48px}::slotted([slot='orion-drawer-title']){margin-top:0;text-align:left;padding:0}:host([open-from='left']) .orion-drawer{box-shadow:2px 0 4px 0 rgba(0, 0, 0, 0.5)}:host([open-from='bottom']) .orion-drawer{max-width:100%;width:100%;max-height:40%;box-shadow:0 -2px 4px 0 rgba(0, 0, 0, 0.5)}}@media screen and (min-width: 1025px){.orion-drawer{max-width:var(--orion-drawer-max-width-md)}}@media screen and (min-width: 1441px){.orion-drawer{max-width:var(--orion-drawer-max-width-lg)}}";

const OrionDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.orionDrawerFooterBtnClicked = createEvent(this, "orionDrawerFooterBtnClicked", 7);
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
    return (h("aside", { class: `orion-drawer ${this.isOpen ? 'is-open' : ''}`, "aria-labelledby": "dialog-header", tabindex: "-1", "aria-hidden": this.isOpen ? 'false' : 'true' }, h("div", { class: "orion-drawer__header" }, h("button", { type: "button", class: "orion-drawer__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("i", { class: `orion-icon-close` })), h("h2", null, h("slot", { name: "orion-drawer-title" }))), h("div", { class: "orion-drawer__body" }, h("slot", { name: "orion-drawer-body" })), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-drawer__footer" }, this.hasFooterSlot ? (h("div", { class: "orion-drawer__footer-content" }, h("slot", { name: "orion-drawer-footer-content" }))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-drawer__footer-buttons" }, this.hasSecondaryButton ? (h("orion-button", { class: "orion-drawer__btn-secondary", variant: "secondary", onClick: () => this.onFooterBtnClick('secondary') }, h("slot", { name: "orion-drawer-secondary-button" }))) : (''), this.hasPrimaryButton ? (h("orion-button", { class: "orion-drawer__btn-primary", variant: "primary", onClick: () => this.onFooterBtnClick('primary') }, h("slot", { name: "orion-drawer-primary-button" }))) : (''))) : (''))) : ('')));
  }
  get el() { return getElement(this); }
};
OrionDrawer.style = orionDrawerCss;

const orionDropdownCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none;margin:0;padding:0}details>summary{list-style:none;cursor:pointer}details>summary::-webkit-details-marker{display:none}fieldset:disabled{opacity:0;pointer-events:none}.orion-dropdown__container{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}details{width:100%;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-dropdown summary{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown--disabled summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown--error summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}.orion-dropdown--isOpen summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown summary:focus,.orion-dropdown summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown--disabled summary:focus,.orion-dropdown--disabled summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px)}.orion-dropdown__placeholder{font-style:italic;color:var(--orion-color-text--dimmed, #666)}.orion-dropdown__listbox{position:absolute;z-index:var(--orion-z-mid, 100);width:calc(100% - 2px);max-height:75vh;overflow-y:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown__chevron{width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);position:absolute;right:12px}.orion-dropdown__chevron--disabled,.orion-dropdown__chevron--error--isClosed,.orion-dropdown__chevron--isClosed{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTIuMjc0OTEyMzYsNS44ODAzNTU5IEMxLjc1MzUzNDg3LDUuMzcyMjc4MTYgMC45MDkzMTU2Miw1LjM3MzM1MzU2IDAuMzg5Mjk1ODg1LDUuODgyNzU3ODcgQy0wLjEzMDcyMzg1MSw2LjM5MjE2MjE4IC0wLjEyOTYyMzE3NCw3LjIxNjk5NDM1IDAuMzkxNzU0MzE1LDcuNzI1MDcyMDkgTDExLjA1ODQyMSwxOC4xMTk2NDQxIEMxMS41Nzg4Mzc0LDE4LjYyNjc4NTMgMTIuNDIxMTYyNiwxOC42MjY3ODUzIDEyLjk0MTU3OSwxOC4xMTk2NDQxIEwyMy42MDgyNDU3LDcuNzI1MDcyMDkgQzI0LjEyOTYyMzIsNy4yMTY5OTQzNSAyNC4xMzA3MjM5LDYuMzkyMTYyMTggMjMuNjEwNzA0MSw1Ljg4Mjc1Nzg3IEMyMy4wOTA2ODQ0LDUuMzczMzUzNTYgMjIuMjQ2NDY1MSw1LjM3MjI3ODE2IDIxLjcyNTA4NzYsNS44ODAzNTU5IEwxMiwxNS4zNTczNjc1IEwyLjI3NDkxMjM2LDUuODgwMzU1OSBaIiBpZD0icGF0aC0xIj48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--isOpen{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIxLjcyNTA4NzYsMTcuNjE5NjQ0MSBDMjIuMjQ2NDY1MSwxOC4xMjc3MjE4IDIzLjA5MDY4NDQsMTguMTI2NjQ2NCAyMy42MTA3MDQxLDE3LjYxNzI0MjEgQzI0LjEzMDcyMzksMTcuMTA3ODM3OCAyNC4xMjk2MjMyLDE2LjI4MzAwNTYgMjMuNjA4MjQ1NywxNS43NzQ5Mjc5IEwxMi45NDE1NzksNS4zODAzNTU4OSBDMTIuNDIxMTYyNiw0Ljg3MzIxNDcgMTEuNTc4ODM3NCw0Ljg3MzIxNDcgMTEuMDU4NDIxLDUuMzgwMzU1ODkgTDAuMzkxNzU0MzE1LDE1Ljc3NDkyNzkgQy0wLjEyOTYyMzE3NCwxNi4yODMwMDU2IC0wLjEzMDcyMzg1MSwxNy4xMDc4Mzc4IDAuMzg5Mjk1ODg1LDE3LjYxNzI0MjEgQzAuOTA5MzE1NjIsMTguMTI2NjQ2NCAxLjc1MzUzNDg3LDE4LjEyNzcyMTggMi4yNzQ5MTIzNiwxNy42MTk2NDQxIEwxMiw4LjE0MjYzMjQ5IEwyMS43MjUwODc2LDE3LjYxOTY0NDEgWiIKICAgICAgICAgICAgICAgICAgaWQ9InBhdGgtMSIKICAgICAgICAgICAgICAgID48L3BhdGg+PC9zdmc+');background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--error--isClosed{filter:brightness(0) saturate(100%) invert(17%) sepia(98%) saturate(5127%) hue-rotate(338deg) brightness(80%) contrast(112%)}.orion-dropdown__chevron--isOpen,.orion-dropdown__chevron--isClosed,details:focus-within~.orion-dropdown__chevron{filter:brightness(0) saturate(100%) invert(32%) sepia(18%) saturate(4839%) hue-rotate(232deg) brightness(87%) contrast(93%)}.orion-dropdown__chevron--disabled,details:focus-within~.orion-dropdown__chevron--disabled{filter:brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1%) hue-rotate(141deg) brightness(96%) contrast(84%);cursor:not-allowed}@media screen and (min-width: 769px){details{font-size:var(--orion-font-size-body, 16px)}.orion-dropdown summary{height:var(--orion-touch-size, 40px)}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-md, 8px)}.orion-dropdown__chevron{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);top:10px;right:8px}}";

const OrionDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("div", { class: "orion-dropdown__container" }, h("details", { class: this.getDropdownClass(), open: this.isOpen }, h("summary", { class: this.summary === this.placeholder ? 'orion-dropdown__placeholder' : 'orion-dropdown__value', tabIndex: this.disabled ? -1 : 0, "aria-controls": this.listBoxUID, "aria-expanded": this.isOpen ? 'true' : 'false' }, this.summary), h("fieldset", { class: "orion-dropdown__listbox", disabled: this.disabled, id: this.listBoxUID }, h("div", { role: "listbox" }, h("slot", { ref: el => {
        this.slotEl = el;
      } })))), h("div", { class: this.getChevronClass() })));
  }
  get el() { return getElement(this); }
};
OrionDropdown.style = orionDropdownCss;

const orionDropdownOptionCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;background-color:var(--orion-white, #fff)}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-dropdown__option{position:relative;display:flex;flex-direction:row;justify-content:stretch;align-items:center;margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);cursor:pointer;background-color:var(--orion-color-background, #fff)}.orion-dropdown__option--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}.orion-dropdown__option:after{content:'';width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);position:absolute;top:20px;right:12px;background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTguMTQzLDEzLjM1NSBMMy40MTYzMzUzNCw4LjYyOTE2NDcyIEMyLjg3OTQyMDMyLDguMDkyMzQzOTEgMi4wMDg5ODU0NCw4LjA5MjQyMDI5IDEuNDcyMTY0NjQsOC42MjkzMzUzMSBDMS40NzIxMDk3NSw4LjYyOTM5MDIgMS40NzIwNTQ4Nyw4LjYyOTQ0NTEgMS40NzIsOC42Mjk1IEMwLjkzNTE1OTM3Nyw5LjE2NjYxNjc4IDAuOTM1MzI4MjkyLDEwLjAzNzIxNDMgMS40NzIzNzczLDEwLjU3NDEyMjcgTDcuNDMyODAwNjYsMTYuNTMyOTg1OCBDNy44MjM0NzQ3MywxNi45MjMyMzM4IDguNDU2NTE0ODYsMTYuOTIzMjIzNCA4Ljg0NzE3NjEsMTYuNTMyOTYyNSBMMjIuNDY5NjU0NywyLjkxMzE1NDggQzIzLjAwNTkyMzMsMi4zNzY5OTE0MyAyMy4wMDYwMDg1LDEuNTA3NjEzNiAyMi40Njk4NDUxLDAuOTcxMzQ1MDc0IEMyMi40Njk3MzAxLDAuOTcxMjMwMDI5IDIyLjQ2OTYxNTEsMC45NzExMTUwMDQgMjIuNDY5NSwwLjk3MSBDMjEuOTMyOTE0OSwwLjQzNDY5MTA4MyAyMS4wNjMxOTcsMC40MzQ4MDMwMTYgMjAuNTI2NzUsMC45NzEyNTAwMzIiIGlkPSJwYXRoLTEiPjwvcGF0aD48L3N2Zz4=');filter:brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(2%) hue-rotate(110deg) brightness(106%) contrast(101%);background-repeat:no-repeat;background-size:cover;display:none}input:checked~.orion-dropdown__option{background-color:var(--orion-color-activation, #6244bb);color:var(--orion-white, #fff)}input:checked~.orion-dropdown__option:after{display:block}input:hover:not(:checked)+.orion-dropdown__option{background-color:var(--orion-color-hover-light, #eaeaf3)}input:disabled:hover~.orion-dropdown__option{background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}@media screen and (min-width: 769px){.orion-dropdown__option{padding:var(--orion-space-md, 8px)}.orion-dropdown__option:after{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);top:12px;right:8px}}";

const OrionDropdownOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dropdownOptionChanged = createEvent(this, "dropdownOptionChanged", 7);
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
    return (h("label", null, h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, "aria-selected": this.checked ? 'true' : 'false', role: "option", value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onDropdownOptionChangeValue.bind(this) }), h("span", { class: `orion-dropdown__option 
        ${this.disabled ? 'orion-dropdown__option--disabled' : ''}` }, h("slot", null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["watchChecked"]
  }; }
};
OrionDropdownOption.style = orionDropdownOptionCss;

const orionErrorCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-error{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-error, #d50032);font-size:var(--orion-font-size-small, 13px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-sm, 16px);font-style:italic;margin:0;padding:var(--orion-space-md, 8px) 0 0 0}.orion-error svg{fill:var(--orion-error-color-text, #d50032);padding-right:var(--orion-space-xs, 4px)}";

const OrionError = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "orion-error" }, h("span", null, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M15.7965714,12.8914286 L9.28228571,1.62285714 C9.02503828,1.15724226 8.53188534,0.871547603 8,0.88 C7.8690389,0.878267092 7.73841176,0.893634991 7.61142857,0.925714286 C7.23326196,1.0300281 6.91237715,1.28097647 6.72,1.62285714 L0.194285714,12.8914286 C0.0675374493,13.1185497 0.000677122129,13.3741921 0,13.6342857 C0,14.4548231 0.665176943,15.1200075 1.48571429,15.1200075 L14.5142857,15.1200075 C14.7760842,15.1208485 15.0330738,15.0496821 15.2571429,14.9142857 C15.598165,14.7187274 15.8469621,14.3950705 15.948253,14.0152294 C16.049544,13.6353882 15.9949392,13.2308242 15.7965714,12.8914286 Z M8,12.4914416 C7.54240872,12.4882619 7.17402274,12.1147476 7.17718217,11.6571563 C7.1803416,11.1995649 7.55385006,10.831173 8.01144144,10.8343252 C8.46903281,10.8374774 8.83743063,11.21098 8.83428571,11.6685714 C8.83051289,12.125918 8.45735512,12.493964 8,12.4914416 L8,12.4914416 Z M7.42857143,5.49714286 L8.57142857,5.49714286 L8.57142857,9.49714286 L7.42857143,9.49714286 L7.42857143,5.49714286 Z", id: "path-1" }))), h("slot", null)));
  }
};
OrionError.style = orionErrorCss;

const orionLabelCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-label--padding-right:8px;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-label{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-label, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-label__label{padding:var(--orion-space-md, 8px) var(--orion-label--padding-right) var(--orion-space-md, 8px) 0}.orion-label__label--disabled{color:var(--orion-color-text--disabled, #666)}.orion-label__label--error{color:var(--orion-color-error, #d50032)}.orion-label__conditional{color:var(--orion-color-text--disabled, #666);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);padding:var(--orion-space-md, 8px) 0 var(--orion-space-md, 8px) var(--orion-space-md, 8px)}@media screen and (min-width: 769px){.orion-label{font-size:var(--orion-font-size-label, 16px)}}";

const OrionLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "orion-label" }, 
    /* Disabling eslint for the next line because this component is meant to wrap a label around
     * a control which will be inserted into the slot
     */
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    h("label", { class: this.getCSSClass() }, h("slot", null)), this.hasConditionalSlot ? (h("span", { class: "orion-label__conditional" }, h("slot", { name: "orion-label-conditional" }))) : null));
  }
  get el() { return getElement(this); }
};
OrionLabel.style = orionLabelCss;

const orionLinkCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{--orion-link-color:var(--orion-color-activation, #6244bb);--orion-link-color--hover:var(--orion-color-hover-dark, #8972cc);--orion-link-color--active:var(--orion-color-active, #49328c);--orion-link-font-size:inherit;--orion-link-font-weight:var(--orion-font-weight-semi-bold, 600);--orion-link-line-height:inherit;--orion-link-font-style:normal;--orion-link-icon-top:0px;--orion-link-icon-left:0px}a,a:link,a:visited,a:focus,a:focus-visible{color:var(--orion-link-color);text-decoration:underline}a:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-link-color--hover)}a:active{color:var(--orion-link-color--active)}.orion-link{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-link-font-size);font-weight:var(--orion-link-font-weight);font-style:var(--orion-link-font-style);letter-spacing:0;line-height:var(--orion-link-line-height);margin:0;padding:0;outline:none;border:none;cursor:pointer}.orion-link--disabled{color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-link--disabled:hover{color:var(--orion-color-text--dimmed, #666)}a.orion-link--no-underline{text-decoration:none}.orion-link__icon{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-link-font-size);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.orion-link__icon .left{margin-left:var(--orion-space-sm, 4px);margin-right:var(--orion-space-md, 8px)}.orion-link__icon .right{margin-left:var(--orion-space-md, 8px);margin-right:var(--orion-space-sm, 4px)}.orion-link__icon .orion-icon:before{position:relative;top:var(--orion-link-icon-top);left:var(--orion-link-icon-left)}";

const OrionLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("a", Object.assign({}, (this.disabled ? null : { href: this.href }), { target: this.target, rel: this.rel, download: this.download, class: this.getCSSClass() }), this.iconName !== '' && this.iconLeft ? (h("span", { class: "orion-link__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName} left` }))) : null, h("slot", null), this.iconName !== '' && !this.iconLeft ? (h("span", { class: "orion-link__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName} right` }))) : null));
  }
};
OrionLink.style = orionLinkCss;

const orionListCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-list{box-sizing:border-box;position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;border:none}.orion-list::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background-color:var(--orion-gray-40, #999);transform:scaleY(0.5);z-index:var(--orion-z-base, 1)}";

const OrionList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ul", { class: "orion-list" }, h("slot", null)));
  }
};
OrionList.style = orionListCss;

const orionListItemCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{display:block;--orion-list-item-icon-color:var(--orion-info, #024);--orion-list-item-trailing-icon-color:var(--orion-info, #024);--orion-list-item-marker-color:var(--orion-info, #024);--orion-list-item-marker-size:var(--orion-space-xl, 16px);--orion-list-item--vertical-align:center}a,a:link,a:visited,a:focus,a:hover,a:active{text-decoration:none;outline:none;color:inherit}.orion-list-item{position:relative;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-list-item--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);min-height:var(--orion-touch-size, 60px);background-color:var(--orion-white, #fff);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);gap:var(--orion-space-md, 8px);border:none;transition:var(--orion-transition, 200ms ease-in-out)}.orion-list-item::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background-color:var(--orion-gray-40, #999);transform:scaleY(0.5)}.orion-list-item__marker-container{position:relative;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;height:var(--orion-line-height-normal, 24px);width:-moz-fit-content;width:fit-content;align-self:flex-start}.orion-list-item__marker{height:var(--orion-list-item-marker-size);width:var(--orion-list-item-marker-size);border-radius:50%;background-color:var(--orion-list-item-marker-color)}.orion-list-item__icon,.orion-list-item__trailing-icon{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-icon-size, 24px);width:var(--orion-line-height-normal, 24px);height:var(--orion-line-height-normal, 24px)}.orion-list-item__icon{color:var(--orion-list-item-icon-color);align-self:flex-start}.orion-list-item__trailing-icon{color:var(--orion-list-item-trailing-icon-color)}.orion-list-item__image{display:inline-flex;flex-direction:row;justify-content:center;align-items:center;align-content:center;align-self:flex-start}.orion-list-item__content{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-grow:1;flex-basis:0}.orion-list-item__heading{font-weight:600}.orion-list-item__subheading{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}.orion-list-item--disabled,.orion-list-item--disabled .orion-list-item__icon,.orion-list-item--disabled .orion-list-item__trailing-icon{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666)}.orion-list-item--disabled .orion-list-item__marker{background-color:var(--orion-color-text--dimmed, #666)}.orion-list-item--disabled .orion-list-item__image{opacity:0.5}.orion-list-item__link{display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-list-item--vertical-align);width:100%;margin:0;padding:0;gap:var(--orion-space-md, 8px)}.orion-list-item__link:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));outline-offset:4px;z-index:1;width:100%}@media screen and (min-width: 769px){.orion-list-item{min-height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-xl, 16px)}.orion-list-item__icon,.orion-list-item__trailing-icon{font-size:var(--orion-icon-size-sm, 16px)}}";

const OrionListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const component = (h(Fragment, null, this.hasMarker ? (h("span", { class: "orion-list-item__marker-container" }, h("span", { class: "orion-list-item__marker" }))) : null, this.hasIcon && this.iconName !== '' ? (h("span", { class: "orion-list-item__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasImageSlot ? (h("span", { class: "orion-list-item__image" }, h("slot", { name: "orion-list-item-image" }))) : null, h("span", { class: "orion-list-item__content" }, this.hasHeadingSlot ? (h("span", { class: "orion-list-item__heading" }, h("slot", { name: "orion-list-item-heading" }))) : null, this.hasSubHeadingSlot ? (h("span", { class: "orion-list-item__subheading" }, h("slot", { name: "orion-list-item-subheading" }))) : null, this.hasBodySlot ? (h("span", null, h("slot", { name: "orion-list-item-body" }))) : null, h("slot", null)), this.hasTrailingIcon && this.trailingIconName !== '' ? (h("span", { class: "orion-list-item__trailing-icon" }, h("i", { class: `orion-icon orion-icon-${this.trailingIconName}` }))) : null));
    // if href prop is set, wrap the list item content in an anchor tag, if not, just return the list item content
    return (h("li", { class: `orion-list-item ${this.disabled ? 'orion-list-item--disabled' : ''}` }, this.href ? (h("a", { href: this.href, class: "orion-list-item__link" }, component)) : (component)));
  }
  get el() { return getElement(this); }
};
OrionListItem.style = orionListItemCss;

const orionMessageCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:'icons';src:url('/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a') format('woff2'), url('/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a') format('woff')}i[class^='orion-icon-']:before,i[class*=' orion-icon-']:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:'\\f101'}.orion-icon-add_traveler:before{content:'\\f102'}.orion-icon-add:before{content:'\\f103'}.orion-icon-adult_beverage:before{content:'\\f104'}.orion-icon-alert:before{content:'\\f105'}.orion-icon-arrow_down:before{content:'\\f106'}.orion-icon-arrow_left:before{content:'\\f107'}.orion-icon-arrow_right:before{content:'\\f108'}.orion-icon-arrow_up:before{content:'\\f109'}.orion-icon-at:before{content:'\\f10a'}.orion-icon-baggage:before{content:'\\f10b'}.orion-icon-bar_chart:before{content:'\\f10c'}.orion-icon-beverage:before{content:'\\f10d'}.orion-icon-boarding_pass:before{content:'\\f10e'}.orion-icon-bundle:before{content:'\\f10f'}.orion-icon-calendar:before{content:'\\f110'}.orion-icon-cancel:before{content:'\\f111'}.orion-icon-caps_lock_off:before{content:'\\f112'}.orion-icon-caps_lock_on:before{content:'\\f113'}.orion-icon-caret_down:before{content:'\\f114'}.orion-icon-caret_up:before{content:'\\f115'}.orion-icon-cart:before{content:'\\f116'}.orion-icon-change:before{content:'\\f117'}.orion-icon-check_box:before{content:'\\f118'}.orion-icon-check_list:before{content:'\\f119'}.orion-icon-chevron_close:before{content:'\\f11a'}.orion-icon-chevron_left:before{content:'\\f11b'}.orion-icon-chevron_open:before{content:'\\f11c'}.orion-icon-chevron_right:before{content:'\\f11d'}.orion-icon-child:before{content:'\\f11e'}.orion-icon-clear:before{content:'\\f11f'}.orion-icon-clock:before{content:'\\f120'}.orion-icon-close:before{content:'\\f121'}.orion-icon-closet:before{content:'\\f122'}.orion-icon-cloudy:before{content:'\\f123'}.orion-icon-comp_upgrade:before{content:'\\f124'}.orion-icon-container_add:before{content:'\\f125'}.orion-icon-container_ready:before{content:'\\f126'}.orion-icon-container_remove:before{content:'\\f127'}.orion-icon-container:before{content:'\\f128'}.orion-icon-copy:before{content:'\\f129'}.orion-icon-credit_card:before{content:'\\f12a'}.orion-icon-detach:before{content:'\\f12b'}.orion-icon-directv:before{content:'\\f12c'}.orion-icon-download_excel:before{content:'\\f12d'}.orion-icon-download_file:before{content:'\\f12e'}.orion-icon-download_folder:before{content:'\\f12f'}.orion-icon-download_pdf:before{content:'\\f130'}.orion-icon-download:before{content:'\\f131'}.orion-icon-drag_btm_left:before{content:'\\f132'}.orion-icon-drag_btm_right:before{content:'\\f133'}.orion-icon-drag_top_left:before{content:'\\f134'}.orion-icon-drag_top_right:before{content:'\\f135'}.orion-icon-drag:before{content:'\\f136'}.orion-icon-edit:before{content:'\\f137'}.orion-icon-email:before{content:'\\f138'}.orion-icon-extra_legroom:before{content:'\\f139'}.orion-icon-farelock:before{content:'\\f13a'}.orion-icon-favorite_off:before{content:'\\f13b'}.orion-icon-favorite_on:before{content:'\\f13c'}.orion-icon-filter:before{content:'\\f13d'}.orion-icon-fog:before{content:'\\f13e'}.orion-icon-food:before{content:'\\f13f'}.orion-icon-freezing_rain:before{content:'\\f140'}.orion-icon-gift:before{content:'\\f141'}.orion-icon-global_reception:before{content:'\\f142'}.orion-icon-gsmc:before{content:'\\f143'}.orion-icon-gsme:before{content:'\\f144'}.orion-icon-headphones:before{content:'\\f145'}.orion-icon-home:before{content:'\\f146'}.orion-icon-hourglass:before{content:'\\f147'}.orion-icon-hurricane:before{content:'\\f148'}.orion-icon-in_seat_power:before{content:'\\f149'}.orion-icon-infant:before{content:'\\f14a'}.orion-icon-info:before{content:'\\f14b'}.orion-icon-kiosk:before{content:'\\f14c'}.orion-icon-language:before{content:'\\f14d'}.orion-icon-lap_infant:before{content:'\\f14e'}.orion-icon-lightning:before{content:'\\f14f'}.orion-icon-live_tv:before{content:'\\f150'}.orion-icon-location:before{content:'\\f151'}.orion-icon-locked:before{content:'\\f152'}.orion-icon-map:before{content:'\\f153'}.orion-icon-menu:before{content:'\\f154'}.orion-icon-message:before{content:'\\f155'}.orion-icon-microphone_off:before{content:'\\f156'}.orion-icon-microphone_on:before{content:'\\f157'}.orion-icon-mileageplus_gold:before{content:'\\f158'}.orion-icon-mileageplus_gs:before{content:'\\f159'}.orion-icon-mileageplus_k:before{content:'\\f15a'}.orion-icon-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-mileageplus_silver:before{content:'\\f15c'}.orion-icon-mileageplus:before{content:'\\f15d'}.orion-icon-minus:before{content:'\\f15e'}.orion-icon-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-more_menu_vertical:before{content:'\\f160'}.orion-icon-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-mostly_cloudy:before{content:'\\f162'}.orion-icon-mouse:before{content:'\\f163'}.orion-icon-movies:before{content:'\\f164'}.orion-icon-music:before{content:'\\f165'}.orion-icon-my_trips:before{content:'\\f166'}.orion-icon-notes:before{content:'\\f167'}.orion-icon-notifications:before{content:'\\f168'}.orion-icon-on_demand:before{content:'\\f169'}.orion-icon-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-partly_cloudy:before{content:'\\f16b'}.orion-icon-personal_device:before{content:'\\f16c'}.orion-icon-pet:before{content:'\\f16d'}.orion-icon-phone:before{content:'\\f16e'}.orion-icon-pin:before{content:'\\f16f'}.orion-icon-pinned:before{content:'\\f170'}.orion-icon-plane_arriving:before{content:'\\f171'}.orion-icon-plane_departing:before{content:'\\f172'}.orion-icon-plane:before{content:'\\f173'}.orion-icon-plus:before{content:'\\f174'}.orion-icon-premier_access:before{content:'\\f175'}.orion-icon-price:before{content:'\\f176'}.orion-icon-print:before{content:'\\f177'}.orion-icon-priority_desk:before{content:'\\f178'}.orion-icon-priority:before{content:'\\f179'}.orion-icon-question:before{content:'\\f17a'}.orion-icon-rain:before{content:'\\f17b'}.orion-icon-rating:before{content:'\\f17c'}.orion-icon-re_attach:before{content:'\\f17d'}.orion-icon-redeposit:before{content:'\\f17e'}.orion-icon-refresh:before{content:'\\f17f'}.orion-icon-register:before{content:'\\f180'}.orion-icon-restrooms:before{content:'\\f181'}.orion-icon-scan_bag:before{content:'\\f182'}.orion-icon-scan_container:before{content:'\\f183'}.orion-icon-scan:before{content:'\\f184'}.orion-icon-scattered_showers:before{content:'\\f185'}.orion-icon-scattered_snow:before{content:'\\f186'}.orion-icon-scattered_storms:before{content:'\\f187'}.orion-icon-search:before{content:'\\f188'}.orion-icon-seat:before{content:'\\f189'}.orion-icon-settings:before{content:'\\f18a'}.orion-icon-share:before{content:'\\f18b'}.orion-icon-showers_night:before{content:'\\f18c'}.orion-icon-ski_boot:before{content:'\\f18d'}.orion-icon-sleet:before{content:'\\f18e'}.orion-icon-snow_night:before{content:'\\f18f'}.orion-icon-snow:before{content:'\\f190'}.orion-icon-special_needs:before{content:'\\f191'}.orion-icon-sports_equipment:before{content:'\\f192'}.orion-icon-standby:before{content:'\\f193'}.orion-icon-storms_night:before{content:'\\f194'}.orion-icon-storms:before{content:'\\f195'}.orion-icon-stroller:before{content:'\\f196'}.orion-icon-subtract:before{content:'\\f197'}.orion-icon-success:before{content:'\\f198'}.orion-icon-sunny:before{content:'\\f199'}.orion-icon-teen:before{content:'\\f19a'}.orion-icon-trash:before{content:'\\f19b'}.orion-icon-traveler_connecting:before{content:'\\f19c'}.orion-icon-traveler_group:before{content:'\\f19d'}.orion-icon-traveler:before{content:'\\f19e'}.orion-icon-united_club:before{content:'\\f19f'}.orion-icon-unlocked:before{content:'\\f1a0'}.orion-icon-unpin:before{content:'\\f1a1'}.orion-icon-upgrade:before{content:'\\f1a2'}.orion-icon-user_default:before{content:'\\f1a3'}.orion-icon-vaccine:before{content:'\\f1a4'}.orion-icon-view_off:before{content:'\\f1a5'}.orion-icon-view_on:before{content:'\\f1a6'}.orion-icon-weight:before{content:'\\f1a7'}.orion-icon-wifi:before{content:'\\f1a8'}.orion-icon-windy:before{content:'\\f1a9'}.orion-icon-wintery_mix:before{content:'\\f1aa'}.orion-icon-wrench:before{content:'\\f1ab'}@font-face{font-family:'icons-sm';src:url('/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199') format('woff2'),\n    url('/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199') format('woff')}i[class^='orion-icon-sm-']:before,i[class*=' orion-icon-sm-']:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:'\\f101'}.orion-icon-sm-add_traveler:before{content:'\\f102'}.orion-icon-sm-add:before{content:'\\f103'}.orion-icon-sm-adult_beverage:before{content:'\\f104'}.orion-icon-sm-alert:before{content:'\\f105'}.orion-icon-sm-arrow_down:before{content:'\\f106'}.orion-icon-sm-arrow_left:before{content:'\\f107'}.orion-icon-sm-arrow_right:before{content:'\\f108'}.orion-icon-sm-arrow_up:before{content:'\\f109'}.orion-icon-sm-at:before{content:'\\f10a'}.orion-icon-sm-baggage:before{content:'\\f10b'}.orion-icon-sm-bar_chart:before{content:'\\f10c'}.orion-icon-sm-beverage:before{content:'\\f10d'}.orion-icon-sm-boarding_pass:before{content:'\\f10e'}.orion-icon-sm-bundle:before{content:'\\f10f'}.orion-icon-sm-calendar:before{content:'\\f110'}.orion-icon-sm-cancel:before{content:'\\f111'}.orion-icon-sm-caps_lock_off:before{content:'\\f112'}.orion-icon-sm-caps_lock_on:before{content:'\\f113'}.orion-icon-sm-caret_down:before{content:'\\f114'}.orion-icon-sm-caret_up:before{content:'\\f115'}.orion-icon-sm-cart:before{content:'\\f116'}.orion-icon-sm-change:before{content:'\\f117'}.orion-icon-sm-check_box:before{content:'\\f118'}.orion-icon-sm-check_list:before{content:'\\f119'}.orion-icon-sm-chevron_close:before{content:'\\f11a'}.orion-icon-sm-chevron_left:before{content:'\\f11b'}.orion-icon-sm-chevron_open:before{content:'\\f11c'}.orion-icon-sm-chevron_right:before{content:'\\f11d'}.orion-icon-sm-child:before{content:'\\f11e'}.orion-icon-sm-clear:before{content:'\\f11f'}.orion-icon-sm-clock:before{content:'\\f120'}.orion-icon-sm-close:before{content:'\\f121'}.orion-icon-sm-closet:before{content:'\\f122'}.orion-icon-sm-cloudy:before{content:'\\f123'}.orion-icon-sm-comp_upgrade:before{content:'\\f124'}.orion-icon-sm-container_add:before{content:'\\f125'}.orion-icon-sm-container_ready:before{content:'\\f126'}.orion-icon-sm-container_remove:before{content:'\\f127'}.orion-icon-sm-container:before{content:'\\f128'}.orion-icon-sm-copy:before{content:'\\f129'}.orion-icon-sm-credit_card:before{content:'\\f12a'}.orion-icon-sm-detach:before{content:'\\f12b'}.orion-icon-sm-directv:before{content:'\\f12c'}.orion-icon-sm-download_excel:before{content:'\\f12d'}.orion-icon-sm-download_file:before{content:'\\f12e'}.orion-icon-sm-download_folder:before{content:'\\f12f'}.orion-icon-sm-download_pdf:before{content:'\\f130'}.orion-icon-sm-download:before{content:'\\f131'}.orion-icon-sm-drag_btm_left:before{content:'\\f132'}.orion-icon-sm-drag_btm_right:before{content:'\\f133'}.orion-icon-sm-drag_top_left:before{content:'\\f134'}.orion-icon-sm-drag_top_right:before{content:'\\f135'}.orion-icon-sm-drag:before{content:'\\f136'}.orion-icon-sm-edit:before{content:'\\f137'}.orion-icon-sm-email:before{content:'\\f138'}.orion-icon-sm-extra_legroom:before{content:'\\f139'}.orion-icon-sm-farelock:before{content:'\\f13a'}.orion-icon-sm-favorite_off:before{content:'\\f13b'}.orion-icon-sm-favorite_on:before{content:'\\f13c'}.orion-icon-sm-filter:before{content:'\\f13d'}.orion-icon-sm-fog:before{content:'\\f13e'}.orion-icon-sm-food:before{content:'\\f13f'}.orion-icon-sm-freezing_rain:before{content:'\\f140'}.orion-icon-sm-gift:before{content:'\\f141'}.orion-icon-sm-global_reception:before{content:'\\f142'}.orion-icon-sm-gsmc:before{content:'\\f143'}.orion-icon-sm-gsme:before{content:'\\f144'}.orion-icon-sm-headphones:before{content:'\\f145'}.orion-icon-sm-home:before{content:'\\f146'}.orion-icon-sm-hourglass:before{content:'\\f147'}.orion-icon-sm-hurricane:before{content:'\\f148'}.orion-icon-sm-in_seat_power:before{content:'\\f149'}.orion-icon-sm-infant:before{content:'\\f14a'}.orion-icon-sm-info:before{content:'\\f14b'}.orion-icon-sm-kiosk:before{content:'\\f14c'}.orion-icon-sm-language:before{content:'\\f14d'}.orion-icon-sm-lap_infant:before{content:'\\f14e'}.orion-icon-sm-lightning:before{content:'\\f14f'}.orion-icon-sm-live_tv:before{content:'\\f150'}.orion-icon-sm-location:before{content:'\\f151'}.orion-icon-sm-locked:before{content:'\\f152'}.orion-icon-sm-map:before{content:'\\f153'}.orion-icon-sm-menu:before{content:'\\f154'}.orion-icon-sm-message:before{content:'\\f155'}.orion-icon-sm-microphone_off:before{content:'\\f156'}.orion-icon-sm-microphone_on:before{content:'\\f157'}.orion-icon-sm-mileageplus_gold:before{content:'\\f158'}.orion-icon-sm-mileageplus_gs:before{content:'\\f159'}.orion-icon-sm-mileageplus_k:before{content:'\\f15a'}.orion-icon-sm-mileageplus_platinum:before{content:'\\f15b'}.orion-icon-sm-mileageplus_silver:before{content:'\\f15c'}.orion-icon-sm-mileageplus:before{content:'\\f15d'}.orion-icon-sm-minus:before{content:'\\f15e'}.orion-icon-sm-more_menu_horizontal:before{content:'\\f15f'}.orion-icon-sm-more_menu_vertical:before{content:'\\f160'}.orion-icon-sm-mostly_cloudy_night:before{content:'\\f161'}.orion-icon-sm-mostly_cloudy:before{content:'\\f162'}.orion-icon-sm-mouse:before{content:'\\f163'}.orion-icon-sm-movies:before{content:'\\f164'}.orion-icon-sm-music:before{content:'\\f165'}.orion-icon-sm-my_trips:before{content:'\\f166'}.orion-icon-sm-notes:before{content:'\\f167'}.orion-icon-sm-notifications:before{content:'\\f168'}.orion-icon-sm-on_demand:before{content:'\\f169'}.orion-icon-sm-partly_cloudy_night:before{content:'\\f16a'}.orion-icon-sm-partly_cloudy:before{content:'\\f16b'}.orion-icon-sm-personal_device:before{content:'\\f16c'}.orion-icon-sm-pet:before{content:'\\f16d'}.orion-icon-sm-phone:before{content:'\\f16e'}.orion-icon-sm-pin:before{content:'\\f16f'}.orion-icon-sm-pinned:before{content:'\\f170'}.orion-icon-sm-plane_arriving:before{content:'\\f171'}.orion-icon-sm-plane_departing:before{content:'\\f172'}.orion-icon-sm-plane:before{content:'\\f173'}.orion-icon-sm-plus:before{content:'\\f174'}.orion-icon-sm-premier_access:before{content:'\\f175'}.orion-icon-sm-price:before{content:'\\f176'}.orion-icon-sm-print:before{content:'\\f177'}.orion-icon-sm-priority_desk:before{content:'\\f178'}.orion-icon-sm-priority:before{content:'\\f179'}.orion-icon-sm-question:before{content:'\\f17a'}.orion-icon-sm-rain:before{content:'\\f17b'}.orion-icon-sm-rating:before{content:'\\f17c'}.orion-icon-sm-re_attach:before{content:'\\f17d'}.orion-icon-sm-redeposit:before{content:'\\f17e'}.orion-icon-sm-refresh:before{content:'\\f17f'}.orion-icon-sm-register:before{content:'\\f180'}.orion-icon-sm-restrooms:before{content:'\\f181'}.orion-icon-sm-scan_bag:before{content:'\\f182'}.orion-icon-sm-scan_container:before{content:'\\f183'}.orion-icon-sm-scan:before{content:'\\f184'}.orion-icon-sm-scattered_showers:before{content:'\\f185'}.orion-icon-sm-scattered_snow:before{content:'\\f186'}.orion-icon-sm-scattered_storms:before{content:'\\f187'}.orion-icon-sm-search:before{content:'\\f188'}.orion-icon-sm-seat:before{content:'\\f189'}.orion-icon-sm-settings:before{content:'\\f18a'}.orion-icon-sm-share:before{content:'\\f18b'}.orion-icon-sm-showers_night:before{content:'\\f18c'}.orion-icon-sm-ski_boot:before{content:'\\f18d'}.orion-icon-sm-sleet:before{content:'\\f18e'}.orion-icon-sm-snow_night:before{content:'\\f18f'}.orion-icon-sm-snow:before{content:'\\f190'}.orion-icon-sm-special_needs:before{content:'\\f191'}.orion-icon-sm-sports_equipment:before{content:'\\f192'}.orion-icon-sm-standby:before{content:'\\f193'}.orion-icon-sm-storms_night:before{content:'\\f194'}.orion-icon-sm-storms:before{content:'\\f195'}.orion-icon-sm-stroller:before{content:'\\f196'}.orion-icon-sm-subtract:before{content:'\\f197'}.orion-icon-sm-success:before{content:'\\f198'}.orion-icon-sm-sunny:before{content:'\\f199'}.orion-icon-sm-teen:before{content:'\\f19a'}.orion-icon-sm-trash:before{content:'\\f19b'}.orion-icon-sm-traveler_connecting:before{content:'\\f19c'}.orion-icon-sm-traveler_group:before{content:'\\f19d'}.orion-icon-sm-traveler:before{content:'\\f19e'}.orion-icon-sm-united_club:before{content:'\\f19f'}.orion-icon-sm-unlocked:before{content:'\\f1a0'}.orion-icon-sm-unpin:before{content:'\\f1a1'}.orion-icon-sm-upgrade:before{content:'\\f1a2'}.orion-icon-sm-user_default:before{content:'\\f1a3'}.orion-icon-sm-vaccine:before{content:'\\f1a4'}.orion-icon-sm-view_off:before{content:'\\f1a5'}.orion-icon-sm-view_on:before{content:'\\f1a6'}.orion-icon-sm-weight:before{content:'\\f1a7'}.orion-icon-sm-wifi:before{content:'\\f1a8'}.orion-icon-sm-windy:before{content:'\\f1a9'}.orion-icon-sm-wintery_mix:before{content:'\\f1aa'}.orion-icon-sm-wrench:before{content:'\\f1ab'}:host{display:block}:host(:not([is-open])){display:none}.orion-message{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);width:100%;border:var(--orion-border-standard, 1px solid);border-left:var(--orion-border-thicker, 4px solid);border-radius:var(--orion-border-radius, 4px);box-sizing:border-box;padding:var(--orion-space-xl, 16px)}.orion-message--high{border-color:var(--orion-red, #d50032)}.orion-message--medium{border-color:var(--orion-orange, #f46335)}.orion-message--low{border-color:var(--orion-yellow, #edb72b)}.orion-message--success{border-color:var(--orion-green, #208500)}.orion-message--info{border-color:var(--orion-rhapsody-blue, #002244)}.orion-message__header{margin-top:-4px;margin-bottom:var(--orion-space-xs, 4px);padding-right:28px}.orion-message__priority-icon{position:relative;display:inline-block;top:-1px;margin-right:var(--orion-space-md, 8px)}.orion-message__heading{position:relative;display:inline;top:-4px;margin:0;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px);font-weight:var(--orion-font-weight-semi-bold, 600)}.orion-message__heading+::slotted(*){display:block;margin:0}.orion-message.small{padding:14px var(--orion-space-xl, 16px)}.orion-message.small .orion-message__priority-icon{top:2px;margin-right:3px}.orion-message.is-open{display:inline-block}.orion-message--success-overlay{display:flex;visibility:hidden;opacity:0;background-color:var(--orion-green, #208500);color:var(--orion-white, #fff);position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-radius:0;z-index:var(--orion-z-extreme, 9999);border:none;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;gap:var(--orion-space-md, 8px);transition:var(--orion-transition, 200ms ease-in-out);padding:var(--orion-space-xxl, 18px)}.orion-message--success-overlay.is-open{display:flex;visibility:visible;opacity:1;transition:var(--orion-transition, 200ms ease-in-out)}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark{width:120px;height:120px;border-radius:50%;display:block;stroke-width:5;stroke:var(--orion-green, #208500);stroke-miterlimit:10;margin:10% auto;box-shadow:inset 0px 0px 0px var(--orion-green, #208500);animation:fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:2;stroke-miterlimit:10;stroke:var(--orion-white, #fff);fill:none;animation:stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards}.orion-message--success-overlay.is-open .orion-message__success-animation .checkmark__check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards}@keyframes stroke{100%{stroke-dashoffset:0}}@keyframes scale{0%,100%{transform:none}50%{transform:scale3d(1.1, 1.1, 1)}}@keyframes fill{100%{box-shadow:inset 0px 0px 0px 60px var(--orion-white, #fff)}}.orion-message--success-overlay .orion-message__priority-icon{margin:0}.orion-message--success-overlay .orion-message__heading{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:48px;line-height:64px;margin-bottom:var(--orion-space-xs, 4px)}.orion-message--success-overlay ::slotted(*){font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title1, 32px) !important;line-height:var(--orion-line-height-xl, 40px) !important;text-align:center}.orion-message--success-overlay .orion-message__footer{position:absolute;bottom:0;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-title5, 16px);line-height:var(--orion-line-height-md, 24px);margin-bottom:var(--orion-line-height-normal, 24px)}.orion-message .white{color:var(--orion-white, #fff)}.orion-message .black{color:var(--orion-black, #000)}.orion-message .red{color:var(--orion-alert-red, #d50032)}.orion-message .orange{color:var(--orion-alert-orange, #f46335)}.orion-message .yellow{color:var(--orion-alert-yellow, #edb72b)}.orion-message .green{color:var(--orion-alert-green, #208500)}.orion-message .rhapsody-blue{color:var(--orion-rhapsody-blue, #002244)}::slotted(*){display:inline}:host([dismissible]) .orion-message{position:relative;border-radius:var(--orion-border-radius-md, 8px);border:none;box-shadow:4px 4px 8px 0 rgba(0, 0, 0, 0.5);min-height:52px;background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--high{background-color:var(--orion-red, #d50032);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--medium{background-color:var(--orion-orange, #f46335);color:var(--orion-black, #000)}:host([dismissible]) .orion-message--low{background-color:var(--orion-yellow, #edb72b);color:var(--orion-black, #000)}:host([dismissible]) .orion-message--success{background-color:var(--orion-green, #208500);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message--info{background-color:var(--orion-rhapsody-blue, #002244);color:var(--orion-white, #fff)}:host([dismissible]) .orion-message__close-btn{float:right;padding:3px;margin-top:-1px;margin-right:-2px;margin-left:5px;background-color:transparent;border:none;cursor:pointer;font-size:20px;}:host([dismissible]) .orion-message__close-btn:focus{outline:var(--orion-border-thicker, 4px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}:host([dismissible]) .orion-message__close-btn:focus:not(:focus-visible){outline:none}:host([dismissible]) .orion-message__close-btn:focus-visible{outline:var(--orion-border-thicker, 4px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}";

const OrionMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    h("div", { class: `orion-message ${variantClass}  ${!this.heading ? 'small' : ''} ${this.isOpen ? 'is-open' : ''}`, role: "message", "aria-hidden": this.isOpen ? 'false' : 'true', onClick: this._handleOverlayClick.bind(this) }, this.hasIcon && this.variant !== 'success-overlay' ? h("i", { style: inlineCSSFontSize, class: `orion-message__priority-icon orion-icon-${iconName} ${iconColor}` }) : '', this.variant === 'success-overlay' ? (h("div", { class: "orion-message__success-animation", style: inlineCSS, "aria-hidden": "true" }, h("svg", { class: "checkmark", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 52 52" }, h("circle", { class: "checkmark__circle", cx: "26", cy: "26", r: "25", fill: "none" }), h("path", { class: "checkmark__check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" })))) : (''), this.dismissible ? (h("button", { type: "button", class: "orion-message__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("i", { class: `orion-icon orion-icon-close ${iconColor}` }))) : (''), this.heading ? h("h2", { class: "orion-message__heading" }, this.heading) : '', h("slot", null), this.variant === 'success-overlay' ? h("p", { class: "orion-message__footer" }, "Tap to close") : ''));
    return h(Host, null, component);
  }
  get el() { return getElement(this); }
};
OrionMessage.style = orionMessageCss;

const orionModalCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:\"icons\";src:url(\"/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a\") format(\"woff2\"), url(\"/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a\") format(\"woff\")}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}@font-face{font-family:\"icons-sm\";src:url(\"/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199\") format(\"woff2\"), url(\"/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199\") format(\"woff\")}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-modal-max-height-mobile:480px;--orion-modal-max-height-desktop:50vh;--orion-modal-height-mobile:auto;--orion-modal-height-desktop:auto}button{border:none;outline:none;margin:0;padding:0}.orion-modal__wrapper{position:fixed;z-index:var(--orion-z-very-high, 5000);top:0;bottom:0;left:0;right:0;width:100%;height:100%;opacity:0;visibility:hidden}.orion-modal__scrim{background-color:rgba(0, 0, 0, 0.2);width:100%;height:100%;position:absolute;opacity:0}.orion-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, 100%);display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;border:none;border-radius:var(--orion-border-radius, 4px);box-sizing:border-box;box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-gray-40, #999), 4px 4px 8px rgba(0, 0, 0, 0.5);background-color:var(--orion-color-background, #fff);padding:var(--orion-space-xl, 16px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);width:368px;min-height:140px;height:var(--orion-modal-height-mobile);max-height:var(--orion-modal-max-height-mobile);opacity:0}.orion-modal__header{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);width:100%;position:relative}.orion-modal__icon{display:inline-flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;font-size:var(--orion-line-height-lg, 32px);width:var(--orion-line-height-lg, 32px);height:var(--orion-line-height-lg, 32px)}.orion-modal__title{align-self:flex-start;text-align:left;flex-wrap:wrap;flex-grow:1;font-size:var(--orion-font-size-title3, 24px);font-weight:var(--orion-font-weight-semi-bold, 600);letter-spacing:0;line-height:var(--orion-line-height-lg, 32px);padding:0;margin:0 var(--orion-space-xxxl, 32px) var(--orion-space-xl, 16px) 0}.orion-modal__title--centered{text-align:center;margin-left:var(--orion-space-xxxl, 32px)}.orion-modal__title--centered-with-icon{text-align:center;margin-left:0}.orion-modal__body{display:flex;flex-direction:column;justify-content:flex-start;flex-grow:1;width:100%;font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0 0 var(--orion-space-xl, 16px) 0;padding-right:2px;overflow-x:hidden;overflow-y:auto;min-height:64px}.orion-modal__footer{display:flex;flex-direction:column;justify-content:flex-start;width:100%;gap:var(--orion-space-xl, 16px)}.orion-modal__footer-content{display:flex;justify-content:space-between;align-items:center;gap:var(--orion-space-xl, 16px);gap:20px;width:100%;border-top:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);padding-top:var(--orion-space-xl, 16px)}.orion-modal__footer-button-row{display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:center;gap:var(--orion-space-xl, 16px);width:100%}.orion-modal__footer-button-row>*{flex:1}.orion-modal__footer-buttons{display:flex;justify-content:flex-end;gap:var(--orion-space-xl, 16px);width:100%}.orion-modal__footer-buttons>*{flex:1}.orion-modal__footer-left{justify-content:flex-start;flex-grow:1;flex-basis:0}.orion-modal__footer-center{justify-content:center}.orion-modal__footer-right{justify-content:flex-end;flex-grow:1;flex-basis:0}.orion-modal__close-icon{position:absolute;top:0;right:0;cursor:pointer;display:flex;flex-direction:column;justify-content:center;align-items:center;width:24px;height:24px;border:none;background-color:transparent;}.orion-modal__close-icon svg{fill:var(--orion-gray-60, #666)}.orion-modal__close-icon:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px)}.orion-modal__close-icon:focus:not(:focus-visible){box-shadow:none}.orion-modal__close-icon:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px)}.is-open{opacity:1;visibility:visible}.orion-modal__wrapper.is-open .orion-modal__scrim{transition:var(--orion-transition--slow, 400ms ease-in-out);opacity:1}.orion-modal__wrapper.is-open .orion-modal{transition:var(--orion-transition--slow, 400ms ease-in-out);opacity:1;transform:translate(-50%, -50%)}.orion-modal--fullscreen{width:100vw;max-width:100%;height:100vh;max-height:100%}::slotted([slot=orion-modal-footer-left]){display:flex;flex-direction:row;justify-content:flex-start}::slotted([slot=orion-modal-footer-center]){display:flex;flex-direction:row;justify-content:center}::slotted([slot=orion-modal-footer-right]){display:flex;flex-direction:row;justify-content:flex-end}@media screen and (min-width: 769px){.orion-modal{min-width:368px;width:auto;max-width:50vw;min-height:216px;height:var(--orion-modal-height-desktop);max-height:var(--orion-modal-max-height-desktop)}.orion-modal__icon{font-size:var(--orion-line-height-normal, 24px);width:var(--orion-line-height-normal, 24px);height:var(--orion-line-height-normal, 24px)}.orion-modal__title{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-normal, 24px)}.orion-modal__body{font-size:var(--orion-modal__body-font-size, 16px);margin-bottom:var(--orion-space-xxxl, 32px)}.orion-modal__footer-button-row{display:flex;flex-direction:row}.orion-modal__footer-buttons>*{flex:0;min-width:146px}.orion-modal__close-icon{width:20px;height:20px}.orion-modal--fullscreen{width:80vw;max-width:80%;height:80vh;max-height:80%}}";

const OrionModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.orionModalFooterBtnClicked = createEvent(this, "orionModalFooterBtnClicked", 7);
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
    this.isTitleCentered = false;
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
  render() {
    return (h("div", { id: this.uid, class: `orion-modal__wrapper 
          ${this.isOpen ? 'is-open' : ''}` }, h("div", { class: "orion-modal__scrim" }), h("div", { class: `orion-modal ${this.isFullscreen ? 'orion-modal--fullscreen' : ''}` }, h("div", { class: "orion-modal__header" }, this.hasIcon && this.iconName !== '' ? (h("span", { class: "orion-modal__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasTitleSlot ? (h("span", { class: this.getHeaderCSSClass() }, h("slot", { name: "orion-modal-title" }))) : (''), this.hasCancelIcon ? (h("button", { type: "button", "aria-label": "Close", class: "orion-modal__close-icon", onClick: this._handleClose.bind(this) }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" })))) : ('')), this.hasBodySlot ? (h("div", { class: "orion-modal__body" }, h("slot", { name: "orion-modal-body" }))) : (''), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-modal__footer" }, this.hasFooterSlot ? (h("div", { class: "orion-modal__footer-content" }, h("span", { class: "orion-modal__footer-left" }, h("slot", { name: "orion-modal-footer-left" })), h("span", { class: "orion-modal__footer-center" }, h("slot", { name: "orion-modal-footer-center" })), h("span", { class: "orion-modal__footer-right" }, h("slot", { name: "orion-modal-footer-right" })))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-modal__footer-button-row" }, this.hasButtonRowSlot ? (h("span", null, h("slot", { name: "orion-modal-button-row" }))) : (''), h("div", { class: "orion-modal__footer-buttons" }, this.hasSecondaryButton ? (h("orion-button", { class: "orion-modal__btn-secondary", variant: "secondary", onClick: () => this.onFooterBtnClick('secondary') }, h("slot", { name: "orion-modal-secondary-button" }))) : (''), this.hasPrimaryButton ? (h("orion-button", { class: "orion-modal__btn-primary", variant: "primary", onClick: () => this.onFooterBtnClick('primary') }, h("slot", { name: "orion-modal-primary-button" }))) : ('')))) : (''))) : (''))));
  }
  get el() { return getElement(this); }
};
OrionModal.style = orionModalCss;

const orionNoteCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-note{width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text--disabled, #666);font-size:var(--orion-font-size-small, 13px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-sm, 16px);margin:0;padding:var(--orion-space-md, 8px) 0 0 0}";

const OrionNote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "orion-note" }, h("slot", null)));
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

const orionPopoverCss = "orion-popover{}orion-popover *,orion-popover *::before,orion-popover *::after{box-sizing:border-box}orion-popover html,orion-popover body,orion-popover p,orion-popover ol,orion-popover ul,orion-popover li,orion-popover dl,orion-popover dt,orion-popover dd,orion-popover blockquote,orion-popover figure,orion-popover fieldset,orion-popover legend,orion-popover textarea,orion-popover pre,orion-popover iframe,orion-popover hr,orion-popover h1,orion-popover h2,orion-popover h3,orion-popover h4,orion-popover h5,orion-popover h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}orion-popover h1,orion-popover h2,orion-popover h3,orion-popover h4,orion-popover h5,orion-popover h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}orion-popover ul{list-style:none}orion-popover button,orion-popover input,orion-popover select,orion-popover textarea{margin:0}orion-popover img,orion-popover embed,orion-popover iframe,orion-popover object,orion-popover audio,orion-popover video{max-width:100%;height:auto}orion-popover iframe{border:0}orion-popover table{border-spacing:0;border-collapse:collapse}orion-popover td,orion-popover th{padding:0;text-align:left}orion-popover html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}orion-popover body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}orion-popover *::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-popover *::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-popover a,orion-popover a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-popover a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-popover a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-popover a:focus:not(:focus-visible){outline:none}orion-popover a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-popover a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}orion-popover a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}orion-popover a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}orion-popover a,orion-popover button{cursor:pointer}orion-popover h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}orion-popover h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}orion-popover h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}orion-popover h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}orion-popover h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-popover label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover p,orion-popover li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}orion-popover small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-popover sup,orion-popover sub{vertical-align:baseline;position:relative;top:-0.4em}orion-popover sub{top:0.4em}orion-popover strong,orion-popover b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){orion-popover body{font-size:var(--orion-font-size-body, 16px)}orion-popover h5{font-size:var(--orion-font-size-title5, 16px)}orion-popover label{font-size:var(--orion-font-size-label, 16px)}orion-popover p,orion-popover li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){orion-popover a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}.orion-popover__trigger:focus,.orion-popover__close-icon:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-popover__trigger:focus:not(:focus-visible),.orion-popover__close-icon:focus{outline:none}.orion-popover__trigger:focus-visible,.orion-popover__close-icon:focus{color:var(--orion-color-activation, #6244bb);outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-popover__content{display:none;background-color:var(--orion-white, #fff);color:var(--orion-gray-80, #333);border-radius:var(--orion-border-radius, 4px);max-width:640px;min-width:100px;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);border:var(--orion-border-standard, 1px solid) var(--orion-gray-20, #ccc);box-shadow:0 6px 12px 0 rgba(0, 0, 0, 0.25);z-index:var(--orion-z-mid, 100)}.orion-popover__content[data-show]{display:block}.orion-popover__content[data-popper-placement^='left']{margin-right:6px !important}.orion-popover__content[data-popper-placement^='right']{margin-left:6px !important}.arrow,.arrow::before,.arrow::after{position:absolute;width:8px;height:12px;background:inherit}.arrow{visibility:hidden;background:transparent}.arrow::before,.arrow::after{visibility:visible;content:'';position:absolute;display:block;content:'';border-color:transparent;border-style:solid}.orion-popover__content[data-popper-placement^='top']>.arrow{bottom:-13px}.orion-popover__content[data-popper-placement^='top']>.arrow:before{top:0px;left:-1px;border-top-color:var(--orion-gray-20, #ccc);border-width:8px 6px 0 6px}.orion-popover__content[data-popper-placement^='top']>.arrow:after{top:-1px;left:-1px;border-top-color:var(--orion-white, #fff);border-width:8px 6px 0 6px}.orion-popover__content[data-popper-placement^='bottom']>.arrow{top:-12px}.orion-popover__content[data-popper-placement^='bottom']>.arrow:before{bottom:1px;left:-2px;border-bottom-color:var(--orion-gray-20, #ccc);border-width:0 6px 8px 6px}.orion-popover__content[data-popper-placement^='bottom']>.arrow:after{bottom:0;left:-2px;border-bottom-color:var(--orion-white, #fff);border-width:0 6px 8px 6px}.orion-popover__content[data-popper-placement^='left']>.arrow{right:-8px}.orion-popover__content[data-popper-placement^='left']>.arrow:before{right:-1px;border-left-color:var(--orion-gray-20, #ccc);border-width:6px 0 6px 8px;width:9px}.orion-popover__content[data-popper-placement^='left']>.arrow:after{right:1px;border-left-color:var(--orion-white, #fff);border-width:6px 0 6px 8px}.orion-popover__content[data-popper-placement^='right']>.arrow{left:-9px}.orion-popover__content[data-popper-placement^='right']>.arrow:before{left:0px;border-right-color:var(--orion-gray-20, #ccc);border-width:6px 8px 6px 0}.orion-popover__content[data-popper-placement^='right']>.arrow:after{left:1px;border-right-color:var(--orion-white, #fff);border-width:6px 8px 6px 0}.orion-popover__wrapper,.orion-popover__trigger{display:inline-block;position:relative}.orion-popover__trigger{-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-text-decoration-style:solid;text-decoration-style:solid;text-decoration-thickness:1px;color:var(--orion-color-activation, #6244bb);text-underline-offset:0.2em;cursor:pointer}.orion-popover__title{display:flex;justify-content:space-between;align-items:flex-start;padding:12px 16px;border-bottom:var(--orion-border-standard, 1px solid) var(--orion-gray-20, #ccc);font-size:var(--orion-font-size-title5-desktop, 16px);font-weight:var(----orion-font-weight-semi-bold, 600)}.orion-popover__close-icon{cursor:pointer;margin-left:16px;margin-top:2px;margin-right:-2px;background-color:transparent;border:none;padding:15px 15px 14px;margin:-11px -16px -12px 0px}.orion-popover__close-icon svg{height:16px;width:16px}.orion-popover__close-icon svg{fill:var(--orion-modal__close-icon-color-text, #666)}.orion-popover__body{padding:8px 12px}.orion-popover__title+.orion-popover__body{padding:16px}@media screen and (max-width: 769px){.orion-popover__content{max-width:320px}}";

const OrionPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    h("div", { class: "orion-popover__wrapper", ref: el => {
        this.wrapper = el;
      }, onFocusout: this._onFocusOut.bind(this), onKeyDown: this._onKeyDown.bind(this) }, h("div", { ref: el => {
        this.trigger = el;
      }, class: "orion-popover__trigger", "aria-describedby": this.uid, "aria-expanded": "false", role: "button", tabIndex: 0, onMouseDown: this._triggerClick.bind(this), onFocus: this._showPopover.bind(this) }, h("slot", null)), h("div", { class: "orion-popover__content", ref: el => {
        this.popover = el;
      }, "aria-hidden": "true", role: "region", style: inlineCSS, onMouseDown: this._setClickFlag.bind(this) }, h("div", { class: "arrow", "data-popper-arrow": true }), this.hasTitleSlot ? (h("div", { class: "orion-popover__title" }, h("slot", { name: "orion-popover-title" }), h("button", { type: "button", class: "orion-popover__close-icon", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" }))))) : (''), h("div", { id: this.uid, class: "orion-popover__body" }, h("slot", { name: "orion-popover-body" })))));
  }
  get el() { return getElement(this); }
};
OrionPopover.style = orionPopoverCss;

const orionProgressMeterCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-progress-meter__color-progress:var(--orion-info, #002244);--orion-progress-meter__color-circle-label:var(--orion-color-background, #fff);--orion-progress-meter__color-progess-background:var(--orion-gray-10, #e6e6e6);--orion-progress-meter__color-success:var(--orion-green, #208500);--orion-progress-meter__color-warn:var(--orion-yellow, #edb72b);--orion-progress-meter__color-error:var(--orion-red, #d50032);display:block}*::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-progress-meter{display:flex;align-items:center;justify-content:center;width:100%;height:var(--orion-space-md, 8px);border-radius:var(--orion-space-xl, 16px);position:relative}.orion-progress-meter--circle{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%}.orion-progress-meter--circle.orion-progress-meter--small{width:56px;height:56px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter--circle__overlay{width:40px;height:40px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter__segment--circle{width:56px}.orion-progress-meter--circle.orion-progress-meter--medium{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter--circle__overlay{width:64px;height:64px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter__segment--circle{width:88px}.orion-progress-meter--circle.orion-progress-meter--large{width:120px;height:120px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay .orion-progress-meter--circle__value{font-size:16px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter__segment--circle{width:120px}.orion-progress-meter--circle__overlay{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;z-index:var(--orion-z-base, 1)}.orion-progress-meter--circle__value{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:13px;font-weight:var(--orion-font-weight-bold, 700);letter-spacing:0;z-index:var(--orion-z-base, 1)}.orion-progress-meter__segment{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:var(--orion-space-md, 8px)}.orion-progress-meter__segment:first-child{border-top-left-radius:var(--orion-space-xl, 16px);border-bottom-left-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment:last-child{border-top-right-radius:var(--orion-space-xl, 16px);border-bottom-right-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment--circle{position:absolute;width:48px;height:2px}";

const OrionProgressMeter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    const component = (h("div", null, this.isCircle ? (h("div", { class: `orion-progress-meter--circle ${this.size ? `orion-progress-meter--${this.size}` : ''}`, style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => (h("div", { class: "orion-progress-meter__segment--circle", style: Object.assign({ transform: `rotate(${(i * 360) / this.segments - 90}deg` }, this.getCircleSegmentCSSStyle()) })))
      : '', h("span", { class: "orion-progress-meter--circle__overlay", style: { backgroundColor: `var(--orion-progress-meter__color-circle-label)` } }, this.showValue ? h("span", { class: "orion-progress-meter--circle__value" }, this.value) : ''))) : (h("div", { class: "orion-progress-meter", style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => h("div", { class: "orion-progress-meter__segment", style: Object.assign({ right: `${(i * 100) / this.segments}%` }, this.getSegmentCSSStyle()) }))
      : ''))));
    return h(Host, null, component);
  }
};
OrionProgressMeter.style = orionProgressMeterCss;

const orionRadioButtonCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-radio--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-radio{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-radio__label{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:var(--orion-radio--vertical-align);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px) var(--orion-space-xxl, 18px) 0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-radio__label--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-radio__input{position:relative;display:flex;justify-content:center;align-items:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:50%;background-color:var(--orion-color-background, #fff);margin-right:var(--orion-space-md, 8px)}.orion-radio__label input~.orion-radio__input{transition:var(--orion-transition, 200ms ease-in-out)}.orion-radio__label input:checked~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background, #fff)}.orion-radio__input:after{content:'';position:absolute;display:none}.orion-radio__label input:checked~.orion-radio__input:after{display:block}.orion-radio__label .orion-radio__input:after{top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:var(--orion-color-activation, #6244bb)}@supports selector(:focus-visible){:host([focusable]):host-context(orion-radio-button-group:focus-visible) .orion-radio__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thick, 0 0 0 3px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n      var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:50%;transition:var(--orion-transition, 200ms ease-in-out)}}@supports not selector(:focus-visible){:host([focusable]):host-context(orion-radio-button-group:focus) .orion-radio__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thick, 0 0 0 3px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n      var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:50%;transition:var(--orion-transition, 200ms ease-in-out)}}.orion-radio__label input:disabled~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-gray-40, #999)}.orion-radio__label input:checked:disabled~.orion-radio__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-gray-10, #e6e6e6)}.orion-radio__label input:checked:disabled~.orion-radio__input:after{background-color:var(--orion-gray-40, #999)}@media screen and (min-width: 769px){.orion-radio__label{font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-md, 8px) var(--orion-space-md, 8px) 0}.orion-radio__input{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);margin-top:2px}.orion-radio__label .orion-radio__input:after{width:12px;height:12px}}";

const OrionRadioButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.radioButtonChanged = createEvent(this, "radioButtonChanged", 7);
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
    return (h("label", { class: `orion-radio__label 
          ${this.disabled ? 'orion-radio__label--disabled' : ''}` }, h("span", null, h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onRadioChangeValue.bind(this) }), h("span", { class: "orion-radio__input" })), h("slot", null)));
  }
  static get watchers() { return {
    "checked": ["watchChecked"]
  }; }
};
OrionRadioButton.style = orionRadioButtonCss;

const orionRadioButtonGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none}.orion-radio-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-radio-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionRadioButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h(Host, { tabindex: this.disabled ? '-1' : '0' }, h("fieldset", { class: `orion-radio-group 
            ${this.inline ? 'orion-radio-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionRadioButtonGroup.style = orionRadioButtonGroupCss;

const orionStepperCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;--orion-stepper-tally-width:var(--orion-touch-size)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type='number'],input[type='number']:focus,input[type='number']:hover,input[type='number']:active,input[type='number']:disabled{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input{outline:none}.orion-stepper{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{border:none;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-bottom:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);background-color:var(--orion-color-background, #fff);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 60px);text-align:center;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;transition:var(--orion-transition, 200ms ease-in-out)}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-focus, #d8d9eb)}input::selection{background-color:var(--orion-color-focus, #d8d9eb)}input:disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);border-color:var(--orion-color-text--dimmed, #666);opacity:1;cursor:not-allowed}.orion-stepper--error input{-webkit-appearance:none;appearance:none;-moz-appearance:textfield;border:2px solid var(--orion-color-error, #d50032)}.orion-stepper--error input:focus{border:1px solid var(--orion-color-activation, #6244bb);box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}.orion-stepper--error .orion-stepper__button-left{border-right:none;padding-right:1px}.orion-stepper--error .orion-stepper__button-right{border-left:none;padding-left:1px}.orion-stepper--hide-tally input{display:none}.orion-stepper__button{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-shrink:0;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background, #fff);width:var(--orion-touch-size, 60px);height:var(--orion-touch-size, 60px);margin:0;padding:0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out)}.orion-stepper__button svg{fill:var(--orion-color-activation, #6244bb)}.orion-stepper__button:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:focus:not(:focus-visible){box-shadow:none}.orion-stepper__button:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-hover-light, #eaeaf3)}.orion-stepper__button:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-stepper__button:disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}.orion-stepper__button:disabled svg{fill:var(--orion-color-text--dimmed, #666)}.orion-stepper__button-left{border-top-left-radius:var(--orion-border-radius, 4px);border-bottom-left-radius:var(--orion-border-radius, 4px)}.orion-stepper__button-right{border-top-right-radius:var(--orion-border-radius, 4px);border-bottom-right-radius:var(--orion-border-radius, 4px)}.svg-container__mobile{display:block;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.svg-container__desktop{display:none}@media screen and (min-width: 769px){:host{--orion-stepper-tally-width:calc(var(--orion-touch-size) + 4px)}input{font-size:var(--orion-font-size-body, 16px);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 40px)}.orion-stepper__button{width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px)}.svg-container__mobile{display:none}.svg-container__desktop{display:block;width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px)}}@media (hover: none){.orion-stepper__button:hover:not(:disabled){color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-background, #fff)}.orion-stepper__button:hover:not(:disabled) svg{fill:var(--orion-color-activation, #6244bb)}}";

const OrionStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("div", { class: `orion-stepper ${this.getCSSClass()}` }, h("button", { class: "orion-stepper__button orion-stepper__button-left", disabled: this.disabled || this.isSubstractDisabled(), onClick: this.subtract.bind(this), "aria-label": "subtract" }, h("div", { class: "svg-container__mobile" }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M1,13 L23,13 C23.5522847,13 24,12.5522847 24,12 C24,11.4477153 23.5522847,11 23,11 L1,11 C0.44771525,11 -6.76353751e-17,11.4477153 0,12 C6.76353751e-17,12.5522847 0.44771525,13 1,13 Z", id: "path-1" }))), h("div", { class: "svg-container__desktop" }, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M0.5,8.5 L15.5,8.5 C15.7761424,8.5 16,8.27614237 16,8 C16,7.72385763 15.7761424,7.5 15.5,7.5 L0.5,7.5 C0.223857625,7.5 -3.38176876e-17,7.72385763 0,8 C3.38176876e-17,8.27614237 0.223857625,8.5 0.5,8.5 Z", id: "path-1" })))), h("input", { onKeyDown: this.handleKeyDown.bind(this), type: "number", inputmode: "numeric", pattern: "[0-9]*", id: "stepper", step: this.step, min: this.min, max: this.max, value: this.value, disabled: this.disabled, onInput: this.onInputChangeValue.bind(this), role: "spinbutton", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value }), h("button", { class: "orion-stepper__button orion-stepper__button-right", disabled: this.disabled || this.isAddDisabled(), onClick: this.add.bind(this), "aria-label": "add" }, h("div", { class: "svg-container__mobile" }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M13,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 L13,13 L13,23 C13,23.5522847 12.5522847,24 12,24 C11.4477153,24 11,23.5522847 11,23 L11,13 L1,13 C0.44771525,13 -3.01980663e-14,12.5522847 -3.01980663e-14,12 C-3.01980663e-14,11.4477153 0.44771525,11 1,11 L11,11 L11,1 C11,0.44771525 11.4477153,0 12,0 C12.5522847,0 13,0.44771525 13,1 L13,11 Z", id: "path-1" }))), h("div", { class: "svg-container__desktop" }, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M8.66666667,7.33333333 L15.3333333,7.33333333 C15.7015232,7.33333333 16,7.63181017 16,8 C16,8.36818983 15.7015232,8.66666667 15.3333333,8.66666667 L8.66666667,8.66666667 L8.66666667,15.3333333 C8.66666667,15.7015232 8.36818983,16 8,16 C7.63181017,16 7.33333333,15.7015232 7.33333333,15.3333333 L7.33333333,8.66666667 L0.666666667,8.66666667 C0.298476833,8.66666667 -1.95399252e-14,8.36818983 -1.95399252e-14,8 C-1.95399252e-14,7.63181017 0.298476833,7.33333333 0.666666667,7.33333333 L7.33333333,7.33333333 L7.33333333,0.666666667 C7.33333333,0.298476833 7.63181017,0 8,0 C8.36818983,0 8.66666667,0.298476833 8.66666667,0.666666667 L8.66666667,7.33333333 Z", id: "path-1" }))))));
  }
};
OrionStepper.style = orionStepperCss;

const orionTabCss = ":host{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}";

const OrionTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
OrionTab.style = orionTabCss;

const orionTabPanelCss = ":host{display:block;--orion-tab-panel-active-display:block;--orion-tab-panel-inactive-display:none}.orion-tab-panel--active{display:var(--orion-tab-panel-active-display)}.orion-tab-panel--inactive{display:var(--orion-tab-panel-inactive-display)}";

const OrionTabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: this.getPanelClasses(), role: "tabpanel", "aria-labelledby": `${this.for}-tab-${this.panelIndex}` }, h("slot", null))));
  }
};
OrionTabPanel.style = orionTabPanelCss;

const orionTabsCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}@font-face{font-family:\"icons\";src:url(\"/assets/icons/md/icons.woff2?d2efd4754c21da8c7854c9159dc0754a\") format(\"woff2\"), url(\"/assets/icons/md/icons.woff?d2efd4754c21da8c7854c9159dc0754a\") format(\"woff\")}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}@font-face{font-family:\"icons-sm\";src:url(\"/assets/icons/sm/icons-sm.woff2?eef4781cc76aa3994cd4b23958659199\") format(\"woff2\"), url(\"/assets/icons/sm/icons-sm.woff?eef4781cc76aa3994cd4b23958659199\") format(\"woff\")}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-tabs-focus:var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-icon{height:var(--orion-icon-size-sm, 16px);position:relative;top:1px}.orion-tabs__nav-button--left .orion-icon{margin-right:5px}.orion-tabs__nav-button--right .orion-icon{margin-left:1px}.orion-tabs{position:relative;margin:var(--orion-space-xs, 4px) 0}.orion-tabs__nav-button{position:absolute;top:-4px;z-index:var(--orion-z-mid, 15);justify-content:center;align-items:center;height:calc(100% + 8px);color:var(--orion-atlantic-amethyst, #6244bb);border-color:var(--orion-gray-20, #ccc);border-style:solid;border-width:0;background:var(--orion-white, #fff);font-size:var(--orion-font-size-title6, 16px);line-height:var(--orion-line-height-sm, 24px);cursor:pointer;display:none}@media screen and (min-width: 769px){.orion-tabs__nav-button{display:flex}}.orion-tabs__nav-button--left{padding:0 var(--orion-space-xl, 16px) 0 var(--orion-space-xs, 4px);left:0;border-right-width:1px;box-shadow:6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--left::after{left:0}.orion-tabs__nav-button--right{padding:0 var(--orion-space-xs, 4px) 0 var(--orion-space-xl, 16px);right:0;border-left-width:1px;box-shadow:-6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--right::after{right:0}.orion-tabs__nav-button--hidden{opacity:0;transition:opacity var(--orion-transition, 0.1s ease-in);pointer-events:none}.orion-tabs__nav-button--visible{opacity:1;transition:opacity var(--orion-transition, 0.1s ease-out);pointer-events:auto}.orion-tabs__nav-button::after{content:\"\";display:block;position:absolute;bottom:var(--orion-space-xs, 4px);width:calc(100% - 7px);height:1px;background-color:var(--orion-atlantic-amethyst, #6244bb);transition:height var(--orion-transition, 0.1s ease-out)}.orion-tabs__nav-button--offscreen-selection::after{height:4px;bottom:3px}.orion-tabs__list{list-style:none;margin:0;padding:0;display:flex;position:relative;scroll-behavior:smooth;scroll-snap-type:x mandatory;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.orion-tabs__list::-webkit-scrollbar{height:0;display:none}.orion-tabs__list--held{scroll-behavior:auto}.orion-tabs__list--held .orion-tabs__list-button{cursor:grab}.orion-tabs__list-item{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;text-align:center;position:relative;flex:1 1 0}.orion-tabs__list-item::after{display:block;content:\"\";position:absolute;width:100%;height:1px;background:var(--orion-gray-60, #666);left:0;bottom:0;transition:all var(--orion-transition, 0.1s ease-out);z-index:var(--orion-z-low, 10)}.orion-tabs__list-item--active::after{height:4px;background:var(--orion-rhapsody-blue, #002244)}.orion-tabs__list-button{background:none;border:none;cursor:pointer;width:100%;height:100%;padding:10px 25px;color:inherit;color:var(--orion-gray-60, #666);font-size:var(--orion-font-size-title5, 16px);line-height:var(--orion-line-height-normal, 24px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);border:4px solid transparent;border-bottom:none;border-radius:4px 4px 0 0}.orion-tabs__list-button:focus-visible{border-color:var(--orion-tabs-focus)}.orion-tabs__list-button:focus{outline:none}.orion-tabs__list-item--active .orion-tabs__list-button{color:var(--orion-rhapsody-blue, #002244)}";

const OrionTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.orionTabSelected = createEvent(this, "orionTabSelected", 7);
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
    this.resetMouse = () => {
      this.tabsList.classList.remove('orion-tabs__list--held');
      this.isMouseDown = false;
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
  onMouseDown(e) {
    this.startingMouseX = e.x;
    this.currentMouseX = e.x;
    this.isMouseDown = true;
  }
  onMouseMove(e) {
    if (this.isMouseDown) {
      this.tabsList.classList.add('orion-tabs__list--held');
      const scrollDiff = this.currentMouseX - e.x;
      if (this.tabsList)
        this.tabsList.scrollLeft += scrollDiff;
      this.currentMouseX = e.x;
    }
  }
  onMouseUp(e) {
    if (e.x === this.startingMouseX) {
      this.resetMouse();
    }
    else {
      setTimeout(() => {
        this.resetMouse();
      });
    }
  }
  onMouseLeave() {
    this.resetMouse();
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
    return (h(Host, null, h("nav", { class: "orion-tabs" }, h("slot", { ref: el => {
        this.slotEl = el;
      } }), h("button", { onClick: () => this.onSideBtnClick('left'), class: this.getNavButtonClasses('left'), tabIndex: -1 }, h("i", { class: "orion-icon orion-icon-chevron_left" }), Math.max(1, this.tabsToTheLeft)), h("button", { onClick: () => this.onSideBtnClick('right'), class: this.getNavButtonClasses('right'), tabIndex: -1 }, Math.max(1, this.tabsToTheRight), h("i", { class: "orion-icon orion-icon-chevron_right" })), h("ul", { class: "orion-tabs__list", ref: el => {
        this.tabsList = el;
      }, role: "tablist", tabIndex: -1, onFocusout: this.onListFocusOut, onFocusin: this.onListFocusIn }, [...Array(this.tabCount)].map((_, tabIndex) => {
      const isActive = this.activeTab === tabIndex;
      return (h("li", { id: this.getTabId(tabIndex), class: this.getTabItemClasses(isActive), style: inlineCSS }, h("button", { onKeyDown: e => this.onButtonKeyDown(e, tabIndex), tabIndex: isActive ? 0 : -1, role: "tab", "aria-selected": isActive.toString(), class: "orion-tabs__list-button", onClick: () => this.onTabSelected(tabIndex), ref: el => {
          this.tabButtons[tabIndex] = el;
        } }, h("slot", { name: `orion-tab-slot-${tabIndex}` }))));
    }))), [...Array(this.panelCount)].map((_, tabIndex) => {
      return h("slot", { name: `orion-tab-content-${tabIndex}` });
    })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "activeTab": ["onActiveTabChange"],
    "intersectionMap": ["computeOffscreenButtonCounts"]
  }; }
};
OrionTabs.style = orionTabsCss;

const orionTextInputCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-text-input{position:relative;display:flex;flex-direction:column;justify-content:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);transition:var(--orion-transition, 200ms ease-in-out)}input::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}input::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-text-input--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}@media screen and (min-width: 769px){input{height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}";

const OrionTextInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("div", { class: "orion-text-input" }, h("input", { class: this.error && !this.disabled ? 'orion-text-input--error' : '', type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autoComplete: this.autocomplete, dirName: this.dirname, form: this.form, list: this.list, maxlength: this.maxlength, minlength: this.minlength, multiple: this.multiple, name: this.name, pattern: this.pattern, readOnly: this.readonly })));
  }
};
OrionTextInput.style = orionTextInputCss;

const orionTextareaCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-textarea{--orion-textarea__resize-handle:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvMTZweC9JbnRlcmZhY2UvRHJhZyBjb3JuZXIvQnRtIHJpZ2h0PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xLjUsMTYgQzAuNjcxNTcyODc1LDE2IDAsMTUuMzI4NDI3MSAwLDE0LjUgQzAsMTMuNjcxNTcyOSAwLjY3MTU3Mjg3NSwxMyAxLjUsMTMgQzIuMzI4NDI3MTIsMTMgMywxMy42NzE1NzI5IDMsMTQuNSBDMywxNS4zMjg0MjcxIDIuMzI4NDI3MTIsMTYgMS41LDE2IFogTTgsMTYgQzcuMTcxNTcyODgsMTYgNi41LDE1LjMyODQyNzEgNi41LDE0LjUgQzYuNSwxMy42NzE1NzI5IDcuMTcxNTcyODgsMTMgOCwxMyBDOC44Mjg0MjcxMiwxMyA5LjUsMTMuNjcxNTcyOSA5LjUsMTQuNSBDOS41LDE1LjMyODQyNzEgOC44Mjg0MjcxMiwxNiA4LDE2IFogTTgsOS41IEM3LjE3MTU3Mjg4LDkuNSA2LjUsOC44Mjg0MjcxMiA2LjUsOCBDNi41LDcuMTcxNTcyODggNy4xNzE1NzI4OCw2LjUgOCw2LjUgQzguODI4NDI3MTIsNi41IDkuNSw3LjE3MTU3Mjg4IDkuNSw4IEM5LjUsOC44Mjg0MjcxMiA4LjgyODQyNzEyLDkuNSA4LDkuNSBaIE0xNC41LDE2IEMxMy42NzE1NzI5LDE2IDEzLDE1LjMyODQyNzEgMTMsMTQuNSBDMTMsMTMuNjcxNTcyOSAxMy42NzE1NzI5LDEzIDE0LjUsMTMgQzE1LjMyODQyNzEsMTMgMTYsMTMuNjcxNTcyOSAxNiwxNC41IEMxNiwxNS4zMjg0MjcxIDE1LjMyODQyNzEsMTYgMTQuNSwxNiBaIE0xNC41LDkuNSBDMTMuNjcxNTcyOSw5LjUgMTMsOC44Mjg0MjcxMiAxMyw4IEMxMyw3LjE3MTU3Mjg4IDEzLjY3MTU3MjksNi41IDE0LjUsNi41IEMxNS4zMjg0MjcxLDYuNSAxNiw3LjE3MTU3Mjg4IDE2LDggQzE2LDguODI4NDI3MTIgMTUuMzI4NDI3MSw5LjUgMTQuNSw5LjUgWiBNMTQuNSwzIEMxMy42NzE1NzI5LDMgMTMsMi4zMjg0MjcxMiAxMywxLjUgQzEzLDAuNjcxNTcyODc1IDEzLjY3MTU3MjksMCAxNC41LDAgQzE1LjMyODQyNzEsMCAxNiwwLjY3MTU3Mjg3NSAxNiwxLjUgQzE2LDIuMzI4NDI3MTIgMTUuMzI4NDI3MSwzIDE0LjUsMyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iSWNvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzEuMDAwMDAwLCAtODIyLjAwMDAwMCkiIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3MS4wMDAwMDAsIDgyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJEcmFnLWNvcm5lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iU2hhcGUiIGZpbGw9IiM3Qzg3OEUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgbWFzaz0idXJsKCNtYXNrLTIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDAwMDAwKSIgaWQ9IkNvbG9yL0dyYXlzY2FsZS84MCUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzMzMzMzMyIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');position:relative;display:flex;flex-direction:column;justify-content:flex-start;min-width:176px;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;overflow:auto}textarea{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;min-width:176px;max-width:var(--orion-container-width-md, 944px);min-height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);overflow:auto;resize:none;transition:var(--orion-transition, 200ms ease-in-out);position:relative}textarea::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}textarea:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}textarea::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}textarea::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-textarea--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:none}.orion-textarea--resize{resize:both}.orion-textarea--resizeX{resize:horizontal}.orion-textarea--resizeY{resize:vertical}.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:var(--orion-textarea__resize-handle);background-position:bottom 7px right 7px;background-repeat:no-repeat;transition:none;background-size:14px}@media screen and (min-width: 769px){textarea{min-height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}@media (hover: none){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}@-moz-document url-prefix(){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}";

const OrionTextarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("div", { class: "orion-textarea" }, h("textarea", { class: !this.disabled ? this.getCSSClass() : '', value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autocorrect: this.autocorrect, autofocus: this.autofocus, cols: this.cols, form: this.form, maxLength: this.maxLength, minLength: this.minLength, name: this.name, readOnly: this.readonly, rows: this.rows, spellcheck: this.spellcheck, wrap: this.wrap })));
  }
};
OrionTextarea.style = orionTextareaCss;

const orionToggleCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-toggle--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-toggle{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-toggle--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) 0;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-toggle--disabled{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666)}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-toggle__input{position:relative;display:inline-block;width:54px;min-width:54px;height:32px;background-color:var(--orion-gray-10, #e6e6e6);border-radius:50px;box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle__input::after{content:'';position:absolute;height:100%;box-sizing:border-box;aspect-ratio:1;border-radius:50%;background-color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);top:0;left:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-toggle input:checked~.orion-toggle__input{background-color:var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:checked~.orion-toggle__input::after{left:22px;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus:not(:focus-visible)~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:not(:focus-visible):checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus-visible~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus-visible:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)),\n    var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:disabled~.orion-toggle__input::after{background-color:var(--orion-gray-10, #e6e6e6);border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-toggle input:disabled~.orion-toggle__input{background-color:var(--orion-gray-20, #ccc);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-gray-40, #999)}@media screen and (min-width: 769px){.orion-toggle{width:-moz-fit-content;width:fit-content;justify-content:space-between;font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) 0}.orion-toggle__input{width:40px;min-width:40px;height:24px}.orion-toggle input:checked~.orion-toggle__input::after{left:16px}}";

const OrionToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
    return (h("label", { class: `orion-toggle 
          ${this.disabled ? 'orion-toggle--disabled' : ''}`, style: this.getCSSStyle() }, h("slot", null), h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onToggleChangeValue.bind(this) }), h("span", { class: "orion-toggle__input" })));
  }
  get el() { return getElement(this); }
};
OrionToggle.style = orionToggleCss;

const orionToggleGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-toggle-group{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-toggle-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-toggle-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionToggleGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("span", { class: `orion-toggle-group 
          ${this.inline ? 'orion-toggle-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
};
OrionToggleGroup.style = orionToggleGroupCss;

const orionTooltipCss = "orion-tooltip{}orion-tooltip html,orion-tooltip body,orion-tooltip p,orion-tooltip ol,orion-tooltip ul,orion-tooltip li,orion-tooltip dl,orion-tooltip dt,orion-tooltip dd,orion-tooltip blockquote,orion-tooltip figure,orion-tooltip fieldset,orion-tooltip legend,orion-tooltip textarea,orion-tooltip pre,orion-tooltip iframe,orion-tooltip hr,orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}orion-tooltip ul{list-style:none}orion-tooltip button,orion-tooltip input,orion-tooltip select,orion-tooltip textarea{margin:0}orion-tooltip img,orion-tooltip embed,orion-tooltip iframe,orion-tooltip object,orion-tooltip audio,orion-tooltip video{max-width:100%;height:auto}orion-tooltip iframe{border:0}orion-tooltip table{border-spacing:0;border-collapse:collapse}orion-tooltip td,orion-tooltip th{padding:0;text-align:left}orion-tooltip html{font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);line-height:1.5}orion-tooltip body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}orion-tooltip *::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip *::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip a,orion-tooltip a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:focus:not(:focus-visible){outline:none}orion-tooltip a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}orion-tooltip a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}orion-tooltip a[disabled='disabled']{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}orion-tooltip a,orion-tooltip button{cursor:pointer}orion-tooltip h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}orion-tooltip h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip sup,orion-tooltip sub{vertical-align:baseline;position:relative;top:-0.4em}orion-tooltip sub{top:0.4em}orion-tooltip strong,orion-tooltip b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){orion-tooltip body{font-size:var(--orion-font-size-body, 16px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 16px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){orion-tooltip a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}.tooltip-wrapper{position:relative;display:inline-block}.tooltip-wrapper:hover{cursor:pointer}.tooltip-wrapper:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.tooltip-wrapper:focus:not(:focus-visible){outline:none}.tooltip-wrapper:focus-visible{color:var(--orion-color-activation, #6244bb);outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-tooltip{visibility:hidden;opacity:0;position:absolute;background-color:var(--orion-rhapsody-blue, #024);min-height:10px;min-width:10px;max-width:456px;color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);font-family:var(--orion-font-family, 'Open Sans', Arial, Helvetica, sans-serif);font-weight:var(--orion-font-weight-semi-bold, 600);padding:var(--orion-space-md, 8px);box-sizing:border-box;cursor:initial;transition:var(--orion-transition, 200ms ease-in-out);z-index:var(--orion-z-mid, 100)}.open{visibility:visible;opacity:1}.orion-tooltip.bottom{left:50%;transform:translate(-50%, 8px)}.orion-tooltip.top{left:50%;bottom:0;transform:translate(-50%, -30px)}";

const OrionTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    h("div", { class: "tooltip-wrapper", onKeyDown: this._onKeyDown.bind(this), onFocus: this._openTooltip.bind(this), onMouseEnter: this._openTooltip.bind(this), onBlur: () => this._closeTooltip(),
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      onMouseLeave: () => {
        this._closeTooltip();
      }, tabindex: "-1" }, h("span", {
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      ref: el => {
        this.placeholder = el;
      }, "data-tooltip-placeholder": true, "aria-describedby": this.uid, "aria-expanded": open ? 'true' : 'false'
    }, h("slot", null)), h("div", { ref: el => {
        this.dropdown = el;
      }, id: this.uid, style: inlineCSS, class: `orion-tooltip ${tooltipPosition} ${open ? 'open' : ''}`, "aria-label": "tooltip", "aria-hidden": open ? 'false' : 'true', "data-tooltip-dropdown": true }, h("slot", { name: "orion-tooltip-body" }))));
  }
  get el() { return getElement(this); }
};
OrionTooltip.style = orionTooltipCss;

export { OrionAccordion as orion_accordion, OrionButton as orion_button, OrionCheckbox as orion_checkbox, OrionCheckboxGroup as orion_checkbox_group, OrionChip as orion_chip, OrionDrawer as orion_drawer, OrionDropdown as orion_dropdown, OrionDropdownOption as orion_dropdown_option, OrionError as orion_error, OrionLabel as orion_label, OrionLink as orion_link, OrionList as orion_list, OrionListItem as orion_list_item, OrionMessage as orion_message, OrionModal as orion_modal, OrionNote as orion_note, OrionPopover as orion_popover, OrionProgressMeter as orion_progress_meter, OrionRadioButton as orion_radio_button, OrionRadioButtonGroup as orion_radio_button_group, OrionStepper as orion_stepper, OrionTab as orion_tab, OrionTabPanel as orion_tab_panel, OrionTabs as orion_tabs, OrionTextInput as orion_text_input, OrionTextarea as orion_textarea, OrionToggle as orion_toggle, OrionToggleGroup as orion_toggle_group, OrionTooltip as orion_tooltip };

import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { f as flatpickr, d as defineCustomElement$2 } from './orion-date-calendar-modal2.js';
import { d as defineCustomElement$3 } from './orion-button2.js';

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
const OrionDateInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.orionDateSelected = createEvent(this, "orionDateSelected", 7);
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
        return (h("input", { placeholder: this.placeholder, class: this.getInputCSSClasses(config.isActive), type: "text", disabled: this.disabled, value: this.dates[config.dateIndex], onInput: e => {
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
    return (h(Host, null, h("orion-date-calendar-modal", { isOpen: this.isModalOpen && this.isMobile, label: this.range ? 'Roundtrip' : 'One-way', flatpickrConfig: this.flatpickrConfig, dates: this.dates, range: this.range, dateFormat: this.dateFormat, firstDateLabel: this.firstSlotLabel, secondDateLabel: this.secondSlotLabel }), h("span", { class: this.getWrapperClasses() }, h("div", { class: "orion-date-input__label" }, this.hasFirstLabelSlot && h("slot", { name: "orion-date-input-first-label" }), this.hasSecondLabelSlot && h("slot", { name: "orion-date-input-second-label" })), h("div", { class: this.getDateInputClasses() }, h("div", { class: "orion-date-input__status" }), this.getInputs(), h("button", { onClick: this.toggleCalendar, class: this.getButtonCSSClasses(), ref: el => {
        this.calendarOpenButton = el;
      }, disabled: this.disabled, "aria-label": "Opens a calendar date picker." }, h("i", { class: "orion-date-input__button-icon orion-icon-calendar" })), h("input", { ref: el => {
        this.dateInput = el;
      }, class: `orion-date-input__date-input`, name: "orion-date", id: "orion-date", tabIndex: -1 })))));
  }
  get el() { return this; }
  static get style() { return orionDateInputCss; }
}, [1, "orion-date-input", {
    "range": [4],
    "placeholder": [1],
    "dateFormat": [1, "date-format"],
    "minDate": [1537, "min-date"],
    "maxDate": [1537, "max-date"],
    "multiMonth": [4, "multi-month"],
    "error": [4],
    "disabled": [4],
    "inline": [4],
    "isCalendarOpen": [32],
    "isModalOpen": [32],
    "dates": [32],
    "inputValidity": [32],
    "flatpickrConfig": [32],
    "isMobile": [32],
    "firstSlotLabel": [32],
    "secondSlotLabel": [32]
  }, [[9, "resize", "handleResize"], [0, "closeDateModal", "closeModal"], [0, "selectModalDates", "onModalDateSelect"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-date-input", "orion-button", "orion-date-calendar-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-date-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionDateInput$1);
      }
      break;
    case "orion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "orion-date-calendar-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OrionDateInput = OrionDateInput$1;
const defineCustomElement = defineCustomElement$1;

export { OrionDateInput, defineCustomElement };

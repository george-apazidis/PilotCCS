import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const orionTabsCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}i[class^=orion-icon-]:before,i[class*=\" orion-icon-\"]:before{font-family:icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-add_pet:before{content:\"\\f101\"}.orion-icon-add_traveler:before{content:\"\\f102\"}.orion-icon-add:before{content:\"\\f103\"}.orion-icon-adult_beverage:before{content:\"\\f104\"}.orion-icon-alert:before{content:\"\\f105\"}.orion-icon-arrow_down:before{content:\"\\f106\"}.orion-icon-arrow_left:before{content:\"\\f107\"}.orion-icon-arrow_right:before{content:\"\\f108\"}.orion-icon-arrow_up:before{content:\"\\f109\"}.orion-icon-at:before{content:\"\\f10a\"}.orion-icon-baggage:before{content:\"\\f10b\"}.orion-icon-bar_chart:before{content:\"\\f10c\"}.orion-icon-beverage:before{content:\"\\f10d\"}.orion-icon-boarding_pass:before{content:\"\\f10e\"}.orion-icon-bundle:before{content:\"\\f10f\"}.orion-icon-calendar:before{content:\"\\f110\"}.orion-icon-cancel:before{content:\"\\f111\"}.orion-icon-caps_lock_off:before{content:\"\\f112\"}.orion-icon-caps_lock_on:before{content:\"\\f113\"}.orion-icon-caret_down:before{content:\"\\f114\"}.orion-icon-caret_up:before{content:\"\\f115\"}.orion-icon-cart:before{content:\"\\f116\"}.orion-icon-change:before{content:\"\\f117\"}.orion-icon-check_box:before{content:\"\\f118\"}.orion-icon-check_list:before{content:\"\\f119\"}.orion-icon-chevron_close:before{content:\"\\f11a\"}.orion-icon-chevron_left:before{content:\"\\f11b\"}.orion-icon-chevron_open:before{content:\"\\f11c\"}.orion-icon-chevron_right:before{content:\"\\f11d\"}.orion-icon-child:before{content:\"\\f11e\"}.orion-icon-clear:before{content:\"\\f11f\"}.orion-icon-clock:before{content:\"\\f120\"}.orion-icon-close:before{content:\"\\f121\"}.orion-icon-closet:before{content:\"\\f122\"}.orion-icon-cloudy:before{content:\"\\f123\"}.orion-icon-comp_upgrade:before{content:\"\\f124\"}.orion-icon-container_add:before{content:\"\\f125\"}.orion-icon-container_ready:before{content:\"\\f126\"}.orion-icon-container_remove:before{content:\"\\f127\"}.orion-icon-container:before{content:\"\\f128\"}.orion-icon-copy:before{content:\"\\f129\"}.orion-icon-credit_card:before{content:\"\\f12a\"}.orion-icon-detach:before{content:\"\\f12b\"}.orion-icon-directv:before{content:\"\\f12c\"}.orion-icon-download_excel:before{content:\"\\f12d\"}.orion-icon-download_file:before{content:\"\\f12e\"}.orion-icon-download_folder:before{content:\"\\f12f\"}.orion-icon-download_pdf:before{content:\"\\f130\"}.orion-icon-download:before{content:\"\\f131\"}.orion-icon-drag_btm_left:before{content:\"\\f132\"}.orion-icon-drag_btm_right:before{content:\"\\f133\"}.orion-icon-drag_top_left:before{content:\"\\f134\"}.orion-icon-drag_top_right:before{content:\"\\f135\"}.orion-icon-drag:before{content:\"\\f136\"}.orion-icon-edit:before{content:\"\\f137\"}.orion-icon-email:before{content:\"\\f138\"}.orion-icon-extra_legroom:before{content:\"\\f139\"}.orion-icon-farelock:before{content:\"\\f13a\"}.orion-icon-favorite_off:before{content:\"\\f13b\"}.orion-icon-favorite_on:before{content:\"\\f13c\"}.orion-icon-filter:before{content:\"\\f13d\"}.orion-icon-fog:before{content:\"\\f13e\"}.orion-icon-food:before{content:\"\\f13f\"}.orion-icon-freezing_rain:before{content:\"\\f140\"}.orion-icon-gift:before{content:\"\\f141\"}.orion-icon-global_reception:before{content:\"\\f142\"}.orion-icon-gsmc:before{content:\"\\f143\"}.orion-icon-gsme:before{content:\"\\f144\"}.orion-icon-headphones:before{content:\"\\f145\"}.orion-icon-home:before{content:\"\\f146\"}.orion-icon-hourglass:before{content:\"\\f147\"}.orion-icon-hurricane:before{content:\"\\f148\"}.orion-icon-in_seat_power:before{content:\"\\f149\"}.orion-icon-infant:before{content:\"\\f14a\"}.orion-icon-info:before{content:\"\\f14b\"}.orion-icon-kiosk:before{content:\"\\f14c\"}.orion-icon-language:before{content:\"\\f14d\"}.orion-icon-lap_infant:before{content:\"\\f14e\"}.orion-icon-lightning:before{content:\"\\f14f\"}.orion-icon-live_tv:before{content:\"\\f150\"}.orion-icon-location:before{content:\"\\f151\"}.orion-icon-locked:before{content:\"\\f152\"}.orion-icon-map:before{content:\"\\f153\"}.orion-icon-menu:before{content:\"\\f154\"}.orion-icon-message:before{content:\"\\f155\"}.orion-icon-microphone_off:before{content:\"\\f156\"}.orion-icon-microphone_on:before{content:\"\\f157\"}.orion-icon-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-mileageplus:before{content:\"\\f15d\"}.orion-icon-minus:before{content:\"\\f15e\"}.orion-icon-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-mouse:before{content:\"\\f163\"}.orion-icon-movies:before{content:\"\\f164\"}.orion-icon-music:before{content:\"\\f165\"}.orion-icon-my_trips:before{content:\"\\f166\"}.orion-icon-notes:before{content:\"\\f167\"}.orion-icon-notifications:before{content:\"\\f168\"}.orion-icon-on_demand:before{content:\"\\f169\"}.orion-icon-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-personal_device:before{content:\"\\f16c\"}.orion-icon-pet:before{content:\"\\f16d\"}.orion-icon-phone:before{content:\"\\f16e\"}.orion-icon-pin:before{content:\"\\f16f\"}.orion-icon-pinned:before{content:\"\\f170\"}.orion-icon-plane_arriving:before{content:\"\\f171\"}.orion-icon-plane_departing:before{content:\"\\f172\"}.orion-icon-plane:before{content:\"\\f173\"}.orion-icon-plus:before{content:\"\\f174\"}.orion-icon-premier_access:before{content:\"\\f175\"}.orion-icon-price:before{content:\"\\f176\"}.orion-icon-print:before{content:\"\\f177\"}.orion-icon-priority_desk:before{content:\"\\f178\"}.orion-icon-priority:before{content:\"\\f179\"}.orion-icon-question:before{content:\"\\f17a\"}.orion-icon-rain:before{content:\"\\f17b\"}.orion-icon-rating:before{content:\"\\f17c\"}.orion-icon-re_attach:before{content:\"\\f17d\"}.orion-icon-redeposit:before{content:\"\\f17e\"}.orion-icon-refresh:before{content:\"\\f17f\"}.orion-icon-register:before{content:\"\\f180\"}.orion-icon-restrooms:before{content:\"\\f181\"}.orion-icon-scan_bag:before{content:\"\\f182\"}.orion-icon-scan_container:before{content:\"\\f183\"}.orion-icon-scan:before{content:\"\\f184\"}.orion-icon-scattered_showers:before{content:\"\\f185\"}.orion-icon-scattered_snow:before{content:\"\\f186\"}.orion-icon-scattered_storms:before{content:\"\\f187\"}.orion-icon-search:before{content:\"\\f188\"}.orion-icon-seat:before{content:\"\\f189\"}.orion-icon-settings:before{content:\"\\f18a\"}.orion-icon-share:before{content:\"\\f18b\"}.orion-icon-showers_night:before{content:\"\\f18c\"}.orion-icon-ski_boot:before{content:\"\\f18d\"}.orion-icon-sleet:before{content:\"\\f18e\"}.orion-icon-snow_night:before{content:\"\\f18f\"}.orion-icon-snow:before{content:\"\\f190\"}.orion-icon-special_needs:before{content:\"\\f191\"}.orion-icon-sports_equipment:before{content:\"\\f192\"}.orion-icon-standby:before{content:\"\\f193\"}.orion-icon-storms_night:before{content:\"\\f194\"}.orion-icon-storms:before{content:\"\\f195\"}.orion-icon-stroller:before{content:\"\\f196\"}.orion-icon-subtract:before{content:\"\\f197\"}.orion-icon-success:before{content:\"\\f198\"}.orion-icon-sunny:before{content:\"\\f199\"}.orion-icon-teen:before{content:\"\\f19a\"}.orion-icon-trash:before{content:\"\\f19b\"}.orion-icon-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-traveler_group:before{content:\"\\f19d\"}.orion-icon-traveler:before{content:\"\\f19e\"}.orion-icon-united_club:before{content:\"\\f19f\"}.orion-icon-unlocked:before{content:\"\\f1a0\"}.orion-icon-unpin:before{content:\"\\f1a1\"}.orion-icon-upgrade:before{content:\"\\f1a2\"}.orion-icon-user_default:before{content:\"\\f1a3\"}.orion-icon-vaccine:before{content:\"\\f1a4\"}.orion-icon-view_off:before{content:\"\\f1a5\"}.orion-icon-view_on:before{content:\"\\f1a6\"}.orion-icon-weight:before{content:\"\\f1a7\"}.orion-icon-wifi:before{content:\"\\f1a8\"}.orion-icon-windy:before{content:\"\\f1a9\"}.orion-icon-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-wrench:before{content:\"\\f1ab\"}i[class^=orion-icon-sm-]:before,i[class*=\" orion-icon-sm-\"]:before{font-family:icons-sm !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.orion-icon-sm-add_pet:before{content:\"\\f101\"}.orion-icon-sm-add_traveler:before{content:\"\\f102\"}.orion-icon-sm-add:before{content:\"\\f103\"}.orion-icon-sm-adult_beverage:before{content:\"\\f104\"}.orion-icon-sm-alert:before{content:\"\\f105\"}.orion-icon-sm-arrow_down:before{content:\"\\f106\"}.orion-icon-sm-arrow_left:before{content:\"\\f107\"}.orion-icon-sm-arrow_right:before{content:\"\\f108\"}.orion-icon-sm-arrow_up:before{content:\"\\f109\"}.orion-icon-sm-at:before{content:\"\\f10a\"}.orion-icon-sm-baggage:before{content:\"\\f10b\"}.orion-icon-sm-bar_chart:before{content:\"\\f10c\"}.orion-icon-sm-beverage:before{content:\"\\f10d\"}.orion-icon-sm-boarding_pass:before{content:\"\\f10e\"}.orion-icon-sm-bundle:before{content:\"\\f10f\"}.orion-icon-sm-calendar:before{content:\"\\f110\"}.orion-icon-sm-cancel:before{content:\"\\f111\"}.orion-icon-sm-caps_lock_off:before{content:\"\\f112\"}.orion-icon-sm-caps_lock_on:before{content:\"\\f113\"}.orion-icon-sm-caret_down:before{content:\"\\f114\"}.orion-icon-sm-caret_up:before{content:\"\\f115\"}.orion-icon-sm-cart:before{content:\"\\f116\"}.orion-icon-sm-change:before{content:\"\\f117\"}.orion-icon-sm-check_box:before{content:\"\\f118\"}.orion-icon-sm-check_list:before{content:\"\\f119\"}.orion-icon-sm-chevron_close:before{content:\"\\f11a\"}.orion-icon-sm-chevron_left:before{content:\"\\f11b\"}.orion-icon-sm-chevron_open:before{content:\"\\f11c\"}.orion-icon-sm-chevron_right:before{content:\"\\f11d\"}.orion-icon-sm-child:before{content:\"\\f11e\"}.orion-icon-sm-clear:before{content:\"\\f11f\"}.orion-icon-sm-clock:before{content:\"\\f120\"}.orion-icon-sm-close:before{content:\"\\f121\"}.orion-icon-sm-closet:before{content:\"\\f122\"}.orion-icon-sm-cloudy:before{content:\"\\f123\"}.orion-icon-sm-comp_upgrade:before{content:\"\\f124\"}.orion-icon-sm-container_add:before{content:\"\\f125\"}.orion-icon-sm-container_ready:before{content:\"\\f126\"}.orion-icon-sm-container_remove:before{content:\"\\f127\"}.orion-icon-sm-container:before{content:\"\\f128\"}.orion-icon-sm-copy:before{content:\"\\f129\"}.orion-icon-sm-credit_card:before{content:\"\\f12a\"}.orion-icon-sm-detach:before{content:\"\\f12b\"}.orion-icon-sm-directv:before{content:\"\\f12c\"}.orion-icon-sm-download_excel:before{content:\"\\f12d\"}.orion-icon-sm-download_file:before{content:\"\\f12e\"}.orion-icon-sm-download_folder:before{content:\"\\f12f\"}.orion-icon-sm-download_pdf:before{content:\"\\f130\"}.orion-icon-sm-download:before{content:\"\\f131\"}.orion-icon-sm-drag_btm_left:before{content:\"\\f132\"}.orion-icon-sm-drag_btm_right:before{content:\"\\f133\"}.orion-icon-sm-drag_top_left:before{content:\"\\f134\"}.orion-icon-sm-drag_top_right:before{content:\"\\f135\"}.orion-icon-sm-drag:before{content:\"\\f136\"}.orion-icon-sm-edit:before{content:\"\\f137\"}.orion-icon-sm-email:before{content:\"\\f138\"}.orion-icon-sm-extra_legroom:before{content:\"\\f139\"}.orion-icon-sm-farelock:before{content:\"\\f13a\"}.orion-icon-sm-favorite_off:before{content:\"\\f13b\"}.orion-icon-sm-favorite_on:before{content:\"\\f13c\"}.orion-icon-sm-filter:before{content:\"\\f13d\"}.orion-icon-sm-fog:before{content:\"\\f13e\"}.orion-icon-sm-food:before{content:\"\\f13f\"}.orion-icon-sm-freezing_rain:before{content:\"\\f140\"}.orion-icon-sm-gift:before{content:\"\\f141\"}.orion-icon-sm-global_reception:before{content:\"\\f142\"}.orion-icon-sm-gsmc:before{content:\"\\f143\"}.orion-icon-sm-gsme:before{content:\"\\f144\"}.orion-icon-sm-headphones:before{content:\"\\f145\"}.orion-icon-sm-home:before{content:\"\\f146\"}.orion-icon-sm-hourglass:before{content:\"\\f147\"}.orion-icon-sm-hurricane:before{content:\"\\f148\"}.orion-icon-sm-in_seat_power:before{content:\"\\f149\"}.orion-icon-sm-infant:before{content:\"\\f14a\"}.orion-icon-sm-info:before{content:\"\\f14b\"}.orion-icon-sm-kiosk:before{content:\"\\f14c\"}.orion-icon-sm-language:before{content:\"\\f14d\"}.orion-icon-sm-lap_infant:before{content:\"\\f14e\"}.orion-icon-sm-lightning:before{content:\"\\f14f\"}.orion-icon-sm-live_tv:before{content:\"\\f150\"}.orion-icon-sm-location:before{content:\"\\f151\"}.orion-icon-sm-locked:before{content:\"\\f152\"}.orion-icon-sm-map:before{content:\"\\f153\"}.orion-icon-sm-menu:before{content:\"\\f154\"}.orion-icon-sm-message:before{content:\"\\f155\"}.orion-icon-sm-microphone_off:before{content:\"\\f156\"}.orion-icon-sm-microphone_on:before{content:\"\\f157\"}.orion-icon-sm-mileageplus_gold:before{content:\"\\f158\"}.orion-icon-sm-mileageplus_gs:before{content:\"\\f159\"}.orion-icon-sm-mileageplus_k:before{content:\"\\f15a\"}.orion-icon-sm-mileageplus_platinum:before{content:\"\\f15b\"}.orion-icon-sm-mileageplus_silver:before{content:\"\\f15c\"}.orion-icon-sm-mileageplus:before{content:\"\\f15d\"}.orion-icon-sm-minus:before{content:\"\\f15e\"}.orion-icon-sm-more_menu_horizontal:before{content:\"\\f15f\"}.orion-icon-sm-more_menu_vertical:before{content:\"\\f160\"}.orion-icon-sm-mostly_cloudy_night:before{content:\"\\f161\"}.orion-icon-sm-mostly_cloudy:before{content:\"\\f162\"}.orion-icon-sm-mouse:before{content:\"\\f163\"}.orion-icon-sm-movies:before{content:\"\\f164\"}.orion-icon-sm-music:before{content:\"\\f165\"}.orion-icon-sm-my_trips:before{content:\"\\f166\"}.orion-icon-sm-notes:before{content:\"\\f167\"}.orion-icon-sm-notifications:before{content:\"\\f168\"}.orion-icon-sm-on_demand:before{content:\"\\f169\"}.orion-icon-sm-partly_cloudy_night:before{content:\"\\f16a\"}.orion-icon-sm-partly_cloudy:before{content:\"\\f16b\"}.orion-icon-sm-personal_device:before{content:\"\\f16c\"}.orion-icon-sm-pet:before{content:\"\\f16d\"}.orion-icon-sm-phone:before{content:\"\\f16e\"}.orion-icon-sm-pin:before{content:\"\\f16f\"}.orion-icon-sm-pinned:before{content:\"\\f170\"}.orion-icon-sm-plane_arriving:before{content:\"\\f171\"}.orion-icon-sm-plane_departing:before{content:\"\\f172\"}.orion-icon-sm-plane:before{content:\"\\f173\"}.orion-icon-sm-plus:before{content:\"\\f174\"}.orion-icon-sm-premier_access:before{content:\"\\f175\"}.orion-icon-sm-price:before{content:\"\\f176\"}.orion-icon-sm-print:before{content:\"\\f177\"}.orion-icon-sm-priority_desk:before{content:\"\\f178\"}.orion-icon-sm-priority:before{content:\"\\f179\"}.orion-icon-sm-question:before{content:\"\\f17a\"}.orion-icon-sm-rain:before{content:\"\\f17b\"}.orion-icon-sm-rating:before{content:\"\\f17c\"}.orion-icon-sm-re_attach:before{content:\"\\f17d\"}.orion-icon-sm-redeposit:before{content:\"\\f17e\"}.orion-icon-sm-refresh:before{content:\"\\f17f\"}.orion-icon-sm-register:before{content:\"\\f180\"}.orion-icon-sm-restrooms:before{content:\"\\f181\"}.orion-icon-sm-scan_bag:before{content:\"\\f182\"}.orion-icon-sm-scan_container:before{content:\"\\f183\"}.orion-icon-sm-scan:before{content:\"\\f184\"}.orion-icon-sm-scattered_showers:before{content:\"\\f185\"}.orion-icon-sm-scattered_snow:before{content:\"\\f186\"}.orion-icon-sm-scattered_storms:before{content:\"\\f187\"}.orion-icon-sm-search:before{content:\"\\f188\"}.orion-icon-sm-seat:before{content:\"\\f189\"}.orion-icon-sm-settings:before{content:\"\\f18a\"}.orion-icon-sm-share:before{content:\"\\f18b\"}.orion-icon-sm-showers_night:before{content:\"\\f18c\"}.orion-icon-sm-ski_boot:before{content:\"\\f18d\"}.orion-icon-sm-sleet:before{content:\"\\f18e\"}.orion-icon-sm-snow_night:before{content:\"\\f18f\"}.orion-icon-sm-snow:before{content:\"\\f190\"}.orion-icon-sm-special_needs:before{content:\"\\f191\"}.orion-icon-sm-sports_equipment:before{content:\"\\f192\"}.orion-icon-sm-standby:before{content:\"\\f193\"}.orion-icon-sm-storms_night:before{content:\"\\f194\"}.orion-icon-sm-storms:before{content:\"\\f195\"}.orion-icon-sm-stroller:before{content:\"\\f196\"}.orion-icon-sm-subtract:before{content:\"\\f197\"}.orion-icon-sm-success:before{content:\"\\f198\"}.orion-icon-sm-sunny:before{content:\"\\f199\"}.orion-icon-sm-teen:before{content:\"\\f19a\"}.orion-icon-sm-trash:before{content:\"\\f19b\"}.orion-icon-sm-traveler_connecting:before{content:\"\\f19c\"}.orion-icon-sm-traveler_group:before{content:\"\\f19d\"}.orion-icon-sm-traveler:before{content:\"\\f19e\"}.orion-icon-sm-united_club:before{content:\"\\f19f\"}.orion-icon-sm-unlocked:before{content:\"\\f1a0\"}.orion-icon-sm-unpin:before{content:\"\\f1a1\"}.orion-icon-sm-upgrade:before{content:\"\\f1a2\"}.orion-icon-sm-user_default:before{content:\"\\f1a3\"}.orion-icon-sm-vaccine:before{content:\"\\f1a4\"}.orion-icon-sm-view_off:before{content:\"\\f1a5\"}.orion-icon-sm-view_on:before{content:\"\\f1a6\"}.orion-icon-sm-weight:before{content:\"\\f1a7\"}.orion-icon-sm-wifi:before{content:\"\\f1a8\"}.orion-icon-sm-windy:before{content:\"\\f1a9\"}.orion-icon-sm-wintery_mix:before{content:\"\\f1aa\"}.orion-icon-sm-wrench:before{content:\"\\f1ab\"}:host{display:block;--orion-tabs-focus:var(--orion-color-focus, rgba(182, 184, 220, 0.5))}.orion-icon{height:var(--orion-icon-size-sm, 16px);position:relative;top:1px}.orion-tabs__nav-button--left .orion-icon{margin-right:5px}.orion-tabs__nav-button--right .orion-icon{margin-left:1px}.orion-tabs{position:relative;margin:var(--orion-space-xs, 4px) 0}.orion-tabs__nav-button{position:absolute;top:-4px;z-index:var(--orion-z-mid, 15);justify-content:center;align-items:center;height:calc(100% + 8px);color:var(--orion-atlantic-amethyst, #6244bb);border-color:var(--orion-gray-20, #ccc);border-style:solid;border-width:0;background:var(--orion-white, #fff);font-size:var(--orion-font-size-title6, 16px);line-height:var(--orion-line-height-sm, 24px);cursor:pointer;display:none}@media screen and (min-width: 769px){.orion-tabs__nav-button{display:flex}}.orion-tabs__nav-button--left{padding:0 var(--orion-space-xl, 16px) 0 var(--orion-space-xs, 4px);left:0;border-right-width:1px;box-shadow:6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--left::after{left:0}.orion-tabs__nav-button--right{padding:0 var(--orion-space-xs, 4px) 0 var(--orion-space-xl, 16px);right:0;border-left-width:1px;box-shadow:-6px 0 6px -6px rgba(0, 0, 0, 0.13)}.orion-tabs__nav-button--right::after{right:0}.orion-tabs__nav-button--hidden{opacity:0;transition:opacity var(--orion-transition, 0.1s ease-in);pointer-events:none}.orion-tabs__nav-button--visible{opacity:1;transition:opacity var(--orion-transition, 0.1s ease-out);pointer-events:auto}.orion-tabs__nav-button::after{content:\"\";display:block;position:absolute;bottom:var(--orion-space-xs, 4px);width:calc(100% - 7px);height:1px;background-color:var(--orion-atlantic-amethyst, #6244bb);transition:height var(--orion-transition, 0.1s ease-out)}.orion-tabs__nav-button--offscreen-selection::after{height:4px;bottom:3px}.orion-tabs__list{list-style:none;margin:0;padding:0;display:flex;position:relative;scroll-behavior:smooth;scroll-snap-type:x mandatory;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none}.orion-tabs__list::-webkit-scrollbar{height:0;display:none}.orion-tabs__list--held{scroll-behavior:auto}.orion-tabs__list--held .orion-tabs__list-button{cursor:grab}.orion-tabs__list-item{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;text-align:center;position:relative;flex:1 1 0}.orion-tabs__list-item::after{display:block;content:\"\";position:absolute;width:100%;height:1px;background:var(--orion-gray-60, #666);left:0;bottom:0;transition:all var(--orion-transition, 0.1s ease-out);z-index:var(--orion-z-low, 10)}.orion-tabs__list-item--active::after{height:4px;background:var(--orion-rhapsody-blue, #002244)}.orion-tabs__list-button{background:none;border:none;cursor:pointer;width:100%;height:100%;padding:10px 25px;color:inherit;color:var(--orion-gray-60, #666);font-size:var(--orion-font-size-title5, 16px);line-height:var(--orion-line-height-normal, 24px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);border:4px solid transparent;border-bottom:none;border-radius:4px 4px 0 0}.orion-tabs__list-button:focus-visible{border-color:var(--orion-tabs-focus)}.orion-tabs__list-button:focus{outline:none}.orion-tabs__list-item--active .orion-tabs__list-button{color:var(--orion-rhapsody-blue, #002244)}";

const OrionTabs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, null, h("nav", { class: "orion-tabs" }, h("slot", { ref: el => {
        this.slotEl = el;
      } }), h("button", { onClick: () => this.onSideBtnClick('left'), class: this.getNavButtonClasses('left'), tabIndex: -1 }, h("i", { class: "orion-icon orion-icon-chevron_left" }), Math.max(1, this.tabsToTheLeft)), h("button", { onClick: () => this.onSideBtnClick('right'), class: this.getNavButtonClasses('right'), tabIndex: -1 }, Math.max(1, this.tabsToTheRight), h("i", { class: "orion-icon orion-icon-chevron_right" })), h("ul", { class: "orion-tabs__list", ref: el => {
        this.tabsList = el;
      }, role: "tablist", tabIndex: -1, onFocusout: this.onListFocusOut, onFocusin: this.onListFocusIn, onMouseDown: this.onMouseDown, onMouseMove: this.onMouseMove, onMouseUp: this.onMouseUp, onMouseLeave: this.onMouseLeave }, [...Array(this.tabCount)].map((_, tabIndex) => {
      const isActive = this.activeTab === tabIndex;
      return (h("li", { id: this.getTabId(tabIndex), class: this.getTabItemClasses(isActive), style: inlineCSS }, h("button", { onKeyDown: e => this.onButtonKeyDown(e, tabIndex), tabIndex: isActive ? 0 : -1, role: "tab", "aria-selected": isActive.toString(), class: "orion-tabs__list-button", onClick: () => this.onTabSelected(tabIndex), ref: el => {
          this.tabButtons[tabIndex] = el;
        } }, h("slot", { name: `orion-tab-slot-${tabIndex}` }))));
    }))), [...Array(this.panelCount)].map((_, tabIndex) => {
      return h("slot", { name: `orion-tab-content-${tabIndex}` });
    })));
  }
  get el() { return this; }
  static get watchers() { return {
    "activeTab": ["onActiveTabChange"],
    "intersectionMap": ["computeOffscreenButtonCounts"]
  }; }
  static get style() { return orionTabsCss; }
}, [1, "orion-tabs", {
    "activeTab": [1538, "active-tab"],
    "scrollToStartingActiveTab": [4, "scroll-to-starting-active-tab"],
    "minTabWidth": [513, "min-tab-width"],
    "tabCount": [32],
    "panelCount": [32],
    "intersectionMap": [32],
    "tabsToTheLeft": [32],
    "tabsToTheRight": [32],
    "activeTabSide": [32],
    "focused": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-tabs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTabs$1);
      }
      break;
  } });
}

const OrionTabs = OrionTabs$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTabs, defineCustomElement };

import { proxyCustomElement, HTMLElement as HTMLElement$1, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './orion-button2.js';

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
function debounce(fn, wait) {
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
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
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

const OrionDateCalendarModal = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement$1 {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.selectModalDates = createEvent(this, "selectModalDates", 7);
    this.closeDateModal = createEvent(this, "closeDateModal", 7);
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
    return (h(Host, null, h("div", { class: this.getModalClasses() }, h("div", { class: "orion-date-calendar-modal__label" }, h("h2", { class: "orion-date-calendar-modal__label-heading" }, this.label), h("button", { class: "orion-date-calendar-modal__close-button", onClick: this.handleClose, "aria-label": "Cancels date selection and closes the calendar date picker." }, h("i", { class: "orion-icon orion-icon-close" }))), h("div", { class: "orion-date-calendar-modal__date-selections" }, h("p", { class: this.getDateSelectionClasses(0) }, this.firstDateLabel, h("span", { class: this.getDateSelectionSpanClasses(0) }, this.localDates[0] || `Select a date`)), this.range && (h("p", { class: this.getDateSelectionClasses(1) }, this.secondDateLabel, h("span", { class: this.getDateSelectionSpanClasses(1) }, this.localDates[1] || `Select a date`)))), h("div", { class: "orion-date-calendar-modal__flatpickr" }, h("input", { ref: el => {
        this.dateInput = el;
      }, class: "orion-date-calendar-modal__date-input", name: "orion-date", id: "orion-date", tabIndex: -1 })), h("orion-button", { disabled: !this.localDates[0] || (this.range && !this.localDates[1]), onClick: this.handleSelectDates, class: "orion-date-calendar-modal__button", sticky: true, variant: "primary" }, `Select date${this.range ? 's' : ''}`))));
  }
  get el() { return this; }
  static get watchers() { return {
    "isOpen": ["handleOpen"]
  }; }
  static get style() { return orionDateCalendarModalCss; }
}, [1, "orion-date-calendar-modal", {
    "label": [1],
    "startingDate": [16],
    "flatpickrConfig": [16],
    "dates": [16],
    "isOpen": [4, "is-open"],
    "range": [4],
    "dateFormat": [1, "date-format"],
    "firstDateLabel": [1, "first-date-label"],
    "secondDateLabel": [1, "second-date-label"],
    "headings": [32],
    "localDates": [32],
    "isMobile": [32]
  }, [[9, "resize", "handleResize"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-date-calendar-modal", "orion-button"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-date-calendar-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionDateCalendarModal);
      }
      break;
    case "orion-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { OrionDateCalendarModal as O, defineCustomElement as d, flatpickr as f };

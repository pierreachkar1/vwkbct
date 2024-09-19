/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 */
!function(e,t,i,o){var n=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var i=e(this);if(!h.skip_invisible||i.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else i.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(o!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),o!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(h,r)),a=h.container===o||h.container===t?n:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,i=e(t);t.loaded=!1,(i.attr("src")===o||i.attr("src")===!1)&&i.is("img")&&i.attr("src",h.placeholder),i.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(t,o,h)}e("<img />").bind("load",function(){var o=i.attr("data-"+h.data_attribute);i.hide(),i.is("img")?i.attr("src",o):i.css("background-image","url('"+o+"')"),i[h.effect](h.effect_speed),t.loaded=!0;var n=e.grep(l,function(e){return!e.loaded});if(l=e(n),h.load){var r=l.length;h.load.call(t,r,h)}}).attr("src",i.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&i.bind(h.event,function(){t.loaded||i.trigger("appear")})}),n.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(i).ready(function(){f()}),this},e.belowthefold=function(i,r){var f;return f=r.container===o||r.container===t?(t.innerHeight?t.innerHeight:n.height())+n.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(i).offset().top-r.threshold},e.rightoffold=function(i,r){var f;return f=r.container===o||r.container===t?n.width()+n.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(i).offset().left-r.threshold},e.abovethetop=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollTop():e(r.container).offset().top,f>=e(i).offset().top+r.threshold+e(i).height()},e.leftofbegin=function(i,r){var f;return f=r.container===o||r.container===t?n.scrollLeft():e(r.container).offset().left,f>=e(i).offset().left+r.threshold+e(i).width()},e.inviewport=function(t,i){return!(e.rightoffold(t,i)||e.leftofbegin(t,i)||e.belowthefold(t,i)||e.abovethetop(t,i))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
/*AutoSuggest Code*/ 
var asnRePrompt=!1;"undefined"==typeof bsn&&(_b=bsn={}),"undefined"==typeof _b.Autosuggest&&(_b.Autosuggest={}),_b.AutoSuggest=function(t,e){if(!document.getElementById)return 0;if(this.fld=_b.DOM.gE(t),!this.fld)return 0;this.sInp="",this.nInpC=0,this.aSug=[],this.iHigh=0,this.oP=e?e:{};var i,s={minchars:1,meth:"get",varname:"input",className:"autosuggest",timeout:2500,delay:500,offsety:-5,shownoresults:!0,noresults:"No results!",maxheight:250,cache:!0,maxentries:25,acctReFocusOpt:"",functionCall:"",moreUrlFunction:"",minWidth:0,pgmName:""};for(i in s)typeof this.oP[i]!=typeof s[i]&&(this.oP[i]=s[i]);var n=this;this.fld.onkeypress=function(t){return n.onKeyPress(t)},this.fld.onkeyup=function(t){return n.onKeyUp(t)},this.fld.setAttribute("autocomplete","false")},_b.AutoSuggest.prototype.onKeyPress=function(t){var e=window.event?window.event.keyCode:t.keyCode,i=13,s=27,n=1;switch(e){case i:this.setHighlightedValue("onKeyPress"),n=0;break;case s:this.clearSuggestions()}return n},_b.AutoSuggest.prototype.onKeyUp=function(t){var e=window.event?window.event.keyCode:t.keyCode,i=38,s=40,n=1;switch(e){case i:this.changeHighlight(e),n=0;break;case s:this.changeHighlight(e),n=0;break;default:this.getSuggestions(this.fld.value)}return n},_b.AutoSuggest.prototype.getSuggestions=function(t){if(t==this.sInp)return 0;if(_b.DOM.remE(this.idAs),this.sInp=t,t.length<this.oP.minchars)return this.aSug=[],this.nInpC=t.length,0;var e=this.nInpC;this.nInpC=t.length?t.length:0;var i=this.aSug.length;if(this.nInpC>e&&i&&i<this.oP.maxentries&&this.oP.cache){for(var s=[],n=0;i>n;n++)this.aSug[n].value.substr(0,t.length).toLowerCase()==t.toLowerCase()&&s.push(this.aSug[n]);return this.aSug=s,this.createList(this.aSug),!1}var o=this,h=this.sInp;return clearTimeout(this.ajID),this.ajID=setTimeout(function(){o.doAjaxRequest(h)},this.oP.delay),!1},_b.AutoSuggest.prototype.doAjaxRequest=function(t){if(t!=this.fld.value)return!1;var e=this;if("function"==typeof this.oP.script)var i=this.oP.script(encodeURIComponent(this.sInp));else var i=this.oP.script+this.oP.varname+"="+encodeURIComponent(this.sInp);if(!i)return!1;var s=this.oP.meth,t=this.sInp,n=function(i){e.setSuggestions(i,t)},o=function(t){},h=new _b.Ajax;h.makeRequest(i,s,n,o)},_b.AutoSuggest.prototype.setSuggestions=function(a,b){if(b!=this.fld.value)return!1;if(this.aSug=[],this.oP.json)for(var c=eval("("+a.responseText+")"),i=0;i<c.results.length;i++)this.aSug.push({id:c.results[i].id,value:c.results[i].value,info1:c.results[i].info1,info2:c.results[i].info2,hasMore:c.results[i].hasMore});else for(var d=a.responseXML,e=d.getElementsByTagName("results")[0].childNodes,i=0;i<e.length;i++)e[i].hasChildNodes()&&this.aSug.push({id:e[i].getAttribute("id"),value:e[i].childNodes[0].nodeValue,info1:e[i].getAttribute("info1"),info2:e[i].getAttribute("info2"),hasMore:e[i].getAttribute("hasMore")});this.idAs="as_"+this.fld.id,this.createList(this.aSug)},_b.AutoSuggest.prototype.createList=function(t){var e=this;if(_b.DOM.remE(this.idAs),this.killTimeout(),0==t.length&&!this.oP.shownoresults)return!1;var i=_b.DOM.cE("div",{id:this.idAs,className:this.oP.className}),s=_b.DOM.cE("div",{className:"as_corner"}),n=_b.DOM.cE("div",{className:"as_bar"}),o=_b.DOM.cE("div",{className:"as_header"});o.appendChild(s),o.appendChild(n),i.appendChild(o);for(var h=_b.DOM.cE("ul",{id:"as_ul"}),a=0;a<t.length;a++){var r,u,l=t[a].info1;if(null!=l)var c=l.toLowerCase().indexOf(this.sInp.toLowerCase()),u=l.substring(0,c)+"<em>"+l.substring(c,c+this.sInp.length)+"</em>"+l.substring(c+this.sInp.length),u=l,r=_b.DOM.cE("span",{},u,!0);else var r=_b.DOM.cE("span",{},"",!0);if(""!=t[a].info2){if(null!=l){var f=_b.DOM.cE("br",{});r.appendChild(f)}var g=t[a].info2.split("-br-");for(segx in g){if(segx>0){var d=_b.DOM.cE("br",{});r.appendChild(d)}var p=g[segx].split("-nbsp-");nbsp="";for(segx2 in p)nbsp+="&nbsp;&nbsp;";var b=_b.DOM.cE("small",{},nbsp+p[p.length-1],!0);r.appendChild(b)}}var m=_b.DOM.cE("a",{href:"#"}),v=_b.DOM.cE("span",{className:"tl"}," "),_=_b.DOM.cE("span",{className:"tr"}," ");m.appendChild(v),m.appendChild(_),m.appendChild(r),m.name=a+1,m.onclick=function(){return e.setHighlightedValue("onclick"),asnRePrompt&&setTimeout(function(){e.getSuggestions(e.fld.value)},500),asnRePrompt=!1,!1},m.onmouseover=function(){e.setHighlight(this.name)};var y=_b.DOM.cE("li",{},m);h.appendChild(y)}if(0==t.length&&this.oP.shownoresults){var y=_b.DOM.cE("li",{className:"as_warning"},this.oP.noresults);h.appendChild(y)}i.appendChild(h);var O=_b.DOM.cE("div",{className:"as_corner"}),M=_b.DOM.cE("div",{className:"as_bar"}),P=_b.DOM.cE("div",{className:"as_footer"});P.appendChild(O),P.appendChild(M),i.appendChild(P);var C=_b.DOM.getPos(this.fld);i.style.left=C.x+"px",i.style.top=C.y+this.fld.offsetHeight+this.oP.offsety+"px",this.fld.offsetWidth>this.oP.minWidth?i.style.width=this.fld.offsetWidth+"px":i.style.width=this.oP.minWidth+"px",i.onmouseover=function(){e.killTimeout()},i.onmouseout=function(){e.resetTimeout()},document.getElementsByTagName("body")[0].appendChild(i),this.iHigh=0;var e=this;this.toID=setTimeout(function(){e.clearSuggestions()},this.oP.timeout)},_b.AutoSuggest.prototype.changeHighlight=function(t){var e=_b.DOM.gE("as_ul");if(!e)return!1;var i;40==t?i=this.iHigh+1:38==t&&(i=this.iHigh-1),i>e.childNodes.length&&(i=e.childNodes.length),1>i&&(i=1),this.setHighlight(i)},_b.AutoSuggest.prototype.setHighlight=function(t){var e=_b.DOM.gE("as_ul");return e?(this.iHigh>0&&this.clearHighlight(),this.iHigh=Number(t),e.childNodes[this.iHigh-1].className="as_highlight",void this.killTimeout()):!1},_b.AutoSuggest.prototype.clearHighlight=function(){var t=_b.DOM.gE("as_ul");return t?void(this.iHigh>0&&(t.childNodes[this.iHigh-1].className="",this.iHigh=0)):!1},_b.AutoSuggest.prototype.setHighlightedValue=function(t){this.iHigh&&(this.sInp=this.fld.value=this.aSug[this.iHigh-1].value,this.fld.focus(),this.fld.selectionStart&&this.fld.setSelectionRange(this.sInp.length,this.sInp.length),this.clearSuggestions(),"function"==typeof this.oP.callback&&this.oP.callback(this.aSug[this.iHigh-1]),this.handleOptCode(t))},_b.AutoSuggest.prototype.handleOptCode=function(eventType){"*FMTAC"==this.oP.acctReFocusOpt?"1"==this.aSug[this.iHigh-1].hasMore&&(this.fld.value=this.fld.value+".","onclick"==eventType&&(asnRePrompt=!0)):"*GEOFMT"==this.oP.acctReFocusOpt?(GEO=this.aSug[this.iHigh-1].hasMore.split("|"),call=this.oP.functionCall+"('"+GEO[0]+"','"+GEO[1]+"','"+GEO[2]+"','"+GEO[3]+"','"+GEO[4]+"')",eval(call)):"*ITMSLT"==this.oP.acctReFocusOpt?(call=this.oP.functionCall+"(this.fld,'"+this.oP.pgmName+"','"+this.oP.acctReFocusOpt.substring(1)+"')",eval(call)):"*"==this.oP.acctReFocusOpt.substring(0,1)&&(myActn=this.oP.acctReFocusOpt.substring(1),submit_form("f",myActn))},_b.AutoSuggest.prototype.killTimeout=function(){clearTimeout(this.toID)},_b.AutoSuggest.prototype.resetTimeout=function(){clearTimeout(this.toID);var t=this;this.toID=setTimeout(function(){t.clearSuggestions()},1e3)},_b.AutoSuggest.prototype.clearSuggestions=function(){this.killTimeout();var t=_b.DOM.gE(this.idAs),e=this;if(t){new _b.Fader(t,1,0,250,function(){_b.DOM.remE(e.idAs)})}},"undefined"==typeof _b.Ajax&&(_b.Ajax={}),_b.Ajax=function(){this.req={},this.isIE=!1},_b.Ajax.prototype.makeRequest=function(t,e,i,s){"POST"!=e&&(e="GET"),this.onComplete=i,this.onError=s;var n=this;window.XMLHttpRequest?(this.req=new XMLHttpRequest,this.req.onreadystatechange=function(){n.processReqChange()},this.req.open("GET",t,!0),this.req.send(null)):window.ActiveXObject&&(this.req=new ActiveXObject("Microsoft.XMLHTTP"),this.req&&(this.req.onreadystatechange=function(){n.processReqChange()},this.req.open(e,t,!0),this.req.send()))},_b.Ajax.prototype.processReqChange=function(){4==this.req.readyState&&(200==this.req.status?this.onComplete(this.req):this.onError(this.req.status))},"undefined"==typeof _b.DOM&&(_b.DOM={}),_b.DOM.cE=function(t,e,i,s){var n=document.createElement(t);if(!n)return 0;for(var o in e)n[o]=e[o];var h=typeof i;return"string"!=h||s?"string"==h&&s?n.innerHTML=i:"object"==h&&n.appendChild(i):n.appendChild(document.createTextNode(i)),n},_b.DOM.gE=function(t){var e=typeof t;if("undefined"==e)return 0;if("string"==e){var i=document.getElementById(t);return i&&"undefined"!=typeof i.appendChild?i:0}return"undefined"!=typeof t.appendChild?t:0},_b.DOM.remE=function(t){var e=this.gE(t);return e&&e.parentNode.removeChild(e)?!0:0},_b.DOM.getPos=function(t){var t=this.gE(t),e=t,i=0;if(e.offsetParent)for(;e.offsetParent;)i+=e.offsetLeft,e=e.offsetParent;else e.x&&(i+=e.x);var e=t,s=0;if(e.offsetParent)for(;e.offsetParent;)s+=e.offsetTop,e=e.offsetParent;else e.y&&(s+=e.y);return{x:i,y:s}},"undefined"==typeof _b.Fader&&(_b.Fader={}),_b.Fader=function(t,e,i,s,n){if(!t)return 0;this.e=t,this.from=e,this.to=i,this.cb=n,this.nDur=s,this.nInt=50,this.nTime=0;var o=this;this.nID=setInterval(function(){o._fade()},this.nInt)},_b.Fader.prototype._fade=function(){this.nTime+=this.nInt;var t=Math.round(100*this._tween(this.nTime,this.from,this.to,this.nDur)),e=t/100;if(this.e.filters)try{this.e.filters.item("DXImageTransform.Microsoft.Alpha").opacity=t}catch(i){this.e.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+t+")"}else this.e.style.opacity=e;this.nTime==this.nDur&&(clearInterval(this.nID),void 0!=this.cb&&this.cb())},_b.Fader.prototype._tween=function(t,e,i,s){return e+(i-e)*(t/s)},_b.Fader.prototype._tween=function(t,e,i,s){return e+(i-e)*(t/s)};

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.3
 */
(function(){if("undefined"!=typeof window&&window.addEventListener){var e=Object.create(null),m,t,d=function(){clearTimeout(t);t=setTimeout(m,100)},q=function(){},u=function(){var f;window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);window.MutationObserver?(f=new MutationObserver(d),f.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),q=function(){try{f.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",d,
!1)}catch(n){}}):(document.documentElement.addEventListener("DOMSubtreeModified",d,!1),q=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)})},v=function(f){function e(a){var c;void 0!==a.protocol?c=a:(c=document.createElement("a"),c.href=a);return c.protocol.replace(/:/g,"")+c.host}var d,p;window.XMLHttpRequest&&(d=new XMLHttpRequest,p=e(location),f=e(f),d=void 0===d.withCredentials&&
""!==f&&f!==p?XDomainRequest||void 0:XMLHttpRequest);return d};m=function(){function d(){--r;0===r&&(q(),u())}function n(a){return function(){!0!==e[a.base]&&(a.isXlink?a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash):a.useEl.setAttribute("href","#"+a.hash))}}function m(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden","true"),b.style.position=
"absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function p(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,l,g,r=0,b,k=!1,h;q();h=document.getElementsByTagName("use");for(g=0;g<h.length;g+=1){try{c=h[g].getBoundingClientRect()}catch(w){c=!1}(a=h[g].getAttribute("href"))?k=!1:(a=h[g].getAttributeNS("http://www.w3.org/1999/xlink","href"),k=!0);l=a&&a.split?a.split("#"):["",""];a=l[0];l=l[1];b=c&&0===c.left&&0===c.right&&0===
c.top&&0===c.bottom;c&&0===c.width&&0===c.height&&!b?a.length&&(b=e[a],!0!==b&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0),void 0===b&&(k=v(a),void 0!==k&&(b=new k,e[a]=b,b.onload=m(b),b.onerror=p(b),b.ontimeout=p(b),b.open("GET",a),b.send(),r+=1))):b?a.length&&e[a]&&setTimeout(n({useEl:h[g],base:a,hash:l,isXlink:k}),0):void 0===e[a]?e[a]=!0:e[a].onload&&(e[a].abort(),delete e[a].onload,e[a]=!0)}h="";r+=1;d()};window.addEventListener("load",function n(){window.removeEventListener("load",
n,!1);t=setTimeout(m,0)},!1)}})();
//Main javascript
jQuery(document).ready(function(e){
e(".account__collapse").on("show.bs.collapse",function(){e(this).parent().addClass("active")}),
e(".account__collapse").on("hide.bs.collapse",function(){e(this).parent().removeClass("active")}),
e(".mobileFilterToggle").on("click",function(t){t.preventDefault(),e(".mobile-category-filter, .mobile-category-filter__overlay").addClass("active")}),
e(".mobile-category-filter #closeMobileFilter").on("click",function(t){t.preventDefault(),e(".mobile-category-filter, .mobile-category-filter__overlay").removeClass("active")}),
e(".mobile-category-filter #applyMobileFilter").on("click",function(t){t.preventDefault(),console.log("apply mobile filter"),
e(".mobile-category-filter, .mobile-category-filter__overlay").removeClass("active")});
var t=function(){
  var t=e(".mobile-category-filter > .filter__footer"),
  i=e(".mobile-category-filter > .filter__header > .filter__header--info"),
  o=e(".mobile-category-filter > .filter__header > .filter__header--info > .filter__counter"),
  l=e(".mobile-category-filter li label.selected");
  o.text("("+l.length+")"),l.length?(i.addClass("active"),t.addClass("active")):(i.removeClass("active"),t.removeClass("active"))
};
e(".mobile-category-filter > .subnav  .subnav__l2 > li").not(".mobile-filter__l2").on("click",function(i){i.preventDefault(),e(this).toggleClass("selected"),t()}),
e(".mobile-category-filter > .subnav .mobile-filter__label").on("click",function(i){i.preventDefault(),e(this).toggleClass("selected"),t()}),
e(".mobile-category-filter #clearMobileFilter").on("click",function(t){t.preventDefault();var i=e(".mobile-category-filter > .filter__footer"),o=e(".mobile-category-filter > .filter__header > .filter__header--info"),l=e(".mobile-category-filter .selected");l.length&&(l.each(function(){e(this).removeClass("selected")}),o.removeClass("active"),i.removeClass("active"))})
}),
jQuery(document).ready(function(e){
e("[data-step-edit]").on("click",function(t){t.preventDefault();var i=e(this).data("step-edit"),o=e(i),l=e(".checkout__step.active");if(o.toggleClass("active"),l.removeClass("active"),window.innerWidth<=480){var a=o.offset().top;e(window).scrollTop(a-90-15)}}),
e("#stepOneForm").submit(function(t){t.preventDefault(),e("#stepOne").addClass("active")}),
e(".checkout .shipping__radio").change(function(){var t=e(this).val(),i=e("#shipping__price--"+t);e(".shipping__price.selected").removeClass("selected"),i.addClass("selected")})
}),
jQuery(document).ready(function(e){
    function t(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}e("#equip__calculate").on("keyup",function(i){i.preventDefault();var o=(e(this).val(),37*e(this).val()),l=parseInt(o);(o||0===l)&&e("#equip__savings").text(t(o))})}),
jQuery(document).ready(function(e){e("#equip__calculate").on("keyup",function(t){t.preventDefault();var i=(e(this).val(),37*e(this).val());(i||0===i)&&e("#equip__savings").text(i)})}),
jQuery(document).ready(function(e){}),jQuery(document).ready(function(e){ var myVar;

/* BROSSAM - Customized Navigation */
e("#navigation li.menuf").on("mouseenter",function(){
    //Original code start here
    clearTimeout(myVar);e("#navigation-dropdown").addClass("active"),e("#navigation-dropdown .sub-nav-category.active").removeClass("active");var t=e(this).data("href");e("#navigation-dropdown .sub-nav-category#"+t).addClass("active");

    //Default values
    document.getElementById('navigation-dropdown').style.width = "auto";
    document.getElementById('navigation-dropdown').style.left = "auto";

    // $(".hp--logo--carousel--div").fadeOut(500); //Brossam Hide Logo


    //Brossam - Change WIDTH for DEALS Navigation
    var dealsId = e(this).data("href");
    if (dealsId == "div000000000000185") {
        
        //decide LEFT position for dropdown nav
        var dealNavXPos = document.getElementById('deal--nav').getBoundingClientRect().left;
        document.getElementById('navigation-dropdown').style.left = dealNavXPos - 245 + "px";

        //decide WIDTH for dropdown nav
        var currentWidth = window.innerWidth;
        var navigationXPos = document.getElementById('navigation').getBoundingClientRect().left;
        var dealNavWidth = (currentWidth - dealNavXPos - navigationXPos) + 212;
        document.getElementById('navigation-dropdown').style.width = dealNavWidth + "px";
        
        //CHECK if it is INTERNET EXPLORER
        var ifIEBrowser = window.navigator.userAgent;
        var ifTrident = ifIEBrowser.indexOf('Trident/');
        if (ifTrident > 0) {
            dealNavWidth = dealNavWidth + 14;
            document.getElementById('navigation-dropdown').style.width = dealNavWidth + "px";
        }

    } else {
        //Change default values
        document.getElementById('navigation-dropdown').style.width = "auto";
        document.getElementById('navigation-dropdown').style.left = "auto";
    }


    // //Adjust HEIGHT for GEAR only
    // if (e(this).data("href") == "div000000000000183") {
    //     e("#navigation-dropdown").addClass("active-gear"),e("#navigation-dropdown .sub-nav-category.active-gear").removeClass("active-gear");
    // }

}),

e("#navigation li.menuf").on("mouseleave",function(){
    myVar = setTimeout(function(){ e("#navigation-dropdown,#navigation-dropdown .sub-nav-category").removeClass("active") }, 100);
    // $(".hp--logo--carousel--div").fadeIn(0); //Brossam Show Logo

    // //Adjust HEIGHT for GEAR only
    // if (e(this).data("href") == "div000000000000183") {
    //     myVar = setTimeout(function(){ e("#navigation-dropdown,#navigation-dropdown .sub-nav-category").removeClass("active-gear") }, 100);
    // }  

}),
e("#navigation-dropdown").on("mouseenter",function(){
    e(this).addClass("active");var t=e(".sub-nav-category.active").attr("id");e("#F"+t.substring(3)).addClass("active");clearTimeout(myVar);
    // $(".hp--logo--carousel--div").fadeOut(0); //Brossam Hide Logo

    // //Adjust HEIGHT for GEAR only
    // if (e(".sub-nav-category.active").attr("id") == "div000000000000183") {
    //     e(this).addClass("active-gear");e("#F"+t.substring(3)).addClass("active-gear");clearTimeout(myVar);
    // } else {
    //     console.log("NO: 33333333");
    // }


}),
e("#navigation-dropdown").on("mouseleave",function(){
    e(this).removeClass("active"),e("#navigation li.active,#navigation-dropdown .sub-nav-category").removeClass("active");
    // $(".hp--logo--carousel--div").fadeIn(0); //Brossam Show Logo
}),


e("#signInModalForm").submit(function(t){t.preventDefault(),e("#utility-bar__logged-out").addClass("hidden"),e("#utility-bar__logged-in").removeClass("hidden")})}),
function(e){e.fn.slideMenu=function(){"use strict";return this.each(function(){e(".subnav__l2--header").on("click",function(t){t.preventDefault(),e(this).next(".subnav__l3").addClass("isOpen")}),e(".subnav__l3--header").on("click",function(t){t.preventDefault(),e(this).parent().removeClass("isOpen")})})}}(jQuery),
jQuery(document).ready(function(e){function t(){e("body").toggleClass("no-scroll"),e(".mobile-nav").toggleClass("active")}e("#mobile-menu, #mobile-overlay, #mobileSignIn").on("click",function(e){e.preventDefault(),t()}),e("#mobile-sidebar").slideMenu()}),
jQuery(document).ready(function(e){
e(".product__options--list > a").on("click",function(t){
t.preventDefault();
var i=e(this).parent("ul"),
o=e(i).data("text"),
l=e(this).attr("title"),
a=e(this).data("class");}),
e("#product__also-purchased--carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:4},{breakpoint:767,settings:{slidesToShow:2}}]}),e("#product__mobile-slider, #product__quote--carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:4},{breakpoint:767,settings:{slidesToShow:1}}]}),e("[data-zoom]").click(function(t){t.preventDefault();var i=e(this).data("zoom"),o=e("#"+i),l=o.attr("src"),a="";e("#zoomModal .img-zoom").attr("src",l),e(this).data("zoom-title")?(a=e(this).data("zoom-title"),e("#zoomModal .modal-title").text(a)):o.attr("alt")?(a=o.attr("alt"),e("#zoomModal .modal-title").text(a)):e("#zoomModal .modal-title").hide(),e("#zoomModal").modal("show")})}),$(window).resize(function(){}),
jQuery(document).ready(function(e){e("#recommended-products-carousel").slick({arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:2}}]})}),
jQuery(document).ready(function(e){
  e("#headerSearchAutofill").autofill(),e("#mobileSearchAutofill").autofill(),
  e("#mobileSearchIcon,#mobileSearchButton").on("click",function(t){t.preventDefault(),e("#mobileSearchAutofill").addClass("active"),e("#mobileSearchAutofill #mobile-header-search").focus()}),
  e("#mobileSearchAutofill #closeMobileSearch").on("click",function(t){t.preventDefault(),e("#mobileSearchAutofill").removeClass("active")})}),
jQuery(document).ready(function(e){e("#sizeChartTabs a").click(function(t){t.preventDefault(),e(this).tab("show")})}),
function(e){e.fn.reslick=function(t,i){return this.each(function(){var o=screen.width,l="",a={arrows:!1,dots:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:"unslick"},{breakpoint:767,settings:{slidesToShow:i}}]};o<=768?l="xs":o<=992?l="sm":o<=1200?l="md":o<=1400&&(l="lg"),l===t?e(this).not(".slick-initialized").slick(a):e(this).hasClass(".slick-initialized")&&e(this).unslick()})},e.fn.autofill=function(){var t=this.find(".autofill__input"),i=(this.find(".autofill__popup"),this.find(".autofill__search-for"));this.find(".search__autofill--mask");t.on("keyup",function(){var o=e(t).val();e(i).text(o)})}}(jQuery),jQuery(document).ready(function(e){e("[data-visibility]").on("click",function(t){t.preventDefault();var i=e(this).data("visibility");e(i).toggle()})}); 
//Wait Loader Section ==============================================||||||||||==
var iosOverlay=function(a){"use strict";var b,c=function(){},d={onbeforeshow:c,onshow:c,onbeforehide:c,onhide:c,text:"",icon:null,spinner:null,duration:null,id:null,parentEl:null},e=function(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c},f=function(){var a=document.body||document.documentElement,b=a.style,c="transition";if("string"==typeof b[c])return!0;var d=["Moz","Webkit","Khtml","O","ms"];c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}(),g=e(d,a),h=function(a){"ios-overlay-show"===a.animationName&&g.onshow(),"ios-overlay-hide"===a.animationName&&(k(),g.onhide())},j=(function(){b=document.createElement("div"),b.className="ui-ios-overlay",b.innerHTML+='<span class="title">'+g.text+"</span",a.icon?b.innerHTML+='<img src="'+a.icon+'">':a.spinner&&b.appendChild(a.spinner.el),f&&(b.addEventListener("webkitAnimationEnd",h,!1),b.addEventListener("msAnimationEnd",h,!1),b.addEventListener("oAnimationEnd",h,!1),b.addEventListener("animationend",h,!1)),a.parentEl?document.getElementById(a.parentEl).appendChild(b):document.body.appendChild(b),g.onbeforeshow(),f?b.className+=" ios-overlay-show":"function"==typeof $&&$(b).fadeIn({duration:200},function(){g.onshow()}),g.duration&&window.setTimeout(function(){j()},g.duration)}(),function(){g.onbeforehide(),f?b.className=b.className.replace("show","hide"):"function"==typeof $&&$(b).fadeOut({duration:200},function(){k(),g.onhide()})}),k=function(){a.parentEl?document.getElementById(a.parentEl).removeChild(b):document.body.removeChild(b)};return{hide:j,destroy:k,update:function(a){a.text&&(b.getElementsByTagName("span")[0].innerHTML=a.text),a.icon&&(g.spinner&&g.spinner.el.parentNode.removeChild(g.spinner.el),b.innerHTML+='<img src="'+a.icon+'">')}}};!function(a,b,c){function d(a,c){var e,d=b.createElement(a||"div");for(e in c)d[e]=c[e];return d}function e(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function f(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(n.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",n.cssRules.length),l[e]=1),e}function g(a,b){var e,f,d=a.style;if(d[b]!==c)return b;for(b=b.charAt(0).toUpperCase()+b.slice(1),f=0;f<k.length;f++)if(e=k[f]+b,d[e]!==c)return e}function h(a,b){for(var c in b)a.style[g(a,c)||c]=b[c];return a}function i(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function j(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var m,k=["webkit","Moz","ms","O"],l={},n=function(){var a=d("style",{type:"text/css"});return e(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"},p=function a(b){if(!this.spin)return new a(b);this.opts=i(b||{},a.defaults,o)};p.defaults={},i(p.prototype,{spin:function(a){this.stop();var g,i,b=this,c=b.opts,e=b.el=h(d(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),f=c.radius+c.length+c.width;if(a&&(a.insertBefore(e,a.firstChild||null),i=j(a),g=j(e),h(e,{left:("auto"==c.left?i.x-g.x+(a.offsetWidth>>1):parseInt(c.left,10)+f)+"px",top:("auto"==c.top?i.y-g.y+(a.offsetHeight>>1):parseInt(c.top,10)+f)+"px"})),e.setAttribute("aria-role","progressbar"),b.lines(e,b.opts),!m){var k=0,l=c.fps,n=l/c.speed,o=(1-c.opacity)/(n*c.trail/100),p=n/c.lines;!function a(){k++;for(var d=c.lines;d;d--){var f=Math.max(1-(k+d*p)%n*o,c.opacity);b.opacity(e,c.lines-d,f,c)}b.timeout=b.el&&setTimeout(a,~~(1e3/l))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function c(a,c){return h(d(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*g+b.rotate)+"deg) translate("+b.radius+"px,0)",borderRadius:(b.corners*b.width>>1)+"px"})}for(var i,g=0;g<b.lines;g++)i=h(d(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:m&&f(b.opacity,b.trail,g,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&e(i,h(c("#000","0 0 4px #000"),{top:"2px"})),e(a,e(i,c(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),function(){function a(a,b){return d("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=h(d("group"),{behavior:"url(#default#VML)"});!g(b,"transform")&&b.adj?(n.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function d(){return h(a("group",{coordsize:i+" "+i,coordorigin:-g+" "+-g}),{width:i,height:i})}function f(b,f,i){e(k,e(h(d(),{rotation:360/c.lines*b+"deg",left:~~f}),e(h(a("roundrect",{arcsize:c.corners}),{width:g,height:c.width,left:c.radius,top:-c.width>>1,filter:i}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var l,g=c.length+c.width,i=2*g,j=2*-(c.width+c.length)+"px",k=h(d(),{position:"absolute",top:j,left:j});if(c.shadow)for(l=1;l<=c.lines;l++)f(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=c.lines;l++)f(l);return e(b,k)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,(e=e&&e.firstChild)&&(e.opacity=c))}):m=g(b,"animation")}(),"function"==typeof define&&define.amd?define(function(){return p}):a.Spinner=p}(window,document);
var lookAheadReq;
var lookAheadWordLen = 0;
var prevValue="";
var timeouts = [];
var jsDeleteMsg = "";
var jsDeleteMsgB = "";
var jsDeleteMsgC = "";
var jsDeleteMsgD = "";
var loginmode ="";
var GCardCtr;
var comparing;
var addedGC = [];
var HashDelimeter = "*";
var recentHash = "";
var PageNo = "page_no";
var SortBy = "sort_by";     
var perPage = "per_page";
var clicked = "filters";
var filters=[];
var compStyle = [];
var posCtr = 0;
var imgCtr = 0;
var boxes =[];
var opv1 = "";
var opv2 = "";
var opv3 = ""; 
var lastgoodopv2 = "";
var lastgoodopv3 = "";
var lastgoodopv2Q = "";
var lastgoodopv3Q = "";  
var value,desc;
var processing ="";
var styl = $("#style").val();
var origDesc1="";
var origDesc2="";
var origDesc3="";
var filterHeight = $(".product-grid__filter-options").height();
var filteExp = [];
var pvimgclass="";
hideWait();
freeItem();
var iOS = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-*
//Window Resizing

//On Load Search page
checkFromUrl("I");

$( document ).ready(function(){
	getRecommendations('')
    showErrors();
    $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});    
    $('.waitlink').click(function(){
        var linkaddr =$(this).attr("href1");
        
        showWait();setTimeout(function(){ 
             window.location.href = linkaddr; if(iOS)hideWait();}, 100);});
    $("#mobileSearchIcon , #mobileSearchButton").click(function(){$("html, body").animate({ scrollTop:0 }, 500);});
    $("#mobile-header-search").focus;
    //Scroll functions header fixing
    
    searchMain();
    styleMain();
    AccountMain()
    VariousMain();
    
        $(window).scroll(function(){ affixSearch(); });
    
});
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function VariousMain(){
    if($("#SISTEP").length) dfltGC();
     if ($('#showups').val() == 'Y') $("#upsMessage").modal();  
     $("#SISAMEBOX").change(function(){
        if($(this).is( ":checked" )){
      $(".shipSectn").slideUp();
        }
        else{
        $(".shipSectn").slideDown();
        }
    });
    window.onpageshow = function(event) { if (event.persisted) { hideWait(); }};
    init();
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function AccountMain(){
    if(!$(".diffForms").length) return false;
    $(".diffForms").submit(function(){
     if($("#BPANO").val()=="") $("#BPANOACTN").val("NEWPANOB");
    
        var thisform = $( this ); 
           showWait(); 
           $(".actionAlerts").remove();
        $.ajax({
            url: '/CGBCXACC?'+$( this ).serialize(),
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    var info = jQuery.parseJSON( html );
                    var success="";
                    $.each(info, function(key, value) {
                        //Errors
                        if(key=="E"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>"+value+"</strong></div>");
                          success = "N";
                        }
                        //Success
                        if(key=="S"){
                          thisform.prepend("<div style=\"display:none\" class=\"alert alert-success actionAlerts\"><strong>"+value+"</strong></div>"); 
                          if (success=="") success="Y";
                        }
						//PanoB
						if(key == "PANOB"){
							$("#mobileBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' '  
																   + $("#SISZIPB").val() + ' '
																   + $("#SISCTRB").val()); 
							$("#desktopBillingInformationValue").html($("#SISAD1B").val() +', ' 
																   + $("#SISCTYB").val() + ' '  
																   + $("#SISSTAB").val() + ' ' 
																   + $("#SISZIPB").val() + ' '
																   + $("#SISCTRB").val());
              $(".editpanob").html("Change");
               $("#BPANO").val(value);
               $("#BPANOACTN").val("EDITPANOB");
               showWait();
                            setTimeout(function(){ $("#closeBillingbtn").trigger("click"); hideWait();$(".actionAlerts").remove();}, 1000);
						}
                        //Pano
                        if(key=="PANO"){
                            $("#SIPANOS").val(value);
                            $("#SIACTNPANOS").val("EDITPANOS");
                            $("#saveNewShipping").html("Save Changes");
							
							//Full
							var row = '<p class="account__value--desktop clickableAddress" id="shippingF'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
															    + $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#shippingF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullShp");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editShipping(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
																+ $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value+'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() +
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#shippingM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobileShp");
                        }
						//PanoInt
                        if(key=="PANOINT"){
                            $("#SIPANOS").val(value);
                            $("#SIACTNPANOS").val("EDITPANOSINT");
                            $("#saveNewShipping").html("Save Changes");
							
							//Full
							var row = '<p class="account__value--desktop clickableAddress" id="shippingF'+value+'" title="Edit" '+
									  'onclick="editShippingInt(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
															    + $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value + '\',\''																
																+ $("#SISCTRS").val() +'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() + ' '
																+ $("#SISCTRS").val() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#shippingF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullShp");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editShippingInt(\''+ $("#SINAMES").val() +'\',\''
															    + $("#SISAD1S").val() + '\',\''
																+ $("#SISAD2S").val() + '\',\''
																+ $("#SISCTYS").val() + '\',\''
																+ $("#SISSTAS").val() + '\',\''
																+ $("#SISZIPS").val() + '\',\''
																+ $("#SICNTYS").val() + '\',\''
																+ value + '\',\''																
																+ $("#SISCTRS").val() +'\')">'
																+ $("#SISAD1S").val() +', ' 
																+ $("#SISCTYS").val() + ' '  
																+ $("#SISSTAS").val() + ' '  
																+ $("#SISZIPS").val() + ' '
																+ $("#SISCTRS").val() +
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#shippingM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobileShp");
                        }
						//Pnno
                        if(key=="PNNO"){
                            $("#SIPNNO").val(value);
                            $("#SIACTNPNNO").val("EDITPNNO");
                            $("#saveNewPhone").html("Save Changes");
							showWait();
                            setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
							//Full
							var row = '<p class="account__value--desktop clickablePhone" id="phoneF'+value+'" title="Edit" '+
									     'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() + ' - ' 
																+ $("#SITYPE  option:selected").text() +
																'<span class="icon edit"></span></p>';
																
							var oldRow = $("#phoneF"+value);
							if(oldRow.length){
								$(row).insertAfter(oldRow); 
								oldRow.remove();
							}
							else
								$(row).appendTo("#fullPhn");
							//Mobile
							var row = '<p class="account__value--mobile clickableAddress" id="shippingM'+value+'" title="Edit" '+
									  'onclick="editPhone(\''+ $("#SITYPE").val() +'\',\''
															    + $("#SITEL").val() + '\',\''
															    + $("#SIEXT").val() + '\',\''															
																+ value+'\')">'
																+ $("#SITEL").val() +' - ' 
																+ $("#SITYPE").val() + 
																'<span class="icon edit"></span></p>';
					
                            var oldRow = $("#phoneM"+value);
							if(oldRow.length){
								
								$(row).insertAfter(oldRow);
								oldRow.remove();
							}
							else
								$(row).appendTo("#mobilePhn");
                        }
                        $(".actionAlerts").slideDown("slow");
                        if(success=="Y"){
                            switch(thisform.attr("id")){
                                //Saved Profession    
                                case("accountProfessionForm"):
                                    $("#mobileProfessionValue").html($("#SIPTNO :selected").text());
                                    $("#desktopProfessionValue").html($("#SIPTNO :selected").text());
                                    break;
                                //Saved Email    
                                case("accountEmailAddressForm"):
                                    $("#mobileEmailAddressValue").html($("#SIEMALB").val());
                                    $("#desktopEmailAddressValue").html($("#SIEMALB").val());
                                    $("#SIEMAL").val($("#SIEMALB").val());
                                    $("#SIEMALB").val("");
                                    $("#SIEMALC").val("");
                                    break;
								//Saved Password    
                                case("accountPasswordForm"):
                                    $("#SIPSWD").val("");
                                    $("#SIPSWDB").val("");
									$("#SIPSWDC").val("");
                                    break;
                                //Saved Username    
                                case("accountUsernameForm"):
                                    $("#mobileUsernameValue").html($("#SIUSERB").val());
                                    $("#desktopUsernameValue").html($("#SIUSERB").val());
                                    $("#SIUSER").val($("#SIUSERB").val());
                                    $("#SIUSERB").val("");
                                    $("#SIUSERC").val("");
                                    break;
                                    
                            }
                        }
                        
                    });
                    
            }
        });
       
});
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function styleMain(){
     if(!$("#styleForm").length) return false;        
            imgCtr = $(".product__gallery--thumbnail").length;
			setcarousel('.opv1.opv2.opv3');
            var finalprice = '$' + parseFloat($("#lspr").val()).toFixed(2);   
            if (finalprice !== '$0.00')
                $(".qtyPrice").html(finalprice);
            else
                $(".qtyPrice").html("");  
            choices('CGBCSTYL');
            imageListners();
			ImageChange();
             
    //Customize Button
    $('.customize-button').click(function () {
        showWait();
        var edp = $("#SIEDP").val();
        var qty = $("#SIQTY").val();
        var cdno = $("#SICDNO").val();
        var e1no = $("#SIE1NOE").val();
        $.ajax({
            url: '/CGBCXSTYL?SIACTN=LOADALL&SIEDP='+edp+'&SIQTY='+qty+'&SICDNO='+cdno+'&SIE1NO='+e1no,
            type: "get",
            dataType: 'html',
            success: function(html){ 
                $('#customBody').html(html);
                hideWait();
                $('#customizeModal').modal();
            }
        });
    });
}


function writeRecomm(){	
        $.ajax({
            url: '/CGBCSTYL',
            type: 'get',
            dataType: 'html',
            data: {
				RECOMMEND: 'W'

            }
        ,success:function(html) {}
		})
}
//======================================================================================================
function getRecommendations(mode){
	
	if($("#recommendations"+mode.trim()).length <1) return;
	var styl = $('[name=SISTYL]').val();
        $.ajax({
            url: '/CGBCSTYL',
            type: 'get',
            dataType: 'html',
            data: {
                SISTYL: styl,
				RECOMMEND: 'Y'

            }
        ,success:function(html) {

            $("#recommendations"+mode.trim()).html(html);
			
			$('.owl-carousel').owlCarousel({
            loop: true,
            margin: 20,
			dots:true,
            nav: true,
			autoplay:true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
				1300: {
                    items: 4
                }
            },
			navText : ['<img src="/images/arrow-left.png">','<img src="/images/arrow-right.png">']
        });
$('.owl-dot').click(function() {
    $('.owl-dot').trigger('to.owl.carousel', [$(this).index(), 1000]);
})
            
//if(mode=="Q")writeRecomm();
        }
		})
	
	
}

//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setpage(page){
               $("#pagination__dropdown").val(page);
               SetHashValue(PageNo,page);              
}
function searchMain(){ 
    if (!$('.category').length) { return false;}
    if (!$('#notUnbxd').length) { return false;} 
  setInterval(checkHash, 100);
  

  //Cache html Controls
  var filterResult    = $("#filter__results");
  var filterResultM   = $("#mobile-filter__results");

  var perpage24       = $("#perpage24");
  var perpage48       = $("#perpage48");
  var perpage96       = $("#perpage96");
  var perpageAl       = $("#perpageAll");
  var previousB       = $("#pagination__link--prev");
  var previousB_Bottom       = $("#pagination__link--prev_bottom"); //Brossam (Bottom Pagination)
  var nextB           = $("#pagination__link--next");
  var nextB_Bottom           = $("#pagination__link--next_bottom");   //Brossam (Bottom Pagination)
  var pagenumber      = $("#pagination__dropdown");
  var leftMenu        = $(".leftMenu");
  var leftMenu1       = $(".leftMenu1");
  var leftMenuM       = $(".leftMenuM");
  var leftMenuMC      = $(".leftMenuMC label");
  var sortf           = $("#product-grid__filter--sortf");
  var sortf_bottom           = $("#product-grid__filter--sortf_bottom");       //Brossam (Bottom Pagination)
  var sortm           = $(".product-grid__filter--sort");
  var viewGrid        = $("#viewGrid");
  var viewGrid_Bottom        = $("#viewGrid-bottom");      //Brossam (Bottom Pagination)
  var viewList        = $("#viewList");
  var viewList_Bottom        = $("#viewList-bottom");      //Brossam (Bottom Pagination)
  
  markCompare();
  //Listeners On load
perpage24.click(function(){ //Clicked 24 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(24);
                getSearch("FILTER");
});

perpage48.click(function(){ //Clicked 48 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(48);
                getSearch("FILTER");
});

perpage96.click(function(){ //Clicked 96 Per Page+++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(96);
                getSearch("FILTER");
});

perpageAl.click(function(){ //Clicked View All++++++++++++++++++++++++++++++++++
                $("#pagination__dropdown").val(1);
                $("#SIIPPG").val(500);
                getSearch("FILTER");
});

nextB.click(function(){ //Clicked Next Button+++++++++++++++++++++++++++++++++++  
               $("#pagination__link--next a").blur();    
               if(nextB.hasClass("disabled")) return;
               var next = parseInt($("#pagination__dropdown").val()) + 1;
               $("#pagination__dropdown").val(next);                
               SetHashValue(PageNo,next);               
});
//Brossam (Bottom Pagination)
nextB_Bottom.click(function(){ //Clicked Next Button+++++++++++++++++++++++++++++++++++  
    $("#pagination__link--next_bottom a").blur();    
    if(nextB.hasClass("disabled")) return;
    var next = parseInt($("#pagination__dropdown").val()) + 1;
    $("#pagination__dropdown").val(next);                
    SetHashValue(PageNo,next);               
});

previousB.click(function(){  //Clicked Previous Button++++++++++++++++++++++++++
               $("#pagination__link--prev a").blur();
               if(previousB.hasClass("disabled")) return;
               var prev = parseInt($("#pagination__dropdown").val()) - 1; if(prev<=0) prev=1;
               $("#pagination__dropdown").val(prev);
               SetHashValue(PageNo,prev);                                     
});
//Brossam (Bottom Pagination)
previousB_Bottom.click(function(){  //Clicked Previous Button++++++++++++++++++++++++++
    $("#pagination__link--prev_bottom a").blur();
    if(previousB.hasClass("disabled")) return;
    var prev = parseInt($("#pagination__dropdown").val()) - 1; if(prev<=0) prev=1;
    $("#pagination__dropdown").val(prev);
    SetHashValue(PageNo,prev);                                     
});


viewList.click(function(){
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    $("#viewList-bottom span").addClass("selected");        //Brossam (Bottom Pagination)
    $("#viewGrid-bottom span").removeClass("selected");     //Brossam (Bottom Pagination)
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
});
//Brossam (Bottom Pagination)
viewList_Bottom.click(function(){
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    $("#viewList-bottom span").addClass("selected");
    $("#viewGrid-bottom span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();

    if (document.getElementById('scrollIndicatorf')) {
        $("html, body").animate({ scrollTop: document.getElementById('scrollIndicatorf').offsetTop });
    }
    
});

viewGrid.click(function(){
    $("#viewList span").removeClass("selected");
    $("#viewGrid span").addClass("selected");
    $("#viewList-bottom span").removeClass("selected");    //Brossam (Bottom Pagination)
    $("#viewGrid-bottom span").addClass("selected");       //Brossam (Bottom Pagination)
    showWait();
    $(".product-grid__col").addClass("col-xs-6 col-sm-6");
    $(".clearfix1").addClass("hidden");
    $(".clearfix2").removeClass("hidden");
    hideWait();
});
//Brossam (Bottom Pagination)
viewGrid_Bottom.click(function(){
    $("#viewList span").removeClass("selected");
    $("#viewGrid span").addClass("selected");
    $("#viewList-bottom span").removeClass("selected");
    $("#viewGrid-bottom span").addClass("selected");
    showWait();
    $(".product-grid__col").addClass("col-xs-6 col-sm-6");
    $(".clearfix1").addClass("hidden");
    $(".clearfix2").removeClass("hidden");
    hideWait();

    if (document.getElementById('scrollIndicatorf')) {
        $("html, body").animate({ scrollTop: document.getElementById('scrollIndicatorf').offsetTop });
    }

});

sortf.change(function(){ //Sorting Change Full+++++++++++++++++++++++++++++++

    //Brossam (Bottom Pagination)
    $("#product-grid__filter--sortf_bottom").val($("#product-grid__filter--sortf").val())   //Brossam - Make two value of select box consistent

    SetHashValue('page_no', '1');             
    getSearch("FILTER");
});

//Brossam (Bottom Pagination)
sortf_bottom.change(function(){ //Sorting Change Full+++++++++++++++++++++++++++++++

    $("#product-grid__filter--sortf").val($("#product-grid__filter--sortf_bottom").val())   //Brossam - Make two value of select box consistent
    
    SetHashValue('page_no', '1');             
    getSearch("FILTER");
});

sortm.change(function(){ //Sorting Change Mobile+++++++++++++++++++++++++++++
                sortm.val($(this).val());
                sortf.val($(this).val());
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

pagenumber.change(function(){ //Changed Page++++++++++++++++++++++++++++++++++++

               var next = parseInt($(this).val());
               $("#pagination__dropdown").val(next);
               SetHashValue(PageNo,next);
               
             

  });
  
$("#clearMobileFilter").click(function(){
     $(".leftMenuM").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
     $(".leftMenuMC").each(function(){
            $(this).removeClass("selected");
            var mid = $(this).attr("id").substring(1);
            $("#"+mid+' input').prop('checked', false);
     });
        SetHashValue('page_no', '1');             
        getSearch("FILTER");
});  
$(".resetfilters").click(function(){
	$(this).parentsUntil('.panel-body').parent().find('input').prop("checked",false);
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});
$("#filter__toggle").click(function(){
    showWait("B");
    adjustClearFix();
    hideWait();  
        
});

$( "body main.category" ).click(function( event ) {
  if( event.target.className == undefined) return false;
  if( String(event.target.className).indexOf("compare")>=0) return false;
  if( String(event.target.parentElement.className).indexOf("compare")>=0) return false;
   $(".compare-tooltip").hide();
});

//Filters Listners
leftMenuM.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
                
                $('#SICURRM').val("M" + $( this ).parent('.subnav__l2').attr("id"));
				var mid = $(this).attr("id").substring(1);
                if($(this).hasClass("selected"))
                    $("#"+mid+' input:first').prop('checked', true);
                else
                    $("#"+mid+' input:first').prop('checked', false);
                SetHashValue('page_no', '1');             
                getSearch("FILTER");                
});

leftMenuMC.click(function(){ //Clicked any Mobile filter+++++++++++++++++++++++++
               $('#SICURRM').val("MCategoryL2");
                
                var mid = $(this).parent("li").attr("id").substring(1);
                if($(this).hasClass("selected")){
                    $(this).next('ul').find('li').slideDown();
                    $("#"+mid+' input:first').prop('checked', true);
                }                    
                else{
                    $("#"+mid+' input:first').prop('checked', false);
                    $(this).next('ul').find('li').each(function(){
                        $(this).slideUp();
                        var mid = $(this).attr("id").substring(1);
                        $("#"+mid+' input:first').prop('checked', false);
                        $(this).find("label").first().removeClass("selected");
                    });
                }
                SetHashValue('page_no', '1');             
                getSearch("FILTER");
});

leftMenu.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});
leftMenu1.change(function(event){ //Clicked any Full filter+++++++++++++++++++++++++++
				event.stopPropagation();	
                if($(this).hasClass("disabled")) {$(this).find('input:first')["0"].checked=false;return false;}
                $('#SICURR').val($(this).parentsUntil('.panel-collapse').parent().attr('id'));
                SetHashValue('page_no', '1');             
                if($(this).find('input:first')["0"].checked){         
                      $( this ).children('div').children().children().each(function(){
                              $(this).slideDown();
                          }); }
                else{
                      $( this ).children('div').find('li').slideUp();
                      $( this ).children('div').children().children().find('input').each(function(){ 
                      $(this)["0"].checked = false;
                      });
                     }
                     getSearch("FILTER");
});

//Filter Collapse expand
$(".panel-link").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".panel .panel-collapse").slideUp();
        $(".panel-link").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")) { $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});
//Filter Collapse expand mobile 
$(".mobileGroup .subnav__l1").click(function(){
        $("#openFilter").val('');
        $("#firstClick").val("N");
        var collapsed = $(this).hasClass("collapsed");
        $(".subnav__l2").slideUp();
        $(".subnav__l1").addClass("collapsed");
        if (!collapsed) $(this).removeClass("collapsed");
        $(this).toggleClass("collapsed");
        if(!$(this).hasClass("collapsed")){ $("#"+$(this).attr("expand")).slideDown(); $("#openFilter").val($(this).attr("targetid"))}
});


$("#clearAllFilters").click(function(){
    $('.panel-body').find('input').prop("checked",false);
        syncMtoFull();
	SetHashValue('page_no', '1');             
    getSearch("FILTER");
});





//Reload filters on back button.
if($("#firstClick").val()!=="Y"){ 
        $("#onUnload").val("Y");
       // if ($(".chkselection:checked").length > 0 || $(".fstlvl:checked").length > 0) { getSearch("FILTER"); }
        
        var pagelength    = parseInt($("#SIIPPG").val());
        $("#perpageAll").removeClass("active");
        $("#perpage24").removeClass("active");
        $("#perpage48").removeClass("active");
        $("#perpage96").removeClass("active");
        var page_no = GetHashValue(PageNo);
    
    switch (pagelength){
        case 24:
            if(parseInt(page_no)>1)
                $("#perpage24").addClass("active");
            else
                $("#perpage24").trigger("click");
            break;
        case 48:
            if(parseInt(page_no)>1)
                $("#perpage48").addClass("active");
            else
                $("#perpage48").trigger("click");
            break;
        case 96:
            if(parseInt(page_no)>1)
                $("#perpage96").addClass("active");
            else
                $("#perpage96").trigger("click");
            break;
        default:
            if(parseInt(page_no)>1)
                $("#perpageAll").addClass("active");
            else
                $("#perpageAll").trigger("click");
            break;
        
    }
       if(parseInt(page_no)>1){if ($(".chkselection:checked").length > 0 || $(".fstlvl:checked").length > 0) { getSearch("FILTER"); }}
       if($("#filters").val()=="N") adjustClearFix();
        if($("#openFilter").val()!==""){
                $("#full"+$("#openFilter").val()).removeClass("collapsed");
                $("#collapse"+$("#openFilter").val()).slideDown();
                $("#mobil"+$("#openFilter").val()).removeClass("collapsed");
                $("#"+$("#openFilter").val()+"L2").slideDown();
        }
        syncMtoFull();
}
affixSearch();
$("img.lazy").lazyload({ threshold : 600 }); 

categExpand(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function categExpand(){

if($("#fullCategory").length) {

//var catg = $("#SIWTNO").val();
//Only Categories
//if( catg == "") return false;
if($("#SISRCH").val() !== "") return false;
//if($("#SIAVNO").val() !== "") return false;

//Check Category
//$("#fullCategory").trigger( "click" );
$(".mobileGroup").first().find("ul").show().removeClass("collapsed");
$(".mobileGroup").first().find("a").removeClass("collapsed");

$("#collapseCategory input").each( function(){
    if($(this).is(':checked')){  $(this).parent().parent().children('div').children().children().slideDown();
                           }})

}

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function toggleHemming(){
    if($("#SIHEMD").is( ":checked" )){
        $("#opv3ULH").removeClass("hidden");
        $("#opv3ULH").fadeIn();  
        
        }else{
        $("#opv3ULH").fadeOut();
        $("#opv3ULH").addClass("hidden");        
        var topselect = 'N'
        $("#opv3UL li").each(function(){
        if($(this).hasClass('selected')){ topselect = 'Y';return false;}
            });
        if(topselect == 'Y') return false;
         origDesc3 = "Select "+ $("#origDesc3").html();
        $("#product__options--size2").html(origDesc3);
        $("#opv3ULH li").each(function(){
        if($(this).hasClass('selected')){
           $(this).removeClass('selected');
           $("#SIOPV3").val("");
        }
            });
            
        }
        if(! $("#opv3ULH li").first().hasClass("disabled"))
            $("#opv3ULH li").first().addClass("selected").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function toggleHemmingQ(){
    if($("#SIHEMD").is( ":checked" )){
        $("#Qopv3ULH").removeClass("hidden");
        $("#Qopv3ULH").fadeIn();  
        
        }else{
        $("#Qopv3ULH").fadeOut();
        $("#Qopv3ULH").addClass("hidden");        
        var topselect = 'N'
        $("#Qopv3UL li").each(function(){
        if($(this).hasClass('selected')){ topselect = 'Y';return false;}
            });
        if(topselect == 'Y') return false;
         origDesc3 = "Select "+ $("#origDesc3").html();
        $("#product__options--size2").html(origDesc3);
        $("#Qopv3ULH li").each(function(){
        if($(this).hasClass('selected')){
           $(this).removeClass('selected');
           $("#QSIOPV3").val("");
        }
            });
            
        }
        if(! $("#Qopv3ULH li").first().hasClass("disabled"))
            $("#Qopv3ULH li").first().addClass("selected").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideWait(){
    $('.ui-ios-overlay').hide();  //fade them both out
    $("#waitBckgd").hide();
    $("#waitBckgd").remove();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showWait(mode){   
    var opts = {
		lines: 13, // The number of lines to draw
		length: 11, // The length of each line
		width: 5, // The line thickness
		radius: 17, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		color: '#FFF', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		top: 'auto', // Top position relative to parent in px
		left: 'auto' // Left position relative to parent in px
	};
	var target = document.createElement("div");
        target.setAttribute("id", "waitDiv");
	document.body.appendChild(target);
        if (mode =="B"){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
        }
	var spinner = new Spinner(opts).spin(target);
	var overlay = iosOverlay({
		text: "Loading",
		spinner: spinner
	});
}  
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showBckg(){
            var target = document.createElement("div");
            target.setAttribute("id", "waitBckgd");
            document.body.appendChild(target);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAheadL(mode){
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
        words = words.replace(/</g, "&lt;").replace(/>/g, "&gt;");  
        submitSearch(words);
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getLookAhead(e,mode){
    var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
    words = words.replace(/</g, "&lt;").replace(/>/g, "&gt;");  
    if($.trim(words).length<2){hideLookAhead();clearTimeoutAll();return;} 
    if(e.keyCode == 13){
        submitSearch(words);
        hideLookAhead();
        clearTimeoutAll();
        return;
    }
    if($.trim(words).length == lookAheadWordLen){
    hideLookAhead();
    clearTimeoutAll();
    return;
    }
    clearTimeoutAll();
 timeouts.push( setTimeout(function() {
  var word = $("#header-search").val();
  if (mode == "M") word = $("#mobile-header-search").val(); 
  word = word.replace(/</g, "&lt;").replace(/>/g, "&gt;");  
  if($.trim(word).length == lookAheadWordLen){
    return;
  }
  if($.trim(word).length != (word).length){
    return;
  }
  
  if(e.keyCode == 13 || e.keyCode == 9){
      
    return;
  }
  
  if(lookAheadReq){
    clearTimeoutAll(); 
    return;
  }
  
  hideLookAhead();
  if($.trim(word).length < 3){
  clearTimeoutAll();
   return;
  }
  
  if(prevValue!=$.trim(word)){
  lookAheadReq = true;
  clearTimeoutAll();
  $(".autofill__search-for").html(word);
  

  

  $.ajax({
    url: "/CGBCXSUGG?SIWORD="+word+"&SIMODE="+mode,
    success: function(result){                             
        var words = $("#header-search").val();
	if (mode == "M") words = $("#mobile-header-search").val(); 
    words = words.replace(/</g, "&lt;").replace(/>/g, "&gt;");   
        if($.trim(words).length < 3){return false;}
      if(result != "*EMPTY"){
        $("#suggestDropDown"+mode).html(result);
        if(result!="")
         $(".suggestDropDown"+mode).fadeIn();
        else
         $(".suggestDropDown"+mode).fadeOut();

      }     lookAheadReq = false;
      $("#suggestDropDown"+mode+" li ul li").mouseenter(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mousemove(lookAheadMouseEnter);
      $("#suggestDropDown"+mode+" li ul li").mouseleave(lookAheadMouseLeave);
  }}); }
  prevValue=$.trim(word);
  },200));
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetLookAhead(){  
  hideLookAhead();
  $("#header-search").val("");
  $("#mobile-header-search").val("");
  $("#suggestDropDownF").html("");
  $("#suggestDropDownM").html("");
  $(".suggestDropDownF").hide();
  $(".suggestDropDownM").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideLookAhead(){  
  prevValue ="";
  if($(".pts_ac_suggestion:hover").length) {
    return;
  }
  if($(".pts_ac_product:hover").length) {
    return;
  }  
  $(".suggestDropDown").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearTimeoutAll(){
for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
}
//quick reset of the timer array you just cleared
timeouts = [];} 
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function PlayVideo(vcode){
  var width = $("#galleryMain").width()-20;
  var height = $("#galleryMain").height()-150;
  $(".product__gallery--thumbnail").removeClass("active");
  $("#videoDiv").removeClass("hidden");
  $("#videoDiv").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
}                     
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseEnter(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");
  $(e.target).parentsUntil("ul",".pts_ac_level").addClass("pts_ac_active");    
}                      
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function lookAheadMouseLeave(e) {
  var lookAheadActive = document.getElementsByClassName("pts_ac_active");
  cur = lookAheadActive[0];
  $(cur).removeClass("pts_ac_active");    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submitSearch(word){  
    showWait("B");
    clearCrossScript();
    word = word.replace("&", "|"); 
    word = word.replace("%", "");
    if(word=="") {hideWait();return false;}
    if(word.length < 2){ hideWait();return false;}
    hideLookAhead();
    resetLookAhead();
    clearTimeoutAll();
    $("#mobile-header-search").val("");
    $("#header-search").val("");
    $(".autofill__input").blur();
    word = word.replace(/#/g, '%23');
    setTimeout(function(){
        window.location.href = "/search/"+word;
    },100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearCrossScript(){
var inputs = $(':input');
    inputs.each(function() {
    if ($(this).val()!=''){ 
//Clean Input    
    var content = $(this).val();
    if(content !== undefined && content!=null){
    content = content.replace(/<script(.*)/gi, "");
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    content = content.replace(/[\"\'][\s]*javascript:(.*)[\"\']/gi, "\"\"");
    content = content.replace(/eval\((.*)\)/gi, "");
    }
    //$(this).val(content);
    }
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewList(mode){
    if(mode!=="Y") return false;
    $("#viewList span").addClass("selected");
    $("#viewGrid span").removeClass("selected");
    showWait();
    $(".product-grid__col").removeClass("col-xs-6 col-sm-6");
    $(".clearfix1").removeClass("hidden");
    $(".clearfix2").addClass("hidden");
    hideWait();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(leftfilter.hasClass("hiddenf")){
        $("#filters").val("Y");
        productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
        
        leftfilter.removeClass("hiddenf");
        leftfilter.fadeIn();
    }
  else{ $("#filters").val("N");
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        leftfilter.addClass("hiddenf");
        leftfilter.hide();        
        
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustClearFix2(){
    var leftfilter =  $("#leftFilter");
    var products   =  $(".product-grid__col");
    var productgrid=  $("#product-gridp");
    var clearfix3  =  $(".clearfix3")
    var clearfix4  =  $(".clearfix4")
 
  if(!leftfilter.hasClass("hiddenf")){
        
        productgrid.addClass("col-sm-12");
        productgrid.removeClass("col-md-9");
        
        products.addClass("col-lg-4");         
        products.removeClass("col-lg-3");
        
        clearfix4.addClass("hidden");
        clearfix3.removeClass("hidden");
    }
  else{ productgrid.addClass("col-md-9");
        productgrid.removeClass("col-sm-12");
        
        clearfix4.removeClass("hidden");
        clearfix3.addClass("hidden");
  
        products.addClass("col-lg-3");
        products.removeClass("col-lg-4");
        
        
  }
                                                              
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function SetHashValue(HashParameter, HashValue) {     
  // var hash = window.location.hash.substr(1);
  // hash = hash.replace("products_scroll", "");
  // if (hash == "") {
  //   window.location.hash = HashParameter + "=" + HashValue + HashDelimeter;
  // }
  // else if (hash.search(HashParameter) == -1) {
  //   window.location.hash = hash + HashParameter + "=" + HashValue + HashDelimeter;
  // }
  // else {
  //   var PostSplit = hash.split(HashDelimeter);
  //   var NewHash = "";

  //   //new loop ie8 issue
  //   var i = 0, len = PostSplit.length;
  //   for (i; i < len; i++) {
  //     if (PostSplit[i] != "") {
  //       if (PostSplit[i].search(HashParameter) != -1) {
  //         PostSplit[i] = HashParameter + "=" + HashValue;
  //       }
  //       NewHash = NewHash + PostSplit[i] + HashDelimeter;
  //     }
  //   }
  //   window.location.hash = NewHash;
  // }

  var query = getQString();
  var params = new URLSearchParams(query);
  var hash = params.get(HashParameter);
  if (!hash) {
    params.append(HashParameter, HashValue);
  } else {
    params.set(HashParameter, HashValue);
  }
  window.location.params = '?'+params.toString();

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function GetHashValue(HashParameter) {
  // var hash = window.location.hash.substr(1);
  // if (hash == "") {
  //   return null;
  // }
  // var PostSplit = hash.split(HashDelimeter);
  // //new loop ie8 issue
  // var i = 0, len = PostSplit.length;
  // for (i; i < len; i++) {

  //   if (PostSplit[i].search(HashParameter) != -1) {
  //     return PostSplit[i].substr(HashParameter.length + 1);
  //   }
  // }
  // return null;

  var params = new URLSearchParams(getQString());
  var hash = params.get(HashParameter);
  if (!hash) {
    hash = '1';
  }
  return hash;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkHash() {
  // var hash = document.location.hash;
  // hash = hash.substr(1);
  // if (hash == recentHash || (hash == "page_no=1*" && recentHash == "")) {
  //   return;
  // }
  // recentHash = hash;
  // loadPage();

  var hash = GetHashValue(PageNo);
  if (hash == recentHash || (hash == "1" && recentHash == "")) {
    return;
  }
  recentHash = hash;
  loadPage();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getQString() {
  var query = "";
  if (window.location.params !== undefined)
    query = window.location.params.substring(1);
  else
    query = window.location.search.substring(1);
  return query;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function BuildUrl(pageLength, sortBy) {
    var keywords, wtno, url, indxt, indxb;
    keywords  = $("#SISRCH").val();
    wtno      = $("#SIWTNO").val();
    indxt     = $("#SIINDXT").val();
    indxb     = $("#SIINDXB").val();

    url = "/CGBCSRCH?SIAJAXMODE=Y&SIAJAXACTN=FILTER&SIWTNO=" + wtno + "&SIINDXT=" + indxt + "&SIINDXB=" + indxb + "&SIIPPG=" + pageLength + "&SISORT=" + sortBy;
  
    return url;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function getFilters(){
	var urlflt = [];
    //$("#firstClick").val("N");   
var filterList = "";
      $(".leftMenu").each(function(){
                var inp = $(this).find('input:first')["0"];  
                if(inp.checked)urlflt.push(inp.id); 
                var nochildchkd = true;
                    $(this).find('.leftMenu1').each(function(){
                     var inp1 = $(this).find('input:first')["0"];  
                     if(inp1.checked)urlflt.push(inp1.id);                     
                     if(!$("#"+inp1.id).parentsUntil('li').parent().find('div input:checked').length)
                            if(inp1.checked){
                                nochildchkd = false;     
								
                                if(filterList=="") 
                                    filterList += inp1.id;
                                else
                                    filterList += "," + inp1.id; }
                    });
                 
                if(inp.checked && nochildchkd){
                    if(filterList=="") 
                       filterList += inp.id;
                    else
                       filterList += "," + inp.id; }
      });
	adjustUrl(urlflt);
    return filterList;
    
}
function adjustUrl(arrayUrl){
	//if(window.chrome) return false;
var urldata ="";
var prvattr ="";
var seprtr ="";

var hash = GetHashValue(PageNo);
if (hash != '1') {
  urldata = "?" + PageNo + "=" + hash;
}

var catg = [];
arrayUrl.forEach(function (element) {
  if (element.substring(0, 10) == 'CATEG_____') {
    catg.push(element.substring(10));
  }
});
var hideCatg = false;
if (catg.length > 0 && catg[catg.length-1] == window.location.pathname.substring(1)) hideCatg = true;

arrayUrl.forEach(function(element) {
  if (element.substring(0, 10) == 'CATEG_____' && hideCatg) return;

  if(prvattr !== element.substring(0, 10)){
	  seprtr ="";
	  if(urldata==""){
		  urldata = "?" + element.substring(0,10).replace(/_/g, '') + "=";
	  }else{
		  urldata = urldata.trim() + "&"+element.substring(0,10).replace(/_/g, '') + "=";
	  }
  }
  
  prvattr = element.substring(0, 10);
  urldata = urldata.trim() + seprtr.trim() +element.substring(10);
  
  seprtr =",";
});
if ($("#product-grid__filter--sortf").val() !== 'BESTSELL') {
  if (urldata !== "")
    urldata = urldata.trim() + "&PMSORT=" + $("#product-grid__filter--sortf").val();
  else {
    urldata = urldata.trim() + "?PMSORT=" + $("#product-grid__filter--sortf").val();
  }
}

var filtid = $("#openFilter").val();
if(urldata !=="" && filtid!=="" && !($("#"+filtid).hasClass("collapsed"))) urldata = urldata.trim() + "&PMFILT="+$("#openFilter").val();

// window.location.params = urldata;
var params = new URLSearchParams(urldata);
paramsKeys = Array.from(params.keys());
var paramsOg = new URLSearchParams(getQString());
paramsOg.forEach((value, key) => {
  if (!paramsKeys.includes(key) && (key.substring(0, 4) == 'utm_' || key.substring(0, 3) == 'mc_')) {
    params.append(key, value);
  }
});
if (params.size > 0) {
  window.location.params = '?' + params.toString();
} else {
  window.location.params = '';
}

// window.history.replaceState( {}, null,  window.location.origin+window.location.pathname + window.location.params+window.location.hash );
window.history.replaceState({}, null, window.location.origin + window.location.pathname + window.location.params);

	
	


}	
function checkFromUrl(mode){
  if (!$('.category').length) { return false;}
	var query ="";
	if( window.location.params !== undefined)
	 query = window.location.params.substring(1);
else
	 query =  window.location.search.substring(1);
 if(query!==undefined && query !==""){
	var params = {};
	var vars = query.split('&');
  var doLoadPage = false;
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
    if (pair[0] != 'PMSRCE' && pair[0].substring(0,4) != 'utm_' && pair[0] != 'externalId' && pair[0].substring(0,3) != 'mc_') doLoadPage = true;
	}
	Object.keys(params).forEach(function(key) {
    checkBox(key, params[key]);
	});
	if(mode=="I" && pair.length > 0){
	syncMtoFull();     
    recentHash = document.location.hash;recentHash = recentHash.substr(1);
    //getSearch("FILTER");
  if (doLoadPage) loadPage();
	if($("#openFilter").val()!==""){
                $("#full"+$("#openFilter").val()).removeClass("collapsed");
                $("#collapse"+$("#openFilter").val()).slideDown();
                $("#mobil"+$("#openFilter").val()).removeClass("collapsed");
                $("#"+$("#openFilter").val()+"L2").slideDown();
        }
	}
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkBox(attr,attrid){
		if(attr=="PMFILT"){
        $("#openFilter").val(attrid);
        if($('#SICURR').val()=="")$('#SICURR').val('collapse'+attrid);
        return;}
	if(attr=="PMSORT"){$("#product-grid__filter--sortf").val(attrid);return;}
	while (attr.length <10) {
		attr = attr.trim()+'_';
}


var idarr = attrid.split(",");
                                  
idarr.forEach(function(id) {$("#"+attr+id).prop( "checked", true );} )

	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadPage() {
    var page_no = GetHashValue(PageNo);
    var per_page = GetHashValue('per_page');
    if(parseInt(page_no)<1)page_no=1;
    if(parseInt(per_page)!=24 || parseInt(per_page)!=48 || parseInt(per_page)!=96 || parseInt(per_page)!=500 ){ per_page = $("#SIIPPG").val(); if(per_page<=0) per_page =24;}
    $("#pagination__dropdown").val(page_no);
    $("#SIIPPG").val(per_page);
    getSearch("PAGE");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewListG(){
    $("#viewGridG span").removeClass("selected");
    $("#viewListG span").addClass("selected");
    $("#viewList").trigger("click");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function viewGridG(){
    $("#viewListG span").removeClass("selected");
    $("#viewGridG span").addClass("selected");
    $("#viewGrid").trigger("click");
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getSearch(action) {  //Old RefreshResults()
    
    
    var keywords, wtno, url, brand, atid, avno, indxt, indxb, ippg, sort, cler,nlpr, avds, nwit, rfno;
    showWait("B");
    keywords = $("#SISRCH").val();
    wtno     = $("#SIWTNO").val();
    atid     = $("#SIATID").val();
    avno     = $("#SIAVNO").val();
    indxt    = $("#SIINDXT").val();
    indxb    = $("#SIINDXB").val();
    ippg     = $("#SIIPPG").val();
    sort     = $("#product-grid__filter--sortf").val();
    cler     = $("#SICLER").val();
    nlpr     = $("#SINLPR").val();
    avds     = $("#SIAVDS").val();
    nwit     = $("#SINWIT").val();
    list     = "";
    
    if($("#viewList span").hasClass("selected"))
        list = "Y";
    else
        list = "N";
    
    
    if (action == "FILTER"){
      rfno = 1;
    }
    else 
    if (action == "SORT"){
      rfno = sort;
    }
    else if (action == "PAGE"){
      rfno = parseInt($("#pagination__dropdown").val());
    }
    
    $.ajax({
        url: "/CGBCSRCH",
	     data: { SISRCH: keywords, 
		           SIWTNO: wtno,  
		           SIATID: atid, 
		           SIAVNO: avno, 
		           SIINDXT: indxt, 
		           SIINDXB: indxb,  
		           SIIPPG: ippg, 
		           SISORT: sort,
		           SICLER: cler,
		           SINLPR: nlpr,
		           SIAVDS: avds,
		           SINWIT: nwit, 
		           SIAJAXMODE: "Y",
		           SIRFNO: rfno,
		           SIFILT: getFilters(),
		           SIAJAXACTN: action },
	    cache: false,
	     type: "post",
	 dataType: "html",
        
        success:
            function (data) { 
               
               var products= data.substring(1,data.indexOf("["));
               if(data.indexOf("[")>0)
                  var leftData= data.substring(data.indexOf("["));
               else
                  var lefData =""; 
               
               adjustleft(leftData);
               $("#product-grid").html(products);
               
               adjustClearFix2();
               buildButtons();
               markCompare();
               viewList(list)
               hideWait();
               if($("#onUnload").val()=="Y"){
                   
                   $("html, body").animate({ scrollTop:$("#topPosition").val()}, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
                   $("#onUnload").val("");
                  return true; 
               }

               //BROSSAM - Remove ScrollTo on DESKTOP (STAGE ONLY)
                if ($(window).width() < 991) {
                    $("html, body").animate({ scrollTop:$(".mobile-filter__dropdown").first().offset().top - 7}, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
                } else {
                    $("img.lazy").lazyload({ threshold : 600 });
                }

                //    if ($(window).width() < 991) 
                // 		$("html, body").animate({ scrollTop:$(".mobile-filter__dropdown").first().offset().top - 7}, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
                // 	else
                // 		$("html, body").animate({ scrollTop:$("#scrollIndicatorf").position().top +$("#scrollIndicatorf").height()- 15 }, 1000,'',function(){$("img.lazy").lazyload({ threshold : 600 });});
           
              
                samRemoveClearFix();    //Brossam (Bottom Pagination)
               

            }  
    });
}



//BROSSAM - Move to the options section if required option has not been selected
function samMoveToOptionsPDP() {
    if (document.getElementsByClassName('product__options--row').length > 0) {
        var tmpSamPDPOptionOneTopAxis = document.getElementsByClassName('product__options--row')[0].offsetTop;
        $("html, body").animate({ scrollTop: tmpSamPDPOptionOneTopAxis });
    }
}

//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-** 
function buildButtons(){
    var currentPage   = parseInt($("#current_page").val());
    var pagelength    = parseInt($("#SIIPPG").val());
    var totalPages    = parseInt($("#total_pages").val());
    var totalResults  = parseInt($("#total_results").val());
    var maxviewall    = parseInt($("#maxviewall").val());
    var i;
    $(".mobile-filter__results").html(format(totalResults)+" Results");
    $(".filter__results").html(format(totalResults)+" Results");
    $("#total_pages").val(totalPages);
    $("#pagination__dropdown option").remove();
    $("#pagination__list .innerpagination").remove();
    $("#pagination__list_bottom .innerpagination").remove();       //Brossam (Bottom Pagination)
    
    var lowlim = 1;
    if((currentPage-lowlim)>3) lowlim = currentPage -3;
    var higlim = totalPages;
    if((higlim-lowlim)>7) higlim = lowlim + 6;
    if((higlim-lowlim)<7 && higlim>7) lowlim = higlim -6; 
    
    for (i = 1; i <= totalPages; i++) { 
            $( "<option value=\""+i+"\">"+i+"</option>" ).appendTo( "#pagination__dropdown" );
            
            if(i >= lowlim && i <= higlim){
            if(i==currentPage) {
                $( "<li class=\"paginate_button innerpagination active\"><a href=\"javascript:setpage("+i+")\">"+i+"</a></li>").insertBefore( "#pagination__link--next" );
                $( "<li class=\"paginate_button_bottom innerpagination active\"><a href=\"javascript:setpage("+i+")\">"+i+"</a></li>").insertBefore( "#pagination__link--next_bottom" );  //Brossam (Bottom Pagination)
            } 
            else{
              $( "<li class=\"paginate_button innerpagination\"><a href=\"javascript:setpage("+i+")\">"+i+"</a></li>").insertBefore( "#pagination__link--next" );
              $( "<li class=\"paginate_button_bottom innerpagination\"><a href=\"javascript:setpage("+i+")\">"+i+"</a></li>").insertBefore( "#pagination__link--next_bottom" );   //Brossam (Bottom Pagination)
              
            }
           }
        }
    if(totalPages<=1){ 
	$("#product-grid__pagination").css("visibility","hidden");
	$("#example_paginate").css("visibility","hidden");
    $("#example_paginate_bottom").css("visibility","hidden");   //Brossam (Bottom Pagination)
	}
    else{
	$("#product-grid__pagination").css("visibility","visible");
	$("#example_paginate").css("visibility","visible");  
    $("#example_paginate_bottom").css("visibility","visible");}    //Brossam (Bottom Pagination)
    
    $("#pagination__dropdown").val(currentPage);
    // $("#currpage").html(currentPage);    //Brossam (This ID has been removed)
	
    
    if(currentPage>1) {
        $("#pagination__link--prev").removeClass("disabled");
        $("#pagination__link--prev_bottom").removeClass("disabled");    //Brossam (Bottom Pagination)
    } else {
        $("#pagination__link--prev").addClass("disabled");
        $("#pagination__link--prev_bottom").addClass("disabled");   //Brossam (Bottom Pagination)
    }
        
    
    if(currentPage<totalPages) {
        $("#pagination__link--next").removeClass("disabled");   
        $("#pagination__link--next_bottom").removeClass("disabled");   //Brossam (Bottom Pagination)
    } else {
        $("#pagination__link--next").addClass("disabled");
        $("#pagination__link--next_bottom").addClass("disabled");  //Brossam (Bottom Pagination)
    }
        
    $("#ttlpages").html(totalPages);
    if(totalResults > maxviewall || totalResults <=24){$("#perpageAll").addClass("hidden");} else {$("#perpageAll").removeClass("hidden");} 
    if(totalResults < 24 || totalResults <=0 ){$("#perpage24").addClass("hidden");} else {$("#perpage24").removeClass("hidden");} 
    if(totalResults < 48 || totalResults <=0 ){$("#perpage48").addClass("hidden");} else {$("#perpage48").removeClass("hidden");} 
    if(totalResults < 96 || totalResults <=0 ){$("#perpage96").addClass("hidden");} else {$("#perpage96").removeClass("hidden");}
    
    $("#perpageAll").removeClass("active");
    $("#perpage24").removeClass("active");
    $("#perpage48").removeClass("active");
    $("#perpage96").removeClass("active");
    switch (parseInt(pagelength)){
        case 24:
            $("#perpage24").addClass("active");
            break;
        case 48:
            $("#perpage48").addClass("active");
            break;
        case 96:
            $("#perpage96").addClass("active");
            break;
        default:
            $("#perpageAll").addClass("active");
            break;
        
    }
            
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncMtoFull(){
$(".leftMenuM").each(function(){ 
		var mid = $(this).attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked'))
                    $(this).addClass("selected");
                else
                    $(this).removeClass("selected");
                             
});

$(".leftMenuMC label").each(function(){                 
                var mid = $(this).parent("li").attr("id").substring(1);
                if($("#"+mid+' input:first').is(':checked')){
                    $(this).next('ul').find('li').slideDown();
                    $(this).addClass("selected");
                }                    
                else{
                    $(this).next('ul').find('li').slideUp();
                    $(this).removeClass("selected");
                }
});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function adjustleft(data){ 
if(typeof(data) != "undefined"){
    var sectn = $('#SICURR').val();
    var sectnM = $('#SICURRM').val();
    var obj = jQuery.parseJSON( data );      

    //Zero Out
    $( ".leftMenu span.count" ).each(function( ) {
        var cnt = $(this).parentsUntil('.panel').parent().find('input:checked').length;
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || cnt==0)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.panel-collapse').parent().parent('.panel').hide();
              $( this ).parentsUntil('.leftMenu').parent().addClass("disabled");
            }
    });
    //Zero Out Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
              //$( this ).parentsUntil('.mobileGroup').parent().hide();    
            }
    });
    $( ".leftMenuMC span.count" ).each(function( ) {
        if($(this).parentsUntil('.mobileGroup').last().parent().attr("id")!=sectnM)
            { $(this).html("(0)");
             // $( this ).parentsUntil('.mobileGroup').parent().hide();   
            }
    });
                    
      
    //Update Counts
    for (var i = 0, len = obj.length; i < len; ++i) {
        var leftid = obj[i].id;
        var leftcnt= obj[i].count;
        var cnt = $( '#'+leftid ).parentsUntil('.panel').parent().find('input:checked').length;
        if($( '#'+leftid ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn || cnt==0)
            {
                $('#'+leftid+' span.count:first').html('('+leftcnt+')'); 
            }
                //if($('#M'+leftid).parentsUntil().attr("id")!=sectnM){
                if($('#M'+leftid).parentsUntil('.mobileGroup').parent().attr("id")!=sectnM){
                    $('#M'+leftid+' span.count:first').html('('+leftcnt+')'); 
                }
            
        } 
	//Enable valid
	$( ".leftMenu , .leftMenu1" ).each(function( ) {
		if( $(this).find('span.count').first().html()!=="(0)") 
			$(this).removeClass("disabled");
		else
			$(this).addClass("disabled");
	});
	var nfilters = 0;
        $(".panel-link").each(function(){
			var chekn = $(this).parentsUntil('.panel').parent().find('input:checked').length;
                        nfilters = nfilters + chekn;
			$(this).find(".checkn").first().remove();
			if (chekn > 0){
				$(this).html($(this).html()+'<span class="checkn"> - ('+ chekn +') SELECTED</span>');
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","visible");
			}else{
				$(this).parentsUntil('div.panel-heading').parent().parent().find('.panel-body .resetdiv').css("visibility","hidden");
			}	
	});
        if(nfilters>0){
            $("#clearAllFilters").fadeIn();
            $("#clearAllFilters").html("Clear All Filters ("+nfilters+")");
        }
        else{
            $("#clearAllFilters").fadeOut();
            $("#clearAllFilters").html("");
        }
	
        return false;
    //Hide Zeros
    $( ".leftMenu span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.panel-collapse').parent().attr('id')!=sectn)
            {
                if( $( this ).html()=="(0)")
                { 
                    parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1")){
                            if(parentli.parentsUntil('div').parent().prev('label').find('input').is(":checked"))
                                parentli.show();
                        }
                        else
                        parentli.show();
                        
                    $( this ).parentsUntil('.panel-collapse').parent().parent('.panel').show();  
                }
            }
    });
    //Mobile
    $( ".leftMenuM span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                   // parentli.hide();
                }
                    else
                {   
                       
                       // parentli.show();
                        
                    $( this ).parentsUntil('.mobileGroup').last().parent().show();  
                }
            }
    });
    //Mobile Categories
    $( ".leftMenuMC span.count" ).each(function( ) {
        var parentli = $( this ).parentsUntil('li').parent();
        if( $( this ).parentsUntil('.mobileGroup').last().parent().attr('id')!=sectnM)
            {
                if( $( this ).html()=="(0)")
                { 
                    //parentli.hide();
                }
                    else
                {   
                        //Special Case for Categories leftMenu1
                        if(parentli.hasClass("leftMenu1M")){
                            if(parentli.parentsUntil('.leftMenu1M').parent().next('label').find('input').is(":checked")){
                               // parentli.show();
                           }
                        }
                        else{
                        //parentli.show();
                    //$( this ).parentsUntil('.mobileGroup').parent().show(); 
                        }
                }
            }
    });
 } 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetCompare(){
    compStyle = [];
    $(".compare-item").remove();
     $(".compare-tooltip").hide();
     markCompare();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function clearComp(styl){
            var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
            $("#COMP"+styl).remove(); 
            $("#COMPC"+styl).prop('checked', false);
            if(compStyle.length>0)
                $(".compare-tooltip").show();
            else{
                $(".compare-tooltip").hide();
                $('#compareModal').modal('hide');
            }
        
            if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
            $("#row"+styl).remove();
                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function markCompare(){
    $(".compCheck").prop("checked",false);
    for (i = 0; i < compStyle.length; i++) { 
        $("#COMPC"+compStyle[i]).prop('checked', true);
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function checkCompare(obj){
	
	
    var inp = obj.find('input').first();
    var styl = inp.attr("stylname");
    var href = inp.attr("stylhref");
    var desc = inp.attr("styldesc");
    var img  = inp.attr("stylimg");
    var host = inp.attr("imghost");
    var itemHtml;
    if(!inp.is(':checked')){
            inp.prop('checked', true);                
			if (comparing == "Y")return false;
      compStyle.push(styl);
			comparing = "Y";
         itemHtml = '<li class="compare-item" id="COMP' + styl + '">' +
                      '<img class="compare-item__thumbnail" src="' + img + '" height="50">' +
                      '<a href="' + href + '" class="compare-item__name">' + desc + '</a>' +
                      '<a href="javascript:void(0)" onclick="clearComp(\'' + styl + '\')" class="compare-item__remove" stylname="' + styl + '"><svg class="icon close--circle"><use xlink:href="' + host + '/images/sprite.svg#close--circle"></use></svg></a>' +
                    '</li>';
        $( itemHtml ).appendTo("#compareBody");
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        $(".compare-tooltip").show();
        
        
        
        
    }else{
        inp.prop('checked', false);
		if (comparing == "Y")return false;
			comparing = "Y";
        var index = compStyle.indexOf(styl);
            compStyle.splice(index,1);
        $("#COMP"+styl).remove(); 
        $(".compare-tooltip").css("top",obj.offset().top-30);
        $(".compare-tooltip").css("left",obj.offset().left+30);
        if(compStyle.length>0)
            $(".compare-tooltip").show();
        else
            $(".compare-tooltip").hide();
    }
    if(compStyle.length>1){
              $("#compareBtn").removeClass("disabled");
              $("#compareBtn").prop('disabled',false);
            }
            else{
              $("#compareBtn").addClass("disabled");
              $("#compareBtn").prop('disabled',true);                
            }
    //alert(JSON.stringify(compStyle));
	setTimeout(function(){
  comparing ="N";
}, 200);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function format(num){
    var n = num.toString(), p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){
        return p<0 || i<p ? ($0+',') : $0;
    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function comparestyles(){
showWait();
var styles="";
styles =compStyle.join("$");
var clrnc = $('#SICLER').val();
$.ajax({
        url: '/CGBCCOMPR?PMCLER='+clrnc+'&PMDATA='+styles,
       type: "get",
   dataType: 'html',
    success: function(html){
                  $('#compareModal .modal-content').html(html);
                  hideWait();
                  $("#compareModal").modal()
            }
			
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function imageListners(){
    //Images Listeners
            $(".product__gallery--thumbnail").click(function(){ 
                $(".product__gallery--thumbnail").removeClass("active"); 
                $(this).addClass("active");
                if($(this).parentsUntil("#QuickViewForm").length<1)
                    $("#product__gallery--active").attr("src",$(this).attr("data-original"));
                else
                    $(this).parentsUntil("#QuickViewForm").parent().find("#product__gallery--active").attr("src",$(this).attr("data-original"));
            });
            if(imgCtr > 5){$("#product__thumbnails--next").show();} else{$("#product__thumbnails--next").hide();}
    //Next Image Button        
            $("#product__thumbnails--next").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr + 1;
                if(posCtr > (imgCtr-5)){posCtr = (imgCtr -5); return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
    //Previous Image Button
            $("#product__thumbnails--prev").click(function(){
               var hght = $("#product__thumbnails--scroll").find('img').first().height();
               var hght = parseInt(hght)+12;
                posCtr = posCtr - 1;
                if(posCtr < 0){posCtr = 0; return false;}
               var posTop = - posCtr*hght;
               setPrevNext();
            });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function affixSearch(){
    //if($("#onUnload").val()!=="Y"){return false;}
    var top2 = self.pageYOffset;
    if($("#onUnload").val()!=="Y") $("#topPosition").val(top2);  
    if (!$('.category').length) { return false;} 
    var top1 = $('#scrollIndicator').offset().top +170 ;
    
    
//Full
    if(top1 < top2 + 105){
        if($(window ).height() > filterHeight + 400)$('#affixed2').addClass("affix");    
        $('#affixed1').addClass("affix");
    }
    else{if(top1 > top2){
        $('#affixed2').removeClass("affix");    
        $('#affixed1').removeClass("affix");
        }
    }
//Mobile

    var top1 = $(".mobile-filter__dropdown").first().offset().top - 15;
	var top2 = self.pageYOffset;
	
//Full
    if(top1 < top2){
	 $('#mobileFilterAffix').css("top",0);
        $('#mobileFilterAffix').removeClass("hidden");    
    }
    else{
        $('#mobileFilterAffix').addClass("hidden");    
        
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function choices(program){  
     origDesc1 = "Select "+ $("#origDesc1").html();
     origDesc2 = "Select "+ $("#origDesc2").html();
     origDesc3 = "Select "+ $("#origDesc3").html();
    $(".choices li").unbind('click');
    if($("#opv3UL li").length<2) $("#prehemmedMesg").hide();
    
    $(".choices li").click(function(){  

            if(processing =="P") return false;
             boxes =[];
            if($(this).hasClass('disabled')) return false;
             $("#SIOPV1P").val($("#SIOPV1").val());
             $("#SIOPV2P").val($("#SIOPV2").val());
             $("#SIOPV3P").val($("#SIOPV3").val());
             $("#SIOPV1").val("");
             $("#SIOPV2").val("");
             $("#SIOPV3").val("");
            if($(this).hasClass('selected')) 
                $(this).removeClass("selected");
            else
                $(this).addClass("selected");
                showWait("B");  
                $("#product__options--color-selected").html(origDesc1);
                $("#product__options--size").html(origDesc2);
                $("#product__options--size2").html(origDesc3);
            processing ="P";    
            var clicked = $(this);
            var section = $(this).parent().parent().attr("id");
			if(clicked.hasClass('selected')){
			if (clicked[0].id.substring(0,4)=='opv1') {
				opv1 = clicked[0].id.substring(4);
			}
			else if (clicked[0].id.substring(0,4)=='opv2') {
				opv2 = clicked[0].id.substring(4);
			}
			else if (clicked[0].id.substring(0,4)=='opv3') {
				opv3 = clicked[0].id.substring(4);
			};
			
            opv1 = opv1.replace("-", ".");
            opv2 = opv2.replace("-", ".");
            opv3 = opv3.replace("-", ".");
            }	
			
            if(section=="opv1UL" ){  
				if($(this).hasClass('disabld1')){
					   $(this).removeClass('disabld1')
                       $("#opv2UL li.selected").removeClass("selected");$("#SIOPV2").val("");
                       $("#opv3UL li.selected").removeClass("selected");$("#SIOPV3").val("");
                       $("#opv3ULH li.selected").removeClass("selected");
					   
                       opv2 = "";
					   opv3 = "";
				}else{
					if($(this).hasClass('selected')){
					   if(lastgoodopv2!=="" && lastgoodopv2!==undefined && 
					   (opv2 == "" || opv2==$("#"+lastgoodopv2).parent().attr('data-size'))){
					   opv2 = $("#"+lastgoodopv2).parent().attr('data-size');
					   $("#opv2UL li.selected").removeClass("selected")
					   $("#"+lastgoodopv2).addClass('selected');					   
					   }
					   if(lastgoodopv3!=="" && lastgoodopv3!==undefined && 
					   (opv3 == ""|| opv3==$("#"+lastgoodopv3).parent().attr('data-size'))){
					   opv3 = $("#"+lastgoodopv3).parent().attr('data-size');
					   $("#opv3UL li.selected").removeClass("selected")
					   $("#"+lastgoodopv3).addClass('selected');
					}
					$("#SIOPV2").val(opv2);
					$("#SIOPV3").val(opv3);
				}
				}
                   };
			if (section=="opv2UL" && !$(this).hasClass('selected'))
				{
				lastgoodopv2 = "";
				$("#SIOPV2").val("");
				opv2="";}
			if (section=="opv3UL" && !$(this).hasClass('selected')){
				lastgoodopv3 = "";
				$("#SIOPV3").val("");
				opv3="";
				}
				
			//else if (section=="opv1UL" && $("#opv2UL li").length > 0 && $("#opv3UL li").length==0){
			/*if (section=="opv1UL" && $("#opv2UL li").length > 0) {
                       $("#opv2UL li.selected").removeClass("selected");$("#SIOPV2").val("");
						opv2 = "";
			};
			if (section=="opv1UL" && $("#opv3UL li").length > 0) {
                       $("#opv3UL li.selected").removeClass("selected");$("#SIOPV3").val("");
                       $("#opv3ULH li.selected").removeClass("selected");	
						opv3 = "";
			};
			if (section=="opv2UL" && $("#opv3UL li").length > 0){
                       $("#opv3UL li.selected").removeClass("selected");$("#SIOPV3").val("");
                       $("#opv3ULH li.selected").removeClass("selected");	
						opv3 = "";
			};*/
            $("#stockMsg").html("");       
            $("#opv1UL li").each(function(){
           //Opv1 Can be color or size...
                  if($(this).parent().attr('data-class')!= undefined)   
                       value = $(this).parent().attr('data-class');
                    else
                       value = $(this).parent().attr('data-size');
                   desc = $(this).parent().attr('title');
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv1UL") $(this).removeClass("selected");
                   
                   if($(this).hasClass('selected')){ 
                       opv1 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--color-selected").html(desc);
                       $("#SIOPV1").val(opv1);
                   }  
                   
                   var val = '{"opv1"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); 
                    });  
                   
            $("#opv2UL li").each(function(){
                   value = $(this).parent().attr('data-size');                  
                   if($(this).attr("id") !=clicked.attr("id") && section == "opv2UL") $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv2 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--size").html(desc);
                       $("#SIOPV2").val(opv2);
                   }
                   var val = '{"opv2"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj);                   
                    });
                   
            $("#opv3UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
            $("#opv3ULH li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="opv3ULH" || section == "opv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;
                       desc = $(this).parent().attr('title');
                       $("#product__options--size2").html(desc);
                       $("#SIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
         
         opv1 =  $("#SIOPV1").val();
         opv2 =  $("#SIOPV2").val();
         opv3 =  $("#SIOPV3").val();
         opv1p =  $("#SIOPV1P").val();
         opv2p =  $("#SIOPV2P").val();
         opv3p =  $("#SIOPV3P").val();
         var clearances ="";
         styl  = $("#style").val();
         if(program=='CGBCSTYLQ') { if($("#SICLERQ").is(":checked")) clearances="Y";}
         else if($("#SICLER").is(":checked")) clearances="Y";

            $.ajax({    url:"/cgi/"+program,
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : JSON.stringify(boxes)+"&SIAJAXACTN=SELOPTION&SIAJAXMODE=Y&SIOPV1="+opv1+"&SIOPV2="+opv2+"&SIOPV3="+opv3+"&SIOPV1P="+opv1p+"&SIOPV2P="+opv2p+"&SIOPV3P="+opv3p+"&SISTYL="+styl+"&SICLER="+clearances  ,
                  success: function (json) { 
                                            json = jQuery.parseJSON(json)
											var clearopv2 = false;
											var clearopv3 = false;
                                            $.each(json, function(key, value) {
                                                    switch (true){
                                                        case (key == "SIEDP" || key == "SIOPV1" || key == "SIOPV2" || key == "SIOPV3"  ):
                                                            $("#"+key).val(value); 
                                                        break;
                                                        case (key == "vasable" ):
                                                            $("#"+key).val($.parseHTML(value)); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden"); else $("#vasbutton").addClass("hidden");
                                                        case (key == "requiredvas" ):
                                                            $("#"+key).val(value); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden");
                                                                   
                                                        break;
                                                    case (key =='hemmingMesg'):
                                                            $("#"+key).html($.parseHTML(value));  
                                                    break;
                                                        case (key != "stockMsg" && key!="priceMsg" && key!="sku" && key!="mfgn" && key!="RIDMSG" && key != "clearMsg"):
                                                            if(value=="disabled" || value=="disabld1") {
																$("#"+key).removeClass("selected");
                                                                $("#"+key).addClass(value); 
																if (key.substring(0,4)=='opv2' && $("#SIOPV2").val() == key.substring(4)){
																	$("#opv2UL li").removeClass("selected");
																	clearopv2 = true;
																}
																if (key.substring(0,4)=='opv3' && $("#SIOPV3").val() == key.substring(4)){
																	$("#opv3UL li").removeClass("selected");
																	clearopv3 = true;
																}
															}
                                                            else{ 
                                                                if(value=="selected"){
																	var opv1 = document.getElementById('SIOPV1').value;
																	var opv2 = document.getElementById('SIOPV2').value;
																	var opv3 = document.getElementById('SIOPV3').value;										
																	if (key.substring(0,4)=='opv1'){
																	opv1 = key.substring(4);
																	}
																	else if (key.substring(0,4)=='opv2') {
																	opv2 = key.substring(4);
																	}
																	else if (key.substring(0,4)=='opv3') {
																	opv3 = key.substring(4);
																	}; 
                                                                   $("#"+key).addClass("selected");
                                                                   $("#"+key).removeClass("disabled"); 
                                                                   $("#"+key).removeClass("disabld1"); 
                                                                   var xdesc = $("#"+key).parent().attr('title');
                                                                   var xid = $("#"+key).parent().parent().attr('id');
                                                                   if(xid=="opv1UL") $("#product__options--color-selected").html(xdesc);
                                                                   if(xid=="opv2UL") $("#product__options--size").html(xdesc);
                                                                   if(xid=="opv3UL") $("#product__options--size2").html(xdesc);
                                                                   if(xid=="opv3ULH") $("#product__options--size2").html(xdesc);
                                                                   
                                                            
                                                            }  
                                                                else{
                                                                    $("#"+key).removeClass("disabled"); 
                                                                    $("#"+key).removeClass("disabld1"); 
                                                                }
                                                            }
                                                        break;
                                                        default:
                                                            $("#"+key+", ."+key).html($.parseHTML(value));  
                                                        break;
                                                    }
                                                });                         
                                              
											  if(clearopv2){$("#SIOPV2").val("");$("#SIEDP").val("");$(".sku").html(styl);}
											  if(clearopv3){$("#SIOPV3").val("");$("#SIEDP").val("");$(".sku").html(styl);}
											  
											  if($("#SIOPV2").val()!=="" && $("#opv2UL li.selected").length>0) lastgoodopv2 =  $("#opv2UL li.selected").attr('id');
											  if($("#SIOPV3").val()!=="" && $("#opv3UL li.selected").length>0) lastgoodopv3 =  $("#opv3UL li.selected").attr('id');
                                              $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                              hideWait();
                                              processing ="";
                                              if($("#opv1UL li").not(".disabled").length == 1) {
												  $("#opv1UL li").not(".disabled").addClass("selected");
												  $("#product__options--color-selected").html($("#opv1UL li").not(".disabled").parent().attr('title'));
											  }
                                              if($("#opv2UL li").not(".disabled").length == 1) {
												  $("#opv2UL li").not(".disabled").addClass("selected");
												  $("#product__options--size").html($("#opv2UL li").not(".disabled").parent().attr('title'));
											  }
                                              if($("#opv3UL li").not(".disabled").length == 1 && $("#opv3ULH li").not(".disabled").length < 1) {
												  $("#opv3UL li").not(".disabled").addClass("selected");
												  $("#product__options--size2").html($("#opv3UL li").not(".disabled").parent().attr('title'));
											  }
											  
                                              var finalprice = '$' + parseFloat($("#lspr").val()).toFixed(2);             
                                              if (finalprice !== '$0.00')
                                                $(".qtyPrice").html(finalprice);
                                              else
                                                $(".qtyPrice").html("");  

                                                if (typeof samStockMessageABTest === 'function') {
                                                    samStockMessageABTest();    //New Stock Message AB Test
                                                }
												
												ImageChange('');
      
                                            

                        }            
                    })
                    

                    
                    

            }); 
    
}                
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function choicesQ(program){ 
     origDesc1 = "Select "+ $("#QorigDesc1").html();
     origDesc2 = "Select "+ $("#QorigDesc2").html();
     origDesc3 = "Select "+ $("#QorigDesc3").html();
	 lastgoodopv2Q = "";
	 lastgoodopv3Q = "";
    $("#QuickViewForm .choices li").unbind('click');
    if($("#Qopv3UL li").length<2) $("#QprehemmedMesg").hide();
    
    $("#QuickViewForm .choices li").click(function(){  
               
            if(processing =="P") return false;
             boxes =[];
            if($(this).hasClass('disabled')) return false;
             $("#QSIOPV1P").val($("#QSIOPV1").val());
             $("#QSIOPV2P").val($("#QSIOPV2").val());
             $("#QSIOPV3P").val($("#QSIOPV3").val());
             $("#QSIOPV1").val("");
             $("#QSIOPV2").val("");
             $("#QSIOPV3").val("");
             
             $("#SIOPV1P").val("");
             $("#SIOPV2P").val("");
             $("#SIOPV3P").val("");
             $("#SIOPV1").val("");
             $("#SIOPV2").val("");
             $("#SIOPV3").val("");
            if($(this).hasClass('selected')) 
                $(this).removeClass("selected");
            else
                $(this).addClass("selected");
                showWait("B");  
                $("#Qproduct__options--color-selected").html(origDesc1);
                $("#Qproduct__options--size").html(origDesc2);
                $("#Qproduct__options--size2").html(origDesc3);
            processing ="P";    
            var clicked = $(this);
            var section = $(this).parent().parent().attr("id");
			if(clicked.hasClass('selected')){
			if (clicked[0].id.substring(0,4)=='opv1') {
				opv1 = clicked[0].id.substring(4);
			}
			else if (clicked[0].id.substring(0,4)=='opv2') {
				opv2 = clicked[0].id.substring(4);
			}
			else if (clicked[0].id.substring(0,4)=='opv3') {
				opv3 = clicked[0].id.substring(4);
			};
			
            opv1 = opv1.replace("-", ".");
            opv2 = opv2.replace("-", ".");
            opv3 = opv3.replace("-", ".");
            }
			
            if(section=="Qopv1UL"){  
				if($(this).hasClass('disabld1')){
					   $(this).removeClass('disabld1')
                       $("#Qopv2UL li.selected").removeClass("selected");$("#QSIOPV2").val("");
                       $("#Qopv3UL li.selected").removeClass("selected");$("#QSIOPV3").val("");
                       $("#Qopv3ULH li.selected").removeClass("selected");
					   
                       opv2 = "";
					   opv3 = "";                   
				}else{					   
					if($(this).hasClass('selected')){
					   if(lastgoodopv2Q!=="" && lastgoodopv2Q!==undefined && 
					   (opv2 == "" || opv2==$("#"+lastgoodopv2Q).parent().attr('data-size'))){
					   opv2 = $("#"+lastgoodopv2Q).parent().attr('data-size');
					   $("#Qopv2UL li.selected").removeClass("selected")
					   $("#"+lastgoodopv2Q).addClass('selected');					   
					   }
					   if(lastgoodopv3Q!=="" && lastgoodopv3Q!==undefined && 
					   (opv3 == ""|| opv3==$("#"+lastgoodopv3Q).parent().attr('data-size'))){
					   opv3 = $("#"+lastgoodopv3Q).parent().attr('data-size');
					   $("#Qopv3UL li.selected").removeClass("selected")
					   $("#"+lastgoodopv3Q).addClass('selected');
					}
					$("#QSIOPV2").val(opv2);
					$("#QSIOPV3").val(opv3);
				}
				}
                   };
			if (section=="Qopv2UL" && !$(this).hasClass('selected')){
				lastgoodopv2Q = "";
				$("#QSIOPV2").val("");
				opv2="";
			}
			if (section=="Qopv3UL" && !$(this).hasClass('selected')){
				lastgoodopv3Q = "";
				$("#QSIOPV3").val("");
				opv3="";
			}
            $("#QstockMsg").html("");       
            $("#Qopv1UL li").each(function(){
           //Opv1 Can be color or size...
                  if($(this).parent().attr('data-class')!= undefined)   
                       value = $(this).parent().attr('data-class');
                    else
                       value = $(this).parent().attr('data-size');
                   desc = $(this).parent().attr('title');
                   if($(this).attr("id") !=clicked.attr("id") && section == "Qopv1UL") $(this).removeClass("selected");
                   
                   if($(this).hasClass('selected')){ 
                       opv1 = value;
                       desc = $(this).parent().attr('title');
                       $("#Qproduct__options--color-selected").html(desc);
                       $("#QSIOPV1").val(opv1);
                   }  
                   
                   var val = '{"opv1"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); 
                    });  
                   
            $("#Qopv2UL li").each(function(){
                   value = $(this).parent().attr('data-size');                  
                   if($(this).attr("id") !=clicked.attr("id") && section == "Qopv2UL") $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv2 = value;
                       desc = $(this).parent().attr('title');
                       $("#Qproduct__options--size").html(desc);
                       $("#QSIOPV2").val(opv2);
                   }
                   var val = '{"opv2"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj);                   
                    });
                   
            $("#Qopv3UL li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="Qopv3ULH" || section == "Qopv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;
                       desc = $(this).parent().attr('title');
                       $("#Qproduct__options--size2").html(desc);
                       $("#QSIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
            $("#Qopv3ULH li").each(function(){
                   value = $(this).parent().attr('data-size');
                   if($(this).attr("id") !=clicked.attr("id") && (section=="Qopv3ULH" || section == "Qopv3UL")) $(this).removeClass("selected");
                   if($(this).hasClass('selected')){ 
                       opv3 = value;
                       desc = $(this).parent().attr('title');
                       $("#Qproduct__options--size2").html(desc);
                       $("#QSIOPV3").val(opv3);}
                   var val = '{"opv3"  : "' + value + '"}';
                   var obj = eval('(' + val + ')');
                   boxes.push(obj); });           
         
         opv1 =  $("#QSIOPV1").val();
         opv2 =  $("#QSIOPV2").val();
         opv3 =  $("#QSIOPV3").val();
         opv1p =  $("#QSIOPV1P").val();
         opv2p =  $("#QSIOPV2P").val();
         opv3p =  $("#QSIOPV3P").val();
		 
         var clearances ="";
         if(program=='CGBCSTYLQ') {styl  = $("#Qstyle").val(); if($("#SICLERQ").is(":checked")) clearances="Y";}
         else if($("#SICLER").is(":checked")) clearances="Y";

            $.ajax({    url:"/cgi/"+program,
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : JSON.stringify(boxes)+"&SIAJAXACTN=SELOPTION&SIAJAXMODE=Y&SIOPV1="+opv1+"&SIOPV2="+opv2+"&SIOPV3="+opv3+"&SIOPV1P="+opv1p+"&SIOPV2P="+opv2p+"&SIOPV3P="+opv3p+"&SISTYL="+styl+"&SICLER="+clearances  ,
                  success: function (json) { 
                                            json = jQuery.parseJSON(json)
											var clearopv2 = false;
											var clearopv3 = false;
                                            $.each(json, function(key, value) {
                                                    switch (true){
                                                        case (key == "SIEDP" || key == "QSIOPV1" || key == "QSIOPV2" || key == "QSIOPV3"  ):
                                                            $("#"+key).val(value); 
                                                        break;
                                                        case (key == "vasable" ):
                                                            $("#"+key).val($.parseHTML(value)); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden"); else $("#vasbutton").addClass("hidden");
                                                        case (key == "requiredvas" ):
                                                            $("#"+key).val(value); 
                                                            if(value=="Y") $("#vasbutton").removeClass("hidden");
                                                                   
                                                        break;
                                                    case (key =='QhemmingMesg'):
                                                            $("#"+key).html($.parseHTML(value));  
                                                    break;
                                                        case (key != "QstockMsg" && key!="QpriceMsg" && key!="Qsku" && key!="mfgn" && key!="RIDMSG" && key != "clearMsg"):
                                                            if(value=="disabled" || value=="disabld1") {
																$("#"+key).removeClass("selected"); 
                                                                $("#"+key).addClass(value);
																if (key.substring(0,4)=='opv2' && $("#QSIOPV2").val() == key.substring(4)){
																	$("#Qopv2UL li").removeClass("selected");
																	clearopv2 = true;
																}
																if (key.substring(0,4)=='opv3' && $("#QSIOPV3").val() == key.substring(4)){
																	$("#Qopv3UL li").removeClass("selected");
																	clearopv3 = true;
																}																
															}
                                                            else{ 
                                                                if(value=="selected"){
																	var opv1 = document.getElementById('QSIOPV1').value;
																	var opv2 = document.getElementById('QSIOPV2').value;
																	var opv3 = document.getElementById('QSIOPV3').value;										
																	if (key.substring(0,4)=='opv1'){
																	opv1 = key.substring(4);
																	}
																	else if (key.substring(0,4)=='opv2') {
																	opv2 = key.substring(4);
																	}
																	else if (key.substring(0,4)=='opv3') {
																	opv3 = key.substring(4);
																	};
                                                                   $("#"+key).addClass("selected");
                                                                   $("#"+key).removeClass("disabled"); 
                                                                   $("#"+key).removeClass("disabld1"); 
                                                                   var xdesc = $("#"+key).parent().attr('title');
                                                                   var xid = $("#"+key).parent().parent().attr('id');
                                                                   if(xid=="Qopv1UL") $("#Qproduct__options--color-selected").html(xdesc);
                                                                   if(xid=="Qopv2UL") $("#Qproduct__options--size").html(xdesc);
                                                                   if(xid=="Qopv3UL") $("#Qproduct__options--size2").html(xdesc);
                                                                   if(xid=="Qopv3ULH") $("#Qproduct__options--size2").html(xdesc);
                                                                   
                                                            
                                                            }  
                                                                else{
                                                                    $("#"+key).removeClass("disabled"); 
                                                                    $("#"+key).removeClass("disabld1"); 
                                                                }
                                                            }
                                                        break;
                                                        default:
                                                            $("#"+key+", ."+key).html($.parseHTML(value));  
                                                        break;
                                                    }
                                                }); 
											  
											  if(clearopv2){$("#QSIOPV2").val("");$("#QSIEDP").val("");$(".Qsku").html(styl);}
											  if(clearopv3){$("#QSIOPV3").val("");$("#QSIEDP").val("");$(".Qsku").html(styl);}												
                                              
											  if($("#QSIOPV2").val()!=="" && $("#Qopv2UL li.selected").length>0) lastgoodopv2Q =  $("#Qopv2UL li.selected").attr('id');
											  if($("#QSIOPV3").val()!=="" && $("#Qopv3UL li.selected").length>0) lastgoodopv3Q =  $("#Qopv3UL li.selected").attr('id');
                                              $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                              hideWait();
                                              processing ="";
                                              if($("#Qopv1UL li").not(".disabled").length == 1){
												  $("#Qopv1UL li").not(".disabled").addClass("selected");
												  $("#Qproduct__options--color-selected").html($("#Qopv1UL li").not(".disabled").parent().attr('title'));
												  }
                                              if($("#Qopv2UL li").not(".disabled").length == 1){
												  $("#Qopv2UL li").not(".disabled").addClass("selected");
												  $("#Qproduct__options--size").html($("#Qopv2UL li").not(".disabled").parent().attr('title'));
												  }
                                              if($("#Qopv3UL li").not(".disabled").length == 1 && $("#Qopv3ULH li").not(".disabled").length < 1){
												  $("#Qopv3UL li").not(".disabled").addClass("selected");
												  $("#Qproduct__options--size2").html($("#Qopv3UL li").not(".disabled").parent().attr('title'));
												  }
												  
                                              var finalprice = '$' + parseFloat($("#lspr").val()).toFixed(2);             
                                              if (finalprice !== '$0.00')
                                                $(".qtyPrice").html(finalprice);
                                              else
                                                $(".qtyPrice").html(""); 
                                                

                                            if (typeof samStockMessageABTest === 'function') {
                                                samStockMessageABTest();    //New Stock Message AB Test
                                            }
											ImageChange('');
                                            
                        }            
                    })
       
                    

            }); 
    
}                
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function selColr(colorid,opv2,opv3){
        $("#videoDiv").html("");
        $("#videoDiv").addClass("hidden");
		if (!$("#"+colorid).hasClass('selected') && 
		    !$("#"+colorid).hasClass('disabld1')) {
        $("#"+colorid).trigger("click");
		};
		
		//if (opv2 != "opv2") {
		//$("#opv2UL li.selected").removeClass("selected");
		//$("#"+opv2).addClass("selected");		
		//$("#"+opv2).trigger("click");
		//};
		//if (opv3 != "opv3") {
        //$("#opv3UL li.selected").removeClass("selected");
        //$("#opv3ULH li.selected").removeClass("selected");
		//$("#"+opv3).addClass("selected");
		//$("#"+opv3).trigger("click");
		//};
		
		if($("#"+colorid).hasClass('disabled')) return false;
        if($("#"+colorid).hasClass('selected')) return false;
}
//***********************************************************************************************
function ImageChange(){
	
	let opv1 = "",opv2="",opv3="";
	
		if($("#opv1UL li.selected").length==1)
			opv1 = $("#opv1UL li.selected").attr("id").substring(4).replace("-",".");
		if($("#opv2UL li.selected").length==1)
			opv2 = $("#opv2UL li.selected").attr("id").substring(4).replace("-",".");
		if($("#opv3UL li.selected").length==1)
			opv3 = $("#opv3UL li.selected").attr("id").substring(4).replace("-","."); 

colorImage(opv1,opv2,opv3);
}
function setcarousel(inclass){
	let oneshowed = false;
	let dup=[];
	$('#product__mobile-slider').slick('removeSlide', null, null, true);//Flush Carousel
	$(".mobileimg"+inclass).each(function(){
                
					let img = $(this).attr('data-original');
					
					if(!dup.includes(img) && img.indexOf('no_image')<0){
					dup.push(img);
					$(this).attr('src',img);
					$('#product__mobile-slider').slick('slickAdd', $(this)[0].outerHTML.replace('mobileimg',''));
					oneshowed = true;
					}
                    
                
            });
	if(!oneshowed){
		$(".mobileimg").first().each(function(){
               
					let img = $(this).attr('data-original');
					
					if(!dup.includes(img) && img.indexOf('no_image')<0){
					dup.push(img);
					$(this).attr('src',img);
					$('#product__mobile-slider').slick('slickAdd', $(this)[0].outerHTML.replace('mobileimg',''));

					
                    
                }
            });
	}
		
			
	$(".mobileimg.video-thumbnail").each(function(index){//Add Videos at the end:
                
					$('#product__mobile-slider').slick('slickAdd', $(this)[0].outerHTML);
					
            });
}
function convertDecimalToBinary(decimalNumber) { 
    if (decimalNumber === 0) { 
        // Base case: Return "0" if the number is 0 
        return "0"; 
    } else { 
        // Recursive case: Divide the number by 2,  
        //append the remainder to the result of the recursive call 
        return convertDecimalToBinary( 
            Math.floor(decimalNumber / 2)) + (decimalNumber % 2); 
  
    } 
} 
function padWithZeroes(n, width) { while(n.length<width) n = '0' + n; return n;}
//***********************************************************************************************
function colorImage(opv1,opv2,opv3){
let prefix = "";
let firstcolor = $('.choices a').first().attr("data-class");
var clssnm = ".opv1" + opv1 + ".opv2" + opv2 + ".opv3" + opv3;//1 1 1
try{
	var cases = [];
	for(optColor=7; optColor > 0; optColor--){ 
	
	let binary = padWithZeroes(convertDecimalToBinary(optColor),3);
		cases = binary.substr(binary.length-3).split("");
		clssnm = ""+prefix.trim();
		if(cases[0]=='1' && opv1!==""){
			clssnm += ".opv1" + opv1
		}
		if(cases[1]=='1' && opv2!==""){
			clssnm += ".opv2" + opv2
		}
		if(cases[2]=='1'  && opv3!==""){
			clssnm += ".opv3" + opv3
		}
		
		if (clssnm!=="" && clssnm!==prefix && $(clssnm.trim()).length > 0) {
			break;
		}else{
            clssnm = ""+prefix.trim();
        }
	} 
	if(clssnm == "" || clssnm==prefix)clssnm = prefix.trim()+".opv1.opv2.opv3";;
}
catch(e){//Keep the old logic Just in case!!
 
    if ($(clssnm).length < 1) {
        clssnm = prefix.trim()+".opv1" + opv1 + ".opv2" + opv2;
        if ($(clssnm).length < 1) {
            clssnm = prefix.trim()+".opv1" + opv1 + ".opv3" + opv3;
            if ($(clssnm).length < 1) {
                clssnm = prefix.trim()+".opv2" + opv2 + ".opv3" + opv3;
                if ($(clssnm).length < 1) {
                    clssnm = prefix.trim()+".opv1" + opv1;
                    if ($(clssnm).length < 1) {
                        clssnm = prefix.trim()+".opv2" + opv2;
                        if ($(clssnm).length < 1) {
                            clssnm = prefix.trim()+".opv3" + opv3;
                            if ($(clssnm).length < 1) {
									clssnm = prefix.trim()+".opv1"+firstcolor;
									if ($(clssnm).length < 1) {
										clssnm = prefix.trim()+".opv1";
										if ($(clssnm).length < 1) {
											return false;
										}
									}
                            }
                            ;
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
        }
        ;
    }
}

if(pvimgclass == clssnm) return;
pvimgclass = clssnm;

		$(".lazy.product__gallery--thumbnail"+prefix.trim()).addClass('hidden');
		
	let dup =[];
    $(clssnm).each(function(){
		
        let img = $(this).attr("data-original");
		if(!dup.includes(img) && img.indexOf('no_image')<0){
			dup.push(img);
            $(this).removeClass("hidden");
        }
    });		
		$('html, body').animate({scrollTop: '+=1px'}, 0);
		imgCtr = $(".vertthumbnail"+prefix.trim()).not(".hidden").length;
		$(clssnm).not('.hidden').first().trigger("click");

    
    opv1_c = opv1.replace(".", "-");
    opv2_c = opv2.replace(".", "-");
    opv3_c = opv3.replace(".", "-");
	

		
	var colrPos = 1;  
	setcarousel(clssnm);
    if((colrPos-5)>posCtr) posCtr = colrPos -5;
    if((colrPos)>(posCtr+5))  posCtr = colrPos -5;
    if(colrPos<= posCtr)  posCtr = colrPos -5;
    if(posCtr<0) posCtr = 0;
	setPrevNext(); //
}

//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setPrevNext(){ 
    var hght = $("#product__thumbnails--scroll").find('img').first().height(); 
        hght = parseInt(hght)+12;
    var posTop = - posCtr*hght;
               $("#hiddenOverflow").animate({"top":posTop+"px"});
            
    if(imgCtr<=5){ $("#product__thumbnails--next").fadeOut(); $("#product__thumbnails--prev").fadeOut();return true;} 
    if(posCtr == 0){ $("#product__thumbnails--prev").fadeOut(); $("#product__thumbnails--next").show();return true;} 
    if(posCtr == (imgCtr -5)){ $("#product__thumbnails--prev").show(); $("#product__thumbnails--next").fadeOut();return true;} 
    if(posCtr > 0){ $("#product__thumbnails--prev").show();$("#product__thumbnails--next").show(); } 
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClear(){
    showWait();
    $("#SIACTN").val("CLEARONLY");
    setTimeout(function(){$("#styleForm").submit();},100);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCart(){
    var errors="N";
    $(".iv2s").each(function(){
        if($.trim($(this).val())==""){
            alert($(this).attr("prompt")+' is required!');
            errors ="Y";
            return false;
        }
    });
    if(errors=="Y") return false;
    showWait();

    $("#SIACTN").val("ADDTOCART");
            $("#customizeModal").modal("hide");
            $.ajax({
            url: '/CGBCSTYL',
    type: "post",
    dataType: 'html',
        data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    


   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showErrors(){
    if(!$('#SIERR').length) return false;
var array = $('#SIERR').val();
if(array != ""){
var data = JSON.parse(decodeURIComponent(array));

for (var i = 0, len = data.length; i < len; ++i) {     
     var id = data[i].id;
     var id1 = id.replace("f.", ""); 
     if(i==0)$('#'+id1).focus();
     $('#'+id1).css("outline","1px solid #f990a2");
     var mesg= data[i].errmsg;
$('#'+id1).after('<span class="fldError"><small>'+mesg+'</small></span>');


    } 
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadGcInfo(edp) {
var ajaxurl = '/CGBCXSRGC';
var cdno =  $('#SICDNO').val();    

  $.ajax({       url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {SIEDP: edp, SICDNO:cdno},
           
          success: function (html) {        
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();       
            }
        })		
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function togldt(){
if($('#SIDLMT').val()=='FUTURE') $('#deliveryDate').show();
else $('#deliveryDate').hide(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addGiftCard(){ 
        showWait();
        var edp  =  $('#SIEDP').val();
        var cdno =  $('#SICDNO').val();        
        var sore = $("#SISORE").val();    
	      var srky = $("#SISRKY").val();    
	      var info = $("#SIINFO").val(); 
        
        var rcfn = $('#SIRCFN').val(); 
        var rcln = $('#SIRCLN').val();
        var rcem = $('#SIRCEM').val();
        var frnm = $('#SIFRNM').val();
        var pmsg = $('#SIPMSG').val(); 
        var dlmt = $('#SIDLMT').val();
        var dldt = $('#SIDLDT').val();
           
 
     $.ajax({
                 url: '/CGBCXSRGC',
			          type: 'get',
            dataType: 'html',
                data: {
                   SIEDP: edp,
                   SIRCFN: rcfn,
                   SIRCLN: rcln,
                   SIRCEM: rcem,
                   SIFRNM: frnm,
                   SIPMSG: pmsg,
                   SIDLMT: dlmt,
                   SIDLDT: dldt,                   
                   SICDNO: cdno,
                   SISORE: sore,
                   SISRKY: srky,
                   SIINFO: info,                   
                   SIACTN: 'SAVE'
                     },            
         success:function (html) {hideWait();
           if(html.indexOf('<CloseDomeWindow>') == -1){
                $("#gcInfoBody").html(html);
                $("#gcInfo").modal();  
                countChar();       
                showErrors();
                }
                else
                {   showWait();
                    window.location.href = "/cart";
                    
                    }
                
            }
        })
			
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartItem(){
    var errors = "N";
    $(".styleOption").each(function(){
        if($(this).attr("mesg")!=="" && $(this).attr("mesg")!=="n/a" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            samMoveToOptionsPDP();  //Brossam - Scroll to Option Sections
            errors ="Y";
            return false;
        }
    });
    if(errors == "N"){
        var styl = $( "input[name*='SISTYL']" ).val(); 
if(styl=='GIFT'){
var edp = $("#SIEDP").val();
loadGcInfo(edp);      
return true;
}
    }
    
    if(errors == "N"){
        if (document.f.SIOPV3)
    {
    var option = document.f.SIOPV3.value;
     if($.trim(option) =='*OB') {
    var msg=confirm("Please customize your hemming in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;  
    }
    }
    if($('#requiredvas').val()=='Y' && $("#SIEDP").val()!=""){
    var msg=confirm("Please customize your item in the customization screen.");
    if (msg)
        $('.customize-button').click(); return false;
  } 
    } 
    if(errors=="N"){
        showWait();

        //Brossam
        //console.log("Product Info: " + $("#styleForm").serialize());


        $("#SIACTN").val("ADDTOCART");
        $.ajax({
            url: '/CGBCSTYL',
	   type: "post",
       dataType: 'html',
           data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 

                        miniCart();

                        //Brossam - Optimove
                        if(typeof(dataLayer) != "undefined") {
                            dataLayer.push({
                                'event': 'add_cart_item_success'
                            });
                        }

                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartQV(){
    var errors = "N";
    $("#QuickViewForm .styleOptionQ").each(function(){
        if($(this).attr("mesg")!=="" && $(this).val()==""){
            alert("Please Select " + $(this).attr("mesg"));
            errors ="Y";
            return false;
        }
    });
    if(errors=="N"){
        showWait("B");
        $("#SIAJAXACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("Y");
        $.ajax({
            url: '/CGBCSTYLQ',
	   type: "post",
       dataType: 'html',
           data: $("#QuickViewForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                    //window.location.href = "/cart";
                        $("#quickViewModal").modal("hide");
                        $("#QuickViewBody").html("");
                        if($("#freemrno").length<1)
					miniCart();
				else{
					hideWait();
					window.location.href = "/cart";
				}            
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQty(R){
               if (parseInt($("#GSIQTY"+R).val())>9999) $("#GSIQTY"+R).val("9999");
                   $("#SIQTY"+R).val($("#GSIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncSrce(){
    $("#SISRCE").val($("#SISRCEI").val());
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function syncQtyG(R){
                  if (parseInt($("#SIQTY"+R).val())>9999) $("#SIQTY"+R).val("9999");
                   $("#GSIQTY"+R).val($("#SIQTY"+R).val());
              }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_form(form,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            if(!confirm(jsDeleteMsg)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
        //BROSSAM 
        else if(actn=='APPLYSRCE') {
            if (document.getElementById('mobileHeader').getElementsByClassName('fl-r').length > 0) {
                if (document.getElementById('mobileHeader').getElementsByClassName('fl-r')[0].innerText.toLowerCase().indexOf("use code:") >= 0) {
                    
                    var samCurrentSRCE = document.getElementById('mobileHeader').getElementsByClassName('fl-r')[0].innerText.toLowerCase().replace("use code: ","");
                    var samConfirmText = "";

                    //Case 1: Empty Promo Code
                    if ($('#SISRCE').val() == '') {
                        samConfirmText = "The " + samCurrentSRCE.toUpperCase() + " promo code is already applied. Do you want to remove the current promo code?";
                        if (confirm(samConfirmText) != true) {
                            //Cancel button was clicked
                            $('#SISRCE').val(samCurrentSRCE.toUpperCase());     //Restore and show current Promo Code
                            $('#SISRCEI').val(samCurrentSRCE.toUpperCase());    //Restore and show current Promo Code
                            submitted = false;
                            return;
                        } else {
                            $('#SISRCE').val('');   //Confirm button was clicked
                        }
                    } else if ($('#SISRCE').val().toLowerCase() == samCurrentSRCE) {
                        //Case 2: Same Promo 
                        //Do nothing, same promo code will apply
                    } else {
                        //Case 3: Different Promo
                        samConfirmText = "The " + samCurrentSRCE.toUpperCase() + " promo code is already applied. Do you want to continue with a new promo code?";
                        if (confirm(samConfirmText) != true) {
                            //Cancel button was clicked
                            $('#SISRCE').val(samCurrentSRCE.toUpperCase());     //Restore and show current Promo Code
                            $('#SISRCEI').val(samCurrentSRCE.toUpperCase());    //Restore and show current Promo Code
                            submitted = false;
                            return;
                        } else {
                            //Confirm button was clicked => Apply New Promo
                        }
                    }
                }
            }
        }
        //END



        showWait('B');
        setTimeout(function(){
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.submit()');
        },100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function submit_Rfno(form,rfno,actn) {
//------------------------------------------------------------------------------
//Select Text/Text Areas/Password Types Inputs
    clearCrossScript();
//------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
 
        if(actn=='DELETE' && $.trim(jsDeleteMsg) != ""){
            // if(!confirm(jsDeleteMsg)){
            //     submitted = false;
            //     return;
            // }

            //Brossam - Optimove
            if(typeof(dataLayer) != "undefined") {
                dataLayer.push({
                    'event': 'remove_cart_item_success'
                });
            }

        }
        else if(actn=='DELETEB' && $.trim(jsDeleteMsgB) != ""){
            if(!confirm(jsDeleteMsgB)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETEC' && $.trim(jsDeleteMsgC) != ""){
            if(!confirm(jsDeleteMsgC)){
                submitted = false;
                return;
            }
        }
        else if(actn=='DELETED' && $.trim(jsDeleteMsgD) != ""){
            if(!confirm(jsDeleteMsgD)){
                submitted = false;
                return;
            }
        }
       
        showWait('B');
        eval('document.' + form + '.SIACTN.value=actn');
        eval('document.' + form + '.SIRFNO.value=rfno');
        setTimeout(function(){eval('document.' + form + '.submit()');},100);
        
        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
var puUser;
function headerLogin(){
    var username = $("#signInModalForm #usernameHead");
    var password = $("#signInModalForm #passwordHead");
    if(username.val()==="") return false;
    if(password.val()==="") return false;
    $("#signInModal .alert").hide();
    puUser = $("#signInModalForm #usernameHead").val();
    showWait();
    $.ajax({
        url: '/CGBCXLGIN',
        type: "post",
        dataType: 'html',
        data: 'SIUSER='+username.val()+'&SIPSWD='+encodeURIComponent(password.val()),
        success: function(html){
            hideWait();
             switch (html){
                 case("S"):
                     $("#signInModal #successMsg").slideDown();
                     setTimeout(function(){
                      showWait();
                      if(location.href.toLowerCase().search("checkout") != -1 || location.href.toLowerCase().search("cart2") != -1) {
                        location.replace(location.href);
                      } else {
                        location.reload();
                      }

                        //Brossam - Optimove
                        if(typeof(dataLayer) != "undefined") {
                            dataLayer.push({
                                'event': 'login_success'
                            });
                        }

                    },1000);
                    break; 
                 case("E"):
                    $("#signInModal #errorMsg").slideDown();
                    break; 
				 case("M"):
                    $("#signInModal #multMsg").slideDown();
                     setTimeout(function(){showWait();window.location.href = "/sign-in";},3000);
                    break;
				 case("W"):
                    $("#signInModal #noEmailMsg").slideDown();
                    break;	
                 case("X"):
                    $("#signInModal #passwordMsg").slideDown();
                    break;
				 case("Y"):
                    $("#signInModal #emailMsg").slideDown();
                    break;	
				 case("Z"):
                    $("#signInModal #hasPassMsg").slideDown();
                    break;		
             }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetPassword(){
    if(puUser==="") return false;
    $("#signInModal .alert").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCXRSPWD?SIUSER='+puUser,
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();

                $("#signInModal #emailMsg").slideDown();            
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function resetPasswordModal(){
    puUser = $("#signInModalForm #usernameHead").val();
    if(puUser==="") return false;
    $("#signInModal .alert").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCXRSPWD?SIUSER='+puUser,
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();

                $("#signInModal #emailMsg").slideDown();            
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeSdno(sdno,parentid){
    //Mode
    //RSD = Remove SDNO
     $.ajax({
            url: '/CGBCXSHPL?SIMODE=RSD&SISDNO='+sdno,
	   type: "post",
       dataType: 'html'});
    
    var parentSd = $("#sdno"+sdno).parentsUntil(".shopping-list__item").parent().slideUp(600, function() { $(this).remove();});
    var count = parseInt($("#countRows"+parentid).html())-1;
    if(count == 1)
        $("#countRows"+parentid).html("1 item");
    else
        $("#countRows"+parentid).html(count+" items");
    
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToList(mode,slno,style){
    $("#successAddToList").hide();
    $("#quickViewModal").modal("hide");
    //Modes
    //A = add List from item page
    //I = open popup from item page
    //S = add Style to list from item page
    
    if(mode==="I") $("#styleList").val(style)
    if($("#loggedIn").hasClass("hidden")) { $("#signInModal").modal();loginmode="L";return false;}
    if(mode=="A" && $("#list-name").val()=="") return false;
    if(mode=="I")$("#list-name").val("");
    showWait();
    $.ajax({
            url: '/CGBCXSHPL?SIMODE='+mode+'&SISLNO='+slno+'&SINAME='+$("#list-name").val()+'&SISTYL='+$("#styleList").val(),
	   type: "post",
       dataType: 'html',
        success: function(html){
            hideWait();
                 $("#addToListModal #listBody").html(html);
                 $("#addToListModal").modal();
                 if(mode == "S"){
                     $("#successAddToList").html("<strong>Success!</strong> Item added to your shopping list.");
                     $("#successAddToList").slideDown();
                 }
                 if(mode == "A"){
                     $("#successAddToList").html("<strong>Success!</strong> New shopping list created.");
                     $("#successAddToList").slideDown();
                 }
                  
            }
        });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EditList(slno,mode,name){
    $("#editListModal #successMsg").hide();
    if(mode=="D"){if(!confirm("Delete this shopping list?")) return false;}
    if(mode == "I"){
        $("#slnoEdit").val(slno);
        $("#editListModal").modal();
        $("#list-name").val(name);
        return false;
    }
    if(mode == "E" || mode=="D"){
        if($("#list-name").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?SISLNO='+$("#slnoEdit").val()+'&SINAME='+$("#list-name").val()+'&SIMODE='+mode,
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                    if(mode=="E"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list saved, Reloading...");
                        $("#editListModal #successMsg").slideDown();                        
                    }
                    if(mode=="D"){
                        $("#editListModal #successMsg").html("<strong>Success!</strong> Shopping list deleted, Reloading...");
                        $("#editListModal #successMsg").slideDown();  
                    }
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    }
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function newShopList(){
    $("#newListModal #successMsg").hide();
    
        if($("#list-name-new").val()=="") return false;
        showWait();
        $.ajax({
            url: '/CGBCXSHPL?&SINAME='+$("#list-name-new").val()+'&SIMODE=N',
	   type: "post",
       dataType: 'html',
        success: function(html){
                    hideWait();
                        $("#newListModal #successMsg").html("<strong>Success!</strong> Shopping list created, Reloading...");
                        $("#newListModal #successMsg").slideDown();                        
                  setTimeout(function(){showWait();location.reload();},1000);
            }
        });
        
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewPhone(){
	$("#SITEL").val("");
    $("#SITYPE").val("M");
    $("#SIACTNPNNO").val("NEWPNNO");
    $("#saveNewPhone").html("Save New");
	$("#deletePnno").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addNewShipping(){
    $("#SINAMES").val("");
    $("#SISAD1S").val("");
    $("#SISAD2S").val("");
    $("#SISZIPS").val("");
    $("#SISCTYS").val("");
    $("#SISSTAS").val("");
    $("#SICNTYS").val("");
    $("#SIPANOS").val("");
    $("#SISCTRS").val("US");
    $("#SIACTNPANOS").val("NEWPANOS");
    $("#saveNewShipping").html("Save New");
	$("#deletePanos").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editPhone(type,tel,ext,pnno){
	if($("#accountPhoneNumber").attr("aria-expanded")!="true") $("#addNewPhonebtn").trigger("click");
	$(".actionAlerts").remove();
	$("#SITYPE").val(type);
    $("#SITEL").val(tel);
	$("#SIPNNO").val(pnno);
    $("#SIEXT").val(ext);
	$("#SIACTNPNNO").val("EDITPNNO");
    $("#saveNewPhone").html("Update");
	$("#deletePnno").show();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editShipping(name,adr1,adr2,city,sta,zip,cnty,pano){
    if($("#accountShippingInformation").attr("aria-expanded")!="true") $("#addNewShippingbtn").trigger("click");
    $(".actionAlerts").remove();
    //$(".bs.collapse").show();
    $("#SINAMES").val(name);
    $("#SISAD1S").val(adr1);
    $("#SISAD2S").val(adr2);
    $("#SISZIPS").val(zip);
    $("#SISCTYS").val(city);
    $("#SISSTAS").val(sta);
    $("#SICNTYS").val(cnty);
    $("#SIPANOS").val(pano);
    $("#SIACTNPANOS").val("EDITPANOS");
    $("#saveNewShipping").html("Update");
	$("#deletePanos").show();
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function editShippingInt(name,adr1,adr2,city,sta,zip,cnty,pano,ctid){
    if($("#accountShippingInformation").attr("aria-expanded")!="true") $("#addNewShippingbtn").trigger("click");
    $(".actionAlerts").remove();
    //$(".bs.collapse").show();
    $("#SINAMES").val(name);
    $("#SISAD1S").val(adr1);
    $("#SISAD2S").val(adr2);
    $("#SISZIPS").val(zip);
    $("#SISCTYS").val(city);
    $("#SISSTAS").val(sta);
    $("#SICNTYS").val(cnty);
    $("#SIPANOS").val(pano);
	$("#SISCTRS").val(ctid);
    $("#SIACTNPANOS").val("EDITPANOSINT");
    $("#saveNewShipping").html("Update");
	$("#deletePanos").show();
   
    $.ajax({    url:"/cgi/CGBCACC",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=SHIPCTID&SIAJAXMODE=Y&SIAJAXCTID="+ctid+"&SIAJAXSSTA="+sta ,
					success: function (html) { $("#SHIPSTATE").html(html); }
					});
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePanos(){
	if(confirm("Delete this address?")){
		var pano = $("#SIPANOS").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGA&SIPANO='+pano,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountShippingInformationForm").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Address deleted</strong></div>");
		showWait();
		$("#shippingF"+pano).remove();
		$("#shippingM"+pano).remove();
		setTimeout(function(){ $("#closeShippingbtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function deletePnno(){
	if(confirm("Delete this phone number?")){
		var pnno = $("#SIPNNO").val();
		$.ajax({
            url: '/CGBCXACC?SIACTN=DELETEPGN&SIPNNO='+pnno,
	   type: "post",
		dataType: 'html'
		 });
		 $("#accountPhoneNumber").prepend("<div style=\"display:none\" class=\"alert alert-danger actionAlerts\"><strong>Phone number deleted</strong></div>");
		showWait();
		$("#phoneF"+pnno).remove();
		$("#phoneM"+pnno).remove();
		setTimeout(function(){ $("#closePhonebtn").trigger("click"); hideWait();}, 1000);
	}	
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
  $("#SISRCE").val($("#SISRCEF").val());
  submit_form('f', 'SAVE');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function validateGc(actn){
var cno = $('#SIGCNO').val();cno = $.trim(cno);
var pin = $('#SIPIN').val();pin = $.trim(pin);
var amt = $('#SIGAMT').val();amt = $.trim(amt);
$('.fldErrorgc').remove();
$('.fldError').remove();
//$('#SIGCNO').css("background","white");
//$('#SICCNO').css("background","white");
//$('#SICCEX').css("background","white");
//$('#SICCV').css("background","white"); 
//$('.SICCRF').css("background","white");
//$('#SIPIN').css("background","white");
if(cno==""){$('#SIGCNO').after('<span class="fldErrorgc">! Required</span>');$('#SIGCNO').focus();}
if(pin==""){$('#SIPIN').after('<span class="fldErrorgc">! Required</span>');if(!cno=="")$('#SIPIN').focus();return;}
//if(amt=="" && actn=="ADDGC"){$('#gcerrors').html('Amount is required');return false;} 
$('#gcerrors').html('');
$('#available').html('');
 $.post(  '/CGBCCART',
              { SIAJAXACTN: actn, 
                SIAJAXMODE: 'Y',
                    SIGCNO: cno,
                     SIPIN: pin,
                    SIGAMT: amt               
            },
             function (html) { 
              var data = JSON.parse(decodeURIComponent(html));
             if(data["gcerror"]!=""){$('#gcerrors').html(data["gcerror"]);return;}
             else{
              if(actn=="CHKGC"){$('#available').html('Available ($'+data["avlamnt"]+')');return;}
              
             //add payment
             if(actn=="ADDGC"){
                     var total = parseFloat($('#SICHCC').val());
                     var avlbl = parseFloat(data["avlamnt"]);
                     var amont = parseFloat(amt)|| 0;
                     if(amont > avlbl){$('#gcerrors').html('Only ($'+data["avlamnt"]+') available');return false;}
                     if(amont > total || total<=0){$('#gcerrors').html('Amount cannot exceed ($'+total.toFixed(2)+')');return false;} 
                     if(amont==0 && avlbl>=total)amont=total;
                     if(amont==0 && avlbl<total) amont=avlbl;
                     amont = amont.toFixed(2);
                     
                     $('#giftTable').slideDown();
                     var result = $.grep(addedGC, function(e){ return e.gcno == cno; });
                     if(result.length==0){
                      
                       addedGC.push({'gcno': cno,'pin':pin,'amount':amont,'available':data["avlamnt"]});paintTable();
                       $('#SIGCNO').val("");$('#SIPIN').val("");$('#SIGAMT').val("");  }
                     else
                      $('#gcerrors').html('Gift card "'+cno+'" has already been added'); 
            
             
             }
             
             }
            }
        );
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeGC(idno){
$('#gcerrors').html('');
addedGC = $.grep(addedGC, function(e){return e.gcno != idno; });
paintTable(); 
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function paintTable(){
$('#SIGIFT').val(encodeURIComponent(JSON.stringify(addedGC)));
$('.gcrow').remove();
var total = parseFloat($('#cartTotal').val());
var ctr=0; 
$.each(addedGC, function( key, value ) {
ctr+=1;
$('#giftTable tr:last').after('<tr class="gcrow" id="row'+value.gcno+'">'+
                                                         '<th align="center"><a href="javascript:void(0)" onclick="removeGC(\''+value.gcno+'\')"><img src="/images/icon-delete.png"></a></th>'+
                                                         '<td align="left">'+value.gcno+'<input type="hidden" id="SIGCNO__'+ctr+'" name="SIGCNO__'+ctr+'" value="'+value.gcno+'">'+
                                                         '<input type="hidden" id="SIPIN__'+ctr+'" name="SIPIN__'+ctr+'" value="'+value.pin+'"></td>'+
                                                         '<td align="right">$'+value.available+'</td>'+
                                                         '<td align="right">$'+value.amount+'<input type="hidden" id="SIAMNT__'+ctr+'" name="SIAMNT__'+ctr+'" value="'+value.amount+'"></td></tr>');
                                                          total -= value.amount; 
  
});
$('#SICHOA').val(total.toFixed(2));
$('#SICHCC').val(total.toFixed(2));
if(total==0){
$('#SICCNO').prop('disabled', true);$('#SICCNO').val('');
$('#SICCTP1').prop('disabled', true);$('#SICCTP1').val('');
$('#SICCEX').prop('disabled', true);$('#SICCEX').val('');
$('#SICCV').prop('disabled', true);$('#SICCV').val(''); 
$('.SICCRF').prop('disabled', true);$('.SICCRF').val(''); 
$('#SIUPOF').prop('disabled', true);
}
else
{
if($('#SICCNO').prop('disabled')){ 
$('#SICCNO').prop('disabled', false);
$('#SICCTP1').prop('disabled', false);
$('#SICCEX').prop('disabled', false);
$('#SICCV').prop('disabled', false);
$('.SICCRF').prop('disabled', false);
$('#SIUPOF').prop('disabled', false);
 }
}
if(addedGC.length==0){$('#giftTable').hide();} else{$('#giftTable').show();} 
$('#SIGIFTN').val(addedGC.length);

}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function dfltGC(){
if(!($('#SIGIFT').length)) return false;    
if($('#SIGIFT').val()!="")
 addedGC = JSON.parse(decodeURIComponent($('#SIGIFT').val()));
 paintTable();
 if($("#SISTEP").val()=="2" && $("#SIPNNO").val()!=""){
        if($( window ).width()>991){
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-30 }, 600);}
        else{
            $("html, body").animate({ scrollTop: $('#stepTwo').offset().top-140 }, 600);}
    }
 if($("#SISTEP").val()=="3"){
    if($( window ).width()>991){ 
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-30 }, 600);}
    else{
        $("html, body").animate({ scrollTop: $('#stepThree').offset().top-140 }, 600);}
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function saveGC() {
  var giftn = parseFloat($("#SIGIFTN").val());
  if (isNaN(giftn)) {
    giftn = 0;
  }
  if(giftn == 0) return false;
  var giftCards = "&SIGIFTN="+giftn;
  for (i=1; i <= giftn; i++) {
    giftCards += '&SIGCNO__'+i+'='+$("#SIGCNO__"+i).val()+
                 '&SIPIN__' +i+'='+$("#SIPIN__" +i).val()+
                 '&SIAMNT__'+i+'='+$("#SIAMNT__"+i).val();
  }  
 // ajaxOnChangeFunc('f','','SAVEGC','CGBCCART','SICHNO,SIGIFTN'+giftCards,'handleAjaxReply');

  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=SAVEGC&SIAJAXMODE=Y"+giftCards});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function radioPayment(){
    var sectn =  $('input[name=SISLPI]:checked').val();
    $("#SICCRFO").val('');
    $("#SICCRF").val('');
	$("#SIONFL").prop('checked', false);
    if(sectn=="P" || sectn=="S" || sectn=="A"){
        $('.ccCCV').slideUp();
        $('.ccSection').slideUp();
        $('.oaSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',true);
    }
    
    if(sectn=="C"){
        if($("#SIONFL").val() != "Y") $('.ccFields').show();
        $('.ccCCV').show();
        $('.ccSection').slideDown();
        $('.oaSection').slideUp();
        $("#SICCV").prop('required',true);
        $("#SICCNO").prop('required',true);
        $("#SICCRFO").prop('disabled',true);
        $("#SICCRF").prop('disabled',false);
    }
    if(sectn=="O"){
        $('.oaSection').slideDown();
        $('.ccCCV').slideUp();
        $('.ccSection').slideUp();
        $("#SICCV").removeAttr('required');
        $("#SICCNO").removeAttr('required');
        $("#SICCRFO").prop('disabled',false);
        $("#SICCRF").prop('disabled',true);
    }
    $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=SLPI&SIAJAXMODE=Y&SISLPI="+sectn});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrB(index){
$('#SIBAD1').val($('#SIBAD1H'+index).val());
$('#SIBAD2').val($('#SIBAD2H'+index).val());
$('#SIBCTY').val($('#SIBCTYH'+index).val());
$('#SIBZIP').val($('#SIBZIPH'+index).val());
$('#SIBSTA').val($('#SIBSTAH'+index).val());

if ($("#SISAMEBOX:checked").val())
{
$('#SISAD1').val($('#SIBAD1H'+index).val());
$('#SISAD2').val($('#SIBAD2H'+index).val());
$('#SISCTY').val($('#SIBCTYH'+index).val());
$('#SISZIP').val($('#SIBZIPH'+index).val());
$('#SISSTA').val($('#SIBSTAH'+index).val());
}
$("#upsMessage").modal('hide');    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addrS(index){
$('#SISAD1').val($('#SISAD1H'+index).val());
$('#SISAD2').val($('#SISAD2H'+index).val());
$('#SISCTY').val($('#SISCTYH'+index).val());
$('#SISZIP').val($('#SISZIPH'+index).val());
$('#SISSTA').val($('#SISSTAH'+index).val());
$("#upsMessage").modal('hide');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function useCC(obj,pgm,actn,checked){
 if(checked) {
  $(".ccFields").fadeOut();
 }
 else
 {
  document.f.SICCNO.value="";
  document.f.SICCV.value="";
  $(".ccFields").fadeIn();
 }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPostalPopup() {
    $("#postalPopup").modal("show");
  }
function hidePostalPopup() {
    $("#postalPopup").modal("hide");
}
function setSIPCARDCHK() {
    $("#postalPopup").modal("hide");
    if($('#SIPCARDCHK').is(':checked')){
     document.f.SIPCARDCHK.value='Y';
    } else {
     document.f.SIPCARDCHK.value='';
    }
}
function togglePcardButton() {
    if($('#SIPCARDCHK').is(':checked')) {
        $("#pcardButton").removeClass('disabled');
    } else {
        $("#pcardButton").addClass('disabled');
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPaypalPopup() {
  $(".btn-place-order").hide();
  $(".please-wait").show();
  $("#rstrBckg").fadeIn("slow");
	$("#paypalPopup").fadeIn("slow");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopupMsg() {
  $("#rstrBckg").hide();
	$("#paypalPopup").hide();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hidePaypalPopup() {
  $("#rstrBckg").fadeOut("slow");
	$("#paypalPopup").fadeOut("slow");
  showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=UPLOADAJX&SIAJAXMODE=Y&SICNNOTMP="+cnnotmp  ,
                  success: function (html) { $("#popup").html(html); }                                         
                                            
                                    
                  });
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function loadUploadPO(){
    var cnnotmp = $("#SICNNOTMP2").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=UPLOADAJXPO&SIAJAXMODE=Y&SICNNOTMP2="+cnnotmp  ,
                  success: function (html) { $("#popupPO").html(html); }                                         
                                            
                                    
                  });
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function uploadFILE(ext,pgm){
   var fileName;
   var pos;
   var message;
   if (!document.FILEForm.SIFILEUPL.value){
        alert('Please select a file before submitting.');
        count=0;
        return false;
   }else{
        fileName=document.FILEForm.SIFILEUPL.value;
        pos=fileName.lastIndexOf("\\");
        if (pos < 0){
         pos = fileName.lastIndexOf("/");
        }
        if (pos > 0){
         fileName = fileName.substring(pos+1);
        }
        pos=fileName.lastIndexOf(".");
        //message may be extra code
        message="";
        if (!(pos >= 0)){
             alert('Your file must have an extension.');
             count=0;
             return false;
        }
        //
        var extension = fileName.slice(pos+1);
        extension = extension.toLowerCase();
        //
        validExt   = ext;
        validExt = validExt.toLowerCase();
        //
        extFoundAt = validExt.indexOf(extension);
        if (extension.length > 2 && validExt.length > 2 && extFoundAt < 0){
              alert('Your file extension must be one of the following: ' + validExt);
              count=0;
              return false;
        }
                                                                          
        document.FILEForm.action=pgm;
        return true;
   }
   return true;
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setSIRSTRCHK() {
  $("#generalModal").modal("hide");
  if($('#SIRSTRCHK').is(':checked')){
   document.f.SIRSTRCHK.value='Y';
  } else {
   document.f.SIRSTRCHK.value='';
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function setSIPOUPLCHK() {
  $("#pouplModal").modal("hide");
  if($('#SIPOUPLCHK').is(':checked')){
   document.f.SIPOUPLCHK.value='Y';
  } else {
   document.f.SIPOUPLCHK.value='';
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function openFraud(){
    $('#fraudInfo').modal('show');
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeUpload(){
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
	var poupl = $("#SIPOUPL").val();
    var rstrchk = $("#SIRSTRCHK").val();
		
	if (poupl !='')
	{
		closeUploadPO();
		return;
	}
	
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=RSTRAJX&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function chkRstr() {
    var cnnotmp = $("#SICNNOTMP").val();
    var chno = $("#SICHNO").val();
    var rqpo = $("#SIRQPO").val();
    var rqkf = $("#SIRQKF").val();
    var rqpa = $("#SIRQPA").val();
    var rstrchk = "";
	var pouplchk = "";
    if($("#SIRSTRCHK").is(':checked')) rstrchk = "Y";
	if($("#SIPOUPLCHK").is(':checked')) pouplchk = "Y";
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=CHKRSTR&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP="+cnnotmp+"&SIRQPO="+rqpo+"&SIRQKF="+rqkf+"&SIRQPA="+rqpa+"&SIRSTRCHK="+rstrchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popup").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showRstr();                          
 // ajaxOnChangeFunc('f','','CHKRSTR','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRSTRCHK','handleAjaxReply');
  //return showRstr();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showRstr(){
  if ($('#SIRQPO').val()!='' || $('#SIRQPA').val()!='' || $('#SIRQKF').val()!='') 
     {
    /*$('#SIRQPO').val('N');*/
		$("#generalModal").modal("show");hideWait();
    return true;
		} 
		else {
    return false;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeUploadPO(){
    var cnnotmp = $("#SICNNOTMP2").val();
    var chno = $("#SICHNO").val();
    var poupl = $("#SIPOUPL").val();
	var pouplchk = $("#SIPOUPLCHK").val();
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=POUPLAJX&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP2="+cnnotmp+"&SIPOUPL="+poupl+"&SIPOUPLCHK="+pouplchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popupPO").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showPoupl();        
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function chkPoupl() {
    var cnnotmp = $("#SICNNOTMP2").val();
    var chno = $("#SICHNO").val();
	var poupl = $("#SIPOUPL").val();
	var pouplchk = "";
	if($("#SIPOUPLCHK").is(':checked')) pouplchk = "Y";
    $.ajax({    url:"/cgi/CGBCCART",
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=CHKPOUPL&SIAJAXMODE=Y&SICHNO="+chno+"&SICNNOTMP2="+cnnotmp+"&SIPOUPL="+poupl+"&SIPOUPLCHK="+pouplchk   ,
                  success: function (html) {
                                            var json = html.substr(0, html.indexOf('}')+1);
                                            $("#popupPO").html(html.substr(html.indexOf('}')+1));
                                            json = jQuery.parseJSON(json)
                                            $.each(json, function(key, value) {
                                                    $("#"+key).val(value); 
                                                });
                                            
                                           
                                           }
                                    });
            return showPoupl();                          
 // ajaxOnChangeFunc('f','','CHKRSTR','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRSTRCHK','handleAjaxReply');
  //return showRstr();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPoupl(){
  if ($('#SIPOUPL').val()!='') 
     {
		$("#pouplModal").modal("show");hideWait();
    return true;
		} 
		 else {
    return false;
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getTax(){
    $("#getTaxbtn").hide();
    $("#errorZip").hide();
    $("#successZip").hide();
    
    showWait();
    $.ajax({
            url: '/CGBCSRPUC',
	   type: "post",
       dataType: 'html',
           data:{ SIAJAXMODE: "Y", SIXZIP: $("#SIXZIP").val()}, 
        success: function(html){
             var info = jQuery.parseJSON( html );
                    
                    $.each(info, function(key, value) {
                        if(key=="E"){$("#errorZip").html(value);$("#errorZip").slideDown();}
                        if(key=="S"){$("#successZip").html("Success");$("#successZip").slideDown();$("#totalincTax").html(value);}
                    })
            hideWait();
            $("#getTaxbtn").show();
        }
    });
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function hideRstr(){
		$("#rstrBckg").fadeOut("slow");
		$("#rstr").fadeOut("slow");
    document.f.SIRQPO.value='';
    document.f.SIRQKF.value='';
    document.f.SIRQPA.value='';
	document.f.SIPOUPL.value='';
    document.f.SICNNOTMP.value='';
    showPlaceOrder();
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function showPlaceOrder() {
  $('.btn-place-order').attr("disabled",false);
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function placeOrder() {
		
        $('.btn-place-order').attr("disabled",true);
		writeRecomm();
		if (chkRstr()) return;
		if (chkPoupl()) return;
        submit_form('f','CHECKOUTC');
               
    }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function Quickview(style){
    showWait();
     $("#QSIOPV1").val("");opv1 = "";opv2="";opv3="";lastgoodopv2 = "";lastgoodopv3="";
     lastgoodopv2Q = "";$("#QSIOPV2").val("");
	 lastgoodopv3Q = "";$("#QSIOPV3").val("");
	 

    $.ajax({
            url: '/cgi/CGBCSTYLQ',
        cache: false,
    type: 'get',
        dataType: 'html',
            data: {PMSTYL : style,PMCLER: $("#SICLER").val() },
        success: function (html) {
            if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
            $("#miniCart").modal("hide");
			$("#QuickViewBody").html(html);
            $("#quickViewModal").modal();
            choicesQ('CGBCSTYLQ');
            hideWait();
            imgCtr = $(".product__gallery--thumbnail").length;
            imageListners();
        }
    })   


    
}

function QuickviewNoCLER(style){
    showWait();
	opv1 = '';
	opv2 = '';
	opv3 = '';
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: ' ' },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
				 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choicesQ('CGBCSTYLQ');
                 hideWait();
                 imgCtr = $(".product__gallery--thumbnail").length;
                 imageListners();
             }
           })   
    
}

//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function miniCart(){
    showWait();
    $.ajax({
                 url: '/cgi/CGBCCARTQ',
               cache: false,
		type: 'get',
            dataType: 'html',
             success: function (html) {
                 var maxh = $(window ).height() - $("#miniCartBody").position().top - 250;
                 $("#miniCartBody").html(html);
                 $("#miniCart").modal();
                 $(".miniCartBody").css("max-height", maxh+"px");
                 hideWait();
				 getRecommendations('Q');

                //  $(".cart--total").html("(" + $("#cartItems").val() + ")");
                $(".cart--total").html($("#cartItems").val());


                 $(".carTotalM").html( $("#cartItems").val() );
                 $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"});  
             }
           })   
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function closeMiniCart(){
    $("#miniCart").modal("hide");
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function onlyClearQ(style){
    var clearance = "";
    if($("#SICLERQ").is(":checked")) clearance="Y";
    showWait();
    $.ajax({
                 url: '/cgi/CGBCSTYLQ',
               cache: false,
		type: 'get',
            dataType: 'html',
                data: {PMSTYL : style,PMCLER: clearance },
             success: function (html) {
                 if(html.charAt(0)=="R"){window.location = html.substring(1);return false;}
                 $("#QuickViewBody").html(html);
                 $("#quickViewModal").modal();
                 choicesQ('CGBCSTYLQ');
                 hideWait();   
             }
           })   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeChange(){  var data =$("#freeSelec").val();
        var arr = data.split('$$');
       $("#freeitem").attr("styleid",arr[0]);
       $("#freemrno").val(arr[1]);
       freeItem();
     }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function freeItem(){
    
     if($("#freeitem").val()!=='true' ) return false;
        showWait();
        var edpNo  = $("#freeitem").attr("styleid");
        var fqty  = $("#freeitem").attr("freeqty");
        var styles = $("#freeitems").val();
        var mrnos = $("#freemrnos").val();
        var mrno  = $("#freemrno").val();
        var fqtys = $("#freeqtys").val();
        var path = 'CART';
        if($("#freepath").val() != undefined && $("#freepath").val() != '') path = $("#freepath").val();
        var message = $("#message").val();
            $.ajax({
            url: '/CGBCSTYLX',
            cache: false,
            dataType: 'html',
            data: {
                PMSTYL: edpNo,
                PMFQTY : fqty,
                PMSTYLES:styles,
                PMFQTYS :fqtys,
                PMMRNOS:mrnos,
                PMMRNO:mrno,
                PMMESG :message,
                PMPATH: path
            },
            success: function (html) {
                $("#freeItemBody").html(html);
                $("#freeItem").modal();
                hideWait();
              }
        });
    
    
    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartFree(){
    $("#SIAJAXMODE").val("");
    $("#SIAJAXACTN").val("");
    setTimeout(function(){$('#freeItemForm').submit();},100);    
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChange(pgm,actn){
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
    $("#SIAJAXACTN").val(actn);
	    $.ajax({    url:"/cgi/"+pgm,
                    async: false,
                     type: "POST",
                 dataType: "html",
                    data : $("#freeItemForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                            if ($("#SIEDP").val() !=='')
                                               $(".btns").slideDown();   
                                            else
                                                $(".btns").slideUp();
                                           
                                           }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function handleAjaxReply(responseText){
    var ajaxStartValuesDelim = "**STARTVALUES**";
    var ajaxFieldDelim = "$_$";
    var ajaxValueDelim = "!=!";
    var ajaxOptionDelim = ";";      
    var allFields   = new Array;
    var fieldsStart = responseText.indexOf(ajaxStartValuesDelim);
    var oneField    = new Array;
    var newOptionArr= new Array;
    var bigAlert    = new Array;
    
    if (fieldsStart >= 0)
        var allFields = responseText.substr(fieldsStart+ajaxStartValuesDelim.length).split(ajaxFieldDelim);
    
    for (x in allFields){    
        if ($.trim(allFields[x]) == ""){break;}
        oneField = $.trim(allFields[x]).split(ajaxValueDelim);
              if (oneField[0] == "*JSALERT*"){
                  if ($.trim(oneField[1]) != ""){
                      bigAlert.length = bigAlert.length + 1;
                      bigAlert[bigAlert.length-1] = $.trim(oneField[1]); 
                  }
                  continue;
              }
              
              if (oneField[0] == "*JS*"){
                  //alert(oneField[1]);
                  if ($.trim(oneField[1]) != ""){
                      try{eval($.trim(oneField[1]));} catch(e){alert('Could not execute javascript:\n'+$.trim(oneField[1]))}                       
                  }
                  continue;
              }
              replaceSelectQualifier = 'new Option(';
              replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              if (replaceSelectIdx != 0){
                  replaceSelectQualifier = '*EMPTY';
                  replaceSelectIdx = oneField[1].toUpperCase().indexOf(replaceSelectQualifier.toUpperCase());
              }
                   
              alertMsg = "oneField[0]="+oneField[0]
                       + "\ndocument.getElementById(oneField[0])="+document.getElementById(oneField[0])
                       + "\nreplaceSelectQualifier="+replaceSelectQualifier
                       + "\nreplaceSelectIdx="+replaceSelectIdx
              try{
                  alertMsg += "\nobj.type=" + document.getElementById(oneField[0]).type;
              }
              catch(e){alert("failed to retrieve object type\n"+alertMsg)}


              obj = document.getElementById(oneField[0]);
              if ((obj.type == 'text'     || obj.type == 'hidden' ||
                   obj.type == 'password' || obj.type == 'file')
                   && !obj.disabled){
                  obj.value=oneField[1];
              }
              else if ((obj.type == 'textarea')
                   && !obj.disabled){
                  obj.value=oneField[1];
                  //alert("oneField[0].substr(7)="+oneField[0].substr(7))
                  limitLen(0,oneField[0].substr(7)) // in compliance with LimitLen expectations
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx != 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nSetting to=" + oneField[1];
                  //alert(alertMsg); 
                  for(optX=0; optX < obj.options.length; optX++){                          
                      if(obj.options[optX].value == oneField[1]){
                          obj.selectedIndex = optX;
                          break;
                      }
                  }                      
              }
              else if (obj.type == 'select-one' && !obj.disabled && replaceSelectIdx == 0){
                  alertMsg += "\nCurrent obj.style.display=" + obj.style.display
                           +  "\nReplacing options with=" + oneField[1];
                  obj.options.selectedIndex=-1;
                  obj.options.length=0;
                  if ($.trim(oneField[1]) != "*EMPTY"){
                      newOptionArr = oneField[1].split(ajaxOptionDelim);
                      for(optX=0; optX < newOptionArr.length; optX++){                          
                          if ($.trim(newOptionArr[optX]) == "") break;
                          evalStr = "obj.options["+optX+"]="+newOptionArr[optX].replace(/(\r\n)/g,"").replace('"','\"')+";";
                          eval(evalStr);
                      }  
                  }
              }
              else if (obj.type == 'checkbox' && !obj.disabled){
                  eval("obj.checked="+oneField[1]);
              }
              else if (obj.type == 'button' && !obj.disabled){
                  obj.style.display=oneField[1];
              }
              else {
                  try{obj.innerHTML=oneField[1];} catch(e){alert("Could not set value of " + oneField[0] + " with value " + oneField[1] + "\nType is " + obj.type)}
              }
    }
    
    if (bigAlert.length > 0){
        for (var i = 0; i < bigAlert.length; ++i){
            alert(bigAlert[i]);
        }
    }                                
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function addToCartKit(){
    var errors = false;
    $(".compEdp").each(function(){
         if($(this).val()==""){
             errors = true;
             alert($(this).attr("reqmsg"));
             return false;
             
         }
    });
    if( errors ) return false;
        showWait();
        $("#SIACTN").val("ADDTOCART");
        $("#SIAJAXMODE").val("N");
        $.ajax({
            url: '/CGBCSTYLK',
	   type: "post",
       dataType: 'html',
           data: $("#styleForm").serialize(),
        success: function(html){ 
            if(html=="S"){ 
                        miniCart();
                    }
            else{hideWait();
                alert("Error happened...please add to cart again!");               
                }
            }
        });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function optChangeKit(){
    prepArray('');
    $("#SIAJAXMODE").val("Y");
    $("#SIEDP").val("");
	    $.ajax({    url:"/cgi/CGBCSTYLK",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : $("#styleForm").serialize(),  
                  success: function (html) {
                                            handleAjaxReply(html);
                                            $('.tipClass').tooltip({container: 'body',edgeOffset: 10,html:true,template:"<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\" onclick=\"void(0)\"></div></div>"}); 
                                        }
                                    });
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getStock(){
prepArray('');
if($('#qty').val()!='' && $('#SIAREDP').val()!='')
{
//Valid Number inputed
 var qty = $('#qty').val();
 var aredp = $('#SIAREDP').val();
 var arname = $('#SIARNAME').val();
 var edp = $('#SIEDP').val();
 var styl = $('#SISTYL').val();
 qty = parseInt(qty);
 if (qty >= 1)
    $('#qty').val(qty);
 else
    {$('#qty').val('1'); qty=1;}
//Ajax Request to  get stockMessage.
   $.ajax({
                 url: '/cgi/CGBCSTYLK',
			          type: 'post',
            dataType: 'html',
                data: {
                      SIAJAXMODE: 'Y' ,
                      SIAJAXACTN: 'QTY',
                      SIAREDP: aredp,
                      SIARNAME: arname,
                      SIEDP: edp,
                      SISTYL: styl,
                      SIQTY: qty
                      }
           })
        .success(function (html) {
        //swap Inner Html
        $("#stockMsg").html(html);
        rndTip();
        $("#SIAREDP").val('');
        $("#SIARNAME").val('');
         })
    }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function prepArray(actn){

if(actn!='')
{
 actn=actn.substring(6);
if( $('#'+actn).length )
{
    $('#'+actn).val('');
}
}
var listedp='';
var listname='';
$(".compEdp").each(function() {
      if($(this).val()!='')
       if (listedp=='')
       {
        listedp =$(this).val();
        listname =$(this).attr('name');
        }
       else
        {
        listedp  =$.trim(listedp)+'$'+$(this).val();
        listname =$.trim(listname)+'$'+$(this).attr('name')
        }
		})
if(listedp!='')
   {
   $('#SIAREDP').val(listedp);
   $('#SIARNAME').val(listname);
   }
   }
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function THIShandleEnterKeyQty(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f','SAVE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**

//BROSSAM
$( '#SISRCEI' ).bind( 'keypress keydown keyup', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault(); //For Cart Page
    }
});
$( '#SISRCE' ).bind( 'keypress keydown keyup', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault(); //For Cart Page STEP 2
    }
});
//END

function THIShandleEnterKeySrce(inField, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    //showWait();
    submit_form('f','APPLYSRCE');
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function EnterActn(action, e) {
  var charCode;
  if(e && e.which){
    charCode = e.which;
  }else if(window.event){
    e = window.event;
    charCode = e.keyCode;
  }
  if(charCode == 13) {
    showWait();
    submit_form('f',action);
  }
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function applySrce(){
    syncSrce();
   submit_form('f', 'APPLYSRCE');
   
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeUpload(iono) {
  //ajaxOnChangeFunc('f',this,'DELTUPL','CGBCCART','SICHNO,SICNNOTMP,SIRQPO,SIRQKF,SIRQPA,SIRFNO','handleAjaxReply');
  $("#DELETEB").parent().remove();
  $("#SIFILEUPL").val("");
  $("#SIRSTRCHK").prop('disabled', false);
  $("#SIRSTRCHK").attr('checked', false);
  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=DELTUPL&SIAJAXMODE=Y&SIRFNO="+iono});
}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function removeUploadPO(iono) {
  $("#DELETEB").parent().remove();
  $("#SIFILEUPL").val("");
  $("#SIPOUPLCHK").prop('disabled', false);
  $("#SIPOUPLCHK").attr('checked', false);
  $.ajax({    url:"/cgi/CGBCCART",
                    async: true,
                     type: "POST",
                 dataType: "html",
                    data : "SIAJAXACTN=DELTUPLPO&SIAJAXMODE=Y&SIRFNO="+iono});
}  
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function getoptions(style){
$.ajax({    url:"/cgi/CGBCSTYL",
                    async: true,
                     type: "GET",
                 dataType: "html",
                    data : "&SIAJAXACTN=LSTOPTION&SIAJAXMODE=Y&SISTYL=" + style  ,
                  success: function (json) {
                    /// json will be an array of all options for that style ;
                   }});}
//*-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**-*-*-**
function  saddGhng(pano){
          $('#SIPANO').val(pano);
          submit_form('f','CHGADDR');
         }
function  baddGhng(pano){
          $('#SIPANB').val(pano);
          submit_form('f','CHGADDR');
         }  
    
// -------------------------------------------------------------- //
function validPass(match){
  $('#SIPSWD').val( $('#SIPSWD').val().trim());
  $('#SIPSWDC').val( $('#SIPSWDC').val().trim());
  var pswd1 = $('#SIPSWD').val();
  var pswd2 = $('#SIPSWDC').val();
  var haslow = false;
  var hascap = false;
  var hasnum = false;
  var hasspcl = false;
  var haschr8 =false;
  var matchp = false
    
    //LowerCase
    var lowerCaseLetters = /[a-z]/g;
    if(pswd1.match(lowerCaseLetters)) {
      $('#haslow').addClass('valid');
      $('#haslow').removeClass('invalid');
      haslow = true;
    }else{
       $('#haslow').addClass('invalid');
       $('#haslow').removeClass('valid');
    }
    //UpperCase
    var upperCaseLetters = /[A-Z]/g;
    if(pswd1.match(upperCaseLetters)) {
      $('#hascap').addClass('valid');
      $('#hascap').removeClass('invalid');
      hascap = true;
    }else{
       $('#hascap').addClass('invalid');
       $('#hascap').removeClass('valid');
    }
    //Number
    var numbers = /[0-9]/g;
    if(pswd1.match(numbers)) {
      $('#hasnum').addClass('valid');
      $('#hasnum').removeClass('invalid');
      hasnum = true;
    }else{
       $('#hasnum').addClass('invalid');
       $('#hasnum').removeClass('valid');
    }
    //Special
    var special = /\W|_/g;
    if(pswd1.match(special)) {
      $('#hasspcl').addClass('valid');
      $('#hasspcl').removeClass('invalid');
      hasspcl = true;
    }else{
       $('#hasspcl').addClass('invalid');
       $('#hasspcl').removeClass('valid');
    }
    //Length
    if(pswd1.length >=8){
      $('#haschr8').addClass('valid');
      $('#haschr8').removeClass('invalid');
      haschr8 = true;
    }else{
       $('#haschr8').addClass('invalid');
       $('#haschr8').removeClass('valid');
    }
    //Match
    if(match ==''){ 
    if(pswd1 == pswd2 && pswd1!==''){
      $('#matchp').addClass('valid');
      $('#matchp').removeClass('invalid');
      matchp = true;
    }else{
      $('#matchp').addClass('invalid');
      $('#matchp').removeClass('valid');
      }
    }else{
    matchp = true;
      }
    
  
    if(haslow && hascap && hasnum && hasspcl && haschr8 && matchp){
      return 'Y';  //Submit Form
    }else if((!haslow || !hascap || !hasnum || !hasspcl || !haschr8) && matchp){ 
      return 'I';
    }else if(haslow && hascap && hasnum && hasspcl && haschr8 && !matchp){
      return 'M';
    }else if((!haslow || !hascap || !hasnum || !hasspcl || !haschr8) && !matchp){
      return 'B';		
    }else{
      return 'X';
    }
  
  }
  
  
  function resetPassword(actn){
    var match = "";
    validPass(match);
    var check = validPass(match);
    
    if (check=='Y'){
      submit_form('f',actn);
    }else if (check=='I'){
      document.getElementById("passerrorsp").style.display= '';
      document.getElementById("passerrorsu").style.display= '';
      document.getElementById("errorinval").style.display= '';
      document.getElementById("errormatch").style.display= 'none';
    }else if (check=='M'){
      document.getElementById("passerrorsp").style.display= '';
      document.getElementById("passerrorsu").style.display= '';
      document.getElementById("errorinval").style.display= 'none';
      document.getElementById("errormatch").style.display= '';
    }else if (check=='B'){
      document.getElementById("passerrorsp").style.display= '';
      document.getElementById("passerrorsu").style.display= '';
      document.getElementById("errorinval").style.display= '';
      document.getElementById("errormatch").style.display= '';
    }
  }
  
  function handleEnterEventPass(inField, e, actn) {
      var charCode;
      if(e && e.which){
          charCode = e.which;
      }else if(window.event){
          e = window.event;
          charCode = e.keyCode;
      }
  
      if(charCode == 13) {
          resetPassword(actn)
      }
  }
  
  function checkValidPass(match){
    validPass(match);
    var check = validPass(match);
    if (check!=='Y'){
      document.getElementById("invalpass").style.display= '';
      document.getElementById("SIPSWD").style.outline = 'rgb(249, 144, 162) solid 1px';
    }else{
      document.getElementById("invalpass").style.display= 'none';
      document.getElementById("SIPSWD").style.outline = '';
    }
  }

function screenCap() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return;
  
  var script  = document.createElement('script');
  script.src  = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js';
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
  
  setTimeout(function() {
    html2canvas(document.getElementsByTagName('body'), {
      useCORS: true,
      onrendered: function(canvas) {
        var dataURL = canvas.toDataURL();
        $.ajax({
          type: "POST",
          url: "/CGBCSCCAP",
          data: {output: dataURL}
        }).done(function(o) {
          console.log('saved');
        });
      }
    });
  }, 1000);
}

function encodeBLE(elem) {
  julieRemoveLetterSizeOption();
  let str = elem.value;
  if (str == '') return;
  const validChars = [92, 192, 200, 204, 209, 210, 217, 221, 224, 233, 236, 241, 249, 253, 231];
  str = str.normalize('NFC');
  let badChars = '';
  let newStr = '';
  for (var i = 0; i < str.length; i++) {
    let valid = false;
    if((str[i].charCodeAt() >= 32 && str[i].charCodeAt() <= 90) || (str[i].charCodeAt() >= 95 && str[i].charCodeAt() <= 122)  || validChars.includes(str[i].charCodeAt())) valid = true;
    if (!valid) {
      if(!badChars.includes(str[i])) badChars += str[i]+'  ';
    } else {
      if (i+1 < str.length && str[i+1].charCodeAt() >= 688 && str[i+1].charCodeAt() <= 879) {
        if(!badChars.includes(str[i])) badChars += str[i]+str[i+1]+'  ';
      } else {
        newStr += str[i];
      }
    }
  }
  elem.value = newStr;
  if (badChars != '') {
    setTimeout(function() {elem.focus();}, 100);
    alert('The following character(s) are invalid and have been removed '+badChars);
  }
}

// Julie: Set value of Letter Size based on last name length
function julieRemoveLetterSizeOption() {
    const lastName = document.querySelector('input[prompt="Enter Last Name"]').value;
    const letterSize = document.querySelector('input[id*="letterSize"]');
    
    if (!lastName || !letterSize) return;

    const id = letterSize.getAttribute('id');
    const match = id.match(/letterSize_(\d+)/);
    const charCutoff = match ? parseInt(match[1], 10) : null;

    if (charCutoff === null) return;

    if (lastName.length > charCutoff) {
        letterSize.value = "1/2 INCH";
    } else {
        letterSize.value = "3/4 INCH";
    }

    console.log(letterSize.value);
}



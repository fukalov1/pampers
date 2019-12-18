!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*! jQuery.Flipster, v1.1.2 (built 2017-11-10) */
!function(a,b,c){"use strict";function d(a,b){var c=null;return function(){var d=this,e=arguments;null===c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}}var e=function(){var a={};return function(b){if(a[b]!==c)return a[b];var d=document.createElement("div"),e=d.style,f=b.charAt(0).toUpperCase()+b.slice(1),g=["webkit","moz","ms","o"],h=(b+" "+g.join(f+" ")+f).split(" ");for(var i in h)if(h[i]in e)return a[b]=h[i];return a[b]=!1}}(),f="http://www.w3.org/2000/svg",g=function(){var a;return function(){if(a!==c)return a;var b=document.createElement("div");return b.innerHTML="<svg/>",a=b.firstChild&&b.firstChild.namespaceURI===f}}(),h=a(b),i=e("transform"),j={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},k={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},l=new RegExp("\\b("+k.itemCurrent+"|"+k.itemPast+"|"+k.itemFuture+")(.*?)(\\s|$)","g"),m=new RegExp("\\s\\s+","g");a.fn.flipster=function(b){if("string"==typeof b){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("methods");return c[b]?c[b].apply(this,e):this})}var n=a.extend({},j,b);return this.each(function(){function b(a){var b="next"===a?n.buttonNext:n.buttonPrev;return"custom"!==n.buttons&&g?'<svg viewBox="0 0 13 20" xmlns="'+f+'" aria-labelledby="title"><title>'+b+'</title><polyline points="10,3 3,10 10,17"'+("next"===a?' transform="rotate(180 6.5,10)"':"")+"/></svg>":b}function e(c){return c=c||"next",a('<button class="'+k.button+" "+("next"===c?k.buttonNext:k.buttonPrev)+'" role="button" />').html(b(c)).on("click",function(a){v(c),a.preventDefault()})}function j(){n.buttons&&J.length>1&&(O.find("."+k.button).remove(),O.append(e("prev"),e("next")))}function o(){var b={};!n.nav||J.length<=1||(L&&L.remove(),L=a('<ul class="'+k.nav+'" role="navigation" />'),N=a(""),J.each(function(c){var d=a(this),e=d.data("flip-category"),f=d.data("flip-title")||d.attr("title")||c,g=a('<a href="#" class="'+k.navLink+'">'+f+"</a>").data("index",c);if(N=N.add(g),e){if(!b[e]){var h=a('<li class="'+k.navItem+" "+k.navCategory+'">'),i=a('<a href="#" class="'+k.navLink+" "+k.navCategoryLink+'" data-flip-category="'+e+'">'+e+"</a>").data("category",e).data("index",c);b[e]=a('<ul class="'+k.navChild+'" />'),N=N.add(i),h.append(i,b[e]).appendTo(L)}b[e].append(g)}else L.append(g);g.wrap('<li class="'+k.navItem+'">')}),L.on("click","a",function(b){var c=a(this).data("index");c>=0&&(v(c),b.preventDefault())}),"after"===n.nav?O.append(L):O.prepend(L),M=L.find("."+k.navItem))}function p(){if(n.nav){var b=K.data("flip-category");M.removeClass(k.navCurrent),N.filter(function(){return a(this).data("index")===Q||b&&a(this).data("category")===b}).parent().addClass(k.navCurrent)}}function q(){O.css("transition","none"),G.css("transition","none"),J.css("transition","none")}function r(){O.css("transition",""),G.css("transition",""),J.css("transition","")}function s(){var b,c=0;return J.each(function(){(b=a(this).height())>c&&(c=b)}),c}function t(b){if(b&&q(),H=G.width(),G.height(s()),!H)return void(I=I||setInterval(function(){t(b)},500));I&&(clearInterval(I),I=!1),J.each(function(c){var d,e,f=a(this);f.attr("class",function(a,b){return b&&b.replace(l,"").replace(m," ")}),d=f.outerWidth(),0!==n.spacing&&f.css("margin-right",d*n.spacing+"px"),e=f.position().left,P[c]=-1*(e+d/2-H/2),c===J.length-1&&(u(),b&&setTimeout(r,1))})}function u(){var b,d,e,f=J.length;J.each(function(c){b=a(this),d=" ",c===Q?(d+=k.itemCurrent,e=f+1):c<Q?(d+=k.itemPast+" "+k.itemPast+"-"+(Q-c),e=f-(Q-c)):(d+=k.itemFuture+" "+k.itemFuture+"-"+(c-Q),e=f-(c-Q)),b.css("z-index",e).attr("class",function(a,b){return b&&b.replace(l,"").replace(m," ")+d})}),Q>=0&&(H&&P[Q]!==c||t(!0),i?G.css("transform","translateX("+P[Q]+"px)"):G.css({left:P[Q]+"px"})),p()}function v(a){var b=Q;if(!(J.length<=1))return"prev"===a?Q>0?Q--:n.loop&&(Q=J.length-1):"next"===a?Q<J.length-1?Q++:n.loop&&(Q=0):"number"==typeof a?Q=a:a!==c&&(Q=J.index(a),n.loop&&b!=Q&&(b==J.length-1&&Q!=J.length-2&&(Q=0),0==b&&1!=Q&&(Q=J.length-1))),K=J.eq(Q),Q!==b&&n.onItemSwitch&&n.onItemSwitch.call(O,J[Q],J[b]),u(),O}function w(a){return n.autoplay=a||n.autoplay,clearInterval(R),R=setInterval(function(){var a=Q;v("next"),a!==Q||n.loop||clearInterval(R)},n.autoplay),O}function x(){return clearInterval(R),R=0,O}function y(a){return x(),n.autoplay&&a&&(R=-1),O}function z(){t(!0),O.hide().css("visibility","").addClass(k.active).fadeIn(n.fadeIn)}function A(){if(G=O.find(n.itemContainer).addClass(k.container),J=G.find(n.itemSelector),!(J.length<=1))return J.addClass(k.item).each(function(){var b=a(this);b.children("."+k.itemContent).length||b.wrapInner('<div class="'+k.itemContent+'" />')}),n.click&&J.on("click.flipster touchend.flipster",function(b){S||(a(this).hasClass(k.itemCurrent)||b.preventDefault(),v(this))}),j(),o(),Q>=0&&v(Q),O}function B(a){n.keyboard&&(a[0].tabIndex=0,a.on("keydown.flipster",d(function(a){var b=a.which;37!==b&&39!==b||(v(37===b?"prev":"next"),a.preventDefault())},250,!0)))}function C(a){if(n.scrollwheel){var b,c,e=!1,f=0,g=0,i=0,j=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());a.on("mousewheel.flipster wheel.flipster",function(){e=!0}).on("mousewheel.flipster wheel.flipster",d(function(a){clearTimeout(g),g=setTimeout(function(){f=0,i=0},300),a=a.originalEvent,i+=a.wheelDelta||-1*(a.deltaY+a.deltaX),Math.abs(i)<25&&!j||(f++,b=i>0?"prev":"next",c!==b&&(f=0),c=b,(f<6||f%3==0)&&v(b),i=0)},50)),h.on("mousewheel.flipster wheel.flipster",function(a){e&&(a.preventDefault(),e=!1)})}}function D(a){if(n.touch){var b,c,d,e,f,g;a.on({"touchstart.flipster":function(a){a=a.originalEvent,b=a.touches?a.touches[0].clientX:a.clientX,c=a.touches?a.touches[0].clientY:a.clientY},"touchmove.flipster":function(a){a=a.originalEvent,d=a.touches?a.touches[0].clientX:a.clientX,e=a.touches?a.touches[0].clientY:a.clientY,g=d-b,f=e-c,Math.abs(g)>30&&Math.abs(f)<100&&a.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){g=d-b,f=e-c,Math.abs(g)>30&&Math.abs(f)<100&&v(g>0?"prev":"next")}})}}function E(){var a;if(O.css("visibility","hidden"),A(),J.length<=1)return void O.css("visibility","");a=!!n.style&&"flipster--"+n.style.split(" ").join(" flipster--"),O.addClass([k.main,i?"flipster--transform":" flipster--no-transform",a,n.click?"flipster--click":""].join(" ")),n.start&&(Q="center"===n.start?Math.floor(J.length/2):n.start),v(Q);var b=O.find("img");if(b.length){var c=0;b.on("load",function(){++c>=b.length&&z()}),setTimeout(z,750)}else z();h.on("resize.flipster",d(t,400)),n.autoplay&&w(),n.pauseOnHover&&G.on("mouseenter.flipster",function(){R?y(!0):x()}).on("mouseleave.flipster",function(){-1===R&&w()}),B(O),C(G),D(G)}var F,G,H,I,J,K,L,M,N,O=a(this),P=[],Q=0,R=!1,S=!1;F={jump:v,next:function(){return v("next")},prev:function(){return v("prev")},play:w,stop:x,pause:y,index:A},O.data("methods",F),O.hasClass(k.active)||E()})}}(jQuery,window);
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.11
*/

!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($) {
        return $;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(10), __webpack_require__(11) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, window, document, undefined) {
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, 
            !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}).alias = alias, 
            this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, 
            this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
        }
        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), 
            $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
            !1);
        }
        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = !1;
                if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, 
                mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
                opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }
                var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: undefined,
                    buffer: undefined,
                    tests: {},
                    metadata: metadata,
                    maskLength: undefined
                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
                masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
                masksetDefinition;
            }
            if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                    var altMask = opts.groupmarker.start;
                    return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                        altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), 
                        msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                    }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
                }
                opts.mask = opts.mask.pop();
            }
            return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
        }
        function maskScope(actionObj, maskset, opts) {
            function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
                minimalPos = minimalPos || 0;
                var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
                do {
                    !0 === baseOnInput && getMaskSet().validPositions[pos] ? (test = (testPos = getMaskSet().validPositions[pos]).match, 
                    ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (test = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).match, 
                    ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), 
                    pos++;
                } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, 
                maskTemplate;
            }
            function getMaskSet() {
                return maskset;
            }
            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
            }
            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
                closestTo === undefined && (closestTo = -1);
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                    psNdx >= closestTo && (after = psNdx));
                }
                return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;
            }
            function stripValidPositions(start, end, nocheck, strict) {
                var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;
                for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {
                    var posMatch = getMaskSet().validPositions[pos];
                    if (posMatch !== undefined && null === posMatch.match.fn) {
                        var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];
                        return prevMatch !== undefined && nextMatch !== undefined;
                    }
                    return !1;
                }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);
                for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {
                    for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;
                    if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {
                        var t = getTestTemplate(i);
                        !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), 
                        getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], 
                        i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], 
                        i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                    }
                }
                resetMaskSet(!0);
            }
            function determineTestTemplate(tests, guessNextBest) {
                for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (!((testPos = testPositions[ndx]).match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;
                return testPos;
            }
            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }
            function getTest(pos) {
                return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
            }
            function positionCanMatchDefinition(pos, def) {
                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = !0;
                    break;
                }
                return valid;
            }
            function getTests(pos, ndxIntlzr, tstPs) {
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                            return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
                                if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                            }), firstMatch;
                        }
                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);
                            return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                                indexPos = ndxPos);
                            }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }
                        if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        if (testPos === pos && match.matches === undefined) return matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency
                        }), !0;
                        if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                    if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                    insertStop = !0, testPos = pos;
                                }
                            } else if (match.isAlternator) {
                                var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (-1 === altIndex || "string" == typeof altIndex) {
                                    var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                        !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                            var ntndx = $.inArray(match, maskToken.matches) + 1;
                                            maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), 
                                            $.each(matches, function(ndx, lmnt) {
                                                lmnt.alternation = loopNdx.length - 1;
                                            }));
                                        }
                                        maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = !1;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                    if (function(source, target) {
                                                        return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;
                                                    }(altMatch, altMatch2)) {
                                                        dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], 
                                                        altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], 
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));
                                                        break;
                                                    }
                                                    if (altMatch.match.def === altMatch2.match.def) {
                                                        dropMatch = !1;
                                                        break;
                                                    }
                                                    if (function(source, target) {
                                                        return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2) || function(source, target) {
                                                        return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\[\]]/g, ""), getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2)) {
                                                        altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), 
                                                        -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), 
                                                        dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], 
                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break;
                                                    }
                                                }
                                            }
                                            dropMatch || malternateMatches.push(altMatch);
                                        }
                                    }
                                    "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {
                                        if (isFinite(ndx)) {
                                            var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");
                                            lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;
                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", 
                                            lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), 
                                            lmnt.alternation = alternation);
                                            if (lmnt.locator[alternation] !== undefined) return lmnt;
                                        }
                                    })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, 
                                    match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                                if (match) return !0;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {
                                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, 
                                    isFirstMatch(latestMatch, tokenGroup)) {
                                        if (qndx > qt.quantifier.min - 1) {
                                            insertStop = !0, testPos = pos;
                                            break;
                                        }
                                        return !0;
                                    }
                                    return !0;
                                }
                            } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                        } else testPos++;
                    }
                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                        var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) return match;
                        if (testPos > pos) break;
                    }
                }
                function filterTests(tests) {
                    if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                        if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];
                        if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];
                        if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];
                    }
                    return tests;
                }
                var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                if (pos > -1) {
                    if (ndxIntlzr === undefined) {
                        for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;
                        test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {
                            var locator = [];
                            return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function(ndx, tst) {
                                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                            })), locator;
                        }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length && !(resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos); mtndx++) ;
                }
                return (0 === matches.length || insertStop) && matches.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    },
                    locator: [],
                    cd: cacheDependency
                }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), 
                filterTests(getMaskSet().tests[pos]));
            }
            function getBufferTemplate() {
                return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
                getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
                getMaskSet()._buffer;
            }
            function getBuffer(noCache) {
                return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), 
                getMaskSet().buffer;
            }
            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
                for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
                    var valResult = isValid(p, buffer[i], !0, !0);
                    !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
                }
            }
            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                  case "upper":
                    elem = elem.toUpperCase();
                    break;

                  case "lower":
                    elem = elem.toLowerCase();
                    break;

                  case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                    break;

                  default:
                    if ($.isFunction(opts.casing)) {
                        var args = Array.prototype.slice.call(arguments);
                        args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                    }
                }
                return elem;
            }
            function checkAlternationMatch(altArr1, altArr2, na) {
                for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                    isMatch = !0;
                    break;
                }
                return isMatch;
            }
            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
                    return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
                }
                function _isValid(position, c, strict) {
                    var rslt = !1;
                    return $.each(getTests(position), function(ndx, tst) {
                        for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                        if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                            c: getPlaceholder(position, test, !0) || test.def,
                            pos: position
                        })) {
                            var elem = rslt.c !== undefined ? rslt.c : c;
                            elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                            var validatedPos = position, possibleModifiedBuffer = getBuffer();
                            if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), 
                            $.each(rslt.remove.sort(function(a, b) {
                                return b - a;
                            }), function(ndx, lmnt) {
                                stripValidPositions(lmnt, lmnt + 1, !0);
                            })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), 
                            $.each(rslt.insert.sort(function(a, b) {
                                return a - b;
                            }), function(ndx, lmnt) {
                                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                            })), rslt.refreshFromBuffer) {
                                var refresh = rslt.refreshFromBuffer;
                                if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), 
                                rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), 
                                !1;
                                if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), 
                                !1;
                            } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, 
                            refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), 
                            !1;
                            return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), 
                            setValidPosition(validatedPos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                        }
                    }), rslt;
                }
                function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                    if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {
                        var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);
                        for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                        getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                        var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;
                        for (i = j = pos; i <= lvp; i++) {
                            var t = positionsClone[i];
                            if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {
                                if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), 
                                getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), 
                                j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, !0, !0);
                                    valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, 
                                    needsValidation = !0;
                                } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;
                                if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), 
                                valid) break;
                            }
                            if (!valid) break;
                        }
                        if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), 
                        resetMaskSet(!0), !1;
                    } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    return resetMaskSet(!0), !0;
                }
                function fillMissingNonMask(maskPos) {
                    for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;
                    var testTemplate, testsFromPos;
                    for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && ("" === (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice())[testsFromPos.length - 1].match.def && testsFromPos.pop(), 
                    (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));
                }
                strict = !0 === strict;
                var maskPos = pos;
                pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
                var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
                if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), 
                !0 === result) {
                    if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), 
                    maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), 
                    (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
                        var currentPosValid = getMaskSet().validPositions[maskPos];
                        if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {
                                !function(originalPos, newPos) {
                                    var vp = getMaskSet().validPositions[newPos];
                                    if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
                                        var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;
                                        "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {
                                            for (var i = 0; i < tll; i++) {
                                                if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                                    var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];
                                                    targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                                    break;
                                                }
                                                equality < i && (equality = i, bestMatch = tst);
                                            }
                                        }), (bestMatch = $.extend({}, bestMatch, {
                                            input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                        })).generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, 
                                        _isValid(newPos, vp.input, !0);
                                    }
                                }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;
                                break;
                            }
                        } else result = {
                            caret: seekNext(maskPos)
                        };
                    }
                    !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {
                        var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();
                        for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
                            if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, 
                            prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                            prevAltPos = altPos;
                        }
                        if (alternation !== undefined) {
                            decisionPos = parseInt(lastAlt);
                            var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
                            decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                            var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
                            $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {
                                altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                                for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                                    var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;
                                    if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {
                                        getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                                        var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                        for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), 
                                        null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, 
                                        !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), 
                                        staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), 
                                        getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, 
                                        i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, 
                                        delete getMaskSet().validPositions[i];
                                        for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), 
                                        resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {
                                            var input = validInputs.shift();
                                            if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
                                        }
                                        if (isValidRslt) {
                                            getMaskSet().validPositions[decisionPos].locator = possibilities;
                                            var targetLvp = getLastValidPosition(pos) + 1;
                                            for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                                            isValidRslt = isValid((pos += staticInputsBeforePosAlternate - staticInputsBeforePos) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                                        }
                                        if (isValidRslt) return !1;
                                        resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
                                    }
                                }
                            });
                        }
                        return isValidRslt;
                    }(maskPos, c, strict)), !0 === result && (result = {
                        pos: maskPos
                    });
                }
                if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
                    var postResult = opts.postValidation(getBuffer(!0), result, opts);
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = !0 === postResult ? result : postResult;
                }
                return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), 
                getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
            }
            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;
                if (!0 !== strict && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                }
                return !1;
            }
            function seekNext(pos, newBlock) {
                var maskL = getMaskSet().maskLength;
                if (pos >= maskL) return maskL;
                var position = pos;
                for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;
                return position;
            }
            function seekPrevious(pos, newBlock) {
                var tests, position = pos;
                if (position <= 0) return 0;
                for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
                return position;
            }
            function getBufferElement(position) {
                return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
            }
            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                            buffer = getBuffer(!0);
                        }
                        caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
                    }
                }
                input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function() {
                    caret(input, caretPos);
                }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, 
                $(input).trigger("input")));
            }
            function getPlaceholder(pos, test, returnPL) {
                if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                if (null === test.fn) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var prevTest, tests = getTests(pos), staticAlternations = [];
                        if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                        null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                    }
                    return test.def;
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }
            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                function isTemplateMatch(ndx, charCodes) {
                    return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);
                }
                var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
                if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), 
                    initialNdx = seekNext(initialNdx));
                }
                if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, 
                $.each(inputValue, function(ndx, charCode) {
                    if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                        if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                            var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                            result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), 
                            initialNdx = pos + 1, charCodes = "";
                        } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                        if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {
                            var origResult = result;
                            if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), 
                            (result = $.extend(origResult, result)) && result.refreshFromBuffer) {
                                var refresh = result.refreshFromBuffer;
                                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), 
                                resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);
                            }
                        }
                    }
                }), writeOut) {
                    var caretPos = undefined;
                    document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), 
                    writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
                }
            }
            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) return input.value;
                    input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
                }
                var umValue = [], vps = getMaskSet().validPositions;
                for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }
            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    return !0 === notranslate || !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || (pos = getBuffer().join("").length - pos), 
                    pos;
                }
                var range;
                if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, 
                end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
                end = range.endOffset) : document.selection && document.selection.createRange && (end = (begin = 0 - (range = document.selection.createRange()).duplicate().moveStart("character", -input.inputmask._valueGet().length)) + range.text.length), 
                {
                    begin: translatePosition(begin),
                    end: translatePosition(end)
                };
                if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {
                    begin = translatePosition(begin), end = "number" == typeof (end = translatePosition(end)) ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, 
                    input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                        if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
                            var textNode = document.createTextNode("");
                            input.appendChild(textNode);
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                        range.collapse(!0);
                        var sel = window.getSelection();
                        sel.removeAllRanges(), sel.addRange(range);
                    } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), 
                    range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                    renderColorMask(input, {
                        begin: begin,
                        end: end
                    });
                }
            }
            function determineLastRequiredPosition(returnDefinition) {
                var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;
                for (pos = lvp + 1; pos < buffer.length; pos++) ndxIntlzr = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).locator.slice(), 
                positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp && (((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                return returnDefinition ? {
                    l: bl,
                    def: positions[bl] ? positions[bl].match : undefined
                } : bl;
            }
            function clearOptionalTail(buffer) {
                for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;
                for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;
                return buffer.splice(rl), buffer;
            }
            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if ("*" === opts.repeat) return undefined;
                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                            complete = !1;
                            break;
                        }
                    }
                }
                return complete;
            }
            function handleRemove(input, k, pos, strict, fromIsValid) {
                if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), 
                isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend;
                }
                k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), 
                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, 
                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), 
                stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {
                    if (opts.keepStatic) {
                        for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
                            var altPos = getMaskSet().validPositions[lastAlt];
                            if (altPos) {
                                if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), 
                                delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
                                prevAltPos = altPos;
                            }
                        }
                        if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {
                            var keypress = new $.Event("keypress");
                            keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
                        } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
                    }
                }();
                var lvp = getLastValidPosition(pos.begin, !0);
                if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, 
                !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;
            }
            function initializeColorMask(input) {
                function findCaretPos(clientx) {
                    var caretPos, e = document.createElement("span");
                    for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
                    e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, 
                    e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", 
                    e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                    var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                            var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos), caretPos = (offset1 -= e.offsetWidth / 3) < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    return document.body.removeChild(e), caretPos;
                }
                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");
                template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, 
                (colorMask = document.createElement("div")).className = "im-colormask", input.parentNode.insertBefore(colorMask, input), 
                input.parentNode.removeChild(input), colorMask.appendChild(template), colorMask.appendChild(input), 
                input.style.left = template.offsetLeft + "px", $(input).on("click", function(e) {
                    return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);
                }), $(input).on("keydown", function(e) {
                    e.shiftKey || !1 === opts.insertMode || setTimeout(function() {
                        renderColorMask(input);
                    }, 0);
                });
            }
            function renderColorMask(input, caretPos, clear) {
                function handleStatic() {
                    isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, 
                    maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static'>");
                }
                function handleCaret(force) {
                    !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
                }
                var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;
                if (colorMask !== undefined) {
                    var buffer = getBuffer();
                    if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
                        begin: caretPos,
                        end: caretPos
                    }), !0 !== clear) {
                        var lvp = getLastValidPosition();
                        do {
                            handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), 
                            maskTemplate += getPlaceholder(pos, test))), pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);
                        -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();
                    }
                    var template = colorMask.getElementsByTagName("div")[0];
                    template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);
                }
            }
            maskset = maskset || this.maskset, opts = opts || this.opts;
            var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {
                on: function(input, eventName, eventHandler) {
                    var ev = function(e) {
                        if (this.inputmask === undefined && "FORM" !== this.nodeName) {
                            var imOpts = $.data(this, "_inputmask_opts");
                            imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
                        } else {
                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                switch (e.type) {
                                  case "input":
                                    if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();
                                    break;

                                  case "keydown":
                                    skipKeyPressEvent = !1, skipInputEvent = !1;
                                    break;

                                  case "keypress":
                                    if (!0 === skipKeyPressEvent) return e.preventDefault();
                                    skipKeyPressEvent = !0;
                                    break;

                                  case "click":
                                    if (iemobile || iphone) {
                                        var that = this, args = arguments;
                                        return setTimeout(function() {
                                            eventHandler.apply(that, args);
                                        }, 0), !1;
                                    }
                                }
                                var returnVal = eventHandler.apply(this, arguments);
                                return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                            }
                            e.preventDefault();
                        }
                    };
                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                    -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
                },
                off: function(input, event) {
                    if (input.inputmask && input.inputmask.events) {
                        var events;
                        event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, 
                        $.each(events, function(eventName, evArr) {
                            for (;evArr.length > 0; ) {
                                var ev = evArr.pop();
                                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                            }
                            delete input.inputmask.events[eventName];
                        });
                    }
                }
            }, EventHandlers = {
                keydownEvent: function(e) {
                    var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {
                        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
                        return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), 
                        el = null, isSupported;
                    }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), 
                    input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, 
                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                    } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                    caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 
                    $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), 
                    pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                    pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), 
                    pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {
                        var caretPos = caret(input);
                        caret(input, caretPos.begin);
                    }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {
                        var caretPos = caret(input);
                        caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                    }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
                },
                keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                    var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                    if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                    setTimeout(function() {
                        $input.trigger("change");
                    }, 0)), !0;
                    if (k) {
                        46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                        var forwardPosition, pos = checkval ? {
                            begin: ndx,
                            end: ndx
                        } : caret(input), c = String.fromCharCode(k);
                        getMaskSet().writeOutBuffer = !0;
                        var valResult = isValid(pos, c, strict);
                        if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), 
                        getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {
                            opts.onKeyValidation.call(input, k, valResult, opts);
                        }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), 
                            !0 !== checkval && setTimeout(function() {
                                !0 === isComplete(buffer) && $input.trigger("complete");
                            }, 0);
                        }
                        if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                        valResult;
                    }
                },
                pasteEvent: function(e) {
                    var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                    isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                    valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                    isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), 
                    window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                        if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                    }
                    var pasteValue = inputValue;
                    if ($.isFunction(opts.onBeforePaste)) {
                        if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                        pasteValue || (pasteValue = inputValue);
                    }
                    return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), 
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 
                    !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();
                },
                inputFallBackEvent: function(e) {
                    var input = this, inputValue = input.inputmask._valueGet();
                    if (getBuffer().join("") !== inputValue) {
                        var caretPos = caret(input);
                        if (!1 === function(input, inputValue, caretPos) {
                            if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), 
                            inputValue = inputValue.join("")), inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {
                                var keypress = new $.Event("keypress");
                                return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), 
                                !1;
                            }
                        }(input, inputValue, caretPos)) return !1;
                        if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), 
                        !1 === function(input, inputValue, caretPos) {
                            if (iemobile) {
                                var inputChar = inputValue.replace(getBuffer().join(""), "");
                                if (1 === inputChar.length) {
                                    var keypress = new $.Event("keypress");
                                    return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), 
                                    !1;
                                }
                            }
                        }(input, inputValue, caretPos)) return !1;
                        caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));
                        var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = "", isEntry = !1;
                        if (frontPart !== frontBufferPart) {
                            selection.begin = 0;
                            for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;
                            isEntry && (entries += frontPart.slice(selection.begin, selection.end));
                        }
                        backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), 
                        writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(""), function(ndx, entry) {
                            var keypress = new $.Event("keypress");
                            keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                        }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), 
                        e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), 
                        e.preventDefault();
                    }
                },
                setValueEvent: function(e) {
                    this.inputmask.refreshValue = !1;
                    var input = this, value = input.inputmask._valueGet(!0);
                    $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                    value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), 
                    undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
                },
                focusEvent: function(e) {
                    var input = this, nptValue = input.inputmask._valueGet();
                    opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), 
                    !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), 
                    EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");
                },
                mouseleaveEvent: function(e) {
                    var input = this;
                    if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                        var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                        nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), 
                        writeBuffer(input, buffer));
                    }
                },
                clickEvent: function(e, tabbed) {
                    function doRadixFocus(clickPos) {
                        if ("" !== opts.radixPoint) {
                            var vps = getMaskSet().validPositions;
                            if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                                if (clickPos < seekNext(-1)) return !0;
                                var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                if (-1 !== radixPos) {
                                    for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                    return !0;
                                }
                            }
                        }
                        return !1;
                    }
                    var input = this;
                    setTimeout(function() {
                        if (document.activeElement === input) {
                            var selectedCaret = caret(input);
                            if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                            selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                              case "none":
                                break;

                              case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                    break;
                                }

                              default:
                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);
                                if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {
                                    var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {
                                        var newPos = seekNext(lastPosition);
                                        (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                                    }
                                    caret(input, lastPosition);
                                }
                            }
                        }
                    }, 0);
                },
                dblclickEvent: function(e) {
                    var input = this;
                    setTimeout(function() {
                        caret(input, 0, seekNext(getLastValidPosition()));
                    }, 0);
                },
                cutEvent: function(e) {
                    var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                    document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), 
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), 
                    input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
                },
                blurEvent: function(e) {
                    var $input = $(this), input = this;
                    if (input.inputmask) {
                        var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                        "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                        !1 === isComplete(buffer) && (setTimeout(function() {
                            $input.trigger("incomplete");
                        }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                        writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), 
                        $input.trigger("change"));
                    }
                },
                mouseenterEvent: function(e) {
                    var input = this;
                    mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
                },
                submitEvent: function(e) {
                    undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                    opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                    setTimeout(function() {
                        writeBuffer(el, getBuffer());
                    }, 0));
                },
                resetEvent: function(e) {
                    el.inputmask.refreshValue = !0, setTimeout(function() {
                        $el.trigger("setvalue");
                    }, 0);
                }
            };
            Inputmask.prototype.positionColorMask = function(input, template) {
                input.style.left = template.offsetLeft + "px";
            };
            var valueBuffer;
            if (actionObj !== undefined) switch (actionObj.action) {
              case "isComplete":
                return el = actionObj.el, isComplete(getBuffer());

              case "unmaskedvalue":
                return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, 
                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), 
                checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), 
                unmaskedvalue(el);

              case "mask":
                !function(elem) {
                    EventRuler.off(elem);
                    var isSupported = function(input, opts) {
                        var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
                        if (!isSupported) if ("INPUT" === input.tagName) {
                            var el = document.createElement("input");
                            el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                        } else isSupported = "partial";
                        return !1 !== isSupported ? function(npt) {
                            function getter() {
                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                            }
                            function setter(value) {
                                valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                            }
                            var valueGet, valueSet;
                            if (!npt.inputmask.__valueGet) {
                                if (!0 !== opts.noValuePatching) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {
                                            return object.__proto__;
                                        } : function(object) {
                                            return object.constructor.prototype;
                                        });
                                        var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                        valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                        valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: !0
                                        })) : "INPUT" !== npt.tagName && (valueGet = function() {
                                            return this.textContent;
                                        }, valueSet = function(value) {
                                            this.textContent = value;
                                        }, Object.defineProperty(npt, "value", {
                                            get: getter,
                                            set: setter,
                                            configurable: !0
                                        }));
                                    } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                    valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                    npt.__defineSetter__("value", setter));
                                    npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                                }
                                npt.inputmask._valueGet = function(overruleRTL) {
                                    return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                                }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                    valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                                }, valueGet === undefined && (valueGet = function() {
                                    return this.value;
                                }, valueSet = function(value) {
                                    this.value = value;
                                }, function(type) {
                                    if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                                        var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                            return elem.value;
                                        }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                            return elem.value = value, elem;
                                        };
                                        $.valHooks[type] = {
                                            get: function(elem) {
                                                if (elem.inputmask) {
                                                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                    var result = valhookGet(elem);
                                                    return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                                }
                                                return valhookGet(elem);
                                            },
                                            set: function(elem, value) {
                                                var result, $elem = $(elem);
                                                return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), 
                                                result;
                                            },
                                            inputmaskpatch: !0
                                        };
                                    }
                                }(npt.type), function(npt) {
                                    EventRuler.on(npt, "mouseenter", function(event) {
                                        var $input = $(this);
                                        this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");
                                    });
                                }(npt));
                            }
                        }(input) : input.inputmask = undefined, isSupported;
                    }(elem, opts);
                    if (!1 !== isSupported && (el = elem, $el = $(el), -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), 
                    !0 === opts.colorMask && initializeColorMask(el), android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, 
                    el.setAttribute("inputmode", opts.inputmode)), "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), 
                    el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                    EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), 
                    EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), 
                    EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), 
                    EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                    EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), 
                    EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                    EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                    android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                    EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), 
                    EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), 
                    EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                    EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                    undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);
                        "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                        var buffer = getBuffer().slice();
                        undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), 
                        opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                        writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
                    }
                }(el);
                break;

              case "format":
                return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), 
                checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {
                    value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                    metadata: maskScope.call(this, {
                        action: "getmetadata"
                    }, maskset, opts)
                } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

              case "isValid":
                actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
                for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;
                return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

              case "getemptymask":
                return getBufferTemplate().join("");

              case "remove":
                if (el && el.inputmask) {
                    $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), 
                    EventRuler.off(el);
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                        get: el.inputmask.__valueGet,
                        set: el.inputmask.__valueSet,
                        configurable: !0
                    }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                    el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;
                }
                return el;

              case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                    var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                    return $.each(maskset.metadata, function(ndx, mtdt) {
                        if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                    }), maskTarget;
                }
                return maskset.metadata;
            }
        }
        var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;
        return Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {
                    start: "[",
                    end: "]"
                },
                quantifiermarker: {
                    start: "{",
                    end: "}"
                },
                groupmarker: {
                    start: "(",
                    end: ")"
                },
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function(pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: undefined,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: [ "text", "tel", "password" ],
                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                isComplete: null,
                canClearPosition: $.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: undefined,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                "9": {
                    validator: "[0-9i?�-i?�]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-z??-N???N�A�-A?A�]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9i?�-i?�A-Za-z??-N???N�A�-A?A�]",
                    cardinality: 1
                }
            },
            aliases: {},
            masksCache: {},
            mask: function(elems) {
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    if (!0 === opts.importDataAttributes) {
                        var option, dataoptions, optionData, p, importOption = function(option, optionData) {
                            null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                            userOptions[option] = optionData);
                        }, attrOptions = npt.getAttribute(dataAttribute);
                        if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'), 
                        dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                        importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                        for (option in opts) {
                            if (dataoptions) {
                                optionData = undefined;
                                for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                            importOption(option, optionData);
                        }
                    }
                    return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), 
                    ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), 
                    opts.isRTL = !0), opts;
                }
                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
                elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, 
                    el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), 
                    el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                    el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                        action: "mask"
                    }));
                }), elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function(options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), 
                this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
            },
            remove: function() {
                return maskScope.call(this, {
                    action: "remove"
                });
            },
            getemptymask: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "getemptymask"
                });
            },
            hasMaskedValue: function() {
                return !this.opts.autoUnmask;
            },
            isComplete: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "isComplete"
                });
            },
            getmetadata: function() {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "getmetadata"
                });
            },
            isValid: function(value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
            },
            format: function(value, metadata) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
                maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
            },
            analyseMask: function(mask, regexMask, opts) {
                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                    this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }
                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element, opts.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: undefined,
                        nativeDef: element
                    }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function(ndx, lmnt) {
                        prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || lmnt,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                            nativeDef: lmnt
                        });
                    })), escaped = !1; else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                                mtoken.matches.splice(position++, 0, {
                                    fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function() {
                                        this.test = validator;
                                    }() : new RegExp("."),
                                    cardinality: cardinality || 1,
                                    optionality: mtoken.isOptional,
                                    newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element
                                }), prevMatch = mtoken.matches[position - 1];
                            }
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                            nativeDef: element
                        }), escaped = !1;
                    }
                }
                function verifyGroupMarker(maskToken) {
                    maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                        regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), 
                        verifyGroupMarker(token);
                    });
                }
                function defaultCase() {
                    if (openenings.length > 0) {
                        if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                        currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                        }
                    } else insertTestDefinition(currentToken, m);
                }
                function reverseTokens(maskToken) {
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                        }
                        maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {
                            return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), 
                            st;
                        }(maskToken.matches[match]);
                    }
                    return maskToken;
                }
                var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];
                for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                    if (m = match[0], regexMask) switch (m.charAt(0)) {
                      case "?":
                        m = "{0,1}";
                        break;

                      case "+":
                      case "*":
                        m = "{" + m + "}";
                    }
                    if (escaped) defaultCase(); else switch (m.charAt(0)) {
                      case opts.escapeChar:
                        escaped = !0, regexMask && defaultCase();
                        break;

                      case opts.optionalmarker.end:
                      case opts.groupmarker.end:
                        if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {
                            if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), 
                            currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                                alternator.matches[mndx].alternatorGroup = !1;
                                openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                            }
                        } else currentToken.matches.push(openingToken); else defaultCase();
                        break;

                      case opts.optionalmarker.start:
                        openenings.push(new MaskToken(!1, !0));
                        break;

                      case opts.groupmarker.start:
                        openenings.push(new MaskToken(!0));
                        break;

                      case opts.quantifiermarker.start:
                        var quantifier = new MaskToken(!1, !1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                            min: mq0,
                            max: mq1
                        }, openenings.length > 0) {
                            var matches = openenings[openenings.length - 1].matches;
                            (match = matches.pop()).isGroup || ((groupToken = new MaskToken(!0)).matches.push(match), 
                            match = groupToken), matches.push(match), matches.push(quantifier);
                        } else (match = currentToken.matches.pop()).isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), 
                        (groupToken = new MaskToken(!0)).matches.push(match), match = groupToken), currentToken.matches.push(match), 
                        currentToken.matches.push(quantifier);
                        break;

                      case opts.alternatormarker:
                        if (openenings.length > 0) {
                            var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                            lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();
                        } else lastMatch = currentToken.matches.pop();
                        if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                        lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                        openenings.push(alternator), lastMatch.openGroup) {
                            lastMatch.openGroup = !1;
                            var alternatorGroup = new MaskToken(!0);
                            alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                        }
                        break;

                      default:
                        defaultCase();
                    }
                }
                for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
                return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
                (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
            }
        }, Inputmask.extendDefaults = function(options) {
            $.extend(!0, Inputmask.prototype.defaults, options);
        }, Inputmask.extendDefinitions = function(definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition);
        }, Inputmask.extendAliases = function(alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias);
        }, Inputmask.format = function(value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        }, Inputmask.unmask = function(value, options) {
            return Inputmask(options).unmaskedvalue(value);
        }, Inputmask.isValid = function(value, options) {
            return Inputmask(options).isValid(value);
        }, Inputmask.remove = function(elems) {
            $.each(elems, function(ndx, el) {
                el.inputmask && el.inputmask.remove();
            });
        }, Inputmask.escapeRegex = function(str) {
            var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        }, Inputmask.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, Inputmask;
    });
}, function(module, exports) {
    module.exports = jQuery;
}, function(module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    __webpack_require__(4), __webpack_require__(9), __webpack_require__(12), __webpack_require__(13), 
    __webpack_require__(14), __webpack_require__(15);
    var _inputmask2 = _interopRequireDefault(__webpack_require__(1)), _inputmask4 = _interopRequireDefault(__webpack_require__(0)), _jquery2 = _interopRequireDefault(__webpack_require__(2));
    _inputmask4.default === _jquery2.default && __webpack_require__(16), window.Inputmask = _inputmask2.default;
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(5);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
    var options = {
        hmr: !0
    };
    options.transform = void 0;
    __webpack_require__(7)(content, options);
    content.locals && (module.exports = content.locals);
}, function(module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(6)(void 0)).push([ module.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", "" ]);
}, function(module, exports) {
    function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || "", cssMapping = item[3];
        if (!cssMapping) return content;
        if (useSourceMap && "function" == typeof btoa) {
            var sourceMapping = toComment(cssMapping), sourceURLs = cssMapping.sources.map(function(source) {
                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
            });
            return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");
        }
        return [ content ].join("\n");
    }
    function toComment(sourceMap) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))) + " */";
    }
    module.exports = function(useSourceMap) {
        var list = [];
        return list.toString = function() {
            return this.map(function(item) {
                var content = cssWithMappingToString(item, useSourceMap);
                return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
            }).join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, function(module, exports, __webpack_require__) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list, options) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = options.base ? item[0] + options.base : item[0], part = {
                css: item[1],
                media: item[2],
                sourceMap: item[3]
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);
        if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), 
        stylesInsertedAtTop.push(style); else if ("bottom" === options.insertAt) target.appendChild(style); else {
            if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
            target.insertBefore(style, nextSibling);
        }
    }
    function removeStyleElement(style) {
        if (null === style.parentNode) return !1;
        style.parentNode.removeChild(style);
        var idx = stylesInsertedAtTop.indexOf(style);
        idx >= 0 && stylesInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var style = document.createElement("style");
        return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), 
        style;
    }
    function createLinkElement(options) {
        var link = document.createElement("link");
        return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), 
        insertStyleElement(options, link), link;
    }
    function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function(key) {
            el.setAttribute(key, attrs[key]);
        });
    }
    function addStyle(obj, options) {
        var style, update, remove, result;
        if (options.transform && obj.css) {
            if (!(result = options.transform(obj.css))) return function() {};
            obj.css = result;
        }
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), 
            remove = applyToSingletonTag.bind(null, style, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = createLinkElement(options), 
        update = updateLink.bind(null, style, options), remove = function() {
            removeStyleElement(style), style.href && URL.revokeObjectURL(style.href);
        }) : (style = createStyleElement(options), update = applyToTag.bind(null, style), 
        remove = function() {
            removeStyleElement(style);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = style.childNodes;
            childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);
        }
    }
    function applyToTag(style, obj) {
        var css = obj.css, media = obj.media;
        if (media && style.setAttribute("media", media), style.styleSheet) style.styleSheet.cssText = css; else {
            for (;style.firstChild; ) style.removeChild(style.firstChild);
            style.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(link, options, obj) {
        var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
        (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = link.href;
        link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    var stylesInDom = {}, isOldIE = function(fn) {
        var memo;
        return function() {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
        };
    }(function() {
        return window && document && document.all && !window.atob;
    }), getElement = function(fn) {
        var memo = {};
        return function(selector) {
            if (void 0 === memo[selector]) {
                var styleTarget = fn.call(this, selector);
                if (styleTarget instanceof window.HTMLIFrameElement) try {
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    styleTarget = null;
                }
                memo[selector] = styleTarget;
            }
            return memo[selector];
        };
    }(function(target) {
        return document.querySelector(target);
    }), singleton = null, singletonCounter = 0, stylesInsertedAtTop = [], fixUrls = __webpack_require__(8);
    module.exports = function(list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (options = options || {}).attrs = "object" == typeof options.attrs ? options.attrs : {}, 
        options.singleton || (options.singleton = isOldIE()), options.insertInto || (options.insertInto = "head"), 
        options.insertAt || (options.insertAt = "bottom");
        var styles = listToStyles(list, options);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i];
                (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle);
            }
            newList && addStylesToDom(listToStyles(newList, options), options);
            for (i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, function(module, exports) {
    module.exports = function(css) {
        var location = "undefined" != typeof window && window.location;
        if (!location) throw new Error("fixUrls requires window.location");
        if (!css || "string" != typeof css) return css;
        var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
        return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
            var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                return $1;
            }).replace(/^'(.*)'$/, function(o, $1) {
                return $1;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
            var newUrl;
            return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 
            "url(" + JSON.stringify(newUrl) + ")";
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        function isLeapYear(year) {
            return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
        }
        return Inputmask.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {
                    minyear: 1900,
                    maxyear: 2099
                },
                isInYearRange: function(chrs, minyear, maxyear) {
                    if (isNaN(chrs)) return !1;
                    var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                    return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
                },
                determinebaseyear: function(minyear, maxyear, hint) {
                    var currentyear = new Date().getFullYear();
                    if (minyear > currentyear) return minyear;
                    if (maxyear < currentyear) {
                        for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;
                        var maxxYear = maxYearPrefix + maxYearPostfix;
                        return minyear > maxxYear ? minyear : maxxYear;
                    }
                    if (minyear <= currentyear && currentyear <= maxyear) {
                        for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;
                        var currentYearAndHint = currentYearPrefix + hint;
                        return currentYearAndHint < minyear ? minyear : currentYearAndHint;
                    }
                    return currentyear;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                },
                getFrontValue: function(mask, buffer, opts) {
                    for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
                        var definition = opts.definitions[mask.charAt(i)];
                        definition ? (start += length, length = definition.cardinality) : length++;
                    }
                    return buffer.join("").substr(start, length);
                },
                postValidation: function(buffer, currentResult, opts) {
                    var dayMonthValue, year, bufferStr = buffer.join("");
                    return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), 
                    dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
                },
                definitions: {
                    "1": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.val1.test(chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                            {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                pos: pos,
                                c: chrs.charAt(0)
                            });
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var pchrs = chrs;
                                isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
                                var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
                                if (isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), 
                                !strict && !isValid) {
                                    if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, 
                                    maskset.buffer[++pos] = "0", {
                                        pos: pos,
                                        c: "0"
                                    };
                                    if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", 
                                    pos++, {
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 1
                        } ]
                    },
                    "2": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                            {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                pos: pos,
                                c: chrs.charAt(0)
                            });
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
                                var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                                -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                                var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                                return isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), 
                                strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    y: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        },
                        cardinality: 4,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                    if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                    {
                                        pos: pos
                                    };
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), 
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                    maskset.buffer[pos++] = yearPrefix.charAt(1), {
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 1
                        }, {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                    if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), 
                                    {
                                        pos: pos
                                    };
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), 
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), 
                                    maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), 
                                    {
                                        refreshFromBuffer: {
                                            start: pos - 3,
                                            end: pos
                                        },
                                        pos: pos
                                    };
                                }
                                return isValid;
                            },
                            cardinality: 2
                        }, {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            },
                            cardinality: 3
                        } ]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy",
                alias: "dd/mm/yyyy",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", 
                            maskset.buffer[pos] = "0", {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                },
                                c: "0"
                            };
                            var isValid = opts.regex.hrs.test(chrs);
                            if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", 
                            maskset.buffer[pos] = chrs.charAt(0), pos++, {
                                refreshFromBuffer: {
                                    start: pos - 2,
                                    end: pos
                                },
                                pos: pos,
                                c: opts.timeseparator
                            };
                            if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                                var tmp = parseInt(chrs, 10);
                                return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", 
                                maskset.buffer[pos + 6] = "m"), (tmp -= 12) < 10 ? (maskset.buffer[pos] = tmp.toString(), 
                                maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), 
                                maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: pos - 1,
                                        end: pos + 6
                                    },
                                    c: maskset.buffer[pos]
                                };
                            }
                            return isValid;
                        },
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.hrspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [ {
                            validator: function(chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.mspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                });
                            },
                            cardinality: 1
                        } ]
                    },
                    t: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.regex.ampm.test(chrs + "m");
                        },
                        casing: "lower",
                        cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                        $input.trigger("setvalue");
                    }
                }
            },
            "hh:mm t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "h:s t": {
                mask: "h:s t\\m",
                placeholder: "hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "hh:mm:ss": {
                mask: "h:s:s",
                placeholder: "hh:mm:ss",
                alias: "datetime",
                autoUnmask: !1
            },
            "hh:mm": {
                mask: "h:s",
                placeholder: "hh:mm",
                alias: "datetime",
                autoUnmask: !1
            },
            date: {
                alias: "dd/mm/yyyy"
            },
            "mm/yyyy": {
                mask: "1/y",
                placeholder: "mm/yyyy",
                leapday: "donotuse",
                separator: "/",
                alias: "mm/dd/yyyy"
            },
            shamsi: {
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {
                    minyear: 1300,
                    maxyear: 1499
                },
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    },
                    val2: function(separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    },
                    val1pre: new RegExp("[01]"),
                    val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function(e, buffer, caretPos, opts) {}
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return window;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return document;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        return Inputmask.extendDefinitions({
            A: {
                validator: "[A-Za-z??-N???N�A�-A?A�]",
                cardinality: 1,
                casing: "upper"
            },
            "&": {
                validator: "[0-9A-Za-z??-N???N�A�-A?A�]",
                cardinality: 1,
                casing: "upper"
            },
            "#": {
                validator: "[0-9A-Fa-f]",
                cardinality: 1,
                casing: "upper"
            }
        }), Inputmask.extendAliases({
            url: {
                definitions: {
                    i: {
                        validator: ".",
                        cardinality: 1
                    }
                },
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                            chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 
                            new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        },
                        cardinality: 1
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function(pastedValue, opts) {
                    return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                    "*": {
                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                        cardinality: 1,
                        casing: "lower"
                    },
                    "-": {
                        validator: "[0-9A-Za-z-]",
                        cardinality: 1,
                        casing: "lower"
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {
                mask: "##:##:##:##:##:##"
            },
            vin: {
                mask: "V{13}9{4}",
                definitions: {
                    V: {
                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                        cardinality: 1,
                        casing: "upper"
                    }
                },
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask, undefined) {
        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt;
        }
        return Inputmask.extendAliases({
            numeric: {
                mask: function(opts) {
                    if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), 
                    opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                    " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, 
                    opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), 
                    isFinite(opts.integerDigits))) {
                        var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;
                        opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), 
                        opts.integerDigits < 1 && (opts.integerDigits = "*");
                    }
                    opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), 
                    "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), 
                    opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", 
                    !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                    opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                    var mask = "[+]";
                    if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", 
                    opts.digits !== undefined) {
                        opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                        var dq = opts.digits.toString().split(",");
                        isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                    }
                    return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {
                    front: "-",
                    back: ""
                },
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function(buffer, pos, c, isSelection, opts) {
                    if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, 
                    "" === buffer.join("") || {
                        caret: pos,
                        dopost: !0
                    });
                    if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                        var radixPos = $.inArray(opts.radixPoint, buffer);
                        if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {
                            caret: radixPos + 1
                        };
                    }
                    return !0;
                },
                postValidation: function(buffer, currentResult, opts) {
                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                    if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
                    var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();
                    opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
                    var charAtPos = maskedValue[caretPos];
                    if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), 
                    caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                    charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", 
                    opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), 
                    prefix = prefix.join(""), suffix = suffix.join("");
                    var processValue = maskedValue.join("").replace(prefix, "");
                    if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                    isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), 
                    processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), 
                    processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), 
                    "" !== processValue) {
                        if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);
                            -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                            for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                        }
                        if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {
                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                            processValue = Inputmask(function(buffer, opts) {
                                var postMask = "";
                                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                                    var radixSplit = buffer.join("").split(opts.radixPoint);
                                    radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                                }
                                return postMask;
                            }(processValue, opts), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {
                                    "*": {
                                        validator: "[0-9?]",
                                        cardinality: 1
                                    }
                                }
                            }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), 
                            processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
                        }
                    }
                    if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), 
                    processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, 
                    processValue += opts.negationSymbol.back), processValue = processValue.split(""), 
                    charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                        var newCaretPos = $.inArray(charAtPos, processValue);
                        -1 !== newCaretPos && (caretPos = newCaretPos);
                    }
                    opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
                    var rslt = {
                        caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                        buffer: processValue,
                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                    };
                    return rslt.refreshFromBuffer ? rslt : currentResult;
                },
                onBeforeWrite: function(e, buffer, caretPos, opts) {
                    if (e) switch (e.type) {
                      case "keydown":
                        return opts.postValidation(buffer, {
                            caret: caretPos,
                            dopost: !0
                        }, opts);

                      case "blur":
                      case "checkval":
                        var unmasked;
                        if (function(opts) {
                            opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                            "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                            null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                            opts.parseMinMaxOptions = "done");
                        }(opts), null !== opts.min || null !== opts.max) {
                            if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                                unmaskAsNumber: !0
                            })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, 
                            opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                                caret: caretPos,
                                dopost: !0,
                                placeholder: "0"
                            }, opts);
                            if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, 
                            opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                                caret: caretPos,
                                dopost: !0,
                                placeholder: "0"
                            }, opts);
                        }
                        return opts.postValidation(buffer, {
                            caret: caretPos,
                            placeholder: "0",
                            event: "blur"
                        }, opts);

                      case "_checkval":
                        return {
                            caret: caretPos
                        };
                    }
                },
                regex: {
                    integerPart: function(opts, emptyCheck) {
                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                    },
                    integerNPart: function(opts) {
                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function(chrs, maskset, pos, strict, opts, isSelection) {
                            var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                            if (!0 === isValid) {
                                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                                    var processValue = maskset.buffer.join(""), pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);
                                    pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), 
                                    "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), 
                                    processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                    var bufferTemplate = maskset._buffer.join("");
                                    for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);
                                    isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {
                                        pos: pos,
                                        remove: pos
                                    } : {
                                        pos: pos
                                    };
                                }
                            } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", 
                            isValid = {
                                pos: pos + 1
                            });
                            return isValid;
                        },
                        cardinality: 1
                    },
                    "+": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    "-": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        },
                        cardinality: 1,
                        placeholder: ""
                    },
                    ":": {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);
                            return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                                caret: pos + 1
                            }), isValid;
                        },
                        cardinality: 1,
                        placeholder: function(opts) {
                            return opts.radixPoint;
                        }
                    }
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 
                    processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                    Number(processValue)) : processValue;
                },
                isComplete: function(buffer, opts) {
                    var maskedValue = buffer.join("");
                    if (buffer.slice().join("") !== maskedValue) return !1;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 
                    isFinite(processValue);
                },
                onBeforeMask: function(initialValue, opts) {
                    if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), 
                    "" !== opts.radixPoint && isFinite(initialValue)) {
                        var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                        2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                    }
                    var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);
                    if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                    0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), 
                    "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
                        var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(opts.digits) < decPart.toString().length) {
                            var digitsFactor = Math.pow(10, parseInt(opts.digits));
                            initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), 
                            initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);
                        }
                    }
                    return initialValue;
                },
                canClearPosition: function(maskset, position, lvp, strict, opts) {
                    var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;
                    return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), 
                    canClear;
                },
                onKeyDown: function(e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                      case Inputmask.keyCode.UP:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                        break;

                      case Inputmask.keyCode.DOWN:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {
                alias: "numeric"
            },
            integer: {
                alias: "numeric",
                digits: 0,
                radixPoint: ""
            },
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        function maskSort(a, b) {
            var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];
            return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
        }
        var analyseMaskBase = Inputmask.prototype.analyseMask;
        return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {
            function reduceVariations(masks, previousVariation, previousmaskGroup) {
                previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 
                "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
                for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], 
                maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
                for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
            }
            function rebuild(maskGroup) {
                var mask = "", submasks = [];
                for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
                return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, 
                mask;
            }
            var maskGroups = {};
            return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (reduceVariations((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), 
            mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
        }, Inputmask.extendAliases({
            abstractphone: {
                groupmarker: {
                    start: "<",
                    end: ">"
                },
                countrycode: "",
                phoneCodes: [],
                mask: function(opts) {
                    return opts.definitions = {
                        "#": Inputmask.prototype.definitions[9]
                    }, opts.phoneCodes.sort(maskSort);
                },
                keepStatic: !0,
                onBeforeMask: function(value, opts) {
                    var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                    processedValue;
                },
                onUnMask: function(maskedValue, unmaskedValue, opts) {
                    return maskedValue.replace(/[()#-]/g, "");
                },
                inputmode: "tel"
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        return Inputmask.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function(buffer, opts) {
                    return new RegExp(opts.regex, opts.casing ? "i" : "").test(buffer.join(""));
                },
                definitions: {
                    r: {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            function RegexToken(isGroup, isQuantifier) {
                                this.matches = [], this.isGroup = isGroup || !1, this.isQuantifier = isQuantifier || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0;
                            }
                            function validateRegexToken(token, fromGroup) {
                                var isvalid = !1;
                                fromGroup && (regexPart += "(", openGroupCount++);
                                for (var mndx = 0; mndx < token.matches.length; mndx++) {
                                    var matchToken = token.matches[mndx];
                                    if (!0 === matchToken.isGroup) isvalid = validateRegexToken(matchToken, !0); else if (!0 === matchToken.isQuantifier) {
                                        var crrntndx = $.inArray(matchToken, token.matches), matchGroup = token.matches[crrntndx - 1], regexPartBak = regexPart;
                                        if (isNaN(matchToken.quantifier.max)) {
                                            for (;matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length && !(isvalid = validateRegexToken(matchGroup, !0)); ) ;
                                            (isvalid = isvalid || validateRegexToken(matchGroup, !0)) && (matchToken.repeaterPart = regexPart), 
                                            regexPart = regexPartBak + matchToken.quantifier.max;
                                        } else {
                                            for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm && !(isvalid = validateRegexToken(matchGroup, !0)); i++) ;
                                            regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                                        }
                                    } else if (void 0 !== matchToken.matches) for (var k = 0; k < matchToken.length && !(isvalid = validateRegexToken(matchToken[k], fromGroup)); k++) ; else {
                                        var testExp;
                                        if ("[" == matchToken.charAt(0)) {
                                            testExp = regexPart, testExp += matchToken;
                                            for (j = 0; j < openGroupCount; j++) testExp += ")";
                                            isvalid = (exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "")).test(bufferStr);
                                        } else for (var l = 0, tl = matchToken.length; l < tl; l++) if ("\\" !== matchToken.charAt(l)) {
                                            testExp = regexPart, testExp = (testExp += matchToken.substr(0, l + 1)).replace(/\|$/, "");
                                            for (var j = 0; j < openGroupCount; j++) testExp += ")";
                                            var exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "");
                                            if (isvalid = exp.test(bufferStr)) break;
                                        }
                                        regexPart += matchToken;
                                    }
                                    if (isvalid) break;
                                }
                                return fromGroup && (regexPart += ")", openGroupCount--), isvalid;
                            }
                            var bufferStr, groupToken, cbuffer = maskset.buffer.slice(), regexPart = "", isValid = !1, openGroupCount = 0;
                            null === opts.regexTokens && function() {
                                var match, m, currentToken = new RegexToken(), opengroups = [];
                                for (opts.regexTokens = []; match = opts.tokenizer.exec(opts.regex); ) switch ((m = match[0]).charAt(0)) {
                                  case "(":
                                    opengroups.push(new RegexToken(!0));
                                    break;

                                  case ")":
                                    groupToken = opengroups.pop(), opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(groupToken) : currentToken.matches.push(groupToken);
                                    break;

                                  case "{":
                                  case "+":
                                  case "*":
                                    var quantifierToken = new RegexToken(!1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                    if (quantifierToken.quantifier = {
                                        min: mq0,
                                        max: mq1
                                    }, opengroups.length > 0) {
                                        var matches = opengroups[opengroups.length - 1].matches;
                                        (match = matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), 
                                        match = groupToken), matches.push(match), matches.push(quantifierToken);
                                    } else (match = currentToken.matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), 
                                    match = groupToken), currentToken.matches.push(match), currentToken.matches.push(quantifierToken);
                                    break;

                                  default:
                                    opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(m) : currentToken.matches.push(m);
                                }
                                currentToken.matches.length > 0 && opts.regexTokens.push(currentToken);
                            }(), cbuffer.splice(pos, 0, chrs), bufferStr = cbuffer.join("");
                            for (var i = 0; i < opts.regexTokens.length; i++) {
                                var regexToken = opts.regexTokens[i];
                                if (isValid = validateRegexToken(regexToken, regexToken.isGroup)) break;
                            }
                            return isValid;
                        },
                        cardinality: 1
                    }
                }
            }
        }), Inputmask;
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    !function(factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(1) ], 
        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function($, Inputmask) {
        return void 0 === $.fn.inputmask && ($.fn.inputmask = function(fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
              case "unmaskedvalue":
                return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

              case "remove":
                return this.each(function() {
                    this.inputmask && this.inputmask.remove();
                });

              case "getemptymask":
                return input && input.inputmask ? input.inputmask.getemptymask() : "";

              case "hasMaskedValue":
                return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

              case "isComplete":
                return !input || !input.inputmask || input.inputmask.isComplete();

              case "getmetadata":
                return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

              case "setvalue":
                $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
                break;

              case "option":
                if ("string" != typeof options) return this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(options);
                });
                if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                break;

              default:
                return options.alias = fn, nptmask = new Inputmask(options), this.each(function() {
                    nptmask.mask(this);
                });
            } else {
                if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), 
                void 0 === fn.mask && void 0 === fn.alias ? this.each(function() {
                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);
                    nptmask.mask(this);
                }) : this.each(function() {
                    nptmask.mask(this);
                });
                if (void 0 === fn) return this.each(function() {
                    (nptmask = new Inputmask(options)).mask(this);
                });
            }
        }), $.fn.inputmask;
    });
} ]);
function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';             
}

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'n': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	dataName: "rawMaskFn",
	placeholder: '_',
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		}
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					}
				}),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							}else{
								input.caret(next);
							}

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							}
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							break;
						}
					} else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				}).join('');
			});

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				})
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();
					
					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				})
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() { 
						var pos=checkVal(true);
						input.caret(pos); 
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					}, 0);
				});
			checkVal(); //Perform initial check for existing values
		});
	}
});




$(document).ready(function(){
	
// menu
	$(function() {
		$('.smooth').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				}, 1000);
			}
		});
	});
	
	$('.nav-item').click(function(){
        $(".navbar-nav").find(".nav-item").removeClass("active");
		$(this).addClass("active");
    });
	
    
// slick-slider
	
	function mobileOnlySlider() {
		$('.plates__content').slick({
			infinite: true,
			slidesToShow: 1,
			dots: true,
			arrows: true,
		});
	}

	if(window.innerWidth < 768) {
		mobileOnlySlider();
	}

	$(window).resize(function(e){
		if(window.innerWidth < 768) {
			if(!$('.plates__content').hasClass('slick-initialized')){
				mobileOnlySlider();
			}

		}else{
			if($('.plates__content').hasClass('slick-initialized')){
				$('.plates__content').slick('unslick');
			}
		}
	});
    
// mask
	
	$('input[type="tel"]').mask("8-nnn-nnn-nn-nn");
	$('input[name="mail"]').inputmask("email");
	
//carousel slider
    
	$(".flipster").flipster({
		style: 'carousel',
		spacing: -0.5,
		buttons: true,
		scrollwheel:false,
	});
    

}); 
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihpKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxpKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pKHJlcXVpcmUoXCJqcXVlcnlcIikpOmkoalF1ZXJ5KX0oZnVuY3Rpb24oaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9d2luZG93LlNsaWNrfHx7fTsoZT1mdW5jdGlvbigpe3ZhciBlPTA7cmV0dXJuIGZ1bmN0aW9uKHQsbyl7dmFyIHMsbj10aGlzO24uZGVmYXVsdHM9e2FjY2Vzc2liaWxpdHk6ITAsYWRhcHRpdmVIZWlnaHQ6ITEsYXBwZW5kQXJyb3dzOmkodCksYXBwZW5kRG90czppKHQpLGFycm93czohMCxhc05hdkZvcjpudWxsLHByZXZBcnJvdzonPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLG5leHRBcnJvdzonPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxhdXRvcGxheTohMSxhdXRvcGxheVNwZWVkOjNlMyxjZW50ZXJNb2RlOiExLGNlbnRlclBhZGRpbmc6XCI1MHB4XCIsY3NzRWFzZTpcImVhc2VcIixjdXN0b21QYWdpbmc6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gaSgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KHQrMSl9LGRvdHM6ITEsZG90c0NsYXNzOlwic2xpY2stZG90c1wiLGRyYWdnYWJsZTohMCxlYXNpbmc6XCJsaW5lYXJcIixlZGdlRnJpY3Rpb246LjM1LGZhZGU6ITEsZm9jdXNPblNlbGVjdDohMSxmb2N1c09uQ2hhbmdlOiExLGluZmluaXRlOiEwLGluaXRpYWxTbGlkZTowLGxhenlMb2FkOlwib25kZW1hbmRcIixtb2JpbGVGaXJzdDohMSxwYXVzZU9uSG92ZXI6ITAscGF1c2VPbkZvY3VzOiEwLHBhdXNlT25Eb3RzSG92ZXI6ITEscmVzcG9uZFRvOlwid2luZG93XCIscmVzcG9uc2l2ZTpudWxsLHJvd3M6MSxydGw6ITEsc2xpZGU6XCJcIixzbGlkZXNQZXJSb3c6MSxzbGlkZXNUb1Nob3c6MSxzbGlkZXNUb1Njcm9sbDoxLHNwZWVkOjUwMCxzd2lwZTohMCxzd2lwZVRvU2xpZGU6ITEsdG91Y2hNb3ZlOiEwLHRvdWNoVGhyZXNob2xkOjUsdXNlQ1NTOiEwLHVzZVRyYW5zZm9ybTohMCx2YXJpYWJsZVdpZHRoOiExLHZlcnRpY2FsOiExLHZlcnRpY2FsU3dpcGluZzohMSx3YWl0Rm9yQW5pbWF0ZTohMCx6SW5kZXg6MWUzfSxuLmluaXRpYWxzPXthbmltYXRpbmc6ITEsZHJhZ2dpbmc6ITEsYXV0b1BsYXlUaW1lcjpudWxsLGN1cnJlbnREaXJlY3Rpb246MCxjdXJyZW50TGVmdDpudWxsLGN1cnJlbnRTbGlkZTowLGRpcmVjdGlvbjoxLCRkb3RzOm51bGwsbGlzdFdpZHRoOm51bGwsbGlzdEhlaWdodDpudWxsLGxvYWRJbmRleDowLCRuZXh0QXJyb3c6bnVsbCwkcHJldkFycm93Om51bGwsc2Nyb2xsaW5nOiExLHNsaWRlQ291bnQ6bnVsbCxzbGlkZVdpZHRoOm51bGwsJHNsaWRlVHJhY2s6bnVsbCwkc2xpZGVzOm51bGwsc2xpZGluZzohMSxzbGlkZU9mZnNldDowLHN3aXBlTGVmdDpudWxsLHN3aXBpbmc6ITEsJGxpc3Q6bnVsbCx0b3VjaE9iamVjdDp7fSx0cmFuc2Zvcm1zRW5hYmxlZDohMSx1bnNsaWNrZWQ6ITF9LGkuZXh0ZW5kKG4sbi5pbml0aWFscyksbi5hY3RpdmVCcmVha3BvaW50PW51bGwsbi5hbmltVHlwZT1udWxsLG4uYW5pbVByb3A9bnVsbCxuLmJyZWFrcG9pbnRzPVtdLG4uYnJlYWtwb2ludFNldHRpbmdzPVtdLG4uY3NzVHJhbnNpdGlvbnM9ITEsbi5mb2N1c3NlZD0hMSxuLmludGVycnVwdGVkPSExLG4uaGlkZGVuPVwiaGlkZGVuXCIsbi5wYXVzZWQ9ITAsbi5wb3NpdGlvblByb3A9bnVsbCxuLnJlc3BvbmRUbz1udWxsLG4ucm93Q291bnQ9MSxuLnNob3VsZENsaWNrPSEwLG4uJHNsaWRlcj1pKHQpLG4uJHNsaWRlc0NhY2hlPW51bGwsbi50cmFuc2Zvcm1UeXBlPW51bGwsbi50cmFuc2l0aW9uVHlwZT1udWxsLG4udmlzaWJpbGl0eUNoYW5nZT1cInZpc2liaWxpdHljaGFuZ2VcIixuLndpbmRvd1dpZHRoPTAsbi53aW5kb3dUaW1lcj1udWxsLHM9aSh0KS5kYXRhKFwic2xpY2tcIil8fHt9LG4ub3B0aW9ucz1pLmV4dGVuZCh7fSxuLmRlZmF1bHRzLG8scyksbi5jdXJyZW50U2xpZGU9bi5vcHRpb25zLmluaXRpYWxTbGlkZSxuLm9yaWdpbmFsU2V0dGluZ3M9bi5vcHRpb25zLHZvaWQgMCE9PWRvY3VtZW50Lm1vekhpZGRlbj8obi5oaWRkZW49XCJtb3pIaWRkZW5cIixuLnZpc2liaWxpdHlDaGFuZ2U9XCJtb3p2aXNpYmlsaXR5Y2hhbmdlXCIpOnZvaWQgMCE9PWRvY3VtZW50LndlYmtpdEhpZGRlbiYmKG4uaGlkZGVuPVwid2Via2l0SGlkZGVuXCIsbi52aXNpYmlsaXR5Q2hhbmdlPVwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiKSxuLmF1dG9QbGF5PWkucHJveHkobi5hdXRvUGxheSxuKSxuLmF1dG9QbGF5Q2xlYXI9aS5wcm94eShuLmF1dG9QbGF5Q2xlYXIsbiksbi5hdXRvUGxheUl0ZXJhdG9yPWkucHJveHkobi5hdXRvUGxheUl0ZXJhdG9yLG4pLG4uY2hhbmdlU2xpZGU9aS5wcm94eShuLmNoYW5nZVNsaWRlLG4pLG4uY2xpY2tIYW5kbGVyPWkucHJveHkobi5jbGlja0hhbmRsZXIsbiksbi5zZWxlY3RIYW5kbGVyPWkucHJveHkobi5zZWxlY3RIYW5kbGVyLG4pLG4uc2V0UG9zaXRpb249aS5wcm94eShuLnNldFBvc2l0aW9uLG4pLG4uc3dpcGVIYW5kbGVyPWkucHJveHkobi5zd2lwZUhhbmRsZXIsbiksbi5kcmFnSGFuZGxlcj1pLnByb3h5KG4uZHJhZ0hhbmRsZXIsbiksbi5rZXlIYW5kbGVyPWkucHJveHkobi5rZXlIYW5kbGVyLG4pLG4uaW5zdGFuY2VVaWQ9ZSsrLG4uaHRtbEV4cHI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvLG4ucmVnaXN0ZXJCcmVha3BvaW50cygpLG4uaW5pdCghMCl9fSgpKS5wcm90b3R5cGUuYWN0aXZhdGVBREE9ZnVuY3Rpb24oKXt0aGlzLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stYWN0aXZlXCIpLmF0dHIoe1wiYXJpYS1oaWRkZW5cIjpcImZhbHNlXCJ9KS5maW5kKFwiYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0XCIpLmF0dHIoe3RhYmluZGV4OlwiMFwifSl9LGUucHJvdG90eXBlLmFkZFNsaWRlPWUucHJvdG90eXBlLnNsaWNrQWRkPWZ1bmN0aW9uKGUsdCxvKXt2YXIgcz10aGlzO2lmKFwiYm9vbGVhblwiPT10eXBlb2YgdClvPXQsdD1udWxsO2Vsc2UgaWYodDwwfHx0Pj1zLnNsaWRlQ291bnQpcmV0dXJuITE7cy51bmxvYWQoKSxcIm51bWJlclwiPT10eXBlb2YgdD8wPT09dCYmMD09PXMuJHNsaWRlcy5sZW5ndGg/aShlKS5hcHBlbmRUbyhzLiRzbGlkZVRyYWNrKTpvP2koZSkuaW5zZXJ0QmVmb3JlKHMuJHNsaWRlcy5lcSh0KSk6aShlKS5pbnNlcnRBZnRlcihzLiRzbGlkZXMuZXEodCkpOiEwPT09bz9pKGUpLnByZXBlbmRUbyhzLiRzbGlkZVRyYWNrKTppKGUpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spLHMuJHNsaWRlcz1zLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkscy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLHMuJHNsaWRlVHJhY2suYXBwZW5kKHMuJHNsaWRlcykscy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oZSx0KXtpKHQpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsZSl9KSxzLiRzbGlkZXNDYWNoZT1zLiRzbGlkZXMscy5yZWluaXQoKX0sZS5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodD1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aWYoMT09PWkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJiEwPT09aS5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0JiYhMT09PWkub3B0aW9ucy52ZXJ0aWNhbCl7dmFyIGU9aS4kc2xpZGVzLmVxKGkuY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCghMCk7aS4kbGlzdC5hbmltYXRlKHtoZWlnaHQ6ZX0saS5vcHRpb25zLnNwZWVkKX19LGUucHJvdG90eXBlLmFuaW1hdGVTbGlkZT1mdW5jdGlvbihlLHQpe3ZhciBvPXt9LHM9dGhpcztzLmFuaW1hdGVIZWlnaHQoKSwhMD09PXMub3B0aW9ucy5ydGwmJiExPT09cy5vcHRpb25zLnZlcnRpY2FsJiYoZT0tZSksITE9PT1zLnRyYW5zZm9ybXNFbmFibGVkPyExPT09cy5vcHRpb25zLnZlcnRpY2FsP3MuJHNsaWRlVHJhY2suYW5pbWF0ZSh7bGVmdDplfSxzLm9wdGlvbnMuc3BlZWQscy5vcHRpb25zLmVhc2luZyx0KTpzLiRzbGlkZVRyYWNrLmFuaW1hdGUoe3RvcDplfSxzLm9wdGlvbnMuc3BlZWQscy5vcHRpb25zLmVhc2luZyx0KTohMT09PXMuY3NzVHJhbnNpdGlvbnM/KCEwPT09cy5vcHRpb25zLnJ0bCYmKHMuY3VycmVudExlZnQ9LXMuY3VycmVudExlZnQpLGkoe2FuaW1TdGFydDpzLmN1cnJlbnRMZWZ0fSkuYW5pbWF0ZSh7YW5pbVN0YXJ0OmV9LHtkdXJhdGlvbjpzLm9wdGlvbnMuc3BlZWQsZWFzaW5nOnMub3B0aW9ucy5lYXNpbmcsc3RlcDpmdW5jdGlvbihpKXtpPU1hdGguY2VpbChpKSwhMT09PXMub3B0aW9ucy52ZXJ0aWNhbD8ob1tzLmFuaW1UeXBlXT1cInRyYW5zbGF0ZShcIitpK1wicHgsIDBweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSk6KG9bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUoMHB4LFwiK2krXCJweClcIixzLiRzbGlkZVRyYWNrLmNzcyhvKSl9LGNvbXBsZXRlOmZ1bmN0aW9uKCl7dCYmdC5jYWxsKCl9fSkpOihzLmFwcGx5VHJhbnNpdGlvbigpLGU9TWF0aC5jZWlsKGUpLCExPT09cy5vcHRpb25zLnZlcnRpY2FsP29bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZChcIitlK1wicHgsIDBweCwgMHB4KVwiOm9bcy5hbmltVHlwZV09XCJ0cmFuc2xhdGUzZCgwcHgsXCIrZStcInB4LCAwcHgpXCIscy4kc2xpZGVUcmFjay5jc3MobyksdCYmc2V0VGltZW91dChmdW5jdGlvbigpe3MuZGlzYWJsZVRyYW5zaXRpb24oKSx0LmNhbGwoKX0scy5vcHRpb25zLnNwZWVkKSl9LGUucHJvdG90eXBlLmdldE5hdlRhcmdldD1mdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1lLm9wdGlvbnMuYXNOYXZGb3I7cmV0dXJuIHQmJm51bGwhPT10JiYodD1pKHQpLm5vdChlLiRzbGlkZXIpKSx0fSxlLnByb3RvdHlwZS5hc05hdkZvcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldE5hdlRhcmdldCgpO251bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdC5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9aSh0aGlzKS5zbGljayhcImdldFNsaWNrXCIpO3QudW5zbGlja2VkfHx0LnNsaWRlSGFuZGxlcihlLCEwKX0pfSxlLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb249ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcyx0PXt9OyExPT09ZS5vcHRpb25zLmZhZGU/dFtlLnRyYW5zaXRpb25UeXBlXT1lLnRyYW5zZm9ybVR5cGUrXCIgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2U6dFtlLnRyYW5zaXRpb25UeXBlXT1cIm9wYWNpdHkgXCIrZS5vcHRpb25zLnNwZWVkK1wibXMgXCIrZS5vcHRpb25zLmNzc0Vhc2UsITE9PT1lLm9wdGlvbnMuZmFkZT9lLiRzbGlkZVRyYWNrLmNzcyh0KTplLiRzbGlkZXMuZXEoaSkuY3NzKHQpfSxlLnByb3RvdHlwZS5hdXRvUGxheT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheUNsZWFyKCksaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLmF1dG9QbGF5VGltZXI9c2V0SW50ZXJ2YWwoaS5hdXRvUGxheUl0ZXJhdG9yLGkub3B0aW9ucy5hdXRvcGxheVNwZWVkKSl9LGUucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXlUaW1lciYmY2xlYXJJbnRlcnZhbChpLmF1dG9QbGF5VGltZXIpfSxlLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPWkuY3VycmVudFNsaWRlK2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtpLnBhdXNlZHx8aS5pbnRlcnJ1cHRlZHx8aS5mb2N1c3NlZHx8KCExPT09aS5vcHRpb25zLmluZmluaXRlJiYoMT09PWkuZGlyZWN0aW9uJiZpLmN1cnJlbnRTbGlkZSsxPT09aS5zbGlkZUNvdW50LTE/aS5kaXJlY3Rpb249MDowPT09aS5kaXJlY3Rpb24mJihlPWkuY3VycmVudFNsaWRlLWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCxpLmN1cnJlbnRTbGlkZS0xPT0wJiYoaS5kaXJlY3Rpb249MSkpKSxpLnNsaWRlSGFuZGxlcihlKSl9LGUucHJvdG90eXBlLmJ1aWxkQXJyb3dzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczshMD09PWUub3B0aW9ucy5hcnJvd3MmJihlLiRwcmV2QXJyb3c9aShlLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcyhcInNsaWNrLWFycm93XCIpLGUuJG5leHRBcnJvdz1pKGUub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKFwic2xpY2stYXJyb3dcIiksZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3c/KGUuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWhpZGRlblwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW4gdGFiaW5kZXhcIiksZS4kbmV4dEFycm93LnJlbW92ZUNsYXNzKFwic2xpY2staGlkZGVuXCIpLnJlbW92ZUF0dHIoXCJhcmlhLWhpZGRlbiB0YWJpbmRleFwiKSxlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLnByZXZBcnJvdykmJmUuJHByZXZBcnJvdy5wcmVwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5uZXh0QXJyb3cpJiZlLiRuZXh0QXJyb3cuYXBwZW5kVG8oZS5vcHRpb25zLmFwcGVuZEFycm93cyksITAhPT1lLm9wdGlvbnMuaW5maW5pdGUmJmUuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpKTplLiRwcmV2QXJyb3cuYWRkKGUuJG5leHRBcnJvdykuYWRkQ2xhc3MoXCJzbGljay1oaWRkZW5cIikuYXR0cih7XCJhcmlhLWRpc2FibGVkXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCItMVwifSkpfSxlLnByb3RvdHlwZS5idWlsZERvdHM9ZnVuY3Rpb24oKXt2YXIgZSx0LG89dGhpcztpZighMD09PW8ub3B0aW9ucy5kb3RzKXtmb3Ioby4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stZG90dGVkXCIpLHQ9aShcIjx1bCAvPlwiKS5hZGRDbGFzcyhvLm9wdGlvbnMuZG90c0NsYXNzKSxlPTA7ZTw9by5nZXREb3RDb3VudCgpO2UrPTEpdC5hcHBlbmQoaShcIjxsaSAvPlwiKS5hcHBlbmQoby5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsbyxlKSkpO28uJGRvdHM9dC5hcHBlbmRUbyhvLm9wdGlvbnMuYXBwZW5kRG90cyksby4kZG90cy5maW5kKFwibGlcIikuZmlyc3QoKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKX19LGUucHJvdG90eXBlLmJ1aWxkT3V0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXM9ZS4kc2xpZGVyLmNoaWxkcmVuKGUub3B0aW9ucy5zbGlkZStcIjpub3QoLnNsaWNrLWNsb25lZClcIikuYWRkQ2xhc3MoXCJzbGljay1zbGlkZVwiKSxlLnNsaWRlQ291bnQ9ZS4kc2xpZGVzLmxlbmd0aCxlLiRzbGlkZXMuZWFjaChmdW5jdGlvbihlLHQpe2kodCkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIixlKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIsaSh0KS5hdHRyKFwic3R5bGVcIil8fFwiXCIpfSksZS4kc2xpZGVyLmFkZENsYXNzKFwic2xpY2stc2xpZGVyXCIpLGUuJHNsaWRlVHJhY2s9MD09PWUuc2xpZGVDb3VudD9pKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oZS4kc2xpZGVyKTplLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpLGUuJGxpc3Q9ZS4kc2xpZGVUcmFjay53cmFwKCc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKSxlLiRzbGlkZVRyYWNrLmNzcyhcIm9wYWNpdHlcIiwwKSwhMCE9PWUub3B0aW9ucy5jZW50ZXJNb2RlJiYhMCE9PWUub3B0aW9ucy5zd2lwZVRvU2xpZGV8fChlLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw9MSksaShcImltZ1tkYXRhLWxhenldXCIsZS4kc2xpZGVyKS5ub3QoXCJbc3JjXVwiKS5hZGRDbGFzcyhcInNsaWNrLWxvYWRpbmdcIiksZS5zZXR1cEluZmluaXRlKCksZS5idWlsZEFycm93cygpLGUuYnVpbGREb3RzKCksZS51cGRhdGVEb3RzKCksZS5zZXRTbGlkZUNsYXNzZXMoXCJudW1iZXJcIj09dHlwZW9mIGUuY3VycmVudFNsaWRlP2UuY3VycmVudFNsaWRlOjApLCEwPT09ZS5vcHRpb25zLmRyYWdnYWJsZSYmZS4kbGlzdC5hZGRDbGFzcyhcImRyYWdnYWJsZVwiKX0sZS5wcm90b3R5cGUuYnVpbGRSb3dzPWZ1bmN0aW9uKCl7dmFyIGksZSx0LG8scyxuLHIsbD10aGlzO2lmKG89ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG49bC4kc2xpZGVyLmNoaWxkcmVuKCksbC5vcHRpb25zLnJvd3M+MSl7Zm9yKHI9bC5vcHRpb25zLnNsaWRlc1BlclJvdypsLm9wdGlvbnMucm93cyxzPU1hdGguY2VpbChuLmxlbmd0aC9yKSxpPTA7aTxzO2krKyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoZT0wO2U8bC5vcHRpb25zLnJvd3M7ZSsrKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Zvcih0PTA7dDxsLm9wdGlvbnMuc2xpZGVzUGVyUm93O3QrKyl7dmFyIGM9aSpyKyhlKmwub3B0aW9ucy5zbGlkZXNQZXJSb3crdCk7bi5nZXQoYykmJmEuYXBwZW5kQ2hpbGQobi5nZXQoYykpfWQuYXBwZW5kQ2hpbGQoYSl9by5hcHBlbmRDaGlsZChkKX1sLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobyksbC4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNzcyh7d2lkdGg6MTAwL2wub3B0aW9ucy5zbGlkZXNQZXJSb3crXCIlXCIsZGlzcGxheTpcImlubGluZS1ibG9ja1wifSl9fSxlLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmU9ZnVuY3Rpb24oZSx0KXt2YXIgbyxzLG4scj10aGlzLGw9ITEsZD1yLiRzbGlkZXIud2lkdGgoKSxhPXdpbmRvdy5pbm5lcldpZHRofHxpKHdpbmRvdykud2lkdGgoKTtpZihcIndpbmRvd1wiPT09ci5yZXNwb25kVG8/bj1hOlwic2xpZGVyXCI9PT1yLnJlc3BvbmRUbz9uPWQ6XCJtaW5cIj09PXIucmVzcG9uZFRvJiYobj1NYXRoLm1pbihhLGQpKSxyLm9wdGlvbnMucmVzcG9uc2l2ZSYmci5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoJiZudWxsIT09ci5vcHRpb25zLnJlc3BvbnNpdmUpe3M9bnVsbDtmb3IobyBpbiByLmJyZWFrcG9pbnRzKXIuYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkobykmJighMT09PXIub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdD9uPHIuYnJlYWtwb2ludHNbb10mJihzPXIuYnJlYWtwb2ludHNbb10pOm4+ci5icmVha3BvaW50c1tvXSYmKHM9ci5icmVha3BvaW50c1tvXSkpO251bGwhPT1zP251bGwhPT1yLmFjdGl2ZUJyZWFrcG9pbnQ/KHMhPT1yLmFjdGl2ZUJyZWFrcG9pbnR8fHQpJiYoci5hY3RpdmVCcmVha3BvaW50PXMsXCJ1bnNsaWNrXCI9PT1yLmJyZWFrcG9pbnRTZXR0aW5nc1tzXT9yLnVuc2xpY2socyk6KHIub3B0aW9ucz1pLmV4dGVuZCh7fSxyLm9yaWdpbmFsU2V0dGluZ3Msci5icmVha3BvaW50U2V0dGluZ3Nbc10pLCEwPT09ZSYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSksbD1zKTooci5hY3RpdmVCcmVha3BvaW50PXMsXCJ1bnNsaWNrXCI9PT1yLmJyZWFrcG9pbnRTZXR0aW5nc1tzXT9yLnVuc2xpY2socyk6KHIub3B0aW9ucz1pLmV4dGVuZCh7fSxyLm9yaWdpbmFsU2V0dGluZ3Msci5icmVha3BvaW50U2V0dGluZ3Nbc10pLCEwPT09ZSYmKHIuY3VycmVudFNsaWRlPXIub3B0aW9ucy5pbml0aWFsU2xpZGUpLHIucmVmcmVzaChlKSksbD1zKTpudWxsIT09ci5hY3RpdmVCcmVha3BvaW50JiYoci5hY3RpdmVCcmVha3BvaW50PW51bGwsci5vcHRpb25zPXIub3JpZ2luYWxTZXR0aW5ncywhMD09PWUmJihyLmN1cnJlbnRTbGlkZT1yLm9wdGlvbnMuaW5pdGlhbFNsaWRlKSxyLnJlZnJlc2goZSksbD1zKSxlfHwhMT09PWx8fHIuJHNsaWRlci50cmlnZ2VyKFwiYnJlYWtwb2ludFwiLFtyLGxdKX19LGUucHJvdG90eXBlLmNoYW5nZVNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIG8scyxuLHI9dGhpcyxsPWkoZS5jdXJyZW50VGFyZ2V0KTtzd2l0Y2gobC5pcyhcImFcIikmJmUucHJldmVudERlZmF1bHQoKSxsLmlzKFwibGlcIil8fChsPWwuY2xvc2VzdChcImxpXCIpKSxuPXIuc2xpZGVDb3VudCVyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwhPTAsbz1uPzA6KHIuc2xpZGVDb3VudC1yLmN1cnJlbnRTbGlkZSklci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGUuZGF0YS5tZXNzYWdlKXtjYXNlXCJwcmV2aW91c1wiOnM9MD09PW8/ci5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOnIub3B0aW9ucy5zbGlkZXNUb1Nob3ctbyxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUtcywhMSx0KTticmVhaztjYXNlXCJuZXh0XCI6cz0wPT09bz9yLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6byxyLnNsaWRlQ291bnQ+ci5vcHRpb25zLnNsaWRlc1RvU2hvdyYmci5zbGlkZUhhbmRsZXIoci5jdXJyZW50U2xpZGUrcywhMSx0KTticmVhaztjYXNlXCJpbmRleFwiOnZhciBkPTA9PT1lLmRhdGEuaW5kZXg/MDplLmRhdGEuaW5kZXh8fGwuaW5kZXgoKSpyLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7ci5zbGlkZUhhbmRsZXIoci5jaGVja05hdmlnYWJsZShkKSwhMSx0KSxsLmNoaWxkcmVuKCkudHJpZ2dlcihcImZvY3VzXCIpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX0sZS5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGU9ZnVuY3Rpb24oaSl7dmFyIGUsdDtpZihlPXRoaXMuZ2V0TmF2aWdhYmxlSW5kZXhlcygpLHQ9MCxpPmVbZS5sZW5ndGgtMV0paT1lW2UubGVuZ3RoLTFdO2Vsc2UgZm9yKHZhciBvIGluIGUpe2lmKGk8ZVtvXSl7aT10O2JyZWFrfXQ9ZVtvXX1yZXR1cm4gaX0sZS5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5vcHRpb25zLmRvdHMmJm51bGwhPT1lLiRkb3RzJiYoaShcImxpXCIsZS4kZG90cykub2ZmKFwiY2xpY2suc2xpY2tcIixlLmNoYW5nZVNsaWRlKS5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSkub2ZmKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpLCEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuJGRvdHMub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpLGUuJHNsaWRlci5vZmYoXCJmb2N1cy5zbGljayBibHVyLnNsaWNrXCIpLCEwPT09ZS5vcHRpb25zLmFycm93cyYmZS5zbGlkZUNvdW50PmUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihlLiRwcmV2QXJyb3cmJmUuJHByZXZBcnJvdy5vZmYoXCJjbGljay5zbGlja1wiLGUuY2hhbmdlU2xpZGUpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jaGFuZ2VTbGlkZSksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKGUuJHByZXZBcnJvdyYmZS4kcHJldkFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLGUuJG5leHRBcnJvdyYmZS4kbmV4dEFycm93Lm9mZihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpKSksZS4kbGlzdC5vZmYoXCJ0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcInRvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2tcIixlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vZmYoXCJ0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrXCIsZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub2ZmKFwidG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGlja1wiLGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9mZihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9mZihlLnZpc2liaWxpdHlDaGFuZ2UsZS52aXNpYmlsaXR5KSxlLmNsZWFuVXBTbGlkZUV2ZW50cygpLCEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHkmJmUuJGxpc3Qub2ZmKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlciksITA9PT1lLm9wdGlvbnMuZm9jdXNPblNlbGVjdCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub2ZmKFwib3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stXCIrZS5pbnN0YW5jZVVpZCxlLm9yaWVudGF0aW9uQ2hhbmdlKSxpKHdpbmRvdykub2ZmKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5yZXNpemUpLGkoXCJbZHJhZ2dhYmxlIT10cnVlXVwiLGUuJHNsaWRlVHJhY2spLm9mZihcImRyYWdzdGFydFwiLGUucHJldmVudERlZmF1bHQpLGkod2luZG93KS5vZmYoXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbil9LGUucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cz1mdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS4kbGlzdC5vZmYoXCJtb3VzZWVudGVyLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCEwKSksZS4kbGlzdC5vZmYoXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSl9LGUucHJvdG90eXBlLmNsZWFuVXBSb3dzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzO2Uub3B0aW9ucy5yb3dzPjEmJigoaT1lLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksZS4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKGkpKX0sZS5wcm90b3R5cGUuY2xpY2tIYW5kbGVyPWZ1bmN0aW9uKGkpeyExPT09dGhpcy5zaG91bGRDbGljayYmKGkuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksaS5zdG9wUHJvcGFnYXRpb24oKSxpLnByZXZlbnREZWZhdWx0KCkpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5hdXRvUGxheUNsZWFyKCksdC50b3VjaE9iamVjdD17fSx0LmNsZWFuVXBFdmVudHMoKSxpKFwiLnNsaWNrLWNsb25lZFwiLHQuJHNsaWRlcikuZGV0YWNoKCksdC4kZG90cyYmdC4kZG90cy5yZW1vdmUoKSx0LiRwcmV2QXJyb3cmJnQuJHByZXZBcnJvdy5sZW5ndGgmJih0LiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMucHJldkFycm93KSYmdC4kcHJldkFycm93LnJlbW92ZSgpKSx0LiRuZXh0QXJyb3cmJnQuJG5leHRBcnJvdy5sZW5ndGgmJih0LiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW5cIikucmVtb3ZlQXR0cihcImFyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXhcIikuY3NzKFwiZGlzcGxheVwiLFwiXCIpLHQuaHRtbEV4cHIudGVzdCh0Lm9wdGlvbnMubmV4dEFycm93KSYmdC4kbmV4dEFycm93LnJlbW92ZSgpKSx0LiRzbGlkZXMmJih0LiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudFwiKS5yZW1vdmVBdHRyKFwiYXJpYS1oaWRkZW5cIikucmVtb3ZlQXR0cihcImRhdGEtc2xpY2staW5kZXhcIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcInN0eWxlXCIsaSh0aGlzKS5kYXRhKFwib3JpZ2luYWxTdHlsaW5nXCIpKX0pLHQuJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKSx0LiRzbGlkZVRyYWNrLmRldGFjaCgpLHQuJGxpc3QuZGV0YWNoKCksdC4kc2xpZGVyLmFwcGVuZCh0LiRzbGlkZXMpKSx0LmNsZWFuVXBSb3dzKCksdC4kc2xpZGVyLnJlbW92ZUNsYXNzKFwic2xpY2stc2xpZGVyXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpLHQuJHNsaWRlci5yZW1vdmVDbGFzcyhcInNsaWNrLWRvdHRlZFwiKSx0LnVuc2xpY2tlZD0hMCxlfHx0LiRzbGlkZXIudHJpZ2dlcihcImRlc3Ryb3lcIixbdF0pfSxlLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbj1mdW5jdGlvbihpKXt2YXIgZT10aGlzLHQ9e307dFtlLnRyYW5zaXRpb25UeXBlXT1cIlwiLCExPT09ZS5vcHRpb25zLmZhZGU/ZS4kc2xpZGVUcmFjay5jc3ModCk6ZS4kc2xpZGVzLmVxKGkpLmNzcyh0KX0sZS5wcm90b3R5cGUuZmFkZVNsaWRlPWZ1bmN0aW9uKGksZSl7dmFyIHQ9dGhpczshMT09PXQuY3NzVHJhbnNpdGlvbnM/KHQuJHNsaWRlcy5lcShpKS5jc3Moe3pJbmRleDp0Lm9wdGlvbnMuekluZGV4fSksdC4kc2xpZGVzLmVxKGkpLmFuaW1hdGUoe29wYWNpdHk6MX0sdC5vcHRpb25zLnNwZWVkLHQub3B0aW9ucy5lYXNpbmcsZSkpOih0LmFwcGx5VHJhbnNpdGlvbihpKSx0LiRzbGlkZXMuZXEoaSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OnQub3B0aW9ucy56SW5kZXh9KSxlJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5kaXNhYmxlVHJhbnNpdGlvbihpKSxlLmNhbGwoKX0sdC5vcHRpb25zLnNwZWVkKSl9LGUucHJvdG90eXBlLmZhZGVTbGlkZU91dD1mdW5jdGlvbihpKXt2YXIgZT10aGlzOyExPT09ZS5jc3NUcmFuc2l0aW9ucz9lLiRzbGlkZXMuZXEoaSkuYW5pbWF0ZSh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9LGUub3B0aW9ucy5zcGVlZCxlLm9wdGlvbnMuZWFzaW5nKTooZS5hcHBseVRyYW5zaXRpb24oaSksZS4kc2xpZGVzLmVxKGkpLmNzcyh7b3BhY2l0eTowLHpJbmRleDplLm9wdGlvbnMuekluZGV4LTJ9KSl9LGUucHJvdG90eXBlLmZpbHRlclNsaWRlcz1lLnByb3RvdHlwZS5zbGlja0ZpbHRlcj1mdW5jdGlvbihpKXt2YXIgZT10aGlzO251bGwhPT1pJiYoZS4kc2xpZGVzQ2FjaGU9ZS4kc2xpZGVzLGUudW5sb2FkKCksZS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGUuJHNsaWRlc0NhY2hlLmZpbHRlcihpKS5hcHBlbmRUbyhlLiRzbGlkZVRyYWNrKSxlLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuZm9jdXNIYW5kbGVyPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXIub2ZmKFwiZm9jdXMuc2xpY2sgYmx1ci5zbGlja1wiKS5vbihcImZvY3VzLnNsaWNrIGJsdXIuc2xpY2tcIixcIipcIixmdW5jdGlvbih0KXt0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO3ZhciBvPWkodGhpcyk7c2V0VGltZW91dChmdW5jdGlvbigpe2Uub3B0aW9ucy5wYXVzZU9uRm9jdXMmJihlLmZvY3Vzc2VkPW8uaXMoXCI6Zm9jdXNcIiksZS5hdXRvUGxheSgpKX0sMCl9KX0sZS5wcm90b3R5cGUuZ2V0Q3VycmVudD1lLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN1cnJlbnRTbGlkZX0sZS5wcm90b3R5cGUuZ2V0RG90Q291bnQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9MCx0PTAsbz0wO2lmKCEwPT09aS5vcHRpb25zLmluZmluaXRlKWlmKGkuc2xpZGVDb3VudDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdykrK287ZWxzZSBmb3IoO2U8aS5zbGlkZUNvdW50OykrK28sZT10K2kub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCx0Kz1pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw8PWkub3B0aW9ucy5zbGlkZXNUb1Nob3c/aS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOmkub3B0aW9ucy5zbGlkZXNUb1Nob3c7ZWxzZSBpZighMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlKW89aS5zbGlkZUNvdW50O2Vsc2UgaWYoaS5vcHRpb25zLmFzTmF2Rm9yKWZvcig7ZTxpLnNsaWRlQ291bnQ7KSsrbyxlPXQraS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLHQrPWkub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDw9aS5vcHRpb25zLnNsaWRlc1RvU2hvdz9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw6aS5vcHRpb25zLnNsaWRlc1RvU2hvdztlbHNlIG89MStNYXRoLmNlaWwoKGkuc2xpZGVDb3VudC1pLm9wdGlvbnMuc2xpZGVzVG9TaG93KS9pLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO3JldHVybiBvLTF9LGUucHJvdG90eXBlLmdldExlZnQ9ZnVuY3Rpb24oaSl7dmFyIGUsdCxvLHMsbj10aGlzLHI9MDtyZXR1cm4gbi5zbGlkZU9mZnNldD0wLHQ9bi4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQoITApLCEwPT09bi5vcHRpb25zLmluZmluaXRlPyhuLnNsaWRlQ291bnQ+bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKG4uc2xpZGVPZmZzZXQ9bi5zbGlkZVdpZHRoKm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cqLTEscz0tMSwhMD09PW4ub3B0aW9ucy52ZXJ0aWNhbCYmITA9PT1uLm9wdGlvbnMuY2VudGVyTW9kZSYmKDI9PT1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P3M9LTEuNToxPT09bi5vcHRpb25zLnNsaWRlc1RvU2hvdyYmKHM9LTIpKSxyPXQqbi5vcHRpb25zLnNsaWRlc1RvU2hvdypzKSxuLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIT0wJiZpK24ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbD5uLnNsaWRlQ291bnQmJm4uc2xpZGVDb3VudD5uLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaT5uLnNsaWRlQ291bnQ/KG4uc2xpZGVPZmZzZXQ9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqbi5zbGlkZVdpZHRoKi0xLHI9KG4ub3B0aW9ucy5zbGlkZXNUb1Nob3ctKGktbi5zbGlkZUNvdW50KSkqdCotMSk6KG4uc2xpZGVPZmZzZXQ9bi5zbGlkZUNvdW50JW4ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCpuLnNsaWRlV2lkdGgqLTEscj1uLnNsaWRlQ291bnQlbi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKnQqLTEpKSk6aStuLm9wdGlvbnMuc2xpZGVzVG9TaG93Pm4uc2xpZGVDb3VudCYmKG4uc2xpZGVPZmZzZXQ9KGkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdy1uLnNsaWRlQ291bnQpKm4uc2xpZGVXaWR0aCxyPShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3ctbi5zbGlkZUNvdW50KSp0KSxuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihuLnNsaWRlT2Zmc2V0PTAscj0wKSwhMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiZuLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/bi5zbGlkZU9mZnNldD1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93KS8yLW4uc2xpZGVXaWR0aCpuLnNsaWRlQ291bnQvMjohMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYhMD09PW4ub3B0aW9ucy5pbmZpbml0ZT9uLnNsaWRlT2Zmc2V0Kz1uLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihuLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpLW4uc2xpZGVXaWR0aDohMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlJiYobi5zbGlkZU9mZnNldD0wLG4uc2xpZGVPZmZzZXQrPW4uc2xpZGVXaWR0aCpNYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMikpLGU9ITE9PT1uLm9wdGlvbnMudmVydGljYWw/aSpuLnNsaWRlV2lkdGgqLTErbi5zbGlkZU9mZnNldDppKnQqLTErciwhMD09PW4ub3B0aW9ucy52YXJpYWJsZVdpZHRoJiYobz1uLnNsaWRlQ291bnQ8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3d8fCExPT09bi5vcHRpb25zLmluZmluaXRlP24uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaSk6bi4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5lcShpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGU9ITA9PT1uLm9wdGlvbnMucnRsP29bMF0/LTEqKG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKTowOm9bMF0/LTEqb1swXS5vZmZzZXRMZWZ0OjAsITA9PT1uLm9wdGlvbnMuY2VudGVyTW9kZSYmKG89bi5zbGlkZUNvdW50PD1uLm9wdGlvbnMuc2xpZGVzVG9TaG93fHwhMT09PW4ub3B0aW9ucy5pbmZpbml0ZT9uLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmVxKGkpOm4uJHNsaWRlVHJhY2suY2hpbGRyZW4oXCIuc2xpY2stc2xpZGVcIikuZXEoaStuLm9wdGlvbnMuc2xpZGVzVG9TaG93KzEpLGU9ITA9PT1uLm9wdGlvbnMucnRsP29bMF0/LTEqKG4uJHNsaWRlVHJhY2sud2lkdGgoKS1vWzBdLm9mZnNldExlZnQtby53aWR0aCgpKTowOm9bMF0/LTEqb1swXS5vZmZzZXRMZWZ0OjAsZSs9KG4uJGxpc3Qud2lkdGgoKS1vLm91dGVyV2lkdGgoKSkvMikpLGV9LGUucHJvdG90eXBlLmdldE9wdGlvbj1lLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbj1mdW5jdGlvbihpKXtyZXR1cm4gdGhpcy5vcHRpb25zW2ldfSxlLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzPWZ1bmN0aW9uKCl7dmFyIGksZT10aGlzLHQ9MCxvPTAscz1bXTtmb3IoITE9PT1lLm9wdGlvbnMuaW5maW5pdGU/aT1lLnNsaWRlQ291bnQ6KHQ9LTEqZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLG89LTEqZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsLGk9MiplLnNsaWRlQ291bnQpO3Q8aTspcy5wdXNoKHQpLHQ9bytlLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwsbys9ZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsPD1lLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Uub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDplLm9wdGlvbnMuc2xpZGVzVG9TaG93O3JldHVybiBzfSxlLnByb3RvdHlwZS5nZXRTbGljaz1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50PWZ1bmN0aW9uKCl7dmFyIGUsdCxvPXRoaXM7cmV0dXJuIHQ9ITA9PT1vLm9wdGlvbnMuY2VudGVyTW9kZT9vLnNsaWRlV2lkdGgqTWF0aC5mbG9vcihvLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIpOjAsITA9PT1vLm9wdGlvbnMuc3dpcGVUb1NsaWRlPyhvLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuZWFjaChmdW5jdGlvbihzLG4pe2lmKG4ub2Zmc2V0TGVmdC10K2kobikub3V0ZXJXaWR0aCgpLzI+LTEqby5zd2lwZUxlZnQpcmV0dXJuIGU9biwhMX0pLE1hdGguYWJzKGkoZSkuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIiktby5jdXJyZW50U2xpZGUpfHwxKTpvLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGx9LGUucHJvdG90eXBlLmdvVG89ZS5wcm90b3R5cGUuc2xpY2tHb1RvPWZ1bmN0aW9uKGksZSl7dGhpcy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcImluZGV4XCIsaW5kZXg6cGFyc2VJbnQoaSl9fSxlKX0sZS5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2kodC4kc2xpZGVyKS5oYXNDbGFzcyhcInNsaWNrLWluaXRpYWxpemVkXCIpfHwoaSh0LiRzbGlkZXIpLmFkZENsYXNzKFwic2xpY2staW5pdGlhbGl6ZWRcIiksdC5idWlsZFJvd3MoKSx0LmJ1aWxkT3V0KCksdC5zZXRQcm9wcygpLHQuc3RhcnRMb2FkKCksdC5sb2FkU2xpZGVyKCksdC5pbml0aWFsaXplRXZlbnRzKCksdC51cGRhdGVBcnJvd3MoKSx0LnVwZGF0ZURvdHMoKSx0LmNoZWNrUmVzcG9uc2l2ZSghMCksdC5mb2N1c0hhbmRsZXIoKSksZSYmdC4kc2xpZGVyLnRyaWdnZXIoXCJpbml0XCIsW3RdKSwhMD09PXQub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZ0LmluaXRBREEoKSx0Lm9wdGlvbnMuYXV0b3BsYXkmJih0LnBhdXNlZD0hMSx0LmF1dG9QbGF5KCkpfSxlLnByb3RvdHlwZS5pbml0QURBPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PU1hdGguY2VpbChlLnNsaWRlQ291bnQvZS5vcHRpb25zLnNsaWRlc1RvU2hvdyksbz1lLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24oaSl7cmV0dXJuIGk+PTAmJmk8ZS5zbGlkZUNvdW50fSk7ZS4kc2xpZGVzLmFkZChlLiRzbGlkZVRyYWNrLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpKS5hdHRyKHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsdGFiaW5kZXg6XCItMVwifSkuZmluZChcImEsIGlucHV0LCBidXR0b24sIHNlbGVjdFwiKS5hdHRyKHt0YWJpbmRleDpcIi0xXCJ9KSxudWxsIT09ZS4kZG90cyYmKGUuJHNsaWRlcy5ub3QoZS4kc2xpZGVUcmFjay5maW5kKFwiLnNsaWNrLWNsb25lZFwiKSkuZWFjaChmdW5jdGlvbih0KXt2YXIgcz1vLmluZGV4T2YodCk7aSh0aGlzKS5hdHRyKHtyb2xlOlwidGFicGFuZWxcIixpZDpcInNsaWNrLXNsaWRlXCIrZS5pbnN0YW5jZVVpZCt0LHRhYmluZGV4Oi0xfSksLTEhPT1zJiZpKHRoaXMpLmF0dHIoe1wiYXJpYS1kZXNjcmliZWRieVwiOlwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrc30pfSksZS4kZG90cy5hdHRyKFwicm9sZVwiLFwidGFibGlzdFwiKS5maW5kKFwibGlcIikuZWFjaChmdW5jdGlvbihzKXt2YXIgbj1vW3NdO2kodGhpcykuYXR0cih7cm9sZTpcInByZXNlbnRhdGlvblwifSksaSh0aGlzKS5maW5kKFwiYnV0dG9uXCIpLmZpcnN0KCkuYXR0cih7cm9sZTpcInRhYlwiLGlkOlwic2xpY2stc2xpZGUtY29udHJvbFwiK2UuaW5zdGFuY2VVaWQrcyxcImFyaWEtY29udHJvbHNcIjpcInNsaWNrLXNsaWRlXCIrZS5pbnN0YW5jZVVpZCtuLFwiYXJpYS1sYWJlbFwiOnMrMStcIiBvZiBcIit0LFwiYXJpYS1zZWxlY3RlZFwiOm51bGwsdGFiaW5kZXg6XCItMVwifSl9KS5lcShlLmN1cnJlbnRTbGlkZSkuZmluZChcImJ1dHRvblwiKS5hdHRyKHtcImFyaWEtc2VsZWN0ZWRcIjpcInRydWVcIix0YWJpbmRleDpcIjBcIn0pLmVuZCgpKTtmb3IodmFyIHM9ZS5jdXJyZW50U2xpZGUsbj1zK2Uub3B0aW9ucy5zbGlkZXNUb1Nob3c7czxuO3MrKyllLiRzbGlkZXMuZXEocykuYXR0cihcInRhYmluZGV4XCIsMCk7ZS5hY3RpdmF0ZUFEQSgpfSxlLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cub2ZmKFwiY2xpY2suc2xpY2tcIikub24oXCJjbGljay5zbGlja1wiLHttZXNzYWdlOlwicHJldmlvdXNcIn0saS5jaGFuZ2VTbGlkZSksaS4kbmV4dEFycm93Lm9mZihcImNsaWNrLnNsaWNrXCIpLm9uKFwiY2xpY2suc2xpY2tcIix7bWVzc2FnZTpcIm5leHRcIn0saS5jaGFuZ2VTbGlkZSksITA9PT1pLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKGkuJHByZXZBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpLGkuJG5leHRBcnJvdy5vbihcImtleWRvd24uc2xpY2tcIixpLmtleUhhbmRsZXIpKSl9LGUucHJvdG90eXBlLmluaXREb3RFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzOyEwPT09ZS5vcHRpb25zLmRvdHMmJihpKFwibGlcIixlLiRkb3RzKS5vbihcImNsaWNrLnNsaWNrXCIse21lc3NhZ2U6XCJpbmRleFwifSxlLmNoYW5nZVNsaWRlKSwhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZlLiRkb3RzLm9uKFwia2V5ZG93bi5zbGlja1wiLGUua2V5SGFuZGxlcikpLCEwPT09ZS5vcHRpb25zLmRvdHMmJiEwPT09ZS5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXImJmkoXCJsaVwiLGUuJGRvdHMpLm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLm9uKFwibW91c2VsZWF2ZS5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMSkpfSxlLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2Uub3B0aW9ucy5wYXVzZU9uSG92ZXImJihlLiRsaXN0Lm9uKFwibW91c2VlbnRlci5zbGlja1wiLGkucHJveHkoZS5pbnRlcnJ1cHQsZSwhMCkpLGUuJGxpc3Qub24oXCJtb3VzZWxlYXZlLnNsaWNrXCIsaS5wcm94eShlLmludGVycnVwdCxlLCExKSkpfSxlLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLmluaXRBcnJvd0V2ZW50cygpLGUuaW5pdERvdEV2ZW50cygpLGUuaW5pdFNsaWRlRXZlbnRzKCksZS4kbGlzdC5vbihcInRvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrXCIse2FjdGlvbjpcInN0YXJ0XCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGlja1wiLHthY3Rpb246XCJtb3ZlXCJ9LGUuc3dpcGVIYW5kbGVyKSxlLiRsaXN0Lm9uKFwidG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGlja1wiLHthY3Rpb246XCJlbmRcIn0sZS5zd2lwZUhhbmRsZXIpLGUuJGxpc3Qub24oXCJ0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrXCIse2FjdGlvbjpcImVuZFwifSxlLnN3aXBlSGFuZGxlciksZS4kbGlzdC5vbihcImNsaWNrLnNsaWNrXCIsZS5jbGlja0hhbmRsZXIpLGkoZG9jdW1lbnQpLm9uKGUudmlzaWJpbGl0eUNoYW5nZSxpLnByb3h5KGUudmlzaWJpbGl0eSxlKSksITA9PT1lLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmZS4kbGlzdC5vbihcImtleWRvd24uc2xpY2tcIixlLmtleUhhbmRsZXIpLCEwPT09ZS5vcHRpb25zLmZvY3VzT25TZWxlY3QmJmkoZS4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbihcImNsaWNrLnNsaWNrXCIsZS5zZWxlY3RIYW5kbGVyKSxpKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay1cIitlLmluc3RhbmNlVWlkLGkucHJveHkoZS5vcmllbnRhdGlvbkNoYW5nZSxlKSksaSh3aW5kb3cpLm9uKFwicmVzaXplLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsaS5wcm94eShlLnJlc2l6ZSxlKSksaShcIltkcmFnZ2FibGUhPXRydWVdXCIsZS4kc2xpZGVUcmFjaykub24oXCJkcmFnc3RhcnRcIixlLnByZXZlbnREZWZhdWx0KSxpKHdpbmRvdykub24oXCJsb2FkLnNsaWNrLnNsaWNrLVwiK2UuaW5zdGFuY2VVaWQsZS5zZXRQb3NpdGlvbiksaShlLnNldFBvc2l0aW9uKX0sZS5wcm90b3R5cGUuaW5pdFVJPWZ1bmN0aW9uKCl7dmFyIGk9dGhpczshMD09PWkub3B0aW9ucy5hcnJvd3MmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYoaS4kcHJldkFycm93LnNob3coKSxpLiRuZXh0QXJyb3cuc2hvdygpKSwhMD09PWkub3B0aW9ucy5kb3RzJiZpLnNsaWRlQ291bnQ+aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmaS4kZG90cy5zaG93KCl9LGUucHJvdG90eXBlLmtleUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpLnRhcmdldC50YWdOYW1lLm1hdGNoKFwiVEVYVEFSRUF8SU5QVVR8U0VMRUNUXCIpfHwoMzc9PT1pLmtleUNvZGUmJiEwPT09ZS5vcHRpb25zLmFjY2Vzc2liaWxpdHk/ZS5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTohMD09PWUub3B0aW9ucy5ydGw/XCJuZXh0XCI6XCJwcmV2aW91c1wifX0pOjM5PT09aS5rZXlDb2RlJiYhMD09PWUub3B0aW9ucy5hY2Nlc3NpYmlsaXR5JiZlLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOiEwPT09ZS5vcHRpb25zLnJ0bD9cInByZXZpb3VzXCI6XCJuZXh0XCJ9fSkpfSxlLnByb3RvdHlwZS5sYXp5TG9hZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7aShcImltZ1tkYXRhLWxhenldXCIsZSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPWkodGhpcyksdD1pKHRoaXMpLmF0dHIoXCJkYXRhLWxhenlcIiksbz1pKHRoaXMpLmF0dHIoXCJkYXRhLXNyY3NldFwiKSxzPWkodGhpcykuYXR0cihcImRhdGEtc2l6ZXNcIil8fG4uJHNsaWRlci5hdHRyKFwiZGF0YS1zaXplc1wiKSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ci5vbmxvYWQ9ZnVuY3Rpb24oKXtlLmFuaW1hdGUoe29wYWNpdHk6MH0sMTAwLGZ1bmN0aW9uKCl7byYmKGUuYXR0cihcInNyY3NldFwiLG8pLHMmJmUuYXR0cihcInNpemVzXCIscykpLGUuYXR0cihcInNyY1wiLHQpLmFuaW1hdGUoe29wYWNpdHk6MX0sMjAwLGZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXNcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSksbi4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW24sZSx0XSl9KX0sci5vbmVycm9yPWZ1bmN0aW9uKCl7ZS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5XCIpLnJlbW92ZUNsYXNzKFwic2xpY2stbG9hZGluZ1wiKS5hZGRDbGFzcyhcInNsaWNrLWxhenlsb2FkLWVycm9yXCIpLG4uJHNsaWRlci50cmlnZ2VyKFwibGF6eUxvYWRFcnJvclwiLFtuLGUsdF0pfSxyLnNyYz10fSl9dmFyIHQsbyxzLG49dGhpcztpZighMD09PW4ub3B0aW9ucy5jZW50ZXJNb2RlPyEwPT09bi5vcHRpb25zLmluZmluaXRlP3M9KG89bi5jdXJyZW50U2xpZGUrKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSkrbi5vcHRpb25zLnNsaWRlc1RvU2hvdysyOihvPU1hdGgubWF4KDAsbi5jdXJyZW50U2xpZGUtKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMisxKSkscz1uLm9wdGlvbnMuc2xpZGVzVG9TaG93LzIrMSsyK24uY3VycmVudFNsaWRlKToobz1uLm9wdGlvbnMuaW5maW5pdGU/bi5vcHRpb25zLnNsaWRlc1RvU2hvdytuLmN1cnJlbnRTbGlkZTpuLmN1cnJlbnRTbGlkZSxzPU1hdGguY2VpbChvK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLCEwPT09bi5vcHRpb25zLmZhZGUmJihvPjAmJm8tLSxzPD1uLnNsaWRlQ291bnQmJnMrKykpLHQ9bi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikuc2xpY2UobyxzKSxcImFudGljaXBhdGVkXCI9PT1uLm9wdGlvbnMubGF6eUxvYWQpZm9yKHZhciByPW8tMSxsPXMsZD1uLiRzbGlkZXIuZmluZChcIi5zbGljay1zbGlkZVwiKSxhPTA7YTxuLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7YSsrKXI8MCYmKHI9bi5zbGlkZUNvdW50LTEpLHQ9KHQ9dC5hZGQoZC5lcShyKSkpLmFkZChkLmVxKGwpKSxyLS0sbCsrO2UodCksbi5zbGlkZUNvdW50PD1uLm9wdGlvbnMuc2xpZGVzVG9TaG93P2Uobi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stc2xpZGVcIikpOm4uY3VycmVudFNsaWRlPj1uLnNsaWRlQ291bnQtbi5vcHRpb25zLnNsaWRlc1RvU2hvdz9lKG4uJHNsaWRlci5maW5kKFwiLnNsaWNrLWNsb25lZFwiKS5zbGljZSgwLG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKTowPT09bi5jdXJyZW50U2xpZGUmJmUobi4kc2xpZGVyLmZpbmQoXCIuc2xpY2stY2xvbmVkXCIpLnNsaWNlKC0xKm4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKX0sZS5wcm90b3R5cGUubG9hZFNsaWRlcj1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5zZXRQb3NpdGlvbigpLGkuJHNsaWRlVHJhY2suY3NzKHtvcGFjaXR5OjF9KSxpLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLGkuaW5pdFVJKCksXCJwcm9ncmVzc2l2ZVwiPT09aS5vcHRpb25zLmxhenlMb2FkJiZpLnByb2dyZXNzaXZlTGF6eUxvYWQoKX0sZS5wcm90b3R5cGUubmV4dD1lLnByb3RvdHlwZS5zbGlja05leHQ9ZnVuY3Rpb24oKXt0aGlzLmNoYW5nZVNsaWRlKHtkYXRhOnttZXNzYWdlOlwibmV4dFwifX0pfSxlLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5jaGVja1Jlc3BvbnNpdmUoKSxpLnNldFBvc2l0aW9uKCl9LGUucHJvdG90eXBlLnBhdXNlPWUucHJvdG90eXBlLnNsaWNrUGF1c2U9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuYXV0b1BsYXlDbGVhcigpLGkucGF1c2VkPSEwfSxlLnByb3RvdHlwZS5wbGF5PWUucHJvdG90eXBlLnNsaWNrUGxheT1mdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5hdXRvUGxheSgpLGkub3B0aW9ucy5hdXRvcGxheT0hMCxpLnBhdXNlZD0hMSxpLmZvY3Vzc2VkPSExLGkuaW50ZXJydXB0ZWQ9ITF9LGUucHJvdG90eXBlLnBvc3RTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QudW5zbGlja2VkfHwodC4kc2xpZGVyLnRyaWdnZXIoXCJhZnRlckNoYW5nZVwiLFt0LGVdKSx0LmFuaW1hdGluZz0hMSx0LnNsaWRlQ291bnQ+dC5vcHRpb25zLnNsaWRlc1RvU2hvdyYmdC5zZXRQb3NpdGlvbigpLHQuc3dpcGVMZWZ0PW51bGwsdC5vcHRpb25zLmF1dG9wbGF5JiZ0LmF1dG9QbGF5KCksITA9PT10Lm9wdGlvbnMuYWNjZXNzaWJpbGl0eSYmKHQuaW5pdEFEQSgpLHQub3B0aW9ucy5mb2N1c09uQ2hhbmdlJiZpKHQuJHNsaWRlcy5nZXQodC5jdXJyZW50U2xpZGUpKS5hdHRyKFwidGFiaW5kZXhcIiwwKS5mb2N1cygpKSl9LGUucHJvdG90eXBlLnByZXY9ZS5wcm90b3R5cGUuc2xpY2tQcmV2PWZ1bmN0aW9uKCl7dGhpcy5jaGFuZ2VTbGlkZSh7ZGF0YTp7bWVzc2FnZTpcInByZXZpb3VzXCJ9fSl9LGUucHJvdG90eXBlLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKX0sZS5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZD1mdW5jdGlvbihlKXtlPWV8fDE7dmFyIHQsbyxzLG4scixsPXRoaXMsZD1pKFwiaW1nW2RhdGEtbGF6eV1cIixsLiRzbGlkZXIpO2QubGVuZ3RoPyh0PWQuZmlyc3QoKSxvPXQuYXR0cihcImRhdGEtbGF6eVwiKSxzPXQuYXR0cihcImRhdGEtc3Jjc2V0XCIpLG49dC5hdHRyKFwiZGF0YS1zaXplc1wiKXx8bC4kc2xpZGVyLmF0dHIoXCJkYXRhLXNpemVzXCIpLChyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpLm9ubG9hZD1mdW5jdGlvbigpe3MmJih0LmF0dHIoXCJzcmNzZXRcIixzKSxuJiZ0LmF0dHIoXCJzaXplc1wiLG4pKSx0LmF0dHIoXCJzcmNcIixvKS5yZW1vdmVBdHRyKFwiZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXNcIikucmVtb3ZlQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpLCEwPT09bC5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0JiZsLnNldFBvc2l0aW9uKCksbC4kc2xpZGVyLnRyaWdnZXIoXCJsYXp5TG9hZGVkXCIsW2wsdCxvXSksbC5wcm9ncmVzc2l2ZUxhenlMb2FkKCl9LHIub25lcnJvcj1mdW5jdGlvbigpe2U8Mz9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5wcm9ncmVzc2l2ZUxhenlMb2FkKGUrMSl9LDUwMCk6KHQucmVtb3ZlQXR0cihcImRhdGEtbGF6eVwiKS5yZW1vdmVDbGFzcyhcInNsaWNrLWxvYWRpbmdcIikuYWRkQ2xhc3MoXCJzbGljay1sYXp5bG9hZC1lcnJvclwiKSxsLiRzbGlkZXIudHJpZ2dlcihcImxhenlMb2FkRXJyb3JcIixbbCx0LG9dKSxsLnByb2dyZXNzaXZlTGF6eUxvYWQoKSl9LHIuc3JjPW8pOmwuJHNsaWRlci50cmlnZ2VyKFwiYWxsSW1hZ2VzTG9hZGVkXCIsW2xdKX0sZS5wcm90b3R5cGUucmVmcmVzaD1mdW5jdGlvbihlKXt2YXIgdCxvLHM9dGhpcztvPXMuc2xpZGVDb3VudC1zLm9wdGlvbnMuc2xpZGVzVG9TaG93LCFzLm9wdGlvbnMuaW5maW5pdGUmJnMuY3VycmVudFNsaWRlPm8mJihzLmN1cnJlbnRTbGlkZT1vKSxzLnNsaWRlQ291bnQ8PXMub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihzLmN1cnJlbnRTbGlkZT0wKSx0PXMuY3VycmVudFNsaWRlLHMuZGVzdHJveSghMCksaS5leHRlbmQocyxzLmluaXRpYWxzLHtjdXJyZW50U2xpZGU6dH0pLHMuaW5pdCgpLGV8fHMuY2hhbmdlU2xpZGUoe2RhdGE6e21lc3NhZ2U6XCJpbmRleFwiLGluZGV4OnR9fSwhMSl9LGUucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHM9ZnVuY3Rpb24oKXt2YXIgZSx0LG8scz10aGlzLG49cy5vcHRpb25zLnJlc3BvbnNpdmV8fG51bGw7aWYoXCJhcnJheVwiPT09aS50eXBlKG4pJiZuLmxlbmd0aCl7cy5yZXNwb25kVG89cy5vcHRpb25zLnJlc3BvbmRUb3x8XCJ3aW5kb3dcIjtmb3IoZSBpbiBuKWlmKG89cy5icmVha3BvaW50cy5sZW5ndGgtMSxuLmhhc093blByb3BlcnR5KGUpKXtmb3IodD1uW2VdLmJyZWFrcG9pbnQ7bz49MDspcy5icmVha3BvaW50c1tvXSYmcy5icmVha3BvaW50c1tvXT09PXQmJnMuYnJlYWtwb2ludHMuc3BsaWNlKG8sMSksby0tO3MuYnJlYWtwb2ludHMucHVzaCh0KSxzLmJyZWFrcG9pbnRTZXR0aW5nc1t0XT1uW2VdLnNldHRpbmdzfXMuYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihpLGUpe3JldHVybiBzLm9wdGlvbnMubW9iaWxlRmlyc3Q/aS1lOmUtaX0pfX0sZS5wcm90b3R5cGUucmVpbml0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLiRzbGlkZXM9ZS4kc2xpZGVUcmFjay5jaGlsZHJlbihlLm9wdGlvbnMuc2xpZGUpLmFkZENsYXNzKFwic2xpY2stc2xpZGVcIiksZS5zbGlkZUNvdW50PWUuJHNsaWRlcy5sZW5ndGgsZS5jdXJyZW50U2xpZGU+PWUuc2xpZGVDb3VudCYmMCE9PWUuY3VycmVudFNsaWRlJiYoZS5jdXJyZW50U2xpZGU9ZS5jdXJyZW50U2xpZGUtZS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSxlLnNsaWRlQ291bnQ8PWUub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihlLmN1cnJlbnRTbGlkZT0wKSxlLnJlZ2lzdGVyQnJlYWtwb2ludHMoKSxlLnNldFByb3BzKCksZS5zZXR1cEluZmluaXRlKCksZS5idWlsZEFycm93cygpLGUudXBkYXRlQXJyb3dzKCksZS5pbml0QXJyb3dFdmVudHMoKSxlLmJ1aWxkRG90cygpLGUudXBkYXRlRG90cygpLGUuaW5pdERvdEV2ZW50cygpLGUuY2xlYW5VcFNsaWRlRXZlbnRzKCksZS5pbml0U2xpZGVFdmVudHMoKSxlLmNoZWNrUmVzcG9uc2l2ZSghMSwhMCksITA9PT1lLm9wdGlvbnMuZm9jdXNPblNlbGVjdCYmaShlLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKFwiY2xpY2suc2xpY2tcIixlLnNlbGVjdEhhbmRsZXIpLGUuc2V0U2xpZGVDbGFzc2VzKFwibnVtYmVyXCI9PXR5cGVvZiBlLmN1cnJlbnRTbGlkZT9lLmN1cnJlbnRTbGlkZTowKSxlLnNldFBvc2l0aW9uKCksZS5mb2N1c0hhbmRsZXIoKSxlLnBhdXNlZD0hZS5vcHRpb25zLmF1dG9wbGF5LGUuYXV0b1BsYXkoKSxlLiRzbGlkZXIudHJpZ2dlcihcInJlSW5pdFwiLFtlXSl9LGUucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7aSh3aW5kb3cpLndpZHRoKCkhPT1lLndpbmRvd1dpZHRoJiYoY2xlYXJUaW1lb3V0KGUud2luZG93RGVsYXkpLGUud2luZG93RGVsYXk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLndpbmRvd1dpZHRoPWkod2luZG93KS53aWR0aCgpLGUuY2hlY2tSZXNwb25zaXZlKCksZS51bnNsaWNrZWR8fGUuc2V0UG9zaXRpb24oKX0sNTApKX0sZS5wcm90b3R5cGUucmVtb3ZlU2xpZGU9ZS5wcm90b3R5cGUuc2xpY2tSZW1vdmU9ZnVuY3Rpb24oaSxlLHQpe3ZhciBvPXRoaXM7aWYoaT1cImJvb2xlYW5cIj09dHlwZW9mIGk/ITA9PT0oZT1pKT8wOm8uc2xpZGVDb3VudC0xOiEwPT09ZT8tLWk6aSxvLnNsaWRlQ291bnQ8MXx8aTwwfHxpPm8uc2xpZGVDb3VudC0xKXJldHVybiExO28udW5sb2FkKCksITA9PT10P28uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTpvLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaSkucmVtb3ZlKCksby4kc2xpZGVzPW8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKSxvLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCksby4kc2xpZGVUcmFjay5hcHBlbmQoby4kc2xpZGVzKSxvLiRzbGlkZXNDYWNoZT1vLiRzbGlkZXMsby5yZWluaXQoKX0sZS5wcm90b3R5cGUuc2V0Q1NTPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbz10aGlzLHM9e307ITA9PT1vLm9wdGlvbnMucnRsJiYoaT0taSksZT1cImxlZnRcIj09by5wb3NpdGlvblByb3A/TWF0aC5jZWlsKGkpK1wicHhcIjpcIjBweFwiLHQ9XCJ0b3BcIj09by5wb3NpdGlvblByb3A/TWF0aC5jZWlsKGkpK1wicHhcIjpcIjBweFwiLHNbby5wb3NpdGlvblByb3BdPWksITE9PT1vLnRyYW5zZm9ybXNFbmFibGVkP28uJHNsaWRlVHJhY2suY3NzKHMpOihzPXt9LCExPT09by5jc3NUcmFuc2l0aW9ucz8oc1tvLmFuaW1UeXBlXT1cInRyYW5zbGF0ZShcIitlK1wiLCBcIit0K1wiKVwiLG8uJHNsaWRlVHJhY2suY3NzKHMpKTooc1tvLmFuaW1UeXBlXT1cInRyYW5zbGF0ZTNkKFwiK2UrXCIsIFwiK3QrXCIsIDBweClcIixvLiRzbGlkZVRyYWNrLmNzcyhzKSkpfSxlLnByb3RvdHlwZS5zZXREaW1lbnNpb25zPWZ1bmN0aW9uKCl7dmFyIGk9dGhpczshMT09PWkub3B0aW9ucy52ZXJ0aWNhbD8hMD09PWkub3B0aW9ucy5jZW50ZXJNb2RlJiZpLiRsaXN0LmNzcyh7cGFkZGluZzpcIjBweCBcIitpLm9wdGlvbnMuY2VudGVyUGFkZGluZ30pOihpLiRsaXN0LmhlaWdodChpLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCkqaS5vcHRpb25zLnNsaWRlc1RvU2hvdyksITA9PT1pLm9wdGlvbnMuY2VudGVyTW9kZSYmaS4kbGlzdC5jc3Moe3BhZGRpbmc6aS5vcHRpb25zLmNlbnRlclBhZGRpbmcrXCIgMHB4XCJ9KSksaS5saXN0V2lkdGg9aS4kbGlzdC53aWR0aCgpLGkubGlzdEhlaWdodD1pLiRsaXN0LmhlaWdodCgpLCExPT09aS5vcHRpb25zLnZlcnRpY2FsJiYhMT09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoPyhpLnNsaWRlV2lkdGg9TWF0aC5jZWlsKGkubGlzdFdpZHRoL2kub3B0aW9ucy5zbGlkZXNUb1Nob3cpLGkuJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKGkuc2xpZGVXaWR0aCppLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLmxlbmd0aCkpKTohMD09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoP2kuJHNsaWRlVHJhY2sud2lkdGgoNWUzKmkuc2xpZGVDb3VudCk6KGkuc2xpZGVXaWR0aD1NYXRoLmNlaWwoaS5saXN0V2lkdGgpLGkuJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbChpLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCghMCkqaS4kc2xpZGVUcmFjay5jaGlsZHJlbihcIi5zbGljay1zbGlkZVwiKS5sZW5ndGgpKSk7dmFyIGU9aS4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCghMCktaS4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTshMT09PWkub3B0aW9ucy52YXJpYWJsZVdpZHRoJiZpLiRzbGlkZVRyYWNrLmNoaWxkcmVuKFwiLnNsaWNrLXNsaWRlXCIpLndpZHRoKGkuc2xpZGVXaWR0aC1lKX0sZS5wcm90b3R5cGUuc2V0RmFkZT1mdW5jdGlvbigpe3ZhciBlLHQ9dGhpczt0LiRzbGlkZXMuZWFjaChmdW5jdGlvbihvLHMpe2U9dC5zbGlkZVdpZHRoKm8qLTEsITA9PT10Lm9wdGlvbnMucnRsP2kocykuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIscmlnaHQ6ZSx0b3A6MCx6SW5kZXg6dC5vcHRpb25zLnpJbmRleC0yLG9wYWNpdHk6MH0pOmkocykuY3NzKHtwb3NpdGlvbjpcInJlbGF0aXZlXCIsbGVmdDplLHRvcDowLHpJbmRleDp0Lm9wdGlvbnMuekluZGV4LTIsb3BhY2l0eTowfSl9KSx0LiRzbGlkZXMuZXEodC5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OnQub3B0aW9ucy56SW5kZXgtMSxvcGFjaXR5OjF9KX0sZS5wcm90b3R5cGUuc2V0SGVpZ2h0PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpZigxPT09aS5vcHRpb25zLnNsaWRlc1RvU2hvdyYmITA9PT1pLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQmJiExPT09aS5vcHRpb25zLnZlcnRpY2FsKXt2YXIgZT1pLiRzbGlkZXMuZXEoaS5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KCEwKTtpLiRsaXN0LmNzcyhcImhlaWdodFwiLGUpfX0sZS5wcm90b3R5cGUuc2V0T3B0aW9uPWUucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uPWZ1bmN0aW9uKCl7dmFyIGUsdCxvLHMsbixyPXRoaXMsbD0hMTtpZihcIm9iamVjdFwiPT09aS50eXBlKGFyZ3VtZW50c1swXSk/KG89YXJndW1lbnRzWzBdLGw9YXJndW1lbnRzWzFdLG49XCJtdWx0aXBsZVwiKTpcInN0cmluZ1wiPT09aS50eXBlKGFyZ3VtZW50c1swXSkmJihvPWFyZ3VtZW50c1swXSxzPWFyZ3VtZW50c1sxXSxsPWFyZ3VtZW50c1syXSxcInJlc3BvbnNpdmVcIj09PWFyZ3VtZW50c1swXSYmXCJhcnJheVwiPT09aS50eXBlKGFyZ3VtZW50c1sxXSk/bj1cInJlc3BvbnNpdmVcIjp2b2lkIDAhPT1hcmd1bWVudHNbMV0mJihuPVwic2luZ2xlXCIpKSxcInNpbmdsZVwiPT09bilyLm9wdGlvbnNbb109cztlbHNlIGlmKFwibXVsdGlwbGVcIj09PW4paS5lYWNoKG8sZnVuY3Rpb24oaSxlKXtyLm9wdGlvbnNbaV09ZX0pO2Vsc2UgaWYoXCJyZXNwb25zaXZlXCI9PT1uKWZvcih0IGluIHMpaWYoXCJhcnJheVwiIT09aS50eXBlKHIub3B0aW9ucy5yZXNwb25zaXZlKSlyLm9wdGlvbnMucmVzcG9uc2l2ZT1bc1t0XV07ZWxzZXtmb3IoZT1yLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtlPj0wOylyLm9wdGlvbnMucmVzcG9uc2l2ZVtlXS5icmVha3BvaW50PT09c1t0XS5icmVha3BvaW50JiZyLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UoZSwxKSxlLS07ci5vcHRpb25zLnJlc3BvbnNpdmUucHVzaChzW3RdKX1sJiYoci51bmxvYWQoKSxyLnJlaW5pdCgpKX0sZS5wcm90b3R5cGUuc2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuc2V0RGltZW5zaW9ucygpLGkuc2V0SGVpZ2h0KCksITE9PT1pLm9wdGlvbnMuZmFkZT9pLnNldENTUyhpLmdldExlZnQoaS5jdXJyZW50U2xpZGUpKTppLnNldEZhZGUoKSxpLiRzbGlkZXIudHJpZ2dlcihcInNldFBvc2l0aW9uXCIsW2ldKX0sZS5wcm90b3R5cGUuc2V0UHJvcHM9ZnVuY3Rpb24oKXt2YXIgaT10aGlzLGU9ZG9jdW1lbnQuYm9keS5zdHlsZTtpLnBvc2l0aW9uUHJvcD0hMD09PWkub3B0aW9ucy52ZXJ0aWNhbD9cInRvcFwiOlwibGVmdFwiLFwidG9wXCI9PT1pLnBvc2l0aW9uUHJvcD9pLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKTppLiRzbGlkZXIucmVtb3ZlQ2xhc3MoXCJzbGljay12ZXJ0aWNhbFwiKSx2b2lkIDA9PT1lLldlYmtpdFRyYW5zaXRpb24mJnZvaWQgMD09PWUuTW96VHJhbnNpdGlvbiYmdm9pZCAwPT09ZS5tc1RyYW5zaXRpb258fCEwPT09aS5vcHRpb25zLnVzZUNTUyYmKGkuY3NzVHJhbnNpdGlvbnM9ITApLGkub3B0aW9ucy5mYWRlJiYoXCJudW1iZXJcIj09dHlwZW9mIGkub3B0aW9ucy56SW5kZXg/aS5vcHRpb25zLnpJbmRleDwzJiYoaS5vcHRpb25zLnpJbmRleD0zKTppLm9wdGlvbnMuekluZGV4PWkuZGVmYXVsdHMuekluZGV4KSx2b2lkIDAhPT1lLk9UcmFuc2Zvcm0mJihpLmFuaW1UeXBlPVwiT1RyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1vLXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJPVHJhbnNpdGlvblwiLHZvaWQgMD09PWUucGVyc3BlY3RpdmVQcm9wZXJ0eSYmdm9pZCAwPT09ZS53ZWJraXRQZXJzcGVjdGl2ZSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLk1velRyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJNb3pUcmFuc2Zvcm1cIixpLnRyYW5zZm9ybVR5cGU9XCItbW96LXRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJNb3pUcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5wZXJzcGVjdGl2ZVByb3BlcnR5JiZ2b2lkIDA9PT1lLk1velBlcnNwZWN0aXZlJiYoaS5hbmltVHlwZT0hMSkpLHZvaWQgMCE9PWUud2Via2l0VHJhbnNmb3JtJiYoaS5hbmltVHlwZT1cIndlYmtpdFRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi13ZWJraXQtdHJhbnNmb3JtXCIsaS50cmFuc2l0aW9uVHlwZT1cIndlYmtpdFRyYW5zaXRpb25cIix2b2lkIDA9PT1lLnBlcnNwZWN0aXZlUHJvcGVydHkmJnZvaWQgMD09PWUud2Via2l0UGVyc3BlY3RpdmUmJihpLmFuaW1UeXBlPSExKSksdm9pZCAwIT09ZS5tc1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9XCJtc1RyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cIi1tcy10cmFuc2Zvcm1cIixpLnRyYW5zaXRpb25UeXBlPVwibXNUcmFuc2l0aW9uXCIsdm9pZCAwPT09ZS5tc1RyYW5zZm9ybSYmKGkuYW5pbVR5cGU9ITEpKSx2b2lkIDAhPT1lLnRyYW5zZm9ybSYmITEhPT1pLmFuaW1UeXBlJiYoaS5hbmltVHlwZT1cInRyYW5zZm9ybVwiLGkudHJhbnNmb3JtVHlwZT1cInRyYW5zZm9ybVwiLGkudHJhbnNpdGlvblR5cGU9XCJ0cmFuc2l0aW9uXCIpLGkudHJhbnNmb3Jtc0VuYWJsZWQ9aS5vcHRpb25zLnVzZVRyYW5zZm9ybSYmbnVsbCE9PWkuYW5pbVR5cGUmJiExIT09aS5hbmltVHlwZX0sZS5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzPWZ1bmN0aW9uKGkpe3ZhciBlLHQsbyxzLG49dGhpcztpZih0PW4uJHNsaWRlci5maW5kKFwiLnNsaWNrLXNsaWRlXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKSxuLiRzbGlkZXMuZXEoaSkuYWRkQ2xhc3MoXCJzbGljay1jdXJyZW50XCIpLCEwPT09bi5vcHRpb25zLmNlbnRlck1vZGUpe3ZhciByPW4ub3B0aW9ucy5zbGlkZXNUb1Nob3clMj09MD8xOjA7ZT1NYXRoLmZsb29yKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cvMiksITA9PT1uLm9wdGlvbnMuaW5maW5pdGUmJihpPj1lJiZpPD1uLnNsaWRlQ291bnQtMS1lP24uJHNsaWRlcy5zbGljZShpLWUrcixpK2UrMSkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKToobz1uLm9wdGlvbnMuc2xpZGVzVG9TaG93K2ksdC5zbGljZShvLWUrMStyLG8rZSsyKS5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpKSwwPT09aT90LmVxKHQubGVuZ3RoLTEtbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIik6aT09PW4uc2xpZGVDb3VudC0xJiZ0LmVxKG4ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stY2VudGVyXCIpKSxuLiRzbGlkZXMuZXEoaSkuYWRkQ2xhc3MoXCJzbGljay1jZW50ZXJcIil9ZWxzZSBpPj0wJiZpPD1uLnNsaWRlQ291bnQtbi5vcHRpb25zLnNsaWRlc1RvU2hvdz9uLiRzbGlkZXMuc2xpY2UoaSxpK24ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5sZW5ndGg8PW4ub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5hZGRDbGFzcyhcInNsaWNrLWFjdGl2ZVwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcImZhbHNlXCIpOihzPW4uc2xpZGVDb3VudCVuLm9wdGlvbnMuc2xpZGVzVG9TaG93LG89ITA9PT1uLm9wdGlvbnMuaW5maW5pdGU/bi5vcHRpb25zLnNsaWRlc1RvU2hvdytpOmksbi5vcHRpb25zLnNsaWRlc1RvU2hvdz09bi5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsJiZuLnNsaWRlQ291bnQtaTxuLm9wdGlvbnMuc2xpZGVzVG9TaG93P3Quc2xpY2Uoby0obi5vcHRpb25zLnNsaWRlc1RvU2hvdy1zKSxvK3MpLmFkZENsYXNzKFwic2xpY2stYWN0aXZlXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwiZmFsc2VcIik6dC5zbGljZShvLG8rbi5vcHRpb25zLnNsaWRlc1RvU2hvdykuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJmYWxzZVwiKSk7XCJvbmRlbWFuZFwiIT09bi5vcHRpb25zLmxhenlMb2FkJiZcImFudGljaXBhdGVkXCIhPT1uLm9wdGlvbnMubGF6eUxvYWR8fG4ubGF6eUxvYWQoKX0sZS5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZT1mdW5jdGlvbigpe3ZhciBlLHQsbyxzPXRoaXM7aWYoITA9PT1zLm9wdGlvbnMuZmFkZSYmKHMub3B0aW9ucy5jZW50ZXJNb2RlPSExKSwhMD09PXMub3B0aW9ucy5pbmZpbml0ZSYmITE9PT1zLm9wdGlvbnMuZmFkZSYmKHQ9bnVsbCxzLnNsaWRlQ291bnQ+cy5vcHRpb25zLnNsaWRlc1RvU2hvdykpe2ZvcihvPSEwPT09cy5vcHRpb25zLmNlbnRlck1vZGU/cy5vcHRpb25zLnNsaWRlc1RvU2hvdysxOnMub3B0aW9ucy5zbGlkZXNUb1Nob3csZT1zLnNsaWRlQ291bnQ7ZT5zLnNsaWRlQ291bnQtbztlLT0xKXQ9ZS0xLGkocy4kc2xpZGVzW3RdKS5jbG9uZSghMCkuYXR0cihcImlkXCIsXCJcIikuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIix0LXMuc2xpZGVDb3VudCkucHJlcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO2ZvcihlPTA7ZTxvK3Muc2xpZGVDb3VudDtlKz0xKXQ9ZSxpKHMuJHNsaWRlc1t0XSkuY2xvbmUoITApLmF0dHIoXCJpZFwiLFwiXCIpLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIsdCtzLnNsaWRlQ291bnQpLmFwcGVuZFRvKHMuJHNsaWRlVHJhY2spLmFkZENsYXNzKFwic2xpY2stY2xvbmVkXCIpO3MuJHNsaWRlVHJhY2suZmluZChcIi5zbGljay1jbG9uZWRcIikuZmluZChcIltpZF1cIikuZWFjaChmdW5jdGlvbigpe2kodGhpcykuYXR0cihcImlkXCIsXCJcIil9KX19LGUucHJvdG90eXBlLmludGVycnVwdD1mdW5jdGlvbihpKXt2YXIgZT10aGlzO2l8fGUuYXV0b1BsYXkoKSxlLmludGVycnVwdGVkPWl9LGUucHJvdG90eXBlLnNlbGVjdEhhbmRsZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxvPWkoZS50YXJnZXQpLmlzKFwiLnNsaWNrLXNsaWRlXCIpP2koZS50YXJnZXQpOmkoZS50YXJnZXQpLnBhcmVudHMoXCIuc2xpY2stc2xpZGVcIikscz1wYXJzZUludChvLmF0dHIoXCJkYXRhLXNsaWNrLWluZGV4XCIpKTtzfHwocz0wKSx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3c/dC5zbGlkZUhhbmRsZXIocywhMSwhMCk6dC5zbGlkZUhhbmRsZXIocyl9LGUucHJvdG90eXBlLnNsaWRlSGFuZGxlcj1mdW5jdGlvbihpLGUsdCl7dmFyIG8scyxuLHIsbCxkPW51bGwsYT10aGlzO2lmKGU9ZXx8ITEsISghMD09PWEuYW5pbWF0aW5nJiYhMD09PWEub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZXx8ITA9PT1hLm9wdGlvbnMuZmFkZSYmYS5jdXJyZW50U2xpZGU9PT1pKSlpZighMT09PWUmJmEuYXNOYXZGb3IoaSksbz1pLGQ9YS5nZXRMZWZ0KG8pLHI9YS5nZXRMZWZ0KGEuY3VycmVudFNsaWRlKSxhLmN1cnJlbnRMZWZ0PW51bGw9PT1hLnN3aXBlTGVmdD9yOmEuc3dpcGVMZWZ0LCExPT09YS5vcHRpb25zLmluZmluaXRlJiYhMT09PWEub3B0aW9ucy5jZW50ZXJNb2RlJiYoaTwwfHxpPmEuZ2V0RG90Q291bnQoKSphLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSExPT09YS5vcHRpb25zLmZhZGUmJihvPWEuY3VycmVudFNsaWRlLCEwIT09dD9hLmFuaW1hdGVTbGlkZShyLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUobyl9KTphLnBvc3RTbGlkZShvKSk7ZWxzZSBpZighMT09PWEub3B0aW9ucy5pbmZpbml0ZSYmITA9PT1hLm9wdGlvbnMuY2VudGVyTW9kZSYmKGk8MHx8aT5hLnNsaWRlQ291bnQtYS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkhMT09PWEub3B0aW9ucy5mYWRlJiYobz1hLmN1cnJlbnRTbGlkZSwhMCE9PXQ/YS5hbmltYXRlU2xpZGUocixmdW5jdGlvbigpe2EucG9zdFNsaWRlKG8pfSk6YS5wb3N0U2xpZGUobykpO2Vsc2V7aWYoYS5vcHRpb25zLmF1dG9wbGF5JiZjbGVhckludGVydmFsKGEuYXV0b1BsYXlUaW1lcikscz1vPDA/YS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9MD9hLnNsaWRlQ291bnQtYS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDphLnNsaWRlQ291bnQrbzpvPj1hLnNsaWRlQ291bnQ/YS5zbGlkZUNvdW50JWEub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCE9MD8wOm8tYS5zbGlkZUNvdW50Om8sYS5hbmltYXRpbmc9ITAsYS4kc2xpZGVyLnRyaWdnZXIoXCJiZWZvcmVDaGFuZ2VcIixbYSxhLmN1cnJlbnRTbGlkZSxzXSksbj1hLmN1cnJlbnRTbGlkZSxhLmN1cnJlbnRTbGlkZT1zLGEuc2V0U2xpZGVDbGFzc2VzKGEuY3VycmVudFNsaWRlKSxhLm9wdGlvbnMuYXNOYXZGb3ImJihsPShsPWEuZ2V0TmF2VGFyZ2V0KCkpLnNsaWNrKFwiZ2V0U2xpY2tcIikpLnNsaWRlQ291bnQ8PWwub3B0aW9ucy5zbGlkZXNUb1Nob3cmJmwuc2V0U2xpZGVDbGFzc2VzKGEuY3VycmVudFNsaWRlKSxhLnVwZGF0ZURvdHMoKSxhLnVwZGF0ZUFycm93cygpLCEwPT09YS5vcHRpb25zLmZhZGUpcmV0dXJuITAhPT10PyhhLmZhZGVTbGlkZU91dChuKSxhLmZhZGVTbGlkZShzLGZ1bmN0aW9uKCl7YS5wb3N0U2xpZGUocyl9KSk6YS5wb3N0U2xpZGUocyksdm9pZCBhLmFuaW1hdGVIZWlnaHQoKTshMCE9PXQ/YS5hbmltYXRlU2xpZGUoZCxmdW5jdGlvbigpe2EucG9zdFNsaWRlKHMpfSk6YS5wb3N0U2xpZGUocyl9fSxlLnByb3RvdHlwZS5zdGFydExvYWQ9ZnVuY3Rpb24oKXt2YXIgaT10aGlzOyEwPT09aS5vcHRpb25zLmFycm93cyYmaS5zbGlkZUNvdW50Pmkub3B0aW9ucy5zbGlkZXNUb1Nob3cmJihpLiRwcmV2QXJyb3cuaGlkZSgpLGkuJG5leHRBcnJvdy5oaWRlKCkpLCEwPT09aS5vcHRpb25zLmRvdHMmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiZpLiRkb3RzLmhpZGUoKSxpLiRzbGlkZXIuYWRkQ2xhc3MoXCJzbGljay1sb2FkaW5nXCIpfSxlLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbj1mdW5jdGlvbigpe3ZhciBpLGUsdCxvLHM9dGhpcztyZXR1cm4gaT1zLnRvdWNoT2JqZWN0LnN0YXJ0WC1zLnRvdWNoT2JqZWN0LmN1clgsZT1zLnRvdWNoT2JqZWN0LnN0YXJ0WS1zLnRvdWNoT2JqZWN0LmN1clksdD1NYXRoLmF0YW4yKGUsaSksKG89TWF0aC5yb3VuZCgxODAqdC9NYXRoLlBJKSk8MCYmKG89MzYwLU1hdGguYWJzKG8pKSxvPD00NSYmbz49MD8hMT09PXMub3B0aW9ucy5ydGw/XCJsZWZ0XCI6XCJyaWdodFwiOm88PTM2MCYmbz49MzE1PyExPT09cy5vcHRpb25zLnJ0bD9cImxlZnRcIjpcInJpZ2h0XCI6bz49MTM1JiZvPD0yMjU/ITE9PT1zLm9wdGlvbnMucnRsP1wicmlnaHRcIjpcImxlZnRcIjohMD09PXMub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmc/bz49MzUmJm88PTEzNT9cImRvd25cIjpcInVwXCI6XCJ2ZXJ0aWNhbFwifSxlLnByb3RvdHlwZS5zd2lwZUVuZD1mdW5jdGlvbihpKXt2YXIgZSx0LG89dGhpcztpZihvLmRyYWdnaW5nPSExLG8uc3dpcGluZz0hMSxvLnNjcm9sbGluZylyZXR1cm4gby5zY3JvbGxpbmc9ITEsITE7aWYoby5pbnRlcnJ1cHRlZD0hMSxvLnNob3VsZENsaWNrPSEoby50b3VjaE9iamVjdC5zd2lwZUxlbmd0aD4xMCksdm9pZCAwPT09by50b3VjaE9iamVjdC5jdXJYKXJldHVybiExO2lmKCEwPT09by50b3VjaE9iamVjdC5lZGdlSGl0JiZvLiRzbGlkZXIudHJpZ2dlcihcImVkZ2VcIixbbyxvLnN3aXBlRGlyZWN0aW9uKCldKSxvLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPj1vLnRvdWNoT2JqZWN0Lm1pblN3aXBlKXtzd2l0Y2godD1vLnN3aXBlRGlyZWN0aW9uKCkpe2Nhc2VcImxlZnRcIjpjYXNlXCJkb3duXCI6ZT1vLm9wdGlvbnMuc3dpcGVUb1NsaWRlP28uY2hlY2tOYXZpZ2FibGUoby5jdXJyZW50U2xpZGUrby5nZXRTbGlkZUNvdW50KCkpOm8uY3VycmVudFNsaWRlK28uZ2V0U2xpZGVDb3VudCgpLG8uY3VycmVudERpcmVjdGlvbj0wO2JyZWFrO2Nhc2VcInJpZ2h0XCI6Y2FzZVwidXBcIjplPW8ub3B0aW9ucy5zd2lwZVRvU2xpZGU/by5jaGVja05hdmlnYWJsZShvLmN1cnJlbnRTbGlkZS1vLmdldFNsaWRlQ291bnQoKSk6by5jdXJyZW50U2xpZGUtby5nZXRTbGlkZUNvdW50KCksby5jdXJyZW50RGlyZWN0aW9uPTF9XCJ2ZXJ0aWNhbFwiIT10JiYoby5zbGlkZUhhbmRsZXIoZSksby50b3VjaE9iamVjdD17fSxvLiRzbGlkZXIudHJpZ2dlcihcInN3aXBlXCIsW28sdF0pKX1lbHNlIG8udG91Y2hPYmplY3Quc3RhcnRYIT09by50b3VjaE9iamVjdC5jdXJYJiYoby5zbGlkZUhhbmRsZXIoby5jdXJyZW50U2xpZGUpLG8udG91Y2hPYmplY3Q9e30pfSxlLnByb3RvdHlwZS5zd2lwZUhhbmRsZXI9ZnVuY3Rpb24oaSl7dmFyIGU9dGhpcztpZighKCExPT09ZS5vcHRpb25zLnN3aXBlfHxcIm9udG91Y2hlbmRcImluIGRvY3VtZW50JiYhMT09PWUub3B0aW9ucy5zd2lwZXx8ITE9PT1lLm9wdGlvbnMuZHJhZ2dhYmxlJiYtMSE9PWkudHlwZS5pbmRleE9mKFwibW91c2VcIikpKXN3aXRjaChlLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50PWkub3JpZ2luYWxFdmVudCYmdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXM/aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoOjEsZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RXaWR0aC9lLm9wdGlvbnMudG91Y2hUaHJlc2hvbGQsITA9PT1lLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYoZS50b3VjaE9iamVjdC5taW5Td2lwZT1lLmxpc3RIZWlnaHQvZS5vcHRpb25zLnRvdWNoVGhyZXNob2xkKSxpLmRhdGEuYWN0aW9uKXtjYXNlXCJzdGFydFwiOmUuc3dpcGVTdGFydChpKTticmVhaztjYXNlXCJtb3ZlXCI6ZS5zd2lwZU1vdmUoaSk7YnJlYWs7Y2FzZVwiZW5kXCI6ZS5zd2lwZUVuZChpKX19LGUucHJvdG90eXBlLnN3aXBlTW92ZT1mdW5jdGlvbihpKXt2YXIgZSx0LG8scyxuLHIsbD10aGlzO3JldHVybiBuPXZvaWQgMCE9PWkub3JpZ2luYWxFdmVudD9pLm9yaWdpbmFsRXZlbnQudG91Y2hlczpudWxsLCEoIWwuZHJhZ2dpbmd8fGwuc2Nyb2xsaW5nfHxuJiYxIT09bi5sZW5ndGgpJiYoZT1sLmdldExlZnQobC5jdXJyZW50U2xpZGUpLGwudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1uP25bMF0ucGFnZVg6aS5jbGllbnRYLGwudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1uP25bMF0ucGFnZVk6aS5jbGllbnRZLGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9TWF0aC5yb3VuZChNYXRoLnNxcnQoTWF0aC5wb3cobC50b3VjaE9iamVjdC5jdXJYLWwudG91Y2hPYmplY3Quc3RhcnRYLDIpKSkscj1NYXRoLnJvdW5kKE1hdGguc3FydChNYXRoLnBvdyhsLnRvdWNoT2JqZWN0LmN1clktbC50b3VjaE9iamVjdC5zdGFydFksMikpKSwhbC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmIWwuc3dpcGluZyYmcj40PyhsLnNjcm9sbGluZz0hMCwhMSk6KCEwPT09bC5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyYmKGwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGg9ciksdD1sLnN3aXBlRGlyZWN0aW9uKCksdm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZsLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoPjQmJihsLnN3aXBpbmc9ITAsaS5wcmV2ZW50RGVmYXVsdCgpKSxzPSghMT09PWwub3B0aW9ucy5ydGw/MTotMSkqKGwudG91Y2hPYmplY3QuY3VyWD5sLnRvdWNoT2JqZWN0LnN0YXJ0WD8xOi0xKSwhMD09PWwub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcmJihzPWwudG91Y2hPYmplY3QuY3VyWT5sLnRvdWNoT2JqZWN0LnN0YXJ0WT8xOi0xKSxvPWwudG91Y2hPYmplY3Quc3dpcGVMZW5ndGgsbC50b3VjaE9iamVjdC5lZGdlSGl0PSExLCExPT09bC5vcHRpb25zLmluZmluaXRlJiYoMD09PWwuY3VycmVudFNsaWRlJiZcInJpZ2h0XCI9PT10fHxsLmN1cnJlbnRTbGlkZT49bC5nZXREb3RDb3VudCgpJiZcImxlZnRcIj09PXQpJiYobz1sLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoKmwub3B0aW9ucy5lZGdlRnJpY3Rpb24sbC50b3VjaE9iamVjdC5lZGdlSGl0PSEwKSwhMT09PWwub3B0aW9ucy52ZXJ0aWNhbD9sLnN3aXBlTGVmdD1lK28qczpsLnN3aXBlTGVmdD1lK28qKGwuJGxpc3QuaGVpZ2h0KCkvbC5saXN0V2lkdGgpKnMsITA9PT1sLm9wdGlvbnMudmVydGljYWxTd2lwaW5nJiYobC5zd2lwZUxlZnQ9ZStvKnMpLCEwIT09bC5vcHRpb25zLmZhZGUmJiExIT09bC5vcHRpb25zLnRvdWNoTW92ZSYmKCEwPT09bC5hbmltYXRpbmc/KGwuc3dpcGVMZWZ0PW51bGwsITEpOnZvaWQgbC5zZXRDU1MobC5zd2lwZUxlZnQpKSkpfSxlLnByb3RvdHlwZS5zd2lwZVN0YXJ0PWZ1bmN0aW9uKGkpe3ZhciBlLHQ9dGhpcztpZih0LmludGVycnVwdGVkPSEwLDEhPT10LnRvdWNoT2JqZWN0LmZpbmdlckNvdW50fHx0LnNsaWRlQ291bnQ8PXQub3B0aW9ucy5zbGlkZXNUb1Nob3cpcmV0dXJuIHQudG91Y2hPYmplY3Q9e30sITE7dm9pZCAwIT09aS5vcmlnaW5hbEV2ZW50JiZ2b2lkIDAhPT1pLm9yaWdpbmFsRXZlbnQudG91Y2hlcyYmKGU9aS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0pLHQudG91Y2hPYmplY3Quc3RhcnRYPXQudG91Y2hPYmplY3QuY3VyWD12b2lkIDAhPT1lP2UucGFnZVg6aS5jbGllbnRYLHQudG91Y2hPYmplY3Quc3RhcnRZPXQudG91Y2hPYmplY3QuY3VyWT12b2lkIDAhPT1lP2UucGFnZVk6aS5jbGllbnRZLHQuZHJhZ2dpbmc9ITB9LGUucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzPWUucHJvdG90eXBlLnNsaWNrVW5maWx0ZXI9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO251bGwhPT1pLiRzbGlkZXNDYWNoZSYmKGkudW5sb2FkKCksaS4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpLGkuJHNsaWRlc0NhY2hlLmFwcGVuZFRvKGkuJHNsaWRlVHJhY2spLGkucmVpbml0KCkpfSxlLnByb3RvdHlwZS51bmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2koXCIuc2xpY2stY2xvbmVkXCIsZS4kc2xpZGVyKS5yZW1vdmUoKSxlLiRkb3RzJiZlLiRkb3RzLnJlbW92ZSgpLGUuJHByZXZBcnJvdyYmZS5odG1sRXhwci50ZXN0KGUub3B0aW9ucy5wcmV2QXJyb3cpJiZlLiRwcmV2QXJyb3cucmVtb3ZlKCksZS4kbmV4dEFycm93JiZlLmh0bWxFeHByLnRlc3QoZS5vcHRpb25zLm5leHRBcnJvdykmJmUuJG5leHRBcnJvdy5yZW1vdmUoKSxlLiRzbGlkZXMucmVtb3ZlQ2xhc3MoXCJzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50XCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKS5jc3MoXCJ3aWR0aFwiLFwiXCIpfSxlLnByb3RvdHlwZS51bnNsaWNrPWZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7ZS4kc2xpZGVyLnRyaWdnZXIoXCJ1bnNsaWNrXCIsW2UsaV0pLGUuZGVzdHJveSgpfSxlLnByb3RvdHlwZS51cGRhdGVBcnJvd3M9ZnVuY3Rpb24oKXt2YXIgaT10aGlzO01hdGguZmxvb3IoaS5vcHRpb25zLnNsaWRlc1RvU2hvdy8yKSwhMD09PWkub3B0aW9ucy5hcnJvd3MmJmkuc2xpZGVDb3VudD5pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhaS5vcHRpb25zLmluZmluaXRlJiYoaS4kcHJldkFycm93LnJlbW92ZUNsYXNzKFwic2xpY2stZGlzYWJsZWRcIikuYXR0cihcImFyaWEtZGlzYWJsZWRcIixcImZhbHNlXCIpLGkuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSwwPT09aS5jdXJyZW50U2xpZGU/KGkuJHByZXZBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGkuJG5leHRBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSk6aS5jdXJyZW50U2xpZGU+PWkuc2xpZGVDb3VudC1pLm9wdGlvbnMuc2xpZGVzVG9TaG93JiYhMT09PWkub3B0aW9ucy5jZW50ZXJNb2RlPyhpLiRuZXh0QXJyb3cuYWRkQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwidHJ1ZVwiKSxpLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoXCJzbGljay1kaXNhYmxlZFwiKS5hdHRyKFwiYXJpYS1kaXNhYmxlZFwiLFwiZmFsc2VcIikpOmkuY3VycmVudFNsaWRlPj1pLnNsaWRlQ291bnQtMSYmITA9PT1pLm9wdGlvbnMuY2VudGVyTW9kZSYmKGkuJG5leHRBcnJvdy5hZGRDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJ0cnVlXCIpLGkuJHByZXZBcnJvdy5yZW1vdmVDbGFzcyhcInNsaWNrLWRpc2FibGVkXCIpLmF0dHIoXCJhcmlhLWRpc2FibGVkXCIsXCJmYWxzZVwiKSkpfSxlLnByb3RvdHlwZS51cGRhdGVEb3RzPWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztudWxsIT09aS4kZG90cyYmKGkuJGRvdHMuZmluZChcImxpXCIpLnJlbW92ZUNsYXNzKFwic2xpY2stYWN0aXZlXCIpLmVuZCgpLGkuJGRvdHMuZmluZChcImxpXCIpLmVxKE1hdGguZmxvb3IoaS5jdXJyZW50U2xpZGUvaS5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkuYWRkQ2xhc3MoXCJzbGljay1hY3RpdmVcIikpfSxlLnByb3RvdHlwZS52aXNpYmlsaXR5PWZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLm9wdGlvbnMuYXV0b3BsYXkmJihkb2N1bWVudFtpLmhpZGRlbl0/aS5pbnRlcnJ1cHRlZD0hMDppLmludGVycnVwdGVkPSExKX0saS5mbi5zbGljaz1mdW5jdGlvbigpe3ZhciBpLHQsbz10aGlzLHM9YXJndW1lbnRzWzBdLG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLHI9by5sZW5ndGg7Zm9yKGk9MDtpPHI7aSsrKWlmKFwib2JqZWN0XCI9PXR5cGVvZiBzfHx2b2lkIDA9PT1zP29baV0uc2xpY2s9bmV3IGUob1tpXSxzKTp0PW9baV0uc2xpY2tbc10uYXBwbHkob1tpXS5zbGljayxuKSx2b2lkIDAhPT10KXJldHVybiB0O3JldHVybiBvfX0pO1xuXG4vKiEgalF1ZXJ5LkZsaXBzdGVyLCB2MS4xLjIgKGJ1aWx0IDIwMTctMTEtMTApICovXG4hZnVuY3Rpb24oYSxiLGMpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGQoYSxiKXt2YXIgYz1udWxsO3JldHVybiBmdW5jdGlvbigpe3ZhciBkPXRoaXMsZT1hcmd1bWVudHM7bnVsbD09PWMmJihjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXthLmFwcGx5KGQsZSksYz1udWxsfSxiKSl9fXZhciBlPWZ1bmN0aW9uKCl7dmFyIGE9e307cmV0dXJuIGZ1bmN0aW9uKGIpe2lmKGFbYl0hPT1jKXJldHVybiBhW2JdO3ZhciBkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZT1kLnN0eWxlLGY9Yi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGc9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdLGg9KGIrXCIgXCIrZy5qb2luKGYrXCIgXCIpK2YpLnNwbGl0KFwiIFwiKTtmb3IodmFyIGkgaW4gaClpZihoW2ldaW4gZSlyZXR1cm4gYVtiXT1oW2ldO3JldHVybiBhW2JdPSExfX0oKSxmPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixnPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoYSE9PWMpcmV0dXJuIGE7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gYi5pbm5lckhUTUw9XCI8c3ZnLz5cIixhPWIuZmlyc3RDaGlsZCYmYi5maXJzdENoaWxkLm5hbWVzcGFjZVVSST09PWZ9fSgpLGg9YShiKSxpPWUoXCJ0cmFuc2Zvcm1cIiksaj17aXRlbUNvbnRhaW5lcjpcInVsXCIsaXRlbVNlbGVjdG9yOlwibGlcIixzdGFydDpcImNlbnRlclwiLGZhZGVJbjo0MDAsbG9vcDohMSxhdXRvcGxheTohMSxwYXVzZU9uSG92ZXI6ITAsc3R5bGU6XCJjb3ZlcmZsb3dcIixzcGFjaW5nOi0uNixjbGljazohMCxrZXlib2FyZDohMCxzY3JvbGx3aGVlbDohMCx0b3VjaDohMCxuYXY6ITEsYnV0dG9uczohMSxidXR0b25QcmV2OlwiUHJldmlvdXNcIixidXR0b25OZXh0OlwiTmV4dFwiLG9uSXRlbVN3aXRjaDohMX0saz17bWFpbjpcImZsaXBzdGVyXCIsYWN0aXZlOlwiZmxpcHN0ZXItLWFjdGl2ZVwiLGNvbnRhaW5lcjpcImZsaXBzdGVyX19jb250YWluZXJcIixuYXY6XCJmbGlwc3Rlcl9fbmF2XCIsbmF2Q2hpbGQ6XCJmbGlwc3Rlcl9fbmF2X19jaGlsZFwiLG5hdkl0ZW06XCJmbGlwc3Rlcl9fbmF2X19pdGVtXCIsbmF2TGluazpcImZsaXBzdGVyX19uYXZfX2xpbmtcIixuYXZDdXJyZW50OlwiZmxpcHN0ZXJfX25hdl9faXRlbS0tY3VycmVudFwiLG5hdkNhdGVnb3J5OlwiZmxpcHN0ZXJfX25hdl9faXRlbS0tY2F0ZWdvcnlcIixuYXZDYXRlZ29yeUxpbms6XCJmbGlwc3Rlcl9fbmF2X19saW5rLS1jYXRlZ29yeVwiLGJ1dHRvbjpcImZsaXBzdGVyX19idXR0b25cIixidXR0b25QcmV2OlwiZmxpcHN0ZXJfX2J1dHRvbi0tcHJldlwiLGJ1dHRvbk5leHQ6XCJmbGlwc3Rlcl9fYnV0dG9uLS1uZXh0XCIsaXRlbTpcImZsaXBzdGVyX19pdGVtXCIsaXRlbUN1cnJlbnQ6XCJmbGlwc3Rlcl9faXRlbS0tY3VycmVudFwiLGl0ZW1QYXN0OlwiZmxpcHN0ZXJfX2l0ZW0tLXBhc3RcIixpdGVtRnV0dXJlOlwiZmxpcHN0ZXJfX2l0ZW0tLWZ1dHVyZVwiLGl0ZW1Db250ZW50OlwiZmxpcHN0ZXJfX2l0ZW1fX2NvbnRlbnRcIn0sbD1uZXcgUmVnRXhwKFwiXFxcXGIoXCIray5pdGVtQ3VycmVudCtcInxcIitrLml0ZW1QYXN0K1wifFwiK2suaXRlbUZ1dHVyZStcIikoLio/KShcXFxcc3wkKVwiLFwiZ1wiKSxtPW5ldyBSZWdFeHAoXCJcXFxcc1xcXFxzK1wiLFwiZ1wiKTthLmZuLmZsaXBzdGVyPWZ1bmN0aW9uKGIpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcykuZGF0YShcIm1ldGhvZHNcIik7cmV0dXJuIGNbYl0/Y1tiXS5hcHBseSh0aGlzLGUpOnRoaXN9KX12YXIgbj1hLmV4dGVuZCh7fSxqLGIpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe3ZhciBiPVwibmV4dFwiPT09YT9uLmJ1dHRvbk5leHQ6bi5idXR0b25QcmV2O3JldHVyblwiY3VzdG9tXCIhPT1uLmJ1dHRvbnMmJmc/Jzxzdmcgdmlld0JveD1cIjAgMCAxMyAyMFwiIHhtbG5zPVwiJytmKydcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZVwiPjx0aXRsZT4nK2IrJzwvdGl0bGU+PHBvbHlsaW5lIHBvaW50cz1cIjEwLDMgMywxMCAxMCwxN1wiJysoXCJuZXh0XCI9PT1hPycgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA2LjUsMTApXCInOlwiXCIpK1wiLz48L3N2Zz5cIjpifWZ1bmN0aW9uIGUoYyl7cmV0dXJuIGM9Y3x8XCJuZXh0XCIsYSgnPGJ1dHRvbiBjbGFzcz1cIicray5idXR0b24rXCIgXCIrKFwibmV4dFwiPT09Yz9rLmJ1dHRvbk5leHQ6ay5idXR0b25QcmV2KSsnXCIgcm9sZT1cImJ1dHRvblwiIC8+JykuaHRtbChiKGMpKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7dihjKSxhLnByZXZlbnREZWZhdWx0KCl9KX1mdW5jdGlvbiBqKCl7bi5idXR0b25zJiZKLmxlbmd0aD4xJiYoTy5maW5kKFwiLlwiK2suYnV0dG9uKS5yZW1vdmUoKSxPLmFwcGVuZChlKFwicHJldlwiKSxlKFwibmV4dFwiKSkpfWZ1bmN0aW9uIG8oKXt2YXIgYj17fTshbi5uYXZ8fEoubGVuZ3RoPD0xfHwoTCYmTC5yZW1vdmUoKSxMPWEoJzx1bCBjbGFzcz1cIicray5uYXYrJ1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgLz4nKSxOPWEoXCJcIiksSi5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJmbGlwLWNhdGVnb3J5XCIpLGY9ZC5kYXRhKFwiZmxpcC10aXRsZVwiKXx8ZC5hdHRyKFwidGl0bGVcIil8fGMsZz1hKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJytrLm5hdkxpbmsrJ1wiPicrZitcIjwvYT5cIikuZGF0YShcImluZGV4XCIsYyk7aWYoTj1OLmFkZChnKSxlKXtpZighYltlXSl7dmFyIGg9YSgnPGxpIGNsYXNzPVwiJytrLm5hdkl0ZW0rXCIgXCIray5uYXZDYXRlZ29yeSsnXCI+JyksaT1hKCc8YSBocmVmPVwiI1wiIGNsYXNzPVwiJytrLm5hdkxpbmsrXCIgXCIray5uYXZDYXRlZ29yeUxpbmsrJ1wiIGRhdGEtZmxpcC1jYXRlZ29yeT1cIicrZSsnXCI+JytlK1wiPC9hPlwiKS5kYXRhKFwiY2F0ZWdvcnlcIixlKS5kYXRhKFwiaW5kZXhcIixjKTtiW2VdPWEoJzx1bCBjbGFzcz1cIicray5uYXZDaGlsZCsnXCIgLz4nKSxOPU4uYWRkKGkpLGguYXBwZW5kKGksYltlXSkuYXBwZW5kVG8oTCl9YltlXS5hcHBlbmQoZyl9ZWxzZSBMLmFwcGVuZChnKTtnLndyYXAoJzxsaSBjbGFzcz1cIicray5uYXZJdGVtKydcIj4nKX0pLEwub24oXCJjbGlja1wiLFwiYVwiLGZ1bmN0aW9uKGIpe3ZhciBjPWEodGhpcykuZGF0YShcImluZGV4XCIpO2M+PTAmJih2KGMpLGIucHJldmVudERlZmF1bHQoKSl9KSxcImFmdGVyXCI9PT1uLm5hdj9PLmFwcGVuZChMKTpPLnByZXBlbmQoTCksTT1MLmZpbmQoXCIuXCIray5uYXZJdGVtKSl9ZnVuY3Rpb24gcCgpe2lmKG4ubmF2KXt2YXIgYj1LLmRhdGEoXCJmbGlwLWNhdGVnb3J5XCIpO00ucmVtb3ZlQ2xhc3Moay5uYXZDdXJyZW50KSxOLmZpbHRlcihmdW5jdGlvbigpe3JldHVybiBhKHRoaXMpLmRhdGEoXCJpbmRleFwiKT09PVF8fGImJmEodGhpcykuZGF0YShcImNhdGVnb3J5XCIpPT09Yn0pLnBhcmVudCgpLmFkZENsYXNzKGsubmF2Q3VycmVudCl9fWZ1bmN0aW9uIHEoKXtPLmNzcyhcInRyYW5zaXRpb25cIixcIm5vbmVcIiksRy5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJub25lXCIpLEouY3NzKFwidHJhbnNpdGlvblwiLFwibm9uZVwiKX1mdW5jdGlvbiByKCl7Ty5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJcIiksRy5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJcIiksSi5jc3MoXCJ0cmFuc2l0aW9uXCIsXCJcIil9ZnVuY3Rpb24gcygpe3ZhciBiLGM9MDtyZXR1cm4gSi5lYWNoKGZ1bmN0aW9uKCl7KGI9YSh0aGlzKS5oZWlnaHQoKSk+YyYmKGM9Yil9KSxjfWZ1bmN0aW9uIHQoYil7aWYoYiYmcSgpLEg9Ry53aWR0aCgpLEcuaGVpZ2h0KHMoKSksIUgpcmV0dXJuIHZvaWQoST1JfHxzZXRJbnRlcnZhbChmdW5jdGlvbigpe3QoYil9LDUwMCkpO0kmJihjbGVhckludGVydmFsKEkpLEk9ITEpLEouZWFjaChmdW5jdGlvbihjKXt2YXIgZCxlLGY9YSh0aGlzKTtmLmF0dHIoXCJjbGFzc1wiLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGImJmIucmVwbGFjZShsLFwiXCIpLnJlcGxhY2UobSxcIiBcIil9KSxkPWYub3V0ZXJXaWR0aCgpLDAhPT1uLnNwYWNpbmcmJmYuY3NzKFwibWFyZ2luLXJpZ2h0XCIsZCpuLnNwYWNpbmcrXCJweFwiKSxlPWYucG9zaXRpb24oKS5sZWZ0LFBbY109LTEqKGUrZC8yLUgvMiksYz09PUoubGVuZ3RoLTEmJih1KCksYiYmc2V0VGltZW91dChyLDEpKX0pfWZ1bmN0aW9uIHUoKXt2YXIgYixkLGUsZj1KLmxlbmd0aDtKLmVhY2goZnVuY3Rpb24oYyl7Yj1hKHRoaXMpLGQ9XCIgXCIsYz09PVE/KGQrPWsuaXRlbUN1cnJlbnQsZT1mKzEpOmM8UT8oZCs9ay5pdGVtUGFzdCtcIiBcIitrLml0ZW1QYXN0K1wiLVwiKyhRLWMpLGU9Zi0oUS1jKSk6KGQrPWsuaXRlbUZ1dHVyZStcIiBcIitrLml0ZW1GdXR1cmUrXCItXCIrKGMtUSksZT1mLShjLVEpKSxiLmNzcyhcInotaW5kZXhcIixlKS5hdHRyKFwiY2xhc3NcIixmdW5jdGlvbihhLGIpe3JldHVybiBiJiZiLnJlcGxhY2UobCxcIlwiKS5yZXBsYWNlKG0sXCIgXCIpK2R9KX0pLFE+PTAmJihIJiZQW1FdIT09Y3x8dCghMCksaT9HLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlWChcIitQW1FdK1wicHgpXCIpOkcuY3NzKHtsZWZ0OlBbUV0rXCJweFwifSkpLHAoKX1mdW5jdGlvbiB2KGEpe3ZhciBiPVE7aWYoIShKLmxlbmd0aDw9MSkpcmV0dXJuXCJwcmV2XCI9PT1hP1E+MD9RLS06bi5sb29wJiYoUT1KLmxlbmd0aC0xKTpcIm5leHRcIj09PWE/UTxKLmxlbmd0aC0xP1ErKzpuLmxvb3AmJihRPTApOlwibnVtYmVyXCI9PXR5cGVvZiBhP1E9YTphIT09YyYmKFE9Si5pbmRleChhKSxuLmxvb3AmJmIhPVEmJihiPT1KLmxlbmd0aC0xJiZRIT1KLmxlbmd0aC0yJiYoUT0wKSwwPT1iJiYxIT1RJiYoUT1KLmxlbmd0aC0xKSkpLEs9Si5lcShRKSxRIT09YiYmbi5vbkl0ZW1Td2l0Y2gmJm4ub25JdGVtU3dpdGNoLmNhbGwoTyxKW1FdLEpbYl0pLHUoKSxPfWZ1bmN0aW9uIHcoYSl7cmV0dXJuIG4uYXV0b3BsYXk9YXx8bi5hdXRvcGxheSxjbGVhckludGVydmFsKFIpLFI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgYT1RO3YoXCJuZXh0XCIpLGEhPT1RfHxuLmxvb3B8fGNsZWFySW50ZXJ2YWwoUil9LG4uYXV0b3BsYXkpLE99ZnVuY3Rpb24geCgpe3JldHVybiBjbGVhckludGVydmFsKFIpLFI9MCxPfWZ1bmN0aW9uIHkoYSl7cmV0dXJuIHgoKSxuLmF1dG9wbGF5JiZhJiYoUj0tMSksT31mdW5jdGlvbiB6KCl7dCghMCksTy5oaWRlKCkuY3NzKFwidmlzaWJpbGl0eVwiLFwiXCIpLmFkZENsYXNzKGsuYWN0aXZlKS5mYWRlSW4obi5mYWRlSW4pfWZ1bmN0aW9uIEEoKXtpZihHPU8uZmluZChuLml0ZW1Db250YWluZXIpLmFkZENsYXNzKGsuY29udGFpbmVyKSxKPUcuZmluZChuLml0ZW1TZWxlY3RvciksIShKLmxlbmd0aDw9MSkpcmV0dXJuIEouYWRkQ2xhc3Moay5pdGVtKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtiLmNoaWxkcmVuKFwiLlwiK2suaXRlbUNvbnRlbnQpLmxlbmd0aHx8Yi53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCInK2suaXRlbUNvbnRlbnQrJ1wiIC8+Jyl9KSxuLmNsaWNrJiZKLm9uKFwiY2xpY2suZmxpcHN0ZXIgdG91Y2hlbmQuZmxpcHN0ZXJcIixmdW5jdGlvbihiKXtTfHwoYSh0aGlzKS5oYXNDbGFzcyhrLml0ZW1DdXJyZW50KXx8Yi5wcmV2ZW50RGVmYXVsdCgpLHYodGhpcykpfSksaigpLG8oKSxRPj0wJiZ2KFEpLE99ZnVuY3Rpb24gQihhKXtuLmtleWJvYXJkJiYoYVswXS50YWJJbmRleD0wLGEub24oXCJrZXlkb3duLmZsaXBzdGVyXCIsZChmdW5jdGlvbihhKXt2YXIgYj1hLndoaWNoOzM3IT09YiYmMzkhPT1ifHwodigzNz09PWI/XCJwcmV2XCI6XCJuZXh0XCIpLGEucHJldmVudERlZmF1bHQoKSl9LDI1MCwhMCkpKX1mdW5jdGlvbiBDKGEpe2lmKG4uc2Nyb2xsd2hlZWwpe3ZhciBiLGMsZT0hMSxmPTAsZz0wLGk9MCxqPS9tb3ppbGxhLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSkmJiEvd2Via2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7YS5vbihcIm1vdXNld2hlZWwuZmxpcHN0ZXIgd2hlZWwuZmxpcHN0ZXJcIixmdW5jdGlvbigpe2U9ITB9KS5vbihcIm1vdXNld2hlZWwuZmxpcHN0ZXIgd2hlZWwuZmxpcHN0ZXJcIixkKGZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChnKSxnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtmPTAsaT0wfSwzMDApLGE9YS5vcmlnaW5hbEV2ZW50LGkrPWEud2hlZWxEZWx0YXx8LTEqKGEuZGVsdGFZK2EuZGVsdGFYKSxNYXRoLmFicyhpKTwyNSYmIWp8fChmKyssYj1pPjA/XCJwcmV2XCI6XCJuZXh0XCIsYyE9PWImJihmPTApLGM9YiwoZjw2fHxmJTM9PTApJiZ2KGIpLGk9MCl9LDUwKSksaC5vbihcIm1vdXNld2hlZWwuZmxpcHN0ZXIgd2hlZWwuZmxpcHN0ZXJcIixmdW5jdGlvbihhKXtlJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGU9ITEpfSl9fWZ1bmN0aW9uIEQoYSl7aWYobi50b3VjaCl7dmFyIGIsYyxkLGUsZixnO2Eub24oe1widG91Y2hzdGFydC5mbGlwc3RlclwiOmZ1bmN0aW9uKGEpe2E9YS5vcmlnaW5hbEV2ZW50LGI9YS50b3VjaGVzP2EudG91Y2hlc1swXS5jbGllbnRYOmEuY2xpZW50WCxjPWEudG91Y2hlcz9hLnRvdWNoZXNbMF0uY2xpZW50WTphLmNsaWVudFl9LFwidG91Y2htb3ZlLmZsaXBzdGVyXCI6ZnVuY3Rpb24oYSl7YT1hLm9yaWdpbmFsRXZlbnQsZD1hLnRvdWNoZXM/YS50b3VjaGVzWzBdLmNsaWVudFg6YS5jbGllbnRYLGU9YS50b3VjaGVzP2EudG91Y2hlc1swXS5jbGllbnRZOmEuY2xpZW50WSxnPWQtYixmPWUtYyxNYXRoLmFicyhnKT4zMCYmTWF0aC5hYnMoZik8MTAwJiZhLnByZXZlbnREZWZhdWx0KCl9LFwidG91Y2hlbmQuZmxpcHN0ZXIgdG91Y2hjYW5jZWwuZmxpcHN0ZXIgXCI6ZnVuY3Rpb24oKXtnPWQtYixmPWUtYyxNYXRoLmFicyhnKT4zMCYmTWF0aC5hYnMoZik8MTAwJiZ2KGc+MD9cInByZXZcIjpcIm5leHRcIil9fSl9fWZ1bmN0aW9uIEUoKXt2YXIgYTtpZihPLmNzcyhcInZpc2liaWxpdHlcIixcImhpZGRlblwiKSxBKCksSi5sZW5ndGg8PTEpcmV0dXJuIHZvaWQgTy5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJcIik7YT0hIW4uc3R5bGUmJlwiZmxpcHN0ZXItLVwiK24uc3R5bGUuc3BsaXQoXCIgXCIpLmpvaW4oXCIgZmxpcHN0ZXItLVwiKSxPLmFkZENsYXNzKFtrLm1haW4saT9cImZsaXBzdGVyLS10cmFuc2Zvcm1cIjpcIiBmbGlwc3Rlci0tbm8tdHJhbnNmb3JtXCIsYSxuLmNsaWNrP1wiZmxpcHN0ZXItLWNsaWNrXCI6XCJcIl0uam9pbihcIiBcIikpLG4uc3RhcnQmJihRPVwiY2VudGVyXCI9PT1uLnN0YXJ0P01hdGguZmxvb3IoSi5sZW5ndGgvMik6bi5zdGFydCksdihRKTt2YXIgYj1PLmZpbmQoXCJpbWdcIik7aWYoYi5sZW5ndGgpe3ZhciBjPTA7Yi5vbihcImxvYWRcIixmdW5jdGlvbigpeysrYz49Yi5sZW5ndGgmJnooKX0pLHNldFRpbWVvdXQoeiw3NTApfWVsc2UgeigpO2gub24oXCJyZXNpemUuZmxpcHN0ZXJcIixkKHQsNDAwKSksbi5hdXRvcGxheSYmdygpLG4ucGF1c2VPbkhvdmVyJiZHLm9uKFwibW91c2VlbnRlci5mbGlwc3RlclwiLGZ1bmN0aW9uKCl7Uj95KCEwKTp4KCl9KS5vbihcIm1vdXNlbGVhdmUuZmxpcHN0ZXJcIixmdW5jdGlvbigpey0xPT09UiYmdygpfSksQihPKSxDKEcpLEQoRyl9dmFyIEYsRyxILEksSixLLEwsTSxOLE89YSh0aGlzKSxQPVtdLFE9MCxSPSExLFM9ITE7Rj17anVtcDp2LG5leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdihcIm5leHRcIil9LHByZXY6ZnVuY3Rpb24oKXtyZXR1cm4gdihcInByZXZcIil9LHBsYXk6dyxzdG9wOngscGF1c2U6eSxpbmRleDpBfSxPLmRhdGEoXCJtZXRob2RzXCIsRiksTy5oYXNDbGFzcyhrLmFjdGl2ZSl8fEUoKX0pfX0oalF1ZXJ5LHdpbmRvdyk7XG4vKiFcclxuKiBqcXVlcnkuaW5wdXRtYXNrLmJ1bmRsZS5qc1xyXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXHJcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcclxuKiBWZXJzaW9uOiAzLjMuMTFcclxuKi9cclxuXHJcbiFmdW5jdGlvbihtb2R1bGVzKSB7XHJcbiAgICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcclxuICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XHJcbiAgICAgICAgICAgIGk6IG1vZHVsZUlkLFxyXG4gICAgICAgICAgICBsOiAhMSxcclxuICAgICAgICAgICAgZXhwb3J0czoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSwgXHJcbiAgICAgICAgbW9kdWxlLmwgPSAhMCwgbW9kdWxlLmV4cG9ydHM7XHJcbiAgICB9XHJcbiAgICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XHJcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgICAgICAgICBnZXQ6IGdldHRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcbiAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQ7XHJcbiAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIFwiYVwiLCBnZXR0ZXIpLCBnZXR0ZXI7XHJcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcclxuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCIsIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XHJcbn0oWyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XHJcbiAgICAhZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbIF9fd2VicGFja19yZXF1aXJlX18oMikgXSwgdm9pZCAwICE9PSAoX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSBmYWN0b3J5KSA/IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXykgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pO1xyXG4gICAgfShmdW5jdGlvbigkKSB7XHJcbiAgICAgICAgcmV0dXJuICQ7XHJcbiAgICB9KTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fLCBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgICAhZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgICAgIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbIF9fd2VicGFja19yZXF1aXJlX18oMCksIF9fd2VicGFja19yZXF1aXJlX18oMTApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKSBdLCBcclxuICAgICAgICB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnkpID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIElucHV0bWFzaykpIHJldHVybiBuZXcgSW5wdXRtYXNrKGFsaWFzLCBvcHRpb25zLCBpbnRlcm5hbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSB1bmRlZmluZWQsIHRoaXMuZXZlbnRzID0ge30sIHRoaXMubWFza3NldCA9IHVuZGVmaW5lZCwgdGhpcy5yZWZyZXNoVmFsdWUgPSAhMSwgXHJcbiAgICAgICAgICAgICEwICE9PSBpbnRlcm5hbCAmJiAoJC5pc1BsYWluT2JqZWN0KGFsaWFzKSA/IG9wdGlvbnMgPSBhbGlhcyA6IChvcHRpb25zID0gb3B0aW9ucyB8fCB7fSkuYWxpYXMgPSBhbGlhcywgXHJcbiAgICAgICAgICAgIHRoaXMub3B0cyA9ICQuZXh0ZW5kKCEwLCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyksIHRoaXMubm9NYXNrc0NhY2hlID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlZmluaXRpb25zICE9PSB1bmRlZmluZWQsIFxyXG4gICAgICAgICAgICB0aGlzLnVzZXJPcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgdGhpcy5pc1JUTCA9IHRoaXMub3B0cy5udW1lcmljSW5wdXQsIHJlc29sdmVBbGlhcyh0aGlzLm9wdHMuYWxpYXMsIG9wdGlvbnMsIHRoaXMub3B0cykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlQWxpYXMoYWxpYXNTdHIsIG9wdGlvbnMsIG9wdHMpIHtcclxuICAgICAgICAgICAgdmFyIGFsaWFzRGVmaW5pdGlvbiA9IElucHV0bWFzay5wcm90b3R5cGUuYWxpYXNlc1thbGlhc1N0cl07XHJcbiAgICAgICAgICAgIHJldHVybiBhbGlhc0RlZmluaXRpb24gPyAoYWxpYXNEZWZpbml0aW9uLmFsaWFzICYmIHJlc29sdmVBbGlhcyhhbGlhc0RlZmluaXRpb24uYWxpYXMsIHVuZGVmaW5lZCwgb3B0cyksIFxyXG4gICAgICAgICAgICAkLmV4dGVuZCghMCwgb3B0cywgYWxpYXNEZWZpbml0aW9uKSwgJC5leHRlbmQoITAsIG9wdHMsIG9wdGlvbnMpLCAhMCkgOiAobnVsbCA9PT0gb3B0cy5tYXNrICYmIChvcHRzLm1hc2sgPSBhbGlhc1N0ciksIFxyXG4gICAgICAgICAgICAhMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFza1NldChvcHRzLCBub2NhY2hlKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWFzayhtYXNrLCBtZXRhZGF0YSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4TWFzayA9ICExO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IG1hc2sgJiYgXCJcIiAhPT0gbWFzayB8fCAoKHJlZ2V4TWFzayA9IG51bGwgIT09IG9wdHMucmVnZXgpID8gbWFzayA9IChtYXNrID0gb3B0cy5yZWdleCkucmVwbGFjZSgvXihcXF4pKC4qKShcXCQpJC8sIFwiJDJcIikgOiAocmVnZXhNYXNrID0gITAsIFxyXG4gICAgICAgICAgICAgICAgbWFzayA9IFwiLipcIikpLCAxID09PSBtYXNrLmxlbmd0aCAmJiAhMSA9PT0gb3B0cy5ncmVlZHkgJiYgMCAhPT0gb3B0cy5yZXBlYXQgJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICBvcHRzLnJlcGVhdCA+IDAgfHwgXCIqXCIgPT09IG9wdHMucmVwZWF0IHx8IFwiK1wiID09PSBvcHRzLnJlcGVhdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXBlYXRTdGFydCA9IFwiKlwiID09PSBvcHRzLnJlcGVhdCA/IDAgOiBcIitcIiA9PT0gb3B0cy5yZXBlYXQgPyAxIDogb3B0cy5yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzayA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBtYXNrICsgb3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLnF1YW50aWZpZXJtYXJrZXIuc3RhcnQgKyByZXBlYXRTdGFydCArIFwiLFwiICsgb3B0cy5yZXBlYXQgKyBvcHRzLnF1YW50aWZpZXJtYXJrZXIuZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tzZXREZWZpbml0aW9uLCBtYXNrZGVmS2V5ID0gcmVnZXhNYXNrID8gXCJyZWdleF9cIiArIG9wdHMucmVnZXggOiBvcHRzLm51bWVyaWNJbnB1dCA/IG1hc2suc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBtYXNrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSA9PT0gdW5kZWZpbmVkIHx8ICEwID09PSBub2NhY2hlID8gKG1hc2tzZXREZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6IG1hc2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuOiBJbnB1dG1hc2sucHJvdG90eXBlLmFuYWx5c2VNYXNrKG1hc2ssIHJlZ2V4TWFzaywgb3B0cyksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIF9idWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0czoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tMZW5ndGg6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgfSwgITAgIT09IG5vY2FjaGUgJiYgKElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSA9IG1hc2tzZXREZWZpbml0aW9uLCBcclxuICAgICAgICAgICAgICAgIG1hc2tzZXREZWZpbml0aW9uID0gJC5leHRlbmQoITAsIHt9LCBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0pKSkgOiBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKCEwLCB7fSwgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldKSwgXHJcbiAgICAgICAgICAgICAgICBtYXNrc2V0RGVmaW5pdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMubWFzaykgJiYgKG9wdHMubWFzayA9IG9wdHMubWFzayhvcHRzKSksICQuaXNBcnJheShvcHRzLm1hc2spKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5tYXNrLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmtlZXBTdGF0aWMgPSBudWxsID09PSBvcHRzLmtlZXBTdGF0aWMgfHwgb3B0cy5rZWVwU3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXNrID0gb3B0cy5ncm91cG1hcmtlci5zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG9wdHMubnVtZXJpY0lucHV0ID8gb3B0cy5tYXNrLnJldmVyc2UoKSA6IG9wdHMubWFzaywgZnVuY3Rpb24obmR4LCBtc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWFzay5sZW5ndGggPiAxICYmIChhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2subWFzayA9PT0gdW5kZWZpbmVkIHx8ICQuaXNGdW5jdGlvbihtc2subWFzaykgPyBhbHRNYXNrICs9IG1zayA6IGFsdE1hc2sgKz0gbXNrLm1hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksIGFsdE1hc2sgKz0gb3B0cy5ncm91cG1hcmtlci5lbmQsIGdlbmVyYXRlTWFzayhhbHRNYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3B0cy5tYXNrID0gb3B0cy5tYXNrLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRzLm1hc2sgJiYgb3B0cy5tYXNrLm1hc2sgIT09IHVuZGVmaW5lZCAmJiAhJC5pc0Z1bmN0aW9uKG9wdHMubWFzay5tYXNrKSA/IGdlbmVyYXRlTWFzayhvcHRzLm1hc2subWFzaywgb3B0cy5tYXNrLCBvcHRzKSA6IGdlbmVyYXRlTWFzayhvcHRzLm1hc2ssIG9wdHMubWFzaywgb3B0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG1hc2tTY29wZShhY3Rpb25PYmosIG1hc2tzZXQsIG9wdHMpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1RlbXBsYXRlKGJhc2VPbklucHV0LCBtaW5pbWFsUG9zLCBpbmNsdWRlTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgbWluaW1hbFBvcyA9IG1pbmltYWxQb3MgfHwgMDtcclxuICAgICAgICAgICAgICAgIHZhciBuZHhJbnRsenIsIHRlc3QsIHRlc3RQb3MsIG1hc2tUZW1wbGF0ZSA9IFtdLCBwb3MgPSAwLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBiYXNlT25JbnB1dCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA/ICh0ZXN0ID0gKHRlc3RQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSkubWF0Y2gsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCBtYXNrVGVtcGxhdGUucHVzaCghMCA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0UG9zLmlucHV0IDogITEgPT09IGluY2x1ZGVNb2RlID8gdGVzdC5uYXRpdmVEZWYgOiBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QpKSkgOiAodGVzdCA9ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSkubWF0Y2gsIFxyXG4gICAgICAgICAgICAgICAgICAgIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCAoITEgPT09IG9wdHMuaml0TWFza2luZyB8fCBwb3MgPCBsdnAgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygb3B0cy5qaXRNYXNraW5nICYmIGlzRmluaXRlKG9wdHMuaml0TWFza2luZykgJiYgb3B0cy5qaXRNYXNraW5nID4gcG9zKSAmJiBtYXNrVGVtcGxhdGUucHVzaCghMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zKys7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbWluaW1hbFBvcyA+IHBvcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiA9PT0gbWFza1RlbXBsYXRlW21hc2tUZW1wbGF0ZS5sZW5ndGggLSAxXSAmJiBtYXNrVGVtcGxhdGUucG9wKCksIGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID0gcG9zICsgMSwgXHJcbiAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1NldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXNrc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc2V0TWFza1NldChzb2Z0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFza3NldCA9IGdldE1hc2tTZXQoKTtcclxuICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyID0gdW5kZWZpbmVkLCAhMCAhPT0gc29mdCAmJiAobWFza3NldC52YWxpZFBvc2l0aW9ucyA9IHt9LCBtYXNrc2V0LnAgPSAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbG9zZXN0VG8sIHN0cmljdCwgdmFsaWRQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSAtMSwgYWZ0ZXIgPSAtMSwgdmFsaWRzID0gdmFsaWRQb3NpdGlvbnMgfHwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VzdFRvID09PSB1bmRlZmluZWQgJiYgKGNsb3Nlc3RUbyA9IC0xKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBvc05keCBpbiB2YWxpZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHNOZHggPSBwYXJzZUludChwb3NOZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCAhMCAhPT0gdmFsaWRzW3BzTmR4XS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHBzTmR4IDw9IGNsb3Nlc3RUbyAmJiAoYmVmb3JlID0gcHNOZHgpLCBcclxuICAgICAgICAgICAgICAgICAgICBwc05keCA+PSBjbG9zZXN0VG8gJiYgKGFmdGVyID0gcHNOZHgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAtMSAhPT0gYmVmb3JlICYmIGNsb3Nlc3RUbyAtIGJlZm9yZSA+IDEgfHwgYWZ0ZXIgPCBjbG9zZXN0VG8gPyBiZWZvcmUgOiBhZnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzdHJpcFZhbGlkUG9zaXRpb25zKHN0YXJ0LCBlbmQsIG5vY2hlY2ssIHN0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGksIHN0YXJ0UG9zID0gc3RhcnQsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBuZWVkc1ZhbGlkYXRpb24gPSAhMTtcclxuICAgICAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzdGFydCwgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnRQb3M7IGktLSkgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldICE9PSB1bmRlZmluZWQgJiYgKCEwICE9PSBub2NoZWNrICYmICghZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIGZ1bmN0aW9uKHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3NNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG51bGwgPT09IHBvc01hdGNoLm1hdGNoLmZuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0sIG5leHRNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG5leHRNYXRjaCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICB9KGkpIHx8ICExID09PSBvcHRzLmNhbkNsZWFyUG9zaXRpb24oZ2V0TWFza1NldCgpLCBpLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBzdHJpY3QsIG9wdHMpKSB8fCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldKTtcclxuICAgICAgICAgICAgICAgIGZvciAocmVzZXRNYXNrU2V0KCEwKSwgaSA9IHN0YXJ0UG9zICsgMTsgaSA8PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpOyApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDtnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc3RhcnRQb3NdICE9PSB1bmRlZmluZWQ7ICkgc3RhcnRQb3MrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHN0YXJ0UG9zICYmIChpID0gc3RhcnRQb3MgKyAxKSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgaXNNYXNrKGkpKSBpKys7IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGdldFRlc3RUZW1wbGF0ZShpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IG5lZWRzVmFsaWRhdGlvbiAmJiBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10gJiYgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5kZWYgPyAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3N0YXJ0UG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tzdGFydFBvc10uaW5wdXQgPSB0LmlucHV0LCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrKSA6IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHN0YXJ0UG9zLCB0Lm1hdGNoLmRlZikgPyAhMSAhPT0gaXNWYWxpZChzdGFydFBvcywgdC5pbnB1dCB8fCBnZXRQbGFjZWhvbGRlcihpKSwgITApICYmIChkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrLCBuZWVkc1ZhbGlkYXRpb24gPSAhMCkgOiBpc01hc2soaSkgfHwgKGkrKywgc3RhcnRQb3MtLSksIHN0YXJ0UG9zKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMsIGd1ZXNzTmV4dEJlc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHRlc3RQb3MsIHRlc3RQb3NpdGlvbnMgPSB0ZXN0cywgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgbHZUZXN0ID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2x2cF0gfHwgZ2V0VGVzdHMoMClbMF0sIGx2VGVzdEFsdEFyciA9IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSA6IFtdLCBuZHggPSAwOyBuZHggPCB0ZXN0UG9zaXRpb25zLmxlbmd0aCAmJiAoISgodGVzdFBvcyA9IHRlc3RQb3NpdGlvbnNbbmR4XSkubWF0Y2ggJiYgKG9wdHMuZ3JlZWR5ICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCAoITEgPT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxpdHkgfHwgITEgPT09IHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIpICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKGx2VGVzdC5hbHRlcm5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdGVzdFBvcy5hbHRlcm5hdGlvbiB8fCB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkICYmIGNoZWNrQWx0ZXJuYXRpb25NYXRjaCh0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgbHZUZXN0QWx0QXJyKSkpIHx8ICEwID09PSBndWVzc05leHRCZXN0ICYmIChudWxsICE9PSB0ZXN0UG9zLm1hdGNoLmZuIHx8IC9bMC05YS1iQS1aXS8udGVzdCh0ZXN0UG9zLm1hdGNoLmRlZikpKTsgbmR4KyspIDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0UG9zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSB8fCBkZXRlcm1pbmVUZXN0VGVtcGxhdGUoZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IG5keEludGx6ciwgdHN0UHMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUZXN0KHBvcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gOiBnZXRUZXN0cyhwb3MpWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvcywgZGVmKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2YWxpZCA9ICExLCB0ZXN0cyA9IGdldFRlc3RzKHBvcyksIHRuZHggPSAwOyB0bmR4IDwgdGVzdHMubGVuZ3RoOyB0bmR4KyspIGlmICh0ZXN0c1t0bmR4XS5tYXRjaCAmJiB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IGRlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW4sIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hdGNoKG1hdGNoLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdE1hdGNoID0gMCA9PT0gJC5pbkFycmF5KGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2ggfHwgJC5lYWNoKHRva2VuR3JvdXAubWF0Y2hlcywgZnVuY3Rpb24obmR4LCBtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbWF0Y2guaXNRdWFudGlmaWVyICYmIChmaXJzdE1hdGNoID0gaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXNbbmR4IC0gMV0pKSkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZpcnN0TWF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZU5keEluaXRpYWxpemVyKHBvcywgYWx0ZXJuYXRlTmR4LCB0YXJnZXRBbHRlcm5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3RNYXRjaCwgaW5kZXhQb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdICYmIHRhcmdldEFsdGVybmF0aW9uICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdKSBmb3IgKHZhciB2cEFsdGVybmF0aW9uID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdLmxvY2F0b3IsIHRwQWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5sb2NhdG9yLCBpID0gMDsgaSA8IHRhcmdldEFsdGVybmF0aW9uOyBpKyspIGlmICh2cEFsdGVybmF0aW9uW2ldICE9PSB0cEFsdGVybmF0aW9uW2ldKSByZXR1cm4gdnBBbHRlcm5hdGlvbi5zbGljZSh0YXJnZXRBbHRlcm5hdGlvbiArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSkgJiYgJC5lYWNoKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdIHx8IFsgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gXSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHRhcmdldEFsdGVybmF0aW9uIDogbG1udC5hbHRlcm5hdGlvbiwgbmR4UG9zID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLmluZGV4T2YoYWx0ZXJuYXRlTmR4KSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleFBvcyA9PT0gdW5kZWZpbmVkIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJiAtMSAhPT0gbmR4UG9zICYmIChiZXN0TWF0Y2ggPSBsbW50LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxvY2F0b3Iuc2xpY2UoKHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyB0YXJnZXRBbHRlcm5hdGlvbiA6IGJlc3RNYXRjaC5hbHRlcm5hdGlvbikgKyAxKSA6IHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID4gMWU0KSB0aHJvdyBcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiICsgZ2V0TWFza1NldCgpLm1hc2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgbWF0Y2gubWF0Y2hlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWF0Y2hlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGxvb3BOZHgucmV2ZXJzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pc0dyb3VwICYmIHF1YW50aWZpZXJSZWN1cnNlICE9PSBtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IGhhbmRsZU1hdGNoKG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpICsgMV0sIGxvb3BOZHgpKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzT3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxUb2tlbiA9IG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IHJlc29sdmVUZXN0RnJvbVRva2VuKG1hdGNoLCBuZHhJbml0aWFsaXplciwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgIWlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgb3B0aW9uYWxUb2tlbikpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNBbHRlcm5hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbHRNYXRjaGVzLCBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLCBtYWx0ZXJuYXRlTWF0Y2hlcyA9IFtdLCBjdXJyZW50TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoKSwgbG9vcE5keENudCA9IGxvb3BOZHgubGVuZ3RoLCBhbHRJbmRleCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBhbHRJbmRleCB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1uZHgsIGN1cnJlbnRQb3MgPSB0ZXN0UG9zLCBuZHhJbml0aWFsaXplckNsb25lID0gbmR4SW5pdGlhbGl6ZXIuc2xpY2UoKSwgYWx0SW5kZXhBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4KSBhbHRJbmRleEFyciA9IGFsdEluZGV4LnNwbGl0KFwiLFwiKTsgZWxzZSBmb3IgKGFtbmR4ID0gMDsgYW1uZHggPCBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzLmxlbmd0aDsgYW1uZHgrKykgYWx0SW5kZXhBcnIucHVzaChhbW5keCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCA9IDA7IG5keCA8IGFsdEluZGV4QXJyLmxlbmd0aDsgbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbW5keCA9IHBhcnNlSW50KGFsdEluZGV4QXJyW25keF0pLCBtYXRjaGVzID0gW10sIG5keEluaXRpYWxpemVyID0gcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fCBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IChtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYW1uZHhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FtbmR4XSwgWyBhbW5keCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpIHx8IG1hdGNoKSAmJiBtYXRjaCAhPT0gdW5kZWZpbmVkICYmIGFsdEluZGV4QXJyW2FsdEluZGV4QXJyLmxlbmd0aCAtIDFdIDwgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnRuZHggPSAkLmluQXJyYXkobWF0Y2gsIG1hc2tUb2tlbi5tYXRjaGVzKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoID4gbnRuZHggJiYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbbnRuZHhdLCBbIG50bmR4IF0uY29uY2F0KGxvb3BOZHguc2xpY2UoMSwgbG9vcE5keC5sZW5ndGgpKSwgcXVhbnRpZmllclJlY3Vyc2UpKSAmJiAoYWx0SW5kZXhBcnIucHVzaChudG5keC50b1N0cmluZygpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG1hdGNoZXMsIGZ1bmN0aW9uKG5keCwgbG1udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmFsdGVybmF0aW9uID0gbG9vcE5keC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCB0ZXN0UG9zID0gY3VycmVudFBvcywgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MSA9IDA7IG5keDEgPCBtYWx0TWF0Y2hlcy5sZW5ndGg7IG5keDErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaCA9IG1hbHRNYXRjaGVzW25keDFdLCBkcm9wTWF0Y2ggPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9IGFsdE1hdGNoLmFsdGVybmF0aW9uIHx8IGxvb3BOZHhDbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MiA9IDA7IG5keDIgPCBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGg7IG5keDIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0TWF0Y2gyID0gbWFsdGVybmF0ZU1hdGNoZXNbbmR4Ml07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBhbHRJbmRleCB8fCAtMSAhPT0gJC5pbkFycmF5KGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIGFsdEluZGV4QXJyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXRjaC5uYXRpdmVEZWYgPT09IHRhcmdldC5tYXRjaC5uYXRpdmVEZWYgfHwgc291cmNlLm1hdGNoLmRlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZiB8fCBzb3VyY2UubWF0Y2gubmF0aXZlRGVmID09PSB0YXJnZXQubWF0Y2guZGVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9PT0gYWx0TWF0Y2gyLmFsdGVybmF0aW9uICYmIC0xID09PSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSkgJiYgKGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2gyLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24pLCBhbHRNYXRjaC5tYXRjaC5uYXRpdmVEZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYgJiYgKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dID0gYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuc3BsaWNlKG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSwgMSwgYWx0TWF0Y2gpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRNYXRjaC5tYXRjaC5kZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWF0Y2ggPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYsIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSB8fCBmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcIiksIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID09PSBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hIHx8IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBhbHRNYXRjaC5uYS5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSA9IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSArIFwiLFwiICsgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnNwbGljZShtYWx0ZXJuYXRlTWF0Y2hlcy5pbmRleE9mKGFsdE1hdGNoMiksIDAsIGFsdE1hdGNoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoIHx8IG1hbHRlcm5hdGVNYXRjaGVzLnB1c2goYWx0TWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4ICYmIChtYWx0ZXJuYXRlTWF0Y2hlcyA9ICQubWFwKG1hbHRlcm5hdGVNYXRjaGVzLCBmdW5jdGlvbihsbW50LCBuZHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuZHgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gbG1udC5hbHRlcm5hdGlvbiwgYWx0TG9jQXJyID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gdW5kZWZpbmVkLCBsbW50LmFsdGVybmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGFsbmR4ID0gMDsgYWxuZHggPCBhbHRMb2NBcnIubGVuZ3RoOyBhbG5keCsrKSAtMSAhPT0gJC5pbkFycmF5KGFsdExvY0FyclthbG5keF0sIGFsdEluZGV4QXJyKSAmJiAobG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gXCIsXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gYWx0TG9jQXJyW2FsbmR4XSkgOiBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gcGFyc2VJbnQoYWx0TG9jQXJyW2FsbmR4XSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQuYWx0ZXJuYXRpb24gPSBhbHRlcm5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGxtbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbWF0Y2hlcyA9IGN1cnJlbnRNYXRjaGVzLmNvbmNhdChtYWx0ZXJuYXRlTWF0Y2hlcyksIHRlc3RQb3MgPSBwb3MsIGluc2VydFN0b3AgPSBtYXRjaGVzLmxlbmd0aCA+IDAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCA+IDAsIG5keEluaXRpYWxpemVyID0gbmR4SW5pdGlhbGl6ZXJDbG9uZS5zbGljZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYWx0SW5kZXhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSwgWyBhbHRJbmRleCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc1F1YW50aWZpZXIgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpIC0gMV0pIGZvciAodmFyIHF0ID0gbWF0Y2gsIHFuZHggPSBuZHhJbml0aWFsaXplci5sZW5ndGggPiAwID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IDA7IHFuZHggPCAoaXNOYU4ocXQucXVhbnRpZmllci5tYXgpID8gcW5keCArIDEgOiBxdC5xdWFudGlmaWVyLm1heCkgJiYgdGVzdFBvcyA8PSBwb3M7IHFuZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbkdyb3VwID0gbWFza1Rva2VuLm1hdGNoZXNbJC5pbkFycmF5KHF0LCBtYXNrVG9rZW4ubWF0Y2hlcykgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSBoYW5kbGVNYXRjaCh0b2tlbkdyb3VwLCBbIHFuZHggXS5jb25jYXQobG9vcE5keCksIHRva2VuR3JvdXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+IHF0LnF1YW50aWZpZXIubWluIC0gMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxbmR4ID4gcXQucXVhbnRpZmllci5taW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWF0Y2gsIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRlc3RQb3MrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdG5keCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogMDsgdG5keCA8IG1hc2tUb2tlbi5tYXRjaGVzLmxlbmd0aDsgdG5keCsrKSBpZiAoITAgIT09IG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLmlzUXVhbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoYW5kbGVNYXRjaChtYXNrVG9rZW4ubWF0Y2hlc1t0bmR4XSwgWyB0bmR4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiB0ZXN0UG9zID09PSBwb3MpIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpbHRlclRlc3RzKHRlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMua2VlcFN0YXRpYyAmJiBwb3MgPiAwICYmIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApICYmICEwICE9PSB0ZXN0c1swXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdHNbMF0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIG51bGwgPT09IHRlc3RzWzBdLm1hdGNoLmZuICYmICEvWzAtOWEtYkEtWl0vLnRlc3QodGVzdHNbMF0ubWF0Y2guZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdID09PSB1bmRlZmluZWQpIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXS5hbHRlcm5hdGlvbiA9PT0gdGVzdHNbMF0uYWx0ZXJuYXRpb24pIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSkgcmV0dXJuIFsgZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzKSBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbGF0ZXN0TWF0Y2gsIG1hc2tUb2tlbnMgPSBnZXRNYXNrU2V0KCkubWFza1Rva2VuLCB0ZXN0UG9zID0gbmR4SW50bHpyID8gdHN0UHMgOiAwLCBuZHhJbml0aWFsaXplciA9IG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogWyAwIF0sIG1hdGNoZXMgPSBbXSwgaW5zZXJ0U3RvcCA9ICExLCBjYWNoZURlcGVuZGVuY3kgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuam9pbihcIlwiKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmR4SW50bHpyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdCwgcHJldmlvdXNQb3MgPSBwb3MgLSAxOyAodGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twcmV2aW91c1Bvc10gfHwgZ2V0TWFza1NldCgpLnRlc3RzW3ByZXZpb3VzUG9zXSkgPT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xOyApIHByZXZpb3VzUG9zLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xICYmIChuZHhJbml0aWFsaXplciA9IGZ1bmN0aW9uKHRlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNBcnJheSh0ZXN0cykgfHwgKHRlc3RzID0gWyB0ZXN0cyBdKSwgdGVzdHMubGVuZ3RoID4gMCAmJiAodGVzdHNbMF0uYWx0ZXJuYXRpb24gPT09IHVuZGVmaW5lZCA/IDAgPT09IChsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzLnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSkubGVuZ3RoICYmIChsb2NhdG9yID0gdGVzdHNbMF0ubG9jYXRvci5zbGljZSgpKSA6ICQuZWFjaCh0ZXN0cywgZnVuY3Rpb24obmR4LCB0c3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gdHN0LmRlZikgaWYgKDAgPT09IGxvY2F0b3IubGVuZ3RoKSBsb2NhdG9yID0gdHN0LmxvY2F0b3Iuc2xpY2UoKTsgZWxzZSBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0b3IubGVuZ3RoOyBpKyspIHRzdC5sb2NhdG9yW2ldICYmIC0xID09PSBsb2NhdG9yW2ldLnRvU3RyaW5nKCkuaW5kZXhPZih0c3QubG9jYXRvcltpXSkgJiYgKGxvY2F0b3JbaV0gKz0gXCIsXCIgKyB0c3QubG9jYXRvcltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksIGxvY2F0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0odGVzdCksIGNhY2hlRGVwZW5kZW5jeSA9IG5keEluaXRpYWxpemVyLmpvaW4oXCJcIiksIHRlc3RQb3MgPSBwcmV2aW91c1Bvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSAmJiBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5jZCA9PT0gY2FjaGVEZXBlbmRlbmN5KSByZXR1cm4gZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG10bmR4ID0gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKTsgbXRuZHggPCBtYXNrVG9rZW5zLmxlbmd0aCAmJiAhKHJlc29sdmVUZXN0RnJvbVRva2VuKG1hc2tUb2tlbnNbbXRuZHhdLCBuZHhJbml0aWFsaXplciwgWyBtdG5keCBdKSAmJiB0ZXN0UG9zID09PSBwb3MgfHwgdGVzdFBvcyA+IHBvcyk7IG10bmR4KyspIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbWF0Y2hlcy5sZW5ndGggfHwgaW5zZXJ0U3RvcCkgJiYgbWF0Y2hlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWY6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdG9yOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5XHJcbiAgICAgICAgICAgICAgICB9KSwgbmR4SW50bHpyICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gPyBmaWx0ZXJUZXN0cygkLmV4dGVuZCghMCwgW10sIG1hdGNoZXMpKSA6IChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSA9ICQuZXh0ZW5kKCEwLCBbXSwgbWF0Y2hlcyksIFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkuX2J1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuX2J1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZSghMSwgMSksIFxyXG4gICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLmJ1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1NldCgpLl9idWZmZXIuc2xpY2UoKSkpLCBcclxuICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5fYnVmZmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlcihub0NhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLmJ1ZmZlciAhPT0gdW5kZWZpbmVkICYmICEwICE9PSBub0NhY2hlIHx8IChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1RlbXBsYXRlKCEwLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCAhMCkpLCBcclxuICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5idWZmZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaEZyb21CdWZmZXIoc3RhcnQsIGVuZCwgYnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSwgcDtcclxuICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc3RhcnQpIHJlc2V0TWFza1NldCgpLCBzdGFydCA9IDAsIGVuZCA9IGJ1ZmZlci5sZW5ndGg7IGVsc2UgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIGZvciAocCA9IHN0YXJ0LCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgaWYgKHJlc2V0TWFza1NldCghMCksIGJ1ZmZlcltpXSAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbFJlc3VsdCA9IGlzVmFsaWQocCwgYnVmZmVyW2ldLCAhMCwgITApO1xyXG4gICAgICAgICAgICAgICAgICAgICExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIHAgPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IHZhbFJlc3VsdC5wb3MgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wdHMuY2FzaW5nIHx8IHRlc3QuY2FzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjYXNlIFwibG93ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRpdGxlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc0JlZm9yZSA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtID0gMCA9PT0gcG9zIHx8IHBvc0JlZm9yZSAmJiBwb3NCZWZvcmUuaW5wdXQgPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoSW5wdXRtYXNrLmtleUNvZGUuU1BBQ0UpID8gZWxlbS50b1VwcGVyQ2FzZSgpIDogZWxlbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuY2FzaW5nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBlbGVtID0gb3B0cy5jYXNpbmcuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tBbHRlcm5hdGlvbk1hdGNoKGFsdEFycjEsIGFsdEFycjIsIG5hKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuYU5keCwgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksIGlzTWF0Y2ggPSAhMSwgbmFBcnIgPSBuYSAhPT0gdW5kZWZpbmVkID8gbmEuc3BsaXQoXCIsXCIpIDogW10sIGkgPSAwOyBpIDwgbmFBcnIubGVuZ3RoOyBpKyspIC0xICE9PSAobmFOZHggPSBhbHRBcnIxLmluZGV4T2YobmFBcnJbaV0pKSAmJiBhbHRBcnIxLnNwbGljZShuYU5keCwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhbG5keCA9IDA7IGFsbmR4IDwgYWx0QXJyMS5sZW5ndGg7IGFsbmR4KyspIGlmICgtMSAhPT0gJC5pbkFycmF5KGFsdEFycjFbYWxuZHhdLCBhbHRBcnJDKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpc01hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQocG9zLCBjLCBzdHJpY3QsIGZyb21TZXRWYWxpZCwgZnJvbUFsdGVybmF0ZSwgdmFsaWRhdGVPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc1NlbGVjdGlvbihwb3NPYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gaXNSVEwgPyBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID4gMSB8fCBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID09IDEgOiBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID4gMSB8fCBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiAwID09PSBwb3NPYmouYmVnaW4gJiYgcG9zT2JqLmVuZCA9PT0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPyBcImZ1bGxcIiA6IHNlbGVjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF9pc1ZhbGlkKHBvc2l0aW9uLCBjLCBzdHJpY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcnNsdCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmVhY2goZ2V0VGVzdHMocG9zaXRpb24pLCBmdW5jdGlvbihuZHgsIHRzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0ID0gdHN0Lm1hdGNoLCBsb29wZW5kID0gYyA/IDEgOiAwLCBjaHJzID0gXCJcIiwgaSA9IHRlc3QuY2FyZGluYWxpdHk7IGkgPiBsb29wZW5kOyBpLS0pIGNocnMgKz0gZ2V0QnVmZmVyRWxlbWVudChwb3NpdGlvbiAtIChpIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiAoY2hycyArPSBjKSwgZ2V0QnVmZmVyKCEwKSwgITEgIT09IChyc2x0ID0gbnVsbCAhPSB0ZXN0LmZuID8gdGVzdC5mbi50ZXN0KGNocnMsIGdldE1hc2tTZXQoKSwgcG9zaXRpb24sIHN0cmljdCwgb3B0cywgaXNTZWxlY3Rpb24ocG9zKSkgOiAoYyA9PT0gdGVzdC5kZWYgfHwgYyA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSAmJiBcIlwiICE9PSB0ZXN0LmRlZiAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjOiBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSByc2x0LmMgIT09IHVuZGVmaW5lZCA/IHJzbHQuYyA6IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbSA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIG51bGwgPT09IHRlc3QuZm4gPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmIDogZWxlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRQb3MgPSBwb3NpdGlvbiwgcG9zc2libGVNb2RpZmllZEJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJzbHQucmVtb3ZlICE9PSB1bmRlZmluZWQgJiYgKCQuaXNBcnJheShyc2x0LnJlbW92ZSkgfHwgKHJzbHQucmVtb3ZlID0gWyByc2x0LnJlbW92ZSBdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocnNsdC5yZW1vdmUuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMobG1udCwgbG1udCArIDEsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5pbnNlcnQgIT09IHVuZGVmaW5lZCAmJiAoJC5pc0FycmF5KHJzbHQuaW5zZXJ0KSB8fCAocnNsdC5pbnNlcnQgPSBbIHJzbHQuaW5zZXJ0IF0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyc2x0Lmluc2VydC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChsbW50LnBvcywgbG1udC5jLCAhMCwgZnJvbVNldFZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3NpYmxlTW9kaWZpZWRCdWZmZXIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByc2x0LnBvcyA9PT0gdW5kZWZpbmVkICYmIHJzbHQuYyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gcnNsdC5wb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbGlkYXRlZFBvcyA9IHJzbHQucG9zICE9PSB1bmRlZmluZWQgPyByc2x0LnBvcyA6IHBvc2l0aW9uKSAhPT0gcG9zaXRpb24pIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwLCBmcm9tU2V0VmFsaWQpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEwICE9PSByc2x0ICYmIHJzbHQucG9zICE9PSB1bmRlZmluZWQgJiYgcnNsdC5wb3MgIT09IHBvc2l0aW9uICYmICh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcihwb3NpdGlvbiwgdmFsaWRhdGVkUG9zLCBnZXRCdWZmZXIoKS5zbGljZSgpKSwgdmFsaWRhdGVkUG9zICE9PSBwb3NpdGlvbikpIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEwID09PSByc2x0IHx8IHJzbHQucG9zICE9PSB1bmRlZmluZWQgfHwgcnNsdC5jICE9PSB1bmRlZmluZWQpICYmIChuZHggPiAwICYmIHJlc2V0TWFza1NldCghMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRQb3NpdGlvbih2YWxpZGF0ZWRQb3MsICQuZXh0ZW5kKHt9LCB0c3QsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2FzaW5nKGVsZW0sIHRlc3QsIHZhbGlkYXRlZFBvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmcm9tU2V0VmFsaWQsIGlzU2VsZWN0aW9uKHBvcykpIHx8IChyc2x0ID0gITEpLCAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSwgcnNsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbGlkUG9zaXRpb24ocG9zLCB2YWxpZFRlc3QsIGZyb21TZXRWYWxpZCwgaXNTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb24gfHwgb3B0cy5pbnNlcnRNb2RlICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgZnJvbVNldFZhbGlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcG9zOyBpIDw9IGx2cDsgaSsrKSBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGosIHZhbGlkID0gITAsIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucywgbmVlZHNWYWxpZGF0aW9uID0gITEsIGluaXRpYWxMZW5ndGggPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gaiA9IHBvczsgaSA8PSBsdnA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwb3NpdGlvbnNDbG9uZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICE9PSB1bmRlZmluZWQpIGZvciAodmFyIHBvc01hdGNoID0gajsgcG9zTWF0Y2ggPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobnVsbCA9PT0gdC5tYXRjaC5mbiAmJiB2cHNbaV0gJiYgKCEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxpdHkpIHx8IG51bGwgIT0gdC5tYXRjaC5mbik7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCsrLCAhMSA9PT0gbmVlZHNWYWxpZGF0aW9uICYmIHBvc2l0aW9uc0Nsb25lW3Bvc01hdGNoXSAmJiBwb3NpdGlvbnNDbG9uZVtwb3NNYXRjaF0ubWF0Y2guZGVmID09PSB0Lm1hdGNoLmRlZikgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbcG9zTWF0Y2hdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXS5pbnB1dCA9IHQuaW5wdXQsIGZpbGxNaXNzaW5nTm9uTWFzayhwb3NNYXRjaCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBwb3NNYXRjaCwgdmFsaWQgPSAhMDsgZWxzZSBpZiAocG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24ocG9zTWF0Y2gsIHQubWF0Y2guZGVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXNWYWxpZChwb3NNYXRjaCwgdC5pbnB1dCwgITAsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMSAhPT0gcmVzdWx0LCBqID0gcmVzdWx0LmNhcmV0IHx8IHJlc3VsdC5pbnNlcnQgPyBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIDogcG9zTWF0Y2gsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkc1ZhbGlkYXRpb24gPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEodmFsaWQgPSAhMCA9PT0gdC5nZW5lcmF0ZWRJbnB1dCkgJiYgcG9zTWF0Y2ggPj0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggLSAxKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPCBpbml0aWFsTGVuZ3RoICYmIChnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA9IGluaXRpYWxMZW5ndGgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCAhMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHZhbGlkVGVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0TWFza1NldCghMCksICEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZmlsbE1pc3NpbmdOb25NYXNrKG1hc2tQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwbmR4ID0gbWFza1BvcyAtIDE7IHBuZHggPiAtMSAmJiAhZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BuZHhdOyBwbmR4LS0pIDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdFRlbXBsYXRlLCB0ZXN0c0Zyb21Qb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChwbmR4Kys7IHBuZHggPCBtYXNrUG9zOyBwbmR4KyspIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twbmR4XSA9PT0gdW5kZWZpbmVkICYmICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IG9wdHMuaml0TWFza2luZyA+IHBuZHgpICYmIChcIlwiID09PSAodGVzdHNGcm9tUG9zID0gZ2V0VGVzdHMocG5keCwgZ2V0VGVzdFRlbXBsYXRlKHBuZHggLSAxKS5sb2NhdG9yLCBwbmR4IC0gMSkuc2xpY2UoKSlbdGVzdHNGcm9tUG9zLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiB0ZXN0c0Zyb21Qb3MucG9wKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICh0ZXN0VGVtcGxhdGUgPSBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHNGcm9tUG9zKSkgJiYgKHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgPT09IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgfHwgIWlzTWFzayhwbmR4LCAhMCkgfHwgJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgZ2V0QnVmZmVyKCkpIDwgcG5keCAmJiB0ZXN0VGVtcGxhdGUubWF0Y2guZm4gJiYgdGVzdFRlbXBsYXRlLm1hdGNoLmZuLnRlc3QoZ2V0UGxhY2Vob2xkZXIocG5keCksIGdldE1hc2tTZXQoKSwgcG5keCwgITEsIG9wdHMpKSAmJiAhMSAhPT0gKHJlc3VsdCA9IF9pc1ZhbGlkKHBuZHgsIGdldFBsYWNlaG9sZGVyKHBuZHgsIHRlc3RUZW1wbGF0ZS5tYXRjaCwgITApIHx8IChudWxsID09IHRlc3RUZW1wbGF0ZS5tYXRjaC5mbiA/IHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgOiBcIlwiICE9PSBnZXRQbGFjZWhvbGRlcihwbmR4KSA/IGdldFBsYWNlaG9sZGVyKHBuZHgpIDogZ2V0QnVmZmVyKClbcG5keF0pLCAhMCkpICYmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvcyB8fCBwbmR4XS5nZW5lcmF0ZWRJbnB1dCA9ICEwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJpY3QgPSAhMCA9PT0gc3RyaWN0O1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tQb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCAmJiAobWFza1BvcyA9IGlzUlRMICYmICFpc1NlbGVjdGlvbihwb3MpID8gcG9zLmVuZCA6IHBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gITAsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLnByZVZhbGlkYXRpb24pICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21TZXRWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5ICYmIChyZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24oZ2V0QnVmZmVyKCksIG1hc2tQb3MsIGMsIGlzU2VsZWN0aW9uKHBvcyksIG9wdHMpKSwgXHJcbiAgICAgICAgICAgICAgICAhMCA9PT0gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGxNaXNzaW5nTm9uTWFzayhtYXNrUG9zKSwgaXNTZWxlY3Rpb24ocG9zKSAmJiAoaGFuZGxlUmVtb3ZlKHVuZGVmaW5lZCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MsICEwLCAhMCksIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tQb3MgPSBnZXRNYXNrU2V0KCkucCksIG1hc2tQb3MgPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbWFza1BvcyA8IG1heExlbmd0aCkgJiYgKHJlc3VsdCA9IF9pc1ZhbGlkKG1hc2tQb3MsIGMsIHN0cmljdCksIFxyXG4gICAgICAgICAgICAgICAgICAgICghc3RyaWN0IHx8ICEwID09PSBmcm9tU2V0VmFsaWQpICYmICExID09PSByZXN1bHQgJiYgITAgIT09IHZhbGlkYXRlT25seSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3NWYWxpZCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1ttYXNrUG9zXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UG9zVmFsaWQgfHwgbnVsbCAhPT0gY3VycmVudFBvc1ZhbGlkLm1hdGNoLmZuIHx8IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5kZWYgIT09IGMgJiYgYyAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG9wdHMuaW5zZXJ0TW9kZSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc2Vla05leHQobWFza1BvcyldID09PSB1bmRlZmluZWQpICYmICFpc01hc2sobWFza1BvcywgITApKSBmb3IgKHZhciBuUG9zID0gbWFza1BvcyArIDEsIHNuUG9zID0gc2Vla05leHQobWFza1Bvcyk7IG5Qb3MgPD0gc25Qb3M7IG5Qb3MrKykgaWYgKCExICE9PSAocmVzdWx0ID0gX2lzVmFsaWQoblBvcywgYywgc3RyaWN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24ob3JpZ2luYWxQb3MsIG5ld1Bvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdnAgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbmV3UG9zXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZwKSBmb3IgKHZhciB0YXJnZXRMb2NhdG9yID0gdnAubG9jYXRvciwgdGxsID0gdGFyZ2V0TG9jYXRvci5sZW5ndGgsIHBzID0gb3JpZ2luYWxQb3M7IHBzIDwgbmV3UG9zOyBwcysrKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BzXSA9PT0gdW5kZWZpbmVkICYmICFpc01hc2socHMsICEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RzID0gZ2V0VGVzdHMocHMpLnNsaWNlKCksIGJlc3RNYXRjaCA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cywgITApLCBlcXVhbGl0eSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIHRlc3RzLnBvcCgpLCAkLmVhY2godGVzdHMsIGZ1bmN0aW9uKG5keCwgdHN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHN0LmxvY2F0b3JbaV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRzdC5sb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0YXJnZXRMb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0c3QubmEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QUkgPSB0YXJnZXRMb2NhdG9yW2ldLCBiZXN0TWF0Y2hBSSA9IGJlc3RNYXRjaC5sb2NhdG9yW2ldLCB0c3RBSSA9IHRzdC5sb2NhdG9yW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QUkgLSBiZXN0TWF0Y2hBSSA+IE1hdGguYWJzKHRhcmdldEFJIC0gdHN0QUkpICYmIChiZXN0TWF0Y2ggPSB0c3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPCBpICYmIChlcXVhbGl0eSA9IGksIGJlc3RNYXRjaCA9IHRzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIChiZXN0TWF0Y2ggPSAkLmV4dGVuZCh7fSwgYmVzdE1hdGNoLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGdldFBsYWNlaG9sZGVyKHBzLCBiZXN0TWF0Y2gubWF0Y2gsICEwKSB8fCBiZXN0TWF0Y2gubWF0Y2guZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuZ2VuZXJhdGVkSW5wdXQgPSAhMCwgc2V0VmFsaWRQb3NpdGlvbihwcywgYmVzdE1hdGNoLCAhMCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tuZXdQb3NdID0gdW5kZWZpbmVkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkKG5ld1BvcywgdnAuaW5wdXQsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obWFza1BvcywgcmVzdWx0LnBvcyAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LnBvcyA6IG5Qb3MpLCBtYXNrUG9zID0gblBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBzZWVrTmV4dChtYXNrUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAhMSA9PT0gcmVzdWx0ICYmIG9wdHMua2VlcFN0YXRpYyAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tQWx0ZXJuYXRlICYmIChyZXN1bHQgPSBmdW5jdGlvbihwb3MsIGMsIHN0cmljdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEFsdCwgYWx0ZXJuYXRpb24sIGFsdFBvcywgcHJldkFsdFBvcywgaSwgdmFsaWRQb3MsIGFsdE5keHMsIGRlY2lzaW9uUG9zLCB2YWxpZFBzQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyksIGlzVmFsaWRSc2x0ID0gITEsIGxBbHRQb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByZXZBbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbEFsdFBvc107IGxBbHRQb3MgPj0gMDsgbEFsdFBvcy0tKSBpZiAoKGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsQWx0UG9zXSkgJiYgYWx0UG9zLmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID0gbEFsdFBvcywgYWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0uYWx0ZXJuYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0pIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNpc2lvblRha2VyID0gcHJldkFsdFBvcy5sb2NhdG9yW3ByZXZBbHRQb3MuYWx0ZXJuYXRpb24gfHwgYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgPyBwcmV2QWx0UG9zLmxvY2F0b3JbcHJldkFsdFBvcy5hbHRlcm5hdGlvbiB8fCBhbHRlcm5hdGlvbl0gOiBhbHROZHhzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25UYWtlci5sZW5ndGggPiAwICYmIChkZWNpc2lvblRha2VyID0gZGVjaXNpb25UYWtlci5zcGxpdChcIixcIilbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmlsaXR5UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSwgcHJldlBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvcyAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGdldFRlc3RzKGRlY2lzaW9uUG9zLCBwcmV2UG9zID8gcHJldlBvcy5sb2NhdG9yIDogdW5kZWZpbmVkLCBkZWNpc2lvblBvcyAtIDEpLCBmdW5jdGlvbihuZHgsIHRlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHROZHhzID0gdGVzdC5sb2NhdG9yW2FsdGVybmF0aW9uXSA/IHRlc3QubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIikgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IGFsdE5keHMubGVuZ3RoOyBtbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkSW5wdXRzID0gW10sIHN0YXRpY0lucHV0c0JlZm9yZVBvcyA9IDAsIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSA9IDAsIHZlcmlmeVZhbGlkSW5wdXQgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2lzaW9uVGFrZXIgPCBhbHROZHhzW21uZHhdICYmICh0ZXN0Lm5hID09PSB1bmRlZmluZWQgfHwgLTEgPT09ICQuaW5BcnJheShhbHROZHhzW21uZHhdLCB0ZXN0Lm5hLnNwbGl0KFwiLFwiKSkgfHwgLTEgPT09ICQuaW5BcnJheShkZWNpc2lvblRha2VyLnRvU3RyaW5nKCksIGFsdE5keHMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2liaWxpdGllcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHBhcnNlSW50KGFsdE5keHNbbW5keF0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT0gdGVzdC5tYXRjaC5mbiA/IChwb3NzaWJpbGl0eVBvcy5pbnB1dCAhPT0gdGVzdC5tYXRjaC5kZWYgJiYgKHZlcmlmeVZhbGlkSW5wdXQgPSAhMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gcG9zc2liaWxpdHlQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgdmFsaWRJbnB1dHMucHVzaChwb3NzaWJpbGl0eVBvcy5pbnB1dCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmdlbmVyYXRlZElucHV0ID0gIS9bMC05YS1iQS1aXS8udGVzdCh0ZXN0Lm1hdGNoLmRlZiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5pbnB1dCA9IHRlc3QubWF0Y2guZGVmKSA6IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10uaW5wdXQgPSBwb3NzaWJpbGl0eVBvcy5pbnB1dCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZGVjaXNpb25Qb3MgKyAxOyBpIDwgZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCkgKyAxOyBpKyspICh2YWxpZFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXSkgJiYgITAgIT09IHZhbGlkUG9zLmdlbmVyYXRlZElucHV0ICYmIC9bMC05YS1iQS1aXS8udGVzdCh2YWxpZFBvcy5pbnB1dCkgPyB2YWxpZElucHV0cy5wdXNoKHZhbGlkUG9zLmlucHV0KSA6IGkgPCBwb3MgJiYgc3RhdGljSW5wdXRzQmVmb3JlUG9zKyssIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmVyaWZ5VmFsaWRJbnB1dCAmJiB2YWxpZElucHV0c1swXSA9PT0gdGVzdC5tYXRjaC5kZWYgJiYgdmFsaWRJbnB1dHMuc2hpZnQoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCBpc1ZhbGlkUnNsdCA9ICEwOyB2YWxpZElucHV0cy5sZW5ndGggPiAwOyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB2YWxpZElucHV0cy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dCAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmICEoaXNWYWxpZFJzbHQgPSBpc1ZhbGlkKGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApICsgMSwgaW5wdXQsICExLCBmcm9tU2V0VmFsaWQsICEwKSkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRSc2x0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5sb2NhdG9yID0gcG9zc2liaWxpdGllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0THZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24ocG9zKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gZGVjaXNpb25Qb3MgKyAxOyBpIDwgZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSArIDE7IGkrKykgKCh2YWxpZFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXSkgPT09IHVuZGVmaW5lZCB8fCBudWxsID09IHZhbGlkUG9zLm1hdGNoLmZuKSAmJiBpIDwgcG9zICsgKHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSAtIHN0YXRpY0lucHV0c0JlZm9yZVBvcykgJiYgc3RhdGljSW5wdXRzQmVmb3JlUG9zQWx0ZXJuYXRlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZFJzbHQgPSBpc1ZhbGlkKChwb3MgKz0gc3RhdGljSW5wdXRzQmVmb3JlUG9zQWx0ZXJuYXRlIC0gc3RhdGljSW5wdXRzQmVmb3JlUG9zKSA+IHRhcmdldEx2cCA/IHRhcmdldEx2cCA6IHBvcywgYywgc3RyaWN0LCBmcm9tU2V0VmFsaWQsICEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkUnNsdCkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRQc0Nsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkUnNsdDtcclxuICAgICAgICAgICAgICAgICAgICB9KG1hc2tQb3MsIGMsIHN0cmljdCkpLCAhMCA9PT0gcmVzdWx0ICYmIChyZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogbWFza1Bvc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLnBvc3RWYWxpZGF0aW9uKSAmJiAhMSAhPT0gcmVzdWx0ICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21TZXRWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3RSZXN1bHQgPSBvcHRzLnBvc3RWYWxpZGF0aW9uKGdldEJ1ZmZlcighMCksIHJlc3VsdCwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3RSZXN1bHQucmVmcmVzaEZyb21CdWZmZXIgJiYgcG9zdFJlc3VsdC5idWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZnJlc2ggPSBwb3N0UmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcighMCA9PT0gcmVmcmVzaCA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LCByZWZyZXNoLmVuZCwgcG9zdFJlc3VsdC5idWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAhMCA9PT0gcG9zdFJlc3VsdCA/IHJlc3VsdCA6IHBvc3RSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiAocmVzdWx0LnBvcyA9IG1hc2tQb3MpLCAhMSAhPT0gcmVzdWx0ICYmICEwICE9PSB2YWxpZGF0ZU9ubHkgfHwgKHJlc2V0TWFza1NldCghMCksIFxyXG4gICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSkpLCByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNNYXNrKHBvcywgc3RyaWN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGdldFRlc3RUZW1wbGF0ZShwb3MpLm1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiXCIgPT09IHRlc3QuZGVmICYmICh0ZXN0ID0gZ2V0VGVzdChwb3MpLm1hdGNoKSwgbnVsbCAhPSB0ZXN0LmZuKSByZXR1cm4gdGVzdC5mbjtcclxuICAgICAgICAgICAgICAgIGlmICghMCAhPT0gc3RyaWN0ICYmIHBvcyA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RzID0gZ2V0VGVzdHMocG9zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHMubGVuZ3RoID4gMSArIChcIlwiID09PSB0ZXN0c1t0ZXN0cy5sZW5ndGggLSAxXS5tYXRjaC5kZWYgPyAxIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2Vla05leHQocG9zLCBuZXdCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hc2tMID0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zID49IG1hc2tMKSByZXR1cm4gbWFza0w7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGdldFRlc3RzKG1hc2tMICsgMSkubGVuZ3RoID4gMSAmJiAoZ2V0TWFza1RlbXBsYXRlKCEwLCBtYXNrTCArIDEsICEwKSwgbWFza0wgPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCk7ICsrcG9zaXRpb24gPCBtYXNrTCAmJiAoITAgPT09IG5ld0Jsb2NrICYmICghMCAhPT0gZ2V0VGVzdChwb3NpdGlvbikubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzayhwb3NpdGlvbikpIHx8ICEwICE9PSBuZXdCbG9jayAmJiAhaXNNYXNrKHBvc2l0aW9uKSk7ICkgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNlZWtQcmV2aW91cyhwb3MsIG5ld0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdHMsIHBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uIDw9IDApIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7LS1wb3NpdGlvbiA+IDAgJiYgKCEwID09PSBuZXdCbG9jayAmJiAhMCAhPT0gZ2V0VGVzdChwb3NpdGlvbikubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgITAgIT09IG5ld0Jsb2NrICYmICFpc01hc2socG9zaXRpb24pICYmICgodGVzdHMgPSBnZXRUZXN0cyhwb3NpdGlvbikpLmxlbmd0aCA8IDIgfHwgMiA9PT0gdGVzdHMubGVuZ3RoICYmIFwiXCIgPT09IHRlc3RzWzFdLm1hdGNoLmRlZikpOyApIDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJFbGVtZW50KHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXSA9PT0gdW5kZWZpbmVkID8gZ2V0UGxhY2Vob2xkZXIocG9zaXRpb24pIDogZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5pbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCBjYXJldFBvcywgZXZlbnQsIHRyaWdnZXJJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVXcml0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBldmVudCwgYnVmZmVyLCBjYXJldFBvcywgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyKCEwID09PSByZWZyZXNoID8gcmVmcmVzaCA6IHJlZnJlc2guc3RhcnQsIHJlZnJlc2guZW5kLCByZXN1bHQuYnVmZmVyIHx8IGJ1ZmZlciksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gZ2V0QnVmZmVyKCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldFBvcyAhPT0gdW5kZWZpbmVkICYmIChjYXJldFBvcyA9IHJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LmNhcmV0IDogY2FyZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlucHV0ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVTZXQoYnVmZmVyLmpvaW4oXCJcIikpLCBjYXJldFBvcyA9PT0gdW5kZWZpbmVkIHx8IGV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXCJibHVyXCIgPT09IGV2ZW50LnR5cGUgPyByZW5kZXJDb2xvck1hc2soaW5wdXQsIGNhcmV0UG9zLCAwID09PSBidWZmZXIubGVuZ3RoKSA6IGFuZHJvaWQgJiYgZXZlbnQgJiYgXCJpbnB1dFwiID09PSBldmVudC50eXBlID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgY2FyZXRQb3MpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCkgOiBjYXJldChpbnB1dCwgY2FyZXRQb3MpLCAhMCA9PT0gdHJpZ2dlcklucHV0RXZlbnQgJiYgKHNraXBJbnB1dEV2ZW50ID0gITAsIFxyXG4gICAgICAgICAgICAgICAgJChpbnB1dCkudHJpZ2dlcihcImlucHV0XCIpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0LCByZXR1cm5QTCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0ZXN0ID0gdGVzdCB8fCBnZXRUZXN0KHBvcykubWF0Y2gpLnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgfHwgITAgPT09IHJldHVyblBMKSByZXR1cm4gJC5pc0Z1bmN0aW9uKHRlc3QucGxhY2Vob2xkZXIpID8gdGVzdC5wbGFjZWhvbGRlcihvcHRzKSA6IHRlc3QucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gdGVzdC5mbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiAtMSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmV2VGVzdCwgdGVzdHMgPSBnZXRUZXN0cyhwb3MpLCBzdGF0aWNBbHRlcm5hdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApKSBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSBpZiAoITAgIT09IHRlc3RzW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKG51bGwgPT09IHRlc3RzW2ldLm1hdGNoLmZuIHx8IHByZXZUZXN0ID09PSB1bmRlZmluZWQgfHwgITEgIT09IHRlc3RzW2ldLm1hdGNoLmZuLnRlc3QocHJldlRlc3QubWF0Y2guZGVmLCBnZXRNYXNrU2V0KCksIHBvcywgITAsIG9wdHMpKSAmJiAoc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gdGVzdHNbaV0ubWF0Y2guZm4gJiYgKHByZXZUZXN0ID0gdGVzdHNbaV0pLCBzdGF0aWNBbHRlcm5hdGlvbnMubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3Qoc3RhdGljQWx0ZXJuYXRpb25zWzBdLm1hdGNoLmRlZikpKSByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdC5kZWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGlucHV0LCB3cml0ZU91dCwgc3RyaWN0LCBucHR2bCwgaW5pdGlhdGluZ0V2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBsYXRlTWF0Y2gobmR4LCBjaGFyQ29kZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuc2xpY2UobmR4LCBzZWVrTmV4dChuZHgpKS5qb2luKFwiXCIpLmluZGV4T2YoY2hhckNvZGVzKSAmJiAhaXNNYXNrKG5keCkgJiYgZ2V0VGVzdChuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT0gY2hhckNvZGVzLmNoYXJBdChjaGFyQ29kZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IG5wdHZsLnNsaWNlKCksIGNoYXJDb2RlcyA9IFwiXCIsIGluaXRpYWxOZHggPSAtMSwgcmVzdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0TWFza1NldCgpLCBzdHJpY3QgfHwgITAgPT09IG9wdHMuYXV0b1VubWFzaykgaW5pdGlhbE5keCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGljSW5wdXQgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLnNsaWNlKDAsIHNlZWtOZXh0KC0xKSkuam9pbihcIlwiKSwgbWF0Y2hlcyA9IGlucHV0VmFsdWUuam9pbihcIlwiKS5tYXRjaChuZXcgUmVnRXhwKFwiXlwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KHN0YXRpY0lucHV0KSwgXCJnXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoaW5wdXRWYWx1ZS5zcGxpY2UoMCwgbWF0Y2hlcy5sZW5ndGggKiBzdGF0aWNJbnB1dC5sZW5ndGgpLCBcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsTmR4ID0gc2Vla05leHQoaW5pdGlhbE5keCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKC0xID09PSBpbml0aWFsTmR4ID8gKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoaW5pdGlhbE5keCksIGluaXRpYWxOZHggPSAwKSA6IGdldE1hc2tTZXQoKS5wID0gaW5pdGlhbE5keCwgXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goaW5wdXRWYWx1ZSwgZnVuY3Rpb24obmR4LCBjaGFyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPT0gdW5kZWZpbmVkKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJiBpbnB1dFZhbHVlW25keF0gPT09IGdldFBsYWNlaG9sZGVyKG5keCkgJiYgaXNNYXNrKG5keCwgITApICYmICExID09PSBpc1ZhbGlkKG5keCwgaW5wdXRWYWx1ZVtuZHhdLCAhMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICEwKSkgZ2V0TWFza1NldCgpLnArKzsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGNoYXJDb2RlLmNoYXJDb2RlQXQoMCksIGNoYXJDb2RlcyArPSBjaGFyQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApLCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmV4dFRlc3QgPSBnZXRUZXN0VGVtcGxhdGUobHZwICsgMSwgbHZUZXN0ID8gbHZUZXN0LmxvY2F0b3Iuc2xpY2UoKSA6IHVuZGVmaW5lZCwgbHZwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlTWF0Y2goaW5pdGlhbE5keCwgY2hhckNvZGVzKSB8fCBzdHJpY3QgfHwgb3B0cy5hdXRvVW5tYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc3RyaWN0ID8gbmR4IDogbnVsbCA9PSBuZXh0VGVzdC5tYXRjaC5mbiAmJiBuZXh0VGVzdC5tYXRjaC5vcHRpb25hbGl0eSAmJiBsdnAgKyAxIDwgZ2V0TWFza1NldCgpLnAgPyBsdnAgKyAxIDogZ2V0TWFza1NldCgpLnA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgc3RyaWN0LCBwb3MpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxOZHggPSBwb3MgKyAxLCBjaGFyQ29kZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICEwLCBsdnAgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSByZXN1bHQgJiYgIXN0cmljdCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBrZXlwcmVzcywgZ2V0QnVmZmVyKCksIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sIG9wdHMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgPSAkLmV4dGVuZChvcmlnUmVzdWx0LCByZXN1bHQpKSAmJiByZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcighMCA9PT0gcmVmcmVzaCA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LCByZWZyZXNoLmVuZCwgcmVzdWx0LmJ1ZmZlciksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCghMCksIHJlc3VsdC5jYXJldCAmJiAoZ2V0TWFza1NldCgpLnAgPSByZXN1bHQuY2FyZXQsIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSByZXN1bHQuY2FyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksIHdyaXRlT3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0ICYmIHJlc3VsdCAmJiAoY2FyZXRQb3MgPSBvcHRzLm51bWVyaWNJbnB1dCA/IHNlZWtQcmV2aW91cyhyZXN1bHQuZm9yd2FyZFBvc2l0aW9uKSA6IHJlc3VsdC5mb3J3YXJkUG9zaXRpb24pLCBcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGNhcmV0UG9zLCBpbml0aWF0aW5nRXZlbnQgfHwgbmV3ICQuRXZlbnQoXCJjaGVja3ZhbFwiKSwgaW5pdGlhdGluZ0V2ZW50ICYmIFwiaW5wdXRcIiA9PT0gaW5pdGlhdGluZ0V2ZW50LnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVubWFza2VkdmFsdWUoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIEV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudC5jYWxsKGlucHV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB1bVZhbHVlID0gW10sIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucztcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBuZHggaW4gdnBzKSB2cHNbcG5keF0ubWF0Y2ggJiYgbnVsbCAhPSB2cHNbcG5keF0ubWF0Y2guZm4gJiYgdW1WYWx1ZS5wdXNoKHZwc1twbmR4XS5pbnB1dCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IDAgPT09IHVtVmFsdWUubGVuZ3RoID8gXCJcIiA6IChpc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vblVuTWFzaykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVmFsdWUgPSAoaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlcigpKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVubWFza2VkVmFsdWUgPSBvcHRzLm9uVW5NYXNrLmNhbGwoaW5wdXRtYXNrLCBidWZmZXJWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjYXJldChpbnB1dCwgYmVnaW4sIGVuZCwgbm90cmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZVBvc2l0aW9uKHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMCA9PT0gbm90cmFuc2xhdGUgfHwgIWlzUlRMIHx8IFwibnVtYmVyXCIgIT0gdHlwZW9mIHBvcyB8fCBvcHRzLmdyZWVkeSAmJiBcIlwiID09PSBvcHRzLnBsYWNlaG9sZGVyIHx8IChwb3MgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLmxlbmd0aCAtIHBvcyksIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciByYW5nZTtcclxuICAgICAgICAgICAgICAgIGlmIChiZWdpbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UgPyAoYmVnaW4gPSBpbnB1dC5zZWxlY3Rpb25TdGFydCwgXHJcbiAgICAgICAgICAgICAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQpIDogd2luZG93LmdldFNlbGVjdGlvbiA/IChyYW5nZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZUF0KDApKS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlICE9PSBpbnB1dCAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lciAhPT0gaW5wdXQgfHwgKGJlZ2luID0gcmFuZ2Uuc3RhcnRPZmZzZXQsIFxyXG4gICAgICAgICAgICAgICAgZW5kID0gcmFuZ2UuZW5kT2Zmc2V0KSA6IGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UgJiYgKGVuZCA9IChiZWdpbiA9IDAgLSAocmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKSkuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC1pbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSkgKyByYW5nZS50ZXh0Lmxlbmd0aCksIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiB0cmFuc2xhdGVQb3NpdGlvbihiZWdpbiksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cmFuc2xhdGVQb3NpdGlvbihlbmQpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGJlZ2luLmJlZ2luICE9PSB1bmRlZmluZWQgJiYgKGVuZCA9IGJlZ2luLmVuZCwgYmVnaW4gPSBiZWdpbi5iZWdpbiksIFwibnVtYmVyXCIgPT0gdHlwZW9mIGJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSB0cmFuc2xhdGVQb3NpdGlvbihiZWdpbiksIGVuZCA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIChlbmQgPSB0cmFuc2xhdGVQb3NpdGlvbihlbmQpKSA/IGVuZCA6IGJlZ2luO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxDYWxjID0gcGFyc2VJbnQoKChpbnB1dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZSA/IChpbnB1dC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuZ2V0Q29tcHV0ZWRTdHlsZShpbnB1dCwgbnVsbCkgOiBpbnB1dC5jdXJyZW50U3R5bGUpLmZvbnRTaXplKSAqIGVuZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuc2Nyb2xsTGVmdCA9IHNjcm9sbENhbGMgPiBpbnB1dC5zY3JvbGxXaWR0aCA/IHNjcm9sbENhbGMgOiAwLCBtb2JpbGUgfHwgITEgIT09IG9wdHMuaW5zZXJ0TW9kZSB8fCBiZWdpbiAhPT0gZW5kIHx8IGVuZCsrLCBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSkgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBiZWdpbiwgaW5wdXQuc2VsZWN0aW9uRW5kID0gZW5kOyBlbHNlIGlmICh3aW5kb3cuZ2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCksIGlucHV0LmZpcnN0Q2hpbGQgPT09IHVuZGVmaW5lZCB8fCBudWxsID09PSBpbnB1dC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZS5zZXRTdGFydChpbnB1dC5maXJzdENoaWxkLCBiZWdpbiA8IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGggPyBiZWdpbiA6IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKGlucHV0LmZpcnN0Q2hpbGQsIGVuZCA8IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKS5sZW5ndGggPyBlbmQgOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsLnJlbW92ZUFsbFJhbmdlcygpLCBzZWwuYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpbnB1dC5jcmVhdGVUZXh0UmFuZ2UgJiYgKChyYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpKS5jb2xsYXBzZSghMCksIFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSwgcmFuZ2Uuc2VsZWN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24ocmV0dXJuRGVmaW5pdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcywgdGVzdFBvcywgYnVmZmVyID0gZ2V0QnVmZmVyKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgcG9zaXRpb25zID0ge30sIGx2VGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdnBdLCBuZHhJbnRsenIgPSBsdlRlc3QgIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yLnNsaWNlKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHBvcyA9IGx2cCArIDE7IHBvcyA8IGJ1ZmZlci5sZW5ndGg7IHBvcysrKSBuZHhJbnRsenIgPSAodGVzdFBvcyA9IGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgcG9zIC0gMSkpLmxvY2F0b3Iuc2xpY2UoKSwgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdFBvcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbHZUZXN0QWx0ID0gbHZUZXN0ICYmIGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGZvciAocG9zID0gYmwgLSAxOyBwb3MgPiBsdnAgJiYgKCgodGVzdFBvcyA9IHBvc2l0aW9uc1twb3NdKS5tYXRjaC5vcHRpb25hbGl0eSB8fCB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiB0ZXN0UG9zLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8IGx2VGVzdEFsdCAmJiAobHZUZXN0QWx0ICE9PSBwb3NpdGlvbnNbcG9zXS5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gJiYgbnVsbCAhPSB0ZXN0UG9zLm1hdGNoLmZuIHx8IG51bGwgPT09IHRlc3RQb3MubWF0Y2guZm4gJiYgdGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gJiYgY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRlc3RQb3MubG9jYXRvcltsdlRlc3QuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCBsdlRlc3RBbHQudG9TdHJpbmcoKS5zcGxpdChcIixcIikpICYmIFwiXCIgIT09IGdldFRlc3RzKHBvcylbMF0uZGVmKSkgJiYgYnVmZmVyW3Bvc10gPT09IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdFBvcy5tYXRjaCkpOyBwb3MtLSkgYmwtLTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EZWZpbml0aW9uID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGw6IGJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZjogcG9zaXRpb25zW2JsXSA/IHBvc2l0aW9uc1tibF0ubWF0Y2ggOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH0gOiBibDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGVhck9wdGlvbmFsVGFpbChidWZmZXIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkUG9zLCBybCA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHYgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZ2V0TGFzdFZhbGlkUG9zaXRpb24oKV07IHJsIDwgYmwgJiYgIWlzTWFzayhybCwgITApICYmICh2YWxpZFBvcyA9IGx2ICE9PSB1bmRlZmluZWQgPyBnZXRUZXN0VGVtcGxhdGUocmwsIGx2LmxvY2F0b3Iuc2xpY2UoXCJcIiksIGx2KSA6IGdldFRlc3QocmwpKSAmJiAhMCAhPT0gdmFsaWRQb3MubWF0Y2gub3B0aW9uYWxpdHkgJiYgKCEwICE9PSB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgITAgIT09IHZhbGlkUG9zLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8IHJsICsgMSA9PT0gYmwgJiYgXCJcIiA9PT0gKGx2ICE9PSB1bmRlZmluZWQgPyBnZXRUZXN0VGVtcGxhdGUocmwgKyAxLCBsdi5sb2NhdG9yLnNsaWNlKFwiXCIpLCBsdikgOiBnZXRUZXN0KHJsICsgMSkpLm1hdGNoLmRlZik7ICkgcmwrKztcclxuICAgICAgICAgICAgICAgIGZvciAoOyh2YWxpZFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tybCAtIDFdKSAmJiB2YWxpZFBvcyAmJiB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbGl0eSAmJiB2YWxpZFBvcy5pbnB1dCA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOyApIHJsLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYnVmZmVyLnNwbGljZShybCksIGJ1ZmZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc0NvbXBsZXRlKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLmlzQ29tcGxldGUpKSByZXR1cm4gb3B0cy5pc0NvbXBsZXRlKGJ1ZmZlciwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCIqXCIgPT09IG9wdHMucmVwZWF0KSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlID0gITEsIGxycCA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKCEwKSwgYW1sID0gc2Vla1ByZXZpb3VzKGxycC5sKTtcclxuICAgICAgICAgICAgICAgIGlmIChscnAuZGVmID09PSB1bmRlZmluZWQgfHwgbHJwLmRlZi5uZXdCbG9ja01hcmtlciB8fCBscnAuZGVmLm9wdGlvbmFsaXR5IHx8IGxycC5kZWYub3B0aW9uYWxRdWFudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhbWw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdCA9IGdldFRlc3RUZW1wbGF0ZShpKS5tYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgIT09IHRlc3QuZm4gJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgITAgIT09IHRlc3Qub3B0aW9uYWxpdHkgJiYgITAgIT09IHRlc3Qub3B0aW9uYWxRdWFudGlmaWVyIHx8IG51bGwgPT09IHRlc3QuZm4gJiYgYnVmZmVyW2ldICE9PSBnZXRQbGFjZWhvbGRlcihpLCB0ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZShpbnB1dCwgaywgcG9zLCBzdHJpY3QsIGZyb21Jc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKG9wdHMubnVtZXJpY0lucHV0IHx8IGlzUlRMKSAmJiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFID8gayA9IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSA6IGsgPT09IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSAmJiAoayA9IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSksIFxyXG4gICAgICAgICAgICAgICAgaXNSVEwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlbmQgPSBwb3MuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBwb3MuYmVnaW4sIHBvcy5iZWdpbiA9IHBlbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5CQUNLU1BBQ0UgJiYgKHBvcy5lbmQgLSBwb3MuYmVnaW4gPCAxIHx8ICExID09PSBvcHRzLmluc2VydE1vZGUpID8gKHBvcy5iZWdpbiA9IHNlZWtQcmV2aW91cyhwb3MuYmVnaW4pLCBcclxuICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuYmVnaW5dICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0uaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgcG9zLmJlZ2luLS0pIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFICYmIHBvcy5iZWdpbiA9PT0gcG9zLmVuZCAmJiAocG9zLmVuZCA9IGlzTWFzayhwb3MuZW5kLCAhMCkgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5lbmRdICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuZW5kXS5pbnB1dCAhPT0gb3B0cy5yYWRpeFBvaW50ID8gcG9zLmVuZCArIDEgOiBzZWVrTmV4dChwb3MuZW5kKSArIDEsIFxyXG4gICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0gIT09IHVuZGVmaW5lZCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXS5pbnB1dCA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiBwb3MuZW5kKyspLCBcclxuICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMocG9zLmJlZ2luLCBwb3MuZW5kLCAhMSwgc3RyaWN0KSwgITAgIT09IHN0cmljdCAmJiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5rZWVwU3RhdGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkSW5wdXRzID0gW10sIGxhc3RBbHQgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigtMSwgITApLCBwb3NpdGlvbnNDbG9uZSA9ICQuZXh0ZW5kKCEwLCB7fSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zKSwgcHJldkFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XTsgbGFzdEFsdCA+PSAwOyBsYXN0QWx0LS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWx0UG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBhbHRQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgL1swLTlhLWJBLVpdLy50ZXN0KGFsdFBvcy5pbnB1dCkgJiYgdmFsaWRJbnB1dHMucHVzaChhbHRQb3MuaW5wdXQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdLCBhbHRQb3MuYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCAmJiBhbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dICE9PSBwcmV2QWx0UG9zLmxvY2F0b3JbYWx0UG9zLmFsdGVybmF0aW9uXSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEFsdCA+IC0xKSBmb3IgKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oLTEsICEwKSk7IHZhbGlkSW5wdXRzLmxlbmd0aCA+IDA7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzLndoaWNoID0gdmFsaWRJbnB1dHMucG9wKCkuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICExLCBnZXRNYXNrU2V0KCkucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHBvc2l0aW9uc0Nsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24ocG9zLmJlZ2luLCAhMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobHZwIDwgcG9zLmJlZ2luKSBnZXRNYXNrU2V0KCkucCA9IHNlZWtOZXh0KGx2cCk7IGVsc2UgaWYgKCEwICE9PSBzdHJpY3QgJiYgKGdldE1hc2tTZXQoKS5wID0gcG9zLmJlZ2luLCBcclxuICAgICAgICAgICAgICAgICEwICE9PSBmcm9tSXNWYWxpZCkpIGZvciAoO2dldE1hc2tTZXQoKS5wIDwgbHZwICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tnZXRNYXNrU2V0KCkucF0gPT09IHVuZGVmaW5lZDsgKSBnZXRNYXNrU2V0KCkucCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVDb2xvck1hc2soaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRDYXJldFBvcyhjbGllbnR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zLCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3R5bGUgaW4gY29tcHV0ZWRTdHlsZSkgaXNOYU4oc3R5bGUpICYmIC0xICE9PSBzdHlsZS5pbmRleE9mKFwiZm9udFwiKSAmJiAoZS5zdHlsZVtzdHlsZV0gPSBjb21wdXRlZFN0eWxlW3N0eWxlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gY29tcHV0ZWRTdHlsZS50ZXh0VHJhbnNmb3JtLCBlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBjb21wdXRlZFN0eWxlLmxldHRlclNwYWNpbmcsIFxyXG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCIsIGUuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCIsIGUuc3R5bGUud2lkdGggPSBcImF1dG9cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiwgZS5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIiwgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRsLCBpbnB1dFRleHQgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCksIHByZXZpb3VzV2lkdGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY2FyZXRQb3MgPSAwLCBpdGwgPSBpbnB1dFRleHQubGVuZ3RoOyBjYXJldFBvcyA8PSBpdGw7IGNhcmV0UG9zKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuaW5uZXJIVE1MICs9IGlucHV0VGV4dC5jaGFyQXQoY2FyZXRQb3MpIHx8IFwiX1wiLCBlLm9mZnNldFdpZHRoID49IGNsaWVudHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQxID0gY2xpZW50eCAtIHByZXZpb3VzV2lkdGgsIG9mZnNldDIgPSBlLm9mZnNldFdpZHRoIC0gY2xpZW50eDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuaW5uZXJIVE1MID0gaW5wdXRUZXh0LmNoYXJBdChjYXJldFBvcyksIGNhcmV0UG9zID0gKG9mZnNldDEgLT0gZS5vZmZzZXRXaWR0aCAvIDMpIDwgb2Zmc2V0MiA/IGNhcmV0UG9zIC0gMSA6IGNhcmV0UG9zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNXaWR0aCA9IGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLCBjYXJldFBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKSwgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoLCB0ZW1wbGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBjb21wdXRlZFN0eWxlLnRleHRBbGlnbiwgXHJcbiAgICAgICAgICAgICAgICAoY29sb3JNYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NOYW1lID0gXCJpbS1jb2xvcm1hc2tcIiwgaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29sb3JNYXNrLCBpbnB1dCksIFxyXG4gICAgICAgICAgICAgICAgaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnB1dCksIGNvbG9yTWFzay5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSksIGNvbG9yTWFzay5hcHBlbmRDaGlsZChpbnB1dCksIFxyXG4gICAgICAgICAgICAgICAgaW5wdXQuc3R5bGUubGVmdCA9IHRlbXBsYXRlLm9mZnNldExlZnQgKyBcInB4XCIsICQoaW5wdXQpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXJldChpbnB1dCwgZmluZENhcmV0UG9zKGUuY2xpZW50WCkpLCBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuY2FsbChpbnB1dCwgWyBlIF0pO1xyXG4gICAgICAgICAgICAgICAgfSksICQoaW5wdXQpLm9uKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaGlmdEtleSB8fCAhMSA9PT0gb3B0cy5pbnNlcnRNb2RlIHx8IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW5kZXJDb2xvck1hc2soaW5wdXQsIGNhcmV0UG9zLCBjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3RhdGljKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhdGljIHx8IG51bGwgIT09IHRlc3QuZm4gJiYgdGVzdFBvcy5pbnB1dCAhPT0gdW5kZWZpbmVkID8gaXNTdGF0aWMgJiYgKG51bGwgIT09IHRlc3QuZm4gJiYgdGVzdFBvcy5pbnB1dCAhPT0gdW5kZWZpbmVkIHx8IFwiXCIgPT09IHRlc3QuZGVmKSAmJiAoaXNTdGF0aWMgPSAhMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RlbXBsYXRlICs9IFwiPC9zcGFuPlwiKSA6IChpc1N0YXRpYyA9ICEwLCBtYXNrVGVtcGxhdGUgKz0gXCI8c3BhbiBjbGFzcz0naW0tc3RhdGljJz5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDYXJldChmb3JjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICEwICE9PSBmb3JjZSAmJiBwb3MgIT09IGNhcmV0UG9zLmJlZ2luIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0IHx8IChtYXNrVGVtcGxhdGUgKz0gXCI8c3BhbiBjbGFzcz0naW0tY2FyZXQnIHN0eWxlPSdib3JkZXItcmlnaHQtd2lkdGg6IDFweDtib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkOyc+PC9zcGFuPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0LCB0ZXN0UG9zLCBuZHhJbnRsenIsIG1hc2tUZW1wbGF0ZSA9IFwiXCIsIGlzU3RhdGljID0gITEsIHBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JNYXNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmV0UG9zID09PSB1bmRlZmluZWQgPyBjYXJldFBvcyA9IGNhcmV0KGlucHV0KSA6IGNhcmV0UG9zLmJlZ2luID09PSB1bmRlZmluZWQgJiYgKGNhcmV0UG9zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogY2FyZXRQb3NcclxuICAgICAgICAgICAgICAgICAgICB9KSwgITAgIT09IGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDYXJldCgpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA/ICh0ZXN0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2gsIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCBoYW5kbGVTdGF0aWMoKSwgbWFza1RlbXBsYXRlICs9IGJ1ZmZlcltwb3NdKSA6ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IHBvcyA8IGx2cCB8fCBcIm51bWJlclwiID09IHR5cGVvZiBvcHRzLmppdE1hc2tpbmcgJiYgaXNGaW5pdGUob3B0cy5qaXRNYXNraW5nKSAmJiBvcHRzLmppdE1hc2tpbmcgPiBwb3MpICYmIChoYW5kbGVTdGF0aWMoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGUgKz0gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0KSkpLCBwb3MrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IHBvcyA8IG1heExlbmd0aCkgJiYgKG51bGwgIT09IHRlc3QuZm4gfHwgXCJcIiAhPT0gdGVzdC5kZWYpIHx8IGx2cCA+IHBvcyB8fCBpc1N0YXRpYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBtYXNrVGVtcGxhdGUuaW5kZXhPZihcImltLWNhcmV0XCIpICYmIGhhbmRsZUNhcmV0KCEwKSwgaXNTdGF0aWMgJiYgaGFuZGxlU3RhdGljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbG9yTWFzay5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBtYXNrVGVtcGxhdGUsIGlucHV0LmlucHV0bWFzay5wb3NpdGlvbkNvbG9yTWFzayhpbnB1dCwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hc2tzZXQgPSBtYXNrc2V0IHx8IHRoaXMubWFza3NldCwgb3B0cyA9IG9wdHMgfHwgdGhpcy5vcHRzO1xyXG4gICAgICAgICAgICB2YXIgdW5kb1ZhbHVlLCAkZWwsIG1heExlbmd0aCwgY29sb3JNYXNrLCBpbnB1dG1hc2sgPSB0aGlzLCBlbCA9IHRoaXMuZWwsIGlzUlRMID0gdGhpcy5pc1JUTCwgc2tpcEtleVByZXNzRXZlbnQgPSAhMSwgc2tpcElucHV0RXZlbnQgPSAhMSwgaWdub3JhYmxlID0gITEsIG1vdXNlRW50ZXIgPSAhMSwgRXZlbnRSdWxlciA9IHtcclxuICAgICAgICAgICAgICAgIG9uOiBmdW5jdGlvbihpbnB1dCwgZXZlbnROYW1lLCBldmVudEhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXYgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0bWFzayA9PT0gdW5kZWZpbmVkICYmIFwiRk9STVwiICE9PSB0aGlzLm5vZGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1PcHRzID0gJC5kYXRhKHRoaXMsIFwiX2lucHV0bWFza19vcHRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1PcHRzID8gbmV3IElucHV0bWFzayhpbU9wdHMpLm1hc2sodGhpcykgOiBFdmVudFJ1bGVyLm9mZih0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInNldHZhbHVlXCIgPT09IGUudHlwZSB8fCBcIkZPUk1cIiA9PT0gdGhpcy5ub2RlTmFtZSB8fCAhKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5yZWFkT25seSAmJiAhKFwia2V5ZG93blwiID09PSBlLnR5cGUgJiYgZS5jdHJsS2V5ICYmIDY3ID09PSBlLmtleUNvZGUgfHwgITEgPT09IG9wdHMudGFiVGhyb3VnaCAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlRBQikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpbnB1dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IHNraXBJbnB1dEV2ZW50KSByZXR1cm4gc2tpcElucHV0RXZlbnQgPSAhMSwgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5cHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBza2lwS2V5UHJlc3NFdmVudCkgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcEtleVByZXNzRXZlbnQgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZW1vYmlsZSB8fCBpcGhvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApLCAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsID0gZXZlbnRIYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExID09PSByZXR1cm5WYWwgJiYgKGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKSksIHJldHVyblZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdID0gaW5wdXQuaW5wdXRtYXNrLmV2ZW50c1tldmVudE5hbWVdIHx8IFtdLCBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldiksIFxyXG4gICAgICAgICAgICAgICAgICAgIC0xICE9PSAkLmluQXJyYXkoZXZlbnROYW1lLCBbIFwic3VibWl0XCIsIFwicmVzZXRcIiBdKSA/IG51bGwgIT09IGlucHV0LmZvcm0gJiYgJChpbnB1dC5mb3JtKS5vbihldmVudE5hbWUsIGV2KSA6ICQoaW5wdXQpLm9uKGV2ZW50TmFtZSwgZXYpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZjogZnVuY3Rpb24oaW5wdXQsIGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2suZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID8gKGV2ZW50cyA9IFtdKVtldmVudF0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50XSA6IGV2ZW50cyA9IGlucHV0LmlucHV0bWFzay5ldmVudHMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goZXZlbnRzLCBmdW5jdGlvbihldmVudE5hbWUsIGV2QXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDtldkFyci5sZW5ndGggPiAwOyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXYgPSBldkFyci5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtMSAhPT0gJC5pbkFycmF5KGV2ZW50TmFtZSwgWyBcInN1Ym1pdFwiLCBcInJlc2V0XCIgXSkgPyBudWxsICE9PSBpbnB1dC5mb3JtICYmICQoaW5wdXQuZm9ybSkub2ZmKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub2ZmKGV2ZW50TmFtZSwgZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBFdmVudEhhbmRsZXJzID0ge1xyXG4gICAgICAgICAgICAgICAga2V5ZG93bkV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLmtleUNvZGUsIHBvcyA9IGNhcmV0KGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFIHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLkRFTEVURSB8fCBpcGhvbmUgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFX1NBRkFSSSB8fCBlLmN0cmxLZXkgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuWCAmJiAhZnVuY3Rpb24oZXZlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwgZXZOYW1lID0gXCJvblwiICsgZXZlbnROYW1lLCBpc1N1cHBvcnRlZCA9IGV2TmFtZSBpbiBlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU3VwcG9ydGVkIHx8IChlbC5zZXRBdHRyaWJ1dGUoZXZOYW1lLCBcInJldHVybjtcIiksIGlzU3VwcG9ydGVkID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBlbFtldk5hbWVdKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gbnVsbCwgaXNTdXBwb3J0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfShcImN1dFwiKSkgZS5wcmV2ZW50RGVmYXVsdCgpLCBoYW5kbGVSZW1vdmUoaW5wdXQsIGssIHBvcyksIHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoITApLCBnZXRNYXNrU2V0KCkucCwgZSwgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIikgOiAhMCA9PT0gaXNDb21wbGV0ZShnZXRCdWZmZXIoKSkgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKTsgZWxzZSBpZiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRU5EIHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLlBBR0VfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLmluc2VydE1vZGUgfHwgY2FyZXRQb3MgIT09IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoIHx8IGUuc2hpZnRLZXkgfHwgY2FyZXRQb3MtLSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBlLnNoaWZ0S2V5ID8gcG9zLmJlZ2luIDogY2FyZXRQb3MsIGNhcmV0UG9zLCAhMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkhPTUUgJiYgIWUuc2hpZnRLZXkgfHwgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUEFHRV9VUCA/IChlLnByZXZlbnREZWZhdWx0KCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBlLnNoaWZ0S2V5ID8gcG9zLmJlZ2luIDogMCwgITApKSA6IChvcHRzLnVuZG9PbkVzY2FwZSAmJiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5FU0NBUEUgfHwgOTAgPT09IGsgJiYgZS5jdHJsS2V5KSAmJiAhMCAhPT0gZS5hbHRLZXkgPyAoY2hlY2tWYWwoaW5wdXQsICEwLCAhMSwgdW5kb1ZhbHVlLnNwbGl0KFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJjbGlja1wiKSkgOiBrICE9PSBJbnB1dG1hc2sua2V5Q29kZS5JTlNFUlQgfHwgZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgPyAhMCA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLlRBQiA/ICghMCA9PT0gZS5zaGlmdEtleSA/IChudWxsID09PSBnZXRUZXN0KHBvcy5iZWdpbikubWF0Y2guZm4gJiYgKHBvcy5iZWdpbiA9IHNlZWtOZXh0KHBvcy5iZWdpbikpLCBcclxuICAgICAgICAgICAgICAgICAgICBwb3MuZW5kID0gc2Vla1ByZXZpb3VzKHBvcy5iZWdpbiwgITApLCBwb3MuYmVnaW4gPSBzZWVrUHJldmlvdXMocG9zLmVuZCwgITApKSA6IChwb3MuYmVnaW4gPSBzZWVrTmV4dChwb3MuYmVnaW4sICEwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLmVuZCA9IHNlZWtOZXh0KHBvcy5iZWdpbiwgITApLCBwb3MuZW5kIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgcG9zLmVuZC0tKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLmJlZ2luIDwgZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggJiYgKGUucHJldmVudERlZmF1bHQoKSwgY2FyZXQoaW5wdXQsIHBvcy5iZWdpbiwgcG9zLmVuZCkpKSA6IGUuc2hpZnRLZXkgfHwgITEgPT09IG9wdHMuaW5zZXJ0TW9kZSAmJiAoayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldChpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBjYXJldFBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCkgOiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5MRUZUICYmIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQoaW5wdXQsIGlzUlRMID8gY2FyZXRQb3MuYmVnaW4gKyAxIDogY2FyZXRQb3MuYmVnaW4gLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKSkgOiAob3B0cy5pbnNlcnRNb2RlID0gIW9wdHMuaW5zZXJ0TW9kZSwgY2FyZXQoaW5wdXQsIG9wdHMuaW5zZXJ0TW9kZSB8fCBwb3MuYmVnaW4gIT09IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID8gcG9zLmJlZ2luIDogcG9zLmJlZ2luIC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMub25LZXlEb3duLmNhbGwodGhpcywgZSwgZ2V0QnVmZmVyKCksIGNhcmV0KGlucHV0KS5iZWdpbiwgb3B0cyksIGlnbm9yYWJsZSA9IC0xICE9PSAkLmluQXJyYXkoaywgb3B0cy5pZ25vcmFibGVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBrZXlwcmVzc0V2ZW50OiBmdW5jdGlvbihlLCBjaGVja3ZhbCwgd3JpdGVPdXQsIHN0cmljdCwgbmR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgJGlucHV0ID0gJChpbnB1dCksIGsgPSBlLndoaWNoIHx8IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKCEwID09PSBjaGVja3ZhbCB8fCBlLmN0cmxLZXkgJiYgZS5hbHRLZXkpICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGlnbm9yYWJsZSkpIHJldHVybiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5FTlRFUiAmJiB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgKHVuZG9WYWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApKSwgITA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgNDYgPT09IGsgJiYgITEgPT09IGUuc2hpZnRLZXkgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIChrID0gb3B0cy5yYWRpeFBvaW50LmNoYXJDb2RlQXQoMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9yd2FyZFBvc2l0aW9uLCBwb3MgPSBjaGVja3ZhbCA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBuZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG5keFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IDogY2FyZXQoaW5wdXQpLCBjID0gU3RyaW5nLmZyb21DaGFyQ29kZShrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLndyaXRlT3V0QnVmZmVyID0gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxSZXN1bHQgPSBpc1ZhbGlkKHBvcywgYywgc3RyaWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIGZvcndhcmRQb3NpdGlvbiA9IHZhbFJlc3VsdC5jYXJldCAhPT0gdW5kZWZpbmVkID8gdmFsUmVzdWx0LmNhcmV0IDogY2hlY2t2YWwgPyB2YWxSZXN1bHQucG9zICsgMSA6IHNlZWtOZXh0KHZhbFJlc3VsdC5wb3MpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnAgPSBmb3J3YXJkUG9zaXRpb24pLCAhMSAhPT0gd3JpdGVPdXQgJiYgKHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLm9uS2V5VmFsaWRhdGlvbi5jYWxsKGlucHV0LCBrLCB2YWxSZXN1bHQsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKSwgZ2V0TWFza1NldCgpLndyaXRlT3V0QnVmZmVyICYmICExICE9PSB2YWxSZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCBvcHRzLm51bWVyaWNJbnB1dCAmJiB2YWxSZXN1bHQuY2FyZXQgPT09IHVuZGVmaW5lZCA/IHNlZWtQcmV2aW91cyhmb3J3YXJkUG9zaXRpb24pIDogZm9yd2FyZFBvc2l0aW9uLCBlLCAhMCAhPT0gY2hlY2t2YWwpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwICE9PSBjaGVja3ZhbCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEwID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KCksIGNoZWNrdmFsKSByZXR1cm4gITEgIT09IHZhbFJlc3VsdCAmJiAodmFsUmVzdWx0LmZvcndhcmRQb3NpdGlvbiA9IGZvcndhcmRQb3NpdGlvbiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxSZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhc3RlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcFZhbHVlLCBpbnB1dCA9IHRoaXMsIGV2ID0gZS5vcmlnaW5hbEV2ZW50IHx8IGUsICRpbnB1dCA9ICQoaW5wdXQpLCBpbnB1dFZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUlRMICYmICh0ZW1wVmFsdWUgPSBjYXJldFBvcy5lbmQsIGNhcmV0UG9zLmVuZCA9IGNhcmV0UG9zLmJlZ2luLCBjYXJldFBvcy5iZWdpbiA9IHRlbXBWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlQmVmb3JlQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksIHZhbHVlQWZ0ZXJDYXJldCA9IGlucHV0VmFsdWUuc3Vic3RyKGNhcmV0UG9zLmVuZCwgaW5wdXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUJlZm9yZUNhcmV0ID09PSAoaXNSVEwgPyBnZXRCdWZmZXJUZW1wbGF0ZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlclRlbXBsYXRlKCkpLnNsaWNlKDAsIGNhcmV0UG9zLmJlZ2luKS5qb2luKFwiXCIpICYmICh2YWx1ZUJlZm9yZUNhcmV0ID0gXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQWZ0ZXJDYXJldCA9PT0gKGlzUlRMID8gZ2V0QnVmZmVyVGVtcGxhdGUoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXJUZW1wbGF0ZSgpKS5zbGljZShjYXJldFBvcy5lbmQpLmpvaW4oXCJcIikgJiYgKHZhbHVlQWZ0ZXJDYXJldCA9IFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBpc1JUTCAmJiAodGVtcFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCwgdmFsdWVCZWZvcmVDYXJldCA9IHZhbHVlQWZ0ZXJDYXJldCwgdmFsdWVBZnRlckNhcmV0ID0gdGVtcFZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsaXBib2FyZERhdGEgJiYgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgaW5wdXRWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQgKyB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSArIHZhbHVlQWZ0ZXJDYXJldDsgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXYuY2xpcGJvYXJkRGF0YSB8fCAhZXYuY2xpcGJvYXJkRGF0YS5nZXREYXRhKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgZXYuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dC9wbGFpblwiKSArIHZhbHVlQWZ0ZXJDYXJldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3RlVmFsdWUgPSBpbnB1dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVBhc3RlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IChwYXN0ZVZhbHVlID0gb3B0cy5vbkJlZm9yZVBhc3RlLmNhbGwoaW5wdXRtYXNrLCBpbnB1dFZhbHVlLCBvcHRzKSkpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RlVmFsdWUgfHwgKHBhc3RlVmFsdWUgPSBpbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrVmFsKGlucHV0LCAhMSwgITEsIGlzUlRMID8gcGFzdGVWYWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkgOiBwYXN0ZVZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICAhMCA9PT0gaXNDb21wbGV0ZShnZXRCdWZmZXIoKSkgJiYgJGlucHV0LnRyaWdnZXIoXCJjb21wbGV0ZVwiKSwgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlucHV0RmFsbEJhY2tFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsIGlucHV0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgIT09IGlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGZ1bmN0aW9uKGlucHV0LCBpbnB1dFZhbHVlLCBjYXJldFBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiLlwiID09PSBpbnB1dFZhbHVlLmNoYXJBdChjYXJldFBvcy5iZWdpbiAtIDEpICYmIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAoKGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpKVtjYXJldFBvcy5iZWdpbiAtIDFdID0gb3B0cy5yYWRpeFBvaW50LmNoYXJBdCgwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5qb2luKFwiXCIpKSwgaW5wdXRWYWx1ZS5jaGFyQXQoY2FyZXRQb3MuYmVnaW4gLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIGlucHV0VmFsdWUubGVuZ3RoID4gZ2V0QnVmZmVyKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cHJlc3Mud2hpY2ggPSBvcHRzLnJhZGl4UG9pbnQuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITAsICExLCBjYXJldFBvcy5iZWdpbiAtIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfShpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgoZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpKSArIFwiKSpcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IGZ1bmN0aW9uKGlucHV0LCBpbnB1dFZhbHVlLCBjYXJldFBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGllbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hhciA9IGlucHV0VmFsdWUucmVwbGFjZShnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PT0gaW5wdXRDaGFyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcImtleXByZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5cHJlc3Mud2hpY2ggPSBpbnB1dENoYXIuY2hhckNvZGVBdCgwKSwgRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITAsICExLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbY2FyZXRQb3MuYmVnaW4gLSAxXSA/IGNhcmV0UG9zLmJlZ2luIDogY2FyZXRQb3MuYmVnaW4gLSAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfShpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zLmJlZ2luID4gaW5wdXRWYWx1ZS5sZW5ndGggJiYgKGNhcmV0KGlucHV0LCBpbnB1dFZhbHVlLmxlbmd0aCksIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIiksIGZyb250UGFydCA9IGlucHV0VmFsdWUuc3Vic3RyKDAsIGNhcmV0UG9zLmJlZ2luKSwgYmFja1BhcnQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5iZWdpbiksIGZyb250QnVmZmVyUGFydCA9IGJ1ZmZlci5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCBiYWNrQnVmZmVyUGFydCA9IGJ1ZmZlci5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLCBzZWxlY3Rpb24gPSBjYXJldFBvcywgZW50cmllcyA9IFwiXCIsIGlzRW50cnkgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZyb250UGFydCAhPT0gZnJvbnRCdWZmZXJQYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24uYmVnaW4gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZnBsID0gKGlzRW50cnkgPSBmcm9udFBhcnQubGVuZ3RoID49IGZyb250QnVmZmVyUGFydC5sZW5ndGgpID8gZnJvbnRQYXJ0Lmxlbmd0aCA6IGZyb250QnVmZmVyUGFydC5sZW5ndGgsIGkgPSAwOyBmcm9udFBhcnQuY2hhckF0KGkpID09PSBmcm9udEJ1ZmZlclBhcnQuY2hhckF0KGkpICYmIGkgPCBmcGw7IGkrKykgc2VsZWN0aW9uLmJlZ2luKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VudHJ5ICYmIChlbnRyaWVzICs9IGZyb250UGFydC5zbGljZShzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrUGFydCAhPT0gYmFja0J1ZmZlclBhcnQgJiYgKGJhY2tQYXJ0Lmxlbmd0aCA+IGJhY2tCdWZmZXJQYXJ0Lmxlbmd0aCA/IGlzRW50cnkgJiYgKHNlbGVjdGlvbi5lbmQgPSBzZWxlY3Rpb24uYmVnaW4pIDogYmFja1BhcnQubGVuZ3RoIDwgYmFja0J1ZmZlclBhcnQubGVuZ3RoID8gc2VsZWN0aW9uLmVuZCArPSBiYWNrQnVmZmVyUGFydC5sZW5ndGggLSBiYWNrUGFydC5sZW5ndGggOiBiYWNrUGFydC5jaGFyQXQoMCkgIT09IGJhY2tCdWZmZXJQYXJ0LmNoYXJBdCgwKSAmJiBzZWxlY3Rpb24uZW5kKyspLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBzZWxlY3Rpb24pLCBlbnRyaWVzLmxlbmd0aCA+IDAgPyAkLmVhY2goZW50cmllcy5zcGxpdChcIlwiKSwgZnVuY3Rpb24obmR4LCBlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzLndoaWNoID0gZW50cnkuY2hhckNvZGVBdCgwKSwgaWdub3JhYmxlID0gITEsIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogKHNlbGVjdGlvbi5iZWdpbiA9PT0gc2VsZWN0aW9uLmVuZCAtIDEgJiYgY2FyZXQoaW5wdXQsIHNlZWtQcmV2aW91cyhzZWxlY3Rpb24uYmVnaW4gKyAxKSwgc2VsZWN0aW9uLmVuZCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmtleUNvZGUgPSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUsIEV2ZW50SGFuZGxlcnMua2V5ZG93bkV2ZW50LmNhbGwoaW5wdXQsIGUpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVFdmVudDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsIHZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCghMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVNYXNrKSAmJiAodmFsdWUgPSBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgdmFsdWUsIG9wdHMpIHx8IHZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdChcIlwiKSwgY2hlY2tWYWwoaW5wdXQsICEwLCAhMSwgaXNSVEwgPyB2YWx1ZS5yZXZlcnNlKCkgOiB2YWx1ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIiksIChvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzIHx8IG9wdHMuY2xlYXJJbmNvbXBsZXRlKSAmJiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSAmJiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlU2V0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvY3VzRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnNob3dNYXNrT25Gb2N1cyAmJiAoIW9wdHMuc2hvd01hc2tPbkhvdmVyIHx8IG9wdHMuc2hvd01hc2tPbkhvdmVyICYmIFwiXCIgPT09IG5wdFZhbHVlKSAmJiAoaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpID8gd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSkgOiAhMSA9PT0gbW91c2VFbnRlciAmJiBjYXJldChpbnB1dCwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgITAgPT09IG9wdHMucG9zaXRpb25DYXJldE9uVGFiICYmICExID09PSBtb3VzZUVudGVyICYmIFwiXCIgIT09IG5wdFZhbHVlICYmICh3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGNhcmV0KGlucHV0KSksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudC5hcHBseShpbnB1dCwgWyBlLCAhMCBdKSksIHVuZG9WYWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbW91c2VsZWF2ZUV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW91c2VFbnRlciA9ICExLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKS5zbGljZSgpLCBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnB0VmFsdWUgIT09IGlucHV0LmdldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIpICYmIFwiXCIgIT09IG5wdFZhbHVlICYmICgtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSAmJiBucHRWYWx1ZSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpID8gYnVmZmVyID0gW10gOiBjbGVhck9wdGlvbmFsVGFpbChidWZmZXIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50OiBmdW5jdGlvbihlLCB0YWJiZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1JhZGl4Rm9jdXMoY2xpY2tQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2cHNbY2xpY2tQb3NdID09PSB1bmRlZmluZWQgfHwgdnBzW2NsaWNrUG9zXS5pbnB1dCA9PT0gZ2V0UGxhY2Vob2xkZXIoY2xpY2tQb3MpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrUG9zIDwgc2Vla05leHQoLTEpKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4UG9zID0gJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgZ2V0QnVmZmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSAhPT0gcmFkaXhQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdnAgaW4gdnBzKSBpZiAocmFkaXhQb3MgPCB2cCAmJiB2cHNbdnBdLmlucHV0ICE9PSBnZXRQbGFjZWhvbGRlcih2cCkpIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRDYXJldCA9IGNhcmV0KGlucHV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJiZWQgJiYgKGlzUlRMID8gc2VsZWN0ZWRDYXJldC5lbmQgPSBzZWxlY3RlZENhcmV0LmJlZ2luIDogc2VsZWN0ZWRDYXJldC5iZWdpbiA9IHNlbGVjdGVkQ2FyZXQuZW5kKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENhcmV0LmJlZ2luID09PSBzZWxlY3RlZENhcmV0LmVuZCkgc3dpdGNoIChvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmFkaXhGb2N1c1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb1JhZGl4Rm9jdXMoc2VsZWN0ZWRDYXJldC5iZWdpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4UG9zID0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBvcHRzLm51bWVyaWNJbnB1dCA/IHNlZWtOZXh0KHJhZGl4UG9zKSA6IHJhZGl4UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4sIGx2Y2xpY2tQb3NpdGlvbiA9IGdldExhc3RWYWxpZFBvc2l0aW9uKGNsaWNrUG9zaXRpb24sICEwKSwgbGFzdFBvc2l0aW9uID0gc2Vla05leHQobHZjbGlja1Bvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tQb3NpdGlvbiA8IGxhc3RQb3NpdGlvbikgY2FyZXQoaW5wdXQsIGlzTWFzayhjbGlja1Bvc2l0aW9uLCAhMCkgfHwgaXNNYXNrKGNsaWNrUG9zaXRpb24gLSAxLCAhMCkgPyBjbGlja1Bvc2l0aW9uIDogc2Vla05leHQoY2xpY2tQb3NpdGlvbikpOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdmNsaWNrUG9zaXRpb25dLCB0dCA9IGdldFRlc3RUZW1wbGF0ZShsYXN0UG9zaXRpb24sIGx2cCA/IGx2cC5tYXRjaC5sb2NhdG9yIDogdW5kZWZpbmVkLCBsdnApLCBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhc3RQb3NpdGlvbiwgdHQubWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gcGxhY2Vob2xkZXIgJiYgZ2V0QnVmZmVyKClbbGFzdFBvc2l0aW9uXSAhPT0gcGxhY2Vob2xkZXIgJiYgITAgIT09IHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdHQubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzayhsYXN0UG9zaXRpb24sICEwKSAmJiB0dC5tYXRjaC5kZWYgPT09IHBsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gc2Vla05leHQobGFzdFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja1Bvc2l0aW9uID49IG5ld1BvcyB8fCBjbGlja1Bvc2l0aW9uID09PSBsYXN0UG9zaXRpb24pICYmIChsYXN0UG9zaXRpb24gPSBuZXdQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBsYXN0UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRibGNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY3V0RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCAkaW5wdXQgPSAkKGlucHV0KSwgcG9zID0gY2FyZXQoaW5wdXQpLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCBjbGlwYm9hcmREYXRhID0gd2luZG93LmNsaXBib2FyZERhdGEgfHwgZXYuY2xpcGJvYXJkRGF0YSwgY2xpcERhdGEgPSBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKHBvcy5lbmQsIHBvcy5iZWdpbikgOiBnZXRCdWZmZXIoKS5zbGljZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHRcIiwgaXNSVEwgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGNsaXBEYXRhLmpvaW4oXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCAmJiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksIGhhbmRsZVJlbW92ZShpbnB1dCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MpLCBcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGdldE1hc2tTZXQoKS5wLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSAmJiAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyksIGlucHV0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gbnB0VmFsdWUgJiYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIG5wdFZhbHVlID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyBidWZmZXIgPSBbXSA6IGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgITEgPT09IGlzQ29tcGxldGUoYnVmZmVyKSAmJiAoc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCksIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmIChyZXNldE1hc2tTZXQoKSwgYnVmZmVyID0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IFtdIDogZ2V0QnVmZmVyVGVtcGxhdGUoKS5zbGljZSgpKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCB1bmRlZmluZWQsIGUpKSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBtb3VzZUVudGVyID0gITAsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0ICYmIG9wdHMuc2hvd01hc2tPbkhvdmVyICYmIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICRlbC50cmlnZ2VyKFwiY2hhbmdlXCIpLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIGVsLmlucHV0bWFzay5fdmFsdWVHZXQgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGVsLmlucHV0bWFzay5fdmFsdWVTZXQoZWwuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSwgITApLCBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgZ2V0QnVmZmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNldEV2ZW50OiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZWwudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLnBvc2l0aW9uQ29sb3JNYXNrID0gZnVuY3Rpb24oaW5wdXQsIHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5sZWZ0ID0gdGVtcGxhdGUub2Zmc2V0TGVmdCArIFwicHhcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlQnVmZmVyO1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uT2JqICE9PSB1bmRlZmluZWQpIHN3aXRjaCAoYWN0aW9uT2JqLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwgPSBhY3Rpb25PYmouZWwsIGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwidW5tYXNrZWR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsICE9PSB1bmRlZmluZWQgJiYgYWN0aW9uT2JqLnZhbHVlID09PSB1bmRlZmluZWQgfHwgKHZhbHVlQnVmZmVyID0gYWN0aW9uT2JqLnZhbHVlLCBcclxuICAgICAgICAgICAgICAgIHZhbHVlQnVmZmVyID0gKCQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgdmFsdWVCdWZmZXIsIG9wdHMpIHx8IHZhbHVlQnVmZmVyIDogdmFsdWVCdWZmZXIpLnNwbGl0KFwiXCIpLCBcclxuICAgICAgICAgICAgICAgIGNoZWNrVmFsKHVuZGVmaW5lZCwgITEsICExLCBpc1JUTCA/IHZhbHVlQnVmZmVyLnJldmVyc2UoKSA6IHZhbHVlQnVmZmVyKSwgJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVXcml0ZSkgJiYgb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCB1bmRlZmluZWQsIGdldEJ1ZmZlcigpLCAwLCBvcHRzKSksIFxyXG4gICAgICAgICAgICAgICAgdW5tYXNrZWR2YWx1ZShlbCk7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJtYXNrXCI6XHJcbiAgICAgICAgICAgICAgICAhZnVuY3Rpb24oZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub2ZmKGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKGlucHV0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VHlwZSA9IGlucHV0LmdldEF0dHJpYnV0ZShcInR5cGVcIiksIGlzU3VwcG9ydGVkID0gXCJJTlBVVFwiID09PSBpbnB1dC50YWdOYW1lICYmIC0xICE9PSAkLmluQXJyYXkoZWxlbWVudFR5cGUsIG9wdHMuc3VwcG9ydHNJbnB1dFR5cGUpIHx8IGlucHV0LmlzQ29udGVudEVkaXRhYmxlIHx8IFwiVEVYVEFSRUFcIiA9PT0gaW5wdXQudGFnTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1N1cHBvcnRlZCkgaWYgKFwiSU5QVVRcIiA9PT0gaW5wdXQudGFnTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBlbGVtZW50VHlwZSksIGlzU3VwcG9ydGVkID0gXCJ0ZXh0XCIgPT09IGVsLnR5cGUsIGVsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlzU3VwcG9ydGVkID0gXCJwYXJ0aWFsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMSAhPT0gaXNTdXBwb3J0ZWQgPyBmdW5jdGlvbihucHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldHRlcigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dG1hc2sgPyB0aGlzLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPyB0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAtMSAhPT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMgJiYgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IChpc1JUTCA/IGNsZWFyT3B0aW9uYWxUYWlsKGdldEJ1ZmZlcigpLnNsaWNlKCkpLnJldmVyc2UoKSA6IGNsZWFyT3B0aW9uYWxUYWlsKGdldEJ1ZmZlcigpLnNsaWNlKCkpKS5qb2luKFwiXCIpIDogdmFsdWVHZXQuY2FsbCh0aGlzKSA6IFwiXCIgOiB2YWx1ZUdldC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0dGVyKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQuY2FsbCh0aGlzLCB2YWx1ZSksIHRoaXMuaW5wdXRtYXNrICYmICQodGhpcykudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlR2V0LCB2YWx1ZVNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbnB0LmlucHV0bWFzay5fX3ZhbHVlR2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBvcHRzLm5vVmFsdWVQYXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiICE9IHR5cGVvZiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgKE9iamVjdC5nZXRQcm90b3R5cGVPZiA9IFwib2JqZWN0XCIgPT09IF90eXBlb2YoXCJ0ZXN0XCIuX19wcm90b19fKSA/IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuX19wcm90b19fO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3QuY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVQcm9wZXJ0eSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKG5wdCksIFwidmFsdWVcIikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5ICYmIHZhbHVlUHJvcGVydHkuZ2V0ICYmIHZhbHVlUHJvcGVydHkuc2V0ID8gKHZhbHVlR2V0ID0gdmFsdWVQcm9wZXJ0eS5nZXQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQgPSB2YWx1ZVByb3BlcnR5LnNldCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5wdCwgXCJ2YWx1ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpIDogXCJJTlBVVFwiICE9PSBucHQudGFnTmFtZSAmJiAodmFsdWVHZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlU2V0ID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIG5wdC5fX2xvb2t1cEdldHRlcl9fKFwidmFsdWVcIikgJiYgKHZhbHVlR2V0ID0gbnB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0ID0gbnB0Ll9fbG9va3VwU2V0dGVyX18oXCJ2YWx1ZVwiKSwgbnB0Ll9fZGVmaW5lR2V0dGVyX18oXCJ2YWx1ZVwiLCBnZXR0ZXIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0Ll9fZGVmaW5lU2V0dGVyX18oXCJ2YWx1ZVwiLCBzZXR0ZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnB0LmlucHV0bWFzay5fX3ZhbHVlR2V0ID0gdmFsdWVHZXQsIG5wdC5pbnB1dG1hc2suX192YWx1ZVNldCA9IHZhbHVlU2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuaW5wdXRtYXNrLl92YWx1ZUdldCA9IGZ1bmN0aW9uKG92ZXJydWxlUlRMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1JUTCAmJiAhMCAhPT0gb3ZlcnJ1bGVSVEwgPyB2YWx1ZUdldC5jYWxsKHRoaXMuZWwpLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogdmFsdWVHZXQuY2FsbCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBucHQuaW5wdXRtYXNrLl92YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlLCBvdmVycnVsZVJUTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldC5jYWxsKHRoaXMuZWwsIG51bGwgPT09IHZhbHVlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgPyBcIlwiIDogITAgIT09IG92ZXJydWxlUlRMICYmIGlzUlRMID8gdmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVHZXQgPT09IHVuZGVmaW5lZCAmJiAodmFsdWVHZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24odHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC52YWxIb29rcyAmJiAoJC52YWxIb29rc1t0eXBlXSA9PT0gdW5kZWZpbmVkIHx8ICEwICE9PSAkLnZhbEhvb2tzW3R5cGVdLmlucHV0bWFza3BhdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGhvb2tHZXQgPSAkLnZhbEhvb2tzW3R5cGVdICYmICQudmFsSG9va3NbdHlwZV0uZ2V0ID8gJC52YWxIb29rc1t0eXBlXS5nZXQgOiBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWxob29rU2V0ID0gJC52YWxIb29rc1t0eXBlXSAmJiAkLnZhbEhvb2tzW3R5cGVdLnNldCA/ICQudmFsSG9va3NbdHlwZV0uc2V0IDogZnVuY3Rpb24oZWxlbSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS52YWx1ZSA9IHZhbHVlLCBlbGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQudmFsSG9va3NbdHlwZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmlucHV0bWFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzaykgcmV0dXJuIGVsZW0uaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWxob29rR2V0KGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICE9PSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsIHVuZGVmaW5lZCwgZWxlbS5pbnB1dG1hc2subWFza3NldC52YWxpZFBvc2l0aW9ucykgfHwgITAgIT09IG9wdHMubnVsbGFibGUgPyByZXN1bHQgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxob29rR2V0KGVsZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbihlbGVtLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCAkZWxlbSA9ICQoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgPSB2YWxob29rU2V0KGVsZW0sIHZhbHVlKSwgZWxlbS5pbnB1dG1hc2sgJiYgJGVsZW0udHJpZ2dlcihcInNldHZhbHVlXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtYXNrcGF0Y2g6ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShucHQudHlwZSksIGZ1bmN0aW9uKG5wdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKG5wdCwgXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRtYXNrLl92YWx1ZUdldCgpICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obnB0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oaW5wdXQpIDogaW5wdXQuaW5wdXRtYXNrID0gdW5kZWZpbmVkLCBpc1N1cHBvcnRlZDtcclxuICAgICAgICAgICAgICAgICAgICB9KGVsZW0sIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gaXNTdXBwb3J0ZWQgJiYgKGVsID0gZWxlbSwgJGVsID0gJChlbCksIC0xID09PSAobWF4TGVuZ3RoID0gZWwgIT09IHVuZGVmaW5lZCA/IGVsLm1heExlbmd0aCA6IHVuZGVmaW5lZCkgJiYgKG1heExlbmd0aCA9IHVuZGVmaW5lZCksIFxyXG4gICAgICAgICAgICAgICAgICAgICEwID09PSBvcHRzLmNvbG9yTWFzayAmJiBpbml0aWFsaXplQ29sb3JNYXNrKGVsKSwgYW5kcm9pZCAmJiAoZWwuaGFzT3duUHJvcGVydHkoXCJpbnB1dG1vZGVcIikgJiYgKGVsLmlucHV0bW9kZSA9IG9wdHMuaW5wdXRtb2RlLCBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpbnB1dG1vZGVcIiwgb3B0cy5pbnB1dG1vZGUpKSwgXCJydGZtXCIgPT09IG9wdHMuYW5kcm9pZEhhY2sgJiYgKCEwICE9PSBvcHRzLmNvbG9yTWFzayAmJiBpbml0aWFsaXplQ29sb3JNYXNrKGVsKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9IFwicGFzc3dvcmRcIikpLCAhMCA9PT0gaXNTdXBwb3J0ZWQgJiYgKEV2ZW50UnVsZXIub24oZWwsIFwic3VibWl0XCIsIEV2ZW50SGFuZGxlcnMuc3VibWl0RXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcInJlc2V0XCIsIEV2ZW50SGFuZGxlcnMucmVzZXRFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwibW91c2VlbnRlclwiLCBFdmVudEhhbmRsZXJzLm1vdXNlZW50ZXJFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiYmx1clwiLCBFdmVudEhhbmRsZXJzLmJsdXJFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwiZm9jdXNcIiwgRXZlbnRIYW5kbGVycy5mb2N1c0V2ZW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWxlYXZlXCIsIEV2ZW50SGFuZGxlcnMubW91c2VsZWF2ZUV2ZW50KSwgITAgIT09IG9wdHMuY29sb3JNYXNrICYmIEV2ZW50UnVsZXIub24oZWwsIFwiY2xpY2tcIiwgRXZlbnRIYW5kbGVycy5jbGlja0V2ZW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJkYmxjbGlja1wiLCBFdmVudEhhbmRsZXJzLmRibGNsaWNrRXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcInBhc3RlXCIsIEV2ZW50SGFuZGxlcnMucGFzdGVFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiZHJhZ2Ryb3BcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJkcm9wXCIsIEV2ZW50SGFuZGxlcnMucGFzdGVFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiY3V0XCIsIEV2ZW50SGFuZGxlcnMuY3V0RXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBsZXRlXCIsIG9wdHMub25jb21wbGV0ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiaW5jb21wbGV0ZVwiLCBvcHRzLm9uaW5jb21wbGV0ZSksIEV2ZW50UnVsZXIub24oZWwsIFwiY2xlYXJlZFwiLCBvcHRzLm9uY2xlYXJlZCksIFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZHJvaWQgfHwgITAgPT09IG9wdHMuaW5wdXRFdmVudE9ubHkgPyBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJtYXhMZW5ndGhcIikgOiAoRXZlbnRSdWxlci5vbihlbCwgXCJrZXlkb3duXCIsIEV2ZW50SGFuZGxlcnMua2V5ZG93bkV2ZW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJrZXlwcmVzc1wiLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQpKSwgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wb3NpdGlvbnN0YXJ0XCIsICQubm9vcCksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcG9zaXRpb251cGRhdGVcIiwgJC5ub29wKSwgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wb3NpdGlvbmVuZFwiLCAkLm5vb3ApLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImtleXVwXCIsICQubm9vcCksIEV2ZW50UnVsZXIub24oZWwsIFwiaW5wdXRcIiwgRXZlbnRIYW5kbGVycy5pbnB1dEZhbGxCYWNrRXZlbnQpLCBcclxuICAgICAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImJlZm9yZWlucHV0XCIsICQubm9vcCkpLCBFdmVudFJ1bGVyLm9uKGVsLCBcInNldHZhbHVlXCIsIEV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZSA9IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSwgXCJcIiAhPT0gZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCkgfHwgITEgPT09IG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbml0aWFsVmFsdWUgPSAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApLCBvcHRzKSB8fCBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSA6IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBpbml0aWFsVmFsdWUgJiYgY2hlY2tWYWwoZWwsICEwLCAhMSwgaXNSVEwgPyBpbml0aWFsVmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpIDogaW5pdGlhbFZhbHVlLnNwbGl0KFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZG9WYWx1ZSA9IGJ1ZmZlci5qb2luKFwiXCIpLCAhMSA9PT0gaXNDb21wbGV0ZShidWZmZXIpICYmIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmIHJlc2V0TWFza1NldCgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbCAmJiAoLTEgPT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgPyBidWZmZXIgPSBbXSA6IGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoZWwsIGJ1ZmZlciksIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsICYmIGNhcmV0KGVsLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfShlbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImZvcm1hdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlQnVmZmVyID0gKCQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgYWN0aW9uT2JqLnZhbHVlLCBvcHRzKSB8fCBhY3Rpb25PYmoudmFsdWUgOiBhY3Rpb25PYmoudmFsdWUpLnNwbGl0KFwiXCIpLCBcclxuICAgICAgICAgICAgICAgIGNoZWNrVmFsKHVuZGVmaW5lZCwgITAsICExLCBpc1JUTCA/IHZhbHVlQnVmZmVyLnJldmVyc2UoKSA6IHZhbHVlQnVmZmVyKSwgYWN0aW9uT2JqLm1ldGFkYXRhID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgbWFza3NldCwgb3B0cylcclxuICAgICAgICAgICAgICAgIH0gOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwiaXNWYWxpZFwiOlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uT2JqLnZhbHVlID8gKHZhbHVlQnVmZmVyID0gYWN0aW9uT2JqLnZhbHVlLnNwbGl0KFwiXCIpLCBjaGVja1ZhbCh1bmRlZmluZWQsICEwLCAhMCwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlcikpIDogYWN0aW9uT2JqLnZhbHVlID0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpLCBybCA9IGRldGVybWluZUxhc3RSZXF1aXJlZFBvc2l0aW9uKCksIGxtaWIgPSBidWZmZXIubGVuZ3RoIC0gMTsgbG1pYiA+IHJsICYmICFpc01hc2sobG1pYik7IGxtaWItLSkgO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlci5zcGxpY2UocmwsIGxtaWIgKyAxIC0gcmwpLCBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgYWN0aW9uT2JqLnZhbHVlID09PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwiZ2V0ZW1wdHltYXNrXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwgJiYgZWwuaW5wdXRtYXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVsID0gJChlbCksIGVsLmlucHV0bWFzay5fdmFsdWVTZXQob3B0cy5hdXRvVW5tYXNrID8gdW5tYXNrZWR2YWx1ZShlbCkgOiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub2ZmKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsKSwgXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsIFwidmFsdWVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIGVsLl9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiAoZWwuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0KSksIGVsLmlucHV0bWFzayA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImdldG1ldGFkYXRhXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0FycmF5KG1hc2tzZXQubWV0YWRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tUYXJnZXQgPSBnZXRNYXNrVGVtcGxhdGUoITAsIDAsICExKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkLmVhY2gobWFza3NldC5tZXRhZGF0YSwgZnVuY3Rpb24obmR4LCBtdGR0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdGR0Lm1hc2sgPT09IG1hc2tUYXJnZXQpIHJldHVybiBtYXNrVGFyZ2V0ID0gbXRkdCwgITE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSksIG1hc2tUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza3NldC5tZXRhZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LCBtb2JpbGUgPSAvbW9iaWxlL2kudGVzdCh1YSksIGllbW9iaWxlID0gL2llbW9iaWxlL2kudGVzdCh1YSksIGlwaG9uZSA9IC9pcGhvbmUvaS50ZXN0KHVhKSAmJiAhaWVtb2JpbGUsIGFuZHJvaWQgPSAvYW5kcm9pZC9pLnRlc3QodWEpICYmICFpZW1vYmlsZTtcclxuICAgICAgICByZXR1cm4gSW5wdXRtYXNrLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAgICAgZGF0YUF0dHJpYnV0ZTogXCJkYXRhLWlucHV0bWFza1wiLFxyXG4gICAgICAgICAgICBkZWZhdWx0czoge1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiX1wiLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxtYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJbXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIl1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHF1YW50aWZpZXJtYXJrZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydDogXCJ7XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBcIn1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyb3VwbWFya2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFwiKFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogXCIpXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhbHRlcm5hdG9ybWFya2VyOiBcInxcIixcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNoYXI6IFwiXFxcXFwiLFxyXG4gICAgICAgICAgICAgICAgbWFzazogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb25jb21wbGV0ZTogJC5ub29wLFxyXG4gICAgICAgICAgICAgICAgb25pbmNvbXBsZXRlOiAkLm5vb3AsXHJcbiAgICAgICAgICAgICAgICBvbmNsZWFyZWQ6ICQubm9vcCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogMCxcclxuICAgICAgICAgICAgICAgIGdyZWVkeTogITAsXHJcbiAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1hc2tPblN1Ym1pdDogITEsXHJcbiAgICAgICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITAsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRNb2RlOiAhMCxcclxuICAgICAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITEsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bjogJC5ub29wLFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVQYXN0ZTogZnVuY3Rpb24ocGFzdGVkVmFsdWUsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVNYXNrKSA/IG9wdHMub25CZWZvcmVNYXNrLmNhbGwodGhpcywgcGFzdGVkVmFsdWUsIG9wdHMpIDogcGFzdGVkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2hvd01hc2tPbkZvY3VzOiAhMCxcclxuICAgICAgICAgICAgICAgIHNob3dNYXNrT25Ib3ZlcjogITAsXHJcbiAgICAgICAgICAgICAgICBvbktleVZhbGlkYXRpb246ICQubm9vcCxcclxuICAgICAgICAgICAgICAgIHNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI6IFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0QWxpZ246ICExLFxyXG4gICAgICAgICAgICAgICAgdW5kb09uRXNjYXBlOiAhMCxcclxuICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICByYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBrZWVwU3RhdGljOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uVGFiOiAhMCxcclxuICAgICAgICAgICAgICAgIHRhYlRocm91Z2g6ICExLFxyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNJbnB1dFR5cGU6IFsgXCJ0ZXh0XCIsIFwidGVsXCIsIFwicGFzc3dvcmRcIiBdLFxyXG4gICAgICAgICAgICAgICAgaWdub3JhYmxlczogWyA4LCA5LCAxMywgMTksIDI3LCAzMywgMzQsIDM1LCAzNiwgMzcsIDM4LCAzOSwgNDAsIDQ1LCA0NiwgOTMsIDExMiwgMTEzLCAxMTQsIDExNSwgMTE2LCAxMTcsIDExOCwgMTE5LCAxMjAsIDEyMSwgMTIyLCAxMjMsIDAsIDIyOSBdLFxyXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNhbkNsZWFyUG9zaXRpb246ICQubm9vcCxcclxuICAgICAgICAgICAgICAgIHByZVZhbGlkYXRpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXRpY0RlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGppdE1hc2tpbmc6ICExLFxyXG4gICAgICAgICAgICAgICAgbnVsbGFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRFdmVudE9ubHk6ICExLFxyXG4gICAgICAgICAgICAgICAgbm9WYWx1ZVBhdGNoaW5nOiAhMSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcImx2cFwiLFxyXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRtb2RlOiBcInZlcmJhdGltXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvck1hc2s6ICExLFxyXG4gICAgICAgICAgICAgICAgYW5kcm9pZEhhY2s6ICExLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0RGF0YUF0dHJpYnV0ZXM6ICEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBcIjlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05aT/vv70taT/vv71dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvblN5bWJvbDogXCIqXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLVphLXo/Py1OPz8/Tu+/vUHvv70tQT9B77+9XVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb25TeW1ib2w6IFwiKlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCIqXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOWk/77+9LWk/77+9QS1aYS16Pz8tTj8/P07vv71B77+9LUE/Qe+/vV1cIixcclxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbGlhc2VzOiB7fSxcclxuICAgICAgICAgICAgbWFza3NDYWNoZToge30sXHJcbiAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKGVsZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbXBvcnRBdHRyaWJ1dGVPcHRpb25zKG5wdCwgb3B0cywgdXNlck9wdGlvbnMsIGRhdGFBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IG9wdHMuaW1wb3J0RGF0YUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbiwgZGF0YW9wdGlvbnMsIG9wdGlvbkRhdGEsIHAsIGltcG9ydE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gKG9wdGlvbkRhdGEgPSBvcHRpb25EYXRhICE9PSB1bmRlZmluZWQgPyBvcHRpb25EYXRhIDogbnB0LmdldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlICsgXCItXCIgKyBvcHRpb24pKSAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3B0aW9uRGF0YSAmJiAoMCA9PT0gb3B0aW9uLmluZGV4T2YoXCJvblwiKSA/IG9wdGlvbkRhdGEgPSB3aW5kb3dbb3B0aW9uRGF0YV0gOiBcImZhbHNlXCIgPT09IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhID0gITEgOiBcInRydWVcIiA9PT0gb3B0aW9uRGF0YSAmJiAob3B0aW9uRGF0YSA9ICEwKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9wdGlvbnNbb3B0aW9uXSA9IG9wdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBhdHRyT3B0aW9ucyA9IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyT3B0aW9ucyAmJiBcIlwiICE9PSBhdHRyT3B0aW9ucyAmJiAoYXR0ck9wdGlvbnMgPSBhdHRyT3B0aW9ucy5yZXBsYWNlKG5ldyBSZWdFeHAoXCInXCIsIFwiZ1wiKSwgJ1wiJyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhb3B0aW9ucyA9IEpTT04ucGFyc2UoXCJ7XCIgKyBhdHRyT3B0aW9ucyArIFwifVwiKSksIGRhdGFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwIGluIGRhdGFvcHRpb25zKSBpZiAoXCJhbGlhc1wiID09PSBwLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gZGF0YW9wdGlvbnNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSksIHVzZXJPcHRpb25zLmFsaWFzICYmIHJlc29sdmVBbGlhcyh1c2VyT3B0aW9ucy5hbGlhcywgdXNlck9wdGlvbnMsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG9wdGlvbiBpbiBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBkYXRhb3B0aW9ucykgaWYgKHAudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRPcHRpb24ob3B0aW9uLCBvcHRpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoITAsIG9wdHMsIHVzZXJPcHRpb25zKSwgKFwicnRsXCIgPT09IG5wdC5kaXIgfHwgb3B0cy5yaWdodEFsaWduKSAmJiAobnB0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIChcInJ0bFwiID09PSBucHQuZGlyIHx8IG9wdHMubnVtZXJpY0lucHV0KSAmJiAobnB0LmRpciA9IFwibHRyXCIsIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuaXNSVEwgPSAhMCksIG9wdHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXHJcbiAgICAgICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsICQuZWFjaChlbGVtcywgZnVuY3Rpb24obmR4LCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY29wZWRPcHRzID0gJC5leHRlbmQoITAsIHt9LCB0aGF0Lm9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoZWwsIHNjb3BlZE9wdHMsICQuZXh0ZW5kKCEwLCB7fSwgdGhhdC51c2VyT3B0aW9ucyksIHRoYXQuZGF0YUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tzZXQgPSBnZW5lcmF0ZU1hc2tTZXQoc2NvcGVkT3B0cywgdGhhdC5ub01hc2tzQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tzZXQgIT09IHVuZGVmaW5lZCAmJiAoZWwuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQgJiYgKGVsLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlbW92ZSgpKSwgZWwuaW5wdXRtYXNrID0gbmV3IElucHV0bWFzayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgITApLCBcclxuICAgICAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cyA9IHNjb3BlZE9wdHMsIGVsLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0aGF0Lm5vTWFza3NDYWNoZSwgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dCwgZWwuaW5wdXRtYXNrLmVsID0gZWwsIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5tYXNrc2V0ID0gbWFza3NldCwgJC5kYXRhKGVsLCBcIl9pbnB1dG1hc2tfb3B0c1wiLCBzY29wZWRPcHRzKSwgbWFza1Njb3BlLmNhbGwoZWwuaW5wdXRtYXNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtYXNrXCJcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9KSwgZWxlbXMgJiYgZWxlbXNbMF0gPyBlbGVtc1swXS5pbnB1dG1hc2sgfHwgdGhpcyA6IHRoaXM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24ob3B0aW9ucywgbm9yZW1hc2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25zID8gdGhpcy5vcHRzW29wdGlvbnNdIDogXCJvYmplY3RcIiA9PT0gKHZvaWQgMCA9PT0gb3B0aW9ucyA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9wdGlvbnMpKSA/ICgkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKSwgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSBub3JlbWFzayAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxyXG4gICAgICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1bm1hc2tlZHZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0ZW1wdHltYXNrXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNDb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxyXG4gICAgICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcclxuICAgICAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNWYWxpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8IGdlbmVyYXRlTWFza1NldCh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXHJcbiAgICAgICAgICAgICAgICBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcImZvcm1hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmFseXNlTWFzazogZnVuY3Rpb24obWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBNYXNrVG9rZW4oaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgITEsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDFcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogbXRva2VuLm1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdleE1hc2spIDAgPT09IGVsZW1lbnQuaW5kZXhPZihcIltcIikgfHwgZXNjYXBlZCAmJiAvXFxcXGR8XFxcXHN8XFxcXHddL2kudGVzdChlbGVtZW50KSB8fCBcIi5cIiA9PT0gZWxlbWVudCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKGVsZW1lbnQsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICB9KSA6IChlc2NhcGVkICYmIChlbGVtZW50ID0gZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDFdKSwgJC5lYWNoKGVsZW1lbnQuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdLCBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiBwcmV2TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBwcmV2TWF0Y2guZGVmICE9PSBsbW50ICYmIG51bGwgIT09IHByZXZNYXRjaC5mbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICE9PSB1bmRlZmluZWQgPyBsbW50IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBsbW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKSwgZXNjYXBlZCA9ICExOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tkZWYgPSAob3B0cy5kZWZpbml0aW9ucyA/IG9wdHMuZGVmaW5pdGlvbnNbZWxlbWVudF0gOiB1bmRlZmluZWQpIHx8IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZWxlbWVudF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZGVmICYmICFlc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmV2YWxpZGF0b3JzID0gbWFza2RlZi5wcmV2YWxpZGF0b3IsIHByZXZhbGlkYXRvcnNMID0gcHJldmFsaWRhdG9ycyA/IHByZXZhbGlkYXRvcnMubGVuZ3RoIDogMCwgaSA9IDE7IGkgPCBtYXNrZGVmLmNhcmRpbmFsaXR5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmFsaWRhdG9yID0gcHJldmFsaWRhdG9yc0wgPj0gaSA/IHByZXZhbGlkYXRvcnNbaSAtIDFdIDogW10sIHZhbGlkYXRvciA9IHByZXZhbGlkYXRvci52YWxpZGF0b3IsIGNhcmRpbmFsaXR5ID0gcHJldmFsaWRhdG9yLmNhcmRpbmFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiB2YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiB2YWxpZGF0b3IgPyBuZXcgUmVnRXhwKHZhbGlkYXRvciwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gdmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkgOiBuZXcgUmVnRXhwKFwiLlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IGNhcmRpbmFsaXR5IHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IChtYXNrZGVmLmRlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXNrZGVmLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbWFza2RlZi52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IG1hc2tkZWYudmFsaWRhdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiBtYXNrZGVmLmNhcmRpbmFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG1hc2tkZWYuY2FzaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IG10b2tlbi5pc09wdGlvbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgbnVsbCAhPT0gcHJldk1hdGNoLmZuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGVzY2FwZWQgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgJC5lYWNoKG1hc2tUb2tlbi5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIHRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IG5leHRUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQsIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyLmVuZCkpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXNlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRPcGVuaW5nVG9rZW4sIG0pLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSkubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpIDogY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpbnNlcnRUZXN0RGVmaW5pdGlvbihjdXJyZW50VG9rZW4sIG0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlcyA9IG1hc2tUb2tlbi5tYXRjaGVzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXRjaCBpbiBtYXNrVG9rZW4ubWF0Y2hlcykgaWYgKG1hc2tUb2tlbi5tYXRjaGVzLmhhc093blByb3BlcnR5KG1hdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW50TWF0Y2ggPSBwYXJzZUludChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0uaXNRdWFudGlmaWVyICYmIG1hc2tUb2tlbi5tYXRjaGVzW2ludE1hdGNoICsgMV0gJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXS5pc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXQgPSBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlcy5zcGxpY2UobWF0Y2gsIDEpLCBtYXNrVG9rZW4ubWF0Y2hlcy5zcGxpY2UoaW50TWF0Y2ggKyAxLCAwLCBxdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdLm1hdGNoZXMgIT09IHVuZGVmaW5lZCA/IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSA9IHJldmVyc2VUb2tlbnMobWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKSA6IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSA9IGZ1bmN0aW9uKHN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3QgPT09IG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgPyBzdCA9IG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kIDogc3QgPT09IG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kID8gc3QgPSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0IDogc3QgPT09IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgPyBzdCA9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kIDogc3QgPT09IG9wdHMuZ3JvdXBtYXJrZXIuZW5kICYmIChzdCA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrVG9rZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gsIG0sIG9wZW5pbmdUb2tlbiwgY3VycmVudE9wZW5pbmdUb2tlbiwgYWx0ZXJuYXRvciwgbGFzdE1hdGNoLCBncm91cFRva2VuLCB0b2tlbml6ZXIgPSAvKD86Wz8qK118XFx7WzAtOVxcK1xcKl0rKD86LFswLTlcXCtcXCpdKik/XFx9KXxbXi4/KiteJHtbXSgpfFxcXFxdK3wuL2csIHJlZ2V4VG9rZW5pemVyID0gL1xcW1xcXj9dPyg/OlteXFxcXFxcXV0rfFxcXFxbXFxTXFxzXT8pKl0/fFxcXFwoPzowKD86WzAtM11bMC03XXswLDJ9fFs0LTddWzAtN10/KT98WzEtOV1bMC05XSp8eFswLTlBLUZhLWZdezJ9fHVbMC05QS1GYS1mXXs0fXxjW0EtWmEtel18W1xcU1xcc10/KXxcXCgoPzpcXD9bOj0hXT8pP3woPzpbPyorXXxcXHtbMC05XSsoPzosWzAtOV0qKT9cXH0pXFw/P3xbXi4/KiteJHtbKCl8XFxcXF0rfC4vZywgZXNjYXBlZCA9ICExLCBjdXJyZW50VG9rZW4gPSBuZXcgTWFza1Rva2VuKCksIG9wZW5lbmluZ3MgPSBbXSwgbWFza1Rva2VucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChyZWdleE1hc2sgJiYgKG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgPSB1bmRlZmluZWQsIG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kID0gdW5kZWZpbmVkKTsgbWF0Y2ggPSByZWdleE1hc2sgPyByZWdleFRva2VuaXplci5leGVjKG1hc2spIDogdG9rZW5pemVyLmV4ZWMobWFzayk7ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtID0gbWF0Y2hbMF0sIHJlZ2V4TWFzaykgc3dpdGNoIChtLmNoYXJBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIj9cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IFwiezAsMX1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0gPSBcIntcIiArIG0gKyBcIn1cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzY2FwZWQpIGRlZmF1bHRDYXNlKCk7IGVsc2Ugc3dpdGNoIChtLmNoYXJBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmVzY2FwZUNoYXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSAhMCwgcmVnZXhNYXNrICYmIGRlZmF1bHRDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5vcHRpb25hbG1hcmtlci5lbmQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuZ3JvdXBtYXJrZXIuZW5kOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BlbmluZ1Rva2VuID0gb3BlbmVuaW5ncy5wb3AoKSwgb3BlbmluZ1Rva2VuLm9wZW5Hcm91cCA9ICExLCBvcGVuaW5nVG9rZW4gIT09IHVuZGVmaW5lZCkgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdKS5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLmlzQWx0ZXJuYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG1uZHggPSAwOyBtbmR4IDwgYWx0ZXJuYXRvci5tYXRjaGVzLmxlbmd0aDsgbW5keCsrKSBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uaXNHcm91cCA9ICExLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yLm1hdGNoZXNbbW5keF0uYWx0ZXJuYXRvckdyb3VwID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5sZW5ndGggPiAwID8gKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0pLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKSA6IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG9wZW5pbmdUb2tlbik7IGVsc2UgZGVmYXVsdENhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMSwgITApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIG9wdHMucXVhbnRpZmllcm1hcmtlci5zdGFydDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHF1YW50aWZpZXIgPSBuZXcgTWFza1Rva2VuKCExLCAhMSwgITApLCBtcSA9IChtID0gbS5yZXBsYWNlKC9be31dL2csIFwiXCIpKS5zcGxpdChcIixcIiksIG1xMCA9IGlzTmFOKG1xWzBdKSA/IG1xWzBdIDogcGFyc2VJbnQobXFbMF0pLCBtcTEgPSAxID09PSBtcS5sZW5ndGggPyBtcTAgOiBpc05hTihtcVsxXSkgPyBtcVsxXSA6IHBhcnNlSW50KG1xWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiKlwiICE9PSBtcTEgJiYgXCIrXCIgIT09IG1xMSB8fCAobXEwID0gXCIqXCIgPT09IG1xMSA/IDAgOiAxKSwgcXVhbnRpZmllci5xdWFudGlmaWVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBtcTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG1xMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLm1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggPSBtYXRjaGVzLnBvcCgpKS5pc0dyb3VwIHx8ICgoZ3JvdXBUb2tlbiA9IG5ldyBNYXNrVG9rZW4oITApKS5tYXRjaGVzLnB1c2gobWF0Y2gpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZ3JvdXBUb2tlbiksIG1hdGNoZXMucHVzaChtYXRjaCksIG1hdGNoZXMucHVzaChxdWFudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIChtYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpKS5pc0dyb3VwIHx8IChyZWdleE1hc2sgJiYgbnVsbCA9PT0gbWF0Y2guZm4gJiYgXCIuXCIgPT09IG1hdGNoLmRlZiAmJiAobWF0Y2guZm4gPSBuZXcgUmVnRXhwKG1hdGNoLmRlZiwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChncm91cFRva2VuID0gbmV3IE1hc2tUb2tlbighMCkpLm1hdGNoZXMucHVzaChtYXRjaCksIG1hdGNoID0gZ3JvdXBUb2tlbiksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChxdWFudGlmaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmFsdGVybmF0b3JtYXJrZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJUb2tlbiA9IChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdKS5tYXRjaGVzW2N1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNYXRjaCA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ub3Blbkdyb3VwICYmIChzdWJUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IHN1YlRva2VuLmlzR3JvdXAgJiYgITEgPT09IHN1YlRva2VuLmlzQWx0ZXJuYXRvcikgPyBvcGVuZW5pbmdzLnBvcCgpIDogY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgbGFzdE1hdGNoID0gY3VycmVudFRva2VuLm1hdGNoZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0TWF0Y2guaXNBbHRlcm5hdG9yKSBvcGVuZW5pbmdzLnB1c2gobGFzdE1hdGNoKTsgZWxzZSBpZiAobGFzdE1hdGNoLmFsdGVybmF0b3JHcm91cCA/IChhbHRlcm5hdG9yID0gb3BlbmVuaW5ncy5wb3AoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPSAhMSkgOiBhbHRlcm5hdG9yID0gbmV3IE1hc2tUb2tlbighMSwgITEsICExLCAhMCksIGFsdGVybmF0b3IubWF0Y2hlcy5wdXNoKGxhc3RNYXRjaCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2goYWx0ZXJuYXRvciksIGxhc3RNYXRjaC5vcGVuR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNYXRjaC5vcGVuR3JvdXAgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRlcm5hdG9yR3JvdXAgPSBuZXcgTWFza1Rva2VuKCEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3JHcm91cC5hbHRlcm5hdG9yR3JvdXAgPSAhMCwgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3JHcm91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKDtvcGVuZW5pbmdzLmxlbmd0aCA+IDA7ICkgb3BlbmluZ1Rva2VuID0gb3BlbmVuaW5ncy5wb3AoKSwgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUb2tlbi5tYXRjaGVzLmxlbmd0aCA+IDAgJiYgKHZlcmlmeUdyb3VwTWFya2VyKGN1cnJlbnRUb2tlbiksIG1hc2tUb2tlbnMucHVzaChjdXJyZW50VG9rZW4pKSwgXHJcbiAgICAgICAgICAgICAgICAob3B0cy5udW1lcmljSW5wdXQgfHwgb3B0cy5pc1JUTCkgJiYgcmV2ZXJzZVRva2VucyhtYXNrVG9rZW5zWzBdKSwgbWFza1Rva2VucztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIElucHV0bWFzay5leHRlbmREZWZhdWx0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgJC5leHRlbmQoITAsIElucHV0bWFzay5wcm90b3R5cGUuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5leHRlbmREZWZpbml0aW9ucyA9IGZ1bmN0aW9uKGRlZmluaXRpb24pIHtcclxuICAgICAgICAgICAgJC5leHRlbmQoITAsIElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnMsIGRlZmluaXRpb24pO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5leHRlbmRBbGlhc2VzID0gZnVuY3Rpb24oYWxpYXMpIHtcclxuICAgICAgICAgICAgJC5leHRlbmQoITAsIElucHV0bWFzay5wcm90b3R5cGUuYWxpYXNlcywgYWxpYXMpO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5mb3JtYXQgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucywgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIElucHV0bWFzayhvcHRpb25zKS5mb3JtYXQodmFsdWUsIG1ldGFkYXRhKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2sudW5tYXNrID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIElucHV0bWFzayhvcHRpb25zKS51bm1hc2tlZHZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9LCBJbnB1dG1hc2suaXNWYWxpZCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sob3B0aW9ucykuaXNWYWxpZCh2YWx1ZSk7XHJcbiAgICAgICAgfSwgSW5wdXRtYXNrLnJlbW92ZSA9IGZ1bmN0aW9uKGVsZW1zKSB7XHJcbiAgICAgICAgICAgICQuZWFjaChlbGVtcywgZnVuY3Rpb24obmR4LCBlbCkge1xyXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrICYmIGVsLmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4ID0gZnVuY3Rpb24oc3RyKSB7XHJcbiAgICAgICAgICAgIHZhciBzcGVjaWFscyA9IFsgXCIvXCIsIFwiLlwiLCBcIipcIiwgXCIrXCIsIFwiP1wiLCBcInxcIiwgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIiwgXCJcXFxcXCIsIFwiJFwiLCBcIl5cIiBdO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChcIihcXFxcXCIgKyBzcGVjaWFscy5qb2luKFwifFxcXFxcIikgKyBcIilcIiwgXCJnaW1cIiksIFwiXFxcXCQxXCIpO1xyXG4gICAgICAgIH0sIElucHV0bWFzay5rZXlDb2RlID0ge1xyXG4gICAgICAgICAgICBBTFQ6IDE4LFxyXG4gICAgICAgICAgICBCQUNLU1BBQ0U6IDgsXHJcbiAgICAgICAgICAgIEJBQ0tTUEFDRV9TQUZBUkk6IDEyNyxcclxuICAgICAgICAgICAgQ0FQU19MT0NLOiAyMCxcclxuICAgICAgICAgICAgQ09NTUE6IDE4OCxcclxuICAgICAgICAgICAgQ09NTUFORDogOTEsXHJcbiAgICAgICAgICAgIENPTU1BTkRfTEVGVDogOTEsXHJcbiAgICAgICAgICAgIENPTU1BTkRfUklHSFQ6IDkzLFxyXG4gICAgICAgICAgICBDT05UUk9MOiAxNyxcclxuICAgICAgICAgICAgREVMRVRFOiA0NixcclxuICAgICAgICAgICAgRE9XTjogNDAsXHJcbiAgICAgICAgICAgIEVORDogMzUsXHJcbiAgICAgICAgICAgIEVOVEVSOiAxMyxcclxuICAgICAgICAgICAgRVNDQVBFOiAyNyxcclxuICAgICAgICAgICAgSE9NRTogMzYsXHJcbiAgICAgICAgICAgIElOU0VSVDogNDUsXHJcbiAgICAgICAgICAgIExFRlQ6IDM3LFxyXG4gICAgICAgICAgICBNRU5VOiA5MyxcclxuICAgICAgICAgICAgTlVNUEFEX0FERDogMTA3LFxyXG4gICAgICAgICAgICBOVU1QQURfREVDSU1BTDogMTEwLFxyXG4gICAgICAgICAgICBOVU1QQURfRElWSURFOiAxMTEsXHJcbiAgICAgICAgICAgIE5VTVBBRF9FTlRFUjogMTA4LFxyXG4gICAgICAgICAgICBOVU1QQURfTVVMVElQTFk6IDEwNixcclxuICAgICAgICAgICAgTlVNUEFEX1NVQlRSQUNUOiAxMDksXHJcbiAgICAgICAgICAgIFBBR0VfRE9XTjogMzQsXHJcbiAgICAgICAgICAgIFBBR0VfVVA6IDMzLFxyXG4gICAgICAgICAgICBQRVJJT0Q6IDE5MCxcclxuICAgICAgICAgICAgUklHSFQ6IDM5LFxyXG4gICAgICAgICAgICBTSElGVDogMTYsXHJcbiAgICAgICAgICAgIFNQQUNFOiAzMixcclxuICAgICAgICAgICAgVEFCOiA5LFxyXG4gICAgICAgICAgICBVUDogMzgsXHJcbiAgICAgICAgICAgIFdJTkRPV1M6IDkxLFxyXG4gICAgICAgICAgICBYOiA4OFxyXG4gICAgICAgIH0sIElucHV0bWFzaztcclxuICAgIH0pO1xyXG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xyXG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgX193ZWJwYWNrX3JlcXVpcmVfXyg5KSwgX193ZWJwYWNrX3JlcXVpcmVfXygxMiksIF9fd2VicGFja19yZXF1aXJlX18oMTMpLCBcclxuICAgIF9fd2VicGFja19yZXF1aXJlX18oMTQpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcclxuICAgIHZhciBfaW5wdXRtYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX193ZWJwYWNrX3JlcXVpcmVfXygxKSksIF9pbnB1dG1hc2s0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSwgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9fd2VicGFja19yZXF1aXJlX18oMikpO1xyXG4gICAgX2lucHV0bWFzazQuZGVmYXVsdCA9PT0gX2pxdWVyeTIuZGVmYXVsdCAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSwgd2luZG93LklucHV0bWFzayA9IF9pbnB1dG1hc2syLmRlZmF1bHQ7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgdmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xyXG4gICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgY29udGVudCAmJiAoY29udGVudCA9IFsgWyBtb2R1bGUuaSwgY29udGVudCwgXCJcIiBdIF0pO1xyXG4gICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgaG1yOiAhMFxyXG4gICAgfTtcclxuICAgIG9wdGlvbnMudHJhbnNmb3JtID0gdm9pZCAwO1xyXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXyg3KShjb250ZW50LCBvcHRpb25zKTtcclxuICAgIGNvbnRlbnQubG9jYWxzICYmIChtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzKTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICAobW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpKHZvaWQgMCkpLnB1c2goWyBtb2R1bGUuaSwgXCJzcGFuLmltLWNhcmV0IHtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xcclxcbiAgICBhbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXHJcXG4gICAgZnJvbSwgdG8ge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibGFjaztcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcclxcbiAgICBmcm9tLCB0byB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICAgIDUwJSB7XFxyXFxuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbnNwYW4uaW0tc3RhdGljIHtcXHJcXG4gICAgY29sb3I6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbmRpdi5pbS1jb2xvcm1hc2sge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmltLWNvbG9ybWFzayA+IGlucHV0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogY2FyZXQ7XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogY2FyZXQ7XFxyXFxuICAgIGFwcGVhcmFuY2U6IGNhcmV0O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGxlZnQ6IDA7IC8qY2FsY3VsYXRlZCovXFxyXFxufVxcclxcblxcclxcbmRpdi5pbS1jb2xvcm1hc2sgPiBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpdi5pbS1jb2xvcm1hc2sgPiBpbnB1dDo6LW1vei1zZWxlY3Rpb257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmRpdi5pbS1jb2xvcm1hc2sgPiBpbnB1dDo6c2VsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5kaXYuaW0tY29sb3JtYXNrID4gaW5wdXQ6Oi1tb3otc2VsZWN0aW9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuaW0tY29sb3JtYXNrID4gZGl2IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgLypjYWxjdWxhdGVkKi9cXHJcXG59XCIsIFwiXCIgXSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG4gICAgZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgXCJcIiwgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgICAgICAgaWYgKCFjc3NNYXBwaW5nKSByZXR1cm4gY29udGVudDtcclxuICAgICAgICBpZiAodXNlU291cmNlTWFwICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYnRvYSkge1xyXG4gICAgICAgICAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKSwgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24oc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgXCIgKi9cIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbIGNvbnRlbnQgXS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFsgc291cmNlTWFwcGluZyBdKS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gWyBjb250ZW50IF0uam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcclxuICAgICAgICByZXR1cm4gXCIvKiMgXCIgKyAoXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkpICsgXCIgKi9cIjtcclxuICAgIH1cclxuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICByZXR1cm4gbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVsyXSA/IFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiIDogY29udGVudDtcclxuICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcclxuICAgICAgICB9LCBsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG1vZHVsZXMgJiYgKG1vZHVsZXMgPSBbIFsgbnVsbCwgbW9kdWxlcywgXCJcIiBdIF0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge30sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcclxuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGlkICYmIChhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9ICEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgaXRlbVswXSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dIHx8IChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdID8gaXRlbVsyXSA9IG1lZGlhUXVlcnkgOiBtZWRpYVF1ZXJ5ICYmIChpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCIpLCBcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBsaXN0O1xyXG4gICAgfTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBmdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXSwgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuICAgICAgICAgICAgaWYgKGRvbVN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBkb21TdHlsZS5yZWZzKys7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7aiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGFydHMgPSBbXSwgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZnM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFydHM6IHBhcnRzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKHZhciBzdHlsZXMgPSBbXSwgbmV3U3R5bGVzID0ge30sIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV0sIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF0sIHBhcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgICAgICAgICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgICAgICAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBuZXdTdHlsZXNbaWRdID8gbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpIDogc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgIHBhcnRzOiBbIHBhcnQgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byk7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gICAgICAgIHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuICAgICAgICBpZiAoXCJ0b3BcIiA9PT0gb3B0aW9ucy5pbnNlcnRBdCkgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPyBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyA/IHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSA6IHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSkgOiB0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCksIFxyXG4gICAgICAgIHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7IGVsc2UgaWYgKFwiYm90dG9tXCIgPT09IG9wdGlvbnMuaW5zZXJ0QXQpIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCB8fCAhb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xyXG4gICAgICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xyXG4gICAgICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XHJcbiAgICAgICAgaWYgKG51bGwgPT09IHN0eWxlLnBhcmVudE5vZGUpIHJldHVybiAhMTtcclxuICAgICAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcclxuICAgICAgICB2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcclxuICAgICAgICBpZHggPj0gMCAmJiBzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIiwgYWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpLCBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpLCBcclxuICAgICAgICBzdHlsZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCIsIG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCIsIGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpLCBcclxuICAgICAgICBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayksIGxpbms7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRBdHRycyhlbCwgYXR0cnMpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcclxuICAgICAgICAgICAgaWYgKCEocmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykpKSByZXR1cm4gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgICAgICAgb2JqLmNzcyA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG4gICAgICAgICAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKSwgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCAhMSksIFxyXG4gICAgICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsICEwKTtcclxuICAgICAgICB9IGVsc2Ugb2JqLnNvdXJjZU1hcCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgQmxvYiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGJ0b2EgPyAoc3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSwgXHJcbiAgICAgICAgdXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKSwgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSksIHN0eWxlLmhyZWYgJiYgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcclxuICAgICAgICB9KSA6IChzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSwgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKSwgXHJcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZShvYmopLCBmdW5jdGlvbihuZXdPYmopIHtcclxuICAgICAgICAgICAgaWYgKG5ld09iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICAgICAgICAgIH0gZWxzZSByZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcbiAgICAgICAgdmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG4gICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTsgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSwgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaW5kZXhdICYmIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKSwgY2hpbGROb2Rlcy5sZW5ndGggPyBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pIDogc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb2JqKSB7XHJcbiAgICAgICAgdmFyIGNzcyA9IG9iai5jc3MsIG1lZGlhID0gb2JqLm1lZGlhO1xyXG4gICAgICAgIGlmIChtZWRpYSAmJiBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSksIHN0eWxlLnN0eWxlU2hlZXQpIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzczsgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoO3N0eWxlLmZpcnN0Q2hpbGQ7ICkgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaywgb3B0aW9ucywgb2JqKSB7XHJcbiAgICAgICAgdmFyIGNzcyA9IG9iai5jc3MsIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXAsIGF1dG9GaXhVcmxzID0gdm9pZCAwID09PSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyAmJiBzb3VyY2VNYXA7XHJcbiAgICAgICAgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSAmJiAoY3NzID0gZml4VXJscyhjc3MpKSwgc291cmNlTWFwICYmIChjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCIpO1xyXG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoWyBjc3MgXSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHQvY3NzXCJcclxuICAgICAgICB9KSwgb2xkU3JjID0gbGluay5ocmVmO1xyXG4gICAgICAgIGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIG9sZFNyYyAmJiBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3R5bGVzSW5Eb20gPSB7fSwgaXNPbGRJRSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgdmFyIG1lbW87XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSBtZW1vICYmIChtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSksIG1lbW87XHJcbiAgICAgICAgfTtcclxuICAgIH0oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xyXG4gICAgfSksIGdldEVsZW1lbnQgPSBmdW5jdGlvbihmbikge1xyXG4gICAgICAgIHZhciBtZW1vID0ge307XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IG1lbW9bc2VsZWN0b3JdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1lbW9bc2VsZWN0b3JdO1xyXG4gICAgICAgIH07XHJcbiAgICB9KGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcbiAgICB9KSwgc2luZ2xldG9uID0gbnVsbCwgc2luZ2xldG9uQ291bnRlciA9IDAsIHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXSwgZml4VXJscyA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgREVCVUcgJiYgREVCVUcgJiYgXCJvYmplY3RcIiAhPSB0eXBlb2YgZG9jdW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuICAgICAgICAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30pLmF0dHJzID0gXCJvYmplY3RcIiA9PSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA/IG9wdGlvbnMuYXR0cnMgOiB7fSwgXHJcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gfHwgKG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpKSwgb3B0aW9ucy5pbnNlcnRJbnRvIHx8IChvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIiksIFxyXG4gICAgICAgIG9wdGlvbnMuaW5zZXJ0QXQgfHwgKG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiKTtcclxuICAgICAgICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpLCBmdW5jdGlvbihuZXdMaXN0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG1heVJlbW92ZSA9IFtdLCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAoZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXSkucmVmcy0tLCBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3TGlzdCAmJiBhZGRTdHlsZXNUb0RvbShsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gZG9tU3R5bGUucmVmcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgdmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRleHRTdG9yZSA9IFtdO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudCwgdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjc3MpIHtcclxuICAgICAgICB2YXIgbG9jYXRpb24gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uO1xyXG4gICAgICAgIGlmICghbG9jYXRpb24pIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xyXG4gICAgICAgIGlmICghY3NzIHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIGNzcykgcmV0dXJuIGNzcztcclxuICAgICAgICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCwgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcclxuICAgICAgICAgICAgdmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmwudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICQxO1xyXG4gICAgICAgICAgICB9KS5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSByZXR1cm4gZnVsbE1hdGNoO1xyXG4gICAgICAgICAgICB2YXIgbmV3VXJsO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3VXJsID0gMCA9PT0gdW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA/IHVucXVvdGVkT3JpZ1VybCA6IDAgPT09IHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA/IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmwgOiBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKSwgXHJcbiAgICAgICAgICAgIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fO1xyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xyXG4gICAgIWZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gWyBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpIF0sIFxyXG4gICAgICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiAoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gZmFjdG9yeSkgPyBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxuICAgIH0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc05hTih5ZWFyKSB8fCAyOSA9PT0gbmV3IERhdGUoeWVhciwgMiwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xyXG4gICAgICAgICAgICBcImRkL21tL3l5eXlcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLzIveVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAtM11cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXxbMTJdWzAtOV18M1swMV0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMDFdKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18WzEyXVswLTldKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXwxWzAxMl0pKXwoMzBcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEzLTldfDFbMDEyXSkpfCgzMVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMTM1NzhdfDFbMDJdKSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkvMDIvXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgeWVhcnJhbmdlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWlueWVhcjogMTkwMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXh5ZWFyOiAyMDk5XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNJblllYXJSYW5nZTogZnVuY3Rpb24oY2hycywgbWlueWVhciwgbWF4eWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihjaHJzKSkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRlcmVkeWVhciA9IHBhcnNlSW50KGNocnMuY29uY2F0KG1pbnllYXIudG9TdHJpbmcoKS5zbGljZShjaHJzLmxlbmd0aCkpKSwgZW50ZXJlZHllYXIyID0gcGFyc2VJbnQoY2hycy5jb25jYXQobWF4eWVhci50b1N0cmluZygpLnNsaWNlKGNocnMubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4oZW50ZXJlZHllYXIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyICYmIGVudGVyZWR5ZWFyIDw9IG1heHllYXIpIHx8ICFpc05hTihlbnRlcmVkeWVhcjIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyMiAmJiBlbnRlcmVkeWVhcjIgPD0gbWF4eWVhcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0ZXJtaW5lYmFzZXllYXI6IGZ1bmN0aW9uKG1pbnllYXIsIG1heHllYXIsIGhpbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbnllYXIgPiBjdXJyZW50eWVhcikgcmV0dXJuIG1pbnllYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heHllYXIgPCBjdXJyZW50eWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXhZZWFyUHJlZml4ID0gbWF4eWVhci50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBtYXhZZWFyUG9zdGZpeCA9IG1heHllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgbWF4eWVhciA8IG1heFllYXJQcmVmaXggKyBoaW50OyApIG1heFllYXJQcmVmaXgtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heHhZZWFyID0gbWF4WWVhclByZWZpeCArIG1heFllYXJQb3N0Zml4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlueWVhciA+IG1heHhZZWFyID8gbWlueWVhciA6IG1heHhZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWlueWVhciA8PSBjdXJyZW50eWVhciAmJiBjdXJyZW50eWVhciA8PSBtYXh5ZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRZZWFyUHJlZml4ID0gY3VycmVudHllYXIudG9TdHJpbmcoKS5zbGljZSgwLCAyKTsgbWF4eWVhciA8IGN1cnJlbnRZZWFyUHJlZml4ICsgaGludDsgKSBjdXJyZW50WWVhclByZWZpeC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFllYXJBbmRIaW50ID0gY3VycmVudFllYXJQcmVmaXggKyBoaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFllYXJBbmRIaW50IDwgbWlueWVhciA/IG1pbnllYXIgOiBjdXJyZW50WWVhckFuZEhpbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50eWVhcjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRGcm9udFZhbHVlOiBmdW5jdGlvbihtYXNrLCBidWZmZXIsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGFydCA9IDAsIGxlbmd0aCA9IDAsIGkgPSAwOyBpIDwgbWFzay5sZW5ndGggJiYgXCIyXCIgIT09IG1hc2suY2hhckF0KGkpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBvcHRzLmRlZmluaXRpb25zW21hc2suY2hhckF0KGkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA/IChzdGFydCArPSBsZW5ndGgsIGxlbmd0aCA9IGRlZmluaXRpb24uY2FyZGluYWxpdHkpIDogbGVuZ3RoKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuam9pbihcIlwiKS5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGJ1ZmZlciwgY3VycmVudFJlc3VsdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlNb250aFZhbHVlLCB5ZWFyLCBidWZmZXJTdHIgPSBidWZmZXIuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gb3B0cy5tYXNrLmluZGV4T2YoXCJ5XCIpID8gKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyKDAsIDQpLCBkYXlNb250aFZhbHVlID0gYnVmZmVyU3RyLnN1YnN0cmluZyg0LCAxMCkpIDogKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyaW5nKDYsIDEwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5TW9udGhWYWx1ZSA9IGJ1ZmZlclN0ci5zdWJzdHIoMCwgNikpLCBjdXJyZW50UmVzdWx0ICYmIChkYXlNb250aFZhbHVlICE9PSBvcHRzLmxlYXBkYXkgfHwgaXNMZWFwWWVhcih5ZWFyKSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIjFcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGNocnMgPSBjaHJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAocGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gMSA9PT0gcGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwxcHJlLnRlc3QocGNocnMpIDogb3B0cy5yZWdleC52YWwxLnRlc3QocGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiAob3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGNocnMgKyBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQpIHx8IChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQgPSBcIjBcIiA9PT0gY2hycyA/IFwiMVwiIDogXCIwXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXN0cmljdCAmJiAhaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMgKyBcIjBcIikpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gY2hycywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyWysrcG9zXSA9IFwiMFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwxLnRlc3QoXCIwXCIgKyBjaHJzKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IF1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcm9udFZhbHVlID0gb3B0cy5nZXRGcm9udFZhbHVlKG1hc2tzZXQubWFzaywgbWFza3NldC5idWZmZXIsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09IGZyb250VmFsdWUuaW5kZXhPZihvcHRzLnBsYWNlaG9sZGVyWzBdKSAmJiAoZnJvbnRWYWx1ZSA9IFwiMDFcIiArIG9wdHMuc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCBjaHJzLmNoYXJBdCgxKSAhPT0gb3B0cy5zZXBhcmF0b3IgJiYgLTEgPT09IFwiLS4vXCIuaW5kZXhPZihjaHJzLmNoYXJBdCgxKSkgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihtYXNrc2V0LmJ1ZmZlcltwb3MgKyAxXSkgfHwgKGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcm9udFZhbHVlID0gb3B0cy5nZXRGcm9udFZhbHVlKG1hc2tzZXQubWFzaywgbWFza3NldC5idWZmZXIsIG9wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBmcm9udFZhbHVlLmluZGV4T2Yob3B0cy5wbGFjZWhvbGRlclswXSkgJiYgKGZyb250VmFsdWUgPSBcIjAxXCIgKyBvcHRzLnNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSAxID09PSBjaHJzLmxlbmd0aCA/IG9wdHMucmVnZXgudmFsMnByZShvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgY2hycykgOiBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiAob3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGNocnMgKyBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQpIHx8IChtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10uaW5wdXQgPSBcIjBcIiA9PT0gY2hycyA/IFwiMVwiIDogXCIwXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaWN0IHx8IGlzVmFsaWQgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBcIjBcIiArIGNocnMpKSA/IGlzVmFsaWQgOiAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycyArIFwiMFwiKS50b1N0cmluZygpLnNsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZSh5ZWFyUHJlZml4ICsgY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcikpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgwKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzICsgXCIwXCIpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKHllYXJQcmVmaXggKyBjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDApLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMSksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycykudG9TdHJpbmcoKS5zbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hyc1swXSArIHllYXJQcmVmaXhbMV0gKyBjaHJzWzFdLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKHllYXJQcmVmaXggKyBjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0geWVhclByZWZpeC5jaGFyQXQoMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgxKSwgbWFza3NldC5idWZmZXJbcG9zKytdID0gY2hycy5jaGFyQXQoMCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtbS9kZC95eXl5XCI6IHtcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tL2RkL3l5eXlcIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pfCgwMlwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtMl0pXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEzNTc4XXwxWzAyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIwMi8yOS9cIixcclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSBJbnB1dG1hc2sua2V5Q29kZS5SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKCh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInl5eXkvbW0vZGRcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJ5LzEvMlwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS9tbS9kZFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIvMDIvMjlcIixcclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09PSBJbnB1dG1hc2sua2V5Q29kZS5SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldERhdGUoKS50b1N0cmluZygpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImRkLm1tLnl5eXlcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLjIueVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIyOS4wMi5cIixcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogXCIuXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJkZC1tbS15eXl5XCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS0yLXlcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiMjktMDItXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibW0uZGQueXl5eVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjEuMi55XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS5kZC55eXl5XCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIjAyLjI5LlwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi5cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm1tLWRkLXl5eXlcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLTIteVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0tZGQteXl5eVwiLFxyXG4gICAgICAgICAgICAgICAgbGVhcGRheTogXCIwMi0yOS1cIixcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJ5eXl5Lm1tLmRkXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwieS4xLjJcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXkubW0uZGRcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiLjAyLjI5XCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwieXl5eS9tbS9kZFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwieXl5eS1tbS1kZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcInktMS0yXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIi0wMi0yOVwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcInl5eXkvbW0vZGRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRldGltZToge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCIxLzIveSBoOnNcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRkL21tL3l5eXkgaGg6bW1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJzcHJlOiBuZXcgUmVnRXhwKFwiWzAxMl1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgaHJzMjQ6IG5ldyBSZWdFeHAoXCIyWzAtNF18MVszLTldXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhyczogbmV3IFJlZ0V4cChcIlswMV1bMC05XXwyWzAtNF1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgYW1wbTogbmV3IFJlZ0V4cChcIl5bYXxwfEF8UF1bbXxNXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBtc3ByZTogbmV3IFJlZ0V4cChcIlswLTVdXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1zOiBuZXcgUmVnRXhwKFwiWzAtNV1bMC05XVwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpbWVzZXBhcmF0b3I6IFwiOlwiLFxyXG4gICAgICAgICAgICAgICAgaG91ckZvcm1hdDogXCIyNFwiLFxyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIjI0XCIgPT09IG9wdHMuaG91ckZvcm1hdCAmJiAyNCA9PT0gcGFyc2VJbnQoY2hycywgMTApKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSBcIjBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcG9zIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHJpY3QgJiYgIWlzVmFsaWQgJiYgKGNocnMuY2hhckF0KDEpID09PSBvcHRzLnRpbWVzZXBhcmF0b3IgfHwgLTEgIT09IFwiLS46XCIuaW5kZXhPZihjaHJzLmNoYXJBdCgxKSkpICYmIChpc1ZhbGlkID0gb3B0cy5yZWdleC5ocnMudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBjaHJzLmNoYXJBdCgwKSwgcG9zKyssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogcG9zIC0gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG9wdHMudGltZXNlcGFyYXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkICYmIFwiMjRcIiAhPT0gb3B0cy5ob3VyRm9ybWF0ICYmIG9wdHMucmVnZXguaHJzMjQudGVzdChjaHJzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSBwYXJzZUludChjaHJzLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI0ID09PSB0bXAgPyAobWFza3NldC5idWZmZXJbcG9zICsgNV0gPSBcImFcIiwgbWFza3NldC5idWZmZXJbcG9zICsgNl0gPSBcIm1cIikgOiAobWFza3NldC5idWZmZXJbcG9zICsgNV0gPSBcInBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zICsgNl0gPSBcIm1cIiksICh0bXAgLT0gMTIpIDwgMTAgPyAobWFza3NldC5idWZmZXJbcG9zXSA9IHRtcC50b1N0cmluZygpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiKSA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gdG1wLnRvU3RyaW5nKCkuY2hhckF0KDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IHRtcC50b1N0cmluZygpLmNoYXJBdCgwKSksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3MgKyA2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGM6IG1hc2tzZXQuYnVmZmVyW3Bvc11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC5ocnNwcmUudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaWN0IHx8IGlzVmFsaWQgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC5ocnMudGVzdChcIjBcIiArIGNocnMpKSA/IGlzVmFsaWQgOiAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtNV1bMC05XVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgubXNwcmUudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaWN0IHx8IGlzVmFsaWQgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC5tcy50ZXN0KFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnJlZ2V4LmFtcG0udGVzdChjaHJzICsgXCJtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwibG93ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXHJcbiAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRldGltZTEyOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcIjEvMi95IGg6cyB0XFxcXG1cIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRkL21tL3l5eXkgaGg6bW0geG1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICBob3VyRm9ybWF0OiBcIjEyXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtbS9kZC95eXl5IGhoOm1tIHhtXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS8yL3kgaDpzIHRcXFxcbVwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0vZGQveXl5eSBoaDptbSB4bVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWUxMlwiLFxyXG4gICAgICAgICAgICAgICAgcmVnZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSl8KDAyXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0yXSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMTM1NzhdfDFbMDJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcIjAyLzI5L1wiLFxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaGg6bW0gdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcImg6cyB0XFxcXG1cIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tIHhtXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxyXG4gICAgICAgICAgICAgICAgaG91ckZvcm1hdDogXCIxMlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiaDpzIHRcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogXCJoOnMgdFxcXFxtXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbSB4bVwiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMTJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImhoOm1tOnNzXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiaDpzOnNcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tOnNzXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJoaDptbVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcImg6c1wiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW1cIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJtbS95eXl5XCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiMS95XCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS95eXl5XCIsXHJcbiAgICAgICAgICAgICAgICBsZWFwZGF5OiBcImRvbm90dXNlXCIsXHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYW1zaToge1xyXG4gICAgICAgICAgICAgICAgcmVnZXg6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEtNl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHllYXJyYW5nZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnllYXI6IDEzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4eWVhcjogMTQ5OVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwieS8xLzJcIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiLzEyLzMwXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5L21tL2RkXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCIsXHJcbiAgICAgICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwieXl5eS1tbS1kZCBoaDptbTpzc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBcInktMS0yIGg6czpzXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5LW1tLWRkIGhoOm1tOnNzXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcclxuICAgICAgICAgICAgICAgIGxlYXBkYXk6IFwiLTAyLTI5XCIsXHJcbiAgICAgICAgICAgICAgICByZWdleDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKXwoMDJcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTJdKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxMzU3OF18MVswMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uS2V5RG93bjogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBJbnB1dG1hc2s7XHJcbiAgICB9KTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH0uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XHJcbiAgICB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcclxuICAgIH0uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnkpID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaykge1xyXG4gICAgICAgIHJldHVybiBJbnB1dG1hc2suZXh0ZW5kRGVmaW5pdGlvbnMoe1xyXG4gICAgICAgICAgICBBOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtej8/LU4/Pz9O77+9Qe+/vS1BP0Hvv71dXCIsXHJcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJlwiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEtej8/LU4/Pz9O77+9Qe+/vS1BP0Hvv71dXCIsXHJcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiI1wiOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtRmEtZl1cIixcclxuICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XHJcbiAgICAgICAgICAgIHVybDoge1xyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCIuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiKFxcXFxodHRwOi8vKXwoXFxcXGh0dHBcXFxcczovLyl8KGZ0cDovLyl8KGZ0cFxcXFxzOi8vKWl7K31cIixcclxuICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwidXJsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXA6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiaVtpW2ldXS5pW2lbaV1dLmlbaVtpXV0uaVtpW2ldXVwiLFxyXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3MgLSAxID4gLTEgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID8gKGNocnMgPSBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSArIGNocnMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hycyA9IHBvcyAtIDIgPiAtMSAmJiBcIi5cIiAhPT0gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gPyBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAyXSArIGNocnMgOiBcIjBcIiArIGNocnMpIDogY2hycyA9IFwiMDBcIiArIGNocnMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIikudGVzdChjaHJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLFxyXG4gICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXN0ZWRWYWx1ZSA9IHBhc3RlZFZhbHVlLnRvTG93ZXJDYXNlKCkpLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCIqXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXohIyQlJicqKy89P15fYHt8fX4tXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiLVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05QS1aYS16LV1cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXNrZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwiZW1haWxcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYWM6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiIyM6IyM6IyM6IyM6IyM6IyNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2aW46IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiVnsxM305ezR9XCIsXHJcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIltBLUhKLU5QUi1aYS1oai1ucHItelxcXFxkXVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xlYXJJbmNvbXBsZXRlOiAhMCxcclxuICAgICAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnkpID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaywgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gYXV0b0VzY2FwZSh0eHQsIG9wdHMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZXNjYXBlZFR4dCA9IFwiXCIsIGkgPSAwOyBpIDwgdHh0Lmxlbmd0aDsgaSsrKSBJbnB1dG1hc2sucHJvdG90eXBlLmRlZmluaXRpb25zW3R4dC5jaGFyQXQoaSldIHx8IG9wdHMuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyLmVuZCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLnF1YW50aWZpZXJtYXJrZXIuc3RhcnQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5xdWFudGlmaWVybWFya2VyLmVuZCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuYWx0ZXJuYXRvcm1hcmtlciA9PT0gdHh0LmNoYXJBdChpKSA/IGVzY2FwZWRUeHQgKz0gXCJcXFxcXCIgKyB0eHQuY2hhckF0KGkpIDogZXNjYXBlZFR4dCArPSB0eHQuY2hhckF0KGkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlZFR4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIElucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcclxuICAgICAgICAgICAgbnVtZXJpYzoge1xyXG4gICAgICAgICAgICAgICAgbWFzazogZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgwICE9PSBvcHRzLnJlcGVhdCAmJiBpc05hTihvcHRzLmludGVnZXJEaWdpdHMpICYmIChvcHRzLmludGVnZXJEaWdpdHMgPSBvcHRzLnJlcGVhdCksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMucmVwZWF0ID0gMCwgb3B0cy5ncm91cFNlcGFyYXRvciA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChcIi5cIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLFwiIDogXCIsXCIgPT09IG9wdHMucmFkaXhQb2ludCA/IG9wdHMuZ3JvdXBTZXBhcmF0b3IgPSBcIi5cIiA6IG9wdHMuZ3JvdXBTZXBhcmF0b3IgPSBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgKG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciA9IHVuZGVmaW5lZCksIG9wdHMuYXV0b0dyb3VwID0gb3B0cy5hdXRvR3JvdXAgJiYgXCJcIiAhPT0gb3B0cy5ncm91cFNlcGFyYXRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hdXRvR3JvdXAgJiYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG9wdHMuZ3JvdXBTaXplICYmIGlzRmluaXRlKG9wdHMuZ3JvdXBTaXplKSAmJiAob3B0cy5ncm91cFNpemUgPSBwYXJzZUludChvcHRzLmdyb3VwU2l6ZSkpLCBcclxuICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShvcHRzLmludGVnZXJEaWdpdHMpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwcyA9IE1hdGguZmxvb3Iob3B0cy5pbnRlZ2VyRGlnaXRzIC8gb3B0cy5ncm91cFNpemUpLCBtb2QgPSBvcHRzLmludGVnZXJEaWdpdHMgJSBvcHRzLmdyb3VwU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnRlZ2VyRGlnaXRzID0gcGFyc2VJbnQob3B0cy5pbnRlZ2VyRGlnaXRzKSArICgwID09PSBtb2QgPyBzZXBzIC0gMSA6IHNlcHMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnRlZ2VyRGlnaXRzIDwgMSAmJiAob3B0cy5pbnRlZ2VyRGlnaXRzID0gXCIqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDEgJiYgKG9wdHMucGxhY2Vob2xkZXIgPSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwicmFkaXhGb2N1c1wiID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrICYmIFwiXCIgPT09IG9wdHMucGxhY2Vob2xkZXIgJiYgITEgPT09IG9wdHMuaW50ZWdlck9wdGlvbmFsICYmIChvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJsdnBcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuZGVmaW5pdGlvbnNbXCI7XCJdID0gb3B0cy5kZWZpbml0aW9uc1tcIn5cIl0sIG9wdHMuZGVmaW5pdGlvbnNbXCI7XCJdLmRlZmluaXRpb25TeW1ib2wgPSBcIn5cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgITAgPT09IG9wdHMubnVtZXJpY0lucHV0ICYmIChvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrID0gXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPyBcImx2cFwiIDogb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaywgXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5kaWdpdHNPcHRpb25hbCA9ICExLCBpc05hTihvcHRzLmRpZ2l0cykgJiYgKG9wdHMuZGlnaXRzID0gMiksIG9wdHMuZGVjaW1hbFByb3RlY3QgPSAhMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBcIlsrXVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrICs9IGF1dG9Fc2NhcGUob3B0cy5wcmVmaXgsIG9wdHMpLCAhMCA9PT0gb3B0cy5pbnRlZ2VyT3B0aW9uYWwgPyBtYXNrICs9IFwifnsxLFwiICsgb3B0cy5pbnRlZ2VyRGlnaXRzICsgXCJ9XCIgOiBtYXNrICs9IFwifntcIiArIG9wdHMuaW50ZWdlckRpZ2l0cyArIFwifVwiLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmRpZ2l0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgPSBvcHRzLmRlY2ltYWxQcm90ZWN0ID8gXCI6XCIgOiBvcHRzLnJhZGl4UG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcSA9IG9wdHMuZGlnaXRzLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Zpbml0ZShkcVswXSAmJiBkcVsxXSAmJiBpc0Zpbml0ZShkcVsxXSkpID8gbWFzayArPSBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sICsgXCI7e1wiICsgb3B0cy5kaWdpdHMgKyBcIn1cIiA6IChpc05hTihvcHRzLmRpZ2l0cykgfHwgcGFyc2VJbnQob3B0cy5kaWdpdHMpID4gMCkgJiYgKG9wdHMuZGlnaXRzT3B0aW9uYWwgPyBtYXNrICs9IFwiW1wiICsgb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCArIFwiO3sxLFwiICsgb3B0cy5kaWdpdHMgKyBcIn1dXCIgOiBtYXNrICs9IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgKyBcIjt7XCIgKyBvcHRzLmRpZ2l0cyArIFwifVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2sgKz0gYXV0b0VzY2FwZShvcHRzLnN1ZmZpeCwgb3B0cyksIG1hc2sgKz0gXCJbLV1cIiwgb3B0cy5ncmVlZHkgPSAhMSwgbWFzaztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgICAgICAgIGdyZWVkeTogITEsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHM6IFwiKlwiLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxyXG4gICAgICAgICAgICAgICAgZW5mb3JjZURpZ2l0c09uQmx1cjogITEsXHJcbiAgICAgICAgICAgICAgICByYWRpeFBvaW50OiBcIi5cIixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcInJhZGl4Rm9jdXNcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwU2l6ZTogMyxcclxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0dyb3VwOiAhMSxcclxuICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICEwLFxyXG4gICAgICAgICAgICAgICAgbmVnYXRpb25TeW1ib2w6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9udDogXCItXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFjazogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGludGVnZXJEaWdpdHM6IFwiK1wiLFxyXG4gICAgICAgICAgICAgICAgaW50ZWdlck9wdGlvbmFsOiAhMCxcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcclxuICAgICAgICAgICAgICAgIHJpZ2h0QWxpZ246ICEwLFxyXG4gICAgICAgICAgICAgICAgZGVjaW1hbFByb3RlY3Q6ICEwLFxyXG4gICAgICAgICAgICAgICAgbWluOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3RlcDogMSxcclxuICAgICAgICAgICAgICAgIGluc2VydE1vZGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VubWFzazogITEsXHJcbiAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITEsXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgcHJlVmFsaWRhdGlvbjogZnVuY3Rpb24oYnVmZmVyLCBwb3MsIGMsIGlzU2VsZWN0aW9uLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiLVwiID09PSBjIHx8IGMgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpIHJldHVybiAhMCA9PT0gb3B0cy5hbGxvd01pbnVzICYmIChvcHRzLmlzTmVnYXRpdmUgPSBvcHRzLmlzTmVnYXRpdmUgPT09IHVuZGVmaW5lZCB8fCAhb3B0cy5pc05lZ2F0aXZlLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlwiID09PSBidWZmZXIuam9pbihcIlwiKSB8fCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvcG9zdDogITBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoITEgPT09IGlzU2VsZWN0aW9uICYmIGMgPT09IG9wdHMucmFkaXhQb2ludCAmJiBvcHRzLmRpZ2l0cyAhPT0gdW5kZWZpbmVkICYmIChpc05hTihvcHRzLmRpZ2l0cykgfHwgcGFyc2VJbnQob3B0cy5kaWdpdHMpID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4UG9zID0gJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xICE9PSByYWRpeFBvcykgcmV0dXJuICEwID09PSBvcHRzLm51bWVyaWNJbnB1dCA/IHBvcyA9PT0gcmFkaXhQb3MgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogcmFkaXhQb3MgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3N0VmFsaWRhdGlvbjogZnVuY3Rpb24oYnVmZmVyLCBjdXJyZW50UmVzdWx0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IG9wdHMuc3VmZml4LnNwbGl0KFwiXCIpLCBwcmVmaXggPSBvcHRzLnByZWZpeC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiBjdXJyZW50UmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgJiYgITAgIT09IGN1cnJlbnRSZXN1bHQuZG9wb3N0KSByZXR1cm4gY3VycmVudFJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjdXJyZW50UmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgPyBjdXJyZW50UmVzdWx0LmNhcmV0IDogY3VycmVudFJlc3VsdC5wb3MsIG1hc2tlZFZhbHVlID0gYnVmZmVyLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5udW1lcmljSW5wdXQgJiYgKGNhcmV0UG9zID0gbWFza2VkVmFsdWUubGVuZ3RoIC0gY2FyZXRQb3MgLSAxLCBtYXNrZWRWYWx1ZSA9IG1hc2tlZFZhbHVlLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJBdFBvcyA9IG1hc2tlZFZhbHVlW2NhcmV0UG9zXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckF0UG9zID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIChjaGFyQXRQb3MgPSBtYXNrZWRWYWx1ZVtjYXJldFBvcyArPSAxXSksIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zID09PSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBvcHRzLnN1ZmZpeC5sZW5ndGggLSAxICYmIGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50KSByZXR1cm4gY3VycmVudFJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCAmJiBjaGFyQXRQb3MgIT09IG9wdHMucmFkaXhQb2ludCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgKG1hc2tlZFZhbHVlW2NhcmV0UG9zXSA9IFwiP1wiLCBcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLnByZWZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49ICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIGNhcmV0UG9zIDwgb3B0cy5wcmVmaXgubGVuZ3RoIC0gMSArICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApID8gcHJlZml4W2NhcmV0UG9zIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCldID0gXCI/XCIgOiBvcHRzLnN1ZmZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49IG1hc2tlZFZhbHVlLmxlbmd0aCAtIG9wdHMuc3VmZml4Lmxlbmd0aCAtICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIChzdWZmaXhbY2FyZXRQb3MgLSAobWFza2VkVmFsdWUubGVuZ3RoIC0gb3B0cy5zdWZmaXgubGVuZ3RoIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCkpXSA9IFwiP1wiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiXCIpLCBzdWZmaXggPSBzdWZmaXguam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUuam9pbihcIlwiKS5yZXBsYWNlKHByZWZpeCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKHN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOYU4ob3B0cy5wbGFjZWhvbGRlcikgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucGxhY2Vob2xkZXIpLCBcImdcIiksIFwiXCIpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlLmxlbmd0aCA+IDEgJiYgMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAoXCIwXCIgPT09IGNoYXJBdFBvcyAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoL15cXD8vZywgXCJcIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZSgvXjAvZywgXCJcIikpLCBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmICEwICE9PSBvcHRzLm51bWVyaWNJbnB1dCAmJiAocHJvY2Vzc1ZhbHVlID0gXCIwXCIgKyBwcm9jZXNzVmFsdWUpLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBwcm9jZXNzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5zcGxpdChcIlwiKSwgKCFvcHRzLmRpZ2l0c09wdGlvbmFsIHx8IG9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCkgJiYgaXNGaW5pdGUob3B0cy5kaWdpdHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3NpdGlvbiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIHByb2Nlc3NWYWx1ZSksIHJwYiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIG1hc2tlZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSByYWRpeFBvc2l0aW9uICYmIChwcm9jZXNzVmFsdWUucHVzaChvcHRzLnJhZGl4UG9pbnQpLCByYWRpeFBvc2l0aW9uID0gcHJvY2Vzc1ZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gb3B0cy5kaWdpdHM7IGkrKykgb3B0cy5kaWdpdHNPcHRpb25hbCAmJiAoIW9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciB8fCBcImJsdXJcIiAhPT0gY3VycmVudFJlc3VsdC5ldmVudCkgfHwgcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSAhPT0gdW5kZWZpbmVkICYmIHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gIT09IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApID8gLTEgIT09IHJwYiAmJiBtYXNrZWRWYWx1ZVtycGIgKyBpXSAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSB8fCBtYXNrZWRWYWx1ZVtycGIgKyBpXSkgOiBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gY3VycmVudFJlc3VsdC5wbGFjZWhvbGRlciB8fCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMuYXV0b0dyb3VwIHx8IFwiXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgY2hhckF0UG9zID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgY3VycmVudFJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiAhY3VycmVudFJlc3VsdC5kb3Bvc3QpIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRSYWRpeCA9IHByb2Nlc3NWYWx1ZVtwcm9jZXNzVmFsdWUubGVuZ3RoIC0gMV0gPT09IG9wdHMucmFkaXhQb2ludCAmJiBjdXJyZW50UmVzdWx0LmMgPT09IG9wdHMucmFkaXhQb2ludDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IElucHV0bWFzayhmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdE1hc2sgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0TWFzayArPSBcIihcIiArIG9wdHMuZ3JvdXBTZXBhcmF0b3IgKyBcIip7XCIgKyBvcHRzLmdyb3VwU2l6ZSArIFwifSl7Kn1cIiwgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFNwbGl0ID0gYnVmZmVyLmpvaW4oXCJcIikuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhTcGxpdFsxXSAmJiAocG9zdE1hc2sgKz0gb3B0cy5yYWRpeFBvaW50ICsgXCIqe1wiICsgcmFkaXhTcGxpdFsxXS5tYXRjaCgvXlxcZCpcXD8/XFxkKi8pWzBdLmxlbmd0aCArIFwifVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNYXNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9jZXNzVmFsdWUsIG9wdHMpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTk/XVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChwcm9jZXNzVmFsdWUuam9pbihcIlwiKSksIGFkZFJhZGl4ICYmIChwcm9jZXNzVmFsdWUgKz0gb3B0cy5yYWRpeFBvaW50KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHByb2Nlc3NWYWx1ZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCAmJiAob3B0cy5pc05lZ2F0aXZlID0gXCIwXCIgIT09IHByb2Nlc3NWYWx1ZSksIFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByZWZpeCArIHByb2Nlc3NWYWx1ZSwgcHJvY2Vzc1ZhbHVlICs9IHN1ZmZpeCwgb3B0cy5pc05lZ2F0aXZlICYmIChwcm9jZXNzVmFsdWUgPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ICsgcHJvY2Vzc1ZhbHVlLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgKz0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCkgaWYgKGNoYXJBdFBvcyAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIGNoYXJBdFBvcyAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgKGNhcmV0UG9zID0gJC5pbkFycmF5KFwiP1wiLCBwcm9jZXNzVmFsdWUpKSA+IC0xID8gcHJvY2Vzc1ZhbHVlW2NhcmV0UG9zXSA9IGNoYXJBdFBvcyA6IGNhcmV0UG9zID0gY3VycmVudFJlc3VsdC5jYXJldCB8fCAwOyBlbHNlIGlmIChjaGFyQXRQb3MgPT09IG9wdHMucmFkaXhQb2ludCB8fCBjaGFyQXRQb3MgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgfHwgY2hhckF0UG9zID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NhcmV0UG9zID0gJC5pbkFycmF5KGNoYXJBdFBvcywgcHJvY2Vzc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09IG5ld0NhcmV0UG9zICYmIChjYXJldFBvcyA9IG5ld0NhcmV0UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5udW1lcmljSW5wdXQgJiYgKGNhcmV0UG9zID0gcHJvY2Vzc1ZhbHVlLmxlbmd0aCAtIGNhcmV0UG9zIC0gMSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJzbHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjaGFyQXRQb3MgPT09IHVuZGVmaW5lZCB8fCBjdXJyZW50UmVzdWx0LnBvcyAhPT0gdW5kZWZpbmVkID8gY2FyZXRQb3MgKyAob3B0cy5udW1lcmljSW5wdXQgPyAtMSA6IDEpIDogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogcHJvY2Vzc1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjogY3VycmVudFJlc3VsdC5kb3Bvc3QgfHwgYnVmZmVyLmpvaW4oXCJcIikgIT09IHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlciA/IHJzbHQgOiBjdXJyZW50UmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSkgc3dpdGNoIChlLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLnBvc3RWYWxpZGF0aW9uKGJ1ZmZlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNhcmV0UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvcHRzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmx1clwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrdmFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucGFyc2VNaW5NYXhPcHRpb25zID09PSB1bmRlZmluZWQgJiYgKG51bGwgIT09IG9wdHMubWluICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWluID0gaXNGaW5pdGUob3B0cy5taW4pID8gcGFyc2VGbG9hdChvcHRzLm1pbikgOiBOYU4sIGlzTmFOKG9wdHMubWluKSAmJiAob3B0cy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5tYXggJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgucmVwbGFjZShvcHRzLnJhZGl4UG9pbnQsIFwiLlwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXggPSBpc0Zpbml0ZShvcHRzLm1heCkgPyBwYXJzZUZsb2F0KG9wdHMubWF4KSA6IE5hTiwgaXNOYU4ob3B0cy5tYXgpICYmIChvcHRzLm1heCA9IE51bWJlci5NQVhfVkFMVUUpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfShvcHRzKSwgbnVsbCAhPT0gb3B0cy5taW4gfHwgbnVsbCAhPT0gb3B0cy5tYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bm1hc2tlZCA9IG9wdHMub25Vbk1hc2soYnVmZmVyLmpvaW4oXCJcIiksIHVuZGVmaW5lZCwgJC5leHRlbmQoe30sIG9wdHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbnVsbCAhPT0gb3B0cy5taW4gJiYgdW5tYXNrZWQgPCBvcHRzLm1pbikgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWluIDwgMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gb3B0cy5tYXggJiYgdW5tYXNrZWQgPiBvcHRzLm1heCkgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWF4IDwgMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIl9jaGVja3ZhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNhcmV0UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdlclBhcnQ6IGZ1bmN0aW9uKG9wdHMsIGVtcHR5Q2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtcHR5Q2hlY2sgPyBuZXcgUmVnRXhwKFwiW1wiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpICsgXCIrXT9cIikgOiBuZXcgUmVnRXhwKFwiW1wiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpICsgXCIrXT9cXFxcZCtcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlZ2VyTlBhcnQ6IGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJbXFxcXGRcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkgKyBcIl0rXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiflwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMsIGlzU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IHN0cmljdCA/IG5ldyBSZWdFeHAoXCJbMC05XCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvcikgKyBcIl1cIikudGVzdChjaHJzKSA6IG5ldyBSZWdFeHAoXCJbMC05XVwiKS50ZXN0KGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwID09PSBpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEwICE9PSBvcHRzLm51bWVyaWNJbnB1dCAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10gIT09IHVuZGVmaW5lZCAmJiBcIn5cIiA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdLm1hdGNoLmRlZiAmJiAhaXNTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tzZXQuYnVmZmVyLmpvaW4oXCJcIiksIHB2UmFkaXhTcGxpdCA9IChwcm9jZXNzVmFsdWUgPSAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIlstXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgKyBcIl1cIiwgXCJnXCIpLCBcIlwiKSkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSkuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZSYWRpeFNwbGl0Lmxlbmd0aCA+IDEgJiYgKHB2UmFkaXhTcGxpdFsxXSA9IHB2UmFkaXhTcGxpdFsxXS5yZXBsYWNlKC8wL2csIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiA9PT0gcHZSYWRpeFNwbGl0WzBdICYmIChwdlJhZGl4U3BsaXRbMF0gPSBwdlJhZGl4U3BsaXRbMF0ucmVwbGFjZSgvMC9nLCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHZSYWRpeFNwbGl0WzBdICsgb3B0cy5yYWRpeFBvaW50ICsgcHZSYWRpeFNwbGl0WzFdIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZW1wbGF0ZSA9IG1hc2tzZXQuX2J1ZmZlci5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb2Nlc3NWYWx1ZSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChwcm9jZXNzVmFsdWUgPSBidWZmZXJUZW1wbGF0ZSk7IG51bGwgPT09IHByb2Nlc3NWYWx1ZS5tYXRjaChJbnB1dG1hc2suZXNjYXBlUmVnZXgoYnVmZmVyVGVtcGxhdGUpICsgXCIkXCIpOyApIGJ1ZmZlclRlbXBsYXRlID0gYnVmZmVyVGVtcGxhdGUuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAocHJvY2Vzc1ZhbHVlID0gKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKGJ1ZmZlclRlbXBsYXRlLCBcIlwiKSkuc3BsaXQoXCJcIikpW3Bvc10gPT09IHVuZGVmaW5lZCA/IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBwb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHN0cmljdCB8fCBjaHJzICE9PSBvcHRzLnJhZGl4UG9pbnQgfHwgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSAhPT0gdW5kZWZpbmVkIHx8IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIitcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5hbGxvd01pbnVzICYmIChcIi1cIiA9PT0gY2hycyB8fCBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIi1cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5hbGxvd01pbnVzICYmIGNocnMgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIjpcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXggPSBcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnJhZGl4UG9pbnQpICsgXCJdXCIsIGlzVmFsaWQgPSBuZXcgUmVnRXhwKHJhZGl4KS50ZXN0KGNocnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQgJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5wbGFjZWhvbGRlciA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChpc1ZhbGlkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBwb3MgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmdW5jdGlvbihvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5yYWRpeFBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVW5NYXNrOiBmdW5jdGlvbihtYXNrZWRWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiID09PSB1bm1hc2tlZFZhbHVlICYmICEwID09PSBvcHRzLm51bGxhYmxlKSByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG9wdHMuc3VmZml4LCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApICYmIChwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApLCBcImdcIiksIFwiMFwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMudW5tYXNrQXNOdW1iZXIgPyAoXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIC0xICE9PSBwcm9jZXNzVmFsdWUuaW5kZXhPZihvcHRzLnJhZGl4UG9pbnQpICYmIChwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBvcHRzLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQpKSwgXCItXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHByb2Nlc3NWYWx1ZSkpIDogcHJvY2Vzc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGU6IGZ1bmN0aW9uKGJ1ZmZlciwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXNrZWRWYWx1ZSA9IGJ1ZmZlci5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIuc2xpY2UoKS5qb2luKFwiXCIpICE9PSBtYXNrZWRWYWx1ZSkgcmV0dXJuICExO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzVmFsdWUgPSBtYXNrZWRWYWx1ZS5yZXBsYWNlKG9wdHMucHJlZml4LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2Uob3B0cy5zdWZmaXgsIFwiXCIpLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCIsXCIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucmFkaXhQb2ludCksIFwiLlwiKSksIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKHByb2Nlc3NWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25CZWZvcmVNYXNrOiBmdW5jdGlvbihpbml0aWFsVmFsdWUsIG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5pc05lZ2F0aXZlID0gdW5kZWZpbmVkLCBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5jaGFyQXQoaW5pdGlhbFZhbHVlLmxlbmd0aCAtIDEpID09PSBvcHRzLnJhZGl4UG9pbnQgPyBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5zdWJzdHIoMCwgaW5pdGlhbFZhbHVlLmxlbmd0aCAtIDEpIDogaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCksIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBpc0Zpbml0ZShpbml0aWFsVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2cyA9IGluaXRpYWxWYWx1ZS5zcGxpdChcIi5cIiksIGdyb3VwU2l6ZSA9IFwiXCIgIT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgPyBwYXJzZUludChvcHRzLmdyb3VwU2l6ZSkgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAyID09PSB2cy5sZW5ndGggJiYgKHZzWzBdLmxlbmd0aCA+IGdyb3VwU2l6ZSB8fCB2c1sxXS5sZW5ndGggPiBncm91cFNpemUgfHwgdnNbMF0ubGVuZ3RoIDw9IGdyb3VwU2l6ZSAmJiB2c1sxXS5sZW5ndGggPCBncm91cFNpemUpICYmIChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrb21tYU1hdGNoZXMgPSBpbml0aWFsVmFsdWUubWF0Y2goLywvZyksIGRvdE1hdGNoZXMgPSBpbml0aWFsVmFsdWUubWF0Y2goL1xcLi9nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFZhbHVlID0gZG90TWF0Y2hlcyAmJiBrb21tYU1hdGNoZXMgPyBkb3RNYXRjaGVzLmxlbmd0aCA+IGtvbW1hTWF0Y2hlcy5sZW5ndGggPyAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSkucmVwbGFjZShcIixcIiwgb3B0cy5yYWRpeFBvaW50KSA6IGtvbW1hTWF0Y2hlcy5sZW5ndGggPiBkb3RNYXRjaGVzLmxlbmd0aCA/IChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KSA6IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLlwiKSA8IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLFwiKSA/IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIikgOiBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSA6IGluaXRpYWxWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAwID09PSBvcHRzLmRpZ2l0cyAmJiAoLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLlwiKSA/IGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5zdWJzdHJpbmcoMCwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpKSA6IC0xICE9PSBpbml0aWFsVmFsdWUuaW5kZXhPZihcIixcIikgJiYgKGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5zdWJzdHJpbmcoMCwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIsXCIpKSkpLCBcclxuICAgICAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgaXNGaW5pdGUob3B0cy5kaWdpdHMpICYmIC0xICE9PSBpbml0aWFsVmFsdWUuaW5kZXhPZihvcHRzLnJhZGl4UG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNQYXJ0ID0gaW5pdGlhbFZhbHVlLnNwbGl0KG9wdHMucmFkaXhQb2ludClbMV0ubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxkKlwiKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChvcHRzLmRpZ2l0cykgPCBkZWNQYXJ0LnRvU3RyaW5nKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIHBhcnNlSW50KG9wdHMuZGlnaXRzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IChpbml0aWFsVmFsdWUgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoaW5pdGlhbFZhbHVlKSAqIGRpZ2l0c0ZhY3RvcikgLyBkaWdpdHNGYWN0b3IpLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbkNsZWFyUG9zaXRpb246IGZ1bmN0aW9uKG1hc2tzZXQsIHBvc2l0aW9uLCBsdnAsIHN0cmljdCwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2cCA9IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dLCBjYW5DbGVhciA9IHZwLmlucHV0ICE9PSBvcHRzLnJhZGl4UG9pbnQgfHwgbnVsbCAhPT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbl0ubWF0Y2guZm4gJiYgITEgPT09IG9wdHMuZGVjaW1hbFByb3RlY3QgfHwgdnAuaW5wdXQgPT09IG9wdHMucmFkaXhQb2ludCAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uICsgMV0gJiYgbnVsbCA9PT0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbiArIDFdLm1hdGNoLmZuIHx8IGlzRmluaXRlKHZwLmlucHV0KSB8fCBwb3NpdGlvbiA9PT0gbHZwIHx8IHZwLmlucHV0ID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yIHx8IHZwLmlucHV0ID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250IHx8IHZwLmlucHV0ID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFjYW5DbGVhciB8fCBcIitcIiAhPT0gdnAubWF0Y2gubmF0aXZlRGVmICYmIFwiLVwiICE9PSB2cC5tYXRjaC5uYXRpdmVEZWYgfHwgKG9wdHMuaXNOZWdhdGl2ZSA9ICExKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuQ2xlYXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuVVA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwocGFyc2VGbG9hdCh0aGlzLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkpICsgcGFyc2VJbnQob3B0cy5zdGVwKSksICRpbnB1dC50cmlnZ2VyKFwic2V0dmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuRE9XTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiJCBcIixcclxuICAgICAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcclxuICAgICAgICAgICAgICAgIGF1dG9Hcm91cDogITAsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHM6IDIsXHJcbiAgICAgICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITEsXHJcbiAgICAgICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVjaW1hbDoge1xyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludGVnZXI6IHtcclxuICAgICAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgICAgICAgIGRpZ2l0czogMCxcclxuICAgICAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGVyY2VudGFnZToge1xyXG4gICAgICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzOiAyLFxyXG4gICAgICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxyXG4gICAgICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcclxuICAgICAgICAgICAgICAgIGFsbG93TWludXM6ICExXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXztcclxuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcclxuICAgICFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICAgICAgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFsgX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX193ZWJwYWNrX3JlcXVpcmVfXygxKSBdLCBcclxuICAgICAgICB2b2lkIDAgIT09IChfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IGZhY3RvcnkpID8gX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyk7XHJcbiAgICB9KGZ1bmN0aW9uKCQsIElucHV0bWFzaykge1xyXG4gICAgICAgIGZ1bmN0aW9uIG1hc2tTb3J0KGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIG1hc2thID0gKGEubWFzayB8fCBhKS5yZXBsYWNlKC8jL2csIFwiOVwiKS5yZXBsYWNlKC9cXCkvLCBcIjlcIikucmVwbGFjZSgvWysoKSMtXS9nLCBcIlwiKSwgbWFza2IgPSAoYi5tYXNrIHx8IGIpLnJlcGxhY2UoLyMvZywgXCI5XCIpLnJlcGxhY2UoL1xcKS8sIFwiOVwiKS5yZXBsYWNlKC9bKygpIy1dL2csIFwiXCIpLCBtYXNrYXMgPSAoYS5tYXNrIHx8IGEpLnNwbGl0KFwiI1wiKVswXSwgbWFza2JzID0gKGIubWFzayB8fCBiKS5zcGxpdChcIiNcIilbMF07XHJcbiAgICAgICAgICAgIHJldHVybiAwID09PSBtYXNrYnMuaW5kZXhPZihtYXNrYXMpID8gLTEgOiAwID09PSBtYXNrYXMuaW5kZXhPZihtYXNrYnMpID8gMSA6IG1hc2thLmxvY2FsZUNvbXBhcmUobWFza2IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5hbHlzZU1hc2tCYXNlID0gSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzaztcclxuICAgICAgICByZXR1cm4gSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzayA9IGZ1bmN0aW9uKG1hc2ssIHJlZ2V4TWFzaywgb3B0cykge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWR1Y2VWYXJpYXRpb25zKG1hc2tzLCBwcmV2aW91c1ZhcmlhdGlvbiwgcHJldmlvdXNtYXNrR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzVmFyaWF0aW9uID0gcHJldmlvdXNWYXJpYXRpb24gfHwgXCJcIiwgcHJldmlvdXNtYXNrR3JvdXAgPSBwcmV2aW91c21hc2tHcm91cCB8fCBtYXNrR3JvdXBzLCBcclxuICAgICAgICAgICAgICAgIFwiXCIgIT09IHByZXZpb3VzVmFyaWF0aW9uICYmIChwcmV2aW91c21hc2tHcm91cFtwcmV2aW91c1ZhcmlhdGlvbl0gPSB7fSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB2YXJpYXRpb24gPSBcIlwiLCBtYXNrR3JvdXAgPSBwcmV2aW91c21hc2tHcm91cFtwcmV2aW91c1ZhcmlhdGlvbl0gfHwgcHJldmlvdXNtYXNrR3JvdXAsIGkgPSBtYXNrcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgbWFza0dyb3VwW3ZhcmlhdGlvbiA9IChtYXNrID0gbWFza3NbaV0ubWFzayB8fCBtYXNrc1tpXSkuc3Vic3RyKDAsIDEpXSA9IG1hc2tHcm91cFt2YXJpYXRpb25dIHx8IFtdLCBcclxuICAgICAgICAgICAgICAgIG1hc2tHcm91cFt2YXJpYXRpb25dLnVuc2hpZnQobWFzay5zdWJzdHIoMSkpLCBtYXNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gbWFza0dyb3VwKSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPiA1MDAgJiYgcmVkdWNlVmFyaWF0aW9ucyhtYXNrR3JvdXBbbmR4XS5zbGljZSgpLCBuZHgsIG1hc2tHcm91cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZChtYXNrR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gXCJcIiwgc3VibWFza3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCBpbiBtYXNrR3JvdXApICQuaXNBcnJheShtYXNrR3JvdXBbbmR4XSkgPyAxID09PSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPyBzdWJtYXNrcy5wdXNoKG5keCArIG1hc2tHcm91cFtuZHhdKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCArIG1hc2tHcm91cFtuZHhdLmpvaW4ob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgcmVidWlsZChtYXNrR3JvdXBbbmR4XSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgPT09IHN1Ym1hc2tzLmxlbmd0aCA/IG1hc2sgKz0gc3VibWFza3NbMF0gOiBtYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBzdWJtYXNrcy5qb2luKG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCkgKyBvcHRzLmdyb3VwbWFya2VyLmVuZCwgXHJcbiAgICAgICAgICAgICAgICBtYXNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtYXNrR3JvdXBzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRzLnBob25lQ29kZXMgJiYgKG9wdHMucGhvbmVDb2RlcyAmJiBvcHRzLnBob25lQ29kZXMubGVuZ3RoID4gMWUzICYmIChyZWR1Y2VWYXJpYXRpb25zKChtYXNrID0gbWFzay5zdWJzdHIoMSwgbWFzay5sZW5ndGggLSAyKSkuc3BsaXQob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSksIFxyXG4gICAgICAgICAgICBtYXNrID0gcmVidWlsZChtYXNrR3JvdXBzKSksIG1hc2sgPSBtYXNrLnJlcGxhY2UoLzkvZywgXCJcXFxcOVwiKSksIGFuYWx5c2VNYXNrQmFzZS5jYWxsKHRoaXMsIG1hc2ssIHJlZ2V4TWFzaywgb3B0cyk7XHJcbiAgICAgICAgfSwgSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xyXG4gICAgICAgICAgICBhYnN0cmFjdHBob25lOiB7XHJcbiAgICAgICAgICAgICAgICBncm91cG1hcmtlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjxcIixcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFwiPlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY291bnRyeWNvZGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZUNvZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIG1hc2s6IGZ1bmN0aW9uKG9wdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0cy5kZWZpbml0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIjXCI6IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbOV1cclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRzLnBob25lQ29kZXMuc29ydChtYXNrU29ydCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAga2VlcFN0YXRpYzogITAsXHJcbiAgICAgICAgICAgICAgICBvbkJlZm9yZU1hc2s6IGZ1bmN0aW9uKHZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjB7MSwyfS8sIFwiXCIpLnJlcGxhY2UoL1tcXHNdL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvY2Vzc2VkVmFsdWUuaW5kZXhPZihvcHRzLmNvdW50cnljb2RlKSA+IDEgfHwgLTEgPT09IHByb2Nlc3NlZFZhbHVlLmluZGV4T2Yob3B0cy5jb3VudHJ5Y29kZSkpICYmIChwcm9jZXNzZWRWYWx1ZSA9IFwiK1wiICsgb3B0cy5jb3VudHJ5Y29kZSArIHByb2Nlc3NlZFZhbHVlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlLnJlcGxhY2UoL1soKSMtXS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU6IFwidGVsXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCBJbnB1dG1hc2s7XHJcbiAgICB9KTtcclxufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fO1xyXG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xyXG4gICAgIWZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gWyBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpIF0sIFxyXG4gICAgICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiAoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gZmFjdG9yeSkgPyBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxuICAgIH0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIElucHV0bWFzay5leHRlbmRBbGlhc2VzKHtcclxuICAgICAgICAgICAgUmVnZXg6IHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IFwiclwiLFxyXG4gICAgICAgICAgICAgICAgZ3JlZWR5OiAhMSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogXCIqXCIsXHJcbiAgICAgICAgICAgICAgICByZWdleDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlZ2V4VG9rZW5zOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG9rZW5pemVyOiAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpZmllckZpbHRlcjogL1swLTldK1teLF0vLFxyXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZnVuY3Rpb24oYnVmZmVyLCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAob3B0cy5yZWdleCwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpLnRlc3QoYnVmZmVyLmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBSZWdleFRva2VuKGlzR3JvdXAsIGlzUXVhbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IFtdLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWFudGlmaWVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMucmVwZWF0ZXJQYXJ0ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVSZWdleFRva2VuKHRva2VuLCBmcm9tR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXN2YWxpZCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Hcm91cCAmJiAocmVnZXhQYXJ0ICs9IFwiKFwiLCBvcGVuR3JvdXBDb3VudCsrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IHRva2VuLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoVG9rZW4gPSB0b2tlbi5tYXRjaGVzW21uZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgPT09IG1hdGNoVG9rZW4uaXNHcm91cCkgaXN2YWxpZCA9IHZhbGlkYXRlUmVnZXhUb2tlbihtYXRjaFRva2VuLCAhMCk7IGVsc2UgaWYgKCEwID09PSBtYXRjaFRva2VuLmlzUXVhbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNycm50bmR4ID0gJC5pbkFycmF5KG1hdGNoVG9rZW4sIHRva2VuLm1hdGNoZXMpLCBtYXRjaEdyb3VwID0gdG9rZW4ubWF0Y2hlc1tjcnJudG5keCAtIDFdLCByZWdleFBhcnRCYWsgPSByZWdleFBhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4obWF0Y2hUb2tlbi5xdWFudGlmaWVyLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDttYXRjaFRva2VuLnJlcGVhdGVyUGFydCAmJiBtYXRjaFRva2VuLnJlcGVhdGVyUGFydCAhPT0gcmVnZXhQYXJ0ICYmIG1hdGNoVG9rZW4ucmVwZWF0ZXJQYXJ0Lmxlbmd0aCA+IHJlZ2V4UGFydC5sZW5ndGggJiYgIShpc3ZhbGlkID0gdmFsaWRhdGVSZWdleFRva2VuKG1hdGNoR3JvdXAsICEwKSk7ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc3ZhbGlkID0gaXN2YWxpZCB8fCB2YWxpZGF0ZVJlZ2V4VG9rZW4obWF0Y2hHcm91cCwgITApKSAmJiAobWF0Y2hUb2tlbi5yZXBlYXRlclBhcnQgPSByZWdleFBhcnQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleFBhcnQgPSByZWdleFBhcnRCYWsgKyBtYXRjaFRva2VuLnF1YW50aWZpZXIubWF4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcW0gPSBtYXRjaFRva2VuLnF1YW50aWZpZXIubWF4IC0gMTsgaSA8IHFtICYmICEoaXN2YWxpZCA9IHZhbGlkYXRlUmVnZXhUb2tlbihtYXRjaEdyb3VwLCAhMCkpOyBpKyspIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleFBhcnQgPSByZWdleFBhcnRCYWsgKyBcIntcIiArIG1hdGNoVG9rZW4ucXVhbnRpZmllci5taW4gKyBcIixcIiArIG1hdGNoVG9rZW4ucXVhbnRpZmllci5tYXggKyBcIn1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IG1hdGNoVG9rZW4ubWF0Y2hlcykgZm9yICh2YXIgayA9IDA7IGsgPCBtYXRjaFRva2VuLmxlbmd0aCAmJiAhKGlzdmFsaWQgPSB2YWxpZGF0ZVJlZ2V4VG9rZW4obWF0Y2hUb2tlbltrXSwgZnJvbUdyb3VwKSk7IGsrKykgOyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0RXhwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiW1wiID09IG1hdGNoVG9rZW4uY2hhckF0KDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdEV4cCA9IHJlZ2V4UGFydCwgdGVzdEV4cCArPSBtYXRjaFRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBvcGVuR3JvdXBDb3VudDsgaisrKSB0ZXN0RXhwICs9IFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzdmFsaWQgPSAoZXhwID0gbmV3IFJlZ0V4cChcIl4oXCIgKyB0ZXN0RXhwICsgXCIpJFwiLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikpLnRlc3QoYnVmZmVyU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKHZhciBsID0gMCwgdGwgPSBtYXRjaFRva2VuLmxlbmd0aDsgbCA8IHRsOyBsKyspIGlmIChcIlxcXFxcIiAhPT0gbWF0Y2hUb2tlbi5jaGFyQXQobCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RXhwID0gcmVnZXhQYXJ0LCB0ZXN0RXhwID0gKHRlc3RFeHAgKz0gbWF0Y2hUb2tlbi5zdWJzdHIoMCwgbCArIDEpKS5yZXBsYWNlKC9cXHwkLywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvcGVuR3JvdXBDb3VudDsgaisrKSB0ZXN0RXhwICs9IFwiKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHAgPSBuZXcgUmVnRXhwKFwiXihcIiArIHRlc3RFeHAgKyBcIikkXCIsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXN2YWxpZCA9IGV4cC50ZXN0KGJ1ZmZlclN0cikpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXhQYXJ0ICs9IG1hdGNoVG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzdmFsaWQpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbUdyb3VwICYmIChyZWdleFBhcnQgKz0gXCIpXCIsIG9wZW5Hcm91cENvdW50LS0pLCBpc3ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlclN0ciwgZ3JvdXBUb2tlbiwgY2J1ZmZlciA9IG1hc2tzZXQuYnVmZmVyLnNsaWNlKCksIHJlZ2V4UGFydCA9IFwiXCIsIGlzVmFsaWQgPSAhMSwgb3Blbkdyb3VwQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gb3B0cy5yZWdleFRva2VucyAmJiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gsIG0sIGN1cnJlbnRUb2tlbiA9IG5ldyBSZWdleFRva2VuKCksIG9wZW5ncm91cHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKG9wdHMucmVnZXhUb2tlbnMgPSBbXTsgbWF0Y2ggPSBvcHRzLnRva2VuaXplci5leGVjKG9wdHMucmVnZXgpOyApIHN3aXRjaCAoKG0gPSBtYXRjaFswXSkuY2hhckF0KDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiKFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZ3JvdXBzLnB1c2gobmV3IFJlZ2V4VG9rZW4oITApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIilcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBUb2tlbiA9IG9wZW5ncm91cHMucG9wKCksIG9wZW5ncm91cHMubGVuZ3RoID4gMCA/IG9wZW5ncm91cHNbb3Blbmdyb3Vwcy5sZW5ndGggLSAxXS5tYXRjaGVzLnB1c2goZ3JvdXBUb2tlbikgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGdyb3VwVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwie1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdWFudGlmaWVyVG9rZW4gPSBuZXcgUmVnZXhUb2tlbighMSwgITApLCBtcSA9IChtID0gbS5yZXBsYWNlKC9be31dL2csIFwiXCIpKS5zcGxpdChcIixcIiksIG1xMCA9IGlzTmFOKG1xWzBdKSA/IG1xWzBdIDogcGFyc2VJbnQobXFbMF0pLCBtcTEgPSAxID09PSBtcS5sZW5ndGggPyBtcTAgOiBpc05hTihtcVsxXSkgPyBtcVsxXSA6IHBhcnNlSW50KG1xWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1YW50aWZpZXJUb2tlbi5xdWFudGlmaWVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBtcTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG1xMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvcGVuZ3JvdXBzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gb3Blbmdyb3Vwc1tvcGVuZ3JvdXBzLmxlbmd0aCAtIDFdLm1hdGNoZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF0Y2ggPSBtYXRjaGVzLnBvcCgpKS5pc0dyb3VwIHx8ICgoZ3JvdXBUb2tlbiA9IG5ldyBSZWdleFRva2VuKCEwKSkubWF0Y2hlcy5wdXNoKG1hdGNoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGdyb3VwVG9rZW4pLCBtYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaGVzLnB1c2gocXVhbnRpZmllclRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIChtYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpKS5pc0dyb3VwIHx8ICgoZ3JvdXBUb2tlbiA9IG5ldyBSZWdleFRva2VuKCEwKSkubWF0Y2hlcy5wdXNoKG1hdGNoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZ3JvdXBUb2tlbiksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKHF1YW50aWZpZXJUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5ncm91cHMubGVuZ3RoID4gMCA/IG9wZW5ncm91cHNbb3Blbmdyb3Vwcy5sZW5ndGggLSAxXS5tYXRjaGVzLnB1c2gobSkgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9rZW4ubWF0Y2hlcy5sZW5ndGggPiAwICYmIG9wdHMucmVnZXhUb2tlbnMucHVzaChjdXJyZW50VG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpLCBjYnVmZmVyLnNwbGljZShwb3MsIDAsIGNocnMpLCBidWZmZXJTdHIgPSBjYnVmZmVyLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdHMucmVnZXhUb2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnZXhUb2tlbiA9IG9wdHMucmVnZXhUb2tlbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSB2YWxpZGF0ZVJlZ2V4VG9rZW4ocmVnZXhUb2tlbiwgcmVnZXhUb2tlbi5pc0dyb3VwKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgSW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXywgX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gICAgIWZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICAgICBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gWyBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpIF0sIFxyXG4gICAgICAgIHZvaWQgMCAhPT0gKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiAoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gZmFjdG9yeSkgPyBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKTtcclxuICAgIH0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gJC5mbi5pbnB1dG1hc2sgJiYgKCQuZm4uaW5wdXRtYXNrID0gZnVuY3Rpb24oZm4sIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdmFyIG5wdG1hc2ssIGlucHV0ID0gdGhpc1swXTtcclxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gb3B0aW9ucyAmJiAob3B0aW9ucyA9IHt9KSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZm4pIHN3aXRjaCAoZm4pIHtcclxuICAgICAgICAgICAgICBjYXNlIFwidW5tYXNrZWR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0ICYmIGlucHV0LmlucHV0bWFzayA/IGlucHV0LmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCkgOiAkKGlucHV0KS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzayAmJiB0aGlzLmlucHV0bWFzay5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlIFwiZ2V0ZW1wdHltYXNrXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldGVtcHR5bWFzaygpIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImhhc01hc2tlZFZhbHVlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISghaW5wdXQgfHwgIWlucHV0LmlucHV0bWFzaykgJiYgaW5wdXQuaW5wdXRtYXNrLmhhc01hc2tlZFZhbHVlKCk7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlucHV0IHx8ICFpbnB1dC5pbnB1dG1hc2sgfHwgaW5wdXQuaW5wdXRtYXNrLmlzQ29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSBcImdldG1ldGFkYXRhXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuaW5wdXRtYXNrID8gaW5wdXQuaW5wdXRtYXNrLmdldG1ldGFkYXRhKCkgOiB2b2lkIDA7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJzZXR2YWx1ZVwiOlxyXG4gICAgICAgICAgICAgICAgJChpbnB1dCkudmFsKG9wdGlvbnMpLCBpbnB1dCAmJiB2b2lkIDAgPT09IGlucHV0LmlucHV0bWFzayAmJiAkKGlucHV0KS50cmlnZ2VySGFuZGxlcihcInNldHZhbHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgXCJvcHRpb25cIjpcclxuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBvcHRpb25zKSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHRoaXMuaW5wdXRtYXNrKSByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgdm9pZCAwICE9PSBpbnB1dC5pbnB1dG1hc2spIHJldHVybiBpbnB1dC5pbnB1dG1hc2sub3B0aW9uKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5hbGlhcyA9IGZuLCBucHRtYXNrID0gbmV3IElucHV0bWFzayhvcHRpb25zKSwgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5wdG1hc2subWFzayh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gKHZvaWQgMCA9PT0gZm4gPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihmbikpKSByZXR1cm4gbnB0bWFzayA9IG5ldyBJbnB1dG1hc2soZm4pLCBcclxuICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZm4ubWFzayAmJiB2b2lkIDAgPT09IGZuLmFsaWFzID8gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IHRoaXMuaW5wdXRtYXNrKSByZXR1cm4gdGhpcy5pbnB1dG1hc2sub3B0aW9uKGZuKTtcclxuICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KSA6IHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBucHRtYXNrLm1hc2sodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IGZuKSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIChucHRtYXNrID0gbmV3IElucHV0bWFzayhvcHRpb25zKSkubWFzayh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksICQuZm4uaW5wdXRtYXNrO1xyXG4gICAgfSk7XHJcbn0gXSk7XG5mdW5jdGlvbiBnZXRQYXN0ZUV2ZW50KCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JyksXG4gICAgICAgIG5hbWUgPSAnb25wYXN0ZSc7XG4gICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICByZXR1cm4gKHR5cGVvZiBlbFtuYW1lXSA9PT0gJ2Z1bmN0aW9uJyk/J3Bhc3RlJzonaW5wdXQnOyAgICAgICAgICAgICBcbn1cblxudmFyIHBhc3RlRXZlbnROYW1lID0gZ2V0UGFzdGVFdmVudCgpICsgXCIubWFza1wiLFxuXHR1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXG5cdGlQaG9uZSA9IC9pcGhvbmUvaS50ZXN0KHVhKSxcblx0YW5kcm9pZD0vYW5kcm9pZC9pLnRlc3QodWEpLFxuXHRjYXJldFRpbWVvdXRJZDtcblxuJC5tYXNrID0ge1xuXHQvL1ByZWRlZmluZWQgY2hhcmFjdGVyIGRlZmluaXRpb25zXG5cdGRlZmluaXRpb25zOiB7XG5cdFx0J24nOiBcIlswLTldXCIsXG5cdFx0J2EnOiBcIltBLVphLXpdXCIsXG5cdFx0JyonOiBcIltBLVphLXowLTldXCJcblx0fSxcblx0ZGF0YU5hbWU6IFwicmF3TWFza0ZuXCIsXG5cdHBsYWNlaG9sZGVyOiAnXycsXG59O1xuXG4kLmZuLmV4dGVuZCh7XG5cdC8vSGVscGVyIEZ1bmN0aW9uIGZvciBDYXJldCBwb3NpdGlvbmluZ1xuXHRjYXJldDogZnVuY3Rpb24oYmVnaW4sIGVuZCkge1xuXHRcdHZhciByYW5nZTtcblxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmlzKFwiOmhpZGRlblwiKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgYmVnaW4gPT0gJ251bWJlcicpIHtcblx0XHRcdGVuZCA9ICh0eXBlb2YgZW5kID09PSAnbnVtYmVyJykgPyBlbmQgOiBiZWdpbjtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLnNldFNlbGVjdGlvblJhbmdlKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3Rpb25SYW5nZShiZWdpbiwgZW5kKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNyZWF0ZVRleHRSYW5nZSkge1xuXHRcdFx0XHRcdHJhbmdlID0gdGhpcy5jcmVhdGVUZXh0UmFuZ2UoKTtcblx0XHRcdFx0XHRyYW5nZS5jb2xsYXBzZSh0cnVlKTtcblx0XHRcdFx0XHRyYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQpO1xuXHRcdFx0XHRcdHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgYmVnaW4pO1xuXHRcdFx0XHRcdHJhbmdlLnNlbGVjdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXNbMF0uc2V0U2VsZWN0aW9uUmFuZ2UpIHtcblx0XHRcdFx0YmVnaW4gPSB0aGlzWzBdLnNlbGVjdGlvblN0YXJ0O1xuXHRcdFx0XHRlbmQgPSB0aGlzWzBdLnNlbGVjdGlvbkVuZDtcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xuXHRcdFx0XHRyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuXHRcdFx0XHRiZWdpbiA9IDAgLSByYW5nZS5kdXBsaWNhdGUoKS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC0xMDAwMDApO1xuXHRcdFx0XHRlbmQgPSBiZWdpbiArIHJhbmdlLnRleHQubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHsgYmVnaW46IGJlZ2luLCBlbmQ6IGVuZCB9O1xuXHRcdH1cblx0fSxcblx0dW5tYXNrOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50cmlnZ2VyKFwidW5tYXNrXCIpO1xuXHR9LFxuXHRtYXNrOiBmdW5jdGlvbihtYXNrLCBzZXR0aW5ncykge1xuXHRcdHZhciBpbnB1dCxcblx0XHRcdGRlZnMsXG5cdFx0XHR0ZXN0cyxcblx0XHRcdHBhcnRpYWxQb3NpdGlvbixcblx0XHRcdGZpcnN0Tm9uTWFza1Bvcyxcblx0XHRcdGxlbjtcblxuXHRcdGlmICghbWFzayAmJiB0aGlzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlucHV0ID0gJCh0aGlzWzBdKTtcblx0XHRcdHJldHVybiBpbnB1dC5kYXRhKCQubWFzay5kYXRhTmFtZSkoKTtcblx0XHR9XG5cdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7XG5cdFx0XHRwbGFjZWhvbGRlcjogJC5tYXNrLnBsYWNlaG9sZGVyLCAvLyBMb2FkIGRlZmF1bHQgcGxhY2Vob2xkZXJcblx0XHRcdGNvbXBsZXRlZDogbnVsbFxuXHRcdH0sIHNldHRpbmdzKTtcblxuXG5cdFx0ZGVmcyA9ICQubWFzay5kZWZpbml0aW9ucztcblx0XHR0ZXN0cyA9IFtdO1xuXHRcdHBhcnRpYWxQb3NpdGlvbiA9IGxlbiA9IG1hc2subGVuZ3RoO1xuXHRcdGZpcnN0Tm9uTWFza1BvcyA9IG51bGw7XG5cblx0XHQkLmVhY2gobWFzay5zcGxpdChcIlwiKSwgZnVuY3Rpb24oaSwgYykge1xuXHRcdFx0aWYgKGMgPT0gJz8nKSB7XG5cdFx0XHRcdGxlbi0tO1xuXHRcdFx0XHRwYXJ0aWFsUG9zaXRpb24gPSBpO1xuXHRcdFx0fSBlbHNlIGlmIChkZWZzW2NdKSB7XG5cdFx0XHRcdHRlc3RzLnB1c2gobmV3IFJlZ0V4cChkZWZzW2NdKSk7XG5cdFx0XHRcdGlmIChmaXJzdE5vbk1hc2tQb3MgPT09IG51bGwpIHtcblx0XHRcdFx0XHRmaXJzdE5vbk1hc2tQb3MgPSB0ZXN0cy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXN0cy5wdXNoKG51bGwpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMudHJpZ2dlcihcInVubWFza1wiKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGlucHV0ID0gJCh0aGlzKSxcblx0XHRcdFx0YnVmZmVyID0gJC5tYXAoXG5cdFx0XHRcdG1hc2suc3BsaXQoXCJcIiksXG5cdFx0XHRcdGZ1bmN0aW9uKGMsIGkpIHtcblx0XHRcdFx0XHRpZiAoYyAhPSAnPycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkZWZzW2NdID8gc2V0dGluZ3MucGxhY2Vob2xkZXIgOiBjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdGZvY3VzVGV4dCA9IGlucHV0LnZhbCgpO1xuXG5cdFx0XHRmdW5jdGlvbiBzZWVrTmV4dChwb3MpIHtcblx0XHRcdFx0d2hpbGUgKCsrcG9zIDwgbGVuICYmICF0ZXN0c1twb3NdKTtcblx0XHRcdFx0cmV0dXJuIHBvcztcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gc2Vla1ByZXYocG9zKSB7XG5cdFx0XHRcdHdoaWxlICgtLXBvcyA+PSAwICYmICF0ZXN0c1twb3NdKTtcblx0XHRcdFx0cmV0dXJuIHBvcztcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gc2hpZnRMKGJlZ2luLGVuZCkge1xuXHRcdFx0XHR2YXIgaSxcblx0XHRcdFx0XHRqO1xuXG5cdFx0XHRcdGlmIChiZWdpbjwwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChpID0gYmVnaW4sIGogPSBzZWVrTmV4dChlbmQpOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodGVzdHNbaV0pIHtcblx0XHRcdFx0XHRcdGlmIChqIDwgbGVuICYmIHRlc3RzW2ldLnRlc3QoYnVmZmVyW2pdKSkge1xuXHRcdFx0XHRcdFx0XHRidWZmZXJbaV0gPSBidWZmZXJbal07XG5cdFx0XHRcdFx0XHRcdGJ1ZmZlcltqXSA9IHNldHRpbmdzLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGogPSBzZWVrTmV4dChqKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0d3JpdGVCdWZmZXIoKTtcblx0XHRcdFx0aW5wdXQuY2FyZXQoTWF0aC5tYXgoZmlyc3ROb25NYXNrUG9zLCBiZWdpbikpO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBzaGlmdFIocG9zKSB7XG5cdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdGMsXG5cdFx0XHRcdFx0aixcblx0XHRcdFx0XHR0O1xuXG5cdFx0XHRcdGZvciAoaSA9IHBvcywgYyA9IHNldHRpbmdzLnBsYWNlaG9sZGVyOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHRpZiAodGVzdHNbaV0pIHtcblx0XHRcdFx0XHRcdGogPSBzZWVrTmV4dChpKTtcblx0XHRcdFx0XHRcdHQgPSBidWZmZXJbaV07XG5cdFx0XHRcdFx0XHRidWZmZXJbaV0gPSBjO1xuXHRcdFx0XHRcdFx0aWYgKGogPCBsZW4gJiYgdGVzdHNbal0udGVzdCh0KSkge1xuXHRcdFx0XHRcdFx0XHRjID0gdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBrZXlkb3duRXZlbnQoZSkge1xuXHRcdFx0XHR2YXIgayA9IGUud2hpY2gsXG5cdFx0XHRcdFx0cG9zLFxuXHRcdFx0XHRcdGJlZ2luLFxuXHRcdFx0XHRcdGVuZDtcblxuXHRcdFx0XHQvL2JhY2tzcGFjZSwgZGVsZXRlLCBhbmQgZXNjYXBlIGdldCBzcGVjaWFsIHRyZWF0bWVudFxuXHRcdFx0XHRpZiAoayA9PT0gOCB8fCBrID09PSA0NiB8fCAoaVBob25lICYmIGsgPT09IDEyNykpIHtcblx0XHRcdFx0XHRwb3MgPSBpbnB1dC5jYXJldCgpO1xuXHRcdFx0XHRcdGJlZ2luID0gcG9zLmJlZ2luO1xuXHRcdFx0XHRcdGVuZCA9IHBvcy5lbmQ7XG5cblx0XHRcdFx0XHRpZiAoZW5kIC0gYmVnaW4gPT09IDApIHtcblx0XHRcdFx0XHRcdGJlZ2luPWshPT00Nj9zZWVrUHJldihiZWdpbik6KGVuZD1zZWVrTmV4dChiZWdpbi0xKSk7XG5cdFx0XHRcdFx0XHRlbmQ9az09PTQ2P3NlZWtOZXh0KGVuZCk6ZW5kO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbGVhckJ1ZmZlcihiZWdpbiwgZW5kKTtcblx0XHRcdFx0XHRzaGlmdEwoYmVnaW4sIGVuZCAtIDEpO1xuXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGsgPT0gMjcpIHsvL2VzY2FwZVxuXHRcdFx0XHRcdGlucHV0LnZhbChmb2N1c1RleHQpO1xuXHRcdFx0XHRcdGlucHV0LmNhcmV0KDAsIGNoZWNrVmFsKCkpO1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBrZXlwcmVzc0V2ZW50KGUpIHtcblx0XHRcdFx0dmFyIGsgPSBlLndoaWNoLFxuXHRcdFx0XHRcdHBvcyA9IGlucHV0LmNhcmV0KCksXG5cdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRjLFxuXHRcdFx0XHRcdG5leHQ7XG5cblx0XHRcdFx0aWYgKGUuY3RybEtleSB8fCBlLmFsdEtleSB8fCBlLm1ldGFLZXkgfHwgayA8IDMyKSB7Ly9JZ25vcmVcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSBpZiAoaykge1xuXHRcdFx0XHRcdGlmIChwb3MuZW5kIC0gcG9zLmJlZ2luICE9PSAwKXtcblx0XHRcdFx0XHRcdGNsZWFyQnVmZmVyKHBvcy5iZWdpbiwgcG9zLmVuZCk7XG5cdFx0XHRcdFx0XHRzaGlmdEwocG9zLmJlZ2luLCBwb3MuZW5kLTEpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHAgPSBzZWVrTmV4dChwb3MuYmVnaW4gLSAxKTtcblx0XHRcdFx0XHRpZiAocCA8IGxlbikge1xuXHRcdFx0XHRcdFx0YyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayk7XG5cdFx0XHRcdFx0XHRpZiAodGVzdHNbcF0udGVzdChjKSkge1xuXHRcdFx0XHRcdFx0XHRzaGlmdFIocCk7XG5cblx0XHRcdFx0XHRcdFx0YnVmZmVyW3BdID0gYztcblx0XHRcdFx0XHRcdFx0d3JpdGVCdWZmZXIoKTtcblx0XHRcdFx0XHRcdFx0bmV4dCA9IHNlZWtOZXh0KHApO1xuXG5cdFx0XHRcdFx0XHRcdGlmKGFuZHJvaWQpe1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoJC5wcm94eSgkLmZuLmNhcmV0LGlucHV0LG5leHQpLDApO1xuXHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRpbnB1dC5jYXJldChuZXh0KTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy5jb21wbGV0ZWQgJiYgbmV4dCA+PSBsZW4pIHtcblx0XHRcdFx0XHRcdFx0XHRzZXR0aW5ncy5jb21wbGV0ZWQuY2FsbChpbnB1dCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGNsZWFyQnVmZmVyKHN0YXJ0LCBlbmQpIHtcblx0XHRcdFx0dmFyIGk7XG5cdFx0XHRcdGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kICYmIGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdGlmICh0ZXN0c1tpXSkge1xuXHRcdFx0XHRcdFx0YnVmZmVyW2ldID0gc2V0dGluZ3MucGxhY2Vob2xkZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIHdyaXRlQnVmZmVyKCkgeyBpbnB1dC52YWwoYnVmZmVyLmpvaW4oJycpKTsgfVxuXG5cdFx0XHRmdW5jdGlvbiBjaGVja1ZhbChhbGxvdykge1xuXHRcdFx0XHQvL3RyeSB0byBwbGFjZSBjaGFyYWN0ZXJzIHdoZXJlIHRoZXkgYmVsb25nXG5cdFx0XHRcdHZhciB0ZXN0ID0gaW5wdXQudmFsKCksXG5cdFx0XHRcdFx0bGFzdE1hdGNoID0gLTEsXG5cdFx0XHRcdFx0aSxcblx0XHRcdFx0XHRjO1xuXG5cdFx0XHRcdGZvciAoaSA9IDAsIHBvcyA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdGlmICh0ZXN0c1tpXSkge1xuXHRcdFx0XHRcdFx0YnVmZmVyW2ldID0gc2V0dGluZ3MucGxhY2Vob2xkZXI7XG5cdFx0XHRcdFx0XHR3aGlsZSAocG9zKysgPCB0ZXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRjID0gdGVzdC5jaGFyQXQocG9zIC0gMSk7XG5cdFx0XHRcdFx0XHRcdGlmICh0ZXN0c1tpXS50ZXN0KGMpKSB7XG5cdFx0XHRcdFx0XHRcdFx0YnVmZmVyW2ldID0gYztcblx0XHRcdFx0XHRcdFx0XHRsYXN0TWF0Y2ggPSBpO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocG9zID4gdGVzdC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChidWZmZXJbaV0gPT09IHRlc3QuY2hhckF0KHBvcykgJiYgaSAhPT0gcGFydGlhbFBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHRwb3MrKztcblx0XHRcdFx0XHRcdGxhc3RNYXRjaCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhbGxvdykge1xuXHRcdFx0XHRcdHdyaXRlQnVmZmVyKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGFzdE1hdGNoICsgMSA8IHBhcnRpYWxQb3NpdGlvbikge1xuXHRcdFx0XHRcdGlucHV0LnZhbChcIlwiKTtcblx0XHRcdFx0XHRjbGVhckJ1ZmZlcigwLCBsZW4pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHdyaXRlQnVmZmVyKCk7XG5cdFx0XHRcdFx0aW5wdXQudmFsKGlucHV0LnZhbCgpLnN1YnN0cmluZygwLCBsYXN0TWF0Y2ggKyAxKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChwYXJ0aWFsUG9zaXRpb24gPyBpIDogZmlyc3ROb25NYXNrUG9zKTtcblx0XHRcdH1cblxuXHRcdFx0aW5wdXQuZGF0YSgkLm1hc2suZGF0YU5hbWUsZnVuY3Rpb24oKXtcblx0XHRcdFx0cmV0dXJuICQubWFwKGJ1ZmZlciwgZnVuY3Rpb24oYywgaSkge1xuXHRcdFx0XHRcdHJldHVybiB0ZXN0c1tpXSYmYyE9c2V0dGluZ3MucGxhY2Vob2xkZXIgPyBjIDogbnVsbDtcblx0XHRcdFx0fSkuam9pbignJyk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCFpbnB1dC5hdHRyKFwicmVhZG9ubHlcIikpXG5cdFx0XHRcdGlucHV0XG5cdFx0XHRcdC5vbmUoXCJ1bm1hc2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aW5wdXRcblx0XHRcdFx0XHRcdC51bmJpbmQoXCIubWFza1wiKVxuXHRcdFx0XHRcdFx0LnJlbW92ZURhdGEoJC5tYXNrLmRhdGFOYW1lKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmJpbmQoXCJmb2N1cy5tYXNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChjYXJldFRpbWVvdXRJZCk7XG5cdFx0XHRcdFx0dmFyIHBvcyxcblx0XHRcdFx0XHRcdG1vdmVDYXJldDtcblxuXHRcdFx0XHRcdGZvY3VzVGV4dCA9IGlucHV0LnZhbCgpO1xuXHRcdFx0XHRcdHBvcyA9IGNoZWNrVmFsKCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FyZXRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHR3cml0ZUJ1ZmZlcigpO1xuXHRcdFx0XHRcdFx0aWYgKHBvcyA9PSBtYXNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRpbnB1dC5jYXJldCgwLCBwb3MpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aW5wdXQuY2FyZXQocG9zKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCAxMCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5iaW5kKFwiYmx1ci5tYXNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNoZWNrVmFsKCk7XG5cdFx0XHRcdFx0aWYgKGlucHV0LnZhbCgpICE9IGZvY3VzVGV4dClcblx0XHRcdFx0XHRcdGlucHV0LmNoYW5nZSgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYmluZChcImtleWRvd24ubWFza1wiLCBrZXlkb3duRXZlbnQpXG5cdFx0XHRcdC5iaW5kKFwia2V5cHJlc3MubWFza1wiLCBrZXlwcmVzc0V2ZW50KVxuXHRcdFx0XHQuYmluZChwYXN0ZUV2ZW50TmFtZSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgXG5cdFx0XHRcdFx0XHR2YXIgcG9zPWNoZWNrVmFsKHRydWUpO1xuXHRcdFx0XHRcdFx0aW5wdXQuY2FyZXQocG9zKTsgXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MuY29tcGxldGVkICYmIHBvcyA9PSBpbnB1dC52YWwoKS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdHNldHRpbmdzLmNvbXBsZXRlZC5jYWxsKGlucHV0KTtcblx0XHRcdFx0XHR9LCAwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRjaGVja1ZhbCgpOyAvL1BlcmZvcm0gaW5pdGlhbCBjaGVjayBmb3IgZXhpc3RpbmcgdmFsdWVzXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRcbi8vIG1lbnVcblx0JChmdW5jdGlvbigpIHtcblx0XHQkKCcuc21vb3RoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciB0YXJnZXQgPSAkKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0JCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcblx0XHRcdFx0XHRzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3Bcblx0XHRcdFx0fSwgMTAwMCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xuXHRcblx0JCgnLm5hdi1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5uYXZiYXItbmF2XCIpLmZpbmQoXCIubmF2LWl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG5cdFx0JCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblx0XG4gICAgXG4vLyBzbGljay1zbGlkZXJcblx0XG5cdGZ1bmN0aW9uIG1vYmlsZU9ubHlTbGlkZXIoKSB7XG5cdFx0JCgnLnBsYXRlc19fY29udGVudCcpLnNsaWNrKHtcblx0XHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdFx0ZG90czogdHJ1ZSxcblx0XHRcdGFycm93czogdHJ1ZSxcblx0XHR9KTtcblx0fVxuXG5cdGlmKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG5cdFx0bW9iaWxlT25seVNsaWRlcigpO1xuXHR9XG5cblx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbihlKXtcblx0XHRpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuXHRcdFx0aWYoISQoJy5wbGF0ZXNfX2NvbnRlbnQnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XG5cdFx0XHRcdG1vYmlsZU9ubHlTbGlkZXIoKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0aWYoJCgnLnBsYXRlc19fY29udGVudCcpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKXtcblx0XHRcdFx0JCgnLnBsYXRlc19fY29udGVudCcpLnNsaWNrKCd1bnNsaWNrJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbiAgICBcbi8vIG1hc2tcblx0XG5cdCQoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKS5tYXNrKFwiOC1ubm4tbm5uLW5uLW5uXCIpO1xuXHQkKCdpbnB1dFtuYW1lPVwibWFpbFwiXScpLmlucHV0bWFzayhcImVtYWlsXCIpO1xuXHRcbi8vY2Fyb3VzZWwgc2xpZGVyXG4gICAgXG5cdCQoXCIuZmxpcHN0ZXJcIikuZmxpcHN0ZXIoe1xuXHRcdHN0eWxlOiAnY2Fyb3VzZWwnLFxuXHRcdHNwYWNpbmc6IC0wLjUsXG5cdFx0YnV0dG9uczogdHJ1ZSxcblx0XHRzY3JvbGx3aGVlbDpmYWxzZSxcblx0fSk7XG4gICAgXG5cbn0pOyAiXSwiZmlsZSI6Im1haW4uanMifQ==

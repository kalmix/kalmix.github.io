!function($){var isBuilder=$("html").hasClass("is-builder");$.extend($.easing,{easeInOutCubic:function(x,t,b,c,d){return(t/=d/2)<1?c/2*t*t*t+b:c/2*((t-=2)*t*t+2)+b}}),$.fn.outerFind=function(selector){return this.find(selector).addBack(selector)},$.fn.scrollEnd=function(callback,timeout){$(this).scroll((function(){var $this=$(this);$this.data("scrollTimeout")&&clearTimeout($this.data("scrollTimeout")),$this.data("scrollTimeout",setTimeout(callback,timeout))}))},$.fn.footerReveal=function(){var $this=$(this),$prev=$this.prev(),$win=$(window),isIE=!!document.documentMode;function initReveal(){!isIE&&$this.outerHeight()<=$win.outerHeight()?($this.css({"z-index":-999,position:"fixed",bottom:0}),$this.css({width:$prev.outerWidth()}),$prev.css({"margin-bottom":$this.outerHeight()})):($this.css({"z-index":"",position:"",bottom:""}),$this.css({width:""}),$prev.css({"margin-bottom":""}))}return initReveal(),$win.on("load resize",(function(){initReveal()})),this},function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){execAsap||func.apply(obj,args),timeout=null}timeout?clearTimeout(timeout):execAsap&&func.apply(obj,args),timeout=setTimeout(delayed,threshold||100)}};jQuery.fn[sr]=function(fn){return fn?this.bind("resize",debounce(fn)):this.trigger(sr)}}(jQuery,"smartresize"),function(){var scrollbarWidth=0,originalMargin,touchHandler=function(event){event.preventDefault()};function getScrollbarWidth(){if(scrollbarWidth)return scrollbarWidth;var scrollDiv=document.createElement("div");return $.each({top:"-9999px",width:"50px",height:"50px",overflow:"scroll",position:"absolute"},(function(property,value){scrollDiv.style[property]=value})),$("body").append(scrollDiv),scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth,$("body")[0].removeChild(scrollDiv),scrollbarWidth}}(),$.isMobile=function(type){var reg=[],any={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};return"*"==(type="undefined"==$.type(type)?"*":type.toLowerCase())?reg=$.map(any,(function(v){return v})):type in any&&reg.push(any[type]),!(!reg.length||!navigator.userAgent.match(new RegExp(reg.join("|"),"i")))};var isSupportViewportUnits=($elem=$('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),elem=$elem[0],height=parseInt(window.innerHeight/2,10),compStyle=parseInt((window.getComputedStyle?getComputedStyle(elem,null):elem.currentStyle).height,10),$elem.remove(),compStyle==height),$elem,elem,height,compStyle;if($((function(){function calculate16by9(){$(this).css("height",9*$(this).parent().width()/16)}function initParallax(card){setTimeout((function(){$(card).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")}),0)}function destroyParallax(card){$(card).jarallax("destroy").css("position","")}$("html").addClass($.isMobile()?"mobile":"desktop"),$(window).scroll((function(){$(".mbr-navbar--sticky").each((function(){var method=$(window).scrollTop()>10?"addClass":"removeClass";$(this)[method]("mbr-navbar--stuck").not(".mbr-navbar--open")[method]("mbr-navbar--short")}))})),$.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(width,height){var deviceSize=[width,width];deviceSize[height>width?0:1]=height,$(window).smartresize((function(){var windowHeight=$(window).height();$.inArray(windowHeight,deviceSize)<0&&(windowHeight=deviceSize[$(window).width()>windowHeight?1:0]),$(".mbr-section--full-height").css("height",windowHeight+"px")}))}($(window).width(),$(window).height()):isSupportViewportUnits||($(window).smartresize((function(){$(".mbr-section--full-height").css("height",$(window).height()+"px")})),$(document).on("add.cards",(function(event){$("html").hasClass("mbr-site-loaded")&&$(event.target).outerFind(".mbr-section--full-height").length&&$(window).resize()}))),$(window).smartresize((function(){$(".mbr-section--16by9").each(calculate16by9)})),$(document).on("add.cards changeParameter.cards",(function(event){var enabled=$(event.target).outerFind(".mbr-section--16by9");enabled.length?enabled.attr("data-16by9","true").each(calculate16by9):$(event.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")})),$.fn.jarallax&&!$.isMobile()&&($(window).on("update.parallax",(function(event){setTimeout((function(){var $jarallax=$(".mbr-parallax-background");$jarallax.jarallax("coverImage"),$jarallax.jarallax("clipContainer"),$jarallax.jarallax("onScroll")}),0)})),isBuilder?($(document).on("add.cards",(function(event){initParallax(event.target),$(window).trigger("update.parallax")})),$(document).on("changeParameter.cards",(function(event,paramName,value,key){if("bg"===paramName)switch(destroyParallax(event.target),key){case"type":!0===value.parallax&&initParallax(event.target);break;case"value":"image"===value.type&&!0===value.parallax&&initParallax(event.target);break;case"parallax":!0===value.parallax&&initParallax(event.target)}$(window).trigger("update.parallax")}))):initParallax(document.body),$(window).on("shown.bs.tab",(function(e){$(window).trigger("update.parallax")})));var fixedTopTimeout,scrollTimeout,prevScrollTop=0,fixedTop=null,isDesktop=!$.isMobile();function videoParser(card){$(card).outerFind("[data-bg-video]").each((function(){var videoURL=$(this).attr("data-bg-video"),parsedUrl=videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),$img=$('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});if($("> *:eq(0)",this).before($img),parsedUrl&&(/youtube/g.test(parsedUrl[3])||/vimeo/g.test(parsedUrl[3]))){if(parsedUrl&&/youtube/g.test(parsedUrl[3])){var previewURL="http"+("https:"===location.protocol?"s":"")+":";previewURL+="//img.youtube.com/vi/"+parsedUrl[6]+"/maxresdefault.jpg",$("<img>").on("load",(function(){if(120===(this.naturalWidth||this.width)){var file=this.src.split("/").pop();switch(file){case"maxresdefault.jpg":this.src=this.src.replace(file,"sddefault.jpg");break;case"sddefault.jpg":this.src=this.src.replace(file,"hqdefault.jpg");break;default:isBuilder&&$img.css("background-image",'url("images/no-video.jpg")').show()}}else $img.css("background-image",'url("'+this.src+'")').show()})).attr("src",previewURL),!$.fn.YTPlayer||isBuilder||$.isMobile()||$("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:parsedUrl[6],containment:"self",showControls:!1,mute:!0})}else if(parsedUrl&&/vimeo/g.test(parsedUrl[3])){var request=new XMLHttpRequest;request.open("GET","https://vimeo.com/api/v2/video/"+parsedUrl[6]+".json",!0),request.onreadystatechange=function(){if(4===this.readyState)if(this.status>=200&&this.status<400){var response=JSON.parse(this.responseText);$img.css("background-image",'url("'+response[0].thumbnail_large+'")').show()}else isBuilder&&$img.css("background-image",'url("images/no-video.jpg")').show()},request.send(),request=null,!$.fn.vimeo_player||isBuilder||$.isMobile()||$("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:videoURL,containment:"self",showControls:!1,mute:!0})}}else isBuilder&&$img.css("background-image",'url("images/video-placeholder.jpg")').show()}))}$(window).scroll((function(){scrollTimeout&&clearTimeout(scrollTimeout);var scrollTop=$(window).scrollTop(),scrollUp=scrollTop<=prevScrollTop||isDesktop;if(prevScrollTop=scrollTop,fixedTop){var fixed=scrollTop>fixedTop.breakPoint;scrollUp?fixed!=fixedTop.fixed&&(isDesktop?(fixedTop.fixed=fixed,$(fixedTop.elm).toggleClass("is-fixed")):scrollTimeout=setTimeout((function(){fixedTop.fixed=fixed,$(fixedTop.elm).toggleClass("is-fixed")}),40)):(fixedTop.fixed=!1,$(fixedTop.elm).removeClass("is-fixed"))}})),$(document).on("add.cards delete.cards",(function(event){fixedTopTimeout&&clearTimeout(fixedTopTimeout),fixedTopTimeout=setTimeout((function(){fixedTop&&(fixedTop.fixed=!1,$(fixedTop.elm).removeClass("is-fixed")),$(".mbr-fixed-top:first").each((function(){fixedTop={breakPoint:$(this).offset().top+3*$(this).height(),fixed:!1,elm:this},$(window).scroll()}))}),650)})),$(window).smartresize((function(){$(".mbr-embedded-video").each((function(){$(this).height($(this).width()*parseInt($(this).attr("height")||315)/parseInt($(this).attr("width")||560))}))})),$(document).on("add.cards",(function(event){$("html").hasClass("mbr-site-loaded")&&$(event.target).outerFind("iframe").length&&$(window).resize()})),isBuilder?$(document).on("add.cards",(function(event){videoParser(event.target)})):videoParser(document.body),$(document).on("changeParameter.cards",(function(event,paramName,value,key){if("bg"===paramName)switch(key){case"type":$(event.target).find(".mbr-background-video-preview").remove(),"video"===value.type&&videoParser(event.target);break;case"value":"video"===value.type&&($(event.target).find(".mbr-background-video-preview").remove(),videoParser(event.target))}})),isBuilder||$("body > *:not(style, script)").trigger("add.cards"),$("html").addClass("mbr-site-loaded"),$(window).resize().scroll(),isBuilder||$(document).click((function(e){try{var target=e.target;if($(target).parents().hasClass("carousel"))return;do{if(target.hash){var useBody=/#bottom|#top/g.test(target.hash);$(useBody?"body":target.hash).each((function(){e.preventDefault();var stickyMenuHeight=$(target).parents().hasClass("navbar-fixed-top")?60:0,goTo="#bottom"==target.hash?$(this).height()-$(window).height():$(this).offset().top-stickyMenuHeight;$(this).hasClass("panel-collapse")||$(this).hasClass("tab-pane")||$("html, body").stop().animate({scrollTop:goTo},800,"easeInOutCubic")}));break}}while(target=target.parentNode)}catch(e){}})),$(".cols-same-height .mbr-figure").each((function(){var $imageCont=$(this),$img=$imageCont.children("img"),$cont=$imageCont.parent(),imgW=$img[0].width,imgH=$img[0].height;function setNewSize(){if($img.css({width:"",maxWidth:"",marginLeft:""}),imgH&&imgW){var aspectRatio=imgH/imgW;$imageCont.addClass({position:"absolute",top:0,left:0,right:0,bottom:0});var contAspectRatio=$cont.height()/$cont.width();if(contAspectRatio>aspectRatio){var percent=100*(contAspectRatio-aspectRatio)/aspectRatio;$img.css({width:percent+100+"%",maxWidth:percent+100+"%",marginLeft:-percent/2+"%"})}}}$img.one("load",(function(){imgW=$img[0].width,imgH=$img[0].height,setNewSize()})),$(window).on("resize",setNewSize),setNewSize()}))})),isBuilder||($.fn.socialLikes&&$(document).on("add.cards",(function(event){$(event.target).outerFind(".mbr-social-likes").on("counter.social-likes",(function(event,service,counter){counter>999&&$(".social-likes__counter",event.target).html(Math.floor(counter/1e3)+"k")})).socialLikes({initHtml:!1})})),$(document).on("add.cards",(function(event){$(event.target).hasClass("mbr-reveal")&&$(event.target).footerReveal()})),$(document).ready((function(){if(!$.isMobile()&&$("input[name=animation]").length){$("input[name=animation]").remove();var $animatedElements=$("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not((function(){return $(this).parents().is("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")})).not((function(){return $(this).parents().is("form")&&$(this).is("li")})).addClass("hidden animated");function getElementOffset(element){var top=0;do{top+=element.offsetTop||0,element=element.offsetParent}while(element);return top}function elCarouselItem(element){if("none"!==element.parents(".carousel-item").css("display"))return!1;var parentEl=element.parents(".carousel-item").parent();if(parentEl.find(".carousel-item.active .hidden.animated").lenght)return!1;if(parentEl.attr("data-visible")>1){var visibleSlides=parentEl.attr("data-visible");return!!(element.parents().is(".cloneditem-"+(visibleSlides-1))&&element.parents(".cloneditem-"+(visibleSlides-1)).attr("data-cloned-index")>=visibleSlides)||(element.removeClass("animated hidden"),!1)}return!0}function checkIfInView(){var window_height=window.innerHeight,window_top_position=document.documentElement.scrollTop||document.body.scrollTop,window_bottom_position=window_top_position+window_height-50;$.each($animatedElements,(function(){var $element=$(this),element=$element[0],element_height=element.offsetHeight,element_top_position=getElementOffset(element),element_bottom_position;(element_top_position+element_height>=window_top_position&&element_top_position<=window_bottom_position||elCarouselItem($element))&&$element.hasClass("hidden")&&$element.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){$element.removeClass("animated fadeInUp")}))}))}var $window=$(window);$window.on("scroll resize",checkIfInView),$window.trigger("scroll")}})),$(".nav-dropdown").length&&$(".nav-dropdown").swipe({swipeLeft:function(event,direction,distance,duration,fingerCount){$(".navbar-close").click()}})),$(document).ready((function(){if($(".mbr-arrow-up").length){var $scroller=$("#scrollToTop"),$main=$("body,html"),$window=$(window);$scroller.css("display","none"),$window.scroll((function(){$(this).scrollTop()>0?$scroller.fadeIn():$scroller.fadeOut()})),$scroller.click((function(){return $main.animate({scrollTop:0},400),!1}))}})),isBuilder||$(".mbr-arrow").on("click",(function(e){var $next=$(e.target).closest("section").next();$next.hasClass("engine")&&($next=$next.closest("section").next());var offset=$next.offset();$("html, body").stop().animate({scrollTop:offset.top},800,"linear")})),$("nav.navbar").length){var navHeight=$("nav.navbar").height();$(".mbr-after-navbar.mbr-fullscreen").css("padding-top",navHeight+"px")}function isIE(){var ua,msie;return!!(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))}if(!isBuilder&&isIE()&&$(document).on("add.cards",(function(event){var $eventTarget=$(event.target);$eventTarget.hasClass("mbr-fullscreen")&&$(window).on("load resize",(function(){$eventTarget.css("height","auto"),$eventTarget.outerHeight()<=$(window).height()&&$eventTarget.css("height","1px")})),($eventTarget.hasClass("mbr-slider")||$eventTarget.hasClass("mbr-gallery"))&&($eventTarget.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",width:"30px"}),$eventTarget.hasClass("mbr-slider")&&$eventTarget.find(".full-screen .slider-fullscreen-image").css("height","1px"))})),$(document).ready((function(){if(!isBuilder){var modal=function(item){var videoIframe=$(item).parents("section").find("iframe")[0],videoIframeSrc=$(videoIframe).attr("src");if(item.parents("section").css("z-index","5000"),-1!==videoIframeSrc.indexOf("youtu")&&videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"),-1!==videoIframeSrc.indexOf("vimeo")){var vimeoPlayer=new Vimeo.Player($(videoIframe));vimeoPlayer.play()}$(item).parents("section").find($(item).attr("data-modal")).css("display","table").click((function(){-1!==videoIframeSrc.indexOf("youtu")&&videoIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1!==videoIframeSrc.indexOf("vimeo")&&vimeoPlayer.pause(),$(this).css("display","none").off("click"),item.parents("section").css("z-index","0")}))};$(".modalWindow-video iframe").each((function(){var videoURL=$(this).attr("data-src");$(this).removeAttr("data-src");var parsedUrl=videoURL.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==videoURL.indexOf("youtu")?$(this).attr("src","https://youtube.com/embed/"+parsedUrl[6]+"?rel=0&enablejsapi=1"):-1!==videoURL.indexOf("vimeo")&&$(this).attr("src","https://player.vimeo.com/video/"+parsedUrl[6]+"?autoplay=0&loop=0")})),$("[data-modal]").click((function(){modal($(this))}))}})),!isBuilder&&!$.isMobile()){var $menu=$("section.menu"),$width=$(window).width(),$collapsed;$menu.find(".navbar").hasClass("collapsed")||$width>991&&($menu.find("ul.navbar-nav li.dropdown").hover((function(){$(this).hasClass("open")||$(this).find("a")[0].click()}),(function(){$(this).hasClass("open")&&$(this).find("a")[0].click()})),$menu.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover((function(){$(this).hasClass("open")||$(this).find("a")[0].click()}),(function(){$(this).hasClass("open")&&$(this).find("a")[0].click()})))}function setActiveCarouselItem(card){var $target;$(card).find(".carousel-item:first").addClass("active")}function initTestimonialsCarousel(card){var $target=$(card),$carouselID=$target.attr("ID")+"-carousel";$target.find(".carousel").attr("id",$carouselID),$target.find(".carousel-controls a").attr("href","#"+$carouselID),$target.find(".carousel-indicators li").attr("data-target","#"+$carouselID),setActiveCarouselItem($target)}function initClientCarousel(card){var $target=$(card),countElems=$target.find(".carousel-item").length,visibleSlides=$target.find(".carousel-inner").attr("data-visible");countElems<visibleSlides&&(visibleSlides=countElems),$target.find(".carousel-inner").attr("class","carousel-inner slides"+visibleSlides),$target.find(".clonedCol").remove(),$target.find(".carousel-item .col-md-12").each((function(){visibleSlides<2?$(this).attr("class","col-md-12"):"5"==visibleSlides?$(this).attr("class","col-md-12 col-lg-15"):$(this).attr("class","col-md-12 col-lg-"+12/visibleSlides)})),$target.find(".carousel-item").each((function(){for(var itemToClone=$(this),i=1;i<visibleSlides;i++){(itemToClone=itemToClone.next()).length||(itemToClone=$(this).siblings(":first"));var index=itemToClone.index();itemToClone.find(".col-md-12:first").clone().addClass("cloneditem-"+i).addClass("clonedCol").attr("data-cloned-index",index).appendTo($(this).children().eq(0))}}))}function updateClientCarousel(card){var $target=$(card),countElems=$target.find(".carousel-item").length,visibleSlides=$target.find(".carousel-inner").attr("data-visible");countElems<visibleSlides&&(visibleSlides=countElems),$target.find(".clonedCol").remove(),$target.find(".carousel-item").each((function(){for(var itemToClone=$(this),i=1;i<visibleSlides;i++){(itemToClone=itemToClone.next()).length||(itemToClone=$(this).siblings(":first"));var index=itemToClone.index();itemToClone.find(".col-md-12:first").clone().addClass("cloneditem-"+i).addClass("clonedCol").attr("data-cloned-index",index).appendTo($(this).children().eq(0))}}))}function clickHandler(e){e.stopPropagation(),e.preventDefault();var $target=$(e.target),curItem,curIndex;curIndex=$target.closest(".clonedCol").length?(curItem=$target.closest(".clonedCol")).attr("data-cloned-index"):(curItem=$target.closest(".carousel-item")).index();var item=$($target.closest(".carousel-inner").find(".carousel-item")[curIndex]).find("img")[0];$target.parents(".clonedCol").length>0&&item.click()}function initTabs(target){0!==$(target).find(".nav-tabs").length&&$(target).outerFind('section[id^="tabs"]').each((function(){var componentID=$(this).attr("id"),$tabsNavItem=$(this).find(".nav-tabs .nav-item"),$tabPane=$(this).find(".tab-pane");$tabPane.removeClass("active").eq(0).addClass("active"),$tabsNavItem.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active"),$tabPane.each((function(){$(this).attr("id",componentID+"_tab"+$(this).index())})),$tabsNavItem.each((function(){$(this).find("a").attr("href","#"+componentID+"_tab"+$(this).index())}))}))}function clickPrev(event){event.stopPropagation(),event.preventDefault()}if($.fn.outerFind=function(selector){return this.find(selector).addBack(selector)},isBuilder||(void 0===window.initClientPlugin&&0!=$(document.body).find(".clients").length&&(window.initClientPlugin=!0,$(document.body).find(".clients").each((function(index,el){$(this).attr("data-isinit")||(initTestimonialsCarousel($(this)),initClientCarousel($(this)))}))),void 0===window.initPopupBtnPlugin&&0!=$(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,$("section.popup-btn-cards .card-wrapper").each((function(index,el){$(this).addClass("popup-btn")}))),void 0===window.initTestimonialsPlugin&&0!=$(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,$(".testimonials-slider").each((function(){initTestimonialsCarousel(this)}))),void 0===window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,$(document).ready((function(){0!=$(".accordionStyles").length&&$('.accordionStyles .card-header a[role="button"]').each((function(){$(this).hasClass("collapsed")||$(this).addClass("collapsed")}))})),$('.accordionStyles .card-header a[role="button"]').click((function(){var $id=$(this).closest(".accordionStyles").attr("id"),$iscollapsing;if(!$(this).closest(".card").find(".panel-collapse").hasClass("collapsing"))if(-1!=$id.indexOf("toggle"))$(this).hasClass("collapsed")?$(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):$(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down");else if(-1!=$id.indexOf("accordion")){var $accordion;$(this).closest(".accordionStyles ").children(".card").each((function(){$(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")})),$(this).hasClass("collapsed")&&$(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")}}))),void 0===window.initTabsPlugin&&(window.initTabsPlugin=!0,initTabs(document.body)),0!=$(".mbr-slider.carousel").length&&$(".mbr-slider.carousel").each((function(){var $slider=$(this),controls=$slider.find(".carousel-control"),indicators=$slider.find(".carousel-indicators li");$slider.on("slide.bs.carousel",(function(){controls.bind("click",(function(event){clickPrev(event)})),indicators.bind("click",(function(event){clickPrev(event)})),$slider.carousel({keyboard:!1})})).on("slid.bs.carousel",(function(){controls.unbind("click"),indicators.unbind("click"),$slider.carousel({keyboard:!0}),$slider.find(".carousel-item.active").length>1&&($slider.find(".carousel-item.active").eq(1).removeClass("active"),$slider.find(".carousel-control li.active").eq(1).removeClass("active"))}))}))),isBuilder)$(document).on("add.cards",(function(event){if($(event.target).find(".form-with-styler").length){var form=$(event.target).find(".form-with-styler");$(form).find('select:not("[multiple]")').each((function(){$(this).styler()})),$(form).find("input[type=number]").each((function(){$(this).styler(),$(this).parent().parent().removeClass("form-control")})),$(form).find("input[type=date]").each((function(){$(this).datetimepicker&&$(this).datetimepicker({format:"Y-m-d",timepicker:!1})})),$(form).find("input[type=time]").each((function(){$(this).datetimepicker&&$(this).datetimepicker({format:"H:i",datepicker:!1})}))}}));else{function detectmob(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i))}$("section .form-with-styler").each((function(){$(this).find('select:not("[multiple]")').each((function(){$(this).styler()})),$(this).find("input[type=number]").each((function(){$(this).styler(),$(this).parent().parent().removeClass("form-control")})),!detectmob()&&$(this).datetimepicker&&($(this).find("input[type=date]").each((function(){$(this).datetimepicker({format:"Y-m-d",timepicker:!1})})),$(this).find("input[type=time]").each((function(){$(this).datetimepicker({format:"H:i",datepicker:!1})})))}))}$(document).on("change",'input[type="range"]',(function(e){$(e.target).parents(".form-group").find(".value")[0].innerHTML=e.target.value}))}(jQuery),function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1",a.className="engine",a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v5.0.11',document.body.insertBefore(a,document.body.childNodes[0])}}();
function initMap(){mapResize()}function mapResize(){if("rgba(0, 0, 0, 0)"!=$(".bac-sidebar").css("background-color")){var a=document.getElementById("map"),b={lat:37.73947,lng:-122.495534},c=[{stylers:[{saturation:-100}]}],d=new google.maps.StyledMapType(c,{name:"Styled Map"}),e=new google.maps.Map(a,{center:b,zoom:15,zoomControl:!1,scaleControl:!1,scrollwheel:!1,disableDoubleClickZoom:!0,mapTypeControl:!1,draggable:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}});new google.maps.Marker({position:b,map:e,icon:"../images/contact/marker.e2e9907f.svg",optimized:!1});a.style.height=$(window).height()-$(".bac-form-col").height()-$(".bac-col-header").height()+"px",e.mapTypes.set("map_style",d),e.setMapTypeId("map_style")}}!function(){"use strict";$(window).load(function(){$(".bac-animation-preload").delay(10).fadeOut(10)}),$(window).resize(function(){mapResize()})}(),function(){"use strict";function a(){var a=["BayAreaCoders","About Us","What we do","Our Clients",/*"Our Team",*/"Contact"],b="rgba(0, 0, 0, 0)"==$(".bac-sidebar").css("background-color")?{click:!0,wheelStep:20}:{click:!1};$("#fullpage").fullpage({sectionsColor:["#F4F4F4","#F4F4F4","#F4F4F4","#F4F4F4","#00ACC1","#F4F4F4"],anchors:["landing","about","whatWeDo","ourClients",/*"ourTeam",*/"contact"],menu:"#bac-navbar",scrollingSpeed:700,autoScrolling:!0,scrollOverflow:!0,navigation:!0,normalScrollElements:".bac-fab-up",easing:"easeInOutCubic",scrollOverflowOptions:b,afterLoad:function(a,b){"landing"!=a?($(".bac-contact-container").addClass("bac-flip"),$("#fp-nav").show()):($(".bac-contact-container").removeClass("bac-flip"),$("#fp-nav").hide())},afterRender:function(){$(this);$.material.init(),$(".team-slider").slick({dots:!1,arrows:!0,lazyLoad:"ondemand",slidesToShow:2,slidesPerRow:1,rows:2,accessibility:!0,centerMode:!0,centerPadding:"70px",infinite:!0,responsive:[{breakpoint:640,settings:{rows:1,slidesToShow:1,arrows:!1,dots:!0}},{breakpoint:1e3,settings:{slidesToShow:1,rows:1}}]}),$(".single-item").slick({dots:!0,arrows:!0,lazyLoad:"ondemand",mobileFirst:!0,accessibility:!0}),$.fn.fullpage.reBuild()},onLeave:function(b,c,d){var e="down"==d?"animated slideInUp":"animated slideInDown",f="down"==d?"animated slideInUp":"";$(".bac-menu-title").text(a[c-1]),$(".bac-menu-title-container").addClass(e).delay(900).queue(function(){$(this).removeClass(e).dequeue()}),"About Us"==a[c-1]?$(".animate-this").addClass(f).delay(1e3).queue(function(){$(this).removeClass(f).dequeue()}):"What we do"==a[c-1]?(f="down"==d?"animated zoomIn":"",$(".bac-wwd-cards-row").addClass(f).delay(1e3).queue(function(){$(this).removeClass(f).dequeue()})):"Our Clients"==a[c-1]?(f="down"==d?"animated flipInY":"",$(".bac-clients-col").addClass(f).delay(1e3).queue(function(){$(this).removeClass(f).dequeue()}),$(".bac-fuck-ios-hack").hasClass("hack-position")||$(".bac-fuck-ios-hack").addClass("hack-position"))/*:"Our Team"==a[c-1]?(f="down"==d?"animated zoomIn":"",$(".bac-col-apply").addClass(f).delay(1e3).queue(function(){$(this).removeClass(f).dequeue()}),$(".bac-fuck-ios-hack").hasClass("hack-position")||$(".bac-fuck-ios-hack").addClass("hack-position"))*/:"Contact"==a[c-1]&&(f="down"==d?"animated slideInUp":"",$(".bac-row").addClass(f).delay(1e3).queue(function(){$(this).removeClass(f).dequeue()}),f="down"==d?"animated slideInLeft":"",$(".bac-col-map >  .mt-card-panel").addClass(f).delay(1100).queue(function(){$(this).removeClass(f).dequeue()}))}})}function b(){$(".bac-header").toggleClass("sidebar-active"),$(".bac-header .bac-icon-container").toggleClass("animated zoomIn"),$(".bac-header .bac-navbar").toggleClass("animated slideInLeft"),$(".section").toggleClass("bac-screen-push"),$(".c-hamburger").toggleClass("is-active")}$(document).ready(function(){a(),$(".c-hamburger").click(function(){b()}),$("#bac-navbar > li > a").click(function(){$(this).delay(500).queue(function(){b()})}),$(".bac-menu-title-container").hover(function(a){$(this).addClass("animated pulse")},function(a){$(this).removeClass("animated pulse")}),$(".bac-contact-container").click(function(a){$(this).toggleClass("bac-flip")})})}();

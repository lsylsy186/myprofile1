var myCenter = new google.maps.LatLng(40.528451, -74.464784);

var over = function(){
  $('.window .close').click(function(e) {
      //Cancel the link behavior
      e.preventDefault();
      $('#mask').css({visibility: "hidden"});
      $('.window').hide();
      $('body').css({overflow:"scroll"});
   });
   $('#mask').click(function (){
      $('body').css({overflow:"scroll"});
      $('#mask').css({visibility: "hidden"});
      $('.window').hide();

   });
}

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(\'#t\').g(f(){1 a=\'#s\';$(\'#8\').0({\'7\':$(4).9()});1 e=$(3).d();1 6=$(3).5();$(a).0({\'7\':$(4).9()+o});$(a).0({\'n\':6/2-$(a).5()/2});$(a).p(q);$(\'#8\').0({j:"i"});$(\'k\').0({m:"l"});h()});$(\'#r\').g(f(){1 b=\'#u\';$(\'#8\').0({\'7\':$(4).9()});1 e=$(3).d();1 6=$(3).5();$(b).0({\'7\':$(4).9()+o});$(b).0({\'n\':6/2-$(b).5()/2});$(b).p(q);$(\'#8\').0({j:"i"});$(\'k\').0({m:"l"});h()});$(\'#v\').g(f(){1 c=\'#w\';$(\'#8\').0({\'7\':$(4).9()});1 e=$(3).d();1 6=$(3).5();$(c).0({\'7\':$(4).9()+o});$(c).0({\'n\':6/2-$(c).5()/2});$(c).p(q);$(\'#8\').0({j:"i"});$(\'k\').0({m:"l"});h()});',33,33,'css|var||window|document|width|winW|top|mask|scrollTop|id1|id2|id3|height|winH|function|click|over|visible|visibility|body|hidden|overflow|left|10|fadeIn|2000|carcassonne|dialog1|suggestionbox|dialog2|flappybird|dialog3'.split('|'),0,{}))


$(document).on({"mouseenter":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/basketball.jpg').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})},"mouseleave":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/kobe.JPG').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})}},"#interest1");$(document).on({"mouseenter":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/piano2.JPG').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})},"mouseleave":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/piano.jpg').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})}},"#interest2");$(document).on({"mouseenter":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/travel2.JPG').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})},"mouseleave":function(){var $this=$(this);$this.fadeOut(300,function(){$(this).attr('src','img/other/travel.jpg').bind('onreadystatechange load',function(){if(this.complete)$(this).fadeIn(300)})})}},"#interest3");


$(function(){var _showTab=0;var $defaultLi=$('#tabs li').eq(_showTab).addClass('active');$($defaultLi.find('a').attr('href')).siblings().hide();$('#tabs li').click(function(){var $this=$(this),_clickTab=$this.find('a').attr('href');$this.addClass('active').siblings('.active').removeClass('active');$(_clickTab).stop(false,true).fadeIn().siblings().hide();return false}).find('a').focus(function(){this.blur()})});

function initialize(){var mapProp={center:myCenter,zoom:12,scrollwheel:false,draggable:false,mapTypeId:google.maps.MapTypeId.ROADMAP};var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);var marker=new google.maps.Marker({position:myCenter,});marker.setMap(map)}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){$(".navbar a, footer a[href='#myPage']").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},900,function(){window.location.hash=hash})}})})


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(9).i(b(){$(".k").l(b(){6 f=$(e).j().m;6 d=$(9).1();8(f<d+p){$(e).a("q")}});6 5=7;6 1=$(9).1();8(1>=n&&5==7){$("#3-2").g("4-c");$("#3-2").a("4-h");5=o}8(1==0){$("#3-2").g("4-h");$("#3-2").a("4-c");5=7}});',27,27,'|scrollTop|header|my|navigation|flag|var|false|if|window|addClass|function|hidden|winTop|this|pos|removeClass|shown|scroll|offset|slideanim|each|top|60|true|600|slide'.split('|'),0,{}))

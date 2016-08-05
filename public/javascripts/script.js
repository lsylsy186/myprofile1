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



$('#suggestionbox').click(function(){
   var id1 = '#dialog1';

   //set the mask
   $('#mask').css({'top':$(document).scrollTop()});

   //Get the window height and width
   var winH = $(window).height();
   var winW = $(window).width();

   //Set the popup window to center
   $(id1).css({'top': $(document).scrollTop()+10});
   $(id1).css({'left': winW/2-$(id1).width()/2});

   //transition effect
   $(id1).fadeIn(2000);

   //set mask to visible
   $('#mask').css({visibility:"visible"});

   //forbidden the scroll
   $('body').css({overflow:"hidden"});

   //if close button is clicked
   over();
});

$('#carcassonne').click(function(){
   var id2 = '#dialog2';

   //set the mask
   $('#mask').css({'top':$(document).scrollTop()});

   //Get the window height and width
   var winH = $(window).height();
   var winW = $(window).width();

   //Set the popup window to center
   $(id2).css({'top': $(document).scrollTop()+10});
   $(id2).css({'left': winW/2-$(id2).width()/2});

   //transition effect
   $(id2).fadeIn(2000);

   $('#mask').css({visibility:"visible"});
   $('body').css({overflow:"hidden"});
   over();
});

$('#flappybird').click(function(){
   var id3 = '#dialog3';

   //set the mask
   $('#mask').css({'top':$(document).scrollTop()});

   //Get the window height and width
   var winH = $(window).height();
   var winW = $(window).width();

   //Set the popup window to center
   $(id3).css({'top': $(document).scrollTop()+10});
   $(id3).css({'left': winW/2-$(id3).width()/2});

   //transition effect
   $(id3).fadeIn(2000);
   $('#mask').css({visibility:"visible"});
   $('body').css({overflow:"hidden"});
   over();
});


$('#interest1').mouseover(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/basketball.jpg').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$('#interest1').mouseout(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/kobe.JPG').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$('#interest2').mouseover(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/piano2.JPG').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$('#interest2').mouseout(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/piano.jpg').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$('#interest3').mouseover(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/travel2.JPG').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$('#interest3').mouseout(function(){
  var $this = $(this);
  $this.fadeOut(300, function(){
    $(this).attr('src', 'img/other/travel.jpg').bind('onreadystatechange load', function(){
      if (this.complete) $(this).fadeIn(300);
    });
  });
});

$(function(){
  //show the first tab
  var _showTab = 0;
  var $defaultLi = $('#tabs li').eq(_showTab).addClass('active');
  $($defaultLi.find('a').attr('href')).siblings().hide();

  $('#tabs li').click(function() {
      // find the href(#id) in li
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');

      //add class .active to the li which clicked and remove .active of others
      $this.addClass('active').siblings('.active').removeClass('active');

      //fade in the content and hide other children
      $(_clickTab).stop(false, true).fadeIn().siblings().hide();

      return false;
  }).find('a').focus(function(){
      this.blur();
  });
});

function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:12,
    scrollwheel:false,
    draggable:false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
      position:myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    }
  });
})


$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });

    var flag = false;
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 60 && flag == false) {
        // $("#my-header").removeClass("navigation-hidden");
        $("#my-header").removeClass("navigation-hidden");
        $("#my-header").addClass("navigation-shown");
        flag = true;
    }
    if (scrollTop == 0) {
        $("#my-header").removeClass("navigation-shown");
        $("#my-header").addClass("navigation-hidden");
        flag = false;
    }

});
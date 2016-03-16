function dnomakResponsiveTest() {

  // --------------------
  // Url
  // --------------------
  function dnomakGetUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  var url = dnomakGetUrlVars()["url"];
  var col = dnomakGetUrlVars()["col"];
  if(url == null) {
    url = "http://dnomak.com"
  }
  else {
    $('.url').val(url)
  }
  if(col == null) {
      col = "xl"
  }
  else {
    $('.url').val(url)
  }

  // --------------------
  // Home
  // --------------------
  $(".home").click(function() {
    window.location = "?url=http://dnomak.com&col=" + col + "";
  });

  // --------------------
  // Field
  // --------------------
  $(".url").keyup(function(event) {
    if (event.keyCode == 13) {
      $(".refresh").click();
    }
  });

  // --------------------
  // Refresh
  // --------------------
  $(".refresh").click(function() {
    url = $('.url').val()
    window.location = "?url=" + url + "&col=" + col + "";
  });

  iframe = "<div class='row text-center'><iframe src='" + url + "' class='example' frameborder='0'></iframe></div>";
  $('.macbook').html(iframe);

  var dnomakXlButtonClick = function() {
    col = "xl"

    $('.xl-style-circle').addClass('active');
    $('.lg-style-circle').removeClass('active');
    $('.md-style-circle').removeClass('active');
    $('.sm-style-circle').removeClass('active');
    $('.xs-style-circle').removeClass('active');

    $('.macbook').css("display", "block");
    $('.macbook').html(iframe);

    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var dnomakLgButtonClick = function() {
    col = "lg"

    $('.xl-style-circle').removeClass('active');
    $('.lg-style-circle').addClass('active');
    $('.md-style-circle').removeClass('active');
    $('.sm-style-circle').removeClass('active');
    $('.xs-style-circle').removeClass('active');

    $('.ipad-landscape').css("display", "block");
    $('.ipad-landscape').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var dnomakMdButtonClick = function() {
    col = "md"

    $('.xl-style-circle').removeClass('active');
    $('.lg-style-circle').removeClass('active');
    $('.md-style-circle').addClass('active');
    $('.sm-style-circle').removeClass('active');
    $('.xs-style-circle').removeClass('active');

    $('.ipad-portrait').css("display", "block");
    $('.ipad-portrait').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.iphone-landscape').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var dnomakSmButtonClick = function() {
    col = "sm"

    $('.xl-style-circle').removeClass('active');
    $('.lg-style-circle').removeClass('active');
    $('.md-style-circle').removeClass('active');
    $('.sm-style-circle').addClass('active');
    $('.xs-style-circle').removeClass('active');

    $('.iphone-landscape').css("display", "block");
    $('.iphone-landscape').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-portrait').css("display", "none");
  };

  var dnomakXsButtonClick = function() {
    col = "xs"

    $('.xl-style-circle').removeClass('active');
    $('.lg-style-circle').removeClass('active');
    $('.md-style-circle').removeClass('active');
    $('.sm-style-circle').removeClass('active');
    $('.xs-style-circle').addClass('active');

    $('.iphone-portrait').css("display", "block");
    $('.iphone-portrait').html(iframe);

    $('.macbook').css("display", "none");
    $('.ipad-landscape').css("display", "none");
    $('.ipad-portrait').css("display", "none");
    $('.iphone-landscape').css("display", "none");
  };

  // --------------------
  // Url
  // --------------------

  if (col == "xl") {
    dnomakXlButtonClick()
  }
  if (col == "lg") {
    dnomakLgButtonClick()
  }
  if (col == "md") {
    dnomakMdButtonClick()
  }
  if (col == "sm") {
    dnomakSmButtonClick()
  }
  if (col == "xs") {
    dnomakXsButtonClick()
  }

  // --------------------
  // Click
  // --------------------

  $(".xl-style-circle").click(function() {
    dnomakXlButtonClick()
  });

  $(".lg-style-circle").click(function() {
    dnomakLgButtonClick()
  });

  $(".md-style-circle").click(function() {
    dnomakMdButtonClick()
  });

  $(".sm-style-circle").click(function() {
    dnomakSmButtonClick()
  });

  $(".xs-style-circle").click(function() {
    dnomakXsButtonClick()
  });

}

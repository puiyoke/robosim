// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function() {
    $('#east').click(function() {
        var offset = $(this).offset();
        var X = $("#image").offset().top;;
        var Y = $("#image").offset().left;
        $('#image').animate({left:'+=50px'});
        if (Y >= 560){
            $('#image').animate({left:'600px'});
        }
        $('#coord').text('X: ' + X + ', Y: ' + Y);
    });
    $('#west').click(function() {
        var offset = $(this).offset();
        var X = $("#image").offset().top;;
        var Y = $("#image").offset().left;
        $('#image').animate({left:'-=50px'});
        if (Y <= 268){
        $('#image').animate({left:'5px'});
        }
        $('#coord').text('X: ' + X + ', Y: ' + Y);
    });
    $('#south').click(function() {
        var offset = $(this).offset();
        var X = $("#image").offset().top;;
        var Y = $("#image").offset().left;
        $('#image').animate({top:'+=50px'});
        if (X >= 350){
            $('#image').animate({top:'345px'});
        }
        $('#coord').text('X: ' + X + ', Y: ' + Y);
    });
    $('#north').click(function() {
        var offset = $(this).offset();
        var X = $("#image").offset().top;;
        var Y = $("#image").offset().left;
        $('#image').animate({top:'-=50px'});
        if (X <= 65){
            $('#image').animate({top:'15px'});
        }
        $('#coord').text('X: ' + X + ', Y: ' + Y);
    });

    //drag robot
    $( function() {
        $( "#image" ).draggable();
        $('#container').on("mouseup", function(e) {
            var offset = $(this).offset();
            var X = (e.pageX - offset.left);
            var Y = (e.pageY - offset.top);
            $('#coord').text('X: ' + X + ', Y: ' + Y);
        });
      } );

});

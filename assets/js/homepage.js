/**
 * Created by leiluspocus on 16-08-23.
 */
 jQuery(document).ready(function(){

    jQuery("#sharebtn").click(function(){
      jQuery.get( "/message/create", { content: jQuery('#message').val() } )
      .done(function( data ) {
        console.log(data);
        $('#notification').html("Message accessible à l'adresse : " + window.location.href + data.url + ". <br /> Message détruit une fois consulté...");
      });
    });


});

/**
 * Created by leiluspocus on 16-08-23.
 */
 jQuery(document).ready(function(){

    jQuery("#sharebtn").click(function(){
      jQuery.get( "/message/create", { content: jQuery('#message').val() } )
      .done(function( data ) {
        console.log(data);
        alert( "Data Loaded: " + JSON.stringify(data) );
        $('#notification').html("Message accessible une fois à l'adresse : " + window.location.href + data.url);
      });
    });


});

/**
 * Created by leiluspocus on 16-08-23.
 */
 jQuery(document).ready(function(){

    jQuery("#sharebtn").click(function(){
      jQuery.get( "/message/create", { content: jQuery('#message').val() } )
      .done(function( data ) {
        $('#notification').html("> Your secret can be read at this address <strong>only once</strong> : " + window.location.href + data.url);
      });
    });


});

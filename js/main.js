$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function(event) {
      event.preventDefault();
      $( "#dialog" ).dialog( "open" );
      // console.log("CLICK");
      document.getElementById("con").reset();
    });
  } );



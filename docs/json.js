$().ready(function(){
    $.getJSON( "/723w9/data.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});

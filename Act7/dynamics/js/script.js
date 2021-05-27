$(document).ready(function(){
    $(".submitcarr").on("click", function(){
      let carr = $(":text").val();
      let mod = $(".filtmod").val();
      let pet = $.ajax({
        url:"./dynamics/php/Consultas.php",
        data: {busq:carr, dato:mod},
        method: "POST"
      });
      pet.done(function(resp){
        $(".results").html(resp);
      });
      pet.fail(function(resp){
        alert("F");
      });
    });
});

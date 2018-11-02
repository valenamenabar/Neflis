$("#action1").on("click",function(event){
    event.preventDefault();
    var peliID1 = $("#pelisTITULO").val();
       var peliID2 = $("#pelisDESC").val();
       var peliID3 = $("#pelisREPA").val();
       var peliID4 = $("#pelisGEN").val();
       var peliID5 = $("#pelisIMG").val();
       var peliID6 = $("#pelisPUNT").val();
       sendData({
           titulo: peliID1,
           descripcion: peliID2,
           reparto: peliID3,
           genero: peliID4,
           imagen: peliID5,
           puntuacion: peliID6,
       }) .then (succes,onError)
       function succes (response){
        $("#mensaje").append(
            "<p>" +response.msg + "</p>");
        $("#mensaje".show())}

    function onError(error){

    }
    
    console.log ();
});

$( ".poster" ).click(function() {
  $( this ).slideUp();
});
$( ".broly" ).click(function() {
  $( ".poster" ).slideDown();
});
$( ".poster1" ).click(function() {
  $( this ).slideUp();
});
$( ".broly1" ).click(function() {
  $( ".poster1" ).slideDown();
});
$( ".poster2" ).click(function() {
  $( this ).slideUp();
});
$( ".broly2" ).click(function() {
  $( ".poster2" ).slideDown();
});
$( ".poster3" ).click(function() {
  $( this ).slideUp();
});
$( ".broly3" ).click(function() {
  $( ".poster3" ).slideDown();
});
$( ".poster4" ).click(function() {
  $( this ).slideUp();
});
$( ".broly4" ).click(function() {
  $( ".poster4" ).slideDown();
});

//*https://api.jquery.com/click/ me puse a investigar y saqué de ahí lo de slide !*//

function sendData(params){
    return $.ajax({
        method: "POST",
        url: "http://192.168.1.117:3000/peliculas",
        data: params
            
    });
}
 
$(function(){
    getAllFilms();
})

function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.117:3000/peliculas",
        method:"GET"
    }).then(siSuccess, siError);
    function siSuccess(response){
            pagina.setMovies(response);
            pagina.listAll();
        }
    function siError(err){
            console.log("Err")
            $("#Msj").html("<p>" + response.msg + "</p>");
            $("#Msj").show();
    }
}


var pagina = {
    
    pelis:[],

    clear:function(){
        $("#Content").html("");
    },

    setMovies:function(pelis){
        this.pelis = pelis;
    },

    listAll:function(){
        for(var i = 0; i < this.pelis.length; i++){
            $("#Content").append(this.assamble(this.pelis[i]));
        }
    },

    assamble:function(peliculas){
        return'<div class="ItemPelicula">' +
                '<img class="Cartelera" src="' + peliculas.imagen + '"/>' +
                '<p>' + peliculas.titulo + '</p>' +
                '<p>' + peliculas.reparto + '</p>' +
                '<p>' + peliculas.genero + '</p>' +
                '<p>' + peliculas.puntuacion + '</p>' +
            '</div>' +
        '</li>'
    },
}


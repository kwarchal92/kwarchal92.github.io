$(document).ready(function(){

    $('button').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function(data){
            $('#dane-programisty').after(
                '<br>' + data.imie + 
                '<br>' + data.nazwisko + 
                '<br>' + data.zawod + 
                '<br>' + data.firma);
            
            console.log('DANE PRACOWNIKA');
        })


    })













})
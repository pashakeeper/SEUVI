$(document).ready(function (){
    $('.more_content').click(function(){ //you can give id or class name here for $('button')
        $(this).html(function(i,old){
            return old=='<img src="" alt=""> Згорнути' ?  '<img src="" alt=""> Розгорнути' : '<img src="" alt=""> Згорнути';
        });
    });
    $('#number_phone').niceSelect();
    $('#language').niceSelect();
})

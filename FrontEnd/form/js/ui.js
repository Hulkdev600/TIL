

$(function(){
    $('.selectbox-wrap').on('click',function(){
   
    if($('.new-selectbox').css('display') == 'none'){
        $('.new-selectbox').css('display','block')
    }else{
        $('.new-selectbox').css('display','none')
    }
      
    });

    $('.new-selectbox ul li').click(function(){
        $('.new-selectbox ul li').removeClass('selected')
        console.log($(this).index());
        var index = $(this).index();
       $('.new-selectbox ul li:eq('+index+')').addClass('selected');


       console.log()
    })

})







function maxLengthCheck(object){
    if(object.value > object.maxLength){
        object.value = object.value.slice(0,object.maxLength)
    }
}
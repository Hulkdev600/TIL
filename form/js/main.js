$(function(){


    
    $('.phn_box .selectbox_wrap').on('click',function(){
        console.log('test')

        var display = $('.phn_box .new_selectbox').css('display');
        if(display == 'none'){
            $('.phn_box .new_selectbox').css('display','block')
        }else{
            $('.phn_box .new_selectbox').css('display','none')
        }
    })

    
    $('.email_info .selectbox_wrap').on('click',function(){
        console.log('test')

        var display = $('.email_info .new_selectbox').css('display');
        if(display == 'none'){
            $('.email_info .new_selectbox').css('display','block')
        }else{
            $('.email_info .new_selectbox').css('display','none')
        }
    })

})
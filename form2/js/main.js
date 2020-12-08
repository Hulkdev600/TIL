$(function(){


    
    $('.phn_box .cell_info .selectbox_wrap').on('click',function(){

        var display = $('.phn_box .cell_info .new_selectbox').css('display');
        if(display == 'none'){
            $('.phn_box .cell_info .new_selectbox').css('display','block')
        }else{
            $('.phn_box .cell_info .new_selectbox').css('display','none')
        }
    })

    $('.phn_box .normalPhn_info .selectbox_wrap').on('click',function(){

        var display = $('.phn_box .normalPhn_info .new_selectbox').css('display');
        if(display == 'none'){
            $('.phn_box .normalPhn_info .new_selectbox').css('display','block')
        }else{
            $('.phn_box .normalPhn_info .new_selectbox').css('display','none')
        }
    })

    $('.cell_info .new_selectbox li').on('click',function(){
        var index=$(this).index();
        var phn1_value = $(this).text();
        $('.cell_info .value_holder').val(phn1_value);
        $('#memPhn_NO1 option:eq('+index+')').prop("selected",true);
        var selected_phn1 = $(this).text();        
        console.log($(this).text());
    })

    $('.normalPhn_info .new_selectbox li').on('click',function(){
        var index=$(this).index();
        var phn1_value = $(this).text();
        $('.normalPhn_info .value_holder').val(phn1_value);
        $('#normalPhn_NO1 option:eq('+index+')').prop("selected",true);
        var selected_phn1 = $(this).text();        
        console.log($(this).text());
    })
    
    
    $('.email_info .selectbox_wrap').on('click',function(){
        var display = $('.email_info .new_selectbox').css('display');
        if(display == 'none'){
            $('.email_info .new_selectbox').css('display','block')
        }else{
            $('.email_info .new_selectbox').css('display','none')
        }
    })

    $('.email_info .new_selectbox li').on('click',function(){
        var index=$(this).index();
        var emailAddr_value = $(this).text();
        $('.email_info .value_holder').val(emailAddr_value);
        $('#emailAddr option:eq('+index+')').prop('selected',true);

        $('.email_info .new_selectbox li').removeClass('selected');
        $('.email_info .new_selectbox li').eq(index).addClass('selected')
        if(index !== 0){
            $('#emailAddr_write').css('display','none')
        }else{
            $('#emailAddr_write').css('display','initial')
        }
    })








    $('#value_check').on('clilck',function(){
        
        var client_name = $('#client_name').val();
        console.log(client_name);
        
        var form_data = new FormData();
        
    })
})
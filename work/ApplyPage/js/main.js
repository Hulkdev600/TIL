$(document).ready(function(){


    agree();
    seleA9b();


    $("#sigi").datepicker({
        closeText: '닫기',
        prevText: '이전달', 
        nextText: '다음달', 
        currentText: '오늘', 
        monthNames: ['1월','2월','3월','4월','5월','6월', 
        '7월','8월','9월','10월','11월','12월'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월', 
        '7월','8월','9월','10월','11월','12월'], 
        dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'], 
        dayNamesShort: ['일','월','화','수','목','금','토'], 
        dayNamesMin: ['일','월','화','수','목','금','토'], 
        weekHeader: 'Wk', 
        dateFormat: 'yy-mm-dd', 
        firstDay: 0, 
        autoSize: false, 
        isRTL: false, 
        showMonthAfterYear: true, 
        yearSuffix: '년', 

      });


    $("#school2").blur(function(){

        if(this.value.length>1){
            if(this.value.length==10){
                var first=this.value.substring(0,3);
                var second=this.value.substring(3,5);
                var third=this.value.substring(5,10);
                this.value=first+"-"+second+"-"+third;
                //사업자 번호로 조회 2016-06-13 당분간
                //businessSerch(this.value);
            }else{
                alert('하이푼 없이 10자리만 !!');
                return false;
                $("#school2").focus();
            }
        }
    });


    $("#school2").click(function(){
        if(this.value.length==12){
            var first=this.value.substring(0,3);
                var second=this.value.substring(4,6);
                var third=this.value.substring(7,12);
                this.value=first+second+third;
        }
    });


    $("#hphone1").blur(function() {
        var value=$("#hphone1").val();
        if($("#hphone1").val().length==9){		
            var p_first	=value.substring(0,2);
            var p_second =value.substring(2,5);
            var p_third =value.substring(5,9);
            $("#hphone1").val(p_first+"-"+p_second+"-"+p_third);
        }else if($("#hphone1").val().length==10){
                
                var p_first	=value.substring(0,3);
                var p_second =value.substring(3,6);
                var p_third =value.substring(6,10);
                $("#hphone1").val(p_first+"-"+p_second+"-"+p_third);
        }else if($("#hphone1").val().length==11){

                var p_first	=value.substring(0,3);
                var p_second =value.substring(3,7);
                var p_third =value.substring(7,11);
                $("#hphone1").val(p_first+"-"+p_second+"-"+p_third);
        }
    });


    $("#hphone1").click(function() {
        var value=$("#hphone1").val();
        if($("#hphone1").val().length==11){

                    var p_first	=value.substring(0,2);
                    var p_second =value.substring(3,6);
                    var p_third =value.substring(7,11);
                    $("#hphone1").val(p_first+p_second+p_third);
            }else if($("#hphone1").val().length==12){
                    
                    var p_first	=value.substring(0,3);
                    var p_second =value.substring(4,7);
                    var p_third =value.substring(8,12);
                    $("#hphone1").val(p_first+p_second+p_third);
            }else if($("#hphone1").val().length==13){

                    var p_first	=value.substring(0,3);
                    var p_second =value.substring(4,8);
                    var p_third =value.substring(9,13);
                    $("#hphone1").val(p_first+p_second+p_third);
            }
    });



    $("#hphone2").blur(function() {
        var value=$("#hphone2").val();
        if($("#hphone2").val().length==9){		
            var p_first	=value.substring(0,2);
            var p_second =value.substring(2,5);
            var p_third =value.substring(5,9);
            $("#hphone2").val(p_first+"-"+p_second+"-"+p_third);
        }else if($("#hphone2").val().length==10){
                
                var p_first	=value.substring(0,3);
                var p_second =value.substring(3,6);
                var p_third =value.substring(6,10);
                $("#hphone2").val(p_first+"-"+p_second+"-"+p_third);
        }else if($("#hphone2").val().length==11){

                var p_first	=value.substring(0,3);
                var p_second =value.substring(3,7);
                var p_third =value.substring(7,11);
                $("#hphone2").val(p_first+"-"+p_second+"-"+p_third);
        }
    });



    $("#hphone2").click(function() {
        var value=$("#hphone2").val();
        if($("#hphone2").val().length==11){

                    var p_first	=value.substring(0,2);
                    var p_second =value.substring(3,6);
                    var p_third =value.substring(7,11);
                    $("#hphone2").val(p_first+p_second+p_third);
            }else if($("#hphone2").val().length==12){
                    
                    var p_first	=value.substring(0,3);
                    var p_second =value.substring(4,7);
                    var p_third =value.substring(8,12);
                    $("#hphone2").val(p_first+p_second+p_third);
            }else if($("#hphone2").val().length==13){

                    var p_first	=value.substring(0,3);
                    var p_second =value.substring(4,8);
                    var p_third =value.substring(9,13);
                    $("#hphone2").val(p_first+p_second+p_third);
            }
    });	



    $("#email").blur(function(){

        //alert($("#email").length);
      if($("#email").length>=1){
        var email=$("#email").val();
        var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
  
        if(regex.test(email) === false) {  
            alert('email 형식에 문제가 있습니다');
            
            //$("#email").focus();
            return false;  
        }
      }

    });

    $('#jumin').blur(function(){ //

		
		
		if($('#jumin').val().length==13){
			

			s_array= new Array();
			var regex=/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
					s_array[0]=$("#jumin").val().substring(0,6);
					s_array[1]=$("#jumin").val().substring(6,13);

					//alert(s_array[0]+'-'+s_array[1]);

			if(!checkSSN(s_array[0]+s_array[1])){

				alert('주민 번호를 확인하세요');
				$('#jumin').val('');
		
				$("#jumin").focus();
				return false;
			}

			$('#jumin').val(s_array[0]+'-'+s_array[1]);
			$('#juso').focus();

			//년령별 보험료 산출
			var jumin=$('#jumin').val();
			//preminumCalculator(jumin);



			///
		}
    });
    
    

    $('#jumin').click(function(){
		
		if($('#jumin').val().length==14){
			
			s_array= new Array();
			var regex=/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/;
					s_array[0]=$("#jumin").val().substring(0,6);
					s_array[1]=$("#jumin").val().substring(7,14);
			$('#jumin').val(s_array[0]+s_array[1]);
		//	$('#preminum').val('');
		//	$('#firstp_').val('');


		}
	});
  
    


    function submit(){
            
        if(!$("#a9b").val()){
            alert('업종을 선택하세요');
            $("#a9b").focus();
            return false;
        }
        if(!$("#damdangja").val()){
            alert('성명을 입력하세요');
            $("#damdangja").focus();
            return false;
        }
        if(!$("#jumin").val()){
            alert('주민번호를 입력하세요');
            $("#jumin").focus();
            return false;
        }
        if(!$('#email').val()){
            alert('이메일을 입력하세요');
            $("#email").focus();
            return false
        }
        if($("#email").length>1){
            var email=$("#email").val();
            var regex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;   
            if(regex.test(email) === false) {  
                alert('email 형식에 문제가 있습니다');
                $("#email").focus();
                return false;  
            }
        }
        if(!$("#hphone1").val()){
            alert('연락처 입력하세요');
            $("#hphone1").focus();
            return false;
        }
        if(!$("#sigi").val()){
            alert('상호를 입력하세요');
            $("#mutual").focus();
            return false;
        }
        if(!$("#school2").val()){
            alert('사업자번호를 입력하세요');
            $("#school2").focus();
            return false;
        }
        if(!$("#company").val()){
            alert('사업자명을 입력하세요');
            $("#company").focus();
            return false;
        }
        if(!$("#juso").val()){
            alert('사업자명을 입력하세요');
            $("#juso").focus();
            return false;
        }



        var form_data = new FormData();
        var serial=$('#serial1').val()+"-"+$('#serial2').val()+"-"+$('#serial3').val();
        form_data.append('serial',serial);	// 업종 코드
        form_data.append('a9b',$('#a9b').val());	// 업종 코드
        form_data.append('gi_1',$("#gi_1").val());	// 첫번째 기초 산출수 
        form_data.append('gi_2',$("#gi_2").val());  // 두번째 기초 산출수
        form_data.append('pr',numberWithCommas2($("#pr").html()));     //보험료 
        form_data.append('jumin',$("#jumin").val());	// 업종을 선택하세요
        form_data.append('school2',$("#school2").val());	// 사업자번호
        form_data.append('company',$('#company').val());	//상호
        form_data.append('damdangja',$("#damdangja").val());//신청자명
        form_data.append('hphone2',$("#hphone2").val());		//일반전화
        form_data.append('email',$("#email").val());		//이메일
        form_data.append('hphone',$("#hphone1").val());		//휴대전화
        form_data.append('juso',$('#juso').val()); 
        form_data.append('sigi',$('#sigi').val()); 						 
        form_data.append('infoNum',$('#infoNum').val());     //신청자를 저장하고 돌려주는 테이블값
        form_data.append('directory',$('#current').val());   //신청 통로
        form_data.append('message',$('#message').val());   //메세지


        $.ajax({
            url: 'http:/index.php/dajoong/dajoong/dajoong', // point to server-side controller method
            dataType: 'json', // what to expect back from the server
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function (data) {
                businessValue = new Array();	
                /*$.each(data, function(key, val){

                        businessValue.push( {	
                                     "infoNum":val.infoNum,
                                     "preminum":val.preminum, 
                                     "jagibudamName":val.jagibudamName, 
                                     "lolName":val.lolName, 

                                    } );
                        
                        
                    });*/
                //alert('신청이 완료 되었습니다. 연락 드리겠습니다!!');
                        
                car2()
            },
            error: function (response) {
                $('#msg').html(response); // display error response from the server
            }
        });
    }




})
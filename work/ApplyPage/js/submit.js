


        function submit(){

                var allChk = $('#allChk')
                // console.log(allChk.indexOf('img/check/checked'))
                
                

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
                    alert('보험시작일을 선택하세요');
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
                    alert('주소를 입력하세요');
                    $("#juso").focus();
                    return false;
                }
                
                if(allChk.attr('src').indexOf("img/check/checked") == -1){
                    alert('개인정보 수집 및 이용동의가 필요합니다');
                    var offset = allChk.offset();
                    console.log(offset);
                    $('html,body').animate({scrollTop : offset.top-600}, 200)
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
       
       
                function numberWithCommas2(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                
                function message(){
                    alert('최대한 빨리  해피콜을 드릴 예정입니다 감사합니다');
                      $("#school2").val('');	// 사업자번호
                      $('#company').val('');	//상호
                      $("#damdangja").val('');	//신청자명
                      $("#hphone2").val('');	//일반전화
                      $("#email").val('');		//이메일
                      $("#hphone1").val('');		//휴대전화
                  init();
                
                }
            }

        

       
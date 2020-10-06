


        function validation(){
            $('#onSubmit').click(function(){
            
                console.log(cnt);
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
                if(!$("#mutual").val()){
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
            })
        }

        

       

//보험료산출 스크립트
//수정본
function seleA9b() {
    $("#gi").children().remove();
    $("#pr").children().remove();//보험료 산출 결과
    var str2="";
	switch(eval($("#a9b").val())){
		case 14:
				str2 +="<div id='godo' class='step1'>";
					str2 +="<div class='information-detail'>";
						str2 +="<div class='information-title'>객실</div>";
				  		str2 +="<input type='text' id='gi_1' class='giclass'>실";
				 	str2 +="</div>";
					str2 +="<div class='information-detail'>"
						str2 +="<div class='information-title'>면적</div>";
						str2 +="<input type='text' id='gi_2' class='giclass'>";
				 		str2 +="㎡";
					str2 +="</div>";
					str2 +="<div class='premium-area'>";
						str2 +="<div class='form expectedPremium-area'>";
							str2 +="<div class='information-title'>예상보험료</div>"
							str2 +="<div class='information-write expectedPremium'></div>"
						str2 +="</div>"
						str2 +="<div class='dpremium-btn'>"
							str2 +="<button type='button' class='btn btn-success' onClick='dpreminum()'>보험료 산출</button>";
						str2 +="</div>"
					str2 +="</div>";
				str2 +="</div>";
			break;
		case 18 :	
				str2 +="<div id='godo' class='step1'>";
					str2 +="<div class='information-detail'>";
						str2 +="<div class='information-title'>좌석수</div>";
				  		str2 +="<input type='text' id='gi_1' class='giclass'>대";
				 	str2 +="</div>";
					str2 +="<div class='information-detail'>"
						str2 +="<div class='information-title'>면적</div>";
						str2 +="<input type='text' id='gi_2' class='giclass'>";
				 		str2 +="㎡";
					str2 +="</div>";
					str2 +="<div class='premium-area'>";
						str2 +="<div class='form expectedPremium-area'>";
							str2 +="<div class='information-title'>예상보험료</div>"
							str2 +="<div class='information-write expectedPremium'></div>"
						str2 +="</div>"
						str2 +="<div class='dpremium-btn'>"
							str2 +="<button type='button' class='btn btn-success' onClick='dpreminum()'>보험료 산출</button>";
						str2 +="</div>"
					str2 +="</div>";
				str2 +="</div>";
			break;
		case 19 :	
				str2 +="<div id='godo' class='step1'>";
					str2 +="<div class='information-detail'>";
						str2 +="<div class='information-title'>좌석수</div>";
				  		str2 +="<input type='text' id='gi_1' class='giclass'>대";
				 	str2 +="</div>";
					str2 +="<div class='information-detail'>"
						str2 +="<div class='information-title'>면적</div>";
						str2 +="<input type='text' id='gi_2' class='giclass'>";
				 		str2 +="㎡";
					str2 +="</div>";
					str2 +="<div class='premium-area'>";
						str2 +="<div class='form expectedPremium-area'>";
							str2 +="<div class='information-title'>예상보험료</div>"
							str2 +="<div class='information-write expectedPremium'></div>"
						str2 +="</div>"
						str2 +="<div class='dpremium-btn'>"
							str2 +="<button type='button' class='btn btn-success' onClick='dpreminum()'>보험료 산출</button>";
						str2 +="</div>"
					str2 +="</div>";
				str2 +="</div>";
			break;
		case 20 :	
				str2 +="<div id='godo' class='step1'>";
					str2 +="<div class='information-detail'>";
						str2 +="<div class='information-title'>좌석수</div>";
				  		str2 +="<input type='text' id='gi_1' class='giclass'>대";
				 	str2 +="</div>";
					str2 +="<div class='information-detail'>"
						str2 +="<div class='information-title'>면적</div>";
						str2 +="<input type='text' id='gi_2' class='giclass'>";
				 		str2 +="㎡";
					str2 +="</div>";
					str2 +="<div class='premium-area'>";
						str2 +="<div class='form expectedPremium-area'>";
							str2 +="<div class='information-title'>예상보험료</div>"
							str2 +="<div class='information-write expectedPremium'></div>"
						str2 +="</div>"
						str2 +="<div class='dpremium-btn'>"
							str2 +="<button type='button' class='btn btn-success' onClick='dpreminum()'>보험료 산출</button>";
						str2 +="</div>"
					str2 +="</div>";
				str2 +="</div>";
			break;
		default :
				str2 +="<div id='godo' class='step1'>";
					str2 +="<div class='information-detail'>"
						str2 +="<div class='information-title'>면적</div>";
						str2 +="<input type='text' id='gi_1' class='giclass'>";
				 		str2 +="㎡";
					str2 +="</div>";
					str2 +="<div class='premium-area'>";
						str2 +="<div class='form expectedPremium-area'>";
							str2 +="<div class='information-title'>예상보험료</div>"
							str2 +="<div class='information-write expectedPremium'></div>"
						str2 +="</div>"
						str2 +="<div class='dpremium-btn'>"
							str2 +="<button type='button' class='btn btn-success' onClick='dpreminum()'>보험료 산출</button>";
						str2 +="</div>"
					str2 +="</div>";
				str2 +="</div>";
			
			break;

	}

	//alert(str2);
	$("#gi").append(str2);
}


function dpreminum(){ //다중이용시설 보험료 산출

	if(!$('#a9b').val()){

		alert('업종을 선택하세요');
		$('#a9b').focus();
		return false;

	}
	if(!$("#gi_1").val()){
			alert('첫 번째 기초 산출수를 입력하세요!!');
			$("#gi_1").focus();
			return false;
	}
	var a9=$("#a9").val();
	if(a9 == 14  || a9 == 18  || a9 == 19  || a9 == 20){

		if(!$("#gi_2").val()){
			alert('면적을  입력하세요!!');
			$("#gi_2").focus();
			return false;
		}
	}

	

	var form_data = new FormData();
		form_data.append('a9b',$('#a9b').val());	// 업종 코드
		form_data.append('gi_1',$("#gi_1").val());	// 첫번째 기초 산출수 
		form_data.append('gi_2',$("#gi_2").val());  // 두번째 기초 산출수
		
		$.ajax({
			url: 'https:/index.php/dajoong/dajoong/preminum', // point to server-side controller method
			dataType: 'json', // what to expect back from the server
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,
			type: 'post',
			success: function (data) {
				//businessValue = new Array();	

				//alert(data);

				// $("#pr").html(data);//보험료 산출 결과
				$(".expectedPremium").html(data);//보험료 산출 결과
				/*$.each(data, function(key, val){

						businessValue.push( {	
									 "infoNum":val.infoNum,
									 "preminum":val.preminum, 
									 "jagibudamName":val.jagibudamName, 
									 "lolName":val.lolName, 

									} );
						
						
					});*/
				//alert('신청이 완료 되었습니다. 연락 드리겠습니다!!');
						
				//car2()
			},
			error: function (response) {
				$('#msg').html(response); // display error response from the server
			}
		});
	
}






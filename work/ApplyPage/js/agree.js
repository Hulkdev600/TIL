

//개인정보수집동의 스크립트


   function agree(){
      
    
    var check = './img/check/checked.png';
    var unCheck = './img/check/unchecked.png'

    $('#firstChk').click(function(){
        var chk = $('#firstChk').attr('src');
        console.log(chk)
        toggleImg(chk, 'firstChk')
    })

    $('#secondChk').click(function(){
        // alert('test')
        var chk = $('#secondChk').attr('src');
        toggleImg(chk, 'secondChk')
    })

    $('#thirdChk').click(function(){
        // alert('test')
        var chk = $('#thirdChk').attr('src');
        toggleImg(chk, 'thirdChk')
    })

    $('#fourthChk').click(function(){
        // alert('test')
        var chk = $('#fourthChk').attr('src');
        toggleImg(chk, 'fourthChk')
    })

    $('#fifthChk').click(function(){
        // alert('test')
        var chk = $('#fifthChk').attr('src');
        toggleImg(chk, 'fifthChk')
    })

    $('#allChk').click(function(){
        // alert('test')
        var chk = $('#allChk').attr('src');
        // console.log(chk)
        AlltoggleImg(chk, 'allChk')
    })


    function toggleImg(img, id){
        var chk = img;
        var id = '#'+id;
        // console.log(id);
        if(chk == unCheck){
            // console.log(chk);
            $(id).attr('src',check);
            // 4개 다되면 AlltoggleImg true
            var cnt = 0;
            $(".box").find('img').each(function(){
              console.log($(this).attr('src'));
              if($(this).attr('src').indexOf("mg/check/checked") !== -1){
                console.log('일치')
                cnt++
              }
              console.log(cnt)
              if(cnt == 5){
                AlltoggleImg(unCheck)
              }
            });
        }else{
          $(id).attr('src',unCheck);
          // 4개 하나라도꺼지면 AlltoggleImg false
          var cnt = 0;
          $(".box").find('img').each(function(){
            // console.log($(this).attr('src'));
            if($(this).attr('src').indexOf("mg/check/unchecked") !== -1){
                // console.log(indexOf("mg/unchecked"))
            //   console.log('일치')
              cnt++
            }
            // console.log(cnt)
            if(cnt > 0){
              $('#allChk').attr('src',unCheck);
            }
          });
        }
      }


      
  function AlltoggleImg(img){
    var chk = img;
    // console.log('chk : ',chk)
    // console.log('unCheck : ',unCheck)
    if(chk == unCheck){
      $('#allChk').attr('src',check);
        $('#firstChk').attr('src',check);
        $('#secondChk').attr('src',check);
        $('#thirdChk').attr('src',check);
        $('#fourthChk').attr('src',check);
        $('#fifthChk').attr('src',check);
    }else{
      $('#allChk').attr('src',unCheck);
      $('#firstChk').attr('src',unCheck);
      $('#secondChk').attr('src',unCheck);
      $('#thirdChk').attr('src',unCheck);
      $('#fourthChk').attr('src',unCheck);
      $('#fifthChk').attr('src',unCheck);
    }

  }
}
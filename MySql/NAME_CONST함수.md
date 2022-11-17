

데드락을 공부할 때 
SHOW ENGINE INNODB STATUS; 조회하여
락걸린 트랜잭션을 확인하다가 조건부에 처음보는 것이 있었다.

``` mysql
NAME_CONST('_drvResNo',_utf8'7812131012714' COLLATE 'utf8_general_ci')
``` 


원래 프로시져는 변수를 이용하는 것이었다.

``` mysql
update bikeDriverMaster a set
    a.agreeCheckYN = null,
    a.agreeCheckYMD = null,
    a.agreeCheckPk = null
    where aes_decrypt( unhex(a.bdJumin),'암호화키갓ㅂ')  = _drvResNo;
```

## 분석
- 조건부의 _drvResNo가 프로시져 실행 시 
'_drvResNo' 를 NAME_CONST('_drvResNo',_utf8'7812131012714' COLLATE 'utf8_general_ci') 로 치환한 것 같다.

- NAME_CONST는 Mysql의 내부 함수이다.
- 지정된 이름이 컬럼에 지정된다.
- select NAME_CONST('name','14')
이렇게 하면 name 컬럼이 '14'인 것을 찾아내는 것이다.


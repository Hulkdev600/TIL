# Lock wait Timeout


###
``` mysql
SELECT * FROM INNODB_TRX; -- 트랜잭션 확인
SELECT * FROM INNODB_LOCKS; -- Lock이 걸려있는 리스트 확인
SELECT * FROM INNODB_LOCK_WAITS; -- Lock을 대기하고 있는 리스트

```



### A타입
R004
프로시져에서 
1. insert planAgreeLog
2. update drivermaster
3. update renewal 
순서로  트랜잭션이 짜여져있을 때 Lock_wait_timeout이 발생했다.

위 상태 에서 

### B타입
R004의 트랜잭션을
1. insert planAgreeLog
2. update driverMaster
순서로 트랜잭션을 구성했을 때 해당 에러가 발생하지 않았다.



그러면 B타입에서 트랜잭션이 문제를 일으킨다는 뜻인데,
그럼에도 불구하고 의아한 점이 있다.

서버에서 5000개의 데이터를 가져와 프로시져를 하나씩 실행시키는 것인데s
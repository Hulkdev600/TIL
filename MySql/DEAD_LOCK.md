# Dead Lock 이슈

## DeadLock의 정확한 의미
- 프로세스가 자원을 얻지못해 다음 처리를 하지 못하는 상태로 '교착 상태'라고도 하며 시스템적으로 한정된 자원을 여러곳에서 사용하려고 할 때 발생한다.
- 멀티 프로그래밍 환경에서 한정된 자원을 사용하려고 경쟁하는 상황이 발생할 수 있다.
- 어떤 프로세스가 자원을요청했을 떄 그 시각에 자원을 사용할 수 없는 상황이 발생할 수 있고 그 때는 프로세스가 대기 상태에 들어가게 된다.
- 대기 상태로 들어간 프로세스들이 실행 상태로 변경 될 수 없을 때이러한 상황을 교착상태라고 한다.

## 히스토리
기명취소 시 DeadLock 이슈가 발생하였다.



InnoDB 상태 점검

-- Lock 상태
``` mysql
SELECT * FROM information_schema.INNODB_TRX; -- 트랜잭션 확인
SELECT * FROM information_schema.INNODB_LOCKS; -- Lock이 걸려있는 리스트 확인
SELECT * FROM information_schema.INNODB_LOCK_WAITS; -- Lock을 대기하고 있는 리스트



-- LOCK을 걸고 있는 프로세스 정보
SELECT * FROM information_schema.INNODB_TRX;
```
-- InnoDB 상태
``` mysql
SHOW ENGINE INNODB STATUS;
```



WAITING FOR THIS LOCK TO BE GRANTED : '이 잠금이 허용되기를 기다린다라는 뜻'

 명령어 사용 시 어느 테이블에서 Lock이 발생했는지 확인할 수 있다.


 ### 발생할 수 있는 Dead Lock 상황 예시
 아래와 같은 쿼리는 insert쿼리로 레코드를 만들고 초기값을 update한다.
다수 실행되게 되면 DeadLock을 유발할 수 있다.
 ``` mysql
insert into `test`(id, name) values ('id1', 'name1')
insert into `test`(id, name) values ('id2', 'name2')
insert into `test`(id, name) values ('id3', 'name3')
insert into `test`(id, name) values ('id4', 'name4')
 ```




 ## 더 공부해야하는 용어
 - 멀티스레드 프로그래밍



### 출처
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=cmw1728&logNo=220942833368

- __https://mysqldba.tistory.com/54__ 참고 도움이 많이됬다.
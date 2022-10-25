# DDL, DML. DCL이란

SQL언어를 지칭한다.
회사에서는 이 용어를 사실 잘 사용하지 않았는데, 
기본적으로 개발자끼리 소통하기 위해서 필요한 개념이다.


## DML
- Data Manipulation Language
- SELECT
    - 데이터베이스에 들어있는 데이트를 **조회하거나 검색**하기 위한 명령어다.
    - RETREIVE 라고도 한다.
-INSERT, UPDATE, DELETE
    - 데이터 베이스 테이블의 데이터에 **변형**을 가하는 종류이다. : 데이터 삽입, 수정, 삭제)

## DDL
- Data Definition Language
- 테이블과 같은 데이터 구조를 정의하는데 사용되는 명령어이다.
- CREATE, ALTER, DROP, RENAME, TRUNCATE


# DCL
- Data Control Language
- 데이터 베이스에 접근하고 객체들을 사용하도록 권한을 주고 회수하는 명령어들이다.
- GRANT
    - 데이터베이스 사용자에게 권한을 부여한다.
    - ``` mysql
        -- 권한 부여 
        GRANT '권한' ON 'DB이름'.'테이블이름' TO '유저이름'@'ip'

        -- 사용자 등록
        GRANT '권한' ON 'DB이름'.'테이블이름' TO '유저이름'@'ip' IDENTIFIED BY '비밀번호'

        --권한 확인
        SHOW GRANTS FOR '유저이름'@'ip'
    ```
    - 사용자에게 모든 접속위치를 허용한다면 'ip'는 '%' 표기


- REVOKE
    - 데이터베이스 사용자에게 권한을 취소한다.

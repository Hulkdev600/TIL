
2022-10-24

## 라이브러리 세팅 
- dependency 추가
    -
- org.hibernate dependency에서 ```<type>pom</type> ```으로 설정한 것이 궁극적으로 h2사용하는데 에러를 발생시키는 원인이 되었음


## persistence.xml 세팅
- javax.persistence관련 프로퍼티와 hibername관련 프로퍼티 설정
- pom.xml 파일에서 hibernate.dialect 프로퍼티 에러가 위 라이브러리 문제로 인해 연쇄적으로 발생



## EntityManagerFactory

- JPA는 항상 이 EntityManagerFactory라는 것을 만들어야한다. 
- 이것이 DB 하나당 1:1 매치되서 세팅이 되는 것
- ```java
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
    ```

## EntityManger 
- 고객의 모든 요청은 하나의 EntityManger에서 돌아가고 버려야한다.
- em.close();
- __JPA 모든 변경은 트랜잭션 안에서 일어나야한다.__
- 변경 후 꼭 commit해주어야한다.
- was가 내려갈 떄 factory도 close해주어야한다. 
```java 
    emf.close()
```



## JPQL
- JPA를 사용하면 엔티티 객체르 중심으로 개발
- 문제는 검색쿼리
- 검색을 할 때도 테이블이 아닌 엔티티 객체를 대상으로 검색
- 모든 DB 데이터를 객체로 변환해서 검색하는 것은 불가능
- 애플리케이션이 필요한 데이터만 DB에서 불러오려면 결국  검색 조건이 포함된 SQL이 필요
- 위와 같은 이유로 JPQL을 사용하게 된다.

- JPA는 SQL을 추상화한 JPQL이라는 객체 지향 쿼리 언어를 제공한다.
- SQL 문법과 유사. SELECT, FROM , GROUP BY, HAVING, JOIN 등 지원
- JPQL은 엔티티 객체를 대상으로 쿼리
- SQL은 데이터베이스 테이블을 대상으로 쿼리
- __한마디로 정리하면 객체지향 SQL이다.__
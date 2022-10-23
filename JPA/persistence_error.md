

# JPA에서 build 시 에러발생
- 에러내용
    - warning : jakarta.persistence.spi::No valid providers found.

- 김영한님 강의는 자바 8로 실행하지만, 나는 자바 11이 설치되어있어 문제가 발생한 것으로 보인다.
- javax와 jakarta의 차이에서 이런 원인이 발생한 것으로 추측하는데 이 둘의 차이점이 무엇인지도 공부를 알아야겠네.



## 원인
- pom.xml에서 org.hibernate 모듈 관련된 태그에서 문제가 있다.
- 기존에 <type>pom<type>이 문제가 되어 주석처리 했더니 위 에러가 사라졌다.
```xml
 <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>6.1.4.Final</version>
<!--            <type>pom</type>-->
        </dependency>
```





# 자바의 종류
 



## 출처
### jakarta
- https://sejoung.github.io/2019/09/2019-09-17-jakarta-ee-8/#jakarta-ee-8-Java-EE%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%8B%9C%EB%8C%80-%EC%84%A4%EB%AA%85


# date_format()

`SELECT date_format(컬럼명, '$Y-$m-%d) as Ymd FROM 테이블명`
`SELECT date_format(now(), "%Y %c/%e %r") as date`
date_format의 첫번째 인자는 **시간값**
두번째 인자는 대,소문자 구분에 따라 표기법에 따라 달라진다.

FORMAT
%M 월 (January, Feruary...)
%W 요일 (Sunday,Monday...)
%D 일(1st,7th);
%d 일(01,02,03)
%Y 연도 ( 2020,2021... )
%y 연도 (20(2020), 89(1989)) 뒤의 두자리로 변환
%X
%s 초
%S 초
%P AM,PM
%h 시(00,12,01)
%T "hh:mm:ss"
%r "hh:mm:ss AM|PM

# line-height;


기본 브라우저의 폰트 사이즈는 16px이다.

우리가 텍스트를 적으면 그 16px인 텍스트를 제외하고 half leading영역이 존재한다. 이 영역은 위아래로 존재한다.

텍스트줄이 여러개가 되었을 때 읽기 편하게 하기 위해 존재한다.

line-height는 이 half-leading 영역 위 아래까지 모두 포함한 크기아디.

line-height를 따로 지정하지 않는다면

기본값은

```
line-height : normal  /* 폰트 종류에 따라 다르다!*/
```
이다.

line-height가 늘어난다면 폰트의 크기는 그대로 있고 위아래 leading 공간이 늘어나게 된다.
line-height가 1 이라면 폰트와 크기와 동일하다.
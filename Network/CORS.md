# CORS

## CORS란?
- Cross Origin Resource Sharing
- 동일 출처 정책이라고 한다.
- 동일한 출처의 리소스에만 접근할 수 있도록 제한하는 정책이다.
- 여기서 출처는 프로토콜, 호스트명, 포트가 같다는 것을 의미한다.
- 간단히 말하면 클라이언트에서 서버로부터 리소스를 요청했을 때 요청서버와 응답서버의 출처가 다를 때 생기는 에러이다.

## 왜 생기는가?
- 브라우저는 보안에 있어서는 매우 취약하다.


## CORS 해결
- NodeJS Express로 서버를 설정할 때는 CORS를 다루는 미들웨어를 사용함으로써 CORS에러를 피할 수 있다.
- Request 헤더에서 Access-Control-Allow-Origin 을 적절하게 다루어준다.

``` javascript
//CORS 에러를 피하기 위해 익명콜백함수를 사용한다.(app.use(미들웨어 함수))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //*,
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, XMLHttpRequest, api_key, X-API-SECRET');
    (req.method === 'OPTIONS') ?
        res.send(200) :
        next();
})
```
- 서버에서는 미들웨어로 처리한 경험이 있지만 프론트에서도 적용할 수 있다고 해서 나중에 다시 프론트 만질일이 있으면 테스트해보자.

- 프록시 서버를 실무에서 많이 이용한다고 하는데 이는 현재로서는 배우지 못하는 영역이다.
    - 이 방법에 대해서 확인이 된 바로는 '클라이언트 웹페이지에서 직접 요청하는 것이 아니라 클라이언트 서버로 요청을 보내고 해당 클라이언트 서버에서 백엔드 서버로 요청을 보내도록 하는 것이다' 라고 한다.
    - 서버에서 서버끼리는 CORS 정책이 적용되지 않기때문에 이렇게 Proxy설정으로 CORS에러르
    피할 수 있다고 한다.(확인필요)
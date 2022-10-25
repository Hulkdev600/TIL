

# 서버점검모드 
- 어플리케이션 점검으로 public 페이지 및 api 접근 제한

## 서버점검모드로 변경
- 웹어플리케이션의 서버가 실행되고 특정 이벤트에 의해 웹어플리케이션의 점검모드로 ON시키기 위해 개발하였다.
- 적용하려고 하는 웹앱이 다른 플랫폼과 협업상태로 작동을 하여 상대 플랫폼에서 특정상황에 맞게 점검모드를 실행해주기 위해 필요했다.
- 이와 같은 이유로 서버이용, public 페이지 혹은 API 이용에 접근 제한을 두는 것을 목표로 한다.


``` javascript
var path = require('path');

module.exports = (req,res, next) => {

    // console.log('req.path : ',req.path)


    if(req.path ==='/setGlobalServerMode' || req.path === '/serverMode'){

        next()

    } else{

        // console.log('글로벌 서버모드 : ',  global.serverMode)

        if(global.serverMode !== 'maintenance'){

            next()


        } else {

            let pathStr = req.path
            let arr = pathStr.split('/');
            console.log(arr)

            // 특정 router 일 경우만 제한
            let accessBlock = false
            for (const path of arr) {
                if (path === 'join') {
                    accessBlock = true
                    break;
                }
            }

            if(accessBlock){

                console.log('서버 점검 중')
                
                // 서버 점검 시 제공 페이지
                let returnPath = path.resolve('./client/maintenance/index.html')

                return res.sendFile(returnPath);

            } else {

                next()
            }





        }
    }


// changeServerMode.js
}

```



``` javascript
const changeServerModeRouter = require('./routes/setGlobalServerMode')   // 서버점검모드로 QA지원용 라우터 세팅

app.use(changeServerModeRouter)
// app.js
```

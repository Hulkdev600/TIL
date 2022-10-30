

# object를 module.exports 할 때 objects내에서 this 사용 시 겪은 문제
파일을 저장해주는 모듈을 fileService로 따로 구분하기 위해서 이를 위한 파일을 새로 만들고 module.exports와 라우터쪽 파일에서 require하여 미들웨어로 사용하려고 하였다.
그런데 파일이 저장에 자꾸 실패했다.
exports와 require를 쓰지않고 절차식으로 한 파일에서 했을 때는 문제가 없었기 때문에 원인파악을 시도하였다.

### 원인
- this의 문법적 이해 부족으로 인한 잘못된 사용


### 참고사항
아래 예제들은 파악하기 위해 연습을 하면서 의도치않게 좋지 않은 코드가 된것 같아 사용하지는 않음
단지 과정에서 확인을 위해 사용한 코드
__(때론 더 단순한게 나을 떄도 있다)__

파일 업로드를 위해서 multer 모듈을 사용하면서 문제를 경험했기 때문에 예제를 multer모듈로 한다.

### 기능장애 코드
``` javascript

const express = require('express')
const router = express.Router();
const fileService = require('../service/fileService')
const fileUpload = fileService.fileSave.upload()


router.post('/', fileUpload.single('trip-list-file'), async function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
}

```

### 기능장애코드
``` javascript
module.exports = {


    storage : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'upload')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix +'.xlsx')
        }
    }),

    upload : multer({storage : this.storage}),
}
```
위의 module.exports의 대상이 되는 객체가 A라고 하면,
A의 upload의 매치되는 value 중 가장 아래의 this.storage는 A의 storage property를 사용할 수 없다.
__이건 javascript this 문법에 관련된 문제이다.__
객체 내부에서 this를 사용할 때는 그 this를 사용한 property를 가지고 있는 객체를 말한다.
그래서 위 A의 storage가 아니라 upload property의 값은 multer메소드에서 사용된 인자, 즉 {storage : this.storage}가 된다.
그러므로 내가 원하는 대로 모듈이 이용될 수 없었다.


### 동작코드
``` javascript  
const express = require('express')
const router = express.Router();
const fileService = require('../service/fileService')
const fileUpload = fileService.fileSave.upload()

router.post('/', fileUpload.single('trip-list-file'), async function (req, res, next) {

}
// router.js
```

``` javascript
module.exports = {

    fileSave : {
        storage : multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'upload')
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix +'.xlsx')
            }
        }),

        upload : function(){
            let storage = this.storage
            return multer({storage : storage})
        }

    },
}
```


### 제일 간단하고 깔끔하게 쓰는 코드.
``` javascript  
module.exports = {

        upload : multer({storage : multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'upload')
            },
            filename: function (req, file, cb) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix +'.xlsx')
            }
        })
    })

}
// fileService.js
```

```javascript 
const fileService = require('../service/fileService')

router.post('/', fileService.upload.single('trip-list-file'), async function (req, res, next) {

...
}
// router.js

```
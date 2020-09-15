## 이글은 작성 중입니다.

# multer
파일생성
let multer = require('multer');

```
let storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, '../public/image/')
    },
    filename : function(req, file, cb){
        cb(null, '약관_'+file.originalname);
    }
})

let fileFilter = (req, file, cb)=> {
    if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null,false)
    }
}

let upload = multer({
    storage : storage,
    limits : {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter : fileFilter
});
```
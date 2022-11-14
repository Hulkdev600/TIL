/**
 * 
 * 주민등록번호 유효성 검증
 * 1. 검증하려는 대상 유무확인
 * 2. 숫자이외 텍스트 유무확인
 * 3. 13자리 길이 확인
 * 4. 생년월일 확인
 *  - 월은 12월까지 
 *  - 일은 월별 일수까지
 * 5. 20201001 이전 주민등록번호는 주민등록번호체계에 맞게 설정된 번호인지 확인
 *  - 20221001 이후로는 정부 체계개편으로 인해 임의번호로 부여하여 체계가 존재하지 않는다.
 * 
 * **/
function validateSocialNumber(serialNumber){
    if (!serialNumber) {
        return {
            result : false,
            errorCode: '01',
            errorMessage : '텍스트를 확인할 수 없습니다.'
        }
    }


    let serialNumberFiltered = serialNumber.replace(/-/gi,'') // '-' 만 삭제하기

    console.log('PARAM 주민등록번호 :: ', serialNumber);
    console.log('ROW 주민등록번호 :: ', serialNumberFiltered)

    let serialNumberLength = 0;

    for (let i = 0; i < serialNumberFiltered.length; i++) {
        if (isNaN(serialNumberFiltered[i])) {
            return {
                result : false,
                errorCode : '02',
                errorMessage : '숫자가 아닌 텍스트가 있습니다.'
            }
        }
        serialNumberLength++;
    }

    if (serialNumberLength !== 13) {
        return {
            result : false,
            errorCode : '03',
            errorMessage: '13자리의 주민등록번호가 아닙니다.'
        }
    }


    let MM = serialNumberFiltered.substring(2,4)
    let DD = serialNumberFiltered.substring(4,6)

    MM = MM.substring(0,1) === '0' ? Number(MM.substring(1)) : Number(MM)
    DD = DD.substring(0,1) === '0' ? Number(DD.substring(1)) : Number(DD)

    if (MM < 1 || MM > 12) {
        return {
            result : false,
            errorCode: '04',
            errorMessage: '잘못된 생년월일입니다.(월)'
        }
    }

    let maxDate;
    switch (MM) {
        case '01': maxDate = Number('31'); break;
        case '02': maxDate = Number('29'); break;
        case '03': maxDate = Number('31'); break;
        case '04': maxDate = Number('30'); break;
        case '05': maxDate = Number('31'); break;
        case '06': maxDate = Number('30'); break;
        case '07': maxDate = Number('31'); break;
        case '08': maxDate = Number('31'); break;
        case '09': maxDate = Number('30'); break;
        case '10': maxDate = Number('31'); break;
        case '11': maxDate = Number('30'); break;
        case '12': maxDate = Number('31'); break;
    }

    if (maxDate < DD) {
        return {
            result : false,
            errorCode: '05',
            errorCode:'잘못된 생년월일입니다.(일)'
        }
    }

    // 주민등록번호 뒷자리 중 1번째 검사 :: 1900~1999년 태어나면 7번째 자리는 1,2,5,6 / 2000이면 3,4,7,8


    // 2020년 10월 이후 (20221001) 일 경우, 주민등록번호 체계개편으로 임시부여만 부여한다.

    console.log('7번째자리',serialNumberFiltered.substring(6,7))
    let YYYYMMDD;


    let pivot = serialNumberFiltered.substring(6,7)
    if (pivot === '1' || pivot === '2' || pivot === '5' || pivot === '6') {
        YYYYMMDD = '19' + serialNumberFiltered.substring(0, 6);
    }
    if (pivot === '3' || pivot === '4' || pivot === '7' || pivot === '8') {
        YYYYMMDD = '20' + serialNumberFiltered.substring(0, 6);
    }

    console.log('YYYYMMDD :: ',YYYYMMDD)
    if (Number(YYYYMMDD) < 20201001) {
        let checkSum = 0;
        for(var i=0; i<12; i++) checkSum += ((serialNumberFiltered.substr(i,1)>>0)*((i%8)+2));

        let rsnMatch = (11-(checkSum%11))%10 === Number(serialNumberFiltered.substring(12,13))
        let fsnMatch = (13-(checkSum%11))%10 === Number(serialNumberFiltered.substring(12,13));

        console.log(rsnMatch)
        console.log(fsnMatch)
        if((!rsnMatch && !fsnMatch)){
            return {
                result : false,
                errorCode: '06',
                errorMessage: '올바른 주민등록번호 체계가 아닙니다.'
            }
        }
    }

    return { result : true }

}
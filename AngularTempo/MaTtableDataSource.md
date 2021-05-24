# MatTableDataSource

목차
- 검색하기
- 특정 컬럼에 대해서 검색하기






angular에서 테이블에 대한 데이터 중 원하는 정보를 찾고자 할때 어떻게 할 것인지에 대한 설명이다.

angular의 mat-table이 데이터를 받아들일 때 dataSource 속성을 이용한다.

이때 dataSource를 바인딩할 수 가 있는데 여기서는 MatTableDataSource 생성자를 이용한 데이터 생성자를 연결한다.








## 검색하기(filter)



## 특정 컬럼에 대해서 검색하기(filter from specific column)

filterPredicate














```
dataSource = new MatTableDataSource();

ngOnInit():void {

}

loadData(){
    
    this._data.httpPost('searchCompanyForPremium', data)
    .subscribe(resData => {
      console.log(resData.result);
      let getData = resData.result;
      this.dataSource = new MatTableDataSource(getData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator
      this.dataSource.filterPredicate = (data:object, filter:string) => { //필터우세 
        if(filter == data['collectPremiumDay']){
          return true
        }else if(filter === 'all'){
          return true
        }
      }
      this.applyFilter(this.date()) // 오늘 날짜로 filter
    })
  }

applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase()
}

  ```
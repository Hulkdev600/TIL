# Excel exporting 하기

## Commands to install

> npm install file-saver
> npm install xlsx

## Generate a service named excel

> ng g service excel

## Imports in excel service

> import _ as FileSaver from 'file-saver';
> import _ as XLSX from 'xlsx';

```
 public exportAsExcelFile(json:any[], excelFileName: string):void{
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook : XLSX.WorkBook = {Sheets : {'data' : worksheet}, SheetNames : ['data'] };
    const excelBuffer:any = XLSX.write(workbook,{ bookType: 'xlsx', type:'array'});
    this.saveAsExcelFile(excelBuffer,excelFileName)
  }
  private saveAsExcelFile(buffer:any ,fileName :string): void{
    const data : Blob= new Blob([buffer],{type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_'+ new Date().getTime() + EXCEL_EXTENSION)
  }
```

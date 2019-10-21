import { Component } from '@angular/core';
import { GridData } from './data';
import { columnconfig, defaultColDef } from './gridcolumn';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = GridData;
  wrapAll = false;
  gridOptions = {};
  paginationPageSize =20;
  groupDefaultExpanded = -1;
  columns = columnconfig;
  rowGroupPanelShow = 'always';
  gridApi: any;

  constructor() {
    this.gridOptions = {
      context: { componentParent: this }
    }
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 500);
  }

  toggleWrap() {
    this.wrapAll = !this.wrapAll;
    if (this.wrapAll) {
      this.gridApi.setDomLayout("autoHeight");
      (<HTMLDivElement>document.querySelector("#myGrid")).style.height = "";
    } else {
      this.gridApi.setDomLayout("normal");
      (<HTMLDivElement>document.querySelector("#myGrid")).style.height = "850px";
    }
    setTimeout(() => {
      this.data = [...this.data];
    }, 100);
    this.gridApi.resetRowHeights();
  }

  onColumnResized() {
    this.gridApi.resetRowHeights();
  }

  
}

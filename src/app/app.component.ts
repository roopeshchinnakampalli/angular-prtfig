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
  ////// this.gridApi.sizeColumnsToFit();
  }

  onColumnResized() {
    this.gridApi.resetRowHeights();
  }

  
}

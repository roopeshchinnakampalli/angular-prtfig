import { Component } from '@angular/core';
import { GridData } from './data';
import { columnconfig } from './gridcolumn';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = GridData;
  //
  wrapAll = true;
  gridOptions = {};
  columns = columnconfig;

  constructor() {
    this.gridOptions = {
      context: { componentParent: this }
    }
  }

  onGridReady(event: any) {

  }
}

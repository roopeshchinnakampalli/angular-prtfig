import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements ICellRendererAngularComp {
  unit: any;
  wfType: any;
  parents = [];
  parentsForDisplay = {};
  public params: any;
  constructor(
  ) { }

  

  agInit(params: any): void {
    this.params = params;
  }


  refresh(): boolean {
    return false;
  }

}

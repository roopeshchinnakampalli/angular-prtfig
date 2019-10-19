import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
@Component({
  selector: 'app-created-by',
  templateUrl: './created-by.component.html',
  styleUrls: ['./created-by.component.scss']
})
export class CreatedByComponent implements OnInit, ICellRendererAngularComp {
  unit: any;
  public params: any;
  constructor() { }

  ngOnInit() {
    this.unit = 'ABC';
  }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
  updateContact(e) { }

}


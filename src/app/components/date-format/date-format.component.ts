import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss']
})
export class DateFormatComponent implements OnInit, ICellRendererAngularComp {
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

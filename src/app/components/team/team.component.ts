import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, ICellRendererAngularComp {
  unit: any;
  wfType: any;
  constructor() {
  }

  public params: any;
  ngOnInit() {
    this.unit = 'ABC';
    this.wfType = 'Projects';
  }
  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }
}

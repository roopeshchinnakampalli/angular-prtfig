import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';

import { DateFormatComponent } from './components/date-format/date-format.component';
import { TagsComponent } from './components/tags/tags.component';
import { ParentComponent } from './components/parent/parent.component';
import { CreatedByComponent } from './components/created-by/created-by.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  imports:      [ BrowserModule, RouterModule, FormsModule, AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent, DateFormatComponent, TagsComponent, CreatedByComponent, TeamComponent, ParentComponent ],
  entryComponents: [DateFormatComponent, TagsComponent, CreatedByComponent, TeamComponent, ParentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

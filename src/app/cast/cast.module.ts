import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActersComponent } from './acters/acters.component';
import { DataTableModule } from 'angular-6-datatable';


@NgModule({
  declarations: [ActersComponent],
  imports: [
    CommonModule,
    DataTableModule
  ],
  exports: [ActersComponent],
 
})
export class CastModule { }
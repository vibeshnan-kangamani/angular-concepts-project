import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
import { EmptyComponent } from './layouts/empty/empty.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    HorizontalComponent,
    EmptyComponent
  ]
})
export class LayoutModule { }

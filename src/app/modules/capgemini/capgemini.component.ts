import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapgeminiFormComponent } from './capgemini-form/capgemini-form.component';
import { CapgeminiGridComponent } from './capgemini-grid/capgemini-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CapgeminiFormComponent, CapgeminiGridComponent],
  templateUrl: './capgemini.component.html',
})
export class CapgeminiComponent {


}

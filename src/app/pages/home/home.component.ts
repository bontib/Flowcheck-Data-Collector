import { Component } from '@angular/core';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'check-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

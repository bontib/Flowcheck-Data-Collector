import { Component } from '@angular/core';
import { FileuploadComponent } from "../../features/fileupload/fileupload.component";
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'check-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    FileuploadComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

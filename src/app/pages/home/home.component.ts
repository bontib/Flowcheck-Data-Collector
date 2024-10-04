import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FileuploadComponent } from "../../features/fileupload/fileupload.component";
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { Events } from './enum/events.enum';

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
  states = Events;
  srcFoto: WritableSignal<Blob | undefined> = signal(undefined);
  pageState: WritableSignal<Events> = signal(Events.default);

  setSrcFoto(event: Blob) {
    this.srcFoto.update(s => event);
    this.pageState.update(s => Events.foto_edit);
  }
}

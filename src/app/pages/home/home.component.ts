import { Component, inject, Sanitizer, signal, WritableSignal } from '@angular/core';
import { FileuploadComponent } from "../../features/fileupload/fileupload.component";
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { Events } from './enum/events.enum';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'check-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    FileuploadComponent,
    MatButton
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  states = Events;
  srcFoto: WritableSignal<string> = signal('');
  pageState: WritableSignal<Events> = signal(Events.default);
  sanitizer: DomSanitizer = inject(DomSanitizer);

  setSrcFoto(event: Blob) {
    let url = URL.createObjectURL(event);
    this.sanitizer.bypassSecurityTrustUrl(url);
    this.srcFoto.update(s => url);
    this.pageState.update(s => Events.foto_edit);
  }
}

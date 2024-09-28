import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'check-fileupload',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {
  @Input()
  buttonText: string = '';
  @Output()
  outEvent: EventEmitter<any> = new EventEmitter();

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        var srcResult = e.target.result;
        this.outEvent.emit(srcResult);
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
}

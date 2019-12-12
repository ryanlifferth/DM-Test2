import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})

  ///
  /// This approach comes from this site
  /// https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
  ///
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  readyToDrop: boolean = false;
  onChange: Function;
  mlsFile: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.onChange(file);
    this.mlsFile = file;
  }

  constructor(private host: ElementRef<HTMLInputElement>) { }

  ngOnInit() {
    
  }

  writeValue(value: null) {
    // clear file input
    this.host.nativeElement.value = '';
    this.mlsFile = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
  }

  openFileDialog(e) {
    e.preventDefault();

    let element: HTMLElement = document.getElementById('mlsFileInput') as HTMLElement;
    element.click();
  }

  allowDrop(e) {
    //console.log('get to droppin');
    this.readyToDrop = true;
    e.preventDefault();
    e.stopPropagation();
  }

  doneDropping(e) {
    this.readyToDrop = false;
  }

  drop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.readyToDrop = false;
    console.log(e.dataTransfer.files[0].name);

    //e.dataTransfer.files
    const file = e && e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.item(0);
    this.onChange(file);
    //const file = e && e.item(0);
    this.mlsFile = file;
  }

  resetMlsFile(e) {
    e.preventDefault();

    this.host.nativeElement.value = '';
    this.mlsFile = null;
  }

}

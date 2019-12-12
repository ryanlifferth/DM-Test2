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

    //this.newFileForm.controls['fileName'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].files = e.dataTransfer.files;

    //this.handleFiles(e.dataTransfer.files[0]);
    //document.querySelector('.file-upload').files = e.dataTransfer.files;  // this is a hack and it throws a TS error - but it works

  }

}

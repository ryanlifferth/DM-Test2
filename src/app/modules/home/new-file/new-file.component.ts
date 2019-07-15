import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-file',
  templateUrl: './new-file.component.html',
  styleUrls: ['./new-file.component.scss', '../home.component.scss']
})
export class NewFileComponent implements OnInit {
  viewMode = 'newFileTab';  // default tab
  selectedVendorImgSrc: string;
  selectedVendorImgHeight: number;
  selectedVendorImgAlt: string;
  readyToDrop: boolean = false;

  appraisalFormTypes = [{ text: '1004 URAR - UAD', value: '1004' }, { text: '1073', value: '1073' }];



  @Input('newFileForm') newFileForm: FormGroup;
  @Input('addressSearchForm') addressSearchForm: FormGroup;
  @Input('mlsSearchForm') mlsSearchForm: FormGroup;
  @Input('apnSearchForm') apnSearchForm: FormGroup;

  constructor(private router: Router) {

    //this.form = this.formBuilder.group({ mlsExportFileUpload: '' });
  }


  ngOnInit() {
    this.selectedVendorImgSrc = '/assets/images/vendors/alamode.png';
    this.selectedVendorImgHeight = 30;
    this.selectedVendorImgAlt = 'a la mode';

    this.newFileForm = new FormGroup({
      fileName: new FormControl('', Validators.required),
      formType: new FormControl('', Validators.required),
      mlsFileUpload: new FormControl('')
    });

    this.addressSearchForm = new FormGroup({
      address: new FormControl('', Validators.required),
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      zip: new FormControl('')
    });

    this.mlsSearchForm = new FormGroup({
      mlsNumber: new FormControl('', Validators.required)
    });

    this.apnSearchForm = new FormGroup({
      apnNumber: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required)
    });

    this.newFileForm.controls['formType'].setValue('1004');
  }

  validate() {
    if (this.newFileForm.valid === false) {
      //this.newFileForm.controls[''].markAsTouched();
      for (let item in this.newFileForm.controls) {
        //console.log(this.newFileForm.controls[item]);
        this.newFileForm.controls[item].markAsTouched();
      }
    } else {
      // TODO: create the new work file

      this.router.navigate(['/Comparables']);
    }
  }

  searchValidate(formGroup) {
    if (formGroup.valid === false) {
      for (let item in formGroup.controls) {
        //console.log(this.newFileForm.controls[item]);
        formGroup.controls[item].markAsTouched();
      }
    } else {
      // TODO: execute the appropriate search

      alert('Running the search....\r\n(Not really, this is just a placeholder)');
    }
  }

  searchValidateAddress(formName) {
    alert(formName);
  }

  updateVendor(e) {
    if (e.srcElement.localName === 'img') {
      //console.log(e.srcElement.src);
      this.selectedVendorImgSrc = e.srcElement.src;
      this.selectedVendorImgHeight = e.srcElement.height;
      this.selectedVendorImgAlt = e.srcElement.alt;
    } else {
      //console.log(e.srcElement.children[0].src);
      this.selectedVendorImgSrc = e.srcElement.children[0].src;
      this.selectedVendorImgHeight = e.srcElement.children[0].height;
      this.selectedVendorImgAlt = e.srcElement.children[0].alt;
    }
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

    //this.newFileForm.controls['fileName'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].setValue(e.dataTransfer.files[0].name);
    //this.newFileForm.controls['mlsFileUpload'].files = e.dataTransfer.files;


    //document.querySelector('.file-upload').files = e.dataTransfer.files;  // this is a hack and it throws a TS error - but it works

  }
}

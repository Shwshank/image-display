import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-submit-area',
  templateUrl: './submit-area.component.html',
  styleUrls: ['./submit-area.component.scss']
})
export class SubmitAreaComponent implements OnInit {

  imageArray: any =[];
  url: any = "";
  formData = new FormData();
  files: any;
  name: any;

  constructor() { }

  ngOnInit() {
  }

  getVal($event) {

    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.url = event.target.result;
      this.pushToImageArray(this.url);
    }
  }

  pushToImageArray(urlBase64) {

    let i = this.imageArray.length +1;
    this.imageArray.push({id:i, url:urlBase64});
  }

}

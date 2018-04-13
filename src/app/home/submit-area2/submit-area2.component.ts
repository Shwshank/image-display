import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-submit-area2',
  templateUrl: './submit-area2.component.html',
  styleUrls: ['./submit-area2.component.scss']
})
export class SubmitArea2Component implements OnInit {

  imageArray: any =[];
  url: any = "";
  url2: any = "";
  msg: any = "";
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
      let d = new Date();
      let temp = [{id: d.getTime(), msg:"Welcome Image", url:this.url}];
      this.imageArray = temp.concat(this.imageArray);

    }
  }

  getVal2($event) {
    let temp = $event.target.files || $event.srcElement.files;
    let file = temp[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event:any) => {
      this.url2 = event.target.result;
    }
  }

  addImage() {
    $("#addNewImage").modal('show');
  }

  saveImage() {
    this.pushToImageArray(this.url2,this.msg);
    this.url2 = "";
    this.msg = "";
    $("#addNewImage").modal('hide');
  }

  remove(id) {
    let temp ;
    for(let i = 0; i< this.imageArray.length; i++) {
      if(id == this.imageArray[i].id){
        temp = i;
        break;
      }
    }

    if(temp==0){
      this.url = "";
      this.imageArray.splice(0,1);
    } else {
      this.imageArray.splice(temp,1);
    }

  }

  removeMainImage(){
    this.url = "";
    this.imageArray.splice(0,1);
  }

  pushToImageArray(urlBase64, msg) {

    let d = new Date();
    this.imageArray.push({id:d.getTime(), msg:msg, url:urlBase64});
  }

}

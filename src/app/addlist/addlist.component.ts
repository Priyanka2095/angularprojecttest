import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {
  public name: any;
  public arrayname = [];
  public listtype = [];

  constructor(private formBuilder: FormBuilder) { }

  add() {
    var data = {
      name: this.name,
      check: false
    }
    this.listtype.push(data);
    console.log(this.listtype);
    this.name='';
  }
  dellist() {
    var x = this.listtype.length;
    console.log(x);
    for(var i=x-1;i>=0;i--){
      if(this.listtype[i].check==true){
        this.listtype.splice(i,1);
        console.log(x,i);
      }


    }
  }
  ngOnInit() {
  }


}

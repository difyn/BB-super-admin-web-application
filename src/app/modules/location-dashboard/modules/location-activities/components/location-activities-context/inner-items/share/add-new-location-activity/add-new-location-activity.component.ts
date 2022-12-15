import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormControl} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-new-location-activity',
  templateUrl: './add-new-location-activity.component.html',
  styleUrls: ['./add-new-location-activity.component.scss']
})
export class AddNewLocationActivityComponent implements OnInit {

  fixedContentDisplay: boolean = true;
  VariableContentDisplay: boolean = false;
  selectedValue: any;
  itemList: any = [1];

  constructor(public dialogRef: MatDialogRef<AddNewLocationActivityComponent>) { }

  addMoreButton(){
    this.itemList.push(1);
  }
  minimizeButton(){
    if ( 1 < this.itemList.length){
      this.itemList.pop(1);
    }
  }

  ngOnInit(): void {

  }
  foods: Food[] = [
    {value: 'Fixed', viewValue: 'Fixed'},
    {value: 'Variable', viewValue: 'Variable'},
  ];

  selectChange(value: any){
    if (value == 'Fixed'){
      console.log('ss');
      this.fixedContentDisplay = true;
      this.VariableContentDisplay = false;
    }else if (value == 'Variable'){
      this.fixedContentDisplay = false;
      this.VariableContentDisplay = true;
    }
    console.log(value);
  }
  cancelPopupButton(){
    this.dialogRef.close('Pizza!');
  }
}

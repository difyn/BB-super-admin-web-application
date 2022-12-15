import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

export interface PeriodicElement {
  position: number;
  Component: string;
  CheckPoint: string;
  Satisfaction: string;
  NeedsAttention: any;
  Comments: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Component: 'Helium Release Valve', CheckPoint: 'Helium Release Valve is operating seamlessly.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 2, Component: 'Helium Release Valve', CheckPoint: 'Helium Release Valve rope is operational seamlessly.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 3, Component: 'Top Cap', CheckPoint: 'Fabric is properly fixed between the plates.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 4, Component: 'Top Cap', CheckPoint: 'All 48 nuts are tightly fastened.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 5, Component: 'Net Twine Ropes', CheckPoint: 'All ropes are properly tied to eyebolts',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 6, Component: 'Net', CheckPoint: 'Crown Ring Rope is not damaged',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Net', CheckPoint: 'Equator Rope is not broom standing',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Bottom Cap', CheckPoint: 'Fabric is properly fixed between the plates.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Bottom Cap', CheckPoint: 'All 48 nuts are tightly fastened.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Gondola', CheckPoint: 'Nuts & Bolts are properly fastened.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
];

@Component({
  selector: 'app-add-location-inspection-semi-annual-report',
  templateUrl: './add-location-inspection-semi-annual-report.component.html',
  styleUrls: ['./add-location-inspection-semi-annual-report.component.scss']
})
export class AddLocationInspectionSemiAnnualReportComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddLocationInspectionSemiAnnualReportComponent>) { }
  displayedColumns: string[] = ['position', 'Component', 'CheckPoint', 'Satisfaction', 'NeedsAttention','Comments'];
  dataSource = ELEMENT_DATA;
  checked1 = false;
  checked2 = false;

  addMonthlyReport = new FormGroup({
    calender: new FormControl(new Date()),
    monthlyReports: new FormControl('', ),
    inspectedBy: new FormControl(''),
    time: new FormControl(new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()),
    approvedOperate: new FormControl(''),
    remarks: new FormControl(''),
  });
  clearForm(){
    this.addMonthlyReport.reset();
  }
  cancelPopupButton(){
    this.dialogRef.close('Pizza!');
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface PeriodicElement {
  position: number;
  Component: string;
  CheckPoint: string;
  Satisfaction: string;
  NeedsAttention: any;
  Comments: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Component: 'Helium Fill Valves', CheckPoint: 'Helium Valves are properly fixed.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 2, Component: 'Net', CheckPoint: 'Net Ropes are not broom standing.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 3, Component: 'Load Ring', CheckPoint: 'Load Ring Rope is not broom standing',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 4, Component: 'Gondola', CheckPoint: 'FRP parts are intact with no cracks.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 5, Component: 'Gondola', CheckPoint: 'Railings are intact.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 6, Component: 'Battery', CheckPoint: 'Batteries are properly Charging.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Water Pump', CheckPoint: 'Water pump is draining water at required force',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
];

@Component({
  selector: 'app-add-location-inspection-monthly-report',
  templateUrl: './add-location-inspection-monthly-report.component.html',
  styleUrls: ['./add-location-inspection-monthly-report.component.scss']
})
export class AddLocationInspectionMonthlyReportComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddLocationInspectionMonthlyReportComponent>) { }
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

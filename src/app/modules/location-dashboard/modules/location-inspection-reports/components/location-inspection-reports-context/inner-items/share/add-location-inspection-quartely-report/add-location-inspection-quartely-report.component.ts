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
  {position: 1, Component: 'Net', CheckPoint: 'Net Rope is not broom standing',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 2, Component: 'Net', CheckPoint: '24 Suspension Ropes not damaged',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 3, Component: 'Net', CheckPoint: 'Low Mooring ropes are not damaged',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 4, Component: 'Net', CheckPoint: 'Outer Mooring Rope is not broom standing',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 5, Component: 'Foundations', CheckPoint: 'Main Winch foundation is intact with no cracks.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 6, Component: 'Foundations', CheckPoint: 'Pulley foundation is intact with no cracks.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Foundations', CheckPoint: '6 Inner Mooring foundations are intact with no cracks.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Foundations', CheckPoint: '12 Outer Mooring foundations are intact with no cracks.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Anemometer', CheckPoint: 'Anemometer is properly fastened, cups having a free movement and Replace Battery replacement.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Beacon Lights', CheckPoint: 'Beacon Lights is properly fixed and blinking brightly.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Lightening Arrester', CheckPoint: 'Properly Fastened and connected.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
  {position: 7, Component: 'Load Cell Calibration', CheckPoint: 'Calibrate the Load Cell.',Satisfaction : 'Checked',NeedsAttention: '',Comments : ''},
];

@Component({
  selector: 'app-add-location-inspection-quartely-report',
  templateUrl: './add-location-inspection-quartely-report.component.html',
  styleUrls: ['./add-location-inspection-quartely-report.component.scss']
})
export class AddLocationInspectionQuartelyReportComponent implements OnInit {

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddLocationInspectionQuartelyReportComponent>) { }
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

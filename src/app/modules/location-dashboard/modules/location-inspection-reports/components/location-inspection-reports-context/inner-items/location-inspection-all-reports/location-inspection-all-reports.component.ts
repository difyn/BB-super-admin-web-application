import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LocationAllActivitiesPopUpComponent} from "../../../../../location-activities/components/location-activities-context/inner-items/location-all-activities/location-all-activities-pop-up/location-all-activities-pop-up.component";
import {AddNewLocationActivityComponent} from "../../../../../location-activities/components/location-activities-context/inner-items/share/add-new-location-activity/add-new-location-activity.component";
import {AddLocationInspectionMonthlyReportComponent} from "../share/add-location-inspection-monthly-report/add-location-inspection-monthly-report.component";
import {AddLocationInspectionDailyReportComponent} from "../share/add-location-inspection-daily-report/add-location-inspection-daily-report.component";
import {AddLocationInspectionQuartelyReportComponent} from "../share/add-location-inspection-quartely-report/add-location-inspection-quartely-report.component";
import {AddLocationInspectionSemiAnnualReportComponent} from "../share/add-location-inspection-semi-annual-report/add-location-inspection-semi-annual-report.component";

export interface PeriodicElement {
  position: number;
  ReportId: string;
  ReportType: string;
  SubmissionDate: string;
  SubmissionBy: any;
  Status:any;
  Action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, ReportId: '199542154', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 2, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 3, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 4, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 5, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 6, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 7, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 8, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 9, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
  {position: 10, ReportId: '1245254', ReportType: 'Monthly Inspection',SubmissionDate : '2022.10.26',SubmissionBy : 'Enoke Deelaka', Status : 'Active',Action: ['visibility','edit']},
];

@Component({
  selector: 'app-location-inspection-all-reports',
  templateUrl: './location-inspection-all-reports.component.html',
  styleUrls: ['./location-inspection-all-reports.component.scss']
})
export class LocationInspectionAllReportsComponent implements OnInit {
  screenHeight: any;
  screenWidth: any;
  displayedColumns: string[] = ['position', 'ReportId', 'ReportType', 'SubmissionDate', 'SubmissionBy', 'Status', 'Action'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<AddLocationInspectionMonthlyReportComponent, AddLocationInspectionDailyReportComponent>) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  locationDataViewButton(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(LocationAllActivitiesPopUpComponent, {
      width: '250px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }

  addMonthlyReport(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddLocationInspectionMonthlyReportComponent, {
      width: '100%',
      height: '95%',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }

  addDailyReport(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddLocationInspectionDailyReportComponent, {
      width: '100%',
      height: '95%',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  addQuartelyReport(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddLocationInspectionQuartelyReportComponent, {
      width: '100%',
      height: '95%',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  addSemiAnnualReport(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddLocationInspectionSemiAnnualReportComponent, {
      width: '100%',
      height: '95%',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
  ngOnInit(): void {
  }

}

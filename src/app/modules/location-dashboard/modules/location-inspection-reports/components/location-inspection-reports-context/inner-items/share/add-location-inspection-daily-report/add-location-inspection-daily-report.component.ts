import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {AddLocationInspectionMonthlyReportComponent} from "../add-location-inspection-monthly-report/add-location-inspection-monthly-report.component";

export interface PeriodicElement {
  position: number;
  Component: string;
  CheckPoint: string;
  Satisfaction: string;
  NeedsAttention: any;
  Comments: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Component: 'Operator dashboard',
    CheckPoint: 'Check operator dashboard is working properly',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 2,
    Component: 'Operator dashboard',
    CheckPoint: 'Test all operating controls',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 3,
    Component: 'Anemometer',
    CheckPoint: 'Anemometer is functioning and relaying wind speed data to base station.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 4,
    Component: 'Strobing Lights',
    CheckPoint: 'Blinking',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 5,
    Component: 'Internal Lights',
    CheckPoint: 'Are the Lights glowing (Top & Bottom Cap).',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 6,
    Component: 'Emergency Lights',
    CheckPoint: 'Check the emergency lights in the premises are functioning.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 7,
    Component: 'Emergency Stop',
    CheckPoint: 'Test twice on ascent and test twice on descent',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 8,
    Component: 'Envelope Fabric',
    CheckPoint: 'Any Damage to Fabric.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 9,
    Component: 'Fan',
    CheckPoint: 'Fan functioning right.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 10,
    Component: 'Radio System',
    CheckPoint: 'Are Radio systems fully charged and working.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 11,
    Component: 'Pressure Release Valve',
    CheckPoint: 'Movement is seamless.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 12,
    Component: 'Gondola',
    CheckPoint: 'Check gondola for any cut hazards, sharp edges, etc',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 11,
    Component: 'Gondola',
    CheckPoint: 'Door is sliding Properly.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 12,
    Component: 'Gondola',
    CheckPoint: 'Latch is locking seamlessly.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 13,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Pear Master Link – All 12 properly aligned.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 14,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Oval Master Links – 2 Oval Master Links are freely suspended',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 15,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Swivel Hook – Rotating seamlessly.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 16,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Open Swage Socket – Intact with Tether cable attached.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 17,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Shackles – Well connected to the cables and intact.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 18,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Redundancy Base Plate properly fixed around swage socket.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 19,
    Component: 'Hoisting Assembly',
    CheckPoint: 'Redundancy Cable – Not damaged and is seamlessly attached to the Redundancy Base plate.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 20,
    Component: 'Gondola Suspension Cable',
    CheckPoint: 'Gondola Suspension Cables are properly aligned, without tangling and thimbles intact.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 21,
    Component: 'Suspension Slings',
    CheckPoint: 'Gondola Suspension Cables are properly aligned, without tangling and thimbles intact.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 22,
    Component: 'Tethered Cables',
    CheckPoint: 'Cable intact on the winch Drum.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 23,
    Component: 'Tethered Cables',
    CheckPoint: 'Cable is not bent.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 24,
    Component: 'Tethered Cables',
    CheckPoint: 'Cable is not broom stranding.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 25,
    Component: 'Tethered Cables',
    CheckPoint: 'Cable intact with swage socket.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 26,
    Component: 'Tethered Cables',
    CheckPoint: 'Cable is not touching the ground at any point.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 27,
    Component: 'Load Cell',
    CheckPoint: 'Load Cell is working fine and transmitting Data.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 28,
    Component: 'Low Mooring Winches',
    CheckPoint: 'Low mooring winches is functioning independently at the prescribed speed.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 29,
    Component: 'Pulley',
    CheckPoint: 'Pulley is moving Freely.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 30,
    Component: 'Winch',
    CheckPoint: 'Check the functioning of entire winch system.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 31,
    Component: 'Power Pack',
    CheckPoint: 'Power Pack has the required level of Hydraulic fluid in the tank.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 32,
    Component: 'Generator Tank',
    CheckPoint: 'Generator Tank has been checked for the required level of Diesel',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 33,
    Component: 'Overall',
    CheckPoint: 'Operate ride at least one time through complete cycle',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 34,
    Component: 'Other areas',
    CheckPoint: 'Check that all required signage is in place',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 35,
    Component: 'Other areas',
    CheckPoint: 'Check that all fences or barriers are stable and correctly installed and are free of hazards',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 36,
    Component: 'Other areas',
    CheckPoint: 'Check that all ramps and handrails are correctly installed and are free of hazards',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 37,
    Component: 'Other areas',
    CheckPoint: 'Check that all queue gates are working properly, including locks and no hazards (crush or pinch)',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 38,
    Component: 'Other areas',
    CheckPoint: 'Inspect ride’s overall appearance for cleanliness and general external upkeep.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 39,
    Component: 'Other areas',
    CheckPoint: 'Make sure all perimeter lights are working.',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 40,
    Component: 'Other areas',
    CheckPoint: 'Check to ensure fire extinguisher is fully charged',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },
  {
    position: 41,
    Component: 'Other areas',
    CheckPoint: 'Check if there is enough certified operators to control the ride',
    Satisfaction: 'Checked',
    NeedsAttention: '',
    Comments: ''
  },

];

@Component({
  selector: 'app-add-location-inspection-daily-report',
  templateUrl: './add-location-inspection-daily-report.component.html',
  styleUrls: ['./add-location-inspection-daily-report.component.scss']
})
export class AddLocationInspectionDailyReportComponent implements OnInit {
  CurrentTime: any;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddLocationInspectionDailyReportComponent>
  ) {
  }

  displayedColumns: string[] = ['position', 'Component', 'CheckPoint', 'Satisfaction', 'NeedsAttention', 'Comments'];
  dataSource = ELEMENT_DATA;
  checked1 = false;
  checked2 = false;

  addMonthlyReport = new FormGroup({
    calender: new FormControl(new Date()),
    monthlyReports: new FormControl(''),
    inspectedBy: new FormControl(''),
    time: new FormControl(new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()),
    approvedOperate: new FormControl(''),
    remarks: new FormControl(''),
  });

  clearForm() {
    this.addMonthlyReport.reset();
  }

  cancelPopupButton() {
    this.dialogRef.close('Pizza!');
  }

  ngOnInit(): void {
  }

}

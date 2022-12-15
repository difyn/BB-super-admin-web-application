import {Component, HostListener, OnInit} from '@angular/core';
import {DynamicalChangesService} from "../share/services/dynamicalChanges/dynamical-changes.service";
import {AuthService} from "../share/services/auth/auth.service";
import {Router} from "@angular/router";
import {LocationsService} from "../share/services/locations/locations.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  sliderLeftDiv: any = true;
  sliderLeftDivWidth: any;
  middleSectionWidth: any;
  rightSectionWidth: any;
  sliderLeftDivBorderRadius: any = '30px';
  sliderImageLogoChange: any = '../../../assets/images/dashboard/leftSlider/Logo/BalloonLogo.png';
  sliderImageLogoChangeHeight: any = '75px';
  sliderImageProfileAvatarChange: any = '45px';
  sliderImageProfileAvatarPadding: any = '40px 0 40px 0';
  sliderNavAlignment: any = 'center';
  rightSectionHideCheck: any = true;
  dashboardInnerWidthChange: any = '610px';

  screenHeight: any;
  screenWidth: any;
  constructor(private dynamicalChangesService: DynamicalChangesService, private authService: AuthService, private router: Router, private locationService: LocationsService) {
  }

  onLogOut() {
    this.authService.logout();
  }

  storeDynamicData() {
    this.dynamicalChangesService.storeDynamicData(this.dashboardInnerWidthChange);
  }

  openLeftSlider() {
    if (this.router.url === '/dashboard/home-dashboard/context') {
      console.log('dashboard => ' + this.sliderLeftDiv);
      if (this.sliderLeftDiv === true) {
        this.sliderLeftDiv = false;
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '66%';
        this.rightSectionWidth = '28%';
        this.rightSectionHideCheck = true;
        console.log('dashboard After => ' + this.sliderLeftDiv);
        this.dashboardInnerWidthChange = '85%';
        this.dynamicalChangesService.storeDynamicData(this.dashboardInnerWidthChange);

        this.sliderLeftDivBorderRadius = '30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/BalloonLogo.png';
        this.sliderImageLogoChangeHeight = '75px';
        this.sliderImageProfileAvatarChange = '45px';
        this.sliderImageProfileAvatarPadding = '40px 0 40px 0';
        this.sliderNavAlignment = 'center';
      } else if (this.sliderLeftDiv === false) {
        this.sliderLeftDiv = true;
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '50%';
        this.rightSectionWidth = '28%';
        this.rightSectionHideCheck = true;
        this.dashboardInnerWidthChange = '85%';
        this.dynamicalChangesService.storeDynamicData(this.dashboardInnerWidthChange);
        console.log('dashboard After => ' + this.sliderLeftDiv);

        this.sliderLeftDivBorderRadius = '30px 0 0 30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/Balloon-Logo-2.png';
        this.sliderImageLogoChangeHeight = '100px';
        this.sliderImageProfileAvatarChange = '90px';
        this.sliderImageProfileAvatarPadding = '10px 0 10px 0';
        this.sliderNavAlignment = 'flex-start';
      }
    }
    if (this.router.url === '/dashboard/manage-locations/context') {
      console.log('manageLocations => ' + this.sliderLeftDiv);
      if (this.sliderLeftDiv === true) {
        this.sliderLeftDiv = false;
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '94%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;

        this.sliderLeftDivBorderRadius = '30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/BalloonLogo.png';
        this.sliderImageLogoChangeHeight = '75px';
        this.sliderImageProfileAvatarChange = '45px';
        this.sliderImageProfileAvatarPadding = '40px 0 40px 0';
        this.sliderNavAlignment = 'center';
      } else if (this.sliderLeftDiv === false) {
        this.sliderLeftDiv = true;
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '78%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;

        this.sliderLeftDivBorderRadius = '30px 0 0 30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/Balloon-Logo-2.png';
        this.sliderImageLogoChangeHeight = '100px';
        this.sliderImageProfileAvatarChange = '90px';
        this.sliderImageProfileAvatarPadding = '10px 0 10px 0';
        this.sliderNavAlignment = 'flex-start';
      }
    }
    if (this.router.url === '/dashboard/settings/context') {
      console.log('manageSettings => ' + this.sliderLeftDiv);
      if (this.sliderLeftDiv === true) {
        this.sliderLeftDiv = false;
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '94%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;

        this.sliderLeftDivBorderRadius = '30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/BalloonLogo.png';
        this.sliderImageLogoChangeHeight = '75px';
        this.sliderImageProfileAvatarChange = '45px';
        this.sliderImageProfileAvatarPadding = '40px 0 40px 0';
        this.sliderNavAlignment = 'center';
      } else if (this.sliderLeftDiv === false) {
        this.sliderLeftDiv = true;
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '78%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;

        this.sliderLeftDivBorderRadius = '30px 0 0 30px';
        this.sliderImageLogoChange = '../../../assets/images/dashboard/leftSlider/Logo/Balloon-Logo-2.png';
        this.sliderImageLogoChangeHeight = '100px';
        this.sliderImageProfileAvatarChange = '90px';
        this.sliderImageProfileAvatarPadding = '10px 0 10px 0';
        this.sliderNavAlignment = 'flex-start';
      }
    }
  }

  Navigate(navigation: string) {
    if (navigation == 'ToDashboard') {
      this.router.navigate(['dashboard/home-dashboard']);
      if (this.sliderLeftDiv === false) {
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '66%';
        this.rightSectionWidth = '28%';
        this.rightSectionHideCheck = true;
        this.dashboardInnerWidthChange = '85%';
        this.dynamicalChangesService.storeDynamicData(this.dashboardInnerWidthChange);
      } else {
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '50%';
        this.rightSectionWidth = '28%';
        this.rightSectionHideCheck = true;
        this.dashboardInnerWidthChange = '85%';
        this.dynamicalChangesService.storeDynamicData(this.dashboardInnerWidthChange);
      }

    } else if (navigation == 'ManageLocations') {
      this.router.navigate(['dashboard/manage-locations/context']);
      if (this.sliderLeftDiv === false) {
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '94%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;
      } else {
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '78%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;
      }
    } else if (navigation == 'Manage-settings') {
      this.router.navigate(['dashboard/settings/context']);
      if (this.sliderLeftDiv === false) {
        this.sliderLeftDivWidth = '6%';
        this.middleSectionWidth = '94%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;
      } else {
        this.sliderLeftDivWidth = '22%';
        this.middleSectionWidth = '78%';
        this.rightSectionWidth = '0%';
        this.rightSectionHideCheck = false;
      }
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

  }
  ngOnInit(): void {
    this.onResize();
    console.log(this.router.url);
    this.storeDynamicData();
    this.openLeftSlider();
  }


}

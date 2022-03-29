import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  warningStatus = 'Server error';
  displayStatus = false;
  submission = [];

  onToggleStatus () {
    this.displayStatus = !this.displayStatus;
    this.submission.push(this.submission.length + 1);
    //this.submission.push(new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}

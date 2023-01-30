// import { Component } from '@angular/core';
// import { Location } from '@angular/common';
// import { BnNgIdleService } from 'bn-ng-idle';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'angular-electron';

//   isInEmployee: boolean;


//   constructor(private _location: Location, private bnIdle: BnNgIdleService, private router: Router) { }
//   ngOnInit() {
    
//   }
//   backClicked() {
//     this._location.back();
//   }
// }


// // import { Component } from '@angular/core';
// // import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.scss']
// // })
// // export class AppComponent {

// //   constructor(private bnIdle: BnNgIdleService) {

// //   }

// //   // initiate it in your component OnInit
// //   ngOnInit(): void {
// //     this.bnIdle.startWatching(5).subscribe((res: any) => {
// //       if (res) {
// //         console.log('session expired');
// //       }
// //     });
// //   }
// // }
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular-electron';

  show = false;
  fullScreen = true;
  template = ``
  

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date ;
  @ViewChild('content') content: any;
  constructor(private idle: Idle, private keepalive: Keepalive,private _location: Location,private router: Router) {

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.reset();
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.reset();
  }
  displayStyle = "none";

  openPopup() {
      this.displayStyle = "block";
  }
  closePopup() {
      this.displayStyle = "none";
      this.router.navigateByUrl('/homenav');
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
    //this.openPopup();
  }
  onClickDefault(){
    this.show = true;
    this.fullScreen = true;
    this.template = ``
    setTimeout(() => {
        this.show = false
    }, 2000);
  }
  backClicked() {
      this._location.back();
  }
}

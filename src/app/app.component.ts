import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver, MediaChange} from "@angular/flex-layout";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'patient-EHR';
  mediaSub: Subscription = new Subscription;
  constructor(public mediaObserver:MediaObserver) {}
  ngOnDestroy() {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
    })
  }
  ngOnInit() {
    this.mediaSub.unsubscribe();
  }
}

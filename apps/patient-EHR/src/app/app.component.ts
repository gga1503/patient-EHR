import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaObserver, MediaChange} from "@angular/flex-layout";
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'patient-EHR';
  mediaSub: Subscription = new Subscription;

  constructor(
    public mediaObserver: MediaObserver,
    private router: Router
  ) {
  }

  ngOnDestroy() {
    const observable = {
      next: (change: any) => {
        console.log(change.mqAlias)
      }
    }

    this.mediaSub = this.mediaObserver.asObservable() // New Way asObservable()
      .subscribe(observable)
  }

  async ngOnInit() {
    this.mediaSub.unsubscribe();
    if (!localStorage.getItem('patient')) {
      await this.router.navigate(['/login'])
    }
  }
}

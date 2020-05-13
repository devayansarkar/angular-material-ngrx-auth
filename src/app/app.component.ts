import { Component } from '@angular/core';
import ILoggedInUser from './models/auth/ILoggedInUser';
import { Store } from '@ngrx/store';
import { appBootEvent } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-ngrx-auth';
  
  constructor(private store: Store<{ userAuth: ILoggedInUser }>) {
    this.store.dispatch(appBootEvent())
  }
}

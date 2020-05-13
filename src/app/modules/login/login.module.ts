import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey } from 'src/app/store/auth/auth.state';
import { authReducer } from 'src/app/store/auth/auth.reducers';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(authenticationFeatureKey, authReducer),
  ]
})
export class LoginModule { }

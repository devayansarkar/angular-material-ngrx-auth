import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppClientHttpInterceptor } from './http.interceptor';
import { AppErrorInterceptor } from './error.interceptor';
import { AuthGuardService } from './auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AppClientHttpInterceptor, AppErrorInterceptor, AuthGuardService]
})
export class CoreModule { }

import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(event => {
      if (confirm("Do want to update the app ?")) {
        window.location.reload();
      }
    });
  }
}

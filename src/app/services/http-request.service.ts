import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private REQ = new Subject();
  public REQ$ = this.REQ.asObservable();
  constructor() {

  }
  sendReq(v: any) {
    this.REQ.next(v);
  }
}

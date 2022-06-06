import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from "@angular/common/http";
import { HttpRequestService } from "../../services/http-request.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-try-http-handle',
  templateUrl: './try-http-handle.component.html',
  styleUrls: ['./try-http-handle.component.scss']
})
export class TryHttpHandleComponent implements OnInit, OnDestroy {
  res: any;
  req: any;
  clearSub = new Subject();
  constructor(private http: HttpClient, private httpRequestService: HttpRequestService) {
    this.httpRequestService.REQ$.pipe<any>(takeUntil(this.clearSub.asObservable())).subscribe(
      req => this.req = req
    )
  }

  ngOnInit(): void {
  }
  correctRequest() {
    this.http.get('/assets/mock/mockData.json').subscribe(res => {
      this.res = res;
    })
  }
  errorRequest() {
    this.http.get('/error/request').subscribe({
      error: err => {
        this.res = err;
      }
    })
  }
  ngOnDestroy() {
    this.clearSub.next(true);
    this.clearSub.complete();
  }
}

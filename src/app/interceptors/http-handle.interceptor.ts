import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Router } from "@angular/router";
import { HttpRequestService } from "../services/http-request.service";

@Injectable()
export class HttpHandleInterceptor implements HttpInterceptor {

  constructor(private router: Router, private httpRequestService: HttpRequestService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request, 'first')
    const token = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0YmEwYjUwNjRlYzNhNWI5MWQ5NWRkNWUwMGJhMWU5ZDdlOGFhZTYiLCJ0eXAiOiJKV1QifQ.eyJhcHBsaWFuY2VfaWQiOiIiLCJhdWQiOiJBRFhfUExBVEZPUk0iLCJleHAiOjE2NTQ0NjEyNTksImdyb3VwcyI6WyI3NjUwYWY0Ni02MDM4LTQxMGItYmE0NS1hMDFmNzA4ODQxMTQiLCI5Y2QyYzRjYi05OTI4LTQwZmMtOGIyYy00NGYzYzM4MzQ0YTIiXSwiaWF0IjoxNjU0NDU3NjU5LCJpc19zeXN0ZW1fYWRtaW4iOnRydWUsImlzcyI6IkFEWC1hdXRoZW50aWNhdGlvbiIsImp0aSI6IjRhOTEyZWFiLTYzN2EtNDA0OS04OWIwLTJkOWI5ODYzZmQ2NCIsInBlcm1pc3Npb25zIjpbInAwIiwicDEiLCJwMiIsInAzIiwicDQiLCJwNSIsInA2IiwicDciLCJwOCIsInA5IiwicDEwIiwicDExIiwicDEyIiwicDEzIiwicDE0IiwicDE1IiwicDE2IiwicDE3IiwicDE4IiwicDE5IiwicDIwIiwicDIxIiwicDIyIiwicDIzIiwicDI0IiwicDI1IiwicDI2IiwicDI3IiwicDI4IiwicDI5IiwicDMwIiwicDMxIiwicDMyIiwicDMzIiwicDM0IiwicDM1IiwicDM2IiwicDM3IiwicDM4IiwicDM5IiwicDQwIiwicDQxIiwicDQyIiwicDQzIiwicDQ0IiwicDQ1IiwicDQ2IiwicDQ3IiwicDQ4IiwicDQ5IiwicDUwIl0sInByZWVtcHRpb25fbGV2ZWwiOjQsInN1YiI6IjllYWE0ZDdmLWNjZDQtNDgxNi1hNmJmLWEwNTFjMTZmYzE5MSIsInVzZXJfaWQiOiJkMzFhNTlkODEyZGJiOGNmYWU2MDJiNjMzZmE0NWQ4YTY2ZmVkM2UwIiwidXNlcm5hbWUiOiJhZG1pbiJ9.wQV43UAJ5tc32pd_5eNLjLsbOViHXBrvQxdenCcJaxTzzgRNB9zPIM5GL6oCgr2IVBS-iAP-dB8CVPMiqdqPozkF_pzuer43D1wEOIzay4Q9mm1xgUujk7-9LMZAxOe_ZOdvNqIlgH5N1ZivhBvD_kJh4gCJJHqWtX4opGHcCM3Aw_NSIP1DjEsCiVK7c7mZi4Wm3Ynnrap9wcy6g4ZozR62TTNECb-y5soXk6pwBhdAUuIsokplnVFBf2ahLK7DVVp1QRU6wwWIHyfYxBsuUdttgHOjqo0H-9UwN8xVuBPiiOB7D-VsfQkv0VE7cdvhykFJqYjIzEJTYvP_ko21MA`
    const req = request.clone({
      setHeaders: { Authorization:  token}}
    )
    this.httpRequestService.sendReq(req);
    return next.handle(req).pipe(tap(
      res => {
        if (res instanceof HttpResponse) {
          alert(res.status);
        }
      }
    ),catchError(error => {
      alert(error.status);
      this.router.navigate(['/not-found']);
      throw error;
    }) );
  }
}

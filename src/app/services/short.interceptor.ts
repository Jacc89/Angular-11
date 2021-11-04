import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = '5cbd9acee1f654f6a69c37679768cb8190b2bb8e';

    request = request.clone({ setHeaders: {Authorization: 'Bearer '+ TOKEN} })
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error);
    }));
  }
}

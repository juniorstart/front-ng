import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private cookies: CookieService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const updatedRequest = request.clone({
      headers: request.headers.set("Authorization", 'Bearer ' + this.cookies.get('jwt').split('"')[1])
    });
    return next.handle(updatedRequest);
  }
}

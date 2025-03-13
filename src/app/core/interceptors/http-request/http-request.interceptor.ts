import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  // set de las cabeceras -> token, uuid

  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer `
    }
  });


  console.log("request: ", request);

  return next(request).pipe(
    tap((event: HttpEvent<unknown>) => {
      console.log("event: ", event);
      // montar un snackbar de exito
    }),
    catchError((error: HttpErrorResponse) => {
      console.log("error: ", error);
      // montar un snackbar de error
      return throwError(() => error);
    })
  );
};

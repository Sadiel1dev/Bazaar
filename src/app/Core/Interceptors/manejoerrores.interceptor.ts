import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

export function manejoerroresInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn){
    const route=inject(Router);
    const messageService=inject(MessageService);
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
        if (event.type === 4) {
            if (event.body.httpStatusCode == 201) {
                
            }
        }
    }),
    catchError((Error:HttpErrorResponse)=>{
                  if(Error){
                    if (Error.status===0) {
                        route.navigateByUrl('/error/0');
                        console.log("funciona");
                    }
                    if (Error.status===401) {
                        if(Error.error.statusCode==401)
                            messageService.add({ severity: 'error', summary: 'Error al Entrar', detail: 'Contraseña incorrecta' })
                    }
                      if (Error.status===404) {
                        if(Error.error.statusCode==404)
                            messageService.add({ severity: 'error', summary: 'Error al Entrar', detail: 'El usuario no existe' })
                      }
                      if (Error.status===400) {
                        
                            if(Error.error.message=='Email ya existe')
                                messageService.add({ severity: 'error', summary: 'Error al registrarse', detail: 'Email en uso' })
                            if(Error.error.message!='Email ya existe')
                                messageService.add({ severity: 'error', summary: 'Error', detail: 'Contraseña: debe contener al menos 8 caracteres, 1 mayuscula, 1 numero y 1 simbolo' })
                      }
                      if (Error.status===500) {
                          route.navigateByUrl('/error/500');
                          console.log("funciona");
                      }
                  }
                  return throwError(()=>Error);
              }));
};

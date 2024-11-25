import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  //add title and role

  // title - make the header

  // role -- > make in the param
  var newheaders = new HttpHeaders({
    Companytitle : "Growton"
  })

  var roleParams  = new HttpParams().set("RoleID" , "Admin");

  var cloneRequest = req.clone({headers : newheaders , params : roleParams });

  return next(cloneRequest);
};

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Constantes } from '../../environments/environment';
import { Constants } from '../core/constants';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AdministrationService {

  constructor(private http: HttpClient) { }

  requestDepartamentoList(): Observable<HttpResponse<any>> {
    let url = Constantes.baseUri + Constants.departamentosApi;
    return this.http.get<HttpResponse<any>>(url, {observe: 'response'});
  }

  requestUpdateDepartamento(id: number, object: any): Observable<any> {
    return this.http.put<any>( Constantes.baseUri + Constants.departamentosApi + '/' + id, JSON.stringify(object));
  }

  requestSaveDepartamento(object: any): Observable<any> {
    return this.http.post<any>( Constantes.baseUri + Constants.departamentosApi, JSON.stringify(object));
  }

  requestDeleteDepartamentoStatus(id: number): Observable<any> {
    return this.http.put<any>( Constantes.baseUri + Constants.departamentosApi + '/' + id + '/eliminar', JSON.stringify(null));
  }

  requestUpdateMunicipio(id: number, object: any): Observable<any> {
    return this.http.post<any>( Constantes.baseUri + Constants.municipiosApi + '/' + id, JSON.stringify(object));
  }

  requestSaveMunicipio(object: any): Observable<any> {
    return this.http.post<any>( Constantes.baseUri + Constants.municipiosApi, JSON.stringify(object));
  }

  requestEliminarMunicipioStatus(id: number): Observable<any> {
    return this.http.put<any>( Constantes.baseUri + Constants.municipiosApi + '/' + id + '/eliminar', JSON.stringify(null));
  }

  requestCentroList(id): Observable<any> {
    let url = Constantes.baseUri + Constants.municipiosApi + '/' + id + '/' + 'centros-de-salud';
    return this.http.post<any>(url, {observe: 'response'});
  }

  requestUpdateCentro(id: number, object: any): Observable<any> {
    return this.http.post<any>( Constantes.baseUri + Constants.centrosApi + '/' + id, JSON.stringify(object));
  }

  requestSaveCentro(object: any): Observable<any> {
    return this.http.post<any>( Constantes.baseUri + Constants.centrosApi, JSON.stringify(object));
  }

  requestEliminarCentroStatus(id: number): Observable<any> {
    return this.http.put<any>( Constantes.baseUri + Constants.centrosApi + '/' + id + '/eliminar', JSON.stringify(null));
  }


}

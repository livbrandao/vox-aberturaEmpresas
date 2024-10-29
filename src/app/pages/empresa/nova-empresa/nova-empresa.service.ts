import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empresa } from "../empresa.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NovaEmpresaService {
  baseUrl = "http://localhost:3000/empresas";

  entidadeRegistro = "http://localhost:3000/entidade-registro";

  constructor(private _http: HttpClient) {}

  create(company: Empresa): Observable<Empresa> {
    return this._http.post<Empresa>(this.baseUrl, company);
  }

  getDataEntidadeRegistro(): Observable<any[]> {
    return this._http.get<any[]>(this.entidadeRegistro);
  }
}

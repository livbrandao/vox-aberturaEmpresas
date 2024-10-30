import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empresa } from "./empresa.model";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  private baseUrl = "http://localhost:3000/empresas";

  entidadeRegistro = "http://localhost:3000/entidade-registro";

  constructor(private _http: HttpClient) {}

  create(company: Empresa): Observable<Empresa> {
    return this._http.post<Empresa>(this.baseUrl, company);
  }

  getDataEntidadeRegistro(): Observable<any[]> {
    return this._http.get<any[]>(this.entidadeRegistro);
  }

  getCompanyById(id: string): Observable<Empresa> {
    return this._http.get<Empresa>(`${this.baseUrl}/${id}`);
  }

  updateCompany(company: Empresa): Observable<Empresa> {
    return this._http.put<Empresa>(`${this.baseUrl}/${company.id}`, company);
  }

  getEmpresasData(): Observable<Empresa[]> {
    return this._http.get<Empresa[]>(this.baseUrl);
  }
}

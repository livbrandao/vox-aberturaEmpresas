import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Empresa } from "../empresa.model";

@Injectable({
  providedIn: "root",
})
export class EmpresaListaService {
  private baseUrl = "http://localhost:3000/empresas";

  constructor(private _http: HttpClient) {}

  getEmpresasData(): Observable<Empresa[]> {
    return this._http.get<Empresa[]>(this.baseUrl);
  }
}

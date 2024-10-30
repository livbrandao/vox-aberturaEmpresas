import { Component } from "@angular/core";
import { Estado } from "./estado.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-state-select",
  templateUrl: "./state-select.component.html",
})
export class StateSelectComponent {
  // Array de estados
  states: Estado[] = [];
  selectedState: string = "";

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates(): void {
    this._http
      .get<Estado[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      )
      .subscribe(
        (data) => {
          this.states = data;
        },
        (error) => {
          console.error("Erro ao carregar os estados:", error);
        }
      );
  }

  logSelectedState() {
    console.log("Estado selecionado:", this.selectedState);
  }
}

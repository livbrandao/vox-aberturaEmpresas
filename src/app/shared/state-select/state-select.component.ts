import { Component } from "@angular/core";

@Component({
  selector: "app-state-select",
  templateUrl: "./state-select.component.html",
})
export class StateSelectComponent {
  // Array de estados
  states = [
    { code: "1", name: "Acre" },
    { code: "2", name: "Alagoas" },
    { code: "3", name: "Amapá" },
    { code: "4", name: "Amazonas" },
    { code: "5", name: "Bahia" },
    { code: "6", name: "Ceará" },
    { code: "7", name: "Distrito Federal" },
    { code: "8", name: "Espírito Santo" },
    { code: "9", name: "Goiás" },
    { code: "10", name: "Maranhão" },
    { code: "11", name: "Mato Grosso" },
    { code: "12", name: "Mato Grosso do Sul" },
    { code: "13", name: "Minas Gerais" },
    { code: "14", name: "Pará" },
    { code: "15", name: "Paraíba" },
    { code: "16", name: "Paraná" },
    { code: "17", name: "Pernambuco" },
    { code: "18", name: "Piauí" },
    { code: "19", name: "Rio de Janeiro" },
    { code: "20", name: "Rio Grande do Norte" },
    { code: "21", name: "Rio Grande do Sul" },
    { code: "22", name: "Rondônia" },
    { code: "23", name: "Roraima" },
    { code: "24", name: "Santa Catarina" },
    { code: "25", name: "São Paulo" },
    { code: "26", name: "Sergipe" },
    { code: "27", name: "Tocantins" },
  ];

  selectedState: string = "";

  logSelectedState() {
    console.log("Estado selecionado:", this.selectedState);
  }
}

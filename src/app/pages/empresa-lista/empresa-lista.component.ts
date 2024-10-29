import { Component } from "@angular/core";

@Component({
  selector: "app-empresa-lista",
  templateUrl: "./empresa-lista.component.html",
  styleUrls: ["./empresa-lista.component.css"],
})
export class EmpresaListaComponent {
  selectedDetail: { title: string; subtitle: string } | null = null;

  onViewDetails(detail: { title: string; subtitle: string }) {
    this.selectedDetail = detail;
  }
}

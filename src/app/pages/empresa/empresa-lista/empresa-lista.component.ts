import { Component } from "@angular/core";
import { Empresa } from "../empresa.model";
import { EmpresaListaService } from "./empresa-lista.service";

@Component({
  selector: "app-empresa-lista",
  templateUrl: "./empresa-lista.component.html",
  styleUrls: ["./empresa-lista.component.css"],
})
export class EmpresaListaComponent {
  empresaData: Empresa[] = [];
  selectedDetail: { title: string; subtitle: string } | null = null;

  constructor(private mockDataService: EmpresaListaService) {}

  ngOnInit(): void {
    this.mockDataService.getEmpresasData().subscribe((data) => {
      this.empresaData = data;
    });
  }

  onViewDetails(detail: { title: string; subtitle: string }) {
    this.selectedDetail = detail;
  }
}

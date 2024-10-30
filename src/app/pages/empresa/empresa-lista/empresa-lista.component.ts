import { Component } from "@angular/core";
import { Empresa } from "../empresa.model";
import { EmpresaService } from "../empresa.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-empresa-lista",
  templateUrl: "./empresa-lista.component.html",
  styleUrls: ["./empresa-lista.component.css"],
})
export class EmpresaListaComponent {
  empresaData: Empresa[] = [];

  selectedDetail: Empresa | null = null;

  constructor(
    private mockDataService: EmpresaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(): void {
    this.mockDataService.getEmpresasData().subscribe(
      (data) => {
        this.empresaData = data;
      },
      (error) => {
        this.showToast(
          `Erro ao carregar dados das empresas: ${
            error.message || "Erro desconhecido"
          }`
        );
      }
    );
  }

  onViewDetails(id?: string): void {
    if (!id) {
      this.showToast("ID não fornecido");
      return;
    }

    this.mockDataService.getCompanyById(id).subscribe(
      (data) => {
        this.selectedDetail = data;
      },
      (error) => {
        this.showToast(
          `Erro ao carregar detalhes da empresa. ${
            error.message || "Erro desconhecido"
          }`
        );
      }
    );
  }

  showToast(message: string): void {
    this.snackBar.open(message, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}

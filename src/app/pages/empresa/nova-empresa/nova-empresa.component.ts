import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Empresa } from "../empresa.model";
import { MatDialog } from "@angular/material/dialog";
import { ModalSucessComponent } from "src/app/shared/modal-sucess/modal-sucess.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmpresaService } from "../empresa.service";

@Component({
  selector: "app-nova-empresa",
  templateUrl: "./nova-empresa.component.html",
  styleUrls: ["./nova-empresa.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class NovaEmpresaComponent implements OnInit {
  company: Empresa = {
    solicitante: {
      ds_responsavel: "",
      nu_cpf: "",
      date_nascimento: "",
    },
    empresa: {
      ds_nome_fantasia: "",
      co_entidade_registro: null,
      co_natureza_juridica: null,
      endereco: {
        co_cep: null,
        ds_logradouro: "",
        co_numero: "",
        ds_complemento: null,
        ds_bairro: "",
        ds_municipio: "",
        co_uf: "",
      },
    },
  };

  optionsEntidades: any[] = [];

  submitted: boolean = false;

  constructor(
    private _novaEmpresaService: EmpresaService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadOptionsEntidades();
  }

  createCompany(): void {
    this.submitted = true;

    try {
      this._novaEmpresaService.create(this.company).subscribe(() => {
        this._dialog.open(ModalSucessComponent);
        this.submitted = false;
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro ao solicitar a criação da empresa. Tente novamente!";
      this.showToast(errorMessage);
    }
  }

  showToast(message: string): void {
    this._snackBar.open(message, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  loadOptionsEntidades() {
    this._novaEmpresaService.getDataEntidadeRegistro().subscribe((data) => {
      this.optionsEntidades = data;
    });
  }
}

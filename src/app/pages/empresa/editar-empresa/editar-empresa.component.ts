import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Empresa } from "../empresa.model";
import { EmpresaService } from "../empresa.service";
import { ModalSucessComponent } from "src/app/shared/modal-sucess/modal-sucess.component";

@Component({
  selector: "app-editar-empresa",
  templateUrl: "./editar-empresa.component.html",
  styleUrls: ["./editar-empresa.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class EditarEmpresaComponent implements OnInit {
  companyId: string | null = null;

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

  constructor(
    private _editarEmpresaService: EmpresaService,
    private _dialog: MatDialog,
    private _route: Router,
    private _routeActive: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadOptionsEntidades();

    this.companyId = this._routeActive.snapshot.paramMap.get("id");
    if (this.companyId) {
      this.loadCompanyData(this.companyId);
    } else {
      console.error("ID da empresa não encontrado na rota.");
    }
  }

  saveCompany(): void {
    this._editarEmpresaService.updateCompany(this.company).subscribe(() => {
      this._route.navigate(["/"]);
      this._dialog.open(ModalSucessComponent);
    });
  }

  cancel(): void {
    this._route.navigate(["/"]);
  }

  loadOptionsEntidades() {
    this._editarEmpresaService.getDataEntidadeRegistro().subscribe((data) => {
      this.optionsEntidades = data;
    });
  }

  loadCompanyData(id: string): void {
    this._editarEmpresaService.getCompanyById(id).subscribe(
      (data: Empresa) => {
        this.company = data;
      },
      (error) => {
        console.error("Erro ao carregar dados da empresa:", error);
      }
    );
  }
}

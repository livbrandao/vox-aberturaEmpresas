import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NovaEmpresaService } from "./nova-empresa.service";
import { Empresa } from "../empresa.model";
import { MatDialog } from "@angular/material/dialog";
import { ModalSucessComponent } from "src/app/shared/modal-sucess/modal-sucess.component";

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

  selectedValue: string = "";
  values = ["valor1", "valor2", "valor3"];

  optionsEntidades: any[] = [];

  constructor(
    private _novaEmpresaService: NovaEmpresaService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadOptionsEntidades();
  }

  createCompany(): void {
    this._novaEmpresaService.create(this.company).subscribe(() => {
      this._dialog.open(ModalSucessComponent);
    });
  }

  logSelectedValue(): void {
    console.log(this.selectedValue);
  }

  loadOptionsEntidades() {
    this._novaEmpresaService.getDataEntidadeRegistro().subscribe((data) => {
      this.optionsEntidades = data;
    });
  }
}

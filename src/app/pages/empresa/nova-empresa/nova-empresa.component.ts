import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Empresa } from "../empresa.model";
import { MatDialog } from "@angular/material/dialog";
import { ModalSucessComponent } from "src/app/shared/modal-sucess/modal-sucess.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EmpresaService } from "../empresa.service";

@Component({
  selector: "app-nova-empresa",
  templateUrl: "./nova-empresa.component.html",
  styleUrls: ["./nova-empresa.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class NovaEmpresaComponent implements OnInit {
  companyForm: FormGroup;

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
    private _formsValidator: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.companyForm = this._formsValidator.group({
      ds_responsavel: ["", Validators.required],
      nu_cpf: ["", [Validators.required, Validators.pattern(/^\d{11}$/)]],
      date_nascimento: ["", Validators.required],
      ds_nome_fantasia: ["", Validators.required],
      co_entidade_registro: [null, Validators.required],
      co_natureza_juridica: [null, Validators.required],
      co_cep: [null, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      ds_logradouro: ["", Validators.required],
      co_numero: ["", Validators.required],
      ds_complemento: [null],
      ds_bairro: ["", Validators.required],
      ds_municipio: ["", Validators.required],
      co_uf: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadOptionsEntidades();
  }

  createCompany(): void {
    this.submitted = true;

    try {
      if (this.companyForm.invalid) {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      this._novaEmpresaService.create(this.companyForm.value).subscribe(() => {
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

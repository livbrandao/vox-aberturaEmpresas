import { Component } from "@angular/core";
import { Empresa } from "../empresa.model";
import { EmpresaService } from "../empresa.service";

@Component({
  selector: "app-empresa-lista",
  templateUrl: "./empresa-lista.component.html",
  styleUrls: ["./empresa-lista.component.css"],
})
export class EmpresaListaComponent {
  empresaData: Empresa[] = [];

  selectedDetail: {
    id: string;
    ds_nome_fantasia: string;
    ds_responsavel: string;
    nu_cpf: string;
    ds_logradouro: string;
    ds_bairro: string;
    ds_municipio: string;
    co_cep: number;
    ds_complemento: string | null;
    co_uf: string;
    co_numero: string;
  } | null = null;

  constructor(private mockDataService: EmpresaService) {}

  ngOnInit(): void {
    this.mockDataService.getEmpresasData().subscribe((data) => {
      this.empresaData = data;
    });
  }

  onViewDetails(detail: Empresa) {
    this.selectedDetail = {
      id: detail.id || "",
      ds_nome_fantasia: detail.empresa.ds_nome_fantasia,
      ds_responsavel: detail.solicitante.ds_responsavel,
      nu_cpf: detail.solicitante.nu_cpf,
      ds_logradouro: detail.empresa.endereco.ds_logradouro,
      ds_bairro: detail.empresa.endereco.ds_bairro,
      ds_municipio: detail.empresa.endereco.ds_municipio,
      co_cep: Number(detail.empresa.endereco.co_cep),
      ds_complemento: detail.empresa.endereco.ds_complemento,
      co_uf: detail.empresa.endereco.co_uf,
      co_numero: detail.empresa.endereco.co_numero,
    };
  }
}

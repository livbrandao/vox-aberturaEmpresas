import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() ds_nome_fantasia: string = "";
  @Input() ds_responsavel: string = "";
  @Input() nu_cpf: string = "";
  @Input() ds_logradouro: string = "";
  @Input() ds_bairro: string = "";
  @Input() ds_municipio: string = "";
  @Input() co_cep: string = "";
  @Input() ds_complemento: string = "";
  @Input() co_uf: string = "";
  @Input() co_numero: string = "";

  @Output() viewDetails = new EventEmitter<{
    ds_nome_fantasia: string;
    ds_responsavel: string;
    nu_cpf: string;
    ds_logradouro: string;
    ds_bairro: string;
    ds_municipio: string;
    co_cep: string;
    ds_complemento: string;
    co_uf: string;
    co_numero: string;
  }>();

  showDetails(): void {
    this.viewDetails.emit({
      ds_nome_fantasia: this.ds_nome_fantasia,
      ds_responsavel: this.ds_responsavel,
      nu_cpf: this.nu_cpf,
      ds_logradouro: this.ds_logradouro,
      ds_bairro: this.ds_bairro,
      ds_municipio: this.ds_municipio,
      co_cep: this.co_cep,
      ds_complemento: this.ds_complemento,
      co_uf: this.co_uf,
      co_numero: this.co_numero,
    });
  }
}

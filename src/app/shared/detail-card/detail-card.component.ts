import { Component, Input } from "@angular/core";

@Component({
  selector: "app-detail-card",
  templateUrl: "./detail-card.component.html",
  styleUrls: ["./detail-card.component.css"],
})
export class DetailCardComponent {
  @Input() id: string = "";
  @Input() ds_nome_fantasia: string = "";
  @Input() ds_responsavel: string = "";
  @Input() nu_cpf: string = "";
  @Input() ds_logradouro: string = "";
  @Input() ds_bairro: string = "";
  @Input() ds_municipio: string = "";
  @Input() co_cep: number = 0;
  @Input() ds_complemento: string = "";
  @Input() co_uf: string = "";
  @Input() co_numero: string = "";
}

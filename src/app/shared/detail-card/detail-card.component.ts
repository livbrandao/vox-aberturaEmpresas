import { Component, Input } from "@angular/core";

@Component({
  selector: "app-detail-card",
  templateUrl: "./detail-card.component.html",
  styleUrls: ["./detail-card.component.css"],
})
export class DetailCardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";

  @Output() viewDetails = new EventEmitter<{
    title: string;
    subtitle: string;
  }>();

  showDetails(): void {
    this.viewDetails.emit({
      title: this.title,
      subtitle: this.subtitle,
    });
  }
}

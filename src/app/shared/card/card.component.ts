import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DetalhesComponent } from "src/app/modals/detalhes/detalhes.component";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(DetalhesComponent, {
      width: "400px",
      height: "300px",
      data: {
        title: this.title,
      },
      disableClose: true,
      panelClass: "custom-modalbox",
    });
  }
}

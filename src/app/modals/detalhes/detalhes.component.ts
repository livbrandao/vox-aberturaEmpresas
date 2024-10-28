import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-detalhes",
  templateUrl: "./detalhes.component.html",
  styleUrls: ["./detalhes.component.css"],
})
export class DetalhesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; content: string }
  ) {}
}

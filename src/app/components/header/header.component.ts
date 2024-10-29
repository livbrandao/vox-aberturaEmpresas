import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  title: string = "Pedidos de Abertura da empresa";

  exibirBotao: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes("/new")) {
          this.title = "Solicitar Abertura da empresa";
        }
      }

      this.exibirBotao = !this.router.url.includes("/new");
    });
  }

  navigateToNewCompanies(): void {
    this.router.navigate(["/new"]);
  }
}

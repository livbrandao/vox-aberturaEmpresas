import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaListaComponent } from "./pages/empresa-lista/empresa-lista.component";
import { NovaEmpresaComponent } from "./pages/nova-empresa/nova-empresa.component";

const routes: Routes = [
  {
    path: "",
    component: EmpresaListaComponent,
  },
  {
    path: "new",
    component: NovaEmpresaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

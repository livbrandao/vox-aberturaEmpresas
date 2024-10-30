import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaListaComponent } from "./pages/empresa/empresa-lista/empresa-lista.component";
import { NovaEmpresaComponent } from "./pages/empresa/nova-empresa/nova-empresa.component";
import { EditarEmpresaComponent } from "./pages/empresa/editar-empresa/editar-empresa.component";

const routes: Routes = [
  {
    path: "",
    component: EmpresaListaComponent,
  },
  {
    path: "new",
    component: NovaEmpresaComponent,
  },
  {
    path: "edit/:id",
    component: EditarEmpresaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

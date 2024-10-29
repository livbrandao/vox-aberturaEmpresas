import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./components/nav/nav.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { EmpresaListaComponent } from "./pages/empresa-lista/empresa-lista.component";
import { CardComponent } from "./shared/card/card.component";
import { DetailCardComponent } from "./shared/detail-card/detail-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { NovaEmpresaComponent } from './pages/nova-empresa/nova-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmpresaListaComponent,
    CardComponent,
    DetailCardComponent,
    HeaderComponent,
    NovaEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

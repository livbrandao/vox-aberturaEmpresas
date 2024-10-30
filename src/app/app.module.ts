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
import { EmpresaListaComponent } from "./pages/empresa/empresa-lista/empresa-lista.component";
import { CardComponent } from "./shared/card/card.component";
import { DetailCardComponent } from "./shared/detail-card/detail-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { NovaEmpresaComponent } from "./pages/empresa/nova-empresa/nova-empresa.component";
import { HttpClientModule } from "@angular/common/http";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StateSelectComponent } from "./shared/state-select/state-select.component";
import { ModalSucessComponent } from "./shared/modal-sucess/modal-sucess.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { EditarEmpresaComponent } from "./pages/empresa/editar-empresa/editar-empresa.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { CommonModule, DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmpresaListaComponent,
    CardComponent,
    DetailCardComponent,
    HeaderComponent,
    NovaEmpresaComponent,
    StateSelectComponent,
    ModalSucessComponent,
    EditarEmpresaComponent,
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
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

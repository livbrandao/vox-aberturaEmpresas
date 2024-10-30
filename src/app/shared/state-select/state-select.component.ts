import { Component, forwardRef } from "@angular/core";
import { Estado } from "./estado.model";
import { HttpClient } from "@angular/common/http";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-state-select",
  templateUrl: "./state-select.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StateSelectComponent),
      multi: true,
    },
  ],
})
export class StateSelectComponent implements ControlValueAccessor {
  // Array de estados
  states: Estado[] = [];
  selectedState: string = "";

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates(): void {
    this._http
      .get<Estado[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
      )
      .subscribe(
        (data) => {
          this.states = data;
        },
        (error) => {
          console.error("Erro ao carregar os estados:", error);
        }
      );
  }

  writeValue(value: string): void {
    this.selectedState = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelectChange() {
    this.onChange(this.selectedState);
    this.onTouched();
  }
}

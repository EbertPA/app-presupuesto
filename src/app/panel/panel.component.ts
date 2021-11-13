import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  validaForm: FormGroup = this.fb.group({
  numeroPaginas: ['', [Validators.required, Validators.min(0)] ],
  numeroIdiomas: ['', [Validators.required, Validators.min(0)]],
  })

  numPages: number = 0;
  numLanguages:number = 0;

  @Output() pageSelected = new EventEmitter<number>();
  @Output() languageSelected = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  // enviar(values:HTMLFormElement) {
  enviar(pages?: number, tipo?: string) {
    if(tipo != undefined){
        if(tipo === 'pages'){
        this.pageSelected.emit(pages);
        this.languageSelected.emit(this.numLanguages);
      }else{
        this.pageSelected.emit(this.numPages);
        this.languageSelected.emit(pages);
      }
  }
  }

  incremento(inc: number, event: Event){
    let evento: HTMLButtonElement | any = event.target;
    if(evento.id === "incPage"){
      this.numPages++;
    }
    if(evento.id === "incLang"){
      this.numLanguages++;
    }
  }

  decremento(dec: number, event: Event){
    let evento: HTMLButtonElement | any = event.target;
    if(evento.id === "decPage" && this.numPages>0){
      this.numPages--;
    }
    if(evento.id === "decLang" && this.numLanguages>0){
      this.numLanguages--;
    }
  }

  campoEsValido(campo: string) {
    return this.validaForm.controls[campo].errors
            && this.validaForm.controls[campo].touched;
  }

  pages(num: any, npages: string){
    this.numPages = num;
    this.enviar(this.numPages, npages);
  }
  languages(num: any, nlang: string){
    this.numLanguages = num;
    this.enviar(this.numLanguages, nlang);
  }

}

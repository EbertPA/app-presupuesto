import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  // @ViewChild('incPage') sumapage?: ElementRef;
  // @ViewChild('decPage') restapage?: ElementRef;
  // @ViewChild('incLang') sumalang?: ElementRef;
  // @ViewChild('decLang') restalang?: ElementRef;

  // validaForm: FormGroup = new FormGroup({
  //   'numeroPaginas': new FormControl(0),
  //   'numeroIdiomas': new FormControl(0)
  // });


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
  ) {
    // this.validaForm = this.fb.group({
    //   numeroPaginas: ['', [Validators.compose([Validators.min(1), Validators.required])]],
    //   numeroIdiomas: ['', [Validators.compose([Validators.min(1), Validators.required])]]
    // })
   }

  ngOnInit(): void {
  }

  enviar(values:HTMLFormElement) {
    // console.log("values: "+ values.numeroPaginas);
    this.pageSelected.emit(values.numeroPaginas);
    this.languageSelected.emit(values.numeroIdiomas);
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

}

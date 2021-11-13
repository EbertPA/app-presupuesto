import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  numPage: number = 0;
  numValid: boolean = false;
  error: string = '';

  @Output() onNewNumber: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  suma(){
    this.numPage++;
    this.comprueba(this.numPage);
  }
  resta(){
    if(this.numPage>0){this.numPage--;}
    this.comprueba(this.numPage);
  }

  sendNumero(){
    this.onNewNumber.emit(this.numPage);
  }


  comprueba(pagina: number){
    this.error = '';
    this.numValid = false;
    // console.log("pagina: "+pagina);
    if(pagina.toString() === ""){
      this.numValid = !this.numValid;
      this.error = "Es un campo obligatorio";
    }else

    if(isNaN(pagina)){
      this.numValid = !this.numValid;
      this.error = "Ingresar un valor numérico";
    }else
    if(pagina<0){
      this.numValid = !this.numValid;
      this.error = "Ingresar un valor entero positivo";
    }
    else{
      this.sendNumero();
    }
  }

}

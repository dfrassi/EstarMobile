import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { DipendenteService } from '../../providers/dipendente-service';
import { InfoPage } from '../info/info';


/**
 *
 * Il decorator (@) del componente deve dichiarare:
 *
 * 1) un selettore, ovvero un tag da usare nell'html per riferirsi a quell'elemento
 * 2) un template url, ovvero una pagina html che utilizza quel selettore
 *
 */


@Component({
  selector: 'page-rubrica',
  templateUrl: 'rubrica.html'
})



// Ogni file TypeScritp deve esportare la classe a cui si riferisce e che potrà essere invocata dall'esterno

export class RubricaPage {


  // immediatamente dopo, prima della dichiarazione di ogni altro metodo, vanno dichiarate le variabili globali

  dipendentes: Array<any>;
  provaSwitchCase: string; // variabile utilizzata per testare la direttiva switch


  // dopo di che si specifica ciò che deve essere fatto in fase di inizializzazione della classe, tramite il costruttore

  constructor(public navCtrl: NavController, private dipendenteService: DipendenteService ) {



    this.provaSwitchCase = "pluto"; // variabile inizializzata nel costruttore del components in modo che abbia visibilità nella vista html
    this.initializeDipendente();

	}

	// da qui in poi vengono definiti i metodi specifici della classe che possono essere richiamati dal file .html relativo, a seconda della loro visibilità



  // inizializza l'array dei dipendenti

  initializeDipendente() {
    this.dipendentes = [];

  }

  /**
   *
   * @param event
   *
   * metodo recupara la lista dei dipendenti, chiamando il servizio REST, sulla base del filtro di ricerca passato
   *
   */

  searchForDipendente(event: any) {

    this.initializeDipendente();

    let val = event.target.value;


    // if the value is an empty string don't filter the items

    if (val && val.trim() != '' && (new String(val).length >3)) {

      this.dipendenteService.searchDipendentes(event.target.value).subscribe(
        data => {
          this.dipendentes = data.rubrica;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Dipendente Search Complete')
      );
    }

  }

  /**
   *
   * @param event
   * @param dipendente
   *
   * chiama la pagina di dettaglio del dipendente specifico
   *
   */

  selectDipendente(event, dipendente) {
    console.log(dipendente);
    this.navCtrl.push(InfoPage, {
      dipendente: dipendente
    });
  }
}

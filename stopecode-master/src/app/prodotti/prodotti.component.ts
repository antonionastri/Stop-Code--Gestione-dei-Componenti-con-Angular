import { Component } from '@angular/core';
import { PRODOTTI } from "../data/prodotti"
import { descrizione } from '../models/descr-prodotti';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
Prodotti: descrizione[] = PRODOTTI
}

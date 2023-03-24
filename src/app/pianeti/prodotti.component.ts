import { Component } from '@angular/core';
import { IPianeta } from '../lista-pianeti';
import { PIANETI } from './lista-pianeti.component';

@Component({
  selector: 'app-pianeti',
  templateUrl: './lista-pianeti.component.html',
  styleUrls: ['./pianeti.component.css'],
})
export class PianetiComponent {
  pianeti = PIANETI;

  fromPianeta: string = '';
  onPianetaClick(valore: string): void {
    this.fromPianeta = valore;
  }
}

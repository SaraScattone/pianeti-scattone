import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'figlio',
  templateUrl: 'figlio.component.html',
})
export class FiglioComponent {
  @Input() img: string;
  @Input() nome: string;
  @Input() des: string;

  @Output() notifica: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.notifica.emit(`${this.img}`);
    this.notifica.emit(`${this.nome}`);
    this.notifica.emit(`${this.des}`);
  }
}

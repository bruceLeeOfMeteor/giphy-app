import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Giphy } from '../../interfaces/giphy';

@Component({
  selector: 'app-giphys-list',
  templateUrl: './giphys-list.component.html',
  styleUrls: ['./giphys-list.component.scss']
})
export class GiphysListComponent {

  @Input() items: Array<Giphy>;
  @Output() scrolled = new EventEmitter();

  scroll() {
    this.scrolled.emit();
  }
}

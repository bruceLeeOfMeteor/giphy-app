import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-giphys-list',
  templateUrl: './giphys-list.component.html',
  styleUrls: ['./giphys-list.component.scss']
})
export class GiphysListComponent {

  @Input() items: any;
  @Output() scrolled = new EventEmitter();

  scroll() {
    this.scrolled.emit();
  }
}

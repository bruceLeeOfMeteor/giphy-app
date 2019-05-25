import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-card',
  templateUrl: './giphy-card.component.html',
  styleUrls: ['./giphy-card.component.scss']
})
export class GiphyCardComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}

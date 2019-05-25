import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {
  testList: Observable<any>;

  constructor(public giphy: GiphyService) {
    this.testList = this.giphy.getImages('burgers', 0, 10);
  }

  ngOnInit() {
  }

}

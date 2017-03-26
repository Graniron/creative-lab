import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit {
  private arts = [1,2,3,4,5,6];
  private chips = ['art','color','fiber','nice','yoo','awesome'];
  
  constructor() { }

  ngOnInit() {
  }

}

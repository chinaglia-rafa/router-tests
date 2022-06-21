import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  color = '';

  constructor() { }

  ngOnInit(): void {
  }

  change(e: any) {
    console.log('event', e);
    this.color = e;
  }

}

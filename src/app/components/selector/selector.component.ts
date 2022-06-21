import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  @Output('valueChange') valueEvent = new EventEmitter<string>();
  @Input('value') value = '';
  @Input('label') label = 'Selecione uma cor';

  options = [
    'cddc39',
    '2196f3',
    'e91e63',
    'ffeb3b',
    '607d8b',
    '9c27b0',
    '009688',
    'ff9800',
    '795548',
    'd84315',
    'ba68c8',
    '00acc1'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  change(e: any) {
    console.log('e.value', e.value);
    this.valueEvent.emit(e.value);
    this.value = e.value;
  }

}

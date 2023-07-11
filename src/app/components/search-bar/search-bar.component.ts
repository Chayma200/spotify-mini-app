import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  @Input() searchVal = '';

  constructor() {}

  ngOnInit(): void {}

  emitFilterValue(search: string): void {
    this.searchVal = search;
    this.searchValue.emit(this.searchVal);
  }
}

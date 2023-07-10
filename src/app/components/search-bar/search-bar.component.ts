import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();
  searchStr: string = '';

  constructor() {}

  ngOnInit(): void {}

  emitFilterValue(search: string): void {
    this.searchStr = search;
    this.searchValue.emit(this.searchStr);
  }
}

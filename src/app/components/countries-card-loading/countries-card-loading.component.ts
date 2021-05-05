import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries-card-loading',
  templateUrl: './countries-card-loading.component.html',
  styleUrls: ['./countries-card-loading.component.scss'],
})
export class CountriesCardLoadingComponent implements OnInit {
  constructor() {}

  loadingLength(n: number): Array<number> {
    return Array(n);
  }

  ngOnInit() {}
}

import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { CountryModel } from '../countries/countries.models';
import { ComparisonSelectors } from './store/comparison.selectors';

@Component({
  selector: 'app-comparison',
  templateUrl: 'comparison.page.html',
  styleUrls: ['comparison.page.scss'],
})
export class СomparisonPage {
  @ViewChild(IonSlides) ionSlides: IonSlides;

  @Select(ComparisonSelectors.selectComparisons()) comparisons$: Observable<CountryModel[]>;

  slidesOptions = {
    speed: 1500,
    pagination: false,
  };
  constructor() {}

  async swiperOnInit() {
    await this.ionSlides.slideNext();
    setTimeout(async () => {
      await this.ionSlides.slidePrev();
    }, 1500);
  }
}

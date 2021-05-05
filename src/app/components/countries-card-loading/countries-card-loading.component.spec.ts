import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountriesCardLoadingComponent } from './countries-card-loading.component';

describe('CountriesCardLoadingComponent', () => {
  let component: CountriesCardLoadingComponent;
  let fixture: ComponentFixture<CountriesCardLoadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountriesCardLoadingComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(CountriesCardLoadingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

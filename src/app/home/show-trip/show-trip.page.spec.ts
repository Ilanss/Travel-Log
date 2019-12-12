import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTripPage } from './show-trip.page';

describe('ShowTripPage', () => {
  let component: ShowTripPage;
  let fixture: ComponentFixture<ShowTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

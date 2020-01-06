import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalMapTripPage } from './modal-map-trip.page';

describe('ModalMapTripPage', () => {
  let component: ModalMapTripPage;
  let fixture: ComponentFixture<ModalMapTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMapTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalMapTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

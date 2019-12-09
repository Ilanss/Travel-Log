import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesMapPage } from './places-map.page';

describe('PlacesMapPage', () => {
  let component: PlacesMapPage;
  let fixture: ComponentFixture<PlacesMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

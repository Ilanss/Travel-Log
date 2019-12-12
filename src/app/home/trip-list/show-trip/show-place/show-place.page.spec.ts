import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowPlacePage } from './show-place.page';

describe('ShowPlacePage', () => {
  let component: ShowPlacePage;
  let fixture: ComponentFixture<ShowPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

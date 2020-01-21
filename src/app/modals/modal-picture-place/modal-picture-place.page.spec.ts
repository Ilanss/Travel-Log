import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPicturePlace } from './modal-picture-place.page';

describe('ModalPicturePlace', () => {
  let component: ModalPicturePlace;
  let fixture: ComponentFixture<ModalPicturePlace>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPicturePlace ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPicturePlace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCategoriePage } from './detail-categorie.page';

describe('DetailCategoriePage', () => {
  let component: DetailCategoriePage;
  let fixture: ComponentFixture<DetailCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCategoriePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

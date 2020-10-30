import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsMenuPage } from './settings-menu.page';

describe('SettingsMenuPage', () => {
  let component: SettingsMenuPage;
  let fixture: ComponentFixture<SettingsMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

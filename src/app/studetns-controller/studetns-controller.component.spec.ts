import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetnsControllerComponent } from './studetns-controller.component';

describe('StudetnsControllerComponent', () => {
  let component: StudetnsControllerComponent;
  let fixture: ComponentFixture<StudetnsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudetnsControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudetnsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

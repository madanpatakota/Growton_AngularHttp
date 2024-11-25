import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProWalksComponent } from './pro-walks.component';

describe('ProWalksComponent', () => {
  let component: ProWalksComponent;
  let fixture: ComponentFixture<ProWalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProWalksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProWalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

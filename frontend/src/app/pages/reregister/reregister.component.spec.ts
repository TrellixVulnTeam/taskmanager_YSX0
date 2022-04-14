import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReregisterComponent } from './reregister.component';

describe('ReregisterComponent', () => {
  let component: ReregisterComponent;
  let fixture: ComponentFixture<ReregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

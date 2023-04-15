import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngComponentComponent } from './ang-component.component';

describe('AngComponentComponent', () => {
  let component: AngComponentComponent;
  let fixture: ComponentFixture<AngComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

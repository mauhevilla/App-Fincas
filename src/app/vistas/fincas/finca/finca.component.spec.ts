import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaComponent } from './finca.component';

describe('FincaComponent', () => {
  let component: FincaComponent;
  let fixture: ComponentFixture<FincaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FincaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

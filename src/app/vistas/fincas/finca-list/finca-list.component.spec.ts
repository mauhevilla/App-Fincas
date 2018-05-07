import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FincaListComponent } from './finca-list.component';

describe('FincaListComponent', () => {
  let component: FincaListComponent;
  let fixture: ComponentFixture<FincaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FincaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartelListaComponent } from './cuartel-lista.component';

describe('CuartelListaComponent', () => {
  let component: CuartelListaComponent;
  let fixture: ComponentFixture<CuartelListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartelListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

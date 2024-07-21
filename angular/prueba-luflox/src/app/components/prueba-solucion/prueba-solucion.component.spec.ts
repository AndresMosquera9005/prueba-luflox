import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSolucionComponent } from './prueba-solucion.component';

describe('PruebaSolucionComponent', () => {
  let component: PruebaSolucionComponent;
  let fixture: ComponentFixture<PruebaSolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaSolucionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaSolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

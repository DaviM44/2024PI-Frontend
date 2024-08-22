import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoHorariosComponent } from './visualizacao-horarios.component';

describe('VisualizacaoHorariosComponent', () => {
  let component: VisualizacaoHorariosComponent;
  let fixture: ComponentFixture<VisualizacaoHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizacaoHorariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacaoHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

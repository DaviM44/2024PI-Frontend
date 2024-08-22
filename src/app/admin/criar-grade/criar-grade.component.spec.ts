import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarGradeComponent } from './criar-grade.component';

describe('CriarGradeComponent', () => {
  let component: CriarGradeComponent;
  let fixture: ComponentFixture<CriarGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

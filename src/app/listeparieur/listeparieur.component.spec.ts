import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparieurComponent } from './listeparieur.component';

describe('ListeparieurComponent', () => {
  let component: ListeparieurComponent;
  let fixture: ComponentFixture<ListeparieurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeparieurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeparieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

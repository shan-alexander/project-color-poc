import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyTableComponent } from './assembly-table.component';

describe('AssemblyTableComponent', () => {
  let component: AssemblyTableComponent;
  let fixture: ComponentFixture<AssemblyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

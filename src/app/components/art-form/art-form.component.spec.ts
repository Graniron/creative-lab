import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFormComponent } from './art-form.component';

describe('ArtFormComponent', () => {
  let component: ArtFormComponent;
  let fixture: ComponentFixture<ArtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

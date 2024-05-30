import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReactiveFormComponent } from './project-reactive-form.component';

describe('ProjectReactiveFormComponent', () => {
  let component: ProjectReactiveFormComponent;
  let fixture: ComponentFixture<ProjectReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

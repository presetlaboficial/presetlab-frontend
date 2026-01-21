import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetsSectionComponent } from './presets-section.component';

describe('PresetsSectionComponent', () => {
  let component: PresetsSectionComponent;
  let fixture: ComponentFixture<PresetsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresetsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresetsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

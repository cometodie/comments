import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNewIconComponent } from './profile-new-icon.component';

describe('ProfileNewIconComponent', () => {
  let component: ProfileNewIconComponent;
  let fixture: ComponentFixture<ProfileNewIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNewIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

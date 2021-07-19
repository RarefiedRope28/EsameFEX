import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAttractionComponent } from './details-attraction.component';

describe('DetailsAttractionComponent', () => {
  let component: DetailsAttractionComponent;
  let fixture: ComponentFixture<DetailsAttractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAttractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

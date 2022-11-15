import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgcaretakerComponent } from './pgcaretaker.component';

describe('PgcaretakerComponent', () => {
  let component: PgcaretakerComponent;
  let fixture: ComponentFixture<PgcaretakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgcaretakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgcaretakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

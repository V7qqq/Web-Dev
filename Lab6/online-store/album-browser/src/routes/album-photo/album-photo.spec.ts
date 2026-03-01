import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhoto } from './album-photo';

describe('AlbumPhoto', () => {
  let component: AlbumPhoto;
  let fixture: ComponentFixture<AlbumPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

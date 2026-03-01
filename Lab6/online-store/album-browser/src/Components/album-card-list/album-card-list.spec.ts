import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumCardList } from './album-card-list';

describe('AlbumCardList', () => {
  let component: AlbumCardList;
  let fixture: ComponentFixture<AlbumCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumCardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

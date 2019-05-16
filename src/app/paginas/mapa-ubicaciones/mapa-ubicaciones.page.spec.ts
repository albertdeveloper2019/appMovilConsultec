import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaUbicacionesPage } from './mapa-ubicaciones.page';

describe('MapaUbicacionesPage', () => {
  let component: MapaUbicacionesPage;
  let fixture: ComponentFixture<MapaUbicacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaUbicacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaUbicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

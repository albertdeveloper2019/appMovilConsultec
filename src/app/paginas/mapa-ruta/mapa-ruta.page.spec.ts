import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaRutaPage } from './mapa-ruta.page';

describe('MapaRutaPage', () => {
  let component: MapaRutaPage;
  let fixture: ComponentFixture<MapaRutaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaRutaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';

// variable para manejar el mapa
declare var mapboxgl: any;
// variables globales
var latitud: any;
var longitud: any;
var latActual: any;
var longActual: any;

@Component({
  selector: 'app-mapa-ruta',
  templateUrl: './mapa-ruta.page.html',
  styleUrls: ['./mapa-ruta.page.scss'],
})
export class MapaRutaPage implements OnInit {

  coordenadas = null;
  constructor(private geolocation: Geolocation, private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {

    // se reciben las coordenadas enviadas como argumentos por URL
    this.coordenadas = this.activeRoute.snapshot.paramMap.get('id');

    var res = this.coordenadas.split("*");
    longitud = Number(res[0]);
    latitud = Number(res[1]);

  }// llave del ngOnInit()

   // se carga el mapa despues de inicializado el componente y cargado librerias de estilo.
   ngAfterViewInit() {
         
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0MTI4NyIsImEiOiJjanZuMXludjUxajMzNDBrM3hwOHp2bWMzIn0.aU9XHcLme8jDEBttOB5qww';
        const map = new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/streets-v11',
        // Longitud y latitud  -- Mi direccion Fontibon
        center: [-74.1482906, 4.6683431],   
        zoom: 14                
        });

        // obtener localizacion actual del dispositivo
        this.geolocation.getCurrentPosition().then((resp) => {
            longActual = resp.coords.longitude;
            latActual = resp.coords.latitude;
        }).catch((error) => {
          console.log('Error getting location', error);
        });

        // Añade controles de zoom y rotación al mapa.
        map.addControl(new mapboxgl.NavigationControl());   
    
        // cargar y renderizar el mapa 
        map.on('load', function() {
        map.resize();

        // agregar linea entre del recorrido
        map.addLayer({
                  "id": "route",
                  "type": "line",
                  "source": {
                  "type": "geojson",
                  "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                  "type": "LineString",
                                  "coordinates": [
                                                    [longActual, latActual],
                                                    [longitud, latitud]
                                                  ]
                              }
                            }
                    },
                    "layout": {
                          "line-join": "round",
                          "line-cap": "round"
                     },
                    "paint": {
                           "line-color": "#1010fe",
                            "line-width": 6
                      }
           });
        // agregar punto en destino
        map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                "type": "geojson",
                "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                    "type": "Feature",
                                    "geometry": {
                                          "type": "Point",
                                          "coordinates": [longitud, latitud]
                                    },
                                      "properties": {
                                          "title": "ATM",
                                          "icon": "harbor"
                                      }
                             },]
                      }
                      },
                      "layout": {
                              "icon-image": "{icon}-15",
                              "text-field": "{title}",
                              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                              "text-offset": [0, 0.6],
                              "text-anchor": "top"
                      }
          });

        // agregar marcador posicion actual
        var marker = new mapboxgl.Marker()
                .setLngLat([longActual, latActual])
                .addTo(map);
        });   
      
   }// llave de la funcion ngAfterViewInit

}// llave de la funcion principal

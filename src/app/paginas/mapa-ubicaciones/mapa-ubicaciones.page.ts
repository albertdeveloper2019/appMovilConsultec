import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

// variable para manejar el mapa
declare var mapboxgl: any;

// variables para manejar coordenadas de punto destino
 var latitudDestino = "";
 var longitudDestino = "";
 
@Component({
  selector: 'app-mapa-ubicaciones',
  templateUrl: './mapa-ubicaciones.page.html',
  styleUrls: ['./mapa-ubicaciones.page.scss'],
})
export class MapaUbicacionesPage implements OnInit, AfterViewInit {
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // se carga el mapa despues de inicializado el componente y cargado librerias de estilo.
  ngAfterViewInit() {
       
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0MTI4NyIsImEiOiJjanZuMXludjUxajMzNDBrM3hwOHp2bWMzIn0.aU9XHcLme8jDEBttOB5qww';
        const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        // Longitud y latitud  -- Mi direccion Fontibon
        center: [-74.1482906, 4.6683431],   
        zoom: 13                
        });

        // Añade controles de zoom y rotación al mapa.
        map.addControl(new mapboxgl.NavigationControl());   

        // agregar marcador 1
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
              console.log('marker 1');
              longitudDestino = "-74.1486835";
              latitudDestino = "4.6676608";
              document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
          .setLngLat([-74.1486835, 4.6676608])
          .addTo(map);

        // agregar marcador 2
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
              console.log('marker 2');
              longitudDestino = "-74.1525943";
              latitudDestino = "4.6766452";
              document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
          .setLngLat([-74.1525943, 4.6766452])
          .addTo(map);

         // agregar marcador 3
         var el = document.createElement('div');
              el.className = 'marker';
              el.style.height = '44px';
              el.style.width = '40px';
              el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
              el.addEventListener('click', function(e){
                console.log('marker 3');
                longitudDestino = "-74.1362835";
                latitudDestino = "4.6770592";
                document.getElementById("submit").click();    
         });
         var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.1362835, 4.6770592])
            .addTo(map);

        // agregar marcador 4
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
                console.log('marker 4');
                longitudDestino = "-74.1494463";
                latitudDestino = "4.6748043";
                document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.1494463, 4.6748043])
            .addTo(map);

        // agregar marcador 5
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
                console.log('marker 5');
                longitudDestino = "-74.15328";
                latitudDestino = "4.67217";
                document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.15328, 4.67217])
            .addTo(map);

        // agregar marcador 7
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
                console.log('marker 7');
                longitudDestino = "-74.1350174";
                latitudDestino = "4.6542125";
                document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.1350174, 4.6542125])
            .addTo(map);

        // agregar marcador 8
        var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
                console.log('marker 8');
                longitudDestino = "-74.1447318";
                latitudDestino = "4.6733268";
                document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.1447318, 4.6733268])
            .addTo(map);

       // agregar marcador 9
       var el = document.createElement('div');
            el.className = 'marker';
            el.style.height = '44px';
            el.style.width = '40px';
            el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/heroesapp-c05f5.appspot.com/o/atm002.bmp?alt=media&token=c1606173-24d3-45f7-b942-d3e79e909b75')";
            el.addEventListener('click', function(e){
                console.log('marker 9');
                longitudDestino = "-74.1471122";
                latitudDestino = "4.6548007";
                document.getElementById("submit").click();    
        });
        var marker = new mapboxgl.Marker(el)
            .setLngLat([-74.1471122, 4.6548007])
            .addTo(map);

        // cargar y renderizar el mapa 
        map.on('load', function() {
        map.resize();
        
        });   

  }// llave del ngAfterViewInit()

   obtenerGeolocalizacion(){
      var coords = longitudDestino +'*'+ latitudDestino;
      this.router.navigate(['mapa-ruta',coords]);
   }


}// llave de la clase principal

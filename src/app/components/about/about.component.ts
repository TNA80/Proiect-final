import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  display: any;

  zoom = 17;

  center: google.maps.LatLngLiteral = {
    lat: 46.5344253,
    lng: 24.5825249,
  };

  navigateToHome() {
    this.route.navigate(['Home'], { relativeTo: this.activatedRoute });
    // this.route.navigateByUrl('Home');
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}

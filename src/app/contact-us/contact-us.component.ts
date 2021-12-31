import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  zoom = 12;
  center = new google.maps.LatLng(41.06738025299813, 28.865712605644127);
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    maxZoom: 15,
    minZoom: 8
  };
  position = {lat: 41.06738025299813, lng: 28.865712605644127};
  title = "Hello World!";

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {

    var templateParams = {
      name: 'James',
      notes: 'Check this out!'
    };
    emailjs.send('service_96jc47c','template_4isvq6q', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(err) {
        console.log('FAILED...', err);
      });
  }

}

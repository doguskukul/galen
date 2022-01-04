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
    e.preventDefault();
    emailjs.sendForm('service_96jc47c', 'template_4isvq6q', e.target as HTMLFormElement, 'user_fQK20kTuKwvt9qFmQph0e')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}

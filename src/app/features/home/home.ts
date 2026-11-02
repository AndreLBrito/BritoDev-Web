import { Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { ServicesSection } from './sections/services-section/services-section';

@Component({
  imports: [HeroSection, ServicesSection],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}

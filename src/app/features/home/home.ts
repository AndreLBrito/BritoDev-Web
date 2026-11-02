import { Component } from '@angular/core';
import { AboutSection } from './sections/about-section/about-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { HeroSection } from './sections/hero-section/hero-section';
import { ProcessSection } from './sections/process-section/process-section';
import { ProjectsSection } from './sections/projects-section/projects-section';
import { ServicesSection } from './sections/services-section/services-section';

@Component({
  imports: [
    AboutSection,
    ContactSection,
    HeroSection,
    ProcessSection,
    ProjectsSection,
    ServicesSection,
  ],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}

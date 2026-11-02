import { Component } from '@angular/core';
import { HeroSection } from './sections/hero-section/hero-section';
import { ProcessSection } from './sections/process-section/process-section';
import { ProjectsSection } from './sections/projects-section/projects-section';
import { ServicesSection } from './sections/services-section/services-section';

@Component({
  imports: [HeroSection, ProcessSection, ProjectsSection, ServicesSection],
  selector: 'app-home',
  templateUrl: './home.html',
})
export class Home {}

import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LanguageService, SupportedLanguage } from '../../shared/i18n/language.service';
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
export class Home implements OnInit {
  private readonly meta = inject(Meta);
  private readonly i18n = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.i18n.setLanguage(this.route.snapshot.data['language'] as SupportedLanguage);
    this.i18n.setPage('home');
    this.meta.updateTag({
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      name: 'robots',
    });
  }
}

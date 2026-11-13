import { Component, inject } from '@angular/core';
import {
  LucideArrowRight,
  LucideBriefcaseBusiness,
  LucideMapPin,
  LucideSparkles,
} from '@lucide/angular';
import { LanguageService } from '../../../../shared/i18n/language.service';

@Component({
  imports: [LucideArrowRight, LucideBriefcaseBusiness, LucideMapPin, LucideSparkles],
  selector: 'app-hero-section',
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  protected readonly i18n = inject(LanguageService);
}

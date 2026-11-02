import { Component } from '@angular/core';
import {
  LucideArrowRight,
  LucideBriefcaseBusiness,
  LucideMapPin,
  LucideSparkles,
} from '@lucide/angular';

@Component({
  imports: [LucideArrowRight, LucideBriefcaseBusiness, LucideMapPin, LucideSparkles],
  selector: 'app-hero-section',
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSection {}

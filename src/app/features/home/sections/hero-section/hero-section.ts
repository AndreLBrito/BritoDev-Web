import { Component } from '@angular/core';
import {
  LucideArrowRight,
  LucideBriefcaseBusiness,
  LucideMapPin,
  LucideSparkles,
} from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LucideArrowRight, LucideBriefcaseBusiness, LucideMapPin, LucideSparkles, RouterLink],
  selector: 'app-hero-section',
  styleUrl: './hero-section.scss',
  templateUrl: './hero-section.html',
})
export class HeroSection {}

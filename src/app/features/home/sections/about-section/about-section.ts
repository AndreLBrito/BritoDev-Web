import { Component } from '@angular/core';
import {
  LucideGauge,
  LucideHeartHandshake,
  LucideShieldCheck,
  LucideTerminal,
} from '@lucide/angular';

@Component({
  imports: [LucideGauge, LucideHeartHandshake, LucideShieldCheck, LucideTerminal],
  selector: 'app-about-section',
  styleUrl: './about-section.scss',
  templateUrl: './about-section.html',
})
export class AboutSection {}

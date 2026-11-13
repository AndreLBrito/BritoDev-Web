import { Component, inject } from '@angular/core';
import {
  LucideGauge,
  LucideHeartHandshake,
  LucideShieldCheck,
  LucideTerminal,
} from '@lucide/angular';
import { LanguageService } from '../../../../shared/i18n/language.service';

@Component({
  imports: [LucideGauge, LucideHeartHandshake, LucideShieldCheck, LucideTerminal],
  selector: 'app-about-section',
  styleUrl: './about-section.scss',
  templateUrl: './about-section.html',
})
export class AboutSection {
  protected readonly i18n = inject(LanguageService);
}

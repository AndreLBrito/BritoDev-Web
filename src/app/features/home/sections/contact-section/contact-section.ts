import { Component, inject } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideCheck,
  LucideMail,
  LucideMapPin,
  LucideMessageCircle,
} from '@lucide/angular';
import { LanguageService } from '../../../../shared/i18n/language.service';

@Component({
  imports: [LucideArrowUpRight, LucideCheck, LucideMail, LucideMapPin, LucideMessageCircle],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {
  protected readonly i18n = inject(LanguageService);
}

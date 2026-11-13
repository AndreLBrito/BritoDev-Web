import { Component, inject } from '@angular/core';
import { LucideArrowUpRight, LucideCode2 } from '@lucide/angular';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  imports: [LucideArrowUpRight, LucideCode2],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly i18n = inject(LanguageService);
  protected readonly currentYear = new Date().getFullYear();
}

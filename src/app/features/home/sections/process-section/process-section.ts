import { Component, inject } from '@angular/core';
import { LucideCode2, LucideListChecks, LucideRefreshCcw, LucideSearch } from '@lucide/angular';
import { LanguageService } from '../../../../shared/i18n/language.service';

@Component({
  imports: [LucideCode2, LucideListChecks, LucideRefreshCcw, LucideSearch],
  selector: 'app-process-section',
  styleUrl: './process-section.scss',
  templateUrl: './process-section.html',
})
export class ProcessSection {
  protected readonly i18n = inject(LanguageService);
}

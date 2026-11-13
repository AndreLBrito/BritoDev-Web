import { Component, inject } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideBraces,
  LucideDatabase,
  LucideGauge,
  LucideGitBranch,
  LucideLayers3,
} from '@lucide/angular';
import { LanguageService } from '../../../../shared/i18n/language.service';

@Component({
  imports: [
    LucideArrowUpRight,
    LucideBraces,
    LucideDatabase,
    LucideGauge,
    LucideGitBranch,
    LucideLayers3,
  ],
  selector: 'app-projects-section',
  styleUrl: './projects-section.scss',
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  protected readonly i18n = inject(LanguageService);
}

import { Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideBraces,
  LucideDatabase,
  LucideGauge,
  LucideGitBranch,
  LucideLayers3,
} from '@lucide/angular';

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
export class ProjectsSection {}

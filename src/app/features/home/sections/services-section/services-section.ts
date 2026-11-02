import { Component } from '@angular/core';
import {
  LucideBraces,
  LucideBuilding2,
  LucideCode2,
  LucideGlobe2,
  LucideMonitorSmartphone,
  LucideServer,
  LucideWorkflow,
  LucideWrench,
} from '@lucide/angular';

@Component({
  imports: [
    LucideBraces,
    LucideBuilding2,
    LucideCode2,
    LucideGlobe2,
    LucideMonitorSmartphone,
    LucideServer,
    LucideWorkflow,
    LucideWrench,
  ],
  selector: 'app-services-section',
  styleUrl: './services-section.scss',
  templateUrl: './services-section.html',
})
export class ServicesSection {}

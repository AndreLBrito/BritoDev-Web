import { Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideCheck,
  LucideCode2,
  LucideMapPin,
  LucideMessageCircle,
} from '@lucide/angular';

@Component({
  imports: [LucideArrowUpRight, LucideCheck, LucideCode2, LucideMapPin, LucideMessageCircle],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {}

import { Component } from '@angular/core';
import {
  LucideArrowUpRight,
  LucideCheck,
  LucideMail,
  LucideMapPin,
  LucideMessageCircle,
} from '@lucide/angular';

@Component({
  imports: [LucideArrowUpRight, LucideCheck, LucideMail, LucideMapPin, LucideMessageCircle],
  selector: 'app-contact-section',
  styleUrl: './contact-section.scss',
  templateUrl: './contact-section.html',
})
export class ContactSection {}

import { Component } from '@angular/core';
import { LucideArrowUpRight, LucideCode2 } from '@lucide/angular';

@Component({
  imports: [LucideArrowUpRight, LucideCode2],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
}

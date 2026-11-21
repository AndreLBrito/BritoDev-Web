import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { LucideChevronUp } from '@lucide/angular';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  imports: [LucideChevronUp],
  selector: 'app-back-to-top',
  styleUrl: './back-to-top.scss',
  templateUrl: './back-to-top.html',
})
export class BackToTop implements OnInit {
  private readonly document = inject(DOCUMENT);

  protected readonly i18n = inject(LanguageService);
  protected readonly isVisible = signal(false);

  ngOnInit(): void {
    this.updateVisibility();
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateVisibility();
  }

  private updateVisibility(): void {
    this.isVisible.set((this.document.defaultView?.scrollY ?? 0) > 560);
  }
}

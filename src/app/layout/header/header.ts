import { DOCUMENT } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { LucideGlobe2, LucideMenu, LucideX } from '@lucide/angular';
import { LanguageService, SupportedLanguage } from '../../shared/i18n/language.service';

@Component({
  imports: [LucideGlobe2, LucideMenu, LucideX],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly document = inject(DOCUMENT);
  protected readonly i18n = inject(LanguageService);
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected changeLanguage(event: Event): void {
    const language = (event.target as HTMLSelectElement).value as SupportedLanguage;
    this.i18n.setLanguage(language);
    this.document.location.assign(
      `${this.i18n.pathForLanguage(language)}${this.document.location.hash}`,
    );
  }
}

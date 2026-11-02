import { Component, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [LucideMenu, LucideX, RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}

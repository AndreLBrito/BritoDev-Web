import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound implements OnInit {
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  protected readonly i18n = inject(LanguageService);

  ngOnInit(): void {
    const routeLanguage = this.i18n.languageFromPath(this.router.url);
    if (routeLanguage) this.i18n.setLanguage(routeLanguage);
    this.i18n.setPage('notFound');
    this.meta.updateTag({ content: 'noindex, follow', name: 'robots' });
  }
}

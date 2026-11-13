import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  selector: 'app-language-redirect',
  template: '',
})
export class LanguageRedirect implements OnInit {
  private readonly i18n = inject(LanguageService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    void this.router.navigateByUrl(this.i18n.currentPath().replace(/\/$/, ''), {
      replaceUrl: true,
    });
  }
}

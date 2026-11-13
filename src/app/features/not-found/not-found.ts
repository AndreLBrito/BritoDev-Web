import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/i18n/language.service';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound implements OnInit {
  private readonly meta = inject(Meta);
  protected readonly i18n = inject(LanguageService);

  ngOnInit(): void {
    this.i18n.setPage('notFound');
    this.meta.updateTag({ content: 'noindex, follow', name: 'robots' });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFound implements OnInit {
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({ content: 'noindex, follow', name: 'robots' });
  }
}

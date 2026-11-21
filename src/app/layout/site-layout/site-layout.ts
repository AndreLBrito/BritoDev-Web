import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToTop } from '../back-to-top/back-to-top';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  imports: [BackToTop, Footer, Header, RouterOutlet],
  selector: 'app-site-layout',
  styleUrl: './site-layout.scss',
  templateUrl: './site-layout.html',
})
export class SiteLayout {}

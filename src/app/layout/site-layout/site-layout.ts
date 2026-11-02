import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  imports: [Footer, Header, RouterOutlet],
  selector: 'app-site-layout',
  styleUrl: './site-layout.scss',
  templateUrl: './site-layout.html',
})
export class SiteLayout {}

import { Component } from '@angular/core';
import { SiteLayout } from './layout/site-layout/site-layout';

@Component({
  imports: [SiteLayout],
  selector: 'app-root',
  template: '<app-site-layout />',
})
export class App {}

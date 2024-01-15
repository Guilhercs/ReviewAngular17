import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './shared/services/service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  template: ` <router-outlet></router-outlet> `,
  providers: [ServiceService],
})
export class AppComponent {
  constructor() {
    console.info(environment.environment);
  }
}

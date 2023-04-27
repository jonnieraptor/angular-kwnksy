import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css'],
})
export class MasterpageComponent {
  constructor(private router: Router) {}

  public app_name = 'Planilla pre-elaborada';

  logout() {
    this.router.navigate(['/login']);
  }
}

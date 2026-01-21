import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(public auth: AuthService) {}
}

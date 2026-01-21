import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  async submit() {
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigateByUrl('/');
    } catch {
      this.error = 'Email ou senha inválidos';
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  async submit() {
    try {
      await this.auth.register(this.email, this.password);
      this.router.navigateByUrl('/');
    } catch {
      this.error = 'Erro ao criar conta';
    }
  }
}

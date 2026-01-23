import { Component } from '@angular/core';
import { EmailService } from '../../core/services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  isLoading = false;
  selectedFileName: string | null = null;

  constructor(private emailService: EmailService) {}

  async onSubmit(e: Event) {
    e.preventDefault();
    this.isLoading = true;
    const form = e.target as HTMLFormElement;

    try {
      await this.emailService.sendEmail(form);
      alert('Mensagem enviada com sucesso!');
      form.reset();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem.');
    } finally {
      this.isLoading = false;
    }
  }
}

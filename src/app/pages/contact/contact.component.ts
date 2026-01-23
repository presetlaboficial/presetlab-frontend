import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isLoading = false;

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

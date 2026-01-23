import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_a7pp37n';
  private templateId = 'template_vu7a05p';
  private publicKey = 'U6rdkEOvhA4kZKvLv';

  constructor() {
    emailjs.init(this.publicKey);
  }

  async sendEmail(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
    try {
      const result = await emailjs.sendForm(
        this.serviceId,
        this.templateId,
        form,
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

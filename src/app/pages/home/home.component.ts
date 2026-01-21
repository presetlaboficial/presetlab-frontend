import { Component } from '@angular/core';
import { PresetsSectionComponent } from "../../shared/sections/presets-section/presets-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresetsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

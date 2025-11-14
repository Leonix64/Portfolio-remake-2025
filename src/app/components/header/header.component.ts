import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() mobileMenuOpen: boolean = false;
  @Output() scrollToSection = new EventEmitter<string>();
  @Output() toggleMobileMenu = new EventEmitter<void>();

  onScrollToSection(section: string) {
    this.scrollToSection.emit(section);
    this.closeMobileMenu();
  }

  onToggleMobileMenu() {
    this.toggleMobileMenu.emit();
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

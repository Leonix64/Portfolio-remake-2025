import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { Shape } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() scrollToSection = new EventEmitter<string>();

  titles: string[] = [
    'Ingeniero en Software',
    'Desarrollador FullStack',
    'Backend Developer',
    'Frontend Enthusiast'
  ];

  codeLines: string[] = [
    'const developer = new Angel();',
    'function createAwesome() {',
    '  return innovation + passion;',
    '}',
    'while(coffee.available) {',
    '  code.write();',
    '}',
    'export default magic;',
    'class MyStack {',
    '  angular = true;',
    '  ionic = true;',
    '  nodejs = true;',
    '}',
    'const skills = ["Frontend", "Backend", "Mobile"];',
    'async solveProblem() {',
    '  return await creativity();',
    '}',
    'const cleanCode = true;',
    'let innovation = Infinity;',
    'interface Developer {',
    '  name: string;',
    '  passion: boolean;',
    '}',
    'try {',
    '  buildAwesomeApps();',
    '} catch (e) {',
    '  learnFromMistakes();',
    '}',
    'const userExperience = "excellent";',
    'while(career) {',
    '  keepGrowing();',
    '}',
    'const quality = firstPriority;'
  ];

  shapes: Shape[] = [
    { id: 1, delay: 0 }, { id: 2, delay: 2 }, { id: 3, delay: 4 }, { id: 4, delay: 1 },
    { id: 5, delay: 1.5 }, { id: 6, delay: 3.5 }, { id: 7, delay: 2.8 },
    { id: 8, delay: 4.2 }, { id: 9, delay: 3.2 }, { id: 10, delay: 1.8 }
  ];

  visibleCodeLines: string[] = [];
  private codeLineTimer: any;
  private currentLineIndex: number = 0;
  private isAddingLines: boolean = true;
  private maxVisibleLines: number = 8;

  currentTitleIndex: number = 0;
  typedText: string = '';
  isDeleting: boolean = false;
  isPaused: boolean = false;
  private typingTimer: any;

  ngOnInit() {
    this.startTyping();
    this.startCodeLinesAnimation();
  }

  ngOnDestroy() {
    if (this.typingTimer) clearTimeout(this.typingTimer);
    if (this.codeLineTimer) clearInterval(this.codeLineTimer);
  }

  startCodeLinesAnimation() {
    this.codeLineTimer = setInterval(() => {
      if (this.isAddingLines) {
        if (this.visibleCodeLines.length < this.maxVisibleLines && this.currentLineIndex < this.codeLines.length) {
          this.visibleCodeLines.push(this.codeLines[this.currentLineIndex]);
          this.currentLineIndex = (this.currentLineIndex + 1) % this.codeLines.length;
        } else {
          this.isAddingLines = false;
        }
      } else {
        if (this.visibleCodeLines.length > 0) {
          this.visibleCodeLines.shift();
        } else {
          this.isAddingLines = true;
        }
      }
    }, 800);
  }

  startTyping() {
    const currentTitle = this.titles[this.currentTitleIndex];

    if (this.isPaused) {
      this.typingTimer = setTimeout(() => {
        this.isPaused = false;
        this.isDeleting = true;
        this.startTyping();
      }, 2000);
      return;
    }

    const typingSpeed = this.isDeleting ? 50 : 100;

    this.typingTimer = setTimeout(() => {
      if (!this.isDeleting) {
        if (this.typedText.length < currentTitle.length) {
          this.typedText = currentTitle.slice(0, this.typedText.length + 1);
        } else {
          this.isPaused = true;
        }
      } else {
        if (this.typedText.length > 0) {
          this.typedText = currentTitle.slice(0, this.typedText.length - 1);
        } else {
          this.isDeleting = false;
          this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        }
      }
      this.startTyping();
    }, typingSpeed);
  }
}

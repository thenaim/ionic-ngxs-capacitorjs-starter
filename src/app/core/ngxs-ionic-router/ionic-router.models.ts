import { NavigationExtras } from '@angular/router';

export interface AnimationOptions {
  animated?: boolean;
  animationDirection?: 'forward' | 'back';
}

export interface NavigationOptions extends NavigationExtras, AnimationOptions {}

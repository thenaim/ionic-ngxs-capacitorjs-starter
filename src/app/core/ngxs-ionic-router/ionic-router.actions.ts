import { UrlTree } from '@angular/router';
import { NavigationOptions, AnimationOptions } from './ionic-router.models';

export class NavigateRoot {
  static readonly type = '[Router] NavigateRoot';
  constructor(public readonly path: string | UrlTree | any[], public readonly options?: NavigationOptions) {}
}

export class NavigateForward {
  static readonly type = '[Router] NavigateForward';
  constructor(public readonly path: string | UrlTree | any[], public readonly options?: NavigationOptions) {}
}

export class NavigateBackward {
  static readonly type = '[Router] NavigateBackward';
  constructor(public readonly path: string | UrlTree | any[], public readonly options?: NavigationOptions) {}
}

export class NavigateBack {
  static readonly type = '[Router] NavigateBack';
  constructor(public readonly options?: AnimationOptions) {}
}

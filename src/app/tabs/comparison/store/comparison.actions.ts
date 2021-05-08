export class AddCountryComparisonAction {
  static readonly type = '[AddToComparisonAction] Add country to comparison';
  constructor(public alpha3Code: string) {}
}

export class RemoveCountryComparisonAction {
  static readonly type = '[RemoveCountryComparisonAction] Remove country to comparison';
  constructor(public alpha3Code: string) {}
}

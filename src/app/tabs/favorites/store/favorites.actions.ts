export class AddCountryLikeAction {
  static readonly type = '[AddCountryLikeAction] Add country like action';
  constructor(public alpha3Code: string) {}
}

export class RemoveCountryLikeAction {
  static readonly type = '[RemoveCountryLikeAction] Remove country like action';
  constructor(public alpha3Code: string) {}
}

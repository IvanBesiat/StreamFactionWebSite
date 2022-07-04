export class Streamer {
  private _id: number;
  private _name: string;
  private _logo: string;
  private _description: string;
  private _date_create: Date;
  private _date_modif: Date;

  static StreamerInstances = 0;

  constructor(name: string, logo: string, description: string, date_create: Date, date_modif: Date) {
    this._id = Streamer.StreamerInstances;
    this._name = name;
    this._logo = logo;
    this._description = description;
    this._date_create = date_create;
    this._date_modif = date_modif;

    Streamer.StreamerInstances++;
  }

  get id(): number { return this._id; }
  set id(value: number) { this._id = value;}

  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }

  get logo(): string { return this._logo; }
  set logo(value: string) { this._logo = value; }

  get description(): string { return this._description; }
  set description(value: string) { this._description = value; }

  get date_create(): Date { return this._date_create; }
  set date_create(value: Date) { this._date_create = value; }

  get date_modif(): Date { return this._date_modif;}
  set date_modif(value: Date) { this._date_modif = value;}
}

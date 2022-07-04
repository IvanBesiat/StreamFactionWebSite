export class Actualite{
  private _id: number;
  private _title: string;
  private _image: string;
  private _shortDescription: string;
  private _description: string;
  private _date_create: Date;
  private _date_modif: Date;

  static ActualiteInstances = 0;

  constructor(title: string, image: string, shortDescription: string, description: string, date_create: Date, date_modif: Date){
    this._id = Actualite.ActualiteInstances;
    this._title = title;
    this._image = image;
    this._shortDescription = shortDescription;
    this._description = description;
    this._date_create = date_create;
    this._date_modif = date_modif;

    Actualite.ActualiteInstances++;
  }

  get id(): number { return this._id; }
  set id(value: number){ this._id = value;}

  get title(): string { return this._title; }
  set title(value: string){ this._title = value;}

  get image(): string { return this._image; }
  set image(value: string){ this._image = value;}

  get shortDescription(): string { return this._shortDescription; }
  set shortDescription(value: string){ this._shortDescription = value;}

  get description(): string { return this._description; }
  set description(value: string){ this._description = value;}

  get date_create(): Date { return this._date_create; }
  set date_create(value: Date){ this._date_create = value;}

  get date_modif(): Date { return this._date_modif; }
  set date_modif(value: Date){ this._date_modif = value;}
}

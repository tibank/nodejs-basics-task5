export class Genre {
  id!: String;
  name: String;
  description: String;
  country: String;
  year!: Number;

  constructor(name: String, description: String, country: String, year: Number) {
    this.name = name;
    this.description = description;
    this.country = country;
    this.year = year;
  }
}

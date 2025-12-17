viewByCity(city: string): void {
  this.contacts
    .filter(p => p.city === city)
    .forEach(p => console.log(p.toString()));
}

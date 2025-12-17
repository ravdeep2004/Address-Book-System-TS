editContact(firstName: string, newCity: string): void {
  const person = this.contacts.find(p => p.firstName === firstName);
  if (person) {
    person.city = newCity;
  }
}

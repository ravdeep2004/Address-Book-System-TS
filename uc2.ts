
  editContact(firstName: string, newCity: string): void {
    const person = this.contacts.find(c => c.firstName === firstName);

    if (person) {
      person.city = newCity;
    }
  }
}

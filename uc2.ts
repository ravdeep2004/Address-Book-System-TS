class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public city: string,
    public state: string,
    public zip: string,
    public phone: string,
    public email: string
  ) {}
}

class AddressBook {
  contacts: Contact[] = [];

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  
  editContact(firstName: string, newCity: string): void {
    const person = this.contacts.find(c => c.firstName === firstName);

    if (person) {
      person.city = newCity;
    }
  }
}


const addressBook = new AddressBook();

addressBook.addContact(
  new Contact("Ravdeep", "Singh", "Delhi", "Delhi", "DL", "110001", "9999", "r@gmail.com")
);

addressBook.editContact("Ravdeep", "Mumbai");
console.log(addressBook.contacts);

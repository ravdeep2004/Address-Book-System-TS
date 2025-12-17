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
}

const addressBook = new AddressBook();

addressBook.addContact(
  new Contact("Ravdeep", "Singh", "Delhi", "Delhi", "DL", "110001", "9999", "r@gmail.com")
);

console.log(addressBook.contacts);

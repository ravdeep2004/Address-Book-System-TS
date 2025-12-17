
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

  toString(): string {
    return `${this.firstName} ${this.lastName} - ${this.city}, ${this.state}`;
  }
}

class AddressBook {
  contacts: Contact[] = [];

  // uc1 & uc6
  addContact(contact: Contact): void {
    const exists = this.contacts.some(
      c => c.firstName === contact.firstName && c.lastName === contact.lastName
    );
    if (!exists) this.contacts.push(contact);
  }

  // uc2
  editContact(firstName: string, newCity: string): void {
    const person = this.contacts.find(c => c.firstName === firstName);
    if (person) person.city = newCity;
  }

  // uc3
  deleteContact(firstName: string): void {
    this.contacts = this.contacts.filter(c => c.firstName !== firstName);
  }

  // uc7
  searchByCity(city: string): Contact[] {
    return this.contacts.filter(c => c.city === city);
  }

  // uc8
  viewByCity(city: string): void {
    this.searchByCity(city).forEach(c => console.log(c.toString()));
  }

  // uc9
  countByCity(city: string): number {
    return this.searchByCity(city).length;
  }

  // uc10
  sortByName(): void {
    this.contacts.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
  }
}

console.log("Welcome to Address Book Program");

// uc5
const system: Map<string, AddressBook> = new Map();
system.set("Personal", new AddressBook());

const addressBook = system.get("Personal")!;

// uc4
addressBook.addContact(
  new Contact("Ravdeep", "Singh", "Delhi", "Delhi", "DL", "110001", "9999", "r@gmail.com")
);
addressBook.addContact(
  new Contact("Amit", "Sharma", "Addr", "Pune", "MH", "411001", "8888", "a@gmail.com")
);
addressBook.addContact(
  new Contact("Neha", "Verma", "Addr", "Delhi", "DL", "110002", "7777", "n@gmail.com")
);

// uc2
addressBook.editContact("Ravdeep", "Mumbai");

// uc7 + uc8
console.log("People in Delhi:");
addressBook.viewByCity("Delhi");

// uc9
console.log("Count in Delhi:", addressBook.countByCity("Delhi"));

// uc10
addressBook.sortByName();
console.log("Sorted Contacts:");
addressBook.contacts.forEach(c => console.log(c.toString()));

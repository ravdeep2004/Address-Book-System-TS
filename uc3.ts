deleteContact(firstName: string): void {
  this.contacts = this.contacts.filter(
    c => c.firstName !== firstName
  );
}

addressBook.deleteContact("Ravdeep");
console.log(addressBook.contacts);

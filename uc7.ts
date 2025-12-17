addContact(contact: Contact): void {
  const duplicate = this.contacts.some(
    p => p.firstName === contact.firstName && p.lastName === contact.lastName
  );

  if (!duplicate) {
    this.contacts.push(contact);
  } else {
    console.log("Duplicate Entry Not Allowed");
  }
}

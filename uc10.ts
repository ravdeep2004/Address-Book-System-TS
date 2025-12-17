sortByName(): void {
  this.contacts.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
}

/*addressBook.sortByName();
addressBook.contacts.forEach(p => console.log(p.toString()));
*/
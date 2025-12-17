sortByName(): void {
  this.contacts.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );
}


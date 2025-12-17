searchByCity(city: string): Contact[] {
  return this.contacts.filter(p => p.city === city);
}

searchByState(state: string): Contact[] {
  return this.contacts.filter(p => p.state === state);
}

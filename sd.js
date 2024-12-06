class Student {
  #firstName;
  #lastName;
  #track;

  constructor(firstName, lastName, track) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.setTrack = track;  // we're calling the setter here
  }

  get name() {
    return [this.firstName, this.lastName];
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get track() {
    return this.#track;
  }

  set setTrack(newTrack) {
    switch (newTrack) {
      case 'JavaScript':
      case 'Python':
      case 'Ruby':
        this.#track = newTrack;
        break;
      default:
        throw new Error(`Invalid track: '${newTrack}'`);
    }
  }
}

let student2 = new Student('Kay', 'Oakley', 'JavaScript');
console.log(`${student2.name.join(' ')} ${student2.track}`);
// Kay Oakley JavaScript

let student3 = new Student('Bill', 'Wisner', 'Python');
console.log(`${student3.name.join(' ')} ${student3.track}`);
// Bill Wisner Python

student3.setTrack = 'Ruby';
console.log(`${student3.name.join(' ')} ${student3.track}`);
// Bill Wisner Ruby

student3.setTrack = 'Baaa!';
console.log(`${student3.name.join(' ')} ${student3.track}`);
// Invalid track: 'Baaa!'
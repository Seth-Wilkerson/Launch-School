const HEXADECIMAL_CHARACTERS = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function uuid() {
  let uuid = '';
  let segments = [8, 4, 4, 4, 12];

  for (let i = 0; i < segments.length; i++) {
    for (let count = 1; count <= segments[i]; count++) {
      const minCeiled = Math.ceil(0);
      const maxFloored = Math.floor(16);
      let randomIndex = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

      uuid += HEXADECIMAL_CHARACTERS[randomIndex];
    }

    if (i < segments.length - 1) {
      uuid += '-';
    }
  }

  return uuid;
}

console.log(uuid());
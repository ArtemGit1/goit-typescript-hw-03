class Key {
    private signature: number = Math.random();
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house.');
      } else {
        console.log('The door is closed. Cannot enter.');
      }
    }
  }
  
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    openDoor(personKey: Key): void {
      if (personKey.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }
  

  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);
  
  export {};
  
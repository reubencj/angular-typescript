interface Person {
  first_name: string;
  last_name: string;
}

function greeter(person: Person) {
  return "hello" + person;
}

let user: Person;
user = { first_name: "Reuben", last_name: "John" };
document.body.textContent = greeter(user);

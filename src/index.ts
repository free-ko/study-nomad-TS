interface Human {
  name: string,
  age: number,
  gender: string;
}


const person = {
name: "FREEKO",
age: 29,
gender: "male",
};


const sayHi = (person: Human): string => {
return `Hello ${person.name}, you ar ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
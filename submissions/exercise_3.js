const createPerson = (name, age) => ({
    name: name,
    age: age
})

console.log (createPerson ("Gigi", 25));
console.log (createPerson ("Gigi").name);

const createPerson2 = (name, age) => ({
    name: name,
    age: age
})

console.log (createPerson2 ("nino", 30).age);

const createBook = (title, pages) => ({
    title: title,
    pages:pages,
    isLong: pages > 300

})

console.log (createBook ("The Hobbit", 310));

const createBook2 = (title, pages) => ({
 title: title,
 pages:pages,
isLong: pages > 300
})

console.log (createBook2 ("The Little Prince", 96));


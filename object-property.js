const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Mannnaaaa"},
    {id: 41, name: "Sakib"},
    {id: 61, name: "Dipjol"},
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40)
const bigger1 = students.find(s => s.id>40)
console.log(names);
console.log(ids);
console.log(bigger);
console.log(bigger1);
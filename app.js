// ? Task:В базе данных пользователей произошел сбой, и у некоторых пользователей исчезли значения поля firstName. Хорошо что в user уже есть поле fullName, из которого мы можем взять нужные данные.

// Реализуй функцию restoreNames, которая принимает массив объектов users и меняет поле firstName пользователям, у которых оно равно undefined, опираясь на значение поля fullName. Функция ничего не возвращает.

// Пример:

// const users = [
//   {
//     firstName: undefined,
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     firstName: undefined,
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];

// restoreNames(users);

// users === [
//   {
//     firstName: 'Jack',
//     lastName: 'Holy',
//     fullName: 'Jack Holy',
//   },
//   {
//     firstName: 'Mike',
//     lastName: 'Adams',
//     fullName: 'Mike Adams',
//   },
// ];

// Solution 1

const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: undefined,
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
  {
    firstName: undefined,
    lastName: 'Adams',
    fullName: 'Jain Adams',
  },
  {
    firstName: undefined,
    lastName: 'Eridams',
    fullName: 'Liza Eridams',
  },
];

function restoreNames(users) {
  for (const person of users) {
    if (person.firstName) {
      delete person.firstName;
    }

    let name = person.fullName;

    for (let i = 0; i < name.length; i++) {
      if (name[i] === ' ') {
        name = name.slice(0, i);
        break;
      }
    }
    person.firstName = name;
  }
  return users;
}

console.log(restoreNames(users));

// ! Explanation:

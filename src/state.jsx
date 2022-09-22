const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: "1",
  about: "Тут я рассказываю историю своей жизни и о своих увлечениях...",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
};

const users = {
  0: {name: "Ирина", lastname: "Пирогова"},
  1: {name: "Никита", lastname: "Альпака"},
  2: {name: "Дима", lastname: "Петров"},
  3: {name: "Женя", lastname: "Лесной"},
  4: {name: "Аня", lastname: "Алая"},
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
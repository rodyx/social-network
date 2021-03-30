import { Home } from "./Home/Home"
import { Messenger } from "./Messenger/Messenger"

export const routes = [
  {
    title: 'Чат',
    component: Messenger,
    path: '/messenger'
  },
  {
    title: 'Главное меню',
    component: Home,
    path: '/home',
    exact: true
  }
]
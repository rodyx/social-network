import { Home } from "./Home/Home"
import { Messenger } from "./Messenger/Messenger"

export const routes = [
  {
    title: 'Главное меню',
    component: Home,
    path: '/home',
    exact: true
  },
  {
    title: 'Чат',
    component: Messenger,
    path: '/messenger'
  }
]
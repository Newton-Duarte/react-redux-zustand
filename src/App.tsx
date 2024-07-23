import './styles/global.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
// import { AddTodo } from './components/add-todo';
// import { TodoList } from './components/todo-list';
import { Player } from './pages/player';


export function App() {
  return (
    <ReduxProvider store={store}>
      {/* <AddTodo />
      <TodoList /> */}
      <Player />
    </ReduxProvider>
  )
}

import { createContext, useContext } from 'react';

// Create todos context with hook/API
const TodosContext = createContext();
export default TodosContext;

export function useTodos() {
  return useContext(TodosContext);
}
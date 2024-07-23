import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { player } from "./slices/player";

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    player
  }
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;
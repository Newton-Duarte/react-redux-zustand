import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

interface Lesson {
  id: string
  title: string
  duration: string
}

interface Module {
  id: number
  title: string
  lessons: Lesson[]
}

interface Course {
  id: number
  modules: Module[]
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  loading: boolean
}

const initialState: PlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  loading: true
}

export const fetchCourse = createAsyncThunk(
  'player/fetch-course',
  async () => {
    const response = await api.get('/courses')

    return response.data
  }
)

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course?.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchCourse.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.loading = false
    })
  },
})

export const { play, next } = playerSlice.actions
export const player = playerSlice.reducer;

export const useCurrentLesson = () => {
  return useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex } = store.player
    const currentModule = store.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]
  
    return { currentModule, currentLesson }
  })
}
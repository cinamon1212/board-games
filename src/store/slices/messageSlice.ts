import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { UIState, Message } from '../../types/store'
import type { AppDispatch } from '../../store'

const initialState: UIState = {
  message: null,
  sidebar: false,
}

let timeoutId: NodeJS.Timeout | null = null

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<Message>) {
      state.message = action.payload
    },
    clearMessage(state) {
      state.message = null
    },
  },
})

export const { setMessage, clearMessage } = uiSlice.actions
export default uiSlice.reducer

// Thunk для автоматического скрытия сообщения через 5 секунд
export const showMessage = (message: Message) => (dispatch: AppDispatch) => {
  dispatch(setMessage(message))

  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    dispatch(clearMessage())
  }, 5000)
}

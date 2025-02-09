import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: { user: JSON.parse(localStorage.getItem("user")) || null },
    reducers: {
        login: (state, action) => {
            console.log("inside login")
            console.log(typeof action.payload)
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload));
            // state.username = data.username
            // if (data.role == 'elector') {
            //     console.log("INSIDE INFOOO")
            //     state.elector = true
            // } else {
            //     state.elector = false
            // }
            // console.log(state.username)
        }
    }
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer
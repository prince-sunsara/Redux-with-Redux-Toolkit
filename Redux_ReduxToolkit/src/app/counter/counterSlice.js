import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("incrementAsync.pending");
        })
            .addCase(incrementAsync.fulfilled, (state, actions) => {
                state.value += actions.payload
            })
    }
});

// for Async action
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        return amount;
    }
)

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
import { createSlice} from "@reduxjs/toolkit";

const handlePending = (state) => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.error = action.payload
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase("contacts/fetchAll/pending", handlePending)
            .addCase("contacts/fetchAll/fulfilled", (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase("contacts/fetchAll/rejected", handleRejected)
            .addCase("contacts/addContact/pending", handlePending)
            .addCase("contacts/addContact/fulfilled", (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.unshift(action.payload);
            })
            .addCase("contacts/addContact/rejected", handleRejected)
            .addCase("contacts/deleteContact/pending", handlePending)
            .addCase("contacts/deleteContact/fulfilled", (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(contact => contact.id !== action.payload.id)
            })
            .addCase("contacts/deleteContact/rejected", handleRejected)
    }
})


export const contactsReducer = contactsSlice.reducer;
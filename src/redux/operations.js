import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64d4493cb592423e4693fd84.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts")
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", {
                name,
                number,
                id: nanoid(),
            })
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
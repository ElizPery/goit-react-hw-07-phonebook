import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [ getContacts, getFilter],
    (items, filter) => {
    return items.filter(item => item.name.toLowerCase()
        .includes(filter.toLowerCase()))
    }
)
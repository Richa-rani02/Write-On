import { filterActions } from "../utils/actions";

export const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case filterActions.SORT_BY_DATE: {
            return {
                ...state,
                sortByDate: payload
            }

        }
        case filterActions.SORT_BY_PRIORITY: {
            return {
                ...state,
                sortByPriority: payload
            }
        }
        case filterActions.SEARCH_NOTES: {
            return {
                ...state,
                search: payload
            }
        }
        case filterActions.FILTER_BY_TAGS: {
            return {
                ...state,
                filterByTags: payload.isChecked ?
                    [...state.filterByTags, payload.value] : state.filterByTags.filter((tags) => tags !== payload.value)
            }
        }
        case filterActions.CLEAR_ALL: {
            return {
                ...state,
                sortByDate: "",
                sortByPriority: "",
                search: "",
                filterByTags: []
            }
        }
        default: {
            return state
        }
    }

}
const initialState = {
    navigationButton: 'home',
    sortingButton: 'manicure'
}

export const navigationButton = (button = initialState.navigationButton, action) =>{
    switch (action.type) {
        case 'CHANGE_NAV_BUTTON':
            return action.payload
        default:
            return button
    }
}

export const sortingButton = (button = initialState.sortingButton, action) =>{
    switch (action.type) {
        case 'CHANGE_SORTING_BUTTON':
            return action.payload
        default:
            return button
    }
}
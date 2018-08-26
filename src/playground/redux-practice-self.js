import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid'; 


// -----------------------------------------------------------------------
// Actions for expense reducer 
// -----------------------------------------------------------------------

// ADD_EXPENSE



const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE', 
    expense: {
        id: uuid(), 
        description, 
        note, 
        amount, 
        createdAt
    } 
});




// REMOVE_EXPENSE


const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});






// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE 

// -----------------------------------------------------------------------
// Expenses reducer 
// -----------------------------------------------------------------------


const expenseReducerDefault = []; 


const expenseReducer = (state = expenseReducerDefault, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE': 
            return state.filter( ({id}) => id !== action.id);
        default: 
            return state; 
    }
};





// -----------------------------------------------------------------------
// Filters Reducer 
// -----------------------------------------------------------------------



const filtersReducerDefault = {}; 

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        default: 
            return state; 
    }
};






// -----------------------------------------------------------------------
// Store creation 
// -----------------------------------------------------------------------

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
); 




// -----------------------------------------------------------------------
// Subscribe
// -----------------------------------------------------------------------

store.subscribe( () => {
    console.log(store.getState()); 
}); 





// -----------------------------------------------------------------------
// Dispatch actions for expenses 
// -----------------------------------------------------------------------


const expense1 = store.dispatch(addExpense({ description: 'books', note: 'math books', amount: 500 }));

store.dispatch(removeExpense( { id: expense1.expense.id } )); 





// -----------------------------------------------------------------------
// Demo state
// -----------------------------------------------------------------------

const demoState = {
    expenses: [{
        id: 'pdofjaodf',
        description: 'January rent', 
        note: 'this was the final payment for that address',
        amount: 54500, 
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined, 
        endDate: undefined 
    }
};
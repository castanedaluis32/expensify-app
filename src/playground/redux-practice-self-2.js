import { createStore, combineReducers } from 'redux'; 
import uuid from 'uuid'; 


// -----------------------------------------------------------------------
// Actions for expense reducer 
// -----------------------------------------------------------------------

// ADD_EXPENSE


const addExpense = ( { description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
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









// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE 

// -----------------------------------------------------------------------
// Expenses reducer 
// -----------------------------------------------------------------------



const expensesDefaultState = []; 

const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense]; 
        default: 
            return state; 
    }
};







// -----------------------------------------------------------------------
// Filters Reducer 
// -----------------------------------------------------------------------



const filtersDefaultState = {}; 

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        default: 
            return state; 
    }
};







// -----------------------------------------------------------------------
// Store creation 
// -----------------------------------------------------------------------



const store = createStore(
    combineReducers({
        expense: expensesReducer, 
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



const expense1 = store.dispatch(addExpense( { description: 'school', note: 'costs too much', amount: 5000 } ));




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

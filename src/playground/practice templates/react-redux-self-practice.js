// -----------------------------------------------------------------------
// Imports
// -----------------------------------------------------------------------

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; 


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


// -----------------------------------------------------------------------
// Actions for expense reducer 
// -----------------------------------------------------------------------

// ADD_EXPENSE

const addExpense = ( {description='', note='', amount=0, createdAt=0} = {} ) => {
    return {
        type: 'ADD_EXPENSE', 
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};


// REMOVE_EXPENSE

const removeExpense = ( {id} = {} ) => {
    return {
        type: 'REMOVE_EXPENSE', 
        id
    };
};

// EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id, 
        updates
    };
};

// -----------------------------------------------------------------------
// Actions for filters reducer 
// -----------------------------------------------------------------------

// SET_TEXT_FILTER

const setTextFilter = (str) => {
    return {
        type: 'SET_TEXT_FILTER',
        str 
    };
};

// SORT_BY_DATE

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};


// SORT_BY_AMOUNT

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};

// SET_START_DATE

const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE', 
        startDate
    };
};

// SET_END_DATE 

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE', 
        endDate
    };
};

// -----------------------------------------------------------------------
// Expenses reducer 
// -----------------------------------------------------------------------


const expensesDefaultState = []; 

const expensesReducer =  (state = expensesDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id ); 
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense; 
                }
            }); 
        default: 
            return state; 
    }
};



// -----------------------------------------------------------------------
// Filters Reducer 
// -----------------------------------------------------------------------


const filtersDefaultState = {
    text: '', 
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined 
}; 

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.str 
            };
        case 'SORT_BY_DATE':
            return {
                ...state, 
                sortBy: 'date' 
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state, 
                sortBy: 'amount' 
            };
        case 'SET_START_DATE':
            return {
                ...state, 
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state, 
                endDate: action.endDate
            };
        default: 
            return state; 
    }
};


// -----------------------------------------------------------------------
// Get visible expenses (filter the data function)
// -----------------------------------------------------------------------

// timestamps (milliseconds)
// January 1st 1970 (unix epoch)



const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt; 
        } else if (sortBy === 'amount') {
            return a.amount < b.amount; 
        }
    }); 
};




// -----------------------------------------------------------------------
// Store creation 
// -----------------------------------------------------------------------



const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filters: filtersReducer
    }
));


// -----------------------------------------------------------------------
// Subscribe
// -----------------------------------------------------------------------


// store.subscribe( () => {
//     console.log(store.getState());
// });

store.subscribe( () => {
    const state = store.getState(); 
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters ); 
    console.log(visibleExpenses); 
});

// -----------------------------------------------------------------------
// Debugging Logs 
// -----------------------------------------------------------------------


// -----------------------------------------------------------------------
// Dispatch actions for expenses 
// -----------------------------------------------------------------------

// add expense 
const expense1 = store.dispatch(addExpense( {description: 'school', amount: 5000, createdAt: 500} ));
const expense2 = store.dispatch(addExpense( {description: 'car', amount: 300, createdAt: 600 } ));

// remove expense 
// store.dispatch(removeExpense({id: expense1.expense.id})); 

// edit expense 
store.dispatch(editExpense(expense2.expense.id, { description: 'rent', amount: 1234 }));


// -----------------------------------------------------------------------
// Dispatch actions for filters
// -----------------------------------------------------------------------

// set text filter 
// store.dispatch(setTextFilter('car')); 

// sort by date 
store.dispatch(sortByDate()); 

// sort by amount
// store.dispatch(sortByAmount()); 

// set start date 
store.dispatch(setStartDate(500)); 

// set end date 
store.dispatch(setEndDate(1000)); 


// -----------------------------------------------------------------------
// Dispatch visible expenses 
// -----------------------------------------------------------------------
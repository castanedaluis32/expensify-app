import filtersReducer from '../../reducers/filters'; 
import moment from 'moment'; 


// -----------------------------------------------------------------------
// Filters Reducer Default Values Test 

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' }); 
    expect(state).toEqual({
        text: '',
        sortBy: 'date', 
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month') 
    }); 
});

// -----------------------------------------------------------------------
// Filters Reducer Set Amount Test 

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' }); 
    expect(state.sortBy).toBe('amount'); 
}); 

// -----------------------------------------------------------------------
// Filters Reducer Set Sort By Date Test 

test('should set sortBy to date', () => {
    const currState = {
        text: '', 
        startDate: undefined, 
        endDate: undefined, 
        sortBy: 'amount'
    }; 
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currState, action);
    expect(state.sortBy).toBe('date'); 
}); 

// -----------------------------------------------------------------------
// Filters Reducer Set Text Filter Test 

test('should set text filter', () => {
    const text = 'cars';
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER', 
        text 
    });
    expect(state.text).toBe(text); 
}); 

// -----------------------------------------------------------------------
// Filters Reducer Set Start Date Test 

test('should set startDate filter', () => {
    const startDate = moment(); 
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE', 
        startDate 
     });
     expect(state.startDate).toBe(startDate); 
}); 

// -----------------------------------------------------------------------
// Filters Reducer Set End Date Test 

test('should set startDate filter', () => {
    const endDate = moment(); 
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE', 
        endDate 
     });
     expect(state.endDate).toBe(endDate); 
}); 
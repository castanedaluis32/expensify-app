import expensesReducer from '../../reducers/expenses'; 
import expenses from '../fixtures/expenses'; 

// -----------------------------------------------------------------------
// Expenses reducer default values test

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' }); 
    expect(state).toEqual([]);
});

// -----------------------------------------------------------------------
// Expenses reducer remove expense with valid id

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id 
    };
    const state = expensesReducer(expenses, action); 
    expect(state).toEqual([expenses[0], expenses[2]]);
});

// -----------------------------------------------------------------------
// Expenses reducer remove expense with invalid id

test('should not remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1' 
    };
    const state = expensesReducer(expenses, action); 
    expect(state).toEqual(expenses);
});


// -----------------------------------------------------------------------
// Expenses reducer add expense test 

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'this is a test', 
        note: 'note test',
        amount: 5,
        createdAt: 10 
    }
    const action = {
        type: 'ADD_EXPENSE', 
        expense 
    };
    const state = expensesReducer(expenses, action); 
    expect(state).toEqual([...expenses, expense]);
});


// -----------------------------------------------------------------------
// Expenses reducer edit expense test 

test('should edit an expense', () => {
    const updates = {
        id: '10',
        description: 'hi my name is', 
        note: 'edit test',
        amount: 15,
        createdAt: 15 
    };
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[0].id, 
        updates
    };
    const state = expensesReducer(expenses, action); 
    expect(state[0]).toEqual(updates);
});

// -----------------------------------------------------------------------
// Expenses reducer do not edit expense if not found test 

test('should not edit an expense if not found', () => {
    const updates = {
        description: 'hi my name is', 
        note: 'edit test',
        amount: 15,
        createdAt: 15 
    };
    const action = {
        type: 'EDIT_EXPENSE', 
        id: '15', 
        updates
    };
    const state = expensesReducer(expenses, action); 
    expect(state).toEqual(expenses);
});

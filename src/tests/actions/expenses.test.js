import { addExpense, editExpense, removeExpense } from '../../actions/expenses'; 


// -----------------------------------------------------------------------
// TESTING REMOVE_EXPENSE

test('should setup remove expense action object', () => {
    const action = removeExpense( { id: '123abc' } );
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});  

// -----------------------------------------------------------------------
// TESTING EDIT_EXPENSE

test('should setup edit expense action object', () => {
    const id = '123abc'; 
    const updates = { note: 'New note value' };
    const action = editExpense(id, updates); 
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id,
        updates
    });
}); 

// -----------------------------------------------------------------------
// TESTING ADD_EXPENSE

test('should setup add expense action object provided values', () => {
    const expenseData = {
        description: 'rent', 
        amount: 1095.00, 
        createdAt: 1000, 
        note: 'this was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    });
}); 

test('should setup add expense action object with default values', () => {
    const action = addExpense(); 
    const expectedMatch = {
        type: 'ADD_EXPENSE', 
        expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
    };
    expect(action).toEqual(expectedMatch); 
}); 
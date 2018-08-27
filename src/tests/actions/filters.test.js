import 
{ 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from '../../actions/filters';
import moment from 'moment'; 


// -----------------------------------------------------------------------
// SET_START_DATE TEST

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0) 
    }); 
}); 

// -----------------------------------------------------------------------
// SET_END_DATE TEST 

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0)); 
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0) 
    }); 
}); 

// -----------------------------------------------------------------------
// SET_TEXT_FILTER TESTS 

test('should generate set text filter action object with text value', () => {
    const text = 'test'; 
    const action = setTextFilter(text); 
    const expectedMatch = { 
        type: 'SET_TEXT_FILTER', 
        text 
     };
     expect(action).toEqual(expectedMatch); 
}); 

test('should generate set text filter action object without text value', () => {
    const text = ''; 
    const action = setTextFilter(); 
    const expectedMatch = { 
        type: 'SET_TEXT_FILTER', 
        text 
     };
     expect(action).toEqual(expectedMatch); 
}); 

// -----------------------------------------------------------------------
// SORT_BY_DATE TEST

test('should generate action object for sort by date', () => {
    const expectedMatch = {
        type: 'SORT_BY_DATE'
    };
    const action = sortByDate(); 
    expect(action).toEqual(expectedMatch); 
}); 

// -----------------------------------------------------------------------
// SORT_BY_AMOUNT

test('should generate action object for sort by amount', () => {
    const expectedMatch = {
        type: 'SORT_BY_AMOUNT'
    };
    const action = sortByAmount(); 
    expect(action).toEqual(expectedMatch); 
}); 
// ------------------------------------------------------
// Import required libraries 
import React from 'react'; 
import { connect } from 'react-redux'; 



// ------------------------------------------------------
// ExpenseList() 

const ExpenseList = (props) => (
    <div>

    </div>
); 


// ------------------------------------------------------
// MapStateToProps

const MapStateToProps = (state) => {
    return {
        expenses: state.expenses, 
        filters: state.filters 
    };
}; 



// ------------------------------------------------------
// Export 

export default connect(MapStateToProps)(ExpenseList); 



// ------------------------------------------------------
// ConnectedExpenseList()


const ConnectedExpenseList = connect( (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters 
    };
})(ExpenseList);
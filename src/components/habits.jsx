import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {

    handleIncrement = habit => {
        this.props.onIncrement(Habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(Habit);
    };
    
    handleDelete = (habit) =>  {
        this.props.onDelete(Habit);
    };
    

    render() {
        return (
            <ul>
               {
                   this.props.habits.map(habit =>(
                    <Habit 
                    key = {habit.id}
                    habit = {habit}
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement} 
                    onDelete = {this.handleDelete}
                    />
                   ))}
            </ul>
        );
    }
}

export default Habits;
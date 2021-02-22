import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits : [
            {key : 1, name : 'Reading', count : 0},
            {key : 2, name : 'Running', count : 0},
            {key : 3, name : 'Coding', count : 0},
        ]
    };

    handleIncrement = (habit) => {
       
    }

    handleDecrement = (habit) => {
       
    }

    handleDelete = (habit) => {
        
    }

    render() {
        return (
            <ul>
               {
                   this.state.habits.map(habit =>
                       <Habit key = {habit.key}habit = {habit} />
                   )}
            </ul>
        );
    }
}

export default Habits;
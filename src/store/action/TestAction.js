import * as ActionTypes from '../ActionTypes';

export function test_add() {
    return { type: ActionTypes.TEST_INCREMENT };
}

export function test_min() {
    return { type: ActionTypes.TEST_DECREMENT };
}
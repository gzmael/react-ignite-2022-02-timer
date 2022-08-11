import { Cycle } from '../../interfaces/cycle'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  SET_AMOUNT_SECONDS_PASSED = 'SET_AMOUNT_SECONDS_PASSED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}

export function setSecondsPassedAction(seconds: number) {
  return {
    type: ActionTypes.SET_AMOUNT_SECONDS_PASSED,
    payload: {
      seconds,
    },
  }
}

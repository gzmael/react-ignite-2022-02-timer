import { CyclesState } from '../../interfaces/cycle'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export function cyclesReducer(state: CyclesState, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(payload.newCycle)
        draft.activeCycleId = payload.newCycle.id
        draft.amountSecondsPassed = 0
      })
    case ActionTypes.FINISH_CURRENT_CYCLE: {
      const cycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )
      if (cycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[cycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const cycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )
      if (cycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        draft.cycles[cycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    }
    case ActionTypes.SET_AMOUNT_SECONDS_PASSED:
      return produce(state, (draft) => {
        draft.amountSecondsPassed = payload.seconds
      })
    default:
      return state
  }
}

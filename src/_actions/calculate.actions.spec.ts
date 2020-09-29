import * as calculateActions  from './calculate.actions'

describe('calculate reset action', () => {
    it('should reset calculate state vars to empty value', () => {
      const expectedAction = {
        type: calculateActions.CALCULATE_RESET,
        payload: {}
      }
      expect(calculateActions.calculateReset()).toEqual(expectedAction)
    })
})

describe('calculate update action', () => {
    it('should update calculate state vars', () => {
        const state = {
          next:      '4',
          total:     '5',
          operation: '+'
        }
        const expectedAction = {
            type: calculateActions.CALCULATE_UPDATE,
            payload: state
        }
        expect(calculateActions.calculateUpdate(state)).toEqual(expectedAction)
    })
})

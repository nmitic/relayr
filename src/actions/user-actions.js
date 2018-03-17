export const UPDATE_FILTER = 'device:filterDeveces';

export const filterDevice = (filter = '') => {
  return {
    type: UPDATE_FILTER,
    payload: {
      filter
    }
  }
}
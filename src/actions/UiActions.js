import axios from 'axios';

export function changeSort(value) {
  return {
    type: 'CHANGE_SORT',
    payload: { value }
  }
}

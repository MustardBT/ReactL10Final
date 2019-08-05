export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const reset = (count) => ({
  type: 'RESET',
  count
});

export const onCount = () => ({
  type: 'CHANGE',
});
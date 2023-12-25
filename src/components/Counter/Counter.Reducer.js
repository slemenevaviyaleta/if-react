export const counterReducer = (state, action) => {
  switch (action.type) {
    case 'decrement':
      if (state.name === 'children' && state.count > 0) {
        return {
          name: state.name,
          count: state.count - 1,
        };
      }
      if (state.name === 'adults' && state.count > 1) {
        return {
          name: state.name,
          count: state.count - 1,
        };
      }
      if (state.name === 'rooms' && state.count > 1) {
        return {
          name: state.name,
          count: state.count - 1,
        };
      }
      return {
        name: state.name,
        count: state.count,
      };

    case 'increment': {
      if (state.name === 'children' && state.count < 10) {
        return {
          name: state.name,
          count: state.count + 1,
        };
      }
      if (state.name === 'adults' && state.count < 30) {
        return {
          name: state.name,
          count: state.count + 1,
        };
      }
      if (state.name === 'rooms' && state.count < 30) {
        return {
          name: state.name,
          count: state.count + 1,
        };
      }
      return {
        name: state.name,
        count: state.count,
      };
    }
    default:
      return state;
  }
};

/* eslint-disable class-methods-use-this */
import initialState from './initialState';

class StateLoader {
  loadState() {
    try {
      const serializedState = localStorage.getItem('reddit.com.state');

      if (serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return this.initializeState();
    }
  }

  saveState(state) {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reddit.com.state', serializedState);
  }

  initializeState() {
    return initialState;
  }
}

export default StateLoader;

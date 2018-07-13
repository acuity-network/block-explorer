import createHistory from 'history/createBrowserHistory';

let customHistory;

export function getHistoryInstance() {
  return customHistory;
}

export function initializeHistory() {
  if (!customHistory) {
    customHistory = createHistory();
  }
}

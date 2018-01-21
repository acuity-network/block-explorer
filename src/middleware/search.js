export default ({ dispatch, getState }) => next => action => {
  next(action);
}

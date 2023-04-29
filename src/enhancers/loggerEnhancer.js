export const loggerEnhancer = store => next => action => {
    console.log(`Type of action: ${action.type}, Payload: ${action.payload},
    old state: ${JSON.stringify(store.getState())}`);
    return next(action);
}
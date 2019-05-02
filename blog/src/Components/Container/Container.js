import React from "react";
  
class Container extends React.Component {
    mapStateToActions = (setState, actionsMap) =>
    Object.keys(actionsMap).reduce(
      (finalActions, actionKey) => ({
        ...finalActions,
        [actionKey]: (...args) => setState(actionsMap[actionKey](...args)),
      }),
      {},
    )
    state = this.props.initialState;
    render() {
        return this.props.children({
            ...this.state,
            ...this.mapStateToActions(...)
        });
    }
}
export default Container;
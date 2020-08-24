import { TOGGLE_SIDE_MENU, TOGGLE_SHOW_PAGE } from '../../actions/ui_actions';

const defaultUI = {
    sideMenuSmall: true,
    onShowPage: false,
};

const uiReducer = (oldState = defaultUI, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case TOGGLE_SIDE_MENU:
            return Object.assign({}, oldState, { sideMenuSmall: !oldState.sideMenuSmall });
        case TOGGLE_SHOW_PAGE:
            return Object.assign({}, oldState, { onShowPage: !oldState.onShowPage });
        default:
            return oldState;
    }
};

export default uiReducer;
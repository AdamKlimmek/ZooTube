import { TOGGLE_SIDE_MENU } from '../../actions/ui_actions';

const defaultUI = {
    sideMenuSmall: true
};

const uiReducer = (oldState = defaultUI, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case TOGGLE_SIDE_MENU:
            return Object.assign({}, { sideMenuSmall: !oldState.sideMenuSmall });
        default:
            return oldState;
    }
};

export default uiReducer;
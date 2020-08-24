import { connect } from 'react-redux';

import { toggleSideMenu } from '../../actions/ui_actions';
import SideMenu from './side_menu';

const mapStateToProps = (state) => ({
    // currentUser: state.entities.users[state.session.currentUser],
    sideMenuSmall: state.ui.sideMenuSmall,
    onShowPage: state.ui.onShowPage
});

const mapDispatchToProps = (dispatch) => ({
    toggleSideMenu: () => dispatch(toggleSideMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
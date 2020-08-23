import { connect } from 'react-redux';

import SideMenu from './side_menu';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser],
    sideMenuSmall: state.ui.sideMenuSmall
});

export default connect(mapStateToProps, null)(SideMenu);
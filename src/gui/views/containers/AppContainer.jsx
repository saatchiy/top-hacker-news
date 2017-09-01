import * as React from 'react';
import HomeContainer from 'gui/views/containers/HomeContainer';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <HomeContainer app={this.props.app}/>
        );
    }
}

export default AppContainer;
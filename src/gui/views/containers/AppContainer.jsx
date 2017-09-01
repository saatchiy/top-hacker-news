import react from 'react';


class AppContainer extends react.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <HomeContainer app={this.props.app}/>
    }
}

export default AppContainer;
import * as React from 'react';
import TopCommentersContainer from 'gui/views/containers/TopCommentersContainer';
import TopStoriesContainer from 'gui/views/containers/TopStoriesContainer';
import HeaderComponent from 'gui/views/components/home/HeaderComponent';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home'>
                <HeaderComponent />
                <TopStoriesContainer app={this.props.app}/>
                <TopCommentersContainer app={this.props.app}/>
            </div>
        );
    }
}

export default HomeContainer;
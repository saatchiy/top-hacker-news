import * as React from 'react';
import TopCommentersContainer from 'gui/views/containers/TopCommentersContainer';
import TopStoriesContainer from 'gui/views/containers/TopStoriesContainer';


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home'>
                <TopStoriesContainer app={this.props.app}/>
                <TopCommentersContainer app={this.props.app}/>
            </div>
        );
    }
}

export default HomeContainer;
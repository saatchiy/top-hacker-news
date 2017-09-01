import * as React from 'react';
import GetTopStoriesActionPayload from 'core/dataretriever/actions/GetTopStoriesActionPayload';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let getTopStoriesAction = new GetTopStoriesActionPayload();
        this.props.app.getDispatcher().dispatch(getTopStoriesAction);
    }

    render() {
        <TopStoriesComponent />
    }
}

export default TopStoriesContainer;
import * as React from 'react';
import GetTopStoriesActionPayload from 'core/dataretriever/actions/GetTopStoriesActionPayload';
import TopStoriesComponent from 'gui/views/components/TopStoriesComponent';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let getTopStoriesAction = new GetTopStoriesActionPayload();
        this.props.app.getDispatcher().dispatch(getTopStoriesAction);
    }

    render() {
        return(
            <TopStoriesComponent />
        );
    }
}

export default TopStoriesContainer;
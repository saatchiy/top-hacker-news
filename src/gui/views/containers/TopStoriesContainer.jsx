import * as React from 'react';
import LoadTopStoryIDsActionPayload from 'core/dataretriever/actions/LoadTopStoryIDsActionPayload';
import TopStoriesComponent from 'gui/views/components/TopStoriesComponent';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let loadTopIDsAction = new LoadTopStoryIDsActionPayload();
        this.props.app.getDispatcher().dispatch(loadTopIDsAction);
    }

    render() {
        return(
            <TopStoriesComponent />
        );
    }
}

export default TopStoriesContainer;
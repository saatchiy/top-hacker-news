import * as React from 'react';
import LoadTopStoryIDsActionPayload from 'core/dataretriever/actions/LoadTopStoryIDsActionPayload';
import TopStoriesComponent from 'gui/views/components/TopStoriesComponent';

import * as ChangeConstants from 'core/stores/ChangeConstants';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this._initState();
    }

    _initState() {
        this.setState({
            stories: null
        })
    }

    componentDidMount() {
        let app = this.props.add;

        let storyStore = app.getStores().getStoryStore();
        storyStore.addEventListener(ChangeConstants.STORIES_LOADED, this._handleStoriesLoaded.bind(this));

        let loadTopIDsAction = new LoadTopStoryIDsActionPayload();
        app.getDispatcher().dispatch(loadTopIDsAction);
    }

    _handleStoriesLoaded() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        let topStories = storyStore.getTopStories();
        this.state({
            stories: topStories
        });
    }

    render() {
        let stories = this.state.stories;

        return(
            <TopStoriesComponent stories={stories}/>
        );
    }
}

export default TopStoriesContainer;
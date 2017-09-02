import * as React from 'react';
import LoadTopStoryIDsActionPayload from 'core/dataretriever/actions/LoadTopStoryIDsActionPayload';
import TopStoriesComponent from 'gui/views/components/topstories/TopStoriesComponent';

import * as ChangeConstants from 'core/stores/ChangeConstants';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this._initState();
    }

    _initState() {
        this.state = {
            stories: null
        };
    }

    componentDidMount() {
        let app = this.props.app;

        let storyStore = app.getStores().getStoryStore();
        storyStore.addListener(ChangeConstants.STORIES_LOADED, this._handleStoriesLoaded.bind(this));

        let loadTopIDsAction = new LoadTopStoryIDsActionPayload();
        app.getDispatcher().dispatch(loadTopIDsAction);
    }

    componentWillUnmount() {
        let app = this.props.app;
        
        let storyStore = app.getStores().getStoryStore();
        storyStore.removeListener(ChangeConstants.STORIES_LOADED, this._handleStoriesLoaded);
    }

    _handleStoriesLoaded() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        let topStories = storyStore.getTopStories();
        this.setState({
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
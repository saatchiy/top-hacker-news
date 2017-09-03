import * as React from 'react';
import LoadTopStoriesActionPayload from 'core/dataretriever/actions/LoadTopStoriesActionPayload';
import TopStoriesComponent from 'gui/views/components/topstories/TopStoriesComponent';

import * as ChangeConstants from 'core/stores/ChangeConstants';


class TopStoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this._initState();
    }

    _initState() {
        this.state = {
            stories: null,
            loading: false
        };
    }

    componentDidMount() {
        let app = this.props.app;

        let storyStore = app.getStores().getStoryStore();
        storyStore.addListener(ChangeConstants.STORIES_LOADED, this._handleStoriesLoaded.bind(this));

        this._loadTopStories();
    }

    componentWillUnmount() {
        let storyStore = this.props.app.getStores().getStoryStore();
        storyStore.removeListener(ChangeConstants.STORIES_LOADED, this._handleStoriesLoaded);
    }

    _loadTopStories() {
        let loadTopIDsAction = new LoadTopStoriesActionPayload();
        this.props.app.getDispatcher().dispatch(loadTopIDsAction);
        this.setState({
            loading: true
        });
    }

    _handleStoriesLoaded() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        let topStories = storyStore.getTopStories();
        this.setState({
            stories: topStories,
            loading: false
        });
    }

    render() {
        let stories = this.state.stories;
        let loading = this.state.loading;

        let actions = {
            refreshTopStories: this._loadTopStories.bind(this)
        }
        
        return(
            <TopStoriesComponent loading={loading} stories={stories} actions={actions}/>
        );
    }
}

export default TopStoriesContainer;
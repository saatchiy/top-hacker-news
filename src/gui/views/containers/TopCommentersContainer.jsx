import * as React from 'react';
import TopCommentersComponent from 'gui/views/components/topcommenters/TopCommentersComponent';
import * as ChangeConstants from 'core/stores/ChangeConstants';


class TopCommentersContainer extends React.Component {
    constructor(props) {
        super(props);

        this._initState();
    }

    _initState() {
        this.state = {
            loading: false,
            commenters: null
        }
    }

    componentDidMount() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        storyStore.addListener(ChangeConstants.TOP_COMMENTERS_LOADED, this._handleCommentersLoaded.bind(this));

        let guiStore = app.getStores().getGUIStore();
        guiStore.addListener(ChangeConstants.VIEW_STATE_CHANGED, this._handleViewStateChanged.bind(this));
    }

    componentWillUnmount() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        storyStore.removeListener(ChangeConstants.TOP_COMMENTERS_LOADED, this._handleCommentersLoaded);

        let guiStore = app.getStores().getGUIStore();
        guiStore.removeListener(ChangeConstants.VIEW_STATE_CHANGED, this._handleViewStateChanged);
    }

    _handleCommentersLoaded() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();

        // Getting list of top commenters from the store
        let commenters = storyStore.getTopCommenters();
        this.setState({
           loading: false,
           commenters: commenters 
        });
    }

    _handleViewStateChanged() {
        let app = this.props.app;
        let guiStore = app.getStores().getGUIStore();
        let loading = guiStore.isCommentersLoading();
        this.setState({
            loading: loading
        });
    }

    render() {
        let loading = this.state.loading;
        let commenters = this.state.commenters;

        return(
            <TopCommentersComponent loading={loading} commenters={commenters} />
        );
    }
}

export default TopCommentersContainer;
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

        this.setState({
            loading: true
        });
    }

    componentWillUnmount() {
        let app = this.props.app;
        let storyStore = app.getStores().getStoryStore();
        storyStore.removeListener(ChangeConstants.TOP_COMMENTERS_LOADED, this._handleCommentersLoaded);
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

    render() {
        let loading = this.state.loading;
        let commenters = this.state.commenters;

        return(
            <TopCommentersComponent loading={loading} commenters={commenters} />
        );
    }
}

export default TopCommentersContainer;
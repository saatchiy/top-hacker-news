import * as React from 'react';
import StoryComponent from 'gui/views/components/story/StoryComponent';
import RefreshButtonComponent from 'gui/views/components/topstories/RefreshButtonComponent';


class TopStoriesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleRefreshClick() {
        this.props.actions.refreshTopStories();
    }

    render() {

        let stories = this.props.stories;

        let storyCount = 0;
        let headerText = 'Loading Top Stories';

        let storiesSection = null;

        // If stories are not loaded yet, there is nothing to show,
        // no component will be created
        if(stories) {
            storyCount = stories.length;
            headerText = 'List of Top ' + storyCount + ' Stories';

            // Creating individual story components
            let storyComponents = stories.map((story) => {
                let key = story.getId();
                return (
                    <StoryComponent key={key} story={story} />
                );
            });

            storiesSection = (
                <div className='ts-list-container'>
                    <ul className='top-stories-list'>
                        {storyComponents}
                    </ul>
                </div>
            );
        }

        let actions = this.props.actions;

        return(
            <div className='top-stories'>
                <header className='top-stories-header'>
                    <div className='ts-header-container'>
                        <div>
                            {headerText}
                        </div>
                        <RefreshButtonComponent loading={this.props.loading} isSpinner={false} refresh={actions.refreshTopStories}/>
                    </div>
                </header>
                {storiesSection}
            </div>
        );
    }
}

export default TopStoriesComponent;
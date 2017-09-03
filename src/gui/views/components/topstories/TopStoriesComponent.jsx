import * as React from 'react';
import StoryComponent from 'gui/views/components/story/StoryComponent';


class TopStoriesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stories = this.props.stories;
        let storyCount = stories.length;
        let headerText = 'List of top ' + storyCount + ' stories';
        
        // Creating individual story components
        let storyComponents = stories.map((story) => {
            let key = story.getId();
            return (
                <StoryComponent key={key} story={story} />
            );
        });

        return(
            <div className='top-stories'>
                <header className='top-stories-header'>
                    <div className='ts-header-container'>
                        <div>
                            {headerText}
                        </div>
                        <div className='refresh-btn'>
                            <i className='fa fa-refresh' />
                        </div>
                    </div>
                </header>
                <div className='ts-list-container'>
                    <ul className='top-stories-list'>
                        {storyComponents}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopStoriesComponent;
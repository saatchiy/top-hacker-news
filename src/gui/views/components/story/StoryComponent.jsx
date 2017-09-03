import * as React from 'react';


class StoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let story = this.props.story;
        let title = story.getTitle();

        return(
            <div className='story'>
                <div className='story-title'>
                    {title}
                </div>
            </div>
        );
    }
}

export default StoryComponent;
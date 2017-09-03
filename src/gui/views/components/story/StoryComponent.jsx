import * as React from 'react';


class StoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let story = this.props.story;
        let title = story.getTitle();
        let author = story.getAuthor();

        return(
            <div className='story'>
                <span className='story-title'>
                    {title}
                </span>
                <span className='story-author'>
                    <i className='fa fa-user-circle' />
                    <div>
                        {author}
                    </div>
                </span>
            </div>
        );
    }
}

export default StoryComponent;
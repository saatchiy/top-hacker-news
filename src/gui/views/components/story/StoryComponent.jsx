import * as React from 'react';
import UserIdComponent from 'gui/views/components/common/UserIdComponent';

class StoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let story = this.props.story;
        let title = story.getTitle();
        let author = story.getAuthor();
        let creationDate = story.getCreationTime();

        return(
            <div className='story'>
                <span className='story-title'>
                    {title}
                </span>
                <div className='additional-info'>
                    <div className='user-id-container'>
                        <UserIdComponent userId={author}/>
                    </div>
                    <div className='creation-date'>
                        <span>
                            {creationDate}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default StoryComponent;
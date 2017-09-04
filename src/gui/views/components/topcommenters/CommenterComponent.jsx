import * as React from 'react';
import UserIdComponent from 'gui/views/components/common/UserIdComponent';


class CommenterComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let commenter = this.props.commenter;
        let userId = commenter.getAuthor();
        let commentCount = commenter.getCommentCount();

        return(
            <div className='commenter'>
                <div className='user-id-container'>
                    <UserIdComponent userId={userId}/>
                </div>
                <span className='comment-count'>
                    <div>
                        {commentCount}
                    </div>
                    <i className='fa fa-comments-o'/>
                </span>
            </div>
        );
    }
}

export default CommenterComponent;
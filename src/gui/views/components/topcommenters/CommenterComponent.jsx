import * as React from 'react';


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
                <span className='user-id'>
                    <i className='fa fa-user-circle' />
                    <div>
                        {userId}
                    </div>
                </span>
                <span className='comment-count'>
                    {commentCount}
                </span>
            </div>
        );
    }
}

export default CommenterComponent;
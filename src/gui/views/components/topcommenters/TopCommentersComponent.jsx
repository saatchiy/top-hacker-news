import * as React from 'react';
import RefreshButtonComponent from 'gui/views/components/topstories/RefreshButtonComponent';


class TopCommentersComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let loading = this.props.loading;
        let commenters = this.props.commenters;
        let commentersListSection = null;
        let headerText = 'Top 10 commenters';

        if(commenters) {
            let commenterComponents = commenters.map((commenter) => {
                return(
                    <CommenterComponent commenter={commenter}/>
                );
            });

            commentersListSection = (
                <div className='tc-list-container'>
                    <ul className='tc-list'>
                        {commenterComponents}
                    </ul>
                </div>
            );
        }

        return(
            <div className='top-commenters'>
                <div className='tc-header-container'>
                    <div>
                        {headerText}
                    </div>
                    <RefreshButtonComponent loading={loading} isSpinner={true}/>
                </div>
                {commentersListSection}
            </div>
        );
    }
}

export default TopCommentersComponent;
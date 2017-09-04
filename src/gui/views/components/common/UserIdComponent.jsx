import * as React from 'react';


class UserIdComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let userId = this.props.userId;

        return(
            <span className='user-id'>
                <i className='fa fa-user-circle' />
                <div>
                    {userId}
                </div>
            </span>
        );
    }
}

export default UserIdComponent;
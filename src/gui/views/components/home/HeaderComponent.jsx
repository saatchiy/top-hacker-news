import * as React from 'react';


const APP_TITLE = 'TOP HACKER NEWS';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='app-header'>
                <div className='app-title'>
                    {APP_TITLE}
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
import * as React from 'react';
import TopCommentersComponent from 'gui/views/components/TopCommentersComponent';


class TopCommentersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TopCommentersComponent />
        );
    }
}

export default TopCommentersContainer;
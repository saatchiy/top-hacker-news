import * as React from 'react';


class RefreshButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleRefreshClick() {
        if(!this.props.isSpinner) {
            this.props.refresh();
        }
    }

    render() {
        let loading = this.props.loading;
        let isSpinner = this.props.isSpinner;
        let btnClassName = 'fa fa-refresh';

        if(isSpinner) {
            btnClassName = 'fa fa-spinner fa-pulse';

            if(!loading) {
                return null;
            }
        }

        if(loading) {
            btnClassName += ' spin';
        }

        let btn = (
            <i className={btnClassName} aria-hidden='true'/>
        );
        
        return(
            <div className='refresh-btn' onClick={this._handleRefreshClick.bind(this)}>
                {btn}
            </div>
        );
    }
}

export default RefreshButtonComponent;
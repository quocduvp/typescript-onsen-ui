import * as React from 'react';
import {ToolbarButton, Icon, Toolbar} from 'react-onsenui'

export interface MyProps {
    HandleNavigation?: any
}
class Header extends React.Component<MyProps,{}> {
    public render() {
        return (
            <Toolbar>
                <div className="left">
                    <ToolbarButton onClick={this.props.HandleNavigation}>
                        <Icon icon="md-menu" />
                    </ToolbarButton>
                </div>
                <div className="center">
                    Champions
                </div>
                <div className="right">

                </div>
            </Toolbar>
        );
    }
}

export default Header;
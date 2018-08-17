import * as React from 'react';

export interface MyProps {
    isDisplay? : boolean,
    HandleCloseNav?: any
}
class NavigationBar extends React.Component<MyProps,{}> {
    render() {
        const {HandleCloseNav} = this.props
        return (
            <aside className={"navigation"}>
                <div id={"navBar"} onClick={HandleCloseNav}>
                </div>
                <div id={"nav"}>
                    This navigation bar
                </div>
            </aside>
        );
    }
}

export default NavigationBar;
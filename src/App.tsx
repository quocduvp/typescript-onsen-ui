import * as React from 'react';
import * as ons from 'onsenui';
import './App.css';
import Header from "./components/Header";
import {Page} from "react-onsenui";
import NavigationBar from "./components/NavigationBar";

export interface MyState {
    isNav?: boolean
}

class App extends React.Component<{}, MyState> {
    state: MyState = {
        isNav: false
    }

    componentDidMount() {
        if (ons.platform.isIPhoneX()) {
            console.log("hello")
            document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
        }
    }

    HandleNav = () => {
        console.log('Nhu c')
        this.setState({isNav: !this.state.isNav})
    }
    CloseNavBar = () => {
        this.setState({isNav : false})
    }
    public render() {
        const {isNav} = this.state
        return (
            <Page renderToolbar={() => <Header HandleNavigation={this.HandleNav}/>}>
                {isNav ? <NavigationBar HandleCloseNav={this.CloseNavBar} isDisplay={true}/> : ''}
                <div>
                    {this.props.children}
                </div>
            </Page>
        );
    }
}

export default App;

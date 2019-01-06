import React, { Component } from 'react'
import { 
    Dropdown,
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

export default class ProfileIcon extends Component {

    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false
        }
    }
    toggle = ()=> {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render() {
        return (
            <div className="pa4 tc" style={{marginRight:'100px'}}>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}>
                 <div>
                <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="br-100 ba h3 w3 dib" alt="avatar"/>
                </div>
            </DropdownToggle>
                <DropdownMenu right className="b--transparent shadow-5" style={{ backgroundColor:'rgba(255,255,255,0.5'}}>
                <DropdownItem>View profile</DropdownItem>
                <DropdownItem onClick={()=>this.props.onRouteChange('signout')}>Sign out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
           
        </div>
        )
    }
}
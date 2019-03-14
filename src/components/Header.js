import React, { PureComponent } from 'react';
import {Link,NavLink} from 'react-router-dom'; 
import {menuStyle , fixedMenuStyle   } from '../helpers/styleHelper';
import {
    Container,
    Image,
    Menu,
    Visibility,
  } from 'semantic-ui-react';
class Header extends PureComponent {

    state = {
        menuFixed: null,
        overlayFixed: false,
      }


      stickOverlay = () => this.setState({ overlayFixed: true })

      stickTopMenu = () => this.setState({ menuFixed: true })
  
      unStickOverlay = () => this.setState({ overlayFixed: false })
  
      unStickTopMenu = () => this.setState({ menuFixed: null })
  
  

    render() {
        const { menuFixed  } = this.state;
        

        return (
            <div>
                    <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
        
            <Container text>
              <Menu.Item as={Link} exact="true" to="/">
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
              </Menu.Item>
              <Menu.Item header>Movieapp</Menu.Item>
              <Menu.Item as={NavLink}  exact={true}  to="/movies">Movies</Menu.Item>
              <Menu.Item  as={NavLink}  exact={true}  to="/movies/new">Add New</Menu.Item>

            
            </Container>
          </Menu>
        </Visibility> 
            </div>
        );
    }
}

 

export default Header;
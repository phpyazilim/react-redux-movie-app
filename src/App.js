  import React, { Component } from 'react';

  import {  Container  } from 'semantic-ui-react';

  import {Route,Link} from 'react-router-dom';
  import 'semantic-ui-css/semantic.min.css';




  import MoviesPage from './components/pages/MoviesPage';
  import Footer from './components/Footer'; 
  import Header from './components/Header'; 
  

  class App extends Component {
 
    render() {
      
    
      return (
        <div  >
            <Header />
          <Container text>
           
            <Route path='/movies' component={MoviesPage}></Route>
           


           
          </Container>

        
          <Footer />
        

    

        </div>
      );
    }
  }
    

  export default App;



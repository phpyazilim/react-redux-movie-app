  import React, { Component } from 'react';

  import {  Container  } from 'semantic-ui-react';

  import {Route} from 'react-router-dom';
  import 'semantic-ui-css/semantic.min.css';



  import NewMoviePage from './components/pages/NewMoviePage';
  import MoviesPage from './components/pages/MoviesPage';
  import Footer from './components/Footer'; 
  import Header from './components/Header'; 
  

  class App extends Component {
 
    render() {
      
    
      return (
        <div  >
            <Header />
          <Container text>
           
            <Route path='/movies' exact= {true}  component={MoviesPage}></Route>
            <Route path='/movies/new' exact= {true}  component={NewMoviePage}></Route>
            <Route path='/movie/:_id' exact= {true}  component={NewMoviePage}></Route>

           
          </Container>

        
          <Footer />
        

    

        </div>
      );
    }
  }
    

  export default App;



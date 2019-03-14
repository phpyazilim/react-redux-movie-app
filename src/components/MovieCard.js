import React from 'react'
import { Card,Grid} from 'semantic-ui-react'

const MovieCard = ({ movie }) => (
    
  
   
    <Grid.Column>
    <Card
image={movie.cover}
header={movie.title}
meta='Films'
description='Film Descriptions'
 
/>
    
</Grid.Column>

 





);

export default MovieCard;
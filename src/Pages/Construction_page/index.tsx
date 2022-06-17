import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import undraw from '../../assets/undraw.png';

import { 
  Container,
  Construction_img,
  Warning,
  Back_to_home
} from './styles';

const Construction_page: React.FC = () => {
  return (
    <Container>
      <Helmet>
        <title>Em construção</title>
      </Helmet>
      <Construction_img src = { undraw } />
      <Warning>
        <h1>Calma, time!</h1>
        <p>Em breve estará pronto<br/>para você usar...</p>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <Back_to_home>
            <p>Home</p>
          </Back_to_home>
        </Link>
      </Warning>
    </Container>
  )
}

export default Construction_page;
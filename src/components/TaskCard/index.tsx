import React from 'react';

import {
  Container,
  Header
} from './styles';

const TaskCard: React.FC = () => {
  return(
    <Container>
      <Header>
        <h3>☕ Alta</h3>
        <h3>01/12/2022</h3>
      </Header>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum urna sit amet risus feugiat, a efficitur ex laoreet. Curabitur ut justo varius, cursus quam ac, sodales orci. Nunc at placerat dui. Suspendisse a tincidunt magna, vitae molestie ipsum. Vivamus tempor eleifend diam, quis eleifend arcu dictum nec. Suspendisse potenti. Pellentesque elit sapien, fermentum ut accumsan sollicitudin, euismod eget enim.</h4>
    </Container>
  )
};

export default TaskCard;
import React, { useState } from 'react';

import { 
  Container,
  Task1,
  Task2,
  Task3,
  Task4,
  Task5,
  TaskDone,
  EmptyCheckbox,
  FilledCheckbox,
} from './styles';

const MemberCard: React.FC = () => {
  //Seleciona feedback para consultor ou para diretor
  const [isTaskDone1, setIsTaskDone1] = useState(false);
  const changeTaskDone1 = () => {
    setIsTaskDone1(!isTaskDone1);
  }
  const [isTaskDone2, setIsTaskDone2] = useState(false);
  const changeTaskDone2 = () => {
    setIsTaskDone2(!isTaskDone2);
  }
  const [isTaskDone3, setIsTaskDone3] = useState(false);
  const changeTaskDone3 = () => {
    setIsTaskDone3(!isTaskDone3);
  }
  const [isTaskDone4, setIsTaskDone4] = useState(false);
  const changeTaskDone4 = () => {
    setIsTaskDone4(!isTaskDone4);
  }
  const [isTaskDone5, setIsTaskDone5] = useState(false);
  const changeTaskDone5 = () => {
    setIsTaskDone5(!isTaskDone5);
  }

  const [isShowToDirexsActive, setIsShowToDirexsActive] = useState(true);
  
  return(
    <Container>
      <h3>Cesar Rolli Bevilaqua</h3>
      <Task1>
        <h1>Prioridade: alta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
        <TaskDone className={isShowToDirexsActive? 'active' : ''}>
          <p>Tarefa feita?</p>
          <EmptyCheckbox onClick={changeTaskDone1} className={isTaskDone1? 'active' : ''} />
          <FilledCheckbox onClick={changeTaskDone1} className={isTaskDone1? 'active' : ''} />
        </TaskDone>
      </Task1>

      <Task2>
        <h1>Prioridade: alta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
        <TaskDone className={isShowToDirexsActive? 'active' : ''}>
          <p>Tarefa feita?</p>
          <EmptyCheckbox onClick={changeTaskDone2} className={isTaskDone2? 'active' : ''} />
          <FilledCheckbox onClick={changeTaskDone2} className={isTaskDone2? 'active' : ''} />
        </TaskDone>
      </Task2>
      
      <Task3>
        <h1>Prioridade: alta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
        <TaskDone className={isShowToDirexsActive? 'active' : ''}>
          <p>Tarefa feita?</p>
          <EmptyCheckbox onClick={changeTaskDone3} className={isTaskDone3? 'active' : ''} />
          <FilledCheckbox onClick={changeTaskDone3} className={isTaskDone3? 'active' : ''} />
        </TaskDone>
      </Task3>

      <Task4>
        <h1>Prioridade: alta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
        <TaskDone className={isShowToDirexsActive? 'active' : ''}>
          <p>Tarefa feita?</p>
          <EmptyCheckbox onClick={changeTaskDone4} className={isTaskDone4? 'active' : ''} />
          <FilledCheckbox onClick={changeTaskDone4} className={isTaskDone4? 'active' : ''} />
        </TaskDone>
      </Task4>
      
      <Task5>
        <h1>Prioridade: alta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus tuLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper massa vulputate volutpat scelerisque. Morbi et enim vehicula, viverra mi at, aliquet nisl. Morbi purus enim, malesuada non felis at, pulvinar semper mauris. Proin pretium, quam ac tempor mattis, lorem neque mollis ex, id finibus nunc mi sit amet elit. Morbi malesuada consequat nisl in vestibulum. Aliquam ut pulvinar lorem. Aenean vitae aliquet nisi. Quisque eget convallis elit. Aenean ultricies nulla lectus, et commodo erat dapibus et. Vestibulum sit amet interdum mi.rpis, condimentum ac porttitor ac, porta sit amet ipsum.</p>
        <TaskDone className={isShowToDirexsActive? 'active' : ''}>
          <p>Tarefa feita?</p>
          <EmptyCheckbox onClick={changeTaskDone5} className={isTaskDone5? 'active' : ''} />
          <FilledCheckbox onClick={changeTaskDone5} className={isTaskDone5? 'active' : ''} />
        </TaskDone>
      </Task5>
    </Container>
  )
};

export default MemberCard;
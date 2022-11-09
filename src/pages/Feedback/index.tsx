import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import SincAlerts from '../../components/SincAlerts';

import {
  Container,
  TargetConfig,
  EmptyCheckbox,
  FilledCheckbox,
  Wrapper,
  FeedbackItem,
  SelectInput,
  FeedbackButton,
  BlackBar,

  SidebarMenu,
  MembersSide,
  MenuItem,
  NotationIcon,
  TaskDoneIcon,
  SDRIcon,
  CalendarIcon,
  ProfessorsIcon,
  CloudIcon,
  DirexSide,
  PerformanceIcon,
  DirexIcon,
  BottomMenu,
  NotationBottomIcon,
  TaskDoneBottomIcon,
  CalendarBottomIcon,
  MenuBottomIcon,
} from './styles';

const Feedback: React.FC = () => {
  //Seleciona feedback para consultor ou para diretor
  const [isFeedbackForDirexActive, setIsFeedbackForDirexActive] = useState(false);
  const changeFeedbackTarget = () => {
    setIsFeedbackForDirexActive(!isFeedbackForDirexActive);
  }

  // Identifica quais diretores estão ativos
  const [isDirex1, setIsDirex1Active] = useState(false);
  const [isDirex2, setIsDirex2Active] = useState(false);
  const [isDirex3, setIsDirex3Active] = useState(false);
  const [isDirex4, setIsDirex4Active] = useState(false);
  const [isDirex5, setIsDirex5Active] = useState(false);
  const [isDirex6, setIsDirex6Active] = useState(false);

  // Identifica quais consultores estão ativos
  const [isMember1, setIsMember1Active] = useState(false);
  const [isMember2, setIsMember2Active] = useState(false);
  const [isMember3, setIsMember3Active] = useState(false);
  const [isMember4, setIsMember4Active] = useState(false);
  const [isMember5, setIsMember5Active] = useState(false);
  const [isMember6, setIsMember6Active] = useState(false);
  const [isMember7, setIsMember7Active] = useState(false);
  const [isMember8, setIsMember8Active] = useState(false);
  const [isMember9, setIsMember9Active] = useState(false);
  const [isMember10, setIsMember10Active] = useState(false);
  const [isMember11, setIsMember11Active] = useState(false);
  const [isMember12, setIsMember12Active] = useState(false);
  const [isMember13, setIsMember13Active] = useState(false);
  const [isMember14, setIsMember14Active] = useState(false);
  const [isMember15, setIsMember15Active] = useState(false);
  const [isMember16, setIsMember16Active] = useState(false);
  const [isMember17, setIsMember17Active] = useState(false);
  const [isMember18, setIsMember18Active] = useState(false);
  const [isMember19, setIsMember19Active] = useState(false);
  const [isMember20, setIsMember20Active] = useState(false);
  const [isMember21, setIsMember21Active] = useState(false);
  const [isMember22, setIsMember22Active] = useState(false);
  const [isMember23, setIsMember23Active] = useState(false);
  const [isMember24, setIsMember24Active] = useState(false);
  const [isMember25, setIsMember25Active] = useState(false);
  const [isMember26, setIsMember26Active] = useState(false);
  const [isMember27, setIsMember27Active] = useState(false);
  const [isMember28, setIsMember28Active] = useState(false);
  const [isMember29, setIsMember29Active] = useState(false);
  const [isMember30, setIsMember30Active] = useState(false);


  return (
    <Container>
      <Header />
      <Helmet>
        <title>Feedback</title>
      </Helmet>
      <SincAlerts />
      <TargetConfig>
        <h3>Diretor?</h3>
        <EmptyCheckbox onClick={changeFeedbackTarget} className={isFeedbackForDirexActive? 'active' : ''} />
        <FilledCheckbox onClick={changeFeedbackTarget} className={isFeedbackForDirexActive? 'active' : ''} />
        <p className={isFeedbackForDirexActive? '' : 'active'}>Não</p>
        <p className={isFeedbackForDirexActive? 'active' : ''}>Sim</p>
      </TargetConfig>


      <Wrapper className={isFeedbackForDirexActive? '' : 'active'}>
        <FeedbackItem>
          <h3>Selecione o consultor</h3>
          <SelectInput>
            <option className={isMember1? '' : 'active'} value=''>Selecione uma opção</option>
            <option className={isMember2? '' : 'active'} value=''>lalala</option>
            <option className={isMember3? '' : 'active'} value=''>lalala</option>
            <option className={isMember4? '' : 'active'} value=''>lalala</option>
            <option className={isMember5? '' : 'active'} value=''>lalala</option>
            <option className={isMember6? '' : 'active'} value=''>lalala</option>
            <option className={isMember7? '' : 'active'} value=''>lalala</option>
            <option className={isMember8? '' : 'active'} value=''>lalala</option>
            <option className={isMember9? '' : 'active'} value=''>lalala</option>
            <option className={isMember10? '' : 'active'} value=''>lalala</option>
            <option className={isMember11? '' : 'active'} value=''>lalala</option>
            <option className={isMember12? '' : 'active'} value=''>lalala</option>
            <option className={isMember13? '' : 'active'} value=''>lalala</option>
            <option className={isMember14? '' : 'active'} value=''>lalala</option>
            <option className={isMember15? '' : 'active'} value=''>lalala</option>
            <option className={isMember16? '' : 'active'} value=''>lalala</option>
            <option className={isMember17? '' : 'active'} value=''>lalala</option>
            <option className={isMember18? '' : 'active'} value=''>lalala</option>
            <option className={isMember19? '' : 'active'} value=''>lalala</option>
            <option className={isMember20? '' : 'active'} value=''>lalala</option>
            <option className={isMember21? '' : 'active'} value=''>lalala</option>
            <option className={isMember22? '' : 'active'} value=''>lalala</option>
            <option className={isMember23? '' : 'active'} value=''>lalala</option>
            <option className={isMember24? '' : 'active'} value=''>lalala</option>
            <option className={isMember25? '' : 'active'} value=''>lalala</option>
            <option className={isMember26? '' : 'active'} value=''>lalala</option>
            <option className={isMember27? '' : 'active'} value=''>lalala</option>
            <option className={isMember28? '' : 'active'} value=''>lalala</option>
            <option className={isMember29? '' : 'active'} value=''>lalala</option>
            <option className={isMember30? '' : 'active'} value=''>lalala</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Proatividade</h3>
          <p>As pessoas proativas têm uma boa visão de futuro, identificando necessidades e antecipando problemas, o que confere vantagens para sua equipe e empresa.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Estudo</h3>
          <p>Atividade de estudo para executar projetos internos ou externos.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Trabalho em equipe</h3>
          <p>Interações em reuniões de equipe em que o membro participa ativamente das atividades.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Gentileza</h3>
          <p>Delicadeza, amabilidade, educação, linguajar ético.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>
        
        <FeedbackItem>
          <h3>Testa novas ideias</h3>
          <p>Quando novas ideias são apresentadas, o membro está aberto a testá-la para ver se funciona.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Otmizações</h3>
          <p>Qualquer tipo de melhorias em qualquer processo já existente na Sinc.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Estratégia</h3>
          <p>Quando o membro apresenta soluções estratégicas para determinado fim.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackButton><p>Enviar feedback</p></FeedbackButton>
        <BlackBar />
      </Wrapper>

      <Wrapper className={isFeedbackForDirexActive? 'active' : ''}>
        <FeedbackItem>
          <h3>Selecione o diretor</h3>
          <SelectInput>
            <option value=''>Selecione uma opção</option> 
            <option className={isDirex1? '' : 'active'} value=''>lalalal</option>
            <option className={isDirex2? '' : 'active'} value=''>lalalal</option>
            <option className={isDirex3? '' : 'active'} value=''>lalalal</option>
            <option className={isDirex4? '' : 'active'} value=''>lalalal</option>
            <option className={isDirex5? '' : 'active'} value=''>lalalal</option>
            <option className={isDirex6? '' : 'active'} value=''>lalalal</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Extrai o melhor do consultor</h3>
          <p>Diretor ouvinte que consegue entender quais atividades o consultor se destaca, e assim, consegue aproveitar todo o seu potencial.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Inspiração</h3>
          <p>Diretor exemplar que demonstra trabalho duro e bons resultados. Que tem postura e não deixa a peteca cair.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Empatia</h3>
          <p>Capacidade de ser compreensível se colocando no lugar do próximo, assim, podendo resolver situações de maneiras mais conveniente.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Boas relações</h3>
          <p>Que mantém relações saudáveis entre os membros da Sinc. Isso significa, que evita discussões e prefere diálogo amistosos.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Ambiente colaborativo</h3>
          <p>Organizar as atividades em equipe de uma forma que todos possam cooperar de alguma maneira sem sobrecarregar ninguém.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Proatividade</h3>
          <p>Quando problemas aparecem, o diretor já vem com a solução pronta. Pois, ele já considerava a possibilidade de entrar com o plano B. Em outras palavras, um diretor com tempo de reação curto para problemas inesperados.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Estratégico</h3>
          <p>Consegue colocar em progresso estratégias eficientes para gerar resultados consideráveis.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Planejamento</h3>
          <p>Estruturação da estratégia idealizada.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Reconhecimento</h3>
          <p>Com frequência reconhece os demais membros pelo discord ou publicamente em reuniões.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Celebra conquistas</h3>
          <p>Comemora cada conquista dando valor ao trabalho dos sinquers.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Incentiva</h3>
          <p>O diretor que incentiva boas práticas dentro da EJ e a arriscar novas ideias, pois a EJ pode ser um laboratório para o mercado externo.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Respeita</h3>
          <p>Respeita as pessoas e suas devidas opiniões.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackItem>
          <h3>Novas ideias</h3>
          <p>Diretor que acertar testar novas ideias, mente aberta.</p>
          <SelectInput>
            <option value=''>Selecione uma opção</option>
            <option value='nunca_vi'>Nunca vi</option>
            <option value='raramente'>Raramente</option>
            <option value='frequentemente'>Frequentemente</option>
            <option value='sempre'>Sempre</option>
          </SelectInput>
        </FeedbackItem>

        <FeedbackButton><p>Enviar feedback</p></FeedbackButton>
        <BlackBar />
      </Wrapper>

      <SidebarMenu>
        <MembersSide>
          <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <TaskDoneIcon />
              <span>Tarefas</span>
            </MenuItem>
          </Link>
         
          <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <NotationIcon />
              <span>Apontamento</span>
            </MenuItem>
          </Link>
          
          <a href='https://app.pipefy.com/organizations/300611579' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <SDRIcon />
              <span>Pipefy</span>
            </MenuItem>
          </a>
      
          <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <CalendarIcon />
              <span>Calendário</span>
            </MenuItem>
          </Link>

          <Link to = {'/parcerias'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <ProfessorsIcon />
              <span>Parcerias</span>
            </MenuItem>
          </Link>

          <a href='https://drive.google.com/drive/u/1/folders/0BPfgOzEMjWhWUh6ZFVLMnFlTDg?resourcekey=0-PxBaFB5bYbpdzlfv736BVA' style={{ textDecoration: 'none' }}>
            <MenuItem>
              <CloudIcon />
              <span>Drive</span>
            </MenuItem>
          </a>
          
          <Link to = {'/feedback'} style={{ textDecoration: 'none' }}>
            <MenuItem className='active'>
              <PerformanceIcon />
              <span>Feedback</span>
            </MenuItem>
          </Link>
        </MembersSide>

        <DirexSide>
          <Link to = {'/direx'} style={{ textDecoration: 'none' }}>
            <MenuItem>
              <DirexIcon />
              <span>Diretoria</span>
            </MenuItem>
          </Link>
        </DirexSide>
      </SidebarMenu>
      
      <BottomMenu>
        <Link to = {'/tarefas'} style={{ textDecoration: 'none' }}>
          <TaskDoneBottomIcon />
        </Link>
        <Link to = {'/apontamento'} style={{ textDecoration: 'none' }}>
          <NotationBottomIcon />
        </Link>
        <Link to = {'/calendario'} style={{ textDecoration: 'none' }}>
          <CalendarBottomIcon />
        </Link>
        <Link to = {'/menu'} style={{ textDecoration: 'none' }}>
          <MenuBottomIcon />
        </Link>
      </BottomMenu>
    </Container>
  )
}

export default Feedback;
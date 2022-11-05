[ ] Alterar a aba de tarefas:
- Remover a parte de diretores
- Adição de tarefas é feita no Dashboard da Direx
- A aba Tarefas funciona com scroll vertical

[ ] Usar ... para mostrar ou não o que é da diretoria
``` js
    //Set Show to Direx

    const [isShowToDirexsActive, setIsShowToDirexsActive] = useState(true);

    <Direx className={isShowToDirexsActive? 'active' : ''}>
```
[ ] Alterar as cores do calendário (salvar cor aleatória e alterar no frontend)
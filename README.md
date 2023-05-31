# Objetivo
Unificar as plataformas utilizadas pela SincJr, visando otimizar a produtividade dos membros.

# Como baixar?
- Para editar o código, é necessário um editor de código, geralmente usamos o VS Code.
- É necessario instalar o Git, instale-o baixando pelo site oficial.
- Os comandos abaixo podem ser instalados via Prompt de Compando e pelo PowerShell.
- Sempre que instalar alguma coisa, feche o PowerShell/Prompt de Comando e reabra.
- Para alterar de HD via Prompt de Comando, vá até a raiz do HD atual e digite (caso você esteja em C:\ e queira ir para D:\ ): cd D:\
- Caso encontre algum erro para instalar o NodeJS, seguir o passo a passo do site: https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-installing-node-js-with-apt-using-a-nodesource-ppa
### Para Windows:
``` javascript
# Abra o Powershell como administrador e execute o seguinte comando
$ Set-ExecutionPolicy RemoteSigned

# Após executado, digite A para permitir a alteração e dê Enter

# Instale a versão LTS do NodeJS baixando no site oficial

# Depois de instalado o NodeJS, instale o Yarn pelo Prompt de Comando
$ npm install --global yarn

# Verifique se as instalações dos pacotes foram corretas e condizem com a versão do site
$ node --version
$ npm --version
$ yarn --version

# Ainda no Prompt de Comando, vá até a pasta desejada e clone o repositório
$ git clone https://github.com/SINCJunior/ArtemPro

# Entre no diretório
$ cd ArtemPro

# Instale as dependências
$ yarn

# Abra o projeto no VS Code
$ code .

# No terminal do VS Code, inicie o projeto
$ yarn start
```

### Para Ubuntu:
``` javascript
# Instale o NodeJS
$ sudo apt install nodejs

# E o instalador de pacotes NPM
$ sudo apt install npm

# E também o Yarn
$ npm install --global yarn

# Clone o repositório
$ git clone https://github.com/SINCJunior/ArtemPro

# Entre no diretório
$ cd ArtemPro

# Instale as dependências
$ yarn

# Abra o projeto no VS Code
$ code .

# No terminal do VS Code, inicie o projeto
$ yarn start
```

# Para iniciar um projeto em typescript (se for estudar backend):
``` javascript
$ mkdir [NOME DA PASTA]

$ cd [NOME DA PASTA]

$ yarn init -y

$ yarn add -D typescript

$ yarn tsc --init
```

# Funções
### Em 2022 usa-se:
- O Podio para _apontamento_;
- Pipefy para _controle do SDR_ e _professores parceiros_;
- Discord para _comunicação_;
- Google Drive para _armazenamento_.
- Google Agenda para _calendário_;

### O que iremos adicionar?
- _Cronômetro e Pomodoro_;
- _Tarefas_;
- _Timeline_;
- _Sistema de recompensa (reconhecimento)_;

# Versionamento
- __V 1.0.0:__ em sua primeira versão, iremos criar o serviço de apontamento (com cronômetro e Pomodoro), substituindo o Podio. O Mural da Sinc e as Tarefas também estarão em funcionamento. A plataforma (front, back e DB) será hospedada no Raspberry Pi 4 do Cesar Rolli, será feito backup do DB diariamente para o MongoDB. Os demais serviços serão apenas linkados no site. Também terá o controle e monitoramento da Diretoria.

- __V 1.0.1:__ iremos implementar a Timeline, DropDownMenu personalizado e os Filtros nas páginas de Apontamento e Tarefas.

- __V 1.0.2:__ os usuários irão adicionar foto de perfil para ter o funcionamento esperado do DropDownMenu. Adição do sistema de recompensa, semelhante aos tacos da Enfitec. Iremos implementar tela de loading e refatorar algumas partes do código para usar Grid-Areas, otimizando a UX. 


# Seguem alguns links úteis que usei para me capacitar e construir a ArtemPro

- Rocketseat: Twitter responsível com ReactJS 
https://www.youtube.com/watch?v=K-8z_4xvT3o&t=778s

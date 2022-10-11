# Na Trave

![decideai - projeto](./natrave.gif)

> Projeto desenvolvido no **FullStack Challenge** da Codar.me. A aplicação foi desenvolvida para permitir aos usuários a marcação de palpites para os jogos da Copa do Mundo 2022, ficando salvos em banco de dados, podendo ser consultados e alterados.


<br />

## Features Front-end
- [x] Criar pagina de SignUp para usuário realizar cadastro;
- [x] Criar página de login para usuário já cadastrados.
- [x] Criar página de dashboard listando todos os jogos filtrados por data através de chamando a API.
- [x] Permitir o usuário de marcar seu palpite em cada jogo e salvar em banco de dados.
- [x] Criar página de profile para o usuário consultar seus palpites salvos.
- [x] Bloquear a edição dos palpites na página de profile.
- [x] Permitir que o usuário logado veja palpites de outros usuários na página de profile.
- [x] Armazenar token JWT nos cookies.
- [x] Redirecionar usuário para tela de login sempre que realizar logout ou quando o token expirar.
- [x] Remover cookie com o token salvo ao fazer o logout.

### Features Front-end Adicionais
- [x] Retorno visual para o usuário sempre que enviar o palpite para o back-end através de toast.
- [x] Criar página de not found para as rotas não existentes.
- [x] Bloquear a edição dos palpites quando a data atual for mair que a data dos jogos.
- [x] Criar validação de senha na página de cadastro.
- [x] Permitir que o usuário visualize a senha digitada nas páginas de cadastro e login através de um botão.
- [x] Criar spinner para as páginas que realizam chamadas ao back-end e exibir em tela enquanto o retorno da chamada não é processado.

<br />

## Features Back-end
- [x] Criar rota post 'signup' para realizar o cadastro de novos usuários, criptografando senha e retornar o usuário com seu access token;
- [x] Criar rota post 'hunch' para o usuário realizar o cadastro/edição de palpites, permitir ação apenas para usuários existentes e com token válidos;
- [x] Criar rota get '/hunches/:username' para retornar os palpites do usuário;
- [x] Criar rota get '/games' para retornar a lista de jogos cadastrados no banco de dados;
- [x] Criar rota get '/login' para retornar o usuário que está sendo logado na aplicação, validando a senha criptografada e retornando o usuário com seu access token;
- [x] Criar schema e models do Prisma com as informações das tabelas para criação automatica no banco de dados;
- [x] Conectar o Prisma ao Planetscale para realizar importação automática das tabelas e estruturas do banco de dados;

### Features Back-end Adicionais
- [x] Criar rota get '/user' para retornar as informações do usuário logado na aplicação, validando o token jwt.
- [x] Criar middleware 'checksExistsUserAccount' para verificar se username e/ou e-mail já existe no banco de dados.
- [x] Criar middleware 'checksExistsGameId' para verificar se o gameId informado no momento do palpite existe no banco de dados.

<br />

## Tecnologias e ferramentas utilizadas
- React.JS (Vite)
- React Router DOM
- Tailwind CSS
- TypeScript
- Date-fns
- Formik
- Yup
- Planetscale
- Koa.JS
- Prisma
- TS Node Dev
- Json Web Token
- Bcrypt

Para acessar o projeto em produção [Clique aqui!](https://natrave.vercel.app/)
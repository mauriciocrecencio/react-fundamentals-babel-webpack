Com o objetivo de criar um projeto em **React** sem a ajuda de um inicializador de projetos como o create-react-app, estou configurando do zero o **Babel**, **Webpack** e seus loaders.

O **Babel** é a ferramenta responsável por realizar o downgrade de um código JavaScript mais moderno, JSX neste caso, em um código que o navegador consiga entende-lô.

Para realizar a configuração do **Babel** e do **React**, foi necessário instalar os seguintes pacotes:

**@babel/core**

- Como o próprio nome já diz, é o core do babel, as principais funcionalidades estão dentro dele.
  **@babel/preset-env**
- Responsável por entender quais funcionalidades e recursos estão no código JavaScript moderno que precisam ser transformadas em um código mais antigo
  @babel/cli
- É por ele que vamos executar os comandos de downgrade do código
  @babel/preset-react
- Parecido com o preset-env, porém, irá ser responsável exclusivamente para transformar os códigos em React para um código que o navegador compreenda
  clean-webpack-plugin
- Responsável por limpar os arquivos antigos de bundle gerados na pasta build
  html-webpack-plugin
- Responsável por injetar a tag script do bundle do webpack no arquivo public/index.html dinamicamente de acordo com a hash gerada
  webpack
- Core do webpack
  webpack-cli
- Linha de comando para utilizar o webpack

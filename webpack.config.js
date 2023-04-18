// É necessário utilizar common js para importar e exportar, pois quem irá executar esse arquivo é o Node
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// vai identificar o OS e adaptar o caminho relativo do arquivo, pois em outros OS a barra pode ser invertida \ ao invés de /
module.exports = {
  // caminho relativo do ponto de entrada da nossa aplicação
  // arquivo que tem o ReactDOM.render
  entry: path.resolve(__dirname, "transpiled", "index.js"),
  // caminho que deve salvar os arquivos de saída
  output: {
    path: path.resolve(__dirname, "build"),
    /* Os browsers criam caches de arquivos estáticos, e podem não atualizar o arquivo se houver mudança no conteúdo deles, pois o browser
     checa se houve mudança no nome e não no conteúdo.
     Por esse motivo, iremos adicionar uma hash ao nome do nosso arquivo de bundle para forçar ao navegador baixar o arquivo novamente */
    filename: "bundle[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Caminho relativo para o arquivo HTML onde queremos injetar o arquivo script do webpack
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};

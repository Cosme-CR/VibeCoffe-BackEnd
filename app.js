/*****************************************************************************************
 * Objetivo: API VibeCoffee
 * Data: 10/06/2026
 * Autor: Cosme Ribeiro
 * Versão: 1.0
 *****************************************************************************************/

// Import das bibliotecas
const express = require("express")
const cors = require("cors")
const boddyParser = require("body-parser")

// Import das controllers do projeto
const controlerCategoria = require("./controller/categoria/controler_categoria.js")
const controlerProduto = require("./controller/produto/controler_produto.js")

// Criando objeto para manipular JSON enviado no body
const boddyParserJSON = boddyParser.json()

// Criando objeto do express
const app = express()

// Configuração do CORS
const corsOptions = {
    origin: ["*"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"]
}

// Habilita CORS na API
app.use(cors(corsOptions))

//////////////////////////////////////////////////////////////////////////
// CATEGORIA
//////////////////////////////////////////////////////////////////////////

// Inserir categoria
app.post("/v1/vibecoffee/categoria", boddyParserJSON, async function(request,response){

    let dados = request.body
    let conteType = request.headers['content-type']

    let result = await controlerCategoria.inserirNovaCategoria(dados, conteType)

    response.status(result.status_code)
    response.json(result)

})

// Buscar categoria
app.get("/v1/vibecoffee/categoria/:id", async function(request,response){

    let id = request.params.id

    let result = await controlerCategoria.buscarCategoria(id)

    response.status(result.status_code)
    response.json(result)

})

// Listar categorias
app.get("/v1/vibecoffee/categoria", async function(request,response){

    let result = await controlerCategoria.listarCategoria()

    response.status(result.status_code)
    response.json(result)

})

// Atualizar categoria
app.put("/v1/vibecoffee/categoria/:id", boddyParserJSON, async function(request,response){

    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controlerCategoria.atualizarCategoria(
        dados,
        id,
        contentType
    )

    response.status(result.status_code)
    response.json(result)

})

// Deletar categoria
app.delete("/v1/vibecoffee/categoria/:id", async function(request,response){

    let id = request.params.id

    let result = await controlerCategoria.apagarCategoria(id)

    response.status(result.status_code)
    response.json(result)

})

//////////////////////////////////////////////////////////////////////////
// PRODUTO
//////////////////////////////////////////////////////////////////////////

// Inserir produto
app.post("/v1/vibecoffee/produto", boddyParserJSON, async function(request,response){

    let dados = request.body
    let conteType = request.headers['content-type']

    let result = await controlerProduto.inserirNovoProduto(dados, conteType)

    response.status(result.status_code)
    response.json(result)

})

// Buscar produto
app.get("/v1/vibecoffee/produto/:id", async function(request,response){

    let id = request.params.id

    let result = await controlerProduto.buscarProduto(id)

    response.status(result.status_code)
    response.json(result)

})

// Listar produtos
app.get("/v1/vibecoffee/produto", async function(request,response){

    let result = await controlerProduto.listarProdutos()

    response.status(result.status_code)
    response.json(result)

})

// Atualizar produto
app.put("/v1/vibecoffee/produto/:id", boddyParserJSON, async function(request,response){

    let contentType = request.headers['content-type']
    let id = request.params.id
    let dados = request.body

    let result = await controlerProduto.atualizarProduto(
        dados,
        id,
        contentType
    )

    response.status(result.status_code)
    response.json(result)

})

// Deletar produto
app.delete("/v1/vibecoffee/produto/:id", async function(request,response){

    let id = request.params.id

    let result = await controlerProduto.apagarProduto(id)

    response.status(result.status_code)
    response.json(result)

})

//////////////////////////////////////////////////////////////////////////
// INICIAR API
//////////////////////////////////////////////////////////////////////////

app.listen(8080, function(){
    console.log("API funcionando em http://localhost:8080")
})
















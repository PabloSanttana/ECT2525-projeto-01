const produtos = [
  {
    name: "Cogumelos Estufados",
    image:
      "https://image.freepik.com/fotos-gratis/deliciosos-pedacos-de-file-de-frango-com-cogumelos-e-aipo-estufado-em-cerveja-light_2829-1624.jpg",
    rating: 3,
    price: "R$12",
    type: "Sobremesa",
    id: 1,
  },
  {
    name: "Mousse de Maracujá",
    image:
      "https://receitasdamargot.com.br/wp-content/uploads/2018/03/Mousse-de-Maracuja-Receitas-da-Margot-3-1.jpg",
    rating: 5,
    price: "R$15",
    type: "Sobremesa",
    id: 2,
  },
  {
    name: "Macarrão espaguete",
    image:
      "https://image.freepik.com/fotos-gratis/macarrao-espaguete-almondegas-molho-de-tomate_88242-3435.jpg",
    rating: 4,
    type: "Prato principal",
    price: "R$20",
    id: 3,
  },
  {
    name: "Carne bovina",
    image:
      "https://media.istockphoto.com/photos/grilled-beef-steaks-on-platter-picture-id476780470",
    rating: 2,
    price: "R$12",
    type: "Prato principal",
    id: 4,
  },
  {
    name: "Filé de Peixe Grellado",
    image:
      "https://i.pinimg.com/originals/bc/c8/fe/bcc8fe7edaa56c0d9ddbff2ef89bea4f.jpg",
    price: "R$13",
    rating: 5,
    type: "Prato principal",
    id: 5,
  },
  {
    name: "Salada",
    image:
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-mista-1.jpg",
    rating: 5,
    type: "Outros",
    price: "R$13",
    id: 6,
  },
  {
    name: "Sushi",
    image:
      "https://media.istockphoto.com/photos/set-of-sushi-and-rolls-with-salmon-and-tuna-avocado-california-maki-picture-id1066110176?k=6&m=1066110176&s=612x612&w=0&h=aD-74pTAYfFR5wQa_jGdaqa8Dzjett7Sz2vfAniSKPM=",
    price: "R$15",
    rating: 5,
    type: "Outros",
    id: 7,
  },
];

module.exports = {
  async index(request, response) {
    return response.status(200).json(produtos);
  },
  async indexType(request, response) {
    const produtos_types = [
      {
        type: "Sobremesa",
        color: "#f7931e",
        id: 1,
        data: [
          {
            name: "Cogumelos Estufados",
            image:
              "https://image.freepik.com/fotos-gratis/deliciosos-pedacos-de-file-de-frango-com-cogumelos-e-aipo-estufado-em-cerveja-light_2829-1624.jpg",
            price: "R$12",
            id: 1,
          },
          {
            name: "Mousse de Maracujá",
            image:
              "https://receitasdamargot.com.br/wp-content/uploads/2018/03/Mousse-de-Maracuja-Receitas-da-Margot-3-1.jpg",
            price: "R$15",
            id: 2,
          },
        ],
      },
      {
        type: "Prato principal",
        color: "#39b54a",
        id: 2,
        data: [
          {
            name: "Macarrão espaguete",
            image:
              "https://image.freepik.com/fotos-gratis/macarrao-espaguete-almondegas-molho-de-tomate_88242-3435.jpg",
            price: "R$20",
            id: 3,
          },
          {
            name: "Carne bovina",
            image:
              "https://media.istockphoto.com/photos/grilled-beef-steaks-on-platter-picture-id476780470",
            price: "R$20",
            id: 4,
          },
          {
            name: "Filé de Peixe Grellado",
            image:
              "https://i.pinimg.com/originals/bc/c8/fe/bcc8fe7edaa56c0d9ddbff2ef89bea4f.jpg",
            price: "R$20",
            id: 5,
          },
        ],
      },
      {
        type: "Outros",
        color: "#ed1e79",
        id: 3,
        data: [
          {
            name: "Salada",
            image:
              "https://www.receiteria.com.br/wp-content/uploads/receitas-de-salada-mista-1.jpg",
            price: "R$13",
            id: 6,
          },
          {
            name: "Sushi",
            image:
              "https://media.istockphoto.com/photos/set-of-sushi-and-rolls-with-salmon-and-tuna-avocado-california-maki-picture-id1066110176?k=6&m=1066110176&s=612x612&w=0&h=aD-74pTAYfFR5wQa_jGdaqa8Dzjett7Sz2vfAniSKPM=",
            price: "R$15",
            id: 7,
          },
        ],
      },
    ];

    return response.status(200).json(produtos_types);
  },

  async show(request, response) {
    const { id } = request.params;
    const produto = await produtos.find((item) => item.id === Number(id));

    if (!produto) {
      return response.status(404).json({
        message: "Produto not found",
      });
    }

    return response.status(200).json(produto);
  },
};

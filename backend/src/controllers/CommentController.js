const comments = [
  {
    id: 1,
    produtoId: 1,
    image:
      "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg",
    name: "Rafaela Costa",
    comentario: "Recomendo, muito bom!!",
  },
  {
    id: 2,
    produtoId: 2,
    image:
      "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_960_720.jpg",
    name: "Rafaela Costa",
    comentario: "Recomendo, muito bom!!",
  },
  {
    id: 3,
    produtoId: 2,
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
    name: "Rebeca Silva",
    comentario: "Recomendo, muito bom!!",
  },
  {
    id: 4,
    produtoId: 3,
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
    name: "Rebeca Silva",
    comentario: "Recomendo, muito bom!!",
  },
  {
    id: 5,
    produtoId: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
    name: "Carlos Santos",
    comentario: "Recomendo, muito bom!!",
  },
  {
    id: 6,
    produtoId: 4,
    image:
      "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401_960_720.jpg",
    name: "Jessica Santana",
    comentario: "Recomendo, muito bom!!",
  },
];

module.exports = {
  async show(request, response) {
    const { id } = request.params;
    let comentarios = [];
    comentarios = await comments.filter((item) => {
      return item.produtoId.toString().includes(id);
    });

    if (!comentarios) {
      return response.status(404).json({
        message: "comments not found",
      });
    }
    return response.status(200).json(comentarios);
  },
};

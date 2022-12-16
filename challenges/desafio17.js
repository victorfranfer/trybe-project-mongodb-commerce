const qtdProdutos = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: qtdProdutos,
});

db.resumoProdutos.find(
  {},
  {
    franquia: 1,
    totalProdutos: 1,
    _id: 0,
  },
);
db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  "totalVoosDomestico": db.voos.count({
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica"
  }),
});

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
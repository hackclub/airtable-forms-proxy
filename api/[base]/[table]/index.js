const AirtablePlus = require("airtable-plus");

const API_KEY = process.env.AIRTABLE;

export default async function handler(req, res) {
  if(req.method == "OPTIONS") {
    return res.status(200).end()
  }

  const airtable = new AirtablePlus({
    baseID: req.query.base,
    apiKey: API_KEY,
    tableName: req.query.table,
  });
  
  const returnedByAirtable = await airtable.create(req.body);
  
  try {
    if (req.query.redirect == "blank"){
      res.status(204).end();
    }
    res.writeHead(302, { Location: req.query.redirect }).end();
  }
  catch {
    res.json(returnedByAirtable);
  }
}

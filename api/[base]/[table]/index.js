const AirtablePlus = require("airtable-plus");

const API_KEY = process.env.AIRTABLE;

export default async function handler(req, res) {
  const airtable = new AirtablePlus({
    baseID: req.query.base,
    apiKey: API_KEY,
    tableName: req.query.table,
  });
  
  const returnedByAirtable = await airtable.create(req.body);
  
  try {
    if (req.query.redirect) {
      res.writeHead(302, { Location: req.query.redirect }).end();
    } else {
      res.status(204).end();
    }
  } catch {
    res.json(returnedByAirtable);
  }
}

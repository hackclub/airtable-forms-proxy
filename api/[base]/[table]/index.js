const AirtablePlus = require("airtable-plus");

const API_KEY = process.env.AIRTABLE;

export default async function handler(req, res) {
  const airtable = new AirtablePlus({
    baseID: req.query.base,
    apiKey: API_KEY,
    tableName: req.query.table,
  });
  res.json(await airtable.create(req.body));
}

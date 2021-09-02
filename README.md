# Airtable Form Proxy

A simple proxy to help make custom forms instead of Airtable one's.

To use make a post request to `/api/appXXXXXXX/Table`. Where `appXXXXXXX` is your base ID and `Table` is your table name. 

Your post request body should have the field names in your Airtable base, for example if you have one field: `Name` your request body should look along the lines of this:

```js
{
  "Name": "Sam Poder"
}

```

In HTML form format this would look something along the lines of:

```html
<form action="/api/appXXXXXXX/Table" method="POST">
  <label for="Name">Name:</label><br>
  <input type="text" id="name" name="Name"><br>
  <input type="submit" value="Submit">
</form> 
```

It's important to note, that you will want to avoid a new page being opened on submit as this will return a JSON object. 

Our version of the proxy is hosted at [`https://airtable-forms-proxy.hackclub.dev`](https://airtable-forms-proxy.hackclub.dev). For non-HQ projects, we recommend your own deployment on Vercel with your own Airtable API key as the `AIRTABLE` environment variable.

Happy hacking!

\- Sam

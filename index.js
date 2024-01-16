const { transpile } = require('postman2markdown')

exports.handler = async function (event) {
  let body = JSON.parse(event.body)
  const markdown = transpile(body)
  const response = {
    statusCode: 200, 
    body: markdown
  }

  return response
}

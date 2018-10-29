export default async function (args) {
  try {
    const result = await fetch(args.url, extendFetchArgs(args))
    if (result.status >= 400) {
      throw new Error(result.status + ' ' + result.statusText)
    }
    return result.json()
  } catch (e) {
    throw e
  }
}

function extendFetchArgs ({ method, body, headers = {} }) {
  body && (body = JSON.stringify(body))

  headers = {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }

  return {
    method,
    headers,
    body
  }
}

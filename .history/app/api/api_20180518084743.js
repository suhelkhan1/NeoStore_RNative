const apiUrl = 'http://staging.php-dev.in:8844/trainingapp/api/'


function callApi(endpoint, token, options = {method: 'get'}) {
  const url = `${apiUrl}/${endpoint}`

  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'access_token': `${token}`,
    }
  })
  .then(res => {
    // console.log(res)
    return res.text()
  })
  .then(text => {
    // debugger
    if (text === 'OK') {
      return []
    }
    if (text.length === 0) {
      return []
    }
    return JSON.parse(text)
  })
}
/**
 * Product Details
 * @param {*} id
 */
export function getProductDetails(id) {
  return callApi('products/getDetail/' + id)
}
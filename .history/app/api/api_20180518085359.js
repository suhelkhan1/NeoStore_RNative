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
  .then((res) => {
    return res.json()
  })
}
/**
 * Product Details
 * @param {*} id
 */
export function getProductDetails(id) {
  return callApi('products/getDetail/' + id)
}
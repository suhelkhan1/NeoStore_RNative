const apiUrl = 'http://staging.php-dev.in:8844/trainingapp/api'

export class ApiService {
  callApi(endpoint, token, options = {method: 'get'}) {
    const url = `${apiUrl}/${endpoint}`
    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'access_token': `${token}`,
      }
    })
    .then((response) => {
      return response.json()
    })
  }
  /**
   * Product Details
   * @param {*} id
   */
  static getProductDetails(data) {
    return callApi('products/getDetail/' + '?product_id=' + data.product_id)
  }
}



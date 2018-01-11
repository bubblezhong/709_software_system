/**
 * 解析 JSON
 * @param {object} response HTTP RESPONSE
 * @returns {string} json string
 */
function parseJSON(response) {
  return response.json();
}


/**
 * 判断状态码是否是正常响应的状态码
 * @param {object} response http response
 * @returns {object} HTTP response
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {
  method: 'GET',
  credentials: 'include',
}) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(res => ({ res }))
    .catch(err => ({ err }));
}

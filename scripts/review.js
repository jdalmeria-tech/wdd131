document.addEventListener('DOMContentLoaded', () => {
  // Function to get query parameters from the URL
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    queryArray.forEach(param => {
      const [key, value] = param.split('=');
      if (params[decodeURIComponent(key)]) {
        // If the key already exists, convert it to an array and add the new value
        if (Array.isArray(params[decodeURIComponent(key)])) {
          params[decodeURIComponent(key)].push(decodeURIComponent(value).replace(/\+/g, ' '));
        } else {
          params[decodeURIComponent(key)] = [params[decodeURIComponent(key)], decodeURIComponent(value).replace(/\+/g, ' ')];
        }
      } else {
        params[decodeURIComponent(key)] = decodeURIComponent(value).replace(/\+/g, ' ');
      }
    });
    return params;
  }

  // Get query parameters
  const queryParams = getQueryParams();

  // Populate the review confirmation page with the query parameters
  document.getElementById('product').textContent = queryParams['products'] || 'N/A';
  document.getElementById('rating').textContent = queryParams['rating'] || 'N/A';
  document.getElementById('completeDate').textContent = queryParams['completeDate'] || 'N/A';
  document.getElementById('features').textContent = Array.isArray(queryParams['features[]']) ? queryParams['features[]'].join(', ') : queryParams['features[]'] || 'N/A';
  document.getElementById('review').textContent = queryParams['review'] || 'N/A';
  document.getElementById('user-name').textContent = queryParams['user-name'] || 'N/A';
});
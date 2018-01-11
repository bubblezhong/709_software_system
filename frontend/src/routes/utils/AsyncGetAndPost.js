module.exports = {
  async asyncGet(url) {
    try {
      const response = await fetch(url, {
        credentials: 'include',
      });
      const result = response.json();
      return result;
    } catch (error) {
      console.log('[error] ', error);
      return false;
    }
  },

  async asyncPost(url, value) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
        credentials: 'include',
      });
      const result = response.json();
      return result;
    } catch (error) {
      console.log('[error] ', error);
      return false;
    }
  },

  async asyncPut(url, value) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
        credentials: 'include',
      });
      const result = response.json();
      return result;
    } catch (error) {
      console.log('[error] ', error);
      return false;
    }
  },
};

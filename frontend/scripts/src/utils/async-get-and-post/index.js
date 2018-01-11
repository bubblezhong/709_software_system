module.exports = {
  async asyncGet(url) {
    console.log(`[Get URL]: ${url}`);
    try {
      const response = await fetch(url);
      const result = response.json();
      return result;
    } catch (error) {
      console.log('[error] ', error);
      return false;
    }
  },

  async asyncPost(url, value) {
    console.log(`[POST URL]: ${url}`);
    console.log('[POST DATA]:', value);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
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
      });
      const result = response.json();
      return result;
    } catch (error) {
      console.log('[error] ', error);
      return false;
    }
  },
};

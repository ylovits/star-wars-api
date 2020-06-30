import axios from "axios";

export const apiSearch = async (api, categ, query, cb, handleError) => {
  try {
    let res = await axios.get(`${api}${categ}/?search=${query}`);
    cb(res);
  } catch (err) {
    handleError(err);
  }
};
export const apiGetTitle = async (string, cb) => {
  try {
    let res = await axios.get(string);
    if (res.data.name) {
      cb(res.data.name);
    } else {
      cb(res.data.title);
    }
  } catch (err) {
    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

    console.error(err.response.data.error);
  }
};
export const apiGetList = (url, list, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      const retrivedItems = list;
      response.data.results.map((item, i) => {
        item.name
          ? retrivedItems.push({ text: item.name, id: i + 1 })
          : retrivedItems.push({ text: item.title, id: i + 1 });
      });
      if (response.data.next !== null) {
        apiGetList(response.data.next, retrivedItems, resolve, reject);
      } else {
        resolve(retrivedItems);
      }
    })
    .catch(error => {
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.error(error);
      reject("Something wrong. Please refresh the page and try again.");
    });
};

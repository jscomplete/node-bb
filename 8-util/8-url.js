// $ node 8-util/8-url.js

const url = require("url");

const urlString = "https://www.pluralsight.com/search?q=buna";

const urlObject = {
  protocol: "https",
  host: "www.pluralsight.com",
  search: "?q=buna",
  pathname: "/search",
};

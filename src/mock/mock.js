export default {
  install (Vue, options) {
    let axios = require("axios");
    let MockAdapter = require("axios-mock-adapter");
    let mock = new MockAdapter(axios);

    mock.onGet("/users").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
  }
}
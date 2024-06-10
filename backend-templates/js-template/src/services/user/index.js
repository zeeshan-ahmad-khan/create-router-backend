class UserService {
  /* 
    @method GET
    @endpoint /user
  */
  async find(query, req) {
    // do your logic here
    return {
      query,
    };
  }
  /* 
    @method GET
    @endpoint /user/:id
  */
  async get(id, query, req) {
    // do your logic here
    return {
      id,
      query,
    };
  }
  /* 
    @method POST
    @endpoint /user
  */
  async post(body, query, req) {
    // do your logic here
    return {
      body,
      query,
    };
  }
  /* 
    @method PATCH
    @endpoint /user
  */
  async patch(id, body, query, req) {
    // do your logic here
    return {
      id,
      body,
      query,
    };
  }
  /* 
    @method DELETE
    @endpoint /user/:id
  */
  async remove(id, query, req) {
    // do your logic here
    return {
      id,
      query,
    };
  }
  /* 
    @method PUT
    @endpoint /user/:id
  */
  async update(id, body, query, req) {
    // do your logic here
    return {
      id,
      body,
      query,
    };
  }
}

module.exports = UserService;

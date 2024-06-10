export class UserService {
  /* 
    @method GET
    @endpoint /user
  */
  async find(query: Record<string, any>, req: Record<string, any>) {
    // do your logic here
    return {
      query,
    };
  }
  /* 
    @method GET
    @endpoint /user/:id
  */
  async get(id: string, query: Record<string, any>, req: Record<string, any>) {
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
  async post(
    body: Record<string, any>,
    query: Record<string, any>,
    req: Record<string, any>
  ) {
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
  async patch(
    id: string,
    body: Record<string, any>,
    query: Record<string, any>,
    req: Record<string, any>
  ) {
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
  async remove(
    id: string,
    query: Record<string, any>,
    req: Record<string, any>
  ) {
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
  async update(
    id: string,
    body: Record<string, any>,
    query: Record<string, any>,
    req: Record<string, any>
  ) {
    // do your logic here
    return {
      id,
      body,
      query,
    };
  }
}

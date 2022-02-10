import { Server } from "http";
import request from "supertest";
import { app } from "../app";
describe("test endpoint", () => {
  let server: Server;
  let endpoint: request.SuperTest<request.Test>;
  beforeAll((done) => {
    server = app.listen(() => {
      endpoint = request(server);
      done();
    });
  });
  it("test GET /test status code must be 2XX", async () => {
    const res = await endpoint.get("/test");
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.body.hello).toBeDefined();
    expect(res.body.hello).toBe("World");
  });
  afterAll((done) => {
    server.close(done);
  });
});

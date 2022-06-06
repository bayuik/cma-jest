const { User } = require("../app/models/User");
const AuthenticationController = require("../app/controllers/AuthenticationController");

describe("AuthenticationController", () => {
  describe("#handleLogin", () => {
    it("should return a token", async () => {
      const user = {
        id: 1,
        email: "",
        password: "",
      };

      const authenticationController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(Promise.resolve(user)),
        },
        roleModel: {},
        bcrypt: {
          compare: jest.fn().mockReturnValue(Promise.resolve(true)),
        },
        jwt: {
          sign: jest.fn().mockReturnValue("token"),
        },
      });

      const req = {
        body: {
          email: "email",
          password: "password",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await authenticationController.handleLogin(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("#handleRegister", () => {
    it("should return a token", async () => {
      const user = {
        id: 1,
        email: "",
        password: "",
      };

      const authenticationController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(Promise.resolve(user)),
        },
        roleModel: {},
        bcrypt: {
          compare: jest.fn().mockReturnValue(Promise.resolve(true)),
        },
        jwt: {
          sign: jest.fn().mockReturnValue("token"),
        },
      });

      const req = {
        body: {
          email: "email",
          password: "password",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await authenticationController.handleRegister(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe("#handleGetUser", () => {
    it("should return a user", async () => {
      const user = {
        id: 1,
        email: "",
        password: "",
      };

      const authenticationController = new AuthenticationController({
        userModel: {
          findOne: jest.fn().mockReturnValue(Promise.resolve(user)),
        },
        roleModel: {},
        bcrypt: {
          compare: jest.fn().mockReturnValue(Promise.resolve(true)),
        },
        jwt: {
          sign: jest.fn().mockReturnValue("token"),
        },
      });

      const req = {
        params: {
          id: 1,
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await authenticationController.handleGetUser(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

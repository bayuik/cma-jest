const ApplicationController = require("./ApplicationController");

describe("ApplicationController", () => {
  describe("#handleGetRoot", () => {
    it("Should return a status code of 200", async () => {
      const applicationController = new ApplicationController();
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await applicationController.handleGetRoot(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
  describe("#handeNotFound", () => {
    it("Should return a status code of 404", async () => {
      const applicationController = new ApplicationController();
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await applicationController.handleNotFound(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe("#handleError", () => {
    it("Should return a status code of 500", async () => {
      const applicationController = new ApplicationController();
      const err = {};
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      await applicationController.handleError(err, req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe("#getOffsetFromRequest", () => {
    it("Should return an offset", async () => {
      const applicationController = new ApplicationController();
      const req = {
        query: {
          page: 1,
          pageSize: 10,
        },
      };

      const offset = applicationController.getOffsetFromRequest(req);

      expect(offset).toEqual(0);
    });
  });

  describe("#buildPaginationObject", () => {
    it("Should return a pagination object", async () => {
      const applicationController = new ApplicationController();
      const req = {
        query: {
          page: 1,
          pageSize: 10,
        },
      };
      const count = 10;

      const paginationObject = applicationController.buildPaginationObject(req, count);

      expect(paginationObject).toEqual({
        page: 1,
        pageCount: 1,
        pageSize: 10,
        count,
      });
    });
  });
});

const express = require("express");
const router = express.Router();
const enums = require("../json/enums.json");
const { createResponseObject } = require("../utils/utils");
const path = require("path");

module.exports = (app) => {
  // define all route imports here
  const userRoutes = require("./user");
  const roleRoutes = require("./role");
  const roomRoutes = require("./room");
  const messageRoutes = require("./message");
  const groupRoutes = require("./group");
  const expenseRoutes = require("./expense");
  const transactionRoutes = require("./pendingReceive");

  // define all routes here
  app.use("/user", userRoutes);
  app.use("/role", roleRoutes);
  app.use("/room", roomRoutes);
  app.use("/message", messageRoutes);
  app.use("/group", groupRoutes);
  app.use("/expense", expenseRoutes);
  app.use("/transaction", transactionRoutes);
  app.use("/images", express.static(path.join(__dirname, "../public/images")));
  /* Catch all */
  app.all("*", function (req, res) {
    res.status(enums.HTTP_CODES.BAD_REQUEST).json(
      createResponseObject({
        req: req,
        result: -1,
        message:
          "Sorry! The request could not be processed!, Maybe wrong route called.",
        payload: {},
        logPayload: false,
      })
    );
  });
};

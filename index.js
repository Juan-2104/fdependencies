const dotenv = require("dotenv");
dotenv.config();

const logger = require("./src/dependencies/bei-logger");
const { EncryptData, DecryptData } = require("./src/dependencies/crypto-utils");
const { isJson, serializeValues, serializeValue } = require("./src/dependencies/json-eval");
const { NotAuthorizedError, ValidaAPIKey } = require("./src/dependencies/secutils");
const { successResponse, errorResponse, sendCustomResponse } = require("./src/dependencies/handler");

module.exports = {
  logger,
  EncryptData,
  DecryptData,
  isJson,
  serializeValues,
  serializeValue,   
  NotAuthorizedError,
  ValidaAPIKey,
  successResponse, 
  errorResponse, 
  sendCustomResponse
};

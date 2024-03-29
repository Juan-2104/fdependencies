const logger = require('./bei-logger');

/**
 * Envía una respuesta exitosa con un código 200.
 * @param {Object} reply - Objeto de respuesta Fastify.
 * @param {Object} data - Datos a enviar en la respuesta.
 * @param {string} [message="Operation successful"] - Mensaje de éxito a registrar.
 */
function successResponse(reply, data, message = "Operation successful") {
    logger.debug(message);
    reply.code(200).send(data);
}

/**
 * Maneja y envía una respuesta de error.
 * @param {Object} reply - Objeto de respuesta Fastify.
 * @param {Error} error - Objeto de error.
 */
function errorResponse(reply, error) {
    logger.error(`Error: ${error.message}`);
    reply.code(error.status ? error.status : 500).send({
        errorMessage: error.message
    });
}

/**
 * Envía una respuesta personalizada.
 * @param {Object} reply - Objeto de respuesta Fastify.
 * @param {number} statusCode - Código de estado HTTP.
 * @param {Object} data - Datos a enviar en la respuesta.
 * @param {string} logMessage - Mensaje a registrar.
 */
function sendCustomResponse(reply, statusCode, data, logMessage) {
    logger.info(logMessage);
    reply.code(statusCode).send(data);
}

module.exports = {
    successResponse,
    errorResponse,
    sendCustomResponse
};

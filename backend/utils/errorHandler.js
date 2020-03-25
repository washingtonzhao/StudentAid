const errorHandler = apiRoute => async (req, res) =>
  await apiRoute(req, res).catch(e => res.status(e.output.statusCode).json(e));

module.exports = errorHandler;

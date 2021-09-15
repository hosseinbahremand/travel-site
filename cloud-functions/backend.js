exports.handler = function (event, context, callback) {
  console.log("betg");
  callback(null, {
    statusCode: 200,
    body: JSON.parse(event),
  });
};

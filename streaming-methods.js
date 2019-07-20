const grpc = require('grpc');

function bidiTwice(call) {
  call.on("data", function(data) {
    const { number } = data;
    if (number === 0) {
      call.end();
    }
    call.write({ number: Math.ceil(number ** 1.01) });
  });
  call.on("end", function() {
    call.end();
  });
}

module.exports = {
  bidiTwice,
}
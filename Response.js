class ApiResponse {
  constructor(status = "000", message = "000", result = "000") {
    this.status = status;
    this.message = message;
    this.result = result;
  }

  setStatus(status) {
    this.status = status;
  }

  setMessage(message) {
    this.message = message;
  }

  setResult(body) {
    this.result = body;
  }
}

module.exports = {
  ApiResponse,
};

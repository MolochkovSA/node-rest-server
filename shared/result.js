export default class Result {
  isSuccess;
  isFailure;

  constructor(result) {
    if (result instanceof Error) {
      this.isSuccess = false;
      this.error = result;
    } else {
      this.isSuccess = true;
      this.data = result;
    }
    this.isFailure = !this.isSuccess;
  }

}
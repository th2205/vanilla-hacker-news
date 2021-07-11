import axios, { AxiosStatic } from "axios";

class API {
  private axios: AxiosStatic;

  constructor() {
    this.axios = axios;
  }

  test(num: number) {
    console.log(num);
  }
}

export default new API();

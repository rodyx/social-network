import { httpClient } from "../http-client";

export const sendMessage = (data) => httpClient({
  method: 'POST',
  data
}).then(data => ({...data, time: new Date(), status: 'send'}))
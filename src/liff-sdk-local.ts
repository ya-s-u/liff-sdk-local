// https://developers.line.biz/ja/reference/liff/

let id: string;

const ready = new Promise((resolve) => {
  resolve();
});

const init = (
  config: { liffId: string },
  successCallback?: Function,
  errorCallback?: Function
) => {
  id = config.liffId;
  if (successCallback !== undefined) successCallback();
  return new Promise((resolve) => {
    resolve();
  });
}

const isInClient = () => {
  return true
}

const getProfile = () => {
  return new Promise((resolve) => {
    resolve({
      userId: "U4af4980629...",
      displayName: "Brown",
      pictureUrl: "https://example.com/abcdefghijklmn",
      statusMessage: "Hello, LINE!"
    });
  });
}

const closeWindow = () => {}

export { id, ready, init, isInClient, getProfile, closeWindow }
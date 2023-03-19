export class UserInfo {
  constructor({profileName, profileInfo}) {
    this._userName = profileName;
    this._userInfo = profileInfo;
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent
    }
  }

  setUserInfo({userName, userInfo}) {
    this._userName.textContent = userName;
    this._userInfo.textContent = userInfo;
  }
}

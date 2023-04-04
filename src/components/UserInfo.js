export class UserInfo {
  constructor({profileName, profileInfo, profileAvatar}) {
    this._userName = profileName;
    this._userInfo = profileInfo;
    this._userAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userInfo: this._userInfo.textContent
    }
  }

  setUserInfo({name, about, avatar, _id}) {
    this._userName.textContent = name;
    this._userInfo.textContent =  about;
    this._userAvatar.src = avatar;
    this.id = _id;
  }
}

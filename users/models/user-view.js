import BaseView from '../../shared/base-view.js';

export default class UserView extends BaseView {
  static fromEntity(dbUser) {
    return {
      _id: dbUser._id,
      username: dbUser.username,
      email: dbUser.email,
      sex: dbUser.sex,
      password: dbUser.password,
    };
  }
}
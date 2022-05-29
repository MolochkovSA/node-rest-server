import User from './models/user.js';
import BaseRepository from '../shared/base-repository.js';

class UserRepository extends BaseRepository {
  constructor() {
    super(User)
  }

  getAll = async () => {
    return this.find();
  }
}

export default new UserRepository();

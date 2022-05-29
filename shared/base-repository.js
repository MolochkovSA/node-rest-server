import mongoose from 'mongoose';

function isMongoSchema(obj){
  return obj.hasOwnProperty('schema') && obj.schema instanceof mongoose.Schema;
}

export default class BaseRepository {
  dbSchema;

  constructor(dbSchema) {
    if (this.constructor.name === 'BaseRepository') {
      throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
    }

    if (dbSchema == null || !isMongoSchema(dbSchema)) {
      throw new Error(`Can not create instance of ${this.constructor.name}: dbSchema is invalid!`);
    }

    this.dbSchema = dbSchema;
  }

  find = async (filter) => {
    return this.dbSchema.find(filter);
  }

  findById = async (id) => {
    return this.dbSchema.findById(id);
  }

  findOne = async (filter) => {
    return this.dbSchema.findOne(filter);
  }

  create = async (userCreateModel) => {
    return this.dbSchema.create(userCreateModel);
  }

  updateMany = async (filter, userUpdateModels) => {
    return this.dbSchema.updateMany(filter, userUpdateModels);
  }

  updateById = async (id, userUpdateModel) => {
    return this.dbSchema.findByIdAndUpdate(id, userUpdateModel, { new: true });
  }

  updateOne = async (filter, userUpdateModel) => {
    return this.dbSchema.updateOne(filter, userUpdateModel);
  }

  deleteMany = async (filter) => {
    return this.dbSchema.deleteMany(filter);
  }

  deleteById = async (id) => {
    return this.dbSchema.findByIdAndDelete(id);
  }

  deleteOne = async (filter) => {
    return this.dbSchema.deleteOne(filter);
  }

}
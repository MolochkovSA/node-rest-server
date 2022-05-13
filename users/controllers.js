class User {
  constructor(id, username, password, email) {
    this.id = id
    this.username = createUserProperty(username)
    this.password = createUserProperty(password)
    this.email = createUserProperty(email)
  }
}

class Controller {
  #arr = []
  #counter = 0
  create(data) {
    const user = new User(
      this.#counter,
      data.username,
      data.password,
      data.email
    )
    this.#arr.push(user)
    this.#counter += 1
    return 'data successfully upload'
  }
  read(id) {
    if (!isNaN(+id)) {
      let res = this.#arr.filter((item) => item.id === +id)
      if (res.length !== 0) {
        return res
      } else {
        return 'invalid id'
      }
    } else {
      return this.#arr
    }
  }
  update(id, data) {
    if (!isNaN(+id)) {
      let foundIndex = this.#arr.findIndex((items) => items.id === +id)
      if (foundIndex >= 0) {
        updateUserProperty(this.#arr[foundIndex], data, 'username')
        updateUserProperty(this.#arr[foundIndex], data, 'password')
        updateUserProperty(this.#arr[foundIndex], data, 'email')
        return 'data successfully update'
      } else {
        return 'invalid id'
      }
    } else {
      return 'invalid id'
    }
  }
  delete(id) {
    if (!isNaN(+id)) {
      let foundIndex = this.#arr.findIndex((items) => items.id === +id)
      if (foundIndex >= 0) {
        let res = this.#arr.splice(foundIndex, 1)
        return 'data successfully deleted'
      } else {
        return 'invalid id'
      }
    } else {
      return 'invalid id'
    }
  }
}

function createUserProperty(value) {
  if (value && typeof value === 'string') {
    return value
  } else {
    return undefined
  }
}
function updateUserProperty(oldObj, newObj, property) {
  if (
    newObj[property] &&
    oldObj.hasOwnProperty(property) &&
    typeof newObj[property] === 'string'
  ) {
    oldObj[property] = newObj[property]
  }
}
function checkId(arr, id) {
  if (!isNaN(+id)) {
    const foundIndex = arr.findIndex((items) => items.id === +id)
    if (foundIndex >= 0) {
      return foundIndex
    } else {
      return 'invalid id'
    }
  }
}

export { Controller }

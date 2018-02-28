module.exports = {
  development: {
    db: 'mongodb://127.0.0.1/graphql',
    app: {
      name: 'gdeAPI'
    }
  },
  production: {
    db: 'mongodb://<username>:<password>@<db>:59865/gde-api',
    app: {
      name: 'gdeAPI'
    }
  }
}

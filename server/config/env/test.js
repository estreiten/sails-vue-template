module.exports = {
  log: {
    level: 'error'
  },
  connections: {
    localDiskDb: {
      adapter: 'sails-disk',
      fileName: 'testDB.db'
    }
  },
  port: 1338
};

const { PORT = 3000, mongoUrl = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;
const regEx = /(?:https?):\/\/(w{3}\.)?(\S+)\.(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

module.exports = { mongoUrl, regEx, PORT };

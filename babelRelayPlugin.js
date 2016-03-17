const getBabelRelayPlugin = require('babel-relay-plugin');
// TODO: download and save from web
const schema = require('./schema.json');

module.exports = getBabelRelayPlugin(schema.data);
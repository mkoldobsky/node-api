var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CampaignSchema   = new Schema({
  id: String,
	name: String
});

module.exports = mongoose.model('Campaign', CampaignSchema);

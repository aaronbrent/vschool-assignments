var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;

var IssueSchema = new Schema({  
  title: String,
  description: String,
  upVote: number,
  downVote: number,
  rank: number,
  
});

var Issue = mongoose.model('Issue', friendSchema); 

module.exports = Issue;
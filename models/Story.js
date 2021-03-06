'use strict';

const mongoose = require('mongoose');
const storySchema = mongoose.Schema({
  'title': {
    type: String,
    required: true
  },
  'body': {
    type: String,
    required: true,
  },
  'created_at': {
    type: Date,
    default: Date.now
  },
  'category': {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  'created_by': {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {collection: 'stories'});

module.exports = mongoose.model('Story', storySchema);

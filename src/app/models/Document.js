const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Document = new Schema(
    {
        name: { type: String, maxLength:  255 },
        description: { type: String, maxLength: 600 },
        slug: { type: String, maxLength:3010},
      image: { type: String, maxLength:1000 },
      lynk: { type: String, maxLength:2515 },
      nganh: { type: String, maxLength:255 },
      nam: { type: String, maxLength:255 },
      document_id: { type: String, maxLength:2515 },
    }
);



module.exports = mongoose.model('Document', Document);
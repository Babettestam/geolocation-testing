import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const locationSchema = new Schema({
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  speed: {
    type: Number
  },
  appInBackground: {
    type: Boolean
  },
  accuracy: {
    type: Number
  },
  user: {
    type: String
  },
  timestamp: {
    type: Number
  },
  timeFormatted: {
    type: String
  },
  isSailing: {
    type: Boolean
  }
});
locationSchema.plugin(mongoosePaginate);
export default mongoose.model('Locations', locationSchema);

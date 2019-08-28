import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;
const appstateSchema = new Schema({
  background: {
    type: Boolean
  },
  isSailing: {
    type: Boolean
  },
  geoWatcherActive: {
    type: Boolean
  },
  timestamp: {
    type: Number
  },
  timeFormatted: {
    type: String
  },
  user: {
    type: String
  }
});
appstateSchema.plugin(mongoosePaginate);
export default mongoose.model('Appstate', appstateSchema);

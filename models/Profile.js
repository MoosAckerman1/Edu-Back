const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: false,
    default: "Destroyer",
  },
 
  ProfilePictureLink: {
    type: String,
    required: false,
    default: "manga.com/nana"
  },

  ThemeID: {
    type: Number,
    min: 0,
    max: 5,
    required: false,
    default: "0"
  },

  ShownShowcases: {
    type: [Boolean],
    validate: [arrayLimit, '{PATH} exceeds the limit of 3'],
    required: false,
  },

  
  FavoriteGroups: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 3'],
    required: false,
    default: "31313,11331313,131314"
  },


   Level: {
    type: String,
    required: false,
    default: "23"
},


  SubLevel1: {
    type: String,
    required: false,
    default: "12"
},


  SubLevel2: {
    type: String,
    required: false,
    default: "14"
  },


  Achievements: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    required: false,
},


  Items: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    required: false,

  },
  Trophies: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    required: false,

  },
  Groups: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    required: false,
  },
  
  Friends: {
    type: [{
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      imgLink: String,
      description: String
    }],
    required: false,
  },

  

});

function arrayLimit(val) {
  return val.length <= 3;
}

ProfileSchema.statics.findByUserId = async function (userId) {
  return await this.findOne({ userId });
};

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;

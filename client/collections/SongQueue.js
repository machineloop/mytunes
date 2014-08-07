// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.playFirst);
  },

  playFirst: function() {
    if (this.length === 1) {
      this.models[0].play();
    }
  },

});

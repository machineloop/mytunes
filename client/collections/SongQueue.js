// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var self = this;
    this.on('add', function() {
      if (self.length === 1) {
        self.playFirst();
      }
    });

    this.on('ended', function() {
      self.endAndDequeue();
    });
    this.on('dequeue', function() {
      self.endAndDequeue();
    });
  },

  playFirst: function() {
    this.models[0].play();
  },

  endAndDequeue: function() {
    this.remove(this.models[0]);
    if (this.length > 0) {
      this.playFirst();
    }
  }
});

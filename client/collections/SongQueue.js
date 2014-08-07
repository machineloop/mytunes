// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var self = this;
    this.on('add', function() {
      if (self.length === 1) {
        self.playFirst();
      }
    });

    this.on('ended', function(target) {
      self.endAndDequeue(target);
    });
    this.on('dequeue', function(target) {
      self.endAndDequeue(target);
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  endAndDequeue: function(target) {
    this.remove(target);
    if (this.length > 0) {
      this.playFirst();
    } else {
      target.stop();
    }
  }
});

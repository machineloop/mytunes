// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  stop: function(){
    // Triggering an event here will also trigger the event on the collection
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

});

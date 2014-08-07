// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    var self = this;
    this.render();
    this.collection.on('add', function() {
      self.render();
    });
    this.collection.on('remove', function() {
      self.render();
    });
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});

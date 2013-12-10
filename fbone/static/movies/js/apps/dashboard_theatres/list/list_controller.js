var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

this.BambooApp.module("DashboardTheatresApp.List", function(List, App, Backbone, Marionette, $, _) {
  return List.Controller = (function(_super) {

    __extends(Controller, _super);

    function Controller() {
      Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.initialize = function() {
      var theatreView, theatres;
      theatres = App.request("theatre:movie:entities");
      theatreView = this.getTheatreView(theatres);
      return this.show(theatreView, {
        loading: true
      });
    };

    Controller.prototype.getTheatreView = function(theatres) {
      return new List.Theatres({
        collection: theatres
      });
    };

    return Controller;

  })(App.Controllers.Base);
});

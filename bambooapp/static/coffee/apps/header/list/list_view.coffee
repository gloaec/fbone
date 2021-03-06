@BambooApp.module "HeaderApp.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Layout extends App.Views.Layout
    template: "header/list/list_layout"

    events:
      'click .dropdown-menu a': (e)->
        $(e.target)
        .parents('ul.dropdown-menu')
        .siblings('.dropdown-toggle')
        .dropdown('toggle')

    regions:
      fooRegion: "#foo-region"

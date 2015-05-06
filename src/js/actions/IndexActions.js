// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var Reflux = require('reflux');
var merge = require('lodash/object/merge');
var Rest = require('../utils/Rest');
var Actions = require('./Actions');

var IndexActions = Reflux.createActions({
  'setup': {asyncResult: true},
  'getItems': {asyncResult: true},
  'getAggregate': {asyncResult: true}
});

IndexActions.setup.listen(function () {
>>>>>>> Added IndexFilters, added form interaction aspects to CheckBox, constrain Overlay height to within viewport
  var thisAction = this;
  thisAction.failed('TBD');
  /*
  Rest.get('/rest/preferences/index',
    {category: options.category})
    .end(function(err, res) {
      if (res.status === 400) {
        return Actions.logout();
      }
      if (err || !res.ok) {
        thisAction.failed(err, res.body || res.text);
      } else {
        thisAction.completed(res.body);
      }
    });
  */
});

IndexActions.getItems.listen(function (options) {
  var thisAction = this;
  var params = merge({}, {category: options.category}, options.params);
  if (params.query && (typeof params.query === 'object')) {
    params.query = params.query.fullText;
  }
  Rest.get('/rest/index/resources', params)
    .end(function(err, res) {
      if (res.status === 400) {
        return Actions.logout();
      }
      if (err || !res.ok) {
        return thisAction.failed(err, res.body || res.text);
      }
      thisAction.completed(res.body);
    });
});

module.exports = IndexActions;

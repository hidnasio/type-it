import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  beforeModel() {
    return this.get('directory').fetchActivities();
  },

  model() {
    return this.get('directory.data');
  }
});

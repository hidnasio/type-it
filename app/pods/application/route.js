import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  beforeModel() {
    return this.get('directory').fetch();
  }
});

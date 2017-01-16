import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  model() {
    return this.get('directory').list();
  }
});

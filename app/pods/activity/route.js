import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  model({ slug }) {
    return this.get('directory').find(slug);
  }
});

import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  model({ activitySlug }) {
    return this.get('directory').find(activitySlug);
  }
});

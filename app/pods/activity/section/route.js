import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  directory: inject.service(),

  model({ sectionSlug }) {
    let activitySlug = this.modelFor('activity').slug;

    return this.get('directory').find(activitySlug, sectionSlug);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('activity', this.modelFor('activity'));
  }
});

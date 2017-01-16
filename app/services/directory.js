import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
  ajax: inject.service(),

  fetchActivities() {
    return this.get('ajax').request("/activities.json").then((data) => {
      this.set('data', data);
    });
  }
});

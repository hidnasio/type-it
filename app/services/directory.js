import Ember from 'ember';

const { inject } = Ember;

export default Ember.Service.extend({
  ajax: inject.service(),

  fetch() {
    return this.get('ajax').request("/activities.json").then((data) => {
      this.set('data', data);
    });
  },

  list() {
    let children = this.get('data.children');
    let items = [];

    children.forEach((item) => {
      items.push({
        title: item.title,
        slug: item.slug
      });
    });

    return items;
  },

  find(slug) {
    return this.get('data.children').findBy('slug', slug);
  }
});

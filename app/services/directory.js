import Ember from 'ember';

const { inject, Object: EmberObject } = Ember;

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
      items.push(EmberObject.create({
        title: item.title,
        slug: item.slug
      }));
    });

    return items;
  },

  find(parentSlug, childSlug) {
    let parent = EmberObject.create(
      this.get('data.children').findBy('slug', parentSlug)
    );

    if (!childSlug) {
      return parent;
    }

    return EmberObject.create(parent.get('children').findBy('slug', childSlug));
  }
});

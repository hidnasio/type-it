import Ember from 'ember';

export function increment([a, ...params]) {
  return a + 1;
}

export default Ember.Helper.helper(increment);

import Ember from 'ember';

export function increment([a]) {
  return a + 1;
}

export default Ember.Helper.helper(increment);

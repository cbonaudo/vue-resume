import Vue from 'vue';
import Contact from '@/components/Contact';

describe('Contact.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Contact);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).toEqual('Contact Me');
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

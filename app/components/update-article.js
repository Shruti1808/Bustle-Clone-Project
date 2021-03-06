import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set ('updateArticleForm', true);
    },
    update (article) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});

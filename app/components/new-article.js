import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      var params = {
        title : this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        image: this.get('image')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
    }
  }
});

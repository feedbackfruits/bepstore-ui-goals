import ActivitiesBaseNewView from 'feedbackfruits-activities/components/new-view';
import layout from '../templates/components/new-view';

export default ActivitiesBaseNewView.extend({
  layout,

  init() {
    this._super(...arguments);
  },

  actions: {
    save(){
      /* jshint ignore:start */
      let save = this._super.bind(this, ...arguments);

      let attrs = {
        title: this.get('model.title'),
        description: this.get('model.description')
      };

      let model = this.get('store').createRecord('goal', {
        ...attrs
      }).save();

      this.get('model').deleteRecord();
      this.set('model', model);
      save();
      /* jshint ignore:end */
    }
  }
});

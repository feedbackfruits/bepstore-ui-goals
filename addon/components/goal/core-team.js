import layout from 'bepstore-goals/templates/components/goal/core-team';
import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  layout,
  session: service(),
  notify: service(),
  account: service(),

  hasGithub: Ember.computed('account.me.identities.[]', function(){
    return this.get('account').isAuthorized('github');
  }),

  actions: {
    addContributor(role) {
      this.get('team.contributors').pushObject(this.get('session.user'));
      if(role){
        let r = `head_${role}`;
        this.get('team').set(r , this.get('session.user'));
      }
      this.get('team').save().then(() => {
        this.get('notify').info('Hello there!');
      });
    }
  }
});

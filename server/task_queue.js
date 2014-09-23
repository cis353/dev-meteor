/* Task Statuses
   0 - new task
   1 - delegated
   2 - processing
*/

//Task Queue Processing (this needs updated to be more transactional before scaling to multiple processes or servers

/*Anshul commented! TODO*/
/*Meteor.setInterval(function(){
  console.log('processing task queue:');
  currentTask = TaskQueue.findOne({ status: 0 });

  if (currentTask){
    console.log('Found Task: ' + currentTask._id);
    //currentTask.status = 1;
    TaskQueue.update(currentTask._id, { $set: { status: 1, startTime: Date.now() }});

  }
}, 1000);*/



//This portion of code needs moved into an isolated process so that tasks don't have full access to the DB.  Just data that got passed in, and maybe a callback.
Router.map(function(){
  this.route('taskhandler', {
    where: 'server',
    path: '/task/:_id',
    action: function(){
      this.response.end(this.params._id);
    }
  });
});
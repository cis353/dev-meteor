Router.map(function(){
  //this.route('search', { path: '/search' });
  searchData = function(){
    //Session.set('search', this.params.q);
    return { 'q': this.params.q };
  }

  this.route('search', { path: '/search', data: searchData });
  this.route('search', { path: '/search/:q', data: searchData });
});

Template.search.events({
  'click .result': function(){
    //console.log(this._id);
    Router.go('/view/' + this._id);
  }
});

Template.search.results = function(){
  search = this.q;

  console.log('search: ' + search);
  //if there is search text then filter out wacky characters
  if ((search !== undefined) && (search !== '') && (search !== '!')){
    //search = search.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    keywords = search.split(' ');
    console.log('keywords: ' + keywords);

    var filter = [];
    keywords.forEach(function(text) {
      filter.push({ name: new RegExp(text, "i")} );
      //filter.push({tags: new RegExp(text,"i")});
    });
    return Records.find({ $and: filter }, { sort: { name: 1 } });
  }else{
    //return all rows if there is no search defined
    return Records.find({}, { sort: { name: 1 }});
  }
}
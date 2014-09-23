Template['settings/types'].types = function(){
  return Types.find({}, { sort: { name: 1 } });
}
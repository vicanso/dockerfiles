var Etcd = require('node-etcd');
var etcd = new Etcd('192.168.2.1', 4001);
var co = require('co');
var _ = require('lodash');
var key = 'varnish_backend';
var ttl = 3000;

// etcd.set("key", "value", { ttl: 60 }, console.log);

// etcd.mkdir('varnish_backend', console.dir);


// etcd.post('varnish_backend', 'test', {ttl : 300}, console.dir);

function *postBackend(data){
  var result;
  // try{
  //   result = yield function(done){
  //     etcd.get(key, done);
  //   };
  // }catch(err){
  //   console.error(err);
  //   result = null;
  // }
  var keys = _.keys(data).sort();
  var sortData = {};
  _.forEach(keys, function(key){
    sortData[key] = data[key]
  });
  var v = JSON.stringify(sortData);
  result = _.find(_.get(result, '[0].node.nodes'), function(tmp){
    return tmp.value === v;
  });
  if(result){
    return;
  }
  yield function(done){
    etcd.post(key, v, {ttl : ttl}, done);
  };
}

/**
 * [*getBackend 获取backend列表]
 * @yield {[type]} [description]
 */
function *getBackend(){
  var result = yield function(done){
    etcd.get(key, done);
  };
  var nodes = _.get(result, '[0].node.nodes');
  var backendList = [];
  _.forEach(nodes, function(node){
    backendList.push(JSON.parse(node.value));
  });
  return backendList;
}


co(function *(){
  yield postBackend({
    ip : '10.2.110.203',
    port : 8188,
    prefix : '/mobile',
    name : 'ytjuimobile'
  });
  // yield postBackend({
  //   ip : '10.2.110.211',
  //   port : 8092,
  //   prefix : '/portal',
  //   name : 'ytjui'
  // });
  // var backendList = yield getBackend();
  // console.dir(backendList);
}).catch(function(err){
  console.error(err);
});

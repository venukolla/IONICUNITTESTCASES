app.controller('LoginCtrl', function ($scope, $http, $state) {


  $scope.login = function (userName, password) {
    var url = "http://192.168.0.15:8080/com.umkc.rest/api/mongo/login?username="+userName+"&password="+password;
    console.log("Hello " + userName);
    console.log("usr "+url)


    $http.get(url).then(function(data) {

      tempDatasss = data.data.statusmessage;

      if(tempDatasss == 'success'){
        $state.go('home')
      }else{
        $state.go('login')
      }




    }),function(err){
      console.error(err);
    }

    //$http .get(url, {
    //  username: userName,
    //  password: password
    //}).then(function(response) {getJSONObject
    //  console.log(response);
    //
    //  $state.go('home');
    //}, function(err) {
    //  console.error(err);
    //})
  };
});

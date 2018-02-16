var todoApp = angular.module('TodoApp', []);

todoApp.controller('TodoController', function($scope, $http, $filter, $window) {

  // $scope.todos = [];

  // Get all todos
  // $http.get('/todos')
  //   .success(function(todos) {
  //     $scope.loaded = true;
  //     $scope.todos = todos;
  //   }).error(function(err) {
  //     alert(err);
  //   });

$scope.todo = [
    {id:null,text:'', descText:''}];

$scope.updatebtn= false;
$scope.todos=[]
$scope.nullvalues= false;;

$scope.id = localStorage.getItem('ids');

$scope.list_temp = localStorage.getItem('tasks');
              $scope.tasks_json= JSON.parse($scope.list_temp)


              if($scope.tasks_json==null){

                $scope.nullvalues= true;
                $scope.tasks_json=[]
              }


// $scope.todos = [
//     {id:1,text:'Book an appointment', descText:'Take the appointment from doctor', done:false},         
//     {id:2,text: 'Invest Money', descText:'Invest money in mutual funds', done:false}
//   ];

  
  $scope.addTodo = function() {

console.log($scope.id)

                    if($scope.id==null){
                      $scope.id=1;
                    }
   
   else{
    $scope.id++;
  }
  $scope.todos= $scope.tasks_json;
  console.log($scope.todos);
  console.log($scope.id)
    $scope.todos.push({id:$scope.id,text:$scope.todoText, desc:$scope.descText, done:false});
    localStorage.setItem('tasks', JSON.stringify($scope.todos));
     localStorage.setItem('ids',JSON.stringify($scope.id));
    $scope.todoText = '';
    $scope.descText='';
    console.log($scope.todos);
  
  };


$scope.change= function(id){
  console.log($scope.tasks_json)
  console.log(id)
  for(var i = 0; i < $scope.todos.length; i++){
                      
                          if($scope.todos[i].id === id) {
                           
                            $scope.todos[i].done = true;
                       
                           
                          }
                      }

                       
                        localStorage.setItem('tasks', JSON.stringify($scope.todos));
                     
      
   

                      
}



   $scope.update = function(id) {
     $scope.updatebtn= false;
    
    console.log(id)
   
     for(var i = 0; i < $scope.todos.length; i++){
                      
                          if($scope.todos[i].id === id) {
                           console.log($scope.todos)
                            $scope.todos[i].text = $scope.todoText;
                         $scope.todos[i].desc= $scope.descText;
                         localStorage.setItem('tasks', JSON.stringify($scope.todos));
                         console.log($scope.todos)
                         $scope.todoText = '';
                         $scope.descText='';
                           
                          }
                      }


  
  };





  $scope.edit = function(ids){
    $scope.updatebtn= true;
                  console.log('id to be edited', ids);
                  for(var i = 0; i < $scope.todos.length; i++){
                    console.log($scope.todos[i].id)
                      if($scope.todos[i].id === ids) {
                        $scope.id=angular.copy($scope.todos[i].id);
                         $scope.todoText = angular.copy($scope.todos[i].text);
                         $scope.descText= angular.copy($scope.todos[i].desc);
                         break;
                      }
                  }
              }

  


  $scope.clearCompleted = function (ids) {
        
         console.log('id to be deleted', ids);
                  for(var i = 0; i < $scope.todos.length; i++){
                  
                      if($scope.todos[i].id == ids) {
                        $scope.todos[i].deleted= true;
                        // $scope.temp.push($scope.todos[i])
                      }
                      
                  }
                  console.log($scope.todos)

                  localStorage.setItem('tasks', JSON.stringify($scope.todos));

       // $scope.todos= $scope.temp;
        console.log($scope.tasks_json)
    };

  

});
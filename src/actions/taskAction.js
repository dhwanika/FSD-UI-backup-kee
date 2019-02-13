import * as actionTypes from '../constants/actionTypes';

export function getTasksAction(params) {
  
    return { type: actionTypes.GET_TASK, params };
  
  }
export function getTasksSuccessAction(taskList) {
  
    return { type: actionTypes.GET_TASK_SUCCESS, taskList };
  
  }
  export function getTasksErrorAction(error) {
  
    return { type: actionTypes.GET_TASK_ERROR, error };
  
  }

  export function getParentTasksAction(params) {
    
      return { type: actionTypes.GET_PARENT_TASK, params };
    
    }
  export function getParentTasksSuccessAction(parentTaskList) {
    
      return { type: actionTypes.GET_PARENT_TASK_SUCCESS, parentTaskList };
    
    }
    export function getParentTasksErrorAction(error) {
    
      return { type: actionTypes.GET_PARENT_TASK_ERROR, error };
    
    }
  
  export function postTasksAction(params) {
      return { type: actionTypes.POST_TASK, params };
    }
    export function postTasksSuccessAction(taskInsert) {
      return { type: actionTypes.POST_TASK_SUCCESS, taskInsert };
    }
    export function postTasksErrorAction(error) {
      return { type: actionTypes.POST_TASK_ERROR, error };
    }

    export function putTasksAction(params) {
      
        return { type: actionTypes.PUT_TASK, params };
      
      }   
      
      export function putTasksSuccessAction(taskUpdate) {
      
        return { type: actionTypes.PUT_TASK_SUCCESS, taskUpdate };
      
      }  
      
      export function putTasksErrorAction(error) {
      
        return { type: actionTypes.PUT_TASK_ERROR, error };
      
      }
      export function deleteTaskAction(params) {
        
          return { type: actionTypes.DELETE_TASK, params };
        
        }     
        
        export function deleteTaskSuccessAction(taskDelete) {
        
          return { type: actionTypes.DELETE_TASK_SUCCESS, taskDelete };
        
        }  
        
        export function deleteTaskErrorAction(error) {
        
          return { type: actionTypes.DELETE_TASK_ERROR, error };
        
        }

      export function getUsersAction(params) {
         return { type: actionTypes.GET_USER, params };
        }
      export function getUsersSuccessAction(userList) {
        return { type: actionTypes.GET_USER_SUCCESS, userList };
        }
        export function getUsersErrorAction(error) {
        return { type: actionTypes.GET_USER_ERROR, error };
        }

        export function postUsersAction(params) {
          return { type: actionTypes.POST_USER, params };
        }
        export function postUsersSuccessAction(userInsert) {
          return { type: actionTypes.POST_USER_SUCCESS, userInsert };
        }
        export function postUsersErrorAction(error) {
          return { type: actionTypes.POST_USER_ERROR, error };
        }

        export function putUserAction(params) {
          
            return { type: actionTypes.PUT_USER, params };
          
          }   
          
          export function putUserSuccessAction(userUpdate) {
          
            return { type: actionTypes.PUT_USER_SUCCESS, userUpdate };
          
          }  
          
          export function putUserErrorAction(error) {
          
            return { type: actionTypes.PUT_USER_ERROR, error };
          
          }
        export function deleteUserAction(params) {
          return { type: actionTypes.DELETE_USER, params };
        }
        export function deleteUserSuccessAction(userDelete) {
          return { type: actionTypes.DELETE_USER_SUCCESS, userDelete };
        }
        export function deleteUserErrorAction(error) {
          return { type: actionTypes.DELETE_USER_ERROR, error };
        }

        export function getProjectsAction(params) {
          return { type: actionTypes.GET_PROJECT, params };
         }
       export function getProjectsSuccessAction(projectList) {
         return { type: actionTypes.GET_PROJECT_SUCCESS, projectList };
         }
         export function getProjectsErrorAction(error) {
         return { type: actionTypes.GET_PROJECT_ERROR, error };
         }
 
         export function postProjectsAction(params) {
           return { type: actionTypes.POST_PROJECT, params };
         }
         export function postProjectsSuccessAction(projectInsert) {
           return { type: actionTypes.POST_PROJECT_SUCCESS, projectInsert };
         }
         export function postProjectsErrorAction(error) {
           return { type: actionTypes.POST_PROJECT_ERROR, error };
         }
         export function putProjectAction(params) {
          
            return { type: actionTypes.PUT_PROJECT, params };
          
          }   
          
          export function putProjectSuccessAction(projectUpdate) {
          
            return { type: actionTypes.PUT_PROJECT_SUCCESS, projectUpdate };
          
          }  
          
          export function putProjectErrorAction(error) {
          
            return { type: actionTypes.PUT_PROJECT_ERROR, error };
          
          }

         export function deleteProjectAction(params) {
          return { type: actionTypes.DELETE_PROJECT, params };
        }
        export function deleteProjectSuccessAction(projectDelete) {
          return { type: actionTypes.DELETE_PROJECT_SUCCESS, projectDelete };
        }
        export function deleteProjectErrorAction(error) {
          return { type: actionTypes.DELETE_PROJECT_ERROR, error };
        }
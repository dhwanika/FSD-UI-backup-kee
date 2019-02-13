import { call, put, takeEvery } from 'redux-saga/effects';

import { getData, getDataApi, postDataApi, ENVIRONMENT, putDataApi , deleteDataApi } from '../api/apiCall';

import { getTasksSuccessAction, getTasksErrorAction,
  getParentTasksSuccessAction, getParentTasksErrorAction,
  postTasksSuccessAction, postTasksErrorAction,
  putTasksSuccessAction, putTasksErrorAction,
  deleteTaskSuccessAction, deleteTaskErrorAction,
  getUsersSuccessAction, getUsersErrorAction,
  postUsersSuccessAction, postUsersErrorAction,
  putUserSuccessAction, putUserErrorAction,
  deleteUserSuccessAction,deleteUserErrorAction,
  getProjectsSuccessAction, getProjectsErrorAction,
  postProjectsSuccessAction, postProjectsErrorAction,
  putProjectSuccessAction, putProjectErrorAction,
  deleteProjectSuccessAction, deleteProjectErrorAction} from '../actions/taskAction';

import * as actionTypes from '../constants/actionTypes';


export function* getTasks() {
    
      try {
         const response = yield call(getDataApi, '/tasks');
    
          yield put(getTasksSuccessAction(response.data));
    
      } catch (error) {
    
        yield put(getTasksErrorAction(error));
    
      }
    
    } 
    
    export function* watchGetTasks() {
    
      yield takeEvery(actionTypes.GET_TASK, getTasks);
    
    }

    export function* getParentTasks() {
      
        try {
           const response = yield call(getDataApi, '/parent-tasks');
      
            yield put(getParentTasksSuccessAction(response.data));
      
        } catch (error) {
      
          yield put(getParentTasksErrorAction(error));
      
        }
      
      }
       
      export function* watchGetParentTasks() {
      
        yield takeEvery(actionTypes.GET_PARENT_TASK, getParentTasks);
      
      }

    export function* postTasks(action) {
      debugger;
      
        try {
           const response = yield call(postDataApi, '/task', action.params);
      
            yield put(postTasksSuccessAction(response.data));
      
        } catch (error) {
      
          yield put(postTasksErrorAction(error));
      
        }
      
      }
      
       
      
      export function* watchPostTasks() {
      
        yield takeEvery(actionTypes.POST_TASK, postTasks);
      
      }

      export function* putTasks(action) {
          try {
             const response = yield call(putDataApi, `/task/${action.params.taskId}`, action.params);
        
              yield put(putTasksSuccessAction(response.data));
        
          } catch (error) {
        
            yield put(putTasksErrorAction(error));
        
          }
        
        }
        export function* watchPutTasks() {
        
          yield takeEvery(actionTypes.PUT_TASK, putTasks);
        
        }

        export function* deleteTask(action) {
          try {
             const response = yield call(deleteDataApi, `/task/${action.params}`);
        
              yield put(deleteTaskSuccessAction(response.data));
        
          } catch (error) {
        
            yield put(deleteTaskErrorAction(error));
        
          }
        
        }
        export function* watchDeleteTask() {
        
          yield takeEvery(actionTypes.DELETE_TASK, deleteTask);
        
        }

        export function* getUsers(action) {
          debugger;
            try {
               const response = yield call(getDataApi, `/users${action.params}`); 
               /* const response = yield call(getDataApi, `/users${action.params.name!==undefined&&action.params.name!==''?`?sort=${encodeURIComponent(action.params.name)}`:''}`+
               `${action.params.dir!==undefined&&action.params.dir!==''?`&sortDirection=${encodeURIComponent(action.params.dir)}`:''}`); */
                yield put(getUsersSuccessAction(response.data));
            } catch (error) {
              yield put(getUsersErrorAction(error));
            }
          }

           export function* watchGetUsers() {
            yield takeEvery(actionTypes.GET_USER, getUsers);
          }

          export function* postUsers(action) {
              try {
                 const response = yield call(postDataApi, '/user', action.params);
            yield put(postUsersSuccessAction(response.data));
            } catch (error) {
            yield put(postUsersErrorAction(error));
            }
            }
             export function* watchPostUsers() {
            yield takeEvery(actionTypes.POST_USER, postUsers);
            }

            export function* putUser(action) {
          try {
             const response = yield call(putDataApi, `/user/${action.params.userId}`, action.params);
        
              yield put(putUserSuccessAction(response.data));
        
          } catch (error) {
        
            yield put(putUserErrorAction(error));
        
          }
        
        }
        export function* watchPutUser() {
        
          yield takeEvery(actionTypes.PUT_USER, putUser);
        
        }
            export function* deleteUser(action) {
              try {
                 const response = yield call(deleteDataApi, `/user/${action.params}`);
            
                  yield put(deleteUserSuccessAction(response.data));
            
              } catch (error) {
            
                yield put(deleteUserErrorAction(error));
            
              }
            
            }
            export function* watchDeleteUser() {
            
              yield takeEvery(actionTypes.DELETE_USER, deleteUser);
            
            }

            export function* getProjects() {
              debugger;
                try {
                   const response = yield call(getDataApi, '/projects');
                    yield put(getProjectsSuccessAction(response.data));
                } catch (error) {
                  yield put(getProjectsErrorAction(error));
                }
              }
    
               export function* watchGetProjects() {
                yield takeEvery(actionTypes.GET_PROJECT, getProjects);
              }
    
              export function* postProjects(action) {
                  try {
                     const response = yield call(postDataApi, '/project', action.params);
                yield put(postProjectsSuccessAction(response.data));
                } catch (error) {
                yield put(postProjectsErrorAction(error));
                }
                }
                 export function* watchPostProjects() {
                yield takeEvery(actionTypes.POST_PROJECT, postProjects);
                }

                export function* putProject(action) {
                  try {
                     const response = yield call(putDataApi, `/project/${action.params.projectId}`, action.params);
                
                      yield put(putProjectSuccessAction(response.data));
                
                  } catch (error) {
                
                    yield put(putProjectErrorAction(error));
                
                  }
                
                }
                export function* watchPutProject() {
                
                  yield takeEvery(actionTypes.PUT_PROJECT, putProject);
                
                }

                export function* deleteProject(action) {
                  try {
                     const response = yield call(deleteDataApi, `/project/${action.params}`);
                
                      yield put(deleteProjectSuccessAction(response.data));
                
                  } catch (error) {
                
                    yield put(deleteProjectErrorAction(error));
                
                  }
                
                }
                export function* watchDeleteProject() {
                
                  yield takeEvery(actionTypes.DELETE_PROJECT, deleteProject);
                
                }
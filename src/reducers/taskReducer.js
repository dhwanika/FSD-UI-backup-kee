import initialState from './initialState';

import * as actionTypes from '../constants/actionTypes';

export function requestSummaryReducer(state = initialState.taskList, action) {
  
    switch (action.type) {
  
      case actionTypes.GET_TASK: {
  
        return {
  
          ...state
  
        };
  
      }
  
      case actionTypes.GET_TASK_SUCCESS: {
  
        try {
  
          return {
  
            ...state,
  
            taskList: action.taskList,
  
          };
  
        } catch (error) {
  
          return {
  
            ...state,
  
            taskList: state.taskList,
  
            error
  
          };
  
        }
  
      }
  
      case actionTypes.GET_TASK_ERROR: {
  
        return {
  
          ...state,
  
          taskList: [],
  
          error: action.error
  
        };
  
      }
  
      default: {
  
        return state;
  
      }
  
    }
  
  }

  export function requestParentTaskReducer(state = initialState.parentTaskList, action) {
    
      switch (action.type) {
    
        case actionTypes.GET_PARENT_TASK: {
    
          return {
    
            ...state
    
          };
    
        }
    
        case actionTypes.GET_PARENT_TASK_SUCCESS: {
    
          try {
    
            return {
    
              ...state,
    
              parentTaskList: action.parentTaskList,
    
            };
    
          } catch (error) {
    
            return {
    
              ...state,
    
              parentTaskList: state.parentTaskList,
    
              error
    
            };
    
          }
    
        }
    
        case actionTypes.GET_PARENT_TASK_ERROR: {
    
          return {
    
            ...state,
    
            parentTaskList: [],
    
            error: action.error
    
          };
    
        }
    
        default: {
    
          return state;
    
        }
    
      }
    
    }
  

  export function requestSummaryPostReducer(state = initialState.taskInsert, action) {
     switch (action.type) {
    case actionTypes.POST_TASK: {
    return {
     ...state
     };
    }
    case actionTypes.POST_TASK_SUCCESS: {
    try {
    return {
     ...state,
    taskInsert: action.taskInsert,
    };
    } catch (error) {
    return {
     ...state,
    taskInsert: state.taskInsert,
    error
    };
    }
     }
    case actionTypes.POST_TASK_ERROR: {
    return {
     ...state,
    taskInsert: [],
    error: action.error
    };
    }
    default: {
     return state;
    }
    }
    }
    
    export function requestSummaryPutReducer(state = initialState.taskUpdate, action) {
      
        switch (action.type) {
      
          case actionTypes.PUT_TASK: {
      
            return {
      
              ...state
      
            };
      
          }
      
          case actionTypes.PUT_TASK_SUCCESS: {
      
            try {
      
              return {
      
                ...state,
      
                taskUpdate: action.taskUpdate,
      
              };
      
            } catch (error) {
      
              return {
      
                ...state,
      
                taskUpdate: state.taskUpdate,
      
                error
      
              };
      
            }
      
          }
      
          case actionTypes.PUT_TASK_ERROR: {
      
            return {
      
              ...state,
      
              taskUpdate: [],
      
              error: action.error
      
            };
      
          }
      
          default: {
      
            return state;
      
          }
      
        }
      
      }

      export function requestSummaryDeleteReducer(state = initialState.taskDelete, action) {
        
          switch (action.type) {
        
            case actionTypes.DELETE_TASK: {
        
              return {
        
                ...state
        
              };
        
            }
        
            case actionTypes.DELETE_TASK_SUCCESS: {
        
              try {
        
                return {
        
                  ...state,
        
                  taskDelete: action.taskDelete,
        
                };
        
              } catch (error) {
        
                return {
        
                  ...state,
        
                  taskDelete: state.taskDelete,
        
                  error
        
                };
        
              }
        
            }
        
            case actionTypes.DELETE_TASK_ERROR: {
        
              return {
        
                ...state,
        
                taskDelete: [],
        
                error: action.error
        
              };
        
            }
        
            default: {
        
              return state;
        
            }
        
          }
        
        }
  
      export function requestUserReducer(state = initialState.userList, action) {
        switch (action.type) {
            case actionTypes.GET_USER: {
              return {
                ...state
              };
            }
            case actionTypes.GET_USER_SUCCESS: {
              try {
                return {
                  ...state,
                  userList: action.userList,
                };
              } catch (error) {
                return {
                  ...state,
                  userList: state.userList,
                  error
                };
              }
            }
        
            case actionTypes.GET_USER_ERROR: {
              return {
                ...state,
                userList: [],
                error: action.error
              };
            }
        default: {
              return state;
            }
          }
        }

        export function requestUserPostReducer(state = initialState.userInsert, action) {
          switch (action.type) {
         case actionTypes.POST_USER: {
         return {
          ...state
          };
         }
         case actionTypes.POST_USER_SUCCESS: {
         try {
         return {
          ...state,
          userInsert: action.userInsert,
         };
         } catch (error) {
         return {
          ...state,
          userInsert: state.userInsert,
         error
         };
         }
          }
         case actionTypes.POST_USER_ERROR: {
         return {
          ...state,
          userInsert: [],
         error: action.error
         };
         }
         default: {
          return state;
         }
         }
         }
         export function requestPutUserReducer(state = initialState.userUpdate, action) {
          
            switch (action.type) {
          
              case actionTypes.PUT_USER: {
          
                return {
          
                  ...state
          
                };
          
              }
          
              case actionTypes.PUT_USER_SUCCESS: {
          
                try {
          
                  return {
          
                    ...state,
          
                    userUpdate: action.userUpdate,
          
                  };
          
                } catch (error) {
          
                  return {
          
                    ...state,
          
                    userUpdate: state.userUpdate,
          
                    error
          
                  };
          
                }
          
              }
          
              case actionTypes.PUT_USER_ERROR: {
          
                return {
          
                  ...state,
          
                  userUpdate: [],
          
                  error: action.error
          
                };
          
              }
          
              default: {
          
                return state;
          
              }
          
            }
          
          }

         export function requestUserDeleteReducer(state = initialState.userDelete, action) {
          
            switch (action.type) {
          
              case actionTypes.DELETE_USER: {
          
                return {
          
                  ...state
          
                };
          
              }
          
              case actionTypes.DELETE_USER_SUCCESS: {
          
                try {
          
                  return {
          
                    ...state,
          
                    userDelete: action.userDelete,
          
                  };
          
                } catch (error) {
          
                  return {
          
                    ...state,
          
                    userDelete: state.userDelete,
          
                    error
          
                  };
          
                }
          
              }
          
              case actionTypes.DELETE_USER_ERROR: {
          
                return {
          
                  ...state,
          
                  userDelete: [],
          
                  error: action.error
          
                };
          
              }
          
              default: {
          
                return state;
          
              }
          
            }
          
          }
    

         export function requestProjectReducer(state = initialState.projectList, action) {
          switch (action.type) {
              case actionTypes.GET_PROJECT: {
                return {
                  ...state
                };
              }
              case actionTypes.GET_PROJECT_SUCCESS: {
                try {
                  return {
                    ...state,
                    projectList: action.projectList,
                  };
                } catch (error) {
                  return {
                    ...state,
                    projectList: state.projectList,
                    error
                  };
                }
              }
          
              case actionTypes.GET_PROJECT_ERROR: {
                return {
                  ...state,
                  projectList: [],
                  error: action.error
                };
              }
          default: {
                return state;
              }
            }
          }
  
          export function requestProjectPostReducer(state = initialState.projectInsert, action) {
            switch (action.type) {
           case actionTypes.POST_PROJECT: {
           return {
            ...state
            };
           }
           case actionTypes.POST_PROJECT_SUCCESS: {
           try {
           return {
            ...state,
            projectInsert: action.projectInsert,
           };
           } catch (error) {
           return {
            ...state,
            projectInsert: state.projectInsert,
           error
           };
           }
            }
           case actionTypes.POST_PROJECT_ERROR: {
           return {
            ...state,
            projectInsert: [],
           error: action.error
           };
           }
           default: {
            return state;
           }
           }
           }
           export function requestPutProjectReducer(state = initialState.projectUpdate, action) {
            
              switch (action.type) {
            
                case actionTypes.PUT_PROJECT: {
            
                  return {
            
                    ...state
            
                  };
            
                }
            
                case actionTypes.PUT_PROJECT_SUCCESS: {
            
                  try {
            
                    return {
            
                      ...state,
            
                      projectUpdate: action.projectUpdate,
            
                    };
            
                  } catch (error) {
            
                    return {
            
                      ...state,
            
                      projectUpdate: state.projectUpdate,
            
                      error
            
                    };
            
                  }
            
                }
            
                case actionTypes.PUT_PROJECT_ERROR: {
            
                  return {
            
                    ...state,
            
                    projectUpdate: [],
            
                    error: action.error
            
                  };
            
                }
            
                default: {
            
                  return state;
            
                }
            
              }
            
            }
  


           export function requestProjectDeleteReducer(state = initialState.projectDelete, action) {
            
              switch (action.type) {
            
                case actionTypes.DELETE_PROJECT: {
            
                  return {
            
                    ...state
            
                  };
            
                }
            
                case actionTypes.DELETE_PROJECT_SUCCESS: {
            
                  try {
            
                    return {
            
                      ...state,
            
                      projectDelete: action.projectDelete,
            
                    };
            
                  } catch (error) {
            
                    return {
            
                      ...state,
            
                      projectDelete: state.projectDelete,
            
                      error
            
                    };
            
                  }
            
                }
            
                case actionTypes.DELETE_PROJECT_ERROR: {
            
                  return {
            
                    ...state,
            
                    projectDelete: [],
            
                    error: action.error
            
                  };
            
                }
            
                default: {
            
                  return state;
            
                }
            
              }
            
            }
      
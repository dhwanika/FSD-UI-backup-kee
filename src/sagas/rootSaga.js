/*eslint-disable*/

import { all, fork } from 'redux-saga/effects';

import { watchGetTasks, watchGetParentTasks, watchPostTasks , watchPutTasks, watchDeleteTask, watchGetUsers,
  watchPostUsers, watchPutUser, watchDeleteUser, watchGetProjects, watchPostProjects, watchPutProject,
   watchDeleteProject} from './taskSagas';

 

export default function* rootSaga() {

  yield all([

    fork(watchGetTasks),
    fork(watchGetParentTasks),
    fork(watchPostTasks),
    fork(watchPutTasks),
    fork(watchDeleteTask),
    fork(watchGetUsers),
    fork(watchPostUsers),
    fork(watchPutUser),
    fork(watchDeleteUser),
    fork(watchGetProjects),
    fork(watchPostProjects),
    fork(watchPutProject),
    fork(watchDeleteProject)

  ]);

}
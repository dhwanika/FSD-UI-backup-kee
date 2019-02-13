import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import ViewTask from '../components/ViewTask';
import EditTask from '../components/EditTask';
import AddProject from '../components/AddProject';
import AddUser from '../components/AddUser';
import * as actions from '../actions/taskAction';

class Tasky extends Component {
    constructor(){
        super();
        this.state={
            addTask:false,
            viewTask:false,
            editGroup:false,
            taskDetails:{},
            addProject:false,
            addUser:false
        }
        this.selectTask=this.selectTask.bind(this);
    }
    componentDidMount(){
        const {getTask, getUser, getProject, getParentTask}=this.props;
        getTask();
        var name='';
        var dir='';
        var url='';
        getUser(url);
        getProject(url);
        getParentTask();
    }
    CallbackEdit = (task) => {
        debugger;
        this.setState({
            editGroup: true,
            taskDetails:task
        });
    }
    callbackSortContainer=(name,dir)=>{
        const {getUser}=this.props;
        var nameFinal=name;
        var directn=dir;
        var url=`?sort=${nameFinal}&sortDirection=${directn}`;
        getUser(url);
    }

    callbackSortProjectContainer=(name,dir)=>{
        const {getProject}=this.props;
        var nameFinal=name;
        var directn=dir;
        var url=`?sort=${nameFinal}&sortDirection=${directn}`;
        getProject(url);
    }
    selectTask=(event,type) =>{
        if(type==='add'){
        this.setState({
            addTask:true,
            viewTask:false,
            addUser:false,
            addProject:false
        });
    }
    else if(type==='view'){
        this.setState({
            addTask:false,
            viewTask:true,
            addUser:false,
            addProject:false
        });
    }
    else if(type==='proj'){
        this.setState({
            addTask:false,
            viewTask:false,
            addUser:false,
            addProject:true
        });
    }
    else if(type==='user'){
        this.setState({
            addTask:false,
            viewTask:false,
            addUser:true,
            addProject:false
        });
    }else{
this.setState({
            addTask:true,
            viewTask:false,
            addUser:false,
            addProject:false
        });
    }
    }
    render() {
const {taskList, userList, projectList, parentTaskList}= this.props;
        return (
            <div>
                <h1>Task Manager</h1>
               {!this.state.editGroup? 
               (<div className="row">
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'proj')}>Add Project</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'add')}>Add task</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'user')}>Add User</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'view')}>View task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
{this.state.addTask?<AddTask projectList={projectList} parentTaskList={parentTaskList} userList={userList}/>:this.state.viewTask?<ViewTask callbackContainer={this.CallbackEdit} taskList={taskList}/>:
this.state.addProject?<AddProject userList={userList} projectList={projectList} callbackSortProjectContainer={this.callbackSortProjectContainer}/>:this.state.addUser?<AddUser userList={userList} callbackSortContainer={this.callbackSortContainer}/>:''}
        </div>
        </div>
  </div>):
(<div className="row">
    <div className="col-md-12">
      <h2 onClick={event=>this.selectTask(event,'add')}>Edit Task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
<EditTask taskDetails={this.state.taskDetails} parentTaskList={parentTaskList} projectList={projectList} userList={userList}/>
        </div>
        </div>
  </div>)
               }
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
    taskList:state.taskList,
    userList:state.userList,
    projectList:state.projectList,
    parentTaskList:state.parentTaskList
});


const mapActionToProps = ({
});

export default connect(mapStateToProps, {getTask:actions.getTasksAction, getParentTask:actions.getParentTasksAction, getUser:actions.getUsersAction, 
    getProject:actions.getProjectsAction})(Tasky);


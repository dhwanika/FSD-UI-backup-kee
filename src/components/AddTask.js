import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import moment from 'moment';

class AddTask extends Component {
   constructor(){
        super();
        this.state={
            task:'',
            priority:'0',
            parentTask:'',
            startDate:'',
            endDate:'',
            user:'',
            displayUserPopup:false,
            userSelected:false,
            userSelectedValue:'',
            userId:'',
            error:false,
            validDate:true,
            project:'',
            displayProjectPopup:false,
            projectSelected:false,
            projectSelectedValue:'',
            projectId:'',
            parentTaskCheck:false,
            displayParentPopup:false,
            parentSelected:false,
            parentSelectedValue:''
        }
        this.taskChange=this.taskChange.bind(this);
        this.priorityChange=this.priorityChange.bind(this);
        this.parentTaskChange=this.parentTaskChange.bind(this);
        this.startDateChange=this.startDateChange.bind(this);
        this.endDateChange=this.endDateChange.bind(this);
        this.reset=this.reset.bind(this);
        this.addtask=this.addtask.bind(this);
        this.userChange=this.userChange.bind(this);
        this.projectChange=this.projectChange.bind(this);
        this.nameSelect=this.nameSelect.bind(this);
        this.projectSelect=this.projectSelect.bind(this);
        this.parentTaskSelect=this.parentTaskSelect.bind(this);
        this.findParent=this.findParent.bind(this);
        this.parentSelect=this.parentSelect.bind(this);
    }
    reset=()=>{
      this.setState({
            task:'',
            priority:'0',
            parentTask:'',
            startDate:'',
            endDate:'',
            validDate:false,
            error:false
      });
    }
    addtask=()=>{
      const regexDate=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const startDateCheck=regexDate.test(this.state.startDate);
const endDateCheck=regexDate.test(this.state.endDate);
var startDateFinal;
var endDateFinal;
if(startDateCheck && endDateCheck){
  this.setState({
    validDate:true
  })
startDateFinal=moment(this.state.startDate).format();
endDateFinal=moment(this.state.endDate).format();
}
debugger;
if(this.state.validDate && this.state.priority!=='' && this.state.task!==''){
  this.setState({
    error:false
  })
      var postDataOfTasks=
      {
        "priority": this.state.priority,
        "taskName": this.state.task,
        "startDate": startDateFinal,
        "endDate": endDateFinal,
        "parentTask": this.state.parentTask,
        "user": this.state.userId,
        "projectId":this.state.projectId,
        "parentFlag":this.state.parentTaskCheck
      };
      const {postTask}=this.props;
      postTask(postDataOfTasks);
window.location.reload();
    }
    else{
      this.setState({
        error:true
      })
    }
    }
    taskChange=(event) =>{
        this.setState({
            task:event.target.value
        });
    }
    priorityChange=(event) =>{
        this.setState({
            priority:event.target.value
        });
    }
    parentTaskChange=(event)=>{
      this.setState({
            parentTask:event.target.value
        });
    }
    startDateChange=(event)=>{
this.setState({
            startDate:event.target.value
        });
    }
    endDateChange=(event)=>{
this.setState({
            endDate:event.target.value
        });
    }
    findUser=(user)=>{
      this.setState({
          displayUserPopup:!this.state.displayUserPopup,
          userSelected:false
      });
    }
    findProject=(project)=>{
      this.setState({
          displayProjectPopup:!this.state.displayProjectPopup,
          projectSelected:false
      });
    }
    findParent=(parent)=>{
      this.setState({
          displayParentPopup:!this.state.displayParentPopup,
          parentSelected:false
      });
    }
    userChange=(event)=>{
      this.setState({
        user:event.target.value
      });
    }
    projectChange=(event)=>{
      this.setState({
        project:event.target.value
      });
    }

    parentTaskSelect=(event)=>{
      this.setState({
        parentTaskCheck: !this.state.parentTaskCheck
        });
    }
    nameSelect=(event)=>{
        this.setState({
            userSelected:true,
            userSelectedValue:event.target.value,
            user:event.target.value,
            userId:event.target.name
        })
    }
    projectSelect=(event)=>{
      this.setState({
          projectSelected:true,
          projectSelectedValue:event.target.value,
          project:event.target.value,
          projectId:event.target.name
      })
  }
  parentSelect=(event)=>{
    this.setState({
        parentSelected:true,
        parentSelectedValue:event.target.value,
        parentTask:event.target.value
    })
}
render() {
  debugger;
  const {projectList, parentTaskList, userList}=this.props;
  return (
      <React.Fragment>
      <Modal show={this.state.displayUserPopup} onHide={this.findUser}>
      <Modal.Header closeButton>
        <Modal.Title>User Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>List of available Users</h4>
        <div>
            {userList.userList.map((user) =>
            <React.Fragment>
            <input type="checkbox" name={user.empId} value={user.firstName} onClick={this.nameSelect}/>
            {user.empId} {user.firstName} {user.lastName}
            <br></br>
            </React.Fragment>
          )
          }
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.findUser}>Close</Button>
      </Modal.Footer>
    </Modal>

      <Modal show={this.state.displayProjectPopup} onHide={this.findProject}>
      <Modal.Header closeButton>
        <Modal.Title>Project Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>List of available Projects</h4>
        <div>
            {projectList.projectList.map((project) =>
            <React.Fragment>
            <input type="checkbox" name={project.projectId} value={project.projectName} onClick={this.projectSelect}/>
            {project.projectName}
            <br></br>
            </React.Fragment>
          )
          }
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.findProject}>Close</Button>
      </Modal.Footer>
    </Modal>

    <Modal show={this.state.displayParentPopup} onHide={this.findParent}>
      <Modal.Header closeButton>
        <Modal.Title>Parent Task Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>List of available Parent Tasks</h4>
        <div>
            {parentTaskList.parentTaskList.map((parent) =>
            <React.Fragment>
            <input type="checkbox" name={parent.parentId} value={parent.parentTaskName} onClick={this.parentSelect}/>
            {parent.parentTaskName}
            <br></br>
            </React.Fragment>
          )
          }
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.findParent}>Close</Button>
      </Modal.Footer>
    </Modal>
<div className="row paddingTop10px">
    <div className="col-md-12">
      Date format allowed: YYYY-MM-DD
    </div>
    </div>
    {this.state.error?<div className="row paddingTop10px">
    <div className="col-md-12 error">
      Error
    </div>
    </div>:''}
    <div className="row paddingTop10px">
      <div className="col-md-3">
      Project:
    </div>
    <div className="col-md-3">
    <input type="text" name="project" readOnly="true" value={this.state.project} onChange={this.projectChange}  className="addComponentWidth"/>
    </div>
    <div className="col-md-3">
    <button type="button" className="btn btn-primary"  onClick={() =>{this.findProject(this.state.project)}}>Search</button>
    </div>
    </div>
   <div className="row paddingTop10px">
    <div className="col-md-3">
      Task:
    </div>
    <div className="col-md-9">
      <input type="text" name="Task" value={this.state.task} onChange={this.taskChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-9">
    <input type="checkbox" name="dateCheck" value={this.state.parentTaskCheck} onClick={this.parentTaskSelect}/>
    <span className="paddingright3px">Parent Task</span>
    </div>
    </div>

    <div className="row paddingTop10px">
    <div className="col-md-3">
      Priority:
    </div>
    <div className="col-md-9 addComponentWidth displayInlineFlex">
      <span className="paddingright3px">0</span>
      <span>
      <input type="range"  value={this.state.priority} disabled= {this.state.parentTaskCheck}  className="addComponentSliderWidth" id="customRange1" min="0" max="30"  onChange={this.priorityChange}/>
      </span>
      <span className="paddingLeft3px">30</span>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      Parent Task:
    </div>
    <div className="col-md-3">
      <input type="text" name="ParentTask" readOnly="true" value={this.state.parentTask} disabled= {this.state.parentTaskCheck} onChange={this.parentTaskChange} className="addComponentWidth"/>
    </div>
    <div className="col-md-3">
    <button type="button" className="btn btn-primary"  onClick={() =>{this.findParent(this.state.parentTask)}}>Search</button>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      Start Date:
    </div>
    <div className="col-md-9">
      <input type="text" name="StartDate" value={this.state.startDate} disabled= {this.state.parentTaskCheck} onChange={this.startDateChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      End Date:
    </div>
    <div className="col-md-9">
      <input type="text" name="EndDate" value={this.state.endDate} disabled= {this.state.parentTaskCheck} onChange={this.endDateChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
      <div className="col-md-3">
      User:
    </div>
    <div className="col-md-3">
    <input type="text" name="user" readOnly="true" value={this.state.user} onChange={this.userChange}  className="addComponentWidth"/>
    </div>
    <div className="col-md-3">
    <button type="button" className="btn btn-primary"  onClick={() =>{this.findUser(this.state.user)}}>Search</button>
    </div>
    </div>
    <div className="row paddingTop10px">
      <div className="col-md-1"> 
    </div>
    <div className="col-md-1">
      <button type="button" className="btn btn-primary" onClick={()=>{this.addtask()}}>Add Task</button>
    </div>
    <div className="col-md-10">
      <button type="button" className="btn btn-primary" onClick={()=>{this.reset()}}>Reset</button>
    </div>
    </div>
   </React.Fragment> 
);
   }}

   const mapStateToProps = (state) => ({
    taskInsert:state.taskInsert
});
//export default AddTask;
export default connect(mapStateToProps, {postTask:actions.postTasksAction})(AddTask);

import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import moment from 'moment';

class EditTask extends Component {
   constructor(){
        super();
        this.state={
            task:'',
            priority:'0',
            parentTask:'',
            startDate:'',
            endDate:'',
            validDate:false,
            error:false,
            startDateCheck:false,
            endDateCheck:false,
            priorityCheck:false,
            taskCheck:false,
            parentTaskCheck:false,
            displayUserPopup:false,
            userSelected:false,
            userSelectedValue:'',
            userId:'',
            displayProjectPopup:false,
            projectSelected:false,
            projectSelectedValue:'',
            projectId:'',
            displayParentPopup:false,
            parentSelected:false,
            parentSelectedValue:''
        }
        this.taskChange=this.taskChange.bind(this);
        this.priorityChange=this.priorityChange.bind(this);
        this.parentTaskChange=this.parentTaskChange.bind(this);
        this.startDateChange=this.startDateChange.bind(this);
        this.endDateChange=this.endDateChange.bind(this);
        this.edittask=this.edittask.bind(this);
        this.findParent=this.findParent.bind(this);
    }
    edittask=(taskData)=>{
      var taskNameFinall=this.state.taskCheck?this.state.task:this.props.taskDetails.taskName;
      var taskPriorityFinall=this.state.priorityCheck?this.state.priority:this.props.taskDetails.priority;
      var parentTaskFinall=this.state.parentTaskCheck?this.state.parentTask:this.props.taskDetails.parentTask;
      var startDateFinall=this.state.startDateCheck?this.state.startDate:this.props.taskDetails.startDate;
      var endDateFinall=this.state.endDateCheck?this.state.endDate:this.props.taskDetails.endDate;
      debugger;
      //this.props.taskDetails
      const regexDate=/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const startDateCheck=regexDate.test(moment(startDateFinall).format('YYYY-MM-DD'));
const endDateCheck=regexDate.test(moment(endDateFinall).format('YYYY-MM-DD'));
var startDateFinal;
var endDateFinal;
if(startDateCheck && endDateCheck){
  this.setState({
    validDate:true
  })
startDateFinal=moment(startDateFinall).format();
endDateFinal=moment(endDateFinall).format();
}
const taskIdToUpdate=this.props.taskDetails.taskId;
if(this.state.validDate && taskPriorityFinall!=='' && taskNameFinall!=='' &&
parentTaskFinall!==''){
      var putDataOfTasks=
      {
        "taskId":taskIdToUpdate,
        "priority": taskPriorityFinall,
        "taskName": taskNameFinall,
        "startDate": startDateFinal,
        "endDate": endDateFinal,
        "parentTask": parentTaskFinall
      };
      const {putTask}=this.props;
      putTask(putDataOfTasks);
window.location.reload();
    }
    else{
      this.setState({
        error:true
      })
    }
    }
    taskChange=(event) =>{
      debugger;
        this.setState({
            task:event.target.value,
            taskCheck:true
        });
    }
    priorityChange=(event) =>{
        this.setState({
            priority:event.target.value,
            priorityCheck:true
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
    parentTaskChange=(event)=>{
      this.setState({
            parentTask:event.target.value,
            parentTaskCheck:true
        });
    }
    startDateChange=(event)=>{
this.setState({
            startDate:event.target.value,
            startDateCheck:true
        });
    }
    endDateChange=(event)=>{
this.setState({
            endDate:event.target.value,
            endDateCheck:true
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
render() {
    const {taskDetails, parentTaskList,projectList, userList}=this.props;
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
      <input type="text" name="Task" value={this.state.task!==''?this.state.task:taskDetails.taskName} onChange={this.taskChange} className="addComponentWidth"/>
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
      <input type="range"  value={this.state.priority!==0?this.state.priority:taskDetails.priority} className="addComponentSliderWidth" id="customRange1" min="0" max="30"  onChange={this.priorityChange}/>
      </span>
      <span className="paddingLeft3px">30</span>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      Parent Task:
    </div>
    <div className="col-md-3">
      <input type="text" name="ParentTask" value={this.state.parentTask!==''?this.state.parentTask:taskDetails.parentTask} onChange={this.parentTaskChange} className="addComponentWidth"/>
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
      <input type="text" name="StartDate" value={this.state.startDate!==''?
      moment(this.state.startDate).format('YYYY-MM-DD'):moment(taskDetails.startDate).format('YYYY-MM-DD')} onChange={this.startDateChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      End Date:
    </div>
    <div className="col-md-9">
      <input type="text" name="EndDate" value={this.state.endDate!==''?
      moment(this.state.endDate).format('YYYY-MM-DD'):moment(taskDetails.endDate).format('YYYY-MM-DD')} onChange={this.endDateChange} className="addComponentWidth"/>
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
      <button type="button" class="btn btn-primary" onClick={()=>{this.edittask(taskDetails)}}>Edit Task</button>
    </div>
    <div className="col-md-10">
      
    </div>
    </div>
   </React.Fragment> 
);
   }}

   const mapStateToProps = (state) => ({
    taskUpdate:state.taskUpdate
});

//export default EditTask;
export default connect(mapStateToProps, {putTask:actions.putTasksAction})(EditTask);
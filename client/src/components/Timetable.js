import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import jwt_decode from 'jwt-decode'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Agenda, ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule';



class Timetable extends Component {    
    constructor(){
     super()
     this.state = {
        poSH: 8,
        poSM: 0,
        poEH: 20,
        poEM: 0,
        wtSH: 7,
        wtSM: 30,
        wtEH: 20,
        wtEM: 30,
        srSH: 7,
        srSM: 0,
        srEH: 19,
        srEM: 0,
        czSH: 7,
        czSM: 0,
        czEH: 19,
        czEM: 0,
        ptSH: 11,
        ptSM: 0,
        ptEH: 17,
        ptEM: 30
     }
     this.onChange = this.onChange.bind(this)

     this.workingHours = [{
        Subject: ' ',
        StartTime: new Date(2020, 4, 25, 6, 0),
        EndTime: new Date(2020, 4, 25, this.state.poSH, this.state.poSM),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 25, this.state.poEH, this.state.poEM),
        EndTime: new Date(2020, 4, 25, 21, 0),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 26, 6, 0),
        EndTime: new Date(2020, 4, 26, this.state.wtSH, this.state.wtSM),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 26, this.state.wtEH, this.state.wtEM),
        EndTime: new Date(2020, 4, 26, 21, 0),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 27, 6, 0),
        EndTime: new Date(2020, 4, 27, this.state.srSH, this.state.srSM),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 27, this.state.srEH, this.state.srEM),
        EndTime: new Date(2020, 4, 27, 21, 0),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 28, 6, 0),
        EndTime: new Date(2020, 4, 28, this.state.czSH, this.state.czSM),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 28, this.state.czEH, this.state.czEM),
        EndTime: new Date(2020, 4, 28, 21, 0),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 29, 6, 0),
        EndTime: new Date(2020, 4, 29, this.state.ptSH, this.state.ptSM),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    },
    {
        Subject: ' ',
        StartTime: new Date(2020, 4, 29, this.state.ptEH, this.state.ptEM),
        EndTime: new Date(2020, 4, 29, 21, 0),
        IsBlock: 'true',
        RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    }]
        this.data = [{
            Id: 3,
            Subject: 'Naprawa',
            StartTime: new Date(2020, 4, 26, 13, 0),
            EndTime: new Date(2020, 4, 26, 14, 30),
            Description: 'Naprawa Czerwona Strzała - Maciej Piskorz',
        }
    ]}
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})

        this.workingHours = [{
            Subject: ' ',
            StartTime: new Date(2020, 4, 25, 6, 0),
            EndTime: new Date(2020, 4, 25, this.state.poSH, this.state.poSM),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 25, this.state.poEH, this.state.poEM),
            EndTime: new Date(2020, 4, 25, 21, 0),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 26, 6, 0),
            EndTime: new Date(2020, 4, 26, this.state.wtSH, this.state.wtSM),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 26, this.state.wtEH, this.state.wtEM),
            EndTime: new Date(2020, 4, 26, 21, 0),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 27, 6, 0),
            EndTime: new Date(2020, 4, 27, this.state.srSH, this.state.srSM),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 27, this.state.srEH, this.state.srEM),
            EndTime: new Date(2020, 4, 27, 21, 0),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 28, 6, 0),
            EndTime: new Date(2020, 4, 28, this.state.czSH, this.state.czSM),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 28, this.state.czEH, this.state.czEM),
            EndTime: new Date(2020, 4, 28, 21, 0),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 29, 6, 0),
            EndTime: new Date(2020, 4, 29, this.state.ptSH, this.state.ptSM),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        },
        {
            Subject: ' ',
            StartTime: new Date(2020, 4, 29, this.state.ptEH, this.state.ptEM),
            EndTime: new Date(2020, 4, 29, 21, 0),
            IsBlock: 'true',
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
        }]
    }

    onSubmit(e){
        e.preventDefault()

        /*
        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
        */
    }
    

    

    render() {
        return <div className="container">
                    <div className="row">
                       <div className="col-md-12 mt-5 mx-auto">
                        <h1 className="text-center">Harmonogram pracy warsztatu samochodowego</h1>
                        <h1 className="text-center">{jwt_decode(localStorage.userToken).name}</h1>
                            <ScheduleComponent eventSettings={{dataSource: this.workingHours.concat(this.data)}} >
                                <ViewsDirective>
                                    <ViewDirective option ='Day' displayName='Dzień'></ViewDirective>
                                    <ViewDirective option ='WorkWeek' startHour ='6:00' endHour='21:00' displayName='Tydzień' isSelected='true' readonly={false}></ViewDirective>
                                    <ViewDirective option ='Agenda' displayName='Harmonogam'></ViewDirective>
                                </ViewsDirective>
                                <Inject services={[Day, Week, WorkWeek, Agenda]}/>
                            </ScheduleComponent>
                            <div style={{'margin-top': '50px'}} className="col-sm-10 mx-auto">
                                    <h4 className="text-center">Godziny pracy warsztatu</h4>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>Od</td>
                                            <td>Do</td>
                                        </tr>
                                        <tr>
                                            <td>Poniedziałek</td>
                                            <td><input type="number" max='20' min='6'className="form-control" defaultValue={this.workingHours[0].EndTime.getHours()} style={{ width:"60px"}} name="poSH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[0].EndTime.getMinutes()} style={{ width:"60px"}} name="poSM" onChange={this.onChange}/></td>
                                            <td><input type="number" max='20' min='6'className="form-control"defaultValue={this.workingHours[1].StartTime.getHours()} style={{ width:"60px"}} name="poEH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[1].StartTime.getMinutes()} style={{ width:"60px"}} name="poEM" onChange={this.onChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>Wtorek</td>
                                            <td><input type="number" max='20' min='6'className="form-control" defaultValue={this.workingHours[2].EndTime.getHours()} style={{ width:"60px"}} name="wtSH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[2].EndTime.getMinutes()} style={{ width:"60px"}} name="wtSM" onChange={this.onChange}/></td>
                                            <td><input type="number" max='20' min='6'className="form-control"defaultValue={this.workingHours[3].StartTime.getHours()} style={{ width:"60px"}} name="wtEH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[3].StartTime.getMinutes()} style={{ width:"60px"}} name="wtEM" onChange={this.onChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>Środa</td>
                                            <td><input type="number" max='20' min='6'className="form-control" defaultValue={this.workingHours[4].EndTime.getHours()} style={{ width:"60px"}} name="srSH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[4].EndTime.getMinutes()} style={{ width:"60px"}} name="srSM" onChange={this.onChange}/></td>
                                            <td><input type="number" max='20' min='6'className="form-control"defaultValue={this.workingHours[5].StartTime.getHours()} style={{ width:"60px"}} name="srEH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[5].StartTime.getMinutes()} style={{ width:"60px"}} name="srEM" onChange={this.onChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>Czwartek</td>
                                            <td><input type="number" max='20' min='6'className="form-control" defaultValue={this.workingHours[6].EndTime.getHours()} style={{ width:"60px"}} name="czSH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[6].EndTime.getMinutes()} style={{ width:"60px"}} name="czSM" onChange={this.onChange}/></td>
                                            <td><input type="number" max='20' min='6'className="form-control"defaultValue={this.workingHours[7].StartTime.getHours()} style={{ width:"60px"}} name="czEH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[7].StartTime.getMinutes()} style={{ width:"60px"}} name="czEM" onChange={this.onChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>Piątek</td>
                                            <td><input type="number" max='20' min='6'className="form-control" defaultValue={this.workingHours[8].EndTime.getHours()} style={{ width:"60px"}} name="ptSH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[8].EndTime.getMinutes()} style={{ width:"60px"}} name="ptSM" onChange={this.onChange}/></td>
                                            <td><input type="number" max='20' min='6'className="form-control"defaultValue={this.workingHours[9].StartTime.getHours()} style={{ width:"60px"}} name="ptEH" onChange={this.onChange}/>:
                                            <input type="number" max='59' min='0'className="form-control"defaultValue={this.workingHours[9].StartTime.getMinutes()} style={{ width:"60px"}} name="ptEM" onChange={this.onChange}/></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style={{'margin-top': '10px', 'margin-bottom': '50px', display: 'flex', alignItems: 'center',justifyContent: 'center',}}>
                                
                                <ButtonGroup variant="contained" color="primary" size="large"> 
                                    <Button>Edytuj harmonogram</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>

        
    }

}

export default Timetable
import React, {Component} from "react";

export class Flexi extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.values=  [];
    }

    handleChange(event) {
        this.values[event.target.name] = event.target.value;
    }

    onSubmit(){
        this.props.onSubmit(this.values);
    }


    getComponentJSX(){
        let objects = [];
        this.props.config.items.map((object)=>{
            let item = null;
            if(object.type==='TextField'){
                 item = <div id={object.name} key={object.name}><label>{object.label}</label><input type="text" name={object.name} onChange={this.handleChange}/></div>;
            }else if(object.type==='DropDown'){
                let options = [];
                options.push(<option value="" id='select' key='select'> </option>);
                object.values.map((value,index)=>{
                    options.push(<option value={value} id={'select-'+index} key={'select-'+index}>{value}</option>);
                });
                 item  = <div id={object.name} key={object.name}><label>{object.label} </label><select name={object.name} onChange={this.handleChange}>{options}</select></div>;
            }
            objects.push(item);
        });
        console.log(this.props);
        if(this.props.onSubmit){
            objects.push(<div id="submitBtn" key="submitBtn" style={{textAlign:'center'}}><button onClick={this.onSubmit.bind(this)}>Save</button></div>);
        }

        console.log(objects);
        return objects;
    }

    render() {
        return (
            <div id="mainDiv" style={{'padding':'20px'}}>
                {this.getComponentJSX()}
            </div>
        )
    }
}
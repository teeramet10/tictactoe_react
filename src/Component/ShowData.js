import React, { Component } from 'react'
import '../'


/*global firebase */
function HeadTable() {
    return (
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
    )
}

class BodyTable extends Component {
    render() {
        return (
            <tr>
            
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
            </tr>
        )
    }
}

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: []
        }
    }
    componentDidMount() {
        // this.serverRequest=$.get("http://192.168.1.99/student/readstudent.php",(student)=>{
        //     this.setState({
        //         student: student

        //     })

        // })

        // const url="https://firebasestorage.googleapis.com/v0/b/student-5112b.appspot.com/o/student.json?alt=media&token=022694ba-8012-4613-b66a-4e70d278c4f3"
        // fetch(url)
        // .then(response=>response.json())
        // .then(json=>console.log(json.type))
        // .catch(error=> console.log("Error",error))

        const ref = firebase.database().ref('/student')
        ref.on('value', (snapshot) => {
            this.setState({ student: snapshot.val() })
            console.log(snapshot.val());
        });
    }



    render() {
        const row = [];
        this.state.student.forEach((students) => {
            row.push(<BodyTable key={students.id} name={students.name} id={students.id} />)
        }, this);

        return (
            <center><table style={{ margin: 10 }}>
                <HeadTable />
                <tbody>
                {row}
                </tbody>
            </table></center>
        )
    }
}

export default Table
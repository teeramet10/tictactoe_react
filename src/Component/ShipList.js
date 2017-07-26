import React, { Component } from 'react'
import Axios from 'axios'
import '../'
import ReactPaginate from 'react-paginate'

function HeadShipTable() {
    return (
        <tr >
            <th>#</th>
            <th> </th>
            <th>เลขทะเบียนเรือ</th>
            <th>ชื่อเรือ</th>
            <th>เจ้าของเรือ</th>
            <th>ขนาด</th>
            <th>ใบอนุญาติ 285</th>
            <th>พื้นที่ทำการประมง</th>
            <th>ห้องเวลาทำการประมง</th>
            <th>ชนิดเครื่องมือประมง</th>
            <th>เมืองท่าจดทะเบียน</th>
            <th>สถานะเรือ</th>

        </tr>
    )
}

class ShipList extends Component {



    getShipList(shiplist) {
        const row = []
        let value = this.props.startvalue
        shiplist.forEach((shiplists) => {
            row.push(<BodyShipTable shiplist={shiplists} value={value++} />)
        }, this)
        return row
    }



    render() {
        const shiplist = this.props.shiplist;
        return (

            <table className="shiptable">
                <HeadShipTable />
                {this.getShipList(shiplist)}
            </table>
        )
    }
}




class BodyShipTable extends Component {

    render() {

        const shiplist = this.props.shiplist

        return (
            <tr >
                <td>{this.props.value}</td>
                <td> </td>
                <td>{shiplist.shipRegisterNo}</td>
                <td>{shiplist.shipName}</td>
                <td>{shiplist.shipOwerName}</td>
                <td>{shiplist.tonGross}</td>
                <td>{shiplist.cer285Number}</td>
                <td>{shiplist.fishingAreaName}</td>
                <td>{shiplist.durationFishing}</td>
                <td>{shiplist.fishingGearKind}</td>
                <td>{shiplist.registerProvinceName}</td>
                <td>{shiplist.shipStatusName}</td>
            </tr>
        )
    }
}


class PageShipList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            offset: 1

        }

        // this.loadData = this.loadData.bind(this)
        this.onChangePage =this.onChangePage.bind(this)
    }

    componentDidMount() {
        this.loadData()

    }
    loadData() {
        let offset =this.state.offset
      
        Axios.get('http://164.115.27.232:9981/api/ShipList/' + offset + '/20?userKey=25')
            .then((response) => {
                this.setState({ items: response.data.data });

            })
            .catch((error) => {
                console.log(error);
            });
    }

  

    onChangePage(data) {
        let select = data.selected;
        let offset = Math.ceil(select * 20)
        console.log(offset);
        this.setState({ offset: offset })

        this.loadData()
    }

    render() {
        console.log(this.state.offset)
        return (
            <div className="commentBox">
                <div className="container-list">
                <ShipList shiplist={this.state.items} startvalue={ this.state.offset ==1? 1: this.state.offset+1} key={100} />
                </div>
                <div className="container-paginate">
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    pageCount={Math.ceil(this.state.items.length/20)}
                    breakClassName={"break-me"}
                    pageCount={20}
                    marginPagesDisplayed={5}
                    disableInitialCallback={false}
                    onPageChange={this.onChangePage}
                    containerClassName={"react-paginate"}
                    pageClassName={"react-paginate"}
                    activeClassName={"active"}/>
                </div>
            </div>
        )
    }
}

export default PageShipList
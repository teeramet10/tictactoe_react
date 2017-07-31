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
                <td>{shiplist.shipOwnerName}</td>
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
            offset: 1,
            totalrecord:1,
            filter: {
                shipname: '',
                shipregisterno: '',
                shipownername: ''
            }

        }

        this.onFilterText = this.onFilterText.bind(this)
        this.onChangePage = this.onChangePage.bind(this)
    }

    componentDidMount() {
        this.loadData()


    }
    loadData() {
        let offset = this.state.offset
        let filter = this.state.filter
        // let url='http://164.115.27.232:9981/api/ShipList/' + offset + '/20?userKey=25'
        let url = 'http://164.115.27.232:9981/api/ShipList/0/20?userKey=25&shipName=' +
            filter.shipname + '&shipRegisterNo=' + filter.shipregisterno + '&shipOwnerName=' + filter.shipownername
        console.log(url)
        Axios.get(url)
            .then((response) => {
                this.setState({ items: response.data.data, totalrecord:response.data.totalRecord});

            })
            .catch((error) => {
                console.log(error);
            });
    }

    onFilterText(value) {
        this.setState({ filter: value })
        this.loadData()
    }



    onChangePage(data) {
        let select = data.selected;
        let offset = Math.ceil(select * 20)
        console.log(offset);
        this.setState({ offset: offset })

        this.loadData()
    }

    render() {

        return (
            <div className="commentBox">
                <div className="container-list">
                    <SearchShip filter={this.state.filter} eventFilter={this.onFilterText} />
                    <ShipList shiplist={this.state.items} startvalue={this.state.offset == 1 ? 1 : this.state.offset + 1} key={100} />
                </div>
                <div className="container-paginate">
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakClassName={"break-me"}
                        pageCount={Math.ceil(this.state.totalrecord/20)}
                        marginPagesDisplayed={5}
                        disableInitialCallback={false}
                        onPageChange={this.onChangePage}
                        containerClassName={"react-paginate"}
                        pageClassName={"react-paginate"}
                        activeClassName={"active"} />
                </div>
            </div>
        )
    }
}

class SearchShip extends Component {
    constructor(props) {
        super(props)
        this.handleFilterText = this.handleFilterText.bind(this);
    }



    handleFilterText(e, name) {
        const filter = this.props.filter;
        filter[name] = e.target.value
        this.props.eventFilter(filter)
    }

    render() {

        return (
            <div className="formsearch">
                <input type="text" placeholder="ชื่อเรือ"
                    value={this.props.filter.shipname}
                    onChange={(e) => this.handleFilterText(e, 'shipname')} />
                <input type="number" placeholder="ทะเบียนเรือ"
                    value={this.props.filter.shipregisterno}
                    onChange={(e) => this.handleFilterText(e, 'shipregisterno')} />
                <input type="text" placeholder="ชื่อเจ้าของเรือ"
                    value={this.props.filter.shipownername}
                    onChange={(e) => this.handleFilterText(e, 'shipownername')} />

            </div>
        )
    }
}

export default PageShipList
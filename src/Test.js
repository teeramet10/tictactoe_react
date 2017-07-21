import React, { Component } from 'react';
import './App.css';
import './'

const data = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class FilterableProductTable extends Component {
     constructor(props){
         super(props);
         this.state={
             filter:'',
             inStock: false
         };
         this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
         this.handleInStockChange=this.handleInStockChange.bind(this);
    }

     handleFilterTextChange(filterText){
         this.setState({filter:filterText})
     }

     handleInStockChange(inStock){
         this.setState({inStock:inStock})
     }
     render() {

        
        return (
            <div className="App">
            <SearchBar filter={this.state.filter}
                    inStock ={this.state.inStock}
                    eventFilter={this.handleFilterTextChange}
                    eventCheckStock={this.handleInStockChange}/>
            <ProductTable products={data} 
                        filter ={this.state.filter} 
                        inStock={this.state.inStock}/>
            </div>
        );
    }
}


class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.handleFilterChange =this.handleFilterChange.bind(this);
        this.handleCheckStockBox=this.handleCheckStockBox.bind(this);
    }
    handleFilterChange(e){
        this.props.eventFilter(e.target.value);
    }

    handleCheckStockBox(e){
        this.props.eventCheckStock(e.target.checked);
    }
    
    render(){
       
        return(
            <div className="searchbox">
                <input type="text" placeholder="Search..." value={this.props.filter} onChange={this.handleFilterChange} />
               <p> <input type="checkbox" checked={this.props.inStock} onChange={this.handleCheckStockBox}/>Only show products in stock</p>
            </div>
        )
    }
}

class ProductTable extends Component{
    render(){
        const row=[];
        const products =this.props.products;
        let category ='';
        let namecat ='';
        
        products.forEach((product,index)=> {
            
            if((!product.stocked && this.props.inStock)|| (product.name.toUpperCase().indexOf(this.props.filter.toUpperCase())===-1) ){
                return;
            }

            if(products.category !== category){
                row.push(<ProductCategolyRow  category={product.category} key={product.category} />);   
                namecat=product.category;
            
            }
           
            if(namecat === product.category){
                row.push(<ProductRow name={product.name} price={product.price} stocked={product.stocked} key={index}/>);
                category=product.category;
            
                  
            }else if(namecat!== product.category){
                category='';
             
            }
            
        });
        
        

        return(
            <div >
                <table className="tablebox">
                    <td>Name</td>
                    <td>Price</td>
                    {row}
                   
                </table>
            </div>
        )
    }
}

class ProductCategolyRow extends Component{
    render(){
        return(
             <tr><td colSpan="2">{this.props.category}</td></tr>
          
        )
    }
}

class ProductRow extends Component{
   
    render(){

        let font;
        if(!this.props.stocked){
           font ="redfont";
        }else{
            font="blackfont";
        }

        return(
                    <tr><td className={font} >{this.props.name}</td>
                    <td className={font}>{this.props.price}</td></tr>
        )
    }
}

export default FilterableProductTable;
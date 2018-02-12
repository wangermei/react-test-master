import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const name = this.props.product.stocked ?
      this.props.product.name : <span style={{ color: 'red' }}>{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCateGory = null;
    console.log(this.props.inStockOnly);
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCateGory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCateGory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="搜索...."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.isStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {''}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: 'false',
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleStockInput = this.handleStockInput.bind(this);
  }
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText,
    });
  }
  handleStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleStockInput}
        />
        <ProductTable
          products={this.props.products}
          filter={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: 'true', name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: 'true', name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: 'false', name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: 'true', name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: 'false', name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: 'true', name: 'Nexus 7' },
];

class getJsonData extends React.Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    );
  }
}


export default getJsonData;


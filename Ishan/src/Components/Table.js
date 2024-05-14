import React, { Component } from 'react';
import './TableCSS.css';

const initialData = [
  {
    id: '#67',
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'Milk Concentrate Protein',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' }
        ]
      }
    ],
    address: '3761 Park Boulevard Way',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SAN FRANCISCO, CA',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '2 jars',
    application: 'Replace Ingredient',
    additionalInfo: 'Caller name test - different domain',
    documents: [
      { name: 'Tech requirements.pdf' },
      { name: 'Tech requirements.pdf' }
    ],
  },
  {
    id: '#68',
    priority: 'High',
    group: 'VitaPlus',
    products: [
      {
        name: 'Milk Concentrate Protein',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
          { concentration: '75%', flavour: 'Chocolate', weight: '500g', squirrels: '90g' }
        ]
      },
      {
        name: 'BCAA',
        variants: [
          { concentration: '48%', flavour: 'Apple', weight: '800g', squirrels: '60g' }
        ]
      },
      {
        name: 'Creatine',
        variants: [
          { concentration: '95%', flavour: 'Apple', weight: '1000g', squirrels: '60g' },
          { concentration: '82%', flavour: 'Chocolate', weight: '400g', squirrels: '80g' }
        ]
      }
    ],
    address: '3761 Park Boulevard Way',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SAN FRANCISCO, CA',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '2 jars',
    application: 'Replace Ingredient',
    additionalInfo: 'Caller name test - different domain',
    documents: [
      { name: 'Tech requirements.pdf' },
      { name: 'Tech requirements.pdf' }
    ],
  },
  {
    id: '#72',
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'BCAA',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      },
      {
        name: 'Omega 3',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '3761 Park Boulevard Way',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SAN FRANCISCO, CA',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '2 jars',
    application: 'Replace Ingredient',
    additionalInfo: 'Caller name test - different domain',
    documents: [
      { name: 'Tech requirements.pdf' },
      { name: 'Tech requirements.pdf' }
    ],
  },
  {
    id: '#76',
    priority: 'High',
    group: 'BIGYAY',
    products: [
      {
        name: 'Milk Concentrate Protein',
        variants: [
          { concentration: '75%', flavour: 'Vanilla', weight: '2500g', squirrels: '90g' },
        ]
      }
    ],
    address: '3761 Park Boulevard Way',
    createdOn: '11-02-2023',
    deadline: '17-02-2023',
    assignedTo: '#6363',
    deliveryTo: 'SAN FRANCISCO, CA',
    receiver: 'Amazing Brand Inc.',
    sampleSize: '2 jars',
    application: 'Replace Ingredient',
    additionalInfo: 'Caller name test - different domain',
    documents: [
      { name: 'Tech requirements.pdf' },
      { name: 'Tech requirements.pdf' }
    ],
  },
];

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData, // Track data in state
      selectedId: null, // Track the selected ID
    };
  }

  handleSelect = (id) => {
    this.setState((prevState) => ({
      selectedId: prevState.selectedId === id ? null : id, // Toggle selection
    }));
  };

  handleReject = (id) => {
    this.setState((prevState) => ({
      data: prevState.data.filter((rowData) => rowData.id !== id), // Remove the selected row
      selectedId: prevState.selectedId === id ? null : prevState.selectedId, // Clear selection if the rejected ID is selected
    }));
  };

  renderProductVariants(variants) {
    return (
      <table className="table table-bordered table-striped mt-2">
        <thead className="thead-dark">
          <tr className='ViewSection'>
            <th colSpan="4" className="text-center View">View all</th>
          </tr>
          <tr className='Title'>
            <th className="text-center">% concentration</th>
            <th className="text-center">Flavour</th>
            <th className="text-center">Weight</th>
            <th className="text-center">Squirrels</th>
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index}>
              <td className="text-center">{variant.concentration}</td>
              <td className="text-center">{variant.flavour}</td>
              <td className="text-center">{variant.weight}</td>
              <td className="text-center">{variant.squirrels}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderRows() {
    const { data, selectedId } = this.state;
    const filteredData = selectedId ? data.filter((rowData) => rowData.id === selectedId) : data;
    return filteredData.map((rowData, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {rowData.products.map((product, productIndex) => (
          <tr className="Main" key={productIndex}>
            {productIndex === 0 && (
              <>
                <td rowSpan={rowData.products.length}>{rowData.id}</td>
                <td rowSpan={rowData.products.length}>{rowData.priority}</td>
                <td rowSpan={rowData.products.length}>{rowData.group}</td>
              </>
            )}
            <td>{product.name}</td>
            <td>{this.renderProductVariants(product.variants)}</td>
            {productIndex === 0 && (
              <>
                <td rowSpan={rowData.products.length}>{rowData.address}</td>
                <td rowSpan={rowData.products.length}>{rowData.createdOn}</td>
                <td rowSpan={rowData.products.length}>{rowData.deadline}</td>
                <td rowSpan={rowData.products.length}>{rowData.assignedTo}</td>
                <td rowSpan={rowData.products.length}>{rowData.deliveryTo}</td>
                <td rowSpan={rowData.products.length}>{rowData.receiver}</td>
                <td rowSpan={rowData.products.length}>{rowData.sampleSize}</td>
                <td rowSpan={rowData.products.length}>{rowData.application}</td>
                <td rowSpan={rowData.products.length}>{rowData.additionalInfo}</td>
                <td rowSpan={rowData.products.length}>
                  {rowData.documents.map((doc, index) => (
                    <div key={index}>
                      <i className="bi bi-file-earmark" style={{ color: '#1A2C4B', backgroundColor: '#E8E9EA', borderRadius: '10px', fontSize: '10px', padding: '4px' }} /> {doc.name}
                    </div>
                  ))}
                </td>
                <td className='icons' rowSpan={rowData.products.length}>
                  <i className="bi bi-check-square-fill icon1" onClick={() => this.handleSelect(rowData.id)} style={{ cursor: 'pointer' }}></i><br />
                  <i className="bi bi-x-square-fill icon2" onClick={() => this.handleReject(rowData.id)} style={{ cursor: 'pointer' }}></i><br />
                  <i className="bi bi-three-dots icon3" style={{ cursor: 'pointer' }}></i>
                </td>
              </>
            )}
          </tr>
        ))}
      </React.Fragment>
    ));
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark text-center">
              <tr className='Header'>
                <th>ID</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Priority</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Group</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Product Name</th>
                <th>Variants</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Address</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Created on</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Deadline delivery</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Assigned to</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Delivery to</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Receiver</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Sample size</th>
                <th><i class="bi bi-chevron-expand"style={{ color: '#344054', fontSize: '15px' }}></i>Application</th>
                <th>Additional Info</th>
                <th>Documents</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

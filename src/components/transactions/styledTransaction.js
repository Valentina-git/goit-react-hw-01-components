import styled from 'styled-components';

const WrapperTransaction = styled.div`
  padding: 30px 0;
  .transaction-history {
    margin: 0 auto;
    border-collapse: collapse;
    box-shadow: 3px 3px 5px 4px #777777;
  }
  .transaction-history thead {
    background-color: teal;
    color: white;
  }
  .transaction-history th {
    padding: 5px 10px;
    width: 150px;
    text-align: center;
    text-transform: uppercase;
  }
  .transaction-history th:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
  .transaction-history tbody tr {
    background-color: #ffffff;
  }
  .transaction-history tbody tr:nth-child(even) {
    background-color: #dddddd;
  }
  .transaction-history td {
    padding: 5px 10px;
    width: 150px;
    text-align: center;
    color: #444444;
  }
  .transaction-history td:not(:last-child) {
    border-right: 1px solid #eeeeee;
  }
`;

export default WrapperTransaction;

import styled from 'styled-components';

const Wrapper = styled.div`
  .statistics {
    max-width: max-content;
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .title {
    padding: 25px;
    font-size: 17px;
    text-align: center;
    text-transform: uppercase;
  }
  .stat-list {
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 15px;
    color: #ffffff;
  }
  .label {
    margin-bottom: 5px;
    font-size: 12px;
  }
`;
export default Wrapper;

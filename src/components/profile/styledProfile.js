import styled from 'styled-components';

const WrapperProfile = styled.div`
  padding: 30px 0;
  .profile {
    overflow: hidden;
    width: 300px;
    margin: 0 auto;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: #eeeeee;
    box-shadow: 5px 5px 5px -3px #9b9b9b;
  }
  .description {
    padding: 10px;
  }
  .avatar {
    margin-bottom: 15px;
  }
  .name,
  .tag,
  .location {
    padding: 10px;
    color: #888888;
    text-align: center;
  }
  .name {
    color: #444444;
    font-weight: 700;
    font-size: 20px;
  }
  .stats {
    display: flex;
    justify-content: space-between;
  }
  .stats li {
    padding: 10px;
    border-top: 1px solid grey;
    width: calc(100% / 3);
    background-color: #dddddd;
  }
  .stats li:not(:last-child) {
    border-right: 1px solid grey;
  }
  .label,
  .quantity {
    display: block;
    text-align: center;
  }
`;
export default WrapperProfile;

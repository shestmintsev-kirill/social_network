import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unFollowAC } from '../../redux/users-reducer'
import * as axios from 'axios';
import React from 'react';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.data.items);
      this.props.setTotalUsersCount(res.data.totalCount);
    }).catch(err => { console.warn(err); });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(res => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.data.items);
    }).catch(err => { console.warn(err); });
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        < Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
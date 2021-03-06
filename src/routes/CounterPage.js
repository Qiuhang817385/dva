import React from 'react'
// rfc快捷键
import { connect } from 'dva'
import Counter from './../components/Counter';

import { createAdd, createAsyncAdd, createSub, createAdd1 } from './../actions/index';
function CounterPage (props) {
  // props当中的三个属性,history,match,location
  console.log(props);
  // props:diapatch,state
  // location history  match
  return (
    <div>
      CounterPage
      <br />
      <Counter {...props} />
    </div>
  )
}

//如果功能太多,可以把所有的功能下发给子组件
// 如果简单的功能，直接在路由里面就可以
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = {
  createAdd, createAsyncAdd, createSub, createAdd1
}

// 如果使用了第二个参数,那么将不会把dispatch传递过去给子组件
export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)

import React, { useState, useEffect, useCallback } from "react";
import { fetchPostdata } from "./actions/FetchPostData";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/*
Class Base Type

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchPostdata()}>Click Me</button>
      </div>
    );
  }
}
*/

const ButtonComponent = ({ fetchPostdata }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = useCallback(() => {
    setButtonClicked(true);
  }, []);

  useEffect(() => {
    if (buttonClicked) {
      fetchPostdata();
    }
  }, [buttonClicked, fetchPostdata]);

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

function matchDispatchProps(dispatch) {
  return bindActionCreators({ fetchPostdata: fetchPostdata }, dispatch);
}

export default connect(null, matchDispatchProps)(ButtonComponent);

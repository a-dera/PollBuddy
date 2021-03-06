import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./GroupPolls.scss";
import {MDBContainer, MDBIcon} from "mdbreact";

export default class GroupPolls extends Component {
  constructor(props) {//shouldn't this be dependent on the class???? thats why i included a constructor.
    super(props);
    //need to connect to backend probably here and then store data until it can be stored in state.
    //problem is there is no find in backend rn... frontend could do find but probably more resource intensive?
    this.state = {
      //need to put in groupID from backend
      //need to get other shit like pollIDs and their respective information...
    };
  }

  componentDidMount() {
    this.props.updateTitle("Polls");
  }

  render() {
    return (
      <MDBContainer className="page GroupPolls">
        <MDBContainer className="box">
          <p className="fontSizeLarge">
            CSCI 1200 - Data Structures
          </p>

          {/*TODO: arrows should represent active polls rather than mouse hover */}
          <ul>
            <li id="poll0">
              <a href={"/polls/:pollID/view"}>
                <MDBIcon className="GroupPolls-arrow" icon="long-arrow-alt-right" size="lg"/>
                <span>Lesson #1 - vectors</span>
              </a>
            </li>
            <li id="poll1">
              <a href={"/polls/:pollID/view"}>
                <MDBIcon className="GroupPolls-arrow" icon="long-arrow-alt-right" size="lg"/>
                <span>Lesson #2 - linked lists</span>
              </a>
            </li>
            <li id="poll2">
              <a href={"/polls/:pollID/view"}>
                <MDBIcon className="GroupPolls-arrow" icon="long-arrow-alt-right" size="lg"/>
                <span>Lesson #3 - sets</span>
              </a>
            </li>
            <li id="poll3">
              <a href={"/polls/:pollID/view"}>
                <MDBIcon className="GroupPolls-arrow" icon="long-arrow-alt-right" size="lg"/>
                <span>Lesson #4 - unordered maps</span>
              </a>
            </li>
          </ul>


        </MDBContainer>
      </MDBContainer>
    );
  }
}

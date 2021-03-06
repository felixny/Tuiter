import Javascript from '../Images/javascript.png';
import JQuery from '../Images/jquery.png';
import NodeJs from '../Images/nodejs.png';
import React from '../Images/react.png';


const PostSummaryItem = ({ posts }) => {

  if (posts.topic === '') {
    var topic = ('')
  } else {
    topic = (<mark className="wd-gray">{posts.topic}</mark>)
  }
  if (posts.id === '2') {
    var bordertop = <span className="wd-list-border-top"></span>
    var borderbot = <span className="wd-list-border-bottom"></span>
    var image = Javascript;
  } else if (posts.id === '3') {
    bordertop = <span className=" wd-list-border-top"></span>
    borderbot = <span className="wd-list-border-bottom"></span>
    var image = JQuery;
  } else if (posts.id === '4') {
    bordertop = <span className="wd-list-border-top"></span>
    var image = NodeJs;
  } else {
    borderbot = <span className="wd-list-border-bottom"></span>
    var image = React;
  }

  return (

    <ul className="row list-group ">
      {bordertop}
      <li className="list-group-item list-group-item-action d-flex justify-content-between ">

        <div className="flex-column wd-topic">
          {topic}
          <p><strong>{posts.userName}</strong> <i className="fa-solid fa-circle-check" /> <mark className="wd-gray "> - {posts.time}</mark>
          </p>
          <p className="wd-p-mid-col"><strong>{posts.title}</strong></p>

        </div>
        <div className="image-parent ">
          <img src={image} className="wd-img-icon" alt="icon" />
        </div>
      </li>
      {borderbot}
    </ul>

  );
}
export default PostSummaryItem;
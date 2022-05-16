import "./sidebar.css";
import {LineStyle,
  TrendingUp, 
  Timeline, 
  Person, 
  Category,
   AttachMoney, 
   Mail, 
   Feedback, 
   Message, 
   AccountBox,
  Error  } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Person className="sidebarIcon" />
              User
            </li>
            <li className="sidebarListItem">
              <Category className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transaction
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Team Members</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AccountBox className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Error className="sidebarIcon" />
              Reports
            </li>
            
          </ul>
        </div>
      </div>
      
    </div>
  );
}

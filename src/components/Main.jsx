import React, { Component } from "react";
import Contant from "./Contant";
import NavBar from "./NavBar";
import Sidebar from "./saidebar";

import Homeicon from "../icons/Home.png";
import Searchicon from "./../icons/Search.png";
import Notificationicon from "./../icons/Notification.png";
import Mainicon from "./../icons/mails.png";
import Savedicon from "./../icons/saved.png";
import Listsicon from "./../icons/lists.png";
import Profileicon from "./../icons/user.png";
import Moreicon from "./../icons/More.png";

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainContainer">
          <NavBar
            className="Navbar"
            items={[
              { title: "Home", link: "/", icon: Homeicon },
              { title: "Explore", link: "/explore", icon: Searchicon },
              {
                title: "Notifications",
                link: "/Notifications",
                icon: Notificationicon,
              },
              { title: "Messages", link: "/Messages", icon: Mainicon },
              { title: "Bookmarks", link: "/Booksmarks", icon: Savedicon },
              { title: "Llists", link: "/Lists", icon: Listsicon },
              { title: "Profile", link: "/Profile", icon: Profileicon },
              { title: "More", link: "/More", icon: Moreicon },
            ]}
          />
          <Contant />
          <Sidebar />
        </div>
      </>
    );
  }
}

export default Main;

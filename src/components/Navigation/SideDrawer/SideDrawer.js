import React from "react";
import classes from "./SideDrawer.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";
// import Modal from "../../UI/Modal/Modal";

const sideDrawer = props => {
  ///................................
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  // if (props.close) {
  //   attachedClasses = [classes.SideDrawer, classes.Close];
  // }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;

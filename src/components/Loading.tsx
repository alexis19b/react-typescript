import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    margin: theme.spacing(6)
  }

}));

export const Loading = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>

        <div className={classes.card}>
          <Skeleton variant="rect" width={330} height={30} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Skeleton variant="circle" width={40} height={40} style={{ margin: "10px" }} />
            <Skeleton variant="text" width={270} height={30} style={{ marginTop: "12px" }} />
          </div>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
        <div className={classes.card}>
          <Skeleton variant="rect" width={330} height={30} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Skeleton variant="circle" width={40} height={40} style={{ margin: "10px" }} />
            <Skeleton variant="text" width={270} height={30} style={{ marginTop: "12px" }} />
          </div>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>
        <div className={classes.card}>
          <Skeleton variant="rect" width={330} height={30} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Skeleton variant="circle" width={40} height={40} style={{ margin: "10px" }} />
            <Skeleton variant="text" width={270} height={30} style={{ marginTop: "12px" }} />
          </div>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </div>

      </div>
    </>
  );
};
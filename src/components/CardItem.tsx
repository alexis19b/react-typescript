import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
  Grid
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Users } from "../interfaces/users";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(2),


      },
    },
  })
);


interface PropsCard {
  us: Users,

}

export const CardItem = ({ us }: PropsCard) => {
  const classes = useStyles();
  return (

    <Box className={classes.root}>
      <Card>
        <CardHeader
          avatar={<Avatar>{us.name.charAt(0)}</Avatar>}
          title={us.username}
          subheader={us.name}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="h5">{us.name}</Typography>
        </CardContent>
        <CardActions>
          <Button>share</Button>
        </CardActions>
      </Card>
    </Box>

  );
};


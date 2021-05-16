import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import beach from '../../beach.jpg';
import world from '../../world.png';


const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
  },
  colorStrip1: {
    width: 200,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 22,
    marginLeft: 10,
  },
  colorStrip2: {
    width: 100,
    height: 10,
    backgroundColor: 'yellow',
    borderRadius: 22,
    marginLeft: 10,
  },
  colorStrip3: {
    width: 120,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 22,
    marginLeft: 10,
  },
  colorStrip4: {
    width: 210,
    height: 10,
    backgroundColor: 'purple',
    borderRadius: 22,
    marginLeft: 10,
  },
    colorStrip5: {
    width: 130,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 22,
    marginLeft: 10,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
    borderBottomStyle: 'solid',
  },
  media: {
    height: 140,
  },
  leftAlign: {
    marginRight: 0,
  },
  rightJustify: {
    marginLeft: 'auto',
  },
  rightAlign: {
    display: 'flex',
  },
  text: {
    marginLeft: 10,
  },
  world:{
    height: 300,
  },
}));

export default function Popular() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <SendOutlinedIcon fontSize='large' style={{fill: '#5bbfba'}}/>
        <h1 className={classes.text}>Popular Destinations & Packages</h1>
        <MoreVertOutlinedIcon className={classes.rightJustify} fontSize='large'/>
      </div>
      <div className={classes.container}>
        <div className={classes.leftAlign}>
          <Grid>
            <Grid >
              <div className={classes.demo}>
                <List>
                    <ListItem>
                      <ListItemText primary="Lorem ipsum dolor sit" />
                      <div className={classes.colorStrip1}></div>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Lorem ipsum dolor sit" />
                      <div className={classes.colorStrip2}></div>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Lorem ipsum dolor sit" />
                      <div className={classes.colorStrip3}></div>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Lorem ipsum dolor sit" />
                      <div className={classes.colorStrip4}></div>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Lorem ipsum dolor sit" />
                      <div className={classes.colorStrip5}></div>
                    </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <img src={world} alt='world' className={classes.world}/>
        </div>
        <div>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={beach}
                title="Lorem ipsum dolor sit amet dolor sit amet"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{color: '#5f6caf'}}>
                  Lorem ipsum dolor sit amet dolor sit amet
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                $500 PER NIGHT
              </Button>
              <Button size="small" color="primary">
                DETAILS
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  )
}
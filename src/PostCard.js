import React from 'react';
import {Card,Box, CardContent, Typography, CardActions, Button} from "@material-ui/core";

const PostCard = ({post}) => {


    const card = (
        <React.Fragment>
            <CardContent>
                <Typography style={{color:"#D2691E"}} variant="h5" component="div">{post.title}</Typography>
                <Typography style={{color:"#FFDAB9"}} sx={{ mb: 1.5 }} color="text.secondary">Author: {post.author}</Typography>
                <Typography  style={{color:"#FFDAB9"}} sx={{ mb: 1.5 }} color="text.primary">Points: {post.points}</Typography>
                <Typography  style={{color:"#FFC0CB"}} variant="h6" component="div">{post.objectID}</Typography>
            </CardContent>
            <CardActions>
                <Button></Button>
            </CardActions>
        </React.Fragment>
    )

    if(!post.title) return null;
    
    return(
        <Box pt={3} sx={{ minWidth: 275 }}>
      <Card style={{backgroundColor: "#228B22"}} variant="outlined">{card}</Card>
    </Box>
    )

};

export default PostCard;
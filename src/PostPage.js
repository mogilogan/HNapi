import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import PostCard from './PostCard.js';
import { withStyles } from "@material-ui/core/styles";

const BlueTextTypography = withStyles({
    root: {
      color: "#00008B",
      
    }
  })(Typography);

const Postpage = ()=>{


    // declaring state hooks
    const [posts,setposts]= useState([]);
    const [isLoading, setisLoading] = useState(true);
    const[query,setquery]=useState("");



    // fetching and handling data
    useEffect(()=>{
        setisLoading(true);
        const fetchData = async()=>{
            try{
                const url=`https://hn.algolia.com/api/v1/search?query=${query}`;
                const {data} =  await axios.get(url);
                const {hits} = data;
                setposts(hits);
                console.log(data);
             
            
            } catch(err){
                console.log(err);
              } finally{
                setisLoading(false);
                }
        };
        fetchData();
    },[query])
    
    
    const handleOnChange = (e) => {
        e.preventDefault()
        setquery(e.target.value)
        }
      
        
    return (
        <div>
           <Grid container direction="column" alignItems="center" justify="center">
            <BlueTextTypography variant="h3" >Hacker News</BlueTextTypography>

            <TextField 
            inputProps={{style: {fontSize: 20}}} 
            style ={{width: '60%'}} 
            InputLabelProps={{style: {fontSize: 20 ,color: "#FFFAF0"}}} 
            
            type="text" 
            justify="center" 
            name="title" 
            variant="outlined" 
            label="Search News" 
            value={query.query} 
            onChange={(e) => handleOnChange(e)} 
            />
            </Grid>
            
            <div className="Post-Container">
                {
                isLoading ? <p>Loading....</p> : posts.map((post) => (
                    <Grid>
                        <PostCard post={post} key={post.objectID}  />
                    </Grid>
                                     ))
                }

            </div>
        </div>
    )
}

export default Postpage;
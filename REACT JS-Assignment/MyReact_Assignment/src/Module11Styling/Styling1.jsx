import { AppBar, Badge, Box, Button, Card, CardContent, CardMedia, FormControl, IconButton, InputBase, InputLabel, MenuItem, MobileStepper, NativeSelect, Paper, Select, TextField, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AutoAwesome, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import GridViewIcon from '@mui/icons-material/GridView';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const images = [
  'img1.jpg',
  'img2.webp',
];
const cards = []

export default function StyleMUI() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box >
      <AppBar sx={{backgroundColor : 'white' }}>
        <Box>
        <Toolbar sx={{display : 'flex', justifyContent : 'space-around'}}>
          <Box>
          <img src='Logo.png' width={100}/>
          </Box>
          <Box sx={{display : 'flex',border : '1px solid black', color : 'black',width : '30%',height : '40px', textAlign : 'center', alignContent:'center'}}>
            <Typography sx={{padding : '7px 10px'}}>All Categori</Typography>
            <Box sx={{display : 'flex',justifyContent : 'space-between',width:'71%',paddingLeft : '20px',margin :'7px 0px'}}>
            <Typography>Search...</Typography>
            <Typography><SearchIcon /></Typography>
            </Box>
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small-label">Your Location</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
            >
          </Select>
          </FormControl>
          </Box>
          <Box>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{color : 'black'}}>
              <Badge badgeContent={0} showZero color="success">
                <LoopOutlinedIcon />
              </Badge>
              <Typography sx={{paddingLeft : '10px'}}>Compare</Typography>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{color : 'black'}}>
              <Badge badgeContent={0} showZero color="success">
                <FavoriteBorderOutlinedIcon />
              </Badge>
              <Typography sx={{paddingLeft : '10px'}}>Whislist</Typography>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{color : 'black'}}>
              <Badge badgeContent={0} showZero color="success">
                <ShoppingCartOutlinedIcon />
              </Badge>
              <Typography sx={{paddingLeft : '10px'}}>Cart</Typography>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" sx={{color : 'black'}}>
              <Badge  color="error">
                <PersonOutlineOutlinedIcon />
              </Badge>
              <Typography sx={{paddingLeft : '10px'}}>Account</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      
        </Box>
    <hr />
        <Box sx={{display : 'flex',justifyContent : 'space-between'}}>
        <Box sx={{'& button' : {margin : '10px 2px'}}}>
        <Button size='small' sx={{bgcolor : 'green ', color : 'white'}} variant='contained' startIcon={<GridViewIcon/>} endIcon={<KeyboardArrowDownIcon />}>Browse All Categories</Button>
        <Button size='small' sx={{color : 'black'}} startIcon={<WhatshotOutlinedIcon/>}>Hot Deals</Button>
        <Button size='small' sx={{color : 'green'}} variant="text">Home</Button>
        <Button size='small' sx={{color : 'black'}} variant="text">About</Button>
        <Button size='small' sx={{color : 'black'}} variant="text"endIcon={<KeyboardArrowDownIcon />}>Shop</Button>
        <Button size='small' sx={{color : 'black'}} variant="text" endIcon={<KeyboardArrowDownIcon />}>Vendors</Button>
        <Button size='small' sx={{color : 'black'}} variant="text" endIcon={<KeyboardArrowDownIcon />}>Mega Menu</Button>
        <Button size='small' sx={{color : 'black'}} variant="text" endIcon={<KeyboardArrowDownIcon />}>Blog</Button>
        <Button size='small' sx={{color : 'black'}} variant="text"endIcon={<KeyboardArrowDownIcon />}>hey</Button>
        <Button size='small' sx={{color : 'black'}} variant="text" endIcon={<KeyboardArrowDownIcon />}>Pages</Button>
        </Box>
        <Box sx={{display:'flex'}}>
        <IconButton><WhatshotOutlinedIcon/></IconButton>
        <Box >
          <Typography sx={{color:'green'}}>1900-888</Typography>
          <Typography sx={{color : 'black'}}>24/7 support Center</Typography>
        </Box>
        </Box>
        </Box>
      </AppBar>
      <br /> <br /> <br /> <br /> <br /> <br />
      <Box sx={{ height: '400px', width: '100%', position: 'relative' , paddingTop : "10px" }}>
        <Box
          sx={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${images[activeStep]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
      <Box sx={{display : 'flex',justifyContent : 'space-between', paddingTop : '40px'}}>
        <Box sx={{display : 'flex', justifyContent : 'space-between', width : '50%' , m : 1}}>
        <Typography  sx={{color : 'black', fontSize : '20px'}} variant="text">Featured Categories</Typography>
        <Typography>Coke & Milk</Typography>
        <Typography>Coffee & Teas</Typography>
        <Typography>Pet Foods</Typography>
        <Typography>Vegitables</Typography>
        </Box>
        <Box >
        <IconButton><ArrowCircleLeftIcon/><ArrowCircleRightIcon/></IconButton>
        </Box>
        </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2,padding:'10px 30px' }}>
      <Card sx={{ maxwidth: "150px", background: "rgb(248 233 231)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="apple.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Red Apple
          </Typography>
          <Typography variant="body2" color="text.secondary">
            21 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(251 242 234)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Snack.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Snack
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(252 244 253)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="tomato.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vegetables
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(241 249 226)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="strawberry.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            StrawBerry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(241 249 226)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Blackplum.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Black plum
          </Typography>
          <Typography variant="body2" color="text.secondary">
            24 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(255 252 235)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="custard.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Custard Apple
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(254 239 236)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="coffe.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coffee & Tea
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      {/* <Card sx={{ maxwidth: "150px", background: "rgb(235 253 234)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="headphone.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Headphone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(238 245 221)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="burger.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coke & Milk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            26 items
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxwidth: "150px", background: "rgb(253 250 233)" }}>
        <CardMedia
          sx={{ height: 140, width: "150px", objectFit: "contain" }}
          image="Kiwi.png"
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Organic Kiwi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            28 items
          </Typography>
        </CardContent>
      </Card> */}
    </Box>
  </Box>
  )
}

import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TextField, Box, InputAdornment } from "@mui/material";

import { ThreeDots } from  'react-loader-spinner'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import SearchIcon from '@mui/icons-material/Search';
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { AdminLayout } from '@layout';
import { useRouter } from 'next/router';
import { useState } from 'react'
// import List from "./Components/List";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const dummydata = [
    ["Adidas", "Adidas Voucher", "Adidas.png"],
    ["JBL", "Speaker", "JBL.png"],
    ["Steam", "GTA 6", "Steam.png"],

]
const dummydata2 = [
    ["MAC", "Cosmetic Voucher", "MAC.png"],
    ["Business Ticket", "Japan", "logo.png"],
    ["Swire Hotel", "Spa & Massage", "Steam.png"],

]

const errorlogs = [
    ["59 mins ago.","System","[ERROR] - AI model run on 18/11/23 encountered an error. Details:..."],
    ["3 hours ago","System","AI model run on 17/11/23 for Flight CX111. Performance metrics: Accuracy- 0.87, RMSE- 0.08"],
    ["2 days ago.","Mark Huston","[INFO] - Edited Customer List for Flight CX288 at 05:03:00PM, 16/11/23."],
    ["2 days ago.","Nancy Wong","[INFO] - Invited you to review Flight CX312 Customer List for Customer ID 31D."],
]

const names = [
    { id: "510892B000014EBB", text: 'SPENCE LAWRENCE' },
    { id: "510812B00000C8DD", text: 'ASHLEY MATTIE' },
    { id: "510892B000015B41", text: 'WU LONG' },
    { id: "510892B00001515E", text: 'LI WAI MAN' },
    { id: "510892B000015206", text: 'WONG KA WAI' },
    { id: "510892B0000153AC", text: 'CHEUNG TSZ WAH' },
    { id: "510812B00000CADE", text: 'LAM KWOK FAI' },
    { id: "510812B00000D1DE", text: 'ALLISON CHLOE' },
    { id: "510892B000015CB7", text: 'LEVY MARVIN' },
    { id: "510812B00000D2AF", text: 'BENNETT ELISABETH' },
    { id: "510812B00000D2D2", text: 'LEVY PATRICK' },
    { id: "510812B00000D2DD", text: 'LEVY ALEXANDRA' },
    { id: "510812B00000D429", text: 'CHUNG YAN CHING' },
    { id: "5109C2B00001E932", text: 'KARNIK RASHMI' },
    { id: "5109C2B00001E6BE", text: 'FANG JUNJIE' },
    { id: "510892B00001634B", text: 'XIA BINGWEN' },
    { id: "510892B00001637F", text: 'FANG LONGWEI' },
];

const Home: NextPage = () => {
    const [hide, setHide] = useState(true);
    const [prizes, setPrizes] = useState(dummydata);
    const [result, setresult] = useState();
    const [inputText, setInputText] = useState("");
    const [complete, setComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPrize, setSelectedPrize] = useState(-1);
    const [confirmed, setConfirmed] = useState(false);
    const handleSelectPrize = (index: number) => {
        setSelectedPrize(index);
    }
    const handleSearch = async () => {

        //sleep for 3 seconds
        setConfirmed(false);
        setIsLoading(true);
        setHide(false);
        setComplete(true);
        //         const response = await fetch('/api/overbook');
        // //make a get request to the backend
      
        // const result = await response.json();
        // console.log(result)
        // setresult(result);
        // make post request to backend
        // find the corresponding ID based on the name
        // send the ID to the backend
        const id = names.filter((el) => {
            //if no input the return the original
            if (inputText === '') {
                return el;
            }
            //return the item which contains the user input
            else {
                return el.text.toUpperCase().includes(inputText.toUpperCase());
            }
        }
        )[0].id;
        const response = await fetch('/api/overbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "id":  id}),
        });
        const result = await response.json();
        console.log(result)
        await new Promise(r => setTimeout(r, 3000)); // change this to send request
        setIsLoading(false);
        if (inputText === "KARNIK RASHMI") {
            setPrizes(dummydata2);
        }
        else {
            setPrizes(dummydata);
        }

      }
      const filteredData = names.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toUpperCase().includes(inputText.toUpperCase());
        }
    })
      const inputHandler = (e:any) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toUpperCase();
        setComplete(false);
        setInputText(lowerCase);
      };
    //   const typingHandler = () => {
    //     setTyping(true);
    //   }
    //   const notTypingHandler = () => {
    //         setTyping(false);
    //     }
    return (
    <AdminLayout>
        {/* make a search box in the center of the page */}

        <div style={{
            height:"0px",
            // the min height is the screen height minus the navbar height
            minHeight: "calc(100vh - 30vh)",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
                    <div className="d-flex justify-content-center mb-3" style={{fontSize:"30px"}}>
                Overbooked Passenger
            </div>
        <div className="d-flex justify-content-center" style={{marginBottom:"2vh"}}>
            <div className="col-6">
                <div className="input-group mb-3" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',

                }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', width:"100%"}}>

                    {/* <input type="text" className="form-control" placeholder="Full Name" aria-label="Recipient's username" aria-describedby="button-addon2" /> */}
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth onChange={inputHandler} value={inputText} InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{
                "&:hover": {
                    cursor: "pointer",
                },
              }}
              onClick={handleSearch}
              />
            </InputAdornment>
          ),
        }}/>
      </Box>
                </div>
                    {inputText==="" ||complete?<></> :(
                    <div
                    //make it overlay
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        // width: '100%',
                        height: '100%',
                        //make it transparent
                        // color grey
                        color: 'grey',
                    }}
                    >
            {/* {filteredData.map((item) => (
                <div key={item.id} >{item.text}</div>
            ))} */}
            {/* show 5 only */}
            {filteredData.slice(0, 5).map((item) => (
                <Box key={item.id} sx={{
                    // if hover then change the background color
                    //remove background color
                    '&:hover': {
                        cursor: 'pointer',
                        color: '#00645A',
                    },
                }}
                onClick={() => {
                    setInputText(item.text);
                    setPrizes(dummydata);
                    setComplete(true);
                }
                }
                >{item.text}</Box>
            ))}
        </div>
                    )
        }
                {/* <div style={{height:"120px"}}></div> */}
                {complete||(inputText=="") ? <></> :
                <div style={{height:"120px"}}></div>
        }


            </div>
        </div>

            {hide && !isLoading ? <></> :
                <>
                <div className="d-flex justify-content-center" style={{fontSize:"30px", paddingTop:"2vh", borderTop:"1px solid #dee2e6"}}>
                Offers
            </div>
            {confirmed?

            <div className="alert alert-success" role="alert">
            Success! The passenger has been successfully chosen the offer.
            </div>:<></>}
            {isLoading && !confirmed ?
        <div className="d-flex justify-content-center" style={{marginTop:"2vh"}}>

            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#4fa94d" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
             /> 
             </div>: 
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    {prizes.map((prize, index) => (
                        <div className="col-2 m-3"  style={{
                            // if selected then change the border color
                            borderRadius: "9px",
                        }}>
                            <div className="card text-center" style={{
                            border: index===selectedPrize?"3px solid #00645A":"none",

                            }}
                            onClick={(e)=>{
                                e.preventDefault()
                                handleSelectPrize(index)}
                            // prevent default
                        }
                            >
                                <div className="card-body">
                                    <div style={{
                                        height: "150px",
                                        width: "150px",
                                        margin: "auto",
                                        marginBottom: "20px",
                                    }}>
                                        <img src={'/assets/brand/'+prize[2]} height="100%" width="100%" style={{
                                        }} alt="CoreUI Logo" />
                                        </div>
                                    <h5 className="card-title" style={{
                                        marginTop: "20px",
                                    }}>{prize[0]}</h5>
                                    {/* <img src="/assets/brand/coreui2.png" alt="CoreUI Logo" width={180} height={35} className="me-2" /> */}
                                    {/* make like avatar logo */}
                                    <p className="card-text">{prize[1]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-2">
                        <div className="card text-center">
                        <div className="card-body">
                        <h5 className="card-title">Prize</h5>
                        <p className="card-text">Yiorgos Avraamu</p>
                        </div>
                        </div>
                    </div> */}
                </div>}
                    {selectedPrize===-1?<></>:
                    <Button variant="primary" style={{
                        marginTop: "2vh",
                        marginBottom: "2vh",
                        marginLeft: "auto",
                        marginRight: "2vh",
                        borderRadius: "9px",
                        backgroundColor: "#00645A",
                        borderColor: "#00645A",
                        fontSize: "12px",
                    }}
                    onClick={()=>{
                        setConfirmed(true)
                        setSelectedPrize(-1)
                    }
                    }
                    >Confirm</Button>
                    }
                </>}
                </div>
    </AdminLayout>
)}

export default Home

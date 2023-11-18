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
import { SiAdidas, SiJbl , SiDior} from "react-icons/si";
// import List from "./Components/List";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const dummydata = [
    ["Adidas", "Adidas Voucher", <SiAdidas style={{
        height: "150px",
        width: "150px",
    }}/>, "The $1000 Adidas voucher can be used in any Adidas store in Hong Kong. The voucher is valid for 1 year."],
    ["JBL", "Speaker", <SiJbl style={{
        height: "150px",
        width: "150px",
    }}/>, "The JBL speaker is a portable and waterproof speaker with a 10 hour battery life"],
    ["Asia Miles", "Wine", <img style={{
        height: "150px",
        width: "150px",
    }} src="/assets/brand/logo.png" alt="CoreUI Logo" />, "Any wine from the Asia Miles wine shop can be chosen. The wine will be delivered to the passenger's home."],

]
const dummydata2 = [
    ["Dior", "Dior Voucher", <SiDior style={{
        height: "150px",
        width: "150px",
    }}/>, "The $1000 Dior voucher can be used in any Dior store in Hong Kong. The voucher is valid for 1 year."],
    ["Business Ticket", "Japan", <img style={{
        height: "150px",
        width: "150px",
    }} src="/assets/brand/logo.png" alt="CoreUI Logo" />, "The business ticket can be used for any flight to Japan. The ticket is valid for 1 year."],
    ["Swire Hotel", "Spa & Massage", <img style={{
        height: "150px",
        width: "150px",
    }} src="/assets/brand/Swire.png" alt="CoreUI Logo" />, "The spa and massage voucher can be used in any Swire Hotel in Hong Kong. The voucher is valid for 1 year."],

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

        setConfirmed(false);
        setIsLoading(true);
        setHide(false);
        setComplete(true);

        const id = names.filter((el) => {
            if (inputText === '') {
                return el;
            }
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
        await new Promise(r => setTimeout(r, 3000));
        setIsLoading(false);
        if (inputText === "KARNIK RASHMI") {
            setPrizes(dummydata2);
        }
        else {
            setPrizes(dummydata);
        }
      }
      const filteredData = names.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el.text.toUpperCase().includes(inputText.toUpperCase());
        }
    })
      const inputHandler = (e:any) => {
        var lowerCase = e.target.value.toUpperCase();
        setComplete(false);
        setInputText(lowerCase);
      };
    return (
    <AdminLayout>

        <div style={{
            height:"0px",
            minHeight: "80vh",
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
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        height: '100%',
                        color: 'grey',
                    }}
                    >
            {filteredData.slice(0, 5).map((item) => (
                <Box key={item.id} sx={{
                    '&:hover': {
                        cursor: 'pointer',
                        color: '#00645A',
                    },
                }}
                onClick={() => {
                    setInputText(item.text);
                    setComplete(true);
                }
                }
                >{item.text}</Box>
            ))}
        </div>
                    )
        }
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
                            borderRadius: "9px",
                        }}>
                            <div className="card text-center" style={{
                            border: index===selectedPrize?"3px solid #00645A":"none",

                            }}
                            onClick={(e)=>{
                                e.preventDefault()
                                handleSelectPrize(index)}
                        }
                            >
                                <div className="card-body" style={{
                                        height: "370px",
                                }}>
                                    <div style={{
                                        height: "150px",
                                        width: "150px",
                                        margin: "auto",
                                        marginBottom: "20px",
                                    }}>
                                        {prize[2]}
                                        </div>
                                    <h5 className="card-title" style={{
                                        marginTop: "20px",
                                    }}>{prize[0]}</h5>
                                    <p className="card-text">{prize[1]}</p>
                                    <p className="card-text" style={{
                                        fontSize: "12px",
                                    }}>{prize[3]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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

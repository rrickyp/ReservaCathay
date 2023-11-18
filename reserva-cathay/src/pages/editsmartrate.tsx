import type { NextPage } from 'next'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
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
import React, { useState } from 'react'
import { AdminLayout } from '@layout';
import { useRouter } from 'next/router';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)



type PassengerData = [string, string, string, string, string, string];


const Home: NextPage = () => {
    const [dummydata,setDummyData] = useState<PassengerData[]>([
        ["Yiorgos Avraamu","12th November, 2023","Business Class","Rarely (12%)","Very Frequent (> than 50)","4.89"],
        ["Avram Tarasios","14th November, 2023","First Class","Rarely (7%)","Frequent (30-40)","4.94"],
        ["Quintin Ed","06th November, 2023","Economy Class","Frequent(67%)","Sometimes (10-20)","2.49"],
        ["Enéas Kwadwo","11th November, 2023","Premium Economy","Rarely(9%)","Often (20-30)","3.99"],
        ["Agapetus Tadeáš","25th October, 2023","Business Class","Sometimes(27%)","Frequent (30-40)","4.74"],
        ["Friderik Dávid","31st October, 2023", "Premium Economy", "Often (51%)","Sometimes (10-20)","3.25"],
        ["Yiorgos Avraamu","12th November, 2023","Business Class","Rarely (12%)","Very Frequent (> than 50)","4.89"],
        ["Avram Tarasios","14th November, 2023","First Class","Rarely (7%)","Frequent (30-40)","4.94"],
        ["Quintin Ed","06th November, 2023","Economy Class","Frequent(67%)","Sometimes (10-20)","2.49"],
        ["Enéas Kwadwo","11th November, 2023","Premium Economy","Rarely(9%)","Often (20-30)","3.99"],
        ["Agapetus Tadeáš","25th October, 2023","Business Class","Sometimes(27%)","Frequent (30-40)","4.74"],
        ["Friderik Dávid","31st October, 2023", "Premium Economy", "Often (51%)","Sometimes (10-20)","3.25"],
        ["Yiorgos Avraamu","12th November, 2023","Business Class","Rarely (12%)","Very Frequent (> than 50)","4.89"],
        ["Avram Tarasios","14th November, 2023","First Class","Rarely (7%)","Frequent (30-40)","4.94"],
        ["Quintin Ed","06th November, 2023","Economy Class","Frequent(67%)","Sometimes (10-20)","2.49"],
        ["Enéas Kwadwo","11th November, 2023","Premium Economy","Rarely(9%)","Often (20-30)","3.99"],
        ["Agapetus Tadeáš","25th October, 2023","Business Class","Sometimes(27%)","Frequent (30-40)","4.74"],
        ["Friderik Dávid","31st October, 2023", "Premium Economy", "Often (51%)","Sometimes (10-20)","3.25"],
        ["Yiorgos Avraamu","12th November, 2023","Business Class","Rarely (12%)","Very Frequent (> than 50)","4.89"],
        ["Avram Tarasios","14th November, 2023","First Class","Rarely (7%)","Frequent (30-40)","4.94"],
        ["Quintin Ed","06th November, 2023","Economy Class","Frequent(67%)","Sometimes (10-20)","2.49"],
        ["Enéas Kwadwo","11th November, 2023","Premium Economy","Rarely(9%)","Often (20-30)","3.99"],
        ["Agapetus Tadeáš","25th October, 2023","Business Class","Sometimes(27%)","Frequent (30-40)","4.74"],
        ["Friderik Dávid","31st October, 2023", "Premium Economy", "Often (51%)","Sometimes (10-20)","3.25"],
    ]);
    
    const errorlogs = [
        ["59 mins ago.","System","[ERROR] - AI model run on 18/11/23 encountered an error. Details:..."],
        ["3 hours ago","System","AI model run on 17/11/23 for Flight CX111. Performance metrics: Accuracy- 0.87, RMSE- 0.08"],
        ["2 days ago.","Mark Huston","[INFO] - Edited Customer List for Flight CX288 at 05:03:00PM, 16/11/23."],
        ["2 days ago.","Nancy Wong","[INFO] - Invited you to review Flight CX312 Customer List for Customer ID 31D."],
    ]
    
    const handleRemoveUser = (index: number) => {
        // Create a copy of the array
        const updatedData = [...dummydata];
        // Remove the user at the specified index
        updatedData.splice(index, 1);
        // Update the state with the modified array
        setDummyData(updatedData);
    };
    return (
        <AdminLayout>
        {/* header section for model 2 */}
    
        <div>
          <h4>AI Model 2 Info: SmartRate.AI</h4>
          <p style={{marginTop: "-8px", color: "red"}}>Model 2 currently running for CX1851 from 11:00:00AM, Today.</p>
        </div>
    
        <div className="table-responsive" style={{marginBottom: "20px"}}>
            <table className="table border mb-0">
            <thead className="table-light fw-semibold">
                <tr className="align-middle">
                {/* <th className="text-center">
                    <FontAwesomeIcon icon={faUsers} fixedWidth />
                </th> */}
                <th className="text-left">Flyer Name</th>
                <th className="text-left">Ticket Class</th>
                <th className="text-left">No-Show/Cancel</th>
                <th className="text-left">Flight Freq.</th>
                <th className="text-left">Priority Points (/5)</th>
                </tr>
            </thead>
            <tbody>
                {dummydata.map((data, index) => (
                <tr className="align-middle" key={index}>
                    <td>
                    <div>{data[0]}</div>
                    <div className="small text-black-50">
                        <span></span>Booked on: {data[1]}
                    </div>
                    </td>
                    <td>
                    <div className="clearfix">
                        <div className="float-start">
                        <div className="fw-semibold">{data[2]}</div>
                        </div>
                    </div>
                    </td>
                    <td className="text-left">{data[3]}</td>
                    <td className="text-left">{data[4]}</td>
                    <td>{data[5]}</td>
                    <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveUser(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    
        <div className="row">
          <div className="col-md-12">
            <Card>
              <Card.Header>
                Model Performance Summary by Flights
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-6">
                        <div className="border-start border-4 border-info px-3 mb-3">
                          <small className="text-black-50">
                            Customers Approved
                          </small>
                          <div className="fs-5 fw-semibold">2,121</div>
                        </div>
                      </div>
    
                      <div className="col-6">
                        <div className="border-start border-4 border-danger px-3 mb-3">
                          <small className="text-black-50">
                            Reschedules Performed
                          </small>
                          <div className="fs-5 fw-semibold">79</div>
                        </div>
                      </div>
    
                    </div>
    
                    <hr className="mt-0" />
    
                    <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          CX1851 (Recent)
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="danger"
                          now={12}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={88}
                        />
                      </div>
                    </div>
    
                    <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          CX2118 (Today)
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="danger"
                          now={18}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={84}
                        />
                      </div>
                    </div>
    
                    <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          CX1194 (Today)
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="danger"
                          now={23}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={77}
                        />
                      </div>
                    </div>
    
                    <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          CX1442 (Yesterday)
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="danger"
                          now={9}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={91}
                        />
                      </div>
                    </div>
    
                    <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          CX9851 (Yesterday)
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="danger"
                          now={12}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={88}
                        />
                      </div>
                    </div>
    
                    {/* <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          Saturday
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="primary"
                          now={53}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="danger"
                          now={82}
                        />
                      </div>
                    </div> */}
    
                    {/* <div className="row mb-4 align-items-center">
                      <div className="col-3">
                        <span className="text-black-50 small">
                          Sunday
                        </span>
                      </div>
                      <div className="col">
                        <ProgressBar
                          className="progress-thin mb-1"
                          variant="primary"
                          now={9}
                        />
                        <ProgressBar
                          className="progress-thin"
                          variant="danger"
                          now={69}
                        />
                      </div>
                    </div> */}
                  </div>
    
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-6">
                        <div className="border-start border-4 border-success px-3 mb-3">
                          <small className="text-black-50">
                            Flight Customer List Correction
                          </small>
                          <div className="fs-5 fw-semibold" style={{color: "red"}}>3 New Corrections</div>
                        </div>
                      </div>
    
                      {/* <div className="col-6">
                        <div className="border-start border-4 border-success px-3 mb-3">
                          <small className="text-black-50">
                            Organic
                          </small>
                          <div className="fs-5 fw-semibold">49,123</div>
                        </div>
                      </div> */}
    
                    </div>
    
                    <hr className="mt-0" />
    
                    <div className="mb-5">
                      <h6>Reason for Correction (Summarized):</h6>
                      <div className="mb-3">
                        <div className="d-flex mb-1">
                          <div>
                            Emergency
                          </div>
                          <div className="ms-auto fw-semibold">38.6%</div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="warning"
                          now={38.6}
                        />
                      </div>
    
                      <div className="mb-3">
                        <div className="d-flex mb-1">
                          <div>
                            Special Guest
                          </div>
                          <div className="ms-auto fw-semibold">22.5%</div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="success"
                          now={22.5}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex mb-1">
                          <div>
                            By Case Analysis
                          </div>
                          <div className="ms-auto fw-semibold">30.8%</div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="primary"
                          now={30.8}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="d-flex mb-1">
                          <div>
                            Model Error
                          </div>
                          <div className="ms-auto fw-semibold">8.1%</div>
                        </div>
                        <ProgressBar
                          className="progress-thin"
                          variant="info"
                          now={8.1}
                        />
                      </div>
                    </div>

                  </div>
                </div>
    
                <br />
    
              </Card.Body>
            </Card>
          </div>
        </div>
      </AdminLayout>
    )
}

export default Home

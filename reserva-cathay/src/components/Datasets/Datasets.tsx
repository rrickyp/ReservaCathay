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

interface Props {
    data: string[][];
    setDummyData: React.Dispatch<React.SetStateAction<string[][]>>;
  }
  
  const DataTable: NextPage<Props> = ({ data, setDummyData }) => {
    const handleRemoveUser = (index: number) => {
      // Create a copy of the array
      const updatedData = [...data];
      // Remove the user at the specified index
      updatedData.splice(index, 1);
      // Update the state with the modified array
      setDummyData(updatedData);
    };
  
    return (
      <div>
        <div className="table-responsive" style={{ marginBottom: "20px" }}>
          <table className="table border mb-0">
            <thead className="table-light fw-semibold">
              <tr className="align-middle">
                <th className="text-left">Flyer Name</th>
                <th className="text-left">Ticket Class</th>
                <th className="text-left">No-Show/Cancel</th>
                <th className="text-left">Flight Freq.</th>
                <th className="text-left">Priority Points (/5)</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr className="align-middle" key={index}>
                  <td>
                    <div>{rowData[0]}</div>
                    <div className="small text-black-50">
                      <span>Booked on: {rowData[1]}</span>
                    </div>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-start">
                        <div className="fw-semibold">{rowData[2]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-left">{rowData[3]}</td>
                  <td className="text-left">{rowData[4]}</td>
                  <td>{rowData[5]}</td>
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
      </div>
    );
  };
  
export default DataTable;
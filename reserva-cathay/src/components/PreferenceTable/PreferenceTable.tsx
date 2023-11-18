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
    columns:string[];
  }
  
  const DataTable: NextPage<Props> = ({ data , columns}) => {
    return (
      <div>
        <div className="table-responsive" style={{ marginBottom: "20px" }}>
          <table className="table border mb-0">
            <thead className="table-light fw-semibold">
              <tr className="align-middle">
                {columns.map((column,index)=><th key={index} className="text-center">{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, index) => (
                <tr className="align-middle" key={index}>
                  <td className="text-center">
                    {/* Disabled Dropdown for row[0] */}
                    <select className="form-select">
                        <option key={index} value={index.toString()}>
                          {rowData[0]}
                        </option>
                        <option key={index} value={index.toString()}>
                          {rowData[1]}
                        </option>
                        <option key={index} value={index.toString()}>
                          {rowData[2]}
                        </option>
                        <option key={index} value={index.toString()}>
                          {rowData[3]}
                        </option>
                        <option key={index} value={index.toString()}>
                          {rowData[4]}
                        </option>
                    </select>
                  </td>
                  <td className='text-center'>
                    <div>{rowData[5]}</div>

                  </td>
                  <td className='text-center'>{rowData[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default DataTable;
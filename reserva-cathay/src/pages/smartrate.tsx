import type { NextPage } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { AdminLayout } from "@layout";
import { useRouter } from "next/router";
import { Table } from "@components/Table";
import { useRef } from "react";

import { PreferenceTable } from "@components/PreferenceTable";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

interface Option {
  optionName: string;
  description: string;
  amount: string;
}

const Home: NextPage = () => {
  const optionNameRef = useRef<HTMLInputElement>(null);
  const optionDetailsRef = useRef<HTMLInputElement>(null);
  const optionPriceRef = useRef<HTMLInputElement>(null);

  const handleAddOption = () => {
    // Retrieve values from refs
    const optionName = optionNameRef.current?.value || "";
    const optionDetails = optionDetailsRef.current?.value || "";
    const optionPrice = optionPriceRef.current?.value || "";

    // Create a new option object
    const newOption = {
      optionName: optionName,
      description: optionDetails,
      amount: optionPrice,
    };

    // Update the state with the new option at the beginning of the array
    setRemunerationData((prevData) => [newOption, ...prevData]);
  };

  const [remunerationData, setRemunerationData] = useState<Option[]>([
    {
      optionName: "Flight Ticket to: ___________",
      description: "Specially tailored flight based on user preference",
      amount: "$2,000",
    },
    {
      optionName: "Cathay Shop Product Voucher for: ____",
      description: "Use customer interests; gift Cathay Shop products.",
      amount: "$1,000",
    },
    {
      optionName: "Concert Ticket for: ___________",
      description: "Concert tickets targetted for music lovers.",
      amount: "$1,500",
    },
    {
      optionName: "Spa/Relaxation Activity to: ___________",
      description: "Sponsored, personalized relaxation schemes",
      amount: "$1,500",
    },
    {
      optionName: "Carnival Tickets to: ___________",
      description: "Tailored tickets for what customers want.",
      amount: "$1,200",
    },
    {
      optionName: "Spa/Relaxation Activity to: ___________",
      description: "Sponsored, personalized relaxation schemes",
      amount: "$1,500",
    },
    {
      optionName: "Cathay Shop Product Voucher for: ____",
      description: "Use customer interests; gift Cathay Shop products.",
      amount: "$1,000",
    },
  ]);

  const onRemoveOption = (indexToRemove) => {
    const updatedData = remunerationData.filter(
      (_, index) => index !== indexToRemove
    );
    setRemunerationData(updatedData);
  };
  const [showAll, setShowAll] = useState<boolean>(false);
  const handleToggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <AdminLayout>
      <div>
        <h4>RewardRight AI Model Info:</h4>
        <p style={{ marginTop: "-8px" }}>
          Personalized compensation offers to elevate customer satisfaction.
        </p>
      </div>

      <div className="row mb-4">
        {(showAll ? remunerationData : remunerationData.slice(0, 5)).map(
          (option, index) => (
            <div
              className="col-md-4"
              key={index}
              style={{ marginBottom: "10px", marginLeft: "-10px" }}
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{option.optionName}</h5>
                  <p className="card-text">{option.description}</p>
                  <p className="card-text">Amount: {option.amount}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => onRemoveOption(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )
        )}
        <div
          className="col-md-4"
          key="empty-box"
          style={{ marginLeft: "-10px", marginTop: "5px" }}
        >
          <p style={{ marginLeft: "20px" }}>Make New Compensation Option</p>
          <div
            id="adderform"
            style={{ height: "60%", paddingTop: "0px", marginLeft: "20px" }}
          >
            <label>
              Compensation Name:
              <input
                ref={optionNameRef}
                style={{ marginLeft: "18px" }}
                type="text"
              />
            </label>
            <label>
              Compensation Details:
              <input
                ref={optionDetailsRef}
                style={{ marginLeft: "10px" }}
                type="text"
              />
            </label>
            <label>
              Compensation Price:
              <input
                ref={optionPriceRef}
                style={{ marginLeft: "23px" }}
                type="text"
              />
            </label>
            <br></br>
            <button
              type="button"
              style={{
                backgroundColor: "#0645A",
                borderRadius: "4px",
                color: "black",
                marginTop: "10px",
              }}
              onClick={handleAddOption}
            >
              Add Compensation
            </button>
          </div>
          {remunerationData.length > 5 && (
            <p
              style={{
                color: "#00645A",
                cursor: "pointer",
                marginLeft: "20px",
                marginTop: "8px",
              }}
              onClick={handleToggleShowAll}
            >
              {showAll ? "Show Less" : "Show More"}
            </p>
          )}
        </div>
      </div>
      <PreferenceTable
        columns={[
          "Passenger Data Input",
          "Models Selected Outputs",
          "Customers Selected Output",
        ]}
        data={[
          [
            "Nationalty:Indian",
            "Age:25",
            "Gender:Male",
            "Purpose:Tourism",
            "Interest:Shoes,Music,Partying",
            "Adidas Voucher, Speaker, Wine",
            "Wine",
          ],
          [
            "Nationalty:Chinese",
            "Age:37",
            "Gender:Female",
            "Purpose:Tourism",
            "Interest:Beauty,Travelling,Spa",
            "Cosmetic Voucher, Business Ticket to Japan, Spa & Message",
            "Business Ticket to Japan",
          ],
        ]}
      />
    </AdminLayout>
  );
};

export default Home;

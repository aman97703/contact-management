import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "../Charts/LineChart";
import CountryData from "../Charts/CountryData";

interface ConvertedData {
  key: string;
  value: any;
}

interface CountryWiseInter {
  [key: string]: any;
}

const Charts = () => {
  const [wordwideData, setWordWideData] = useState<ConvertedData[]>([]);
  const [contryWiseData, setCountryWiseData] = useState<CountryWiseInter[]>([]);
  const getWorldWideCases = async () => {
    await axios({
      url: `https://disease.sh/v3/covid-19/all`,
    }).then((res) => {
      const { data } = res;
      const convertedData = Object.entries(data).map(([key, value]) => {
        return { key, value };
      });
      setWordWideData(convertedData);
    });
  };
  const getCountyCases = async () => {
    await axios({
      url: `https://disease.sh/v3/covid-19/countries`,
    }).then((res) => {
      const { data } = res;

      setCountryWiseData(data);
    });
  };
  useEffect(() => {
    getWorldWideCases();
    getCountyCases();
  }, []);
  return (
    <div className="p-10">
      <div>
        <p className="text-lg font-bold mb-7"> World wide data</p>
        <LineChart data={wordwideData} />
      </div>
      <div className="mt-10">
        <p className="text-lg font-bold mb-7"> Country data</p>
        <CountryData data={contryWiseData} />
      </div>
    </div>
  );
};

export default Charts;

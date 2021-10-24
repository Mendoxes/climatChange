import React from 'react'
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import onyx from "../temp/1884.jpg"
import z1884 from "../temp/1884.jpg"
import legend from "../temp/legend.jpg"
import z1885 from "../temp/1885.jpg"
import z1886 from "../temp/1886.jpg";import z1887 from "../temp/1887.jpg";import z1888 from "../temp/1888.jpg";import z1889 from "../temp/1889.jpg";import z1890 from "../temp/1890.jpg";import z1891 from "../temp/1891.jpg";import z1892 from "../temp/1892.jpg";import z1893 from "../temp/1893.jpg";import z1894 from "../temp/1894.jpg";import z1895 from "../temp/1895.jpg";import z1896 from "../temp/1896.jpg";import z1897 from "../temp/1897.jpg";import z1898 from "../temp/1898.jpg";import z1899 from "../temp/1899.jpg";import z1900 from "../temp/1900.jpg";import z1901 from "../temp/1901.jpg";import z1902 from "../temp/1902.jpg";import z1903 from "../temp/1903.jpg";import z1904 from "../temp/1904.jpg";import z1905 from "../temp/1905.jpg";import z1906 from "../temp/1906.jpg";import z1907 from "../temp/1907.jpg";import z1908 from "../temp/1908.jpg";import z1909 from "../temp/1909.jpg";import z1910 from "../temp/1910.jpg";import z1911 from "../temp/1911.jpg";import z1912 from "../temp/1912.jpg";import z1913 from "../temp/1913.jpg";import z1914 from "../temp/1914.jpg";import z1915 from "../temp/1915.jpg";import z1916 from "../temp/1916.jpg";import z1917 from "../temp/1917.jpg";import z1918 from "../temp/1918.jpg";import z1919 from "../temp/1919.jpg";import z1920 from "../temp/1920.jpg";import z1921 from "../temp/1921.jpg";import z1922 from "../temp/1922.jpg";import z1923 from "../temp/1923.jpg";import z1924 from "../temp/1924.jpg";import z1925 from "../temp/1925.jpg";import z1926 from "../temp/1926.jpg";import z1927 from "../temp/1927.jpg";import z1928 from "../temp/1928.jpg";import z1929 from "../temp/1929.jpg";import z1930 from "../temp/1930.jpg";import z1931 from "../temp/1931.jpg";import z1932 from "../temp/1932.jpg";import z1933 from "../temp/1933.jpg";import z1934 from "../temp/1934.jpg";import z1935 from "../temp/1935.jpg";import z1936 from "../temp/1936.jpg";import z1937 from "../temp/1937.jpg";import z1938 from "../temp/1938.jpg";import z1939 from "../temp/1939.jpg";import z1940 from "../temp/1940.jpg";import z1941 from "../temp/1941.jpg";import z1942 from "../temp/1942.jpg";import z1943 from "../temp/1943.jpg";import z1944 from "../temp/1944.jpg";import z1945 from "../temp/1945.jpg";import z1946 from "../temp/1946.jpg";import z1947 from "../temp/1947.jpg";import z1948 from "../temp/1948.jpg";import z1949 from "../temp/1949.jpg";import z1950 from "../temp/1950.jpg";import z1951 from "../temp/1951.jpg";import z1952 from "../temp/1952.jpg";import z1953 from "../temp/1953.jpg";import z1954 from "../temp/1954.jpg";import z1955 from "../temp/1955.jpg";import z1956 from "../temp/1956.jpg";import z1957 from "../temp/1957.jpg";import z1958 from "../temp/1958.jpg";import z1959 from "../temp/1959.jpg";import z1960 from "../temp/1960.jpg";import z1961 from "../temp/1961.jpg";import z1962 from "../temp/1962.jpg";import z1963 from "../temp/1963.jpg";import z1964 from "../temp/1964.jpg";import z1965 from "../temp/1965.jpg";import z1966 from "../temp/1966.jpg";import z1967 from "../temp/1967.jpg";import z1968 from "../temp/1968.jpg";import z1969 from "../temp/1969.jpg";import z1970 from "../temp/1970.jpg";import z1971 from "../temp/1971.jpg";import z1972 from "../temp/1972.jpg";import z1973 from "../temp/1973.jpg";import z1974 from "../temp/1974.jpg";import z1975 from "../temp/1975.jpg";import z1976 from "../temp/1976.jpg";import z1977 from "../temp/1977.jpg";import z1978 from "../temp/1978.jpg";import z1979 from "../temp/1979.jpg";import z1980 from "../temp/1980.jpg";import z1981 from "../temp/1981.jpg";import z1982 from "../temp/1982.jpg";import z1983 from "../temp/1983.jpg";import z1984 from "../temp/1984.jpg";import z1985 from "../temp/1985.jpg";import z1986 from "../temp/1986.jpg";import z1987 from "../temp/1987.jpg";import z1988 from "../temp/1988.jpg";import z1989 from "../temp/1989.jpg";import z1990 from "../temp/1990.jpg";import z1991 from "../temp/1991.jpg";import z1992 from "../temp/1992.jpg";import z1993 from "../temp/1993.jpg";import z1994 from "../temp/1994.jpg";import z1995 from "../temp/1995.jpg";import z1996 from "../temp/1996.jpg";import z1997 from "../temp/1997.jpg";import z1998 from "../temp/1998.jpg";import z1999 from "../temp/1999.jpg";import z2000 from "../temp/2000.jpg";import z2001 from "../temp/2001.jpg";import z2002 from "../temp/2002.jpg";import z2003 from "../temp/2003.jpg";import z2004 from "../temp/2004.jpg";import z2005 from "../temp/2005.jpg";import z2006 from "../temp/2006.jpg";import z2007 from "../temp/2007.jpg";import z2008 from "../temp/2008.jpg";import z2009 from "../temp/2009.jpg";import z2010 from "../temp/2010.jpg";import z2011 from "../temp/2011.jpg";import z2012 from "../temp/2012.jpg";import z2013 from "../temp/2013.jpg";import z2014 from "../temp/2014.jpg";import z2015 from "../temp/2015.jpg";import z2016 from "../temp/2016.jpg";import z2017 from "../temp/2017.jpg";import z2018 from "../temp/2018.jpg";import z2019 from "../temp/2019.jpg";import z2020 from "../temp/2020.jpg"
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Numbers() {

    
const dataTemp=[
    1884,     -0.28,     -0.23,
    1885,     -0.33,     -0.26,
    1886,     -0.31,     -0.27,
    1887,     -0.36,     -0.27,
    1888,     -0.17,     -0.26,
    1889,     -0.10,     -0.25,
    1890,     -0.35,     -0.25,
    1891,     -0.22,     -0.25,
    1892,     -0.27,     -0.26,
    1893,     -0.31,     -0.26,
    1894,     -0.30,     -0.24,
    1895,     -0.22,     -0.22,
    1896,     -0.11,     -0.20,
    1897,     -0.11,     -0.18,
    1898,     -0.27,     -0.16,
    1899,     -0.17,     -0.17,
    1900,     -0.08,     -0.20,
    1901,     -0.15,     -0.23,
    1902,     -0.27,     -0.25,
    1903,     -0.37,     -0.28,
    1904,     -0.46,     -0.31,
    1905,     -0.26,     -0.33,
    1906,     -0.22,     -0.36,
    1907,     -0.38,     -0.37,
    1908,     -0.43,     -0.39,
    1909,     -0.48,     -0.41,
    1910,     -0.43,     -0.41,
    1911,     -0.44,     -0.39,
    1912,     -0.36,     -0.35,
    1913,     -0.34,     -0.32,
    1914,     -0.15,     -0.31,
    1915,     -0.14,     -0.30,
    1916,     -0.36,     -0.29,
    1917,     -0.46,     -0.29,
    1918,     -0.29,     -0.30,
    1919,     -0.28,     -0.29,
    1920,     -0.27,     -0.28,
    1921,     -0.19,     -0.26,
    1922,     -0.28,     -0.25,
    1923,     -0.27,     -0.24,
    1924,     -0.27,     -0.23,
    1925,     -0.22,     -0.22,
    1926,     -0.11,     -0.22,
    1927,     -0.22,     -0.21,
    1928,     -0.20,     -0.20,
    1929,     -0.36,     -0.19,
    1930,     -0.16,     -0.19,
    1931,     -0.09,     -0.19,
    1932,     -0.16,     -0.18,
    1933,     -0.29,     -0.17,
    1934,     -0.12,     -0.16,
    1935,     -0.20,     -0.14,
    1936,     -0.15,     -0.10,
    1937,     -0.02,     -0.06,
    1938,      0.00,     -0.01,
    1939,     -0.02,      0.03,
    1940,      0.13,      0.07,
    1941,      0.19,      0.09,
    1942,      0.07,      0.11,
    1943,      0.09,      0.10,
    1944,      0.20,      0.07,
    1945,      0.09,      0.04,
    1946,     -0.07,      0.00,
    1947,     -0.03,     -0.04,
    1948,     -0.11,     -0.07,
    1949,     -0.11,     -0.08,
    1950,     -0.17,     -0.08,
    1951,     -0.07,     -0.07,
    1952,      0.01,     -0.07,
    1953,      0.08,     -0.07,
    1954,     -0.13,     -0.07,
    1955,     -0.14,     -0.06,
    1956,     -0.19,     -0.05,
    1957,      0.05,     -0.04,
    1958,      0.06,     -0.01,
    1959,      0.03,      0.01,
    1960,     -0.03,      0.03,
    1961,      0.06,      0.01,
    1962,      0.03,     -0.01,
    1963,      0.05,     -0.03,
    1964,     -0.20,     -0.04,
    1965,     -0.11,     -0.05,
    1966,     -0.06,     -0.06,
    1967,     -0.02,     -0.05,
    1968,     -0.08,     -0.03,
    1969,      0.05,     -0.02,
    1970,      0.03,     -0.00,
    1971,     -0.08,      0.00,
    1972,      0.01,      0.00,
    1973,      0.16,     -0.00,
    1974,     -0.07,      0.01,
    1975,     -0.01,      0.02,
    1976,     -0.10,      0.04,
    1977,      0.18,      0.08,
    1978,      0.07,      0.12,
    1979,      0.17,      0.17,
    1980,      0.26,      0.20,
    1981,      0.32,      0.21,
    1982,      0.14,      0.22,
    1983,      0.31,      0.21,
    1984,      0.16,      0.21,
    1985,      0.12,      0.22,
    1986,      0.18,      0.24,
    1987,      0.32,      0.27,
    1988,      0.39,      0.31,
    1989,      0.27,      0.33,
    1990,      0.45,      0.33,
    1991,      0.40,      0.33,
    1992,      0.22,      0.33,
    1993,      0.23,      0.33,
    1994,      0.32,      0.34,
    1995,      0.45,      0.37,
    1996,      0.33,      0.40,
    1997,      0.46,      0.42,
    1998,      0.61,      0.44,
    1999,      0.38,      0.47,
    2000,      0.39,      0.50,
    2001,      0.54,      0.52,
    2002,      0.63,      0.55,
    2003,      0.62,      0.59,
    2004,      0.54,      0.61,
    2005,      0.68,      0.62,
    2006,      0.64,      0.63,
    2007,      0.66,      0.63,
    2008,      0.54,      0.64,
    2009,      0.66,      0.64,
    2010,      0.72,      0.65,
    2011,      0.61,      0.67,
    2012,      0.65,      0.70,
    2013,      0.68,      0.74,
    2014,      0.75,      0.79,
    2015,      0.90,      0.83,
    2016,      1.01,      0.88,
    2017,      0.92,      0.91,
    2018,      0.85,      0.95,
    2019,      0.98,      0.98,
    2020,      1.02,      1.01]
    
    let xx = [z1884,z1885,z1886,z1887,z1888,z1889,z1890,z1891,z1892,z1893,z1894,z1895,z1896,z1897,z1898,z1899,z1900,z1901,z1902,z1903,z1904,z1905,z1906,z1907,z1908,z1909,z1910,z1911,z1912,z1913,z1914,z1915,z1916,z1917,z1918,z1919,z1920,z1921,z1922,z1923,z1924,z1925,z1926,z1927,z1928,z1929,z1930,z1931,z1932,z1933,z1934,z1935,z1936,z1937,z1938,z1939,z1940,z1941,z1942,z1943,z1944,z1945,z1946,z1947,z1948,z1949,z1950,z1951,z1952,z1953,z1954,z1955,z1956,z1957,z1958,z1959,z1960,z1961,z1962,z1963,z1964,z1965,z1966,z1967,z1968,z1969,z1970,z1971,z1972,z1973,z1974,z1975,z1976,z1977,z1978,z1979,z1980,z1981,z1982,z1983,z1984,z1985,z1986,z1987,z1988,z1989,z1990,z1991,z1992,z1993,z1994,z1995,z1996,z1997,z1998,z1999,z2000,z2001,z2002,z2003,z2004,z2005,z2006,z2007,z2008,z2009,z2010,z2011,z2012,z2013,z2014,z2015,z2016,z2017,z2018,z2019,z2020];
    let xxx = [1884,1885,1886,1887,1888,1889,1890,1891,1892,1893,1894,1895,1896,1897,1898,1899,1900,1901,1902,1903,1904,1905,1906,1907,1908,1909,1910,1911,1912,1913,1914,1915,1916,1917,1918,1919,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
    const [count, setCount]=useState(0)
    const [state,setState]=useState(xx[count])
    const [year, setYear]=useState(xxx[count]) 
    const [bucket, setBucket]=useState(1884)
    

    const [mind,setMind]=useState("blue")
    
    //display year


    const [value,onChange]=useState(0);

    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })

    function add (){
setCount( count +1) 
setState(xx[count])
setYear(xxx[count])
setBucket(bucket+1) 
console.log(count)
    }

    const Temps = (value) => {

        for (let i = 0; i<=dataTemp.length+1; i++){
           if( dataTemp[i]== bucket){
             if (dataTemp[i+1]>=0){
               return <div style={{color:"white"}}>ANNUAL AVERAGE TEMPERATURE ANOMALY: <span style={{color:"orangered"}}>{dataTemp[i+1]}C</span></div>
             } else { 
                  return <div style={{color:"white"}}>ANNUAL AVERAGE TEMPERATURE ANOMALY: <span style={{color:"deepskyblue"}}>{dataTemp[i+1]}C</span></div>}
           }
        }
        // dataTemp.length
    }

    // setInterval(() => {
    //     setBucket(bucket+1) 
    // },1000);


    function minus (){
        setCount( count -1) 
        setState(xx[count])
        setYear(xxx[count]) 
        console.log(count)
        setBucket(bucket-1) 
            }

            function handleChange(value){
console.log(value)
            }
    return (
<div>
        <Fade dalay={500}><div className="brline">Temperature change:</div></Fade>
        <Fade dalay={700}> <div className="numbers">
            <div className="half">
            <img className="imageE" src={state}></img>
            <img className="imageE"  src={legend}></img>
            {/* <div className="year">{year}</div> */}
           <div className="butHolder"> <Button size="lg" variant="outline-success" onClick={add}>Add</Button>
           <div className="slider-parent">
      <input type="range" min="0" max="136" initialValue="1884" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                    setYear(xxx[radius]);
                    setState(xx[radius])
                   
                    console.log( typeof radius)
                    let kkkk = parseInt(radius);
                    let kkkkk = parseInt(radius) *3
                    console.log(kkkkk)
setCount(kkkk)
setBucket(dataTemp[kkkkk]) 
                
                  }}
      /> <div className="buble"> 
      {year}
      </div>
      
    </div>
    

            <Button size="lg" variant="outline-success" onClick={minus}>Decrease</Button>
            
            </div>
            <Temps></Temps>
            {/* <div class="slidecontainer">
  <input onChange={handleChange(value)} type="range" min="1884" max="2020" value={year} class="slider" id="myRange"></input>
</div> */}
  {/* <Slider  min="1880" value={year} /> */}

  
   
</div>
<div className="half2"> This graph illustrates the change in global surface temperature relative to 1951-1980 average temperatures. Nineteen of the hottest years have occurred since 2000, with the exception of 1998, which was helped by a very strong El Niño. The year 2020 tied with 2016 for the hottest year on record since record-keeping began in 1880 (source: NASA/GISS). This research is broadly consistent with similar constructions prepared by the Climatic Research Unit and the National Oceanic and Atmospheric Administration. </div>
            
        </div></Fade>
       
        </div>
    )
}

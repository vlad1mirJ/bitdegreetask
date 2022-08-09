const data = {
  ethLow: {
    imagePath: "https://etherscan.io/images/smile3.png",
    level: "Low",
    price: 13,
    basePrice: 13,
    priority: 0,
    usdPrice: 0.78,
    time: {
      min: 10,
      sec: 34,
    },
  },
  ethMid: {
    imagePath: "https://etherscan.io/images/smile2.png",
    level: "Avarage",
    price: 16,
    basePrice: 16,
    priority: 1,
    usdPrice: 0.82,
    time: {
      min: 3,
      sec: 0,
    },
  },
  ethHigh: {
    imagePath: "https://etherscan.io/images/smile1.png",
    level: "High",
    price: 22,
    basePrice: 19,
    priority: 3,
    usdPrice: 0.82,
    time: {
      min: 3,
      sec: 0,
    },
  },
}

export function deifinePriceClass() {
  data.level === "Low" ? "low" : data.level === "Avarage" ? "avarage" : "high"
}

export default data

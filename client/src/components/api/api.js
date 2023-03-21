import axios from "axios";

export function getData() {
  return axios.get("http://localhost:8000/api/home");
}
// {
//     "landingPageText":"Property Management Auckland",
//     "landingPageImg":"/images/image1.png",
//     "getInTouchSectionImg": "/images/image2.png" ,
//     "aboutMetroText": "Metro NZ is one of the top Auckland Property Management companies. All of our staff are property investors who have expert knowledge of the property market and your best interest in mind at all times. Check out our tailored services we offer as an Auckland property management company.",
//     "ourServiceImg":"/images/image5.png"
//   }
